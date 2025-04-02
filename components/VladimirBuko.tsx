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
    <section className="py-20" style={{ backgroundColor: 'var(--color-combat-gray)' }}>
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('vladimirBuko.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div 
                className="aspect-[3/4] rounded-sm overflow-hidden flex items-center justify-center shadow-xl"
                style={{ 
                  borderLeft: '4px solid var(--color-combat-red)',
                  background: 'linear-gradient(135deg, rgba(224, 30, 30, 0.2), rgba(224, 30, 30, 0.05))'
                }}
              >
                <Image 
                  src="/images/vladimir1.png"
                  alt={t('vladimirBuko.alt')}
                  width={400}
                  height={600}
                  className="object-contain"
                />
              </div>
              <div 
                className="absolute -bottom-5 -right-5 h-24 w-24 flex items-center justify-center rounded-sm"
                style={{ backgroundColor: 'var(--color-combat-red)' }}
              >
                <div className="text-4xl text-white" style={{ fontFamily: "'Anton', Impact, sans-serif" }}>20+</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('vladimirBuko.description')}
            </p>
            
            {/* Kampfstile */}
            <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Anton', Impact, sans-serif" }}>{training('disciplines.title')}</h3>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 pl-4 flex items-center" style={{ borderColor: 'var(--color-combat-red)' }}>
                <GiBoxingGlove className="text-3xl mr-3" style={{ color: 'var(--color-combat-red)' }} />
                <div className="text-white">{training('disciplines.boxing')}</div>
              </div>
              <div className="border-l-2 pl-4 flex items-center" style={{ borderColor: 'var(--color-combat-red)' }}>
                <FaFistRaised className="text-3xl mr-3" style={{ color: 'var(--color-combat-red)' }} />
                <div className="text-white">{training('disciplines.kickboxing')}</div>
              </div>
              <div className="border-l-2 pl-4 flex items-center" style={{ borderColor: 'var(--color-combat-red)' }}>
                <GiNinjaStar className="text-3xl mr-3" style={{ color: 'var(--color-combat-red)' }} />
                <div className="text-white">{training('disciplines.weapons')}</div>
              </div>
              <div className="border-l-2 pl-4 flex items-center" style={{ borderColor: 'var(--color-combat-red)' }}>
                <FaRunning className="text-3xl mr-3" style={{ color: 'var(--color-combat-red)' }} />
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
