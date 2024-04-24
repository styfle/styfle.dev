/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	  async rewrites() {
    return [
      {
				    source: '/static/:path*',
          destination: `https://s3.amazonaws.com/wowa.ca/static/:path*`,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
    }],
  },
}

module.exports = nextConfig
