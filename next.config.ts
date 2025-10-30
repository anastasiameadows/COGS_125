import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/COGS_125/' : '',
  basePath: isProd ? '/COGS_125' : '',
  output: 'export',
};

export default nextConfig;
