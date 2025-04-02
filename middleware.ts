import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
 
export default createMiddleware({
  // Eine Liste mit allen unterstützten Sprachen
  locales,
  
  // Standard-Sprache
  defaultLocale,

  // Lokalisierungsstrategie (immer Sprachcode anzeigen für bessere Konsistenz)
  localePrefix: 'always',
});
 
export const config = {
  // Für alle Pfade außer denen für statische Ressourcen Middleware aktivieren
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
