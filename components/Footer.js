'use client';

import React from 'react';
import Link from 'next/link';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { Bot, MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { openModal } = useAIFrontDesk();

  return (
    <footer className="bg-navy-950 text-ivory-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-2xl bg-navy-900 border-2 border-champagne-400/60 flex items-center justify-center shrink-0 shadow-md group-hover:border-champagne-400 transition-colors p-2">
                <svg className="w-7 h-7 fill-champagne-400 shrink-0" viewBox="0 0 32 32">
                  <path d="M16 5C12.5 5 9.5 6.8 8.5 10C7.5 13.2 8 17 9.2 20.2C10.4 23.4 12 26.5 13.8 26.5C15 26.5 15.3 24.8 15.7 23C16 21.6 16.2 20.2 16.5 20.2C16.8 20.2 17 21.6 17.3 23C17.7 24.8 18 26.5 19.2 26.5C21 26.5 22.6 23.4 23.8 20.2C25 17 25.5 13.2 24.5 10C23.5 6.8 20.5 5 17 5H16Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight text-ivory-50 group-hover:text-champagne-400 transition-colors leading-none">
                  SMILECRAFT
                </span>
                <p className="text-[11px] font-sans uppercase tracking-widest text-champagne-400 mt-1">
                  New York Cosmetic & Implant Dentistry
                </p>
              </div>
            </Link>

            <p className="text-xs text-ivory-400 max-w-sm leading-relaxed">
              Combining advanced clinical care, cosmetic craftsmanship, and attentive patient experiences in modern Manhattan practice spaces.
            </p>

            <div className="pt-2">
              <Link
                href="/ai-front-desk"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 text-ivory-200 text-xs font-medium hover:bg-navy-800 hover:border-champagne-500/50 transition-all group"
              >
                <Bot className="w-4 h-4 text-champagne-400 group-hover:scale-110 transition-transform" />
                <span>Talk to Our AI Front Desk</span>
              </Link>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-champagne-400 font-sans">
              Treatments & Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/dental-implants" className="hover:text-ivory-50 transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic-dentistry" className="hover:text-ivory-50 transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/invisalign" className="hover:text-ivory-50 transition-colors">
                  Invisalign Aligners
                </Link>
              </li>
              <li>
                <Link href="/services/veneers" className="hover:text-ivory-50 transition-colors">
                  Porcelain Veneers
                </Link>
              </li>
              <li>
                <Link href="/services/general-dentistry" className="hover:text-ivory-50 transition-colors">
                  General Dentistry
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-champagne-400 font-sans">
              Practice
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-ivory-50 transition-colors">
                  About Practice
                </Link>
              </li>
              <li>
                <Link href="/#patient-experience" className="hover:text-ivory-50 transition-colors">
                  Patient Experience
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="hover:text-ivory-50 transition-colors">
                  Clinical Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory-50 transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-ivory-50 transition-colors font-medium text-champagne-400">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-champagne-400 font-sans">
              Manhattan Clinic
            </h4>
            <div className="space-y-2 text-xs text-ivory-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0 mt-0.5" />
                <span>450 Park Avenue, Suite 1800, New York, NY 10022</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                <span className="font-mono">(212) 555-0194</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                <span>hello@smilecraft-demo.com</span>
              </p>
              <div className="pt-2 border-t border-navy-800 text-[11px] text-ivory-500">
                <p className="font-semibold text-ivory-300">Office Hours:</p>
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>© {new Date().getFullYear()} SmileCraft Dental. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-ivory-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[11px] text-ivory-600 bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Demo website created for demonstration purposes.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
