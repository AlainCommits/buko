import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales, Locale } from '@/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NoScriptFallback from '@/components/NoScriptFallback'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Überprüfen, ob die Sprache unterstützt wird
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Wichtig: Server-Komponenten müssen die Locale kennen
  unstable_setRequestLocale(locale as Locale)
  
  // Lade die Übersetzungen für die aktuelle Sprache
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NoScriptFallback />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
