'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { FaPlay } from 'react-icons/fa'

export default function FeaturedVideos() {
  const t = useTranslations('home')
  
  // Beispiel Video-Einträge (ohne tatsächliche YouTube IDs)
  const videos = [
    {
      id: "placeholder-1",
      title: "Grundtechniken der Selbstverteidigung",
      duration: "4:25"
    },
    {
      id: "placeholder-2",
      title: "Training mit Vladimir Buko",
      duration: "5:17"
    },
    {
      id: "placeholder-3",
      title: "Seminar Highlights 2023",
      duration: "8:32"
    }
  ]

  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <section className="py-20 bg-combat-gray relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('videos.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black relative overflow-hidden rounded-sm group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-l-[40px] border-l-white border-y-[25px] border-y-transparent ml-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-10 w-10 bg-combat-red rounded-full flex items-center justify-center shadow-combat">
                    <FaPlay className="text-white ml-1" />
                  </div>
                  <span className="text-sm text-gray-300">{activeVideo.duration}</span>
                </div>
                <h3 
                  className="text-2xl text-white"
                  style={{ fontFamily: "'Anton', Impact, sans-serif" }}
                >
                  {activeVideo.title}
                </h3>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-combat-black p-6 rounded-sm h-full">
              <h3 
                className="text-2xl mb-6 text-white"
                style={{ fontFamily: "'Anton', Impact, sans-serif" }}
              >
                {t('videos.moreVideos')}
              </h3>
              
              <div className="space-y-4">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    className={`cursor-pointer p-4 rounded-sm transition-all
                              ${activeVideo.id === video.id 
                                ? 'bg-combat-red text-white' 
                                : 'bg-combat-gray/50 hover:bg-combat-gray text-white'}`}
                    onClick={() => setActiveVideo(video)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{video.title}</h4>
                      <span className="text-sm opacity-70">{video.duration}</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                      <div className={`h-full ${activeVideo.id === video.id ? 'bg-white' : 'bg-combat-red'} rounded-full`} 
                           style={{width: activeVideo.id === video.id ? '100%' : '30%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/videos"
                  className="combat-button w-full block text-center"
                >
                  {t('videos.viewAll')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
