import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionWrapper({
  children,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
