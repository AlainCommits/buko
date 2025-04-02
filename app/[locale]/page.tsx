import Hero from '@/components/Hero'
import VladimirBuko from '@/components/VladimirBuko'
import TrainingOptions from '@/components/TrainingOptions'
import TrainingLocation from '@/components/TrainingLocation'
import FeaturedVideos from '@/components/FeaturedVideos'
import LatestBlogPosts from '@/components/LatestBlogPosts'

export default function Home() {
  return (
    <>
      <Hero />
      <VladimirBuko />
      <TrainingOptions />
      <TrainingLocation />
      <FeaturedVideos />
      <LatestBlogPosts />
    </>
  )
}
