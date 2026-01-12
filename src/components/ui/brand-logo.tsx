"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn("flex items-center gap-2 group cursor-pointer", className)}
    >
      {/* ISOTIPO (Icono G + Wifi) */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* La 'G' Geométrica (Simplificada para demo, reemplaza con tu path exacto si lo tienes) */}
          <path
            d="M10 20C10 14.4772 14.4772 10 20 10C24.5 10 28.2 13 29.5 17"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-slate-900 dark:text-white transition-colors"
          />
          <path
            d="M20 30C14.4772 30 10 25.5228 10 20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-slate-900 dark:text-white transition-colors"
          />
          <path
            d="M20 20H30V25C30 27.7614 27.7614 30 25 30H20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-slate-900 dark:text-white transition-colors"
          />
        </svg>

        {/* ONDAS WIFI (Animadas) */}
        <div className="absolute -top-1 -right-1 text-brand-teal">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M5 12.55a11 11 0 0 1 14.08 0"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.path
              d="M1.42 9a16 16 0 0 1 21.16 0"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>

      {/* LOGOTIPO (Texto) */}
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
        G<span className="font-light">net</span>
      </span>
    </div>
  );
}
