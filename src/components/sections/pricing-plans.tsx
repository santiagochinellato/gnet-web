"use client";
import { CheckCircle, Rocket } from "lucide-react";
import { PricingSection } from "@/types/content";
import { cn } from "@/lib/utils";

export function PricingPlans({ content }: { content: PricingSection }) {
  return (
    <section
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="planes"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[var(--color-secondary)] font-bold tracking-wider text-sm uppercase">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            {content.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {content.plans.map((plan, index) => {
            const isSecondary = plan.color === "secondary";
            const borderColor = isSecondary
              ? "border-[var(--color-secondary)]/30 dark:border-[var(--color-secondary)]/10"
              : "border-gray-200 dark:border-slate-800";
            const hoverBorder = isSecondary
              ? "hover:border-[var(--color-secondary)]"
              : "hover:border-[var(--color-primary)]";
            const hoverShadow = isSecondary
              ? "hover:shadow-[var(--color-secondary)]/10"
              : "hover:shadow-[var(--color-primary)]/10";
            const bgClass = isSecondary
              ? "bg-gradient-to-b from-[var(--color-secondary)]/5 to-transparent dark:from-[var(--color-secondary)]/10"
              : "bg-slate-50 dark:bg-slate-900";

            // Button styles
            const btnClass = isSecondary
              ? "bg-[var(--color-secondary)] text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/30"
              : "bg-white dark:bg-slate-800 text-[var(--color-primary)] dark:text-white border border-gray-200 dark:border-slate-700 hover:bg-[var(--color-primary)] hover:text-white dark:hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]";

            return (
              <div
                key={index}
                className={cn(
                  "relative group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl",
                  borderColor,
                  hoverBorder,
                  hoverShadow,
                  bgClass
                )}
              >
                {plan.badge && (
                  <div
                    className={cn(
                      "absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl",
                      isSecondary
                        ? "bg-[var(--color-secondary)]"
                        : "bg-[var(--color-primary)]"
                    )}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 dark:text-slate-400 font-medium">
                      {" "}
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300"
                    >
                      <CheckCircle
                        className={cn(
                          "w-5 h-5 flex-shrink-0",
                          isSecondary
                            ? "text-[var(--color-secondary)]"
                            : "text-[var(--color-primary)]"
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <a
                  href="/wifi-6"
                  className="mb-6 block w-full group/wifi relative overflow-hidden rounded-xl bg-slate-900 p-[1px] transition-all hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 group-hover/wifi:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#020617] py-2.5 px-4 transition-all group-hover/wifi:bg-slate-900/90">
                    <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-widest group-hover/wifi:from-cyan-300 group-hover/wifi:to-blue-400">
                      ¿Qué es WiFi 6?
                    </span>
                  </div>
                </a> */}

                <button
                  onClick={(e) => {
                    e.preventDefault();

                    let message = "";
                    const titleLower = plan.title.toLowerCase();

                    if (titleLower.includes("empresas")) {
                      message =
                        "Hola, quisiera mas información sobre el plan Empresas";
                    } else if (titleLower.includes("turismo")) {
                      message =
                        "Hola, quisiera contratar el plan Turismo, ¿Me puedes brindar detalles?";
                    } else {
                      // Default to Hogar or generic
                      message = `Hola, quisiera contratar el plan ${plan.title}, ¿Me puedes brindar detalles?`;
                    }

                    const isMobile = /iPhone|iPad|iPod|Android/i.test(
                      navigator.userAgent
                    );
                    const baseUrl = isMobile
                      ? "https://api.whatsapp.com/send"
                      : "https://web.whatsapp.com/send";

                    const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;

                    window.open(whatsappUrl, "_blank");
                  }}
                  className={cn(
                    "w-full block text-center py-3 px-4 font-bold rounded-lg transition-all cursor-pointer",
                    btnClass
                  )}
                >
                  {plan.ctaText}
                </button>
                {!plan.title.toLowerCase().includes("pymes") &&
                  !plan.title.toLowerCase().includes("empresas") && (
                    <span className="text-[10px] font text-gray-500 dark:text-slate-400 mt-1 text-center pt-2">
                      *Sujeto a disponibilidad tecnica y geografica*
                    </span>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
