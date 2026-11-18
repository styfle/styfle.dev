const nextConfig: import('next').NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Next.js always bundles its ~1.4 KB polyfill module into the client entry
    // (next/dist/client/app-globals.js imports it unconditionally), regardless of
    // browserslist. Our supported browsers already implement every guarded API,
    // so replace the module with an empty one.
    // Upstream: https://github.com/vercel/next.js/issues/86785
    // If you ever set `assetPrefix`, note this also drops the URL.canParse
    // fallback (Chrome < 120 / Safari < 17.4).
    resolveAlias: {
      '../build/polyfills/polyfill-module': './empty-polyfills.js',
    },
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
