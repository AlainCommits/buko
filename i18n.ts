import { getRequestConfig } from 'next-intl/server';

export const locales = ['de', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  ru: 'Русский',
  en: 'English'
};

// Wichtig: next-intl erwartet diesen default export
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || defaultLocale;
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Berlin'
  };
});
