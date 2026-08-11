/**
 * media.ts — background video asset.
 *
 * Served locally from public/videos/ instead of hotlinking Pexels' CDN, and
 * re-encoded specifically for scroll-scrubbing: every frame is its own
 * keyframe (`-g 1 -keyint_min 1` in the ffmpeg pass under assets-src/video/),
 * so GSAP can seek `video.currentTime` to any point instantly instead of
 * decoding forward from the nearest keyframe — that decode-forward cost was
 * the actual cause of the "kaku"/stiff scrubbing feel, not the GSAP tween
 * itself. Same visual footage as before, just re-encoded; nothing about the
 * background's look was changed.
 */

export const scrollVideo = {
  src: "/videos/hero-sawah-scrub.mp4",
  description: "Drone footage rice terraces dengan pohon kelapa & palem",
};
