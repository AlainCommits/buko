import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Buko</h1>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600">FAQ</a>
            <a href="https://github.com/yourusername/buko" 
               className="text-gray-600 hover:text-indigo-600"
               target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </header>
      
      <HeroSection />
      <Features />
      <FAQ />
      <Footer />
    </main>
  )
}
