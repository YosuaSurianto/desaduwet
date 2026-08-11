"use client";

import { useRef } from "react";

import { tourismCards } from "@/data";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import RevealOnScroll from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";
import TextReveal from "../ui/TextReveal";
import TourismCard from "./tourism/TourismCard";

/**
 * Pins the section and drives the card track horizontally as the user
 * scrolls vertically — the classic GSAP ScrollTrigger horizontal-scroll
 * recipe. `invalidateOnRefresh` keeps the travel distance correct on resize
 * (e.g. rotating a phone), which is what makes this safe to leave on for
 * mobile instead of only enabling it on desktop.
 *
 * When the user prefers reduced motion, the pin/scrub is skipped entirely
 * and the track becomes a plain native horizontally-scrollable list — the
 * cards stay reachable, just without the scroll-jacking.
 */
export default function TourismSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || reduceMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 0)}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(track, {
          x: () => -Math.max(track.scrollWidth - window.innerWidth, 0),
          ease: "none",
        }),
      });
    }, section);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      id="wisata"
      ref={sectionRef}
      className={`hscroll-section relative z-10 flex flex-col justify-center py-20 ${
        reduceMotion ? "" : "min-h-dvh"
      }`}
    >
      <div className="px-gutter mb-10">
        <SectionLabel label="Wisata Duwet" />
        <TextReveal
          as="h2"
          text="Sawah untuk Belajar, Kopi untuk Bersantai"
          className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-5xl"
        />
        <RevealOnScroll delay={0.15} className="mt-4 max-w-xl">
          <p className="text-sm leading-relaxed text-cream-100/70 sm:text-base">
            Geser untuk menjelajah dua wajah wisata Desa Duwet, dari edukasi sawah yang menenangkan hingga ngopi santai di tengah sawah Gondangsari.
          </p>
        </RevealOnScroll>
      </div>

      <div
        ref={trackRef}
        className={`hscroll-track px-gutter ${reduceMotion ? "no-scrollbar overflow-x-auto" : ""}`}
      >
        {tourismCards.map((card) => (
          <TourismCard key={card.id} card={card} />
        ))}
        {/* Trailing spacer so the last card can fully clear the viewport edge. */}
        <div className="w-[4vw] flex-none sm:w-[8vw]" aria-hidden />
      </div>
    </section>
  );
}
