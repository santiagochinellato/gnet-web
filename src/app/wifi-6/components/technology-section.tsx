"use client";

import {
  Cpu,
  Router,
  Wifi,
  Zap,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";

interface TechnologyProps {
  data?: {
    badge?: string;
    title?: string;
    intro?: string;
    cards?: {
      icon: string;
      title: string;
      subtitle?: string;
      description: string;
      stat?: {
        value: string;
        label: string;
      };
    }[];
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Router,
  Wifi,
  Zap,
  BatteryCharging,
  ShieldCheck,
};

export function TechnologySection({ data }: TechnologyProps) {
  const {
    badge = "TECNOLOGÍA NASA/INVAP",
    title = 'Por qué WiFi 6 no es solo "internet más rápido"',
    intro = "Te lo explico como si estuviéramos tomando un mate:",
    cards = [
      {
        icon: "Cpu",
        title: "OFDMA",
        subtitle: 'El "delivery simultáneo"',
        description:
          "Imaginate que antes tu WiFi era un delivery que va a una casa, entrega, y recién ahí va a la siguiente. Con OFDMA, reparte a 8 casas al mismo tiempo. \n\nTu hijo descarga un juego de 60GB, vos viendo Netflix 4K. Nadie espera. Nadie sufre.",
        stat: { value: "4x", label: "Más eficiente" },
      },
      {
        icon: "Router",
        title: "MU-MIMO 8x8",
        subtitle: "8 conversaciones simultáneas",
        description:
          "Es como tener 8 bocas. El router WiFi 6 habla con 8 dispositivos a la vez sin perder velocidad. \n\nAntes era 1 a 1 (tu PlayStation esperaba que tu notebook terminara). Ahora todos hablan al mismo tiempo.",
        stat: { value: "8 dev", label: "= 0 lag" },
      },
      {
        icon: "Wifi",
        title: "Autopista de 160 MHz",
        subtitle: "2x más ancho",
        description:
          "WiFi 5 era una calle de 2 carriles. WiFi 6 es la Ruta 40 completa. Más datos viajan sin embotellamientos.",
      },
      {
        icon: "Zap",
        title: "Señal Láser",
        subtitle: "+40% señal",
        description:
          "Antes el WiFi era como una lámpara que ilumina todo. Ahora es una linterna LED que apunta directo a tu dispositivo. Menos interferencia, más alcance.",
      },
      {
        icon: "BatteryCharging",
        title: "Ahorro Energético",
        subtitle: "7x menos batería",
        description:
          "Los celulares y tablets duermen cuando no usan la red. Tu hijo no te pide el cargador cada 2 horas.",
      },
      {
        icon: "ShieldCheck",
        title: "Seguridad Militar",
        subtitle: "Inquebrantable",
        description:
          "El mismo estándar que usan las redes de investigación científica (INVAP). Tu vecino no se engancha, los hackers tampoco.",
      },
    ],
  } = data || {};

  return (
    <section id="tecnologia" className="w-full py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#081a24] to-[#020617]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[var(--color-wifi-primary)]/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-20 flex flex-col gap-6 items-center text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/10 px-4 py-1.5 backdrop-blur-sm self-center md:self-start shadow-[0_0_15px_rgba(7,182,213,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-wifi-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-wifi-primary)]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-wifi-primary)]">
              {badge}
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl max-w-4xl leading-tight text-center md:text-left">
            {title}
            <span className="block mt-2 md:mt-6 text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wifi-primary)] via-cyan-200 to-blue-500 drop-shadow-[0_0_10px_rgba(7,182,213,0.3)]">
              (Es mucho mejor que eso)
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 justify-center md:justify-start">
            <div className="h-1 w-12 md:h-px md:w-12 bg-[var(--color-wifi-primary)] rounded-full"></div>
            <p className="text-xl text-slate-300 font-medium italic">{intro}</p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon] || Cpu;
            // First 2 cards are large
            if (index < 2) {
              return (
                <div
                  key={index}
                  className="glass-card md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center group overflow-hidden neon-border transition-all duration-300"
                >
                  <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-wifi-primary)] to-blue-600 shadow-lg text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <h4 className="text-lg text-[var(--color-wifi-primary)] font-medium mb-4">
                      {card.subtitle}
                    </h4>
                    <p className="text-slate-400 leading-relaxed max-w-2xl whitespace-pre-wrap">
                      {card.description}
                    </p>
                  </div>
                  {card.stat && (
                    <div className="shrink-0">
                      <div className="inline-flex flex-col items-center justify-center h-32 w-32 rounded-full border-4 border-[var(--color-wifi-primary)]/20 bg-[var(--color-wifi-primary)]/5 backdrop-blur-md">
                        <span className="text-4xl font-black text-white">
                          {card.stat.value}
                        </span>
                        <span className="text-xs uppercase font-bold text-[var(--color-wifi-primary)]">
                          {card.stat.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group neon-border transition-all duration-300 hover:bg-white/[0.02] items-center text-center md:items-start md:text-left"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-emerald-400 justify-center md:justify-start">
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {card.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 whitespace-pre-wrap">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
