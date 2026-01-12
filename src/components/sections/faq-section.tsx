"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo afecta la nieve o el viento al servicio?",
    a: "Nuestra red es 100% fibra óptica (FTTH). A diferencia del internet por aire o satelital, la fibra no sufre interferencias por tormentas, nieve intensa o vientos fuertes. Además, contamos con posteadura reforzada y tendidos soterrados en zonas críticas.",
  },
  {
    q: "¿Cuánto demora la instalación?",
    a: "Generalmente realizamos la instalación dentro de las 48 a 72 horas hábiles desde la confirmación de la solicitud, dependiendo de la disponibilidad técnica en tu zona y las condiciones climáticas del momento.",
  },
  {
    q: "¿El servicio tiene permanencia mínima?",
    a: "Nuestros planes 'Hogar' y 'Empresas' estándar no tienen cláusulas de permanencia. Sos libre de dar de baja el servicio cuando quieras. Solo algunas promociones específicas de costo de instalación bonificado pueden requerir 6 meses de permanencia.",
  },
  {
    q: "¿Necesito línea telefónica fija?",
    a: "No, en absoluto. Gnet instala un cable de fibra óptica independiente directo a tu domicilio. No utilizamos la red de cobre de telefonía tradicional.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="faq"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
          Resolvemos tus dudas sobre el servicio y la instalación.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full justify-between items-center p-5 cursor-pointer text-lg font-bold text-gray-900 dark:text-white select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`text-[var(--color-primary)] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-transparent transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "max-h-96 pb-5 pt-4 opacity-100 border-slate-200 dark:border-slate-800"
                    : "max-h-0 py-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
