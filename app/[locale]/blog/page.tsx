import { useTranslations } from 'next-intl'

// Temporär deaktiviert für den Build
export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p>Diese Seite ist temporär deaktiviert.</p>
    </div>
  )
}
    {
      id: 2,
      slug: 'die-philosophie-hinter-buko-combat',
      title: locale === 'de' ? 'Die Philosophie hinter Buko Combat' :
             locale === 'ru' ? 'Философия Буко Комбат' :
             'The Philosophy Behind Buko Combat',
      excerpt: locale === 'de' ? 'Vladimir Buko erklärt die Prinzipien und die Philosophie seines Kampfsystems...' :
               locale === 'ru' ? 'Владимир Буко объясняет принципы и философию своей боевой системы...' :
               'Vladimir Buko explains the principles and philosophy of his combat system...',
      date: '2023-11-01',
      image: '/images/blog/philosophy.jpg',
      category: locale === 'de' ? 'Philosophie' :
                locale === 'ru' ? 'Философия' :
                'Philosophy'
    },
    {
      id: 3,
      slug: 'trainingsplan-fuer-anfaenger',
      title: locale === 'de' ? 'Trainingsplan für Anfänger' :
             locale === 'ru' ? 'Тренировочный план для начинающих' :
             'Training Plan for Beginners',
      excerpt: locale === 'de' ? 'Ein kompletter Trainingsplan für Anfänger, die mit Buko Combat beginnen möchten...' :
               locale === 'ru' ? 'Полный план тренировок для начинающих, которые хотят начать заниматься Буко Комбат...' :
               'A complete training plan for beginners who want to start with Buko Combat...',
      date: '2023-10-20',
      image: '/images/blog/training-plan.jpg',
      category: locale === 'de' ? 'Training' :
                locale === 'ru' ? 'Тренировка' :
                'Training'
    },
    {
      id: 4,
      slug: 'interview-mit-vladimir-buko',
      title: locale === 'de' ? 'Interview mit Vladimir Buko' :
             locale === 'ru' ? 'Интервью с Владимиром Буко' :
             'Interview with Vladimir Buko',
      excerpt: locale === 'de' ? 'Ein exklusives Interview mit dem Gründer der Buko Combat School...' :
               locale === 'ru' ? 'Эксклюзивное интервью с основателем Школы Буко Комбат...' :
               'An exclusive interview with the founder of the Buko Combat School...',
      date: '2023-10-10',
      image: '/images/blog/interview.jpg',
      category: locale === 'de' ? 'Interview' :
                locale === 'ru' ? 'Интервью' :
                'Interview'
    }
  ];
};

export default function BlogPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('blog')
  const posts = getBlogPosts(params.locale);

  return (
    <>
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="relative py-20 bg-combat-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/bg.jpg"
            alt="Blog Background"
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

      {/* Blog Posts */}
      <section className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="combat-card group">
                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-[16/9] bg-gradient-to-br from-combat-red/30 to-combat-black mb-4 overflow-hidden group-hover:from-combat-red/50 transition-colors">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl text-white/20 font-bebas">{post.category}</span>
                      </div>
                    </div>
                  </Link>

                  <div className="mb-3 flex items-center space-x-4 text-sm">
                    <span className="text-combat-red font-medium">{post.category}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <time className="text-gray-400">{new Date(post.date).toLocaleDateString(params.locale)}</time>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-bebas mb-3 text-white group-hover:text-combat-red transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-combat-red font-medium hover:underline flex items-center"
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
