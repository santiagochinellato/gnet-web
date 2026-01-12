"use client";

import {
  Video,
  Fingerprint,
  Wrench,
  Bell,
  Cable,
  Settings,
} from "lucide-react";
import { SecurityContent } from "@/types/content";

const iconMap = {
  Video,
  Fingerprint,
  Wrench,
  Bell,
  Cable,
  Settings,
};

export function ServicesGridSecurity({
  content,
}: {
  content: SecurityContent["services"];
}) {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-12 md:px-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-[720px]">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight text-center md:text-left">
            {content.title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed text-center md:text-left">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.items.map((service, idx) => {
            const Icon =
              iconMap[service.iconName as keyof typeof iconMap] || Video;
            return (
              <div
                key={idx}
                className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition-shadow justify-center md:justify-start items-center md:items-start"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 text-[var(--color-primary)]">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal text-center md:text-left">
                    {service.description}
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
