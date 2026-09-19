'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import ThemeToggle from '@/components/ThemeToggle';
import { 
  Bot, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MapPin, 
  Clock, 
  Shield,
  Check
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useAIFrontDesk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when touching / clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const serviceLinks = [
    { label: 'Dental Implants', href: '/services/dental-implants', desc: 'Permanent tooth replacement solutions' },
    { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry', desc: 'Teeth whitening, bonding & aesthetic refinement' },
    { label: 'Invisalign Clear Aligners', href: '/services/invisalign', desc: 'Discreet aligners for straight smiles' },
    { label: 'Porcelain Veneers', href: '/services/veneers', desc: 'Custom aesthetic ceramic veneers' },
    { label: 'General Dentistry', href: '/services/general-dentistry', desc: 'Preventive checkups & oral care' },
  ];

  return (
    <header ref={navRef} className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-navy-950 text-ivory-300 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          
          {/* Phone Number (Upper Side on Phone screens) */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4 order-1 sm:order-2">
            <a href="tel:2125550194" className="flex items-center gap-1.5 hover:text-champagne-400 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-champagne-400" />
              <span className="font-mono text-xs">(212) 555-0194</span>
            </a>
            <span className="flex items-center gap-1 text-[11px] text-sage-400 font-medium">
              <Shield className="w-3 h-3" />
              Accepting New Patients
            </span>
          </div>

          {/* Address (Down Place on Phone screens) */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-ivory-400 order-2 sm:order-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
              450 Park Avenue, Suite 1800, New York, NY 10022
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
              Mon–Fri 8:00 AM – 6:00 PM | Sat 9:00 AM – 2:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* Main Nav Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-ivory-50/95 dark:bg-navy-900/95 backdrop-blur-md shadow-soft border-b border-ivory-200 dark:border-navy-800 py-3' 
            : 'bg-ivory-100 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Larger Tooth Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-navy-900 dark:bg-navy-950 border-2 border-champagne-400/60 flex items-center justify-center shrink-0 shadow-md group-hover:border-champagne-400 transition-colors p-2">
              <svg className="w-7 h-7 fill-champagne-400 shrink-0" viewBox="0 0 32 32">
                <path d="M16 5C12.5 5 9.5 6.8 8.5 10C7.5 13.2 8 17 9.2 20.2C10.4 23.4 12 26.5 13.8 26.5C15 26.5 15.3 24.8 15.7 23C16 21.6 16.2 20.2 16.5 20.2C16.8 20.2 17 21.6 17.3 23C17.7 24.8 18 26.5 19.2 26.5C21 26.5 22.6 23.4 23.8 20.2C25 17 25.5 13.2 24.5 10C23.5 6.8 20.5 5 17 5H16Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-ivory-50 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors leading-none">
                SMILECRAFT
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-charcoal-700/70 dark:text-ivory-400/80 mt-1 font-sans">
                New York Cosmetic & Implant Dentistry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal-800 dark:text-ivory-200">
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link 
                href="/services" 
                className={`flex items-center gap-1 hover:text-navy-900 dark:hover:text-champagne-400 transition-colors py-2 ${
                  pathname.startsWith('/services') ? 'text-champagne-600 dark:text-champagne-400 font-bold border-b-2 border-champagne-500' : ''
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-navy-900 rounded-xl shadow-elevated border border-ivory-200 dark:border-navy-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 border-b border-ivory-100 dark:border-navy-800 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-champagne-600 dark:text-champagne-400">Treatment Offerings</span>
                  </div>
                  {serviceLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block p-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-champagne-100/80 dark:bg-navy-800 text-champagne-600 dark:text-champagne-400 font-bold border-l-4 border-champagne-500 pl-3'
                            : 'hover:bg-ivory-100 dark:hover:bg-navy-800/80 text-navy-900 dark:text-ivory-100'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className={isActive ? 'text-champagne-600 dark:text-champagne-400' : 'text-navy-900 dark:text-ivory-100'}>
                            {item.label}
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-champagne-500" />}
                        </div>
                        <div className="text-[11px] text-charcoal-700/70 dark:text-ivory-400/80 mt-0.5 font-normal">{item.desc}</div>
                      </Link>
                    );
                  })}
                  <div className="p-2 pt-2 border-t border-ivory-100 dark:border-navy-800 mt-1">
                    <Link href="/services" className="text-xs font-semibold text-champagne-600 dark:text-champagne-400 hover:text-navy-900 flex items-center justify-between">
                      View All Services
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className={`hover:text-navy-900 dark:hover:text-champagne-400 transition-colors ${pathname === '/about' ? 'text-champagne-600 dark:text-champagne-400 font-bold border-b-2 border-champagne-500' : ''}`}
            >
              About Practice
            </Link>

            <Link 
              href="/#patient-experience" 
              className="hover:text-navy-900 dark:hover:text-champagne-400 transition-colors"
            >
              Patient Experience
            </Link>

            <Link 
              href="/#technology" 
              className="hover:text-navy-900 dark:hover:text-champagne-400 transition-colors"
            >
              Technology
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-navy-900 dark:hover:text-champagne-400 transition-colors ${pathname === '/contact' ? 'text-champagne-600 dark:text-champagne-400 font-bold border-b-2 border-champagne-500' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTAs & Theme Toggle with Generous Spacing */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 pl-6 ml-2 border-l border-ivory-300 dark:border-navy-800">
            
            {/* Theme Switcher Toggle */}
            <ThemeToggle />

            {/* Secondary CTA: AI Front Desk (Redirects to /ai-front-desk) */}
            <Link
              href="/ai-front-desk"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ivory-200 dark:bg-navy-800 text-navy-900 dark:text-ivory-100 text-xs font-semibold border border-ivory-300 dark:border-navy-700 hover:bg-champagne-100 dark:hover:bg-navy-700 hover:border-champagne-400/50 transition-all shadow-sm group"
            >
              <Bot className="w-4 h-4 text-champagne-600 dark:text-champagne-400 group-hover:scale-110 transition-transform" />
              <span>Talk to Our AI Front Desk</span>
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            </Link>

            {/* Primary CTA: Book Appointment */}
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 text-xs font-semibold hover:bg-navy-800 dark:hover:bg-champagne-400 transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-champagne-400 dark:text-navy-950" />
              <span>Book an Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <Link
              href="/ai-front-desk"
              className="p-2 rounded-lg bg-champagne-100 dark:bg-navy-800 text-navy-900 dark:text-champagne-400 border border-champagne-400/30"
              aria-label="AI Front Desk"
            >
              <Bot className="w-5 h-5 text-champagne-600 dark:text-champagne-400" />
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900 dark:text-ivory-100 hover:bg-ivory-200 dark:hover:bg-navy-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Backdrop & Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-navy-950/50 backdrop-blur-xs z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden bg-ivory-50 dark:bg-navy-900 border-b border-ivory-300 dark:border-navy-800 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 relative z-40">
              <div className="space-y-2 font-medium text-sm text-navy-900 dark:text-ivory-100">
                <Link 
                  href="/services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-ivory-200 dark:hover:bg-navy-800"
                >
                  All Services
                </Link>
                <div className="pl-4 space-y-1 text-xs text-charcoal-700 dark:text-ivory-300">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-navy-900 dark:hover:text-champagne-400"
                    >
                      • {s.label}
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-ivory-200 dark:hover:bg-navy-800"
                >
                  About Practice
                </Link>
                <Link 
                  href="/#patient-experience" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-ivory-200 dark:hover:bg-navy-800"
                >
                  Patient Experience
                </Link>
                <Link 
                  href="/#technology" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-ivory-200 dark:hover:bg-navy-800"
                >
                  Technology
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-ivory-200 dark:hover:bg-navy-800"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-2 border-t border-ivory-200 dark:border-navy-800 space-y-2">
                <Link
                  href="/ai-front-desk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-champagne-100 dark:bg-navy-800 text-navy-900 dark:text-champagne-400 font-medium text-xs border border-champagne-400/40"
                >
                  <Bot className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                  <span>Talk to Our AI Front Desk</span>
                </Link>

                <Link
                  href="/book-appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 font-medium text-xs shadow-md"
                >
                  <Calendar className="w-4 h-4 text-champagne-400 dark:text-navy-950" />
                  <span>Book an Appointment</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
