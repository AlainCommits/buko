'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import Image from 'next/image'
import { FaFistRaised, FaRunning } from 'react-icons/fa'
import { GiBoxingGlove, GiNinjaStar } from 'react-icons/gi'

export default function VladimirBuko() {
  const t = useTranslations('home')
  const training = useTranslations('training')
  
  return (
    <section className="py-20 bg-combat-gray">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('vladimirBuko.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-combat-red/20 to-combat-red/5 rounded-sm overflow-hidden flex items-center justify-center border-l-4 border-combat-red shadow-xl">
                <Image 
                  src="/images/vladimir1.png"
                  alt={t('vladimirBuko.alt')}
                  width={400}
                  height={600}
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-combat-red flex items-center justify-center rounded-sm">
                <div className="text-4xl text-white font-bebas">20+</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('vladimirBuko.description')}
            </p>
            
            {/* Kampfstile - Korrigierte Icons */}
            <h3 className="text-2xl font-bebas text-white mb-4">{training('disciplines.title')}</h3>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-combat-red pl-4 flex items-center">
                <GiBoxingGlove className="text-combat-red text-3xl mr-3" />
                <div className="text-white">{training('disciplines.boxing')}</div>
              </div>
              <div className="border-l-2 border-combat-red pl-4 flex items-center">
                <FaFistRaised className="text-combat-red text-3xl mr-3" />
                <div className="text-white">{training('disciplines.kickboxing')}</div>
              </div>
              <div className="border-l-2 border-combat-red pl-4 flex items-center">
                <GiNinjaStar className="text-combat-red text-3xl mr-3" />
                <div className="text-white">{training('disciplines.weapons')}</div>
              </div>
              <div className="border-l-2 border-combat-red pl-4 flex items-center">
                <FaRunning className="text-combat-red text-3xl mr-3" />
                <div className="text-white">{training('disciplines.sambo')}</div>
              </div>
            </div>
            
            <Link href="/about" className="combat-button inline-block">
              {t('vladimirBuko.linkText')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
