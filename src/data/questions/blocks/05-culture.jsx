import React from 'react';
import {
  Users, Brain, MessageSquare, Briefcase, Heart,
  Target, TrendingUp, DollarSign, Wifi, Shield,
  AlertTriangle, Globe, Building, Layers, UserMinus,
  GitBranch, Clock, Award
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
      { id: 'A', text: "**Reglas de Civilidad:** Instauras un protocolo de 'Feedback Constructivo' obligatorio. Reduces la tensión superficial inmediatamente y satisfaces el requerimiento de HR con una política visible, aunque no cambias la dinámica de poder subyacente.", score: 1, type: "Rule-Based (No cambia incentivos)", decisionSummary: "Instauraste reglas de civilidad sin cambiar la dinámica de poder." },
      { id: 'B', text: "**Cambio de Formato (Co-Creation):** Reemplazas el 'Critique' (Juzgar) por 'Design Studio' (Co-crear). Cambias el rol del Senior de 'Juez' a 'Colaborador', alineando incentivos hacia la solución compartida en lugar de la crítica individual.", score: 5, type: "Lead (Cambio Estructural de Incentivos)", decisionSummary: "Rediseñaste incentivos para premiar participación sobre perfección." },
      { id: 'C', text: "**Resilience Training:** Ofreces coaching 1:1 a los Juniors para desarrollar 'piel gruesa'. Inviertes en su crecimiento profesional para que puedan navegar entornos de alta exigencia, asumiendo que el rigor es inamovible.", score: 1, type: "Treat Symptom (Victim-focused)", decisionSummary: "Enfocaste el coaching en las víctimas en vez de cambiar el sistema." }
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
      { id: 'A', text: "**Enfoque Balanceado (Sandwich):** Inicias reafirmando su valor cultural, mencionas suavemente los problemas de deadline, y cierras con apoyo incondicional. Proteges su moral y la cohesión del equipo mientras comunicas la necesidad de mejora.", score: 1, type: "Feedback Diluido (Ruinous Empathy)", decisionSummary: "Diluiste feedback crítico con el método sandwich." },
      { id: 'B', text: "**Claridad Radical:** 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días. Quiero que te quedes, pero necesito ver resultados ya'. Priorizas la claridad absoluta sobre la comodidad emocional inmediata.", score: 5, type: "Lead (Radical Candor)", decisionSummary: "Comunicaste la gravedad con claridad y un plan de acción." },
      { id: 'C', text: "**Protocolo HR:** Involucras a RRHH desde el inicio para conducir la reunión. Aseguras que el mensaje legal sea entregado con precisión y documentado correctamente, protegiendo a la empresa de riesgos laborales.", score: 3, type: "HR-First (Correcto pero frío)", decisionSummary: "Delegaste la conversación difícil a HR." },
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
      { id: 'A', text: "**Capacitación Visual:** Le ofreces un curso avanzado de UI/Motion ($1,200). Demuestras inversión en su desarrollo y le das herramientas concretas para cerrar la brecha de habilidades que ella percibe.", score: 1, type: "Skill Gap Focus (Refuerza creencia)", decisionSummary: "Validaste su inseguridad ofreciendo capacitación." },
      { id: 'B', text: "**Reframe de Impacto:** Le muestras la data: 'Tus flows generaron $2.1M. Las ilustraciones ganan likes, tu diseño paga sueldos'. Redefines el éxito del rol Senior basándote en impacto de negocio, no en estética.", score: 5, type: "Lead (Evidence-Based Reframe)", decisionSummary: "Mostraste evidencia de impacto real para combatir síndrome del impostor." },
      { id: 'C', text: "**Validación Empática:** 'Todos sentimos síndrome del impostor, eres muy valiosa'. Ofreces soporte emocional inmediato y normalizas sus sentimientos para reducir su ansiedad.", score: 1, type: "Empathy-Only (Sin evidencia)", decisionSummary: "Ofreciste validación emocional sin evidencia de impacto." }
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
      { id: 'A', text: "**Promoción de Retención:** Lo asciendes. El costo de reemplazarlo y retrasar el proyecto Q1 supera el riesgo de diluir el título temporalmente. Priorizas la continuidad del negocio.", score: 1, type: "Counter-Offer Promotion (Title Inflation)", decisionSummary: "Cediste al ultimátum promocionando sin requisitos." },
      { id: 'B', text: "**Plan de Crecimiento Acelerado:** Rechazas la promoción hoy pero ofreces un plan de 3 meses con hitos de liderazgo claros. Si cumple, asciende. Pones la responsabilidad de demostrar nivel en sus manos.", score: 5, type: "Lead (Growth Plan con Accountability)", decisionSummary: "Ofreciste plan de crecimiento con hitos claros de liderazgo." },
      { id: 'C', text: "**Ajuste Salarial:** Le das un aumento significativo por 'Excelencia Técnica' manteniendo el título Mid. Reconoces su valor de mercado sin comprometer la estructura de seniority del equipo.", score: 3, type: "Compensation Band-Aid (Compra tiempo)", decisionSummary: "Compensaste con dinero para evitar la conversación de nivel." }
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
      { id: 'A', text: "**Límites Sistémicos:** Estableces horas core y explicas públicamente que el overtime sostenido es un fallo de planificación, no una virtud. Proteges la sostenibilidad del equipo a largo plazo desafiando la narrativa del 'Héroe'.", score: 5, type: "Lead (Sustainable Pace)", decisionSummary: "Estableciste límites sistémicos contra la cultura de overtime." },
      { id: 'B', text: "**Reconocimiento Balanceado:** Agradeces el esfuerzo en privado pero le sugieres descansar. Validas su compromiso mientras intentas mitigar el riesgo de burnout con consejos suaves.", score: 1, type: "Mixed Signal (Valida overtime)", decisionSummary: "Enviaste señales mixtas validando el overtime." },
      { id: 'C', text: "**Cultura de Autonomía:** Confías en que es un adulto profesional gestionando su tiempo. Si entrega resultados, no micro-gestionas sus horarios. El alto rendimiento a veces requiere sprints intensos.", score: -1, type: "Laissez-faire (Institucionaliza burnout)", decisionSummary: "Ignoraste señales de burnout en nombre de la autonomía." }
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
      { id: 'A', text: "**Async-First Mandate:** Implementas política de 'No Meeting sin Agenda'. Decisiones por escrito, feedback por Loom. Sincrónico solo para social. Democratizas la información y respetas los husos horarios, eliminando la dependencia de estar online al mismo tiempo.", score: 5, type: "Lead (Async-First Culture)", decisionSummary: "Implementaste cultura async-first respetando zonas horarias." },
      { id: 'B', text: "**Core Hours:** Estableces 3 horas de coincidencia obligatoria para todos. Garantizas un bloque de colaboración en tiempo real diario, aunque aceptas que alguien siempre tendrá que madrugar o trasnochar.", score: 3, type: "Core Hours (Trade-off de flexibilidad)", decisionSummary: "Estableciste horas de coincidencia forzando horarios incómodos." },
      { id: 'C', text: "**Meeting Optimization:** Reduces la duración de las reuniones y rotas los horarios semanalmente para compartir el dolor. Mantienes la cultura de sincronización oral que la empresa valora, haciéndola más 'justa'.", score: 1, type: "Status Quo (Evita cambio)", decisionSummary: "Impusiste horarios rígidos a equipo distribuido globalmente." }
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
      { id: 'A', text: "**Oportunidad de Liderazgo:** Lo promueves a Manager a prueba. Muchas habilidades de liderazgo se aprenden en el rol, y retener su talento en la organización es prioritario para evitar brain drain.", score: -1, type: "Peter Principle (Pierde IC, gana mal manager)", decisionSummary: "Promoviste a manager sin evidencia de habilidades de liderazgo." },
      { id: 'B', text: "**IC Track (Staff Designer):** Le muestras el camino de Contribuidor Individual de alto nivel (Staff/Principal) con compensación equivalente a Manager. Le permites crecer en impacto y sueldo sin obligarlo a gestionar personas.", score: 5, type: "Lead (Dual Track Career)", decisionSummary: "Ofreciste track IC con compensación equivalente a manager." },
      { id: 'C', text: "**Reality Check:** Le das feedback honesto sobre sus gaps de soft skills. Le explicas que sería infeliz como Manager dada su aversión a las reuniones, aunque esto pueda empujarlo a tomar la oferta externa.", score: 1, type: "Honest Without Path (Dead-end feedback)", decisionSummary: "Diste feedback honesto sin ofrecer alternativas." }
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
      { id: 'A', text: "**Executive Presence:** Respondes con confianza basándote en tu experiencia general e intuición. Proyectas seguridad y liderazgo desde el día 1, evitando mostrar debilidad o desconocimiento.", score: 1, type: "Confidence Theater (Máscara frágil)", decisionSummary: "Fingiste saber sin tener contexto suficiente." },
      { id: 'B', text: "**Vulnerabilidad Estratégica:** 'No tengo el contexto suficiente hoy, pero lo analizaré y traeré una propuesta en 48h'. Construyes confianza basada en la honestidad y el cumplimiento de promesas, no en la omnisciencia.", score: 5, type: "Lead (Growth Mindset)", decisionSummary: "Admitiste gaps y prometiste propuesta con fecha concreta." },
      { id: 'C', text: "**Escucha Activa:** Devuelves la pregunta al equipo para entender sus perspectivas antes de opinar. Utilizas la facilitación para navegar la reunión sin comprometer tu opinión prematuramente.", score: 3, type: "Facilitador (Seguro)", decisionSummary: "Facilitaste sin comprometer tu perspectiva." }
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
      { id: 'A', text: "**Take-Home Pagado:** Reemplazas la sesión en vivo por un ejercicio asíncrono remunerado. Evalúas la calidad real del trabajo en condiciones realistas, respetando el tiempo del candidato y reduciendo la ansiedad de performance.", score: 5, type: "Lead (Work Sample Test)", decisionSummary: "Implementaste take-home pagado con condiciones realistas." },
      { id: 'B', text: "**Live Problem Solving:** Mantienes el whiteboard pero enfatizas que 'no hay respuestas incorrectas'. Necesitas ver cómo piensan bajo presión, que es una realidad del trabajo diario en la empresa.", score: 1, type: "Live Performance (Extroversion Bias)", decisionSummary: "Mantuviste whiteboard que favorece extrovertidos." },
      { id: 'C', text: "**Deep Portfolio Review:** Eliminas el ejercicio práctico y profundizas en entrevistas de casos pasados. Aceleras el proceso y mejoras la experiencia del candidato basándote en su historial probado.", score: 3, type: "Portfolio-Only (Rápido pero incompleto)", decisionSummary: "Basaste evaluación solo en narrativa de portfolio." }
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
      { id: 'A', text: "**Culture Add Framework:** Re-enmarcas la decisión: 'No buscamos clones, buscamos lo que nos falta'. Argumentas que su seriedad aporta el balance y foco necesario al equipo. Priorizas la diversidad cognitiva sobre la comodidad social.", score: 5, type: "Lead (Cognitive Diversity)", decisionSummary: "Reenmarcastes 'culture fit' como 'culture add'." },
      { id: 'B', text: "**Team Consensus:** Respetas la decisión del equipo. La cohesión social es crítica para la velocidad de un startup y forzar una contratación impopular dañará el ambiente laboral a largo plazo.", score: 1, type: "Team Veto (Affinity Bias)", decisionSummary: "Permitiste veto de equipo homogéneo por 'fit cultural'." },
      { id: 'C', text: "**Technical Override:** Ejerces tu poder de veto y la contratas por sus habilidades duras. Dejas claro que la excelencia técnica es la prioridad número uno, confiando en que el equipo se adaptará.", score: 1, type: "Unilateral Hire (Daña buy-in)", decisionSummary: "Impusiste contratación sin educar al equipo." }
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
      { id: 'A', text: "**Inversión Relacional:** Absorbes los cambios como costo de marketing para mantener feliz a tu cliente principal. Priorizas la retención de la cuenta grande sobre la rentabilidad de este proyecto específico.", score: 1, type: "Relationship Investment (Sin límites)", decisionSummary: "Absorbiste scope creep como costo de retención." },
      { id: 'B', text: "**Change Order Process:** 'Feliz de hacerlo. Aquí está el impacto en presupuesto y cronograma para tu aprobación'. Profesionalizas la solicitud poniendo precio al cambio, lo que a menudo hace que el cliente reconsidere la necesidad.", score: 5, type: "Lead (Change Control Process)", decisionSummary: "Implementaste proceso formal de change order." },
      { id: 'C', text: "**Slow-Walk Execution:** Aceptas los cambios pero los despriorizas en la cola de trabajo. Utilizas el tiempo de entrega como palanca de negociación pasiva para desincentivar futuras solicitudes fuera de alcance.", score: 1, type: "Passive Resistance (Indirecto)", decisionSummary: "Usaste resistencia pasiva en vez de límites claros." }
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
      { id: 'A', text: "**Cost-Plus Pricing:** Calculas tus horas (5) x tarifa ($100) = $500. Es un modelo transparente, ético y fácil de defender ante cualquier auditoría de procurement.", score: 1, type: "Hourly Rate (Penaliza experiencia)", decisionSummary: "Cobraste por hora penalizando tu eficiencia." },
      { id: 'B', text: "**Value-Based Pricing:** Cotizas $5,000-$10,000 (5-10% del valor generado). El cliente compra un activo que genera $100k, no tu tiempo. Tu experiencia de 10 años permite hacerlo en 5 horas, y eso tiene un premium.", score: 5, type: "Lead (Outcome-Based Pricing)", decisionSummary: "Cotizaste basado en valor generado, no tiempo." },
      { id: 'C', text: "**Value Estimation:** Estimas 50 horas para cubrir gestión, revisiones e imprevistos, totalizando $5,000. Llegas al precio de mercado utilizando el modelo de horas estándar para que encaje en el sistema del cliente.", score: -1, type: "Dishonest Estimate (Fraude de horas)", decisionSummary: "Inflaste horas para justificar precio de mercado." }
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
      { id: 'A', text: "**Priorización Ruthless:** Intervienes y reasignas 2 proyectos inmediatamente. Le enseñas a negociar alcance en los 2 restantes. Asumes el conflicto con el PM para proteger el activo humano a largo plazo.", score: 5, type: "Lead (Sustainable Velocity)", decisionSummary: "Interveniste reasignando proyectos para proteger al junior." },
      { id: 'B', text: "**Time Management Coaching:** Le enseñas técnicas de bloqueo de tiempo y priorización (Eisenhower Matrix). Le das herramientas para manejar la carga actual de manera más eficiente sin alterar el roadmap.", score: 3, type: "Skill Building (Trata síntoma)", decisionSummary: "Enseñaste técnicas de priorización sin reducir carga." },
      { id: 'C', text: "**Expectation Setting:** Le explicas que la resiliencia es clave en esta etapa. Validas sus sentimientos pero refuerzas que entregar bajo presión es la habilidad que lo llevará al siguiente nivel.", score: 1, type: "Normalize Overload (Gaslighting)", decisionSummary: "Normalizaste sobrecarga como 'desarrollo profesional'." }
    ],
    explanation: "El **Context Switching** de 4 proyectos mata a un Junior. Coaching de tiempo es inútil si la carga es irreal. **Priorización Ruthless** defiende la sostenibilidad. Normalizar el burnout es liderazgo fallido."
  },

  // --- BLOQUE 14: CULTURA CORPORATE & ENTERPRISE (GEMINI STYLE - Zero Trade-off Visible) ---
  {
    id: 'feature_factory_pride_dead',
    displayId: 'CUL-14',
    category: "Cultura de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Tu equipo ha entregado 47 features en 6 meses. El VP de Product celebra la velocidad en el All-Hands. El problema: en tu encuesta anónima, el 80% del equipo responde que 'no sabe si su trabajo genera impacto real'. Un Senior te confiesa: 'Somos una fábrica de features, no un equipo de producto. Mi portfolio se ve impresionante pero no sé si algo de lo que diseñé importa'. La rotación del equipo subió 35% este año.",
    question: "¿Cómo reconectas al equipo con el impacto de su trabajo?",
    options: [
      { id: 'A', text: "**Celebration Ritual:** Implementas un 'Demo Day' mensual donde el equipo presenta features y recibe aplausos de stakeholders. Creas momentos de reconocimiento que validan el esfuerzo y la velocidad de entrega.", score: 1, type: "Applause Theater (No muestra impacto)", decisionSummary: "Creaste rituales de celebración sin métricas de impacto." },
      { id: 'B', text: "**Impact Dashboard:** Creas visibilidad permanente de métricas post-launch. Cada diseñador ve la adopción, retención y revenue de sus features. Conectas el trabajo diario con resultados de negocio medibles.", score: 5, type: "Lead (Outcome Visibility)", decisionSummary: "Creaste dashboard de impacto conectando trabajo con resultados." },
      { id: 'C', text: "**User Stories:** Compartes testimonios y quotes de usuarios satisfechos en cada standup. Humanizas el impacto con historias reales que demuestran que el producto importa a personas reales.", score: 3, type: "Anecdotal Evidence (Selección positiva)", decisionSummary: "Compartiste testimonios con sesgo de selección positiva." }
    ],
    explanation: "Los aplausos no reemplazan la evidencia. **Impact Dashboard** hace visible la conexión entre esfuerzo y resultado. Las **User Stories** son inspiradoras pero sufren **Survivorship Bias**—solo ves a los felices. La calidad debe ser un hábito, no un acto de fe."
  },
  {
    id: 'hippo_effect_silent_hierarchy',
    displayId: 'CUL-15',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tu equipo de diseño tiene sesiones de critique semanales. Notas un patrón: cuando tú opinas primero, el 90% del equipo se alinea inmediatamente con tu perspectiva. Cuando una Junior ofrece una alternativa después de tu comentario, hay silencio incómodo. Los datos de tu encuesta anónima revelan: 'Siento que mis ideas no importan cuando [tu nombre] ya habló'. El VP de Producto te pregunta por qué tus critiques no generan innovación.",
    question: "¿Cómo generas disidencia productiva en tus sesiones de critique?",
    options: [
      { id: 'A', text: "**Hablar al Final:** Cambias tu dinámica para ser siempre el último en opinar. Creas espacio explícito para que los juniors expongan sus argumentos sin el sesgo de tu autoridad previa.", score: 5, type: "Lead (Cambio Estructural)", decisionSummary: "Cambiaste estructura para opinar último y dar espacio." },
      { id: 'B', text: "**Abogado del Diablo:** Asignas rotativamente a un miembro del equipo el rol de 'Crítico Designado' en cada reunión. Institucionalizas el disenso dándole un sombrero formal.", score: 3, type: "Mecánica Artificial (Artificial Dissent)", decisionSummary: "Implementaste rol artificial de disidente rotativo." },
      { id: 'C', text: "**Cultura de Debate:** Envías un memo reafirmando que 'las mejores ideas ganan' y animas al equipo a ser más vocales. Refuerzas verbalmente que valoras la valentía.", score: 1, type: "Mandato Verbal (Inefectivo)", decisionSummary: "Mandaste memo pidiendo valentía sin cambiar estructura." }
    ],
    explanation: "Pedirle a la gente que sea valiente (**Cultura de Debate**) ignora la dinámica de poder. El **Abogado del Diablo** funciona pero es artificial y depende del 'sombrero'. **Hablar al Final** es una intervención estructural que elimina el sesgo de autoridad por diseño. Si la reunión fuera segura, la gente querría disentir."
  },
  {
    id: 'credit_stealing_pm_politics',
    displayId: 'CUL-16',
    category: "Política Organizacional",
    icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    scenario: "Tu PM presentó el caso de éxito del último launch al board sin mencionar al equipo de diseño. El slide deck usa tus mockups pero el crédito dice 'Product Team Achievement'. Tu Senior está furioso: 'Pasé 3 meses en ese rediseño y ni una mención'. El PM te responde: 'Era un deck ejecutivo, no había espacio para nombres'. Tienes 1:1 con el PM mañana y el equipo espera que 'hagas algo'.",
    question: "¿Cómo gestionas la atribución de crédito sin escalar el conflicto?",
    options: [
      { id: 'A', text: "**Documentación Preventiva:** Implementas un proceso donde cada deck ejecutivo incluye una slide de 'Team Credits'. Sistematizas la atribución para que no dependa de la memoria o buena voluntad de nadie.", score: 5, type: "Lead (Systemic Fix)", decisionSummary: "Sistematizaste atribución de crédito en decks ejecutivos." },
      { id: 'B', text: "**Confrontación Directa:** En tu 1:1 le dices al PM: 'Mi equipo se sintió invisible. La próxima vez necesito ver crédito explícito'. Estableces expectativas claras para el futuro.", score: 3, type: "Direct Feedback (Reactivo)", decisionSummary: "Diste feedback directo después del daño." },
      { id: 'C', text: "**Escalation Formal:** Reportas el incidente a tu Head of Design y pides que intervenga con el VP de Product. Dejas que liderazgo resuelva el conflicto entre funciones.", score: 1, type: "Escalation (Daña relación)", decisionSummary: "Escalaste conflicto dañando relación con PM." }
    ],
    explanation: "Quejarse después del hecho es reactivo. **Documentación Preventiva** hace que el crédito correcto sea el camino de menor resistencia. El PM no es malicioso, solo optimizó para lo fácil. Los líderes comen al final y reparten el crédito."
  },
  {
    id: 'survivor_guilt_post_layoff',
    displayId: 'CUL-17',
    category: "Gestión de Crisis",
    icon: <UserMinus className="w-6 h-6 text-red-500" />,
    scenario: "Hace 3 semanas hubo layoffs. Tu equipo perdió 2 de 6 diseñadores. Los 4 que quedaron heredaron el trabajo de los que se fueron sin ajuste de expectativas. En el standup de hoy, tu Senior dice: 'Me siento culpable de tener trabajo mientras Ana busca empleo. Y ahora encima tengo el doble de carga'. El velocity del equipo cayó 40% y nadie habla del elefante en la sala.",
    question: "¿Cómo ayudas al equipo a procesar el trauma y recuperar productividad?",
    options: [
      { id: 'A', text: "**Espacio de Duelo:** Organizas una sesión facilitada donde el equipo puede expresar emociones sobre los layoffs. Normalizas el 'survivor guilt' y creas espacio para procesar antes de volver al trabajo.", score: 3, type: "Emotional Processing (Necesario pero insuficiente)", decisionSummary: "Facilitaste espacio emocional sin ajustar expectativas." },
      { id: 'B', text: "**Scope Reset:** Vas al VP de Product con data: 'Perdí 33% del equipo. El roadmap necesita reducirse 33% o necesito headcount'. Proteges al equipo de expectativas irrealistas mientras procesas la pérdida.", score: 5, type: "Lead (Expectation Management)", decisionSummary: "Negociaste reducción de scope proporcional al layoff." },
      { id: 'C', text: "**Forward Focus:** Reúnes al equipo y dices: 'Entiendo que es difícil, pero la mejor forma de honrar a los que se fueron es demostrar que este equipo puede entregar. Vamos a enfocarnos en lo que podemos controlar'.", score: 1, type: "Toxic Positivity (Invalida emociones)", decisionSummary: "Invalidaste emociones con positividad tóxica." }
    ],
    explanation: "El **survivor guilt** es real y productivo ignorarlo no lo desaparece. Pero las emociones sin acción son terapia, no liderazgo. **Scope Reset** protege al equipo del burnout inevitable. Pedir más esfuerzo post-trauma es **negligencia disfrazada de motivación**."
  },
  {
    id: 'design_eng_tribalism_war',
    displayId: 'CUL-18',
    category: "Cross-functional",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    scenario: "La relación entre Design y Engineering está rota. En Slack, los ingenieros se burlan de specs 'imposibles de implementar'. Los diseñadores responden con memes de 'devs que no entienden UX'. El Tech Lead te dice: 'Tus diseñadores viven en fantasyland'. Tu Senior responde: 'Engineering es donde la creatividad va a morir'. El VP te pide 'arreglar la dinámica' antes de Q2.",
    question: "¿Cómo reconstruyes la confianza entre funciones en guerra?",
    options: [
      { id: 'A', text: "**Embedded Pairing:** Asignas a cada diseñador 2 horas semanales de pair programming con su ingeniero. Creas empatía a través de trabajo conjunto donde cada uno entiende las restricciones del otro.", score: 5, type: "Lead (Structural Empathy)", decisionSummary: "Implementaste pairing semanal design-engineering." },
      { id: 'B', text: "**Communication Workshop:** Traes un facilitador externo para una sesión de 'Comunicación No-Violenta' entre ambos equipos. Creas un espacio seguro para expresar frustraciones y establecer acuerdos.", score: 3, type: "One-time Intervention (Efecto temporal)", decisionSummary: "Facilitaste workshop de comunicación puntual." },
      { id: 'C', text: "**Clear Boundaries:** Documentas un proceso formal de handoff con checkpoints de aprobación. Reduces fricción minimizando las interacciones necesarias entre ambos equipos.", score: 1, type: "Process Wall (Institucionaliza silos)", decisionSummary: "Institucionalizaste silos con proceso de handoff rígido." }
    ],
    explanation: "Los procesos de handoff no arreglan relaciones rotas—las evitan. Los workshops son catárticos pero el efecto dura semanas. **Embedded Pairing** crea empatía estructural: es difícil odiar a quien trabaja contigo. El enemigo deja de ser 'ellos' y pasa a ser 'el problema del usuario'."
  },
  {
    id: 'senior_refuses_grunt_work',
    displayId: 'CUL-19',
    category: "People Management",
    icon: <Shield className="w-6 h-6 text-slate-600" />,
    scenario: "Tu Senior Designer ($150K/año) se niega a hacer tareas 'de bajo nivel': actualizar la documentación del Design System, crear assets para marketing, o mentorear juniors. Dice: 'No me contrataron para eso, mi tiempo vale más resolviendo problemas estratégicos'. El problema: esas tareas no se hacen, los juniors no aprenden, y el resto del equipo lo resiente. Pero su trabajo estratégico es brillante y difícil de reemplazar.",
    question: "¿Cómo gestionas la selectividad del Senior sin perder su talento ni el respeto del equipo?",
    options: [
      { id: 'A', text: "**Role Clarity:** Tienes una conversación directa: 'El rol de Senior incluye mentoría y trabajo operativo. No es opcional. ¿Cómo lo hacemos funcionar?'. Estableces que el título tiene responsabilidades no negociables.", score: 5, type: "Lead (Standards Apply to All)", decisionSummary: "Estableciste que las responsabilidades del rol no son negociables." },
      { id: 'B', text: "**Strategic Reframe:** Renombras sus tareas 'de bajo nivel' como 'Design System Leadership' y 'Junior Enablement Program'. Le das ownership y título de lo que antes evitaba.", score: 3, type: "Title Engineering (Cosmético)", decisionSummary: "Reenmarcaste las tareas con títulos más atractivos." },
      { id: 'C', text: "**Specialization Acceptance:** Aceptas que su valor está en el trabajo estratégico. Redistribuyes las tareas operativas entre juniors y contratas un Mid-Level para llenar el gap. Optimizas para su fortaleza.", score: 1, type: "Exception Culture (Genera resentimiento)", decisionSummary: "Evitaste conversación difícil contratando soporte para un bajo performer." }
    ],
    explanation: "Crear excepciones para 'estrellas' destruye la cultura. Si el Senior no hace mentoría, los juniors no crecen y tú creas dependencia de una persona. **Role Clarity** aplica el estándar: el título tiene obligaciones. La alternativa es un equipo de divas sin bench strength."
  },
  {
    id: 'promotion_perceived_injustice',
    displayId: 'CUL-20',
    category: "Career Growth",
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    scenario: "Promoviste a María a Senior. Al día siguiente, Carlos (mismo nivel, 6 meses más de antigüedad) te pide un 1:1 urgente. Está visiblemente molesto: 'Llevo más tiempo, mis reviews son iguales de buenas. ¿Por qué ella y no yo?'. Revisas: María lideró un proyecto cross-funcional exitoso; Carlos tiene excelente craft pero evita visibilidad. No puedes revelar detalles del caso de María, pero Carlos amenaza con 'reconsiderar su futuro aquí'.",
    question: "¿Cómo gestionas la percepción de injusticia sin violar confidencialidad?",
    options: [
      { id: 'A', text: "**Criteria Transparency:** Le explicas los criterios generales del nivel Senior sin hablar de María. Le muestras exactamente qué evidencia necesitas ver de él para el próximo ciclo. Haces el camino visible.", score: 5, type: "Lead (Path Visibility)", decisionSummary: "Publicaste criterios de promoción transparentes y con ejemplos." },
      { id: 'B', text: "**Empathy First:** Validas su frustración: 'Entiendo que duele. Tu trabajo es valioso'. Le das espacio para procesar sin defender la decisión ni atacarla.", score: 3, type: "Emotional Validation (Sin resolución)", decisionSummary: "Validaste emocionalmente sin dar claridad sobre el camino." },
      { id: 'C', text: "**Acceleration Promise:** Le ofreces un 'fast track' para la próxima promoción si demuestra liderazgo en Q2. Compensas la frustración con una promesa de acción rápida.", score: 1, type: "Appeasement (Promesa vacía)", decisionSummary: "Prometiste fast-track bajo presión para calmar la situación." }
    ],
    explanation: "La frustración de Carlos es válida pero su diagnóstico está mal. **Criteria Transparency** le da agencia: si quiere Senior, aquí está el mapa. Prometer fast-tracks bajo presión crea expectativas imposibles. La validación emocional sin acción es terapia, no management."
  },
  {
    id: 'dei_tokenism_vs_reality',
    displayId: 'CUL-21',
    category: "Diversidad & Inclusión",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "HR te pide que 'des visibilidad' a Lucia, la única mujer Latina en tu equipo de 8 diseñadores. Quieren que presente en el próximo All-Hands para 'mostrar diversidad'. Lucia te dice en privado: 'Me siento usada como token. No quiero que mi cara sea la foto de diversidad cuando soy la única y nadie más de mi background ha sido promovido en 2 años'. Pero rechazar la invitación de HR puede verse como 'no colaborar con iniciativas de diversidad'.",
    question: "¿Cómo navegas entre las demandas de HR y la comodidad de Lucia?",
    options: [
      { id: 'A', text: "**Lucia's Choice:** Le das a Lucia la decisión final con tu respaldo en cualquier dirección. Si dice no, tú manejas la conversación con HR. Priorizas su agencia sobre la óptica corporativa.", score: 5, type: "Lead (Individual Agency)", decisionSummary: "Priorizaste la agencia de Lucia sobre las demandas de HR." },
      { id: 'B', text: "**Systemic Redirect:** Vas a HR con una contrapropuesta: 'En lugar de visibilidad individual, ayúdenme a armar un pipeline de diversidad real'. Cambias la conversación de óptica a acción.", score: 3, type: "Systemic Fix (Largo plazo)", decisionSummary: "Redirigiste a HR hacia soluciones sistémicas de diversidad." },
      { id: 'C', text: "**Gentle Persuasion:** Hablas con Lucia sobre los beneficios de visibilidad para su carrera. A veces hay que 'jugar el juego' para cambiar el sistema desde adentro.", score: 1, type: "Coercion Lite (Ignora su voz)", decisionSummary: "Presionaste a un reporte directo a presentar sin estar preparado." }
    ],
    explanation: "Lucia tiene derecho a no ser la 'cara de diversidad' de una empresa que no la promueve. Convencerla de presentar para 'su carrera' es **tokenism con pasos extra**. **Lucia's Choice** respeta su agencia. La diversidad real se mide en promociones, no en slides."
  },
  {
    id: 'cameras_off_disengagement',
    displayId: 'CUL-22',
    category: "Trabajo Remoto",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "En las últimas 4 semanas, las cámaras de tu equipo remoto están permanentemente apagadas. Los standups son monólogos donde nadie responde. El chat de Slack tiene actividad mínima. Cuando preguntas '¿todo bien?', recibes 'sí, todo normal'. Pero el velocity cayó 25% y perdiste 2 personas el mes pasado. El VP te pregunta: '¿Qué está pasando con tu equipo?'. Honestamente, no lo sabes.",
    question: "¿Cómo diagnosticas y resuelves el disengagement silencioso?",
    options: [
      { id: 'A', text: "**Mandatory Cameras:** Implementas política de cámaras encendidas en reuniones de equipo. La conexión visual es importante para cohesión y necesitas ver las caras de tu gente para leer el ambiente.", score: 1, type: "Surveillance Culture (Genera resentimiento)", decisionSummary: "Forzaste cámaras encendidas generando resentimiento." },
      { id: 'B', text: "**1:1 Deep Dive:** Agendas 1:1s extendidos (45 min) con cada miembro. Empiezas con '¿Cómo estás realmente?' y dejas espacio para silencio. Buscas la verdad detrás del 'todo normal'.", score: 5, type: "Lead (Psychological Safety)", decisionSummary: "Profundizaste en 1:1s buscando la verdad real." },
      { id: 'C', text: "**Anonymous Pulse:** Lanzas una encuesta anónima de 5 preguntas sobre satisfacción y blockers. Das un canal seguro para feedback sin el peso de la conversación cara a cara.", score: 3, type: "Data Gathering (Distancia emocional)", decisionSummary: "Lanzaste encuesta anónima sin conexión personal." }
    ],
    explanation: "Las cámaras apagadas son síntoma, no causa. Forzar cámaras genera compliance, no confianza. Las encuestas dan data pero no conexión. Los **1:1s profundos** crean el espacio donde la gente puede ser honesta. Si nadie te dice la verdad, no tienes **Psychological Safety**."
  },
  {
    id: 'junior_bypasses_hierarchy',
    displayId: 'CUL-23',
    category: "People Management",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu Junior Designer (3 meses en la empresa) tiene reuniones directas con el CEO. Empezó como 'brainstorming casual' pero ahora el CEO le pide entregables sin pasar por ti. Esta mañana descubriste que tu Junior está diseñando una 'nueva feature prioritaria' que no está en ningún roadmap. Cuando le preguntas, responde: 'El CEO me lo pidió directamente, pensé que estaba bien'. Tu autoridad como manager está siendo bypasseada.",
    question: "¿Cómo reestableces la estructura sin parecer territorial ni alienar al CEO?",
    options: [
      { id: 'A', text: "**Process Clarity:** Hablas con el Junior: 'Me encanta tu iniciativa. Para que tu trabajo tenga impacto real, necesita pasar por priorización. ¿Cómo lo alineamos?'. Lo educas sobre cómo funciona el sistema.", score: 3, type: "Junior Education (No resuelve el CEO)", decisionSummary: "Educaste al junior sin resolver el canal paralelo del CEO." },
      { id: 'B', text: "**CEO Alignment:** Agendas un 1:1 con el CEO: 'Me encanta que trabajes con Juniors. ¿Cómo hacemos que sus ideas pasen por priorización para que no se pierdan?'. Reencuadras el problema como proceso, no como territorio.", score: 5, type: "Lead (Upward Management)", decisionSummary: "Alineaste al CEO para cerrar canal paralelo." },
      { id: 'C', text: "**Boundary Setting:** Le dices al Junior: 'Cualquier pedido del CEO pasa por mí primero'. Estableces jerarquía clara para evitar confusión futura.", score: 1, type: "Territorial Defense (Bloquea al Junior)", decisionSummary: "Bloqueaste al junior siendo territorial." }
    ],
    explanation: "El Junior no es el problema; el CEO creando un canal paralelo es el problema. Bloquear al Junior es tratar el síntoma. **CEO Alignment** resuelve la raíz: alinear al ejecutivo con el proceso de priorización. Si el CEO quiere features, debe pasar por el roadmap."
  },
  {
    id: 'research_hostile_culture',
    displayId: 'CUL-24',
    category: "Research Culture",
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    scenario: "Tu empresa tiene una cultura anti-research. El VP de Product dice públicamente: 'El research es lento y caro. Los buenos PMs ya saben lo que necesitan los usuarios'. Los diseñadores no tienen acceso a usuarios y deben 'usar su intuición'. El último intento de research fue cancelado porque 'no había tiempo'. Los productos se lanzan con 40% de churn en el primer mes.",
    question: "¿Cómo introduces research en una cultura que lo rechaza?",
    options: [
      { id: 'A', text: "**Guerrilla Research:** Haces research en secreto. Entrevistas 5 usuarios en tu tiempo libre, documentas hallazgos, y los presentas como 'insights que encontré'. Construyes evidencia antes de pedir permiso.", score: 3, type: "Subversive (Insostenible)", decisionSummary: "Hiciste research guerrilla en tu tiempo personal." },
      { id: 'B', text: "**Failure Forensics:** Tomas el último producto con 40% churn y haces un post-mortem conectando fallos específicos con falta de research. Usas datos internos para demostrar el costo de la intuición fallida.", score: 5, type: "Lead (Evidence-Based Advocacy)", decisionSummary: "Conectaste churn con falta de research usando data." },
      { id: 'C', text: "**Education Campaign:** Organizas lunch & learns sobre metodologías de research. Compartes casos de estudio de empresas exitosas. Cambias la cultura a través de conocimiento.", score: 1, type: "Awareness Building (Ignorado)", decisionSummary: "Organizaste capacitaciones ignoradas por el liderazgo." }
    ],
    explanation: "Las culturas anti-research no cambian con educación—cambian con dolor. **Failure Forensics** conecta el costo visible (churn) con la causa invisible (no research). Los lunch & learns son ignorados por quienes más los necesitan. El research guerrilla funciona una vez, no como sistema."
  },
  {
    id: 'shadow_designer_ceo',
    displayId: 'CUL-25',
    category: "Stakeholder Management",
    icon: <Building className="w-6 h-6 text-slate-600" />,
    scenario: "Tu CEO era diseñador hace 15 años. Ahora revisa cada pixel de cada entrega y hace redlines detallados en Figma. Los diseños del CEO son visualmente impresionantes y el Board los ama, pero ignoran sistemáticamente los casos borde y la escalabilidad del sistema. Tu equipo se siente como meros ejecutores. Un Senior renunció citando: 'No vine a ser el cursor del CEO'. El CEO cree que está 'ayudando a mantener la calidad'.",
    question: "¿Cómo gestionas a un stakeholder que cree ser el diseñador jefe?",
    options: [
      { id: 'A', text: "**Structured Feedback:** Propones un proceso donde el CEO tiene un checkpoint formal de feedback antes del 80% de avance. Limitas su intervención a momentos específicos del proceso.", score: 3, type: "Process Containment (Parcial)", decisionSummary: "Limitaste intervención del CEO a checkpoints formales." },
      { id: 'B', text: "**Data Shield:** Para cada decisión de diseño, presentas la evidencia de research primero. 'Los usuarios prefieren X porque [data]'. Haces que contradecir el diseño sea contradecir la data.", score: 5, type: "Lead (Evidence-Based Defense)", decisionSummary: "Usaste data como escudo contra opiniones de CEO." },
      { id: 'C', text: "**Executive Accommodation:** Aceptas que el CEO tiene la última palabra. Implementas su feedback y documenta internamente cuando va contra research. Proteges tu posición política.", score: 1, type: "Compliance Culture (Mata ownership)", decisionSummary: "Cediste ownership del diseño al CEO." }
    ],
    explanation: "Rechazar trabajo malo es fácil; rechazar trabajo visualmente bueno que rompe la gobernanza es casi imposible. Pelear sobre gusto o estética es una batalla perdida. **Data Shield** cambia el campo de batalla a casos borde y escalabilidad: 'Tu diseño es hermoso, pero falla en [escenario específico validado]'. Ahora no es opinión vs opinión, sino **System Design** vs **Hero Shot**."
  },
  {
    id: 'bus_factor_knowledge_silo',
    displayId: 'CUL-26',
    category: "Gestión de Riesgo Humano",
    icon: <Users className="w-6 h-6 text-orange-600" />,
    scenario: "Tu 'Principal Designer' (7 años en la empresa) es el único que entiende el motor de reglas legacy. Se niega a documentar porque 'es más rápido si lo hago yo'. Acaba de pedir 4 semanas de vacaciones desconectado. El CEO quiere lanzar una feature que toca ese motor justo en esas fechas.",
    question: "¿Cómo mitigas el riesgo existencial del 'Bus Factor 1'?",
    options: [
      { id: 'A', text: "**Shadowing Forzado:** Asignas a dos seniors para que sean su 'sombra' durante las 2 semanas previas. Graban cada sesión. Priorizas la extracción de conocimiento sobre cualquier otro deliverable del sprint.", score: 5, type: "Lead (Mitigación de Riesgo)", decisionSummary: "Priorizaste shadowing para extraer conocimiento tácito." },
      { id: 'B', text: "**Retención de Emergencia:** Le ofreces un bono significativo para que posponga sus vacaciones o esté disponible 'on-call'. Aseguras la continuidad del negocio utilizando incentivos financieros.", score: 1, type: "Parche (Valida el secuestro)", decisionSummary: "Pagaste bono validando que es indispensable." },
      { id: 'C', text: "**Documentation Sprint:** Le exiges que pase sus últimas 2 semanas escribiendo documentación en Confluence. Confías en que un profesional senior puede estructurar su conocimiento para el equipo.", score: 3, type: "Optimista (Doc será mala)", decisionSummary: "Confiaste en documentación escrita bajo presión." }
    ],
    explanation: "Quien retiene conocimiento como poder no documentará bien bajo presión (**Documentation Sprint**). Pagarle (**Retención**) valida que es indispensable. **Shadowing Forzado** es la única forma de extraer conocimiento tácito: observar, preguntar y grabar. Costoso hoy, barato comparado con un outage."
  },
  {
    id: 'hiring_senior_for_junior_role',
    displayId: 'CUL-27',
    category: "Gestión de Talento",
    icon: <Briefcase className="w-6 h-6 text-purple-600" />,
    scenario: "Tienes budget para un Junior ($60K). Aplica un Senior con 8 años de experiencia ($140K mercado) desesperado tras un layoff que acepta el sueldo de $60K. Tu equipo dice: '¡Es una ganga!'. Tú ves un problema estructural.",
    question: "¿Contratas al Senior sobrecalificado por precio de Junior?",
    options: [
      { id: 'A', text: "**Oportunismo Táctico:** Lo contratas. Obtienes output Senior por precio Junior. Es un win-win inmediato para el roadmap y eleva la vara del equipo. Si se va en 6 meses, ya habrás sacado valor.", score: 1, type: "Mercenario (Riesgo de Flight)", decisionSummary: "Contrataste senior barato sabiendo que se irá pronto." },
      { id: 'B', text: "**Honestidad Radical:** Le dices que está sobrecalificado. Si insiste, lo contratas con título de 'Lead' temporal pero sueldo bajo, prometiendo revisión en 6 meses si hay budget. Alineas expectativas.", score: 3, type: "Compromiso (Riesgo de resentimiento)", decisionSummary: "Contrataste con promesa de revisión salarial futura." },
      { id: 'C', text: "**Rechazo por Flight Risk:** No lo contratas. Sabes que es un **Flight Risk**: se irá apenas el mercado mejore, dejándote con el costo de onboarding perdido. Buscas al Junior con hambre de aprender que se quedará 2 años.", score: 5, type: "Lead (Sostenibilidad)", decisionSummary: "Rechazaste flight risk priorizando retención a largo plazo." }
    ],
    explanation: "Contratar por necesidad económica es rentar un problema. Se llama **Flight Risk**. Se irá apenas tenga una oferta justa, y tú habrás invertido 3 meses de onboarding para 3 meses de trabajo. Un Lead prioriza la **Retención y Sostenibilidad** sobre una 'ganga' temporal."
  },
  {
    id: 'remote_rto_ultimatum_top_talent',
    displayId: 'CUL-28',
    category: "Cultura & Políticas",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "El CEO decreta 'Return to Office' (RTO) obligatorio 3 días/semana. Tu mejor diseñadora (responsable del 40% del revenue) se mudó a 4 horas de la oficina durante la pandemia con aprobación verbal de tu predecesor. Ella dice: 'Si me obligan a ir, renuncio'. El CEO dice: 'Sin excepciones'.",
    question: "¿Cómo gestionas el conflicto entre política y talento clave?",
    options: [
      { id: 'A', text: "**Excepción de Alto Rendimiento:** Negocias una excepción silenciosa para ella basada en sus métricas de desempeño. Mantienes el talento crítico protegiéndolo de la burocracia, asumiendo el riesgo de que otros se enteren.", score: 1, type: "Inequidad (Riesgo cultural)", decisionSummary: "Creaste excepción secreta generando riesgo cultural." },
      { id: 'B', text: "**Transición de Salida:** Aceptas su renuncia pero negocias un periodo de transición de 3 meses como consultora remota. Mantienes la integridad de la política de la empresa mientras mitigas el impacto operativo de su salida.", score: 5, type: "Lead (Integridad Sistémica)", decisionSummary: "Gestionaste salida con transición ordenada de 3 meses." },
      { id: 'C', text: "**Cabildeo Político:** Intentas convencer al CEO de cambiar la política global a 'Remote-First' usando a esta diseñadora como ejemplo del talento que se perderá. Luchas la batalla cultural más grande.", score: 3, type: "Idealista (Batalla perdida)", decisionSummary: "Intentaste cambiar política global en momento inoportuno." }
    ],
    explanation: "Las excepciones secretas (**Excepción**) destruyen la confianza del equipo cuando se descubren. Pelear la política global (**Cabildeo**) en medio de un mandato de CEO es suicidio. **Transición de Salida** es la jugada madura: respeta la política de la empresa y la vida del empleado, gestionando el riesgo operativo."
  }
];
