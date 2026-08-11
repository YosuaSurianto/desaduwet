import { heritageContent } from "@/data";

import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import ColonialBlock from "./heritage/ColonialBlock";
import MergerBlock from "./heritage/MergerBlock";
import NasiLiwetBlock from "./heritage/NasiLiwetBlock";

export default function HeritageSection() {
  return (
    <section id="warisan" className="relative z-10 px-gutter py-24 sm:py-32">
      <div className="glass-dense mx-auto max-w-5xl rounded-[2rem] p-6 sm:p-12 lg:p-16">
        <SectionLabel label={heritageContent.kicker} />

        <TextReveal
          as="h2"
          text={heritageContent.title}
          className="mt-4 max-w-3xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
        />

        <RevealOnScroll delay={0.15} className="mt-5 max-w-2xl">
          <p className="text-base leading-relaxed text-cream-100/70 sm:text-lg">
            {heritageContent.intro}
          </p>
        </RevealOnScroll>

        <div className="mt-14 sm:mt-20">
          <MergerBlock />
          <ColonialBlock />
        </div>

        <NasiLiwetBlock />
      </div>
    </section>
  );
}
