/**
 * Sistema de Arquetipos - Basado en ARCHETYPE_SYSTEM.md
 *
 * 4 Arquetipos de FALLO (score < 80%)
 * 3 Arquetipos de ÉXITO (score >= 80%)
 */

// ============================================
// ARQUETIPOS DE FALLO (< 80%)
// ============================================

export const failureArchetypes = {
  'order-taker': {
    id: 'order-taker',
    type: 'failure',
    title: 'The Order Taker',
    subtitle: 'El Toma-Pedidos',
    emoji: '📉',
    color: 'orange',

    // Tipos de opción que activan este arquetipo
    triggers: ['Complaciente', 'Obediente', 'Mercenario', 'Sándwich', 'Compliance'],

    headline: 'Diagnóstico: Estás operando como un "Order Taker"',
    tagline: 'Tienes el craft, pero te falta la columna vertebral política.',

    hardTruth: `Evitas el conflicto y priorizas la paz política sobre la salud del producto.
    Dices "sí" a todo porque crees que un buen líder desbloquea el camino y hace felices a los stakeholders.
    **Falso.** Un Product Lead es un **Gatekeeper de Valor**. Tu miedo al conflicto está permitiendo
    que la organización se dañe a sí misma.`,

    blindSpot: {
      name: 'La Falacia del Buen Soldado',
      description: 'Estás protegiendo tu comodidad inmediata a costa del producto.'
    },

    conceptToInternalize: {
      name: 'Disagree and Commit',
      vs: 'Please and Appease',
      explanation: 'Expresa tu desacuerdo con datos. Tu trabajo no es hacer amigos, es hacer que la empresa gane.'
    },

    pivotActions: [
      {
        title: 'La Regla del "No"',
        description: 'Tu misión para el lunes es rechazar un requerimiento o negociar un plazo. No digas "sí" inmediatamente a nada.'
      },
      {
        title: 'Recurso Clave',
        description: 'Lee "The Art of Saying No" de Marty Cagan.'
      },
      {
        title: 'Mentalidad',
        description: 'Tu trabajo no es hacer amigos, es hacer que la empresa gane.'
      }
    ],

    costExamples: [
      { type: 'Deuda Técnica', amount: '$80K', description: 'en desarrollo de vaporware por features sin research' },
      { type: 'Daño Cultural', amount: '2 renuncias', description: 'por no confrontar toxicidad' },
      { type: 'Pérdida de Foco', amount: '3 meses', description: 'de retraso por roadmap diluido' }
    ]
  },

  'craft-obsessive': {
    id: 'craft-obsessive',
    type: 'failure',
    title: 'The Craft Obsessive',
    subtitle: 'El Artesano Obsesivo',
    emoji: '📉',
    color: 'purple',

    triggers: ['Purista', 'Perfeccionista', 'Idealista', 'Over-engineer', 'Quality-first'],

    headline: 'Diagnóstico: Estás atrapado siendo "The Craft Obsessive"',
    tagline: 'Excelente diseñador, pero un cuello de botella para el negocio.',

    hardTruth: `Priorizas la calidad visual/técnica sobre el negocio o el tiempo.
    Mides el éxito por la pureza del sistema, la elegancia del código o la estética visual.
    El mercado mide el éxito por **resolución de problemas y revenue**. En un rol de liderazgo,
    la "calidad" incluye la velocidad de entrega y la viabilidad económica.`,

    blindSpot: {
      name: 'La Torre de Marfil',
      description: 'Confundes excelencia con perfección. Lo perfecto en tu cabeza tiene valor cero.'
    },

    conceptToInternalize: {
      name: 'Fixed Time, Variable Scope',
      vs: 'Fixed Scope, Variable Time',
      explanation: 'Define el tiempo primero, luego ajusta el alcance. El 80% shipped hoy vale más que el 100% shipped nunca.'
    },

    pivotActions: [
      {
        title: 'Adopta el "Good Enough"',
        description: 'Lanza algo que te dé vergüenza (versión beta) para aprender rápido.'
      },
      {
        title: 'Recurso Clave',
        description: 'Lee sobre Pareto Principle (80/20) aplicado a producto.'
      },
      {
        title: 'Mentalidad',
        description: 'El diseño que no está en producción tiene valor cero.'
      }
    ],

    costExamples: [
      { type: 'Oportunidad Perdida', amount: '$150K', description: 'por bloquear lanzamiento por detalle menor de UI' },
      { type: 'Parálisis', amount: '$400K/año', description: 'manteniendo código propietario inútil' },
      { type: 'Fricción', amount: '-30% velocidad', description: 'del equipo por estándares imposibles' }
    ]
  },

  'process-bureaucrat': {
    id: 'process-bureaucrat',
    type: 'failure',
    title: 'The Process Bureaucrat',
    subtitle: 'El Burócrata',
    emoji: '📉',
    color: 'blue',

    triggers: ['Dogmático', 'Burocrático', 'Risk Averse', 'Escalación', 'Proceso', 'Legal'],

    headline: 'Diagnóstico: Te escondes como un "Process Bureaucrat"',
    tagline: 'Usas las reglas como escudo para no tomar decisiones difíciles.',

    hardTruth: `Te escondes detrás de reglas, metodologías rígidas o Legal.
    Crees que si sigues el manual (Scrum, Design Thinking, Legal), no te pueden culpar si algo falla.
    El liderazgo requiere **navegar la ambigüedad**, no eliminarla con reglas.
    A veces, romper el proceso es la única forma de salvar el negocio.`,

    blindSpot: {
      name: 'Compliance sobre Outcome',
      description: 'Priorizas cumplir el proceso sobre entregar resultados.'
    },

    conceptToInternalize: {
      name: 'Outcome over Output',
      vs: 'Process over Progress',
      explanation: 'Los procesos sirven a las personas, no al revés. Flexibilidad táctica.'
    },

    pivotActions: [
      {
        title: 'Flexibilidad Táctica',
        description: 'Identifica una regla que esté frenando al equipo y elimínala hoy.'
      },
      {
        title: 'Recurso Clave',
        description: 'Shape Up (Basecamp) - para desaprender la rigidez de Agile.'
      },
      {
        title: 'Mentalidad',
        description: 'Los procesos sirven a las personas, no al revés.'
      }
    ],

    costExamples: [
      { type: 'Lentitud', amount: '6 semanas', description: 'de retraso por "investigación completa" innecesaria' },
      { type: 'Rigidez', amount: '1 cliente', description: 'perdido por tecnicismo de proceso' },
      { type: 'Irrelevancia', amount: '-50% influencia', description: 'por volverse el "policía del proceso"' }
    ]
  },

  'lone-wolf': {
    id: 'lone-wolf',
    type: 'failure',
    title: 'The Lone Wolf',
    subtitle: 'El Lobo Solitario',
    emoji: '📉',
    color: 'red',

    triggers: ['Heroico', 'Silo', 'Centralizado', 'Micromanager', 'Solo', 'Personal'],

    headline: 'Diagnóstico: Operas como "The Lone Wolf"',
    tagline: 'Intentas cargar el mundo sobre tus hombros, y eso no escala.',

    hardTruth: `Intentas resolverlo todo solo, no delegas, creas cuellos de botella personales.
    Confundes liderazgo con heroísmo. Tu capacidad individual es finita.
    Tu trabajo como Lead no es ser el mejor diseñador en la sala, es **construir la máquina**
    que diseña bien sin ti. Eres un Single Point of Failure.`,

    blindSpot: {
      name: 'Si quieres algo bien hecho, hazlo tú',
      description: 'Al no delegar, tus juniors no aprenden y tú te quemas.'
    },

    conceptToInternalize: {
      name: 'Multiplier Mindset',
      vs: 'Hero Complex',
      explanation: 'Tu output es el output de tu equipo. Delegar es tu trabajo principal.'
    },

    pivotActions: [
      {
        title: 'Delegación Radical',
        description: 'Entrega tu tarea más importante de la semana a un Senior y dale solo feedback, no ejecución.'
      },
      {
        title: 'Recurso Clave',
        description: 'Multipliers de Liz Wiseman.'
      },
      {
        title: 'Mentalidad',
        description: 'Tu output es el output de tu equipo.'
      }
    ],

    costExamples: [
      { type: 'Bus Factor', amount: '1', description: '- tú eres el único punto de fallo' },
      { type: 'Burnout', amount: '60+ hrs/semana', description: 'insostenibles por no delegar' },
      { type: 'Falta de Crecimiento', amount: '0 promotions', description: 'de juniors en 2 años' }
    ]
  }
};

