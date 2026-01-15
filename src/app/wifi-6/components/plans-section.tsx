"use client";

import { CheckCircle2 } from "lucide-react";

export function PlansSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="text-[var(--color-wifi-primary)] font-bold tracking-wider text-sm uppercase">
          Nuestros Planes
        </span>
        <h2 className="text-3xl font-black text-white md:text-5xl mt-2">
          WiFi 6 para todos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Familiar */}
        <div className="relative group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-[var(--color-wifi-primary)]/50 transition-all hover:shadow-2xl hover:shadow-[var(--color-wifi-primary)]/10">
          <h3 className="text-xl font-bold text-white mb-2">Familiar</h3>
          <p className="text-slate-400 text-sm mb-6">
            Para familias y home office.
          </p>
          <div className="mb-6">
            <span className="text-4xl font-black text-white">$15.000</span>
            <span className="text-slate-400 text-sm font-medium">/mes</span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {[
              "100 Mbps Simétricos",
              "Router WiFi 6 Incluido",
              "Instalación Bonificada",
            ].map((item, i) => (
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
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20contratar%20el%20plan%20Familiar%20WiFi%206",
                "_blank"
              )
            }
            className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors mt-auto"
          >
            Contratar
          </button>
        </div>

        {/* Turismo */}
        <div className="relative group flex flex-col rounded-2xl border border-[var(--color-wifi-primary)]/30 bg-[var(--color-wifi-primary)]/5 p-8 backdrop-blur-sm hover:border-[var(--color-wifi-primary)] transition-all hover:shadow-2xl hover:shadow-[var(--color-wifi-primary)]/10">
          <div className="absolute top-0 right-0 bg-[var(--color-wifi-primary)] text-[#020617] text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
            TURISMO
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Turismo</h3>
          <p className="text-slate-400 text-sm mb-6">
            Ideal alquileres temporarios.
          </p>
          <div className="mb-6">
            <span className="text-4xl font-black text-white">$10.000</span>
            <span className="text-slate-400 text-sm font-medium">/semana</span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {["50 Mbps", "Sin Contrato Fijo", "Activación Inmediata"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-wifi-primary)] flex-shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20contratar%20el%20plan%20Turismo%20WiFi%206",
                "_blank"
              )
            }
            className="w-full py-3 rounded-xl bg-[var(--color-wifi-primary)] text-[#020617] font-bold hover:bg-[var(--color-wifi-primary)]/90 transition-colors shadow-lg shadow-[var(--color-wifi-primary)]/20 mt-auto"
          >
            Contratar Pack
          </button>
        </div>

        {/* Empresas */}
        <div className="relative group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-[var(--color-wifi-primary)]/50 transition-all hover:shadow-2xl hover:shadow-[var(--color-wifi-primary)]/10">
          <h3 className="text-xl font-bold text-white mb-2">Empresas</h3>
          <p className="text-slate-400 text-sm mb-6">
            Soluciones corporativas.
          </p>
          <div className="mb-6">
            <span className="text-3xl font-black text-white">Consultar</span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {["Hasta 1 Gbps", "IP Fija Disponible", "SLA Garantizado"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-wifi-primary)] flex-shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5492944824423&text=Hola,%20quisiera%20asesoramiento%20para%20Empresas%20WiFi%206",
                "_blank"
              )
            }
            className="w-full py-3 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-colors mt-auto"
          >
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  );
}
