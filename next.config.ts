import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, self-authored SVG project covers only
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
