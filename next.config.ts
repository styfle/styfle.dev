const nextConfig: import('next').NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true, // canary only for now
  },
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
};

export default nextConfig;
