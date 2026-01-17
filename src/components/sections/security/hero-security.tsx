"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { SecurityContent } from "@/types/content";

export function HeroSecurity({
  content,
}: {
  content: SecurityContent["hero"];
}) {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-10 md:px-10 pt-32">
      <div className="@container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 md:w-1/2 md:pr-8">
            <div className="flex flex-col gap-2">
              <span className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wide text-center md:text-left">
                {content.badge}
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl text-slate-900 dark:text-white text-center md:text-left">
                {content.title}
              </h1>
              <h2 className="text-slate-500 dark:text-slate-300 text-base md:text-lg leading-relaxed text-center md:text-left">
                {content.subtitle}
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const message =
                    "Hola, quisiera consultar por servicios de seguridad.";
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(
                    navigator.userAgent,
                  );
                  const baseUrl = isMobile
                    ? "https://api.whatsapp.com/send"
                    : "https://web.whatsapp.com/send";
                  const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="flex h-12 items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 text-white text-base font-bold shadow-lg hover:bg-blue-600 transition-colors cursor-pointer"
              >
                {content.ctaText}
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl">
              <Image
                src={content.backgroundImage}
                alt={content.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm z-10">
                <BadgeCheck className="text-green-600 w-[18px] h-[18px]" />
                <span className="text-xs font-bold text-slate-900">
                  Distribuidor Oficial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
