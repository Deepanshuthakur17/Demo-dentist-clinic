'use me';
'use client';

import HeroSection from '@/components/HeroSection';
import AIFrontDeskSection from '@/components/AIFrontDeskSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturedImplantSection from '@/components/FeaturedImplantSection';
import PatientExperienceSection from '@/components/PatientExperienceSection';
import WhySmileCraftSection from '@/components/WhySmileCraftSection';
import TechnologySection from '@/components/TechnologySection';
import ConversionCTASection from '@/components/ConversionCTASection';
import FAQSection from '@/components/FAQSection';
import AppointmentForm from '@/components/AppointmentForm';
import { Bot } from 'lucide-react';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';

export default function HomePage() {
  const { openModal } = useAIFrontDesk();

  return (
    <div className="space-y-0 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* AI Front Desk Feature Section */}
      <AIFrontDeskSection />

      {/* Primary Services Grid */}
      <ServicesSection />

      {/* Featured Editorial: Dental Implants */}
      <FeaturedImplantSection />

      {/* Patient Experience Principles */}
      <PatientExperienceSection />

      {/* Why SmileCraft Highlights */}
      <WhySmileCraftSection />

      {/* Practice Technology */}
      <TechnologySection />

      {/* High-Conversion Mid-Page CTA */}
      <ConversionCTASection />

      {/* Patient Booking Section */}
      <section className="py-20 lg:py-28 bg-ivory-100 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
                Easy Scheduling
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 leading-tight">
                Ready to experience modern dental care?
              </h2>
              <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans">
                Reserve your consultation or hygiene appointment today. We welcome new patients and accept most major insurance plans.
              </p>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-ivory-300 dark:border-navy-800 shadow-soft space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900 dark:text-ivory-100 uppercase tracking-wider">Prefer to Speak?</h4>
                    <p className="text-xs text-charcoal-700/70 dark:text-ivory-400/70">Our AI Receptionist is active right now.</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal('overview')}
                  className="w-full py-2.5 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
                >
                  Talk to AI Front Desk
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}
