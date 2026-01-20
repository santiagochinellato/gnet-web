"use client";

import { MapPin, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

interface CtaFooterProps {
  onVerify: (e: React.FormEvent) => void;
  isVerifying: boolean;
  addressInput: string;
  setAddressInput: (value: string) => void;
  data?: {
    badge?: string;
    title?: string;
    description?: string;
    features?: string[];
  };
}

export function CtaFooter({
  onVerify,
  isVerifying,
  addressInput,
  setAddressInput,
  data,
}: CtaFooterProps) {
  const {
    badge = "ÚLTIMA DECISIÓN INTELIGENTE DEL AÑO",
    title = "¿Tu hijo te pidió WiFi 6? \nTiene razón.",
    description = "No es un capricho. Es la diferencia entre trabajar bien o estar disculpándote en Zoom. Verificá si Gnet con WiFi 6 llega a tu dirección. Si llega, activás en 48 horas.",
    features = [
      "Router WiFi 6  en Comodato",
      "Latencias Minímas",
      "Instalación sin esperas",
      "Servicio técnico local",
    ],
  } = data || {};

  return (
    <section
      id="cobertura"
      className="relative w-full border-t border-white/10 bg-[#020617] py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wifi-primary)]/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 border border-white/10 shadow-2xl shadow-[var(--color-wifi-primary)]/10 text-center">
          <span className="inline-block rounded-lg bg-[var(--color-wifi-primary)]/10 p-2 text-[var(--color-wifi-primary)] mb-6 text-xs font-bold uppercase tracking-wider border border-[var(--color-wifi-primary)]/20">
            {badge}
          </span>
          <h2 className="text-3xl font-black text-white md:text-5xl mb-4 whitespace-pre-line">
            {title}
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
            {description}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
            onSubmit={onVerify}
          >
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPin className="w-5 h-5 text-slate-500" />
              </div>
              <input
                type="text"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                className="block w-full rounded-xl border-0 bg-slate-800 py-4 pl-10 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[var(--color-wifi-primary)] focus:bg-slate-900 transition-all font-mono text-sm shadow-sm"
                placeholder="Ingresá tu dirección (ej: Beschtedt 1250)..."
                disabled={isVerifying}
              />
            </div>
            <button
              type="submit"
              disabled={isVerifying}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[var(--color-wifi-primary)] px-6 py-4 text-sm font-bold text-[var(--color-wifi-bg)] shadow-lg shadow-[var(--color-wifi-primary)]/25 hover:bg-[var(--color-wifi-glow)] hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-wifi-primary)] cursor-pointer disabled:opacity-70 disabled:cursor-wait"
            >
              {isVerifying ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Verificar Cobertura
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col gap-2 items-start max-w-sm mx-auto text-xs text-slate-400">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
