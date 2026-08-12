/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
