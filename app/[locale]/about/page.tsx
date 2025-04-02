import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaFistRaised, FaRunning } from 'react-icons/fa'
import { GiBoxingGlove, GiNinjaStar } from 'react-icons/gi'

export default function AboutPage() {
  const t = useTranslations('about')
  const training = useTranslations('training')

  return (
    <>
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-combat-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/bg.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bebas mb-6 gradient-text">
              {t('title')}
            </h1>
            <div className="w-24 h-1 bg-combat-red mx-auto mb-8"></div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-sm overflow-hidden border-l-4 border-combat-red shadow-xl">
                  <Image 
                    src="/images/vladimir1.png"
                    alt={t('bioImage')}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-combat-red flex items-center justify-center rounded-sm">
                  <div className="text-4xl text-white font-bebas">20+</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bebas text-white mb-6">{t('bioTitle')}</h2>
              
              <div className="space-y-4 text-gray-300">
                <p>{t('bioParagraph1')}</p>
                <p>{t('bioParagraph2')}</p>
                <p>{t('bioParagraph3')}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bebas text-white mb-4">{training('disciplines.title')}</h3>
                <div className="grid grid-cols-2 gap-6 mb-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t('achievementsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="combat-card p-6">
                <div className="text-4xl text-combat-red mb-4 font-bebas">{t(`achievement${i}Number`)}</div>
                <h3 className="text-2xl font-bebas text-white mb-2">{t(`achievement${i}Title`)}</h3>
                <p className="text-gray-400">{t(`achievement${i}Description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
