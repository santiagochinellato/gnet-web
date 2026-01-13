"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { TestimonialsSection as TestimonialsSectionType } from "@/types/content";

export function TestimonialsSection({
  content,
}: {
  content: TestimonialsSectionType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {content.title}
        </h2>
        <div className="relative group">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex -ml-6">
              {content.reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6"
                >
                  <div className="h-full bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative select-none">
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
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-[var(--color-primary)] hover:scale-110 transition-transform z-20 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-[var(--color-primary)] hover:scale-110 transition-transform z-20 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Gradients */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
