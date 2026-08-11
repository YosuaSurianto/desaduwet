import { heritageContent } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";
import TextReveal from "../../ui/TextReveal";

const { merger } = heritageContent;

export default function MergerBlock() {
  return (
    <div>
      <TextReveal
        as="h3"
        text={merger.heading}
        className="font-display text-2xl text-cream-50 sm:text-3xl"
      />
      <RevealOnScroll delay={0.1} className="mt-4 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/75 sm:text-lg">
          {merger.body}
        </p>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {merger.formerKelurahan.map((kelurahan, index) => (
          <RevealOnScroll key={kelurahan.name} delay={0.15 + index * 0.1}>
            <GlassPanel hoverLift className="h-full p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Eks-Kelurahan
              </p>
              <p className="mt-2 font-display text-xl text-cream-50">{kelurahan.name}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {kelurahan.hamlets.map((hamlet) => (
                  <span
                    key={hamlet}
                    className="rounded-full border border-cream-100/15 px-3 py-1 text-xs text-cream-100/70"
                  >
                    Dukuh {hamlet}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-6 space-y-3 border-l-2 border-gold-400/60 pl-4">
        {merger.leaders.map((leader, index) => (
          <RevealOnScroll key={leader.name} delay={0.35 + index * 0.08}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="font-display text-lg text-cream-50">{leader.name}</p>
              <p className="text-sm text-cream-100/60">Kepala Desa · {leader.period}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.5} className="mt-3 max-w-2xl">
        <p className="text-sm leading-relaxed text-cream-100/60">
          {merger.leadershipNote}
        </p>
      </RevealOnScroll>
    </div>
  );
}
