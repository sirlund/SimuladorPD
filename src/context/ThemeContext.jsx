import { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper to get initial theme
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  }
  return true; // Default to dark
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Use layoutEffect to set class synchronously before paint
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
