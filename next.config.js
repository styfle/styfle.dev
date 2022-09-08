/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
    }],
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  }
}

module.exports = nextConfig
