import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Eine Liste mit allen unterstützten Sprachen
  locales: ['de', 'ru', 'en'],
  
  // Standard-Sprache
  defaultLocale: 'de',

  // Lokalisierungsstrategie
  localePrefix: 'as-needed',
});
 
export const config = {
  // Für alle Pfade außer denen für statische Ressourcen Middleware aktivieren
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
