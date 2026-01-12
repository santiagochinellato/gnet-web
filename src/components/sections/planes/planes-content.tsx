"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Plus, Minus, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "hogar" | "turista" | "comercios";

export function PlanesContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("hogar");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && (tab === "hogar" || tab === "turista" || tab === "comercios")) {
      setActiveTab(tab as TabType);
    }
  }, [searchParams]);

  return (
    <div className="flex-grow pt-16">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract pattern for ISP background */}
          <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[100px]"></div>
          <div className="absolute top-[60%] -left-[10%] h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-[80px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Planes para cada necesidad
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Conectividad confiable en Bariloche para tu hogar, tus vacaciones o
            tu negocio. Navegá sin límites con la red más estable de la
            Patagonia.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="sticky top-16 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 p-1.5 shadow-inner">
              <TabButton
                label="Hogar"
                isActive={activeTab === "hogar"}
                onClick={() => setActiveTab("hogar")}
              />
              <TabButton
                label="Turista"
                isActive={activeTab === "turista"}
                onClick={() => setActiveTab("turista")}
              />
              <TabButton
                label="Comercios"
                isActive={activeTab === "comercios"}
                onClick={() => setActiveTab("comercios")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-slate-50 dark:bg-slate-950 py-12 min-h-[600px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === "hogar" && <HogarContent key="hogar" />}
            {activeTab === "turista" && <TuristaContent key="turista" />}
            {activeTab === "comercios" && <ComerciosContent key="comercios" />}
          </AnimatePresence>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
        isActive
          ? "text-[var(--color-primary)] dark:text-white"
          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-200 dark:ring-slate-700"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

function HogarContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      {/* Cards Section */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard
          title="Plan 50 MEGAS"
          description="Ideal para streaming y uso diario"
          price="$12.000"
          features={[
            "50 Mbps de bajada",
            "Router Wi-Fi 5",
            "Soporte Estándar",
            "IP Dinámica",
          ]}
        />
        <PlanCard
          title="Plan 100 MEGAS"
          description="Para familias, gaming y trabajo"
          price="$18.000"
          recommended
          features={[
            <>
              <span className="font-semibold">100 Mbps</span> de bajada
            </>,
            <>
              Router <span className="font-semibold">Dual Band</span>
            </>,
            "Prioridad de tráfico",
            "Soporte Premium",
          ]}
        />
      </div>

      {/* Benefits Side Panel */}
      <BenefitsPanel />
    </motion.div>
  );
}

function TuristaContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard
          title="Pack Semana"
          description="Conexión rápida por 7 días"
          price="$10.000"
          period="/semana"
          features={[
            "50 Mbps de bajada",
            "Router Pre-instalado",
            "Activación inmediata",
            "Sin contratos",
          ]}
          color="secondary"
        />
        <PlanCard
          title="Pack Mes"
          description="Estadías prolongadas"
          price="$25.000"
          period="/mes"
          recommended
          features={[
            "100 Mbps de bajada",
            "Router Dual Band",
            "Soporte prioritario",
            "Sin contratos",
          ]}
          color="secondary"
        />
      </div>
      <BenefitsPanel title="Beneficios para Turistas" />
    </motion.div>
  );
}

function ComerciosContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      <div className="lg:col-span-2 flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Soluciones Corporativas
        </h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          Ofrecemos enlaces dedicados, IP fija, y SLA garantizado para empresas
          que requieren máxima disponibilidad.
        </p>
        <button className="rounded-lg bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white hover:bg-blue-600 transition-colors shadow-lg">
          Contactar a Ventas Corporativas
        </button>
      </div>
      <BenefitsPanel title="Beneficios para Empresas" />
    </motion.div>
  );
}

