import type { UmkmPillar } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type PillarCardProps = {
  pillar: UmkmPillar;
  index: number;
};

export default function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <GlassPanel hoverLift className="h-full p-6 sm:p-7">
        <span className="font-mono text-xs text-gold-400">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-3 font-display text-xl text-cream-50 sm:text-2xl">{pillar.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-100/70 sm:text-base">
          {pillar.body}
        </p>
      </GlassPanel>
    </RevealOnScroll>
  );
}
