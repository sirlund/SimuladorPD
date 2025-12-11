import { useState } from 'react';
import { ArrowLeft, Copy, Check, DollarSign, Eye, Pill, AlertTriangle, TrendingUp, Share2, BookOpen, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

/**
 * LearningScreenV2 - Template Fusionado con Evidencia Dinámica
 * v2.2 - Con mejoras de UX: color coding, total damage, donut chart, etc.
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
    dynamicEvidence,
    sniperResources
  } = diagnosis || {};

  const isSuccess = dominantBias?.type === 'success';

  // Color scheme based on archetype type
  const accentColor = isSuccess
    ? { light: 'emerald', dark: 'emerald' }
    : { light: 'orange', dark: 'orange' };

  const handleCopyMarkdown = async () => {
    const markdown = generateMarkdownV2(analysis);
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const text = `${dominantBias?.emoji} Soy "${dominantBias?.title}" según el Simulador de Product Lead\n\nScore: ${accuracy}%\n\n${dominantBias?.tagline}\n\n🎮 Juega en: simulador.com`;
    if (navigator.share) {
      await navigator.share({ text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('Resultado copiado al portapapeles');
    }
  };

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate total damage from evidence
  const totalDamage = (dynamicEvidence || []).reduce((sum, item) => {
    const cost = item.impact?.cost || '';
    const match = cost.match(/\$?([\d,]+)K?/);
    if (match) {
      const num = parseInt(match[1].replace(',', ''));
      return sum + (cost.includes('K') ? num * 1000 : num);
    }
    return sum;
  }, 0);

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header with accent color based on archetype */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isSuccess
          ? theme.isDark ? 'bg-emerald-950/90 border-emerald-800' : 'bg-emerald-50/90 border-emerald-200'
          : theme.isDark ? 'bg-orange-950/90 border-orange-800' : 'bg-orange-50/90 border-orange-200'
      }`}>
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
                isSuccess
                  ? theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                  : theme.isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
              }`}>
                v2.2
              </span>
              <button
                onClick={handleShare}
                className={`p-2 rounded-lg border transition-colors ${theme.btnSecondary}`}
                title="Compartir resultado"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyMarkdown}
                className={`p-2 rounded-lg border transition-colors ${theme.btnSecondary}`}
                title="Copiar como Markdown"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section with Score Ring */}
        <HeroSection
          dominantBias={dominantBias}
          accuracy={accuracy}
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
            totalDamage={totalDamage}
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
        <PivotSection
          dominantBias={dominantBias}
          mondayMission={mondayMission}
          sniperResources={sniperResources}
          isSuccess={isSuccess}
          theme={theme}
        />

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

// Donut Chart Component
const ScoreRing = ({ percentage, isSuccess, size = 120 }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 80) return { stroke: '#10b981', text: 'text-emerald-500' }; // green
    if (percentage >= 60) return { stroke: '#f59e0b', text: 'text-amber-500' }; // yellow
    return { stroke: '#ef4444', text: 'text-red-500' }; // red
  };

  const color = getColor();

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-200 dark:text-slate-700"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color.stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-black ${color.text}`}>{percentage}%</span>
      </div>
    </div>
  );
};

