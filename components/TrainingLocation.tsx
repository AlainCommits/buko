'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaMapMarkerAlt, FaClock, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa'

export default function TrainingLocation() {
  const training = useTranslations('training')
  
  return (
    <section className="py-20 bg-black relative">
      {/* Hintergrundmuster */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">
          {training('location.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location Info */}
          <div className="combat-card p-8 flex flex-col">
            <div className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-combat-red text-3xl mt-1 mr-4" />
              <div>
                <h3 className="text-2xl font-bebas text-white mb-2">{training('location.name')}</h3>
                <p className="text-gray-300">{training('location.address')}</p>
                <a 
                  href="https://www.punch-fitness.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-combat-red hover:underline flex items-center mt-2"
                >
                  <FaGlobe className="mr-2" />
                  {training('location.website')}
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </div>
            </div>
            
            <Image
              src="/images/punch.png"
              alt="Punch Fitness Essen"
              width={400}
              height={300}
              className="mt-4 rounded-sm"
            />
          </div>
          
          {/* Training Schedule */}
          <div className="combat-card p-8">
            <div className="flex items-start mb-6">
              <FaClock className="text-combat-red text-3xl mt-1 mr-4" />
              <div>
                <h3 className="text-2xl font-bebas text-white mb-4">{training('schedule.title')}</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-combat-black/50 border-l-2 border-combat-red rounded-sm">
                <div className="font-bebas text-white">{training('schedule.monday')}</div>
              </div>
              <div className="p-3 bg-combat-black/50 border-l-2 border-combat-red rounded-sm">
                <div className="font-bebas text-white">{training('schedule.wednesday')}</div>
              </div>
              <div className="p-3 bg-combat-black/50 border-l-2 border-combat-red rounded-sm">
                <div className="font-bebas text-white">{training('schedule.friday')}</div>
              </div>
              <div className="p-3 bg-combat-black/50 border-l-2 border-combat-red rounded-sm">
                <div className="font-bebas text-white">{training('schedule.sunday')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
