import { Wifi, Plane, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

interface PlanProps {
  type: "hogar" | "turista";
  speed: string;
}

export function PlanCard({ type, speed }: PlanProps) {
  const isHome = type === "hogar";

  return (
    <GlassCard
      hoverEffect={true}
      className={cn(
        "flex flex-col justify-between min-w-[260px] md:min-w-0 h-[220px] md:h-full snap-center",
        isHome ? "bg-white/80" : "bg-gradient-to-br from-white/90 to-teal-50/80"
      )}
    >
      <div className="flex justify-between items-start">
        <div
          className={cn(
            "p-3 rounded-2xl",
            isHome ? "bg-slate-100 text-slate-600" : "bg-teal-100 text-teal-600"
          )}
        >
          {isHome ? <Wifi size={24} /> : <Plane size={24} />}
        </div>
        {isHome && (
          <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider">
            Popular
          </span>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-slate-500 font-medium text-sm mb-1 uppercase tracking-wide">
          {isHome ? "Plan Residencial" : "Pack Turista"}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-slate-900 tracking-tighter">
            {speed}
          </span>
          <span className="text-sm font-semibold text-slate-400">MB</span>
        </div>
        <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
          {isHome
            ? "Fibra directa al hogar. Router WiFi-6 en comodato."
            : "Sin contratos. Conexión inmediata por días."}
        </p>
      </div>

      <div className="mt-4 flex items-center text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
        Ver detalles <ArrowUpRight className="ml-1 w-4 h-4" />
      </div>
    </GlassCard>
  );
}
