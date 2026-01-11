"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
}

export function ServiceCard({
  title,
  subtitle,
  children,
  className,
  background,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className={cn("bento-card p-6 flex flex-col group", className)}
    >
      {background}

      <div className="z-10 h-full flex flex-col relative">
        <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">
          {title}
        </h3>
        {subtitle && (
          <div className="text-2xl font-bold text-white mb-4">{subtitle}</div>
        )}

        <div className="mt-auto">{children}</div>
      </div>
    </motion.div>
  );
}
