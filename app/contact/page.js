'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAIFrontDesk } from '@/context/AIFrontDeskContext';
import { MapPin, Phone, Mail, Clock, Bot, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { openModal } = useAIFrontDesk();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-0 transition-colors duration-300">
      
      {/* Header with Background Texture */}
      <section className="bg-ivory-100 dark:bg-navy-950 py-16 sm:py-24 border-b border-ivory-200 dark:border-navy-900 transition-colors duration-300 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/aikizi-particle-disperse (2).png')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 dark:text-champagne-400 font-sans">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-navy-900 dark:text-ivory-50">
            Contact SmileCraft Dental
          </h1>
          <p className="text-sm text-charcoal-700/80 dark:text-ivory-300/80 max-w-xl mx-auto font-sans leading-relaxed">
            Located in Midtown Manhattan on Park Avenue. Connect with our practice team or speak with our AI front desk anytime.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-ivory-50 dark:bg-navy-900 border-b border-ivory-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact details & Hours */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white dark:bg-navy-950 p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft space-y-6">
                <h3 className="font-serif text-2xl font-bold text-navy-900 dark:text-ivory-50">Practice Location</h3>
                
                <div className="space-y-4 text-xs text-charcoal-700 dark:text-ivory-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 dark:text-ivory-100">Park Avenue Clinic</div>
                      <div className="text-charcoal-700/80 dark:text-ivory-300/80 mt-0.5">450 Park Avenue, Suite 1800</div>
                      <div className="text-charcoal-700/80 dark:text-ivory-300/80">New York, NY 10022</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 dark:text-ivory-100">Telephone</div>
                      <div className="font-mono text-charcoal-700/80 dark:text-ivory-300/80 mt-0.5">(212) 555-0194</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-champagne-100 dark:bg-champagne-500/20 text-champagne-600 dark:text-champagne-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 dark:text-ivory-100">Email Inquiry</div>
                      <div className="text-charcoal-700/80 dark:text-ivory-300/80 mt-0.5">hello@smilecraft-demo.com</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory-100 dark:border-navy-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
                    Office Hours
                  </h4>
                  <div className="text-xs text-charcoal-700/80 dark:text-ivory-300/80 space-y-1 font-sans">
                    <div className="flex justify-between">
                      <span>Monday – Friday:</span>
                      <span className="font-semibold text-navy-900 dark:text-ivory-100">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold text-navy-900 dark:text-ivory-100">9:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-charcoal-700/50 dark:text-ivory-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Front Desk Callout */}
              <div className="bg-navy-900 dark:bg-navy-950 text-ivory-50 p-6 rounded-2xl border border-navy-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne-500/20 text-champagne-400 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold">24/7 AI Front Desk</h4>
                    <p className="text-xs text-ivory-300/80">Calling outside office hours?</p>
                  </div>
                </div>
                <p className="text-xs text-ivory-300/80 leading-relaxed">
                  Speak directly with our virtual front desk for quick answers regarding services, directions, and appointment requests.
                </p>
                <button
                  onClick={() => openModal('overview')}
                  className="w-full py-3 rounded-xl bg-champagne-500 text-navy-950 font-bold text-xs hover:bg-champagne-400 transition-colors"
                >
                  Talk to Our AI Front Desk
                </button>
              </div>

            </div>

            {/* Right Column: Contact Form & Map Graphic */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Location Image Graphic */}
              <div className="bg-navy-950 rounded-2xl p-8 border border-navy-900 text-ivory-100 flex flex-col justify-between h-56 relative overflow-hidden">
                <Image
                  src="/aikizi-particle-disperse (2).png"
                  alt="SmileCraft Manhattan practice location visual"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-champagne-400">Location Map Preview</span>
                  <h4 className="font-serif text-2xl font-bold text-ivory-50">Midtown Manhattan Clinic</h4>
                  <p className="text-xs text-ivory-300">Between 56th & 57th Street • Near 59th St Subways</p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-champagne-400 border-t border-navy-800/80 pt-4">
                  <span>Accessible by 4, 5, 6, N, R, W trains</span>
                  <span className="font-mono text-[11px] text-sage-400">SmileCraft Dental • NYC</span>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white dark:bg-navy-950 p-8 rounded-2xl border border-ivory-200 dark:border-navy-800 shadow-soft">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-sage-600 dark:text-sage-400 mx-auto" />
                    <h4 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Message Received (Demo State)</h4>
                    <p className="text-xs text-charcoal-700/80 dark:text-ivory-300/80">Thank you for reaching out. In a live system, your message would be routed to our reception team.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-semibold text-champagne-600 dark:text-champagne-400 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <h4 className="font-serif text-xl font-bold text-navy-900 dark:text-ivory-50">Send an Inquiry</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200 block mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-900 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200 block mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-900 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-ivory-200 block mb-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can our practice assist you?"
                        className="w-full px-4 py-2.5 rounded-xl border border-ivory-300 dark:border-navy-700 bg-ivory-50 dark:bg-navy-900 text-xs text-navy-900 dark:text-ivory-100 focus:outline-none focus:border-champagne-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-navy-900 dark:bg-champagne-500 text-ivory-50 dark:text-navy-950 font-bold text-xs hover:bg-navy-800 dark:hover:bg-champagne-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-champagne-400 dark:text-navy-950" />
                      <span>Send Inquiry</span>
                    </button>

                    <p className="text-[11px] text-charcoal-700/60 dark:text-ivory-400/60 text-center">
                      Demo state confirmation • No personal information is captured.
                    </p>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
