'use me';
'use client';

import React, { createContext, useContext, useState } from 'react';

const AIFrontDeskContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  initialTab: 'overview',
  setInitialTab: () => {},
});

export function AIFrontDeskProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'voice' | 'book'

  const openModal = (tab = 'overview') => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AIFrontDeskContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AIFrontDeskContext.Provider>
  );
}

export function useAIFrontDesk() {
  const context = useContext(AIFrontDeskContext);
  if (!context) {
    throw new Error('useAIFrontDesk must be used within an AIFrontDeskProvider');
  }
  return context;
}
