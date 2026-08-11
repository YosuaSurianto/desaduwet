import type { HeroStat } from "@/data";

import RevealOnScroll from "./RevealOnScroll";

type StatGridProps = {
  stats: HeroStat[];
  className?: string;
  /** false = animate on mount instead of on scroll intersection — the hero
   * (this component's only caller today) is on screen at first paint. */
  inView?: boolean;
};

/** Row of big numerals with a caption underneath — used in the hero. */
export default function StatGrid({ stats, className = "", inView = true }: StatGridProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <RevealOnScroll key={stat.label} delay={index * 0.08} y={16} inView={inView}>
          <div className="border-l border-cream-100/20 pl-3 sm:pl-4">
            <p className="font-display text-2xl text-gold-300 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-cream-100/65 sm:text-sm">
              {stat.label}
            </p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
