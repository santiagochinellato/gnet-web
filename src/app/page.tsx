import { HeroCoverage } from "@/components/bento/hero-coverage";
import { PlanCard } from "@/components/bento/plan-card";
import { B2BCard } from "@/components/bento/b2b-card";
import { NetworkStatus } from "@/components/bento/network-status";
import { GlassCard } from "@/components/ui/glass-card";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      {/* CONTENEDOR MAESTRO DEL BENTO GRID */}
      {/* Mobile: Flex Column normal. Desktop: Grid 12 columnas x 6 filas */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:h-[850px]">
        {/* 1. HERO (Principal) */}
        <HeroCoverage />

        {/* 2. PLANES (Desktop: Columna Derecha / Mobile: Carrusel Horizontal) */}
        <div
          className="col-span-1 md:col-span-4 md:row-span-4 md:grid md:grid-rows-2 md:gap-4
                        flex overflow-x-auto snap-x gap-4 py-2 md:py-0 no-scrollbar order-2 md:order-none"
        >
          <PlanCard type="hogar" speed="100" />
          <PlanCard type="turista" speed="50" />
          {/* La B2B card aparece aquí solo en mobile para el carrusel */}
          <div className="md:hidden">
            <B2BCard />
          </div>
        </div>

        {/* 3. FILA INFERIOR (B2B + Status + Branding) */}

        {/* B2B Card (Solo Desktop) */}
        <div className="hidden md:block col-span-12 md:col-span-4 md:row-span-2 order-3">
          <B2BCard />
        </div>

        {/* Status + Extra Info */}
        <div className="col-span-12 md:col-span-8 md:row-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 order-4">
          <NetworkStatus />

          <GlassCard className="flex items-center gap-4 bg-teal-50/50 justify-center">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <ShieldCheck className="text-teal-600" size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                Seguridad Electrónica
              </p>
              <p className="text-sm text-teal-700/80">
                Distribuidor Oficial Hikvision
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
