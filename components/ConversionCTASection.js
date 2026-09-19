'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function ConversionCTASection() {
  const { openModal } = useAIFrontDesk();

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 dark:bg-navy-950 border-b border-ivory-200 dark:border-navy-900 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-200/40 dark:bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-navy-900 border border-ivory-300 dark:border-navy-800 text-champagne-600 dark:text-champagne-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Patient Access Point</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
          Have a question?<br />
          <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">Start here.</span>
        </h2>

        <p className="text-base text-charcoal-700/80 dark:text-ivory-300/80 max-w-xl mx-auto leading-relaxed font-sans">
          Whether you're a new patient exploring treatment or an existing patient looking for information, our front desk is ready to help.
        </p>

        {/* Dual Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          
          <button
            onClick={() => openModal('overview')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-champagne-500 text-navy-950 font-bold text-sm hover:bg-champagne-400 transition-all shadow-lg hover:shadow-champagne-500/20 group"
          >
            <Bot className="w-4 h-4 text-navy-950 group-hover:scale-110 transition-transform" />
            <span>Talk to Our AI Front Desk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="/book-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-navy-900 dark:bg-navy-800 text-ivory-50 text-sm font-semibold border border-navy-800 dark:border-navy-700 hover:bg-navy-800 dark:hover:bg-navy-700 transition-all shadow-md"
          >
            <Calendar className="w-4 h-4 text-champagne-400" />
            <span>Book an Appointment</span>
          </Link>

        </div>

        <div className="pt-4 text-xs text-charcoal-700/60 dark:text-ivory-400/60 font-sans flex items-center justify-center gap-4">
          <span>• Immediate AI Responses</span>
          <span>• Easy Online Intake</span>
          <span>• Park Avenue Practice</span>
        </div>

      </div>
    </section>
  );
}
