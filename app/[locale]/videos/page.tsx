import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

// Beispielhafte Video-Daten
const getVideos = (locale: string) => {
  return [
    {
      id: 'video1',
      title: locale === 'de' ? 'Grundtechniken der Selbstverteidigung' : 
             locale === 'ru' ? 'Основные техники самообороны' : 
             'Basic Self-Defense Techniques',
      thumbnail: '/images/videos/technique.jpg',
      duration: '4:25',
      category: locale === 'de' ? 'Training' : 
                locale === 'ru' ? 'Тренировка' : 
                'Training'
    },
    {
      id: 'video2',
      title: locale === 'de' ? 'Training mit Vladimir Buko' : 
             locale === 'ru' ? 'Тренировка с Владимиром Буко' : 
             'Training with Vladimir Buko',
      thumbnail: '/images/videos/training.jpg',
      duration: '5:17',
      category: locale === 'de' ? 'Demonstration' : 
                locale === 'ru' ? 'Демонстрация' : 
                'Demonstration'
    },
    {
      id: 'video3',
      title: locale === 'de' ? 'Seminar Highlights 2023' : 
             locale === 'ru' ? 'Лучшие моменты семинара 2023' : 
             'Seminar Highlights 2023',
      thumbnail: '/images/videos/seminar.jpg',
      duration: '8:32',
      category: locale === 'de' ? 'Seminar' : 
                locale === 'ru' ? 'Семинар' : 
                'Seminar'
    },
    {
      id: 'video4',
      title: locale === 'de' ? 'Fortgeschrittene Kampftechniken' : 
             locale === 'ru' ? 'Продвинутые боевые техники' : 
             'Advanced Combat Techniques',
      thumbnail: '/images/videos/advanced.jpg',
      duration: '7:45',
      category: locale === 'de' ? 'Training' : 
                locale === 'ru' ? 'Тренировка' : 
                'Training'
    },
    {
      id: 'video5',
      title: locale === 'de' ? 'Privattraining Session' : 
             locale === 'ru' ? 'Сессия частной тренировки' : 
             'Private Training Session',
      thumbnail: '/images/videos/private.jpg',
      duration: '6:12',
      category: locale === 'de' ? 'Training' : 
                locale === 'ru' ? 'Тренировка' : 
                'Training'
    },
    {
      id: 'video6',
      title: locale === 'de' ? 'Interviewreihe: Teil 1' : 
             locale === 'ru' ? 'Серия интервью: Часть 1' : 
             'Interview Series: Part 1',
      thumbnail: '/images/videos/interview.jpg',
      duration: '10:05',
      category: locale === 'de' ? 'Interview' : 
                locale === 'ru' ? 'Интервью' : 
                'Interview'
    }
  ];
};

export default function VideosPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  setRequestLocale(locale);
  const t = useTranslations('VideosPage');
  const videos = getVideos(locale);
  
  return (
    <>
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-combat-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/bg.jpg"
            alt="Videos Background"
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
      
      {/* Videos Grid */}
      <section className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="combat-card group cursor-pointer">
                <div className="p-6">
                  <div className="relative aspect-video bg-combat-black overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-combat-red text-7xl group-hover:scale-125 transition-transform duration-300">
                        <FaPlay />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 text-sm text-white">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm text-combat-red font-medium">{video.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bebas text-white group-hover:text-combat-red transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* YouTube Channel */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bebas text-white mb-6">{t('youtubeChannel')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">{t('youtubeDescription')}</p>
          <a 
            href="https://www.youtube.com/channel/yourchannelurl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="combat-button"
          >
            {t('subscribeButton')}
          </a>
        </div>
      </section>
    </>
  )
}
