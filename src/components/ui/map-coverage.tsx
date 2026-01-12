"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";
import { Map, Source, Layer, NavigationControl } from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

// He convertido tus KMLs a este objeto GeoJSON.
// Notá la propiedad "tipo" que agregué a cada feature para controlar el color.
const coverageData = {
  type: "FeatureCollection",
  features: [
    // Zona 1: Aire (Barrio Las Victorias / Este aprox)
    {
      type: "Feature",
      properties: { name: "Cobertura Aire 1", type: "aire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.300364, -41.146496],
            [-71.288673, -41.13888],
            [-71.311976, -41.136502],
            [-71.313083, -41.145009],
            [-71.300364, -41.146496],
          ],
        ],
      },
    },
    // Zona 2: Aire (Centro / Belgrano aprox)
    {
      type: "Feature",
      properties: { name: "Cobertura Aire 2", type: "aire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.308471, -41.149779],
            [-71.305738, -41.150086],
            [-71.304858, -41.145993],
            [-71.31309, -41.145141],
            [-71.312807, -41.146892],
            [-71.315353, -41.151482],
            [-71.31419, -41.151553],
            [-71.308471, -41.149779],
          ],
        ],
      },
    },
    // Zona 3: Aire (San Francisco / Este)
    {
      type: "Feature",
      properties: { name: "Cobertura Aire 3", type: "aire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.26816, -41.146764],
            [-71.276804, -41.153021],
            [-71.270073, -41.157527],
            [-71.262344, -41.158466],
            [-71.252038, -41.159967],
            [-71.249711, -41.159028],
            [-71.25578, -41.142384],
            [-71.260765, -41.142697],
            [-71.26816, -41.146764],
          ],
        ],
      },
    },
    // Zona 4: FIBRA OPTICA (La zona verde en tu KML)
    {
      type: "Feature",
      properties: { name: "Zona Fibra Óptica", type: "fibra" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.321586, -41.13259],
            [-71.322358, -41.137318],
            [-71.316285, -41.139974],
            [-71.313422, -41.139393],
            [-71.311439, -41.135827],
            [-71.296681, -41.137236],
            [-71.29591, -41.13624],
            [-71.288201, -41.133834],
            [-71.321586, -41.13259],
          ],
        ],
      },
    },
    // Zona 5: Aire (Cerca de la costa)
    {
      type: "Feature",
      properties: { name: "Cobertura Aire 4", type: "aire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-71.277156, -41.135185],
            [-71.260591, -41.134053],
            [-71.258926, -41.130054],
            [-71.276949, -41.131014],
            [-71.277156, -41.135185],
          ],
        ],
      },
    },
  ],
};

// Estilo dinámico: Si type == 'fibra' usa verde, si no (aire) usa azul.
const layerStyle: any = {
  id: "data-layer",
  type: "fill",
  paint: {
    "fill-color": [
      "match",
      ["get", "type"],
      "fibra",
      "#10b981", // Verde esmeralda para Fibra
      "aire",
      "#3b82f6", // Azul para Aire
      "#cccccc", // Color por defecto si no coincide
    ],
    "fill-opacity": 0.4,
    "fill-outline-color": [
      "match",
      ["get", "type"],
      "fibra",
      "#047857",
      "aire",
      "#1d4ed8",
      "#666666",
    ],
  },
};

export default function MapaCobertura() {
  const [hoverInfo, setHoverInfo] = React.useState<any>(null);
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const mapStyle = isDark
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  const onHover = React.useCallback((event: any) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];

    // If hovering over a feature, set content locally
    // Otherwise clear it
    setHoverInfo(
      hoveredFeature && hoveredFeature.properties
        ? {
            feature: hoveredFeature,
            x,
            y,
          }
        : null
    );
  }, []);

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-800 relative group">
      <Map
        initialViewState={{
          longitude: -71.3,
          latitude: -41.144,
          zoom: 12.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        attributionControl={false}
        interactiveLayerIds={["data-layer"]}
        onMouseMove={onHover}
        maxZoom={15}
        minZoom={10}
        cursor={hoverInfo ? "pointer" : "default"} // Change cursor on hover
        cooperativeGestures={true}
      >
        <NavigationControl position="top-right" />

        <Source id="cobertura-data" type="geojson" data={coverageData as any}>
          {/* Main Fill Layer */}
          <Layer
            {...layerStyle}
            // Highlight effect logic could go here if using state-based styling,
            // but simpler is to use a separate line layer or opacity dependent on feature state
            // For now we stick to simple fill.
          />
          {/* Outline Layer for cleaner look */}
          <Layer
            id="data-outline"
            type="line"
            paint={{
              "line-color": [
                "match",
                ["get", "type"],
                "fibra",
                "#047857",
                "aire",
                "#1e40af",
                "#000000",
              ],
              "line-width": 2,
              "line-opacity": 0.5,
            }}
          />
        </Source>

        {/* Dynamic Popup on Hover */}
        {hoverInfo && (
          <div
            className="absolute z-10 pointer-events-none bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-xl rounded-lg border border-slate-100 dark:border-slate-700 p-3 text-sm transform -translate-x-1/2 -translate-y-full mb-2 transition-all duration-75 ease-out"
            style={{
              left: hoverInfo.x,
              top: hoverInfo.y,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  hoverInfo.feature.properties.type === "fibra"
                    ? "bg-emerald-500"
                    : "bg-blue-500"
                )}
              />
              <span className="font-bold text-slate-800 dark:text-slate-200 uppercase text-xs tracking-wider">
                {hoverInfo.feature.properties.type === "fibra"
                  ? "Fibra Óptica"
                  : "Inalámbrico"}
              </span>
            </div>
            <p className="font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
              {hoverInfo.feature.properties.name}
            </p>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 z-10 transition-transform hover:scale-105">
          <div className="font-bold mb-3 text-gray-800 dark:text-gray-200 text-sm">
            Referencias
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-emerald-500 opacity-60 border border-emerald-700 shadow-sm"></span>
              <span className="text-gray-600 dark:text-gray-300 text-xs font-medium">
                Zona Fibra Óptica
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-blue-500 opacity-60 border border-blue-700 shadow-sm"></span>
              <span className="text-gray-600 dark:text-gray-300 text-xs font-medium">
                Zona Aire / Inalámbrico
              </span>
            </div>
          </div>
        </div>
      </Map>
    </div>
  );
}
