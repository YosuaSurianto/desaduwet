import { heroContent } from "@/data";

import RevealOnScroll from "../ui/RevealOnScroll";
import StatGrid from "../ui/StatGrid";
import TextReveal from "../ui/TextReveal";

/**
 * Every reveal in this section passes `inView={false}` so it animates on
 * mount instead of waiting for scroll-intersection — the hero is on screen
 * at first paint on every device, so there's nothing to "scroll into view"
 * for it to wait on. See the note on RevealOnScroll/TextReveal for why this
 * matters specifically on real mobile browsers.
 */
export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-dvh flex-col justify-between px-gutter pb-8 pt-28 sm:pb-12 sm:pt-36"
    >
      {/* Mobile: no spacer, so the title sits near the top instead of
          drifting toward the middle/bottom of the viewport. Desktop keeps
          the original flex-1 centering untouched. */}
      <div className="hidden sm:block sm:flex-1" />

      <div className="max-w-4xl">
        <RevealOnScroll y={12} inView={false}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 sm:text-sm">
            {heroContent.kicker}
          </p>
        </RevealOnScroll>

        <h1 className="mt-4 font-display text-[13vw] leading-[0.95] text-cream-50 sm:text-[9vw] lg:text-[6.4vw]">
          {heroContent.titleLines.map((line, index) => (
            <TextReveal
              key={line}
              as="span"
              text={line}
              delay={0.15 + index * 0.35}
              className="block"
              wordClassName={index === 1 ? "shimmer-text" : undefined}
              inView={false}
            />
          ))}
        </h1>

        <RevealOnScroll delay={0.7} className="mt-3" inView={false}>
          <p className="font-display text-lg italic text-cream-100/70 sm:text-xl">
            {heroContent.villageName}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.85} className="mt-6 max-w-xl" inView={false}>
          <p className="text-base leading-relaxed text-cream-100/80 sm:text-lg">
            {heroContent.subtitle}
          </p>
        </RevealOnScroll>
      </div>

      <div className="mt-14 flex flex-col gap-8">
        <StatGrid stats={heroContent.stats} inView={false} />
      </div>
    </section>
  );
}
