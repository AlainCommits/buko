import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Organize Your Bookmarks <span className="text-indigo-600">Like Never Before</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Buko is a self-hosted bookmark manager that helps you organize and access your 
            favorite websites from anywhere.
          </p>
          <div className="mt-8 space-x-4">
            <a href="https://github.com/yourusername/buko" 
               className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg"
               target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
            <a href="#features" 
               className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg">
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <Image 
              src="/screenshots/dashboard.png" 
              alt="Buko Dashboard Screenshot"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
