import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Trophy, BarChart3, Home, Layers, Eye, AlertTriangle } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuestionScreen } from './QuestionScreen';
import { RoundTransitionScreen } from './RoundTransitionScreen';
import { ReviewScreen } from './ReviewScreen';
import { CampaignCompleteScreen } from './CampaignCompleteScreen';
import { LearningScreen } from './LearningScreen';
import { allQuestions } from '../../data/questions';
import { ThemeToggle } from '../ui/ThemeToggle';
import { failureArchetypes, successArchetypes } from '../../data/learning/diagnoses';
import { competencies } from '../../data/learning/vpFeedback';
import { getMissionByBias } from '../../data/learning/mondayMissions';
import { getResourcesByBias } from '../../data/learning/sniperResources';

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

// Mock dynamic evidence examples per archetype
const mockDynamicEvidence = {
    'order-taker': [
        { questionId: 'INN-15', scenario: 'CEO exige construir app Vision Pro sin usuarios...', selectedType: 'Complaciente', impact: { emoji: '💸', cost: '$150K', consequence: 'en desarrollo de vaporware' } },
        { questionId: 'MOB-06', scenario: 'Scope creep de "solo un dropdown" sin negociar...', selectedType: 'Obediente', impact: { emoji: '📉', cost: '2 sprints', consequence: 'de roadmap destruido' } },
        { questionId: 'CUL-21', scenario: 'Presionaste a Lucia para presentar dañando confianza...', selectedType: 'Sándwich', impact: { emoji: '🚪', cost: '1 renuncia', consequence: 'de talento clave' } }
    ],
    'craft-obsessive': [
        { questionId: 'MOB-07', scenario: 'Bloqueaste lanzamiento por contraste de 0.1...', selectedType: 'Perfeccionista', impact: { emoji: '🔥', cost: '$80K', consequence: 'en campaña perdida' } },
        { questionId: 'INN-06', scenario: 'Rechazaste librerías estándar por sistema custom...', selectedType: 'Purista', impact: { emoji: '🏚️', cost: '$400K/año', consequence: 'en mantenimiento' } },
        { questionId: 'MET-16', scenario: 'Exigiste A/B test de 3 meses para decisión reversible...', selectedType: 'Over-engineer', impact: { emoji: '🐌', cost: '3 meses', consequence: 'de parálisis' } }
    ],
    'process-bureaucrat': [
        { questionId: 'STR-26', scenario: 'Rechazaste deal del 40% ARR citando "SaaS Purity"...', selectedType: 'Dogmático', impact: { emoji: '🤝', cost: '$500K', consequence: 'en cliente perdido' } },
        { questionId: 'RES-24', scenario: 'Bloqueaste al CEO exigiendo research completo...', selectedType: 'Risk Averse', impact: { emoji: '💤', cost: '-50%', consequence: 'de influencia' } },
        { questionId: 'CUL-06', scenario: 'Impusiste horarios rígidos en equipo global...', selectedType: 'Burocrático', impact: { emoji: '🔒', cost: '3 renuncias', consequence: 'de talento remoto' } }
    ],
    'lone-wolf': [
        { questionId: 'RES-09', scenario: 'Decidiste revisar personalmente cada archivo...', selectedType: 'Heroico', impact: { emoji: '🚌', cost: 'Bus Factor = 1', consequence: 'punto único de fallo' } },
        { questionId: 'CUL-19', scenario: 'Contrataste soporte en vez de exigir accountability...', selectedType: 'Micromanager', impact: { emoji: '👶', cost: '0 promos', consequence: 'equipo infantilizado' } },
        { questionId: 'STR-05', scenario: 'Te quedaste configurando tokens tú mismo...', selectedType: 'Centralizado', impact: { emoji: '😫', cost: '60+ hrs/sem', consequence: 'burnout propio' } }
    ],
    'venture-architect': [
        { questionId: 'MET-06', scenario: 'Expusiste falta de retención al CEO...', correctChoice: 'Alineación Privada', impact: { emoji: '💰', type: 'Capital Efficiency', saved: '$2M', avoided: 'Serie B fallida' } },
        { questionId: 'STR-42', scenario: 'Usaste Loss Leader para proteger mercado...', correctChoice: 'Defensa Estratégica', impact: { emoji: '🛡️', type: 'Strategic Defense', saved: '30% market', avoided: 'pérdida de mercado' } },
        { questionId: 'STR-30', scenario: 'Elegiste Visual Wrapper en merger...', correctChoice: 'M&A Mastery', impact: { emoji: '🤝', type: 'M&A Mastery', saved: '$800K', avoided: 'reescritura total' } }
    ],
    'culture-builder': [
        { questionId: 'CUL-01', scenario: 'Cambiaste estructura de incentivos...', correctChoice: 'Psychological Safety', impact: { emoji: '🧠', type: 'Retention', saved: '4 talentos', avoided: 'fuga de juniors' } },
        { questionId: 'CUL-20', scenario: 'Usaste transparencia de criterios...', correctChoice: 'Justicia Procesal', impact: { emoji: '⚖️', type: 'Fairness', saved: 'Trust', avoided: 'resentimiento' } },
        { questionId: 'INN-26', scenario: 'Implementaste seguridad progresiva...', correctChoice: 'Inclusión Real', impact: { emoji: '🌍', type: 'Inclusion', saved: '15% users', avoided: 'exclusión legacy' } }
    ],
    'force-multiplier': [
        { questionId: 'INN-24', scenario: 'Diseñaste Wrapper Agnóstico...', correctChoice: 'Arquitectura Resiliente', impact: { emoji: '🏗️', type: 'System Architecture', saved: '$300K', avoided: 'vendor lock-in' } },
        { questionId: 'MOB-01', scenario: 'Elegiste React Native Wrapper...', correctChoice: 'Speed to Market', impact: { emoji: '🚀', type: 'Operational Scale', saved: '6 meses', avoided: 'rewrite native' } },
        { questionId: 'STR-41', scenario: 'Estableciste limpieza de feature flags...', correctChoice: 'Technical Hygiene', impact: { emoji: '🧹', type: 'Technical Hygiene', saved: '$150K/año', avoided: 'bancarrota técnica' } }
    ]
};

