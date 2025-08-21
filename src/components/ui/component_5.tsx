'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  q: string;
  a: string;
};

type FaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

export default function FaqSection({ title = 'Frequently Asked Questions', faqs }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10 ">{title}</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 bg-white text-left hover:bg-gray-50 transition-all"
                aria-expanded={openFaq === i}
                aria-controls={`faq-${i}`}
              >
                <span className="font-medium text-lg text-gray-800">{f.q}</span>
               <ChevronDown
  size={20}                                   // ensures the SVG’s width/height attrs are 20
  className={`w-5 h-5 shrink-0 text-gray-500  // Tailwind size + don’t let flex shrink it
              transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
/>
              </button>

              <div
                id={`faq-${i}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out text-gray-600 bg-gray-50 ${
                  openFaq === i ? 'max-h-screen py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
