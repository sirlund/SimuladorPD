import { useState } from 'react';
import { LearningArticleScreen } from './LearningArticleScreen';
import { LearningArticleScreenB } from './LearningArticleScreenB';
import { ArrowLeft, Copy, Check, ToggleLeft, ToggleRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ui/ThemeToggle';

/**
 * Wrapper que permite alternar entre Template A y Template B
 */
export const LearningScreen = ({ analysis, onBack }) => {
  const [template, setTemplate] = useState('A'); // 'A' o 'B'
  const theme = useTheme();

  // Renderizar el template seleccionado con header custom
  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header con switch de templates */}
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

            <div className="flex items-center gap-3">
              {/* Template Switch */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                theme.isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <button
                  onClick={() => setTemplate('A')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    template === 'A'
                      ? theme.isDark
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-500 text-white'
                      : theme.textMuted
                  }`}
                >
                  Template A
                </button>
                <button
                  onClick={() => setTemplate('B')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    template === 'B'
                      ? theme.isDark
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-500 text-white'
                      : theme.textMuted
                  }`}
                >
                  Template B
                </button>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Content - sin el header propio de cada template */}
      {template === 'A' ? (
        <LearningContentA analysis={analysis} />
      ) : (
        <LearningContentB analysis={analysis} />
      )}
    </div>
  );
};

// ============================================
// Template A Content (sin header)
// ============================================
import { ExternalLink, BookOpen, AlertTriangle, Target, Clock, Zap } from 'lucide-react';
import { MarkdownText } from '../ui/MarkdownText';