// ============================================
// ARQUETIPOS DE ÉXITO (>= 80%)
// ============================================

export const successArchetypes = {
  'venture-architect': {
    id: 'venture-architect',
    type: 'success',
    title: 'The Venture Architect',
    subtitle: 'Perfil CPO',
    emoji: '🏆',
    color: 'emerald',

    // Categorías de preguntas que activan este arquetipo
    categories: ['Estrategia de Producto', 'Data-Driven Design', 'Gestión de OKRs', 'Producto vs Ventas'],

    headline: '🚀 Diagnóstico: Eres un "Venture Architect"',
    tagline: 'Visión de negocio impecable. Listo para fundar o ser CPO.',

    description: `Piensas como un inversor/CPO. Maximizas valor de negocio.
    Tu instinto financiero y estratégico es afilado.`,

    wins: [
      { type: 'Capital Efficiency', description: 'Priorizaste la rentabilidad sobre la vanidad en decisiones clave.' },
      { type: 'Strategic Defense', description: 'Protegiste el mercado contra competidores usando tácticas inteligentes.' },
      { type: 'M&A Mastery', description: 'Gestionaste fusiones de sistemas minimizando deuda técnica y política.' }
    ],

    nextCeiling: {
      challenge: '¿Puedes mantener esta frialdad estratégica sin alienar a los equipos creativos que se mueven por pasión?',
      risk: 'Tu riesgo ahora es perder el "alma" del producto. No te conviertas en un financiero puro que olvida por qué los usuarios aman el producto.'
    },

    executiveReading: '7 Powers (Hamilton Helmer)'
  },

  'culture-builder': {
    id: 'culture-builder',
    type: 'success',
    title: 'The Culture Builder',
    subtitle: 'Perfil VP Design',
    emoji: '🏆',
    color: 'rose',

    categories: ['Gestión de Crisis & Liderazgo', 'Community Management', 'Contratación Estratégica', 'Crisis Política Organizacional'],

    headline: '❤️ Diagnóstico: Eres un "Culture Builder"',
    tagline: 'Liderazgo humano de clase mundial. Tus equipos te seguirían al infierno.',

    description: `Líder humano excepcional. Construyes equipos resilientes y seguros.
    Eres el líder que todos quieren tener.`,

    wins: [
      { type: 'Retention', description: 'Salvaste talento clave navegando políticas difíciles.' },
      { type: 'Resilience', description: 'Gestionaste el trauma de situaciones difíciles con empatía y realismo.' },
      { type: 'Ethics', description: 'Protegiste la marca de riesgos legales y éticos.' }
    ],

    nextCeiling: {
      challenge: 'A veces hay que sacrificar la armonía cultural para sobrevivir a un competidor agresivo. ¿Podrás tomar la decisión impopular cuando sea necesaria?',
      risk: 'Tu riesgo es volverte demasiado protector ("Mamá Gallina") y lento ante cambios agresivos del mercado.'
    },

    executiveReading: 'The Hard Thing About Hard Things (Ben Horowitz)'
  },

  'force-multiplier': {
    id: 'force-multiplier',
    type: 'success',
    title: 'The Force Multiplier',
    subtitle: 'Perfil Staff/Principal',
    emoji: '🏆',
    color: 'indigo',

    categories: ['Arquitectura de Sistemas', 'Ingeniería de Diseño', 'Estrategia de Migración', 'Deuda Técnica'],

    headline: '⚡ Diagnóstico: Eres un "Force Multiplier"',
    tagline: 'Maestro de sistemas y escala. Haces que 10 personas rindan como 100.',

    description: `Maestro de la eficiencia operativa y escalabilidad técnica.
    Optimizas la máquina a la perfección.`,

    wins: [
      { type: 'Operational Scale', description: 'Resolviste caos con sistemas, no con horas hombre.' },
      { type: 'Technical Leverage', description: 'Elegiste la arquitectura correcta, evitando deuda masiva.' },
      { type: 'Global Efficiency', description: 'Habilitaste el trabajo asíncrono real.' }
    ],

    nextCeiling: {
      challenge: 'Tus soluciones son lógicamente perfectas, pero a veces la política corporativa no es lógica. Necesitas aprender a vender tus sistemas a personas que no entienden cómo funcionan.',
      risk: 'Tu reto ahora es salir de la operación y aprender a manejar la política de Boardroom.'
    },

    executiveReading: 'High Output Management (Andrew Grove)'
  }
};

