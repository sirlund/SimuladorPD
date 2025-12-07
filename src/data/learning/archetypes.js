/**
 * Error Archetypes - Patrones de error que revelan sesgos de decisión
 * Se detectan analizando los "type" de las opciones elegidas
 */

export const archetypes = {
  'mercenary': {
    id: 'mercenary',
    name: 'El Mercenario',
    pattern: 'Prioriza revenue y métricas de corto plazo sobre todo',
    icon: '💰',
    color: 'yellow',
    triggers: ['Revenue-first', 'Mercenario', 'Short-term'],
    blindSpot: 'Deuda técnica, cultura, sostenibilidad del negocio',
    rootCause: 'Presión de resultados trimestrales o inseguridad laboral',
    reframe: 'El revenue sostenible viene de productos que los usuarios aman. Optimizar solo para extracción de valor crea churn.',
    keyLesson: 'Los mejores productos balancean valor para usuario con valor para el negocio. No son opuestos.',
    resources: ['svpg-product-market-fit', 'reforge-retention'],
    exercises: [
      'Antes de cada decisión, pregunta: "¿Esto aumenta o disminuye la confianza del usuario?"',
      'Calcula el costo de churn causado por decisiones de corto plazo'
    ]
  },

  'idealist': {
    id: 'idealist',
    name: 'El Idealista',
    pattern: 'Prioriza pureza técnica o de diseño sobre pragmatismo',
    icon: '✨',
    color: 'purple',
    triggers: ['Idealista', 'Purista', 'Perfect'],
    blindSpot: 'Time-to-market, recursos limitados, contexto de negocio',
    rootCause: 'Orgullo profesional, miedo a comprometer calidad',
    reframe: 'El mejor diseño es el que existe y resuelve problemas reales. Un diseño perfecto que nunca se lanza tiene valor cero.',
    keyLesson: 'Pragmatismo no es mediocridad. Es elegir las batallas correctas.',
    resources: ['basecamp-shape-up', 'lean-ux'],
    exercises: [
      'Define "suficientemente bueno" antes de empezar cada proyecto',
      'Pregunta: "¿Qué es lo mínimo que prueba nuestra hipótesis?"'
    ]
  },

  'pleaser': {
    id: 'pleaser',
    name: 'El Complaciente',
    pattern: 'Evita conflicto y prioriza armonía sobre impacto',
    icon: '🙏',
    color: 'pink',
    triggers: ['Obediente', 'Complaciente', 'Avoid conflict'],
    blindSpot: 'Impacto real, voz propia, liderazgo',
    rootCause: 'Miedo al conflicto, inseguridad, cultura de jerarquía rígida',
    reframe: 'Tu trabajo no es hacer felices a los stakeholders. Es entregar valor. A veces eso requiere decir verdades incómodas.',
    keyLesson: 'El respeto se gana con resultados y honestidad, no con obediencia.',
    resources: ['radical-candor', 'hbr-manage-up'],
    exercises: [
      'Practica "Disagree and Commit": expresa tu opinión, luego ejecuta la decisión',
      'Usa Data Shield: presenta datos objetivos en lugar de opiniones'
    ]
  },

  'overengineer': {
    id: 'overengineer',
    name: 'El Sobre-Ingeniero',
    pattern: 'Construye soluciones complejas para problemas simples',
    icon: '🔧',
    color: 'blue',
    triggers: ['Over-engineer', 'Técnico', 'Complex'],
    blindSpot: 'Simplicidad, costo de mantenimiento, velocidad',
    rootCause: 'Fascinación técnica, resume-driven development, miedo a parecer junior',
    reframe: 'La complejidad es un costo, no un feature. Cada línea de código es deuda potencial.',
    keyLesson: 'La solución más elegante es la más simple que funciona.',
    resources: ['martin-fowler-refactoring', 'kiss-principle'],
    exercises: [
      'Antes de cada solución, pregunta: "¿Cuál es la versión más simple?"',
      'Elimina código antes de agregar código'
    ]
  },

  'protector': {
    id: 'protector',
    name: 'El Protector',
    pattern: 'Prioriza bienestar del equipo sobre necesidades del negocio',
    icon: '🛡️',
    color: 'green',
    triggers: ['Protector', 'Team-first', 'Shield'],
    blindSpot: 'Realidades del negocio, accountability, crecimiento del equipo',
    rootCause: 'Empatía mal dirigida, experiencias pasadas de burnout',
    reframe: 'Proteger al equipo de TODO el estrés no los ayuda a crecer. Tu trabajo es filtrar el ruido, no eliminar los desafíos.',
    keyLesson: 'El verdadero cuidado incluye dar feedback difícil y exponer al equipo a presión manejable.',
    resources: ['antifragile-teams', 'psychological-safety'],
    exercises: [
      'Distingue entre "presión productiva" y "presión tóxica"',
      'Pregunta: "¿Esto protege al equipo o me protege a mí de conversaciones difíciles?"'
    ]
  },

  'fomo': {
    id: 'fomo',
    name: 'El FOMO Tecnológico',
    pattern: 'Adopta tendencias sin validar fit con el problema',
    icon: '🚀',
    color: 'orange',
    triggers: ['FOMO', 'Hype', 'Trendy'],
    blindSpot: 'Fit real, costo de adopción, madurez de la tecnología',
    rootCause: 'Miedo a quedarse atrás, presión de mercado, seducción del "nuevo"',
    reframe: 'La tecnología es un medio, no un fin. AI/Blockchain/etc solo importan si resuelven un problema real mejor que las alternativas.',
    keyLesson: 'Ser early adopter tiene costos. Ser fast follower suele ser más eficiente.',
    resources: ['technology-adoption-curve', 'gartner-hype-cycle'],
    exercises: [
      'Para cada tecnología nueva, define: "¿Qué problema específico resuelve mejor?"',
      'Espera 6 meses antes de adoptar cualquier tecnología con hype'
    ]
  },

  'delegator': {
    id: 'delegator',
    name: 'El Delegador Extremo',
    pattern: 'Abdica responsabilidad disfrazándolo de "empowerment"',
    icon: '🎯',
    color: 'slate',
    triggers: ['Autonomy', 'Empower', 'Self-organize'],
    blindSpot: 'Dirección, accountability, soporte necesario',
    rootCause: 'Evitar responsabilidad, malentender liderazgo servil',
    reframe: 'Empowerment sin dirección es abandono. Tu trabajo es dar contexto, no desaparecer.',
    keyLesson: 'Delegar outcomes, no abdicar responsabilidad.',
    resources: ['turn-the-ship-around', 'situational-leadership'],
    exercises: [
      'Al delegar, define: contexto, constraints, criterios de éxito',
      'Pregunta: "¿Tiene esta persona la información necesaria para decidir bien?"'
    ]
  },

  'reactive': {
    id: 'reactive',
    name: 'El Reactivo',
    pattern: 'Responde a cada input sin filtrar o priorizar',
    icon: '🔥',
    color: 'red',
    triggers: ['Reactive', 'Urgent', 'Firefighter'],
    blindSpot: 'Proactividad, estrategia, prevención',
    rootCause: 'Cultura de urgencia, falta de sistemas, dopamina de resolver crisis',
    reframe: 'Si todo es urgente, nada es urgente. Los mejores líderes previenen incendios, no solo los apagan.',
    keyLesson: 'Invertir en prevención es más valioso que ser héroe de crisis.',
    resources: ['essentialism', 'deep-work'],
    exercises: [
      'Bloquea 2 horas diarias para trabajo proactivo (no reactivo)',
      'Para cada "urgencia", pregunta: "¿Qué sistema falló para que esto sea urgente?"'
    ]
  }
};

export const getArchetypeById = (id) => archetypes[id] || null;

export const getAllArchetypes = () => Object.values(archetypes);

/**
 * Detecta arquetipos basado en los types de opciones elegidas
 * @param {Array} answers - Array de {optionType: string, score: number}
 * @returns {Array} - Arquetipos detectados ordenados por frecuencia
 */
export const detectArchetypes = (answers) => {
  const archetypeCounts = {};

  answers.forEach(answer => {
    const type = answer.optionType?.toLowerCase() || '';

    Object.values(archetypes).forEach(archetype => {
      const matches = archetype.triggers.some(trigger =>
        type.includes(trigger.toLowerCase())
      );
      if (matches && answer.score < 5) {
        archetypeCounts[archetype.id] = (archetypeCounts[archetype.id] || 0) + 1;
      }
    });
  });

  return Object.entries(archetypeCounts)
    .map(([id, count]) => ({ ...archetypes[id], count }))
    .filter(a => a.count >= 2) // Solo si aparece 2+ veces
    .sort((a, b) => b.count - a.count);
};
