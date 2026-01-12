import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label?: string;
  color?: "success" | "warning" | "error";
  pulsing?: boolean;
  className?: string;
}

export function StatusBadge({
  label = "Activo",
  color = "success",
  pulsing = true,
  className,
}: StatusBadgeProps) {
  const colors = {
    success: "text-emerald-700 bg-emerald-50 border-emerald-200",
    warning: "text-amber-700 bg-amber-50 border-amber-200",
    error: "text-rose-700 bg-rose-50 border-rose-200",
  };

  const dotColors = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-rose-500",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide",
        colors[color],
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {pulsing && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColors[color]
            )}
          ></span>
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            dotColors[color]
          )}
        ></span>
      </span>
      {label}
    </div>
  );
}
