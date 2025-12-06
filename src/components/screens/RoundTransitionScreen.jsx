import { ArrowRight, Clock, Trophy } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

export const RoundTransitionScreen = ({
    round,
    totalRounds,
    onNextRound
}) => {
    const theme = useTheme();

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-6 font-sans ${theme.bg}`}>
            {/* Theme Toggle */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            <div className="max-w-2xl w-full text-center space-y-12">

                {/* Icon */}
                <div className="relative inline-block">
                    <div className={`absolute inset-0 blur-3xl opacity-20 rounded-full animate-pulse ${theme.isDark ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
                    <div className={`relative p-6 rounded-2xl border shadow-2xl ${
                        theme.isDark
                            ? 'bg-slate-800 border-slate-700'
                            : 'bg-white border-slate-200'
                    }`}>
                        <Trophy className={`w-16 h-16 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-4">
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${
                        theme.isDark
                            ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
                            : 'text-slate-900'
                    }`}>
                        Ronda {round} Completada
                    </h2>
                    <p className={`text-xl font-medium max-w-lg mx-auto leading-relaxed ${theme.textMuted}`}>
                        Has finalizado esta etapa. Tómate un respiro antes de continuar.
                    </p>
                </div>

                {/* Next Round */}
                <div className={`rounded-xl p-8 border backdrop-blur-sm max-w-md mx-auto ${
                    theme.isDark
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-white border-slate-200 shadow-lg'
                }`}>
                    <div className={`flex items-center justify-center gap-3 mb-2 ${theme.isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                        <Clock className="w-5 h-5" />
                        <span className="font-bold tracking-wide uppercase text-sm">Siguiente Desafío</span>
                    </div>
                    <div className={`text-3xl font-bold mb-1 ${theme.text}`}>
                        Ronda {round + 1} de {totalRounds}
                    </div>
                    <div className={theme.textSubtle}>
                        5 minutos • Nuevos escenarios
                    </div>
                </div>

                {/* Action */}
                <button
                    onClick={onNextRound}
                    className={`group relative inline-flex items-center gap-3 px-8 py-4 font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1 ${theme.btnPrimary}`}
                >
                    <span>Comenzar Ronda {round + 1}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

            </div>
        </div>
    );
};
