import Image from "next/image";

import type { GalleryItem } from "@/data";

import GlassPanel from "../../ui/GlassPanel";
import RevealOnScroll from "../../ui/RevealOnScroll";

type GalleryGridProps = {
  items: GalleryItem[];
};

/**
 * Photo gallery for the Festival Kuliner & UMKM story. Every card carries
 * its own `credit` line rather than pretending to be on-site photography —
 * see the comment on `GalleryItem` in data/umkm.ts for why.
 */
export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <RevealOnScroll key={item.src} delay={index * 0.1}>
          <GlassPanel hoverLift className="overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
                // These already come back pre-sized/compressed from
                // Pexels's own CDN (`?w=1200`), so routing them through
                // Next's own optimizer would just add a redundant
                // server-side hop for no real gain.
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
            </div>
            <div className="p-4">
              <p className="text-sm leading-relaxed text-cream-100/80">{item.caption}</p>
              <p className="mt-2 text-xs text-cream-100/40">{item.credit}</p>
            </div>
          </GlassPanel>
        </RevealOnScroll>
      ))}
    </div>
  );
}
