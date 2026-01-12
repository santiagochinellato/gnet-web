"use client";

import { CheckCircle2, Headset, HardHat, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesGridISP() {
  return (
    <section className="pb-24 pt-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            End-to-end solutions designed specifically for the unique challenges
            of regional ISPs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Call Center Card */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)]">
              <Headset className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              ISP Call Center
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Dedicated Level 1 & 2 support agents trained in ISP workflows.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
              {[
                "24/7 Level 1 Support",
                "Ticket Management System",
                "Customer Retention Strategy",
                "Multi-language Agents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto w-full rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-3 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
              Learn More
            </button>
          </div>

          {/* Engineering Card (Featured) */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--color-primary)] bg-white dark:bg-slate-900 p-8 shadow-xl lg:-mt-4 lg:mb-4 scale-105 z-10">
            <div className="absolute top-0 right-0 rounded-bl-xl bg-[var(--color-primary)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Comprehensive
            </div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
              <HardHat className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              Engineering & Consulting
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Expert network design and configuration for scale and stability.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1 columns-1">
              {[
                "QoS & Traffic Shaping",
                "VPN Tunneling & Security",
                "IPv6 Migration",
                "OSPF & BGP Routing",
                "Zabbix/Dude Monitoring",
                "Disaster Recovery Planning",
                "Link Bonding",
                "Hardware Configuration",
                "Network Design",
                "WISP Optimization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-md cursor-pointer">
              View Capabilities
            </button>
          </div>

          {/* Equipment Repair Card */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)]">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              Equipment Repair
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Certified repair center for major networking hardware brands.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-slate-600 dark:text-slate-300 flex-1">
              {[
                "Authorized Service Center",
                "Chip-level Repair",
                "Firmware Recovery",
                "Warranty Handling",
                "Antenna Alignment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mb-6 border-t border-dashed border-slate-200 dark:border-slate-800 pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Authorized Brands
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                  Mikrotik
                </span>
                <span className="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                  Cisco
                </span>
                <span className="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                  Ubiquiti
                </span>
              </div>
            </div>
            <button className="mt-auto w-full rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-3 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
              Start Repair Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
