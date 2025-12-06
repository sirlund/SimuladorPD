import { Play, RotateCcw, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

export const IntroScreen = ({ stats, onStart, onReset }) => {
  const { totalQuestions, remainingQuestions, progressPercent } = stats;
  const hasStarted = progressPercent > 0;
  const completed = totalQuestions - remainingQuestions;
  const theme = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme.bg} p-6 font-sans`}>
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl w-full text-center space-y-10">

        {/* Logo/Title */}
        <div className="space-y-3">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            theme.isDark
              ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'
              : 'bg-indigo-100 border border-indigo-200 text-indigo-600'
          }`}>
            <Zap className="w-4 h-4" />
            Brutal Mode
          </div>
          <h1 className={`text-5xl md:text-6xl font-black tracking-tight ${theme.text}`}>
            Product Lead
          </h1>
          <p className={theme.textMuted}>
            Simulador de Decisiones Estratégicas
          </p>
        </div>

        {/* Progress */}
        {hasStarted && (
          <div className={`rounded-xl p-6 border backdrop-blur-sm ${theme.bgCard} ${theme.border}`}>
            <div className="flex justify-between items-center mb-3">
              <span className={`text-sm font-medium ${theme.textMuted}`}>Progreso</span>
              <span className={`text-sm font-bold ${theme.text}`}>{completed} / {totalQuestions}</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${theme.isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructions - Minimal */}
        <div className={`text-sm ${theme.textSubtle}`}>
          <p>12 minutos por ronda • Solo preguntas nuevas • Sin segunda oportunidad</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStart}
            className={`group relative px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3 ${theme.btnPrimary}`}
          >
            <Play className="w-5 h-5 fill-current" />
            {hasStarted ? "Continuar" : "Comenzar"}
          </button>

          {hasStarted && (
            <button
              onClick={onReset}
              className={`px-6 py-4 font-medium rounded-xl border transition-all flex items-center justify-center gap-2 ${theme.btnSecondary}`}
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
