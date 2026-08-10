import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary illustrative gallery photography (see data/umkm.ts) is
    // served from Pexels until real on-site UMKM/festival photos exist.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
