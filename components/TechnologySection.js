'use me';
'use client';

import React from 'react';
import { Cpu, Scan, Layers, MessageSquareCode, ShieldAlert } from 'lucide-react';

export default function TechnologySection() {
  const techPoints = [
    {
      title: 'Digital Imaging & Scanning',
      desc: 'Comfortable intraoral digital scanners eliminate messy impressions while providing accurate 3D views of your teeth.',
      icon: Scan
    },
    {
      title: 'Digital Treatment Planning',
      desc: 'Virtual treatment modeling allows you to visualize cosmetic and implant outcomes before beginning care.',
      icon: Layers
    },
    {
      title: 'Modern Diagnostic Tools',
      desc: 'Low-radiation digital radiography assists in detecting hidden oral health issues with precision.',
      icon: Cpu
    },
    {
      title: 'Patient Communication Technology',
      desc: 'Integrated AI receptionist tools and secure digital messaging keep you informed throughout your care journey.',
      icon: MessageSquareCode
    },
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-navy-950 text-ivory-50 border-b border-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-400 font-sans">
            Clinical Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ivory-50">
            Modern technology. <span className="italic text-champagne-400 font-normal">Human care.</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-sans">
            We invest in advanced digital systems to make diagnostic checkups faster, treatments more precise, and recovery as comfortable as possible.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/80 p-8 rounded-2xl border border-navy-800 hover:border-champagne-500/40 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-champagne-500/20 text-champagne-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ivory-100">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-300/80 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