const LearningContentA = ({ analysis }) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  if (!analysis) return null;

  const {
    accuracy,
    totalScore,
    maxPossibleScore,
    levelFeedback,
    diagnosis,
    timestamp
  } = analysis;

  const { dominantBias, competencyMap, worstDecisions, sniperResources, mondayMission } = diagnosis || {};

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="text-6xl">{dominantBias?.emoji || '📊'}</div>
        <h1 className={`text-3xl md:text-4xl font-black ${theme.text}`}>
          Diagnóstico: {dominantBias?.title || 'Análisis'}
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>{dominantBias?.subtitle || ''}</p>
        {dominantBias?.percentage > 0 && (
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
            dominantBias.type === 'success'
              ? theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              : theme.isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'
          }`}>
            {dominantBias.type === 'success'
              ? `${dominantBias.percentage}% de tus aciertos fueron en estas categorías`
              : `En el ${dominantBias.percentage}% de tus errores, elegiste este patrón`
            }
          </div>
        )}
      </div>

      {/* Stats */}
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
          <div className={`text-xs ${theme.textSubtle}`}>Nivel</div>
        </div>
      </div>

      {/* Hard Truth */}
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

      {/* Worst Decisions */}
      {worstDecisions?.length > 0 && (
        <div className="space-y-3">
          <h2 className={`text-lg font-bold ${theme.text}`}>Consecuencias de tus decisiones:</h2>
          <div className="space-y-2">
            {worstDecisions.map((decision, i) => (
              <div key={i} className={`p-4 rounded-lg border ${theme.bgCard} ${theme.border}`}>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-indigo-500">{decision.id}</span>
                  <div className="flex-1">
                    <MarkdownText className={`text-sm font-medium ${theme.text}`}>
                      {decision.consequence}
                    </MarkdownText>
                    <p className={`text-xs mt-1 ${theme.textSubtle}`}>{decision.scenario}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Competency Map */}
      {competencyMap?.length > 0 && (
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
                  <th className={`text-left p-4 text-sm font-bold ${theme.text}`}>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {competencyMap.map((comp) => (
                  <tr key={comp.id} className={`border-t ${theme.border}`}>
                    <td className={`p-4 ${theme.bgCard}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{comp.icon}</span>
                        <span className={`font-medium ${theme.text}`}>{comp.name}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${theme.bgCard}`}>
                      <span className="text-xl">{comp.levelData?.emoji}</span>
                      <div className={`text-xs font-bold mt-1 ${
                        comp.level === 'staff' || comp.level === 'senior' ? 'text-green-500' :
                        comp.level === 'mid' ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {comp.levelData?.label}
                      </div>
                    </td>
                    <td className={`p-4 ${theme.bgCard}`}>
                      <p className={`text-sm ${theme.textMuted}`}>{comp.levelData?.feedback}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Concept */}
      {dominantBias?.conceptToInternalize && (
        <div className={`rounded-xl p-6 border ${
          theme.isDark ? 'bg-indigo-500/5 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
        }`}>
          <h2 className={`text-lg font-bold mb-4 ${theme.isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
            El Concepto a Internalizar
          </h2>
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <div className={`px-4 py-2 rounded-lg font-bold ${
              theme.isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
            }`}>
              {dominantBias.conceptToInternalize.name}
            </div>
            <span className={theme.textMuted}>vs</span>
            <div className={`px-4 py-2 rounded-lg font-bold line-through ${
              theme.isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
            }`}>
              {dominantBias.conceptToInternalize.vs}
            </div>
          </div>
          <p className={`text-sm ${theme.textMuted}`}>{dominantBias.conceptToInternalize.explanation}</p>
        </div>
      )}

      {/* Sniper Resources */}
      {sniperResources?.length > 0 && (
        <div className="space-y-4">
          <h2 className={`text-lg font-bold flex items-center gap-2 ${theme.text}`}>
            <BookOpen className="w-5 h-5 text-blue-500" />
            Tu Receta de Mejora (3 recursos)
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
                          <Clock className="w-3 h-3" />{resource.readTime}
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

      {/* Monday Mission */}
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
            <div className={`p-4 rounded-lg ${theme.isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <div className={`text-xs font-bold uppercase mb-2 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Di esto:
              </div>
              <MarkdownText className={`text-lg font-medium ${theme.text}`}>
                {mondayMission.script}
              </MarkdownText>
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
  );
};

// ============================================
// Template B Content (sin header)
// ============================================
import { DollarSign, Eye, Pill } from 'lucide-react';

const LearningContentB = ({ analysis }) => {
  const theme = useTheme();

  if (!analysis) return null;

  const { accuracy, levelFeedback, diagnosis } = analysis;
  const { dominantBias, worstDecisions, mondayMission } = diagnosis || {};

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
    const type = Object.keys(costs).find(k => decision.consequence?.includes(k));
    return costs[type] || { amount: '$100K', label: 'en Impacto' };
  };

  const getLevel = () => {
    if (accuracy >= 80) return { label: 'Senior Manager', color: 'green' };
    if (accuracy >= 60) return { label: 'Mid-Level Manager', color: 'yellow' };
    return { label: 'Junior Manager', color: 'red' };
  };

  const level = getLevel();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className={`text-3xl md:text-4xl font-black leading-tight ${theme.text}`}>
          📉 Diagnóstico: Estás operando como un{' '}
          <span className={theme.isDark ? 'text-orange-400' : 'text-orange-600'}>
            "{dominantBias?.title || 'Order Taker'}"
          </span>
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>
          Score: <span className={`font-bold ${
            level.color === 'green' ? 'text-green-500' :
            level.color === 'yellow' ? 'text-yellow-500' : 'text-red-500'
          }`}>{accuracy}%</span> ({level.label} Level)
        </p>
        <p className={`text-lg leading-relaxed ${theme.text}`}>
          {dominantBias?.tagline || dominantBias?.subtitle || 'Análisis de tu performance en el simulador.'}
        </p>
      </div>

      {/* Costs */}
      {worstDecisions?.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <DollarSign className={`w-8 h-8 ${theme.isDark ? 'text-red-400' : 'text-red-600'}`} />
            <h2 className={`text-2xl font-black ${theme.text}`}>El Costo de tus Decisiones</h2>
          </div>
          <p className={`text-lg ${theme.textMuted}`}>
            Si esto fuera una startup real, tu performance habría costado:
          </p>
          <div className="space-y-4">
            {worstDecisions.map((decision, i) => {
              const cost = generateCost(decision);
              return (
                <div key={i} className={`p-6 rounded-xl border-l-4 ${
                  theme.isDark ? 'bg-slate-800/50 border-red-500' : 'bg-slate-50 border-red-500'
                }`}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-2xl font-black ${theme.isDark ? 'text-red-400' : 'text-red-600'}`}>
                      {cost.amount}
                    </span>
                    <span className={`text-sm ${theme.textMuted}`}>{cost.label}</span>
                  </div>
                  <p className={theme.text}>
                    <span className="font-bold text-indigo-500">{decision.id}:</span> {decision.scenario}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Blind Spot */}
      {dominantBias && (
        <div className={`p-8 rounded-2xl ${theme.isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Eye className={`w-8 h-8 ${theme.isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <h2 className={`text-2xl font-black ${theme.text}`}>
              Tu Punto Ciego: "{dominantBias?.blindSpot?.name || dominantBias?.conceptToInternalize?.vs || 'Patrón Detectado'}"
            </h2>
          </div>
          <div className={`space-y-4 text-lg leading-relaxed ${theme.text}`}>
            {dominantBias?.hardTruth && (
              <p>{dominantBias.hardTruth}</p>
            )}
            {dominantBias?.blindSpot?.description && (
              <p className={theme.isDark ? 'text-amber-400' : 'text-amber-700'}>
                {dominantBias.blindSpot.description}
              </p>
            )}
            {dominantBias?.conceptToInternalize && (
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

      {/* The Pivot */}
      {(mondayMission || dominantBias?.pivotActions) && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Pill className={`w-8 h-8 ${theme.isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <h2 className={`text-2xl font-black ${theme.text}`}>
              💊 The Pivot: {mondayMission?.title || 'Tu Plan de Recuperación'}
            </h2>
          </div>

          {/* Monday Mission */}
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
      )}

      {/* Footer */}
      <div className={`text-center pt-8 border-t ${theme.border}`}>
        <p className={`text-sm ${theme.textSubtle}`}>Simulador Product Lead • Template B</p>
      </div>
    </div>
  );
};

export default LearningScreen;