const HeroSection = ({ dominantBias, accuracy, levelFeedback, isSuccess, theme }) => {
  return (
    <div className="space-y-6">
      {/* Emoji + Badge Row */}
      <div className="flex items-center gap-4">
        <span className="text-6xl">{dominantBias?.emoji || (isSuccess ? '🏆' : '📉')}</span>
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-bold inline-block w-fit ${
            isSuccess
              ? theme.isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
              : theme.isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
          }`}>
            {isSuccess ? 'ÉXITO' : 'DIAGNÓSTICO'}
          </span>
          <span className={`text-sm font-medium ${theme.textMuted}`}>{levelFeedback}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className={`text-3xl md:text-4xl font-black leading-tight ${theme.text}`}>
        {dominantBias?.headline || `Diagnóstico: ${dominantBias?.title}`}
      </h1>

      {/* Score Ring + Tagline */}
      <div className="flex items-center gap-6">
        <ScoreRing percentage={accuracy} isSuccess={isSuccess} />
        <p className={`text-lg leading-relaxed flex-1 ${theme.text}`}>
          {dominantBias?.tagline || dominantBias?.subtitle || dominantBias?.description}
        </p>
      </div>
    </div>
  );
};

const FailureEvidenceSection = ({ evidence, worstDecisions, totalDamage, theme }) => {
  const items = evidence?.length > 0 ? evidence : worstDecisions;

  if (!items?.length) return null;

  const formatCurrency = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${Math.round(num / 1000)}K`;
    return `$${num}`;
  };

  return (
    <div className="space-y-6">
      {/* Header with Total Damage */}
      <div className={`p-6 rounded-2xl ${
        theme.isDark ? 'bg-red-950/50 border border-red-800' : 'bg-red-50 border border-red-200'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <DollarSign className={`w-8 h-8 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`} />
            <h2 className={`text-2xl font-black ${theme.text}`}>
              El Costo Real de tu Sesión
            </h2>
          </div>
        </div>

        {/* Total Damage Counter */}
        {totalDamage > 0 && (
          <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800">
            <p className={`text-sm font-medium uppercase tracking-wider mb-1 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
              Pérdida Total Estimada
            </p>
            <p className={`text-4xl font-black ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
              {formatCurrency(totalDamage)}
            </p>
          </div>
        )}
      </div>

      {/* Evidence Cards - Receipt Style */}
      <div className="space-y-4">
        {items.map((item, i) => (
          <EvidenceCard key={i} item={item} theme={theme} />
        ))}
      </div>
    </div>
  );
};

const EvidenceCard = ({ item, theme }) => {
  const [expanded, setExpanded] = useState(false);

  // Clean the type for display
  const cleanType = (type) => {
    if (!type) return '';
    return type.split('(')[0].split('/')[0].trim();
  };

  return (
    <div className={`rounded-xl overflow-hidden border-l-4 border-red-500 ${
      theme.isDark ? 'bg-slate-800/80' : 'bg-white'
    } shadow-sm`}>
      {/* Header - Receipt style */}
      <div className={`px-5 py-4 flex items-center justify-between ${
        theme.isDark ? 'bg-slate-800' : 'bg-slate-50'
      }`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.impact?.emoji || '💸'}</span>
          <div>
            <span className={`text-xs font-medium uppercase tracking-wider ${theme.textSubtle}`}>
              {item.category || 'Impacto'}
            </span>
            <p className={`text-xs ${theme.textMuted}`}>{item.questionId}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-2xl font-black ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
            {item.impact?.cost || '$100K'}
          </p>
          <p className={`text-xs ${theme.textMuted}`}>
            {item.impact?.consequence || 'en costos'}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {/* Scenario */}
        <p className={`text-sm leading-relaxed ${theme.text} ${!expanded && 'line-clamp-2'}`}>
          {item.scenario}
        </p>

        {item.scenario?.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`text-xs font-medium ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}

        {/* What you chose */}
        <div className={`p-3 rounded-lg ${theme.isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
            ❌ Tu elección
          </p>
          <p className={`text-sm font-medium ${theme.text}`}>
            {cleanType(item.selectedType) || 'Opción incorrecta'}
          </p>
        </div>

        {/* Lesson/Explanation if available */}
        {item.explanation && (
          <div className={`p-3 rounded-lg border-l-2 ${
            theme.isDark ? 'bg-amber-500/10 border-amber-500' : 'bg-amber-50 border-amber-500'
          }`}>
            <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${theme.isDark ? 'text-amber-400' : 'text-amber-700'}`}>
              💡 Lección
            </p>
            <p className={`text-sm ${theme.text}`}>
              {item.explanation.substring(0, 150)}...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const SuccessEvidenceSection = ({ evidence, dominantBias, theme }) => {
  const items = evidence?.length > 0 ? evidence : dominantBias?.wins;

  if (!items?.length) return null;

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl ${
        theme.isDark ? 'bg-emerald-950/50 border border-emerald-800' : 'bg-emerald-50 border border-emerald-200'
      }`}>
        <div className="flex items-center gap-3">
          <TrendingUp className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <div>
            <h2 className={`text-2xl font-black ${theme.text}`}>
              Tus Superpoderes Detectados
            </h2>
            <p className={`text-sm ${theme.textMuted}`}>
              Has demostrado instinto de liderazgo en situaciones críticas
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl border-l-4 border-emerald-500 ${
              theme.isDark ? 'bg-slate-800/80' : 'bg-white'
            } shadow-sm`}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{item.impact?.emoji || '✅'}</span>
              <div className="flex-1">
                <p className={`font-bold ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {item.impact?.type || item.type}
                </p>
                <p className={`text-sm mt-1 ${theme.text}`}>
                  {item.scenario || item.description}
                </p>
                {item.correctChoice && (
                  <p className={`text-sm mt-2 ${theme.textMuted}`}>
                    ✓ Elegiste: <strong>{item.correctChoice}</strong>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlindSpotSection = ({ dominantBias, theme }) => {
  if (!dominantBias) return null;

  return (
    <div className={`p-8 rounded-2xl ${
      theme.isDark ? 'bg-purple-950/30 border border-purple-800' : 'bg-purple-50 border border-purple-200'
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <Eye className={`w-8 h-8 ${theme.isDark ? 'text-purple-400' : 'text-purple-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Punto Ciego
        </h2>
      </div>

      {/* Blind Spot Name as Badge */}
      {dominantBias?.blindSpot?.name && (
        <div className={`inline-block px-4 py-2 rounded-lg mb-6 ${
          theme.isDark ? 'bg-purple-500/20' : 'bg-purple-100'
        }`}>
          <p className={`text-lg font-bold ${theme.isDark ? 'text-purple-300' : 'text-purple-700'}`}>
            "{dominantBias.blindSpot.name}"
          </p>
        </div>
      )}

      <div className={`space-y-6 text-lg leading-relaxed ${theme.text}`}>
        {/* Hard Truth with highlighted key phrases */}
        {dominantBias?.hardTruth && (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownText className={theme.text}>
              {dominantBias.hardTruth}
            </MarkdownText>
          </div>
        )}

        {dominantBias?.blindSpot?.description && (
          <p className={`p-4 rounded-lg border-l-4 ${
            theme.isDark ? 'bg-amber-500/10 border-amber-500 text-amber-300' : 'bg-amber-50 border-amber-500 text-amber-800'
          }`}>
            ⚠️ {dominantBias.blindSpot.description}
          </p>
        )}

        {/* Concept Comparison - Visual */}
        {dominantBias?.conceptToInternalize && (
          <div className={`p-6 rounded-xl ${theme.isDark ? 'bg-slate-800' : 'bg-white'} shadow-sm`}>
            <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.textSubtle}`}>
              Concepto a Internalizar
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className={`flex-1 min-w-[140px] p-4 rounded-xl text-center ${
                theme.isDark ? 'bg-emerald-500/20 border-2 border-emerald-500' : 'bg-emerald-50 border-2 border-emerald-500'
              }`}>
                <p className={`text-xs uppercase tracking-wider mb-1 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  ✓ Adoptar
                </p>
                <p className={`font-bold ${theme.isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                  {dominantBias.conceptToInternalize.name}
                </p>
              </div>
              <span className={`text-2xl ${theme.textMuted}`}>→</span>
              <div className={`flex-1 min-w-[140px] p-4 rounded-xl text-center ${
                theme.isDark ? 'bg-red-500/20 border-2 border-red-500 border-dashed' : 'bg-red-50 border-2 border-red-300 border-dashed'
              }`}>
                <p className={`text-xs uppercase tracking-wider mb-1 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
                  ✗ Abandonar
                </p>
                <p className={`font-bold line-through ${theme.isDark ? 'text-red-300' : 'text-red-600'}`}>
                  {dominantBias.conceptToInternalize.vs}
                </p>
              </div>
            </div>
            {dominantBias.conceptToInternalize.explanation && (
              <p className={`mt-4 text-base ${theme.textMuted}`}>
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
    <div className={`p-8 rounded-2xl ${
      theme.isDark ? 'bg-amber-950/30 border border-amber-800' : 'bg-amber-50 border border-amber-200'
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className={`w-8 h-8 ${theme.isDark ? 'text-amber-400' : 'text-amber-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Siguiente Techo
        </h2>
      </div>

      <div className="space-y-4">
        <div className={`p-5 rounded-xl ${theme.isDark ? 'bg-slate-800' : 'bg-white'} shadow-sm`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme.isDark ? 'text-amber-400' : 'text-amber-700'}`}>
            Desafío
          </p>
          <p className={`text-lg ${theme.text}`}>{dominantBias.nextCeiling.challenge}</p>
        </div>

        <div className={`p-5 rounded-xl border-l-4 ${
          theme.isDark ? 'bg-red-500/10 border-red-500' : 'bg-red-50 border-red-500'
        }`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme.isDark ? 'text-red-400' : 'text-red-700'}`}>
            ⚠️ Riesgo
          </p>
          <p className={theme.text}>{dominantBias.nextCeiling.risk}</p>
        </div>
      </div>
    </div>
  );
};

const PivotSection = ({ dominantBias, mondayMission, sniperResources, isSuccess, theme }) => {
  // For success archetypes, show executive reading
  if (isSuccess) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className={`w-8 h-8 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
          <h2 className={`text-2xl font-black ${theme.text}`}>
            Tu Siguiente Lectura
          </h2>
        </div>

        {dominantBias?.executiveReading && (
          <div className={`p-6 rounded-xl ${theme.isDark ? 'bg-indigo-950/30 border border-indigo-800' : 'bg-indigo-50 border border-indigo-200'}`}>
            <p className={`text-lg font-bold ${theme.text}`}>
              📚 {dominantBias.executiveReading}
            </p>
            <p className={`mt-2 text-sm ${theme.textMuted}`}>
              Lectura recomendada para tu siguiente nivel de liderazgo.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (!mondayMission && !dominantBias?.pivotActions) return null;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Pill className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
        <h2 className={`text-2xl font-black ${theme.text}`}>
          Tu Receta para el Lunes
        </h2>
      </div>

      {/* Unified Mission Card */}
      {mondayMission && (
        <div className={`rounded-2xl overflow-hidden border-2 ${
          theme.isDark ? 'border-emerald-500/50 bg-emerald-950/30' : 'border-emerald-500 bg-emerald-50'
        }`}>
          {/* Mission Header */}
          <div className={`px-6 py-4 ${theme.isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'}`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{mondayMission.emoji}</span>
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider ${theme.isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  Tu Misión
                </p>
                <p className={`text-xl font-bold ${theme.text}`}>
                  {mondayMission.title}
                </p>
              </div>
            </div>
          </div>

          {/* Mission Body */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${theme.textSubtle}`}>
                Trigger
              </p>
              <p className={theme.text}>{mondayMission.trigger}</p>
            </div>

            {mondayMission.script && (
              <blockquote className={`p-4 rounded-lg border-l-4 ${
                theme.isDark
                  ? 'bg-slate-800 border-emerald-500'
                  : 'bg-white border-emerald-500'
              }`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  Di esto literalmente:
                </p>
                <MarkdownText className={`font-medium ${theme.text}`}>
                  {mondayMission.script}
                </MarkdownText>
              </blockquote>
            )}

            {mondayMission.principle && (
              <p className={`p-3 rounded-lg text-sm ${
                theme.isDark ? 'bg-amber-500/10 text-amber-300' : 'bg-amber-50 text-amber-800'
              }`}>
                💡 <strong>Principio:</strong> {mondayMission.principle}
              </p>
            )}
          </div>

          {/* Don'ts Section */}
          {mondayMission?.donts && mondayMission.donts.length > 0 && (
            <div className={`px-6 py-4 ${theme.isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
              <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                theme.isDark ? 'text-red-400' : 'text-red-700'
              }`}>
                🚫 Qué NO hacer
              </p>
              <ul className={`space-y-1 text-sm ${theme.text}`}>
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

      {/* Resource Card */}
      {sniperResources?.[0] && (
        <div className={`p-5 rounded-xl ${theme.isDark ? 'bg-slate-800' : 'bg-white'} shadow-sm border ${theme.border}`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${theme.isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'}`}>
              <BookOpen className={`w-6 h-6 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                📖 Recurso Clave
              </p>
              <p className={`font-bold ${theme.text}`}>
                {sniperResources[0].title}
              </p>
              <p className={`text-sm ${theme.textMuted}`}>
                {sniperResources[0].author} {sniperResources[0].section && `• ${sniperResources[0].section}`}
              </p>
              {sniperResources[0].why && (
                <p className={`text-sm mt-2 ${theme.isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  → {sniperResources[0].why}
                </p>
              )}
            </div>
            {sniperResources[0].url && (
              <a
                href={sniperResources[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme.isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                }`}
              >
                <ExternalLink className={`w-5 h-5 ${theme.textMuted}`} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Pivot Actions */}
      {dominantBias?.pivotActions && (
        <div className="space-y-3">
          {dominantBias.pivotActions.map((action, i) => (
            <div key={i} className={`p-4 rounded-xl flex items-start gap-4 ${theme.isDark ? 'bg-slate-800' : 'bg-white'} shadow-sm border ${theme.border}`}>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-white ${
                theme.isDark ? 'bg-emerald-600' : 'bg-emerald-500'
              }`}>
                {i + 1}
              </span>
              <div>
                <h3 className={`font-bold ${theme.text}`}>
                  {action.title}
                </h3>
                <p className={`text-sm ${theme.textMuted}`}>
                  {action.description}
                </p>
              </div>
            </div>
          ))}
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
  md += `*Simulador Product Lead v2.2*\n`;

  return md;
}

export default LearningScreenV2;
