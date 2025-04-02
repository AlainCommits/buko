'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('home')

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-combat-black">
      {/* Background Image mit Overlay-Effekt */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt="Buko Combat Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-combat-black to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl mb-6 font-bebas tracking-wider">
            <span className="gradient-text">BUKO</span> COMBAT SCHOOL
          </h1>
          
          <div className="w-40 h-1 bg-combat-red mx-auto mb-10"></div>
          
          <p className="text-2xl md:text-3xl mb-12 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/booking" className="combat-button">
              {t('cta')}
            </Link>
            <Link href="/training" className="combat-button-outline">
              {t('learnMore')}
            </Link>
          </div>
          
          <div className="mt-16 animate-bounce">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
