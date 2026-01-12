"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SecurityContent } from "@/types/content";

export function GallerySecurity({
  content,
}: {
  content: SecurityContent["gallery"];
}) {
  return (
    <section className="w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="w-full max-w-[960px] mx-auto px-4 py-12 md:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              {content.title}
            </h2>
            <Link
              href="/contacto"
              className="text-[var(--color-primary)] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              {content.linkText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.items.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium opacity-80 uppercase tracking-wider">
                    {item.category}
                  </p>
                  <p className="text-lg font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
