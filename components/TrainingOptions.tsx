'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { FaUsers, FaUserFriends, FaUniversity } from 'react-icons/fa'

export default function TrainingOptions() {
  const t = useTranslations('home')
  const training = useTranslations('training')
  
  const trainingOptions = [
    {
      key: "group",
      icon: <FaUsers className="text-combat-red text-5xl mb-4" />,
      href: "/training/group"
    },
    {
      key: "private",
      icon: <FaUserFriends className="text-combat-red text-5xl mb-4" />,
      href: "/training/private"
    },
    {
      key: "seminars",
      icon: <FaUniversity className="text-combat-red text-5xl mb-4" />,
      href: "/seminars"
    }
  ]

  return (
    <section className="py-20 bg-combat-black relative overflow-hidden">
      {/* Hintergrundmuster */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">
          {t('trainingOptions.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingOptions.map((option) => (
            <div key={option.key} className="combat-card">
              <div className="p-8">
                {option.icon}
                <h3 
                  className="text-3xl mb-4 text-white"
                  style={{ fontFamily: "'Anton', Impact, sans-serif" }}
                >
                  {training(`${option.key}.title`)}
                </h3>
                <p className="text-gray-300 mb-8 min-h-[80px]">
                  {training(`${option.key}.description`)}
                </p>
                <Link 
                  href={option.href}
                  className="inline-block bg-transparent border border-combat-red text-combat-red py-2 px-5 
                            hover:bg-combat-red hover:text-white transition-colors duration-300 
                            font-medium uppercase tracking-wider text-sm"
                >
                  {t('trainingOptions.learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
