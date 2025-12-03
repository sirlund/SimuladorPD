import React, { useState, useMemo } from 'react';
import { allQuestions } from '../../data/questions';
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, MinusCircle, Download } from 'lucide-react';

export default function DebugScreen() {
    // Define blocks
    const blocks = [
        { id: 'STR', name: 'Strategy', icon: '🎯', color: 'blue' },
        { id: 'RES', name: 'Research', icon: '🔬', color: 'purple' },
        { id: 'MET', name: 'Metrics', icon: '📊', color: 'green' },
        { id: 'MOB', name: 'Mobile', icon: '📱', color: 'orange' },
        { id: 'CUL', name: 'Culture', icon: '👥', color: 'pink' },
        { id: 'INN', name: 'Innovation', icon: '💡', color: 'indigo' }
    ];

    const [selectedBlock, setSelectedBlock] = useState('STR');

    // Sort all questions by displayId
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

    // Filter questions by selected block
    const filteredQuestions = useMemo(() => {
        return sortedQuestions.filter(q => q.displayId.startsWith(selectedBlock));
    }, [sortedQuestions, selectedBlock]);

    // Count questions per block
    const blockCounts = useMemo(() => {
        const counts = {};
        blocks.forEach(block => {
            counts[block.id] = sortedQuestions.filter(q => q.displayId.startsWith(block.id)).length;
        });
        return counts;
    }, [sortedQuestions]);

    // Function to export all content to Markdown
    const exportToMarkdown = () => {
        let markdown = '# Simulador Product Lead - Todas las Preguntas\n\n';
        markdown += `**Total de preguntas:** ${sortedQuestions.length}\n\n`;
        markdown += `**Generado:** ${new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}\n\n`;
        markdown += '---\n\n';

        sortedQuestions.forEach((q) => {
            markdown += `## ${q.displayId}. ${q.question}\n\n`;
            markdown += `**ID:** \`${q.id}\`  \n`;
            markdown += `**Categoría:** ${q.category}\n\n`;

            markdown += `### Escenario\n\n`;
            markdown += `${q.scenario}\n\n`;

            markdown += `### Opciones\n\n`;
            q.options.forEach((option) => {
                const scoreEmoji = option.score >= 5 ? '✅' :
                    option.score >= 3 ? '⚠️' :
                        option.score >= 1 ? '❌' :
                            option.score === 0 ? '⚪' : '🔴';

                markdown += `**${option.id}. ${scoreEmoji} (Score: ${option.score})** - *${option.type}*\n\n`;
                markdown += `${option.text}\n\n`;
            });

            markdown += `### Explicación\n\n`;
            markdown += `${q.explanation}\n\n`;
            markdown += '---\n\n';
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

    const getScoreColor = (score) => {
        if (score >= 5) return 'text-green-600 bg-green-50';
        if (score >= 3) return 'text-yellow-600 bg-yellow-50';
        if (score >= 1) return 'text-orange-600 bg-orange-50';
        if (score === 0) return 'text-gray-600 bg-gray-50';
        return 'text-red-600 bg-red-50';
    };

    const getScoreIcon = (score) => {
        if (score >= 5) return <CheckCircle className="w-4 h-4" />;
        if (score >= 3) return <AlertCircle className="w-4 h-4" />;
        if (score >= 1) return <MinusCircle className="w-4 h-4" />;
        return <XCircle className="w-4 h-4" />;
    };

    const getBlockColorClass = (color, isActive) => {
        const colors = {
            blue: isActive ? 'bg-blue-100 text-blue-700 border-blue-300' : 'hover:bg-blue-50',
            purple: isActive ? 'bg-purple-100 text-purple-700 border-purple-300' : 'hover:bg-purple-50',
            green: isActive ? 'bg-green-100 text-green-700 border-green-300' : 'hover:bg-green-50',
            orange: isActive ? 'bg-orange-100 text-orange-700 border-orange-300' : 'hover:bg-orange-50',
            pink: isActive ? 'bg-pink-100 text-pink-700 border-pink-300' : 'hover:bg-pink-50',
            indigo: isActive ? 'bg-indigo-100 text-indigo-700 border-indigo-300' : 'hover:bg-indigo-50'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header - Fixed */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
                <div className="container mx-auto px-4 py-4 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver
                            </a>
                            <div className="h-6 w-px bg-slate-300"></div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">
                                    🛠️ Debug Mode
                                </h1>
                            </div>
                        </div>
                        <button
                            onClick={exportToMarkdown}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg font-medium text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content - with top padding to account for fixed header */}
            <div className="container mx-auto px-4 max-w-7xl pt-24">
                <div className="flex gap-6 py-6">
                    {/* Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sticky top-6">
                            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                                Bloques
                            </h2>
                            <div className="space-y-2">
                                {blocks.map(block => (
                                    <button
                                        key={block.id}
                                        onClick={() => setSelectedBlock(block.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${selectedBlock === block.id
                                            ? `${getBlockColorClass(block.color, true)} font-semibold`
                                            : `border-transparent text-slate-600 ${getBlockColorClass(block.color, false)}`
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{block.icon}</span>
                                                <span className="font-medium">{block.name}</span>
                                            </div>
                                            <span className="text-sm font-bold bg-white/50 px-2 py-0.5 rounded">
                                                {blockCounts[block.id] || 0}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-200">
                                <div className="text-xs text-slate-500 text-center">
                                    <div className="font-semibold mb-1">Total</div>
                                    <div className="text-2xl font-bold text-slate-700">{sortedQuestions.length}</div>
                                    <div className="mt-1">preguntas</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Panel */}
                    <div className="flex-1 min-w-0 pb-8">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-slate-800">
                                {blocks.find(b => b.id === selectedBlock)?.icon} {blocks.find(b => b.id === selectedBlock)?.name}
                            </h2>
                            <p className="text-sm text-slate-600">
                                Mostrando {filteredQuestions.length} {filteredQuestions.length === 1 ? 'pregunta' : 'preguntas'}
                            </p>
                        </div>

                        <div className="space-y-6 pb-8">
                            {filteredQuestions.map((q) => (
                                <div
                                    key={q.id}
                                    className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-slate-100"
                                >
                                    {/* Question Content - Similar to Quiz */}
                                    <div className="p-8 md:p-12">
                                        {/* Category Badge with Icon */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 shadow-sm border border-indigo-100">
                                                {q.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                                    {q.displayId}
                                                </span>
                                                <span className="text-sm font-bold text-indigo-900 uppercase tracking-wide opacity-80">
                                                    {q.category}
                                                </span>
                                            </div>
                                            <code className="ml-auto text-xs bg-slate-100 px-2 py-1 rounded font-mono text-slate-500">
                                                {q.id}
                                            </code>
                                        </div>

                                        {/* Scenario */}
                                        <h2 className="text-xl font-medium text-slate-900 leading-snug mb-8">
                                            {q.scenario}
                                        </h2>

                                        {/* Question */}
                                        <div className="text-lg font-bold text-indigo-800 border-l-4 border-indigo-600 pl-6 py-4 bg-indigo-50/50 rounded-r-lg shadow-sm mb-8">
                                            {q.question}
                                        </div>

                                        {/* Options - Similar to Quiz but with scores visible */}
                                        <div className="space-y-3">
                                            {q.options.map((option) => (
                                                <div
                                                    key={option.id}
                                                    className={`w-full p-4 border-2 rounded-xl flex items-start gap-3 shadow-sm ${getScoreColor(option.score)} border-current`}
                                                >
                                                    <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full font-bold text-xs mt-0.5 ${option.score >= 5 ? 'bg-green-600 text-white' :
                                                        option.score >= 3 ? 'bg-yellow-500 text-white' :
                                                            option.score >= 1 ? 'bg-orange-500 text-white' :
                                                                'bg-red-600 text-white'
                                                        }`}>
                                                        {option.id}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-xs font-mono bg-white/50 px-2 py-0.5 rounded">
                                                                Score: {option.score}
                                                            </span>
                                                            <span className="text-xs italic text-current/70">
                                                                {option.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-slate-700 font-medium leading-relaxed text-base">
                                                            {option.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Explanation */}
                                        <div className="mt-8 pt-6 border-t-2 border-slate-100">
                                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                                                <span>💡</span> Explicación
                                            </h4>
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                                <p className="text-slate-700 text-sm leading-relaxed">
                                                    {q.explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
