type SectionLabelProps = {
  label: string;
  className?: string;
};

/**
 * Small kicker used at the top of every major section: just an uppercase
 * label. Deliberately has no sequential numbering ("01", "Bagian I", …) and
 * no decorative rule — sections aren't meant to read like a numbered table
 * of contents.
 */
export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`text-cream-100/70 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-[0.25em] sm:text-sm">
        {label}
      </span>
    </div>
  );
}
