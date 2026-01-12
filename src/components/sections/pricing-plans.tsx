import { CheckCircle } from "lucide-react";

export function PricingPlans() {
  return (
    <section
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="planes"
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[var(--color-secondary)] font-bold tracking-wider text-sm uppercase">
            Nuestros Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            Conectividad a tu medida
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Elegí la velocidad que necesitás para tu casa, tu cabaña turística o
            tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HOGAR */}
          {/* HOGAR */}
          <div className="relative group flex flex-col rounded-2xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
            <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
              POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Hogar
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Para familias y home office.
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900 dark:text-white">
                $15.000
              </span>
              <span className="text-gray-500 dark:text-slate-400 font-medium">
                /mes
              </span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>100 Mbps Simétricos</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>Instalación Bonificada</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>Router WiFi 6 incluido</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-white dark:bg-slate-800 text-[var(--color-primary)] dark:text-white border border-gray-200 dark:border-slate-700 font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white dark:hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer">
              Ver Detalles
            </button>
          </div>

          {/* TURISMO / SHORT TERM */}
          <div className="relative group flex flex-col rounded-2xl border border-[var(--color-secondary)]/30 dark:border-[var(--color-secondary)]/10 bg-gradient-to-b from-[var(--color-secondary)]/5 to-transparent dark:from-[var(--color-secondary)]/10 p-8 hover:border-[var(--color-secondary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-secondary)]/10">
            <div className="absolute top-0 right-0 bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
              TURISMO
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Short Term
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Ideal alquileres temporarios.
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900 dark:text-white">
                $10.000
              </span>
              <span className="text-gray-500 dark:text-slate-400 font-medium">
                /semana
              </span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-secondary)] w-5 h-5 flex-shrink-0" />
                <span>50 Mbps</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-secondary)] w-5 h-5 flex-shrink-0" />
                <span>Sin Contrato Fijo</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-secondary)] w-5 h-5 flex-shrink-0" />
                <span>Activación inmediata</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-[var(--color-secondary)] text-white font-bold rounded-lg hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transition-all cursor-pointer">
              Contratar Ahora
            </button>
          </div>

          {/* EMPRESAS */}
          {/* EMPRESAS */}
          {/* EMPRESAS */}
          <div className="relative group flex flex-col rounded-2xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Empresas
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Soluciones corporativas.
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-black text-gray-900 dark:text-white">
                A Medida
              </span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>Hasta 1 Gbps</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>IP Fija Disponible</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                <CheckCircle className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
                <span>SLA Garantizado</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-white dark:bg-slate-800 text-[var(--color-primary)] dark:text-white border border-gray-200 dark:border-slate-700 font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white dark:hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all cursor-pointer">
              Contactar Asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
