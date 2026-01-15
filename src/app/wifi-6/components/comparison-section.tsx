"use client";

import {
  Gauge,
  Router,
  Smartphone,
  Cpu,
  Wifi,
  Download,
  ShieldCheck,
  Star,
} from "lucide-react";

export function ComparisonSection() {
  return (
    <section id="velocidad" className="w-full bg-[#020617] py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            <span className="text-slate-500">WiFi 5</span>
            <span className="mx-4 text-2xl align-middle text-slate-700">
              VS
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] to-blue-500">
              WiFi 6
            </span>
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-sm font-bold tracking-wide text-slate-300 uppercase">
              Comparación honesta sin marketing
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-black/50">
          <div className="grid grid-cols-3 text-sm">
            {/* Header */}
            <div className="col-span-1 p-6 md:p-8 flex items-center text-slate-400 font-bold tracking-wider uppercase text-xs border-b border-white/10 bg-slate-900/80">
              Característica
            </div>
            <div className="col-span-1 p-6 md:p-8 flex flex-col items-center justify-center border-b border-white/10 bg-slate-900/80 text-center gap-1">
              <span className="text-slate-400 font-bold text-lg">WiFi 5</span>
              <span className="text-xs text-slate-600 font-medium hidden md:block">
                (Tu router actual)
              </span>
            </div>
            <div className="col-span-1 p-6 md:p-8 flex flex-col items-center justify-center border-b border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 relative overflow-hidden text-center gap-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-wifi-primary)] shadow-[0_0_15px_var(--color-wifi-primary)]"></div>
              <span className="text-[var(--color-wifi-primary)] font-black text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(7,182,213,0.3)]">
                WiFi 6
              </span>
              <span className="text-[10px] bg-[var(--color-wifi-primary)] text-black font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Recomendado
              </span>
            </div>

            {/* Velocidad */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-slate-500 hidden md:block" />
              Velocidad
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
              <span className="md:hidden">3.5 G</span>
              <span className="hidden md:inline">3.5 Gbps (nunca llega)</span>
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              9.6 Gbps
            </div>

            {/* Latencia */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Router className="w-5 h-5 text-slate-500 hidden md:block" />
              Latencia
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
              30-50ms
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              4ms
            </div>

            {/* Dispositivos */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-slate-500 hidden md:block" />
              Dispositivos
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
              3-4
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              8-12
            </div>

            {/* Eficiencia */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-slate-500 hidden md:block" />
              Eficiencia
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
              ❌ No tiene
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              ✅ x4
            </div>

            {/* Gaming + Zoom */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-slate-500 hidden md:block" />
              Multitasking
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center text-xs md:text-sm">
              Uno sufre
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center text-xs md:text-sm shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              Perfecto
            </div>

            {/* Descarga */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <Download className="w-5 h-5 text-slate-500 hidden md:block" />
              Descarga 60GB
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center">
              2 horas
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              30 mins
            </div>

            {/* Seguridad */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium border-b border-white/5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-500 hidden md:block" />
              Seguridad
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 border-b border-white/5 text-center flex items-center justify-center text-xs md:text-sm">
              WPA2 (Hackeable)
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold border-b border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center text-xs md:text-sm shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              WPA3 (Blindado)
            </div>

            {/* Calidad Stream */}
            <div className="col-span-1 p-4 md:p-6 text-white font-medium flex items-center gap-2">
              <Star className="w-5 h-5 text-slate-500 hidden md:block" />
              Streaming
            </div>
            <div className="col-span-1 p-4 md:p-6 text-slate-400 text-center flex items-center justify-center">
              720p
            </div>
            <div className="col-span-1 p-4 md:p-6 text-white font-bold bg-[var(--color-wifi-primary)]/5 text-center flex items-center justify-center shadow-[inset_0_0_20px_rgba(7,182,213,0.05)]">
              4K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
