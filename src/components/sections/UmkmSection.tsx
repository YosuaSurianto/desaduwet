import { umkmContent } from "@/data";

import Marquee from "../ui/Marquee";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import GalleryGrid from "./umkm/GalleryGrid";
import PillarCard from "./umkm/PillarCard";
import TestimonialCard from "./umkm/TestimonialCard";

export default function UmkmSection() {
  return (
    <section id="umkm" className="relative z-10 px-gutter py-24 sm:py-32">
      <SectionLabel index="03" label={umkmContent.kicker} />

      <TextReveal
        as="h2"
        text={umkmContent.title}
        className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
      />

      <RevealOnScroll delay={0.15} className="mt-5 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/70 sm:text-lg">
          {umkmContent.intro}
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {umkmContent.pillars.map((pillar, index) => (
          <PillarCard key={pillar.title} pillar={pillar} index={index} />
        ))}
      </div>

      <div className="mt-14">
        <GalleryGrid items={umkmContent.gallery} />
      </div>

      <Marquee items={umkmContent.tickerItems} className="mt-14" />

      <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:gap-14">
        {umkmContent.testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
}
