import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Trophy, BarChart3, CheckCircle, Eye, Home, Layers } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuestionScreen } from './QuestionScreen';
import { RoundTransitionScreen } from './RoundTransitionScreen';
import { ReviewScreen } from './ReviewScreen';
import { CampaignCompleteScreen } from './CampaignCompleteScreen';
import { allQuestions } from '../../data/questions';

// Mock data para previsualizar pantallas
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
    scenario: 'Tu equipo de diseño está bajo presión para entregar una funcionalidad crítica. El PM quiere recortar scope pero el CEO insiste en la visión original.',
    question: '¿Cómo priorizas el trabajo del equipo?',
    options: [
        { id: 'A', text: 'Propongo un MVP que satisfaga ambos lados', score: 5, type: 'Lead' },
        { id: 'B', text: 'Escalo al CEO para que decida', score: 3, type: 'Mid' },
        { id: 'C', text: 'Sigo las instrucciones del PM', score: 1, type: 'Junior' },
        { id: 'D', text: 'Ignoro ambos y hago lo que creo correcto', score: -1, type: 'Tóxico' }
    ],
    explanation: 'Un Lead Designer balancea stakeholders y propone soluciones que satisfacen múltiples necesidades.'
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

// Configuración de pantallas disponibles
const screens = [
    {
        id: 'intro',
        name: 'Intro',
        description: 'Pantalla inicial con instrucciones y progreso de campaña',
        icon: Home,
        color: 'indigo'
    },
    {
        id: 'question',
        name: 'Question',
        description: 'Pantalla de pregunta activa con timer y opciones',
        icon: Play,
        color: 'blue'
    },
    {
        id: 'round_transition',
        name: 'Round Transition',
        description: 'Transición entre rondas con resumen',
        icon: Clock,
        color: 'purple'
    },
    {
        id: 'review',
        name: 'Review',
        description: 'Resumen de resultados con análisis detallado',
        icon: BarChart3,
        color: 'green'
    },
    {
        id: 'campaign_complete',
        name: 'Campaign Complete',
        description: 'Pantalla final cuando se completan todas las preguntas',
        icon: Trophy,
        color: 'yellow'
    }
];

export default function DebugIndexScreen() {
    const [activeScreen, setActiveScreen] = useState(null);

    const getColorClasses = (color, isActive) => {
        const colors = {
            indigo: isActive ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'hover:bg-indigo-50 border-slate-200',
            blue: isActive ? 'bg-blue-100 border-blue-500 text-blue-700' : 'hover:bg-blue-50 border-slate-200',
            purple: isActive ? 'bg-purple-100 border-purple-500 text-purple-700' : 'hover:bg-purple-50 border-slate-200',
            green: isActive ? 'bg-green-100 border-green-500 text-green-700' : 'hover:bg-green-50 border-slate-200',
            yellow: isActive ? 'bg-yellow-100 border-yellow-500 text-yellow-700' : 'hover:bg-yellow-50 border-slate-200'
        };
        return colors[color] || colors.indigo;
    };

    const renderScreen = () => {
        const noopFn = () => console.log('[Debug] Action triggered');
        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        switch (activeScreen) {
            case 'intro':
                return (
                    <IntroScreen
                        stats={mockStats}
                        onStart={noopFn}
                        onReset={noopFn}
                    />
                );
            case 'question':
                return (
                    <QuestionScreen
                        question={mockQuestion}
                        currentIndex={2}
                        totalQuestions={10}
                        timeLeft={180}
                        formatTime={formatTime}
                        onAnswer={noopFn}
                        round={2}
                        totalRounds={3}
                    />
                );
            case 'round_transition':
                return (
                    <RoundTransitionScreen
                        round={1}
                        totalRounds={3}
                        onNextRound={noopFn}
                    />
                );
            case 'review':
                return (
                    <ReviewScreen
                        stats={mockStats}
                        answers={mockAnswers}
                        activeQuestions={[mockQuestion]}
                        onContinue={noopFn}
                    />
                );
            case 'campaign_complete':
                return (
                    <CampaignCompleteScreen
                        stats={mockStats}
                        onReset={noopFn}
                    />
                );
            default:
                return null;
        }
    };

    // Si hay una pantalla activa, mostrarla en fullscreen con botón para volver
    if (activeScreen) {
        return (
            <div className="relative">
                {/* Floating back button */}
                <button
                    onClick={() => setActiveScreen(null)}
                    className="fixed top-4 left-4 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Índice
                </button>

                {/* Screen label */}
                <div className="fixed top-4 right-4 z-[100] bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-xl font-mono text-sm flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Preview: {screens.find(s => s.id === activeScreen)?.name}
                </div>

                {/* Render the actual screen */}
                {renderScreen()}
            </div>
        );
    }

    // Índice principal
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Home
                        </a>
                        <span className="text-slate-600">|</span>
                        <a
                            href="/debug"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <Layers className="w-4 h-4" />
                            Questions Debug
                        </a>
                    </div>

                    <h1 className="text-4xl font-black text-white mb-2">
                        🎮 Debug Index
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Navega directamente a cualquier pantalla del flujo de usuario
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                        Flujo del Juego
                    </h2>
                    <div className="flex items-center justify-center gap-2 flex-wrap text-sm">
                        {screens.map((screen, idx) => (
                            <React.Fragment key={screen.id}>
                                <span className={`px-3 py-1 rounded-full font-medium ${activeScreen === screen.id
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-700 text-slate-300'
                                    }`}>
                                    {screen.name}
                                </span>
                                {idx < screens.length - 1 && (
                                    <span className="text-slate-600">→</span>
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
                                className={`w-full text-left p-6 rounded-xl border-2 transition-all bg-white hover:shadow-xl hover:-translate-y-1 group ${getColorClasses(screen.color, false)}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg bg-${screen.color}-100 text-${screen.color}-600`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                            {screen.name}
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            {screen.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-indigo-600 transition-colors">
                                        <Eye className="w-5 h-5" />
                                        <span className="text-sm font-medium">Preview</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Additional Debug Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                        Otras Herramientas de Debug
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="/debug"
                            className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <Layers className="w-5 h-5 text-slate-400 group-hover:text-indigo-400" />
                                <div>
                                    <h3 className="font-bold text-white group-hover:text-indigo-300">
                                        Questions Browser
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Ver todas las preguntas por bloque
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
