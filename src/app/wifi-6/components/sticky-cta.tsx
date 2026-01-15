"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyCtaProps {
  data?: {
    topLabel?: string;
    buttonText?: string;
  };
}

export function StickyCta({ data }: StickyCtaProps) {
  const [ctaVisible, setCtaVisible] = useState(false);

  const {
    topLabel = "¿Listo para eliminar el lag?",
    buttonText = "Verificar Cobertura",
  } = data || {};

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setCtaVisible(scrollPercent > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500 transform",
        ctaVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <a
        href="#cobertura"
        className="flex items-center gap-3 bg-[var(--color-wifi-primary)] text-[var(--color-wifi-bg)] px-6 py-3 rounded-full font-bold shadow-lg shadow-[var(--color-wifi-primary)]/40 hover:scale-105 transition-transform"
      >
        <div className="flex flex-col leading-none">
          <span className="text-[10px] uppercase tracking-wider opacity-80">
            {topLabel}
          </span>
          <span className="text-sm">{buttonText}</span>
        </div>
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
}
