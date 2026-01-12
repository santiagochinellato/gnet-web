"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Residencia Los Coihues",
    category: "Hogar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoiTwKvqjuJ1xMLEZMTqkDyZvzGTj_oGhudf0WhlGqiMTemN-fbbBxoGp9MJheb9QIpAjlYgjn0q-KvFyNRQ_R26lX94hDsKSY2UW_-LYBjIqBKRma2JpUNf2fF8m-QY25gFSLqZ9Enbvkldo_STFQrzy_QsVOQFuRM17MNkd6kV03e9EAH8qq_fryZnGk32kzr9uWFfGZS3_LvEr59b2AwwcN2LswCa4LNLvf0aU8EoQh8ZY-BoVRLMgmQcaBZY96U070HsSzupxu",
  },
  {
    title: "Oficinas Centro Civico",
    category: "Empresas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_pYy0m1VB0a3ZLYXsT2PHpGocvvAZToI5wA-lCyHBY-E2XcCaed2WPt2j4JtFoj7wdzO-WqjIfdxXzcxTrJGGK79soXvM5WiQSHgrKm5hrJqgvXbvbqGSXKBcQ2PKghqTlUzNJgzqqFfGZ2IYs88iXtLs6bU9j3dQg5sndd2xNqwe4-65dzwtMsK6sQbYFivSi8sn_40AXl76pIelcJtl9LSyZWoN81eqA3HWq5onLR4PsBu5ukGlL6zltXB1pLr02-75fySmrpkP",
  },
  {
    title: "Data Center Gnet",
    category: "Infraestructura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDogi_TFpq21238FB9NPZnX97WTr8D_6HoKC4Je8y6UNgbkqpEFZyVAP6w_3f5FvdWshLn_vNSCKnmsZWt1tyjCGsRldBZfwaEgl7fdrkLv_m6j250eaenBfsl8-H-uJnUe-I12rJ0NSRS9B4bPG33YBhVgLZkTsjB8mwuIeFVXE4xAxJQJLC3_5Z0Fp03bysp-hSex_cvLiZgZpN4V15VUUn-AwU8aHUzonA_nz58kldqu-HA1h6blD46guagPW-LkwF-1eEFeGd",
  },
];

export function GallerySecurity() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="w-full max-w-[960px] mx-auto px-4 py-12 md:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              Instalaciones Recientes
            </h2>
            <Link
              href="#"
              className="text-[var(--color-primary)] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium opacity-80 uppercase tracking-wider">
                    {item.category}
                  </p>
                  <p className="text-lg font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
