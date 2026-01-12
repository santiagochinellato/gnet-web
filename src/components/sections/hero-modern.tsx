import { CoverageInput } from "@/components/ui/coverage-input";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function HeroModern() {
  return (
    <section className="relative flex min-h-[700px] flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero.webp")',
        }}
      ></div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[var(--color-background-light)] to-transparent h-32 bottom-0 top-auto"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center md:self-start bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/30 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-secondary)]"></span>
            </span>
            <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-wider">
              Fibra Óptica en Bariloche
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
            Internet de Alta Velocidad que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] drop-shadow-md brightness-125">
              SÍ funciona
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-100 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md">
            Conexión estable de fibra óptica y seguridad electrónica para tu
            hogar o empresa, sin cortes por el clima.
          </p>

          {/* Coverage Input */}
          <div className="mt-4 p-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl max-w-lg mx-auto md:mx-0 w-full">
            <CoverageInput />
          </div>

          {/* Secondary CTA */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <Link
              href="#planes"
              className="text-white text-sm font-semibold hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
            >
              Ver nuestros planes <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
