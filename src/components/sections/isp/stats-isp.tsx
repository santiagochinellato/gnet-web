"use client";

import { Headset, Zap, BadgeCheck } from "lucide-react";
import { StatsItem } from "@/types/content";

const iconMap = {
  Headset,
  Zap,
  BadgeCheck,
};

export function StatsISP({ content }: { content: StatsItem[] }) {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-slate-200 dark:sm:divide-slate-800">
          {content.map((stat, index) => {
            const Icon =
              iconMap[stat.iconName as keyof typeof iconMap] || BadgeCheck;
            return (
              <li
                key={index}
                className="flex flex-col items-center justify-center py-10 text-center sm:py-12"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[var(--color-primary)]">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
