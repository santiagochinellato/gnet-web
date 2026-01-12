"use client";

import { BadgeCheck } from "lucide-react";

export function HeroSecurity() {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-10 md:px-10 pt-32">
      <div className="@container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 md:w-1/2 md:pr-8">
            <div className="flex flex-col gap-2">
              <span className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wide text-center md:text-left">
                Seguridad Electrónica
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl text-slate-900 dark:text-white text-center md:text-left">
                Cámaras de Seguridad
              </h1>
              <h2 className="text-slate-500 dark:text-slate-300 text-base md:text-lg leading-relaxed text-center md:text-left">
                Vigilancia en Alta Definición. Protegé lo que más importa con
                tecnología Dahua y Hikvision. Monitoreo remoto 4K desde tu
                celular.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex h-12 items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 text-white text-base font-bold shadow-lg hover:bg-blue-600 transition-colors cursor-pointer">
                Solicitar Cotización
              </button>
              {/* <button className="flex h-12 items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 text-slate-900 dark:text-white text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                Ver Catálogo
              </button> */}
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2_c1riM9Jk3M9zhksxbDk7a_pAPPHrhx1kFO6hGN9MAVq4m65TPKr6Ldjw3y11G5kEN0e7ysEeB3kUgVxL4moNPUStBrCM2QjPAGs0t5m1uETbFl2AEB0R1zSRJarzo9SCZzXnoqW30SU1DNE2n6drEKbrQZNvfan1a4_PtQG37npf_wGSSV5KtPQDygV1NDrO0t9YOGNWmeigrTUN-zVWDXtPMMKjPGzpdpr0hYOHUdhC9-hCebAfOjwDqhZJaQVdWCKOakNGUM2')",
                }}
              ></div>
              {/* Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                <BadgeCheck className="text-green-600 w-[18px] h-[18px]" />
                <span className="text-xs font-bold text-slate-900">
                  Distribuidor Oficial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
