import { useMemo } from 'react';
import {
  detectArchetypes,
  getResourcesByTopic,
  topics,
  resources,
  // V2: Diagnosis System (Archetype System)
  selectArchetype,
  calculateCompetencyMap,
  getMissionByBias,
  getResourcesByBias
} from '../data/learning';
import {
  generateFailureEvidence,
  generateSuccessEvidence
} from '../data/learning/questionArchetypeMapping';

/**
 * Hook para analizar los resultados de una sesión y detectar gaps de aprendizaje
 * @param {Object} answers - Respuestas del usuario {questionId: {score, selectedId, selectedType, ...}}
 * @param {Array} activeQuestions - Preguntas jugadas en la sesión
 * @returns {Object} - Análisis completo de la sesión
 */
export const useSessionAnalysis = (answers, activeQuestions) => {
  return useMemo(() => {
    if (!answers || !activeQuestions || activeQuestions.length === 0) {
      return null;
    }

    const questionsAnswered = Object.keys(answers).length;
    const answersArray = Object.values(answers);

    // === 1. MÉTRICAS BÁSICAS ===
    const totalScore = answersArray.reduce((sum, a) => sum + a.score, 0);
    const maxPossibleScore = questionsAnswered * 5;
    const accuracy = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

    // === 2. DISTRIBUCIÓN DE RESPUESTAS ===
    const distribution = {
      perfect: answersArray.filter(a => a.score === 5).length,
      good: answersArray.filter(a => a.score === 3).length,
      bad: answersArray.filter(a => a.score === 1).length,
      negative: answersArray.filter(a => a.score === -1).length
    };

    // === 3. ANÁLISIS POR CATEGORÍA ===
    const categoryStats = {};
    activeQuestions.forEach(q => {
      const ans = answers[q.id];
      if (!ans) return;

      if (!categoryStats[q.category]) {
        categoryStats[q.category] = {
          name: q.category,
          score: 0,
          maxScore: 0,
          count: 0,
          questions: []
        };
      }

      categoryStats[q.category].score += ans.score;
      categoryStats[q.category].maxScore += 5;
      categoryStats[q.category].count += 1;
      categoryStats[q.category].questions.push({
        id: q.id,
        displayId: q.displayId,
        score: ans.score,
        isPerfect: ans.score === 5
      });
    });

    // Calcular porcentajes y ordenar
    const categories = Object.values(categoryStats)
      .map(cat => ({
        ...cat,
        percentage: cat.maxScore > 0 ? Math.round((cat.score / cat.maxScore) * 100) : 0
      }))
      .sort((a, b) => b.percentage - a.percentage);

    // === 4. FORTALEZAS Y DEBILIDADES ===
    const strengths = categories.filter(c => c.percentage >= 70).slice(0, 3);
    const weaknesses = categories.filter(c => c.percentage < 70)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);

    // === 5. PREGUNTAS FALLADAS ===
    const failedQuestions = activeQuestions
      .filter(q => {
        const ans = answers[q.id];
        return ans && ans.score < 5;
      })
      .map(q => {
        const ans = answers[q.id];
        const selectedOption = q.options.find(o => o.id === ans.selectedId);
        const bestOption = q.options.find(o => o.score === 5);

        return {
          id: q.id,
          displayId: q.displayId,
          category: q.category,
          scenario: q.scenario,
          question: q.question,
          score: ans.score,
          selectedOption: selectedOption?.text || '',
          selectedType: selectedOption?.type || '',
          bestOption: bestOption?.text || '',
          bestType: bestOption?.type || '',
          explanation: q.explanation,
          // Learning metadata (si existe)
          learningTopic: q.learning?.topic || null,
          concepts: q.learning?.concepts || []
        };
      })
      .sort((a, b) => a.score - b.score); // Peores primero

    // === 6. DETECCIÓN DE ARQUETIPOS ===
    const archetypeInput = answersArray.map(ans => ({
      optionType: ans.selectedType || '',
      score: ans.score
    }));
    const detectedArchetypes = detectArchetypes(archetypeInput);

    // === 7. CONCEPTOS NO DOMINADOS ===
    const missedConcepts = [];
    failedQuestions.forEach(q => {
      if (q.concepts) {
        q.concepts.forEach(concept => {
          if (!missedConcepts.includes(concept)) {
            missedConcepts.push(concept);
          }
        });
      }
    });

    // === 8. TEMAS PRIORITARIOS ===
    const topicScores = {};
    activeQuestions.forEach(q => {
      const ans = answers[q.id];
      if (!ans) return;

      const topic = q.learning?.topic;
      if (!topic) return;

      if (!topicScores[topic]) {
        topicScores[topic] = { score: 0, maxScore: 0, count: 0 };
      }
      topicScores[topic].score += ans.score;
      topicScores[topic].maxScore += 5;
      topicScores[topic].count += 1;
    });

    const priorityTopics = Object.entries(topicScores)
      .map(([topicId, data]) => ({
        ...topics[topicId],
        ...data,
        percentage: data.maxScore > 0 ? Math.round((data.score / data.maxScore) * 100) : 0
      }))
      .filter(t => t.percentage < 70)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);

    // === 9. RECURSOS RECOMENDADOS ===
    const recommendedResources = [];
    const seenResources = new Set();

    // Recursos por topics débiles
    priorityTopics.forEach(topic => {
      if (topic.id) {
        const topicResources = getResourcesByTopic(topic.id);
        topicResources.forEach(r => {
          if (!seenResources.has(r.id)) {
            recommendedResources.push({ ...r, reason: `Mejorar en ${topic.name}` });
            seenResources.add(r.id);
          }
        });
      }
    });

    // Recursos por arquetipos
    detectedArchetypes.forEach(archetype => {
      archetype.resources?.forEach(resourceId => {
        if (!seenResources.has(resourceId)) {
          // Buscar en la base de recursos
          const resource = resources[resourceId];
          if (resource) {
            recommendedResources.push({ ...resource, reason: `Superar patrón "${archetype.name}"` });
            seenResources.add(resourceId);
          }
        }
      });
    });

    // Limitar a 10 recursos
    const topResources = recommendedResources.slice(0, 10);

    // === 10. NIVEL Y FEEDBACK ===
    let level, levelFeedback, levelTip;
    if (accuracy >= 90 && questionsAnswered >= 15) {
      level = 'head';
      levelFeedback = 'Head of Design';
      levelTip = 'Estás listo para decisiones de alto impacto organizacional.';
    } else if (accuracy >= 80 && questionsAnswered >= 12) {
      level = 'lead';
      levelFeedback = 'Lead Designer';
      levelTip = 'Foco: reducir errores en situaciones de alta presión política.';
    } else if (accuracy >= 65 && questionsAnswered >= 10) {
      level = 'senior';
      levelFeedback = 'Senior Designer';
      levelTip = 'Foco: priorizar impacto de negocio sobre protección del equipo.';
    } else if (accuracy >= 50 && questionsAnswered >= 8) {
      level = 'mid';
      levelFeedback = 'Mid-Level Designer';
      levelTip = 'Foco: más exposición a decisiones estratégicas de alto impacto.';
    } else {
      level = 'growing';
      levelFeedback = 'En Crecimiento';
      levelTip = 'Foco: entender trade-offs entre calidad, velocidad y scope.';
    }

    // === 11. DIAGNÓSTICO V2 (Archetype System) ===
    // Preguntas acertadas para arquetipos de éxito
    const succeededQuestions = activeQuestions.filter(q => {
      const ans = answers[q.id];
      return ans && ans.score === 5;
    });

    // Seleccionar arquetipo basado en score (>=80% = éxito, <80% = fallo)
    const dominantBias = selectArchetype(accuracy, failedQuestions, succeededQuestions, answers);
    const competencyMap = calculateCompetencyMap(activeQuestions, answers);

    // Para arquetipos de éxito, usamos el fallback 'order-taker' para missions/resources
    // ya que aún no tenemos contenido específico para arquetipos de éxito
    const biasIdForResources = dominantBias.type === 'success' ? 'order-taker' : dominantBias.id;
    const mondayMission = getMissionByBias(biasIdForResources);
    const sniperResources = getResourcesByBias(biasIdForResources);

    // Las 3 peores decisiones con consecuencias
    const worstDecisions = failedQuestions
      .filter(q => q.score <= 1)
      .slice(0, 3)
      .map(q => {
        const consequenceMap = {
          'Gestión de Crisis & Liderazgo': { icon: '💀', type: 'Crisis' },
          'Producto vs Ventas': { icon: '💸', type: 'Revenue' },
          'Arquitectura de Sistemas': { icon: '📉', type: 'Deuda Técnica' },
          'Manage Up': { icon: '🔥', type: 'Credibilidad' },
          'Estrategia de Producto': { icon: '🎯', type: 'Roadmap' },
          'Gestión de Stakeholders': { icon: '🤝', type: 'Relaciones' },
          'Community Management': { icon: '📱', type: 'Reputación' }
        };
        const consequence = consequenceMap[q.category] || { icon: '⚠️', type: 'Impacto' };
        return {
          id: q.displayId,
          scenario: q.scenario.substring(0, 80) + '...',
          consequence: `${consequence.icon} **${consequence.type}:** Error en ${q.category}`,
          score: q.score
        };
      });

    // === 12. EVIDENCIA DINÁMICA (V2.1) ===
    // Genera evidencia basada en las preguntas reales de la sesión
    const dynamicEvidence = dominantBias.type === 'success'
      ? generateSuccessEvidence(succeededQuestions, answers, dominantBias.id, 3)
      : generateFailureEvidence(failedQuestions, answers, dominantBias.id, 3);

    const diagnosis = {
      dominantBias,
      competencyMap,
      worstDecisions,
      sniperResources,
      mondayMission,
      dynamicEvidence // V2.1: Evidencia dinámica basada en la sesión
    };

    // === RETURN ===
    return {
      // Métricas
      questionsAnswered,
      totalScore,
      maxPossibleScore,
      accuracy,
      distribution,

      // Análisis
      categories,
      strengths,
      weaknesses,
      failedQuestions,

      // Patrones
      detectedArchetypes,
      missedConcepts,
      priorityTopics,

      // Recursos
      recommendedResources: topResources,

      // Nivel
      level,
      levelFeedback,
      levelTip,

      // V2: Diagnóstico
      diagnosis,

      // Metadata
      timestamp: new Date().toISOString(),
      sessionId: `session-${Date.now()}`
    };
  }, [answers, activeQuestions]);
};

export default useSessionAnalysis;
