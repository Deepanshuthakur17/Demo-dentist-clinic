'use client';

import React from 'react';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function BookAppointmentPage() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Header with Background Texture */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/aikizi-particle-disperse (3).png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
            Direct Scheduling
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            Book an Appointment
          </h1>
          <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-xl mx-auto font-sans leading-relaxed">
            Reserve your consultation or routine visit with our Park Avenue clinical team.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white dark:bg-navy-950 p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-6">
                
                {/* Visual Image Card */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-ivory-200 dark:border-navy-800">
                  <Image
                    src="/aikizi-particle-disperse (3).png"
                    alt="SmileCraft consultation room visual"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50">What to Expect</h3>
                
                <div className="space-y-4 text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900 dark:text-ivory-100 block">Personalized Consultation</span>
                      We discuss your aesthetic goals, health history, and comfort preferences.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900 dark:text-ivory-100 block">Digital Imaging & Diagnostics</span>
                      Low-radiation 3D imaging for precise clinical assessment.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900 dark:text-ivory-100 block">Transparent Treatment Plan</span>
                      Clear option breakdowns with zero high-pressure sales pitches.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory-100 dark:border-navy-800 space-y-2 text-xs text-charcoal-700 dark:text-ivory-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                    <span>450 Park Avenue, Suite 1800, NYC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                    <span>Mon–Fri 8am–6pm | Sat 9am–2pm</span>
                  </div>
                </div>
              </div>

              {/* AI Assistant Card */}
              <div className="bg-navy-900 dark:bg-navy-950 text-ivory-50 p-6 rounded-2xl border border-navy-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne-500/20 text-champagne-400 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-ivory-50">Need Quick Answers?</h4>
                    <p className="text-xs text-ivory-300/80">Speak to our AI Receptionist</p>
                  </div>
                </div>
                <p className="text-xs text-ivory-300/80 leading-relaxed">
                  Have questions about accepted insurance, treatment steps, or office location before requesting your appointment?
                </p>
                <button
                  onClick={() => openModal('overview')}
                  className="w-full py-3 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
                >
                  Talk to Our AI Front Desk
                </button>
              </div>

            </div>

            {/* Right Appointment Form Component */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
