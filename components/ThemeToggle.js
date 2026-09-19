'use me';
'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-ivory-200/50 border border-ivory-300/50" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle light/dark theme"
      className="p-2 rounded-xl bg-ivory-200/80 dark:bg-navy-800 text-navy-900 dark:text-champagne-400 border border-ivory-300 dark:border-navy-700 hover:bg-champagne-100 dark:hover:bg-navy-700 transition-all shadow-sm flex items-center justify-center group"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-champagne-400 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-navy-900 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
