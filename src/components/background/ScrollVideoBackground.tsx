"use client";

import { useRef } from "react";

import { scrollVideo } from "@/data";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap } from "@/lib/gsap";

// Keep in sync with the <source media="..."> breakpoint below — used to
// pick the matching encoded frame rate for scrub quantization.
const MOBILE_QUERY = "(max-width: 767px)";

/**
 * Fixed, full-viewport cinematic video whose playhead is entirely driven by
 * scroll position — never by autoplay. GSAP tweens a plain proxy value from
 * 0 to 1, scrubbed against the whole document's scroll range, and only
 * writes it to `video.currentTime` when it has actually crossed into a new
 * encoded frame — scrolling fires far more update ticks per second than the
 * video has frames, so without this a phone's weaker decoder gets asked to
 * re-seek to essentially the same frame dozens of times a second, which is
 * what made the scrub feel choppy specifically on mobile (desktop hardware
 * just absorbs the redundant seeks).
 */
export default function ScrollVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    let scrubTween: gsap.core.Tween | undefined;

    const bindScrub = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      scrubTween?.scrollTrigger?.kill();
      scrubTween?.kill();

      const fps = window.matchMedia(MOBILE_QUERY).matches
        ? scrollVideo.fpsMobile
        : scrollVideo.fps;
      const frameDuration = 1 / fps;
      const progress = { value: 0 };

      scrubTween = gsap.to(progress, {
        value: 1,
        ease: "none",
        onUpdate: () => {
          const target = progress.value * video.duration;
          if (Math.abs(target - video.currentTime) >= frameDuration * 0.9) {
            video.currentTime = target;
          }
        },
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });
    };

    if (video.readyState >= 1) {
      bindScrub();
    } else {
      video.addEventListener("loadedmetadata", bindScrub, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", bindScrub);
      scrubTween?.scrollTrigger?.kill();
      scrubTween?.kill();
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden className="fixed inset-0 z-0 h-dvh w-full overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        // "metadata" (not "auto") so phones on limited data only fetch the
        // duration up front; GSAP then pulls video chunks on demand via
        // range requests as the user actually scrolls.
        preload="metadata"
        aria-hidden
        className="h-full w-full object-cover"
      >
        {/* Browser picks the first matching <source> before downloading
            anything — this is the native responsive-video mechanism, same
            idea as <picture> for images. */}
        <source media={MOBILE_QUERY} src={scrollVideo.srcMobile} type="video/mp4" />
        <source src={scrollVideo.src} type="video/mp4" />
      </video>

      {/* Legibility scrim: darker at the edges where copy usually sits. */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/35 to-ink/85" />
      <div className="absolute inset-0 bg-ink/25" />
    </div>
  );
}
