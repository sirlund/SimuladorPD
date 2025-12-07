import { ArrowLeft, Download, ExternalLink, BookOpen, AlertTriangle, TrendingUp, Target, Clock, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

export const LearningArticleScreen = ({
  analysis,
  onBack,
  onExport
}) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    archetypes: true,
    topics: true,
    questions: false,
    resources: true
  });

  if (!analysis) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme.bg}`}>
        <p className={theme.textMuted}>No hay datos de sesión para analizar.</p>
      </div>
    );
  }

  const {
    accuracy,
    totalScore,
    maxPossibleScore,
    questionsAnswered,
    distribution,
    levelFeedback,
    levelTip,
    strengths,
    weaknesses,
    detectedArchetypes,
    priorityTopics,
    failedQuestions,
    recommendedResources,
    timestamp
  } = analysis;

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCopyMarkdown = async () => {
    const markdown = generateMarkdown(analysis);
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${theme.bgHeader} ${theme.border}`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Resultados
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${theme.btnSecondary}`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copiado' : 'Copiar MD'}
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">

        {/* Title Section */}
        <div className="text-center space-y-4">
          <h1 className={`text-3xl md:text-4xl font-black ${theme.text}`}>
            Tu Plan de Desarrollo
          </h1>
          <p className={`text-sm ${theme.textSubtle}`}>
            Generado el {formatDate(timestamp)} basado en tu sesión
          </p>
        </div>

        {/* Summary Card */}
        <div className={`rounded-xl p-6 border ${theme.bgCard} ${theme.border}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className={`text-sm font-medium mb-1 ${theme.textMuted}`}>Tu Nivel</div>
              <div className={`text-2xl font-bold ${theme.text}`}>{levelFeedback}</div>
              <div className={`text-sm ${theme.textSubtle}`}>{accuracy}% de precisión • {totalScore}/{maxPossibleScore} pts</div>
            </div>

            <div className={`p-4 rounded-lg ${theme.isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
              <div className="flex items-center gap-2 mb-1">
                <Target className={`w-4 h-4 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`text-xs font-bold uppercase ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  Siguiente Paso
                </span>
              </div>
              <p className={`text-sm ${theme.isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                {levelTip}
              </p>
            </div>
          </div>
        </div>

        {/* Detected Archetypes */}
        {detectedArchetypes && detectedArchetypes.length > 0 && (
          <section className="space-y-4">
            <button
              onClick={() => toggleSection('archetypes')}
              className={`w-full flex items-center justify-between text-left`}
            >
              <h2 className={`text-xl font-bold flex items-center gap-2 ${theme.text}`}>
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Patrones Detectados
              </h2>
              <span className={`text-sm ${theme.textSubtle}`}>
                {expandedSections.archetypes ? '−' : '+'}
              </span>
            </button>

            {expandedSections.archetypes && (
              <div className="space-y-4">
                {detectedArchetypes.map(archetype => (
                  <div
                    key={archetype.id}
                    className={`rounded-xl p-5 border ${theme.isDark ? 'bg-orange-500/5 border-orange-500/30' : 'bg-orange-50 border-orange-200'}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{archetype.icon}</span>
                      <div>
                        <h3 className={`font-bold ${theme.text}`}>{archetype.name}</h3>
                        <p className={`text-sm ${theme.textMuted}`}>Detectado {archetype.count} veces</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className={`text-xs font-bold uppercase mb-1 ${theme.textSubtle}`}>El Patrón</div>
                        <p className={`text-sm ${theme.isDark ? 'text-orange-300' : 'text-orange-800'}`}>
                          {archetype.pattern}
                        </p>
                      </div>

                      <div>
                        <div className={`text-xs font-bold uppercase mb-1 ${theme.textSubtle}`}>Punto Ciego</div>
                        <p className={`text-sm ${theme.textMuted}`}>
                          {archetype.blindSpot}
                        </p>
                      </div>

                      <div className={`p-3 rounded-lg ${theme.isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
                        <div className={`text-xs font-bold uppercase mb-1 ${theme.isDark ? 'text-green-400' : 'text-green-700'}`}>
                          Reframe
                        </div>
                        <p className={`text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {archetype.reframe}
                        </p>
                      </div>

                      {archetype.exercises && archetype.exercises.length > 0 && (
                        <div>
                          <div className={`text-xs font-bold uppercase mb-2 ${theme.textSubtle}`}>Ejercicios</div>
                          <ul className="space-y-1">
                            {archetype.exercises.map((ex, i) => (
                              <li key={i} className={`text-sm flex items-start gap-2 ${theme.textMuted}`}>
                                <span>•</span>
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Priority Topics */}
        {priorityTopics && priorityTopics.length > 0 && (
          <section className="space-y-4">
            <button
              onClick={() => toggleSection('topics')}
              className={`w-full flex items-center justify-between text-left`}
            >
              <h2 className={`text-xl font-bold flex items-center gap-2 ${theme.text}`}>
                <TrendingUp className="w-5 h-5 text-indigo-500" />
                Áreas de Mejora Prioritarias
              </h2>
              <span className={`text-sm ${theme.textSubtle}`}>
                {expandedSections.topics ? '−' : '+'}
              </span>
            </button>

            {expandedSections.topics && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {priorityTopics.map(topic => (
                  <div
                    key={topic.id}
                    className={`rounded-xl p-4 border ${theme.bgCard} ${theme.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{topic.icon}</span>
                      <h3 className={`font-bold text-sm ${theme.text}`}>{topic.name}</h3>
                    </div>
                    <div className={`text-2xl font-black mb-1 ${
                      topic.percentage >= 70 ? 'text-green-500' :
                      topic.percentage >= 50 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {topic.percentage}%
                    </div>
                    <p className={`text-xs ${theme.textSubtle}`}>
                      {topic.score}/{topic.maxScore} pts en {topic.count} preguntas
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Strengths & Weaknesses Quick View */}
        {(strengths?.length > 0 || weaknesses?.length > 0) && (
          <div className="grid md:grid-cols-2 gap-4">
            {strengths?.length > 0 && (
              <div className={`rounded-xl p-4 border ${theme.isDark ? 'bg-green-500/5 border-green-500/30' : 'bg-green-50 border-green-200'}`}>
                <h3 className={`text-sm font-bold mb-2 ${theme.isDark ? 'text-green-400' : 'text-green-700'}`}>
                  Fortalezas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {strengths.map(s => (
                    <span key={s.name} className={`text-xs px-2 py-1 rounded ${theme.isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-800'}`}>
                      {s.name} ({s.percentage}%)
                    </span>
                  ))}
                </div>
              </div>
            )}

            {weaknesses?.length > 0 && (
              <div className={`rounded-xl p-4 border ${theme.isDark ? 'bg-red-500/5 border-red-500/30' : 'bg-red-50 border-red-200'}`}>
                <h3 className={`text-sm font-bold mb-2 ${theme.isDark ? 'text-red-400' : 'text-red-700'}`}>
                  A Mejorar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {weaknesses.map(w => (
                    <span key={w.name} className={`text-xs px-2 py-1 rounded ${theme.isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-800'}`}>
                      {w.name} ({w.percentage}%)
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommended Resources */}
        {recommendedResources && recommendedResources.length > 0 && (
          <section className="space-y-4">
            <button
              onClick={() => toggleSection('resources')}
              className={`w-full flex items-center justify-between text-left`}
            >
              <h2 className={`text-xl font-bold flex items-center gap-2 ${theme.text}`}>
                <BookOpen className="w-5 h-5 text-blue-500" />
                Recursos Recomendados
              </h2>
              <span className={`text-sm ${theme.textSubtle}`}>
                {expandedSections.resources ? '−' : '+'}
              </span>
            </button>

            {expandedSections.resources && (
              <div className="space-y-3">
                {recommendedResources.map(resource => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl p-4 border transition-colors ${theme.bgCard} ${theme.border} ${theme.bgCardHover}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            resource.type === 'book' ? 'bg-purple-500/20 text-purple-400' :
                            resource.type === 'article' ? 'bg-blue-500/20 text-blue-400' :
                            resource.type === 'video' ? 'bg-red-500/20 text-red-400' :
                            'bg-slate-500/20 text-slate-400'
                          }`}>
                            {resource.type}
                          </span>
                          {resource.free && (
                            <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                              gratis
                            </span>
                          )}
                          {resource.readTime && (
                            <span className={`text-xs flex items-center gap-1 ${theme.textSubtle}`}>
                              <Clock className="w-3 h-3" />
                              {resource.readTime}
                            </span>
                          )}
                        </div>
                        <h3 className={`font-bold ${theme.text}`}>{resource.title}</h3>
                        {resource.author && (
                          <p className={`text-sm ${theme.textMuted}`}>
                            {resource.author} {resource.source && `• ${resource.source}`}
                          </p>
                        )}
                        {resource.keyTakeaway && (
                          <p className={`text-sm mt-2 ${theme.textSubtle}`}>
                            💡 {resource.keyTakeaway}
                          </p>
                        )}
                        {resource.reason && (
                          <p className={`text-xs mt-2 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            → {resource.reason}
                          </p>
                        )}
                      </div>
                      <ExternalLink className={`w-4 h-4 flex-shrink-0 ${theme.textSubtle}`} />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Failed Questions Detail */}
        {failedQuestions && failedQuestions.length > 0 && (
          <section className="space-y-4">
            <button
              onClick={() => toggleSection('questions')}
              className={`w-full flex items-center justify-between text-left`}
            >
              <h2 className={`text-xl font-bold ${theme.text}`}>
                Preguntas a Revisar ({failedQuestions.length})
              </h2>
              <span className={`text-sm ${theme.textSubtle}`}>
                {expandedSections.questions ? '−' : '+'}
              </span>
            </button>

            {expandedSections.questions && (
              <div className="space-y-4">
                {failedQuestions.slice(0, 5).map(q => (
                  <div
                    key={q.id}
                    className={`rounded-xl p-4 border ${theme.bgCard} ${theme.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-indigo-500">{q.displayId}</span>
                      <span className={`text-xs ${theme.textSubtle}`}>{q.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ml-auto ${
                        q.score === 3 ? 'bg-yellow-500/20 text-yellow-400' :
                        q.score === 1 ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {q.score > 0 ? '+' : ''}{q.score} pts
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${theme.textMuted}`}>{q.scenario}</p>

                    <div className="grid gap-2">
                      <div className={`p-2 rounded text-sm ${theme.isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
                        <span className={`text-xs font-bold ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>Tu respuesta: </span>
                        <span className={theme.textMuted}>{q.selectedOption?.substring(0, 100)}...</span>
                      </div>
                      <div className={`p-2 rounded text-sm ${theme.isDark ? 'bg-green-500/10' : 'bg-green-50'}`}>
                        <span className={`text-xs font-bold ${theme.isDark ? 'text-green-400' : 'text-green-600'}`}>Mejor opción: </span>
                        <span className={theme.textMuted}>{q.bestOption?.substring(0, 100)}...</span>
                      </div>
                    </div>
                  </div>
                ))}

                {failedQuestions.length > 5 && (
                  <p className={`text-sm text-center ${theme.textSubtle}`}>
                    ... y {failedQuestions.length - 5} preguntas más
                  </p>
                )}
              </div>
            )}
          </section>
        )}

        {/* Footer */}
        <div className={`text-center pt-8 border-t ${theme.border}`}>
          <p className={`text-sm ${theme.textSubtle}`}>
            Generado por SimuladorPD • {formatDate(timestamp)}
          </p>
        </div>

      </div>
    </div>
  );
};

// Helper function to generate markdown
function generateMarkdown(analysis) {
  const {
    accuracy,
    totalScore,
    maxPossibleScore,
    levelFeedback,
    levelTip,
    detectedArchetypes,
    priorityTopics,
    strengths,
    weaknesses,
    recommendedResources,
    failedQuestions,
    timestamp
  } = analysis;

  let md = `# Tu Plan de Desarrollo - SimuladorPD\n\n`;
  md += `**Fecha:** ${new Date(timestamp).toLocaleDateString('es-ES')}\n\n`;
  md += `## Resumen\n\n`;
  md += `- **Nivel:** ${levelFeedback}\n`;
  md += `- **Score:** ${accuracy}% (${totalScore}/${maxPossibleScore} pts)\n`;
  md += `- **Siguiente paso:** ${levelTip}\n\n`;

  if (strengths?.length > 0) {
    md += `### Fortalezas\n`;
    strengths.forEach(s => md += `- ${s.name} (${s.percentage}%)\n`);
    md += `\n`;
  }

  if (weaknesses?.length > 0) {
    md += `### Áreas de Mejora\n`;
    weaknesses.forEach(w => md += `- ${w.name} (${w.percentage}%)\n`);
    md += `\n`;
  }

  if (detectedArchetypes?.length > 0) {
    md += `## Patrones Detectados\n\n`;
    detectedArchetypes.forEach(a => {
      md += `### ${a.icon} ${a.name}\n`;
      md += `**Patrón:** ${a.pattern}\n\n`;
      md += `**Punto ciego:** ${a.blindSpot}\n\n`;
      md += `**Reframe:** ${a.reframe}\n\n`;
      if (a.exercises) {
        md += `**Ejercicios:**\n`;
        a.exercises.forEach(e => md += `- ${e}\n`);
      }
      md += `\n`;
    });
  }

  if (recommendedResources?.length > 0) {
    md += `## Recursos Recomendados\n\n`;
    recommendedResources.forEach(r => {
      md += `- **[${r.title}](${r.url})** (${r.type})`;
      if (r.author) md += ` - ${r.author}`;
      md += `\n`;
      if (r.keyTakeaway) md += `  - 💡 ${r.keyTakeaway}\n`;
    });
    md += `\n`;
  }

  md += `---\n*Generado por SimuladorPD*\n`;

  return md;
}

export default LearningArticleScreen;
