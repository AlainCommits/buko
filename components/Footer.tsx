'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

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
              <span className="font-bebas text-3xl tracking-wider text-white">
                <span className="text-combat-red">BUKO</span> COMBAT
              </span>
            </div>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Die ultimative Schule für effektive Selbstverteidigung und Kampfkunst, 
              unter der Leitung des renommierten Trainers Vladimir Buko.
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-combat-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Kampfstraße 123, 12345 Berlin</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-combat-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+49 123 456789</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-combat-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@buko-combat.de</span>
              </p>
            </div>
          </div>

          {/* Schnelllinks */}
          <div className="md:col-span-2">
            <h3 className="font-bebas text-2xl mb-6 text-white">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-combat-red transition-colors">{nav('home')}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-combat-red transition-colors">{nav('about')}</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-combat-red transition-colors">{nav('training')}</Link></li>
              <li><Link href="/seminars" className="text-gray-400 hover:text-combat-red transition-colors">{nav('seminars')}</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-bebas text-2xl mb-6 text-white invisible md:visible">.</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-400 hover:text-combat-red transition-colors">{nav('blog')}</Link></li>
              <li><Link href="/videos" className="text-gray-400 hover:text-combat-red transition-colors">{nav('videos')}</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-combat-red transition-colors">{nav('booking')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-combat-red transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-bebas text-2xl mb-6 text-white">Newsletter</h3>
            <p className="mb-6 text-gray-400">
              Abonnieren Sie unseren Newsletter und erhalten Sie Updates zu neuen Trainingsangeboten, 
              Blog-Beiträgen und kommenden Veranstaltungen.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse" 
                  className="bg-combat-gray border-none text-white py-3 px-4 flex-grow rounded-l-sm focus:outline-none focus:ring-1 focus:ring-combat-red"
                />
                <button 
                  type="submit" 
                  className="bg-combat-red hover:bg-combat-red-dark text-white font-bebas py-3 px-6 uppercase tracking-wider rounded-r-sm transition-colors"
                >
                  {t('subscribe')}
                </button>
              </div>
            </form>
            
            {/* Social Media */}
            <div>
              <h3 className="font-bebas text-xl mb-4 text-white">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/bukocombat" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                            hover:bg-combat-red transition-colors">
                  <FaFacebook className="text-white" />
                </a>
                <a href="https://instagram.com/bukocombat" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                            hover:bg-combat-red transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="https://youtube.com/bukocombat" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                            hover:bg-combat-red transition-colors">
                  <FaYoutube className="text-white" />
                </a>
                <a href="https://tiktok.com/@bukocombat" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-combat-gray rounded-sm flex items-center justify-center 
                            hover:bg-combat-red transition-colors">
                  <FaTiktok className="text-white" />
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
