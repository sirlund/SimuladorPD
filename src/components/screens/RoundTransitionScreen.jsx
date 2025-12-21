import { ArrowRight, Clock, Trophy } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const RoundTransitionScreen = ({
    round,
    totalRounds,
    onNextRound
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            {/* Theme Toggle */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            <div className="max-w-2xl w-full text-center space-y-12">

                {/* Icon */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 blur-3xl opacity-20 rounded-full animate-pulse bg-indigo-400 dark:bg-indigo-500"></div>
                    <div className="relative p-6 rounded-2xl border shadow-2xl bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                        <Trophy className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent">
                        Ronda {round} Completada
                    </h2>
                    <p className="text-xl font-medium max-w-lg mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
                        Has finalizado esta etapa. Tómate un respiro antes de continuar.
                    </p>
                </div>

                {/* Next Round */}
                <div className="rounded-xl p-8 border backdrop-blur-sm max-w-md mx-auto bg-white border-slate-200 shadow-lg dark:bg-slate-800/50 dark:border-slate-700">
                    <div className="flex items-center justify-center gap-3 mb-2 text-indigo-600 dark:text-indigo-300">
                        <Clock className="w-5 h-5" />
                        <span className="font-bold tracking-wide uppercase text-sm">Siguiente Desafío</span>
                    </div>
                    <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">
                        Ronda {round + 1} de {totalRounds}
                    </div>
                    <div className="text-slate-500 dark:text-slate-500">
                        3 minutos • Nuevos escenarios
                    </div>
                </div>

                {/* Action */}
                <button
                    onClick={onNextRound}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                    <span>Comenzar Ronda {round + 1}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

            </div>
        </div>
    );
};
