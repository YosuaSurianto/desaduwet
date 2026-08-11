import type { Tradition } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type TraditionCardProps = {
  tradition: Tradition;
  index: number;
};

export default function TraditionCard({ tradition, index }: TraditionCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <GlassPanel hoverLift className="h-full p-6 sm:p-7">
        <span className="block h-1.5 w-8 rounded-full bg-emerald-400/70" aria-hidden />
        <h3 className="mt-4 font-display text-xl text-cream-50 sm:text-2xl">{tradition.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-100/70 sm:text-base">
          {tradition.body}
        </p>
      </GlassPanel>
    </RevealOnScroll>
  );
}
