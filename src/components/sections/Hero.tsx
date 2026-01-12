import Image from "next/image";
import { HeroForm } from "@/components/hero/HeroForm";
import { HeroBadge } from "@/components/hero/HeroBadge";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-900 text-white pt-20 pb-32">
      {/* FONDO IMAGEN */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Gnet Fiber Optic"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
          // @ts-ignore - Next.js 16 supports this pass-through for <img> but TS types might lag
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
        {/* Bottom Fade to White/Slate-50 */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" /> */}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start justify-center h-full pt-16">
        {/* LEFT ALIGNED CONTENT */}
        <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:justify-start">
          <div className="mb-8">
            <HeroBadge />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-center lg:text-left tracking-tight mb-6 leading-[1.05]">
            Internet de Alta <br />
            Velocidad que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">
              sí funciona
            </span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-md font-bold text-center lg:text-left">
            Conexión estable de fibra óptica y seguridad electrónica para tu
            hogar o empresa, sin cortes por el clima.
          </p>

          {/* INPUT FORM */}
          <HeroForm />

          <div className="mt-12 w-full flex justify-center lg:justify-start">
            <a
              href="/planes"
              className="text-sm font-bold text-white/80 hover:text-white flex items-center justify-center lg:justify-start gap-2 group transition-colors"
            >
              Ver nuestros planes
              <span className="group-hover:translate-x-1 transition-transform ">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
