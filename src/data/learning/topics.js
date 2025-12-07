/**
 * Learning Topics - Categorías principales de conocimiento
 * Cada pregunta se mapea a uno o más topics
 */

export const topics = {
  'product-strategy': {
    id: 'product-strategy',
    name: 'Estrategia de Producto',
    description: 'Decisiones de roadmap, priorización y trade-offs de negocio',
    icon: '🎯',
    color: 'indigo',
    keyQuestions: [
      '¿Cuándo decir no a un cliente Enterprise?',
      '¿Cómo balancear deuda técnica vs features?',
      '¿Priorizar revenue inmediato o visión a largo plazo?'
    ],
    coreFrameworks: ['jobs-to-be-done', 'opportunity-scoring', 'rice-framework'],
    relatedTopics: ['stakeholder-management', 'metrics-analytics']
  },

  'stakeholder-management': {
    id: 'stakeholder-management',
    name: 'Gestión de Stakeholders',
    description: 'Manage up, conflictos políticos y alineación organizacional',
    icon: '🤝',
    color: 'purple',
    keyQuestions: [
      '¿Cómo decir no al CEO sin quemar puentes?',
      '¿Cuándo escalar vs resolver internamente?',
      '¿Cómo manejar promesas de ventas imposibles?'
    ],
    coreFrameworks: ['data-shield', 'disagree-and-commit', 'stakeholder-mapping'],
    relatedTopics: ['product-strategy', 'crisis-management']
  },

  'team-leadership': {
    id: 'team-leadership',
    name: 'Liderazgo de Equipos',
    description: 'Cultura, hiring, feedback, desarrollo y retención de talento',
    icon: '👥',
    color: 'pink',
    keyQuestions: [
      '¿Cómo manejar un top performer tóxico?',
      '¿Contratar por skill o por culture fit?',
      '¿Cuándo intervenir en burnout del equipo?'
    ],
    coreFrameworks: ['radical-candor', 'situational-leadership', 'psychological-safety'],
    relatedTopics: ['stakeholder-management', 'crisis-management']
  },

  'design-systems': {
    id: 'design-systems',
    name: 'Sistemas de Diseño',
    description: 'Arquitectura, tokens, componentes y gobernanza de design systems',
    icon: '🧱',
    color: 'blue',
    keyQuestions: [
      '¿Cuándo romper el sistema por velocidad?',
      '¿Cómo unificar sistemas post-M&A?',
      '¿Tokens vs hardcode bajo presión?'
    ],
    coreFrameworks: ['atomic-design', 'design-tokens', 'component-api-design'],
    relatedTopics: ['product-strategy', 'innovation-tech']
  },

  'research-methods': {
    id: 'research-methods',
    name: 'Métodos de Research',
    description: 'Cuali vs cuanti, validación, sesgos y democratización de research',
    icon: '🔬',
    color: 'green',
    keyQuestions: [
      '¿Cuándo confiar en data vs intuición?',
      '¿Cómo hacer research con zero budget?',
      '¿Survey vs usability test?'
    ],
    coreFrameworks: ['continuous-discovery', 'jobs-to-be-done', 'assumption-mapping'],
    relatedTopics: ['metrics-analytics', 'product-strategy']
  },

  'metrics-analytics': {
    id: 'metrics-analytics',
    name: 'Métricas y Analytics',
    description: 'KPIs, atribución, experimentos y data-driven decisions',
    icon: '📊',
    color: 'emerald',
    keyQuestions: [
      '¿North Star Metric vs múltiples KPIs?',
      '¿Cómo medir impacto de diseño?',
      '¿A/B test vs ship and iterate?'
    ],
    coreFrameworks: ['pirate-metrics', 'heart-framework', 'statistical-significance'],
    relatedTopics: ['research-methods', 'product-strategy']
  },

  'mobile-platform': {
    id: 'mobile-platform',
    name: 'Plataformas Mobile',
    description: 'iOS/Android, PWA vs native, performance y platform-specific UX',
    icon: '📱',
    color: 'orange',
    keyQuestions: [
      '¿PWA vs Native vs Hybrid?',
      '¿Cómo manejar fragmentación Android?',
      '¿Feature parity vs platform-first?'
    ],
    coreFrameworks: ['mobile-first', 'progressive-enhancement', 'platform-conventions'],
    relatedTopics: ['design-systems', 'innovation-tech']
  },

  'innovation-tech': {
    id: 'innovation-tech',
    name: 'Innovación y Tecnología',
    description: 'AI, nuevas tecnologías, adopción y evaluación de hype vs valor',
    icon: '💡',
    color: 'yellow',
    keyQuestions: [
      '¿Cuándo adoptar una nueva tecnología?',
      '¿Cómo evaluar AI hype vs valor real?',
      '¿Build vs buy vs integrate?'
    ],
    coreFrameworks: ['technology-adoption-curve', 'build-buy-partner', 'innovation-accounting'],
    relatedTopics: ['product-strategy', 'design-systems']
  },

  'ethics-compliance': {
    id: 'ethics-compliance',
    name: 'Ética y Compliance',
    description: 'Dark patterns, GDPR, accesibilidad y diseño responsable',
    icon: '⚖️',
    color: 'slate',
    keyQuestions: [
      '¿Dónde está la línea del dark pattern?',
      '¿Cómo balancear growth vs ética?',
      '¿Accesibilidad como feature o requisito?'
    ],
    coreFrameworks: ['ethical-design', 'wcag-guidelines', 'privacy-by-design'],
    relatedTopics: ['metrics-analytics', 'product-strategy']
  },

  'crisis-management': {
    id: 'crisis-management',
    name: 'Gestión de Crisis',
    description: 'Deadlines imposibles, bugs críticos, escalaciones y presión',
    icon: '🚨',
    color: 'red',
    keyQuestions: [
      '¿Scope, timeline o calidad - qué sacrificar?',
      '¿Cómo comunicar malas noticias hacia arriba?',
      '¿Cuándo parar todo para arreglar deuda?'
    ],
    coreFrameworks: ['iron-triangle', 'blameless-postmortem', 'incident-response'],
    relatedTopics: ['stakeholder-management', 'team-leadership']
  }
};

export const getTopicById = (id) => topics[id] || null;

export const getAllTopics = () => Object.values(topics);
