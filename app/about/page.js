'use client';

import React from 'react';
import Link from 'next/link';
import InteractiveDentalImage from '@/components/InteractiveDentalImage';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, Calendar, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { openModal } = useAIFrontDesk();

  const demoTeam = [
    {
      name: 'Dr. Evelyn Vance, DDS',
      role: 'Lead Cosmetic & Implant Dentist',
      bio: 'Over 14 years of clinical experience specializing in precision implantology and full mouth cosmetic reconstructions in Manhattan.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Marcus Sterling, DMD',
      role: 'Restorative & General Dentist',
      bio: 'Focused on preventive oral health, minimally invasive dental procedures, and gentle patient-centered clinical care.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Sophia Reyes, DDS',
      role: 'Orthodontic & Invisalign Specialist',
      bio: 'Expert in clear aligner therapy, biomechanics, and aesthetic smile alignment for adult and teenage patients.',
      image: 'https://images.unsplash.com/photo-1594824813566-78a0d7a7833a?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
            About Practice
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-navy-900 dark:text-ivory-50 max-w-3xl mx-auto leading-tight">
            Modern dentistry,<br />
            <span className="italic text-champagne-600 dark:text-champagne-400 font-normal">with a human approach.</span>
          </h1>
          <p className="font-sans text-base text-charcoal-700/80 dark:text-ivory-300/80 max-w-2xl mx-auto leading-relaxed">
            Founded in Midtown Manhattan, SmileCraft Dental was built around a singular idea: clinical excellence and patient comfort should coexist seamlessly.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/aikizi-image-shatter (3).png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy-900 dark:text-ivory-50 leading-tight">
                Respecting your time, comfort, and natural smile.
              </h2>
              <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed font-sans">
                We believe going to the dentist shouldn't feel rushed or anxiety-inducing. From our calm Park Avenue reception lounge to our private treatment suites, every detail is considered to help you feel informed and relaxed.
              </p>
              
              <div className="space-y-3 pt-2 text-xs text-navy-900 dark:text-ivory-100 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                  <span>Conservative clinical philosophy preserving natural tooth structure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                  <span>Transparent treatment explanations with digital 3D visualization</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-500 shrink-0" />
                  <span>24/7 patient accessibility via phone and AI reception technology</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-ivory-100 dark:border-navy-800 aspect-[4/3] bg-ivory-200 dark:bg-navy-950">
                <InteractiveDentalImage
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="SmileCraft Dental modern office environment"
                  caption="SmileCraft Dental State-of-the-Art Treatment Suite - Double tap for high-res view"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Demo Team */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-950 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
              Clinical Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy-900 dark:text-ivory-50">
              Meet our dental team.
            </h2>
            <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80">
              Dedicated clinicians committed to precision care, modern aesthetic techniques, and gentle patient experiences. Double-tap doctor photo for high-res view.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoTeam.map((doc, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-900 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft overflow-hidden space-y-4 p-6">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-ivory-200 dark:bg-navy-950">
                  <InteractiveDentalImage
                    src={doc.image}
                    alt={doc.name}
                    caption={`${doc.name} - ${doc.role}`}
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">{doc.name}</h3>
                  <div className="text-xs font-semibold text-champagne-600 dark:text-champagne-400 uppercase tracking-wider mt-0.5">{doc.role}</div>
                  <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 leading-relaxed mt-2">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fictitious team disclaimer */}
          <div className="bg-ivory-200/50 dark:bg-navy-900/50 p-4 rounded-xl border border-ivory-300 dark:border-navy-800 text-xs text-charcoal-700/70 dark:text-ivory-300/70 text-center font-mono">
            Notice: Doctor profiles and clinical details shown above represent demonstration data for sales presentation purposes.
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-navy-950 text-ivory-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ivory-50">
            Experience modern dentistry in Midtown Manhattan.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="px-6 py-3.5 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
            >
              Book an Appointment
            </Link>
            <button
              onClick={() => openModal('overview')}
              className="px-6 py-3.5 rounded-xl bg-navy-800 text-ivory-100 border border-navy-700 text-xs font-semibold hover:bg-navy-700 transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-champagne-400" />
              <span>Talk to Our AI Front Desk</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
