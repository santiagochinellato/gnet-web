"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Wifi, Activity } from "lucide-react";
import { TechBadge } from "@/components/ui/tech-badge";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-900 text-white pt-20 pb-32">
      {/* FONDO DINÁMICO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* COLUMNA IZQUIERDA: CONTENT */}
        <div className="max-w-2xl">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TechBadge
                label="SYSTEM"
                text="Red de Fibra Óptica: 100% Operativa"
                color="teal"
              />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Internet que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">
              desafía al clima.
            </span>
          </h1>

          <p className="text-slate-400 text-xl mb-10 font-light leading-relaxed max-w-lg">
            La única red diseñada para la topografía patagónica. Estabilidad
            garantizada bajo nieve, lluvia o viento.
          </p>

          {/* INPUT */}
          <div className="relative max-w-lg group/input">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-20 group-hover/input:opacity-40 transition duration-500"></div>
            <form className="relative flex items-center bg-slate-900/90 border border-white/10 rounded-full p-2 transition-all shadow-2xl backdrop-blur-xl">
              <div className="pl-4 text-slate-400">
                <MapPin className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Ingresá tu dirección..."
                className="w-full bg-transparent border-none text-white placeholder:text-slate-500 focus:outline-none px-4 py-3 text-lg"
              />
              <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20">
                <span>Verificar</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <Wifi size={16} className="text-teal-500" /> Instalación en 24hs
            </span>
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">
                ?
              </div>{" "}
              Soporte Local
            </span>
          </div>
        </div>

        {/* COLUMNA DERECHA: LATENCY MONITOR */}
        <div className="hidden lg:flex justify-center relative h-[400px]">
          <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-full" />

          <div className="relative w-full max-w-md aspect-square bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl">
            {/* Header Card */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 rounded-xl">
                  <Activity className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    Latencia Tiempo Real
                  </div>
                  <div className="text-white font-medium">
                    Nodo Bariloche Centro
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-500 font-bold">LIVE</span>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="flex h-32 items-end justify-between gap-1 px-2">
              {[
                40, 65, 45, 80, 55, 70, 45, 60, 85, 75, 50, 65, 55, 80, 45, 60,
              ].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "20%" }}
                  animate={{ height: [`${h}%`, `${h - 10}%`, `${h}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-full bg-gradient-to-t from-teal-500/40 to-teal-400 rounded-t-sm"
                />
              ))}
            </div>

            {/* Footer Metric */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-end justify-between">
              <div>
                <div className="text-5xl font-bold text-white tracking-tighter">
                  4
                  <span className="text-2xl text-slate-500 font-medium ml-1">
                    ms
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Ping Promedio</div>
                <div className="text-xs text-teal-400 font-mono">
                  0.00% Packet Loss
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
