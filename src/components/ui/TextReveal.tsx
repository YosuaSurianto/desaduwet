"use client";

import { motion } from "framer-motion";

/** Pre-built motion tags — covers every heading/paragraph the site needs
 * without reaching for `motion.create()`, which wants a stable component
 * reference (not something re-derived from a prop on every render). */
const MOTION_TAGS = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
} as const;

type TextRevealProps = {
  text: string;
  as?: keyof typeof MOTION_TAGS;
  className?: string;
  wordClassName?: string;
  /** Delay (s) added before the first word starts, e.g. to follow a kicker. */
  delay?: number;
  /** Stagger (s) between each word. */
  stagger?: number;
  /**
   * false = animate immediately on mount instead of waiting for scroll
   * intersection — see the same note on RevealOnScroll. Use for the hero
   * headline, which is on screen at first paint on every device.
   */
  inView?: boolean;
};

/**
 * Splits `text` into words and reveals them one by one (mask + slide-up)
 * as the element enters the viewport. Used for every dramatic headline in
 * the site so section transitions feel considered rather than instant.
 */
export default function TextReveal({
  text,
  as = "p",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.055,
  inView = true,
}: TextRevealProps) {
  const Tag = MOTION_TAGS[as];
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.3 } }
    : { animate: "visible" };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
