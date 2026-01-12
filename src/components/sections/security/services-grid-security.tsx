"use client";

import {
  Video,
  Fingerprint,
  Wrench,
  Bell,
  Cable,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Cámaras IP/WiFi",
    desc: "Instalación profesional con cableado oculto y configuración remota.",
  },
  {
    icon: Fingerprint,
    title: "Control de Accesos",
    desc: "Sistemas biométricos para gestión de personal y visitas.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Revisiones preventivas, limpieza y actualización de firmware.",
  },
  {
    icon: Bell,
    title: "Sistemas de Alarma",
    desc: "Sensores de movimiento y monitoreo 24/7 con respuesta rápida.",
  },
  {
    icon: Cable,
    title: "Cableado Estructurado",
    desc: "Redes de datos certificadas para oficinas y grandes superficies.",
  },
  {
    icon: Settings,
    title: "Configuración DVR/NVR",
    desc: "Centralización de grabaciones y acceso remoto seguro.",
  },
];

export function ServicesGridSecurity() {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-12 md:px-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-[720px]">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">
            Soluciones integrales de seguridad electrónica instaladas por
            expertos certificados en Bariloche.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 text-[var(--color-primary)]">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    {service.desc}
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
