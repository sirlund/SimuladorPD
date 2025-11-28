import { RefreshCw, Brain, Zap, Trophy, Target, Flame } from 'lucide-react';

export const ReviewScreen = ({
  stats,
  answers,
  activeQuestions,
  onContinue
}) => {
  const { totalScore, maxPossibleScore, scorePercentage, remainingQuestions } = stats;

  const questionsAnswered = Object.keys(answers).length;
  const perfectAnswers = Object.values(answers).filter(a => a.score === 5).length;
  const accuracy = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  // Determinar nivel basado en puntos totales y precisión
  let level, levelDesc, levelColor, levelIcon, levelBadge;

  if (accuracy >= 90 && questionsAnswered >= 15) {
    level = "Head of Design";
    levelDesc = "Impresionante. Has demostrado la capacidad de priorizar el negocio sobre el ego, y la escalabilidad sobre el parche. Estás listo para liderar.";
    levelColor = "text-purple-600";
    levelBadge = "bg-purple-100 text-purple-800 border-purple-200";
    levelIcon = <Trophy className="w-6 h-6" />;
  } else if (accuracy >= 80 && questionsAnswered >= 12) {
    level = "Lead Designer";
    levelDesc = "Excelente criterio estratégico. Balanceas las necesidades del negocio con la calidad del diseño. Pocos errores críticos.";
    levelColor = "text-indigo-600";
    levelBadge = "bg-indigo-100 text-indigo-800 border-indigo-200";
    levelIcon = <Target className="w-6 h-6" />;
  } else if (accuracy >= 65 && questionsAnswered >= 10) {
    level = "Senior Designer";
    levelDesc = "Sólido operativamente, pero a veces dudas. En situaciones críticas, tiendes a proteger al equipo o al diseño en lugar de habilitar el negocio.";
    levelColor = "text-green-600";
    levelBadge = "bg-green-100 text-green-800 border-green-200";
    levelIcon = <Zap className="w-6 h-6" />;
  } else if (accuracy >= 50 && questionsAnswered >= 8) {
    level = "Mid-Level Designer";
    levelDesc = "Tienes instintos correctos pero falta consistencia. Necesitas más exposición a decisiones de negocio de alto impacto.";
    levelColor = "text-yellow-600";
    levelBadge = "bg-yellow-100 text-yellow-800 border-yellow-200";
    levelIcon = <Flame className="w-6 h-6" />;
  } else {
    level = "Diseñador en Crecimiento";
    levelDesc = "Tus instintos son proteger la calidad visual o evitar conflictos. El liderazgo requiere incomodidad y decisiones difíciles sobre alcance y personas.";
    levelColor = "text-orange-600";
    levelBadge = "bg-orange-100 text-orange-800 border-orange-200";
    levelIcon = <Brain className="w-6 h-6" />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      <div className="max-w-5xl w-full space-y-8 pb-12">
        {/* Score Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />

          {/* Level Badge */}
          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 ${levelBadge} font-bold text-lg`}>
              {levelIcon}
              {level}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className={`text-4xl font-black ${levelColor} tracking-tight mb-1`}>
                {totalScore} <span className="text-2xl text-slate-400">/ {maxPossibleScore}</span>
              </div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-wide">
                Puntos Totales
              </div>
            </div>

            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className={`text-4xl font-black ${levelColor} tracking-tight mb-1`}>
                {questionsAnswered}
              </div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-wide">
                Preguntas Respondidas
              </div>
            </div>

            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className={`text-4xl font-black ${levelColor} tracking-tight mb-1`}>
                {perfectAnswers}
              </div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-wide">
                Respuestas Perfectas
              </div>
            </div>
          </div>

          {/* Accuracy Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-600">Precisión</span>
              <span className={`text-lg font-black ${levelColor}`}>{accuracy}%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${levelColor.replace('text-', 'bg-')} transition-all duration-1000`}
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>

          {/* Feedback */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              {levelDesc}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            {remainingQuestions > 0 ? (
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={onContinue}
                  className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Siguiente Ronda
                </button>
                <p className="text-sm text-slate-500 font-medium">
                  {remainingQuestions} preguntas nuevas disponibles
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <p className="text-base font-bold bg-green-50 text-green-700 px-6 py-3 rounded-full border-2 border-green-200 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  ¡Has completado todas las preguntas del simulador!
                </p>
                <button
                  onClick={onContinue}
                  className="bg-slate-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-700 transition-all flex items-center gap-2 text-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reiniciar desde cero
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 px-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            Análisis de Decisiones
          </h3>

          <div className="grid gap-6">
            {activeQuestions.map((q, index) => {
              const answerData = answers[q.id];
              if (!answerData) return null;

              const isPerfect = answerData.score === 5;
              const isGood = answerData.score === 2;
              const borderColor = isPerfect ? 'border-green-500' : (isGood ? 'border-yellow-400' : 'border-red-500');
              const bgColor = isPerfect ? 'bg-green-50/30' : (isGood ? 'bg-yellow-50/30' : 'bg-red-50/30');

              return (
                <div key={q.id} className={`bg-white rounded-xl p-8 shadow-sm border-l-8 ${borderColor} ${bgColor}`}>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1 pr-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                        Escenario #{index + 1}
                      </span>
                      <h4 className="font-bold text-slate-900 text-lg leading-snug">
                        {q.scenario}
                      </h4>
                    </div>
                    <span className={`font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap ${isPerfect ? 'bg-green-100 text-green-800' : (isGood ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800')}`}>
                      +{answerData.score} pts
                    </span>
                  </div>

                  {/* Analysis */}
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Your Decision */}
                    <div className={`p-5 rounded-lg border ${isPerfect ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}`}>
                      <div className="text-xs font-bold uppercase mb-2 opacity-60 flex items-center gap-1">
                        Tu Decisión ({answerData.selectedType})
                      </div>
                      <p className="font-medium text-slate-800 leading-relaxed">
                        {answerData.selectedText}
                      </p>
                    </div>

                    {/* Best Option & Explanation */}
                    <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-lg">
                      {!isPerfect && (
                        <div className="mb-4 pb-4 border-b border-indigo-200/50">
                          <div className="text-xs font-bold text-indigo-600 uppercase mb-2">
                            Mejor Opción ({answerData.bestOption.type})
                          </div>
                          <p className="font-medium text-indigo-900 leading-relaxed">
                            {answerData.bestOption.text}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-3 items-start text-indigo-800 text-sm leading-relaxed">
                        <Zap className="w-5 h-5 mt-0.5 flex-shrink-0 text-indigo-600" />
                        <p className="italic font-medium">{q.explanation}</p>
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
