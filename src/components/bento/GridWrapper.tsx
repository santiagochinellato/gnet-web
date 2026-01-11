"use client";
import { motion } from "framer-motion";

export function GridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 md:p-8"
    >
      {children}
    </motion.div>
  );
}
