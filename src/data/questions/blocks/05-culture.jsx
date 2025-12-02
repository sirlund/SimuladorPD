import React from 'react';
import {
  Timer, AlertTriangle, CheckCircle, XCircle, ArrowRight,
  BarChart2, ShieldAlert, Users, Layers, Brain, Zap,
  Search, MessageSquare, Briefcase, FileText, Globe,
  Lock, Heart, RefreshCw, Target, Code, Play, Star,
  Smartphone, Coffee, AlertOctagon, Trophy, RotateCcw,
  TrendingUp, Shield, Scale, Bug, DollarSign, Languages,
  Palette, Wifi
} from 'lucide-react';

/**
 * Cultura, Stakeholders & Business
 */
export const culture_questions = [
  // --- BLOQUE 12: CULTURA, FEEDBACK & MENTORÍA ---
  {
    id: 'critique_session_dominance',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Heredaste un equipo donde los Design Critiques son 'Roasts'. Los Seniors destrozan el trabajo de los Juniors con comentarios brutales ('esto parece de 1998', '¿en serio pensaste eso?'). Ellos lo llaman 'mantener la vara alta'. Dos Juniors renunciaron el mes pasado citando 'ambiente tóxico'. Los Seniors son tus mejores performers individuales.",
    question: "¿Cómo intervienes sin perder a tus estrellas técnicas?",
    options: [
      { id: 'A', text: "Prohibir la crítica negativa: Instaurar regla de 'solo feedback constructivo tipo sándwich'. Los Seniors sienten que estás 'suavizando' la cultura y bajando el estándar. Se quejan de que 'ya no se puede decir la verdad'.", score: 1, type: "Policía (Genera cinismo)" },
      { id: 'B', text: "Rediseñar el Ritual: Cambiar el formato a 'Design Studio' o 'Pairing' donde los Seniors deben CO-CREAR soluciones con los Juniors, no solo juzgar. Cambias su rol de 'Juez' a 'Mentor'. Mides a los Seniors por el crecimiento de sus Juniors.", score: 5, type: "Lead (Cambio Estructural)" },
      { id: 'C', text: "Coaching Individual: Trabajar uno a uno con los Juniors para desarrollar resiliencia y habilidades de comunicación. Enfocarse en su crecimiento personal sin cambiar la dinámica del equipo.", score: 1, type: "Desarrollo Individual" }
    ],
    explanation: "La cultura de 'Roast' disfraza la toxicidad de excelencia. Prohibir no funciona. Rediseñar el Ritual (Pairing, Co-creación) cambia la estructura de incentivos: si el Senior es responsable del output del Junior, su comportamiento cambia de ataque a colaboración constructiva."
  },
  {
    id: 'feedback_sandwich_method',
    category: "Mentoría & Crecimiento",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tienes un diseñador Mid-Level que es la persona más amable del equipo, trae donas, organiza happy hours. Pero ha fallado 3 deadlines consecutivos y su calidad técnica está estancada. El equipo lo adora, pero tienes que tener 'La Conversación' (Performance Improvement Plan - PIP). Si no mejora en 30 días, debes despedirlo.",
    question: "¿Cómo das feedback duro a alguien querido por todos?",
    options: [
      { id: 'A', text: "Método Sándwich Extremo: 'Eres vital para la cultura... el trabajo técnico necesita mejorar un poco... pero te queremos mucho'. Balanceas el feedback negativo con reconocimiento positivo para mantener la motivación.", score: 1, type: "Feedback Balanceado" },
      { id: 'B', text: "Claridad Radical con Apoyo: 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días para cerrarlos. Quiero que te quedes, pero necesito ver X, Y, Z'.", score: 5, type: "Lead (Duro con el problema, suave con la persona)" },
      { id: 'C', text: "Proceso Formal con HR: Involucras a RRHH desde el inicio para asegurar que el PIP siga protocolos corporativos. Mantienes la relación personal separada del proceso de performance.", score: -1, type: "Proceso Formal" },
    ],
    explanation: "Ser 'amable' ocultando la gravedad de la situación es cruel, porque le niegas a la persona la oportunidad de salvar su trabajo. Claridad Radical es la verdadera empatía: dices la verdad dura porque te importa su crecimiento, no para herir. El método sándwich diluye el mensaje crítico."
  },
  {
    id: 'imposter_syndrome_senior',
    category: "People Management",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    scenario: "Tu diseñadora Senior (crítica para el roadmap) rompe en llanto en el 1-on-1. Se siente un fraude tras ver el portfolio visual del nuevo hire (ilustraciones Awwwards). Ella 'solo' hace wireframes y procesos, aunque su último redesign subió la activación un 35%. Teme no ser 'creativa'. El CEO te preguntará por flight risks en 2 horas.",
    question: "¿Cómo abordas el síndrome del impostor de manera que genere cambio real de perspectiva AHORA?",
    options: [
      { id: 'A', text: "Upskilling Reactivo: Le pagas un curso de After Effects ($1,200) para 'llenar sus gaps'. Validas su inseguridad confirmando implícitamente que le faltan skills visuales.", score: 1, type: "Refuerza síndrome (Valida inseguridad + costo)" },
      { id: 'B', text: "Reframe con ROI: Le muestras el dashboard: 'Tus flows generaron $2.1M. Las ilustraciones ganan likes, tu diseño paga sueldos'. Redefines Seniority como impacto de negocio, no estética.", score: 5, type: "Lead (Reframe con ROI concreto)" },
      { id: 'C', text: "Validación Emocional: 'Todos sentimos síndrome del impostor, eres talentosa'. Empatía pura sin evidencia objetiva que cambie su creencia raíz.", score: 1, type: "Superficial empático (No cambia creencia raíz)" }
    ],
    explanation: "Validar emocionalmente es amable pero no cambia la creencia raíz. Reframe con ROI ataca la inseguridad con datos: demuestra que el Seniority real se mide en impacto de negocio, no en estética de Dribbble. Combates el sentimiento de fraude con evidencia irrefutable de valor."
  },
  {
    id: 'promotion_readiness_debate',
    category: "Career Growth",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    scenario: "Un Mid-Level con craft excelente exige promoción a Senior y +$25K. Sin embargo, evita la mentoría y el liderazgo, requisitos clave para el rol en tu empresa. Sabes que tiene una oferta externa y se irá si dices que no, pero promoverlo bajaría la vara de Senior para todos.",
    question: "¿Cómo manejas promoción con flight risk real pero necesidad de mantener bar?",
    options: [
      { id: 'A', text: "Promoción Preventiva: Lo asciendes para retenerlo. Priorizas conservar su output técnico hoy, aunque diluyas el significado de 'Senior' a largo plazo.", score: 1, type: "Inflación por miedo (Rompe precedente)" },
      { id: 'B', text: "Roadmap Acelerado: Rechazas la promoción hoy pero ofreces un plan de 3 meses con objetivos claros de liderazgo. Si cumple, asciende. Pones la responsabilidad en él.", score: 5, type: "Lead (Growth plan acelerado con accountability)" },
      { id: 'C', text: "Aumento sin Título: Le das un aumento salarial por su craft, pero mantienes el título Mid. Intentas retener con dinero sin comprometer la estructura de roles.", score: 3, type: "Parche costoso (No resuelve expectativa ni garantiza retención)" }
    ],
    explanation: "Promover por miedo crea inflación de títulos. Dar dinero sin título no resuelve la ambición de carrera. El Roadmap Acelerado es justo: establece criterios claros y pone la responsabilidad del ascenso en el desempeño del empleado, no en el chantaje."
  },

  // --- BLOQUE 13

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'culture_burnout_hero_syndrome',
    category: "Bienestar del Equipo",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Un diseñador junior está trabajando hasta las 10pm todos los días para 'impresionar'. El equipo empieza a elogiar su 'pasión'. Tú notas que está ojeroso y cometiendo errores simples.",
    question: "¿Cómo intervienes como Lead?",
    options: [
      { id: 'A', text: "Matar al Héroe: Hablar con él y prohibirle trabajar fuera de hora. Explicar públicamente al equipo que el overtime no es 'pasión', es fallo de planificación. Desactivar la cultura de héroes.", score: 5, type: "Lead (Cultura Sostenible)" },
      { id: 'B', text: "Elogiar con Cautela: 'Gracias por el esfuerzo, pero descansa'. Validar su sacrificio envía el mensaje de que trabajar extra es la forma de subir.", score: 1, type: "Mensaje Mixto" },
      { id: 'C', text: "Respetar Autonomía: Asumes que es adulto y sabe lo que hace. Mientras entregue el trabajo con calidad, su horario es su responsabilidad personal y no requiere intervención de management.", score: -1, type: "Autonomía del Empleado" }
    ],
    explanation: "El 'Hero Syndrome' es contagioso y tóxico. Si premias el burnout, estableces un estándar insostenible para todos. Un Lead protege al equipo de sí mismo, estableciendo límites claros sobre el trabajo fuera de hora para garantizar la sostenibilidad a largo plazo."
  },
  {
    id: 'culture_remote_async_communication',
    category: "Trabajo Remoto",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "Tu equipo está distribuido en 4 zonas horarias. Las reuniones sincrónicas (Zoom) están matando la productividad de todos porque siempre es muy temprano o muy tarde para alguien.",
    question: "¿Cómo migras a una cultura Async?",
    options: [
      { id: 'A', text: "Escritura > Reuniones: Implementar política de 'No Meeting sin Agenda'. Fomentar decisiones por escrito (Docs/Notion) y usar video (Loom) para feedback. Reservar sincrónico solo para social/brainstorming.", score: 5, type: "Lead (Async First)" },
      { id: 'B', text: "Horario Núcleo: Forzar a todos a coincidir 4 horas al día. Resuelve la sincronía pero destruye la flexibilidad del remoto.", score: 3, type: "Híbrido Rígido" },
      { id: 'C', text: "Status Quo: Seguir sufriendo en Zoom. 'Es el precio de trabajar remoto'.", score: 1, type: "Pasivo" }
    ],
    explanation: "El trabajo remoto eficaz requiere comunicación asíncrona escrita. Intentar replicar la oficina en Zoom quema al equipo. La cultura de Escritura > Reuniones democratiza la información y permite que cada uno trabaje en su mejor momento."
  },
  {
    id: 'culture_feedback_sandwich_vs_radical_candor',
    category: "Mentoría & Crecimiento",
    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
    scenario: "Tienes que dar feedback negativo a un diseñador que se esfuerza mucho pero no llega a la calidad visual esperada. Temes desmotivarlo.",
    question: "¿Qué método de feedback usas?",
    options: [
      { id: 'A', text: "Sándwich de Feedback: Usas el método clásico de iniciar con algo positivo ('Tu puntualidad es excelente'), luego la crítica constructiva sobre tipografía/espaciado, y cierras con otro elogio. Suavizas el impacto emocional.", score: 1, type: "Método tradicional" },
      { id: 'B', text: "Radical Candor: Desafiar directamente pero importándote personalmente. 'Tu diseño visual no cumple el estándar porque fallan la tipografía y el espaciado. Quiero ayudarte a mejorar esto porque sé que puedes'.", score: 5, type: "Lead (Claro y Humano)" },
      { id: 'C', text: "Coaching Intensivo: Dedicas 2 horas diarias revisando cada diseño del junior para acelerar su curva de aprendizaje en el momento crítico del proyecto. Aseguras calidad inmediata.", score: 1, type: "Micromanagement temporal" }
    ],
    explanation: "El 'Sándwich' esconde la verdad y confunde al receptor. Radical Candor es honestidad con empatía: dices la verdad dura de manera directa porque te importa el crecimiento de la persona. El Coaching Intensivo puede derivar en micromanagement insostenible."
  },
  {
    id: 'career_manager_vs_ic_track',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu mejor diseñador Senior quiere ser Manager 'para ganar más dinero y tener más impacto', pero odia las reuniones y no tiene paciencia con los juniors.",
    question: "¿Cómo orientas su carrera?",
    options: [
      { id: 'A', text: "Promoverlo a Manager: 'Aprenderá en el camino'. Arriesgas perder un gran diseñador y ganar un pésimo manager que queme al equipo.", score: -1, type: "Principio de Peter" },
      { id: 'B', text: "Dual Track: Mostrarle el camino de 'Staff/Principal Designer' (IC Track). Explicar que puede tener impacto y sueldo de liderazgo sin gestionar personas, enfocándose en craft y estrategia técnica.", score: 5, type: "Lead (IC Track Evangelist)" },
      { id: 'C', text: "Evaluación Realista: Explicar que el rol de manager requiere habilidades específicas que no coinciden con su perfil actual. Ser directo sobre las expectativas del rol sin ofrecer alternativa inmediata.", score: 1, type: "Evaluación Directa" }
    ],
    explanation: "Gestión de personas es una profesión distinta, no un 'ascenso'. Forzar a grandes ICs a ser managers es un error clásico que resulta en perder un gran diseñador y ganar un mal gerente. El Dual Track retiene talento técnico senior ofreciendo crecimiento sin gestión de personas."
  },
  {
    id: 'career_imposter_syndrome_senior',
    category: "Mentoría & Crecimiento",
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    scenario: "Acabas de ser promovido a Lead. En tu primera reunión con los VPs, sientes que no sabes nada y que todos se darán cuenta de que eres un fraude (Síndrome del Impostor).",
    question: "¿Cómo gestionas tu psicología interna?",
    options: [
      { id: 'A', text: "Fingir confianza total: Hablar fuerte y nunca admitir dudas. 'Fake it till you make it'. Puede llevar a errores por arrogancia defensiva.", score: 1, type: "Máscara Frágil" },
      { id: 'B', text: "Vulnerabilidad Estratégica: Admitir lo que no sabes y preguntar. 'No tengo la respuesta ahora, pero investigaré'. La confianza viene de la competencia, no de la omnisciencia.", score: 5, type: "Lead (Growth Mindset)" },
      { id: 'C', text: "Silencio: No hablar en las reuniones para no meter la pata. Te vuelves invisible.", score: 1, type: "Invisible" }
    ],
    explanation: "El síndrome del impostor se cura con acción y humildad. Nadie lo sabe todo. Vulnerabilidad Estratégica (admitir ignorancia y comprometerse a aprender) genera más respeto y confianza que fingir conocimiento (Máscara Frágil)."
  },
  {
    id: 'hiring_portfolio_vs_whiteboard_challenge',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Estás rediseñando el proceso de entrevista. El proceso actual tiene un 'Whiteboard Challenge' en vivo que pone muy nerviosos a los candidatos y no refleja el trabajo real.",
    question: "¿Qué cambio implementas para evaluar mejor?",
    options: [
      { id: 'A', text: "Take-Home Exercise Pagado: Dar un problema pequeño y realista para hacer en casa (4h), pagando por el tiempo. Evalúa craft y pensamiento sin la presión del escenario.", score: 5, type: "Lead (Justo y Realista)" },
      { id: 'B', text: "Mantener Whiteboard: 'Necesitamos ver cómo piensan bajo presión'. Favorece a los extrovertidos y buenos oradores, no necesariamente a los buenos diseñadores.", score: 1, type: "Sesgado a Extrovertidos" },
      { id: 'C', text: "Solo Portfolio: Contratar solo viendo trabajos pasados. No garantiza que ellos hicieron todo el trabajo ni evalúa cómo resuelven problemas nuevos.", score: 3, type: "Incompleto" }
    ],
    explanation: "Los Whiteboard Challenges evalúan performance teatral y manejo de presión, no necesariamente diseño reflexivo. Un Take-Home Exercise Pagado respeta el tiempo del candidato y simula mejor el entorno real de trabajo asíncrono y profundo."
  },
  {
    id: 'hiring_culture_fit_bias',
    category: "Gestión de Talento",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El equipo rechazó a una candidata técnicamente brillante porque 'no hubo click' o 'no es Culture Fit' (es muy seria, no se rió de los chistes).",
    question: "¿Cómo desafías este feedback?",
    options: [
      { id: 'A', text: "Culture Add > Culture Fit: Explicar que buscar 'Fit' genera homogeneidad. Buscar 'Culture Add': ¿Qué perspectiva nueva trae? La seriedad puede ser un balance necesario en un equipo payaso.", score: 5, type: "Lead (Diversidad Cognitiva)" },
      { id: 'B', text: "Aceptar el rechazo: 'La cultura es sagrada'. Si no hay química con el equipo, la colaboración será difícil. Priorizas la cohesión del equipo sobre la diversidad de perfiles.", score: 1, type: "Cohesión de Equipo" },
      { id: 'C', text: "Forzar la contratación: 'No me importa si les cae mal, es buena'. Impones autoridad pero dañas la dinámica del equipo.", score: 1, type: "Autoritario" }
    ],
    explanation: "'Culture Fit' suele ser código para sesgo inconsciente ('se parece a nosotros'). Un Lead busca Culture Add: candidatos que enriquezcan al equipo con personalidades, perspectivas y experiencias diferentes, evitando la homogeneidad."
  },
  {
    id: 'freelance_scope_creep_management',
    category: "Freelance & Agency Work",
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
    scenario: "Eres freelance/agencia. El cliente aprobó el alcance, pero ahora pide 'cambios pequeños' constantes que suman 20 horas extra. 'Es solo mover esto, es rápido'.",
    question: "¿Cómo proteges tu rentabilidad?",
    options: [
      { id: 'A', text: "Hacerlo Gratis: Absorbes el costo como inversión en relación cliente. Es solo 1 hora y el cliente tiene presupuesto apretado. Priorizas goodwill sobre revenue inmediato.", score: -1, type: "Relationship-first" },
      { id: 'B', text: "Change Request Formal: 'Claro, puedo hacerlo. Evaluaré el impacto en tiempo y presupuesto y te envío la cotización del extra'. Profesionalizas el cambio.", score: 5, type: "Lead (Límites Profesionales)" },
      { id: 'C', text: "Quejarse pasivamente: Hacerlo de mala gana y tardar mucho. Dañas la relación y trabajas gratis igual.", score: 1, type: "Pasivo-Agresivo" }
    ],
    explanation: "El Scope Creep mata la rentabilidad de las agencias. La respuesta profesional no es 'No', ni hacerlo gratis. Es el Change Request Formal: 'Sí, puedo hacerlo, y este es el costo/impacto'. Si el cambio aporta valor, el cliente pagará; si no, dejará de pedirlo."
  },
  {
    id: 'freelance_pricing_value_vs_hourly',
    category: "Freelance & Agency Work",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "Un cliente te pide diseñar una landing page que le generará $100k en ventas. Te pregunta tu tarifa por hora. Sabes que te tomará solo 5 horas porque eres experto.",
    question: "¿Cómo cotizas?",
    options: [
      { id: 'A', text: "Por Hora: Cobrar $100/hora x 5 horas = $500. Modelo de pricing estándar basado en tiempo invertido, transparente y fácil de entender para el cliente.", score: 1, type: "Pricing por Hora" },
      { id: 'B', text: "Value-Based Pricing: Cobrar por el valor del activo ($5k - $10k). No vendes horas, vendes una solución de negocio. El cliente sigue ganando mucho y tú capturas valor justo.", score: 5, type: "Lead (Socio de Negocio)" },
      { id: 'C', text: "Inflar horas: Mentir y decir que tomará 50 horas. Es deshonesto y riesgoso.", score: -1, type: "Fraudulento" }
    ],
    explanation: "Cobrar por hora castiga la experiencia (mientras mejor eres, menos tardas y menos ganas). Value-Based Pricing alinea los incentivos: cobras por el resultado y el valor generado para el cliente, no por el esfuerzo o tiempo invertido."
  },
  {
    id: 'design_critique_toxic_culture',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tus design critiques se convirtieron en 'roast sessions'. Diseñadores junior lloran después de presentar. Senior designer defiende: 'Así aprendí yo, si no aguantas crítica no sirves para esto'. Retention cayó 40% este Q, HR te alertó.",
    question: "¿Cómo transformas la cultura tóxica sin perder al senior influyente?",
    options: [
      { id: 'A', text: "Reestructurar Critique Culture: Implementas 'I like, I wish, What if' framework obligatorio. Senior resiste pero lo obligas a reentrenar en feedback constructivo. Si no cambia conducta en 30 días, sale del equipo.", score: 5, type: "Lead (Cultura > Talento individual)" },
      { id: 'B', text: "Critiques por Nivel: Crear espacios seguros segregados: Sesiones de mentoría para Juniors y 'High-Performance Critiques' para Seniors. Adaptamos el estilo de feedback a la madurez del diseñador.", score: 3, type: "Segregación (Parche temporal)" },
      { id: 'C', text: "Mantener Estándares Altos: Mantienes el estándar alto de critique argumentando que la excelencia requiere feedback directo. El equipo debe desarrollar resiliencia para alcanzar el nivel profesional esperado.", score: -1, type: "Estándares Altos" }
    ],
    explanation: "Separar sesiones es un parche que no arregla la raíz: un senior tóxico sigue infectando la cultura. Reestructurar Critique Culture ataca el problema de fondo: una cultura sana es más valiosa que un contributor brillante tóxico. O cambias el comportamiento o cambias a la persona."
  },
  {
    id: 'junior_designer_overwhelm_sprint_planning',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Junior designer tiene 4 projects en paralelo (feature redesign, marketing page, dashboard, iconography refresh). Llora en 1-on-1: 'No duermo, todo es urgente, no sé priorizar'. PM dice 'todos estamos así, es startup life'. Junior amenaza con renunciar.",
    question: "¿Cómo intervienes sin bloquear momentum del equipo?",
    options: [
      { id: 'A', text: "Load Rebalancing + Mentoring: Reasignas 2 projects a otros inmediatamente, enseñas priorización en tiempo real con los 2 que quedan. PM se molesta pero defiendes que burnout cuesta más que retrasos.", score: 5, type: "Lead (Protege talento > Velocity corto plazo)" },
      { id: 'B', text: "Time Management Workshop: Le enseñas Pomodoro/GTD y técnicas de productividad. Mejoras su eficiencia y organización para manejar múltiples proyectos simultáneos con mayor control.", score: 3, type: "Skill building (Ignora root cause)" },
      { id: 'C', text: "Cultura de Alto Rendimiento: Explicar que en startups todos manejan múltiples proyectos simultáneos. Es parte del crecimiento profesional y la experiencia de trabajar en un ambiente dinámico.", score: 1, type: "Cultura de Alto Rendimiento" }
    ],
    explanation: "Time management no resuelve que la carga sea objetivamente excesiva. Normalizar burnout es ineficiente: el reemplazo y onboarding cuestan más que negociar timelines. Un Lead protege el talento mediante Load Rebalancing, asegurando una velocidad sostenible."
  },
];
