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
    scenario: "Dos Juniors renunciaron este mes citando 'ambiente tóxico' en los Design Critiques (costo de reemplazo: $45K cada uno). Tus Seniors los llaman 'Roasts' y defienden el estilo: 'Así se mantiene la vara alta'. HR te advierte: 'Si hay otra renuncia, escalamos a Legal'. El problema: son tus mejores performers individuales y amenazan con irse si 'suavizas los estándares'.",
    question: "¿Cómo intervienes sin perder a tus estrellas técnicas?",
    options: [
      { id: 'A', text: "**Política de Feedback Positivo:** Instaurar regla de 'solo feedback constructivo tipo sándwich'. Reduces tensión inmediatamente y HR queda satisfecho con la acción visible.", score: 1, type: "Rule-Based (No cambia incentivos)" },
      { id: 'B', text: "**Rediseñar el Ritual:** Cambiar el formato a 'Design Studio' donde los Seniors deben CO-CREAR soluciones con Juniors. Cambias su rol de 'Juez' a 'Mentor' y mides a Seniors por el crecimiento de sus mentees, aunque arriesgas perder a tu contributor más técnico si rechaza el nuevo modelo y ejecuta su amenaza de irse.", score: 5, type: "Lead (Cambio Estructural de Incentivos)" },
      { id: 'C', text: "**Coaching de Resiliencia:** Trabajar 1:1 con los Juniors para desarrollar 'piel gruesa' y habilidades de comunicación asertiva. Inviertes en su desarrollo profesional mientras se adaptan al equipo.", score: 1, type: "Treat Symptom (Victim-focused)" }
    ],
    explanation: "Cuando HR amenaza con Legal por renuncias, el 'Roast' dejó de ser cultura—es riesgo financiero. La **Psychological Safety** (Edmondson) no se arregla con reglas sino con incentivos: **Rediseñar el Ritual** cambia el rol del Senior de Juez a Mentor automáticamente. Política de Feedback Positivo no cambia incentivos. Coaching de Resiliencia culpa a la víctima."
  },
  {
    id: 'feedback_sandwich_method',
    category: "Mentoría & Crecimiento",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tu diseñador Mid-Level más querido por el equipo ha fallado 3 deadlines consecutivos (el último costó $80K en retrasos de desarrollo). HR exige un PIP formal: si no mejora en 30 días, lo despides. El equipo adora su actitud y energía positiva. Tienes 1:1 con él mañana y no sabe que su trabajo está en riesgo.",
    question: "¿Cómo das feedback duro a alguien querido por todos?",
    options: [
      { id: 'A', text: "**Método Sándwich:** 'Eres vital para la cultura... el trabajo técnico necesita mejorar un poco... pero te queremos mucho'. Proteges la relación y mantienes la moral del equipo intacta.", score: 1, type: "Feedback Diluido (Ruinous Empathy)" },
      { id: 'B', text: "**Claridad Radical con Apoyo:** 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días para cerrarlos. Quiero que te quedes, pero necesito ver X, Y, Z'. Das la verdad completa con camino claro, aunque arriesgas dañar permanentemente la relación y que se cierre emocionalmente en lugar de mejorar.", score: 5, type: "Lead (Radical Candor)" },
      { id: 'C', text: "**Proceso Formal con HR:** Involucras a RRHH desde el inicio para asegurar que el PIP siga protocolos corporativos. Te proteges legalmente y sigues el proceso establecido, aunque añades formalidad que puede sentirse distante.", score: 3, type: "HR-First (Correcto pero frío)" },
    ],
    explanation: "Cuando el PIP ya comenzó y hay retrasos acumulados, diluir el mensaje es negligencia disfrazada de amabilidad. **Radical Candor** (Kim Scott): ocultar la gravedad es **Ruinous Empathy**—le niegas la oportunidad de salvar su trabajo. El Método Sándwich entierra el mensaje crítico. Proceso Formal con HR es correcto pero frío. La verdadera empatía es claridad con apoyo."
  },
  {
    id: 'imposter_syndrome_senior',
    category: "People Management",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    scenario: "Tu diseñadora Senior (responsable del 35% lift en activación, $2.1M en revenue) está en crisis tras ver el portfolio del nuevo hire (ilustraciones con premios Awwwards). Te envía mensaje: 'Solo hago wireframes, no soy creativa. Quizás debería buscar otro rol.' El CEO pregunta por flight risks en 2 horas y ella es tu única Senior con dominio del producto core.",
    question: "¿Cómo generas cambio real de perspectiva antes del meeting con el CEO?",
    options: [
      { id: 'A', text: "**Upskilling Reactivo:** Le pagas un curso de After Effects ($1,200) para 'llenar sus gaps'. Demuestras inversión tangible en su desarrollo y le das herramientas nuevas que puede aplicar inmediatamente.", score: 1, type: "Skill Gap Focus (Refuerza creencia)" },
      { id: 'B', text: "**Reframe con ROI:** Le muestras el dashboard: 'Tus flows generaron $2.1M en activación. Las ilustraciones ganan likes, tu diseño paga sueldos'. Redefines Seniority como impacto de negocio con evidencia, aunque arriesgas que interprete el mensaje como 'solo vales por métricas' y se sienta aún más reducida a números.", score: 5, type: "Lead (Evidence-Based Reframe)" },
      { id: 'C', text: "**Validación Emocional:** 'Todos sentimos síndrome del impostor, eres talentosa'. Ofreces empatía inmediata y normalizas la experiencia compartida.", score: 1, type: "Empathy-Only (Sin evidencia)" }
    ],
    explanation: "El síndrome del impostor no se cura con cursos ni empatía, se cura con evidencia. **Reframe con ROI** ($2.1M en activación) demuestra que Seniority se mide en **Business Impact**, no en likes de Dribbble. Upskilling Reactivo refuerza la creencia de inferioridad. Validación Emocional no ataca la creencia raíz. Los datos cambian perspectivas; los halagos no."
  },
  {
    id: 'promotion_readiness_debate',
    category: "Career Growth",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    scenario: "Tu Mid-Level con mejor craft exige promoción a Senior (+$25K) amenazando con irse a la competencia mañana. El problema: evita sistemáticamente mentoría y liderazgo, requisitos del rol Senior en tu empresa. Si lo promueves, diluyes el título para todos; si no, pierdes tu mejor ejecutor y el proyecto Q1 se retrasa 6 semanas.",
    question: "¿Cómo balanceas retención vs. integridad del leveling?",
    options: [
      { id: 'A', text: "**Promoción Preventiva:** Lo asciendes para retenerlo. Conservas su output técnico inmediatamente y evitas el costo de reemplazo y retraso del proyecto.", score: 1, type: "Counter-Offer Promotion (Title Inflation)" },
      { id: 'B', text: "**Roadmap Acelerado:** Rechazas la promoción hoy pero ofreces un plan de 3 meses con objetivos claros de liderazgo. Si cumple, asciende. Estableces criterios justos con accountability, aunque arriesgas que se vaya mañana con la oferta competidora y pierdas tanto el talento como el proyecto Q1.", score: 5, type: "Lead (Growth Plan con Accountability)" },
      { id: 'C', text: "**Aumento sin Título:** Le das un aumento salarial (+$15K) por su craft excelente, manteniendo el título Mid. Reconoces su valor con compensación sin alterar la estructura de roles, aunque no resuelve su ambición de título.", score: 3, type: "Compensation Band-Aid (Compra tiempo)" }
    ],
    explanation: "Promover por amenaza enseña al equipo que Counter-Offers aceleran promociones. El **Roadmap Acelerado** (3 meses con objetivos claros) pone responsabilidad en demostrar liderazgo, no en tener oferta externa. Promoción Preventiva salva Q1 hoy pero mata el **Leveling Framework** mañana. Aumento sin Título es parche temporal. La integridad del leveling > retención inmediata."
  },

  // --- BLOQUE 13

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'culture_burnout_hero_syndrome',
    category: "Bienestar del Equipo",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tu junior trabaja hasta las 10pm diario 'para impresionar' (lleva 3 semanas así). El equipo lo elogia públicamente: 'Qué pasión, ojalá todos fueran así'. Pero está ojeroso, cometiendo errores básicos, y el código que entrega requiere 2x más revisión que antes. El PM te pide 'más gente con esa actitud'.",
    question: "¿Cómo intervienes como Lead?",
    options: [
      { id: 'A', text: "**Intervención Sistémica:** Hablar con él y establecer límites de horario. Explicar públicamente al equipo que el overtime sostenido es fallo de planificación, no 'pasión'. Proteges la sostenibilidad del equipo, aunque arriesgas que te perciban como 'anti-hustle' y el PM cuestione tu compromiso con los deadlines.", score: 5, type: "Lead (Sustainable Pace)" },
      { id: 'B', text: "**Reconocimiento Cauteloso:** 'Gracias por el esfuerzo extra, pero asegúrate de descansar'. Reconoces su dedicación sin parecer ingrato y muestras que te importa su bienestar.", score: 1, type: "Mixed Signal (Valida overtime)" },
      { id: 'C', text: "**Ownership Culture:** Los mejores talentos de Silicon Valley prosperan con autonomía total sobre su tiempo y trabajo. Modelo Netflix de Freedom & Responsibility: confías en que gestionará su propio balance porque es un profesional adulto.", score: -1, type: "Laissez-faire (Institucionaliza burnout)" }
    ],
    explanation: "Cuando el overtime requiere 2x más revisión que antes, ya destruyó la productividad. El **Hero Syndrome** es contagioso: si el PM pide 'más gente así', todo el equipo competirá en horas, no en output. **Intervención Sistémica** establece límites de horario y explica públicamente que overtime sostenido es fallo de planificación. Reconocimiento Cauteloso valida el overtime. Ownership Culture institucionaliza burnout."
  },
  {
    id: 'culture_remote_async_communication',
    category: "Trabajo Remoto",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "Equipo distribuido en 4 zonas horarias (SF, Madrid, Singapore, Sydney). Los Zoom calls matan la productividad: velocity cayó 20% y tu Senior en Singapore renunció citando 'calls a las 11pm'. El CTO te culpa: 'Tu equipo diseña mientras el mío duerme'. Amenaza con Daily Sync obligatorio a las 6 AM tu hora.",
    question: "¿Cómo migras a una cultura Async sin madrugar?",
    options: [
      { id: 'A', text: "**Async-First Protocol:** Implementar política de 'No Meeting sin Agenda escrita'. Decisiones por Docs/Notion, feedback por Loom, sincrónico solo para social/brainstorming. Democratizas la información, aunque arriesgas que el CTO interprete 'menos meetings' como 'menos alineación' y escale su frustración.", score: 5, type: "Lead (Async-First Culture)" },
      { id: 'B', text: "**Horario Núcleo Forzado:** Establecer 4 horas de overlap obligatorio (10 AM - 2 PM PT). Garantizas sincronía inmediata y satisfaces al CTO, aunque alguien siempre trabaja en horas subóptimas.", score: 3, type: "Core Hours (Trade-off de flexibilidad)" },
      { id: 'C', text: "**Mantener Zoom Calls:** Seguir con reuniones sincrónicas adaptándose a la mayoría. 'Es el precio de trabajar remoto global'. Mantienes el formato familiar que el CTO espera.", score: 1, type: "Status Quo (Evita cambio)" }
    ],
    explanation: "Cuando velocity cae 20% y un Senior renuncia por calls nocturnos, el Zoom ya cobró su precio. **Async-First Protocol** (decisiones por docs, feedback por Loom) democratiza información y habilita **Deep Work** en cada zona horaria. Horario Núcleo Forzado garantiza overlap pero alguien siempre trabaja en horas subóptimas. Mantener Zoom Calls perpetúa el status quo. **GitLab Handbook** es la guía."
  },
  {
    id: 'culture_feedback_sandwich_vs_radical_candor',
    category: "Mentoría & Crecimiento",
    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
    scenario: "Tu diseñador Mid-Level se esfuerza genuinamente pero no llega a la calidad visual esperada. Su último entregable requirió 3 rondas de revisión (6 horas extra de tu tiempo). El PM pregunta: '¿Cuándo va a poder entregar sin tu supervisión?' Tienes 1:1 con él en 30 minutos.",
    question: "¿Qué método de feedback usas?",
    options: [
      { id: 'A', text: "**Sándwich de Feedback:** Usas el método clásico de iniciar con algo positivo ('Tu puntualidad es excelente'), luego la crítica sobre tipografía/espaciado, y cierras con otro elogio. Suavizas el impacto emocional y proteges la relación.", score: 1, type: "Feedback Sandwich (Signal-to-Noise)" },
      { id: 'B', text: "**Radical Candor:** 'Tu diseño visual no cumple el estándar porque fallan la tipografía y el espaciado. Quiero ayudarte a mejorar esto porque sé que puedes'. Das verdad clara con apoyo genuino, aunque arriesgas que se cierre defensivamente y la relación se vuelva tensa justo cuando más colaboración necesitas.", score: 5, type: "Lead (Care Personally + Challenge Directly)" },
      { id: 'C', text: "**Coaching Hands-On:** Dedicas 2 horas diarias revisando cada diseño para acelerar su curva de aprendizaje. Aseguras calidad inmediata del output y demuestras compromiso con su desarrollo.", score: 1, type: "High-Touch Mentoring (No escala)" }
    ],
    explanation: "Cuando 3 rondas de revisión consumen 6 horas y el PM pregunta 'cuándo será independiente', ya no es problema de feedback—es problema de claridad. **Radical Candor** (Kim Scott): 'Care Personally + Challenge Directly' demuestra que te importa su growth. Sándwich de Feedback entierra el mensaje crítico. Coaching Hands-On no escala."
  },
  {
    id: 'career_manager_vs_ic_track',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu mejor Senior quiere ser Manager 'para ganar más y tener impacto'. Odia las reuniones y pierde paciencia visiblemente con juniors en cada 1:1. Cuando le preguntas qué le entusiasma del rol, responde: 'El título y el sueldo'. Tiene oferta de Manager en otra empresa.",
    question: "¿Cómo orientas su carrera?",
    options: [
      { id: 'A', text: "**Growth Through Challenge:** Los mejores managers de Google, Meta y Amazon aprendieron el rol haciéndolo. La gestión es un craft que se desarrolla con práctica, y el talento técnico senior suele adaptarse rápidamente a nuevos desafíos.", score: -1, type: "Peter Principle (Pierde IC, gana mal manager)" },
      { id: 'B', text: "**IC Track (Staff/Principal):** Mostrarle el camino de 'Staff/Principal Designer'. Puede tener impacto y sueldo de liderazgo sin gestionar personas, enfocándose en craft y estrategia técnica. Retienes talento con growth path claro, aunque arriesgas que no acepte 'menos poder percibido' y se vaya a la otra oferta.", score: 5, type: "Lead (Dual Track Career)" },
      { id: 'C', text: "**Feedback Directo sobre Gaps:** Explicar que el rol de manager requiere habilidades específicas (paciencia con juniors, gusto por 1:1s) que no coinciden con su perfil actual. Das feedback honesto y transparente.", score: 1, type: "Honest Without Path (Dead-end feedback)" }
    ],
    explanation: "Odiar reuniones, perder paciencia en 1:1s y solo querer 'título y sueldo' es receta para el **Peter Principle** (Laurence J. Peter). El **IC Track** (Staff/Principal) le da impacto y sueldo sin gestionar personas que no quiere desarrollar. Growth Through Challenge sacrifica un gran IC para ganar un mal manager. Feedback Directo sobre Gaps es honesto pero sin path alternativo."
  },
  {
    id: 'career_imposter_syndrome_senior',
    category: "Mentoría & Crecimiento",
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    scenario: "Primera semana como Lead. En la reunión con VPs sientes que no sabes nada y que descubrirán que eres un fraude. El CTO te pregunta directamente: '¿Cuál es tu opinión sobre el roadmap de Q2? Estamos esperando perspectiva de diseño'. Todos te miran. No conoces el contexto completo.",
    question: "¿Cómo gestionas tu psicología interna?",
    options: [
      { id: 'A', text: "**Proyectar Confianza Total:** Hablar con autoridad y nunca admitir dudas. 'Fake it till you make it'. Proyectas la imagen de liderazgo que esperan y evitas mostrar inexperiencia.", score: 1, type: "Confidence Theater (Máscara frágil)" },
      { id: 'B', text: "**Vulnerabilidad Estratégica:** 'No tengo la respuesta ahora porque estoy en mi primera semana, pero investigaré y vuelvo con propuesta en 48 horas'. Construyes credibilidad basada en honestidad y follow-through, aunque arriesgas que el CTO interprete 'no sé' como 'no estás preparado para este rol'.", score: 5, type: "Lead (Growth Mindset)" },
      { id: 'C', text: "**Modo Observador:** No hablar en las reuniones hasta entender bien el terreno. Evitas exponerte a errores públicos y usas el tiempo para absorber contexto.", score: 1, type: "Silent Observer (Invisible)" }
    ],
    explanation: "En tu primera semana cuando todos esperan opinión que no tienes, 'fake it' colapsa con la primera pregunta profunda. **Vulnerabilidad Estratégica** ('No sé, pero vuelvo en 48h con propuesta') demuestra **Growth Mindset** (Dweck): la confianza viene de follow-through, no de omnisciencia. Proyectar Confianza Total es máscara frágil. Modo Observador te vuelve invisible."
  },
  {
    id: 'hiring_portfolio_vs_whiteboard_challenge',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "El 40% de candidatos rechaza ofertas citando 'proceso de entrevista estresante'. El Whiteboard Challenge en vivo pone nerviosos a todos y tu última contratación estrella admitió que casi declina por el formato. Recruiting presiona: 'Estamos perdiendo talento ante competidores con procesos más amigables'.",
    question: "¿Qué cambio implementas para evaluar mejor?",
    options: [
      { id: 'A', text: "**Take-Home Exercise Pagado:** Dar un problema pequeño y realista para hacer en casa (4h), pagando $400-600 por el tiempo. Evalúa craft y pensamiento sin presión de escenario, aunque requiere aprobar presupuesto adicional con Finance y algunos candidatos senior pueden rechazarlo citando falta de tiempo.", score: 5, type: "Lead (Work Sample Test)" },
      { id: 'B', text: "**Whiteboard en Vivo:** 'Necesitamos ver cómo piensan bajo presión real'. Evalúas pensamiento en tiempo real sin costo adicional y ves cómo comunican.", score: 1, type: "Live Performance (Extroversion Bias)" },
      { id: 'C', text: "**Portfolio Review Profundo:** Contratar basándose en trabajos pasados con entrevista de case study. Agilizas el proceso significativamente y reduces fricción para el candidato, aunque dependes de que el portfolio represente fielmente su contribución.", score: 3, type: "Portfolio-Only (Rápido pero incompleto)" }
    ],
    explanation: "Cuando 40% de candidatos rechaza ofertas por 'proceso estresante', el formato está costando talento. Los **Work Sample Tests** (Laszlo Bock, Google) predicen mejor desempeño porque simulan **Deep Work** asíncrono, no **Performance Anxiety**. **Take-Home Exercise Pagado** respeta tiempo y elimina **Extroversion Bias**. Whiteboard en Vivo maximiza ansiedad. Portfolio Review Profundo es rápido pero incompleto."
  },
  {
    id: 'hiring_culture_fit_bias',
    category: "Gestión de Talento",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El equipo rechazó a una candidata técnicamente brillante (10/10 en craft): 'No hubo click, es muy seria, no es Culture Fit'. No se rió de los chistes en la entrevista. Tu equipo actual es 100% hombres extrovertidos. HR te pregunta: '¿Vamos con el segundo candidato entonces?' El segundo es técnicamente 6/10 pero 'encajó perfecto'.",
    question: "¿Cómo desafías este feedback?",
    options: [
      { id: 'A', text: "**Culture Add > Culture Fit:** Explicar que buscar 'Fit' puede generar homogeneidad. Buscar 'Culture Add': ¿Qué perspectiva nueva trae? La seriedad puede ser balance necesario. Introduces diversidad cognitiva, aunque arriesgas que el equipo sienta que invalidas su criterio y la integración inicial sea fría.", score: 5, type: "Lead (Cognitive Diversity)" },
      { id: 'B', text: "**Respetar el Veto del Equipo:** 'La cultura es sagrada, si no hay química la colaboración será difícil'. Priorizas cohesión y armonía del grupo existente, validando el criterio colectivo del equipo.", score: 1, type: "Team Veto (Affinity Bias)" },
      { id: 'C', text: "**Override Ejecutivo:** 'Es la mejor candidata técnicamente, la contrato'. Priorizas excelencia técnica sobre consenso y aseguras el mejor talento disponible, aunque el equipo siente que su input no importó.", score: 1, type: "Unilateral Hire (Daña buy-in)" }
    ],
    explanation: "Cuando el 10/10 técnico es rechazado por 'no es Culture Fit' y el 6/10 'encajó perfecto', es **Affinity Bias** disfrazado. **Culture Add > Culture Fit**: ¿qué perspectiva nueva trae? Equipos homogéneos caen en **Groupthink**. Respetar el Veto del Equipo perpetúa homogeneidad. Override Ejecutivo daña buy-in. La diversidad cognitiva mejora decisiones."
  },
  {
    id: 'freelance_scope_creep_management',
    category: "Freelance & Agency Work",
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
    scenario: "Cliente aprobó el alcance hace 2 semanas pero ahora pide 'cambios pequeños' que ya suman 20 horas extra no facturadas. Su mensaje: 'Es solo mover esto, debería ser rápido'. Tu margen en este proyecto pasó de 40% a 5%. Es un cliente que representa el 30% de tu revenue anual.",
    question: "¿Cómo proteges tu rentabilidad sin perder la cuenta?",
    options: [
      { id: 'A', text: "**Absorber como Goodwill:** 'Es solo 1 hora y el cliente tiene presupuesto apretado'. Inviertes en la relación a largo plazo y demuestras flexibilidad como partner estratégico.", score: 1, type: "Relationship Investment (Sin límites)" },
      { id: 'B', text: "**Change Request Formal:** 'Claro, puedo hacerlo. Evaluaré el impacto en tiempo y presupuesto y te envío la cotización'. Profesionalizas el cambio con límites claros, aunque arriesgas que el cliente se frustre ('¿ahora me cobras todo?') y reconsidere renovar el contrato anual.", score: 5, type: "Lead (Change Control Process)" },
      { id: 'C', text: "**Hacerlo con Delay:** Aceptar pero priorizar otros proyectos, entregando tarde para 'enviar mensaje' sobre la carga extra. Evitas confrontación directa mientras proteges tu tiempo.", score: 1, type: "Passive Resistance (Indirecto)" }
    ],
    explanation: "Cuando el margen cae de 40% a 5% por 'cambios pequeños', **Scope Creep** está matando rentabilidad. El **Change Request Formal** ('Puedo hacerlo, esta es la cotización') profesionaliza el cambio con límites claros. Absorber como Goodwill crea precedente sin límites. Hacerlo con Delay es resistencia pasiva. Los límites claros protegen la relación, no la dañan."
  },
  {
    id: 'freelance_pricing_value_vs_hourly',
    category: "Freelance & Agency Work",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "Cliente pide landing page que generará $100k en ventas (proyección validada por su equipo de marketing). Te pregunta: '¿Cuál es tu tarifa por hora?' Sabes que te tomará 5 horas porque eres experto con 10 años de experiencia. Tu tarifa normal es $100/hora.",
    question: "¿Cómo cotizas?",
    options: [
      { id: 'A', text: "**Tarifa por Hora:** Cobrar $100/hora x 5 horas = $500. Modelo estándar basado en tiempo invertido, transparente y fácil de justificar para el cliente.", score: 1, type: "Hourly Rate (Penaliza experiencia)" },
      { id: 'B', text: "**Value-Based Pricing:** Cobrar $5k-$10k por el valor del activo. No vendes horas, vendes una solución de negocio que genera $100k (ROI 10x-20x para el cliente), aunque arriesgas que te diga 'eso es demasiado para una landing' y busque alternativas más baratas.", score: 5, type: "Lead (Outcome-Based Pricing)" },
      { id: 'C', text: "**Optimización de Estimación:** Estimar 50 horas ($5,000) considerando revisiones, gestión de proyecto, y comunicación. El cliente obtiene precio justo por el servicio completo y tú capturas valor real del proyecto.", score: -1, type: "Dishonest Estimate (Fraude de horas)" }
    ],
    explanation: "Cuando una landing genera $100K proyectados pero solo te toma 5 horas de ejecución, cobrar por hora penaliza tu expertise. **Value-Based Pricing** (Blair Enns): cobras por el **Business Outcome** ($5-10K = 5-10% del valor), no por el esfuerzo. Tarifa por Hora recompensa ineficiencia. Optimización de Estimación es fraude. El cliente obtiene ROI 10-20x de todas formas."
  },
  {
    id: 'design_critique_toxic_culture',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Retention de juniors cayó 40% este Q (3 renuncias en 90 días). Los critiques son 'roast sessions'. Tu Senior estrella defiende: 'Así aprendí yo, si no aguantas crítica no sirves'. HR te advierte: 'El próximo exit interview que mencione toxicidad escala a Legal'. El problema: este Senior es tu mejor performer y tiene el 60% del conocimiento institucional del producto.",
    question: "¿Cómo intervienes?",
    options: [
      { id: 'A', text: "**Reestructurar Critique Culture:** Implementas 'I like, I wish, What if' framework obligatorio. Senior resiste pero le das 30 días para adaptarse o salir del equipo. Proteges la cultura, aunque arriesgas perder a tu contributor más técnico, 60% del conocimiento institucional, y enfrentar meses de recovery si ejecuta su amenaza de irse.", score: 5, type: "Lead (Cultura > Talento individual)" },
      { id: 'B', text: "**Critiques Segmentados:** Crear espacios diferenciados: Sesiones de mentoría para Juniors y 'High-Bar Critiques' para Seniors. Adaptas el formato a la madurez del diseñador y reduces tensión inmediata, aunque el problema se contiene sin resolverse.", score: 3, type: "Segmentation (Parche temporal)" },
      { id: 'C', text: "**Cultura de Excelencia:** Los equipos de élite de IDEO, Apple y Pixar son famosos por su feedback directo sin filtros. Estándares altos forjan diseñadores de clase mundial. La verdadera mentoría es preparar talento para la realidad competitiva del mercado.", score: -1, type: "High Standards Defense (Normaliza toxicidad)" }
    ],
    explanation: "Cuando retention cae 40% y HR amenaza Legal, el dilema es real. Pero **The No Asshole Rule** (Sutton) es clara: cultura sana > contributor brillante tóxico. **Reestructurar Critique Culture** ('I like, I wish, What if' framework) da 30 días para adaptarse o salir. Critiques Segmentados es parche temporal. Cultura de Excelencia normaliza toxicidad. Cambias el comportamiento o cambias a la persona."
  },
  {
    id: 'junior_designer_overwhelm_sprint_planning',
    category: "Mentoría & Crecimiento",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "Tu Junior con 4 proyectos en paralelo te envía mensaje: 'No duermo, todo es urgente, no sé priorizar. Si esto sigue así, renuncio esta semana.' El PM responde a tu mensaje: 'Todos estamos así, es startup life. Necesito sus deliverables o perdemos el cliente.' El Junior es talento que quieres retener y el cliente representa $500K ARR.",
    question: "¿Qué haces?",
    options: [
      { id: 'A', text: "**Load Rebalancing + Mentoring:** Reasignas 2 proyectos a otros inmediatamente, enseñas priorización en tiempo real con los 2 que quedan. Proteges al junior con acción concreta, aunque enfrentas conflicto con PM que perderá velocity, el cliente puede notar cambios, y necesitas capacidad en el equipo para redistribuir.", score: 5, type: "Lead (Sustainable Velocity)" },
      { id: 'B', text: "**Productivity Coaching:** Le enseñas Pomodoro/GTD y técnicas de productividad para que gestione mejor las 4 tareas paralelas. Ofreces upskilling tangible sin alterar el roadmap ni confrontar al PM, aunque la carga sigue siendo la misma.", score: 3, type: "Skill Building (Trata síntoma)" },
      { id: 'C', text: "**Normalizar Startup Life:** Explicar que en startups todos manejan múltiples proyectos simultáneos. 'Es parte del crecimiento profesional'. Evitas confrontación con PM y mantienes velocity del equipo.", score: 1, type: "Normalize Overload (Gaslighting)" }
    ],
    explanation: "Cuando un Junior amenaza con renunciar esta semana por sobrecarga, no es problema de Pomodoro. El **Context Switching Cost** destruye productividad real. **Load Rebalancing** (reasignar 2 proyectos, mentoring en tiempo real) protege sostenibilidad. Productivity Coaching trata síntomas. Normalizar Startup Life es gaslighting. **WIP Limits** de 2 proyectos máximo aseguran **Sustainable Velocity**."
  },
];
