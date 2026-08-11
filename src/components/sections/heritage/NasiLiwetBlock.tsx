import { heritageContent } from "@/data";

import RevealOnScroll from "../../ui/RevealOnScroll";
import TextReveal from "../../ui/TextReveal";
import SketchfabEmbed from "../../media/SketchfabEmbed";
import Timeline from "./Timeline";

const { nasiLiwet } = heritageContent;

export default function NasiLiwetBlock() {
  return (
    <div className="mt-16 sm:mt-24">
      <TextReveal
        as="h3"
        text={nasiLiwet.heading}
        className="font-display text-2xl text-cream-50 sm:text-3xl"
      />
      <RevealOnScroll delay={0.1} className="mt-4 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/80 sm:text-lg">
          {nasiLiwet.lede}
        </p>
      </RevealOnScroll>

      {/* Real 3D model of the dish itself, floating alongside its origin
          story, instead of an abstract stand-in for "dapur" and "sawah". */}
      <RevealOnScroll delay={0.15} className="-mx-gutter my-8 sm:mx-0 sm:my-10">
        <SketchfabEmbed
          title="Indonesian Food Nasi Liwet"
          embedUrl="https://sketchfab.com/models/a37c2fe05504460abf16c2bcdcaf3438/embed?autostart=1&preload=1&transparent=1"
          modelUrl="https://sketchfab.com/3d-models/indonesian-food-nasi-liwet-a37c2fe05504460abf16c2bcdcaf3438"
          modelName="Indonesian Food Nasi Liwet"
          authorName="Pramudya Art"
          authorUrl="https://sketchfab.com/pramudya.bagasart"
        />
      </RevealOnScroll>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {nasiLiwet.body.map((paragraph, index) => (
            <RevealOnScroll key={paragraph.slice(0, 24)} delay={0.1 + index * 0.08}>
              <p className="text-sm leading-relaxed text-cream-100/70 sm:text-base">
                {paragraph}
              </p>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.4} className="flex flex-wrap gap-2 pt-2">
            {nasiLiwet.servedWith.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </RevealOnScroll>
        </div>

        <Timeline entries={nasiLiwet.milestones} />
      </div>

      <RevealOnScroll delay={0.2} className="mt-10 max-w-2xl">
        <p className="font-display text-lg italic leading-relaxed text-gold-200 sm:text-xl">
          “{nasiLiwet.closing}”
        </p>
      </RevealOnScroll>
    </div>
  );
}
