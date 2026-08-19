import Image from "next/image";
import { HeroForm } from "@/components/hero/HeroForm";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroContent } from "@/types/content";

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden bg-slate-900 text-white pt-20 pb-32">
      {/* FONDO IMAGEN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.imageSrc}
          alt="Gnet Fiber Optic"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full pt-16">
        <div className="w-full max-w-5xl flex flex-col items-center text-center justify-center">
          <div className="mb-8">
            <HeroBadge />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight mb-6 leading-[1.05] text-balance max-w-4xl">
            <span dangerouslySetInnerHTML={{ __html: content.title }} />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">
              {content.highlight}
            </span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl drop-shadow-md font-bold text-center text-balance">
            {content.description}
          </p>

          <div className="w-full max-w-3xl">
            <HeroForm />
          </div>

          <div className="mt-12 w-full flex justify-center">
            <a
              href={content.ctaLink}
              className="text-sm font-bold text-white/80 hover:text-white flex items-center justify-center gap-2 group transition-colors"
            >
              {content.ctaText}
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
