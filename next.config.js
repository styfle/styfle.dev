/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
      search: '',
    }],
  },
}

module.exports = nextConfig
