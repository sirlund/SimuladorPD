import { RefreshCw, Trophy, Target, Zap, Flame, Brain, ChevronDown, Check, X, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';
import { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const ReviewScreen = ({
  stats,
  answers,
  activeQuestions,
  onContinue,
  onViewLearning
}) => {
  const { totalScore, maxPossibleScore } = stats;
  const questionsAnswered = Object.keys(answers).length;
  const accuracy = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Distribution
  const distribution = { perfect: 0, good: 0, bad: 0, negative: 0 };
  Object.values(answers).forEach(ans => {
    if (ans.score === 5) distribution.perfect++;
    else if (ans.score === 3) distribution.good++;
    else if (ans.score === 1) distribution.bad++;
    else if (ans.score === -1) distribution.negative++;
  });

  // Category Analysis
  const categoryStats = {};
  activeQuestions.forEach(q => {
    const ans = answers[q.id];
    if (!ans) return;
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { score: 0, max: 0, count: 0, name: q.category };
    }
    categoryStats[q.category].score += ans.score;
    categoryStats[q.category].max += 5;
    categoryStats[q.category].count += 1;
  });

  const categories = Object.values(categoryStats).map(cat => ({
    ...cat,
    percentage: cat.max > 0 ? Math.round((cat.score / cat.max) * 100) : 0
  })).sort((a, b) => b.percentage - a.percentage);

  const strengths = categories.filter(c => c.percentage >= 70).slice(0, 2);
  const weaknesses = categories.filter(c => c.percentage < 70).sort((a, b) => a.percentage - b.percentage).slice(0, 2);

  // Level determination with actionable feedback
  let level, levelDesc, levelIcon, levelTip;
  if (accuracy >= 90 && questionsAnswered >= 15) {
    level = "Head of Design";
    levelDesc = "Dominas el balance negocio/equipo";
    levelTip = "Listo para decisiones de alto impacto organizacional.";
    levelIcon = <Trophy className="w-6 h-6" />;
  } else if (accuracy >= 80 && questionsAnswered >= 12) {
    level = "Lead Designer";
    levelDesc = "Excelente criterio estratégico";
    levelTip = "Foco: reducir los errores en situaciones de presión política.";
    levelIcon = <Target className="w-6 h-6" />;
  } else if (accuracy >= 65 && questionsAnswered >= 10) {
    level = "Senior Designer";
    levelDesc = "Sólido operativamente";
    levelTip = "Foco: priorizar negocio sobre protección del equipo en crisis.";
    levelIcon = <Zap className="w-6 h-6" />;
  } else if (accuracy >= 50 && questionsAnswered >= 8) {
    level = "Mid-Level Designer";
    levelDesc = "Buenos instintos, falta consistencia";
    levelTip = "Foco: más exposición a decisiones de alto impacto.";
    levelIcon = <Flame className="w-6 h-6" />;
  } else {
    level = "En Crecimiento";
    levelDesc = "El liderazgo requiere decisiones incómodas";
    levelTip = "Foco: entender trade-offs entre calidad y velocidad.";
    levelIcon = <Brain className="w-6 h-6" />;
  }

  const getScoreStyles = (score) => {
    if (score === 5) return { border: 'border-green-300 dark:border-green-500/50', bg: 'bg-green-50 dark:bg-green-500/10', color: 'text-green-700 dark:text-green-400' };
    if (score === 3) return { border: 'border-yellow-300 dark:border-yellow-500/50', bg: 'bg-yellow-50 dark:bg-yellow-500/10', color: 'text-yellow-700 dark:text-yellow-400' };
    if (score === 1) return { border: 'border-orange-300 dark:border-orange-500/50', bg: 'bg-orange-50 dark:bg-orange-500/10', color: 'text-orange-700 dark:text-orange-400' };
    return { border: 'border-red-300 dark:border-red-500/50', bg: 'bg-red-50 dark:bg-red-500/10', color: 'text-red-700 dark:text-red-400' };
  };

  const distBars = [
    { key: 'perfect', label: 'Lead', count: distribution.perfect, color: 'bg-green-500' },
    { key: 'good', label: 'Ok', count: distribution.good, color: 'bg-yellow-500' },
    { key: 'bad', label: 'Bad', count: distribution.bad, color: 'bg-orange-500' },
    { key: 'negative', label: 'Fail', count: distribution.negative, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">

      {/* Header Summary */}
      <div className="sticky top-0 z-50 backdrop-blur-xl border-b bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-4">

          {/* Row 1: Level + Score + Toggle */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                {levelIcon}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">{level}</h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">{levelDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-black text-slate-900 dark:text-white">{accuracy}%</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">{totalScore}/{maxPossibleScore} pts</div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Row 2: Distribution Bars */}
          <div className="flex gap-1 h-2 rounded-full overflow-hidden mb-3">
            {distBars.map(bar => (
              <div
                key={bar.key}
                className={`${bar.color} transition-all`}
                style={{ width: `${questionsAnswered > 0 ? (bar.count / questionsAnswered) * 100 : 0}%` }}
                title={`${bar.label}: ${bar.count}`}
              />
            ))}
          </div>

          {/* Row 3: Insights */}
          <div className="flex flex-wrap gap-4 text-xs">
            {/* Tip */}
            <div className="flex-1 min-w-[200px] p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
              <span className="text-slate-500 dark:text-slate-500">💡 </span>
              <span className="text-slate-600 dark:text-slate-400">{levelTip}</span>
            </div>

            {/* Strengths */}
            {strengths.length > 0 && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-500/10">
                <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-400">
                  {strengths.map(s => s.name).join(', ')}
                </span>
              </div>
            )}

            {/* Weaknesses */}
            {weaknesses.length > 0 && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 dark:bg-orange-500/10">
                <TrendingDown className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                <span className="text-orange-700 dark:text-orange-400">
                  {weaknesses.map(w => w.name).join(', ')}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-4">

        {activeQuestions.map((q) => {
          const answerData = answers[q.id];
          if (!answerData) return null;

          const isPerfect = answerData.score === 5;
          const selectedOption = q.options.find(o => o.id === answerData.selectedId);
          const bestOption = q.options.find(o => o.score === 5);
          const isExpanded = expandedQuestions[q.id];
          const styles = getScoreStyles(answerData.score);

          return (
            <div
              key={q.id}
              className={`rounded-xl border overflow-hidden transition-all ${styles.border} ${styles.bg}`}
            >
              {/* Header */}
              <button
                onClick={() => toggleQuestion(q.id)}
                className="w-full text-left p-5 flex items-center gap-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                  isPerfect
                    ? 'bg-green-100 dark:bg-green-500/20'
                    : 'bg-slate-200 dark:bg-slate-700'
                }`}>
                  {isPerfect ? (
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <X className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-500">{q.displayId}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">{q.category}</span>
                  </div>
                  <p className="text-sm truncate text-slate-700 dark:text-slate-300">{q.scenario}</p>
                </div>

                <div className={`flex-shrink-0 px-3 py-1 rounded-lg text-sm font-bold ${styles.color}`}>
                  {answerData.score > 0 ? '+' : ''}{answerData.score}
                </div>

                <ChevronDown className={`w-5 h-5 transition-transform text-slate-500 dark:text-slate-500 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Expanded */}
              {isExpanded && (
                <div className="px-5 pb-5 space-y-4 border-t border-slate-200 dark:border-slate-700/50">
                  <div className="pt-4">
                    <p className="leading-relaxed text-slate-700 dark:text-slate-300">{q.scenario}</p>
                    <p className="font-medium mt-3 text-slate-900 dark:text-white">{q.question}</p>
                  </div>

                  <div className="grid gap-3">
                    <div className={`p-4 rounded-lg border ${!isPerfect ? 'border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-500/5' : 'border-green-200 bg-green-50 dark:border-green-500/30 dark:bg-green-500/5'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">TU RESPUESTA</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${isPerfect ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'}`}>
                          {answerData.score > 0 ? '+' : ''}{answerData.score} pts
                        </span>
                      </div>
                      <MarkdownText className="text-sm text-slate-700 dark:text-slate-300">{selectedOption?.text}</MarkdownText>
                    </div>

                    {!isPerfect && bestOption && (
                      <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-500/30 dark:bg-green-500/5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">MEJOR OPCIÓN</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400">+5 pts</span>
                        </div>
                        <MarkdownText className="text-sm text-slate-700 dark:text-slate-300">{bestOption.text}</MarkdownText>
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-lg border bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50">
                    <div className="text-xs font-bold text-indigo-500 mb-2">EXPLICACIÓN</div>
                    <MarkdownText className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{q.explanation}</MarkdownText>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* Footer */}
      <div className="sticky bottom-0 backdrop-blur-xl border-t bg-white/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center gap-3">
          <button
            onClick={onViewLearning}
            className="px-6 py-3 font-bold rounded-xl transition-all flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <BookOpen className="w-4 h-4" />
            Plan de Desarrollo
          </button>
          <button
            onClick={onContinue}
            className="px-6 py-3 font-bold rounded-xl transition-all flex items-center gap-2 border bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
          >
            <RefreshCw className="w-4 h-4" />
            Reiniciar
          </button>
        </div>
      </div>

    </div>
  );
};
