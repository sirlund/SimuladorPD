import { RefreshCw, Trophy, Target, Zap, Flame, Brain, ChevronDown, Check, X, TrendingUp, TrendingDown } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

export const ReviewScreen = ({
  stats,
  answers,
  activeQuestions,
  onContinue
}) => {
  const { totalScore, maxPossibleScore } = stats;
  const questionsAnswered = Object.keys(answers).length;
  const accuracy = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
  const theme = useTheme();

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
    if (score === 5) return theme.isDark
      ? { border: 'border-green-500/50', bg: 'bg-green-500/10', color: 'text-green-400' }
      : { border: 'border-green-300', bg: 'bg-green-50', color: 'text-green-700' };
    if (score === 3) return theme.isDark
      ? { border: 'border-yellow-500/50', bg: 'bg-yellow-500/10', color: 'text-yellow-400' }
      : { border: 'border-yellow-300', bg: 'bg-yellow-50', color: 'text-yellow-700' };
    if (score === 1) return theme.isDark
      ? { border: 'border-orange-500/50', bg: 'bg-orange-500/10', color: 'text-orange-400' }
      : { border: 'border-orange-300', bg: 'bg-orange-50', color: 'text-orange-700' };
    return theme.isDark
      ? { border: 'border-red-500/50', bg: 'bg-red-500/10', color: 'text-red-400' }
      : { border: 'border-red-300', bg: 'bg-red-50', color: 'text-red-700' };
  };

  const distBars = [
    { key: 'perfect', label: 'Lead', count: distribution.perfect, color: theme.isDark ? 'bg-green-500' : 'bg-green-500' },
    { key: 'good', label: 'Ok', count: distribution.good, color: theme.isDark ? 'bg-yellow-500' : 'bg-yellow-500' },
    { key: 'bad', label: 'Bad', count: distribution.bad, color: theme.isDark ? 'bg-orange-500' : 'bg-orange-500' },
    { key: 'negative', label: 'Fail', count: distribution.negative, color: theme.isDark ? 'bg-red-500' : 'bg-red-500' },
  ];

  return (
    <div className={`min-h-screen font-sans ${theme.bg}`}>

      {/* Header Summary */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${theme.bgHeader} ${theme.border}`}>
        <div className="max-w-4xl mx-auto px-6 py-4">

          {/* Row 1: Level + Score + Toggle */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${theme.isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                {levelIcon}
              </div>
              <div>
                <h1 className={`text-xl font-bold ${theme.text}`}>{level}</h1>
                <p className={`text-xs ${theme.textMuted}`}>{levelDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className={`text-2xl font-black ${theme.text}`}>{accuracy}%</div>
                <div className={`text-xs ${theme.textSubtle}`}>{totalScore}/{maxPossibleScore} pts</div>
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
            <div className={`flex-1 min-w-[200px] p-2 rounded-lg ${theme.isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
              <span className={theme.textSubtle}>💡 </span>
              <span className={theme.textMuted}>{levelTip}</span>
            </div>

            {/* Strengths */}
            {strengths.length > 0 && (
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.isDark ? 'bg-green-500/10' : 'bg-green-50'}`}>
                <TrendingUp className={`w-3 h-3 ${theme.isDark ? 'text-green-400' : 'text-green-600'}`} />
                <span className={theme.isDark ? 'text-green-400' : 'text-green-700'}>
                  {strengths.map(s => s.name).join(', ')}
                </span>
              </div>
            )}

            {/* Weaknesses */}
            {weaknesses.length > 0 && (
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`}>
                <TrendingDown className={`w-3 h-3 ${theme.isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                <span className={theme.isDark ? 'text-orange-400' : 'text-orange-700'}>
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
                className={`w-full text-left p-5 flex items-center gap-4 transition-colors ${theme.bgCardHover}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                  isPerfect
                    ? theme.isDark ? 'bg-green-500/20' : 'bg-green-100'
                    : theme.isDark ? 'bg-slate-700' : 'bg-slate-200'
                }`}>
                  {isPerfect ? (
                    <Check className={`w-4 h-4 ${theme.isDark ? 'text-green-400' : 'text-green-600'}`} />
                  ) : (
                    <X className={`w-4 h-4 ${theme.textMuted}`} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-500">{q.displayId}</span>
                    <span className={`text-xs ${theme.textSubtle}`}>{q.category}</span>
                  </div>
                  <p className={`text-sm truncate ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{q.scenario}</p>
                </div>

                <div className={`flex-shrink-0 px-3 py-1 rounded-lg text-sm font-bold ${styles.color}`}>
                  {answerData.score > 0 ? '+' : ''}{answerData.score}
                </div>

                <ChevronDown className={`w-5 h-5 transition-transform ${theme.textSubtle} ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Expanded */}
              {isExpanded && (
                <div className={`px-5 pb-5 space-y-4 border-t ${theme.border}`}>
                  <div className="pt-4">
                    <p className={`leading-relaxed ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{q.scenario}</p>
                    <p className={`font-medium mt-3 ${theme.text}`}>{q.question}</p>
                  </div>

                  <div className="grid gap-3">
                    <div className={`p-4 rounded-lg border ${!isPerfect ? (theme.isDark ? 'border-red-500/30 bg-red-500/5' : 'border-red-200 bg-red-50') : (theme.isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50')}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold ${theme.textMuted}`}>TU RESPUESTA</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${isPerfect ? (theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700') : (theme.isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700')}`}>
                          {answerData.score > 0 ? '+' : ''}{answerData.score} pts
                        </span>
                      </div>
                      <MarkdownText className={`text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedOption?.text}</MarkdownText>
                    </div>

                    {!isPerfect && bestOption && (
                      <div className={`p-4 rounded-lg border ${theme.isDark ? 'border-green-500/30 bg-green-500/5' : 'border-green-200 bg-green-50'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold ${theme.textMuted}`}>MEJOR OPCIÓN</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>+5 pts</span>
                        </div>
                        <MarkdownText className={`text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{bestOption.text}</MarkdownText>
                      </div>
                    )}
                  </div>

                  <div className={`p-4 rounded-lg border ${theme.isDark ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-indigo-500 mb-2">EXPLICACIÓN</div>
                    <MarkdownText className={`text-sm leading-relaxed ${theme.textMuted}`}>{q.explanation}</MarkdownText>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* Footer */}
      <div className={`sticky bottom-0 backdrop-blur-xl border-t ${theme.bgHeader} ${theme.border}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center">
          <button
            onClick={onContinue}
            className={`px-8 py-3 font-bold rounded-xl transition-all flex items-center gap-2 ${theme.btnPrimary}`}
          >
            <RefreshCw className="w-4 h-4" />
            Reiniciar
          </button>
        </div>
      </div>

    </div>
  );
};
