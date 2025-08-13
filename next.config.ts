import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // This will allow production builds to successfully complete
    // even if your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
