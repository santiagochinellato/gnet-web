"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  color = "black",
}: {
  className?: string;
  color?: "black" | "white";
}) {
  return (
    <div className={cn("relative w-32 h-10 flex items-center", className)}>
      {/* Fallback to standard img to rule out Next.js Image issues */}
      <img
        key={color}
        src={color === "black" ? "/Gnet-black.png" : "/Gnet-white.png"}
        alt="Gnet Logo"
        className={cn("h-full w-auto object-contain")}
      />
    </div>
  );
}
