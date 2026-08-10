type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

/** Small numbered kicker used at the top of every major section. */
export default function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-cream-100/70 ${className}`}>
      <span className="font-mono text-sm tracking-[0.2em] text-gold-400">{index}</span>
      <span className="h-px w-10 bg-gold-400/50" />
      <span className="text-xs font-medium uppercase tracking-[0.25em] sm:text-sm">
        {label}
      </span>
    </div>
  );
}
