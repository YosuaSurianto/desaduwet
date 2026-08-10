"use client";

import { useEffect } from "react";

/** Freezes body scroll while `locked` is true — used by the full-screen
 * mobile menu so the page behind it can't be dragged/scrolled on touch. */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
