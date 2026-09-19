'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InteractiveDentalImage from './InteractiveDentalImage';

export default function FeaturedImplantSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Texture Graphic */}
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/aikizi-image-shatter (2).png')" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinical Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white dark:border-navy-800 bg-ivory-200 dark:bg-navy-950 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <InteractiveDentalImage
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                alt="Modern dental implants and precision restorative care at SmileCraft"
                caption="SmileCraft Dental Implant & Precision Surgical Suite - Double tap for high-res view"
                fill={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white dark:bg-navy-950 p-5 rounded-2xl border border-ivory-300 dark:border-navy-700 shadow-elevated max-w-xs hidden sm:block z-20">
              <div className="text-xs font-bold uppercase tracking-wider text-champagne-600 dark:text-champagne-400 mb-1">
                Precision Implant Care
              </div>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-snug">
                Designed to feel, function, and look natural. Double-tap photo to inspect.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
              Featured Specialty
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
              Restore more than a tooth.<br />
              <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">Restore confidence.</span>
            </h2>

            <p className="text-base text-charcoal-800 dark:text-ivory-200/90 leading-relaxed font-sans">
              Explore modern implant dentistry with a treatment approach designed around your individual needs. From single tooth replacement to full-arch restorations, our digital planning process prioritizes your long-term oral health and aesthetic goals.
            </p>

            <div className="space-y-3 pt-2 text-xs font-medium text-navy-900 dark:text-ivory-100">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                <span>Custom 3D Digital Surgical Planning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                <span>Biocompatible Titanium & Zirconia Options</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                <span>Sedation & Comfort Options Available</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services/dental-implants"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-sm font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md group"
              >
                <span>Explore Dental Implants</span>
                <ArrowRight className="w-4 h-4 text-champagne-400 dark:text-navy-950 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
