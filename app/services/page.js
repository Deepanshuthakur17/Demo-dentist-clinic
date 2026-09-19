'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { ArrowUpRight, Bot, Calendar } from 'lucide-react';

export default function ServicesPage() {
  const { openModal } = useAIFrontDesk();

  const servicesList = [
    {
      title: 'Dental Implants',
      href: '/services/dental-implants',
      badge: 'Implantology',
      short: 'Replace missing teeth with permanent titanium or ceramic implant roots and natural-looking porcelain crowns.',
      features: ['Single tooth implants', 'Multi-tooth implant bridges', 'Full arch restorations', 'Digital 3D surgical guides']
    },
    {
      title: 'Cosmetic Dentistry',
      href: '/services/cosmetic-dentistry',
      badge: 'Aesthetics',
      short: 'Refine and enhance your smile with custom tooth whitening, bonding, and harmonious aesthetic contouring.',
      features: ['Professional teeth whitening', 'Composite cosmetic bonding', 'Enamel micro-contouring', 'Gum line recontouring']
    },
    {
      title: 'Invisalign Clear Aligners',
      href: '/services/invisalign',
      badge: 'Orthodontics',
      short: 'Straighten your teeth discreetly with clear custom-molded aligners without metallic brackets or wires.',
      features: ['Discreet clear aligners', 'Digital 3D outcome preview', 'Removable for dining & hygiene', 'Customized alignment plans']
    },
    {
      title: 'Porcelain Veneers',
      href: '/services/veneers',
      badge: 'Ceramics',
      short: 'Transform discolored, chipped, or gapped teeth with ultra-thin, custom-crafted ceramic porcelain veneers.',
      features: ['Handcrafted ceramic shells', 'Stain-resistant porcelain', 'Natural enamel translucency', 'Minimal tooth reduction']
    },
    {
      title: 'General Dentistry',
      href: '/services/general-dentistry',
      badge: 'Preventive',
      short: 'Maintain lifelong oral health with gentle hygiene cleansings, comprehensive checkups, and tooth restorations.',
      features: ['Comprehensive oral exams', 'Low-radiation digital X-rays', 'Periodontal gum therapy', 'Tooth-colored fillings']
    }
  ];

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Header */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
            Clinical Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            Comprehensive Dental Services
          </h1>
          <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-xl mx-auto font-sans leading-relaxed">
            From single tooth restorations to full aesthetic smile makeovers, our Manhattan practice combines advanced technology with patient comfort.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((s, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-950 p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft hover:shadow-elevated transition-all space-y-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sage-600 dark:text-sage-400 bg-sage-50 dark:bg-sage-500/20 px-2.5 py-1 rounded-md">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-ivory-50 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 mt-2 leading-relaxed">
                    {s.short}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-ivory-100 dark:border-navy-800 space-y-1.5 text-xs text-charcoal-700 dark:text-ivory-300">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-ivory-100 dark:border-navy-800">
                  <Link
                    href={s.href}
                    className="text-xs font-bold text-navy-900 dark:text-ivory-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 flex items-center justify-between transition-colors"
                  >
                    <span>Read Treatment Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistance CTA */}
      <section className="py-16 bg-navy-950 text-ivory-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl font-medium text-ivory-50">
            Unsure which treatment fits your smile?
          </h2>
          <p className="text-xs text-ivory-300/80 max-w-md mx-auto">
            Our 24/7 AI front desk can answer questions about treatment steps, recovery times, and appointment scheduling.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => openModal('overview')}
              className="px-6 py-3 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Front Desk</span>
            </button>
            <Link
              href="/book-appointment"
              className="px-6 py-3 rounded-xl bg-navy-800 text-ivory-100 border border-navy-700 text-xs font-semibold hover:bg-navy-700 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-champagne-400" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
