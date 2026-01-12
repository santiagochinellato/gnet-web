"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Calendar, FileText, Server } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroISP() {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay - Matched to Home */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/racks.webp")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent h-32 bottom-0 top-auto opacity-50"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm border border-white/10"
            >
              <BadgeCheck className="w-4 h-4" />
              Certified ISP Solutions Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Scale Your{" "}
              <span className="text-[var(--color-primary)]">
                Network Infrastructure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed"
            >
              Premium B2B consulting and engineering for Internet Service
              Providers. We optimize your backbone, manage your support, and
              repair your critical hardware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/contacto"
                className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3.5 text-base font-bold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Link>
              <button className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3.5 text-base font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                <FileText className="w-5 h-5" />
                View Case Studies
              </button>
            </motion.div>
          </div>

          {/* Decorative Logo Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-1 justify-end items-center opacity-80 mix-blend-screen"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm text-center">
              <p className="text-white/60 text-sm font-mono mb-4 tracking-widest uppercase">
                Technology Partners
              </p>
              <div className="flex items-center justify-center gap-8 text-white/80 font-bold text-2xl tracking-tighter">
                <div className="flex items-center gap-2">
                  <Server className="w-10 h-10" />
                  UBIQUITI
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
