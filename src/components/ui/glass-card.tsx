import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  intensity?: "low" | "medium" | "high";
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  intensity = "medium",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[2rem] relative overflow-hidden",
        hoverEffect && "hover:scale-[1.01] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