// Helper: Genera mock analysis para cualquier arquetipo
const createMockAnalysis = (archetype, isSuccess = false) => {
    const accuracy = isSuccess ? 85 : 58;
    const biasId = archetype.id;

    return {
        questionsAnswered: 12,
        totalScore: isSuccess ? 51 : 35,
        maxPossibleScore: 60,
        accuracy,
        distribution: isSuccess
            ? { perfect: 8, good: 3, bad: 1, negative: 0 }
            : { perfect: 3, good: 4, bad: 4, negative: 1 },
        level: isSuccess ? 'lead' : 'mid',
        levelFeedback: isSuccess ? 'Lead Designer' : 'Mid-Level Designer',
        levelTip: isSuccess
            ? 'Foco: reducir errores en situaciones de alta presión política.'
            : 'Foco: más exposición a decisiones estratégicas.',
        diagnosis: {
            dominantBias: {
                ...archetype,
                percentage: 65,
                count: 8,
                isDefault: false
            },
            competencyMap: [
                {
                    id: 'politics-power',
                    name: 'Política & Poder',
                    icon: '🎯',
                    percentage: isSuccess ? 82 : 42,
                    level: isSuccess ? 'senior' : 'junior',
                    levelData: competencies['politics-power'].levels[isSuccess ? 'senior' : 'junior'],
                    count: 4
                },
                {
                    id: 'business-vision',
                    name: 'Visión de Negocio',
                    icon: '📊',
                    percentage: isSuccess ? 88 : 58,
                    level: isSuccess ? 'staff' : 'mid',
                    levelData: competencies['business-vision'].levels[isSuccess ? 'staff' : 'mid'],
                    count: 5
                },
                {
                    id: 'craft-quality',
                    name: 'Craft & Calidad',
                    icon: '🎨',
                    percentage: 85,
                    level: 'staff',
                    levelData: competencies['craft-quality'].levels.staff,
                    count: 3
                }
            ],
            worstDecisions: isSuccess ? [] : [
                {
                    id: 'STR-04',
                    scenario: 'Pipeline cayó 23% y el cierre promedio pasó de 18 a 32 días...',
                    consequence: '💸 **Revenue:** Error en Gestión de OKRs',
                    score: 1
                },
                {
                    id: 'STR-11',
                    scenario: 'Un cambio de diseño "menor" causó un Data Leak de 50k usuarios...',
                    consequence: '💀 **Crisis:** Error en Gestión de Crisis',
                    score: -1
                },
                {
                    id: 'STR-22',
                    scenario: 'El CEO diseña un "Tab de Notificaciones" directamente en producción...',
                    consequence: '🔥 **Credibilidad:** Error en Manage Up',
                    score: 1
                }
            ],
            // V2.1: Dynamic evidence based on archetype
            dynamicEvidence: mockDynamicEvidence[biasId] || [],
            sniperResources: getResourcesByBias(biasId),
            mondayMission: getMissionByBias(biasId)
        },
        timestamp: new Date().toISOString(),
        sessionId: `debug-${biasId}`
    };
};

