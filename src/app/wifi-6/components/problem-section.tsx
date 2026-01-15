"use client";

import { AlertCircle, Download, WifiOff } from "lucide-react";

interface ProblemProps {
  data?: {
    title?: string;
    subtitle?: string;
    cards?: {
      icon: string;
      title: string;
      description: string;
      statValue: string;
      statLabel: string;
    }[];
  };
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertCircle,
  Download,
  WifiOff,
};

export function ProblemSection({ data }: ProblemProps) {
  const {
    title = "¿Te pasa esto en casa?",
    subtitle = "Problemas reales que WiFi 6 soluciona de verdad",
    cards = [],
  } = data || {};

  // Color mapping for each card
  const colorSchemes = [
    {
      bg: "bg-red-500/10",
      text: "text-red-500",
      border: "border-red-500/50",
      glow: "bg-red-500/10 group-hover:bg-red-500/20",
    },
    {
      bg: "bg-amber-500/10",
      text: "text-amber-500",
      border: "border-amber-500/50",
      glow: "bg-amber-500/10 group-hover:bg-amber-500/20",
    },
    {
      bg: "bg-orange-500/10",
      text: "text-orange-500",
      border: "border-orange-500/50",
      glow: "bg-orange-500/10 group-hover:bg-orange-500/20",
    },
  ];

  return (
    <section id="problemas" className="w-full bg-[#020617] py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-center">
            {title}
          </h2>
          <p className="max-w-2xl text-slate-400 md:mx-auto text-center font-medium text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon] || AlertCircle;
            const colors = colorSchemes[index % colorSchemes.length];

            return (
              <div
                key={index}
                className={`glass-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-8 hover:${colors.border} transition-colors duration-300 items-center text-center md:items-start md:text-left`}
              >
                <div
                  className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${colors.glow} blur-xl transition-all`}
                ></div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto border-t border-white/5 pt-4">
                  <span className={`text-xl font-black ${colors.text}`}>
                    {card.statValue}
                  </span>
                  <span className="text-xs uppercase text-slate-500 ml-2">
                    {card.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
