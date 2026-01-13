"use client";

import { MapPin, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CoverageInput() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const phone = "5492944824423"; // Gnet company contact
    const text = encodeURIComponent(
      `Hola Gnet! 👋 Quería consultar factibilidad técnica para:\n\n📍 Dirección: ${formData.address}\n📱 Mi WhatsApp: ${formData.phone}\n\nEspero su respuesta, gracias!`
    );

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";

    // Open WhatsApp
    window.open(`${baseUrl}?phone=${phone}&text=${text}`, "_blank");
    setLoading(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Address Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-[var(--color-primary)] transition-colors" />
          </div>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="block w-full pl-10 pr-3 py-3 border border-slate-600/50 rounded-lg leading-5 bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:bg-slate-900/80 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] sm:text-sm transition-all"
            placeholder="Ingresá tu dirección..."
          />
        </div>

        {/* WhatsApp Input */}
        <div className="flex gap-2">
          <div className="relative group flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MessageCircle className="h-5 w-5 text-slate-400 group-focus-within:text-[var(--color-success)] transition-colors" />
            </div>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="block w-full pl-10 pr-3 py-3 border border-slate-600/50 rounded-lg leading-5 bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:bg-slate-900/80 focus:border-[var(--color-success)] focus:ring-1 focus:ring-[var(--color-success)] sm:text-sm transition-all"
              placeholder="Tu WhatsApp"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "flex items-center justify-center py-3 px-6 border border-transparent text-sm font-bold rounded-lg text-white bg-[var(--color-primary)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-all shadow-lg hover:shadow-[var(--color-primary)]/25 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            )}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Consultar Cobertura"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
