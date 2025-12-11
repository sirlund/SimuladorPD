import { ArrowLeft, ExternalLink, BookOpen, AlertTriangle, Target, Clock, Copy, Check, Zap } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

export const LearningArticleScreen = ({
  analysis,
  onBack
}) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

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
    levelFeedback,
    diagnosis,
    timestamp
  } = analysis;

  const { dominantBias, competencyMap, worstDecisions, sniperResources, mondayMission } = diagnosis || {};

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

        {/* Hero: Diagnóstico Principal */}
        <div className="text-center space-y-4">
          <div className="text-6xl">{dominantBias?.emoji || '📊'}</div>
          <h1 className={`text-3xl md:text-4xl font-black ${theme.text}`}>
            Diagnóstico: {dominantBias?.title || 'Análisis'}
          </h1>
          <p className={`text-lg ${theme.textMuted}`}>
            {dominantBias?.subtitle || ''}
          </p>
          {dominantBias?.percentage > 0 && (
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
              dominantBias.type === 'success'
                ? theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                : theme.isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
            }`}>
              {dominantBias.type === 'success'
                ? `${dominantBias.percentage}% de tus aciertos fueron en estas categorías`
                : `En el ${dominantBias.percentage}% de tus errores, elegiste este patrón`
              }
            </div>
          )}
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
            <div className={`text-3xl font-black ${theme.text}`}>{accuracy}%</div>
            <div className={`text-xs ${theme.textSubtle}`}>Precisión</div>
          </div>
          <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
            <div className={`text-3xl font-black ${theme.text}`}>{totalScore}/{maxPossibleScore}</div>
            <div className={`text-xs ${theme.textSubtle}`}>Puntos</div>
          </div>
          <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
            <div className={`text-3xl font-black ${theme.text}`}>{levelFeedback}</div>
            <div className={`text-xs ${theme.textSubtle}`}>Nivel Detectado</div>
          </div>
        </div>

        {/* La Verdad Dura */}
        {dominantBias?.hardTruth && (
          <div className={`rounded-xl p-6 border ${
            theme.isDark ? 'bg-red-500/5 border-red-500/30' : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className={`w-5 h-5 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`} />
              <h2 className={`text-lg font-bold ${theme.isDark ? 'text-red-400' : 'text-red-700'}`}>
                La Verdad Dura
              </h2>
            </div>
            <MarkdownText className={`leading-relaxed ${theme.isDark ? 'text-red-300' : 'text-red-800'}`}>
              {dominantBias.hardTruth}
            </MarkdownText>
          </div>
        )}

        {/* Peores Decisiones */}
        {worstDecisions && worstDecisions.length > 0 && (
          <div className="space-y-3">
            <h2 className={`text-lg font-bold ${theme.text}`}>
              Consecuencias de tus decisiones hoy:
            </h2>
            <div className="space-y-2">
              {worstDecisions.map((decision, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border ${theme.bgCard} ${theme.border}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-indigo-500">{decision.id}</span>
                    <div className="flex-1">
                      <MarkdownText className={`text-sm font-medium ${theme.text}`}>
                        {decision.consequence}
                      </MarkdownText>
                      <p className={`text-xs mt-1 ${theme.textSubtle}`}>
                        {decision.scenario}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mapa de Competencias */}
        {competencyMap && competencyMap.length > 0 && (
          <div className="space-y-4">
            <h2 className={`text-lg font-bold flex items-center gap-2 ${theme.text}`}>
              <Target className="w-5 h-5 text-indigo-500" />
              Mapa de Competencias
            </h2>
            <div className={`rounded-xl border overflow-hidden ${theme.border}`}>
              <table className="w-full">
                <thead>
                  <tr className={theme.isDark ? 'bg-slate-800/50' : 'bg-slate-100'}>
                    <th className={`text-left p-4 text-sm font-bold ${theme.text}`}>Área</th>
                    <th className={`text-center p-4 text-sm font-bold ${theme.text}`}>Nivel</th>
                    <th className={`text-left p-4 text-sm font-bold ${theme.text}`}>Feedback del VP</th>
                  </tr>
                </thead>
                <tbody>
                  {competencyMap.map((comp, i) => (
                    <tr key={comp.id} className={`border-t ${theme.border}`}>
                      <td className={`p-4 ${theme.bgCard}`}>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{comp.icon}</span>
                          <span className={`font-medium ${theme.text}`}>{comp.name}</span>
                        </div>
                      </td>
                      <td className={`p-4 text-center ${theme.bgCard}`}>
                        <span className={`text-xl`}>{comp.levelData?.emoji}</span>
                        <div className={`text-xs font-bold mt-1 ${
                          comp.level === 'staff' || comp.level === 'senior' ? 'text-green-500' :
                          comp.level === 'mid' ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {comp.levelData?.label}
                        </div>
                      </td>
                      <td className={`p-4 ${theme.bgCard}`}>
                        <p className={`text-sm ${theme.textMuted}`}>
                          {comp.levelData?.feedback}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Concepto a Internalizar */}
        {dominantBias?.conceptToInternalize && (
          <div className={`rounded-xl p-6 border ${
            theme.isDark ? 'bg-indigo-500/5 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
          }`}>
            <h2 className={`text-lg font-bold mb-4 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
              El Concepto a Internalizar
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className={`px-4 py-2 rounded-lg font-bold ${
                theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                {dominantBias.conceptToInternalize.name}
              </div>
              <span className={theme.textMuted}>vs</span>
              <div className={`px-4 py-2 rounded-lg font-bold ${
                theme.isDark ? 'bg-red-500/20 text-red-400 line-through' : 'bg-red-100 text-red-700 line-through'
              }`}>
                {dominantBias.conceptToInternalize.vs}
              </div>
            </div>
            <p className={`text-sm ${theme.textMuted}`}>
              {dominantBias.conceptToInternalize.explanation}
            </p>
          </div>
        )}

        {/* Recursos Francotirador */}
        {sniperResources && sniperResources.length > 0 && (
          <div className="space-y-4">
            <h2 className={`text-lg font-bold flex items-center gap-2 ${theme.text}`}>
              <BookOpen className="w-5 h-5 text-blue-500" />
              Tu Receta de Mejora (3 recursos, no 30)
            </h2>
            <div className="space-y-3">
              {sniperResources.map((resource, i) => (
                <a
                  key={resource.id || i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl p-5 border transition-all ${theme.bgCard} ${theme.border} hover:border-indigo-500/50`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{resource.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                          resource.type === 'book' ? 'bg-purple-500/20 text-purple-400' :
                          resource.type === 'article' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {resource.type}
                        </span>
                        {resource.readTime && (
                          <span className={`text-xs flex items-center gap-1 ${theme.textSubtle}`}>
                            <Clock className="w-3 h-3" />
                            {resource.readTime}
                          </span>
                        )}
                      </div>
                      <h3 className={`font-bold ${theme.text}`}>{resource.title}</h3>
                      <p className={`text-sm ${theme.textMuted}`}>
                        {resource.author} {resource.section && `• ${resource.section}`}
                      </p>
                      <p className={`text-sm mt-2 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        → {resource.why}
                      </p>
                    </div>
                    <ExternalLink className={`w-4 h-4 flex-shrink-0 ${theme.textSubtle}`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Misión del Lunes */}
        {mondayMission && (
          <div className={`rounded-xl p-6 border-2 ${
            theme.isDark ? 'bg-emerald-500/5 border-emerald-500/50' : 'bg-emerald-50 border-emerald-300'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className={`w-6 h-6 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-xl font-black ${theme.isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Tu Misión del Lunes: {mondayMission.title}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className={`text-xs font-bold uppercase mb-2 ${theme.textSubtle}`}>Trigger</div>
                <p className={theme.text}>{mondayMission.trigger}</p>
              </div>

              <div>
                <div className={`text-xs font-bold uppercase mb-2 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
                  NO hagas esto:
                </div>
                <ul className="space-y-1">
                  {mondayMission.donts?.map((dont, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 ${theme.textMuted}`}>
                      <span className="text-red-500">✗</span>
                      {dont}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${theme.isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <div className={`text-xs font-bold uppercase mb-2 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  Di esto literalmente:
                </div>
                <MarkdownText className={`text-lg font-medium ${theme.text}`}>
                  {mondayMission.script}
                </MarkdownText>
              </div>

              <div className={`p-3 rounded-lg ${theme.isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
                <span className={`text-sm font-bold ${theme.isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                  Principio: </span>
                <span className={`text-sm ${theme.isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  {mondayMission.principle}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`text-center pt-8 border-t ${theme.border}`}>
          <p className={`text-sm ${theme.textSubtle}`}>
            Simulador Product Lead • {formatDate(timestamp)}
          </p>
        </div>

      </div>
    </div>
  );
};

// Helper function to generate markdown
function generateMarkdown(analysis) {
  const { accuracy, totalScore, maxPossibleScore, levelFeedback, diagnosis, timestamp } = analysis;
  const { dominantBias, competencyMap, worstDecisions, sniperResources, mondayMission } = diagnosis || {};

  let md = `# 📉 Diagnóstico de Liderazgo: ${dominantBias?.title || 'Análisis'}\n\n`;
  md += `**Fecha:** ${new Date(timestamp).toLocaleDateString('es-ES')}\n`;
  md += `**Nivel Detectado:** ${levelFeedback} (${accuracy}% precisión)\n\n`;
  md += `---\n\n`;

  if (dominantBias?.hardTruth) {
    md += `## 🚨 La Verdad Dura\n\n`;
    md += `${dominantBias.hardTruth}\n\n`;
  }

  if (worstDecisions?.length > 0) {
    md += `## Consecuencias de tus decisiones:\n\n`;
    worstDecisions.forEach(d => {
      md += `* ${d.consequence}\n`;
    });
    md += `\n`;
  }

  if (competencyMap?.length > 0) {
    md += `## 🗺️ Mapa de Competencias\n\n`;
    md += `| Área | Nivel | Feedback |\n`;
    md += `| :--- | :--- | :--- |\n`;
    competencyMap.forEach(c => {
      md += `| **${c.name}** | ${c.levelData?.emoji} ${c.levelData?.label} | ${c.levelData?.feedback} |\n`;
    });
    md += `\n`;
  }

  if (sniperResources?.length > 0) {
    md += `## 💊 Receta de Mejora\n\n`;
    sniperResources.forEach((r, i) => {
      md += `${i + 1}. **${r.title}** (${r.type}) - ${r.author}\n`;
      md += `   * ${r.why}\n`;
    });
    md += `\n`;
  }

  if (mondayMission) {
    md += `## 🎯 Tu Misión del Lunes\n\n`;
    md += `**Trigger:** ${mondayMission.trigger}\n\n`;
    md += `**Script:**\n> ${mondayMission.script?.replace(/\n/g, '\n> ')}\n\n`;
    md += `**Principio:** ${mondayMission.principle}\n\n`;
  }

  md += `---\n*Generado por SimuladorPD*\n`;

  return md;
}

export default LearningArticleScreen;
