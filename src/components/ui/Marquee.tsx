type MarqueeProps = {
  items: string[];
  className?: string;
};

/** Infinite horizontal ticker (pure CSS, see .marquee-track in animations.css). */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={`no-scrollbar overflow-hidden ${className}`}>
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-3 px-6 text-sm font-medium tracking-wide text-cream-100/80 sm:text-base"
          >
            {item}
            <span className="text-gold-400/70" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
