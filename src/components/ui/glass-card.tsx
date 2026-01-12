import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/60 bg-[var(--color-surface-glass)] backdrop-blur-md shadow-sm transition-all duration-300",
        hoverEffect &&
          "hover:shadow-xl hover:-translate-y-1 hover:border-white/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
