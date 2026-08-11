import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";

import ScrollVideoBackground from "@/components/background/ScrollVideoBackground";
import GrainOverlay from "@/components/background/GrainOverlay";
import Navbar from "@/components/layout/Navbar";
import { siteMeta } from "@/data";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: swap for the real production domain once one is chosen — needed
  // so shared links resolve the OG image to an absolute URL instead of
  // silently falling back to localhost.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    locale: siteMeta.locale,
    siteName: "Desa Duwet",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#130f0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Keyboard-first escape hatch past the fixed nav + every scroll
            choreography before the real content. */}
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Lompat ke konten
        </a>

        {/* Respects prefers-reduced-motion globally for every Framer Motion
            component (TextReveal, RevealOnScroll, MobileMenu, …) without
            each one needing its own check. */}
        <MotionConfig reducedMotion="user">
          <ScrollVideoBackground />
          <GrainOverlay />
          <Navbar />
          {children}
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
