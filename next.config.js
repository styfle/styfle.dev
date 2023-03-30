/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
    }],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
