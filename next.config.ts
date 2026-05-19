import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/chat",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM *", // Atau gunakan 'ALLOW-FROM https://websiteklien.com'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
