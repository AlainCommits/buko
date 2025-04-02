'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import { useParams } from 'next/navigation'

// Beispielhafte Blog-Daten als clientseitige Daten
const blogPosts = {
  de: [
    {
      id: 1,
      slug: 'effektive-selbstverteidigung-im-alltag',
      title: 'Effektive Selbstverteidigung im Alltag',
      excerpt: 'Lernen Sie, wie Sie sich in alltäglichen Situationen effektiv verteidigen können...',
      date: '2023-11-15',
      category: 'Selbstverteidigung'
    },
    {
      id: 2,
      slug: 'die-philosophie-hinter-buko-combat',
      title: 'Die Philosophie hinter Buko Combat',
      excerpt: 'Vladimir Buko erklärt die Prinzipien und die Philosophie seines Kampfsystems...',
      date: '2023-11-01',
      category: 'Philosophie'
    },
    {
      id: 3,
      slug: 'trainingsplan-fuer-anfaenger',
      title: 'Trainingsplan für Anfänger',
      excerpt: 'Ein kompletter Trainingsplan für Anfänger, die mit Buko Combat beginnen möchten...',
      date: '2023-10-20',
      category: 'Training'
    },
    {
      id: 4,
      slug: 'interview-mit-vladimir-buko',
      title: 'Interview mit Vladimir Buko',
      excerpt: 'Ein exklusives Interview mit dem Gründer der Buko Combat School...',
      date: '2023-10-10',
      category: 'Interview'
    }
  ],
  en: [
    {
      id: 1,
      slug: 'effektive-selbstverteidigung-im-alltag',
      title: 'Effective Self-Defense in Everyday Life',
      excerpt: 'Learn how to effectively defend yourself in everyday situations...',
      date: '2023-11-15',
      category: 'Self-Defense'
    },
    {
      id: 2,
      slug: 'die-philosophie-hinter-buko-combat',
      title: 'The Philosophy Behind Buko Combat',
      excerpt: 'Vladimir Buko explains the principles and philosophy of his combat system...',
      date: '2023-11-01',
      category: 'Philosophy'
    },
    {
      id: 3,
      slug: 'trainingsplan-fuer-anfaenger',
      title: 'Training Plan for Beginners',
      excerpt: 'A complete training plan for beginners who want to start with Buko Combat...',
      date: '2023-10-20',
      category: 'Training'
    },
    {
      id: 4,
      slug: 'interview-mit-vladimir-buko',
      title: 'Interview with Vladimir Buko',
      excerpt: 'An exclusive interview with the founder of the Buko Combat School...',
      date: '2023-10-10',
      category: 'Interview'
    }
  ],
  ru: [
    {
      id: 1,
      slug: 'effektive-selbstverteidigung-im-alltag',
      title: 'Эффективная самооборона в повседневной жизни',
      excerpt: 'Узнайте, как эффективно защитить себя в повседневных ситуациях...',
      date: '2023-11-15',
      category: 'Самооборона'
    },
    {
      id: 2,
      slug: 'die-philosophie-hinter-buko-combat',
      title: 'Философия Буко Комбат',
      excerpt: 'Владимир Буко объясняет принципы и философию своей боевой системы...',
      date: '2023-11-01',
      category: 'Философия'
    },
    {
      id: 3,
      slug: 'trainingsplan-fuer-anfaenger',
      title: 'Тренировочный план для начинающих',
      excerpt: 'Полный план тренировок для начинающих, которые хотят начать заниматься Буко Комбат...',
      date: '2023-10-20',
      category: 'Тренировка'
    },
    {
      id: 4,
      slug: 'interview-mit-vladimir-buko',
      title: 'Интервью с Владимиром Буко',
      excerpt: 'Эксклюзивное интервью с основателем Школы Буко Комбат...',
      date: '2023-10-10',
      category: 'Интервью'
    }
  ]
};

export default function BlogPage() {
  const t = useTranslations('blog');
  const params = useParams();
  const locale = (params.locale as string) || 'de';
  const posts = blogPosts[locale as keyof typeof blogPosts] || blogPosts.de;
  
  return (
    <>
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--color-combat-black)' }}>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-white/20">Blog Background</span>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t('title')}
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--color-combat-red)' }}></div>
            <p className="text-xl text-gray-300">{t('subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-combat-gray)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="combat-card group">
                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-[16/9] mb-4 overflow-hidden flex items-center justify-center" 
                         style={{ 
                           background: 'linear-gradient(135deg, rgba(224, 30, 30, 0.3), var(--color-combat-black))' 
                         }}>
                      <span className="text-4xl text-white/20 font-bold">{post.category}</span>
                    </div>
                  </Link>
                  
                  <div className="mb-3 flex items-center space-x-4 text-sm">
                    <span style={{ color: 'var(--color-combat-red)' }} className="font-medium">{post.category}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <time className="text-gray-400">{new Date(post.date).toLocaleDateString(locale)}</time>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl mb-3 text-white group-hover:text-red-500 transition-colors"
                        style={{ fontFamily: "'Anton', Impact, sans-serif" }}>
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    style={{ color: 'var(--color-combat-red)' }}
                    className="font-medium hover:underline flex items-center"
                  >
                    {t('readMore')}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
