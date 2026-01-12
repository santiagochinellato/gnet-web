"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

// Dynamic import remains for chunking, but we will conditionally render it
const CoverageMap = dynamic(
  () =>
    import("@/components/coverage/coverage-map").then((mod) => mod.CoverageMap),
  {
    loading: () => (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center">
        <span className="text-slate-400 font-medium">Cargando mapa...</span>
      </div>
    ),
    ssr: false,
  }
);

export function CoverageMapSection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load 200px before it comes into view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300"
      id="cobertura"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">
            Zonas de servicio
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            Nuestra Cobertura
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Expandimos nuestra red de fibra óptica constantemente para llegar a
            cada rincón de Bariloche.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 mb-10 overflow-hidden relative z-0 h-[500px] md:h-[600px]">
          {shouldLoad ? (
            <CoverageMap className="h-full rounded-2xl" />
          ) : (
            <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-slate-400">Iniciando mapa...</span>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MapPin className="text-[var(--color-primary)] w-5 h-5" /> Barrios
            Conectados
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2">
            {[
              "Centro Cívico",
              "Belgrano",
              "Melipal",
              "Jardín Botánico",
              "Las Victorias",
              "San Francisco",
              "Pinar del Lago",
              "Playa Bonita",
              "Los Coihues",
              "km 4 a km 8",
            ].map((barrio) => (
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
