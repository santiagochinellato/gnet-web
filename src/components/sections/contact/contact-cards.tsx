"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
      {/* Phone Card */}
      <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/30">
        <div className="flex flex-col gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 text-[var(--color-primary)]">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Teléfono
            </h3>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              +54 9 294 444-0000
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Lunes a Viernes 9-18hs
            </p>
          </div>
        </div>
        <button className="mt-6 flex w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer">
          Llamar ahora
        </button>
      </div>

      {/* WhatsApp Card */}
      <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/30">
        <div className="flex flex-col gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-green-50 dark:bg-slate-800 text-green-600">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              WhatsApp
            </h3>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              +54 9 294 444-1111
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Atención 24/7
            </p>
          </div>
        </div>
        <button className="mt-6 flex w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer">
          Enviar mensaje
        </button>
      </div>

      {/* Email Card */}
      <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/30">
        <div className="flex flex-col gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-purple-50 dark:bg-slate-800 text-purple-600">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Email
            </h3>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white break-all">
              info@gnet.com.ar
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Respondemos en 24hs
            </p>
          </div>
        </div>
        <button className="mt-6 flex w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 group-hover:bg-[var(--color-primary)] group-hover:text-white cursor-pointer">
          Escribir correo
        </button>
      </div>
    </div>
  );
}
