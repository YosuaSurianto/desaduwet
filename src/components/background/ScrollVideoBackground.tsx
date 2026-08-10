"use client";

import { useRef } from "react";

import { scrollVideo } from "@/data";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap } from "@/lib/gsap";

/**
 * Fixed, full-viewport cinematic video whose playhead is entirely driven by
 * scroll position — never by autoplay. GSAP tweens `video.currentTime` from
 * 0 to `video.duration`, scrubbed against the whole document's scroll range,
 * so scrolling down plays it forward and scrolling up rewinds it exactly.
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

      scrubTween = gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
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
        <source src={scrollVideo.src} type="video/mp4" />
      </video>

      {/* Legibility scrim: darker at the edges where copy usually sits. */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/35 to-ink/85" />
      <div className="absolute inset-0 bg-ink/25" />
    </div>
  );
}
