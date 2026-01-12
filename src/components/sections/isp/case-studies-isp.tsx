"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CaseStudiesISP() {
  return (
    <section className="bg-white dark:bg-slate-950 py-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recent Case Studies
            </h2>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
              See how we help other ISPs succeed.
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-blue-600 sm:flex"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Case Study 1 */}
          <div className="group cursor-pointer">
            <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 h-56 relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
                alt="Technician working on a fiber optic distribution box outdoors"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white group-hover:text-[var(--color-primary)]">
              Fiber Migration Project
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Connect Patagonia - Bariloche
            </p>
            <span className="mt-2 inline-flex items-center text-sm font-medium text-[var(--color-primary)]">
              Read Case Study
            </span>
          </div>
          {/* Case Study 2 */}
          <div className="group cursor-pointer">
            <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 h-56 relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1565514020176-db765b148043?q=80&w=800&auto=format&fit=crop"
                alt="Wireless antenna tower on a mountain top during sunset"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white group-hover:text-[var(--color-primary)]">
              WISP Network Optimization
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Andes Link - Regional Coverage
            </p>
            <span className="mt-2 inline-flex items-center text-sm font-medium text-[var(--color-primary)]">
              Read Case Study
            </span>
          </div>
          {/* Case Study 3 */}
          <div className="group cursor-pointer">
            <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 h-56 relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
                alt="Corporate office meeting room with network diagram on whiteboard"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white group-hover:text-[var(--color-primary)]">
              Core Network Redesign
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              SurNet - Infrastructure Upgrade
            </p>
            <span className="mt-2 inline-flex items-center text-sm font-medium text-[var(--color-primary)]">
              Read Case Study
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
