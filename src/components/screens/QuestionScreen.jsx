import { Clock } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

export const QuestionScreen = ({
  question,
  currentIndex,
  totalQuestions,
  timeLeft,
  formatTime,
  onAnswer,
  round,
  totalRounds
}) => {
  const progress = ((currentIndex) / totalQuestions) * 100;
  const isUrgent = timeLeft < 60;
  const theme = useTheme();

  const getBgClass = () => {
    if (isUrgent) {
      return theme.isDark
        ? 'bg-gradient-to-br from-red-950 via-slate-900 to-slate-900'
        : 'bg-gradient-to-br from-red-50 via-white to-red-50';
    }
    return theme.bg;
  };

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-500 ${getBgClass()}`}>

      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors ${
        isUrgent
          ? theme.isDark ? 'bg-red-950/80 border-red-800/50' : 'bg-red-50/80 border-red-200'
          : theme.isDark ? 'bg-slate-900/80 border-slate-700/50' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">

            {/* Progress */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-medium ${theme.textMuted}`}>
                  Ronda {round}/{totalRounds}
                </span>
                <span className={`text-xs font-bold ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {currentIndex + 1} / {totalQuestions}
                </span>
              </div>
              <div className={`h-1.5 rounded-full overflow-hidden ${theme.isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-300 ${isUrgent ? 'bg-red-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Timer */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold ${
              isUrgent
                ? 'bg-red-500/20 text-red-500 animate-pulse'
                : theme.isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
            }`}>
              <Clock className={`w-4 h-4 ${isUrgent ? 'text-red-500' : theme.textMuted}`} />
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
            <div className={`p-2.5 rounded-lg border ${
              theme.isDark
                ? 'bg-slate-800 text-indigo-400 border-slate-700'
                : 'bg-indigo-50 text-indigo-600 border-indigo-100'
            }`}>
              {question.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                {question.displayId}
              </span>
              <span className={`mx-2 ${theme.textSubtle}`}>•</span>
              <span className={`text-xs font-medium uppercase tracking-wide ${theme.textSubtle}`}>
                {question.category}
              </span>
            </div>
          </div>

          {/* Scenario */}
          <div className="space-y-6">
            <p className={`text-xl md:text-2xl leading-relaxed font-medium ${theme.isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {question.scenario}
            </p>

            <div className={`text-lg font-semibold border-l-2 border-indigo-500 pl-4 py-2 rounded-r-lg ${
              theme.isDark
                ? 'text-white bg-indigo-500/5'
                : 'text-slate-900 bg-indigo-50'
            }`}>
              {question.question}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(option)}
                className={`w-full text-left p-5 border rounded-xl transition-all group flex items-start gap-4 ${
                  theme.isDark
                    ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 hover:border-indigo-500/50'
                    : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
                  theme.isDark
                    ? 'bg-slate-700 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <MarkdownText className={`transition-colors leading-relaxed flex-1 ${
                  theme.isDark
                    ? 'text-slate-300 group-hover:text-white'
                    : 'text-slate-700 group-hover:text-slate-900'
                }`}>
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
