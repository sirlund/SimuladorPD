/**
 * Mapeo de tipos de opción → Arquetipos
 * Permite identificar qué arquetipo representa cada respuesta incorrecta
 */

// Mapeo de tipo de opción a arquetipo de fallo
export const optionTypeToArchetype = {
  // The Order Taker (Complaciente, evita conflicto)
  'Complaciente': 'order-taker',
  'Obediente': 'order-taker',
  'Mercenario': 'order-taker',
  'Sándwich': 'order-taker',
  'Compliance': 'order-taker',
  'Quick Win': 'order-taker',
  'Agilidad y Servicio': 'order-taker',
  'Cultural / Incorrect': 'order-taker',
  'Protector / Incorrect': 'order-taker',

  // The Craft Obsessive (Perfeccionista, bloquea por calidad)
  'Purista': 'craft-obsessive',
  'Perfeccionista': 'craft-obsessive',
  'Idealista': 'craft-obsessive',
  'Over-engineer': 'craft-obsessive',
  'Quality-first': 'craft-obsessive',
  'Técnico / Incorrect': 'craft-obsessive',
  'Bloqueador': 'craft-obsessive',
  'Idealista / Incorrect': 'craft-obsessive',

  // The Process Bureaucrat (Se esconde en reglas)
  'Dogmático': 'process-bureaucrat',
  'Burocrático': 'process-bureaucrat',
  'Risk Averse': 'process-bureaucrat',
  'Escalación': 'process-bureaucrat',
  'Proceso': 'process-bureaucrat',
  'Legal': 'process-bureaucrat',
  'Burocrático / Incorrect': 'process-bureaucrat',
  'Escalación Ejecutiva': 'process-bureaucrat',

  // The Lone Wolf (Héroe solitario, no delega)
  'Heroico': 'lone-wolf',
  'Silo': 'lone-wolf',
  'Centralizado': 'lone-wolf',
  'Micromanager': 'lone-wolf',
  'Solo': 'lone-wolf',
  'Personal': 'lone-wolf',
  'Silo / Incorrect': 'lone-wolf'
};

/**
 * Business Impact por categoría de pregunta
 * Usado para generar consecuencias más impactantes
 */
export const categoryBusinessImpact = {
  'Estrategia de Producto': {
    emoji: '📉',
    impactType: 'Revenue',
    costRange: ['$100K', '$500K'],
    consequence: 'pérdida de oportunidad de mercado'
  },
  'Data-Driven Design': {
    emoji: '📊',
    impactType: 'Decisiones',
    costRange: ['3 meses', '6 meses'],
    consequence: 'de decisiones basadas en métricas equivocadas'
  },
  'Producto vs Ventas': {
    emoji: '💰',
    impactType: 'Pipeline',
    costRange: ['$200K', '$1M'],
    consequence: 'en deals perdidos o producto diluido'
  },
  'Gestión de OKRs': {
    emoji: '🎯',
    impactType: 'Foco',
    costRange: ['1 quarter', '2 quarters'],
    consequence: 'de esfuerzo desperdiciado en output sin outcome'
  },
  'Gestión de Crisis & Liderazgo': {
    emoji: '🔥',
    impactType: 'Crisis',
    costRange: ['2 renuncias', '5 renuncias'],
    consequence: 'de talento clave perdido'
  },
  'Community Management': {
    emoji: '👥',
    impactType: 'Reputación',
    costRange: ['-10 NPS', '-25 NPS'],
    consequence: 'puntos de satisfacción perdidos'
  },
  'Contratación Estratégica': {
    emoji: '🧑‍💼',
    impactType: 'Talento',
    costRange: ['$80K', '$150K'],
    consequence: 'en costo de mala contratación'
  },
  'Crisis Política Organizacional': {
    emoji: '⚔️',
    impactType: 'Capital Político',
    costRange: ['-30%', '-60%'],
    consequence: 'de influencia en la organización'
  },
  'Arquitectura de Sistemas': {
    emoji: '🏗️',
    impactType: 'Deuda Técnica',
    costRange: ['$200K', '$500K'],
    consequence: 'en refactorización futura'
  },
  'Ingeniería de Diseño': {
    emoji: '🔧',
    impactType: 'Velocidad',
    costRange: ['-20%', '-40%'],
    consequence: 'de productividad del equipo'
  },
  'Estrategia de Migración': {
    emoji: '🔄',
    impactType: 'Estabilidad',
    costRange: ['6 semanas', '12 semanas'],
    consequence: 'de retraso por migración mal ejecutada'
  },
  'Deuda Técnica': {
    emoji: '🏚️',
    impactType: 'Mantenimiento',
    costRange: ['$100K/año', '$300K/año'],
    consequence: 'en costo de mantenimiento evitable'
  }
};

