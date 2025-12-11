/**
 * Monday Missions - Acciones concretas para el lunes
 * Cada misión tiene un trigger, qué NO hacer, qué SÍ hacer, y el principio detrás
 */

export const mondayMissions = {
  'conflict-avoidant': {
    id: 'conflict-avoidant',
    title: 'El Trade-Off Explícito',
    emoji: '⚖️',

    trigger: 'La próxima solicitud que recibas que **sabes que está mal** (cambio de último minuto, feature sin research, scope creep).',

    donts: [
      'Decir "Sí" automáticamente',
      'Decir "No" sin alternativa',
      'Aceptar en silencio y quejarte después'
    ],

    script: `**Di esto literalmente:**

"Podemos hacerlo, pero el costo es retrasar [Proyecto X] dos semanas. ¿Qué prefieres priorizar?"`,

    principle: 'Pon el trade-off sobre la mesa. Que **ellos** decidan qué sacrificar, no tú.',

    whyItWorks: 'Al explicitar el costo, dejas de ser el "bloqueador" y te conviertes en el "asesor que muestra realidad". La decisión (y la responsabilidad) queda en ellos.'
  },

  'perfectionist': {
    id: 'perfectionist',
    title: 'El Shipping Forzado',
    emoji: '🚢',

    trigger: 'El próximo feature que estés **puliendo más de lo necesario** (una ronda más de feedback, un detalle más).',

    donts: [
      'Agregar "un detallito más"',
      'Pedir otra ronda de feedback',
      'Esperar a que esté "perfecto"'
    ],

    script: `**Pregúntate esto antes de cada iteración:**

"¿Este cambio va a hacer que el usuario tome una decisión diferente?"

Si la respuesta es NO → Ship it. Ahora.`,

    principle: 'Perfecto es lo que está en producción resolviendo problemas reales.',

    whyItWorks: 'El 80% de tu impacto viene del 20% del esfuerzo. El pulido extra tiene retornos decrecientes y costo de oportunidad creciente.'
  },

  'people-pleaser': {
    id: 'people-pleaser',
    title: 'La Postura Clara',
    emoji: '🎯',

    trigger: 'La próxima reunión donde haya **dos opiniones opuestas** y te pidan tu perspectiva.',

    donts: [
      'Decir "Ambos tienen puntos válidos"',
      'Proponer un "híbrido" que no satisface a nadie',
      'Quedarte callado esperando que otros decidan'
    ],

    script: `**Di esto:**

"Basado en [dato/evidencia], mi recomendación es [Opción X]. Puedo estar equivocado, pero esa es mi postura."`,

    principle: 'Strong opinions, loosely held. Ten una postura. Cámbiala solo ante nueva evidencia.',

    whyItWorks: 'Los líderes que no toman partido pierden respeto rápidamente. Tu trabajo es tener un punto de vista, aunque sea incómodo.'
  },

  'over-engineer': {
    id: 'over-engineer',
    title: 'El Principio YAGNI',
    emoji: '✂️',

    trigger: 'La próxima vez que pienses "mejor lo hago flexible para el futuro" o "agreguemos esta abstracción".',

    donts: [
      'Crear una abstracción "por si acaso"',
      'Diseñar para casos de uso hipotéticos',
      'Agregar configurabilidad que nadie pidió'
    ],

    script: `**Pregúntate:**

"¿Hay un usuario real pidiendo esto HOY?"

Si NO → No lo construyas. Punto.`,

    principle: 'YAGNI: You Aren\'t Gonna Need It. El código más fácil de mantener es el que no existe.',

    whyItWorks: 'El 90% de las "flexibilidades" que construyes nunca se usan. Cada abstracción es deuda de mantenimiento.'
  },

  'risk-averse': {
    id: 'risk-averse',
    title: 'El Desafío Controlado',
    emoji: '💪',

    trigger: 'La próxima vez que quieras **proteger al equipo** de un proyecto difícil o deadline ajustado.',

    donts: [
      'Decir "El equipo no puede con esto"',
      'Negociar menos scope "para protegerlos"',
      'Asumir que el estrés siempre es malo'
    ],

    script: `**Pregúntate primero:**

"¿Esto es presión TÓXICA o presión PRODUCTIVA?"

Tóxica = imposible, sin recursos, sin sentido
Productiva = difícil pero alcanzable, con aprendizaje`,

    principle: 'Los equipos se fortalecen con desafíos graduales, no con sobreprotección.',

    whyItWorks: 'Al blindar al equipo de TODO el estrés, también los blindas del crecimiento. El comfort zone es el cementerio de carreras.'
  },

  'short-term': {
    id: 'short-term',
    title: 'El Bloque Sagrado',
    emoji: '📅',

    trigger: 'Mañana lunes, antes de que empiece el caos.',

    donts: [
      'Empezar el día revisando Slack/email',
      'Dejar que las "urgencias" definan tu agenda',
      'Terminar el día sin haber avanzado en lo importante'
    ],

    script: `**Haz esto AHORA:**

Bloquea 2 horas en tu calendario mañana (no negociables) para trabajo IMPORTANTE (no urgente).

Etiquétalas: "Trabajo Estratégico - No mover"`,

    principle: 'Si no bloqueas tiempo para lo importante, lo urgente siempre ganará.',

    whyItWorks: 'Lo urgente grita, lo importante susurra. Sin protección activa, vivirás apagando incendios eternamente.'
  },

  'revenue-driven': {
    id: 'revenue-driven',
    title: 'El Filtro de Valor',
    emoji: '🔍',

    trigger: 'La próxima vez que Ventas pida una feature "porque el cliente la quiere".',

    donts: [
      'Decir "Sí" automáticamente porque es revenue',
      'Construirla en el core product sin pensar',
      'Ignorar el impacto en otros usuarios'
    ],

    script: `**Pregunta esto:**

"¿Cuántos otros clientes se beneficiarían de esto? ¿O es solo para este cliente?"

Si es solo 1 → Es consultoría, no producto. Cobra extra o rechaza.`,

    principle: 'Product ≠ Consultoría. El roadmap no es un menú à la carte para cada cliente.',

    whyItWorks: 'Cada feature custom que agregas diluye el producto para todos los demás. Proteger la visión es proteger el negocio.'
  },

  'tech-fomo': {
    id: 'tech-fomo',
    title: 'El Waiting Period',
    emoji: '⏳',

    trigger: 'La próxima vez que veas una tecnología nueva "que todos están usando" y quieras adoptarla.',

    donts: [
      'Proponer adoptarla esta semana',
      'Asumir que "si X empresa la usa, debe ser buena"',
      'Ignorar el costo de aprendizaje y migración'
    ],

    script: `**Aplica la regla de los 6 meses:**

"¿Esta tecnología existía y era estable hace 6 meses?"

Si NO → Espera. Deja que otros paguen el costo de los bugs v1.`,

    principle: 'Ser fast follower es más eficiente que ser early adopter. El hype muere, los problemas quedan.',

    whyItWorks: 'El 90% de las tecnologías "revolucionarias" desaparecen en 2 años. Los que esperan ahorran miles de horas de migración.'
  }
};

// Alias para los nuevos IDs del sistema de arquetipos
const missionAliases = {
  'order-taker': 'conflict-avoidant',
  'craft-obsessive': 'perfectionist',
  'process-bureaucrat': 'risk-averse',
  'lone-wolf': 'short-term'
};

export const getMissionByBias = (biasId) => {
  const aliasedId = missionAliases[biasId] || biasId;
  return mondayMissions[aliasedId] || mondayMissions['conflict-avoidant'];
};
export const getAllMissions = () => Object.values(mondayMissions);
