import { heroContent } from "@/data";

import RevealOnScroll from "../ui/RevealOnScroll";
import StatGrid from "../ui/StatGrid";
import TextReveal from "../ui/TextReveal";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-dvh flex-col justify-between px-gutter pb-8 pt-28 sm:pb-12 sm:pt-36"
    >
      <div className="flex-1" />

      <div className="max-w-4xl">
        <RevealOnScroll y={12}>
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
            />
          ))}
        </h1>

        <RevealOnScroll delay={0.7} className="mt-3">
          <p className="font-display text-lg italic text-cream-100/70 sm:text-xl">
            {heroContent.villageName}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.85} className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-cream-100/80 sm:text-lg">
            {heroContent.subtitle}
          </p>
        </RevealOnScroll>
      </div>

      <div className="mt-14 flex flex-col gap-8">
        <StatGrid stats={heroContent.stats} />

        <RevealOnScroll delay={0.3} className="flex items-center gap-3 text-cream-100/60">
          <span className="pulse-ring h-2 w-2 rounded-full bg-gold-400" />
          <span className="text-xs uppercase tracking-[0.25em] sm:text-sm">
            {heroContent.scrollCue}
          </span>
        </RevealOnScroll>
      </div>
    </section>
  );
}
