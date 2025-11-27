import { RefreshCw, Brain, Zap, Trophy } from 'lucide-react';

export const ReviewScreen = ({
  stats,
  answers,
  activeQuestions,
  onContinue
}) => {
  const { scorePercentage, remainingQuestions } = stats;

  // Determinar feedback basado en porcentaje
  let feedbackTitle, feedbackDesc, feedbackColor;

  if (scorePercentage >= 85) {
    feedbackTitle = "Nivel: Head of Design";
    feedbackDesc = "Impresionante. Has demostrado la capacidad de priorizar el negocio sobre el ego, y la escalabilidad sobre el parche. Estás listo para liderar.";
    feedbackColor = "text-indigo-600";
  } else if (scorePercentage >= 60) {
    feedbackTitle = "Nivel: Senior Designer";
    feedbackDesc = "Sólido operativamente, pero a veces dudas. En situaciones críticas, tiendes a proteger al equipo o al diseño en lugar de habilitar el negocio.";
    feedbackColor = "text-green-600";
  } else {
    feedbackTitle = "Oportunidad de Crecimiento";
    feedbackDesc = "Tus instintos son proteger la calidad visual o evitar conflictos. El liderazgo requiere incomodidad y decisiones difíciles sobre alcance y personas.";
    feedbackColor = "text-orange-600";
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      <div className="max-w-5xl w-full space-y-8 pb-12">
        {/* Score Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className={`text-6xl font-black ${feedbackColor} tracking-tighter mb-1`}>
                {scorePercentage}%
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-wide">
                Puntuación Ronda
              </div>
            </div>

            <div className="h-16 w-px bg-slate-200 hidden md:block" />

            <div className="text-center md:text-left max-w-lg">
              <h2 className={`text-2xl font-bold ${feedbackColor} mb-2`}>
                {feedbackTitle}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {feedbackDesc}
              </p>

              {remainingQuestions > 0 ? (
                <button
                  onClick={onContinue}
                  className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2 mx-auto md:mx-0"
                >
                  <RefreshCw className="w-4 h-4" />
                  Continuar Campaña ({remainingQuestions} restantes)
                </button>
              ) : (
                <p className="text-sm font-bold bg-green-50 text-green-700 px-4 py-2 rounded-full inline-block border border-green-200">
                  <Trophy className="w-4 h-4 inline mr-2" />
                  ¡Campaña Completada!
                </p>
              )}
            </div>
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
