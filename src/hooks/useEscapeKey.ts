"use client";

import { useEffect } from "react";

/** Calls `onEscape` when the user presses Escape while `enabled` — used to
 * close the mobile menu without requiring a mouse/touch tap. */
export function useEscapeKey(onEscape: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [enabled, onEscape]);
}
