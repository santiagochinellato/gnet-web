"use client";

import { Headset, Zap, Award } from "lucide-react";

export function StatsISP() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-slate-200 dark:sm:divide-slate-800">
          <div className="flex flex-col items-center justify-center py-10 text-center sm:py-12">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
              <Headset className="w-6 h-6" />
            </div>
            <dd className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              500+
            </dd>
            <dt className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Tickets Resueltos Mensualmente
            </dt>
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-center sm:py-12">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
              <Zap className="w-6 h-6" />
            </div>
            <dd className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              99.9%
            </dd>
            <dt className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Uptime de Red Garantizado
            </dt>
          </div>
          <div className="flex flex-col items-center justify-center py-10 text-center sm:py-12">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
              <Award className="w-6 h-6" />
            </div>
            <dd className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              10+
            </dd>
            <dt className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Años de Experiencia ISP
            </dt>
          </div>
        </div>
      </div>
    </section>
  );
}
