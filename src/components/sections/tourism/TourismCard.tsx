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

/** Tiny inline glyphs instead of a sequential "01 / 02" numeral — a rice
 * stalk for the sawah card, a cup for the coffee-shop card. */
const ICONS = {
  sawah: (
    <path
      d="M12 21c0-5.5 2.6-8 2.6-13M12 21c0-5.5-2.6-8-2.6-13M12 21V8.5"
      strokeLinecap="round"
    />
  ),
  kopi: (
    <path
      d="M4.5 9h12a3 3 0 0 1 0 6h-.7M4.5 9v6.5A3.5 3.5 0 0 0 8 19h3a3.5 3.5 0 0 0 3.5-3.5V13M4.5 9V6h12v3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
} as const;

type TourismCardProps = {
  card: TourismCardData;
};

export default function TourismCard({ card }: TourismCardProps) {
  const accent = ACCENTS[card.accent];
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.mapQuery)}`;

  return (
    <GlassPanel hoverLift className="hscroll-card relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${accent.glow}`} />

      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className={`h-5 w-5 flex-none ${accent.index}`}
          aria-hidden
        >
          {ICONS[card.icon]}
        </svg>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
          {card.kicker}
        </p>
      </div>

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

      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-hover mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-cream-100/15 px-4 py-2 text-xs font-medium text-cream-100/80"
      >
        Buka rute ↗
      </a>
    </GlassPanel>
  );
}
