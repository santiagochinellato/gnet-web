"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function Wifi6Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020617] py-8 md:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid-bg absolute inset-0 opacity-20"></div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-wifi-primary)]/10 blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[var(--color-wifi-accent)]/10 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[var(--color-wifi-primary)]/20 bg-slate-900/50 p-6 backdrop-blur-md md:flex-row md:p-8 lg:p-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-wifi-primary)] md:self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-wifi-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-wifi-primary)]"></span>
              </span>
              Nueva Tecnología
            </div>

            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
              Descubrí la revolución <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] to-cyan-400 glow-text">
                WiFi 6 de Gnet
              </span>
            </h2>

            <p className="max-w-xl text-base text-slate-400">
              Menos lag, más velocidad y conexión estable para todos tus
              dispositivos al mismo tiempo.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Link
              href="/wifi-6"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-wifi-primary)] px-6 py-3 text-sm font-bold text-[#020617] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(7,182,213,0.4)]"
            >
              <Zap className="h-4 w-4 fill-current" />
              <span>Conocer WiFi 6</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
