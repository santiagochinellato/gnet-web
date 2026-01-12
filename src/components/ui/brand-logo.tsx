"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  color = "black",
  priority = true,
}: {
  className?: string;
  color?: "black" | "white";
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-32 h-10 flex items-center", className)}>
      {/* Use next/image for automatic optimization (WebP, resizing) */}
      <Image
        key={color}
        src={color === "black" ? "/Gnet-black.png" : "/Gnet-white.png"}
        alt="Gnet Logo"
        fill
        sizes="(max-width: 768px) 128px, 176px"
        className={cn("object-contain")}
        priority={priority}
      />
    </div>
  );
}
