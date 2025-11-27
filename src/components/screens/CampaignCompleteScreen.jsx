import { Trophy, RotateCcw } from 'lucide-react';

export const CampaignCompleteScreen = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 p-6 font-sans text-white text-center">
      <Trophy className="w-24 h-24 text-yellow-400 mb-6 animate-bounce" />

      <h1 className="text-4xl font-black mb-4">
        ¡Campaña Completada!
      </h1>

      <p className="text-xl opacity-90 max-w-lg mb-8">
        Has sobrevivido a los 24 escenarios más difíciles de gestión, estrategia y técnica.
      </p>

      <button
        onClick={onReset}
        className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2"
      >
        <RotateCcw className="w-5 h-5" />
        Reiniciar Campaña
      </button>
    </div>
  );
};
