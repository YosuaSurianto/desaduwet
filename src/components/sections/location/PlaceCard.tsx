import type { MapPlace } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type PlaceCardProps = {
  place: MapPlace;
  index: number;
};

export default function PlaceCard({ place, index }: PlaceCardProps) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`;

  return (
    <RevealOnScroll delay={index * 0.1}>
      <GlassPanel hoverLift className="h-full p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
          {place.category}
        </p>
        <p className="mt-2 font-display text-lg text-cream-50 sm:text-xl">{place.name}</p>
        <p className="mt-2 text-xs leading-relaxed text-cream-100/60">{place.address}</p>
        <p className="mt-3 text-sm leading-relaxed text-cream-100/75">{place.description}</p>

        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-hover mt-4 inline-flex items-center gap-1.5 rounded-full border border-cream-100/15 px-4 py-2 text-xs font-medium text-cream-100/80"
        >
          Buka rute ↗
        </a>
      </GlassPanel>
    </RevealOnScroll>
  );
}
