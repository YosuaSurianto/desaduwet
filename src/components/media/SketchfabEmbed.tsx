import type { IframeHTMLAttributes } from "react";

/**
 * Sketchfab's embed snippet sets a few legacy/vendor iframe attributes
 * (moz/webkit fullscreen, xr-spatial-tracking, execution-while-*, web-share)
 * that aren't part of React's iframe attribute typings. Browsers just
 * ignore whatever they don't recognise, so this is only a TypeScript
 * workaround — cast through `unknown` since the object has no properties
 * that overlap with `IframeHTMLAttributes` for TS to check against.
 */
const legacyIframeAttrs = {
  mozallowfullscreen: "true",
  webkitallowfullscreen: "true",
  "xr-spatial-tracking": "",
  "execution-while-out-of-viewport": "",
  "execution-while-not-rendered": "",
  "web-share": "",
} as unknown as IframeHTMLAttributes<HTMLIFrameElement>;

type SketchfabEmbedProps = {
  title: string;
  embedUrl: string;
  modelUrl: string;
  modelName: string;
  authorName: string;
  authorUrl: string;
  className?: string;
};

/**
 * Sketchfab's standard embed markup, ported to JSX and restyled to match
 * the site's ink/gold palette instead of Sketchfab's default light-mode
 * credit strip. The handful of non-standard iframe attributes (moz/webkit
 * fullscreen, xr-spatial-tracking, execution-while-*, web-share) are copied
 * straight from Sketchfab's own embed snippet — browsers ignore whatever
 * they don't recognise, and Sketchfab's embed terms require the credit
 * line below to stay visible and linked back.
 */
export default function SketchfabEmbed({
  title,
  embedUrl,
  modelUrl,
  modelName,
  authorName,
  authorUrl,
  className = "",
}: SketchfabEmbedProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-3xl border border-cream-100/10">
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          className="h-[20rem] w-full sm:h-[26rem] lg:h-[32rem]"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          {...legacyIframeAttrs}
        />
      </div>
      <p className="mt-2 text-xs text-cream-100/40">
        Model 3D{" "}
        <a
          href={modelUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-gold-300/80 hover:text-gold-300 hover:underline"
        >
          {modelName}
        </a>{" "}
        oleh{" "}
        <a
          href={authorUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-gold-300/80 hover:text-gold-300 hover:underline"
        >
          {authorName}
        </a>{" "}
        di{" "}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-gold-300/80 hover:text-gold-300 hover:underline"
        >
          Sketchfab
        </a>
        .
      </p>
    </div>
  );
}
