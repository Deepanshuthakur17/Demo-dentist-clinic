'use client';

import React from 'react';
import InteractiveDentalImage from '@/components/InteractiveDentalImage';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Calendar } from 'lucide-react';

export default function InvisalignPage() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Hero */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/aikizi-image-shatter (6).png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
                Clear Aligner Orthodontics
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-navy-900 dark:text-ivory-50 leading-tight">
                Invisalign® in New York.<br />
                <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">Discreet aligners tailored to your lifestyle.</span>
              </h1>
              <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans max-w-xl">
                Align your teeth comfortably with virtually invisible, custom-fitted removable aligner trays. Designed for professional adults and teens seeking discreet orthodontic refinement.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3.5 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-xs font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-champagne-400 dark:text-navy-950" />
                  <span>Schedule Invisalign Scan</span>
                </Link>

                <button
                  onClick={() => openModal('overview')}
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-ivory-300 dark:border-navy-700 text-xs font-semibold hover:bg-champagne-100 dark:hover:bg-navy-700 transition-colors flex items-center gap-2"
                >
                  <Bot className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                  <span>Ask AI Front Desk</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white dark:border-navy-800 aspect-[4/3] bg-ivory-200 dark:bg-navy-900">
                <InteractiveDentalImage
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                  alt="Clear aligner treatment at SmileCraft Dental"
                  caption="Digital 3D Clear Aligner Planning Suite - Double tap for high-res view"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-3xl font-medium text-navy-900 dark:text-ivory-50">
              Why choose Invisalign aligners?
            </h2>
            <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
              Clear aligners offer flexibility and comfort, allowing you to maintain your normal diet and daily oral hygiene routine with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-navy-950 p-6 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Virtually Invisible</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                Clear SmartTrack® material makes aligners discreet during social and professional interactions.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-950 p-6 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Removable Convenience</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                Easily pop out aligners during meals, coffee breaks, brushing, and flossing.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-950 p-6 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Digital Outcome Mapping</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                Preview your predicted smile progression with 3D digital treatment plan software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-950 text-ivory-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl font-medium text-ivory-50">
            Start your clear aligner consultation.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/book-appointment"
              className="px-6 py-3.5 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
            >
              Book Consultation
            </Link>
            <button
              onClick={() => openModal('overview')}
              className="px-6 py-3.5 rounded-xl bg-navy-800 text-ivory-100 border border-navy-700 text-xs font-semibold hover:bg-navy-700 transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-champagne-400" />
              <span>Talk to AI Front Desk</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
