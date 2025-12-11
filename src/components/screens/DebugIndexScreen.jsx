import React, { useState } from 'react';
import { ArrowLeft, Play, Clock, Trophy, BarChart3, Home, Layers, Eye, AlertTriangle } from 'lucide-react';
import { IntroScreen } from './IntroScreen';
import { QuestionScreen } from './QuestionScreen';
import { RoundTransitionScreen } from './RoundTransitionScreen';
import { ReviewScreen } from './ReviewScreen';
import { CampaignCompleteScreen } from './CampaignCompleteScreen';
import { LearningArticleScreen } from './LearningArticleScreen';
import { LearningArticleScreenB } from './LearningArticleScreenB';
import { LearningScreenV2 } from './LearningScreenV2';
import { allQuestions } from '../../data/questions';
import { useTheme } from '../../context/ThemeContext';
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
    const [template, setTemplate] = useState('A');
    const theme = useTheme();

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

        // Si es un arquetipo, renderizar el template correspondiente
        if (activeArchetype) {
            const analysis = archetypeAnalysis[activeArchetype];
            if (template === 'A') {
                return <LearningArticleScreen analysis={analysis} onBack={noopFn} />;
            } else if (template === 'B') {
                return <LearningArticleScreenB analysis={analysis} onBack={noopFn} />;
            } else {
                return <LearningScreenV2 analysis={analysis} onBack={noopFn} />;
            }
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
                <div className={`fixed top-0 left-0 right-0 z-[100] px-4 py-3 flex items-center justify-between backdrop-blur-xl border-b ${
                    theme.isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200'
                }`}>
                    {/* Izquierda: Volver */}
                    <button
                        onClick={handleBack}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-2 font-medium transition-colors ${theme.btnSecondary}`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver
                    </button>

                    {/* Centro: Nombre + Template Switch (solo para arquetipos) */}
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-2 ${theme.text}`}>
                            <Eye className="w-4 h-4" />
                            <span className="font-mono text-sm font-medium">{getScreenLabel()}</span>
                        </div>

                        {activeArchetype && (
                            <div className={`flex rounded-lg overflow-hidden border ${theme.border}`}>
                                <button
                                    onClick={() => setTemplate('A')}
                                    className={`px-3 py-1.5 text-sm font-bold transition-colors ${
                                        template === 'A'
                                            ? theme.isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'
                                            : theme.isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    A
                                </button>
                                <button
                                    onClick={() => setTemplate('B')}
                                    className={`px-3 py-1.5 text-sm font-bold transition-colors ${
                                        template === 'B'
                                            ? theme.isDark ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white'
                                            : theme.isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    B
                                </button>
                                <button
                                    onClick={() => setTemplate('V2')}
                                    className={`px-3 py-1.5 text-sm font-bold transition-colors ${
                                        template === 'V2'
                                            ? theme.isDark ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white'
                                            : theme.isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    V2
                                </button>
                            </div>
                        )}
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
                        Navega a cualquier pantalla del flujo o arquetipo
                    </p>
                </div>

                {/* Flujo Principal */}
                <div className={`rounded-xl p-6 mb-6 border ${theme.bgCard} ${theme.border}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.textSubtle}`}>
                        Flujo del Juego
                    </h2>
                    <div className="grid gap-2">
                        {flowScreens.map((screen) => {
                            const Icon = screen.icon;
                            return (
                                <button
                                    key={screen.id}
                                    onClick={() => handleFlowScreenClick(screen.id)}
                                    className={`w-full text-left p-3 rounded-lg border transition-all hover:-translate-y-0.5 ${theme.bgCard} ${theme.border} ${theme.bgCardHover}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-4 h-4 ${theme.textMuted}`} />
                                        <span className={`font-medium ${theme.text}`}>{screen.name}</span>
                                        <span className={`text-sm ${theme.textSubtle}`}>- {screen.description}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Arquetipos de FALLO */}
                <div className={`rounded-xl p-6 mb-6 border ${theme.bgCard} ${theme.border}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${theme.textSubtle}`}>
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Arquetipos de Fallo (&lt;80%)
                    </h2>
                    <p className={`text-xs mb-4 ${theme.textMuted}`}>
                        Click para ver • Usa el switch en el header para cambiar entre Template A y B
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.values(failureArchetypes).map((arch) => (
                            <button
                                key={arch.id}
                                onClick={() => handleArchetypeClick(arch.id)}
                                className={`text-left p-4 rounded-lg border transition-all hover:-translate-y-0.5 hover:border-red-500/50 ${theme.bgCard} ${theme.border}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">{arch.emoji}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded ${
                                        theme.isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                                    }`}>
                                        58%
                                    </span>
                                </div>
                                <h3 className={`font-bold ${theme.text}`}>{arch.title}</h3>
                                <p className={`text-xs ${theme.textSubtle}`}>{arch.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Arquetipos de ÉXITO */}
                <div className={`rounded-xl p-6 mb-6 border ${theme.bgCard} ${theme.border}`}>
                    <h2 className={`text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${theme.textSubtle}`}>
                        <Trophy className="w-4 h-4 text-emerald-500" />
                        Arquetipos de Éxito (≥80%)
                    </h2>
                    <p className={`text-xs mb-4 ${theme.textMuted}`}>
                        Click para ver • Usa el switch en el header para cambiar entre Template A y B
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {Object.values(successArchetypes).map((arch) => (
                            <button
                                key={arch.id}
                                onClick={() => handleArchetypeClick(arch.id)}
                                className={`text-left p-4 rounded-lg border transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 ${theme.bgCard} ${theme.border}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-lg">{arch.emoji}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded ${
                                        theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                                    }`}>
                                        85%
                                    </span>
                                </div>
                                <h3 className={`font-bold text-sm ${theme.text}`}>{arch.title}</h3>
                                <p className={`text-xs ${theme.textSubtle}`}>{arch.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className={`pt-6 border-t ${theme.border}`}>
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
