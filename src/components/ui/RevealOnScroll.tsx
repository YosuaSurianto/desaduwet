"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
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
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
