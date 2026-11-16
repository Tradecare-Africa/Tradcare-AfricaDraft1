import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // next/image serves AVIF first, then WebP, with a responsive srcset per `sizes`.
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // "Divisions" was renamed to "Service Ecosystem"
      { source: '/divisions', destination: '/service-ecosystem', permanent: true },
      { source: '/divisions/:slug', destination: '/service-ecosystem/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
