"use client";

import { MapPin, Smartphone } from "lucide-react";

export function HeroForm() {
  return (
    <form
      className="flex flex-col gap-3 w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const address = formData.get("address") as string;
        const phone = formData.get("phone") as string;

        const message = `Hola, quisiera consultar cobertura para la dirección: ${address}. Mi número de contacto es: ${phone}`;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const baseUrl = isMobile
          ? "https://api.whatsapp.com/send"
          : "https://web.whatsapp.com/send";

        const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
      }}
    >
      <div className="relative w-full">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          name="address"
          className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
          placeholder="Ingresá tu dirección..."
          type="text"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300">
            <Smartphone className="w-5 h-5" />
          </div>
          <input
            name="phone"
            className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all"
            placeholder="Tu WhatsApp"
            type="tel"
            required
          />
        </div>
        <button
          className="h-12 px-6 bg-[var(--color-primary)] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-blue-500/20 cursor-pointer"
          type="submit"
        >
          <span>Consultar Cobertura</span>
        </button>
      </div>
    </form>
  );
}
