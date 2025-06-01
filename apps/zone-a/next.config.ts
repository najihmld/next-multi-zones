import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/zone-a-static',
  transpilePackages: ['ui'],
};

export default nextConfig;