// Pre-generar análisis para todos los arquetipos
const archetypeAnalysis = {
    // Failure archetypes
    'order-taker': createMockAnalysis(failureArchetypes['order-taker'], false),
    'craft-obsessive': createMockAnalysis(failureArchetypes['craft-obsessive'], false),
    'process-bureaucrat': createMockAnalysis(failureArchetypes['process-bureaucrat'], false),
    'lone-wolf': createMockAnalysis(failureArchetypes['lone-wolf'], false),
    // Success archetypes
    'venture-architect': createMockAnalysis(successArchetypes['venture-architect'], true),
    'culture-builder': createMockAnalysis(successArchetypes['culture-builder'], true),
    'force-multiplier': createMockAnalysis(successArchetypes['force-multiplier'], true),
};

// Screens del flujo principal
const flowScreens = [
    { id: 'intro', name: 'Intro', description: 'Pantalla inicial', icon: Home },
    { id: 'question', name: 'Question', description: 'Pregunta activa con timer', icon: Play },
    { id: 'round_transition', name: 'Round Transition', description: 'Transición entre rondas', icon: Clock },
    { id: 'review', name: 'Review', description: 'Resumen de resultados', icon: BarChart3 },
    { id: 'campaign_complete', name: 'Campaign Complete', description: 'Pantalla final', icon: Trophy }
];

