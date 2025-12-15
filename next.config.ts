import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["varmepumpetipset.no"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "varmepumpetipset.no",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "varmepumpetipset.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