/**
 * Extrae el arquetipo de una opción basado en su tipo
 */
export const getArchetypeFromOptionType = (optionType) => {
  if (!optionType) return null;

  // Buscar match exacto primero
  if (optionTypeToArchetype[optionType]) {
    return optionTypeToArchetype[optionType];
  }

  // Buscar match parcial
  const normalizedType = optionType.toLowerCase();
  for (const [key, archetype] of Object.entries(optionTypeToArchetype)) {
    if (normalizedType.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedType)) {
      return archetype;
    }
  }

  return null;
};

/**
 * Filtra las preguntas falladas por arquetipo
 * @param {Array} failedQuestions - Preguntas que el usuario falló
 * @param {Object} answers - Respuestas del usuario { questionId: { selectedOption, selectedType } }
 * @param {string} archetypeId - ID del arquetipo a filtrar
 * @returns {Array} Preguntas que corresponden al arquetipo
 */
export const filterQuestionsByArchetype = (failedQuestions, answers, archetypeId) => {
  return failedQuestions.filter(q => {
    const answer = answers[q.id];
    if (!answer?.selectedType) return false;

    const matchedArchetype = getArchetypeFromOptionType(answer.selectedType);
    return matchedArchetype === archetypeId;
  });
};

/**
 * Genera evidencia dinámica de errores para el reporte
 * @param {Array} failedQuestions - Preguntas falladas
 * @param {Object} answers - Respuestas del usuario
 * @param {string} archetypeId - Arquetipo diagnosticado
 * @param {number} limit - Máximo de ejemplos a mostrar
 */
export const generateFailureEvidence = (failedQuestions, answers, archetypeId, limit = 3) => {
  // Filtrar preguntas relevantes al arquetipo
  const relevantQuestions = filterQuestionsByArchetype(failedQuestions, answers, archetypeId);

  // Si no hay suficientes del arquetipo, tomar las más recientes
  const questionsToUse = relevantQuestions.length >= limit
    ? relevantQuestions.slice(0, limit)
    : [...relevantQuestions, ...failedQuestions.filter(q => !relevantQuestions.includes(q))].slice(0, limit);

  return questionsToUse.map(q => {
    const answer = answers[q.id];
    const selectedOption = q.options?.find(opt => opt.id === answer?.selectedOption);
    const impact = categoryBusinessImpact[q.category] || {
      emoji: '💸',
      impactType: 'Impacto',
      costRange: ['$100K', '$200K'],
      consequence: 'en costos evitables'
    };

    // Extraer consecuencia de la opción elegida (si existe en el texto)
    const optionText = selectedOption?.text || '';
    const shortConsequence = extractConsequence(optionText, q.explanation);

    return {
      questionId: q.displayId || q.id,
      scenario: truncateText(q.scenario, 100),
      category: q.category,
      selectedType: answer?.selectedType || 'Desconocido',
      impact: {
        emoji: impact.emoji,
        type: impact.impactType,
        cost: impact.costRange[Math.floor(Math.random() * 2)],
        consequence: shortConsequence || impact.consequence
      }
    };
  });
};

/**
 * Genera evidencia dinámica de aciertos para arquetipos de éxito
 */
