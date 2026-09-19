'use client';

import React from 'react';
import InteractiveDentalImage from '@/components/InteractiveDentalImage';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Calendar, ShieldCheck } from 'lucide-react';

export default function DentalImplantsPage() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Hero */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/aikizi-image-shatter (4).png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
                Featured Clinical Specialty
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-navy-900 dark:text-ivory-50 leading-tight">
                Dental Implants in New York.<br />
                <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">Permanent, natural-feeling restorations.</span>
              </h1>
              <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans max-w-xl">
                Replace missing teeth with modern biocompatible titanium or ceramic implants. Designed to anchor securely into bone structure for natural biting function and confident aesthetics.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-appointment"
                  className="px-6 py-3.5 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-xs font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-champagne-400 dark:text-navy-950" />
                  <span>Book Implant Evaluation</span>
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
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision dental implant treatment at SmileCraft Dental"
                  caption="3D Precision Dental Implant Restoration Suite - Double tap for high-res view"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview & Process */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-medium text-navy-900 dark:text-ivory-50">
              Why consider dental implants?
            </h2>
            <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
              Unlike traditional removable dentures or tooth-supported bridges, dental implants replace the root structure of a missing tooth. This helps preserve jawbone density and prevents adjacent healthy teeth from shifting.
            </p>
          </div>

          {/* 3 Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-950 p-7 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <div className="font-mono text-xs font-bold text-champagne-600 dark:text-champagne-400">Step 01</div>
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Digital 3D Evaluation</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                We perform high-resolution digital scanning to analyze bone density and map precise implant placement coordinates.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-950 p-7 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <div className="font-mono text-xs font-bold text-champagne-600 dark:text-champagne-400">Step 02</div>
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Gentle Implant Placement</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                The biocompatible implant post is gently placed into bone under local anesthesia or comfortable sedation.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-950 p-7 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-3">
              <div className="font-mono text-xs font-bold text-champagne-600 dark:text-champagne-400">Step 03</div>
              <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Custom Crown Attachment</h3>
              <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                Once healed, a handcrafted porcelain crown matching your surrounding natural teeth is secured to complete your smile.
              </p>
            </div>
          </div>

          <div className="bg-ivory-200/50 dark:bg-navy-950/50 p-4 rounded-xl border border-ivory-300 dark:border-navy-800 text-xs text-charcoal-700 dark:text-ivory-300 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-navy-900 dark:text-champagne-400 shrink-0" />
            <p>
              Dental implant candidacy requires clinical examination by a qualified dentist. Results and healing timelines vary by individual patient anatomy.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-950 text-ivory-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl font-medium text-ivory-50">
            Schedule your implant consultation.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/book-appointment"
              className="px-6 py-3.5 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
            >
              Book Appointment
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
