import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  const theme = {
    isDark,
    toggle,
    // Background classes
    bg: isDark
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900'
      : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50',
    bgSolid: isDark ? 'bg-slate-900' : 'bg-white',
    bgCard: isDark ? 'bg-slate-800/50' : 'bg-white',
    bgCardHover: isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50',
    bgHeader: isDark ? 'bg-slate-900/80' : 'bg-white/80',
    bgInput: isDark ? 'bg-slate-800' : 'bg-slate-100',
    // Border classes
    border: isDark ? 'border-slate-700/50' : 'border-slate-200',
    borderAccent: isDark ? 'border-indigo-500/50' : 'border-indigo-300',
    // Text classes
    text: isDark ? 'text-white' : 'text-slate-900',
    textMuted: isDark ? 'text-slate-400' : 'text-slate-600',
    textSubtle: isDark ? 'text-slate-500' : 'text-slate-500',
    // Button classes
    btnPrimary: isDark
      ? 'bg-white text-slate-900 hover:bg-slate-100'
      : 'bg-slate-900 text-white hover:bg-slate-800',
    btnSecondary: isDark
      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50',
    // Score colors (same for both)
    scoreGreen: isDark ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-green-50 border-green-300 text-green-700',
    scoreYellow: isDark ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' : 'bg-yellow-50 border-yellow-300 text-yellow-700',
    scoreOrange: isDark ? 'bg-orange-500/10 border-orange-500/50 text-orange-400' : 'bg-orange-50 border-orange-300 text-orange-700',
    scoreRed: isDark ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-red-50 border-red-300 text-red-700',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
