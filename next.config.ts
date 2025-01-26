import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_API_URL: process.env.PUBLIC_API_URL,
  },
};

export default nextConfig;
