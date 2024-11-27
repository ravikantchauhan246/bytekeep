import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions:{
      bodySizeLimit:"50mb",
    }
  },
  images: {
    domains: ['res.cloudinary.com','pngtree.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
