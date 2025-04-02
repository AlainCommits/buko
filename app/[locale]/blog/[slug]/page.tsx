import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import { notFound } from 'next/navigation'

// Beispielhafte Blog-Artikel-Inhalte (später durch CMS oder API ersetzen)
const getBlogPost = (slug: string, locale: string) => {
  const posts = {
    'effektive-selbstverteidigung-im-alltag': {
      id: 1,
      slug: 'effektive-selbstverteidigung-im-alltag',
      title: locale === 'de' ? 'Effektive Selbstverteidigung im Alltag' : 
             locale === 'ru' ? 'Эффективная самооборона в повседневной жизни' : 
             'Effective Self-Defense in Everyday Life',
      date: '2023-11-15',
      image: '/images/blog/self-defense.jpg',
      category: locale === 'de' ? 'Selbstverteidigung' :
                locale === 'ru' ? 'Самооборона' :
                'Self-Defense',
      author: 'Vladimir Buko',
      content: locale === 'de' ? 
               `<p>In der heutigen Zeit ist Selbstverteidigung eine wichtige Fähigkeit, die jeder besitzen sollte. Egal, ob Sie in einer großen Stadt oder einer kleinen Gemeinde leben, die Fähigkeit, sich selbst zu schützen, kann in unerwarteten Situationen lebensrettend sein.</p>
                <h3>Die Grundprinzipien der Selbstverteidigung</h3>
                <p>Bevor wir auf spezifische Techniken eingehen, ist es wichtig, die Grundprinzipien der Selbstverteidigung zu verstehen:</p>
                <ul>
                  <li>Bewusstsein für die Umgebung: Der beste Weg, sich zu verteidigen, ist, gefährliche Situationen von vornherein zu vermeiden.</li>
                  <li>Selbstvertrauen ausstrahlen: Eine selbstbewusste Körperhaltung kann potenzielle Angreifer abschrecken.</li>
                  <li>Deeskalation: Versuchen Sie immer zuerst, eine Situation verbal zu entschärfen.</li>
                  <li>Einfache, effektive Techniken: Im Notfall sind einfache, gut einstudierte Bewegungen effektiver als komplizierte Techniken.</li>
                </ul>
                <h3>Drei einfache Selbstverteidigungstechniken für den Alltag</h3>
                <p>Diese Techniken können schnell erlernt und in Notsituationen effektiv eingesetzt werden:</p>
                <h4>1. Der Handflächenstoß</h4>
                <p>Der Handflächenstoß ist eine einfache, aber wirkungsvolle Technik. Stoßen Sie mit der offenen Handfläche gegen das Kinn oder die Nase des Angreifers. Diese Technik kann einen Angreifer kurzzeitig desorientieren und Ihnen Zeit zur Flucht verschaffen.</p>
                <h4>2. Der Kniestoss</h4>
                <p>Wenn ein Angreifer nah an Sie herankommt, kann ein kräftiger Kniestoß in den Unterleib sehr effektiv sein. Diese empfindliche Körperstelle zu treffen, kann den Angreifer sofort außer Gefecht setzen.</p>
                <h4>3. Der Ellbogenschlag</h4>
                <p>Ellbogen sind harte Knochenpartien und können bei einem gezielten Schlag erheblichen Schaden anrichten. Ein Ellbogenschlag zum Gesicht oder Hals eines Angreifers kann Ihnen die nötige Zeit verschaffen, um zu fliehen.</p>
                <h3>Regelmäßiges Training ist der Schlüssel</h3>
                <p>Diese Techniken zu kennen, ist ein guter Anfang, aber echte Selbstverteidigung erfordert regelmäßiges Training unter fachmännischer Anleitung. In meinen Kursen bei Punch Fitness in Essen lernen Sie nicht nur diese grundlegenden Techniken, sondern auch fortgeschrittenere Methoden der Selbstverteidigung.</p>
                <h3>Fazit</h3>
                <p>Selbstverteidigung ist nicht nur eine körperliche Fertigkeit, sondern auch eine geistige Einstellung. Mit dem richtigen Training und Bewusstsein können Sie Ihr Sicherheitsgefühl im Alltag deutlich steigern. Besuchen Sie einen meiner Kurse, um mehr über effektive Selbstverteidigung zu erfahren.</p>` : 
               
               locale === 'ru' ? 
               `<p>В современном мире самооборона - это важный навык, которым должен обладать каждый. Независимо от того, живете ли вы в большом городе или маленьком поселке, способность защитить себя может спасти жизнь в неожиданных ситуациях.</p>
                <h3>Основные принципы самообороны</h3>
                <p>Прежде чем перейти к конкретным техникам, важно понять основные принципы самообороны:</p>
                <ul>
                  <li>Осознавание окружающей среды: Лучший способ защитить себя - это изначально избегать опасных ситуаций.</li>
                  <li>Излучение уверенности: Уверенная поза тела может отпугнуть потенциальных нападающих.</li>
                  <li>Деэскалация: Всегда старайтесь сначала разрядить ситуацию вербально.</li>
                  <li>Простые, эффективные техники: В чрезвычайной ситуации простые, хорошо отработанные движения более эффективны, чем сложные техники.</li>
                </ul>
                <h3>Три простых техники самообороны для повседневной жизни</h3>
                <p>Эти техники можно быстро освоить и эффективно использовать в экстренных ситуациях:</p>
                <h4>1. Удар ладонью</h4>
                <p>Удар ладонью - это простая, но эффективная техника. Ударьте открытой ладонью по подбородку или носу нападающего. Эта техника может дезориентировать нападающего на короткое время и дать вам время убежать.</p>
                <h4>2. Удар коленом</h4>
                <p>Если нападающий подходит близко к вам, сильный удар коленом в пах может быть очень эффективным. Попадание в эту чувствительную часть тела может мгновенно вывести нападающего из строя.</p>
                <h4>3. Удар локтем</h4>
                <p>Локти - это твердые костные структуры, и при целенаправленном ударе могут нанести значительный урон. Удар локтем по лицу или шее нападающего может дать вам необходимое время для бегства.</p>
                <h3>Регулярные тренировки - ключ к успеху</h3>
                <p>Знание этих техник - хорошее начало, но настоящая самооборона требует регулярных тренировок под руководством профессионала. На моих занятиях в Punch Fitness в Эссене вы изучите не только эти базовые техники, но и более продвинутые методы самообороны.</p>
                <h3>Заключение</h3>
                <p>Самооборона - это не только физический навык, но и психологическая установка. С правильной тренировкой и осознанием вы можете значительно повысить свое чувство безопасности в повседневной жизни. Посетите один из моих курсов, чтобы узнать больше об эффективной самообороне.</p>` : 
               
               `<p>In today's world, self-defense is an essential skill that everyone should possess. Whether you live in a big city or a small community, the ability to protect yourself can be life-saving in unexpected situations.</p>
                <h3>The Basic Principles of Self-Defense</h3>
                <p>Before we get into specific techniques, it's important to understand the basic principles of self-defense:</p>
                <ul>
                  <li>Situational Awareness: The best way to defend yourself is to avoid dangerous situations in the first place.</li>
                  <li>Project Confidence: A confident posture can deter potential attackers.</li>
                  <li>De-escalation: Always try to defuse a situation verbally first.</li>
                  <li>Simple, Effective Techniques: In an emergency, simple, well-practiced movements are more effective than complicated techniques.</li>
                </ul>
                <h3>Three Simple Self-Defense Techniques for Everyday Life</h3>
                <p>These techniques can be quickly learned and effectively used in emergency situations:</p>
                <h4>1. The Palm Strike</h4>
                <p>The palm strike is a simple yet powerful technique. Strike with your open palm towards the chin or nose of the attacker. This technique can momentarily disorient an attacker and give you time to escape.</p>
                <h4>2. The Knee Strike</h4>
                <p>If an attacker gets close to you, a powerful knee strike to the groin area can be very effective. Hitting this sensitive body area can immediately incapacitate an attacker.</p>
                <h4>3. The Elbow Strike</h4>
                <p>Elbows are hard bony parts and can cause significant damage with a targeted strike. An elbow strike to an attacker's face or neck can give you the necessary time to flee.</p>
                <h3>Regular Training is Key</h3>
                <p>Knowing these techniques is a good start, but real self-defense requires regular training under professional guidance. In my courses at Punch Fitness in Essen, you'll learn not only these basic techniques but also more advanced methods of self-defense.</p>
                <h3>Conclusion</h3>
                <p>Self-defense is not just a physical skill but also a mental attitude. With proper training and awareness, you can significantly increase your sense of security in everyday life. Visit one of my courses to learn more about effective self-defense.</p>`
    },
    // Weitere Blog-Artikel hier hinzufügen
  };
  
  return posts[slug as keyof typeof posts] || null;
};