// ============================================
// MAPEO DE TIPOS → ARQUETIPOS (del documento)
// ============================================

export const failureArchetypeMap = {
  // The Order Taker
  'Complaciente': 'order-taker',
  'Obediente': 'order-taker',
  'Mercenario': 'order-taker',
  'Sándwich': 'order-taker',
  'Compliance': 'order-taker',

  // The Craft Obsessive
  'Purista': 'craft-obsessive',
  'Perfeccionista': 'craft-obsessive',
  'Idealista': 'craft-obsessive',
  'Over-engineer': 'craft-obsessive',
  'Quality-first': 'craft-obsessive',

  // The Process Bureaucrat
  'Dogmático': 'process-bureaucrat',
  'Burocrático': 'process-bureaucrat',
  'Risk Averse': 'process-bureaucrat',
  'Escalación': 'process-bureaucrat',

  // The Lone Wolf
  'Heroico': 'lone-wolf',
  'Silo': 'lone-wolf',
  'Centralizado': 'lone-wolf',
  'Micromanager': 'lone-wolf'
};

export const successArchetypeMap = {
  // The Venture Architect
  'Estrategia de Producto': 'venture-architect',
  'Data-Driven Design': 'venture-architect',
  'Gestión de OKRs': 'venture-architect',
  'Producto vs Ventas': 'venture-architect',

  // The Culture Builder
  'Gestión de Crisis & Liderazgo': 'culture-builder',
  'Community Management': 'culture-builder',
  'Contratación Estratégica': 'culture-builder',
  'Crisis Política Organizacional': 'culture-builder',

  // The Force Multiplier
  'Arquitectura de Sistemas': 'force-multiplier',
  'Ingeniería de Diseño': 'force-multiplier',
  'Estrategia de Migración': 'force-multiplier',
  'Deuda Técnica': 'force-multiplier'
};

