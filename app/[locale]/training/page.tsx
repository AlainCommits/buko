import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import { FaUsers, FaUserFriends, FaCalendarAlt } from 'react-icons/fa'
import TrainingLocation from '@/components/TrainingLocation'

export default function TrainingPage() {
  const t = useTranslations('trainingPage')
  const training = useTranslations('training')

  return (
    <>
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-combat-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/bg.jpg"
            alt="Training Background"
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
      
      {/* Training Options */}
      <section className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t('optionsTitle')}</h2>
          
          <div className="space-y-10">
            {/* Group Training */}
            <div className="flex flex-col md:flex-row bg-combat-black rounded-sm overflow-hidden shadow-lg border-l-4 border-combat-red">
              <div className="md:w-1/3 bg-gradient-to-br from-combat-red/20 to-combat-red/5 p-8 flex items-center justify-center">
                <FaUsers className="text-combat-red text-8xl" />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bebas mb-4 text-white">{training('group.title')}</h3>
                <p className="text-gray-300 mb-6">{t('groupDescription')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('groupBenefit1')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('groupBenefit2')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('groupBenefit3')}</p>
                  </div>
                </div>
                <Link href="/training/group" className="combat-button">
                  {t('learnMore')}
                </Link>
              </div>
            </div>
            
            {/* Private Training */}
            <div className="flex flex-col md:flex-row bg-combat-black rounded-sm overflow-hidden shadow-lg border-l-4 border-combat-red">
              <div className="md:w-1/3 bg-gradient-to-br from-combat-red/20 to-combat-red/5 p-8 flex items-center justify-center">
                <FaUserFriends className="text-combat-red text-8xl" />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bebas mb-4 text-white">{training('private.title')}</h3>
                <p className="text-gray-300 mb-6">{t('privateDescription')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('privateBenefit1')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('privateBenefit2')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('privateBenefit3')}</p>
                  </div>
                </div>
                <Link href="/training/private" className="combat-button">
                  {t('learnMore')}
                </Link>
              </div>
            </div>
            
            {/* Seminars */}
            <div className="flex flex-col md:flex-row bg-combat-black rounded-sm overflow-hidden shadow-lg border-l-4 border-combat-red">
              <div className="md:w-1/3 bg-gradient-to-br from-combat-red/20 to-combat-red/5 p-8 flex items-center justify-center">
                <FaCalendarAlt className="text-combat-red text-8xl" />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-3xl font-bebas mb-4 text-white">{training('seminars.title')}</h3>
                <p className="text-gray-300 mb-6">{t('seminarsDescription')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('seminarsBenefit1')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('seminarsBenefit2')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-combat-red rounded-full h-2 w-2 mt-2 mr-3"></div>
                    <p className="text-gray-300">{t('seminarsBenefit3')}</p>
                  </div>
                </div>
                <Link href="/seminars" className="combat-button">
                  {t('learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Location */}
      <TrainingLocation />
    </>
  )
}
