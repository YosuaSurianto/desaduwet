type MarqueeProps = {
  items: string[];
  className?: string;
};

/** Static wrapped tag list (no auto-scroll animation) — same "item ✦ item"
 * look the site already uses for the dukuh list and ticker items, just
 * without the sideways-moving marquee motion. */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-1 gap-y-2 ${className}`}>
      {items.map((item, index) => (
        <span
          key={item}
          className="flex items-center gap-3 px-3 text-sm font-medium tracking-wide text-cream-100/80 sm:text-base"
        >
          {item}
          {index < items.length - 1 && (
            <span className="text-gold-400/70" aria-hidden>
              ✦
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