// ============================================
// LÓGICA DE DETECCIÓN
// ============================================

/**
 * Selecciona el arquetipo basado en score y patrones
 * @param {number} accuracy - Porcentaje de aciertos (0-100)
 * @param {Array} failedQuestions - Preguntas falladas
 * @param {Array} succeededQuestions - Preguntas acertadas
 * @param {Object} answers - Respuestas del usuario
 */
export const selectArchetype = (accuracy, failedQuestions, succeededQuestions, answers) => {
  // Si score >= 80%, buscar arquetipo de ÉXITO basado en categorías dominantes
  if (accuracy >= 80) {
    return selectSuccessArchetype(succeededQuestions);
  }

  // Si score < 80%, buscar arquetipo de FALLO basado en tipos de error
  return selectFailureArchetype(failedQuestions, answers);
};

/**
 * Detecta arquetipo de FALLO basado en tipos de opciones elegidas
 */
export const selectFailureArchetype = (failedQuestions, answers) => {
  const archetypeCounts = {
    'order-taker': 0,
    'craft-obsessive': 0,
    'process-bureaucrat': 0,
    'lone-wolf': 0
  };

  // Contar matches por cada pregunta fallada
  failedQuestions.forEach(q => {
    const answer = answers[q.id];
    if (!answer?.selectedType) return;

    const selectedType = answer.selectedType;

    // Buscar en el mapa directo
    const mappedArchetype = failureArchetypeMap[selectedType];
    if (mappedArchetype) {
      archetypeCounts[mappedArchetype]++;
      return;
    }

    // Buscar por triggers (match parcial)
    Object.values(failureArchetypes).forEach(archetype => {
      const matches = archetype.triggers.some(trigger =>
        selectedType.toLowerCase().includes(trigger.toLowerCase()) ||
        trigger.toLowerCase().includes(selectedType.toLowerCase())
      );
      if (matches) {
        archetypeCounts[archetype.id]++;
      }
    });
  });

  // Encontrar el dominante
  let dominant = 'order-taker'; // fallback
  let maxCount = 0;

  Object.entries(archetypeCounts).forEach(([id, count]) => {
    if (count > maxCount) {
      maxCount = count;
      dominant = id;
    }
  });

  const totalErrors = failedQuestions.length;

  return {
    ...failureArchetypes[dominant],
    percentage: totalErrors > 0 ? Math.round((maxCount / totalErrors) * 100) : 0,
    count: maxCount,
    isDefault: maxCount < 2
  };
};

