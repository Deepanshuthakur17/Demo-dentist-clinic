'use me';
'use client';

import React from 'react';

export default function WhySmileCraftSection() {
  const highlights = [
    { title: 'Online Appointment Requests', desc: 'Book or request consultations directly from your phone or desktop in seconds.' },
    { title: 'Convenient Communication', desc: 'Reach our front desk via voice AI or direct messaging whenever questions arise.' },
    { title: 'Modern Treatment Spaces', desc: 'Quiet, private treatment suites designed for calm and privacy in Park Avenue.' },
    { title: 'Personalized Care', desc: 'Custom clinical options built around your aesthetic goals and schedule constraints.' },
    { title: 'Digital Patient Experience', desc: 'Paperless intake, digital 3D scans, and transparent treatment plan reviews.' },
    { title: 'Flexible Scheduling', desc: 'Morning, evening, and Saturday appointments tailored for busy New Yorkers.' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
              Why SmileCraft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
              Built around the way modern patients live.
            </h2>
            <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans">
              Dental care should fit seamlessly into your life. We combine human clinical experience with modern digital touchpoints so your care is effortless from first inquiry to finished treatment.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-navy-950 p-6 rounded-xl border border-ivory-200 dark:border-navy-800 shadow-soft hover:border-champagne-300 dark:hover:border-champagne-500/50 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-500" />
                  <h3 className="text-sm font-bold text-navy-900 dark:text-ivory-100 font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-charcoal-700/70 dark:text-ivory-300/70 leading-relaxed pl-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
