import { GlassCard } from "@/components/ui/glass-card";

export function NetworkStatus() {
  return (
    <GlassCard className="col-span-12 md:col-span-4 flex flex-row items-center justify-between py-0 px-6 min-h-[100px]">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          Estado de Red
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-bold text-slate-700">
            100% Operativo
          </span>
        </div>
      </div>

      <div className="h-10 w-px bg-slate-200/50 mx-4" />

      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          Latencia Media
        </span>
        <span className="text-lg font-mono font-bold text-slate-700">4ms</span>
      </div>
    </GlassCard>
  );
}
