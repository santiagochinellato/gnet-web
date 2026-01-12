"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ISPContent } from "@/types/content";

export function CaseStudiesISP({
  content,
}: {
  content: ISPContent["caseStudies"];
}) {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="cases"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">
              {content.title}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
              {content.description}
            </h2>
          </div>
          <Link
            href="/contacto"
            className="hidden md:flex items-center gap-2 font-bold text-[var(--color-primary)] hover:text-blue-700 transition-colors"
          >
            {content.linkText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-blue-300 font-medium text-sm mb-2 block">
                  {study.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {study.title}
                </h3>
                <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {study.ctaText} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-bold text-[var(--color-primary)]"
          >
            {content.linkText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
