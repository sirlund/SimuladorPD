import React from 'react';
import {
  Timer, BarChart2, ShieldAlert, Users, Brain, Zap,
  Search, MessageSquare, FileText, Globe, Lock, Heart,
  Code, AlertOctagon, Scale
} from 'lucide-react';

/**
 * Research, Ética & Colaboración
 */
export const research_questions = [
  // --- BLOQUE 4: RESEARCH, USUARIOS & ÉTICA ---
  {
    id: 'research_ignore_darkmode',
    displayId: 'RES-01',
    category: "User Research vs Negocio",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    scenario: "Tu research (N=500) muestra que solo el 12% de usuarios actuales usaría Dark Mode. Ventas reporta que 3 deals Enterprise ($900K) se frenaron por ausencia del feature. El CEO ordena: 'La competencia lo tiene, lánzalo en 1.5 sprints'.",
    question: "¿Qué haces con la evidencia?",
    options: [
      { id: 'A', text: "**Validación Segmentada:** Diseñas un test A/B específico para los prospectos Enterprise que rechazaron el producto. Buscas confirmar empíricamente si el Dark Mode es realmente el 'deal breaker' o solo una excusa superficial, asegurando que la inversión de recursos esté respaldada por data dura.", score: 3, type: "Data-Driven (Demora decisión)" },
      { id: 'B', text: "**Paridad de Mercado:** Aceptas diseñarlo de inmediato. Entiendes que en B2B Enterprise, la 'Paridad de Features' actúa como un factor higiénico de venta. Si la ausencia del feature bloquea la firma del contrato, el ROI es inmediato ($900K), independientemente del uso real post-venta.", score: 5, type: "Lead (Visión de Mercado)" },
      { id: 'C', text: "**Defensa de Evidencia:** Te niegas a priorizarlo citando el research cuantitativo. Si solo el 12% de la base instalada lo usaría, invertir 1.5 sprints es ineficiente. Proteges al equipo de ingeniería de construir 'features fantasma' basándote en la data de comportamiento actual.", score: 1, type: "Mártir del Usuario" }
    ],
    explanation: "Los usuarios actuales (SMB/B2C) no representan a los futuros (Enterprise). La **Defensa de Evidencia** sufre de **Selection Bias**. El Dark Mode aquí es un **Hygiene Factor** (Herzberg): su presencia no enamora, pero su ausencia descalifica la compra. Desbloquear $900K justifica la inversión, aunque el uso sea bajo."
  },
  {
    id: 'accessibility_legal_threat_action',
    displayId: 'RES-02',
    category: "Accesibilidad & Riesgo Legal",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Una carta de abogados amenaza lawsuit por incumplimiento WCAG 2.1 AA en tu dashboard. El cliente representa el 20% de tu ARR. Ingeniería estima 1 sprint para arreglar issues P0, pero el equipo está al 100% cerrando features comprometidas para fin de Q.",
    question: "¿Cómo respondes a la amenaza legal con recursos agotados?",
    options: [
      { id: 'A', text: "**Tiger Team de Emergencia:** Pausas el roadmap y reasignas 2 senior devs + tú para arreglar issues P0 en 1 sprint. Tratas la amenaza legal como un incidente de sitio caído: la supervivencia del contrato (20% ARR) tiene jerarquía sobre cualquier feature nueva.", score: 5, type: "Lead (Gestión de riesgo existencial)" },
      { id: 'B', text: "**Consultoría Externa:** Contratas una agencia especializada ($20K) para remediar los issues en paralelo. Mantienes el velocity del team interno enfocado en el roadmap comprometido, utilizando capital financiero para resolver la deuda técnica sin descarrilar el Q.", score: 3, type: "Solve con $ (Pérdida de know-how)" },
      { id: 'C', text: "**Esfuerzo Extraordinario:** Solicitas al equipo un esfuerzo de 'tiempo extra' (noches/fines de semana) bonificado para cubrir ambos frentes. Apelas al compromiso del equipo para salvar el trimestre sin sacrificar ni el cliente legal ni el roadmap de producto.", score: 1, type: "Wishful thinking (Burnout)" }
    ],
    explanation: "Un lawsuit por 20% del ARR es riesgo existencial. El **Tiger Team** aplica **Triage**: prioriza supervivencia sobre compromisos. **Consultoría Externa** resuelve el hoy pero externaliza el conocimiento crítico. El **Esfuerzo Extraordinario** cae en la **Planning Fallacy**: la fatiga genera código de baja calidad, exacerbando el riesgo."
  },
  {
    id: 'guerrilla_testing_speed',
    displayId: 'RES-03',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Jueves 4:30 PM. Deploy mañana para demo de renovación ($400K). Dudas si el CTA del checkout debe decir 'Confirmar Compra' o 'Proceder al Pago'. Tech Lead exige el copy en 90 minutos.",
    question: "¿Cómo decides el copy en 90 minutos con $400K en juego?",
    options: [
      { id: 'A', text: "**Benchmarking B2B:** Auditas rápidamente a 3 competidores directos. Si hay consenso en la terminología, adoptas el estándar de la industria. Reduces el riesgo al alinearte con patrones ya validados por empresas similares en tu sector.", score: 3, type: "Best practice contextual" },
      { id: 'B', text: "**Criterio Experto:** Decides basado en consistencia interna y heurísticas de claridad. Redactas la justificación en Notion y envías el copy final. Confías en tu experiencia senior para tomar decisiones de micro-copy bajo presión sin burocracia.", score: 3, type: "Expertise documentada" },
      { id: 'C', text: "**Guerrilla Proxy Test:** Envías screenshots A/B por Slack a 10 personas de Sales y Customer Success. Ellos hablan con el cliente real a diario. Decides en 40 min basándote en la intuición colectiva de quienes mejor conocen el lenguaje del usuario.", score: 5, type: "Lead (Data-informed rápido)" }
    ],
    explanation: "Ante la falta de tiempo, 'Algo de data > Cero data'. El **Guerrilla Proxy Test** accede al **Mental Model** del usuario a través de quienes lo conocen (Sales/CS). **Benchmarking** asume que la competencia sabe lo que hace (peligroso). **Criterio Experto** suele ser **HiPPO** (Highest Paid Person's Opinion) disfrazado."
  },

  // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
  {
    id: 'dev_handoff_war_library',
    displayId: 'RES-04',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Cliente Enterprise ($280K) exige 'Drag & Drop' para cerrar el deal. El stack legacy requiere 3 sprints de refactor, pero solo tienes 1 sprint disponible. El CTO prohíbe refactors complejos hasta Q+1.",
    question: "¿Cómo desbloqueas la situación?",
    options: [
      { id: 'A', text: "**Pair Programming Heroico:** Te sientas con el Lead Dev a buscar una implementación 'hacky' que funcione sobre el stack viejo. Priorizas cerrar el deal entregando la funcionalidad visual requerida, resolviendo el 'cómo' sobre la marcha.", score: 3, type: "Heroico técnico" },
      { id: 'B', text: "**Defensa de Calidad:** Exiges al CTO una excepción al 'migration freeze' dado el valor del contrato. Defiendes que entregar una experiencia subóptima o buggy pone en riesgo la renovación futura y la reputación de la marca.", score: 1, type: "Confrontación" },
      { id: 'C', text: "**Negociación de Alcance (Incremental):** Implementas una versión simplificada (botones de 'Mover') ahora para cumplir fecha, con compromiso firmado de entregar Drag & Drop en Q+1. Cierras el deal con funcionalidad core hoy y excelencia técnica mañana.", score: 5, type: "Lead (Pragmatismo)" },
    ],
    explanation: "El Lead busca el 'Sí, y...' en lugar del 'No'. La **Negociación de Alcance** aplica **Incremental Delivery**: valor funcional inmediato, mejora progresiva después. **Pair Programming Heroico** acumula deuda técnica invisible. **Defensa de Calidad** ignora la realidad comercial inmediata del deal de $280K."
  },
  {
    id: 'copy_late_change_legal',
    displayId: 'RES-05',
    category: "Content Strategy",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Miércoles, 48h antes del launch. Legal exige agregar disclaimers de 5 líneas por pantalla para cumplir GDPR. El texto rompe el diseño móvil y el flujo visual. Rediseñar tomaría 2 días.",
    question: "¿Cómo resuelves el conflicto sin demorar el lanzamiento?",
    options: [
      { id: 'A', text: "**Progressive Disclosure:** Implementas patrones de UI que acomodan el texto legal sin romper el layout: tooltips, acordeones o links a modales. Cumples con el requisito de tener el texto 'accesible' sin destruir la jerarquía visual de la pantalla principal.", score: 5, type: "Lead (Pattern Library)" },
      { id: 'B', text: "**Sprint de Emergencia:** Movilizas al equipo para rediseñar las pantallas afectadas y acomodar el texto visiblemente. Priorizas la seguridad legal absoluta y evitas cualquier riesgo de interpretación normativa, aunque cueste noches de trabajo.", score: 3, type: "Fuerza bruta" },
      { id: 'C', text: "**Negociación de Copy:** Reúnes a Legal para reducir el texto a 2 líneas + link. Argumentas con data de conversión que los textos largos disuaden el registro. Intentas racionalizar el requerimiento legal para proteger la UX.", score: 1, type: "Negociación (Alto riesgo)" },
    ],
    explanation: "Negociar con Legal a 48h del launch es fútil. **Progressive Disclosure** es un patrón de diseño estándar que satisface **Compliance** sin sacrificar usabilidad. El **Sprint de Emergencia** resuelve por fuerza bruta un problema estructural. La **Negociación de Copy** arriesga un bloqueo total por tecnicismos legales."
  },
  {
    id: 'design_committee_control',
    displayId: 'RES-06',
    category: "Gestión de Stakeholders",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    scenario: "Design Review con 8 stakeholders (CEO, CFO, Heads). Llevan 20 minutos discutiendo 'Azul vs Verde' por gusto personal. Quedan 4 pantallas críticas por revisar y el tiempo se acaba.",
    question: "¿Cómo recuperas el control de la reunión?",
    options: [
      { id: 'A', text: "**Validación A/B:** Propones lanzar un test rápido para que 'los usuarios decidan'. Desactivas el conflicto de opiniones subjetivas ofreciendo un árbitro neutral (la data), posponiendo la decisión para avanzar con el resto de la agenda.", score: 3, type: "Data-driven (Parálisis)" },
      { id: 'B', text: "**Anclaje en Objetivos:** Interrumpes recordando la métrica de éxito: 'El objetivo de este botón es conversión. ¿Tenemos evidencia de que el verde performa mejor? Si no, sigamos con el sistema actual y revisemos los flujos críticos'.", score: 5, type: "Lead (Facilitación)" },
      { id: 'C', text: "**Defensa del Criterio:** 'Como equipo de diseño, recomendamos azul por consistencia y accesibilidad'. Ejerces tu autoridad como experto en la materia para cerrar la discusión y educar a los stakeholders sobre el respeto a la disciplina.", score: 1, type: "Experto (Genera resentimiento)" },
    ],
    explanation: "Las opiniones subjetivas (**HiPPO**) se combaten con objetivos de negocio. El **Anclaje en Objetivos** devuelve la discusión a lo medible. **Validación A/B** para decisiones triviales es parálisis por análisis (costo de oportunidad). **Defensa del Criterio** suele leerse como arrogancia defensiva."
  },
  {
    id: 'tool_debate_figma_penpot',
    displayId: 'RES-07',
    category: "Design Ops & Herramientas",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Dos diseñadores senior proponen migrar de Figma a Penpot (open source) para ahorrar $12K anuales. Tienes un Design System maduro. La migración requiere reconstruir todo (6-8 semanas).",
    question: "¿Cómo evalúas la decisión de cambiar herramientas?",
    options: [
      { id: 'A', text: "**Cálculo de TCO (Total Cost of Ownership):** Comparas el ahorro ($12K) contra el costo de migración (300h+ de sueldos) y la pérdida de productividad durante la curva de aprendizaje. Tomas la decisión basada puramente en ROI financiero, despersonalizando el debate.", score: 5, type: "Lead (Decisión financiera)" },
      { id: 'B', text: "**Piloto de Innovación:** Autorizas un proyecto pequeño en Penpot para evaluar viabilidad. Fomentas la cultura de exploración tecnológica y mantienes al equipo motivado probando herramientas nuevas sin arriesgar el core product.", score: 3, type: "Incremental (Fragmentación)" },
      { id: 'C', text: "**Estándar de Industria:** Rechazas la migración argumentando que Figma es el estándar de mercado para contratación y colaboración. Priorizas la compatibilidad con el ecosistema externo sobre el ahorro de costos interno.", score: 1, type: "Mantener Estándar" },
    ],
    explanation: "Las herramientas son decisiones financieras. El **Cálculo de TCO** revela el **Switching Cost** oculto: migración + re-training superan por mucho el ahorro de licencias. El **Piloto** fragmenta el workflow y el Design System. Mantener el estándar es válido, pero el argumento financiero es irrefutable."
  },

  // --- BLOQUE 6: PRODUCTIVIDAD & REMOTO ---
  {
    id: 'meeting_overload_protection',
    displayId: 'RES-08',
    category: "Productividad",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "80% del equipo reporta 5-6h diarias de reuniones. El output de diseño cayó 40%. Los PMs insisten en que las reuniones son necesarias para 'alineación'.",
    question: "¿Qué medida estructural implementas?",
    options: [
      { id: 'A', text: "**Bloques de Enfoque (Systemic Design):** Instituyes 'Martes y Jueves sin reuniones' a nivel de calendario de equipo. Creas espacios protegidos por defecto para **Deep Work**, obligando a comprimir la gestión en los otros días.", score: 5, type: "Lead (Cambio sistémico)" },
      { id: 'B', text: "**Higiene de Reuniones:** Trabajas con cada organizador para reducir la duración (30m -> 15m) y requerir agendas claras. Optimizas la eficiencia de las interacciones actuales sin confrontar la cultura de reuniones de la empresa.", score: 3, type: "Incremental (No resuelve volumen)" },
      { id: 'C', text: "**Cultura Async-First:** Decretas que toda actualización de estado debe ser por escrito (Slack/Notion). Promueves un cambio cultural radical hacia la escritura para eliminar la necesidad de sincronización verbal.", score: 3, type: "Cultural shift (Difícil enforcement)" },
    ],
    explanation: "El trabajo creativo requiere tiempo contiguo (**Deep Work**). **Bloques de Enfoque** protege el tiempo por diseño del sistema, no por disciplina individual. **Higiene de Reuniones** ataca el síntoma (duración), no la causa (frecuencia). **Cultura Async** es ideal pero requiere soporte ejecutivo masivo para no fracasar."
  },
  {
    id: 'file_chaos_structure',
    displayId: 'RES-09',
    category: "Design Ops",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Un dev implementó la versión incorrecta de Home (tomó 'Final_V2' en vez de 'Final_Real_V3'). Costó 1 semana de rework. Engineering perdió la confianza en Diseño.",
    question: "¿Qué solución implementas para recuperar la confianza?",
    options: [
      { id: 'A', text: "**Limpieza Profunda:** Dedicas el fin de semana a organizar todo el Drive y archivar versiones viejas. Presentas un entorno inmaculado el lunes para demostrar compromiso con el orden y la calidad.", score: 1, type: "Mártir (No escala)" },
      { id: 'B', text: "**Gobernanza de Entrega:** Creas un archivo 'Master' de solo lectura exclusivo para Devs. Separas el entorno de trabajo (Sandbox) del entorno de entrega (Production), haciendo técnicamente imposible que un dev acceda a un archivo en progreso.", score: 5, type: "Lead (Gobernanza Sistémica)" },
      { id: 'C', text: "**Protocolo de Naming:** Estableces una convención de nombres estricta y realizas un taller con el equipo. Confías en la educación y la disciplina profesional para mantener el orden y evitar errores futuros.", score: 3, type: "Estándares de Equipo" },
    ],
    explanation: "La confianza se recupera con sistemas a prueba de errores. **Gobernanza de Entrega** aplica **Poka-Yoke** (a prueba de tontos): separa el caos creativo de la entrega formal. **Limpieza Profunda** es un parche temporal. **Protocolo de Naming** confía en la disciplina humana, que falla bajo presión."
  },
  {
    id: 'gdpr_cookie_consent_ux',
    displayId: 'RES-10',
    category: "Compliance & UX",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige un banner de cookies que bloquee toda la pantalla. El bounce rate subió 40%. Marketing presiona por cambiarlo, pero Legal dice que es obligatorio.",
    question: "¿Cómo diseñas el consentimiento?",
    options: [
      { id: 'A', text: "**Cumplimiento Malicioso:** Implementas el bloqueo total tal cual lo pide Legal. Dejas que las métricas (caída de tráfico) hagan el trabajo político de demostrar que la política es insostenible, forzando una revisión basada en daño al negocio.", score: -1, type: "Passive Aggressive (Sabotaje)" },
      { id: 'B', text: "**Claridad Ética:** Aceptas la restricción y rediseñas el modal para máxima claridad y facilidad de decisión. Optimizas el copy y la jerarquía para reducir la carga cognitiva, aceptando que el bounce rate es el costo operativo de respetar la privacidad en ese mercado.", score: 5, type: "Lead (Ética > Conversión)" },
      { id: 'C', text: "**Optimización Agresiva:** Diseñas el botón 'Aceptar' en color primario y escondes 'Rechazar' en un link gris pequeño. Cumples técnicamente con dar la opción, pero utilizas patrones de diseño para maximizar la tasa de aceptación.", score: -1, type: "Dark Pattern (Riesgo Multa)" },
    ],
    explanation: "El compliance no se 'hackea'. **Optimización Agresiva** es un Dark Pattern sancionable por GDPR (**Consent Fatigue**). **Cumplimiento Malicioso** es sabotaje. **Claridad Ética** entiende que en privacidad, el consentimiento explícito es la única métrica válida, y el bounce rate es un costo de estructura, no un bug."
  },
  {
    id: 'addictive_design_notifications',
    displayId: 'RES-11',
    category: "Ética de Diseño",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "El Head de Growth presenta en el All-Hands: 'Queremos implementar notificaciones con Variable Rewards (luces, sonidos aleatorios) como TikTok. Proyectamos +25% engagement y $400K en ad revenue'. El problema: tu app educativa tiene 2 millones de usuarios, el 65% son menores de 16 años. Conoces la literatura sobre diseño adictivo y el riesgo de regulación COPPA. El PM te presiona: 'Es solo gamificación, no seas dramático'.",
    question: "¿Cuál es tu postura ética?",
    options: [
      { id: 'A', text: "**Objeción de Conciencia:** Te niegas a diseñar mecánicas de **Variable Rewards** (Skinner Box) dirigidas a menores. Escalas el riesgo reputacional y legal (COPPA) a la dirección. Estableces un límite profesional claro sobre la manipulación de usuarios vulnerables.", score: 5, type: "Lead (Guardián Ético)" },
      { id: 'B', text: "**Implementación Suave:** Diseñas las notificaciones pero eliminas los patrones más agresivos (sin luces estroboscópicas). Buscas un punto medio que cumpla el objetivo de engagement del PM sin caer en los extremos más dañinos del diseño adictivo.", score: 1, type: "Cómplice Pasivo" },
      { id: 'C', text: "**Neutralidad Profesional:** Ejecutas el requerimiento con excelencia técnica. Tu rol es diseñar la mejor solución para los objetivos de negocio definidos; juzgar la moralidad de la estrategia de producto corresponde a los directivos, no al diseñador.", score: -1, type: "Professional Execution (Mercenario)" },
    ],
    explanation: "Un Lead es responsable del impacto de lo que construye. Diseñar adicción para menores cruza líneas éticas y legales. **Objeción de Conciencia** protege a la empresa de riesgos a largo plazo. **Implementación Suave** es complicidad. **Neutralidad Profesional** es la excusa del mercenario para ignorar el daño usuario."
  },
  {
    id: 'data_collection_transparency',
    displayId: 'RES-12',
    category: "Privacidad & Trust",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Marketing quiere pedir teléfono y fecha de nacimiento en el registro 'por si acaso'. Conversión cae 8%.",
    question: "¿Cómo proteges privacidad y conversión?",
    options: [
      { id: 'A', text: "**Progressive Profiling:** Solicitas los datos solo en el momento que aportan valor al usuario (ej: 'Danos tu fecha para enviarte un regalo'). Aplicas el principio de **Data Minimization**, reduciendo fricción inicial y aumentando la calidad del dato recolectado.", score: 5, type: "Lead (Data Minimization)" },
      { id: 'B', text: "**Campos Opcionales:** Incluyes los campos en el registro pero marcados claramente como 'Opcional'. Satisfaces la solicitud de Marketing de capturar datos desde el inicio, pero das control al usuario para saltárselos si prefiere privacidad.", score: 3, type: "Compromiso (Fricción)" },
      { id: 'C', text: "**Bloqueo por Principio:** Te niegas a agregar campos que no son funcionales para el producto core. Defiendes la pureza del registro y la privacidad del usuario, obligando a Marketing a justificar la necesidad del dato antes de pedirlo.", score: 3, type: "Protector (Dogmático)" },
    ],
    explanation: "Pedir datos sin contexto erosiona la confianza. **Progressive Profiling** alinea la recolección de datos con el valor percibo. **Campos Opcionales** añaden carga cognitiva innecesaria en el momento crítico de conversión. **Bloqueo por Principio** es correcto en fondo pero rígido en forma."
  },
  {
    id: 'etica_gambling_mechanics_gamification',
    displayId: 'RES-13',
    category: "Ética de Diseño",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "App de finanzas quiere agregar 'Cajas Misteriosas' con premios en dinero. Legal dice que es válido. Growth proyecta +35% retención.",
    question: "¿Cómo abordas el conflicto ético de gambling en finanzas?",
    options: [
      { id: 'A', text: "**Gamificación Conductual:** Contra-propones mecánicas de 'Streaks' o 'Logros' basadas en constancia, no en azar. Alineas la retención con hábitos financieros saludables, evitando explotar vulnerabilidades psicológicas de ludopatía en una app de salud financiera.", score: 5, type: "Lead (Gamificación Positiva)" },
      { id: 'B', text: "**Compliance Legal:** Implementas las cajas con un disclaimer claro de 'Juegue responsablemente'. Te aseguras de cubrir los requisitos legales formales, permitiendo que el negocio ejecute su estrategia de crecimiento agresivo bajo el paraguas de la ley.", score: 1, type: "Legalista (Parche)" },
      { id: 'C', text: "**Ejecución Estratégica:** Si Legal aprobó y los números dan, diseñas la mejor experiencia de unboxing posible. Priorizas el éxito de la métrica de retención y la viabilidad del negocio, asumiendo que el usuario es adulto y responsable de sus decisiones.", score: -1, type: "Professional Distance (Amoral)" },
    ],
    explanation: "Introducir azar y recompensas variables (**Gambling**) en productos financieros es depredador. **Gamificación Conductual** construye retención sostenible basada en hábitos, no en adicción. **Compliance Legal** es un parche que no mitiga el daño ético. **Ejecución Estratégica** ignora la responsabilidad del producto sobre el bienestar financiero del usuario."
  },
  {
    id: 'etica_ai_generated_fake_testimonials',
    displayId: 'RES-14',
    category: "Ética de Diseño",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "A 48 horas del launch de tu nuevo producto ($150K en paid media comprometido), Marketing te envía un Figma con 50 'testimonios de clientes' para la landing page. Investigas y descubres que todos fueron generados con ChatGPT - ninguno es real. El CMO te escribe: 'Usa fotos de stock con nombres genéricos, nadie se fija. Necesitamos social proof para la conversión'. Legal no ha revisado esto y el CEO no está enterado.",
    question: "¿Qué haces ante una solicitud deshonesta?",
    options: [
      { id: 'A', text: "**Integridad Radical:** Te niegas a diseñar componentes para contenido fabricado. Explicas que la **Fraudulent Misrepresentation** (testimonios falsos) destruye la confianza en la marca irreversiblemente y viola normativas de publicidad.", score: 5, type: "Lead (Integridad)" },
      { id: 'B', text: "**Abstracción Visual:** Usas ilustraciones abstractas en lugar de fotos de personas reales. Eliminas la literalidad del engaño visual, presentando los textos como 'Conceptos de valor' en lugar de testimonios de personas específicas.", score: -1, type: "Visual Neutrality (Cómplice)" },
      { id: 'C', text: "**Placeholder Táctico:** Diseñas el módulo con 'Lorem Ipsum' y dejas que Marketing cargue el contenido final en el CMS. Separas tu responsabilidad técnica de la decisión de contenido, evitando el conflicto directo.", score: 1, type: "Pasivo-Agresivo" },
    ],
    explanation: "La confianza perdida no se recupera. **Integridad Radical** previene daños legales y reputacionales graves. **Abstracción Visual** es complicidad estética. **Placeholder Táctico** es lavarse las manos. Un producto sin clientes reales no debe fingir tenerlos; debe vender su promesa de valor."
  },
  {
    id: 'validacion_prototype_vs_pixel_perfect',
    displayId: 'RES-15',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tienes 2 días para validar una idea compleja. El equipo quiere hacer un prototipo Hi-Fi 'para verse profesional'.",
    question: "¿Cómo diriges la estrategia de prototipado?",
    options: [
      { id: 'A', text: "**Baja Fidelidad (Lo-Fi):** Fuerzas el uso de wireframes monocromáticos. Centras la validación exclusivamente en la propuesta de valor y el flujo, evitando que el usuario (y el equipo) se distraigan con detalles estéticos en una etapa tan temprana.", score: 5, type: "Lead (Focus on Value)" },
      { id: 'B', text: "**Alta Fidelidad Rápida:** Aprovechas el Design System para armar pantallas realistas en poco tiempo. Presentas una visión pulida que genera confianza en los stakeholders y permite evaluar la experiencia visual final desde el día uno.", score: 1, type: "Riesgo Superficial" },
      { id: 'C', text: "**Enfoque Híbrido:** Mezclas pantallas clave en alta fidelidad con flujos secundarios en wireframe. Intentas capturar feedback tanto visual como funcional en una sola sesión para maximizar la eficiencia del test.", score: 1, type: "Prototipo Híbrido" },
    ],
    explanation: "En etapa de concepto, el 'Polish' es ruido. **Baja Fidelidad** evita el **Bikeshedding** (discutir colores en lugar de utilidad). **Alta Fidelidad** sesga al usuario a validar la estética, no el problema. **Enfoque Híbrido** confunde sobre qué es real y qué no."
  },
  {
    id: 'validacion_research_synthesis_paralysis',
    displayId: 'RES-16',
    category: "Validación Ágil",
    icon: <Search className="w-6 h-6 text-blue-500" />,
    scenario: "Research terminó 20 entrevistas y pide 2 semanas para 'sintetizar el reporte'. Dev empieza en 3 días.",
    question: "¿Cómo obtienes insights a tiempo?",
    options: [
      { id: 'A', text: "**Debrief Diario (Just-in-Time):** Implementas sesiones de descarga de 30 min post-entrevistas. Inyectas los 'Top 3 Findings' directamente al backlog de desarrollo en tiempo real, priorizando la velocidad de aprendizaje sobre la formalidad del entregable.", score: 5, type: "Lead (Agile Research)" },
      { id: 'B', text: "**Rigor Académico:** Respetas el tiempo de análisis solicitado. Un reporte incompleto lleva a conclusiones erróneas. Es preferible retrasar el sprint una semana a construir basado en data mal digerida.", score: 1, type: "Académico (Lento)" },
      { id: 'C', text: "**Juicio Experto:** Utilizas tu experiencia y las notas crudas para tomar decisiones rápidas de dirección. Asumes el riesgo de sesgo para desbloquear al equipo, confiando en tu intuición entrenada.", score: 1, type: "Atajo de Experiencia" },
    ],
    explanation: "El research que llega tarde es irrelevante. **Debrief Diario** operacionaliza los insights, convirtiendo el research en un flujo continuo, no en un evento por lotes. **Rigor Académico** crea cuellos de botella. **Juicio Experto** es susceptible a **Confirmation Bias**."
  },
  {
    id: 'legal_algorithmic_bias_gender',
    displayId: 'RES-17',
    category: "Edge Cases Legales/Éticos",
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    scenario: "Data Science quiere usar 'Código Postal' para scoring de créditos (mejora 12%). Legal dice que es permitido. Sabes que es un proxy de raza/clase (Redlining).",
    question: "¿Qué haces ante un sesgo legal pero no ético?",
    options: [
      { id: 'A', text: "**Desafío de Proxy Bias:** Presentas evidencia de cómo el código postal correlaciona con raza/clase. Propones excluir la variable para garantizar **Justicia Algorítmica**, aceptando una leve reducción en la precisión del modelo a cambio de equidad ética.", score: 5, type: "Lead (Algorithmic Justice)" },
      { id: 'B', text: "**Deferencia a Expertos:** Confías en el criterio de Legal y Data Science. Tu rol es diseñar la interfaz, no auditar el modelo matemático. Respetar los dominios de expertise es clave para la colaboración corporativa.", score: -1, type: "Deference to Experts (Cómplice)" },
      { id: 'C', text: "**Transparencia en UI:** Agregas copy explicando que 'Usamos múltiples factores geográficos y financieros'. Aportas honestidad al usuario sobre cómo es evaluado, cumpliendo con el principio de transparencia sin bloquear la decisión técnica.", score: -1, type: "Transparency Theater (Falsa)" },
    ],
    explanation: "El diseño incluye el sistema. Usar código postal es **Redlining Digital** (discriminación encubierta). **Desafío de Proxy Bias** protege la ética de la empresa. **Deferencia a Expertos** es complicidad. **Transparencia en UI** es teatro si el mecanismo subyacente es injusto."
  },
  {
    id: 'legal_data_sovereignty_gdpr_us_servers',
    displayId: 'RES-18',
    category: "Edge Cases Legales/Éticos",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "Empresa quiere expandir a Europa, pero los datos están en USA. GDPR lo prohíbe. CTO dice: 'Diseña la UI mientras vemos lo de los servidores'.",
    question: "¿Cuál es tu rol ante este blocker?",
    options: [
      { id: 'A', text: "**Bloqueo Estratégico:** Marcas la iniciativa como 'Bloqueada por Infraestructura'. Te niegas a invertir recursos de diseño en un mercado legalmente inoperable, forzando a la empresa a resolver el problema de **Data Residency** primero.", score: 5, type: "Lead (Strategic Blocker)" },
      { id: 'B', text: "**Diseño Paralelo:** Avanzas con la UI global. Asumes que Infraestructura resolverá el problema a tiempo. Mantienes el momentum del proyecto y evitas ser el cuello de botella, demostrando actitud proactiva.", score: 1, type: "Silo approach" },
      { id: 'C', text: "**Consentimiento Explícito:** Diseñas un checkbox de 'Acepto procesamiento en USA'. Buscas una solución desde la capa de usuario que permita operar legalmente mediante la aprobación voluntaria del cliente.", score: -1, type: "User Consent (Inválido)" },
    ],
    explanation: "Diseñar para un mercado inviable es **Waste**. El compliance de datos es un requisito funcional, no un detalle. **Bloqueo Estratégico** ahorra dinero a la empresa. **Diseño Paralelo** ignora la realidad. **Consentimiento Explícito** no anula las leyes de soberanía de datos."
  },
  {
    id: 'legal_minor_protection_addictive_mechanics',
    displayId: 'RES-19',
    category: "Edge Cases Legales/Éticos",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Descubres que 15% de usuarios son <13 años (mintieron edad). App tiene chat y compras. Riesgo COPPA altísimo. Growth dice 'no tocar'.",
    question: "¿Qué acción tomas?",
    options: [
      { id: 'A', text: "**Age Gate Robusto:** Implementas verificación de identidad real para features de riesgo. Introduces fricción deliberada para proteger a los menores y a la empresa, priorizando la seguridad (**Safety First**) sobre las métricas de crecimiento infladas.", score: 5, type: "Lead (Safety First)" },
      { id: 'B', text: "**Purga Selectiva:** Identificas y eliminas las cuentas sospechosas silenciosamente. Reduces el riesgo legal inmediato limpiando la base de datos sin alterar la experiencia de usuario para los adultos legítimos.", score: 3, type: "Protección Agresiva" },
      { id: 'C', text: "**Escudo de Términos:** Te apoyas en que los ToS prohíben menores. La responsabilidad legal recae en el usuario que mintió. Mantienes el producto sin cambios para no afectar el growth, confiando en la protección legal de los términos de uso.", score: -1, type: "Legal Shield (Negligencia)" },
    ],
    explanation: "La ignorancia deliberada no protege de **COPPA**. **Age Gate Robusto** es la única medida estructural. **Purga Selectiva** es reactiva e incompleta. **Escudo de Términos** es negligencia cuando tienes evidencia de que los usuarios mienten. El riesgo de multa y reputación supera cualquier beneficio de Growth."
  },
  {
    id: 'user_research_budget_cut_qual_vs_quant',
    displayId: 'RES-20',
    category: "User Research",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "CFO cortó presupuesto de Research. Solo queda Google Analytics. PM dice: 'Ahora somos 100% Data-Driven, no necesitamos hablar con usuarios'.",
    question: "¿Cómo defiendes el research cualitativo sin dinero?",
    options: [
      { id: 'A', text: "**Guerrilla Research:** Reclutas usuarios gratis (Soporte, Redes) y usas herramientas gratuitas. Demuestras que la empatía no depende del presupuesto. Analytics te dice QUÉ pasa, pero necesitas cualitativo para entender POR QUÉ pasa.", score: 5, type: "Lead (Resourceful)" },
      { id: 'B', text: "**Alineación Financiera:** Aceptas la restricción y te enfocas en optimizar funnels con data cuantitativa. Demuestras adaptabilidad a la realidad financiera de la empresa, maximizando el valor de las herramientas que sí tienes.", score: 1, type: "Resignado" },
      { id: 'C', text: "**Inversión Personal:** Pagas una suscripción básica de tu bolsillo para mantener un estándar mínimo de calidad. Muestras compromiso profesional inquebrantable con la voz del usuario, incluso si la empresa no lo apoya.", score: 1, type: "Mártir" },
    ],
    explanation: "El research es una mentalidad, no un software. **Guerrilla Research** mantiene el pulso del usuario a costo cero. **Alineación Financiera** normaliza la ceguera cualitativa. **Inversión Personal** sienta un precedente tóxico e insostenible."
  },
  {
    id: 'user_research_ceo_demands_speed_vs_quality',
    displayId: 'RES-21',
    category: "User Research",
    icon: <Timer className="w-6 h-6 text-red-500" />,
    scenario: "El CEO entra a tu oficina con un wireframe dibujado en servilleta: 'Esto es el Modo Offline que necesitamos. Lo quiero en producción en 3 semanas'. Ya hay $80K invertidos en desarrollo basándose en su diseño. Cuando preguntas por la validación con usuarios, responde: 'Llevo 20 años en esta industria, yo SOY el usuario. No perdamos tiempo en entrevistas'. Tu instinto te dice que hay problemas de usabilidad, pero el tren ya salió de la estación.",
    question: "¿Cómo gestionas el riesgo?",
    options: [
      { id: 'A', text: "**Research Paralelo (Lean):** Aceptas el deadline pero corres tests rápidos en paralelo al desarrollo. Si encuentras un fallo catastrófico, tienes data para frenar. Inyectas validación sin detener el tren político del CEO.", score: 5, type: "Lead (Agile Validation)" },
      { id: 'B', text: "**Registro de Riesgo:** Envías un correo formal detallando que lanzas bajo protesta y deslindando responsabilidad por falta de validación. Proteges tu reputación profesional documentando la mala decisión del ejecutivo.", score: 1, type: "CYA (Cover Your Ass)" },
      { id: 'C', text: "**Bloqueo Metodológico:** Te niegas a diseñar sin validación previa. Defiendes el proceso de diseño como estándar de calidad no negociable, protegiendo a la empresa de lanzar productos basados en suposiciones.", score: 1, type: "Dogmático" },
    ],
    explanation: "Bloquear al CEO (**Bloqueo Metodológico**) te saca de la empresa. Obedecer (**CYA**) te hace irrelevante. **Research Paralelo** compra seguridad mediante velocidad: valida mientras se construye, mitigando el riesgo de los $80K sin confrontar el ego ejecutivo."
  },
  {
    id: 'user_research_conflicting_data_survey_vs_usability',
    displayId: 'RES-22',
    category: "User Research",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    scenario: "Encuesta (N=1000): 70% dice 'Quiero personalizar'. Usabilidad (N=10): Nadie lo usa y todos se confunden. Ingeniería estima 3 sprints.",
    question: "¿A qué data le crees?",
    options: [
      { id: 'A', text: "**Prioridad Conductual:** Crees a la Usabilidad. Lo que la gente HACE (**Behavioral**) predice mejor el éxito que lo que la gente DICE (**Attitudinal**). Evitas construir 'Feature Graveyards' que suenan bien en encuestas pero fracasan en la realidad.", score: 5, type: "Lead (Behavioral > Attitudinal)" },
      { id: 'B', text: "**Validación Estadística:** Crees a la Encuesta. N=1000 tiene significancia estadística; N=10 es anecdótico. Respetas la voz de la mayoría democrática de tu base de usuarios, asumiendo que el test de usabilidad tuvo una muestra sesgada.", score: 1, type: "Ingenuo (Self-reported bias)" },
      { id: 'C', text: "**Desempate A/B:** Construyes un MVP para testear en producción. Es la única forma de tener certeza absoluta. Inviertes recursos para obtener data real de mercado, resolviendo la discrepancia con evidencia irrefutable.", score: 3, type: "Data-driven costoso" },
    ],
    explanation: "Regla de oro: **Behavioral > Attitudinal**. Las encuestas miden aspiraciones ('Quiero ser organizado'), la usabilidad mide realidad ('No tengo tiempo'). **Prioridad Conductual** ahorra 3 sprints de trabajo inútil. N=10 bien observado vale más que N=1000 mal preguntado."
  },
];