export default function BlogPostPage({ params }: { params: { locale: string, slug: string } }) {
  const t = useTranslations('blog')
  const post = getBlogPost(params.slug, params.locale);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <div className="h-24"></div>
      
      <article className="py-16 bg-combat-gray">
        <div className="container mx-auto px-6">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-6">
              <Link href="/blog" className="text-combat-red hover:underline flex items-center">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                {t('backToBlog')}
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bebas text-white mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm mb-8">
              <span className="bg-combat-red text-white px-3 py-1 rounded-sm">{post.category}</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full mx-4"></span>
              <time className="text-gray-400">{new Date(post.date).toLocaleDateString(params.locale)}</time>
              <span className="w-1 h-1 bg-gray-500 rounded-full mx-4"></span>
              <span className="text-gray-400">{post.author}</span>
            </div>
            
            <div className="aspect-[21/9] bg-combat-black mb-10 flex items-center justify-center">
              <div className="text-4xl text-white/20 font-bebas">{t('featuredImage')}</div>
            </div>
          </header>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert prose-headings:font-bebas prose-headings:text-white prose-p:text-gray-300 prose-a:text-combat-red prose-strong:text-white prose-li:text-gray-300 max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 bg-combat-black p-8 rounded-sm border-l-4 border-combat-red">
              <div className="flex items-start">
                <div className="w-20 h-20 rounded-full bg-combat-gray flex items-center justify-center mr-6">
                  <span className="text-2xl text-white/20 font-bebas">VB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bebas text-white mb-2">{post.author}</h3>
                  <p className="text-gray-400">{t('authorBio')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Recommended Posts */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="section-title">{t('recommendedPosts')}</h2>
          
          {/* Here you would normally display related posts */}
          <div className="text-center text-gray-400">
            <p>{t('morePosts')}</p>
            <Link href="/blog" className="combat-button mt-8">
              {t('viewAllPosts')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
