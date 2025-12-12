import { useState } from 'react';
import { ArrowLeft, Copy, Check, DollarSign, Eye, Pill, AlertTriangle, TrendingUp, BookOpen, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';

/**
 * LearningScreen - Template Fusionado con Evidencia Dinámica
 * v2.2 - Con mejoras de UX: color coding, total damage, donut chart, etc.
 */
export const LearningScreen = ({ analysis, onBack }) => {
  const [copied, setCopied] = useState(false);

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <p className="text-slate-600 dark:text-slate-400">No hay datos de sesión para analizar.</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Header with accent color based on archetype */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isSuccess
          ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-950/90 dark:border-emerald-800'
          : 'bg-orange-50/90 border-orange-200 dark:bg-orange-950/90 dark:border-orange-800'
      }`}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 transition-colors text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                title="Copiar como Markdown"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="text-sm font-medium">{copied ? 'Copiado' : 'Copiar'}</span>
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
        />

        {/* Dynamic Evidence Section */}
        {isSuccess ? (
          <SuccessEvidenceSection
            evidence={dynamicEvidence}
            dominantBias={dominantBias}
          />
        ) : (
          <FailureEvidenceSection
            evidence={dynamicEvidence}
            worstDecisions={worstDecisions}
            totalDamage={totalDamage}
          />
        )}

        {/* Blind Spot / Next Ceiling */}
        {isSuccess ? (
          <NextCeilingSection dominantBias={dominantBias} />
        ) : (
          <BlindSpotSection dominantBias={dominantBias} />
        )}

        {/* The Pivot / Action Plan */}
        <PivotSection
          dominantBias={dominantBias}
          mondayMission={mondayMission}
          sniperResources={sniperResources}
          isSuccess={isSuccess}
        />

        {/* Footer */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-700/50">
          <p className="text-sm text-slate-500 dark:text-slate-500">
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

const HeroSection = ({ dominantBias, accuracy, levelFeedback, isSuccess }) => {
  return (
    <div className="space-y-6">
      {/* Emoji + Badge Row */}
      <div className="flex items-center gap-4">
        <span className="text-6xl">{dominantBias?.emoji || (isSuccess ? '🏆' : '📉')}</span>
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-bold inline-block w-fit ${
            isSuccess
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
              : 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
          }`}>
            {isSuccess ? 'ÉXITO' : 'DIAGNÓSTICO'}
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{levelFeedback}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 dark:text-white">
        {dominantBias?.headline || `Diagnóstico: ${dominantBias?.title}`}
      </h1>

      {/* Score Ring + Tagline */}
      <div className="flex items-center gap-6">
        <ScoreRing percentage={accuracy} isSuccess={isSuccess} />
        <p className="text-lg leading-relaxed flex-1 text-slate-900 dark:text-white">
          {dominantBias?.tagline || dominantBias?.subtitle || dominantBias?.description}
        </p>
      </div>
    </div>
  );
};

