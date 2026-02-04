"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  innerClassName?: string;
}

export function BorderBeam({
  className,
  duration = 12,
  colorFrom = "#6c8299",
  colorTo = "#8a5921",
  innerClassName,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -inset-px rounded-[inherit] animate-border-beam",
        className
      )}
      style={{
        background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: "200% 100%",
        animationDuration: `${duration}s`,
      }}
    >
      <div
        className={cn(
          "absolute inset-[2px] rounded-[inherit] bg-white/70 backdrop-blur-sm",
          innerClassName
        )}
      />
    </div>
  );
}
