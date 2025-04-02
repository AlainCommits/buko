import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  const t = useTranslations('contact')
  
  return (
    <>
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-combat-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/bg.jpg"
            alt="Contact Background"
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
            <p className="text-xl text-gray-300">{t('subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bebas text-white mb-8">{t('contactInfo')}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-combat-red p-3 rounded-sm mr-4">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas text-white mb-2">{t('address')}</h3>
                    <p className="text-gray-300">
                      Punch Fitness Essen GmbH<br />
                      Leimkugelstrasse 9<br />
                      45141 Essen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-combat-red p-3 rounded-sm mr-4">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas text-white mb-2">{t('phone')}</h3>
                    <p className="text-gray-300">+49 176 61890226</p>
                    <a href="tel:+4917661890226" className="text-combat-red hover:underline">
                      {t('callNow')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-combat-red p-3 rounded-sm mr-4">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas text-white mb-2">WhatsApp</h3>
                    <p className="text-gray-300">+49 176 61890226</p>
                    <a href="https://wa.me/4917661890226" target="_blank" rel="noopener noreferrer" className="text-combat-red hover:underline">
                      {t('messageOnWhatsApp')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-combat-black border-l-2 border-combat-red">
                <p className="text-white">{t('contactNote')}</p>
              </div>
            </div>
            
            {/* Training Location */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bebas text-white mb-8">{t('trainingLocation')}</h2>
              
              <div className="aspect-[16/9] bg-combat-black mb-6">
                <div className="w-full h-full flex items-center justify-center text-white/20 text-3xl font-bebas">
                  PUNCH FITNESS ESSEN
                </div>
              </div>
              
              <div className="bg-combat-black p-6 border-l-4 border-combat-red">
                <h3 className="text-xl font-bebas text-white mb-4">Punch Fitness Essen GmbH</h3>
                <p className="text-gray-300 mb-4">
                  Leimkugelstrasse 9<br />
                  45141 Essen
                </p>
                <a 
                  href="https://www.punch-fitness.de/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-combat-red hover:underline flex items-center"
                >
                  www.punch-fitness.de
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bebas text-white mb-8 text-center">{t('findUs')}</h2>
          
          <div className="aspect-[21/9] bg-combat-gray">
            <div className="w-full h-full flex items-center justify-center text-white/20 text-3xl font-bebas">
              GOOGLE MAPS EMBED
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
