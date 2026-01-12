"use client";

import { Headset, Globe, Server, Shield, PcCase } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesGridISP() {
  return (
    <section className="pb-24 pt-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Nuestros Servicios Principales
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Soluciones punta a punta diseñadas específicamente para los desafíos
            únicos de los ISPs regionales.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {/* 1. Call Center */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg md:col-span-2 lg:col-span-2 items-center md:items-start">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)]">
              <Headset className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Call Center Especializado
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
              Atención de incidencias, configuración remota de abonados y
              creación de tickets detallados para tus técnicos.
            </p>
          </div>

          {/* 2. Engineering */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg md:col-span-2 lg:col-span-1 border-l-4 border-l-[var(--color-primary)]/80 items-center md:items-start">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Ingeniería & Diseño de Red
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
              Diseño de topologías, soluciones llave en mano, auditorías y
              estrategias de Alta Disponibilidad para evitar caídas.
            </p>
          </div>

          {/* 3. Virtualization */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg items-center md:items-start">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Virtualización & Cloud
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
              Administración de servidores, migración a entornos virtuales y
              optimización de infraestructura.
            </p>
          </div>

          {/* 4. Security */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg items-center md:items-start">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Seguridad & QoS
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
              Políticas avanzadas de tráfico, VPNs seguras y automatización de
              procesos diarios.
            </p>
          </div>

          {/* 5. Lab */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg items-center md:items-start">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
              <PcCase className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white text-center md:text-left">
              Laboratorio de Hardware
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
              Reparación de antenas, paneles y servidores. Mantenimiento
              preventivo multimarca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
