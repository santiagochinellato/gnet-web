"use client";

import { AtSign, ArrowRight, MapPin, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import { ContactContent } from "@/types/content";
import React from "react";

const ContactMap = dynamic(
  () => import("./contact-map").then((mod) => mod.ContactMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    ),
  }
);

export function ContactSidebar({
  content,
}: {
  content: ContactContent["sidebar"];
}) {
  return (
    <div className="flex flex-col gap-6 lg:col-span-1">
      {/* Department Emails */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AtSign className="w-5 h-5 text-[var(--color-primary)]" />
          {content.deptTitle}
        </h3>
        <div className="flex flex-col gap-4">
          {content.emails.map((dept, idx) => (
            <React.Fragment key={idx}>
              <a
                href={`mailto:${dept.email}`}
                className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[var(--color-primary)]">
                    {dept.label}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {dept.email}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-[var(--color-primary)]" />
              </a>
              {idx < content.emails.length - 1 && (
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Location Map */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
          <ContactMap />
          <div
            className="absolute bottom-3 right-3 rounded-md bg-white dark:bg-slate-900 px-2 py-1 text-xs font-bold shadow-sm text-slate-900 dark:text-white cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 z-10 pointer-events-auto"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=Mitre+123,+San+Carlos+de+Bariloche",
                "_blank"
              )
            }
          >
            Abrir en Maps
          </div>
        </div>
        <div className="p-5">
          <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
            {content.officeTitle}
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {content.address.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="flex gap-2 items-start mt-2">
              <Clock className="w-[18px] h-[18px] text-slate-400 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {content.hoursTitle}
                </p>
                {content.hours.map((line, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-400">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
