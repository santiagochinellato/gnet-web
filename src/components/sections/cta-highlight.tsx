import Link from "next/link";
import { CTAHighlight as CTAHighlightType } from "@/types/content";

export function CTAHighlight({ content }: { content: CTAHighlightType }) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[var(--color-primary)] to-[#0077c2] overflow-hidden">
      <div
        className="absolute inset-0 bg-opacity-10"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/cubes.png")',
        }}
      ></div>
      <div className="relative container mx-auto px-4 md:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          {content.title}
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {content.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={content.ctaPrimary.link}
            className="bg-white text-[var(--color-primary)] text-lg font-bold py-4 px-10 rounded-xl hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            {content.ctaPrimary.text}
          </Link>
          <Link
            href={content.ctaSecondary.link}
            className="bg-transparent border-2 border-white/30 text-white text-lg font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition-all duration-300 inline-block"
          >
            {content.ctaSecondary.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
