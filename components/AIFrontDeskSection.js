'use me';
'use client';

import React from 'react';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, PhoneCall, Sparkles, MessageSquare, Shield, ArrowRight, UserCheck, CalendarCheck, HelpCircle, Building } from 'lucide-react';

export default function AIFrontDeskSection() {
  const { openModal } = useAIFrontDesk();

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-ivory-50 relative overflow-hidden">
      {/* Subtle Glow & Noise */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Messaging */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-navy-800 text-champagne-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Patient Communication</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ivory-50 leading-tight">
              Your dental practice,<br />
              <span className="italic text-champagne-400 font-normal">always ready to answer.</span>
            </h2>

            <p className="text-base text-ivory-300/90 leading-relaxed font-sans">
              Patients don't always call during office hours. Our AI front desk can help answer common questions, understand what a new patient needs, collect contact details, and help guide them toward an appointment.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-navy-800 text-champagne-400 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ivory-100">Zero Missed Patient Leads</h4>
                  <p className="text-xs text-ivory-400">Captures inquiry details 24/7/365, even on weekends and holidays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-navy-800 text-sage-400 mt-1">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ivory-100">Practice-Safe Communication</h4>
                  <p className="text-xs text-ivory-400">Guides patients on logistics and appointments without making medical diagnoses.</p>
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-4">
              <button
                onClick={() => openModal('overview')}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-champagne-500 text-navy-950 font-bold text-sm hover:bg-champagne-400 transition-all shadow-lg hover:shadow-champagne-500/20 group"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Our AI Front Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Premium Interactive-looking UI Frame */}
          <div className="lg:col-span-6">
            <div className="bg-navy-900 rounded-2xl border border-navy-800 shadow-modal p-6 sm:p-8 space-y-6 relative overflow-hidden">
              
              {/* Header inside mock frame */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-sage-500 animate-pulse" />
                  <span className="text-xs font-mono text-ivory-300 font-semibold tracking-wider uppercase">
                    AI FRONT DESK • LIVE PREVIEW
                  </span>
                </div>
                <span className="text-[11px] text-sage-400 bg-sage-500/10 px-2.5 py-0.5 rounded-full border border-sage-500/20">
                  Ready 24/7
                </span>
              </div>

              {/* Bot Greeting Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-champagne-500/20 border border-champagne-400/40 text-champagne-400 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-navy-800 border border-navy-700 p-4 rounded-2xl rounded-tl-none text-xs text-ivory-100 leading-relaxed max-w-sm">
                  "Hi, welcome to <span className="font-semibold text-champagne-400">SmileCraft Dental</span>. How can I help you today?"
                </div>
              </div>

              {/* Quick Interactive Options Mock */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-ivory-400 font-mono">
                  Select a common patient prompt:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => openModal('voice')}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-800/80 border border-navy-700 hover:border-champagne-400/50 hover:bg-navy-800 transition-all text-left group"
                  >
                    <UserCheck className="w-4 h-4 text-champagne-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-ivory-100">New Patient</div>
                      <div className="text-[10px] text-ivory-400">Intake & Consultation</div>
                    </div>
                  </button>

                  <button
                    onClick={() => openModal('voice')}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-800/80 border border-navy-700 hover:border-champagne-400/50 hover:bg-navy-800 transition-all text-left group"
                  >
                    <CalendarCheck className="w-4 h-4 text-sage-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-ivory-100">Book Appointment</div>
                      <div className="text-[10px] text-ivory-400">Schedule a visit</div>
                    </div>
                  </button>

                  <button
                    onClick={() => openModal('voice')}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-800/80 border border-navy-700 hover:border-champagne-400/50 hover:bg-navy-800 transition-all text-left group"
                  >
                    <HelpCircle className="w-4 h-4 text-champagne-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-ivory-100">Treatment Questions</div>
                      <div className="text-[10px] text-ivory-400">Implants, Veneers & Aligners</div>
                    </div>
                  </button>

                  <button
                    onClick={() => openModal('voice')}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-800/80 border border-navy-700 hover:border-champagne-400/50 hover:bg-navy-800 transition-all text-left group"
                  >
                    <Building className="w-4 h-4 text-sage-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-ivory-100">Office Info</div>
                      <div className="text-[10px] text-ivory-400">Park Ave Hours & Parking</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-[11px] text-ivory-400">
                <span>ElevenLabs Agent Ready</span>
                <button
                  onClick={() => openModal('voice')}
                  className="text-champagne-400 font-semibold hover:underline"
                >
                  Open Voice Interface →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
