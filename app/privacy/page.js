'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Bot, CheckCircle2 } from 'lucide-react';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';

export default function PrivacyPage() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-500/20 text-sage-600 dark:text-sage-400 border border-sage-200 dark:border-sage-500/30 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Patient Confidentiality & Data Notice</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            Privacy Policy
          </h1>

          <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-xl mx-auto font-sans leading-relaxed">
            How SmileCraft Dental protects patient confidentiality, handles digital inquiry data, and maintains high standards for AI conversational interaction.
          </p>

          <div className="text-[11px] font-mono text-charcoal-700/60 dark:text-ivory-400/60 pt-2">
            Last Updated: September 2026 • SmileCraft Dental Practice Compliance
          </div>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <section className="py-16 sm:py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Demo Notice Banner */}
          <div className="bg-white dark:bg-navy-950 p-6 rounded-2xl border border-champagne-400/50 dark:border-champagne-500/30 shadow-soft space-y-3">
            <div className="flex items-center gap-2.5 text-champagne-600 dark:text-champagne-400 font-bold text-xs uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Demonstration Website Governance Notice</span>
            </div>
            <p className="text-xs text-charcoal-800 dark:text-ivory-200 leading-relaxed font-sans">
              This website is a production-grade demonstration platform created by <strong>Trishul AI</strong> for prospective dental practices. All patient scenarios, appointment request flows, and doctor profiles represent fictitious demonstration data. No actual Protected Health Information (PHI) is collected, stored, or transmitted to third parties.
            </p>
          </div>

          {/* Privacy Articles */}
          <div className="space-y-10 text-charcoal-800 dark:text-ivory-200">
            
            {/* Section 1 */}
            <div className="space-y-3 bg-white dark:bg-navy-950 p-6 sm:p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
              <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50 flex items-center gap-2.5">
                <span className="text-champagne-600 dark:text-champagne-400 font-mono text-sm">01.</span>
                Patient Information & Confidentiality
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                At SmileCraft Dental, preserving individual privacy and clinical confidentiality is paramount. In a live practice environment, all online forms, digital intake questionnaires, and scheduling portals are built to comply with federal Health Insurance Portability and Accountability Act (HIPAA) standards and encrypted using TLS 1.3 encryption protocols.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 bg-white dark:bg-navy-950 p-6 sm:p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
              <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50 flex items-center gap-2.5">
                <span className="text-champagne-600 dark:text-champagne-400 font-mono text-sm">02.</span>
                Conversational AI & Voice Data Handling
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                Our practice utilizes automated AI receptionist technology (powered by Trishul AI and ElevenLabs architecture) to assist patients with after-hours inquiries, office directions, and consultation scheduling:
              </p>
              <ul className="space-y-2 text-xs text-charcoal-700/80 dark:text-ivory-300/80 pt-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <span>Audio streams are processed strictly in transient RAM memory for real-time natural language synthesis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <span>No voice data is used to train public machine learning models without explicit patient consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0 mt-0.5" />
                  <span>Session access relies on server-authenticated token authorization to prevent unauthorized access.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 bg-white dark:bg-navy-950 p-6 sm:p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
              <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50 flex items-center gap-2.5">
                <span className="text-champagne-600 dark:text-champagne-400 font-mono text-sm">03.</span>
                Cookies & Local Theme Storage
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                This website uses browser local storage exclusively to store your preferred interface theme selection (Light Mode vs. Dark Mode) across page reloads. We do not place invasive tracking cookies or share cross-site advertising telemetry.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 bg-white dark:bg-navy-950 p-6 sm:p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
              <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50 flex items-center gap-2.5">
                <span className="text-champagne-600 dark:text-champagne-400 font-mono text-sm">04.</span>
                Contacting Privacy Compliance
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed">
                For inquiries concerning practice data protection or website compliance architecture, please contact our administrative privacy team at <strong className="text-navy-900 dark:text-ivory-100 font-mono">privacy@smilecraft-demo.com</strong> or call <strong className="text-navy-900 dark:text-ivory-100 font-mono">(212) 555-0194</strong>.
              </p>
            </div>

          </div>

          {/* Navigation Action Footer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ivory-200 dark:border-navy-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-xs font-bold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/ai-front-desk"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-navy-800 text-navy-900 dark:text-ivory-100 border border-ivory-300 dark:border-navy-700 text-xs font-bold hover:bg-ivory-100 dark:hover:bg-navy-700 transition-colors"
            >
              <Bot className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
              <span>Inspect AI Technology</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
