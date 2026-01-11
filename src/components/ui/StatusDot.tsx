"use client";
import { motion } from "framer-motion";

export function StatusDot() {
  return (
    <span className="relative flex h-3 w-3">
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  );
}
