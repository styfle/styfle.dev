/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    images: {
			allowFutureImage: true,
      remotePatterns: [{
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }]
    }
  }
}
  
module.exports = nextConfig
