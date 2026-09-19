'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveDentalImage from '@/components/InteractiveDentalImage';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Calendar, Bot, ShieldCheck, Clock, Sparkles, Check } from 'lucide-react';

export default function HeroSection() {
  const { openModal } = useAIFrontDesk();

  return (
    <section className="relative bg-ivory-100 dark:bg-navy-950 pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
      {/* Full Bleed Hero Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="SmileCraft Dental Hero Background"
          fill
          priority
          className="object-cover object-center opacity-60 dark:opacity-25 filter contrast-105 saturate-110"
        />
        {/* Responsive Theme-Aware Gradient Masks for Crisp Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-100/90 via-ivory-100/60 to-transparent dark:from-navy-950/95 dark:via-navy-950/70 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/80 via-transparent to-ivory-100/40 dark:from-navy-950/90 dark:via-transparent dark:to-navy-950/50" />
      </div>

      {/* Soft Ambient Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne-200/30 dark:bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sage-200/20 dark:bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content wrapped in glass backdrop for 100% text legibility */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-10 rounded-3xl border border-ivory-300/80 dark:border-navy-800 shadow-soft dark:shadow-modal">
            
            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-100/90 dark:bg-sage-500/20 text-sage-600 dark:text-sage-400 border border-sage-200 dark:border-sage-500/30 shadow-sm">
                <Check className="w-3.5 h-3.5 text-sage-600 dark:text-sage-400" />
                New patients welcome
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-champagne-100/90 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 border border-champagne-200 dark:border-champagne-500/30 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-champagne-600 dark:text-champagne-400" />
                Same-day consultation available
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-[1.15]">
                Modern dentistry.<br />
                <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">Designed around you.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal-800 dark:text-ivory-200/90 max-w-xl leading-relaxed font-normal">
                From advanced dental implants and cosmetic treatments to everyday preventive care, SmileCraft Dental combines modern technology with personalized attention to help you feel confident about your smile.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              
              {/* Primary CTA */}
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-sm font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md group"
              >
                <Calendar className="w-4 h-4 text-champagne-400 dark:text-navy-950 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/ai-front-desk"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 text-sm font-semibold border border-ivory-300 dark:border-navy-700 hover:bg-champagne-100 dark:hover:bg-navy-700 transition-all shadow-soft group"
              >
                <Bot className="w-4 h-4 text-champagne-600 dark:text-champagne-400 group-hover:scale-110 transition-transform" />
                <span>Talk to Our AI Front Desk</span>
                <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
              </Link>

            </div>

            {/* Sub-hero trust metrics */}
            <div className="pt-6 border-t border-ivory-200/80 dark:border-navy-800 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Park Ave</div>
                <div className="text-xs text-charcoal-700/80 dark:text-ivory-400 mt-0.5">Prime Midtown Clinic</div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">24/7</div>
                <div className="text-xs text-charcoal-700/80 dark:text-ivory-400 mt-0.5">AI Front Desk Support</div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">1:1</div>
                <div className="text-xs text-charcoal-700/80 dark:text-ivory-400 mt-0.5">Personalized Care</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Component */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white dark:border-navy-800 bg-ivory-200 dark:bg-navy-900 aspect-[4/5]">
                <InteractiveDentalImage
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="SmileCraft Midtown Dental Practice Suite"
                  caption="Park Avenue Clinical Suite • Double-tap to inspect high-res image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

                {/* Floating AI Front Desk Card Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-ivory-300 dark:border-navy-700 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 dark:bg-navy-800 text-champagne-400 flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900 dark:text-ivory-50">AI Front Desk Ready</div>
                      <div className="text-[11px] text-charcoal-700/70 dark:text-ivory-400/80">Answering questions 24/7</div>
                    </div>
                  </div>
                  <Link
                    href="/ai-front-desk"
                    className="px-3 py-1.5 rounded-lg bg-champagne-500 text-navy-950 text-xs font-bold hover:bg-champagne-400 transition-colors shrink-0"
                  >
                    Test AI
                  </Link>
                </div>

              </div>

              {/* Decorative Frame outline */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-champagne-400/30 rounded-2xl -z-10 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
