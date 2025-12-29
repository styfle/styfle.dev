const nextConfig: import('next').NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/post.php',
        has: [
          {
            type: 'query',
            key: 'id',
            value: '\\d{4}-\\d{2}-\\d{2}\\.(?<slug>[^\\.]+)\\.md',
          },
        ],
        destination: '/blog/:slug?id=legacy',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
