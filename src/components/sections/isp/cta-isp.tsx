"use client";

import Link from "next/link";

export function CTAISP() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 text-center shadow-2xl sm:px-12 lg:px-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para potenciar tu ISP?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Sumate a más de 50 ISPs regionales que confían en Gnet para su
              ingeniería y soporte técnico.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contacto"
                className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-base font-bold text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Solicitar Presupuesto
              </Link>
              <button className="rounded-lg bg-white/10 px-6 py-3 text-base font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 cursor-pointer">
                Contactar Ventas
              </button>
            </div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute top-0 left-0 h-full w-full opacity-10">
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
