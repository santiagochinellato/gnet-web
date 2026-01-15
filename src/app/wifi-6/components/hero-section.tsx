"use client";

import { Rocket, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden pt-32 md:pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        {/* Abstract glowing orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--color-wifi-primary)]/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--color-wifi-accent)]/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 sm:gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400">
            WIFI 6 EARLY ADOPTER
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white glow-text">
          Internet que funciona <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] via-cyan-200 to-[var(--color-wifi-accent)]">
            para toda la familia
          </span>
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400">
          Tu hijo juega sin lag. Vos trabajás sin cortes.{" "}
          <br className="hidden sm:block" />
          Todo al mismo tiempo.
        </p>

        {/* Speed Counter */}
        <div className=" flex flex-col items-center justify-center">
          <div className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-full border-4 border-slate-800 bg-slate-900/50 backdrop-blur-xl pulse-emerald">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                4
                <span className="text-lg sm:text-xl text-emerald-500/80">
                  ms
                </span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
                PING
              </span>
            </div>
            {/* SVG Circle */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90 text-emerald-500"
              viewBox="0 0 100 100"
            >
              <circle
                className="opacity-50"
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="280"
                strokeDashoffset="40"
              ></circle>
            </svg>
          </div>
          <span className="mt-4 text-xs sm:text-sm font-medium text-emerald-400 max-w-xs sm:max-w-md">
            WiFi 6 es la tecnología que INVAP, el Balseiro y las empresas tech
            de Bariloche usan para trabajar en proyectos críticos. Ahora en tu
            casa.
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#cobertura"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-wifi-primary)] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-[var(--color-wifi-bg)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(7,182,213,0.5)]"
          >
            <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            Verificar si llega a mi casa
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Microcopy */}
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium text-center px-4">
          ✓ Sin contrato de permanencia &nbsp; ✓ Router WiFi 6 incluido &nbsp; ✓
          Instalación en 48hs
        </p>

        {/* Scroll Indicator */}
        <div className="mt-4 sm:mt-8 flex flex-col items-center gap-2 z-20 opacity-80 animate-pulse">
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
            Seguí leyendo
          </span>
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-wifi-primary)] animate-bounce" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#020617] to-transparent"></div>
    </section>
  );
}
