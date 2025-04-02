import { useTranslations } from 'next-intl'
import Hero from '@/components/Hero'
import VladimirBuko from '@/components/VladimirBuko'
import TrainingOptions from '@/components/TrainingOptions'
import TrainingLocation from '@/components/TrainingLocation'
// Temporär deaktiviert für den Build
// import FeaturedVideos from '@/components/FeaturedVideos'
// import LatestBlogPosts from '@/components/LatestBlogPosts'

export default function Home() {
  return (
    <>
      <Hero />
      <VladimirBuko />
      <TrainingOptions />
      <TrainingLocation />
      {/* Temporär deaktiviert für den Build */}
      {/* <FeaturedVideos /> */}
      {/* <LatestBlogPosts /> */}
    </>
  )
}
