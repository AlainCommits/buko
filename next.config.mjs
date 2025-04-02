import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporär deaktivieren der problematischen Seiten für den Build
  async redirects() {
    return [
      {
        source: '/:locale/blog',
        destination: '/:locale',
        permanent: false,
      },
      {
        source: '/:locale/blog/:slug',
        destination: '/:locale',
        permanent: false,
      },
      {
        source: '/:locale/videos',
        destination: '/:locale',
        permanent: false,
      }
    ];
  }
};

export default withNextIntl(nextConfig);
