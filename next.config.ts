const nextConfig: import('next').NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
