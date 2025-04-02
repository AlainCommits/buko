'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { FaWhatsapp, FaPhone, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('navigation')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-combat-black text-gray-300 border-t border-combat-red/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Branding und Kontakt */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <span 
                className="text-3xl tracking-wider text-white"
                style={{ fontFamily: "'Anton', Impact, sans-serif" }}
              >
                <span className="text-combat-red">BUKO</span> COMBAT
              </span>
            </div>
            <p className="mb-8 text-gray-400 leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-combat-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Punch Fitness Essen GmbH, Leimkugelstrasse 9, 45141 Essen</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-combat-red" />
                <span>+49 176 61890226</span>
              </p>
            </div>
          </div>

          {/* Schnelllinks */}
          <div className="md:col-span-2">
            <h3 
              className="text-2xl mb-6 text-white"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-combat-red transition-colors">{nav('home')}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-combat-red transition-colors">{nav('about')}</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-combat-red transition-colors">{nav('training')}</Link></li>
              <li><Link href="/seminars" className="text-gray-400 hover:text-combat-red transition-colors">{nav('seminars')}</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 
              className="text-2xl mb-6 text-white invisible md:visible"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              .
            </h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-400 hover:text-combat-red transition-colors">{nav('blog')}</Link></li>
              <li><Link href="/videos" className="text-gray-400 hover:text-combat-red transition-colors">{nav('videos')}</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-combat-red transition-colors">{nav('booking')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-combat-red transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <h3 
              className="text-2xl mb-6 text-white"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              {t('contactTitle')}
            </h3>
            <p className="mb-6 text-gray-400">
              {t('contactInfo')}
            </p>
            
            {/* Kontaktmöglichkeiten */}
            <div className="space-y-4 mb-8">
              <a href="tel:+4917661890226" className="flex items-center text-white hover:text-combat-red transition-colors">
                <div className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                              hover:bg-combat-red transition-colors mr-3">
                  <FaPhone className="text-white" />
                </div>
                <span>+49 176 61890226</span>
              </a>
              
              <a href="https://wa.me/4917661890226" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center text-white hover:text-combat-red transition-colors">
                <div className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                              hover:bg-combat-red transition-colors mr-3">
                  <FaWhatsapp className="text-white" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
            
            {/* YouTube (falls vorhanden) */}
            <div>
              <h3 
                className="text-xl mb-4 text-white"
                style={{ fontFamily: "'Anton', Impact, sans-serif" }}
              >
                {t('followTitle')}
              </h3>
              <div className="flex space-x-4">
                <a href="https://youtube.com/bukocombat" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                            hover:bg-combat-red transition-colors">
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">{t('rights', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  )
}
