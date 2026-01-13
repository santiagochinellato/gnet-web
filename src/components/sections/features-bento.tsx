import {
  ArrowRight,
  Headset,
  Zap,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FeaturesContent } from "@/types/content";

const iconMap = {
  Headset,
  Zap,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  MapPin,
};

export function FeaturesBento({ content }: { content: FeaturesContent }) {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sticky Column */}
          <div className="flex-1 md:sticky md:top-24 items-center md:items-start flex flex-col ">
            <h2 className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-widest mb-2 text-center md:text-left">
              {content.sectionTitle}
            </h2>
            <h3
              className="text-3xl md:text-4xl font-black text-[#0e151b] dark:text-white mb-6 leading-tight text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: content.headline }}
            />
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed text-center md:text-left">
              {content.description}
            </p>
            <button className="group flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-secondary)] transition-colors text-center md:text-left">
              {content.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid Column */}
          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {content.items.map((item, index) => {
              // Determine styles based on index if needed, but for now simplified.
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all group items-center md:items-start"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const Icon =
                          iconMap[item.iconName as keyof typeof iconMap];
                        return Icon ? (
                          <Icon className="w-8 h-8" aria-hidden="true" />
                        ) : null;
                      })()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400 text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
