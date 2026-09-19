'use me';
'use client';

import React from 'react';
import { HeartHandshake, Cpu, MessageSquareHeart, Coffee } from 'lucide-react';

export default function PatientExperienceSection() {
  const principles = [
    {
      num: '01',
      title: 'Personalized Care',
      desc: 'Every treatment plan begins with understanding you and your goals.',
      icon: HeartHandshake
    },
    {
      num: '02',
      title: 'Modern Technology',
      desc: 'Advanced tools and digital workflows help make your experience more comfortable and informed.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Clear Communication',
      desc: 'We explain your options clearly so you can make informed decisions.',
      icon: MessageSquareHeart
    },
    {
      num: '04',
      title: 'Comfort First',
      desc: 'A calm environment and attentive team from your first visit.',
      icon: Coffee
    }
  ];

  return (
    <section id="patient-experience" className="py-20 lg:py-28 bg-ivory-50 dark:bg-navy-950 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            A different kind of dental visit.
          </h2>
          <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
            We designed our Midtown practice around warmth, modern technology, and respectful patient communication.
          </p>
        </div>

        {/* 4 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white dark:bg-navy-900 p-7 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft hover:shadow-elevated transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-charcoal-700/40 dark:text-ivory-400/40">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-ivory-50 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-ivory-100 dark:border-navy-800 text-[11px] font-semibold text-sage-600 dark:text-sage-400 uppercase tracking-wider">
                  Patient Principle
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
