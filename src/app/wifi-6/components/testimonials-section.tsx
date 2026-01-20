"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Alejandro Sanchez",
    role: "Moreno 100",
    text: "Yo no entiendo nada de aparatos, pero desde que puse Gnet puedo ver el fútbol sin que se me trabe la imagen justo en el gol. Adrián es un tipazo, me dejó todo andando en un ratito. ¡Por fin internet que no se corta en pleno centro",
    stars: 5,
    initials: "AS",
  },
  {
    name: "Mirta López",
    role: "Mitre al 400",
    text: "Antes los videos de mis nietos no bajaban nunca. Las chicas de administración son unas divinas, me explicaron la factura con una paciencia de oro. ¡Muy recomendados",
    stars: 5,
    initials: "ML",
  },
  {
    name: "Jorge Martínez ",
    role: "Quaglia al 200",
    text: "Pasé por todas las empresas de Bariloche y todas me fallaron. Probé con Gnet y es otra cosa. El pibe Luan vino a casa, un laburante de primera, me puso el modem y ahora tengo señal hasta en el fondo. ¡Gracias, locos",
    stars: 5,
    initials: "JM",
  },
];

interface TestimonialsProps {
  data?: {
    title?: string;
    reviews?: {
      name: string;
      role: string;
      text: string;
      stars: number;
      initials?: string;
    }[];
  };
}

export function TestimonialsSection({ data }: TestimonialsProps) {
  const {
    title = "Lo que dicen los que ya tienen WiFi 6 en Bariloche",
    reviews = TESTIMONIALS,
  } = data || {};

  const [currentindex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="w-full py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <h2 className="text-2xl font-bold text-white text-center md:text-left">
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[var(--color-wifi-primary)] hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[var(--color-wifi-primary)] hover:text-black transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[300px] md:min-h-0">
          <div
            className="flex transition-transform duration-500 ease-in-out md:hidden"
            style={{ transform: `translateX(-${currentindex * 100}%)` }}
          >
            {reviews.map((testimonial, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {reviews.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                currentindex === i
                  ? "bg-[var(--color-wifi-primary)] w-8"
                  : "bg-slate-600",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  stars: number;
  initials?: string;
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 h-full items-center text-center md:items-start md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="h-12 w-12 rounded-full border-2 border-[var(--color-wifi-primary)]/50 bg-slate-800 flex items-center justify-center text-white font-bold shrink-0">
          {testimonial.initials || testimonial.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-bold text-white">{testimonial.name}</h3>
          <div className="text-xs text-slate-400">{testimonial.role}</div>
        </div>
      </div>
      <p className="text-slate-300 italic text-sm leading-relaxed">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="mt-auto pt-4 flex gap-1 text-[var(--color-wifi-primary)] text-xs">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
  );
}
