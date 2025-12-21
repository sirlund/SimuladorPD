import { useState } from 'react';
import { ArrowLeft, Copy, Check, DollarSign, Eye, Pill, AlertTriangle, TrendingUp, BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MarkdownText } from '../ui/MarkdownText';
import { allQuestions } from '../../data/questions';

/**
 * LearningScreen - Leadership Gap Report
 * v3.0 - Dark-first design with floating white cards
 */
export const LearningScreen = ({ analysis, onBack }) => {
  const [copied, setCopied] = useState(false);

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#050511]">
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

  // Result states based on Leadership Maturity Index
  const isSuccess = accuracy >= 88;              // Strategic Lead+
  const isAlmost = accuracy >= 83 && accuracy < 88; // Operational Lead (base success)
  const isGap = accuracy >= 70 && accuracy < 83;    // Senior Craftsperson (deal breaker)
  const isFail = accuracy < 70;                     // Tactical Senior / Execution Focused

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

  // Leadership Maturity Index - Get detected level based on accuracy
  // Returns both 'label' (technical level for cards) and 'profile' (descriptive for title)
  const getDetectedLevel = () => {
    if (accuracy >= 96) return { label: 'Venture Architect', profile: 'The Architect', subtitle: 'Equilibrio perfecto entre ejecución y visión de negocio' };
    if (accuracy >= 88) return { label: 'Strategic Lead', profile: 'The Strategist', subtitle: 'Conectas diseño con impacto en revenue' };
    if (accuracy >= 83) return { label: 'Operational Lead', profile: 'The Operator', subtitle: 'Ejecución sólida, oportunidad en pensamiento estratégico' };
    if (accuracy >= 70) return { label: 'Senior Craftsperson', profile: 'The Craftsman', subtitle: 'Excelente técnicamente, gaps en visión de negocio' };
    if (accuracy >= 50) return { label: 'Tactical Senior', profile: 'The Tactician', subtitle: 'Atrapado en la operación del día a día' };
    return { label: 'Execution Focused', profile: 'The Executor', subtitle: 'Mentalidad de Task Completer' };
  };

  // Determine result type: success, almost, or fail
  const getResultType = () => {
    if (accuracy >= 88) return 'success';      // Strategic Lead+
    if (accuracy >= 83) return 'almost';       // Operational Lead (base success)
    if (accuracy >= 70) return 'gap';          // Senior Craftsperson (deal breaker zone)
    return 'fail';                             // Tactical Senior / Execution Focused
  };

  const resultType = getResultType();

  // Get the worst performing block for "Deal Breaker" message
  const getWorstBlock = () => {
    // Try to get from diagnosis data - only if items have category
    if (dynamicEvidence?.length > 0) {
      const categoryErrors = {};
      dynamicEvidence.forEach(item => {
        if (item.category) {
          categoryErrors[item.category] = (categoryErrors[item.category] || 0) + 1;
        }
      });
      const entries = Object.entries(categoryErrors);
      if (entries.length > 0) {
        const worst = entries.sort((a, b) => b[1] - a[1])[0];
        return worst[0];
      }
    }
    // Fallback to archetype-based
    const title = dominantBias?.title?.toLowerCase() || '';
    if (title.includes('order') || title.includes('taker')) return 'Autonomía';
    if (title.includes('craft') || title.includes('obsessive')) return 'Visión de Negocio';
    if (title.includes('process') || title.includes('bureaucrat')) return 'Agilidad';
    if (title.includes('lone') || title.includes('wolf')) return 'Delegación';
    if (title.includes('consensus') || title.includes('people')) return 'Toma de Decisiones';
    if (title.includes('metric') || title.includes('data')) return 'Intuición Cualitativa';
    if (title.includes('innovation') || title.includes('shiny')) return 'Ejecución';
    return 'Estrategia';
  };

  // Get third card value based on result type
  const getThirdCardData = () => {
    const level = getDetectedLevel();

    // Top level - max achieved
    if (accuracy >= 96) {
      return { label: 'Status', value: 'C-Suite Ready' };
    }

    // Success: show next step
    if (resultType === 'success') {
      return { label: 'Objetivo', value: accuracy >= 88 ? 'C-Suite' : 'Strategic Lead' };
    }

    // Almost (Operational Lead 83-87%): show what's missing
    if (resultType === 'almost') {
      return { label: 'Para Escalar', value: getGrowthArea() };
    }

    // Gap zone (Senior Craftsperson 70-82%): show deal breaker
    if (resultType === 'gap') {
      return { label: 'Deal Breaker', value: getWorstBlock() };
    }

    // Fail: show growth area
    return { label: 'Cambio de Chip', value: getGrowthArea() };
  };

  // Get growth area based on archetype
  const getGrowthArea = () => {
    // Try to extract from archetype data first
    if (dominantBias?.conceptToInternalize?.name) {
      const name = dominantBias.conceptToInternalize.name;
      return name.length > 20 ? name.split(' ').slice(0, 2).join(' ') : name;
    }
    if (dominantBias?.blindSpot?.name) {
      const name = dominantBias.blindSpot.name;
      return name.length > 20 ? name.split(' ').slice(0, 2).join(' ') : name;
    }
    // Fallback based on archetype title
    const title = dominantBias?.title?.toLowerCase() || '';
    if (title.includes('craft') || title.includes('perfectionist')) return 'Business Impact';
    if (title.includes('consensus') || title.includes('people')) return 'Decisive Action';
    if (title.includes('metric') || title.includes('data')) return 'Qualitative Insight';
    if (title.includes('innovation') || title.includes('shiny')) return 'Execution Focus';
    if (title.includes('scope') || title.includes('creep')) return 'Prioritization';
    return 'Strategic Growth';
  };

  const thirdCard = getThirdCardData();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050511] dark:bg-[radial-gradient(circle_at_15%_50%,rgba(255,126,95,0.08),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(254,180,123,0.08),transparent_25%)]">
      {/* Floating Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-transparent border-b border-slate-200 dark:border-white/10">
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
                className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 dark:hover:bg-white/10"
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
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* Hero Section */}
        <HeroSection
          dominantBias={dominantBias}
          accuracy={accuracy}
          level={getDetectedLevel()}
          thirdCard={thirdCard}
          isSuccess={isSuccess}
          isAlmost={isAlmost}
          isGap={isGap}
        />

        {/* Dynamic Evidence Section */}
        {(isSuccess || isAlmost) ? (
          <SuccessEvidenceSection
            evidence={dynamicEvidence}
            dominantBias={dominantBias}
          />
        ) : (
          <FailureEvidenceSection
            evidence={dynamicEvidence}
            worstDecisions={worstDecisions}
            totalDamage={totalDamage}
            isGap={isGap}
          />
        )}

        {/* Superpower / Blind Spot */}
        {(isSuccess || isAlmost) ? (
          <SuperpowerSection dominantBias={dominantBias} />
        ) : (
          <BlindSpotSection dominantBias={dominantBias} isGap={isGap} />
        )}

        {/* The Pivot / Action Plan */}
        <PivotSection
          dominantBias={dominantBias}
          mondayMission={mondayMission}
          sniperResources={sniperResources}
          isSuccess={isSuccess}
          isAlmost={isAlmost}
          isGap={isGap}
        />

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-sm text-slate-500 dark:text-slate-500 opacity-70">
            Este reporte es privado. Úsalo para preparar tu siguiente 1:1.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-600 mt-2">
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

