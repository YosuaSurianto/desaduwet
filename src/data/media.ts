/**
 * media.ts — background video asset.
 *
 * Two encodes of the same footage, both all-keyframe (`-g 1 -keyint_min 1`)
 * for instant scroll-scrub seeking (see assets-src/video/ for the ffmpeg
 * passes):
 * - `src`: 1280px wide, 12fps-equivalent — desktop, decoded fine there.
 * - `srcMobile`: 720px wide, 10fps-equivalent, ~4.6MB — phones have weaker
 *   video decoders, so smaller frames matter more than smoothness-from-
 *   quantity here. The browser itself picks between them via <source
 *   media="..."> in ScrollVideoBackground, before either file downloads.
 * `fps` is the encoded frame rate, used to quantize scrub seeks to actual
 * frame boundaries instead of reassigning currentTime on every scroll tick.
 */

export const scrollVideo = {
  src: "/videos/hero-sawah-scrub.mp4",
  srcMobile: "/videos/hero-sawah-scrub-mobile.mp4",
  fps: 12,
  fpsMobile: 10,
  description: "Drone footage rice terraces dengan pohon kelapa & palem",
};
