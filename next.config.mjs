/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      /* The site is served under a locale segment; keep legacy paths working. */
      { source: '/for-parking-owners', destination: '/en/for-parking-owners', permanent: true },
      { source: '/for-smart-cities', destination: '/en/for-smart-cities', permanent: true },
      { source: '/contact', destination: '/en/contact', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
