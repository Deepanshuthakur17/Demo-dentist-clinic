'use me';
'use client';

import React, { useState } from 'react';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { 
  X, 
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
  Volume2
} from 'lucide-react';
import Link from 'next/link';

/**
 * ELEVENLABS INTEGRATION ARCHITECTURE NOTE:
 * ============================================================================
 * This component acts as the primary UI & State Machine container for the
 * Trishul AI Receptionist / AI Front Desk agent.
 * 
 * Conceptual Flow:
 * Website -> AI Front Desk CTA -> Voice Agent Modal -> ElevenLabs Conversational AI (Signed URL) -> Dental Receptionist Agent
 * 
 * Standard Voice Agent State Machine:
 * - Idle: Ready for user to initiate voice call
 * - Connecting: Requesting signed session token from backend API
 * - Listening: ElevenLabs agent listening to user speech
 * - AISpeaking: ElevenLabs agent streaming audio output
 * - Processing: Analyzing user prompt / executing backend function call
 * - Ended: Conversation finished or user hung up
 * - Error: Connection or microphone access issue
 * 
 * SECURITY DIRECTIVE:
 * DO NOT expose NEXT_PUBLIC_ELEVENLABS_API_KEY in client code.
 * Future integration will fetch a temporary session URL from `/api/elevenlabs/session`.
 * ============================================================================
 */

import ElevenLabsVoiceAgent from './ElevenLabsVoiceAgent';

export default function AIFrontDeskModal() {
  const { isOpen, closeModal, activeTab, setActiveTab } = useAIFrontDesk();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-ivory-50 dark:bg-navy-950 rounded-2xl shadow-modal border border-ivory-300 dark:border-navy-800 overflow-hidden z-10 my-8 transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-navy-900 dark:bg-navy-950 text-ivory-100 p-6 flex items-start justify-between relative overflow-hidden border-b border-navy-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-champagne-500/20 border border-champagne-400/30 flex items-center justify-center text-champagne-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-medium text-ivory-50">SMILECRAFT AI FRONT DESK</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-sage-500/20 text-sage-400 border border-sage-500/30 uppercase">
                  Live ElevenLabs AI
                </span>
              </div>
              <p className="text-xs text-ivory-400 mt-0.5 font-sans">
                Virtual Receptionist Architecture • Powered by ElevenLabs & Trishul AI
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="relative z-10 p-2 rounded-lg text-ivory-400 hover:text-ivory-100 hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-ivory-200 dark:border-navy-800 bg-ivory-100 dark:bg-navy-900 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
              activeTab === 'overview'
                ? 'text-navy-900 dark:text-champagne-400 border-b-2 border-champagne-500'
                : 'text-charcoal-700/60 dark:text-ivory-400/60 hover:text-navy-900 dark:hover:text-ivory-200'
            }`}
          >
            Overview & Capabilities
          </button>
          <button
            onClick={() => setActiveTab('voice')}
            className={`pb-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors relative flex items-center gap-1.5 ${
              activeTab === 'voice'
                ? 'text-navy-900 dark:text-champagne-400 border-b-2 border-champagne-500'
                : 'text-charcoal-700/60 dark:text-ivory-400/60 hover:text-navy-900 dark:hover:text-ivory-200'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-champagne-500" />
            Live Voice Receptionist
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 bg-ivory-50 dark:bg-navy-950">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-navy-900 p-5 rounded-xl border border-ivory-200 dark:border-navy-800 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sage-100 dark:bg-sage-500/20 text-sage-600 dark:text-sage-400 mt-0.5 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-navy-900 dark:text-ivory-50">
                      24/7 Conversational AI Front Desk
                    </h4>
                    <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed mt-1">
                      Patients don't always call during regular office hours. SmileCraft's AI front desk handles phone calls, answers patient questions, screens new patient inquiries, and assists with appointment requests day or night.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">After-Hours Care</h5>
                    <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 mt-1">Never miss a new patient call when your office is closed or lines are busy.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Instant Qualification</h5>
                    <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 mt-1">Understands whether patients need implants, cosmetic care, or general checkups.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Natural Voice Agent</h5>
                    <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 mt-1">Ultra-low latency, empathetic human tone designed specifically for luxury dental practices.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-ivory-200 dark:border-navy-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Lead Collection</h5>
                    <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/80 mt-1">Captures patient contact details and sends appointment requests straight to your team.</p>
                  </div>
                </div>
              </div>

              {/* AI Disclosure Notice */}
              <div className="bg-ivory-200/60 dark:bg-navy-900/80 p-4 rounded-xl border border-ivory-300/80 dark:border-navy-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-navy-900 dark:text-champagne-400 shrink-0" />
                <p className="text-xs text-charcoal-700 dark:text-ivory-300 leading-snug">
                  <span className="font-semibold text-navy-900 dark:text-ivory-100">Practice Notice:</span> The AI Front Desk provides practice information and schedules appointments. It does not provide medical diagnosis or replace dental clinical evaluation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('voice')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-sm font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md group"
                >
                  <Mic className="w-4 h-4 text-champagne-400 dark:text-navy-950 group-hover:scale-110 transition-transform" />
                  <span>Talk to Live Voice Receptionist</span>
                  <ArrowRight className="w-4 h-4 text-ivory-400 dark:text-navy-950 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/book-appointment"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-champagne-100 dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-champagne-400/40 dark:border-navy-700 text-sm font-semibold hover:bg-champagne-200 dark:hover:bg-navy-700 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-navy-900 dark:text-champagne-400" />
                  <span>Book Appointment Form</span>
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'voice' && (
            <ElevenLabsVoiceAgent onBookClick={closeModal} />
          )}

        </div>

        {/* Footer info bar */}
        <div className="bg-ivory-100 dark:bg-navy-900 border-t border-ivory-200 dark:border-navy-800 px-6 py-3 flex items-center justify-between text-[11px] text-charcoal-700/70 dark:text-ivory-400/80">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-champagne-500" />
            Front Desk Available 24/7/365
          </span>
          <span className="font-mono text-sage-600 dark:text-sage-400">SmileCraft Dental • New York</span>
        </div>

      </div>
    </div>
  );
}
