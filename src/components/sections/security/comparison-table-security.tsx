"use client";

import { SecurityContent } from "@/types/content";

export function ComparisonTableSecurity({
  content,
}: {
  content: SecurityContent["comparison"];
}) {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-16 md:px-10">
      <div className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            {content.description}
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <th className="p-5 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-1/3">
                  Características
                </th>
                <th className="p-5 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 dark:text-white font-black text-lg">
                      {content.brandStandard}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
                      Lite Series
                    </span>
                  </div>
                </th>
                <th className="p-5 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-primary)] font-black text-lg">
                      {content.brandPro}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--color-primary)] text-white">
                      Pro Series
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {content.rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-5 text-sm font-bold text-slate-900 dark:text-slate-200">
                    {row.label}
                  </td>
                  <td className="p-5 text-sm text-slate-500 dark:text-slate-400">
                    {row.valueStandard}
                  </td>
                  <td className="p-5 text-sm font-medium text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-900/5">
                    {row.valuePro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
