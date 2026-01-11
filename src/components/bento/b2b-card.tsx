import { Server, Shield, Network } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function B2BCard() {
  return (
    <GlassCard
      hoverEffect={true}
      className="bg-slate-900 text-white min-w-[300px] md:min-w-0 h-[220px] md:h-full snap-center relative overflow-hidden group border-slate-800"
    >
      {/* Efecto Glow en Hover */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-teal-500/20 rounded-full blur-[60px] group-hover:bg-teal-500/30 transition-all duration-700" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Server className="text-teal-400" size={18} />
            <span className="text-[10px] font-bold text-teal-400 tracking-widest uppercase border border-teal-500/30 px-2 py-0.5 rounded">
              Empresas & ISP
            </span>
          </div>

          <h3 className="text-2xl font-bold leading-tight mb-2">
            Infraestructura <br /> Crítica
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[90%]">
            Ingeniería de redes, virtualización y soporte Nivel 2 para
            operadores.
          </p>
        </div>

        <div className="flex gap-2 mt-2">
          <div className="p-2 bg-white/10 rounded-lg">
            <Network size={16} className="text-indigo-300" />
          </div>
          <div className="p-2 bg-white/10 rounded-lg">
            <Shield size={16} className="text-emerald-300" />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
