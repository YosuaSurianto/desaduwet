import type { TimelineEntry } from "@/data";

import RevealOnScroll from "../../ui/RevealOnScroll";

type TimelineProps = {
  entries: TimelineEntry[];
};

/** Vertical milestone timeline for the Nasi Liwet story (1582 → 2023). */
export default function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative mt-8 space-y-6 border-l border-cream-100/15 pl-6">
      {entries.map((entry, index) => (
        <RevealOnScroll key={entry.year} delay={index * 0.06} y={16}>
          <li className="relative">
            <span className="absolute -left-[1.72rem] top-1 h-2.5 w-2.5 rounded-full bg-gold-400" />
            <p className="font-mono text-xs uppercase tracking-wide text-gold-300">
              {entry.year}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-cream-100/75 sm:text-base">
              {entry.label}
            </p>
          </li>
        </RevealOnScroll>
      ))}
    </ol>
  );
}
