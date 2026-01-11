"use client";
import { StatusDot } from "@/components/ui/StatusDot";
import { motion } from "framer-motion";

export function StatusCell() {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="bento-card col-span-1 p-6 flex flex-col justify-between h-64 hover:border-brand-accent/50 transition-colors"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-white/60">Network Status</h3>
        <StatusDot />
      </div>

      <div className="space-y-1">
        <div className="text-4xl font-bold tracking-tight">99.99%</div>
        <div className="text-xs text-green-400 font-bold tracking-widest uppercase">
          Systems Operational
        </div>
      </div>

      <div className="w-full h-16 mt-4 relative flex items-end gap-1">
        {[40, 60, 45, 70, 80, 65, 50, 75, 90, 85, 80, 95].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 bg-brand-accent/20 rounded-t-sm"
          />
        ))}
      </div>
    </motion.div>
  );
}
