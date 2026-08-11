import { cultureContent } from "@/data";

import GlassPanel from "../ui/GlassPanel";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import TraditionCard from "./culture/TraditionCard";

export default function CultureSection() {
  return (
    <section id="budaya" className="relative z-10 px-gutter py-24 sm:py-32">
      <SectionLabel label={cultureContent.kicker} />

      <TextReveal
        as="h2"
        text={cultureContent.title}
        className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
      />

      <RevealOnScroll delay={0.15} className="mt-5 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/70 sm:text-lg">
          {cultureContent.intro}
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cultureContent.traditions.map((tradition, index) => (
          <TraditionCard key={tradition.title} tradition={tradition} index={index} />
        ))}
      </div>

      <RevealOnScroll delay={0.2} className="mt-10">
        <GlassPanel dense className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Prestasi Warga
          </p>
          <h3 className="mt-2 font-display text-xl text-cream-50 sm:text-2xl">
            {cultureContent.achievement.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/70 sm:text-base">
            {cultureContent.achievement.body}
          </p>
        </GlassPanel>
      </RevealOnScroll>
    </section>
  );
}
