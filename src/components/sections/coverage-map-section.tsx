"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { CoverageSection } from "@/types/content";
import React from "react";

// Dynamic import for map component to avoid SSR issues and improve TBT
import { MapSkeleton } from "@/components/skeletons";

// Dynamic import for map component to avoid SSR issues and improve TBT
const CoverageMap = dynamic(
  () => import("@/components/coverage/coverage-map"),
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  }
);

export function CoverageMapSection({ content }: { content: CoverageSection }) {
  const [shouldLoadMap, setShouldLoadMap] = React.useState(false);
  const mapContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300"
      id="cobertura"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-700 dark:text-blue-400 font-bold tracking-wider text-sm uppercase">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            {content.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <div
          ref={mapContainerRef}
          className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 mb-10 overflow-hidden relative z-0 h-[500px] md:h-[600px]"
        >
          {shouldLoadMap ? (
            <CoverageMap className="h-full rounded-2xl" />
          ) : (
            <div className="w-full h-full">
              <MapSkeleton />
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MapPin className="text-[var(--color-primary)] w-5 h-5" />
            {content.barriosTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
            {content.barrios.map((barrio) => (
              <div
                key={barrio}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[var(--color-primary)] transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/50"></span>{" "}
                {barrio}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
