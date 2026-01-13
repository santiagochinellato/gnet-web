"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MapPinOff, Loader2 } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "covered" | "uncovered";
  address: string;
}

export function LeadModal({
  isOpen,
  onClose,
  status,
  address,
}: LeadModalProps) {
  const [loading, setLoading] = useState(false);

  // Close modal on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const email = formData.get("email") as string;

    const message = `Hola Gnet! 👋
Nombre: ${name}
WhatsApp: ${whatsapp}
Email: ${email}
Dirección consultada: ${address}
Estado de cobertura: ${status === "covered" ? "Con Cobertura" : "Sin Cobertura"}

Quisiera más información. Gracias!`;

    const phone = "5492944824423";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";
    const whatsappUrl = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    // Simulate small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    window.open(whatsappUrl, "_blank");
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div
              className={`p-6 flex flex-col items-center text-center ${
                status === "covered"
                  ? "bg-green-50 dark:bg-green-900/20"
                  : "bg-amber-50 dark:bg-amber-900/20"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  status === "covered"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
                    : "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400"
                }`}
              >
                {status === "covered" ? (
                  <CheckCircle className="w-8 h-8" />
                ) : (
                  <MapPinOff className="w-8 h-8" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {status === "covered"
                  ? "¡Estás en Zona de Fibra Gnet!"
                  : "Cobertura Próximamente"}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {status === "covered"
                  ? `Tu ubicación en "${address}" tiene factibilidad técnica.`
                  : `Aún no llegamos con fibra a "${address}", pero estamos expandiendo la red.`}
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="address" value={address} />
                <input type="hidden" name="type" value={status} />

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Nombre Completo
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all dark:bg-slate-950 dark:border-slate-800"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    WhatsApp (Requerido)
                  </label>
                  <input
                    name="whatsapp"
                    required
                    type="tel"
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all dark:bg-slate-950 dark:border-slate-800"
                    placeholder="+54 9 294 ..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all dark:bg-slate-950 dark:border-slate-800"
                    placeholder="te@ejemplo.com"
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Abriendo WhatsApp...
                      </>
                    ) : (
                      "Consultar por WhatsApp"
                    )}
                  </button>
                </div>
              </form>
              <button
                onClick={onClose}
                className="w-full mt-4 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
