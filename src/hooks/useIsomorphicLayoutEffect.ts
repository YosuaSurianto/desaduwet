"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect throws a warning when it runs on the server (Next.js SSR).
 * GSAP/ScrollTrigger setup always needs to happen after layout, on the
 * client only, so every animated component uses this instead.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
