import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Trophy, BarChart3, Home, Layers, Eye } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuestionScreen } from './QuestionScreen';
import { RoundTransitionScreen } from './RoundTransitionScreen';
import { ReviewScreen } from './ReviewScreen';
import { CampaignCompleteScreen } from './CampaignCompleteScreen';
import { allQuestions } from '../../data/questions';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

const mockStats = {
    totalQuestions: 96,
    remainingQuestions: 72,
    progressPercent: 25,
    questionsAnswered: 8,
    scorePercentage: 75,
    totalScore: 30,
    maxPossibleScore: 40,
    currentRound: 2,
    totalRounds: 3
};

const mockQuestion = allQuestions[0] || {
    id: 'str-001',
    displayId: 'STR-01',
    category: 'Estrategia',
    icon: '🎯',
    scenario: 'Tu equipo de diseño está bajo presión...',
    question: '¿Cómo priorizas el trabajo del equipo?',
    options: [
        { id: 'A', text: 'Propongo un MVP', score: 5, type: 'Lead' },
        { id: 'B', text: 'Escalo al CEO', score: 3, type: 'Mid' },
        { id: 'C', text: 'Sigo instrucciones', score: 1, type: 'Junior' }
    ],
    explanation: 'Un Lead Designer balancea stakeholders.'
};

const mockAnswers = {
    [mockQuestion.id]: {
        selectedId: 'B',
        selectedText: mockQuestion.options[1]?.text,
        selectedType: 'Mid',
        score: 3,
        bestOption: mockQuestion.options[0]
    }
};

const screens = [
    { id: 'intro', name: 'Intro', description: 'Pantalla inicial', icon: Home, color: 'indigo' },
    { id: 'question', name: 'Question', description: 'Pregunta activa con timer', icon: Play, color: 'blue' },
    { id: 'round_transition', name: 'Round Transition', description: 'Transición entre rondas', icon: Clock, color: 'purple' },
    { id: 'review', name: 'Review', description: 'Resumen de resultados', icon: BarChart3, color: 'green' },
    { id: 'campaign_complete', name: 'Campaign Complete', description: 'Pantalla final', icon: Trophy, color: 'yellow' }
];

export default function DebugIndexScreen() {
    const [activeScreen, setActiveScreen] = useState(null);
    const theme = useTheme();

    const renderScreen = () => {
        const noopFn = () => console.log('[Debug] Action triggered');
        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        switch (activeScreen) {
            case 'intro':
                return <IntroScreen stats={mockStats} onStart={noopFn} onReset={noopFn} />;
            case 'question':
                return <QuestionScreen question={mockQuestion} currentIndex={2} totalQuestions={10} timeLeft={180} formatTime={formatTime} onAnswer={noopFn} round={2} totalRounds={3} />;
            case 'round_transition':
                return <RoundTransitionScreen round={1} totalRounds={3} onNextRound={noopFn} />;
            case 'review':
                return <ReviewScreen stats={mockStats} answers={mockAnswers} activeQuestions={[mockQuestion]} onContinue={noopFn} />;
            case 'campaign_complete':
                return <CampaignCompleteScreen stats={mockStats} onReset={noopFn} />;
            default:
                return null;
        }
    };

    if (activeScreen) {
        return (
            <div className="relative">
                <button
                    onClick={() => setActiveScreen(null)}
                    className={`fixed top-4 left-4 z-[100] px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 font-medium transition-colors ${theme.btnPrimary}`}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver
                </button>
                <div className={`fixed top-4 right-16 z-[100] px-4 py-2 rounded-lg shadow-xl font-mono text-sm flex items-center gap-2 ${
                    theme.isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
                }`}>
                    <Eye className="w-4 h-4" />
                    {screens.find(s => s.id === activeScreen)?.name}
                </div>
                {renderScreen()}
            </div>
        );
    }

    return (
        <div className={`min-h-screen p-6 ${theme.bg}`}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <a href="/" className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}>
                                <ArrowLeft className="w-4 h-4" />
                                Home
                            </a>
                            <span className={theme.textSubtle}>|</span>
                            <a href="/debug" className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}>
                                <Layers className="w-4 h-4" />
                                Questions
                            </a>
                        </div>
                        <ThemeToggle />
                    </div>

                    <h1 className={`text-4xl font-black mb-2 ${theme.text}`}>
                        Debug Index
                    </h1>
                    <p className={theme.textMuted}>
                        Navega a cualquier pantalla del flujo
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className={`rounded-xl p-6 mb-8 border ${theme.bgCard} ${theme.border}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.textSubtle}`}>
                        Flujo del Juego
                    </h2>
                    <div className="flex items-center justify-center gap-2 flex-wrap text-sm">
                        {screens.map((screen, idx) => (
                            <React.Fragment key={screen.id}>
                                <span className={`px-3 py-1 rounded-full font-medium ${
                                    theme.isDark
                                        ? 'bg-slate-700 text-slate-300'
                                        : 'bg-slate-200 text-slate-700'
                                }`}>
                                    {screen.name}
                                </span>
                                {idx < screens.length - 1 && (
                                    <span className={theme.textSubtle}>→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Screen Cards */}
                <div className="grid gap-4">
                    {screens.map((screen) => {
                        const Icon = screen.icon;
                        return (
                            <button
                                key={screen.id}
                                onClick={() => setActiveScreen(screen.id)}
                                className={`w-full text-left p-6 rounded-xl border transition-all hover:-translate-y-1 group ${theme.bgCard} ${theme.border} ${theme.bgCardHover}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${
                                        theme.isDark
                                            ? 'bg-slate-700/50 text-indigo-400'
                                            : 'bg-indigo-50 text-indigo-600'
                                    }`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold transition-colors group-hover:text-indigo-500 ${theme.text}`}>
                                            {screen.name}
                                        </h3>
                                        <p className={`text-sm ${theme.textMuted}`}>
                                            {screen.description}
                                        </p>
                                    </div>
                                    <div className={`flex items-center gap-2 transition-colors group-hover:text-indigo-500 ${theme.textMuted}`}>
                                        <Eye className="w-5 h-5" />
                                        <span className="text-sm font-medium">Preview</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Links */}
                <div className={`mt-8 pt-8 border-t ${theme.border}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.textSubtle}`}>
                        Otras Herramientas
                    </h2>
                    <a
                        href="/debug"
                        className={`p-4 rounded-lg border block transition-colors group ${theme.bgCard} ${theme.border} ${theme.bgCardHover}`}
                    >
                        <div className="flex items-center gap-3">
                            <Layers className={`w-5 h-5 ${theme.textMuted} group-hover:text-indigo-500`} />
                            <div>
                                <h3 className={`font-bold group-hover:text-indigo-500 ${theme.text}`}>
                                    Questions Browser
                                </h3>
                                <p className={`text-sm ${theme.textSubtle}`}>
                                    Ver todas las preguntas por bloque
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
