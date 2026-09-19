'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-ivory-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-xl w-full text-center space-y-6 glass-panel p-8 sm:p-12 rounded-3xl border border-ivory-300 dark:border-navy-800 shadow-elevated">
        
        <div className="w-16 h-16 mx-auto rounded-2xl bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 flex items-center justify-center">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-medium text-navy-900 dark:text-ivory-50">
            Something went wrong.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed max-w-md mx-auto">
            An unexpected client error occurred. Click below to reload the page or return to our homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 font-bold text-xs hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-ivory-300 dark:border-navy-700 font-bold text-xs hover:bg-ivory-100 dark:hover:bg-navy-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
