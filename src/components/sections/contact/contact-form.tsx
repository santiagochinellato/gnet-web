"use client";

import { ChevronDown } from "lucide-react";

export function ContactForm() {
  return (
    <div className="lg:col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Envíanos tu consulta
      </h2>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;
          const phone = formData.get("phone") as string;
          const inquiryType = formData.get("inquiryType") as string;
          const messageContent = formData.get("message") as string;

          const message = `Hola, mi nombre es ${name}.
Email: ${email}
Teléfono: ${phone}
Motivo: ${inquiryType}
Mensaje: ${messageContent}`;

          const isMobile = /iPhone|iPad|iPod|Android/i.test(
            navigator.userAgent
          );
          const baseUrl = isMobile
            ? "https://api.whatsapp.com/send"
            : "https://web.whatsapp.com/send";

          const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;

          window.open(whatsappUrl, "_blank");
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Nombre completo
            </span>
            <input
              name="name"
              className="h-12 w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              placeholder="Ej. Juan Pérez"
              type="text"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </span>
            <input
              name="email"
              className="h-12 w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              placeholder="ejemplo@correo.com"
              type="email"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Teléfono
            </span>
            <input
              name="phone"
              className="h-12 w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              placeholder="+54 9 ..."
              type="tel"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Tipo de consulta
            </span>
            <div className="relative">
              <select
                name="inquiryType"
                className="h-12 w-full appearance-none rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 text-slate-900 dark:text-white focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              >
                <option>Consultas Comerciales</option>
                <option>Soporte Técnico</option>
                <option>Facturación y Pagos</option>
                <option>Otros</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                <ChevronDown className="w-5 h-5" />
              </span>
            </div>
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Mensaje
          </span>
          <textarea
            name="message"
            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] resize-none"
            placeholder="¿En qué podemos ayudarte hoy?"
            rows={4}
            required
          ></textarea>
        </label>
        <div className="flex justify-end pt-2">
          <button
            className="flex w-full md:w-auto min-w-[160px] items-center justify-center rounded-lg bg-[var(--color-primary)] h-12 px-6 text-base font-bold text-white shadow-md transition-all hover:bg-blue-600 active:scale-[0.98] cursor-pointer"
            type="submit"
          >
            Enviar consulta
          </button>
        </div>
      </form>
    </div>
  );
}
