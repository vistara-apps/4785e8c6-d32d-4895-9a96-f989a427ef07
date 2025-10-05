/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['assets.coingecko.com', 'raw.githubusercontent.com'],
  },
};

export default nextConfig;
