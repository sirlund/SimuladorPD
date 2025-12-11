/**
 * VP Feedback - Evaluación de competencias estilo "feedback de manager"
 * Directo, sin eufemismos, pero constructivo
 */

export const competencies = {
  'craft-quality': {
    id: 'craft-quality',
    name: 'Craft & Calidad',
    icon: '🎨',
    categories: ['Arquitectura de Sistemas', 'Ingeniería de Diseño', 'Sistemas de Diseño'],
    description: 'Dominio técnico de sistemas de diseño, arquitectura y calidad visual.',
    levels: {
      staff: {
        level: 'staff',
        label: 'Staff Level',
        color: 'green',
        emoji: '🟢',
        feedback: 'Tu instinto visual y de sistemas es impecable. Sabes cómo debe verse y sentirse el producto.',
        growth: 'Enfócate en multiplicar tu impacto: mentoring, gobernanza, estándares de industria.'
      },
      senior: {
        level: 'senior',
        label: 'Senior',
        color: 'emerald',
        emoji: '🟢',
        feedback: 'Sólido en craft. Ocasionalmente over-engineer, pero entregas calidad consistente.',
        growth: 'Practica "suficientemente bueno". No todo necesita ser tu mejor trabajo.'
      },
      mid: {
        level: 'mid',
        label: 'Mid Level',
        color: 'yellow',
        emoji: '🟡',
        feedback: 'Buenos fundamentos, pero necesitas más exposición a sistemas complejos.',
        growth: 'Busca proyectos de Design System o arquitectura. Lee sobre tokens y gobernanza.'
      },
      junior: {
        level: 'junior',
        label: 'En Desarrollo',
        color: 'red',
        emoji: '🔴',
        feedback: 'Enfócate en los basics antes de escalar. Domina un sistema antes de crear uno.',
        growth: 'Estudia Design Systems existentes (Polaris, Carbon). Entiende el "por qué" antes del "cómo".'
      }
    }
  },

  'business-vision': {
    id: 'business-vision',
    name: 'Visión de Negocio',
    icon: '📊',
    categories: ['Estrategia de Producto', 'Data-Driven Design', 'Gestión de OKRs', 'Producto vs Ventas'],
    description: 'Capacidad de conectar diseño con resultados de negocio y métricas.',
    levels: {
      staff: {
        level: 'staff',
        label: 'Staff Level',
        color: 'green',
        emoji: '🟢',
        feedback: 'Piensas como CEO. Cada decisión de diseño está conectada a revenue y retención.',
        growth: 'Comparte tu framework con el equipo. Escribe sobre cómo mides impacto.'
      },
      senior: {
        level: 'senior',
        label: 'Senior',
        color: 'emerald',
        emoji: '🟢',
        feedback: 'Entiendes el valor, pero a veces te cuesta sacrificar calidad por velocidad.',
        growth: 'Practica el trade-off consciente. No todo merece el mismo nivel de inversión.'
      },
      mid: {
        level: 'mid',
        label: 'Mid Level',
        color: 'yellow',
        emoji: '🟡',
        feedback: 'Sabes que el negocio importa, pero te falta conectar tus decisiones con métricas.',
        growth: 'Pide acceso a dashboards. Pregunta "¿cómo medimos éxito?" en cada proyecto.'
      },
      junior: {
        level: 'junior',
        label: 'En Desarrollo',
        color: 'red',
        emoji: '🔴',
        feedback: 'Diseñas en el vacío. No sabes cómo tu trabajo impacta el P&L.',
        growth: 'Lee sobre Product-Led Growth, métricas SaaS (CAC, LTV, Churn). Entiende el modelo de negocio.'
      }
    }
  },

  'politics-power': {
    id: 'politics-power',
    name: 'Política & Poder',
    icon: '🎯',
    categories: ['Manage Up', 'Gestión de Stakeholders', 'Crisis Política Organizacional'],
    description: 'Habilidad para navegar la organización, influir y proteger la estrategia.',
    levels: {
      staff: {
        level: 'staff',
        label: 'Staff Level',
        color: 'green',
        emoji: '🟢',
        feedback: 'Sabes navegar la organización sin quemarte. Usas datos como escudo y construyes alianzas.',
        growth: 'Mentora a otros en política organizacional. Es una skill que pocos enseñan.'
      },
      senior: {
        level: 'senior',
        label: 'Senior',
        color: 'emerald',
        emoji: '🟢',
        feedback: 'Bien posicionado, pero evitas algunos conflictos clave que necesitan confrontación.',
        growth: 'Practica "Disagree and Commit". El conflicto productivo es parte del rol.'
      },
      mid: {
        level: 'mid',
        label: 'Mid Level',
        color: 'yellow',
        emoji: '🟡',
        feedback: 'Te pliegas ante la autoridad. Necesitas aprender a decir "No" usando datos como escudo.',
        growth: 'Lee Radical Candor. Practica el script: "Podemos, pero el costo es X. ¿Qué prefieres?"'
      },
      junior: {
        level: 'junior',
        label: 'En Desarrollo',
        color: 'red',
        emoji: '🔴',
        feedback: 'No entiendes cómo funciona el poder en la organización. Eres invisible o prescindible.',
        growth: 'Mapea stakeholders. Identifica quién tiene poder real (no solo título). Construye aliados.'
      }
    }
  },

  'crisis-execution': {
    id: 'crisis-execution',
    name: 'Ejecución en Crisis',
    icon: '🚨',
    categories: ['Gestión de Crisis & Liderazgo', 'Community Management', 'Estrategia de Migración'],
    description: 'Capacidad de tomar decisiones bajo presión y liderar en momentos críticos.',
    levels: {
      staff: {
        level: 'staff',
        label: 'Staff Level',
        color: 'green',
        emoji: '🟢',
        feedback: 'En crisis, eres quien todos buscan. Mantienes la calma y tomas ownership total.',
        growth: 'Documenta tus playbooks de crisis. Entrena al equipo para que no dependan solo de ti.'
      },
      senior: {
        level: 'senior',
        label: 'Senior',
        color: 'emerald',
        emoji: '🟢',
        feedback: 'Manejas bien la presión, pero a veces sobre-reaccionas o sub-comunicas.',
        growth: 'Practica comunicación de crisis. La calma se transmite. El pánico también.'
      },
      mid: {
        level: 'mid',
        label: 'Mid Level',
        color: 'yellow',
        emoji: '🟡',
        feedback: 'Te paralizas o delegas hacia arriba cuando hay presión. Necesitas más exposición.',
        growth: 'Pide liderar el próximo incidente menor. La experiencia es el único maestro.'
      },
      junior: {
        level: 'junior',
        label: 'En Desarrollo',
        color: 'red',
        emoji: '🔴',
        feedback: 'En crisis, eres parte del problema o invisible. No sabes qué hacer primero.',
        growth: 'Estudia post-mortems públicos (Gitlab, Cloudflare). Entiende la anatomía de una crisis.'
      }
    }
  }
};

