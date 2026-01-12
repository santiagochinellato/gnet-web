"use client";

import { useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Mitre 123, Bariloche (Approx)
const DEVICE_PIXEL_RATIO =
  typeof window !== "undefined" ? window.devicePixelRatio : 1;

export function ContactMap() {
  const mapRef = useRef<maplibregl.Map>(null);
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const mapStyle = isDark
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    let animationFrameId: number;

    const animate = () => {
      // Rotation animation
      const currentBearing = map.getBearing();
      map.setBearing(currentBearing + 0.05); // Slow rotation
      animationFrameId = requestAnimationFrame(animate);
    };

    map.on("load", () => {
      animate();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Map
        initialViewState={{
          longitude: -71.3103,
          latitude: -41.1335,
          zoom: 16,
          pitch: 45,
          bearing: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        interactive={false}
        attributionControl={false}
        // @ts-ignore
        ref={(ref) => (mapRef.current = ref && ref.getMap())}
      >
        <Marker longitude={-71.3103} latitude={-41.1335} anchor="bottom">
          <div className="relative flex flex-col items-center">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-lg ring-4 ring-white/50 dark:ring-slate-900/50 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-white" fill="white" />
            </div>
            <div className="mt-1 rounded-md bg-white/90 dark:bg-slate-900/90 px-2 py-1 text-xs font-bold text-slate-900 dark:text-white shadow-md backdrop-blur-md">
              Gnet
            </div>
          </div>
        </Marker>
      </Map>
    </div>
  );
}