export const generateSuccessEvidence = (succeededQuestions, answers, archetypeId, limit = 3) => {
  // Mapeo de categorías a arquetipos de éxito
  const successCategoryMap = {
    'venture-architect': ['Estrategia de Producto', 'Data-Driven Design', 'Gestión de OKRs', 'Producto vs Ventas'],
    'culture-builder': ['Gestión de Crisis & Liderazgo', 'Community Management', 'Contratación Estratégica', 'Crisis Política Organizacional'],
    'force-multiplier': ['Arquitectura de Sistemas', 'Ingeniería de Diseño', 'Estrategia de Migración', 'Deuda Técnica']
  };

  const relevantCategories = successCategoryMap[archetypeId] || [];

  // Filtrar preguntas relevantes
  const relevantQuestions = succeededQuestions.filter(q =>
    relevantCategories.includes(q.category)
  );

  const questionsToUse = relevantQuestions.length >= limit
    ? relevantQuestions.slice(0, limit)
    : [...relevantQuestions, ...succeededQuestions.filter(q => !relevantQuestions.includes(q))].slice(0, limit);

  return questionsToUse.map(q => {
    const correctOption = q.options?.find(opt => opt.score === 5 || opt.type?.includes('Correct'));
    const impact = categoryBusinessImpact[q.category] || {
      emoji: '✅',
      impactType: 'Valor',
      costRange: ['$100K', '$200K'],
      consequence: 'protegido'
    };

    return {
      questionId: q.displayId || q.id,
      scenario: truncateText(q.scenario, 100),
      category: q.category,
      correctChoice: correctOption?.text?.split('**')[1] || 'Decisión correcta',
      impact: {
        emoji: getSuccessEmoji(q.category),
        type: getSuccessType(q.category),
        saved: impact.costRange[1],
        avoided: extractDisasterAvoided(q.explanation)
      }
    };
  });
};

// Helpers
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

const extractConsequence = (optionText, explanation) => {
  // Intentar extraer una consecuencia corta del texto
  const patterns = [
    /provoca\s+(.{20,80})/i,
    /resulta en\s+(.{20,80})/i,
    /causa\s+(.{20,80})/i,
    /genera\s+(.{20,80})/i
  ];

  for (const pattern of patterns) {
    const match = explanation?.match(pattern);
    if (match) return match[1].trim();
  }

  return null;
};

const extractDisasterAvoided = (explanation) => {
  if (!explanation) return 'consecuencias negativas';

  // Buscar la parte que menciona qué evitaste
  const patterns = [
    /evita(?:ndo|s|r)?\s+(.{20,60})/i,
    /proteg(?:iendo|es|er)?\s+(.{20,60})/i,
    /salv(?:ando|as|ar)?\s+(.{20,60})/i
  ];

  for (const pattern of patterns) {
    const match = explanation.match(pattern);
    if (match) return match[1].trim();
  }

  return 'decisiones costosas';
};

const getSuccessEmoji = (category) => {
  const emojiMap = {
    'Estrategia de Producto': '💰',
    'Data-Driven Design': '📊',
    'Producto vs Ventas': '🤝',
    'Gestión de OKRs': '🎯',
    'Gestión de Crisis & Liderazgo': '🛡️',
    'Community Management': '❤️',
    'Contratación Estratégica': '🧠',
    'Crisis Política Organizacional': '⚖️',
    'Arquitectura de Sistemas': '🏗️',
    'Ingeniería de Diseño': '⚡',
    'Estrategia de Migración': '🚀',
    'Deuda Técnica': '🧹'
  };
  return emojiMap[category] || '✅';
};

const getSuccessType = (category) => {
  const typeMap = {
    'Estrategia de Producto': 'Capital Efficiency',
    'Data-Driven Design': 'Data Integrity',
    'Producto vs Ventas': 'Deal Mastery',
    'Gestión de OKRs': 'Strategic Focus',
    'Gestión de Crisis & Liderazgo': 'Crisis Navigation',
    'Community Management': 'Community Trust',
    'Contratación Estratégica': 'Talent Strategy',
    'Crisis Política Organizacional': 'Political Savvy',
    'Arquitectura de Sistemas': 'System Architecture',
    'Ingeniería de Diseño': 'Technical Excellence',
    'Estrategia de Migración': 'Migration Mastery',
    'Deuda Técnica': 'Technical Hygiene'
  };
  return typeMap[category] || 'Strategic Win';
};
