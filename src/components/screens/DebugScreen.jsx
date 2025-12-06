import React, { useState, useMemo } from 'react';
import { allQuestions } from '../../data/questions';
import { ArrowLeft, Download, ChevronDown, Layers } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function DebugScreen() {
    const theme = useTheme();

    const blocks = [
        { id: 'STR', name: 'Strategy', icon: '🎯' },
        { id: 'RES', name: 'Research', icon: '🔬' },
        { id: 'MET', name: 'Metrics', icon: '📊' },
        { id: 'MOB', name: 'Mobile', icon: '📱' },
        { id: 'CUL', name: 'Culture', icon: '👥' },
        { id: 'INN', name: 'Innovation', icon: '💡' }
    ];

    const [selectedBlock, setSelectedBlock] = useState('STR');
    const [expandedQuestions, setExpandedQuestions] = useState({});

    const toggleQuestion = (id) => {
        setExpandedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const sortedQuestions = useMemo(() => {
        return [...allQuestions].sort((a, b) => {
            const [prefixA, numA] = a.displayId.split('-');
            const [prefixB, numB] = b.displayId.split('-');
            const prefixOrder = { 'STR': 1, 'RES': 2, 'MET': 3, 'MOB': 4, 'CUL': 5, 'INN': 6 };
            const prefixDiff = (prefixOrder[prefixA] || 99) - (prefixOrder[prefixB] || 99);
            if (prefixDiff !== 0) return prefixDiff;
            return parseInt(numA) - parseInt(numB);
        });
    }, []);

    const filteredQuestions = useMemo(() => {
        return sortedQuestions.filter(q => q.displayId.startsWith(selectedBlock));
    }, [sortedQuestions, selectedBlock]);

    const blockCounts = useMemo(() => {
        const counts = {};
        blocks.forEach(block => {
            counts[block.id] = sortedQuestions.filter(q => q.displayId.startsWith(block.id)).length;
        });
        return counts;
    }, [sortedQuestions]);

    const exportToMarkdown = () => {
        let markdown = '# Simulador Product Lead - Todas las Preguntas\n\n';
        markdown += `**Total de preguntas:** ${sortedQuestions.length}\n\n`;
        markdown += `**Generado:** ${new Date().toLocaleDateString('es-ES', {
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        })}\n\n---\n\n`;

        sortedQuestions.forEach((q) => {
            markdown += `## ${q.displayId}. ${q.question}\n\n`;
            markdown += `**ID:** \`${q.id}\`  \n**Categoría:** ${q.category}\n\n`;
            markdown += `### Escenario\n\n${q.scenario}\n\n### Opciones\n\n`;
            q.options.forEach((option) => {
                const scoreEmoji = option.score >= 5 ? '✅' : option.score >= 3 ? '⚠️' : option.score >= 1 ? '❌' : '🔴';
                markdown += `**${option.id}. ${scoreEmoji} (Score: ${option.score})** - *${option.type}*\n\n${option.text}\n\n`;
            });
            markdown += `### Explicación\n\n${q.explanation}\n\n---\n\n`;
        });

        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `product-lead-questions-${Date.now()}.md`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const getScoreStyles = (score) => {
        if (score >= 5) return theme.isDark
            ? { border: 'border-green-500/50', bg: 'bg-green-500/10', badge: 'bg-green-500/20 text-green-400' }
            : { border: 'border-green-300', bg: 'bg-green-50', badge: 'bg-green-100 text-green-700' };
        if (score >= 3) return theme.isDark
            ? { border: 'border-yellow-500/50', bg: 'bg-yellow-500/10', badge: 'bg-yellow-500/20 text-yellow-400' }
            : { border: 'border-yellow-300', bg: 'bg-yellow-50', badge: 'bg-yellow-100 text-yellow-700' };
        if (score >= 1) return theme.isDark
            ? { border: 'border-orange-500/50', bg: 'bg-orange-500/10', badge: 'bg-orange-500/20 text-orange-400' }
            : { border: 'border-orange-300', bg: 'bg-orange-50', badge: 'bg-orange-100 text-orange-700' };
        return theme.isDark
            ? { border: 'border-red-500/50', bg: 'bg-red-500/10', badge: 'bg-red-500/20 text-red-400' }
            : { border: 'border-red-300', bg: 'bg-red-50', badge: 'bg-red-100 text-red-700' };
    };

    return (
        <div className={`min-h-screen ${theme.bg}`}>
            {/* Header */}
            <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${theme.bgHeader} ${theme.border}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <a href="/" className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}>
                                <ArrowLeft className="w-4 h-4" />
                                Home
                            </a>
                            <span className={theme.textSubtle}>|</span>
                            <a href="/debug/screens" className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}>
                                <Layers className="w-4 h-4" />
                                Screens
                            </a>
                            <span className={theme.textSubtle}>|</span>
                            <h1 className={`text-xl font-bold ${theme.text}`}>Questions Browser</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={exportToMarkdown}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${theme.btnSecondary}`}
                            >
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <div className="w-56 flex-shrink-0">
                        <div className="sticky top-24 space-y-2">
                            {blocks.map(block => (
                                <button
                                    key={block.id}
                                    onClick={() => setSelectedBlock(block.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between border ${
                                        selectedBlock === block.id
                                            ? theme.isDark
                                                ? 'bg-indigo-500/20 text-white border-indigo-500/50'
                                                : 'bg-indigo-100 text-indigo-900 border-indigo-300'
                                            : `${theme.textMuted} ${theme.bgCardHover} border-transparent`
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{block.icon}</span>
                                        <span className="font-medium">{block.name}</span>
                                    </div>
                                    <span className={`text-sm font-bold px-2 py-0.5 rounded ${
                                        selectedBlock === block.id
                                            ? theme.isDark ? 'bg-indigo-500/30' : 'bg-indigo-200'
                                            : theme.isDark ? 'bg-slate-700/50' : 'bg-slate-200'
                                    }`}>
                                        {blockCounts[block.id] || 0}
                                    </span>
                                </button>
                            ))}

                            <div className={`mt-6 pt-6 border-t text-center ${theme.border}`}>
                                <div className={`text-xs mb-1 ${theme.textSubtle}`}>Total</div>
                                <div className={`text-2xl font-bold ${theme.text}`}>{sortedQuestions.length}</div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-3">
                        <div className="mb-6">
                            <h2 className={`text-lg font-bold flex items-center gap-2 ${theme.text}`}>
                                <span>{blocks.find(b => b.id === selectedBlock)?.icon}</span>
                                {blocks.find(b => b.id === selectedBlock)?.name}
                            </h2>
                            <p className={`text-sm ${theme.textSubtle}`}>{filteredQuestions.length} preguntas</p>
                        </div>

                        {filteredQuestions.map((q) => {
                            const isExpanded = expandedQuestions[q.id];

                            return (
                                <div key={q.id} className={`rounded-xl border overflow-hidden ${theme.bgCard} ${theme.border}`}>
                                    <button
                                        onClick={() => toggleQuestion(q.id)}
                                        className={`w-full text-left p-5 flex items-center gap-4 transition-colors ${theme.bgCardHover}`}
                                    >
                                        <div className={`p-2 rounded-lg ${theme.isDark ? 'bg-slate-700/50 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                                            {q.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold text-indigo-500">{q.displayId}</span>
                                                <span className={`text-xs ${theme.textSubtle}`}>{q.category}</span>
                                            </div>
                                            <p className={`text-sm truncate ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{q.scenario}</p>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${theme.textSubtle} ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isExpanded && (
                                        <div className={`px-5 pb-5 space-y-6 border-t ${theme.border}`}>
                                            <div className="pt-4 space-y-4">
                                                <p className={`leading-relaxed ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>{q.scenario}</p>
                                                <div className={`font-medium border-l-2 border-indigo-500 pl-4 py-2 rounded-r-lg ${
                                                    theme.isDark ? 'text-white bg-indigo-500/5' : 'text-slate-900 bg-indigo-50'
                                                }`}>
                                                    {q.question}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                {q.options.map((option) => {
                                                    const styles = getScoreStyles(option.score);
                                                    return (
                                                        <div key={option.id} className={`p-4 rounded-lg border ${styles.border} ${styles.bg}`}>
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${styles.badge}`}>
                                                                    {option.id}
                                                                </span>
                                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${styles.badge}`}>
                                                                    {option.score > 0 ? '+' : ''}{option.score} pts
                                                                </span>
                                                                <span className={`text-xs italic ${theme.textSubtle}`}>{option.type}</span>
                                                            </div>
                                                            <MarkdownText className={`text-sm leading-relaxed ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                                                {option.text}
                                                            </MarkdownText>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className={`p-4 rounded-lg border ${theme.isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                                                <div className="text-xs font-bold text-indigo-500 mb-2">EXPLICACIÓN</div>
                                                <MarkdownText className={`text-sm leading-relaxed ${theme.textMuted}`}>
                                                    {q.explanation}
                                                </MarkdownText>
                                            </div>

                                            <div className={`text-xs font-mono ${theme.textSubtle}`}>
                                                ID: {q.id}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