function PlanCard({
  title,
  description,
  price,
  period = "/mes",
  recommended = false,
  features,
  color = "primary",
}: {
  title: string;
  description: string;
  price: string;
  period?: string;
  recommended?: boolean;
  features: React.ReactNode[];
  color?: "primary" | "secondary";
}) {
  const isPrimary = color === "primary";
  const borderColor = isPrimary
    ? "border-[var(--color-primary)]"
    : "border-[var(--color-secondary)]";
  const bgColor = isPrimary
    ? "bg-[var(--color-primary)]"
    : "bg-[var(--color-secondary)]";
  const btnHover = isPrimary ? "hover:bg-blue-700" : "hover:bg-teal-600";
  const textPrimary = isPrimary
    ? "text-[var(--color-primary)]"
    : "text-[var(--color-secondary)]";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300",
        recommended
          ? `border-2 ${borderColor}`
          : "border border-slate-200 dark:border-slate-700"
      )}
    >
      {recommended && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold text-white uppercase tracking-wider",
            bgColor
          )}
        >
          Recomendado
        </div>
      )}
      <div className="mb-4 mt-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          {price}
        </span>
        <span className="text-base font-medium text-slate-500 dark:text-slate-400">
          {period}
        </span>
      </div>
      <button
        className={cn(
          "mb-8 w-full rounded-lg px-4 py-2.5 text-sm font-bold transition-colors",
          recommended
            ? `${bgColor} text-white ${btnHover} shadow-lg shadow-blue-500/20`
            : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
        )}
      >
        {recommended ? "Contratar Ahora" : "Contratar"}
      </button>
      <div className="space-y-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
          >
            <Check className="h-5 w-5 text-green-500 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitsPanel({
  title = "Todos nuestros planes incluyen:",
}: {
  title?: string;
}) {
  return (
    <div className="lg:col-span-1">
      <div className="h-full rounded-2xl bg-white dark:bg-slate-800/50 p-6 lg:p-8 border border-slate-100 dark:border-slate-800">
        <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <div className="space-y-6">
          <BenefitItem
            title="Instalación bonificada"
            text="Te conectamos sin costo inicial en zonas de cobertura."
          />
          <BenefitItem
            title="Sin contratos de permanencia"
            text="Sos libre de elegirnos cada mes sin ataduras."
          />
          <BenefitItem
            title="Soporte técnico local"
            text="Atención rápida por gente de Bariloche."
          />
          <BenefitItem
            title="Pagos digitales simples"
            text="Mercado Pago, tarjetas y débito automático."
          />
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
        <Check className="w-4 h-4 text-green-600 dark:text-green-400 font-bold" />
      </div>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white text-sm">
          {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {text}
        </p>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Todo lo que necesitás saber antes de contratar.
          </p>
        </div>
        <div className="space-y-4">
          <FAQItem
            question="¿Cuánto tarda la instalación?"
            answer="Dependiendo de la zona y la demanda, la instalación suele realizarse dentro de los 3 a 5 días hábiles luego de confirmada la solicitud."
          />
          <FAQItem
            question="¿Los planes tienen límite de descarga?"
            answer="No, todos nuestros planes de hogar son ilimitados. Podés navegar, ver películas y descargar archivos sin preocuparte por el consumo de datos."
          />
          <FAQItem
            question="¿Qué pasa si hay nieve o mal clima?"
            answer="Nuestra red de fibra óptica está soterrada en gran parte de la ciudad y diseñada para resistir las condiciones climáticas de Bariloche, garantizando estabilidad incluso en invierno."
          />
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  // using details/summary for simple non-animated accordion as per request style, or could use state
  return (
    <details className="group rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-slate-200 dark:open:ring-slate-700">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors rounded-xl select-none">
        <span>{question}</span>
        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-slate-500" />
      </summary>
      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
        {answer}
      </div>
    </details>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-16">
      <div className="absolute inset-0 bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10"></div>
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-[var(--color-primary)] px-8 py-12 shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            ¿Tenés dudas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Nuestro equipo comercial está listo para asesorarte sobre el mejor
            plan para tu zona.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex w-full min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-primary)] transition-colors hover:bg-blue-50 sm:w-auto">
              WhatsApp
            </button>
            <button className="flex w-full min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto">
              0800-555-GNET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
