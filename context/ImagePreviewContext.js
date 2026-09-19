'use me';
'use client';

import React, { createContext, useContext, useState } from 'react';

const ImagePreviewContext = createContext({
  previewImage: null,
  openPreview: () => {},
  closePreview: () => {},
});

export function ImagePreviewProvider({ children }) {
  const [previewImage, setPreviewImage] = useState(null); // { src, alt, caption }

  const openPreview = (src, alt = '', caption = '') => {
    setPreviewImage({ src, alt, caption });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <ImagePreviewContext.Provider value={{ previewImage, openPreview, closePreview }}>
      {children}
    </ImagePreviewContext.Provider>
  );
}

export function useImagePreview() {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error('useImagePreview must be used within an ImagePreviewProvider');
  }
  return context;
}
