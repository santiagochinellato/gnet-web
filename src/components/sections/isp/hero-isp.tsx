"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ISPContent } from "@/types/content";

export function HeroISP({ content }: { content: ISPContent["hero"] }) {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/racks.jpg"
          alt="Datacenter Racks"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent h-32 bottom-0 top-auto opacity-50"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="flex-1 space-y-8 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm border border-white/10"
            >
              <BadgeCheck className="w-4 h-4" />
              {content.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed"
            >
              {content.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={content.ctaPrimary.link}
                className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                {content.ctaPrimary.text}
              </Link>
              <Link
                href={content.ctaSecondary.link}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                {content.ctaSecondary.text}
              </Link>
            </motion.div>
          </div>

          <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm text-center transform scale-100 hover:scale-105 transition-transform duration-500">
            <p className="text-white/60 text-base font-mono mb-6 tracking-widest uppercase">
              Technology Partners
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80 font-bold text-2xl tracking-tighter">
              <div className="relative h-20 w-80 opacity-90 transition-opacity hover:opacity-100">
                <Image
                  src="/ubiquiti.png"
                  alt="Ubiquiti Networks"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
