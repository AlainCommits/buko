'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter, usePathname } from '@/navigation'
import { locales, localeNames, Locale } from '@/i18n'

export default function Header() {
  const t = useTranslations('navigation')
  const currentLocale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll-Erkennung für transparenten Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale as Locale })
  }

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('training'), href: '/training' },
    { name: t('seminars'), href: '/seminars' },
    { name: t('blog'), href: '/blog' },
    { name: t('videos'), href: '/videos' },
    { name: t('booking'), href: '/booking' },
    { name: t('contact'), href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-combat-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bebas text-3xl tracking-wider text-white">
              <span className="text-combat-red">BUKO</span> COMBAT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-white/80 hover:text-combat-red font-medium uppercase tracking-wider text-sm py-1 hover:border-b-2 hover:border-combat-red transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="hidden md:block">
              <select
                value={currentLocale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-combat-gray/50 backdrop-blur-sm border border-gray-600 text-white rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-combat-red text-sm"
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale} className="bg-combat-gray text-white">
                    {localeNames[locale]}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              className="text-white md:hidden focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-combat-black/95 backdrop-blur-lg px-6 py-4 space-y-4 border-t border-gray-800">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="block text-white hover:text-combat-red font-bebas tracking-wider text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-gray-800">
            <select
              value={currentLocale}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-full bg-combat-gray/50 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-combat-red"
            >
              {locales.map((locale) => (
                <option key={locale} value={locale} className="bg-combat-gray text-white">
                  {localeNames[locale]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
