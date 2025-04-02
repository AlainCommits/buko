import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function AboutPage({ 
  params: { locale } 
} : { 
  params: { locale: string } 
}) {
  setRequestLocale(locale);
  const t = useTranslations('AboutPage');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="prose max-w-none">
        <p>{t('description')}</p>
        {/* Add your about page content here */}
      </div>
    </div>
  );
}
