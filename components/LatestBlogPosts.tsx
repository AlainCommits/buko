'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

export default function LatestBlogPosts() {
  const t = useTranslations('home')
  
  // Beispieldaten - später durch echte Blog-Daten ersetzen
  const posts = [
    {
      id: 1,
      title: "Effektive Selbstverteidigung im Alltag",
      excerpt: "Lernen Sie, wie Sie sich in alltäglichen Situationen effektiv verteidigen können...",
      date: "2023-11-15",
      slug: "effektive-selbstverteidigung-im-alltag",
      category: "Selbstverteidigung"
    },
    {
      id: 2,
      title: "Die Philosophie hinter Buko Combat",
      excerpt: "Vladimir Buko erklärt die Prinzipien und die Philosophie seines Kampfsystems...",
      date: "2023-11-01",
      slug: "die-philosophie-hinter-buko-combat",
      category: "Philosophie"
    },
    {
      id: 3,
      title: "Trainingsplan für Anfänger",
      excerpt: "Ein kompletter Trainingsplan für Anfänger, die mit Buko Combat beginnen möchten...",
      date: "2023-10-20",
      slug: "trainingsplan-fuer-anfaenger",
      category: "Training"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          {t('blogPosts.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={post.id} className="combat-card group">
              <div className="p-6">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/9] bg-gradient-to-br from-combat-red/30 to-combat-black mb-4 overflow-hidden group-hover:from-combat-red/50 transition-colors">
                    <div className="w-full h-full flex items-center justify-center">
                      <span 
                        className="text-4xl text-white/20"
                        style={{ fontFamily: "'Anton', Impact, sans-serif" }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="mb-3 flex items-center space-x-4 text-sm">
                  <span className="text-combat-red font-medium">{post.category}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <time className="text-gray-400">{new Date(post.date).toLocaleDateString()}</time>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h3 
                    className="text-2xl mb-3 text-white group-hover:text-combat-red transition-colors"
                    style={{ fontFamily: "'Anton', Impact, sans-serif" }}
                  >
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-combat-red font-medium hover:underline flex items-center"
                >
                  {t('blogPosts.readMore')}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="combat-button"
          >
            {t('blogPosts.allPosts')}
          </Link>
        </div>
      </div>
    </section>
  )
}
