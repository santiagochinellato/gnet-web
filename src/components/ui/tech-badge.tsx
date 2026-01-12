import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label?: string; // Ej: "LIVE" o "STATUS"
  text: string; // Ej: "Red Fibra Óptica Activa"
  color?: "teal" | "indigo" | "rose";
  className?: string;
}

export function TechBadge({
  label = "LIVE",
  text,
  color = "teal",
  className,
}: TechBadgeProps) {
  // Mapeo de colores para flexibilidad futura
  const colors = {
    teal: {
      outer: "bg-teal-950/40 border-teal-500/20 text-teal-100",
      inner: "bg-teal-500/10 text-teal-300 ring-teal-500/40",
      glow: "bg-teal-400",
    },
    indigo: {
      outer: "bg-indigo-950/40 border-indigo-500/20 text-indigo-100",
      inner: "bg-indigo-500/10 text-indigo-300 ring-indigo-500/40",
      glow: "bg-indigo-400",
    },
    rose: {
      outer: "bg-rose-950/40 border-rose-500/20 text-rose-100",
      inner: "bg-rose-500/10 text-rose-300 ring-rose-500/40",
      glow: "bg-rose-400",
    },
  };

  const activeColor = colors[color];

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 pr-4 rounded-full border backdrop-blur-md transition-all duration-300 hover:bg-white/5",
        activeColor.outer,
        className
      )}
    >
      {/* CÁPSULA INTERNA (La etiqueta técnica) */}
      <span
        className={cn(
          "flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider ring-1 ring-inset uppercase mr-3 shadow-inner",
          activeColor.inner
        )}
      >
        {/* El "Led" indicador ahora es más pequeño y nítido */}
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              activeColor.glow
            )}
          ></span>
          <span
            className={cn(
              "relative inline-flex rounded-full h-1.5 w-1.5",
              activeColor.glow
            )}
          ></span>
        </span>
        {label}
      </span>

      {/* TEXTO PRINCIPAL */}
      <span className="text-sm font-medium tracking-tight">{text}</span>
    </div>
  );
}
