/**
 * lib/gsap.ts
 * ---------------------------------------------------------------------------
 * Single place where GSAP + ScrollTrigger get imported and registered.
 * Every component that needs scroll-driven animation imports gsap/
 * ScrollTrigger from here instead of "gsap" directly, so the plugin is
 * guaranteed to be registered exactly once and only on the client.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Editorial-feeling default easing for anything that doesn't specify one.
  gsap.defaults({ ease: "power3.out", duration: 1 });

  // Mobile-first fix: iOS/Android show/hide their address bar as you scroll,
  // which fires a `resize` event. Without this, ScrollTrigger treats that as
  // a real viewport change and can re-pin/jump the horizontal tourism
  // section mid-scroll on phones.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };
