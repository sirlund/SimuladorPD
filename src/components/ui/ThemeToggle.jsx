import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-lg transition-all bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-yellow-400 dark:hover:bg-slate-700 ${className}`}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
