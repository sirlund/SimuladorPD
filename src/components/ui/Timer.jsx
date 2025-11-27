import { Timer as TimerIcon } from 'lucide-react';

const URGENT_THRESHOLD = 180; // 3 minutos

/**
 * Componente de timer con alertas visuales
 */
export const Timer = ({ timeLeft, formatTime }) => {
  const isUrgent = timeLeft < URGENT_THRESHOLD;

  return (
    <div
      className={`flex items-center gap-2 font-mono text-2xl font-bold px-4 py-2 rounded-lg transition-all ${
        isUrgent
          ? 'bg-red-600 text-white animate-pulse scale-110 shadow-lg'
          : 'bg-slate-100 text-slate-700'
      }`}
    >
      <TimerIcon className="w-6 h-6" />
      {formatTime()}
    </div>
  );
};
