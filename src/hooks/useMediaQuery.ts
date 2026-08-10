"use client";

import { useEffect, useState } from "react";

/**
 * Tracks a CSS media query in React state. Used to tune heavy scroll/3D
 * choreography for small screens instead of just hiding it — mobile-first
 * means mobile still gets the effect, just a lighter version of it.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    listener();
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/** Convenience alias matching Tailwind's `lg` breakpoint (1024px). */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
