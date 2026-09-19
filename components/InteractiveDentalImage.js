'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useImagePreview } from '@/context/ImagePreviewContext';
import { Maximize2 } from 'lucide-react';

export default function InteractiveDentalImage({ src, alt, caption = '', fill = true, sizes, className = '', priority = false }) {
  const { openPreview } = useImagePreview();
  const lastTapRef = useRef(0);
  const [showHint, setShowHint] = useState(false);

  // Handle double tap / double click
  const handleDoubleClick = () => {
    openPreview(src, alt, caption);
  };

  const handleTouchEnd = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      openPreview(src, alt, caption);
    }
    lastTapRef.current = now;
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
      title="Double-tap / double-click to view high-res preview"
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={className}
        priority={priority}
      />

      {/* Interactive Hint Badge on Hover / Touch */}
      <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            openPreview(src, alt, caption);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/90 hover:bg-navy-900 backdrop-blur-md text-ivory-100 text-[11px] font-semibold border border-champagne-400/40 shadow-lg hover:border-champagne-400 hover:scale-105 transition-all cursor-pointer"
          title="Click or double-tap to expand image preview"
        >
          <Maximize2 className="w-3.5 h-3.5 text-champagne-400 animate-pulse" />
          <span>Double-tap preview</span>
        </button>
      </div>
    </div>
  );
}
