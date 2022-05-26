/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    images: {
      layoutRaw: true,
      remotePatterns: [{
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }]
    }
  }
}
  
module.exports = nextConfig