export default function DebugIndexScreen() {
    const [activeScreen, setActiveScreen] = useState(null);
    const [activeArchetype, setActiveArchetype] = useState(null);

    const handleArchetypeClick = (archetypeId) => {
        setActiveScreen('archetype');
        setActiveArchetype(archetypeId);
    };

    const handleFlowScreenClick = (screenId) => {
        setActiveScreen(screenId);
        setActiveArchetype(null);
    };

    const handleBack = () => {
        setActiveScreen(null);
        setActiveArchetype(null);
    };

    const renderScreen = () => {
        const noopFn = () => console.log('[Debug] Action triggered');
        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        // Si es un arquetipo, renderizar LearningScreen
        if (activeArchetype) {
            const analysis = archetypeAnalysis[activeArchetype];
            return <LearningScreen analysis={analysis} onBack={noopFn} />;
        }

        // Screens del flujo principal
        switch (activeScreen) {
            case 'intro':
                return <IntroScreen stats={mockStats} onStart={noopFn} onReset={noopFn} />;
            case 'question':
                return <QuestionScreen question={mockQuestion} currentIndex={2} totalQuestions={10} timeLeft={180} formatTime={formatTime} onAnswer={noopFn} round={2} totalRounds={3} />;
            case 'round_transition':
                return <RoundTransitionScreen round={1} totalRounds={3} onNextRound={noopFn} />;
            case 'review':
                return <ReviewScreen stats={mockStats} answers={mockAnswers} activeQuestions={[mockQuestion]} onContinue={noopFn} onViewLearning={noopFn} />;
            case 'campaign_complete':
                return <CampaignCompleteScreen stats={mockStats} onReset={noopFn} />;
            default:
                return null;
        }
    };

    const getScreenLabel = () => {
        if (activeArchetype) {
            const arch = failureArchetypes[activeArchetype] || successArchetypes[activeArchetype];
            return arch?.title || activeArchetype;
        }
        return flowScreens.find(s => s.id === activeScreen)?.name || activeScreen;
    };

    // Vista de pantalla activa
    if (activeScreen) {
        return (
            <div className="relative">
                {/* Header fijo con controles */}
                <div className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 flex items-center justify-between backdrop-blur-xl border-b bg-white/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-700">
                    {/* Izquierda: Volver */}
                    <button
                        onClick={handleBack}
                        className="px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-colors bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver
                    </button>

                    {/* Centro: Nombre */}
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                        <Eye className="w-4 h-4" />
                        <span className="font-mono text-sm font-medium">{getScreenLabel()}</span>
                    </div>

                    {/* Derecha: Theme Toggle */}
                    <ThemeToggle />
                </div>

                {/* Contenido con padding-top para el header */}
                <div className="pt-14">
                    {renderScreen()}
                </div>
            </div>
        );
    }

    // Vista de índice
    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <a href="/" className="flex items-center gap-2 transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                <ArrowLeft className="w-4 h-4" />
                                Home
                            </a>
                            <span className="text-slate-300 dark:text-slate-600">|</span>
                            <a href="/debug" className="flex items-center gap-2 transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                <Layers className="w-4 h-4" />
                                Questions
                            </a>
                        </div>
                        <ThemeToggle />
                    </div>

                    <h1 className="text-4xl font-black mb-2 text-slate-900 dark:text-white">
                        Debug Index
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Navega a cualquier pantalla del flujo o arquetipo
                    </p>
                </div>

                {/* Flujo Principal */}
                <div className="rounded-xl p-6 mb-6 border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-slate-500">
                        Flujo del Juego
                    </h2>
                    <div className="grid gap-2">
                        {flowScreens.map((screen) => {
                            const Icon = screen.icon;
                            return (
                                <button
                                    key={screen.id}
                                    onClick={() => handleFlowScreenClick(screen.id)}
                                    className="w-full text-left p-3 rounded-lg border transition-all hover:-translate-y-0.5 bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/50"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                        <span className="font-medium text-slate-900 dark:text-white">{screen.name}</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-500">- {screen.description}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Arquetipos de FALLO */}
                <div className="rounded-xl p-6 mb-6 border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-500">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Arquetipos de Fallo (&lt;80%)
                    </h2>
                    <p className="text-xs mb-4 text-slate-600 dark:text-slate-400">
                        Click para ver LearningScreen
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.values(failureArchetypes).map((arch) => (
                            <button
                                key={arch.id}
                                onClick={() => handleArchetypeClick(arch.id)}
                                className="text-left p-4 rounded-lg border transition-all hover:-translate-y-0.5 hover:border-red-500/50 bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">{arch.emoji}</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400">
                                        58%
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white">{arch.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-500">{arch.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Arquetipos de ÉXITO */}
                <div className="rounded-xl p-6 mb-6 border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-500">
                        <Trophy className="w-4 h-4 text-emerald-500" />
                        Arquetipos de Éxito (≥80%)
                    </h2>
                    <p className="text-xs mb-4 text-slate-600 dark:text-slate-400">
                        Click para ver LearningScreen
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {Object.values(successArchetypes).map((arch) => (
                            <button
                                key={arch.id}
                                onClick={() => handleArchetypeClick(arch.id)}
                                className="text-left p-4 rounded-lg border transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">{arch.emoji}</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                                        85%
                                    </span>
                                </div>
                                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{arch.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-500">{arch.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700/50">
                    <a
                        href="/debug"
                        className="p-4 rounded-lg border block transition-colors group bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/50"
                    >
                        <div className="flex items-center gap-3">
                            <Layers className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-indigo-500" />
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-500">
                                    Questions Browser
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-500">
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
