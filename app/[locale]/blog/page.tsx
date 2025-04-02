'use client'

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function BlogPage({ 
  params: { locale } 
} : { 
  params: { locale: string } 
}) {
  setRequestLocale(locale);
  
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p>Diese Seite ist temporär deaktiviert.</p>
    </div>
  )
}
