"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, MapPin } from "lucide-react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTheme } from "next-themes";

interface CoverageCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "covered" | "uncovered";
  address: string;
  coords: [number, number];
}

export function CoverageCheckModal({
  isOpen,
  onClose,
  status,
  address,
  coords,
}: CoverageCheckModalProps) {
  const [loading, setLoading] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  // Close modal on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const mapStyle = isDark
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const email = formData.get("email") as string;

    const actionText =
      status === "covered"
        ? "QUIERO CONTRATAR WIFI 6"
        : "AVÍSAME CUANDO LLEGUEN";

    const message = `Hola Gnet! 👋 ${actionText}
    
Nombre: ${name}
WhatsApp: ${whatsapp}
Email: ${email}
Dirección consultada: ${address}
Estado: ${status === "covered" ? "✅ Con Cobertura" : "❌ Sin Cobertura"}

Generado desde: Landing WiFi 6`;

    const phone = "5492944530000"; // Generic placeholder or specific sales number
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";
    const whatsappUrl = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800));

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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#020617] w-full max-w-lg rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Map Preview Section */}
            <div className="h-48 w-full relative shrink-0">
              <Map
                initialViewState={{
                  longitude: coords[0],
                  latitude: coords[1],
                  zoom: 15,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle={mapStyle}
                interactive={false}
                attributionControl={false}
              >
                <Marker
                  longitude={coords[0]}
                  latitude={coords[1]}
                  anchor="bottom"
                >
                  <div className="relative flex flex-col items-center">
                    <MapPin
                      className={`w-10 h-10 ${status === "covered" ? "text-emerald-500 fill-emerald-500/20" : "text-slate-400 fill-slate-900/50"} drop-shadow-lg`}
                    />
                    <div className="w-2 h-1 bg-black/50 rounded-full blur-[2px]" />
                  </div>
                </Marker>
              </Map>

              {/* Overlay Status Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence>
                  {status === "covered" ? (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                      className="flex flex-col items-center justify-center pointer-events-auto"
                    >
                      <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.5)] border-4 border-white/10 relative z-10">
                          <CheckCircle2
                            className="w-10 h-10 text-white"
                            strokeWidth={3}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 px-6 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl"
                      >
                        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 uppercase tracking-wide">
                          Cobertura Confirmada
                        </h3>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
                      <div className="px-5 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md border bg-slate-800/90 border-slate-700 text-slate-300">
                        <XCircle className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-bold uppercase tracking-wider">
                          Fuera de zona
                        </span>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-white mb-2 leading-tight">
                  {status === "covered"
                    ? "¡Sí! ¡Cuentas con nuestro servicio!"
                    : "Ups, todavía no llegamos ahí..."}
                </h2>
                <p className="text-slate-400 text-sm">
                  {status === "covered"
                    ? `Tu dirección en "${address}" tiene factibilidad para instalar WiFi 6 mañana mismo.`
                    : `Tu dirección "${address}" está fuera de nuestra zona actual, pero estamos expandiéndonos rápido.`}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="address" value={address} />
                <input type="hidden" name="status" value={status} />

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Nombre
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-wifi-primary)] focus:bg-slate-800 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    WhatsApp
                  </label>
                  <input
                    name="whatsapp"
                    required
                    type="tel"
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-wifi-primary)] focus:bg-slate-800 outline-none transition-all placeholder:text-slate-600"
                    placeholder="Ej: 294 4..."
                    defaultValue="+54 9"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full h-12 px-4 rounded-xl bg-slate-800/50 border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-wifi-primary)] focus:bg-slate-800 outline-none transition-all placeholder:text-slate-600"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                      status === "covered"
                        ? "bg-[var(--color-wifi-primary)] text-[var(--color-wifi-bg)] shadow-[var(--color-wifi-primary)]/20 hover:bg-[var(--color-wifi-glow)]"
                        : "bg-slate-700 text-white hover:bg-slate-600"
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "covered" ? (
                      "¡Contratar Ahora!"
                    ) : (
                      "Avísame cuando lleguen"
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-3">
                    {status === "covered"
                      ? "Te contactaremos por WhatsApp para coordinar la instalación."
                      : "Te avisaremos apenas habilitemos tu zona."}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
