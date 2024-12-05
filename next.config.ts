import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.microcms-assets.io"], // 外部ホストを追加
  },
};

export default nextConfig;
