"use client";

import { CheckCircle2 } from "lucide-react";

interface PlansProps {
  data?: {
    title?: string;
    subtitle?: string;
    plans?: {
      name: string;
      description: string;
      price: string;
      period: string;
      features: string[];
      ctaText: string;
      ctaLink: string;
      isPopular?: boolean;
      badge?: string;
    }[];
  };
}

export function PlansSection({ data }: PlansProps) {
  const {
    title = "WiFi 6 para todos",
    subtitle = "Nuestros Planes",
    plans = [
      {
        name: "Familiar",
        description: "Para familias numerosas",
        price: "$15.000",
        period: "",
        features: [
          "Hasta 300 Megas",
          "Servicio Técnico Días Hábiles de 8 a 16 hs",
          "Router WiFi 6 en Comodato",
          "Latencias Mínimas",
          "Permanencia mínima por contrato 12 meses",
        ],
        ctaText: "Contratar",
        ctaLink:
          "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20contratar%20el%20plan%20Familiar%20WiFi%206",
        isPopular: true,
        badge: "Familiar",
      },
      {
        name: "Turismo",
        description: "Ideal alquileres temporarios.",
        price: "$15.000",
        period: "", // Sanity doesn't show period in my JSON fetch for Turismo? Wait. Let me check JSON again.
        features: [
          "Hasta 300 Megas",
          "Servicio Tecnico 24/7  - En el Idioma de tu Pasajero ",
          "Router WiFi 6 en Comodato",
          "Latencias Minimas",
          "Permanencia minima por contrato 12 meses",
        ],
        ctaText: "Contratar",
        ctaLink:
          "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20contratar%20el%20plan%20Turismo%20WiFi%206",
        isPopular: true,
        badge: "Turismo",
      },
      {
        name: "Pyme",
        description: "Redes corporativas.",
        price: "Consultar",
        period: "",
        features: [
          "Hasta 1 Gbps",
          "IP Fija Disponible",
          "Escalabilidad Inmediata",
          "Seguridad Avanzada",
          "Enlaces Dedicados",
          "Soporte Técnico Prioritario ", // Note the trailing space in Sanity JSON
        ],
        ctaText: "Contactar ", // Trailing space
        ctaLink:
          "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20asesoramiento%20para%20Empresas%20WiFi%206",
        isPopular: true,
        badge: "Soluciónes de Vanguardia",
      },
    ],
  } = data || {};

  return (
    <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="text-[var(--color-wifi-primary)] font-bold tracking-wider text-sm uppercase">
          {subtitle}
        </span>
        <h2 className="text-3xl font-black text-white md:text-5xl mt-2">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative group flex flex-col rounded-2xl border ${plan.isPopular ? "border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/5" : "border-white/10 bg-white/5"} p-8 backdrop-blur-sm hover:border-[var(--color-wifi-primary)]${plan.isPopular ? "" : "/50"} transition-all hover:shadow-2xl hover:shadow-[var(--color-wifi-primary)]/10`}
          >
            {plan.badge && (
              <div className="absolute top-0 right-0 bg-[var(--color-wifi-primary)] text-[#020617] text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                {plan.badge}
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-black text-white">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-slate-400 text-sm font-medium">
                  {plan.period}
                </span>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-wifi-primary)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.open(plan.ctaLink, "_blank")}
              className={`w-full py-3 rounded-xl font-bold transition-colors mt-auto ${plan.isPopular ? "bg-[var(--color-wifi-primary)] text-[#020617] hover:bg-[var(--color-wifi-primary)]/90 shadow-lg shadow-[var(--color-wifi-primary)]/20" : plan.price === "Consultar" ? "bg-transparent border border-white/20 text-white hover:bg-white/10" : "bg-white text-slate-900 hover:bg-slate-200"}`}
            >
              {plan.ctaText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
