"use client";

import { Activity } from "lucide-react";

export function LatencyWidget() {
  return (
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
          {[40, 65, 45, 80, 55, 70, 45, 60, 85, 75, 50, 65, 55, 80, 45, 60].map(
            (h, i) => (
              <div
                key={i}
                className="w-full bg-gradient-to-t from-teal-500/40 to-teal-400 rounded-t-sm animate-latency-bar"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                  // We use a custom keyframe defined in globals.css or inline simple transform
                }}
              />
            )
          )}
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
  );
}
