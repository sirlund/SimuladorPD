import { ProgressBar } from '../ui/ProgressBar';
import { Timer } from '../ui/Timer';

const URGENT_THRESHOLD = 150; // 2.5 minutos finales - PRESIÓN EXTREMA 🔥

export const QuestionScreen = ({
  question,
  currentIndex,
  totalQuestions,
  timeLeft,
  formatTime,
  onAnswer
}) => {
  const progress = ((currentIndex) / totalQuestions) * 100;
  const isUrgent = timeLeft < URGENT_THRESHOLD;

  return (
    <div className={`flex flex-col items-center min-h-screen font-sans text-slate-800 pt-32 pb-12 transition-colors duration-1000 ${isUrgent ? 'bg-red-50' : 'bg-slate-100'}`}>
      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col w-1/3">
            <ProgressBar
              current={currentIndex + 1}
              total={totalQuestions}
              label="Ronda Actual"
              color="indigo"
            />
          </div>

          <Timer timeLeft={timeLeft} formatTime={formatTime} />
        </div>
      </div>

      {/* Content Card */}
      <div className={`max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] flex flex-col ${isUrgent ? 'ring-4 ring-red-400' : ''}`}>
        <div className="flex-grow flex flex-col p-8 md:p-12">
          <div className="mb-8">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 shadow-sm border border-indigo-100">
                {question.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {question.displayId}
                </span>
                <span className="text-sm font-bold text-indigo-900 uppercase tracking-wide opacity-80">
                  {question.category}
                </span>
              </div>
            </div>

            {/* Scenario */}
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug mb-8">
              {question.scenario}
            </h2>

            {/* Question */}
            <div className="text-xl font-bold text-indigo-800 border-l-4 border-indigo-600 pl-6 py-4 bg-indigo-50/50 rounded-r-lg shadow-sm">
              {question.question}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4 mt-auto">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(option)}
                className="w-full text-left p-6 bg-white border-2 border-slate-100 rounded-xl hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 hover:bg-slate-50 transition-all group flex items-start gap-5 shadow-sm hover:shadow-md"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors border border-slate-200 mt-1">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900 pt-1 leading-relaxed text-lg">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
