"use client";

import dynamic from "next/dynamic";

import { locationContent } from "@/data";

import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import PlaceCard from "./location/PlaceCard";

/**
 * Leaflet touches `window` as soon as its module loads, so it can't survive
 * server rendering even inside a "use client" file — `ssr: false` skips that
 * render pass entirely and mounts the map purely on the client.
 */
const VillageMap = dynamic(() => import("./location/VillageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[22rem] w-full items-center justify-center rounded-3xl border border-cream-100/15 bg-ink-soft/60 text-sm text-cream-100/50 sm:h-[28rem] lg:h-[32rem]">
      Memuat peta…
    </div>
  ),
});

export default function LocationSection() {
  return (
    <section id="lokasi" className="relative z-10 px-gutter py-24 sm:py-32">
      <SectionLabel label={locationContent.kicker} />

      <TextReveal
        as="h2"
        text={locationContent.title}
        className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
      />

      <RevealOnScroll delay={0.15} className="mt-5 max-w-2xl">
        <p className="text-base leading-relaxed text-cream-100/70 sm:text-lg">
          {locationContent.intro}
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-10">
        <VillageMap center={locationContent.mapCenter} places={locationContent.places} />
      </RevealOnScroll>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {locationContent.places.map((place, index) => (
          <PlaceCard key={place.name} place={place} index={index} />
        ))}
      </div>
    </section>
  );
}
