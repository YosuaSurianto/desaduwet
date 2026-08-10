import { ImageResponse } from "next/og";

import { heroContent } from "@/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Static link-preview card for WhatsApp/social shares — generated once at
 * build time (no dynamic params), matching the site's own palette instead
 * of falling back to a generic Next.js/Vercel card.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 15% 20%, #241b12 0%, #130f0a 60%)",
          color: "#f6efe1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#d9a441",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>Kecamatan Baki</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Kabupaten Sukoharjo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 28 }}>
          <span style={{ fontSize: 92, lineHeight: 1.02 }}>{heroContent.titleLines[0]}</span>
          <span style={{ fontSize: 92, lineHeight: 1.02, color: "#f0c869" }}>
            {heroContent.titleLines[1]}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 40,
          }}
        >
          <div style={{ width: 60, height: 2, background: "#d9a441" }} />
          <span style={{ fontSize: 30, fontStyle: "italic", opacity: 0.85 }}>
            {heroContent.villageName}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
