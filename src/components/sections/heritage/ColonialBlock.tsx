import { heritageContent } from "@/data";

import RevealOnScroll from "../../ui/RevealOnScroll";

const { colonial } = heritageContent;

export default function ColonialBlock() {
  return (
    <RevealOnScroll className="mt-10 max-w-2xl border-l-2 border-clay-400/50 pl-5 sm:mt-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-300">
        {colonial.heading}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-cream-100/65 sm:text-base">
        {colonial.body}
      </p>
    </RevealOnScroll>
  );
}
