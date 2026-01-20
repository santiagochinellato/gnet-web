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

// --- HELPERS PARA EL CENTRO DEL RADAR ---
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

// --- ESTILOS DE CAPAS ---

// 1. CAPA DE RELLENO (La base de la señal)
const fillLayer: LayerProps = {
  id: "coverage-fill",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"], // Respeta tu color (verde/azul)
    "fill-opacity": 0.2, // Base muy suave
  },
};

// 2. CAPA DE "NIEBLA" (Oculta los ángulos)
// Truco: Una línea muy gorda y muy desenfocada del MISMO color que el relleno.
// Al fusionarse, el ojo no ve dónde termina el borde duro y empieza la curva suave.
const fogLayer: LayerProps = {
  id: "coverage-fog",
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": ["get", "color"],
    "line-width": 20, // MUY ANCHO para comerse las esquinas
    "line-blur": 15, // MUY DESENFOCADO para parecer gas/luz
    "line-opacity": 0.5, // Semitransparente para fusionarse
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
    "uncovered",
  );

  // --- ANIMACIÓN SINCRONIZADA ---
  useEffect(() => {
    const map = mapRef.current?.getMap();
    // No dependemos solo de style.load, iniciamos el loop y chequeamos dentro
    let animationFrameId: number;

    const animate = () => {
      if (map && map.getLayer("coverage-fill")) {
        const time = performance.now();
        // Ciclo lento de respiración (4 segundos)
        // Oscila la opacidad entre 0.15 y 0.35
        const opacity = 0.25 + 0.1 * Math.sin(time / 600);

        // Sincronizamos el relleno y la niebla
        map.setPaintProperty("coverage-fill", "fill-opacity", opacity);

        // La niebla pulsa un poco menos para mantener la forma
        if (map.getLayer("coverage-fog")) {
          map.setPaintProperty("coverage-fog", "line-opacity", opacity + 0.2);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Array vacío para correr siempre

  const handleSelectAddress = (coords: [number, number], address: string) => {
    setSelectedLocation({ coords, address });
    mapRef.current?.flyTo({ center: coords, zoom: 15, duration: 2000 });

    const pt = point(coords);
    let isInside = false;

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
        className,
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

        {/* 1. LAS ZONAS (Respetan limites, sin ángulos visibles) */}
        <Source id="coverage-data" type="geojson" data={COVERAGE_GEOJSON}>
          <Layer {...fillLayer} />
          <Layer {...fogLayer} />
        </Source>

        {/* 2. LOS CORAZONES DEL RADAR (Puntos centrales decorativos) */}
        {COVERAGE_GEOJSON.features.map((feature, index) => {
          if (feature.geometry.type !== "Polygon") return null;
          const center = getPolygonCenter(feature.geometry.coordinates);
          const color = feature.properties?.color || "#3b82f6"; // Fallback azul

          return (
            <Marker
              key={`radar-pulse-${index}`}
              longitude={center[0]}
              latitude={center[1]}
              anchor="center"
            >
              {/* Contenedor sin interacción (pointer-events-none) para no bloquear clicks */}
              <div
                className="relative flex items-center justify-center w-20 h-20 pointer-events-none"
                style={{ "--pulse-color": color } as any}
              >
                {/* A. Onda expansiva rápida */}
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
                  style={{ backgroundColor: "var(--pulse-color)" }}
                ></span>

                {/* B. Punto central brillante */}
                <span
                  className="relative inline-flex rounded-full h-3 w-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: "var(--pulse-color)" }}
                ></span>
              </div>
            </Marker>
          );
        })}

        {/* Marker de búsqueda */}
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

      {/* LEYENDA DE SERVICIOS */}
      <div className="absolute bottom-8 left-4 z-10 flex flex-col gap-2">
        {/* Referencias */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
            Referencias
          </h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Fibra Óptica
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Internet Aéreo
              </span>
            </div>
          </div>
        </div>

        {/* Guía de Uso (Solo Desktop) */}
        <div className="hidden md:block bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 max-w-[200px]">
          <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
            Navegación
          </h4>
          <ul className="text-[10px] text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-3">
            <li>
              Usa <b>Ctrl + Scroll</b> para hacer zoom en el mapa.
            </li>
            <li>Arrastrá para moverte.</li>
          </ul>
        </div>
      </div>

      <SearchControl onSelectAddress={handleSelectAddress} />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        status={coverageStatus}
        address={selectedLocation?.address || ""}
        coords={selectedLocation?.coords || [0, 0]}
      />
    </div>
  );
};

export default CoverageMap;
