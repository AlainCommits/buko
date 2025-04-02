import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize build for faster deployment
  swcMinify: true,
  
  // Improve performance with memory optimization
  experimental: {
    optimizeCss: true,
  },
  
  // Handle images properly
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default withNextIntl(nextConfig);
