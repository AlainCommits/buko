import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fügen wir eine leere Konfiguration hinzu, um sicherzustellen, dass Tailwind korrekt funktioniert
};

export default withNextIntl(nextConfig);