// Stats Card Component for glassmorphism grid
const StatCard = ({ label, value, isHighlighted = false, isSuccess = false, isAlmost = false, isGap = false }) => {
  const getCardClasses = () => {
    if (!isHighlighted) return 'bg-white/80 border-slate-200 dark:bg-white/5 dark:border-white/10';
    if (isSuccess) return 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 dark:from-teal-500/10 dark:to-cyan-500/10 dark:border-teal-500/30';
    if (isAlmost) return 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 dark:from-emerald-500/10 dark:to-teal-500/10 dark:border-emerald-500/30';
    if (isGap) return 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 dark:from-amber-500/10 dark:to-yellow-500/10 dark:border-amber-500/30';
    return 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 dark:from-orange-500/10 dark:to-red-500/10 dark:border-orange-500/30';
  };

  const getValueClasses = () => {
    const sizeClass = isHighlighted ? 'text-5xl' : 'text-2xl';
    if (!isHighlighted) return `${sizeClass} text-slate-900 dark:text-white`;
    if (isSuccess) return `${sizeClass} bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent`;
    if (isAlmost) return `${sizeClass} bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent`;
    if (isGap) return `${sizeClass} bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent`;
    return `${sizeClass} bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent`;
  };

  return (
    <div className={`flex flex-col justify-between text-center p-5 rounded-2xl border transition-transform hover:-translate-y-0.5 ${getCardClasses()} backdrop-blur-xl min-h-[120px]`}>
      <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className={`font-bold leading-tight ${getValueClasses()}`}>
        {value}
      </p>
      <div className="h-0" /> {/* Spacer for vertical centering */}
    </div>
  );
};

