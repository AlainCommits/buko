'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Buko?",
      answer: "Buko is a self-hosted bookmark manager that allows you to organize and access your bookmarks from anywhere."
    },
    {
      question: "Is Buko free to use?",
      answer: "Yes! Buko is completely free and open-source software."
    },
    {
      question: "What are the system requirements?",
      answer: "Buko can run on most systems that support Docker or Node.js. Check our documentation for specific requirements."
    },
    {
      question: "Can I import my existing bookmarks?",
      answer: "Yes, Buko supports importing bookmarks from HTML files exported from most popular browsers."
    },
    {
      question: "Is my data secure?",
      answer: "Since Buko is self-hosted, your data remains on your own server. You have complete control over its security."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button 
                className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
