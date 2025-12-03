import { ArrowRight, Clock, Trophy } from 'lucide-react';

export const RoundTransitionScreen = ({
    round,
    totalRounds,
    onNextRound
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6 font-sans">
            <div className="max-w-2xl w-full text-center space-y-12">

                {/* Icon Animation */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                    <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
                        <Trophy className="w-16 h-16 text-indigo-400" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Ronda {round} Completada
                    </h2>
                    <p className="text-xl text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
                        Has finalizado esta etapa. Tómate un respiro antes de continuar.
                    </p>
                </div>

                {/* Next Round Info */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 backdrop-blur-sm max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-3 text-indigo-300 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-bold tracking-wide uppercase text-sm">Siguiente Desafío</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                        Ronda {round + 1} de {totalRounds}
                    </div>
                    <div className="text-slate-500 text-sm">
                        5 minutos • Nuevos escenarios
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={onNextRound}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
                >
                    <span>Comenzar Ronda {round + 1}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

            </div>
        </div>
    );
};
