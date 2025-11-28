import { Play, RotateCcw, Target, AlertTriangle, Timer } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const IntroScreen = ({ stats, onStart, onReset }) => {
  const { totalQuestions, remainingQuestions, progressPercent } = stats;
  const hasStarted = progressPercent > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 p-8 text-white relative">
          <h1 className="text-3xl font-bold mb-2">Lead Product Designer</h1>
          <p className="opacity-80 text-lg font-mono">Simulador Brutal Mode v7.0</p>

          {/* Progress Bar */}
          <div className="mt-6 bg-slate-800 rounded-lg p-4 border border-slate-700">
            <ProgressBar
              current={totalQuestions - remainingQuestions}
              total={totalQuestions}
              label="Progreso de la Campaña"
              color="green"
            />
            <p className="text-xs text-slate-400 mt-2 text-center">
              {totalQuestions - remainingQuestions} / {totalQuestions} Escenarios Completados
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <h3 className="font-bold text-amber-900 mb-2">Instrucciones de Liderazgo:</h3>
            <ul className="space-y-3 text-sm text-amber-800">
              <li className="flex gap-2">
                <Target className="w-4 h-4 shrink-0" />
                <div>
                  <strong>Solo Preguntas Nuevas:</strong> Cada ronda presenta únicamente escenarios que no has visto antes.
                </div>
              </li>
              <li className="flex gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <div>
                  <strong>La Trampa Senior:</strong> Las respuestas incorrectas suenan profesionales y sensatas, pero carecen de visión estratégica.
                </div>
              </li>
              <li className="flex gap-2">
                <Timer className="w-4 h-4 shrink-0" />
                <div>
                  <strong>Gestión de Tiempo:</strong> 7 minutos para responder tantas preguntas como puedas. Cada segundo cuenta. BRUTAL MODE 🔥
                </div>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onStart}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Play className="w-5 h-5 fill-current" />
              {hasStarted ? "Continuar Siguiente Ronda" : "Iniciar Campaña"}
            </button>

            {hasStarted && (
              <button
                onClick={onReset}
                className="bg-white border-2 border-slate-200 text-slate-600 font-bold py-4 px-4 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                title="Reiniciar todo el progreso"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
