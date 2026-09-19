'use me';
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useImagePreview } from '@/context/ImagePreviewContext';
import { X, ZoomIn, ShieldCheck, Maximize2 } from 'lucide-react';

export default function ImagePreviewModal() {
  const { previewImage, closePreview } = useImagePreview();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePreview();
    };
    if (previewImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, closePreview]);

  if (!previewImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={closePreview}
      />

      {/* Lightbox Container */}
      <div className="relative w-full max-w-4xl bg-navy-900 rounded-2xl shadow-modal border border-navy-800 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-navy-950 text-ivory-100 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-champagne-500/20 text-champagne-400">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-ivory-50">Clinical Image Preview</h4>
              <p className="text-[11px] text-ivory-400 font-sans">SmileCraft Dental • High Resolution View</p>
            </div>
          </div>

          <button
            onClick={closePreview}
            className="p-2 rounded-lg text-ivory-400 hover:text-ivory-100 hover:bg-navy-800 transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Res Image Display */}
        <div className="relative w-full aspect-[16/10] max-h-[70vh] bg-navy-950 flex items-center justify-center">
          <Image
            src={previewImage.src}
            alt={previewImage.alt || 'Clinical image preview'}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption & Info Footer */}
        <div className="p-4 sm:p-6 bg-navy-950 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory-300">
          <div>
            <p className="font-semibold text-ivory-100 text-sm">{previewImage.alt || 'SmileCraft Practice Photo'}</p>
            {previewImage.caption && (
              <p className="text-ivory-400 mt-0.5">{previewImage.caption}</p>
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-sage-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SmileCraft Dental High-Res Inspection</span>
          </div>
        </div>

      </div>
    </div>
  );
}
