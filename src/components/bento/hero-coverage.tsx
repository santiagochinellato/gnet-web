"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Wifi, Search } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroCoverage() {
  return (
    <GlassCard className="col-span-12 md:col-span-8 md:row-span-4 relative flex flex-col justify-center min-h-[450px] md:min-h-full group border-white/40 bg-slate-900 text-white overflow-hidden">
      {/* FONDO ANIMADO SIMULADO (Video Fallback) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-950 to-slate-950 z-10" />
        {/* Grid animado CSS */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-20 max-w-2xl px-6 md:px-10 py-8">
        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-medium mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Red Fibra Óptica: Activa
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
          Internet que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">
            desafía al clima.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-8 font-light max-w-md leading-relaxed">
          Conexión estable en Bariloche, incluso bajo nieve. Planes
          residenciales y para empresas.
        </p>

        {/* INPUT DE CONVERSIÓN */}
        <div className="relative max-w-md group/input">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-20 group-hover/input:opacity-40 transition duration-500"></div>

          <form className="relative flex items-center bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 transition-all focus-within:ring-2 focus-within:ring-teal-500/50">
            <div className="pl-4 text-slate-400">
              <MapPin className="w-5 h-5" />
            </div>

            <input
              type="text"
              placeholder="Ingresá tu dirección o barrio..."
              className="w-full bg-transparent border-none text-white placeholder:text-slate-500 focus:outline-none px-3 py-2 text-base"
            />

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-6 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20"
            >
              <span className="hidden sm:inline">Verificar</span>
              <span className="sm:hidden">
                <Search size={18} />
              </span>
            </button>
          </form>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1">
            <Wifi size={12} /> Install 24hs
          </span>
          <span>•</span>
          <span>Soporte Local</span>
        </div>
      </div>
    </GlassCard>
  );
}
