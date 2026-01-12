"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { ContactCard } from "@/types/content";

const iconMap = {
  Phone,
  MessageCircle,
  Mail,
};

const iconColorMap: Record<string, { bg: string; text: string }> = {
  Phone: {
    bg: "bg-blue-50 dark:bg-slate-800",
    text: "text-[var(--color-primary)]",
  },
  MessageCircle: {
    bg: "bg-green-50 dark:bg-slate-800",
    text: "text-green-600",
  },
  Mail: { bg: "bg-purple-50 dark:bg-slate-800", text: "text-purple-600" },
};

export function ContactCards({ content }: { content: ContactCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
      {content.map((card, idx) => {
        const Icon = iconMap[card.iconName as keyof typeof iconMap] || Phone;
        const colors = iconColorMap[card.iconName] || iconColorMap.Phone;

        return (
          <div
            key={idx}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/30"
          >
            <div className="flex flex-col gap-4">
              <div
                className={`flex size-12 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white break-all md:break-normal">
                  {card.value}
                </p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.subtext}
                </p>
              </div>
            </div>
            <a
              href={card.action}
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer"
            >
              {card.ctaText}
            </a>
          </div>
        );
      })}
    </div>
  );
}
