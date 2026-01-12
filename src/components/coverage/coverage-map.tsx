"use client";

import { useState, useRef } from "react";
import Map, {
  Source,
  Layer,
  Marker,
  NavigationControl,
  MapRef,
  type LayerProps,
} from "react-map-gl/maplibre";
import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { COVERAGE_GEOJSON, INITIAL_VIEW_STATE } from "@/lib/coverage-data";
import { SearchControl } from "./search-control";
import { LeadModal } from "./lead-modal";
import { MapPin } from "lucide-react";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Style for the fill coverage (Dynamic color from feature property)
const fillLayer: LayerProps = {
  id: "coverage-fill",
  type: "fill",
  paint: {
    "fill-color": ["get", "color"],
    "fill-opacity": 0.4,
  },
};

// Style for the border of coverage
const lineLayer: LayerProps = {
  id: "coverage-line",
  type: "line",
  paint: {
    "line-color": "#2563EB",
    "line-width": 2,
    "line-opacity": 0.5,
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

  const handleSelectAddress = (coords: [number, number], address: string) => {
    setSelectedLocation({ coords, address });

    // Fly to location
    mapRef.current?.flyTo({
      center: coords,
      zoom: 15,
      duration: 2000,
    });

    // Check coverage logic using Turf.js
    const pt = point(coords);
    let isInside = false;

    // Check against all features in the collection
    for (const feature of COVERAGE_GEOJSON.features) {
      if (feature.geometry.type === "Polygon") {
        // @ts-expect-error - Turf types can be strict, but GeoJSON is standard
        if (booleanPointInPolygon(pt, feature)) {
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
        "relative w-full h-[calc(100vh-64px)] bg-slate-100 dark:bg-slate-900",
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
        <NavigationControl position="bottom-right" />

        {/* Coverage Layer */}
        <Source id="coverage-data" type="geojson" data={COVERAGE_GEOJSON}>
          <Layer {...fillLayer} />
          <Layer {...lineLayer} />
        </Source>

        {/* Marker for selected search result */}
        {selectedLocation && (
          <Marker
            longitude={selectedLocation.coords[0]}
            latitude={selectedLocation.coords[1]}
            anchor="bottom"
          >
            <div className="relative flex flex-col items-center">
              <MapPin className="w-10 h-10 text-[var(--color-primary)] drop-shadow-lg fill-white dark:fill-slate-900 animate-bounce" />
              <div className="w-3 h-1 bg-black/30 rounded-full blur-[2px]" />
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
