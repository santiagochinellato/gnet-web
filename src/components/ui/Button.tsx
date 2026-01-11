import { cn } from "@/lib/utils";

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full bg-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-brand-deep transition-all font-medium border border-brand-accent/50 cursor-pointer",
        className
      )}
      {...props}
    />
  );
}
