'use client';

import { useState, useEffect } from 'react';

export default function DarkModeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setDarkMode(saved === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {typeof children === 'function' ? children(toggleDarkMode, darkMode) : children}
    </div>
  );
}
