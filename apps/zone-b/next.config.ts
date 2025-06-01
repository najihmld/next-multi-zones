import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/zone-b-static',
  transpilePackages: ['ui'],
};

export default nextConfig;
