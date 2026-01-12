import { SectionWrapper } from "@/components/ui/section-wrapper";
import Image from "next/image";

// Placeholder logos (using text for now or generic shapes if needed, but simple text logos are cleaner for POC)
const clients = [
  { name: "Hotel Llao Llao" },
  { name: "Cervecería Patagonia" },
  { name: "Invap" },
  { name: "Rapa Nui" },
  { name: "Hospital Zonal" },
];

export function SocialProof() {
  return (
    <div className="w-full bg-slate-50 py-10 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <span
              key={client.name}
              className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-600 cursor-default"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
