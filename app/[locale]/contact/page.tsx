import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

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
                    <p className="text-gray-300">+49 123 456789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-combat-red p-3 rounded-sm mr-4">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bebas text-white mb-2">{t('email')}</h3>
                    <p className="text-gray-300">info@buko-combat.de</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bebas text-white mb-8">{t('contactForm')}</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">{t('name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-combat-black border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-combat-red rounded-sm"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">{t('email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-combat-black border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-combat-red rounded-sm"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">{t('subject')}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-combat-black border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-combat-red rounded-sm"
                    placeholder={t('subjectPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">{t('message')}</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full bg-combat-black border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-combat-red rounded-sm"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="combat-button w-full md:w-auto">
                    {t('sendButton')}
                  </button>
                </div>
              </form>
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
