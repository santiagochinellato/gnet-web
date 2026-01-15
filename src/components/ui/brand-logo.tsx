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
    <div
      className={cn(
        "relative h-10 w-fit flex items-center justify-center",
        className
      )}
    >
      {/* Use next/image with intrinsic dimensions to allow w-fit/w-auto containers */}
      <Image
        key={color}
        src={color === "black" ? "/Gnet-black.png" : "/Gnet-white.png"}
        alt="Gnet Logo"
        width={200}
        height={100}
        priority={priority}
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
