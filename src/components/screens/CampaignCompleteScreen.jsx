import { Trophy, RotateCcw, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const CampaignCompleteScreen = ({ stats, onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl w-full text-center space-y-10">

        {/* Trophy */}
        <div className="relative inline-block">
          <div className="absolute inset-0 blur-3xl opacity-20 rounded-full animate-pulse bg-yellow-400 dark:bg-yellow-500"></div>
          <div className="relative p-8 rounded-2xl border shadow-2xl bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <Trophy className="w-20 h-20 text-yellow-500" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 border border-yellow-200 text-yellow-700 dark:bg-yellow-500/10 dark:border-yellow-500/20 dark:text-yellow-400">
            <Sparkles className="w-4 h-4" />
            Campaña Completada
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            ¡Todas las Preguntas!
          </h1>
          <p className="text-xl max-w-lg mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
            Has respondido las <span className="font-bold text-slate-900 dark:text-white">{stats.totalQuestions}</span> preguntas del simulador.
          </p>
        </div>

        {/* Stats */}
        <div className="rounded-xl p-6 border backdrop-blur-sm bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Dominas escenarios de gestión de crisis, estrategia de producto, liderazgo de equipos y toma de decisiones bajo presión.
          </p>
        </div>

        {/* Action */}
        <button
          onClick={onReset}
          className="group px-8 py-4 font-bold rounded-xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3 mx-auto bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar Campaña
        </button>

      </div>
    </div>
  );
};
