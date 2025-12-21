import { Play, RotateCcw, Zap } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GAME_CONFIG } from '../../utils/constants';

export const IntroScreen = ({ stats, onStart, onReset }) => {
  const { totalQuestions, remainingQuestions, progressPercent } = stats;
  const hasStarted = progressPercent > 0;
  const completed = totalQuestions - remainingQuestions;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 p-6 font-sans">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl w-full text-center space-y-10">

        {/* Logo/Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
            <Zap className="w-4 h-4" />
            Brutal Mode
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Product Lead
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Simulador de Decisiones Estratégicas
          </p>
        </div>

        {/* Progress */}
        {hasStarted && (
          <div className="rounded-xl p-6 border backdrop-blur-sm bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progreso</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{completed} / {totalQuestions}</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructions - Minimal */}
        <div className="text-sm text-slate-500 dark:text-slate-500">
          <p>
            {GAME_CONFIG.totalRounds === 1
              ? `${Math.floor(GAME_CONFIG.roundTimeSeconds / 60)} minutos`
              : `${GAME_CONFIG.totalRounds} rondas de ${Math.floor(GAME_CONFIG.roundTimeSeconds / 60)} minutos`
            } • Solo preguntas nuevas • Sin segunda oportunidad
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStart}
            className="group relative px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <Play className="w-5 h-5 fill-current" />
            {hasStarted ? "Continuar" : "Comenzar"}
          </button>

          {hasStarted && (
            <button
              onClick={onReset}
              className="px-6 py-4 font-medium rounded-xl border transition-all flex items-center justify-center gap-2 bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
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
