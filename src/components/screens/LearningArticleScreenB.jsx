import { ArrowLeft, Copy, Check, DollarSign, Eye, Pill } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

/**
 * VERSION B: Más directo, costos en $, estilo "coach duro"
 */
export const LearningArticleScreenB = ({
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
    levelFeedback,
    diagnosis,
    timestamp
  } = analysis;

  const { dominantBias, worstDecisions, mondayMission } = diagnosis || {};

  const handleCopyMarkdown = async () => {
    const markdown = generateMarkdownB(analysis);
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generar costos ficticios pero realistas basados en las decisiones
  const generateCost = (decision) => {
    const costs = {
      'Revenue': { amount: '$150K', label: 'en Revenue Perdido' },
      'Crisis': { amount: '$200K', label: 'en Costos de Incidente' },
      'Credibilidad': { amount: '3 meses', label: 'de Trust Destruido' },
      'Deuda Técnica': { amount: '$80K', label: 'en Refactor Futuro' },
      'Roadmap': { amount: '6 semanas', label: 'de Retraso' },
      'Relaciones': { amount: '2 aliados', label: 'Políticos Perdidos' },
      'Reputación': { amount: '-15 NPS', label: 'Puntos' }
    };

    // Extraer el tipo de la consecuencia
    const type = Object.keys(costs).find(k => decision.consequence?.includes(k));
    return costs[type] || { amount: '$100K', label: 'en Impacto Negativo' };
  };

  // Determinar el nivel basado en accuracy
  const getLevel = () => {
    if (accuracy >= 80) return { label: 'Senior Manager', color: 'green' };
    if (accuracy >= 60) return { label: 'Mid-Level Manager', color: 'yellow' };
    return { label: 'Junior Manager', color: 'red' };
  };

  const level = getLevel();

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header minimalista */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${theme.bgHeader} ${theme.border}`}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 transition-colors ${theme.textMuted} hover:${theme.text}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded font-mono ${
                theme.isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'
              }`}>
                Template B
              </span>
              <button
                onClick={handleCopyMarkdown}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${theme.btnSecondary}`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">

        {/* Hero: Diagnóstico directo */}
        <div className="space-y-4">
          <h1 className={`text-3xl md:text-4xl font-black leading-tight ${theme.text}`}>
            {dominantBias?.emoji || '📉'} {dominantBias?.headline || `Diagnóstico: Estás operando como un "${dominantBias?.title || 'Order Taker'}"`}
          </h1>

          <p className={`text-xl ${theme.textMuted}`}>
            Score: <span className={`font-bold ${
              level.color === 'green' ? 'text-green-500' :
              level.color === 'yellow' ? 'text-yellow-500' : 'text-red-500'
            }`}>{accuracy}%</span>
            {' '}({level.label} Level)
          </p>

          <p className={`text-lg leading-relaxed ${theme.text}`}>
            {dominantBias?.tagline || dominantBias?.subtitle || 'Análisis de tu performance en el simulador.'}
          </p>
        </div>

        {/* El Costo de tus Decisiones */}
        {worstDecisions && worstDecisions.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <DollarSign className={`w-8 h-8 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`} />
              <h2 className={`text-2xl font-black ${theme.text}`}>
                El Costo de tus Decisiones
              </h2>
            </div>

            <p className={`text-lg ${theme.textMuted}`}>
              Si esto fuera una startup real, tu performance de hoy habría costado:
            </p>

            <div className="space-y-4">
              {worstDecisions.map((decision, i) => {
                const cost = generateCost(decision);
                return (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border-l-4 ${
                      theme.isDark
                        ? 'bg-slate-800/50 border-red-500'
                        : 'bg-slate-50 border-red-500'
                    }`}
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-2xl font-black ${
                        theme.isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {cost.amount}
                      </span>
                      <span className={`text-sm ${theme.textMuted}`}>
                        {cost.label}
                      </span>
                    </div>
                    <p className={theme.text}>
                      <span className="font-bold text-indigo-500">{decision.id}:</span>{' '}
                      {decision.scenario}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tu Punto Ciego */}
        {dominantBias && (
          <div className={`p-8 rounded-2xl ${
            theme.isDark ? 'bg-slate-800' : 'bg-slate-100'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <Eye className={`w-8 h-8 ${theme.isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <h2 className={`text-2xl font-black ${theme.text}`}>
                Tu Punto Ciego: "{dominantBias.blindSpot?.name || dominantBias.conceptToInternalize?.vs || 'Patrón Detectado'}"
              </h2>
            </div>

            <div className={`space-y-4 text-lg leading-relaxed ${theme.text}`}>
              {dominantBias.hardTruth ? (
                <p>{dominantBias.hardTruth}</p>
              ) : (
                <p>
                  Crees que ser un buen líder significa decir <em>"sí"</em> y desbloquear el camino.
                  <strong className={theme.isDark ? 'text-red-400' : 'text-red-600'}> Falso.</strong>
                </p>
              )}
              {dominantBias.blindSpot?.description && (
                <p className={theme.isDark ? 'text-amber-400' : 'text-amber-700'}>
                  {dominantBias.blindSpot.description}
                </p>
              )}
              {dominantBias.conceptToInternalize && (
                <p className={`p-4 rounded-lg ${theme.isDark ? 'bg-slate-700' : 'bg-white'}`}>
                  <strong>{dominantBias.conceptToInternalize.name}</strong> vs <em>{dominantBias.conceptToInternalize.vs}</em>
                  {dominantBias.conceptToInternalize.explanation && (
                    <span className={`block mt-2 text-base ${theme.textMuted}`}>
                      {dominantBias.conceptToInternalize.explanation}
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        )}

        {/* The Pivot: Plan de Recuperación */}
        {(mondayMission || dominantBias?.pivotActions) && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Pill className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-2xl font-black ${theme.text}`}>
                💊 The Pivot: {mondayMission?.title || 'Tu Plan de Recuperación'}
              </h2>
            </div>

            {/* Monday Mission con script */}
            {mondayMission && (
              <div className={`p-6 rounded-xl border-2 ${
                theme.isDark ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-emerald-500 bg-emerald-50'
              }`}>
                <p className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                  theme.isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  {mondayMission.emoji} Tu Misión del Lunes
                </p>
                <p className={`mb-4 ${theme.text}`}>
                  <strong>Trigger:</strong> {mondayMission.trigger}
                </p>
                {mondayMission.script && (
                  <blockquote className={`p-4 rounded-lg border-l-4 mb-4 ${
                    theme.isDark
                      ? 'bg-slate-800 border-emerald-500 text-emerald-300'
                      : 'bg-white border-emerald-500 text-emerald-800'
                  }`}>
                    <p className="font-medium whitespace-pre-line">{mondayMission.script}</p>
                  </blockquote>
                )}
                {mondayMission.principle && (
                  <p className={`text-sm font-medium ${theme.isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                    💡 {mondayMission.principle}
                  </p>
                )}
              </div>
            )}

            {/* Pivot Actions del arquetipo */}
            {dominantBias?.pivotActions && (
              <div className="space-y-4">
                {dominantBias.pivotActions.map((action, i) => (
                  <div key={i} className={`p-5 rounded-xl border ${theme.bgCard} ${theme.border}`}>
                    <div className="flex items-start gap-4">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-white bg-emerald-500`}>
                        {i + 1}
                      </span>
                      <div>
                        <h3 className={`text-lg font-bold mb-2 ${theme.text}`}>
                          {action.title}
                        </h3>
                        <p className={theme.textMuted}>
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Qué NO hacer */}
            {mondayMission?.donts && mondayMission.donts.length > 0 && (
              <div className={`p-5 rounded-xl ${theme.isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
                <p className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                  theme.isDark ? 'text-red-400' : 'text-red-700'
                }`}>
                  🚫 Qué NO hacer
                </p>
                <ul className={`space-y-2 ${theme.text}`}>
                  {mondayMission.donts.map((dont, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      {dont}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className={`text-center pt-8 border-t ${theme.border}`}>
          <p className={`text-sm ${theme.textSubtle}`}>
            Simulador Product Lead • Template B
          </p>
        </div>

      </div>
    </div>
  );
};

// Helper function to generate markdown
function generateMarkdownB(analysis) {
  const { accuracy, levelFeedback, diagnosis } = analysis;
  const { dominantBias, worstDecisions, mondayMission } = diagnosis || {};

  let md = `# ${dominantBias?.emoji || '📉'} ${dominantBias?.headline || `Diagnóstico: ${dominantBias?.title}`}\n\n`;
  md += `**Score:** ${accuracy}% (${levelFeedback})\n\n`;
  md += `${dominantBias?.tagline || dominantBias?.subtitle || ''}\n\n`;
  md += `---\n\n`;

  if (worstDecisions?.length > 0) {
    md += `## 💸 El Costo de tus Decisiones\n\n`;
    worstDecisions.forEach(d => {
      md += `* **${d.id}:** ${d.scenario}\n`;
    });
    md += `\n`;
  }

  md += `## 👁️ Tu Punto Ciego: ${dominantBias?.blindSpot?.name || ''}\n\n`;
  md += `${dominantBias?.hardTruth || ''}\n\n`;
  if (dominantBias?.blindSpot?.description) {
    md += `> ${dominantBias.blindSpot.description}\n\n`;
  }

  md += `## 💊 The Pivot: ${mondayMission?.title || 'Plan de Acción'}\n\n`;
  if (dominantBias?.pivotActions) {
    dominantBias.pivotActions.forEach((action, i) => {
      md += `${i + 1}. **${action.title}** - ${action.description}\n`;
    });
  }

  return md;
}

export default LearningArticleScreenB;
