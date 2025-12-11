import { useState } from 'react';
import { ArrowLeft, Copy, Check, DollarSign, Eye, Pill, Target, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

/**
 * LearningScreenV2 - Template Fusionado con Evidencia Dinámica
 *
 * Combina lo mejor de Template A (estructura) y Template B (impacto)
 * con secciones dinámicas basadas en las respuestas reales del usuario.
 */
export const LearningScreenV2 = ({ analysis, onBack }) => {
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
    levelFeedback,
    diagnosis,
    timestamp
  } = analysis;

  const {
    dominantBias,
    worstDecisions,
    mondayMission,
    dynamicEvidence // Nueva: evidencia dinámica de la sesión
  } = diagnosis || {};

  const isSuccess = dominantBias?.type === 'success';

  const handleCopyMarkdown = async () => {
    const markdown = generateMarkdownV2(analysis);
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
                theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
              }`}>
                v2.1
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

        {/* Hero Section */}
        <HeroSection
          dominantBias={dominantBias}
          accuracy={accuracy}
          isSuccess={isSuccess}
          theme={theme}
        />

        {/* Stats Row */}
        <StatsRow
          accuracy={accuracy}
          totalScore={totalScore}
          maxPossibleScore={maxPossibleScore}
          levelFeedback={levelFeedback}
          isSuccess={isSuccess}
          theme={theme}
        />

        {/* Dynamic Evidence Section */}
        {isSuccess ? (
          <SuccessEvidenceSection
            evidence={dynamicEvidence}
            dominantBias={dominantBias}
            theme={theme}
          />
        ) : (
          <FailureEvidenceSection
            evidence={dynamicEvidence}
            worstDecisions={worstDecisions}
            theme={theme}
          />
        )}

        {/* Blind Spot / Next Ceiling */}
        {isSuccess ? (
          <NextCeilingSection dominantBias={dominantBias} theme={theme} />
        ) : (
          <BlindSpotSection dominantBias={dominantBias} theme={theme} />
        )}

        {/* The Pivot / Action Plan */}
        {!isSuccess && (
          <PivotSection
            dominantBias={dominantBias}
            mondayMission={mondayMission}
            theme={theme}
          />
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

// ============================================
// Sub-components
// ============================================

const HeroSection = ({ dominantBias, accuracy, isSuccess, theme }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-5xl">{dominantBias?.emoji || (isSuccess ? '🏆' : '📉')}</span>
        {isSuccess && (
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
          }`}>
            ÉXITO
          </span>
        )}
      </div>

      <h1 className={`text-3xl md:text-4xl font-black leading-tight ${theme.text}`}>
        {dominantBias?.headline || `Diagnóstico: ${dominantBias?.title}`}
      </h1>

      <p className={`text-lg leading-relaxed ${theme.text}`}>
        {dominantBias?.tagline || dominantBias?.subtitle || dominantBias?.description}
      </p>
    </div>
  );
};

const StatsRow = ({ accuracy, totalScore, maxPossibleScore, levelFeedback, isSuccess, theme }) => (
  <div className="grid grid-cols-3 gap-4">
    <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
      <div className={`text-2xl font-black ${theme.text}`}>{levelFeedback}</div>
      <div className={`text-xs ${theme.textSubtle}`}>Nivel</div>
    </div>
    <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
      <div className={`text-3xl font-black ${isSuccess ? 'text-green-500' : theme.text}`}>
        {accuracy}%
      </div>
      <div className={`text-xs ${theme.textSubtle}`}>Precisión</div>
    </div>
    <div className={`text-center p-4 rounded-xl border ${theme.bgCard} ${theme.border}`}>
      <div className={`text-3xl font-black ${theme.text}`}>{totalScore}/{maxPossibleScore}</div>
      <div className={`text-xs ${theme.textSubtle}`}>Puntos</div>
    </div>
  </div>
);

