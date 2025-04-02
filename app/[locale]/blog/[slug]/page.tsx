'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { useParams } from 'next/navigation'

// Define the blog post structure for better typing
type BlogPost = {
  title: string;
  date: string;
  category: string;
  author: string;
  content: string;
}

type BlogPostTranslations = {
  de: BlogPost;
  en: BlogPost;
  ru: BlogPost;
}

type BlogPosts = {
  [key: string]: BlogPostTranslations;
}

// Beispielhafte Blog-Artikel-Inhalte
const blogPosts: BlogPosts = {
  'effektive-selbstverteidigung-im-alltag': {
    de: {
      title: "Effektive Selbstverteidigung im Alltag",
      date: "2023-11-15",
      category: "Selbstverteidigung",
      author: "Vladimir Buko",
      content: `
        <p>In der heutigen Zeit ist Selbstverteidigung eine wichtige Fähigkeit, die jeder besitzen sollte. Egal, ob Sie in einer großen Stadt oder einer kleinen Gemeinde leben, die Fähigkeit, sich selbst zu schützen, kann in unerwarteten Situationen lebensrettend sein.</p>
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
      `
    },
    en: {
      title: "Effective Self-Defense in Everyday Life",
      date: "2023-11-15",
      category: "Self-Defense",
      author: "Vladimir Buko",
      content: `
        <p>In today's world, self-defense is an essential skill that everyone should possess. Whether you live in a big city or a small community, the ability to protect yourself can be life-saving in unexpected situations.</p>
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
      `
    },
    ru: {
      title: "Эффективная самооборона в повседневной жизни",
      date: "2023-11-15",
      category: "Самооборона",
      author: "Владимир Буко",
      content: `
        <p>В современном мире самооборона - это важный навык, которым должен обладать каждый. Независимо от того, живете ли вы в большом городе или маленьком поселке, способность защитить себя может спасти жизнь в неожиданных ситуациях.</p>
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
      `
    }
  },
  'die-philosophie-hinter-buko-combat': {
    de: {
      title: "Die Philosophie hinter Buko Combat",
      date: "2023-11-01",
      category: "Philosophie",
      author: "Vladimir Buko",
      content: `<p>In diesem Artikel erkläre ich die Grundprinzipien meines Kampfsystems...</p>`
    },
    en: {
      title: "The Philosophy Behind Buko Combat",
      date: "2023-11-01",
      category: "Philosophy",
      author: "Vladimir Buko",
      content: `<p>In this article, I explain the core principles of my combat system...</p>`
    },
    ru: {
      title: "Философия Буко Комбат",
      date: "2023-11-01",
      category: "Философия",
      author: "Владимир Буко",
      content: `<p>В этой статье я объясняю основные принципы моей боевой системы...</p>`
    }
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = (params.locale as string) || 'de';
  const t = useTranslations('blog');
  
  // Standardinhalt für den Fall, dass der Artikel nicht gefunden wird
  let post: BlogPost = {
    title: "Blog Post",
    date: new Date().toISOString(),
    category: "Category",
    author: "Author",
    content: "<p>Content not found</p>"
  };
  
  // Versuche den Artikel zu laden
  if (blogPosts[slug]) {
    post = blogPosts[slug][locale as keyof BlogPostTranslations] || 
           blogPosts[slug].de;
  }
  
  return (
    <>
      <div className="h-24"></div>
      
      <article className="py-16" style={{ backgroundColor: 'var(--color-combat-gray)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-6">
              <Link href="/blog" className="flex items-center hover:underline" style={{ color: 'var(--color-combat-red)' }}>
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                {t('backToBlog')}
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl text-white mb-4"
                style={{ fontFamily: "'Anton', Impact, sans-serif" }}>
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm mb-8">
              <span className="text-white px-3 py-1 rounded-sm" 
                    style={{ backgroundColor: 'var(--color-combat-red)' }}>
                {post.category}
              </span>
              <span className="w-1 h-1 bg-gray-500 rounded-full mx-4"></span>
              <time className="text-gray-400">{new Date(post.date).toLocaleDateString(locale)}</time>
              <span className="w-1 h-1 bg-gray-500 rounded-full mx-4"></span>
              <span className="text-gray-400">{post.author}</span>
            </div>
            
            <div className="aspect-[21/9] mb-10 flex items-center justify-center bg-black">
              <div className="text-4xl text-white/20">{t('featuredImage')}</div>
            </div>
          </header>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 p-8 rounded-sm border-l-4" 
                 style={{ 
                   backgroundColor: 'var(--color-combat-black)', 
                   borderColor: 'var(--color-combat-red)' 
                 }}>
              <div className="flex items-start">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mr-6" 
                     style={{ backgroundColor: 'var(--color-combat-gray)' }}>
                  <span className="text-2xl text-white/20">VB</span>
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2"
                      style={{ fontFamily: "'Anton', Impact, sans-serif" }}>
                    {post.author}
                  </h3>
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
