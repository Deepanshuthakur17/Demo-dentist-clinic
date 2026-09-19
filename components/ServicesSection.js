'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'Dental Implants',
      desc: 'Replace missing teeth with modern implant solutions designed around your comfort, function, and smile.',
      href: '/services/dental-implants',
      badge: 'Featured Specialty'
    },
    {
      num: '02',
      title: 'Cosmetic Dentistry',
      desc: 'Refine the appearance of your smile with personalized cosmetic treatment options.',
      href: '/services/cosmetic-dentistry',
      badge: 'Aesthetic Care'
    },
    {
      num: '03',
      title: 'Invisalign',
      desc: 'Explore clear aligner treatment designed to fit naturally into your lifestyle.',
      href: '/services/invisalign',
      badge: 'Clear Aligners'
    },
    {
      num: '04',
      title: 'Porcelain Veneers',
      desc: 'Create a refined, natural-looking smile with customized ceramic veneers.',
      href: '/services/veneers',
      badge: 'Custom Ceramics'
    },
    {
      num: '05',
      title: 'General Dentistry',
      desc: 'Preventive and restorative care for long-term oral health and wellness.',
      href: '/services/general-dentistry',
      badge: 'Preventive & Wellness'
    },
    {
      num: '06',
      title: 'Smile Makeovers',
      desc: 'A personalized treatment plan combining cosmetic procedures to help you achieve your desired smile.',
      href: '/services',
      badge: 'Comprehensive Plan'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-50 dark:bg-navy-950 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
              Comprehensive Dental Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
              Tailored treatments for your health and aesthetics.
            </h2>
          </div>
          <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 max-w-xs leading-relaxed">
            Every clinical procedure is tailored to your unique anatomical goals and personal comfort preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.num}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft hover:shadow-elevated hover:border-champagne-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-champagne-600 dark:text-champagne-400 bg-champagne-100 dark:bg-champagne-500/20 px-3 py-1 rounded-full border border-champagne-200 dark:border-champagne-500/30">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-sage-600 dark:text-sage-400 bg-sage-50 dark:bg-sage-500/20 px-2.5 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-ivory-50 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-ivory-100 dark:border-navy-800 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-navy-900 dark:text-ivory-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Treatment</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
