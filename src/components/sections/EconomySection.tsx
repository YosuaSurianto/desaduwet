import { economyContent } from "@/data";

import Marquee from "../ui/Marquee";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import FigureCard from "./economy/FigureCard";
import PillarCard from "./economy/PillarCard";

export default function EconomySection() {
  return (
    <section id="ekonomi" className="relative z-10 px-gutter py-24 sm:py-32">
      <SectionLabel label={economyContent.kicker} />

      <TextReveal
        as="h2"
        text={economyContent.title}
        className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
      />

      <RevealOnScroll delay={0.15} className="mt-5 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/70 sm:text-lg">
          {economyContent.intro}
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {economyContent.pillars.map((pillar, index) => (
          <PillarCard key={pillar.title} pillar={pillar} index={index} />
        ))}
      </div>

      <div className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
          Wajah di Balik Dapur Nasi Liwet
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {economyContent.figures.map((figure, index) => (
            <FigureCard key={figure.name} figure={figure} index={index} />
          ))}
        </div>
      </div>

      <Marquee items={economyContent.tickerItems} className="mt-14" />

      <RevealOnScroll delay={0.2} className="mt-14 max-w-2xl border-l-2 border-clay-400/50 pl-5">
        <p className="text-sm leading-relaxed text-cream-100/65 sm:text-base">
          {economyContent.honestNote}
        </p>
      </RevealOnScroll>
    </section>
  );
}
