import type { Testimonial } from "@/data";

import RevealOnScroll from "../../ui/RevealOnScroll";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <RevealOnScroll delay={index * 0.12} className="max-w-md">
      <p className="font-display text-lg italic leading-relaxed text-cream-100/90 sm:text-xl">
        “{testimonial.quote}”
      </p>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold-300">
        — {testimonial.author}
      </p>
    </RevealOnScroll>
  );
}