/**
 * Mapeo de categorías de preguntas a competencias
 */
export const categoryToCompetency = {
  'Arquitectura de Sistemas': 'craft-quality',
  'Arquitectura de Sistemas (M&A)': 'craft-quality',
  'Ingeniería de Diseño': 'craft-quality',
  'Sistemas de Diseño': 'craft-quality',
  'Deuda Técnica': 'craft-quality',

  'Estrategia de Producto': 'business-vision',
  'Data-Driven Design': 'business-vision',
  'Gestión de OKRs': 'business-vision',
  'Producto vs Ventas': 'business-vision',
  'Contratación Estratégica': 'business-vision',

  'Manage Up': 'politics-power',
  'Gestión de Stakeholders': 'politics-power',
  'Crisis Política Organizacional': 'politics-power',

  'Gestión de Crisis & Liderazgo': 'crisis-execution',
  'Community Management': 'crisis-execution',
  'Estrategia de Migración': 'crisis-execution'
};

/**
 * Calcula el nivel de una competencia basado en el porcentaje
 */
export const calculateLevel = (percentage) => {
  if (percentage >= 85) return 'staff';
  if (percentage >= 70) return 'senior';
  if (percentage >= 50) return 'mid';
  return 'junior';
};

/**
 * Calcula el mapa de competencias completo
 */
export const calculateCompetencyMap = (activeQuestions, answers) => {
  const competencyScores = {};

  // Inicializar
  Object.keys(competencies).forEach(id => {
    competencyScores[id] = { score: 0, maxScore: 0, count: 0 };
  });

  // Acumular scores por competencia
  activeQuestions.forEach(q => {
    const answer = answers[q.id];
    if (!answer) return;

    const competencyId = categoryToCompetency[q.category];
    if (!competencyId) return;

    competencyScores[competencyId].score += answer.score;
    competencyScores[competencyId].maxScore += 5;
    competencyScores[competencyId].count += 1;
  });

  // Calcular porcentajes y niveles
  return Object.entries(competencyScores)
    .filter(([_, data]) => data.count > 0)
    .map(([id, data]) => {
      const percentage = data.maxScore > 0
        ? Math.round((data.score / data.maxScore) * 100)
        : 0;
      const level = calculateLevel(percentage);
      const competency = competencies[id];

      return {
        id,
        name: competency.name,
        icon: competency.icon,
        percentage,
        level,
        levelData: competency.levels[level],
        count: data.count
      };
    })
    .sort((a, b) => a.percentage - b.percentage); // Peor primero
};

export const getCompetencyById = (id) => competencies[id] || null;
export const getAllCompetencies = () => Object.values(competencies);
