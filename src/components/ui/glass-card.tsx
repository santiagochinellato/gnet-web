import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  variant?: "light" | "dark";
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  variant = "light",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border transition-all duration-300",
        // Variantes para mejor contraste
        variant === "light"
          ? "bg-white/70 border-white/40 shadow-sm backdrop-blur-xl"
          : "bg-slate-900/60 border-white/10 shadow-xl backdrop-blur-xl text-white",

        hoverEffect &&
          "hover:scale-[1.01] hover:shadow-2xl hover:border-teal-500/30 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
