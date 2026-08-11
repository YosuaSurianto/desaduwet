"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /**
   * false = animate immediately on mount instead of waiting for scroll
   * intersection. Use for content that's already on screen at first paint
   * (the hero) — on some real mobile browsers the dynamic toolbar is still
   * resizing the viewport (`dvh`) when `whileInView`'s IntersectionObserver
   * takes its first reading, which can leave the element stuck at its
   * `initial` (invisible) state forever. Below-the-fold sections should
   * keep the default (true).
   */
  inView?: boolean;
};

/**
 * Generic fade + slide-up entrance for non-text elements (cards, panels,
 * the 3D canvas wrapper). TextReveal handles headline copy specifically;
 * this handles everything else that should ease into view.
 */
export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  y = 32,
  once = true,
  inView = true,
}: RevealOnScrollProps) {
  const trigger = inView
    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once, amount: 0.15 } }
    : { animate: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
