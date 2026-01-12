"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Building2, Home, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SecurityContent } from "@/types/content";

const iconMap = {
  Store,
  Building2,
  Home,
};

export function SolutionsTabs({
  content,
}: {
  content: SecurityContent["solutions"];
}) {
  // Use the first tab's key as default if available, otherwise empty string
  const defaultTab = content.tabs.length > 0 ? content.tabs[0].key : "";
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  const activeContent =
    content.tabs.find((t) => t.key === activeTab) || content.tabs[0];

  if (!activeContent) return null;

  return (
    <>
      {/* Tabs Navigation */}
      <section className="w-full max-w-[960px] mx-auto px-4 md:px-10 mb-8">
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 p-1.5 shadow-inner gap-1">
            {content.tabs.map((tab) => {
              const Icon =
                iconMap[tab.iconName as keyof typeof iconMap] || Store;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative flex items-center justify-center rounded-full px-4 sm:px-6 py-2.5 text-sm font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
                    isActive
                      ? "text-[var(--color-primary)] dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabSecurity"
                      className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-200 dark:ring-slate-700"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={cn(
                        "w-4 h-4",
                        isActive
                          ? "text-[var(--color-primary)] dark:text-white"
                          : "text-slate-400 dark:text-slate-500"
                      )}
                    />
                    <span>{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Content Card */}
      <section className="w-full max-w-[960px] mx-auto px-4 py-8 md:px-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-1"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-6 p-4 md:p-6">
            <div className="flex flex-1 flex-col justify-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-slate-800 px-2 py-1 w-fit">
                  <BadgeCheck className="text-[var(--color-primary)] w-4 h-4" />
                  <span className="text-xs font-bold text-[var(--color-primary)]">
                    Recomendado
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold leading-tight">
                  {activeContent.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal leading-relaxed">
                  {activeContent.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 pt-2">
                <button className="flex h-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  Ver planes
                </button>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 aspect-video md:aspect-auto rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${activeContent.image}')` }}
            ></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
