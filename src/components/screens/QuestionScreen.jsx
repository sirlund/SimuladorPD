import { Clock } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';
import { ThemeToggle } from '../ui/ThemeToggle';
import { GAME_CONFIG } from '../../utils/constants';

export const QuestionScreen = ({
  question,
  timeLeft,
  formatTime,
  onAnswer,
  round,
  totalRounds
}) => {
  // Progress basado en tiempo restante (más presión visual)
  const timeProgress = (timeLeft / GAME_CONFIG.roundTimeSeconds) * 100;
  const isUrgent = timeLeft < 60;

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-500 ${
      isUrgent
        ? 'bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-slate-900 dark:to-slate-900'
        : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900'
    }`}>

      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors ${
        isUrgent
          ? 'bg-red-50/80 border-red-200 dark:bg-red-950/80 dark:border-red-800/50'
          : 'bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-700/50'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">

            {/* Progress - basado en tiempo */}
            <div className="flex-1">
              {totalRounds > 1 && (
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Ronda {round}/{totalRounds}
                  </span>
                </div>
              )}
              <div className="h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${isUrgent ? 'bg-red-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}
                  style={{ width: `${timeProgress}%` }}
                />
              </div>
            </div>

            {/* Timer */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold ${
              isUrgent
                ? 'bg-red-500/20 text-red-500 animate-pulse'
                : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
            }`}>
              <Clock className={`w-4 h-4 ${isUrgent ? 'text-red-500' : 'text-slate-600 dark:text-slate-400'}`} />
              {formatTime(timeLeft)}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 py-8">
        <div className="max-w-4xl w-full space-y-8">

          {/* Category Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg border bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-slate-800 dark:text-indigo-400 dark:border-slate-700">
              {question.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                {question.displayId}
              </span>
              <span className="mx-2 text-slate-500 dark:text-slate-500">•</span>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                {question.category}
              </span>
            </div>
          </div>

          {/* Scenario */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-800 dark:text-slate-200">
              {question.scenario}
            </p>

            <div className="text-lg font-semibold border-l-2 border-indigo-500 pl-4 py-2 rounded-r-lg text-slate-900 bg-indigo-50 dark:text-white dark:bg-indigo-500/5">
              {question.question}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(option)}
                className="w-full text-left p-5 border rounded-xl transition-all group flex items-start gap-4 bg-white border-slate-200 hover:bg-slate-50 hover:border-indigo-300 shadow-sm dark:bg-slate-800/50 dark:border-slate-700/50 dark:hover:bg-slate-700/50 dark:hover:border-indigo-500/50"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition-colors bg-slate-100 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                  {String.fromCharCode(65 + idx)}
                </div>
                <MarkdownText className="transition-colors leading-relaxed flex-1 text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                  {option.text}
                </MarkdownText>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
