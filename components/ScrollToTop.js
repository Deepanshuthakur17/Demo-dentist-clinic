'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-champagne-500 text-navy-950 shadow-elevated border border-champagne-400/40 hover:bg-champagne-400 hover:scale-110 active:scale-95 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 group"
    >
      <ArrowUp className="w-5 h-5 text-navy-950 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
