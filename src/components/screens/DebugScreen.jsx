import React from 'react';
import { allQuestions } from '../../data/questions';
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, MinusCircle, Download } from 'lucide-react';

export default function DebugScreen() {
    // Use allQuestions directly since it's already the full array
    const questions = allQuestions;

    // Function to export all content to Markdown
    const exportToMarkdown = () => {
        let markdown = '# Simulador Product Lead - Todas las Preguntas\n\n';
        markdown += `**Total de preguntas:** ${questions.length}\n\n`;
        markdown += `**Generado:** ${new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}\n\n`;
        markdown += '---\n\n';

        questions.forEach((q, index) => {
            markdown += `## ${index + 1}. ${q.question}\n\n`;
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

        // Create blob and download
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al simulador
                    </a>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-2">
                                🛠️ Modo Debug
                            </h1>
                            <p className="text-slate-600">
                                Total de preguntas: <strong>{questions.length}</strong>
                            </p>
                        </div>
                        <button
                            onClick={exportToMarkdown}
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl font-medium"
                        >
                            <Download className="w-5 h-5" />
                            Exportar a Markdown
                        </button>
                    </div>
                </div>

                {/* Questions List */}
                <div className="space-y-8">
                    {questions.map((q, index) => (
                        <div
                            key={q.id}
                            className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                        >
                            {/* Question Header */}
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                                                {q.category}
                                            </span>
                                            <code className="text-xs bg-white/10 px-2 py-1 rounded font-mono">
                                                {q.displayId}
                                            </code>
                                            <code className="text-xs bg-white/10 px-2 py-1 rounded font-mono">
                                                {q.id}
                                            </code>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">{q.scenario}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Question Content */}
                            <div className="p-6 space-y-6">
                                {/* Scenario */}
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                                        Pregunta:
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg">
                                        {q.question}
                                    </p>
                                </div>

                                {/* Options */}
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                                        Opciones ({q.options.length})
                                    </h3>
                                    <div className="space-y-3">
                                        {q.options.map((option) => (
                                            <div
                                                key={option.id}
                                                className={`border-2 rounded-lg p-4 ${getScoreColor(option.score)} border-current`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        {getScoreIcon(option.score)}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="font-bold text-lg">{option.id}</span>
                                                            <span className="text-xs font-mono bg-white/50 px-2 py-0.5 rounded">
                                                                Score: {option.score}
                                                            </span>
                                                            <span className="text-xs italic text-current/70">
                                                                {option.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm leading-relaxed">
                                                            {option.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Explanation */}
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                                        Explicación
                                    </h3>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-slate-700 leading-relaxed">
                                            {q.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-slate-500 text-sm">
                    <p>Total: {questions.length} preguntas cargadas</p>
                </div>
            </div>
        </div>
    );
}
