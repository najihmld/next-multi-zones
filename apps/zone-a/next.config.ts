import type { NextConfig } from "next";

const APP_DOMAIN = process.env.APP_DOMAIN;

const nextConfig: NextConfig = {
  assetPrefix: '/zone-a-static',
  transpilePackages: ['ui'],
  async redirects() {
    return [
      {
        source: '/login',
        destination: `${APP_DOMAIN}/login`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
