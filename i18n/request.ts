import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '../i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Berlin'
  };
});
