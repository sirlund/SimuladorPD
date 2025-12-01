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
      { id: 'A', text: "Prohibir la crítica negativa: Instaurar regla de 'solo feedback constructivo tipo sándwich'. Los Seniors sienten que estás 'suavizando' la cultura y bajando el estándar. Se quejan de que 'ya no se puede decir la verdad'.", score: 2, type: "Policía (Genera cinismo)" },
      { id: 'B', text: "Rediseñar el Ritual: Cambiar el formato a 'Design Studio' o 'Pairing' donde los Seniors deben CO-CREAR soluciones con los Juniors, no solo juzgar. Cambias su rol de 'Juez' a 'Mentor'. Mides a los Seniors por el crecimiento de sus Juniors.", score: 5, type: "Lead (Cambio Estructural)" },
      { id: 'C', text: "Hablar con los Juniors: Decirles que no lo tomen personal, que así se aprende en la industria. Intentar darles herramientas de resiliencia.", score: 1, type: "Cómplice (Normaliza abuso)" }
    ],
    explanation: "La cultura de 'Roast' disfraza la toxicidad de excelencia. Prohibir (A) no funciona. La opción B cambia la estructura de incentivos: si el Senior es responsable del output del Junior, su comportamiento cambia de ataque a colaboración."
  },
  {
    id: 'feedback_sandwich_method',
    category: "Mentoría & Crecimiento",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tienes un diseñador Mid-Level que es la persona más amable del equipo, trae donas, organiza happy hours. Pero ha fallado 3 deadlines consecutivos y su calidad técnica está estancada. El equipo lo adora, pero tienes que tener 'La Conversación' (Performance Improvement Plan - PIP). Si no mejora en 30 días, debes despedirlo.",
    question: "¿Cómo das feedback duro a alguien querido por todos?",
    options: [
      { id: 'A', text: "Método Sándwich Extremo: 'Eres vital para la cultura... el trabajo técnico necesita mejorar un poco... pero te queremos mucho'. El mensaje se diluye y él sale pensando que todo está bien.", score: 1, type: "Cobarde (Daña al empleado)" },
      { id: 'B', text: "Claridad Radical con Apoyo: 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días para cerrarlos. Quiero que te quedes, pero necesito ver X, Y, Z'.", score: 5, type: "Lead (Duro con el problema, suave con la persona)" },
      { id: 'C', text: "Delegar a HR: Pides a RRHH que inicie el proceso formal de PIP para no dañar tu relación personal. Te lavas las manos de la conversación difícil, perdiendo su respeto.", score: 0, type: "Abandono de Liderazgo" },
    ],
    explanation: "Ser 'amable' ocultando la gravedad de la situación (A) es cruel, porque le niegas la oportunidad de salvar su trabajo. La claridad radical (B) es la verdadera empatía: le das la verdad y las herramientas para mejorar."
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
      { id: 'C', text: "Validación Emocional: 'Todos sentimos síndrome del impostor, eres talentosa'. Empatía pura sin evidencia objetiva que cambie su creencia raíz.", score: 2, type: "Superficial empático (No cambia creencia raíz)" }
    ],
    explanation: "La A valida que 'le falta algo'. La C es amable pero no cambia su creencia. La B ataca la raíz con datos: demuestra que el Seniority real se mide en impacto de negocio ($2.1M), no en estética de Dribbble. Combates el sentimiento de fraude con evidencia irrefutable de valor."
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
    explanation: "Promover por miedo (A) crea inflación de títulos. Dar dinero sin título (C) no resuelve la ambición de carrera. La B es justa: roadmap acelerado con criterios claros. Si se va porque no quiere liderar, validaste que no era Senior material."
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
      { id: 'B', text: "Elogiar con Cautela: 'Gracias por el esfuerzo, pero descansa'. Validar su sacrificio envía el mensaje de que trabajar extra es la forma de subir.", score: 2, type: "Mensaje Mixto" },
      { id: 'C', text: "Ignorar: Si él quiere trabajar, es su decisión. Mientras entregue, el negocio gana.", score: 0, type: "Explotador" }
    ],
    explanation: "El 'Hero Syndrome' es contagioso y tóxico. Si premias el burnout, estableces un estándar insostenible para todos. Un Lead protege al equipo de sí mismo (A)."
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
    explanation: "El trabajo remoto eficaz requiere comunicación asíncrona escrita. Intentar replicar la oficina en Zoom (C) quema al equipo. La cultura de escritura (A) democratiza la información."
  },
  {
    id: 'culture_feedback_sandwich_vs_radical_candor',
    category: "Mentoría & Crecimiento",
    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
    scenario: "Tienes que dar feedback negativo a un diseñador que se esfuerza mucho pero no llega a la calidad visual esperada. Temes desmotivarlo.",
    question: "¿Qué método de feedback usas?",
    options: [
      { id: 'A', text: "Sándwich de Feedback: Elogio + Crítica + Elogio. 'Eres muy puntual, tu UI es fea, pero eres buen compañero'. Diluye el mensaje y confunde.", score: 2, type: "Confuso (Sándwich)" },
      { id: 'B', text: "Radical Candor: Desafiar directamente pero importándote personalmente. 'Tu diseño visual no cumple el estándar porque fallan la tipografía y el espaciado. Quiero ayudarte a mejorar esto porque sé que puedes'.", score: 5, type: "Lead (Claro y Humano)" },
      { id: 'C', text: "Evitación: Arreglar tú los diseños finales para que salgan bien. Le quitas la oportunidad de aprender y te conviertes en cuello de botella.", score: 1, type: "Sobreprotector" }
    ],
    explanation: "El 'Sándwich' esconde la verdad. Radical Candor (B) es honestidad con empatía: dices la verdad dura porque te importa su crecimiento, no para herir."
  },
  {
    id: 'career_manager_vs_ic_track',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu mejor diseñador Senior quiere ser Manager 'para ganar más dinero y tener más impacto', pero odia las reuniones y no tiene paciencia con los juniors.",
    question: "¿Cómo orientas su carrera?",
    options: [
      { id: 'A', text: "Promoverlo a Manager: 'Aprenderá en el camino'. Arriesgas perder un gran diseñador y ganar un pésimo manager que queme al equipo.", score: 0, type: "Principio de Peter" },
      { id: 'B', text: "Dual Track: Mostrarle el camino de 'Staff/Principal Designer' (IC Track). Explicar que puede tener impacto y sueldo de liderazgo sin gestionar personas, enfocándose en craft y estrategia técnica.", score: 5, type: "Lead (IC Track Evangelist)" },
      { id: 'C', text: "Negarle el ascenso: 'No sirves para manager'. Desmotivarlo sin ofrecer alternativa.", score: 1, type: "Matasueños" }
    ],
    explanation: "Gestión de personas es una profesión distinta, no un 'ascenso'. Forzar a grandes ICs a ser managers (A) es un error clásico. El Dual Track (B) retiene talento técnico senior."
  },
  {
    id: 'career_imposter_syndrome_senior',
    category: "Mentoría & Crecimiento",
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    scenario: "Acabas de ser promovido a Lead. En tu primera reunión con los VPs, sientes que no sabes nada y que todos se darán cuenta de que eres un fraude (Síndrome del Impostor).",
    question: "¿Cómo gestionas tu psicología interna?",
    options: [
      { id: 'A', text: "Fingir confianza total: Hablar fuerte y nunca admitir dudas. 'Fake it till you make it'. Puede llevar a errores por arrogancia defensiva.", score: 2, type: "Máscara Frágil" },
      { id: 'B', text: "Vulnerabilidad Estratégica: Admitir lo que no sabes y preguntar. 'No tengo la respuesta ahora, pero investigaré'. La confianza viene de la competencia, no de la omnisciencia.", score: 5, type: "Lead (Growth Mindset)" },
      { id: 'C', text: "Silencio: No hablar en las reuniones para no meter la pata. Te vuelves invisible.", score: 1, type: "Invisible" }
    ],
    explanation: "El síndrome del impostor se cura con acción y humildad. Nadie lo sabe todo. Admitir ignorancia y comprometerse a aprender (B) genera más respeto que fingir (A)."
  },
  {
    id: 'hiring_portfolio_vs_whiteboard_challenge',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Estás rediseñando el proceso de entrevista. El proceso actual tiene un 'Whiteboard Challenge' en vivo que pone muy nerviosos a los candidatos y no refleja el trabajo real.",
    question: "¿Qué cambio implementas para evaluar mejor?",
    options: [
      { id: 'A', text: "Take-Home Exercise Pagado: Dar un problema pequeño y realista para hacer en casa (4h), pagando por el tiempo. Evalúa craft y pensamiento sin la presión del escenario.", score: 5, type: "Lead (Justo y Realista)" },
      { id: 'B', text: "Mantener Whiteboard: 'Necesitamos ver cómo piensan bajo presión'. Favorece a los extrovertidos y buenos oradores, no necesariamente a los buenos diseñadores.", score: 2, type: "Sesgado a Extrovertidos" },
      { id: 'C', text: "Solo Portfolio: Contratar solo viendo trabajos pasados. No garantiza que ellos hicieron todo el trabajo ni evalúa cómo resuelven problemas nuevos.", score: 3, type: "Incompleto" }
    ],
    explanation: "Los Whiteboard Challenges evalúan performance teatral, no diseño. Un ejercicio asíncrono pagado (A) respeta el tiempo y simula el entorno real de trabajo."
  },
  {
    id: 'hiring_culture_fit_bias',
    category: "Gestión de Talento",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El equipo rechazó a una candidata técnicamente brillante porque 'no hubo click' o 'no es Culture Fit' (es muy seria, no se rió de los chistes).",
    question: "¿Cómo desafías este feedback?",
    options: [
      { id: 'A', text: "Culture Add > Culture Fit: Explicar que buscar 'Fit' genera homogeneidad. Buscar 'Culture Add': ¿Qué perspectiva nueva trae? La seriedad puede ser un balance necesario en un equipo payaso.", score: 5, type: "Lead (Diversidad Cognitiva)" },
      { id: 'B', text: "Aceptar el rechazo: 'La cultura es sagrada'. Si no cae bien, no trabajaremos bien. Priorizas comodidad social sobre diversidad.", score: 1, type: "Club de Amigos" },
      { id: 'C', text: "Forzar la contratación: 'No me importa si les cae mal, es buena'. Impones autoridad pero dañas la dinámica del equipo.", score: 2, type: "Autoritario" }
    ],
    explanation: "'Culture Fit' suele ser código para 'se parece a nosotros'. Un Lead busca 'Culture Add' (A) para enriquecer el equipo con personalidades y perspectivas diferentes."
  },
  {
    id: 'freelance_scope_creep_management',
    category: "Freelance & Agency Work",
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
    scenario: "Eres freelance/agencia. El cliente aprobó el alcance, pero ahora pide 'cambios pequeños' constantes que suman 20 horas extra. 'Es solo mover esto, es rápido'.",
    question: "¿Cómo proteges tu rentabilidad?",
    options: [
      { id: 'A', text: "Hacerlo gratis: 'Para mantener al cliente feliz'. Entrenas al cliente a que tu tiempo no vale y destruyes tu margen.", score: 0, type: "Pushover" },
      { id: 'B', text: "Change Request Formal: 'Claro, puedo hacerlo. Evaluaré el impacto en tiempo y presupuesto y te envío la cotización del extra'. Profesionalizas el cambio.", score: 5, type: "Lead (Límites Profesionales)" },
      { id: 'C', text: "Quejarse pasivamente: Hacerlo de mala gana y tardar mucho. Dañas la relación y trabajas gratis igual.", score: 1, type: "Pasivo-Agresivo" }
    ],
    explanation: "El Scope Creep mata agencias. La respuesta profesional no es 'No', es 'Sí, y cuesta X' (B). Si el cambio aporta valor, el cliente pagará. Si no, dejará de pedirlo."
  },
  {
    id: 'freelance_pricing_value_vs_hourly',
    category: "Freelance & Agency Work",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "Un cliente te pide diseñar una landing page que le generará $100k en ventas. Te pregunta tu tarifa por hora. Sabes que te tomará solo 5 horas porque eres experto.",
    question: "¿Cómo cotizas?",
    options: [
      { id: 'A', text: "Por Hora: Cobrar $100/hora x 5 horas = $500. El cliente gana $99.5k, tú ganas migajas y se te castiga por ser rápido.", score: 1, type: "Commodity" },
      { id: 'B', text: "Value-Based Pricing: Cobrar por el valor del activo ($5k - $10k). No vendes horas, vendes una solución de negocio. El cliente sigue ganando mucho y tú capturas valor justo.", score: 5, type: "Lead (Socio de Negocio)" },
      { id: 'C', text: "Inflar horas: Mentir y decir que tomará 50 horas. Es deshonesto y riesgoso.", score: 0, type: "Fraudulento" }
    ],
    explanation: "Cobrar por hora castiga la experiencia (mientras mejor eres, menos tardas y menos ganas). Value-Based Pricing (B) alinea incentivos: cobras por el resultado, no el esfuerzo."
  },
  {
    id: 'design_critique_toxic_culture',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tus design critiques se convirtieron en 'roast sessions'. Diseñadores junior lloran después de presentar. Senior designer defiende: 'Así aprendí yo, si no aguantas crítica no sirves para esto'. Retention cayó 40% este Q, HR te alertó.",
    question: "¿Cómo transformas la cultura tóxica sin perder al senior influyente?",
    options: [
      { id: 'A', text: "Reestructurar Critique Culture: Implementas 'I like, I wish, What if' framework obligatorio. Senior resiste pero lo obligas a reentrenar en feedback constructivo. Si no cambia conducta en 30 días, sale del equipo.", score: 5, type: "Lead (Cultura > Talento individual)" },
      { id: 'B', text: "Separate Junior/Senior Critiques: Proteges juniors en sesiones aparte con tono constructivo. Seniors pueden seguir siendo brutales entre ellos. Resuelve síntoma pero mantiene cultura tóxica latente.", score: 3, type: "Segregación (Parche temporal)" },
      { id: 'C', text: "'Toughen Up' Mentality: 'El diseño es duro, que se adapten'. Normalizas el abuso como 'profesionalismo'. Pierdes todo talento junior, equipo se vuelve homogéneo y tribal.", score: 0, type: "Tóxico (Destruye equipo)" }
    ],
    explanation: "Separar sesiones (B) es band-aid que no arregla la raíz: senior designer tóxico sigue infectando cultura. 'Toughen up' (C) garantiza que solo sobreviven los que normalizan abuso. Un Lead (A) reconoce que una cultura sana es más valiosa que un contributor brillante tóxico - cambias o sales."
  },
  {
    id: 'junior_designer_overwhelm_sprint_planning',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Junior designer tiene 4 projects en paralelo (feature redesign, marketing page, dashboard, iconography refresh). Llora en 1-on-1: 'No duermo, todo es urgente, no sé priorizar'. PM dice 'todos estamos así, es startup life'. Junior amenaza con renunciar.",
    question: "¿Cómo intervienes sin bloquear momentum del equipo?",
    options: [
      { id: 'A', text: "Load Rebalancing + Mentoring: Reasignas 2 projects a otros inmediatamente, enseñas priorización en tiempo real con los 2 que quedan. PM se molesta pero defiendes que burnout cuesta más que retrasos.", score: 5, type: "Lead (Protege talento > Velocity corto plazo)" },
      { id: 'B', text: "Time Management Workshop: Le enseñas Pomodoro/GTD y técnicas de productividad. Es útil pero no resuelve el overload objetivo - sigue con 4 projects urgentes simultáneos.", score: 3, type: "Skill building (Ignora root cause)" },
      { id: 'C', text: "'Everyone is Busy': Normalizas el burnout como parte de startup culture. Junior renuncia en 2 semanas. Cuesta $40K+ reemplazar y 3 meses re-onboard. Lost velocity real.", score: 1, type: "Negligente (Falsa economía)" }
    ],
    explanation: "Time management (B) no resuelve que 4 projects simultáneos son objetivamente demasiado para un junior. Normalizar burnout (C) es penny-wise, pound-foolish: reemplazo + onboarding cuesta más que negociar timelines. Un Lead (A) entiende que sustainable velocity requiere load realista."
  },
];
