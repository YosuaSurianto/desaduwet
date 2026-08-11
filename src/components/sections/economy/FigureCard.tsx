import type { EconomyFigure } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type FigureCardProps = {
  figure: EconomyFigure;
  index: number;
};

/** A real, named nasi liwet entrepreneur from Duwet — the human face behind
 * the "sentra nasi liwet" statistic, sourced from published local reporting
 * rather than invented for flavour. */
export default function FigureCard({ figure, index }: FigureCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <GlassPanel hoverLift className="h-full p-6 sm:p-7">
        <p className="font-display text-xl text-cream-50 sm:text-2xl">{figure.name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300">
          {figure.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{figure.story}</p>
        <p className="mt-4 text-xs text-cream-100/40">Sumber: {figure.source}</p>
      </GlassPanel>
    </RevealOnScroll>
  );
}
