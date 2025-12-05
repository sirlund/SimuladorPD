import React from 'react';
import {
  Users, Brain, MessageSquare, Briefcase, Heart,
  Target, TrendingUp, DollarSign, Wifi
} from 'lucide-react';

/**
 * Cultura, Stakeholders & Business
 */
export const culture_questions = [
  // --- BLOQUE 12: CULTURA, FEEDBACK & MENTORÍA ---
  {
    id: 'critique_session_dominance',
    displayId: 'CUL-01',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Dos Juniors renunciaron este mes citando 'ambiente tóxico' en los Design Critiques. Tus Seniors defienden su estilo agresivo como 'rigor necesario'. HR te advierte que la próxima renuncia escalará a Legal. El problema: esos Seniors son tus mejores ejecutores técnicos y el producto depende de ellos.",
    question: "¿Cómo intervienes para salvar la cultura sin perder el talento técnico?",
    options: [
      { id: 'A', text: "**Reglas de Civilidad:** Instauras un protocolo de 'Feedback Constructivo' obligatorio. Reduces la tensión superficial inmediatamente y satisfaces el requerimiento de HR con una política visible, aunque no cambias la dinámica de poder subyacente.", score: 1, type: "Rule-Based (No cambia incentivos)" },
      { id: 'B', text: "**Cambio de Formato (Co-Creation):** Reemplazas el 'Critique' (Juzgar) por 'Design Studio' (Co-crear). Cambias el rol del Senior de 'Juez' a 'Colaborador', alineando incentivos hacia la solución compartida en lugar de la crítica individual.", score: 5, type: "Lead (Cambio Estructural de Incentivos)" },
      { id: 'C', text: "**Resilience Training:** Ofreces coaching 1:1 a los Juniors para desarrollar 'piel gruesa'. Inviertes en su crecimiento profesional para que puedan navegar entornos de alta exigencia, asumiendo que el rigor es inamovible.", score: 1, type: "Treat Symptom (Victim-focused)" }
    ],
    explanation: "Cuando HR amenaza con Legal, el 'Roast' es un pasivo financiero. La **Psychological Safety** no se decreta, se diseña. **Cambio de Formato** altera la dinámica de poder estructuralmente. Reglas de Civilidad son parches. Resilience Training culpa a la víctima."
  },
  {
    id: 'feedback_sandwich_method',
    displayId: 'CUL-02',
    category: "Mentoría & Crecimiento",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tu Mid-Level más querido por el equipo ha fallado 3 deadlines consecutivos, costando $80K en retrasos. HR exige un PIP (Performance Improvement Plan) de 30 días o despido. Él no tiene idea de que su trabajo está en riesgo. Tienes 1:1 mañana.",
    question: "¿Cómo comunicas la gravedad de la situación?",
    options: [
      { id: 'A', text: "**Enfoque Balanceado (Sandwich):** Inicias reafirmando su valor cultural, mencionas suavemente los problemas de deadline, y cierras con apoyo incondicional. Proteges su moral y la cohesión del equipo mientras comunicas la necesidad de mejora.", score: 1, type: "Feedback Diluido (Ruinous Empathy)" },
      { id: 'B', text: "**Claridad Radical:** 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días. Quiero que te quedes, pero necesito ver resultados ya'. Priorizas la claridad absoluta sobre la comodidad emocional inmediata.", score: 5, type: "Lead (Radical Candor)" },
      { id: 'C', text: "**Protocolo HR:** Involucras a RRHH desde el inicio para conducir la reunión. Aseguras que el mensaje legal sea entregado con precisión y documentado correctamente, protegiendo a la empresa de riesgos laborales.", score: 3, type: "HR-First (Correcto pero frío)" },
    ],
    explanation: "Ocultar la gravedad de un PIP es **Ruinous Empathy** (Kim Scott). El Método Sandwich diluye el mensaje y le niega la oportunidad real de salvar su empleo. **Claridad Radical** combina el desafío directo con el cuidado personal ('Quiero que te quedes')."
  },
  {
    id: 'imposter_syndrome_senior',
    displayId: 'CUL-03',
    category: "People Management",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    scenario: "Tu Senior (responsable de $2.1M en revenue) se siente impostora tras ver el portfolio visual de un nuevo hire. Te dice: 'Solo hago wireframes, no soy creativa'. CEO pregunta por flight risks.",
    question: "¿Cómo cambias su perspectiva?",
    options: [
      { id: 'A', text: "**Capacitación Visual:** Le ofreces un curso avanzado de UI/Motion ($1,200). Demuestras inversión en su desarrollo y le das herramientas concretas para cerrar la brecha de habilidades que ella percibe.", score: 1, type: "Skill Gap Focus (Refuerza creencia)" },
      { id: 'B', text: "**Reframe de Impacto:** Le muestras la data: 'Tus flows generaron $2.1M. Las ilustraciones ganan likes, tu diseño paga sueldos'. Redefines el éxito del rol Senior basándote en impacto de negocio, no en estética.", score: 5, type: "Lead (Evidence-Based Reframe)" },
      { id: 'C', text: "**Validación Empática:** 'Todos sentimos síndrome del impostor, eres muy valiosa'. Ofreces soporte emocional inmediato y normalizas sus sentimientos para reducir su ansiedad.", score: 1, type: "Empathy-Only (Sin evidencia)" }
    ],
    explanation: "El síndrome del impostor se combate con evidencia, no con halagos. **Reframe de Impacto** demuestra objetivamente su valor ($2.1M). Capacitación Visual valida su inseguridad. Validación Empática es un analgésico temporal. Seniority = **Business Impact**."
  },
  {
    id: 'promotion_readiness_debate',
    displayId: 'CUL-04',
    category: "Career Growth",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    scenario: "Tu Mid-Level Designer más productivo (responsable del 35% del output del equipo) entra a tu 1:1 con un ultimátum: 'Quiero el título de Senior para fin de mes o acepto la oferta que tengo de Spotify'. El problema: tu Career Ladder exige demostrar mentoría y liderazgo para el nivel Senior, y él ha rechazado sistemáticamente mentorear juniors ('prefiero diseñar'). Perderlo retrasa el roadmap de Q1 unas 6 semanas y no tienes pipeline de reemplazo.",
    question: "¿Cómo balanceas retención vs leveling?",
    options: [
      { id: 'A', text: "**Promoción de Retención:** Lo asciendes. El costo de reemplazarlo y retrasar el proyecto Q1 supera el riesgo de diluir el título temporalmente. Priorizas la continuidad del negocio.", score: 1, type: "Counter-Offer Promotion (Title Inflation)" },
      { id: 'B', text: "**Plan de Crecimiento Acelerado:** Rechazas la promoción hoy pero ofreces un plan de 3 meses con hitos de liderazgo claros. Si cumple, asciende. Pones la responsabilidad de demostrar nivel en sus manos.", score: 5, type: "Lead (Growth Plan con Accountability)" },
      { id: 'C', text: "**Ajuste Salarial:** Le das un aumento significativo por 'Excelencia Técnica' manteniendo el título Mid. Reconoces su valor de mercado sin comprometer la estructura de seniority del equipo.", score: 3, type: "Compensation Band-Aid (Compra tiempo)" }
    ],
    explanation: "Promover bajo amenaza sin cumplir requisitos rompe la integridad del **Career Ladder**. **Plan de Crecimiento** ofrece un camino justo. Promoción de Retención enseña que el chantaje funciona. Ajuste Salarial es un parche temporal."
  },

  // --- BLOQUE 13: GESTIÓN DE TALENTO & FREELANCE ---
  {
    id: 'culture_burnout_hero_syndrome',
    displayId: 'CUL-05',
    category: "Bienestar del Equipo",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tu Junior Designer de 24 años viene trabajando hasta las 10pm todos los días desde hace 3 semanas. En el canal de Slack, los compañeros lo elogian: 'Qué crack, siempre disponible'. El problema: su último entregable tenía errores básicos de alineación que normalmente no comete, y en el standup de hoy se notaba agotado. El PM te escribe en privado: 'Ojalá tuviéramos más gente con esa actitud, ¿podemos reconocerlo públicamente en el All-Hands?'.",
    question: "¿Cómo intervienes?",
    options: [
      { id: 'A', text: "**Límites Sistémicos:** Estableces horas core y explicas públicamente que el overtime sostenido es un fallo de planificación, no una virtud. Proteges la sostenibilidad del equipo a largo plazo desafiando la narrativa del 'Héroe'.", score: 5, type: "Lead (Sustainable Pace)" },
      { id: 'B', text: "**Reconocimiento Balanceado:** Agradeces el esfuerzo en privado pero le sugieres descansar. Validas su compromiso mientras intentas mitigar el riesgo de burnout con consejos suaves.", score: 1, type: "Mixed Signal (Valida overtime)" },
      { id: 'C', text: "**Cultura de Autonomía:** Confías en que es un adulto profesional gestionando su tiempo. Si entrega resultados, no micro-gestionas sus horarios. El alto rendimiento a veces requiere sprints intensos.", score: -1, type: "Laissez-faire (Institucionaliza burnout)" }
    ],
    explanation: "El **Hero Syndrome** es contagioso y tóxico. Cuando la calidad baja, el overtime es contraproducente. **Límites Sistémicos** redefinen cultura: trabajar más horas es ineficiencia, no pasión. Reconocimiento Balanceado envía señales mixtas. Cultura de Autonomía abdica responsabilidad."
  },
  {
    id: 'culture_remote_async_communication',
    displayId: 'CUL-06',
    category: "Trabajo Remoto",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "El equipo está distribuido en 4 zonas horarias. La productividad cayó 20% y un Senior en Singapur renunció por tener reuniones a las 11 PM. El CTO te culpa por la falta de alineación y sugiere un 'Daily Sync' obligatorio a las 6 AM tu hora.",
    question: "¿Cómo resuelves la coordinación global sin quemar al equipo?",
    options: [
      { id: 'A', text: "**Async-First Mandate:** Implementas política de 'No Meeting sin Agenda'. Decisiones por escrito, feedback por Loom. Sincrónico solo para social. Democratizas la información y respetas los husos horarios, eliminando la dependencia de estar online al mismo tiempo.", score: 5, type: "Lead (Async-First Culture)" },
      { id: 'B', text: "**Core Hours:** Estableces 3 horas de coincidencia obligatoria para todos. Garantizas un bloque de colaboración en tiempo real diario, aunque aceptas que alguien siempre tendrá que madrugar o trasnochar.", score: 3, type: "Core Hours (Trade-off de flexibilidad)" },
      { id: 'C', text: "**Meeting Optimization:** Reduces la duración de las reuniones y rotas los horarios semanalmente para compartir el dolor. Mantienes la cultura de sincronización oral que la empresa valora, haciéndola más 'justa'.", score: 1, type: "Status Quo (Evita cambio)" }
    ],
    explanation: "El trabajo global requiere cambio de sistema, no de horario. **Async-First Mandate** habilita **Deep Work** y democratiza decisiones. Core Hours sigue forzando horarios incómodos. La escritura es la herramienta principal del trabajo remoto escalable."
  },
  {
    id: 'career_manager_vs_ic_track',
    displayId: 'CUL-07',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu Senior Designer más talentoso (8 años de experiencia, revenue atribuido de $1.8M) te confiesa en el 1:1: 'Quiero ser Design Manager. Necesito el título para mi carrera y el salario de manager ($40K más)'. El problema: en cada oportunidad de mentorear lo has visto evitarlo ('los juniors me interrumpen'), odia las reuniones de alineación ('son pérdida de tiempo') y vive para diseñar. Te muestra una oferta de Manager en otra empresa que expira en 10 días.",
    question: "¿Cómo orientas su carrera?",
    options: [
      { id: 'A', text: "**Oportunidad de Liderazgo:** Lo promueves a Manager a prueba. Muchas habilidades de liderazgo se aprenden en el rol, y retener su talento en la organización es prioritario para evitar brain drain.", score: -1, type: "Peter Principle (Pierde IC, gana mal manager)" },
      { id: 'B', text: "**IC Track (Staff Designer):** Le muestras el camino de Contribuidor Individual de alto nivel (Staff/Principal) con compensación equivalente a Manager. Le permites crecer en impacto y sueldo sin obligarlo a gestionar personas.", score: 5, type: "Lead (Dual Track Career)" },
      { id: 'C', text: "**Reality Check:** Le das feedback honesto sobre sus gaps de soft skills. Le explicas que sería infeliz como Manager dada su aversión a las reuniones, aunque esto pueda empujarlo a tomar la oferta externa.", score: 1, type: "Honest Without Path (Dead-end feedback)" }
    ],
    explanation: "Promover a alguien que odia el mentoring crea managers tóxicos (**Peter Principle**). **IC Track** ofrece prestigio y dinero alineado con sus fortalezas. Oportunidad de Liderazgo sacrifica un gran IC para ganar un pésimo manager. Reality Check es honesto pero incompleto sin alternativa."
  },
  {
    id: 'career_imposter_syndrome_senior',
    displayId: 'CUL-08',
    category: "Mentoría & Crecimiento",
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    scenario: "Es tu quinta día como nuevo Design Lead. En la reunión de liderazgo, el CTO te pone en el spotlight: 'Necesito tu perspectiva de diseño sobre el roadmap de Q2. ¿Deberíamos priorizar el rediseño del Dashboard o el nuevo flujo de Onboarding?'. Todos te miran esperando una respuesta informada. El problema: aún no has tenido tiempo de revisar la documentación del producto, no conoces las métricas actuales, y sientes pánico de decir algo incorrecto en tu primera semana.",
    question: "¿Cómo gestionas la situación?",
    options: [
      { id: 'A', text: "**Executive Presence:** Respondes con confianza basándote en tu experiencia general e intuición. Proyectas seguridad y liderazgo desde el día 1, evitando mostrar debilidad o desconocimiento.", score: 1, type: "Confidence Theater (Máscara frágil)" },
      { id: 'B', text: "**Vulnerabilidad Estratégica:** 'No tengo el contexto suficiente hoy, pero lo analizaré y traeré una propuesta en 48h'. Construyes confianza basada en la honestidad y el cumplimiento de promesas, no en la omnisciencia.", score: 5, type: "Lead (Growth Mindset)" },
      { id: 'C', text: "**Escucha Activa:** Devuelves la pregunta al equipo para entender sus perspectivas antes de opinar. Utilizas la facilitación para navegar la reunión sin comprometer tu opinión prematuramente.", score: 3, type: "Facilitador (Seguro)" }
    ],
    explanation: "Fingir saber destruye credibilidad. **Vulnerabilidad Estratégica** demuestra **Seniority**: saber lo que no sabes y tener un plan para resolverlo. Executive Presence vacío es fácil de detectar. Escucha Activa es segura pero pasiva."
  },
  {
    id: 'hiring_portfolio_vs_whiteboard_challenge',
    displayId: 'CUL-09',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "El reporte de recruiting es alarmante: el 40% de los candidatos que pasan a la etapa final rechazan la oferta. En las encuestas de salida, el patrón es claro: 'El ejercicio de whiteboard en vivo fue demasiado estresante', 'Me sentí juzgado en lugar de evaluado'. Tu proceso actual incluye una sesión de 90 minutos donde el candidato debe resolver un problema de diseño frente a 3 evaluadores. El Head de People te presiona: 'Estamos perdiendo talento por culpa del proceso de diseño'.",
    question: "¿Qué cambio implementas?",
    options: [
      { id: 'A', text: "**Take-Home Pagado:** Reemplazas la sesión en vivo por un ejercicio asíncrono remunerado. Evalúas la calidad real del trabajo en condiciones realistas, respetando el tiempo del candidato y reduciendo la ansiedad de performance.", score: 5, type: "Lead (Work Sample Test)" },
      { id: 'B', text: "**Live Problem Solving:** Mantienes el whiteboard pero enfatizas que 'no hay respuestas incorrectas'. Necesitas ver cómo piensan bajo presión, que es una realidad del trabajo diario en la empresa.", score: 1, type: "Live Performance (Extroversion Bias)" },
      { id: 'C', text: "**Deep Portfolio Review:** Eliminas el ejercicio práctico y profundizas en entrevistas de casos pasados. Aceleras el proceso y mejoras la experiencia del candidato basándote en su historial probado.", score: 3, type: "Portfolio-Only (Rápido pero incompleto)" }
    ],
    explanation: "El Whiteboard evalúa performance, no craft. **Take-Home Pagado** es un **Work Sample Test** (alta validez predictiva) que respeta al candidato. Live Problem Solving tiene sesgo de extroversión. Portfolio Review depende de la narrativa, no de la ejecución actual."
  },
  {
    id: 'hiring_culture_fit_bias',
    displayId: 'CUL-10',
    category: "Gestión de Talento",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Equipo rechaza candidata técnica 10/10 por 'ser muy seria, no es Culture Fit'. Equipo actual es 100% hombres extrovertidos.",
    question: "¿Cómo desafías este feedback?",
    options: [
      { id: 'A', text: "**Culture Add Framework:** Re-enmarcas la decisión: 'No buscamos clones, buscamos lo que nos falta'. Argumentas que su seriedad aporta el balance y foco necesario al equipo. Priorizas la diversidad cognitiva sobre la comodidad social.", score: 5, type: "Lead (Cognitive Diversity)" },
      { id: 'B', text: "**Team Consensus:** Respetas la decisión del equipo. La cohesión social es crítica para la velocidad de un startup y forzar una contratación impopular dañará el ambiente laboral a largo plazo.", score: 1, type: "Team Veto (Affinity Bias)" },
      { id: 'C', text: "**Technical Override:** Ejerces tu poder de veto y la contratas por sus habilidades duras. Dejas claro que la excelencia técnica es la prioridad número uno, confiando en que el equipo se adaptará.", score: 1, type: "Unilateral Hire (Daña buy-in)" }
    ],
    explanation: "Rechazar por 'no reírse de chistes' es **Affinity Bias**. **Culture Add** busca complementar, no replicar. Team Consensus en equipos homogéneos genera **Groupthink**. Technical Override impone pero no educa. La diversidad mejora la toma de decisiones."
  },
  {
    id: 'freelance_scope_creep_management',
    displayId: 'CUL-11',
    category: "Freelance & Agency Work",
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
    scenario: "Tu cliente más grande (30% de tu revenue anual como freelance, $72K) tiene un patrón tóxico: cada vez que apruebas un milestone, aparecen 'cambios pequeños' que no estaban en el scope. El proyecto de branding que cotizaste con margen del 40% ahora está en 5% después de 47 'ajustes menores'. Te escribe: 'Una última cosa - ¿puedes hacer 3 versiones más del logo? Es que al CEO no le convence ninguna'. Sabes que perder este cliente impacta tus finanzas, pero también que estás trabajando gratis.",
    question: "¿Cómo proteges tu rentabilidad?",
    options: [
      { id: 'A', text: "**Inversión Relacional:** Absorbes los cambios como costo de marketing para mantener feliz a tu cliente principal. Priorizas la retención de la cuenta grande sobre la rentabilidad de este proyecto específico.", score: 1, type: "Relationship Investment (Sin límites)" },
      { id: 'B', text: "**Change Order Process:** 'Feliz de hacerlo. Aquí está el impacto en presupuesto y cronograma para tu aprobación'. Profesionalizas la solicitud poniendo precio al cambio, lo que a menudo hace que el cliente reconsidere la necesidad.", score: 5, type: "Lead (Change Control Process)" },
      { id: 'C', text: "**Slow-Walk Execution:** Aceptas los cambios pero los despriorizas en la cola de trabajo. Utilizas el tiempo de entrega como palanca de negociación pasiva para desincentivar futuras solicitudes fuera de alcance.", score: 1, type: "Passive Resistance (Indirecto)" }
    ],
    explanation: "**Scope Creep** mata agencias. **Change Order Process** establece límites profesionales: todo cambio tiene costo. Inversión Relacional entrena al cliente a pedir gratis. Slow-Walk daña la confianza."
  },
  {
    id: 'freelance_pricing_value_vs_hourly',
    displayId: 'CUL-12',
    category: "Freelance & Agency Work",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "Un cliente de e-commerce te contacta para diseñar una landing page de Black Friday. En la llamada de discovery revela: 'El año pasado esta campaña generó $100K en ventas con una landing mediocre. Esperamos superar eso'. Tú sabes que con tu experiencia de 10 años puedes entregarla en 5 horas. Tu tarifa normal es $100/hora ($500 total). El cliente te pide una cotización formal y menciona: 'Tengo otras 2 propuestas, pero me gusta más tu portfolio'.",
    question: "¿Cómo cotizas?",
    options: [
      { id: 'A', text: "**Cost-Plus Pricing:** Calculas tus horas (5) x tarifa ($100) = $500. Es un modelo transparente, ético y fácil de defender ante cualquier auditoría de procurement.", score: 1, type: "Hourly Rate (Penaliza experiencia)" },
      { id: 'B', text: "**Value-Based Pricing:** Cotizas $5,000-$10,000 (5-10% del valor generado). El cliente compra un activo que genera $100k, no tu tiempo. Tu experiencia de 10 años permite hacerlo en 5 horas, y eso tiene un premium.", score: 5, type: "Lead (Outcome-Based Pricing)" },
      { id: 'C', text: "**Value Estimation:** Estimas 50 horas para cubrir gestión, revisiones e imprevistos, totalizando $5,000. Llegas al precio de mercado utilizando el modelo de horas estándar para que encaje en el sistema del cliente.", score: -1, type: "Dishonest Estimate (Fraude de horas)" }
    ],
    explanation: "Cobrar por hora castiga tu eficiencia. **Value-Based Pricing** alinea tu incentivo con el éxito del cliente ($100K). Cost-Plus deja dinero en la mesa. Value Estimation es inflar horas (fraude)."
  },
  {
    id: 'junior_designer_overwhelm_sprint_planning',
    displayId: 'CUL-13',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu Junior Designer (6 meses en la empresa, primera experiencia laboral) te pide un 1:1 urgente. Está al borde de las lágrimas: 'Tengo 4 proyectos simultáneos, no puedo más. Si esto no cambia, necesito renunciar'. Revisas su carga y confirmas: 4 PMs diferentes le asignaron trabajo sin coordinarse, sumando 60 horas de trabajo estimado para una semana de 40 horas. Cuando planteas el problema al PM principal, te responde: 'Bienvenido a startup life. Necesito esos deliverables para el viernes'.",
    question: "¿Qué haces?",
    options: [
      { id: 'A', text: "**Priorización Ruthless:** Intervienes y reasignas 2 proyectos inmediatamente. Le enseñas a negociar alcance en los 2 restantes. Asumes el conflicto con el PM para proteger el activo humano a largo plazo.", score: 5, type: "Lead (Sustainable Velocity)" },
      { id: 'B', text: "**Time Management Coaching:** Le enseñas técnicas de bloqueo de tiempo y priorización (Eisenhower Matrix). Le das herramientas para manejar la carga actual de manera más eficiente sin alterar el roadmap.", score: 3, type: "Skill Building (Trata síntoma)" },
      { id: 'C', text: "**Expectation Setting:** Le explicas que la resiliencia es clave en esta etapa. Validas sus sentimientos pero refuerzas que entregar bajo presión es la habilidad que lo llevará al siguiente nivel.", score: 1, type: "Normalize Overload (Gaslighting)" }
    ],
    explanation: "El **Context Switching** de 4 proyectos mata a un Junior. Coaching de tiempo es inútil si la carga es irreal. **Priorización Ruthless** defiende la sostenibilidad. Normalizar el burnout es liderazgo fallido."
  }
];
