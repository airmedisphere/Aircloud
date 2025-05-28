import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: ''
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    config.resolve.fallback = { fs: false, net: false, async_hooks: false };
    return config;
  }
};

export default withSentryConfig(nextConfig, {
  org: 'kumneger-cg',
  project: 'tg-cloud',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true
});