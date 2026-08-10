import type { TourismCard as TourismCardData } from "@/data";

import GlassPanel from "../../ui/GlassPanel";

const ACCENTS = {
  emerald: {
    index: "text-emerald-300",
    chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    glow: "bg-emerald-500/20",
  },
  clay: {
    index: "text-clay-300",
    chip: "border-clay-400/30 bg-clay-500/15 text-clay-300",
    glow: "bg-clay-500/25",
  },
} as const;

type TourismCardProps = {
  card: TourismCardData;
};

export default function TourismCard({ card }: TourismCardProps) {
  const accent = ACCENTS[card.accent];

  return (
    <GlassPanel hoverLift className="hscroll-card relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${accent.glow}`} />

      <p className={`font-mono text-sm tracking-[0.2em] ${accent.index}`}>{card.index}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
        {card.kicker}
      </p>

      <h3 className="mt-4 font-display text-2xl text-cream-50 sm:text-3xl">{card.title}</h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-100/75 sm:text-base">
        {card.description}
      </p>

      <ul className="mt-5 space-y-2">
        {card.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-cream-100/70">
            <span className={`mt-1.5 h-1 w-1 flex-none rounded-full ${accent.index.replace("text-", "bg-")}`} />
            {feature}
          </li>
        ))}
      </ul>

      <p className={`mt-6 rounded-xl border px-3 py-2 text-xs leading-relaxed ${accent.chip}`}>
        {card.note}
      </p>
    </GlassPanel>
  );
}
