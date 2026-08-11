import type { EconomyPillar } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type PillarCardProps = {
  pillar: EconomyPillar;
  index: number;
};

export default function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <GlassPanel hoverLift className="h-full p-6 sm:p-7">
        <span className="block h-1.5 w-8 rounded-full bg-gold-400/70" aria-hidden />
        <h3 className="mt-4 font-display text-xl text-cream-50 sm:text-2xl">{pillar.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-100/70 sm:text-base">
          {pillar.body}
        </p>
      </GlassPanel>
    </RevealOnScroll>
  );
}
