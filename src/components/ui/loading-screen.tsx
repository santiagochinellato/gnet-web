"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="h-3 w-3 rounded-full bg-[var(--color-primary)]"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse">
          Estableciendo conexión...
        </p>
      </div>
    </div>
  );
}
