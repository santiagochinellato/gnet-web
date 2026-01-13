"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlanesContent as PlanesContentType,
  PlanesCategoryContent,
  PricingPlan,
  FAQSection as FAQSectionType,
} from "@/types/content";

type TabType = "hogar" | "turista" | "comercios";

export function PlanesContent({ content }: { content: PlanesContentType }) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const tab = searchParams.get("tab");
    if (tab && (tab === "hogar" || tab === "turista" || tab === "comercios")) {
      return tab as TabType;
    }
    return "hogar";
  });

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (
      tab &&
      (tab === "hogar" || tab === "turista" || tab === "comercios") &&
      tab !== activeTab
    ) {
      setActiveTab(tab as TabType);
    }
  }, [searchParams, activeTab]);

  return (
    <div className="flex-grow pt-16">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract pattern for background */}
          <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[100px]"></div>
          <div className="absolute top-[60%] -left-[10%] h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-[80px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="sticky top-16 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 p-1.5 shadow-inner">
              <TabButton
                label={content.tabs.hogar}
                isActive={activeTab === "hogar"}
                onClick={() => setActiveTab("hogar")}
              />
              <TabButton
                label={content.tabs.turista}
                isActive={activeTab === "turista"}
                onClick={() => setActiveTab("turista")}
              />
              <TabButton
                label={content.tabs.comercios}
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
            {activeTab === "hogar" && (
              <PlansCategoryContent
                key="hogar"
                content={content.categories.hogar}
              />
            )}
            {activeTab === "turista" && (
              <PlansCategoryContent
                key="turista"
                content={content.categories.turista}
              />
            )}
            {activeTab === "comercios" && (
              <ComerciosCategoryContent
                key="comercios"
                content={content.categories.comercios}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection content={content.faq} />

      {/* CTA Section */}
      <CTASection content={content.cta} />
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
          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeTabPlanes"
          className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-200 dark:ring-slate-700"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

function PlansCategoryContent({ content }: { content: PlanesCategoryContent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      <h2 className="sr-only">Planes Disponibles</h2>
      {/* Cards Section */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>

      {/* Benefits Side Panel */}
      <BenefitsPanel
        title={content.benefitsTitle}
        benefits={content.benefits}
      />
    </motion.div>
  );
}

function ComerciosCategoryContent({
  content,
}: {
  content: PlanesCategoryContent;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      <h2 className="sr-only">Soluciones para Comercios</h2>
      <div className="lg:col-span-2 flex flex-col justify-center items-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
        {content.ctaBox && (
          <>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {content.ctaBox.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
              {content.ctaBox.description}
            </p>
            <button className="rounded-lg bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white hover:bg-blue-600 transition-colors shadow-lg">
              {content.ctaBox.ctaText}
            </button>
          </>
        )}
      </div>
      <BenefitsPanel
        title={content.benefitsTitle}
        benefits={content.benefits}
      />
    </motion.div>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  const isPrimary = !plan.color || plan.color === "primary";
  const borderColor = isPrimary
    ? "border-[var(--color-primary)]"
    : "border-[var(--color-secondary)]";
  const bgColor = isPrimary
    ? "bg-[var(--color-primary)]"
    : "bg-[var(--color-secondary)]";
  const btnHover = isPrimary ? "hover:bg-blue-700" : "hover:bg-teal-600"; // Assuming secondary is teal/greenish from logic

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300",
        plan.recommended
          ? `border-2 ${borderColor}`
          : "border border-slate-200 dark:border-slate-700"
      )}
    >
      {plan.recommended && (
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
          {plan.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {plan.description}
        </p>
      </div>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          {plan.price}
        </span>
        <span className="text-base font-medium text-slate-500 dark:text-slate-400">
          {plan.period}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();

          let message = "";
          const titleLower = plan.title.toLowerCase();

          if (titleLower.includes("empresas")) {
            message = "Hola, quisiera mas información sobre el plan Empresas";
          } else if (titleLower.includes("turismo")) {
            message =
              "Hola, quisiera contratar el plan Turismo, ¿Me puedes brindar detalles?";
          } else {
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
          "mb-8 w-full rounded-lg px-4 py-2.5 text-sm font-bold transition-colors cursor-pointer",
          plan.recommended
            ? `${bgColor} text-white ${btnHover} shadow-lg shadow-blue-500/20`
            : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
        )}
      >
        {plan.ctaText}
      </button>
      <div className="space-y-4">
        {plan.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
          >
            <Check className="h-5 w-5 text-green-500 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <span className="text-[10px] font text-gray-500 dark:text-slate-400 mt-1 text-center pt-2">
        *Sujeto a disponibilidad tecnica y geografica*
      </span>
    </div>
  );
}

function BenefitsPanel({
  title,
  benefits,
}: {
  title: string;
  benefits: { title: string; text: string }[];
}) {
  return (
    <div className="lg:col-span-1">
      <div className="h-full rounded-2xl bg-white dark:bg-slate-800/50 p-6 lg:p-8 border border-slate-100 dark:border-slate-800">
        <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <div className="space-y-6">
          {benefits.map((benefit, idx) => (
            <BenefitItem key={idx} title={benefit.title} text={benefit.text} />
          ))}
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

function FAQSection({ content }: { content: FAQSectionType }) {
  return (
    <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {content.title}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {content.description}
          </p>
        </div>
        <div className="space-y-4">
          {content.items.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
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

function CTASection({
  content,
}: {
  content: { title: string; text: string; whatsappText: string };
}) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-16">
      <div className="absolute inset-0 bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10"></div>
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-[var(--color-primary)] px-8 py-12 shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            {content.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={(e) => {
                e.preventDefault();
                const message = "Hola, quisiera contactar con un asesor.";
                const isMobile = /iPhone|iPad|iPod|Android/i.test(
                  navigator.userAgent
                );
                const baseUrl = isMobile
                  ? "https://api.whatsapp.com/send"
                  : "https://web.whatsapp.com/send";

                const whatsappUrl = `${baseUrl}?phone=5492944824423&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="flex w-full min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-primary)] transition-colors hover:bg-blue-50 sm:w-auto"
            >
              {content.whatsappText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