const FailureEvidenceSection = ({ evidence, worstDecisions, theme }) => {
  // Usar evidencia dinámica si existe, sino fallback a worstDecisions
  const items = evidence?.length > 0 ? evidence : worstDecisions;

  if (!items?.length) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <DollarSign className={`w-8 h-8 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          El Costo Real de tu Sesión
        </h2>
      </div>

      <p className={`text-lg ${theme.textMuted}`}>
        Basado en tus respuestas, este es el daño hipotético que causaste hoy:
      </p>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl border-l-4 ${
              theme.isDark
                ? 'bg-slate-800/50 border-red-500'
                : 'bg-slate-50 border-red-500'
            }`}
          >
            {/* Si es evidencia dinámica nueva */}
            {item.impact ? (
              <>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl">{item.impact.emoji}</span>
                  <span className={`text-xl font-black ${
                    theme.isDark ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {item.impact.cost}
                  </span>
                  <span className={`text-sm ${theme.textMuted}`}>
                    {item.impact.consequence}
                  </span>
                </div>
                <p className={theme.text}>
                  <span className="font-bold text-indigo-500">{item.questionId}:</span>{' '}
                  En esta situación, elegiste <em className={theme.isDark ? 'text-orange-400' : 'text-orange-600'}>
                    {item.selectedType}
                  </em>.
                </p>
                <p className={`text-sm mt-1 ${theme.textSubtle}`}>
                  {item.scenario}
                </p>
              </>
            ) : (
              /* Fallback a formato antiguo (worstDecisions) */
              <>
                <p className={theme.text}>
                  <span className="font-bold text-indigo-500">{item.id}:</span>{' '}
                  {item.scenario}
                </p>
                {item.consequence && (
                  <p className={`text-sm mt-2 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
                    → {item.consequence}
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SuccessEvidenceSection = ({ evidence, dominantBias, theme }) => {
  // Usar evidencia dinámica o wins del arquetipo
  const items = evidence?.length > 0 ? evidence : dominantBias?.wins;

  if (!items?.length) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <TrendingUp className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tus Superpoderes Detectados
        </h2>
      </div>

      <p className={`text-lg ${theme.textMuted}`}>
        Has demostrado instinto de liderazgo en situaciones críticas:
      </p>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl border-l-4 ${
              theme.isDark
                ? 'bg-slate-800/50 border-emerald-500'
                : 'bg-slate-50 border-emerald-500'
            }`}
          >
            {/* Si es evidencia dinámica */}
            {item.impact ? (
              <>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl">{item.impact.emoji}</span>
                  <span className={`text-lg font-bold ${
                    theme.isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    {item.impact.type}
                  </span>
                </div>
                <p className={theme.text}>
                  <span className="font-bold text-indigo-500">{item.questionId}:</span>{' '}
                  Elegiste <em className={theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}>
                    {item.correctChoice}
                  </em>, evitando {item.impact.avoided}.
                </p>
                <p className={`text-sm mt-1 ${theme.textSubtle}`}>
                  {item.scenario}
                </p>
              </>
            ) : (
              /* Fallback a wins del arquetipo */
              <>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-lg font-bold ${
                    theme.isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <p className={theme.text}>{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const BlindSpotSection = ({ dominantBias, theme }) => {
  if (!dominantBias) return null;

  return (
    <div className={`p-8 rounded-2xl ${theme.isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <div className="flex items-center gap-3 mb-6">
        <Eye className={`w-8 h-8 ${theme.isDark ? 'text-purple-400' : 'text-purple-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Punto Ciego: "{dominantBias?.blindSpot?.name || 'Patrón Detectado'}"
        </h2>
      </div>

      <div className={`space-y-4 text-lg leading-relaxed ${theme.text}`}>
        {dominantBias?.hardTruth && (
          <MarkdownText className={theme.text}>
            {dominantBias.hardTruth}
          </MarkdownText>
        )}

        {dominantBias?.blindSpot?.description && (
          <p className={theme.isDark ? 'text-amber-400' : 'text-amber-700'}>
            {dominantBias.blindSpot.description}
          </p>
        )}

        {dominantBias?.conceptToInternalize && (
          <div className={`p-4 rounded-lg ${theme.isDark ? 'bg-slate-700' : 'bg-white'}`}>
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`px-3 py-1 rounded-lg font-bold ${
                theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                {dominantBias.conceptToInternalize.name}
              </span>
              <span className={theme.textMuted}>vs</span>
              <span className={`px-3 py-1 rounded-lg font-bold line-through ${
                theme.isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
              }`}>
                {dominantBias.conceptToInternalize.vs}
              </span>
            </div>
            {dominantBias.conceptToInternalize.explanation && (
              <p className={`mt-3 text-base ${theme.textMuted}`}>
                {dominantBias.conceptToInternalize.explanation}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NextCeilingSection = ({ dominantBias, theme }) => {
  if (!dominantBias?.nextCeiling) return null;

  return (
    <div className={`p-8 rounded-2xl ${theme.isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className={`w-8 h-8 ${theme.isDark ? 'text-amber-400' : 'text-amber-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Siguiente Techo
        </h2>
      </div>

      <div className={`space-y-4 text-lg leading-relaxed ${theme.text}`}>
        <div className={`p-4 rounded-lg border-l-4 ${
          theme.isDark ? 'bg-amber-500/10 border-amber-500' : 'bg-amber-50 border-amber-500'
        }`}>
          <p className={`font-bold mb-2 ${theme.isDark ? 'text-amber-400' : 'text-amber-700'}`}>
            Desafío:
          </p>
          <p>{dominantBias.nextCeiling.challenge}</p>
        </div>

        <div className={`p-4 rounded-lg border-l-4 ${
          theme.isDark ? 'bg-red-500/10 border-red-500' : 'bg-red-50 border-red-500'
        }`}>
          <p className={`font-bold mb-2 ${theme.isDark ? 'text-red-400' : 'text-red-700'}`}>
            Riesgo:
          </p>
          <p>{dominantBias.nextCeiling.risk}</p>
        </div>

        {dominantBias.executiveReading && (
          <p className={`text-base ${theme.textMuted}`}>
            📚 <strong>Lectura Ejecutiva:</strong> {dominantBias.executiveReading}
          </p>
        )}
      </div>
    </div>
  );
};

const PivotSection = ({ dominantBias, mondayMission, theme }) => {
  if (!mondayMission && !dominantBias?.pivotActions) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Pill className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Receta para el Lunes
        </h2>
      </div>

      {/* Monday Mission */}
      {mondayMission && (
        <div className={`p-6 rounded-xl border-2 ${
          theme.isDark ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-emerald-500 bg-emerald-50'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{mondayMission.emoji}</span>
            <p className={`text-lg font-bold ${theme.isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
              Misión: {mondayMission.title}
            </p>
          </div>

          <p className={`mb-4 ${theme.text}`}>
            <strong>Trigger:</strong> {mondayMission.trigger}
          </p>

          {mondayMission.script && (
            <blockquote className={`p-4 rounded-lg border-l-4 mb-4 ${
              theme.isDark
                ? 'bg-slate-800 border-emerald-500 text-emerald-300'
                : 'bg-white border-emerald-500 text-emerald-800'
            }`}>
              <MarkdownText className="font-medium">
                {mondayMission.script}
              </MarkdownText>
            </blockquote>
          )}

          {mondayMission.principle && (
            <p className={`text-sm font-medium ${theme.isDark ? 'text-amber-400' : 'text-amber-700'}`}>
              💡 {mondayMission.principle}
            </p>
          )}
        </div>
      )}

      {/* Pivot Actions */}
      {dominantBias?.pivotActions && (
        <div className="space-y-4">
          {dominantBias.pivotActions.map((action, i) => (
            <div key={i} className={`p-5 rounded-xl border ${theme.bgCard} ${theme.border}`}>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-white bg-emerald-500">
                  {i + 1}
                </span>
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${theme.text}`}>
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

      {/* Don'ts */}
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
  );
};

// ============================================
// Markdown Generator
// ============================================

function generateMarkdownV2(analysis) {
  const { accuracy, levelFeedback, diagnosis, totalScore, maxPossibleScore } = analysis;
  const { dominantBias, dynamicEvidence, mondayMission } = diagnosis || {};
  const isSuccess = dominantBias?.type === 'success';

  let md = `# ${dominantBias?.emoji || '📊'} ${dominantBias?.headline || dominantBias?.title}\n\n`;
  md += `**Score:** ${accuracy}% | **Puntos:** ${totalScore}/${maxPossibleScore} | **Nivel:** ${levelFeedback}\n\n`;
  md += `> ${dominantBias?.tagline || dominantBias?.subtitle || ''}\n\n`;
  md += `---\n\n`;

  if (isSuccess) {
    md += `## 🌟 Tus Superpoderes Detectados\n\n`;
    if (dynamicEvidence?.length > 0) {
      dynamicEvidence.forEach(item => {
        md += `- **${item.impact?.type || 'Win'}** (${item.questionId}): ${item.scenario}\n`;
      });
    } else if (dominantBias?.wins) {
      dominantBias.wins.forEach(win => {
        md += `- **${win.type}:** ${win.description}\n`;
      });
    }
    md += `\n`;

    if (dominantBias?.nextCeiling) {
      md += `## ⚠️ Tu Siguiente Techo\n\n`;
      md += `**Desafío:** ${dominantBias.nextCeiling.challenge}\n\n`;
      md += `**Riesgo:** ${dominantBias.nextCeiling.risk}\n\n`;
    }
  } else {
    md += `## 💸 El Costo Real de tu Sesión\n\n`;
    if (dynamicEvidence?.length > 0) {
      dynamicEvidence.forEach(item => {
        md += `- ${item.impact?.emoji || '💸'} **${item.impact?.cost || ''}** ${item.impact?.consequence || ''} (${item.questionId})\n`;
      });
    }
    md += `\n`;

    md += `## 👁️ Tu Punto Ciego: ${dominantBias?.blindSpot?.name || ''}\n\n`;
    md += `${dominantBias?.hardTruth || ''}\n\n`;

    md += `## 💊 Tu Receta para el Lunes\n\n`;
    if (mondayMission) {
      md += `**Misión:** ${mondayMission.title}\n\n`;
      md += `**Trigger:** ${mondayMission.trigger}\n\n`;
      if (mondayMission.script) {
        md += `> ${mondayMission.script.replace(/\n/g, '\n> ')}\n\n`;
      }
    }
  }

  md += `---\n\n`;
  md += `*Simulador Product Lead v2.1*\n`;

  return md;
}

export default LearningScreenV2;
