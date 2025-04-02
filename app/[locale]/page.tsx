import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function HomePage({ 
  params: { locale } 
} : { 
  params: { locale: string } 
}) {
  setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Your homepage content */}
    </main>
  );
}
