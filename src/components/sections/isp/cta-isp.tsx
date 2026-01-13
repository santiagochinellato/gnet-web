"use client";

import { ISPContent } from "@/types/content";

export function CTAISP({ content }: { content: ISPContent["cta"] }) {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[var(--color-primary)]/10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          {content.title}
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          {content.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const message = "Hola, quisiera contratar servicios para ISP.";
              const isMobile = /iPhone|iPad|iPod|Android/i.test(
                navigator.userAgent
              );
              const baseUrl = isMobile
                ? "https://api.whatsapp.com/send"
                : "https://web.whatsapp.com/send";
              const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="px-8 py-4 bg-white text-[var(--color-primary)] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            {content.ctaPrimary.text}
          </button>
          <button
            onClick={() => {
              const message = "Hola, quisiera contactar con un asesor ISP.";
              const isMobile = /iPhone|iPad|iPod|Android/i.test(
                navigator.userAgent
              );
              const baseUrl = isMobile
                ? "https://api.whatsapp.com/send"
                : "https://web.whatsapp.com/send";
              const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer"
          >
            {content.ctaSecondary.text}
          </button>
        </div>
      </div>
    </section>
  );
}