const HeroSection = ({ dominantBias, accuracy, level, thirdCard, isSuccess, isAlmost, isGap }) => {
  // Badge text based on result
  const getBadgeText = () => {
    if (isSuccess) return '🏆 Excelencia';
    if (isAlmost) return '✅ Éxito Base';
    if (isGap) return '⚠️ Brechas Detectadas';
    return '❌ Cambio de Mentalidad';
  };

  // Badge colors based on result type
  const getBadgeClasses = () => {
    if (isSuccess) return 'bg-teal-500/15 text-teal-600 border-teal-500/30 dark:text-teal-400';
    if (isAlmost) return 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30 dark:text-emerald-400';
    if (isGap) return 'bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400';
    return 'bg-red-500/15 text-red-600 border-red-500/30 dark:text-red-400';
  };

  // Gradient colors for level label
  const getLevelGradient = () => {
    if (isSuccess) return 'bg-gradient-to-r from-teal-400 to-cyan-400';
    if (isAlmost) return 'bg-gradient-to-r from-emerald-400 to-teal-400';
    if (isGap) return 'bg-gradient-to-r from-amber-400 to-yellow-400';
    return 'bg-gradient-to-r from-orange-400 to-red-400';
  };

  return (
    <header className="text-center space-y-8">
      {/* Result Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide border backdrop-blur-lg ${getBadgeClasses()}`}>
        {getBadgeText()}
      </div>

      {/* Main Title: Leadership Profile */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
          Tu perfil:{' '}
          <br className="hidden sm:block" />
          <span className={`${getLevelGradient()} bg-clip-text text-transparent`}>
            "{level.profile}"
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {level.subtitle}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mt-12">
        <StatCard
          label="Madurez"
          value={level.label}
        />
        <StatCard
          label="Performance"
          value={`${accuracy}%`}
          isHighlighted
          isSuccess={isSuccess}
          isAlmost={isAlmost}
          isGap={isGap}
        />
        <StatCard
          label={thirdCard.label}
          value={thirdCard.value}
        />
      </div>
    </header>
  );
};

const FailureEvidenceSection = ({ evidence, worstDecisions, totalDamage }) => {
  const items = evidence?.length > 0 ? evidence : worstDecisions;

  if (!items?.length) return null;

  const formatCurrency = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${Math.round(num / 1000).toLocaleString()}K`;
    return `$${num.toLocaleString()}`;
  };

  // Calculate runway equivalent (assuming $110K/month burn)
  const runwayMonths = totalDamage > 0 ? (totalDamage / 110000).toFixed(1) : 0;

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">💸</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          El Costo de tu Liderazgo
        </h2>
      </div>

      {/* White Card Container */}
      <div className="bg-white dark:bg-white rounded-3xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Total Loss Header */}
        {totalDamage > 0 && (
          <div className="text-center pb-8 mb-8 border-b border-slate-200">
            <p className="text-[13px] font-bold text-slate-400 tracking-wider mb-3">
              PÉRDIDA TOTAL ESTIMADA
            </p>
            <p className="text-6xl font-extrabold text-red-500 tracking-tight font-mono">
              -{formatCurrency(totalDamage)}
            </p>
            <p className="mt-3 text-sm text-slate-500 bg-red-50 inline-block px-3 py-1 rounded-full">
              Equivalente a {runwayMonths} meses de runway
            </p>
          </div>
        )}

        {/* Evidence Items */}
        <div className="divide-y divide-slate-100">
          {items.map((item, i) => (
            <EvidenceItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EvidenceItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  // Find the original question by ID (could be questionId or id depending on source)
  const questionId = item.questionId || item.id || item.displayId;
  const originalQuestion = allQuestions.find(q =>
    q.displayId === questionId || q.id === questionId
  );

  // Title: Category from original question
  const title = originalQuestion?.category || 'Decisión';

  // Description: What the user chose (summarized from their selected option)
  const getDecisionSummary = () => {
    // Priority 1: Use decisionSummary from the selected option (if available)
    if (item.selectedOptionId && originalQuestion?.options) {
      const selectedOption = originalQuestion.options.find(o => o.id === item.selectedOptionId);
      if (selectedOption?.decisionSummary) {
        return selectedOption.decisionSummary;
      }
      // Fallback: clean markdown and truncate text
      if (selectedOption?.text) {
        const cleanText = selectedOption.text.replace(/\*\*/g, '');
        const firstSentence = cleanText.split('.')[0];
        return firstSentence.length > 120 ? firstSentence.substring(0, 117) + '...' : firstSentence + '.';
      }
    }
    // Fallback: use consequence from impact or a short summary
    if (item.impact?.consequence) {
      return item.impact.consequence;
    }
    // Last fallback - generic message based on category
    return `Decisión subóptima en ${title}.`;
  };

  const description = getDecisionSummary();

  return (
    <div className="py-5 first:pt-0 last:pb-0">
      <div className="flex justify-between items-start gap-4">
        {/* Left: Title & Description */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-slate-900 mb-1.5">
            {title}
          </h4>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            {description}
          </p>

          {/* Expand button - only if original question exists */}
          {originalQuestion && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Ocultar contexto
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Ver pregunta original
                </>
              )}
            </button>
          )}

          {/* Expanded: Scenario + Question */}
          {expanded && originalQuestion && (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                Contexto
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {originalQuestion.scenario}
              </p>
              <p className="text-sm font-medium text-slate-900">
                {originalQuestion.question}
              </p>
            </div>
          )}
        </div>

        {/* Right: Tag & Cost */}
        <div className="text-right flex-shrink-0">
          <a
            href={`/debug/screens?q=${questionId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-mono bg-slate-100 text-slate-500 px-2.5 py-1.5 rounded-md mb-1.5 hover:bg-slate-200 transition-colors"
          >
            {questionId || 'ERR-01'}
          </a>
          <p className="text-lg font-bold font-mono text-red-500">
            -{item.impact?.cost || '$100K'}
          </p>
        </div>
      </div>
    </div>
  );
};

const SuccessEvidenceSection = ({ evidence, dominantBias }) => {
  const items = evidence?.length > 0 ? evidence : dominantBias?.wins;

  if (!items?.length) return null;

  // Calculate total positive impact
  const totalValue = (items || []).reduce((sum, item) => {
    const saved = item.impact?.saved || '';
    const match = saved.match(/\$?([\d,]+)K?/);
    if (match) {
      const num = parseInt(match[1].replace(',', ''));
      return sum + (saved.includes('K') || saved.includes('k') ? num * 1000 : num);
    }
    // Handle hours
    const hrsMatch = saved.match(/(\d+)\s*hrs?/i);
    if (hrsMatch) {
      return sum + parseInt(hrsMatch[1]) * 100; // Rough conversion
    }
    return sum;
  }, 0);

  const formatCurrency = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${Math.round(num / 1000).toLocaleString()},000`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">🚀</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          El Valor que Generas
        </h2>
      </div>

      {/* White Card Container */}
      <div className="bg-white dark:bg-white rounded-3xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Total Value Header */}
        {totalValue > 0 && (
          <div className="text-center pb-8 mb-8 border-b border-slate-200">
            <p className="text-[13px] font-bold text-slate-400 tracking-wider mb-3">
              IMPACTO ESTIMADO (Q4)
            </p>
            <p className="text-6xl font-extrabold text-emerald-500 tracking-tight font-mono">
              +{formatCurrency(totalValue)}
            </p>
            <p className="mt-3 text-sm text-slate-500 bg-emerald-50 inline-block px-3 py-1 rounded-full">
              Eficiencia + Revenue Directo
            </p>
          </div>
        )}

        {/* Evidence Items */}
        <div className="divide-y divide-slate-100">
          {items.map((item, i) => (
            <SuccessEvidenceItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessEvidenceItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  // Find the original question by ID
  const questionId = item.questionId || item.id || item.displayId;
  const originalQuestion = allQuestions.find(q =>
    q.displayId === questionId || q.id === questionId
  );

  // Title: Category from original question
  const title = originalQuestion?.category || 'Decisión Acertada';

  // Description: What the user chose (summarized from their selected option)
  const getDecisionSummary = () => {
    // Priority 1: Use decisionSummary from the selected option (if available)
    if (item.selectedOptionId && originalQuestion?.options) {
      const selectedOption = originalQuestion.options.find(o => o.id === item.selectedOptionId);
      if (selectedOption?.decisionSummary) {
        return selectedOption.decisionSummary;
      }
      // Fallback: clean markdown and truncate text
      if (selectedOption?.text) {
        const cleanText = selectedOption.text.replace(/\*\*/g, '');
        const firstSentence = cleanText.split('.')[0];
        return firstSentence.length > 120 ? firstSentence.substring(0, 117) + '...' : firstSentence + '.';
      }
    }
    return item.scenario || item.description || 'Decisión acertada.';
  };

  const description = getDecisionSummary();

  return (
    <div className="py-5 first:pt-0 last:pb-0">
      <div className="flex justify-between items-start gap-4">
        {/* Left: Type & Description */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-slate-900 mb-1.5">
            {title}
          </h4>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            {description}
          </p>

          {/* Expand button - only if original question exists */}
          {originalQuestion && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Ocultar contexto
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Ver pregunta original
                </>
              )}
            </button>
          )}

          {/* Expanded: Scenario + Question */}
          {expanded && originalQuestion && (
            <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                Contexto
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {originalQuestion.scenario}
              </p>
              <p className="text-sm font-medium text-slate-900">
                {originalQuestion.question}
              </p>
            </div>
          )}
        </div>

        {/* Right: Saved indicator */}
        <div className="text-right flex-shrink-0">
          <a
            href={`/debug/screens?q=${questionId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-mono bg-emerald-50 text-emerald-600 px-2.5 py-1.5 rounded-md mb-1.5 hover:bg-emerald-100 transition-colors"
          >
            {questionId || 'WIN'}
          </a>
          <p className="text-lg font-bold font-mono text-emerald-500">
            +{item.impact?.saved || '$50K'}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlindSpotSection = ({ dominantBias }) => {
  if (!dominantBias) return null;

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">👁️</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          Tu Punto Ciego
        </h2>
      </div>

      {/* Dark Card (on dark mode) / Slate Card (on light mode) */}
      <div className="rounded-3xl p-10 bg-slate-900 dark:bg-[#0F172A] border border-slate-800 dark:border-slate-700 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Hard Truth - Prose with highlights */}
        {dominantBias?.hardTruth && (
          <div className="text-center mb-10">
            <p className="text-xl leading-relaxed text-slate-300">
              <MarkdownText className="[&_strong]:text-white [&_strong]:bg-gradient-to-r [&_strong]:from-orange-500/40 [&_strong]:to-orange-500/40 [&_strong]:px-1">
                {dominantBias.hardTruth}
              </MarkdownText>
            </p>
          </div>
        )}

        {/* Concept Pills - Visual Comparison */}
        {dominantBias?.conceptToInternalize && (
          <div className="flex items-center justify-center gap-8 p-8 rounded-2xl bg-white/5 border border-white/10">
            {/* Good Pill */}
            <div className="px-5 py-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
              <span className="text-emerald-400 font-semibold">
                ✅ {dominantBias.conceptToInternalize.name}
              </span>
            </div>

            {/* VS */}
            <span className="text-slate-500 font-medium">vs</span>

            {/* Bad Pill */}
            <div className="px-5 py-3 rounded-lg bg-red-500/20 border border-red-500/40 opacity-70">
              <span className="text-red-400 font-medium">
                {dominantBias.conceptToInternalize.vs}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const NextCeilingSection = ({ dominantBias }) => {
  if (!dominantBias?.nextCeiling) return null;

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">⚠️</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          Tu Siguiente Techo
        </h2>
      </div>

      {/* Amber Card */}
      <div className="rounded-3xl p-10 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="space-y-6">
          {/* Challenge */}
          <div className="p-6 rounded-2xl bg-white dark:bg-white/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider mb-2 text-amber-600 dark:text-amber-400">
              Desafío
            </p>
            <p className="text-lg text-slate-900 dark:text-white">{dominantBias.nextCeiling.challenge}</p>
          </div>

          {/* Risk */}
          <div className="p-6 rounded-2xl border-l-4 bg-red-50 dark:bg-red-500/10 border-red-500">
            <p className="text-xs font-bold uppercase tracking-wider mb-2 text-red-600 dark:text-red-400">
              ⚠️ Riesgo
            </p>
            <p className="text-slate-900 dark:text-white">{dominantBias.nextCeiling.risk}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Superpower Section for Success Path - replaces BlindSpot
const SuperpowerSection = ({ dominantBias }) => {
  if (!dominantBias) return null;

  // Extract superpower info from archetype
  const superpower = dominantBias.superpower || {
    description: dominantBias.hardTruth || dominantBias.description,
    formula: dominantBias.conceptToInternalize ? [
      dominantBias.conceptToInternalize.name,
      dominantBias.conceptToInternalize.vs
    ] : ['High Agency', 'System Thinking']
  };

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">⚡</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          Tu Superpoder
        </h2>
      </div>

      {/* Dark Card */}
      <div className="rounded-3xl p-10 bg-slate-900 dark:bg-[#0F172A] border border-slate-800 dark:border-slate-700 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Superpower Description with highlights */}
        <div className="text-center mb-10">
          <p className="text-xl leading-relaxed text-slate-300">
            <MarkdownText className="[&_strong]:text-white [&_strong]:bg-gradient-to-r [&_strong]:from-teal-500/40 [&_strong]:to-teal-500/40 [&_strong]:px-1">
              {superpower.description}
            </MarkdownText>
          </p>
        </div>

        {/* Formula Pills: Skill + Skill = Impact */}
        {superpower.formula && (
          <div className="flex items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 flex-wrap">
            {/* First Pill */}
            <div className="px-5 py-3 rounded-lg bg-slate-700 border border-slate-600">
              <span className="text-white font-semibold">
                {superpower.formula[0] || 'High Agency'}
              </span>
            </div>

            {/* Plus */}
            <span className="text-slate-500 font-bold text-xl">+</span>

            {/* Second Pill */}
            <div className="px-5 py-3 rounded-lg bg-teal-500/20 border border-teal-500/40">
              <span className="text-teal-400 font-semibold">
                {superpower.formula[1] || 'System Thinking'}
              </span>
            </div>

            {/* Equals */}
            <span className="text-slate-500 font-bold text-xl">=</span>

            {/* Result Pill */}
            <div className="px-5 py-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
              <span className="text-emerald-400 font-bold">
                Impact
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const PivotSection = ({ dominantBias, mondayMission, sniperResources, isSuccess }) => {
  // For success archetypes, show "Siguiente Nivel" with teal timeline
  if (isSuccess) {
    // Build next level actions from archetype or defaults
    const nextLevelActions = dominantBias?.pivotActions || [
      { title: 'Mentoría Activa', description: 'Identifica a 2 diseñadores Mid-Level y transfiere tu conocimiento.' },
      { title: 'Visión a 6 Meses', description: 'Escribe un "Design Vision Doc" alineado con los OKRs. Vende el futuro.' }
    ];

    const missionTitle = mondayMission?.title || dominantBias?.nextCeiling?.challenge || 'The Multiplier Effect';
    const missionObjective = mondayMission?.trigger || 'Diseña equipos, no solo pantallas.';

    return (
      <section className="space-y-6">
        {/* Section Title */}
        <div className="flex items-center gap-3 px-2">
          <span className="text-lg">🎯</span>
          <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
            Siguiente Nivel
          </h2>
        </div>

        {/* White Card Container */}
        <div className="bg-white dark:bg-white rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* Mission Header */}
          <div className="px-8 py-6 border-b border-slate-100">
            <p className="text-xl font-extrabold text-slate-900">
              Misión: {missionTitle}
            </p>
            <p className="text-sm text-teal-600 mt-1">
              Objetivo: {missionObjective}
            </p>
          </div>

          {/* Steps with Teal Timeline */}
          <div className="px-8 py-8">
            <div className="space-y-8">
              {nextLevelActions.map((action, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Timeline Line */}
                  {i < nextLevelActions.length - 1 && (
                    <div className="absolute left-[17px] top-9 bottom-0 w-0.5 bg-teal-200" style={{ height: 'calc(100% + 16px)' }} />
                  )}

                  {/* Step Number - Teal */}
                  <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-base flex-shrink-0 relative z-10 shadow-lg">
                    {i + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h5 className="text-lg font-bold text-slate-900 mb-1.5">{action.title}</h5>
                    <p className="text-[15px] text-slate-500 leading-relaxed">{action.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Reading if available */}
        {dominantBias?.executiveReading && (
          <div className="bg-white dark:bg-white rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <p className="text-lg font-bold text-slate-900">
              📚 {dominantBias.executiveReading}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Lectura recomendada para tu siguiente nivel de liderazgo.
            </p>
          </div>
        )}
      </section>
    );
  }

  if (!mondayMission && !dominantBias?.pivotActions) return null;

  return (
    <section className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 px-2">
        <span className="text-lg">💊</span>
        <h2 className="text-sm font-bold uppercase tracking-[1.2px] text-slate-500 dark:text-slate-400">
          Tu Receta para el Lunes
        </h2>
      </div>

      {/* White Card Container */}
      <div className="bg-white dark:bg-white rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Mission Header - Green */}
        {mondayMission && (
          <div className="bg-gradient-to-r from-emerald-50 to-white px-8 py-6 border-b border-emerald-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-emerald-700">
                  Misión: {mondayMission.title}
                </p>
                <p className="text-sm text-slate-500">
                  Trigger: {mondayMission.trigger}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Steps Container */}
        <div className="px-8 py-8">
          {/* Pivot Actions as Timeline */}
          {dominantBias?.pivotActions && dominantBias.pivotActions.length > 0 ? (
            <div className="space-y-8">
              {dominantBias.pivotActions.map((action, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Timeline Line */}
                  {i < dominantBias.pivotActions.length - 1 && (
                    <div className="absolute left-[17px] top-9 bottom-0 w-0.5 bg-slate-200" style={{ height: 'calc(100% + 16px)' }} />
                  )}

                  {/* Step Number */}
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base flex-shrink-0 relative z-10 shadow-lg">
                    {i + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h5 className="text-lg font-bold text-slate-900 mb-1.5">{action.title}</h5>
                    <p className="text-[15px] text-slate-500 leading-relaxed">{action.description}</p>

                    {/* Resource Card inline with step 2 (Internaliza el Principio) */}
                    {i === 1 && sniperResources?.[0] && (
                      <a
                        href={sniperResources[0].url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                      >
                        <div className="w-10 h-14 bg-orange-50 rounded flex items-center justify-center text-orange-500 text-xl">
                          📚
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-sm text-slate-900 group-hover:text-orange-600 transition-colors">
                            {sniperResources[0].title}
                          </p>
                          <p className="text-xs text-slate-400">
                            {sniperResources[0].author} {sniperResources[0].section && `• ${sniperResources[0].section}`}
                          </p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : mondayMission?.script && (
            /* Fallback if no pivotActions */
            <div className="space-y-6">
              <blockquote className="p-5 rounded-xl border-l-4 bg-emerald-50 border-emerald-500">
                <p className="text-xs font-bold uppercase tracking-wider mb-2 text-emerald-700">
                  Di esto literalmente:
                </p>
                <MarkdownText className="font-medium text-slate-900">
                  {mondayMission.script}
                </MarkdownText>
              </blockquote>

              {mondayMission.principle && (
                <p className="p-4 rounded-xl text-sm bg-amber-50 text-amber-800">
                  💡 <strong>Principio:</strong> {mondayMission.principle}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
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
