import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // necessário no Next 16 para evitar conflito Turbopack × Webpack
  turbopack: {},

  webpack(config) {
    // força Webpack porque o Contentlayer depende dele
    return config;
  },
};

export default withContentlayer(nextConfig);
