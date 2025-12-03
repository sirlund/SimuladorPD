import { RefreshCw, Brain, Zap, Trophy, Target, Flame, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';

export const ReviewScreen = ({
  stats,
  answers,
  activeQuestions,
  onContinue
}) => {
  const { totalScore, maxPossibleScore, scorePercentage } = stats;

  const questionsAnswered = Object.keys(answers).length;
  const accuracy = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  // --- CÁLCULO DE ESTADÍSTICAS ---

  // 1. Distribución de Respuestas
  const distribution = {
    perfect: 0,
    good: 0,
    bad: 0,
    negative: 0
  };

  // 2. Análisis por Categoría
  const categoryStats = {}; // { "Estrategia": { score: 15, max: 20, count: 4 } }

  Object.values(answers).forEach(ans => {
    // Distribución
    if (ans.score === 5) distribution.perfect++;
    else if (ans.score === 3) distribution.good++;
    else if (ans.score === 1) distribution.bad++;
    else if (ans.score === -1) distribution.negative++;

    // Categoría (necesitamos buscar la pregunta original para saber la categoría)
    // activeQuestions tiene todas las preguntas jugadas
    const question = activeQuestions.find(q => q.id === ans.selectedId?.substring(0, 0)); // No, wait. ans doesn't have question ID directly accessible easily if we iterate answers values.
    // Better iterate activeQuestions which we know are the played ones.
  });

  // Reiniciamos iteración usando activeQuestions para tener acceso a la categoría
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

  // Convertir a array y calcular porcentajes
  const categories = Object.values(categoryStats).map(cat => ({
    ...cat,
    percentage: Math.round((cat.score / cat.max) * 100)
  })).sort((a, b) => b.percentage - a.percentage);

  const strengths = categories.filter(c => c.percentage >= 70).slice(0, 3);
  const weaknesses = categories.filter(c => c.percentage < 70).sort((a, b) => a.percentage - b.percentage).slice(0, 3);

  // --- DETERMINAR NIVEL ---
  let level, levelDesc, levelColor, levelIcon, levelBadge;

  if (accuracy >= 90 && questionsAnswered >= 15) {
    level = "Head of Design";
    levelDesc = "Impresionante. Has demostrado la capacidad de priorizar el negocio sobre el ego, y la escalabilidad sobre el parche. Estás listo para liderar.";
    levelColor = "text-purple-600";
    levelBadge = "bg-purple-100 text-purple-800 border-purple-200";
    levelIcon = <Trophy className="w-8 h-8" />;
  } else if (accuracy >= 80 && questionsAnswered >= 12) {
    level = "Lead Designer";
    levelDesc = "Excelente criterio estratégico. Balanceas las necesidades del negocio con la calidad del diseño. Pocos errores críticos.";
    levelColor = "text-indigo-600";
    levelBadge = "bg-indigo-100 text-indigo-800 border-indigo-200";
    levelIcon = <Target className="w-8 h-8" />;
  } else if (accuracy >= 65 && questionsAnswered >= 10) {
    level = "Senior Designer";
    levelDesc = "Sólido operativamente, pero a veces dudas. En situaciones críticas, tiendes a proteger al equipo o al diseño en lugar de habilitar el negocio.";
    levelColor = "text-green-600";
    levelBadge = "bg-green-100 text-green-800 border-green-200";
    levelIcon = <Zap className="w-8 h-8" />;
  } else if (accuracy >= 50 && questionsAnswered >= 8) {
    level = "Mid-Level Designer";
    levelDesc = "Tienes instintos correctos pero falta consistencia. Necesitas más exposición a decisiones de negocio de alto impacto.";
    levelColor = "text-yellow-600";
    levelBadge = "bg-yellow-100 text-yellow-800 border-yellow-200";
    levelIcon = <Flame className="w-8 h-8" />;
  } else {
    level = "Diseñador en Crecimiento";
    levelDesc = "Tus instintos son proteger la calidad visual o evitar conflictos. El liderazgo requiere incomodidad y decisiones difíciles sobre alcance y personas.";
    levelColor = "text-orange-600";
    levelBadge = "bg-orange-100 text-orange-800 border-orange-200";
    levelIcon = <Brain className="w-8 h-8" />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      <div className="max-w-5xl w-full space-y-8 pb-12">

        {/* --- DASHBOARD HEADER --- */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  {levelIcon}
                  <h2 className="text-3xl font-black tracking-tight">{level}</h2>
                </div>
                <p className="text-indigo-200 max-w-xl text-lg leading-relaxed">
                  {levelDesc}
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 min-w-[200px]">
                <span className="text-sm font-bold text-indigo-200 uppercase tracking-wider mb-1">Score Final</span>
                <span className="text-5xl font-black text-white tracking-tighter">
                  {accuracy}%
                </span>
                <span className="text-xs text-indigo-300 mt-1 font-mono">
                  {totalScore} / {maxPossibleScore} PTS
                </span>
              </div>
            </div>
          </div>

          {/* --- METRICS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

            {/* 1. Performance Chart (Distribution) */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Calidad de Decisiones
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-bold text-slate-600 text-right">Lead (5pts)</div>
                  <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${(distribution.perfect / questionsAnswered) * 100}%` }}></div>
                  </div>
                  <div className="w-8 text-sm font-bold text-slate-900">{distribution.perfect}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-bold text-slate-600 text-right">Ok (3pts)</div>
                  <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{ width: `${(distribution.good / questionsAnswered) * 100}%` }}></div>
                  </div>
                  <div className="w-8 text-sm font-bold text-slate-900">{distribution.good}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-bold text-slate-600 text-right">Bad (1pt)</div>
                  <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400" style={{ width: `${(distribution.bad / questionsAnswered) * 100}%` }}></div>
                  </div>
                  <div className="w-8 text-sm font-bold text-slate-900">{distribution.bad}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-bold text-slate-600 text-right">Critical (-1)</div>
                  <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${(distribution.negative / questionsAnswered) * 100}%` }}></div>
                  </div>
                  <div className="w-8 text-sm font-bold text-slate-900">{distribution.negative}</div>
                </div>
              </div>
            </div>

            {/* 2. Strengths & Weaknesses */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Fortalezas
                </h3>
                {strengths.length > 0 ? (
                  <div className="space-y-2">
                    {strengths.map(cat => (
                      <div key={cat.name} className="flex justify-between items-center bg-green-50 p-3 rounded-lg border border-green-100">
                        <span className="font-bold text-green-900 text-sm">{cat.name}</span>
                        <span className="font-bold text-green-700">{cat.percentage}%</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 italic">No hay categorías destacadas aún.</p>
                )}
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  Áreas de Mejora
                </h3>
                {weaknesses.length > 0 ? (
                  <div className="space-y-2">
                    {weaknesses.map(cat => (
                      <div key={cat.name} className="flex justify-between items-center bg-orange-50 p-3 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-900 text-sm">{cat.name}</span>
                        <span className="font-bold text-orange-700">{cat.percentage}%</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 italic">¡Excelente balance general!</p>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-center">
            <button
              onClick={onContinue}
              className="bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Reiniciar Simulador
            </button>
          </div>
        </div>

        {/* --- DETAILED ANALYSIS --- */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 px-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            Análisis Detallado por Escenario
          </h3>

          <div className="grid gap-6">
            {activeQuestions.map((q, index) => {
              const answerData = answers[q.id];
              if (!answerData) return null;

              const isPerfect = answerData.score === 5;
              const isIntermediate = answerData.score === 3;
              const isBadButWorks = answerData.score === 1;
              const isNegative = answerData.score === -1;

              // Determinar colores según el nuevo sistema
              let borderColor, bgColor;
              if (isPerfect) {
                borderColor = 'border-green-500';
                bgColor = 'bg-green-50/30';
              } else if (isIntermediate) {
                borderColor = 'border-yellow-400';
                bgColor = 'bg-yellow-50/30';
              } else if (isBadButWorks) {
                borderColor = 'border-orange-400';
                bgColor = 'bg-orange-50/30';
              } else { // isNegative
                borderColor = 'border-red-500';
                bgColor = 'bg-red-50/30';
              }

              return (
                <div key={q.id} className={`bg-white rounded-xl p-8 shadow-sm border-l-8 ${borderColor} ${bgColor}`}>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Escenario #{index + 1}
                        </span>
                        <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {q.displayId}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          {q.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg leading-snug">
                        {q.scenario}
                      </h4>
                    </div>
                    <span className={`font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap ${isPerfect ? 'bg-green-100 text-green-800' :
                      isIntermediate ? 'bg-yellow-100 text-yellow-800' :
                        isBadButWorks ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                      }`}>
                      {answerData.score > 0 ? '+' : ''}{answerData.score} pts
                    </span>
                  </div>

                  {/* Analysis by Rows */}
                  <div className="space-y-4 mt-6">
                    {q.options.map((option, optIdx) => {
                      const isSelected = option.id === answerData.selectedId;
                      const optionScore = option.score;
                      const isOptionPerfect = optionScore === 5;
                      const isOptionIntermediate = optionScore === 3;
                      const isOptionBad = optionScore === 1;
                      const isOptionNegative = optionScore === -1;

                      // Colores según score para alternativa
                      let optionBorderColor, optionBgColor, optionTextColor;
                      if (isOptionPerfect) {
                        optionBorderColor = 'border-green-400';
                        optionBgColor = 'bg-green-50';
                        optionTextColor = 'text-green-800';
                      } else if (isOptionIntermediate) {
                        optionBorderColor = 'border-yellow-400';
                        optionBgColor = 'bg-yellow-50';
                        optionTextColor = 'text-yellow-800';
                      } else if (isOptionBad) {
                        optionBorderColor = 'border-orange-400';
                        optionBgColor = 'bg-orange-50';
                        optionTextColor = 'text-orange-800';
                      } else {
                        optionBorderColor = 'border-red-400';
                        optionBgColor = 'bg-red-50';
                        optionTextColor = 'text-red-800';
                      }

                      // Texto de análisis
                      let analysisText;
                      if (isOptionPerfect) {
                        analysisText = "Esta es la mejor opción. Demuestra liderazgo estratégico y balance entre negocio, equipo y calidad.";
                      } else if (isOptionIntermediate) {
                        analysisText = "Opción intermedia. Funcional pero no óptima. Puede tener trade-offs menores o no ser la solución más estratégica.";
                      } else if (isOptionBad) {
                        analysisText = "Opción problemática. Resuelve el problema inmediato pero con costos significativos o consecuencias negativas a futuro.";
                      } else {
                        analysisText = "Opción negativa. Puede dañar el negocio, el equipo o la cultura. Consecuencias severas o destructivas.";
                      }

                      return (
                        <div
                          key={option.id}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          {/* Alternativa */}
                          <div
                            className={`p-4 rounded-lg border-2 transition-all ${isSelected
                              ? `${optionBorderColor} ${optionBgColor} shadow-md ring-2 ring-offset-2 ${isOptionPerfect ? 'ring-green-300' :
                                isOptionIntermediate ? 'ring-yellow-300' :
                                  isOptionBad ? 'ring-orange-300' :
                                    'ring-red-300'
                              }`
                              : 'border-slate-200 bg-white'
                              }`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-center gap-2">
                                <span className={`font-bold text-sm ${isSelected ? optionTextColor : 'text-slate-500'
                                  }`}>
                                  {option.id}
                                </span>
                                {isSelected && (
                                  <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded">
                                    TU SELECCIÓN
                                  </span>
                                )}
                              </div>
                              <span className={`text-xs font-bold px-2 py-1 rounded ${isOptionPerfect ? 'bg-green-100 text-green-800' :
                                isOptionIntermediate ? 'bg-yellow-100 text-yellow-800' :
                                  isOptionBad ? 'bg-orange-100 text-orange-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                {optionScore > 0 ? '+' : ''}{optionScore} pts
                              </span>
                            </div>
                            <MarkdownText className={`text-sm leading-relaxed ${isSelected ? 'font-medium text-slate-900' : 'text-slate-700'
                              }`}>
                              {option.text}
                            </MarkdownText>
                          </div>

                          {/* Análisis */}
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs text-slate-500 italic">{option.type}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600 italic">
                              {analysisText}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    {/* Contexto General */}
                    <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
                      <div className="flex gap-2 items-start text-indigo-800 text-sm leading-relaxed">
                        <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-600" />
                        <div>
                          <div className="font-bold text-xs uppercase mb-1 text-indigo-600">
                            Contexto General
                          </div>
                          <MarkdownText>{q.explanation}</MarkdownText>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
