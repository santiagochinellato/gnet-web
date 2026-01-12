import { HeroSection } from "@/components/sections/Hero";
import { PlanCard } from "@/components/bento/plan-card";
import { B2BCard } from "@/components/bento/b2b-card";
import { ShieldCheck, Server } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* 1. SECCIÓN HERO (Full Width) */}
      <HeroSection />

      {/* 2. SECCIÓN DE SERVICIOS (Con aire y márgenes) */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto -mt-24 relative z-20">
        {/* Título de Sección */}
        <div className="mb-8 flex items-end justify-between px-4">
          <div>
            <span className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-2 block">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl font-bold text-white">Elige tu conexión</h2>
          </div>
          <div className="hidden md:block text-slate-400 text-sm max-w-xs text-right">
            Planes diseñados para adaptarse a la geografía de Bariloche.
          </div>
        </div>

        {/* GRILLA REAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan Hogar */}
          <div className="h-[380px]">
            <PlanCard type="hogar" speed="300" />
          </div>

          {/* Plan Turista */}
          <div className="h-[380px]">
            <PlanCard type="turista" speed="50" />
          </div>

          {/* Tarjeta B2B / Empresas */}
          <div className="h-[380px]">
            <B2BCard />
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE CONFIANZA & SEGURIDAD */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-100 rounded-[2.5rem] h-[450px] w-full flex items-center justify-center border border-slate-200 relative overflow-hidden group">
              {/* Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

              {/* Decorative Circles */}
              <div className="absolute w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -top-10 -right-10 mix-blend-multiply transition-all duration-1000 group-hover:bg-teal-500/20" />
              <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -bottom-10 -left-10 mix-blend-multiply transition-all duration-1000 group-hover:bg-indigo-500/20" />

              <div className="relative z-10 text-center p-8">
                <div className="inline-flex bg-white shadow-lg p-4 rounded-2xl mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200`}
                      />
                    ))}
                  </div>
                  <div className="ml-4 flex flex-col justify-center text-left">
                    <span className="text-xs font-bold text-slate-800">
                      2.4k+ Clientes
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Confían en Gnet
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-sm">
                  Cobertura en todo el ejido urbano
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              Ecosistema Gnet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Más que solo <br /> cables de fibra.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Somos el socio tecnológico de Bariloche. Proveemos la
              infraestructura crítica para seguridad, turismo y desarrollo
              empresarial.
            </p>

            <div className="flex flex-col gap-4">
              <GlassCard
                className="p-5 flex items-start gap-4 bg-slate-50 hover:bg-white transition-colors border-slate-200"
                variant="light"
              >
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    Seguridad Electrónica
                  </div>
                  <p className="text-sm text-slate-500 leading-snug mt-1">
                    Sistemas de CCTV inteligentes y control de accesos. Partner
                    oficial de Hikvision.
                  </p>
                </div>
              </GlassCard>

              <GlassCard
                className="p-5 flex items-start gap-4 bg-slate-50 hover:bg-white transition-colors border-slate-200"
                variant="light"
              >
                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                  <Server size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    Data Center Local
                  </div>
                  <p className="text-sm text-slate-500 leading-snug mt-1">
                    Hosting de baja latencia y enlaces dedicados para
                    proveedores de servicios.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
