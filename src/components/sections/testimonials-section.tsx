import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { TestimonialsSection as TestimonialsSectionType } from "@/types/content";

export function TestimonialsSection({
  content,
}: {
  content: TestimonialsSectionType;
}) {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {content.title}
        </h2>
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
          {content.reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[350px] snap-center bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative"
            >
              <div className="absolute top-6 right-6 text-[var(--color-primary)]/10">
                <Quote className="w-10 h-10 rotate-180" />
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-slate-300 mb-6 italic flex-1 relative z-10 font-medium leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                {/* <div className="size-10 rounded-full bg-slate-200 overflow-hidden relative">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {review.zone}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
