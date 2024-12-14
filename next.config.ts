import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site/',
};

export default nextConfig;
