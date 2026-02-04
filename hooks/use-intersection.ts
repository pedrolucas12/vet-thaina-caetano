"use client";

import { useInView, type UseInViewOptions } from "framer-motion";
import { useRef } from "react";

const defaultOptions = { once: true, margin: "-80px" } satisfies UseInViewOptions;

/**
 * Hook para detectar quando um elemento entra na viewport.
 * Útil para animações de entrada ao dar scroll.
 */
export function useIntersection(options: UseInViewOptions = defaultOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, options);
  return { ref, isInView };
}
