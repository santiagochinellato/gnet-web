"use client";

import {
  Headset,
  Globe,
  Server,
  Shield,
  PcCase,
  BadgeCheck,
} from "lucide-react";
import { ISPContent } from "@/types/content";

const iconMap = {
  Headset,
  Globe,
  Server,
  Shield,
  PcCase,
  BadgeCheck,
};

export function ServicesGridISP({
  content,
}: {
  content: ISPContent["services"];
}) {
  return (
    <section
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((service, index) => {
            const Icon =
              iconMap[service.iconName as keyof typeof iconMap] || Globe;

            const isFirst = index === 0;
            const colSpan = isFirst ? "md:col-span-2" : "md:col-span-1";

            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${colSpan}`}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
