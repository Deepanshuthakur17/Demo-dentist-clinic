'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Mic, 
  PhoneCall, 
  Sparkles, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  HelpCircle, 
  Info, 
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Lock
} from 'lucide-react';

import ElevenLabsVoiceAgent from '@/components/ElevenLabsVoiceAgent';

export default function AIFrontDeskPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Hero Header with Background Texture */}
      <section className="bg-navy-950 text-ivory-50 py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/20 text-champagne-400 border border-champagne-400/30 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Virtual Receptionist Architecture • Trishul AI</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ivory-50 max-w-4xl mx-auto leading-tight">
            SmileCraft AI Front Desk.<br />
            <span className="italic text-champagne-400 font-normal">24/7 Patient Accessibility Technology.</span>
          </h1>

          <p className="font-sans text-base text-ivory-300/90 max-w-2xl mx-auto leading-relaxed">
            Experience how AI reception technology handles patient calls, answers clinical inquiries, and captures appointment requests around the clock without compromising luxury practice standards.
          </p>
        </div>
      </section>

      {/* Main Interactive Interface Container */}
      <section className="py-16 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-navy-950 rounded-3xl shadow-elevated border border-ivory-300 dark:border-navy-800 overflow-hidden transition-colors duration-300">
            
            {/* Header Toolbar */}
            <div className="bg-navy-900 dark:bg-navy-950 text-ivory-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-800 relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-champagne-500/20 border border-champagne-400/40 flex items-center justify-center text-champagne-400 shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif text-2xl font-bold text-ivory-50">SMILECRAFT AI FRONT DESK</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-sage-500/20 text-sage-400 border border-sage-500/30 uppercase">
                      Live ElevenLabs Voice Agent
                    </span>
                  </div>
                  <p className="text-xs text-ivory-400 mt-0.5 font-sans">
                    ElevenLabs Conversational Voice Agent Interface
                  </p>
                </div>
              </div>

              {/* Action */}
              <Link
                href="/book-appointment"
                className="relative z-10 px-5 py-2.5 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors shrink-0 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Form</span>
              </Link>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-ivory-200 dark:border-navy-800 bg-ivory-100 dark:bg-navy-900 px-6 pt-3 gap-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                  activeTab === 'overview'
                    ? 'text-navy-900 dark:text-champagne-400 border-b-2 border-champagne-500'
                    : 'text-charcoal-700/60 dark:text-ivory-400/60 hover:text-navy-900 dark:hover:text-ivory-200'
                }`}
              >
                Overview & Capabilities
              </button>
              <button
                onClick={() => setActiveTab('voice')}
                className={`pb-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors relative flex items-center gap-2 ${
                  activeTab === 'voice'
                    ? 'text-navy-900 dark:text-champagne-400 border-b-2 border-champagne-500'
                    : 'text-charcoal-700/60 dark:text-ivory-400/60 hover:text-navy-900 dark:hover:text-ivory-200'
                }`}
              >
                <Mic className="w-4 h-4 text-champagne-500" />
                <span>Live Voice Receptionist</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-10 bg-ivory-50 dark:bg-navy-950">
              
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-sage-100 dark:bg-sage-500/20 text-sage-600 dark:text-sage-400 mt-0.5 shrink-0">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50">
                          24/7 Conversational Voice Agent
                        </h3>
                        <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans">
                          Dental patients call at all hours—after business closures, during busy clinical shifts, and on weekends. SmileCraft's AI front desk acts as an always-on receptionist, handling phone inquiries, explaining cosmetic & implant treatments, and qualifying leads for the office team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 shadow-soft space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-champagne-500 shrink-0" />
                        <h4 className="text-sm font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">After-Hours Patient Coverage</h4>
                      </div>
                      <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 leading-relaxed">
                        Never miss high-value prospective patients calling outside regular office hours or when front-desk staff are attending to in-office patients.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 shadow-soft space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-champagne-500 shrink-0" />
                        <h4 className="text-sm font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Instant Patient Qualification</h4>
                      </div>
                      <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 leading-relaxed">
                        Intelligently assesses caller intent—whether inquiring about implants, Invisalign clear aligners, porcelain veneers, or routine hygiene checkups.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 shadow-soft space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-champagne-500 shrink-0" />
                        <h4 className="text-sm font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Empathetic Voice Tone</h4>
                      </div>
                      <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 leading-relaxed">
                        Natural human cadence, warm conversational pacing, and ultra-low latency tuned specifically for high-end boutique dental practices.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 shadow-soft space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-champagne-500 shrink-0" />
                        <h4 className="text-sm font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Direct Lead & Booking Capture</h4>
                      </div>
                      <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 leading-relaxed">
                        Captures patient contact information, requested dates, and treatment interests, instantly organizing them for practice staff.
                      </p>
                    </div>
                  </div>

                  {/* Disclosure Box */}
                  <div className="bg-ivory-200/60 dark:bg-navy-900/80 p-5 rounded-2xl border border-ivory-300/80 dark:border-navy-800 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-navy-900 dark:text-champagne-400 shrink-0" />
                    <p className="text-xs text-charcoal-700 dark:text-ivory-300 leading-snug">
                      <span className="font-semibold text-navy-900 dark:text-ivory-100">Practice Notice:</span> The AI Front Desk provides practice information and schedules appointments. It does not provide medical diagnosis or replace dental clinical evaluation.
                    </p>
                  </div>

                  {/* CTA Row */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      onClick={() => setActiveTab('voice')}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-sm font-bold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md group"
                    >
                      <Mic className="w-4 h-4 text-champagne-400 dark:text-navy-950 group-hover:scale-110 transition-transform" />
                      <span>Start Voice Call With Receptionist</span>
                      <ArrowRight className="w-4 h-4 text-ivory-400 dark:text-navy-950 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-ivory-300 dark:border-navy-700 text-sm font-bold hover:bg-ivory-100 dark:hover:bg-navy-700 transition-colors shadow-soft"
                    >
                      <Calendar className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                      <span>Book Appointment Form</span>
                    </Link>
                  </div>

                </div>
              )}

              {activeTab === 'voice' && (
                <div className="animate-in fade-in duration-200">
                  <ElevenLabsVoiceAgent />
                </div>
              )}

            </div>

            {/* Footer Bar */}
            <div className="bg-ivory-100 dark:bg-navy-900 border-t border-ivory-200 dark:border-navy-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-charcoal-700/70 dark:text-ivory-400/80">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-champagne-500" />
                24/7/365 AI Receptionist Availability
              </span>
              <span className="font-mono text-sage-600 dark:text-sage-400 font-bold">SmileCraft Dental • Midtown Manhattan</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
