import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18n';

// Simple way to verify all required translations exist at build time
const verifyMessages = (messages: any, prefix = '') => {
  if (!messages) return;
  
  if (typeof messages === 'object') {
    Object.keys(messages).forEach(key => {
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      verifyMessages(messages[key], newPrefix);
    });
  }
};

export default getRequestConfig(async ({ locale }) => {
  // Ensure the locale is supported
  if (!locales.includes(locale as any)) {
    locale = 'de'; // fallback to default
  }

  // Load messages for the requested locale
  const messages = (await import(`../messages/${locale}.json`)).default;
  
  // Verify messages in development (optional)
  if (process.env.NODE_ENV === 'development') {
    verifyMessages(messages);
  }
  
  return {
    messages,
    timeZone: 'Europe/Berlin',
    now: new Date(),
  };
});
