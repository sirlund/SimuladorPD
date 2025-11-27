/**
 * Componente de barra de progreso reutilizable
 */
export const ProgressBar = ({
  current,
  total,
  label = "Progreso",
  color = "indigo"
}) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  const colorClasses = {
    indigo: 'bg-indigo-600',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500'
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        <span>{label}</span>
        <span>{current} / {total}</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className={`${colorClasses[color] || colorClasses.indigo} h-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
