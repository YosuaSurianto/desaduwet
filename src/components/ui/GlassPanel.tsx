import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  /** Denser, higher-contrast glass — for panels sitting directly on video. */
  dense?: boolean;
  hoverLift?: boolean;
};

/**
 * Reusable glassmorphism surface (see styles/glass.css). Every card, the
 * navbar strip and stat chips share this so the "video visible through
 * blur" effect stays consistent site-wide.
 */
export default function GlassPanel({
  children,
  className = "",
  dense = false,
  hoverLift = false,
}: GlassPanelProps) {
  const base = dense ? "glass-dense" : "glass";
  const hover = hoverLift ? "glass-hover" : "";

  return <div className={`${base} ${hover} rounded-3xl ${className}`}>{children}</div>;
}
