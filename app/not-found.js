'use client';

import React from 'react';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Calendar, ArrowLeft, Search, Compass, ShieldCheck } from 'lucide-react';

export default function NotFound() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-ivory-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-2xl w-full text-center space-y-8 glass-panel p-8 sm:p-12 rounded-3xl border border-ivory-300 dark:border-navy-800 shadow-elevated">
        
        {/* Custom Tooth Graphic Graphic Emblem */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-navy-900 dark:bg-navy-900 border-2 border-champagne-400/40 flex items-center justify-center text-champagne-400 shadow-lg relative overflow-hidden group">
          <svg className="w-10 h-10 fill-champagne-400 group-hover:scale-110 transition-transform" viewBox="0 0 32 32">
            <path d="M16 5C12.5 5 9.5 6.8 8.5 10C7.5 13.2 8 17 9.2 20.2C10.4 23.4 12 26.5 13.8 26.5C15 26.5 15.3 24.8 15.7 23C16 21.6 16.2 20.2 16.5 20.2C16.8 20.2 17 21.6 17.3 23C17.7 24.8 18 26.5 19.2 26.5C21 26.5 22.6 23.4 23.8 20.2C25 17 25.5 13.2 24.5 10C23.5 6.8 20.5 5 17 5H16Z" />
          </svg>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>404 • Page Not Found</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
            Treatment link relocated or unavailable.
          </h1>

          <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-lg mx-auto font-sans leading-relaxed">
            The page or clinical resource you were looking for doesn't exist or may have moved to a new route. Explore our primary practice pages below.
          </p>
        </div>

        {/* Quick Links Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 font-bold text-xs hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-ivory-300 dark:border-navy-700 font-bold text-xs hover:bg-ivory-100 dark:hover:bg-navy-700 transition-colors shadow-sm"
          >
            <Search className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
            <span>Browse All Services</span>
          </Link>
        </div>

        {/* AI Front Desk Callout */}
        <div className="pt-4 border-t border-ivory-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left bg-white/60 dark:bg-navy-900/60 p-4 rounded-2xl border border-ivory-300 dark:border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-champagne-500/20 text-champagne-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy-900 dark:text-ivory-50">Need Help Finding Something?</div>
              <div className="text-[11px] text-charcoal-700/70 dark:text-ivory-300/70">Our AI Front Desk can guide you 24/7</div>
            </div>
          </div>

          <button
            onClick={() => openModal('overview')}
            className="px-4 py-2 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors shrink-0"
          >
            Ask AI Assistant
          </button>
        </div>

      </div>
    </div>
  );
}
