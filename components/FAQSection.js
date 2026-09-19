'use me';
'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you accept new patients?',
      a: 'Yes, SmileCraft Dental is currently welcoming new patients for general hygiene checkups, cosmetic consultations, and implant evaluations at our Park Avenue practice.'
    },
    {
      q: 'How do I request an appointment?',
      a: 'You can request an appointment online through our booking page, call our office directly at (212) 555-0194, or speak to our 24/7 AI Front Desk right here on our website.'
    },
    {
      q: 'What treatments do you offer?',
      a: 'We offer comprehensive dental care including dental implants, porcelain veneers, Invisalign clear aligners, teeth whitening, smile makeovers, and preventive general dentistry.'
    },
    {
      q: 'Do you offer dental implants?',
      a: 'Yes, we provide advanced implant solutions ranging from single-tooth implants to full-arch restorations, digitally planned for optimal accuracy and patient comfort.'
    },
    {
      q: 'Do you offer cosmetic dentistry?',
      a: 'Customized cosmetic care is one of our primary specialties. We offer porcelain veneers, aesthetic bonding, professional teeth whitening, and full smile design plans.'
    },
    {
      q: 'How does the AI front desk work?',
      a: 'Our AI front desk is powered by conversational AI to assist patients 24/7. It answers common practice questions, gathers contact details for new patients, and guides you toward setting up an appointment.'
    },
    {
      q: 'What happens if I call outside office hours?',
      a: 'When calling outside of regular business hours, our AI receptionist picks up automatically to answer common inquiries and take down your request so our clinical team can follow up promptly.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-50 dark:bg-navy-950 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            Answers to common patient inquiries.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-navy-900 rounded-xl border border-ivory-200 dark:border-navy-800 shadow-soft overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-semibold text-navy-900 dark:text-ivory-100">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-champagne-600 dark:text-champagne-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed border-t border-ivory-100 dark:border-navy-800 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Disclaimer Box */}
        <div className="bg-ivory-200/60 dark:bg-navy-900/60 p-4 rounded-xl border border-ivory-300 dark:border-navy-800 text-xs text-charcoal-700 dark:text-ivory-300 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-navy-900 dark:text-champagne-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-navy-900 dark:text-ivory-100">AI Assistant Note:</span> The AI front desk is designed to assist with practice information, scheduling, and general inquiries. It does not diagnose medical conditions or replace a dental professional.
          </p>
        </div>

      </div>
    </section>
  );
}
