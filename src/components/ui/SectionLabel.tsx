type SectionLabelProps = {
  label: string;
  className?: string;
};

/**
 * Small kicker used at the top of every major section: a short gold rule
 * plus an uppercase label. Deliberately has no sequential numbering
 * ("01", "Bagian I", …) — sections aren't meant to read like a numbered
 * table of contents.
 */
export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-cream-100/70 ${className}`}>
      <span className="h-px w-10 bg-gold-400/50" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-[0.25em] sm:text-sm">
        {label}
      </span>
    </div>
  );
}