const FailureEvidenceSection = ({ evidence, worstDecisions, totalDamage }) => {
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
      <div className="p-6 rounded-2xl bg-red-50 border border-red-200 dark:bg-red-950/50 dark:border-red-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              El Costo Real de tu Sesión
            </h2>
          </div>
        </div>

        {/* Total Damage Counter */}
        {totalDamage > 0 && (
          <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800">
            <p className="text-sm font-medium uppercase tracking-wider mb-1 text-red-600 dark:text-red-400">
              Pérdida Total Estimada
            </p>
            <p className="text-4xl font-black text-red-600 dark:text-red-400">
              {formatCurrency(totalDamage)}
            </p>
          </div>
        )}
      </div>

      {/* Evidence Cards - Receipt Style */}
      <div className="space-y-4">
        {items.map((item, i) => (
          <EvidenceCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const EvidenceCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  // Clean the type for display
  const cleanType = (type) => {
    if (!type) return '';
    return type.split('(')[0].split('/')[0].trim();
  };

  return (
    <div className="rounded-xl overflow-hidden border-l-4 border-red-500 bg-white dark:bg-slate-800/80 shadow-sm">
      {/* Header - Receipt style */}
      <div className="px-5 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.impact?.emoji || '💸'}</span>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {item.category || 'Impacto'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400">{item.questionId}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-red-600 dark:text-red-400">
            {item.impact?.cost || '$100K'}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {item.impact?.consequence || 'en costos'}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {/* Scenario */}
        <p className={`text-sm leading-relaxed text-slate-900 dark:text-white ${!expanded && 'line-clamp-2'}`}>
          {item.scenario}
        </p>

        {item.scenario?.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-indigo-600 dark:text-indigo-400"
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}

        {/* What you chose */}
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10">
          <p className="text-xs font-bold uppercase tracking-wider mb-1 text-red-600 dark:text-red-400">
            ❌ Tu elección
          </p>
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            {cleanType(item.selectedType) || 'Opción incorrecta'}
          </p>
        </div>

        {/* Lesson/Explanation if available */}
        {item.explanation && (
          <div className="p-3 rounded-lg border-l-2 bg-amber-50 border-amber-500 dark:bg-amber-500/10 dark:border-amber-500">
            <p className="text-xs font-bold uppercase tracking-wider mb-1 text-amber-700 dark:text-amber-400">
              💡 Lección
            </p>
            <p className="text-sm text-slate-900 dark:text-white">
              {item.explanation.substring(0, 150)}...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const SuccessEvidenceSection = ({ evidence, dominantBias }) => {
  const items = evidence?.length > 0 ? evidence : dominantBias?.wins;

  if (!items?.length) return null;

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-800">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Tus Superpoderes Detectados
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Has demostrado instinto de liderazgo en situaciones críticas
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border-l-4 border-emerald-500 bg-white dark:bg-slate-800/80 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{item.impact?.emoji || '✅'}</span>
              <div className="flex-1">
                <p className="font-bold text-emerald-600 dark:text-emerald-400">
                  {item.impact?.type || item.type}
                </p>
                <p className="text-sm mt-1 text-slate-900 dark:text-white">
                  {item.scenario || item.description}
                </p>
                {item.correctChoice && (
                  <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
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

const BlindSpotSection = ({ dominantBias }) => {
  if (!dominantBias) return null;

  return (
    <div className="p-8 rounded-2xl bg-purple-50 border border-purple-200 dark:bg-purple-950/30 dark:border-purple-800">
      <div className="flex items-center gap-3 mb-6">
        <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Tu Punto Ciego
        </h2>
      </div>

      {/* Blind Spot Name as Badge */}
      {dominantBias?.blindSpot?.name && (
        <div className="inline-block px-4 py-2 rounded-lg mb-6 bg-purple-100 dark:bg-purple-500/20">
          <p className="text-lg font-bold text-purple-700 dark:text-purple-300">
            "{dominantBias.blindSpot.name}"
          </p>
        </div>
      )}

      <div className="space-y-6 text-lg leading-relaxed text-slate-900 dark:text-white">
        {/* Hard Truth with highlighted key phrases */}
        {dominantBias?.hardTruth && (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownText className="text-slate-900 dark:text-white">
              {dominantBias.hardTruth}
            </MarkdownText>
          </div>
        )}

        {dominantBias?.blindSpot?.description && (
          <p className="p-4 rounded-lg border-l-4 bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-500/10 dark:border-amber-500 dark:text-amber-300">
            ⚠️ {dominantBias.blindSpot.description}
          </p>
        )}

        {/* Concept Comparison - Visual */}
        {dominantBias?.conceptToInternalize && (
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-slate-500">
              Concepto a Internalizar
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex-1 min-w-[140px] p-4 rounded-xl text-center bg-emerald-50 border-2 border-emerald-500 dark:bg-emerald-500/20 dark:border-emerald-500">
                <p className="text-xs uppercase tracking-wider mb-1 text-emerald-600 dark:text-emerald-400">
                  ✓ Adoptar
                </p>
                <p className="font-bold text-emerald-700 dark:text-emerald-300">
                  {dominantBias.conceptToInternalize.name}
                </p>
              </div>
              <span className="text-2xl text-slate-600 dark:text-slate-400">→</span>
              <div className="flex-1 min-w-[140px] p-4 rounded-xl text-center bg-red-50 border-2 border-red-300 border-dashed dark:bg-red-500/20 dark:border-red-500 dark:border-dashed">
                <p className="text-xs uppercase tracking-wider mb-1 text-red-600 dark:text-red-400">
                  ✗ Abandonar
                </p>
                <p className="font-bold line-through text-red-600 dark:text-red-300">
                  {dominantBias.conceptToInternalize.vs}
                </p>
              </div>
            </div>
            {dominantBias.conceptToInternalize.explanation && (
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
                {dominantBias.conceptToInternalize.explanation}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NextCeilingSection = ({ dominantBias }) => {
  if (!dominantBias?.nextCeiling) return null;

  return (
    <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Tu Siguiente Techo
        </h2>
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-amber-700 dark:text-amber-400">
            Desafío
          </p>
          <p className="text-lg text-slate-900 dark:text-white">{dominantBias.nextCeiling.challenge}</p>
        </div>

        <div className="p-5 rounded-xl border-l-4 bg-red-50 border-red-500 dark:bg-red-500/10 dark:border-red-500">
          <p className="text-xs font-bold uppercase tracking-wider mb-2 text-red-700 dark:text-red-400">
            ⚠️ Riesgo
          </p>
          <p className="text-slate-900 dark:text-white">{dominantBias.nextCeiling.risk}</p>
        </div>
      </div>
    </div>
  );
};

const PivotSection = ({ dominantBias, mondayMission, sniperResources, isSuccess }) => {
  // For success archetypes, show executive reading
  if (isSuccess) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Tu Siguiente Lectura
          </h2>
        </div>

        {dominantBias?.executiveReading && (
          <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 dark:bg-indigo-950/30 dark:border-indigo-800">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              📚 {dominantBias.executiveReading}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
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
        <Pill className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Tu Receta para el Lunes
        </h2>
      </div>

      {/* Unified Mission Card */}
      {mondayMission && (
        <div className="rounded-2xl overflow-hidden border-2 border-emerald-500 bg-emerald-50 dark:border-emerald-500/50 dark:bg-emerald-950/30">
          {/* Mission Header */}
          <div className="px-6 py-4 bg-emerald-100 dark:bg-emerald-500/20">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{mondayMission.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Tu Misión
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {mondayMission.title}
                </p>
              </div>
            </div>
          </div>

          {/* Mission Body */}
          <div className="px-6 py-5 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-500 dark:text-slate-500">
                Trigger
              </p>
              <p className="text-slate-900 dark:text-white">{mondayMission.trigger}</p>
            </div>

            {mondayMission.script && (
              <blockquote className="p-4 rounded-lg border-l-4 bg-white border-emerald-500 dark:bg-slate-800 dark:border-emerald-500">
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-emerald-700 dark:text-emerald-400">
                  Di esto literalmente:
                </p>
                <MarkdownText className="font-medium text-slate-900 dark:text-white">
                  {mondayMission.script}
                </MarkdownText>
              </blockquote>
            )}

            {mondayMission.principle && (
              <p className="p-3 rounded-lg text-sm bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
                💡 <strong>Principio:</strong> {mondayMission.principle}
              </p>
            )}
          </div>

          {/* Don'ts Section */}
          {mondayMission?.donts && mondayMission.donts.length > 0 && (
            <div className="px-6 py-4 bg-red-50 dark:bg-red-500/10">
              <p className="text-xs font-bold uppercase tracking-wider mb-3 text-red-700 dark:text-red-400">
                🚫 Qué NO hacer
              </p>
              <ul className="space-y-1 text-sm text-slate-900 dark:text-white">
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
        <div className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-500/20">
              <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider mb-1 text-indigo-600 dark:text-indigo-400">
                📖 Recurso Clave
              </p>
              <p className="font-bold text-slate-900 dark:text-white">
                {sniperResources[0].title}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {sniperResources[0].author} {sniperResources[0].section && `• ${sniperResources[0].section}`}
              </p>
              {sniperResources[0].why && (
                <p className="text-sm mt-2 text-indigo-700 dark:text-indigo-300">
                  → {sniperResources[0].why}
                </p>
              )}
            </div>
            {sniperResources[0].url && (
              <a
                href={sniperResources[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <ExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Pivot Actions */}
      {dominantBias?.pivotActions && (
        <div className="space-y-3">
          {dominantBias.pivotActions.map((action, i) => (
            <div key={i} className="p-4 rounded-xl flex items-start gap-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700/50">
              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-white bg-emerald-500 dark:bg-emerald-600">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {action.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
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
  const { accuracy, levelFeedback, diagnosis, totalScore, maxPossibleScore, timestamp } = analysis;
  const { dominantBias, dynamicEvidence, mondayMission, sniperResources } = diagnosis || {};
  const isSuccess = dominantBias?.type === 'success';

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  let md = `# ${dominantBias?.emoji || '📊'} ${dominantBias?.headline || dominantBias?.title}\n\n`;
  md += `**Score:** ${accuracy}% | **Puntos:** ${totalScore}/${maxPossibleScore} | **Nivel:** ${levelFeedback}\n\n`;
  md += `> ${dominantBias?.tagline || dominantBias?.subtitle || ''}\n\n`;
  md += `---\n\n`;

  if (isSuccess) {
    // === SUCCESS PATH ===
    md += `## 🌟 Tus Superpoderes Detectados\n\n`;
    if (dynamicEvidence?.length > 0) {
      dynamicEvidence.forEach(item => {
        md += `### ${item.impact?.emoji || '✅'} ${item.impact?.type || 'Win'}\n`;
        md += `- **Situación:** ${item.scenario}\n`;
        if (item.correctChoice) md += `- **Tu decisión:** ${item.correctChoice}\n`;
        if (item.impact?.saved) md += `- **Impacto:** ${item.impact.saved} ${item.impact.avoided ? `(evitaste: ${item.impact.avoided})` : ''}\n`;
        md += `\n`;
      });
    } else if (dominantBias?.wins) {
      dominantBias.wins.forEach(win => {
        md += `- **${win.type}:** ${win.description}\n`;
      });
      md += `\n`;
    }

    if (dominantBias?.nextCeiling) {
      md += `## ⚠️ Tu Siguiente Techo\n\n`;
      md += `**Desafío:** ${dominantBias.nextCeiling.challenge}\n\n`;
      md += `**Riesgo:** ${dominantBias.nextCeiling.risk}\n\n`;
    }

    if (dominantBias?.executiveReading) {
      md += `## 📚 Lectura Recomendada\n\n`;
      md += `${dominantBias.executiveReading}\n\n`;
    }

  } else {
    // === FAILURE PATH ===

    // Evidence section
    md += `## 💸 El Costo Real de tu Sesión\n\n`;
    if (dynamicEvidence?.length > 0) {
      dynamicEvidence.forEach(item => {
        md += `### ${item.impact?.emoji || '💸'} ${item.impact?.cost || ''} ${item.impact?.consequence || ''}\n`;
        md += `- **Situación (${item.questionId}):** ${item.scenario}\n`;
        if (item.selectedType) md += `- **Tu elección:** ${item.selectedType}\n`;
        if (item.explanation) md += `- **Lección:** ${item.explanation.substring(0, 150)}...\n`;
        md += `\n`;
      });
    }

    // Blind spot section
    md += `## 👁️ Tu Punto Ciego: "${dominantBias?.blindSpot?.name || 'Patrón Detectado'}"\n\n`;
    if (dominantBias?.hardTruth) {
      md += `${dominantBias.hardTruth}\n\n`;
    }
    if (dominantBias?.blindSpot?.description) {
      md += `> ⚠️ ${dominantBias.blindSpot.description}\n\n`;
    }

    // Concept to internalize
    if (dominantBias?.conceptToInternalize) {
      md += `### Concepto a Internalizar\n\n`;
      md += `✓ **Adoptar:** ${dominantBias.conceptToInternalize.name}\n`;
      md += `✗ **Abandonar:** ${dominantBias.conceptToInternalize.vs}\n`;
      if (dominantBias.conceptToInternalize.explanation) {
        md += `\n${dominantBias.conceptToInternalize.explanation}\n`;
      }
      md += `\n`;
    }

    // Monday mission
    md += `## 💊 Tu Receta para el Lunes\n\n`;
    if (mondayMission) {
      md += `### ${mondayMission.emoji || '🎯'} ${mondayMission.title}\n\n`;
      md += `**Trigger:** ${mondayMission.trigger}\n\n`;
      if (mondayMission.script) {
        md += `**Di esto literalmente:**\n`;
        md += `> ${mondayMission.script.replace(/\n/g, '\n> ')}\n\n`;
      }
      if (mondayMission.principle) {
        md += `💡 **Principio:** ${mondayMission.principle}\n\n`;
      }
      if (mondayMission.donts?.length > 0) {
        md += `**🚫 Qué NO hacer:**\n`;
        mondayMission.donts.forEach(dont => {
          md += `- ✗ ${dont}\n`;
        });
        md += `\n`;
      }
    }

    // Pivot actions
    if (dominantBias?.pivotActions?.length > 0) {
      md += `### Acciones de Pivote\n\n`;
      dominantBias.pivotActions.forEach((action, i) => {
        md += `${i + 1}. **${action.title}** - ${action.description}\n`;
      });
      md += `\n`;
    }

    // Resource
    if (sniperResources?.[0]) {
      md += `## 📖 Recurso Clave\n\n`;
      md += `**${sniperResources[0].title}** - ${sniperResources[0].author}`;
      if (sniperResources[0].section) md += ` (${sniperResources[0].section})`;
      md += `\n`;
      if (sniperResources[0].why) md += `→ ${sniperResources[0].why}\n`;
      if (sniperResources[0].url) md += `🔗 ${sniperResources[0].url}\n`;
      md += `\n`;
    }
  }

  md += `---\n\n`;
  md += `*Simulador Product Lead • ${formatDate(timestamp)}*\n`;

  return md;
}

export default LearningScreen;
