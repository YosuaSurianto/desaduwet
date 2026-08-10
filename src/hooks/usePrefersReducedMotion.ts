"use client";

import { useMediaQuery } from "./useMediaQuery";

/** True when the user has asked the OS for less motion. Used to skip
 * scroll-jacking effects (video scrubbing, pinned horizontal scroll)
 * instead of just shortening their duration. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
