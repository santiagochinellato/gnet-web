"use client";

import { useState } from "react";
import { Store, Building2, Home, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = {
  comercio: {
    icon: Store,
    label: "Comercio",
    title: "Soluciones para Comercio",
    description:
      "Prevención de pérdidas y seguridad para empleados. Controle su negocio desde cualquier lugar con nuestras soluciones de monitoreo inteligente con detección de rostros y conteo de personas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8t-FUAhA2WNDKZUYAitsLP_dapVtFnAVXCdNDme7mr_t2TO09RlP3DvIeLCah4MHdLmU8uWnyP6QBOHu0LCM7BDBHcdF_m1IFt__UeaBLTfFMw8DGigx90OOzlIoqPcbU-qMHKQr3K3rNbx8ACKFYketi5lcuFcJSRFA-5dVBuomr_ypLE_JZXFst9bk0F2Es6qGbyaZnQlRj96NrT_rOBZWbm0OuN8gTsbAQ1LCPvC_3ghxLQKi1U-6-294N7_hsYlqbJ6AmnFH-",
  },
  oficina: {
    icon: Building2,
    label: "Oficina",
    title: "Seguridad Corporativa",
    description:
      "Control de accesos y videovigilancia IP para oficinas modernas. Gestione quién entra y sale, y proteja sus activos más valiosos con sistemas de alarma monitoreados 24/7.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200", // Placeholder from Unsplash
  },
  hogar: {
    icon: Home,
    label: "Hogar",
    title: "Protección Residencial",
    description:
      "Tranquilidad para su familia. Cámaras WiFi de fácil uso, porteros visores y alarmas perimetrales para que su hogar esté siempre seguro, esté donde esté.",
    image:
      "https://images.unsplash.com/photo-1558036117-15db63622051?q=80&w=1200", // Placeholder from Unsplash
  },
};

type TabKey = keyof typeof solutions;

export function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("comercio");

  const ActiveContent = solutions[activeTab];

  return (
    <>
      {/* Tabs Navigation */}
      <section className="w-full max-w-[960px] mx-auto px-4 md:px-10">
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-8">
            {(
              Object.entries(solutions) as [TabKey, typeof ActiveContent][]
            ).map(([key, data]) => {
              const Icon = data.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    "group flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 transition-colors cursor-pointer",
                    isActive
                      ? "border-b-[var(--color-primary)] text-[var(--color-primary)]"
                      : "border-b-transparent text-slate-500 hover:text-slate-900"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "text-slate-400 group-hover:text-slate-900"
                      )}
                    />
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                      {data.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Content Card */}
      <section className="w-full max-w-[960px] mx-auto px-4 py-8 md:px-10">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-1">
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
                  {ActiveContent.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal leading-relaxed">
                  {ActiveContent.description}
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <button className="flex h-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  Ver planes
                </button>
                <a
                  href="#"
                  className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  Descargar brochure PDF
                </a>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 aspect-video md:aspect-auto rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${ActiveContent.image}')` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