/**
 * Detecta arquetipo de ÉXITO basado en categorías de preguntas acertadas
 */
export const selectSuccessArchetype = (succeededQuestions) => {
  const archetypeCounts = {
    'venture-architect': 0,
    'culture-builder': 0,
    'force-multiplier': 0
  };

  // Contar wins por categoría
  succeededQuestions.forEach(q => {
    const category = q.category;
    const mappedArchetype = successArchetypeMap[category];
    if (mappedArchetype) {
      archetypeCounts[mappedArchetype]++;
    }
  });

  // Encontrar el dominante
  let dominant = 'venture-architect'; // fallback
  let maxCount = 0;

  Object.entries(archetypeCounts).forEach(([id, count]) => {
    if (count > maxCount) {
      maxCount = count;
      dominant = id;
    }
  });

  const totalSuccesses = succeededQuestions.length;

  return {
    ...successArchetypes[dominant],
    percentage: totalSuccesses > 0 ? Math.round((maxCount / totalSuccesses) * 100) : 0,
    count: maxCount,
    isDefault: maxCount < 2
  };
};

// ============================================
// LEGACY COMPATIBILITY
// ============================================

// Para compatibilidad con código existente
export const diagnoses = {
  ...failureArchetypes,
  // Alias para el código antiguo
  'conflict-avoidant': failureArchetypes['order-taker'],
  'perfectionist': failureArchetypes['craft-obsessive'],
  'risk-averse': failureArchetypes['process-bureaucrat'],
  'short-term': failureArchetypes['lone-wolf']
};

export const detectDominantBias = (failedQuestions, answers) => {
  return selectFailureArchetype(failedQuestions, answers);
};

export const getDiagnosisById = (id) => {
  return failureArchetypes[id] || successArchetypes[id] || diagnoses[id] || null;
};

export const getAllDiagnoses = () => [
  ...Object.values(failureArchetypes),
  ...Object.values(successArchetypes)
];
