"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Map, {
  Source,
  Layer,
  Marker,
  NavigationControl,
  MapRef,
  type LayerProps,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON, INITIAL_VIEW_STATE } from "@/lib/coverage-data";
import { SearchControl } from "./search-control";
import { LeadModal } from "./lead-modal";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// --- HELPERS: SUAVIZADO DE GEOMETRÍA (ALGORITMO DE CHAIKIN) ---
// Esto convierte esquinas rectas en curvas orgánicas iterativamente.
const smoothPolygonFeatures = (geojson: any, iterations = 3) => {
  const smoothGeo = JSON.parse(JSON.stringify(geojson)); // Deep copy

  const chaikin = (coords: number[][]) => {
    if (coords.length === 0) return [];
    const newCoords = [];
    // Mantenemos el polígono cerrado
    const len = coords.length - 1;
    for (let i = 0; i < len; i++) {
      const p0 = coords[i];
      const p1 = coords[i + 1];

      // Creamos 2 puntos nuevos al 25% y 75% del segmento
      // Esto "corta" la esquina recta
      newCoords.push([
        0.75 * p0[0] + 0.25 * p1[0],
        0.75 * p0[1] + 0.25 * p1[1],
      ]);
      newCoords.push([
        0.25 * p0[0] + 0.75 * p1[0],
        0.25 * p0[1] + 0.75 * p1[1],
      ]);
    }
    newCoords.push(newCoords[0]); // Cerrar polígono
    return newCoords;
  };

  smoothGeo.features = smoothGeo.features.map((feature: any) => {
    if (feature.geometry.type === "Polygon") {
      let coords = feature.geometry.coordinates[0];
      // Aplicamos el suavizado N veces (más iteraciones = más redondo)
      for (let i = 0; i < iterations; i++) {
        coords = chaikin(coords);
      }
      feature.geometry.coordinates = [coords];
    }
    return feature;
  });

  return smoothGeo;
};

// --- HELPER CENTRO ---
const getPolygonCenter = (coordinates: any[]) => {
  const ring = coordinates[0];
  if (!ring) return [0, 0];
  let x = 0,
    y = 0,
    k = 0;
  ring.forEach((coord: number[]) => {
    x += coord[0];
    y += coord[1];
    k++;
  });
  return [x / k, y / k] as [number, number];
};

// --- ESTILOS ---
// Solo Relleno. Sin bordes.
const fillLayer: LayerProps = {
  id: "coverage-fill",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"],
    "fill-opacity": 0.2,
    "fill-antialias": true, // Importante para que la curva se vea suave
  },
};

const CoverageMap = ({ className }: { className?: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";
  const mapRef = useRef<MapRef>(null);

  // 1. PRE-PROCESAMIENTO DE DATOS
  // Aplicamos el suavizado (5 iteraciones para que quede bien "Blob/Mancha")
  const smoothData = useMemo(
    () => smoothPolygonFeatures(COVERAGE_GEOJSON, 5),
    []
  );

  const [selectedLocation, setSelectedLocation] = useState<{
    coords: [number, number];
    address: string;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState<"covered" | "uncovered">(
    "uncovered"
  );

  const mapStyle = isDark
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  // --- ANIMACIÓN PULSO ---
  useEffect(() => {
    const map = mapRef.current?.getMap();
    let animationFrameId: number;

    const animate = () => {
      if (map && map.getLayer("coverage-fill")) {
        const time = performance.now();
        // Oscilación orgánica de opacidad
        const opacity = 0.2 + 0.1 * Math.sin(time / 1000);
        map.setPaintProperty("coverage-fill", "fill-opacity", opacity);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleSelectAddress = (coords: [number, number], address: string) => {
    setSelectedLocation({ coords, address });
    mapRef.current?.flyTo({ center: coords, zoom: 15, duration: 2000 });

    const pt = point(coords);
    let isInside = false;

    // Usamos el GeoJSON original (COVERAGE_GEOJSON) para la lógica exacta,
    // pero mostramos el smoothData visualmente.
    for (const feature of COVERAGE_GEOJSON.features) {
      if (feature.geometry.type === "Polygon") {
        if (booleanPointInPolygon(pt, feature as any)) {
          isInside = true;
          break;
        }
      }
    }
    setCoverageStatus(isInside ? "covered" : "uncovered");
    setModalOpen(true);
  };

  return (
    <div
      className={cn(
        "relative w-full h-[calc(100vh-64px)] bg-slate-100 dark:bg-slate-900 overflow-hidden",
        className
      )}
    >
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW_STATE}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        attributionControl={false}
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* 1. VISUALIZACIÓN ORGÁNICA (Datos suavizados) */}
        <Source id="coverage-data-visual" type="geojson" data={smoothData}>
          <Layer {...fillLayer} />
        </Source>

        {/* 2. RADARES */}
        {COVERAGE_GEOJSON.features.map((feature, index) => {
          if (feature.geometry.type !== "Polygon") return null;
          const center = getPolygonCenter(feature.geometry.coordinates);
          const color = feature.properties?.color || "#3b82f6";

          return (
            <Marker
              key={`radar-${index}`}
              longitude={center[0]}
              latitude={center[1]}
              anchor="center"
            >
              <div
                className="relative flex items-center justify-center w-32 h-32 pointer-events-none"
                style={{ "--pulse-color": color } as any}
              >
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"
                  style={{ backgroundColor: "var(--pulse-color)" }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-4 w-4 shadow-[0_0_20px_2px_rgba(0,0,0,0.3)] border-2 border-white/20"
                  style={{ backgroundColor: "var(--pulse-color)" }}
                ></span>
              </div>
            </Marker>
          );
        })}

        {/* Búsqueda */}
        {selectedLocation && (
          <Marker
            longitude={selectedLocation.coords[0]}
            latitude={selectedLocation.coords[1]}
            anchor="bottom"
          >
            <div className="relative flex flex-col items-center group">
              <MapPin className="w-10 h-10 text-[var(--color-primary)] drop-shadow-xl fill-white dark:fill-slate-900 animate-bounce" />
              <div className="w-3 h-1 bg-black/30 rounded-full blur-[2px] group-hover:w-5 transition-all" />
            </div>
          </Marker>
        )}
      </Map>

      <SearchControl onSelectAddress={handleSelectAddress} />
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        status={coverageStatus}
        address={selectedLocation?.address || ""}
      />
    </div>
  );
};

export default CoverageMap;
