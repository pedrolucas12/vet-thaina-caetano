"use client";

import { cn } from "@/lib/utils";

interface ShineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ShineButton({ children, className, ...props }: ShineButtonProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] before:animate-shine",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
