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

// --- HELPERS: GENERADOR DE PUNTOS ALEATORIOS DENTRO DE POLÍGONOS ---

// 1. Obtener Bounding Box (Caja contenedora) del polígono
const getBoundingBox = (coordinates: any[]) => {
  const ring = coordinates[0];
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;

  ring.forEach((coord: number[]) => {
    if (coord[0] < minX) minX = coord[0];
    if (coord[0] > maxX) maxX = coord[0];
    if (coord[1] < minY) minY = coord[1];
    if (coord[1] > maxY) maxY = coord[1];
  });
  return { minX, maxX, minY, maxY };
};

// 2. Generar N puntos aleatorios que caigan ESTRICTAMENTE dentro del polígono
const generateRandomPointsInPolygon = (feature: any, count: number) => {
  const points: { lat: number; lng: number }[] = [];
  const bbox = getBoundingBox(feature.geometry.coordinates);
  let attempts = 0;

  // Intentamos generar puntos hasta completar la cantidad deseada o llegar a un límite de seguridad
  while (points.length < count && attempts < 100) {
    attempts++;
    // Generar coordenada aleatoria dentro de la caja
    const lng = bbox.minX + Math.random() * (bbox.maxX - bbox.minX);
    const lat = bbox.minY + Math.random() * (bbox.maxY - bbox.minY);

    // Verificar si el punto cae realmente dentro de la forma irregular
    const pt = point([lng, lat]);
    if (booleanPointInPolygon(pt, feature)) {
      points.push({ lng, lat });
    }
  }
  return points;
};

// --- ESTILOS DE CAPA (INVISIBLE) ---
// El polígono existe para detectar el mouse, pero es totalmente invisible.
const invisibleLayer: LayerProps = {
  id: "coverage-ghost",
  type: "fill",
  paint: {
    "fill-color": "#000000",
    "fill-opacity": 0, // <--- INVISIBLE
  },
};

const CoverageMap = ({ className }: { className?: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const mapStyle = isDark
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  const mapRef = useRef<MapRef>(null);
  const [selectedLocation, setSelectedLocation] = useState<{
    coords: [number, number];
    address: string;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState<"covered" | "uncovered">(
    "uncovered"
  );

  // --- GENERACIÓN DE NODOS (Memorizado para que no parpadeen al renderizar) ---
  const radarNodes = useMemo(() => {
    const nodes: any[] = [];

    COVERAGE_GEOJSON.features.forEach((feature, index) => {
      if (feature.geometry.type === "Polygon") {
        // Generamos entre 3 y 5 puntos por zona para que se vea poblado
        // Si la zona es muy pequeña, generamos menos
        const randomPoints = generateRandomPointsInPolygon(feature, 4);

        randomPoints.forEach((pt, i) => {
          nodes.push({
            id: `${index}-${i}`,
            lng: pt.lng,
            lat: pt.lat,
            color: feature.properties?.color || "#3b82f6",
            // Agregamos un delay aleatorio a cada punto para que no latan todos a la vez (efecto orgánico)
            delay: Math.random() * 2,
          });
        });
      }
    });
    return nodes;
  }, []);

  const handleSelectAddress = (coords: [number, number], address: string) => {
    setSelectedLocation({ coords, address });
    mapRef.current?.flyTo({ center: coords, zoom: 15, duration: 2000 });

    const pt = point(coords);
    let isInside = false;

    // Validación Lógica (Invisible)
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

        {/* 1. CAPA LÓGICA (Invisible, solo para hover/clicks) */}
        <Source id="coverage-data" type="geojson" data={COVERAGE_GEOJSON}>
          <Layer {...invisibleLayer} />
        </Source>

        {/* 2. NODOS VISUALES (Los puntos que laten) */}
        {radarNodes.map((node) => (
          <Marker
            key={node.id}
            longitude={node.lng}
            latitude={node.lat}
            anchor="center"
          >
            {/* Contenedor del punto con variables CSS para el color */}
            <div
              className="relative flex items-center justify-center w-12 h-12 pointer-events-none"
              style={{ "--node-color": node.color } as any}
            >
              {/* A. Onda Expansiva (Ping) */}
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
                style={{
                  backgroundColor: "var(--node-color)",
                  animationDelay: `${node.delay}s`, // Desfase para naturalidad
                }}
              />

              {/* B. Punto Central (Estático) */}
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5 shadow-lg border border-white/30"
                style={{ backgroundColor: "var(--node-color)" }}
              />
            </div>
          </Marker>
        ))}

        {/* Marker de Usuario (Búsqueda) */}
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

      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 pointer-events-none z-10">
        <div className="flex items-center gap-2 bg-white/50 dark:bg-black/50 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
            Fibra Óptica
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white/50 dark:bg-black/50 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
          <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
            Internet Satelital
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoverageMap;
