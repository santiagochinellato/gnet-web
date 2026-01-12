import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

export function ButtonCTA({
  className,
  variant = "primary",
  size = "lg",
  isLoading = false,
  children,
  disabled,
  ...props
}: ButtonCTAProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg shadow-blue-500/20 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-500/30 border-transparent",
    outline:
      "bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50",
    ghost:
      "bg-transparent text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-100/50",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
