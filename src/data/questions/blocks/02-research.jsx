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
    category: "User Research vs Negocio",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    scenario: "Tu research (N=500) muestra que solo el 12% de usuarios actuales usaría Dark Mode. Ventas reporta que 3 deals Enterprise ($900K) se frenaron por ausencia del feature. El CEO ordena: 'La competencia lo tiene, lánzalo en 1.5 sprints'.",
    question: "¿Qué haces con la evidencia?",
    options: [
      { id: 'A', text: "**Validación Adicional:** Diseñar un test A/B con los prospectos Enterprise específicos que rechazaron el producto para medir si Dark Mode realmente cierra esos deals o es una objeción superficial. Obtienes evidencia incremental antes de comprometer recursos, aunque retrasas la decisión comercial 2-3 semanas y arriesgas perder las oportunidades.", score: 3, type: "Data-Driven (Demora decisión)" },
      { id: 'B', text: "**Paridad de Feature:** Aceptas diseñarlo de inmediato. Entiendes que la 'Paridad de Features' es una estrategia de ventas válida (**Hygiene Factor** de Herzberg) aunque tu base actual no lo pida. Los usuarios Enterprise tienen necesidades diferentes y este feature desbloquea $900K en pipeline.", score: 5, type: "Lead (Visión de Mercado)" },
      { id: 'C', text: "**Defensa de Evidencia:** Te niegas a diseñarlo citando el research como defensa. Si solo el 12% lo usaría, invertir 1.5 sprints no tiene ROI. Bloqueas el pipeline comercial basándote exclusivamente en la muestra actual, ignorando que los segmentos nuevos tienen contextos diferentes.", score: 1, type: "Mártir del Usuario" }
    ],
    explanation: "Los usuarios actuales no representan a los usuarios futuros. La 'Defensa de Evidencia' comete **Selection Bias**: tu muestra B2C/SMB no predice necesidades Enterprise. **Hygiene Factors** (Herzberg) no generan satisfacción, pero su ausencia bloquea la compra. Dark Mode desbloquea deals, punto."
  },
  {
    id: 'accessibility_legal_threat_action',
    category: "Accesibilidad & Riesgo Legal",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Una carta de abogados amenaza lawsuit por incumplimiento WCAG 2.1 AA en tu dashboard. El cliente representa el 20% de tu ARR. Ingeniería estima 1 sprint (2 semanas) para arreglar issues P0, pero el equipo está al 100% cerrando features comprometidas para fin de Q (faltan 3 semanas).",
    question: "¿Cómo respondes a la amenaza legal sabiendo que tienes compromisos activos?",
    options: [
      { id: 'A', text: "**Tiger Team:** Pausas el roadmap y asignas 3 personas (2 devs + tú) para arreglar issues P0 en 1 sprint. Comunicas el retraso a stakeholders argumentando riesgo legal existencial. Proteges el 20% del ARR inmediatamente, aunque retrasas las features comprometidas y generas presión política con otros clientes.", score: 5, type: "Lead (Gestión de riesgo existencial)" },
      { id: 'B', text: "**Consultores Externos:** Contratas agencia especializada ($20K) para arreglar issues en paralelo. Mantienes velocity del team interno y cumples el roadmap, pero externalizas el know-how de accesibilidad y dependes de terceros para resolver deuda futura.", score: 3, type: "Solve con $ (Trade-off de conocimiento)" },
      { id: 'C', text: "**Esfuerzo Intensivo:** Intentas meter el trabajo en 'bordes' del sprint (noches/fines de semana) para cumplir con todo. Evitas conflictos políticos temporalmente, pero sobrecargas al equipo estructuralmente y generas código de baja calidad por fatiga acumulada.", score: 1, type: "Wishful thinking (Falla en ambos)" }
    ],
    explanation: "Un lawsuit por 20% del ARR no es negociable. El **Tiger Team** aplica **Triage**: prioriza supervivencia sobre roadmap. El 'Esfuerzo Intensivo' comete **Planning Fallacy** (Kahneman): asume que más horas = más output, ignorando que la fatiga multiplica errores. Salvar el Q a costa del equipo es perder ambos."
  },
  {
    id: 'dark_pattern_retention_ethics',
    category: "Ética de Diseño",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "La retención cayó 18% este Q. Tu PM propone ocultar el botón de cancelar bajo 3 sub-menús y agregar teléfono obligatorio. Argumenta: 'Todos los competidores lo hacen y CFO espera recuperar $420K'. Tu designer senior amenaza con no implementarlo.",
    question: "¿Qué respondes al VP de Growth sabiendo que CFO/CEO esperan $420K de retention y designer senior amenaza con no implementar?",
    options: [
      { id: 'A', text: "**Obediencia Táctica:** Implementas el patrón oscuro temporalmente para salvar el Q, pero documentas tu objeción y agendas un refactor para quitarlo post-deadline. Cumples la métrica inmediata de $420K, pero institucionalizas la práctica de sacrificar trust del usuario por KPIs de corto plazo y estableces precedente para futuros Dark Patterns.", score: 1, type: "Cómplice" },
      { id: 'B', text: "**Fricción Ética:** 'Hagámoslo fácil de cancelar, pero preguntemos POR QUÉ se van'. Usar el offboarding para aprender y retener con ofertas personalizadas. Conviertes el churn en data accionable en lugar de obstáculo, aunque no garantizas recuperar los $420K esperados este Q.", score: 5, type: "Lead (Retención Ética)" },
      { id: 'C', text: "**Escalación Ética:** Te niegas rotundamente y reportas la solicitud a HR como una violación de los valores de la empresa. Priorizas la integridad y los principios corporativos inmediatamente, pero aíslas políticamente al equipo y no propones alternativa viable al problema de retención.", score: -1, type: "Escalación Nuclear" }
    ],
    explanation: "La retención por secuestro es **Confirmshaming** (Dark Pattern). Genera métricas vanidosas y enemigos vocales. La **Fricción Ética** aplica **Exit Interviews** para diagnosticar causas raíz del churn y retener con valor, no con trampas. Escalación Nuclear sin alternativa = suicidio político."
  },
  {
    id: 'guerrilla_testing_speed',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Jueves 4:30 PM. Deploy mañana para demo de renovación ($400K). Dudas si el CTA del checkout debe decir 'Confirmar Compra' o 'Proceder al Pago' (78% conversión en juego). El Tech Lead exige el copy final en 90 minutos. Tu UX Writer está fuera y el benchmarking es inconcluso.",
    question: "¿Cómo decides el copy en 90 minutos con $400K en juego?",
    options: [
      { id: 'A', text: "**Benchmarking Contextual:** Auditas rápido a 3 competidores B2B directos (no e-commerce). Si hay consenso en flujos de 'pago de facturas', lo adoptas y justificas como 'estándar de industria', aunque asumes que la competencia validó correctamente y que tu contexto es idéntico al suyo.", score: 3, type: "Best practice contextual" },
      { id: 'B', text: "**Criterio Experto:** Decides basado en heurísticas y consistencia interna. 'Confirmar Compra' es más claro que 'Proceder'. Documentas tu racional en Notion y confías en tu experiencia de 10 años, aunque basas una decisión de $400K en intuición personal sin validación externa.", score: 3, type: "Expertise documentada" },
      { id: 'C', text: "**Guerrilla Test Interno:** Envías screenshots A/B por Slack a 10 colegas de Sales y CS (que conocen el lenguaje del cliente). Pregunta: '¿Qué esperas que pase al hacer click?'. Decides en 40 min con data cualitativa de proxies que hablan diariamente con el usuario target.", score: 5, type: "Lead (Data-informed rápido)" }
    ],
    explanation: "Ante la falta de tiempo, 'Algo de data > Cero data'. El **Guerrilla Test** con proxies (Sales/CS) accede al **Mental Model** del usuario real sin necesidad de reclutamiento formal. Benchmarking asume que la competencia validó (no siempre cierto). Criterio Experto es **HiPPO** (Highest Paid Person's Opinion) disfrazado."
  },

  // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
  {
    id: 'dev_handoff_war_library',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Cliente Enterprise ($280K) exige 'Drag & Drop' para cerrar el deal. El stack legacy requiere 3 sprints según Tech Lead, pero solo tienes 1. El CTO prohíbe refactors complejos hasta Q+1.",
    question: "¿Cómo desbloqueas la situación con cliente esperando, tech debt limitante, y equipo frustrado?",
    options: [
      { id: 'A', text: "**Pair Programming Heroico:** Te sientas con el dev a intentar hackear una solución en el stack viejo. Produces una implementación rápida que cierra el deal, aunque consumes tiempo de diseño estratégico en debugging técnico y ocultas la deuda técnica real en lugar de hacerla visible al CTO.", score: 3, type: "Heroico técnico" },
      { id: 'B', text: "**Escalación al CTO:** Exiges al CTO que levante el 'migration freeze' dado el valor del deal. Defiendes la UX óptima inmediatamente, aunque generas conflicto político con Engineering y conviertes cada feature en una batalla de prioridades entre departamentos.", score: 1, type: "Confrontación" },
      { id: 'C', text: "**Negociación en Fases:** Implementas una versión simplificada (botón tradicional) ahora para cumplir fecha, con compromiso firmado de hacer el Drag & Drop en Q+1. Cierras el deal hoy manteniendo la relación con Engineering, aunque entregas una experiencia subóptima temporalmente.", score: 5, type: "Lead (Pragmatismo)" }
    ],
    explanation: "El Lead busca el 'Sí, y...' en lugar del 'No'. La **Negociación en Fases** aplica **Incremental Delivery**: valor funcional hoy, excelencia técnica mañana. Escalación genera **Zero-Sum Thinking** entre Producto e Ingeniería. Pair Programming oculta deuda técnica en lugar de negociar plazos realistas. $280K no esperan perfección, esperan solución."
  },
  {
    id: 'copy_late_change_legal',
    category: "Content Strategy",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Miércoles, 48h antes del launch del onboarding (demo con inversores el lunes). Legal aprueba los textos pero con disclaimers de 4-5 líneas por pantalla (vs 1 línea diseñada) para cumplir GDPR. El texto rompe el diseño móvil. Ingeniería dice que rediseñar las 7 pantallas tomaría 1.5-2 días.",
    question: "¿Cómo resuelves el conflicto sin demorar el lanzamiento ni incumplir Legal?",
    options: [
      { id: 'A', text: "**Progressive Disclosure:** Implementas soluciones de UI que acomodan el texto legal sin rediseño masivo: disclaimers colapsados con 'Leer más', tooltips con iconos de info, o modals al hacer click. Mantienes el flujo visual limpio y cumples GDPR, aunque introduces un paso extra de interacción.", score: 5, type: "Lead (Pattern Library)" },
      { id: 'B', text: "**Rediseño de Emergencia:** El equipo trabaja hasta tarde Miércoles y Jueves para rediseñar las 7 pantallas acomodando el texto completo en el flujo, ajustando spacing y jerarquía. Cumples Legal sin trucos de UI, aunque sobrecargas al equipo estructuralmente para resolver un problema de coordinación tardía.", score: 3, type: "Fuerza bruta" },
      { id: 'C', text: "**Negociación de Copy:** Agendas reunión urgente con Legal para negociar micro-copy más conciso (de 4-5 líneas a 2 líneas + link a términos completos). Argumentas que el texto largo afecta conversión, aunque arriesgas que Legal no ceda por compliance y pierdas 1 día crítico del timeline.", score: 1, type: "Negociación (Alto riesgo)" }
    ],
    explanation: "Pelear con Legal sobre compliance a 48h del launch es batalla perdida. **Progressive Disclosure** es un patrón estándar de diseño: muestra lo mínimo necesario, expande bajo demanda. El Rediseño de Emergencia resuelve por fuerza bruta lo que un patrón de UI soluciona estructuralmente. Negociar términos legales = bloqueo asegurado."
  },
  {
    id: 'design_committee_control',
    category: "Gestión de Stakeholders",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    scenario: "Design Review con 8 stakeholders (CEO, CFO, Heads). La discusión del dashboard lleva 20 minutos bloqueada en 'azul vs verde' basada en preferencias personales. El CEO: 'No me gusta el verde, mi esposa tampoco'. Quedan 4 pantallas críticas por revisar y el tiempo se acaba.",
    question: "¿Cómo recuperas el control de la reunión sin alienar a los executives?",
    options: [
      { id: 'A', text: "**Test A/B Rápido:** Propones hacer un A/B test de 3 días la próxima semana con usuarios reales para que los datos decidan entre azul y verde. Evitas conflicto inmediato, aunque consumes recursos de engineering en testear una decisión trivial y retrasas 4 pantallas críticas por un color.", score: 3, type: "Data-driven (Parálisis)" },
      { id: 'B', text: "**Redirigir a Objetivos:** Detienes la discusión recordando el objetivo de negocio ('Este botón debe aumentar conversión 15%'). Preguntas: '¿Azul o verde impacta más la acción del usuario según nuestro brand research?' Anclas la decisión en criterios medibles y recuperas el tiempo para revisar las 4 pantallas críticas.", score: 5, type: "Lead (Facilitación)" },
      { id: 'C', text: "**Autoridad de Diseño:** Intervienes diciendo 'Aprecio el feedback, pero las decisiones de color están respaldadas por nuestro sistema de accesibilidad y brand guidelines. Confiemos en el criterio del equipo de diseño'. Avanzas rápido, aunque cierras canales de comunicación con executives.", score: 1, type: "Experto (Genera resentimiento)" }
    ],
    explanation: "Las opiniones subjetivas ('Me gusta') se combaten con objetivos de negocio. **Redirigir a Objetivos** convierte **HiPPO** (Highest Paid Person's Opinion) en criterio medible: accesibilidad, brand consistency, impacto en conversión. Test A/B para decisiones triviales es parálisis. Autoridad de Diseño = ego profesional que aliena stakeholders clave."
  },
  {
    id: 'tool_debate_figma_penpot',
    category: "Design Ops & Herramientas",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Dos diseñadores senior proponen migrar de Figma a Penpot (open source) para ahorrar $12K anuales y evitar vendor lock-in. Tienes un DS maduro con 250+ componentes en Figma y 3 integraciones críticas (Storybook, Dev Mode). La migración requiere reconstruir todo desde cero: 6-8 semanas estimadas.",
    question: "¿Cómo evalúas la decisión de cambiar herramientas?",
    options: [
      { id: 'A', text: "**ROI Analysis:** Calculas las horas muertas de migración (320-400h) + reconstrucción del DS + re-training del equipo vs el ahorro de licencias. Si el costo total supera $50-60K y paraliza el roadmap 2 meses, no es viable hoy, aunque cierras la conversación sin validar las preocupaciones técnicas del equipo sobre vendor lock-in.", score: 5, type: "Lead (Decisión financiera)" },
      { id: 'B', text: "**Pilot Program:** Propones un experimento de 1 mes migrando solo 1 proyecto no crítico a Penpot para validar la hipótesis sin apostarlo todo. Si funciona bien, escalan gradualmente, aunque fragmentas el workflow del equipo entre dos herramientas y consumes recursos sin decisión clara.", score: 3, type: "Incremental (Fragmentación)" },
      { id: 'C', text: "**Mantener Status Quo:** Explicas que Figma es el estándar de la industria, tiene mejor UX, y cambiar herramientas en este momento distraería al equipo de entregar valor. Bloqueas la migración por principio de foco, aunque sin justificación numérica la decisión parece dogmática.", score: 1, type: "Mantener Estándar" }
    ],
    explanation: "Las herramientas son decisiones financieras, no religiosas. El **ROI Analysis** expone **Switching Cost**: migración (320h) + retraining + pérdida de productividad >> $12K de ahorro. El Pilot fragmenta el DS entre dos plataformas. Status Quo sin números = dogmatismo. Las decisiones de tooling se toman con Excel, no con pasión."
  },

  // --- BLOQUE 6: PRODUCTIVIDAD & REMOTO ---
  {
    id: 'remote_sync_handoff',
    category: "Trabajo Remoto",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    scenario: "Ingeniería Europa (6h adelante) pierde el 40% de su mañana adivinando qué pantallas están listas para dev. La velocidad cayó 15%. El CTO te culpa: 'Tu equipo diseña mientras el mío duerme'. Amenaza con Daily Sync obligatorio a las 6 AM tu hora.",
    question: "¿Cómo organizas el archivo para colaboración asíncrona y evitar madrugar?",
    options: [
      { id: 'A', text: "**Sync Meeting de Compromiso:** Aceptas la reunión de 6 AM dos veces por semana temporalmente hasta estabilizar la velocidad. Desbloqueas el conflicto político y técnico inmediatamente, aunque conviertes la sincronización en una dependencia de tiempo real que limita la autonomía futura.", score: 3, type: "Compromiso (Heroísmo Táctico)" },
      { id: 'B', text: "**Protocolo Async:** Implementas 'Ready for Dev' con Loom obligatorio explicando cada ticket. Eliminas la ambigüedad estructuralmente sin reuniones, aunque impones una carga administrativa extra a los diseñadores que ralentizará el output visual inicial.", score: 5, type: "Lead (Async Ops)" },
      { id: 'C', text: "**Limpieza Manual Diaria:** Dedicas tu última hora a auditar y comentar cada archivo saliente. Garantizas specs perfectas sin cambiar el workflow del equipo, aunque centralizas la 'Verdad' en tu revisión personal, creando un cuello de botella en el flujo de entrega.", score: 1, type: "Centralizado (Control de Calidad)" }
    ],
    explanation: "Las zonas horarias no se arreglan madrugando, se diseñan. El 'Sync de Compromiso' es insostenible y la 'Limpieza Manual' crea un **Bus Factor** de 1. El **Protocolo Async** aplica **Technical Hygiene**: diseña el sistema para que la falta de contexto sea estructuralmente imposible. Tu trabajo es diseñar la máquina, no ser el engranaje que falta."
  },
  {
    id: 'meeting_overload_protection',
    category: "Productividad",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Retrospectiva anónima: 80% del equipo reporta que pasan 5-6h diarias en reuniones (Dailies, Planning, Syncs, Reviews). El output de diseño cayó 40% vs Q anterior. Los PMs argumentan que las reuniones son 'críticas para alignment'.",
    question: "¿Qué medida estructural implementas para recuperar tiempo de trabajo profundo?",
    options: [
      { id: 'A', text: "**No-Meeting Blocks:** Decretas Martes y Jueves como 'Focus Days' absolutos (no meetings de 9 AM a 5 PM a nivel de toda la empresa, enforcement en calendarios). Las reuniones críticas se comprimen en Lunes/Miércoles/Viernes. Proteges el tiempo por diseño de sistema y recuperas output estructuralmente, aunque requieres aprobación de CPO/CTO y generas resistencia inicial de PMs.", score: 5, type: "Lead (Cambio sistémico)" },
      { id: 'B', text: "**Optimización de Reuniones:** Trabajas con cada dueño de reunión para reducir duración (Dailies a 15min, Planning a 90min) y consolidas syncs duplicados. Empoderas al equipo a agendar 'Office Hours' en lugar de meetings ad-hoc. Reduces fricción sin conflicto político, pero no ataca el volumen total y la optimización se degrada con el tiempo por falta de enforcement.", score: 3, type: "Incremental (No resuelve volumen)" },
      { id: 'C', text: "**Async-First Protocol:** Implementas que toda información debe compartirse por escrito primero (Notion, Slack threads), y solo si hay bloqueos o decisiones complejas se escala a meeting sincrónico. Reduces reuniones 30-40% y creas documentación automática, pero requieres cambio cultural profundo y disciplina de escritura que el equipo puede no sostener sin liderazgo ejecutivo fuerte.", score: 3, type: "Cultural shift" }
    ],
    explanation: "El trabajo creativo requiere bloques contiguos de **Deep Work** (Cal Newport). Los **No-Meeting Blocks** protegen el tiempo por diseño del sistema, no por disciplina individual. Optimización de Reuniones ataca síntomas, no causas. Async-First sin mandato ejecutivo = buena intención que colapsa bajo presión. El output cayó 40%: esto no se arregla con tweaks."
  },
  {
    id: 'file_chaos_structure',
    category: "Design Ops",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Un dev implementó la versión incorrecta de Home (tomó 'Final_V2' en vez de 'Final_Real_V3'). Costó 1 semana de rework. El VP de Engineering: 'Si Diseño no puede organizar sus archivos, nosotros no podemos confiar en sus entregas'.",
    question: "¿Qué solución implementas el día 1 para recuperar confianza?",
    options: [
      { id: 'A', text: "**Limpieza Heroica:** Te quedas el fin de semana organizando todo el Drive. El lunes anuncias 'todo limpio' y recuperas confianza inmediatamente. Resuelves el síntoma visible hoy y eliminas la fricción actual, pero el sistema no cambia: el caos volverá en 2-3 semanas cuando la presión del roadmap regrese y nadie mantenga el orden.", score: 1, type: "Mártir (No escala)" },
      { id: 'B', text: "**Gobernanza Bloqueante:** Creas un archivo 'Master' de solo lectura para Devs. Solo los Leads pueden mover diseños aprobados ahí. Estableces una 'Fuente de la Verdad' sistémica que hace el error técnicamente imposible. Recuperas confianza estructuralmente y eliminas rework futuro, aunque ralentizas el handoff inicial 15-20 min por ticket.", score: 5, type: "Lead (Gobernanza Sistémica)" },
      { id: 'C', text: "**Workshop de Naming:** Reúnes al equipo para acordar convenciones de nombres ('Final_V3' vs 'Final_Real'). Estableces estándares de organización claros y creas alignment cultural. Mejoras la disciplina del equipo, pero confías en ejecución humana bajo presión, que inevitablemente falla cuando hay deadlines urgentes.", score: 3, type: "Estándares de Equipo" }
    ],
    explanation: "La confianza de ingeniería se recupera con sistemas a prueba de fallos. **Gobernanza Bloqueante** aplica **Technical Hygiene**: hacer el error estructuralmente imposible, no improbable. Separa entorno de trabajo (caos creativo) del entorno de entrega (orden). Limpieza Heroica no escala. Workshop confía en disciplina humana = falla garantizada bajo presión."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'gdpr_cookie_consent_ux',
    category: "Compliance & UX",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige un banner de cookies que bloquee toda la pantalla hasta que el usuario acepte. Tus tests internos muestran que esto aumenta el bounce rate un 40%. Marketing está preocupado por la conversión.",
    question: "¿Cómo diseñas el consentimiento sin destruir la conversión?",
    options: [
      { id: 'A', text: "**Malicious Compliance:** Diseñar el banner exactamente como Legal lo pidió, sin optimizar nada. Si quieren bloquear toda la pantalla, que vean las consecuencias en las métricas - los datos hablarán por sí solos. A veces la mejor forma de cambiar una política es demostrar su impacto real con evidencia.", score: -1, type: "Passive Aggressive (Sabotaje)" },
      { id: 'B', text: "**Diseño Ético y Legal:** Implementar el bloqueo pero con copy claro y opciones granulares fáciles de entender. Maximizas la claridad de las opciones para que el usuario tome decisión informada. Aceptas el bounce rate como costo de operar éticamente en Europa y proteges a la empresa de multas GDPR (hasta 4% del revenue global).", score: 5, type: "Lead (Ética > Conversión)" },
      { id: 'C', text: "**Optimización de Conversión:** Diseñar el banner con jerarquía visual clara: botón 'Aceptar' prominente en azul primario y opciones de configuración en texto secundario discreto. Es el estándar de la industria - Google, Facebook, y la mayoría de sitios top usan esta jerarquía. Maximizas consentimiento respetando el framework legal.", score: -1, type: "Dark Pattern (Industry Standard)" }
    ],
    explanation: "El cumplimiento legal no es negociable ni área para 'hacks'. **Diseño Ético** acepta la restricción y optimiza claridad, no conversión. GDPR multa hasta 4% del revenue global por **Confirmshaming**. Compliance Malicioso = sabotaje profesional. Optimización agresiva = multas millonarias. El bounce rate es el costo de entrada a Europa, no un bug."
  },
  {
    id: 'addictive_design_notifications',
    category: "Ética de Diseño",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "El PM te pide diseñar notificaciones 'tipo casino' (sonidos, luces, recompensas variables) para aumentar el DAU en una app para adolescentes. Growth espera un 25% más de engagement. Sabes que esto genera adicción.",
    question: "¿Cuál es tu postura ética?",
    options: [
      { id: 'A', text: "**Negativa de Conciencia:** 'No diseño mecánicas adictivas para menores'. Te niegas rotundamente y escalas el tema a HR o Ethics Committee si existe. Estableces una línea ética clara que protege a usuarios vulnerables y a la reputación de la empresa, aunque generas conflicto directo con Growth y arriesgas ser percibido como 'bloqueador' del roadmap.", score: 5, type: "Lead (Guardián Ético)" },
      { id: 'B', text: "**Diseño 'Lite':** Implementas las notificaciones pero sin los sonidos más agresivos. Intentas suavizar el impacto negativo sin confrontar al PM. Evitas conflicto político inmediato, pero te conviertes en cómplice de diseño manipulativo y estableces precedente de que la ética es negociable bajo presión de negocio.", score: 1, type: "Cómplice Pasivo" },
      { id: 'C', text: "**Ownership del Rol:** Diseñas lo que pide el negocio con excelencia profesional. Tu responsabilidad es entregar el mejor diseño posible para los objetivos dados - las decisiones de producto son del PM, no tuyas. Los mejores diseñadores ejecutan la visión del negocio sin imponer sus valores personales.", score: -1, type: "Professional Execution (Mercenario)" }
    ],
    explanation: "Un Lead es responsable del impacto de lo que construye. Diseñar **Variable Rewards** (Skinner Box) para menores cruza línea ética fundamental y legal (COPPA protege menores de 13). Negativa de Conciencia es integridad profesional. Diseño Lite = complicidad. Cumplir Objetivos = daño activo a usuarios vulnerables por métricas."
  },
  {
    id: 'data_collection_transparency',
    category: "Privacidad & Trust",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Marketing quiere pedir número de teléfono y fecha de nacimiento en el registro 'para futuras campañas'. Tus tests muestran que cada campo adicional reduce conversión un 8%. Esto no es necesario para el producto core.",
    question: "¿Cómo proteges la privacidad del usuario y la conversión?",
    options: [
      { id: 'A', text: "**Progressive Profiling:** Pedir esos datos solo cuando sean necesarios para una feature específica (ej: regalo de cumpleaños, notificación SMS). Maximizas conversión inicial y calidad del dato porque el usuario entiende el 'por qué', aunque retrasas la construcción de la base de datos de Marketing y requieres implementar múltiples puntos de captura.", score: 5, type: "Lead (Data Minimization)" },
      { id: 'B', text: "**Campos Opcionales:** Ponerlos en el registro pero marcados como opcionales. Satisfaces a Marketing sin bloquear a usuarios que no quieren compartir. Evitas conflicto interdepartamental, pero aumentas la carga cognitiva en el momento crítico del registro y reduces conversión 8-16% sin garantía de captura efectiva.", score: 3, type: "Compromiso (Fricción)" },
      { id: 'C', text: "**Bloquear Request:** 'No pedimos datos que no usamos hoy'. Te niegas a agregar los campos por principio de minimización de datos. Proteges la conversión y la privacidad inmediatamente, pero adoptas postura rígida que bloquea necesidades legítimas de Marketing sin proponer alternativa operativa.", score: 3, type: "Protector (Dogmático)" }
    ],
    explanation: "Pedir datos 'por si acaso' aumenta fricción y erosiona trust. **Progressive Profiling** aplica **Data Minimization** (GDPR): solicita datos en contexto donde el usuario percibe valor directo. Campos Opcionales aumentan carga cognitiva en registro (momento crítico de conversión). Bloquear sin alternativa = dogmatismo. El contexto justifica el dato."
  },
  {
    id: 'etica_gambling_mechanics_gamification',
    category: "Ética de Diseño",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tu app de finanzas personales quiere agregar 'Cajas Misteriosas' con premios en efectivo por ahorrar. Legal dice que es legal. Growth proyecta +35% de retención. Tú sientes que introduce mecánicas de gambling en una herramienta de salud financiera.",
    question: "¿Cómo abordas el conflicto ético?",
    options: [
      { id: 'A', text: "**Rediseño Conductual:** Proponer 'Streaks' o 'Badges' de logro en lugar de premios aleatorios. Fomentar el hábito por constancia visible, no por azar. Alineas incentivos de negocio con bienestar del usuario y generas retención sostenible, aunque no alcanzas el +35% proyectado y requieres educar a Growth sobre gamificación ética vs explotativa.", score: 5, type: "Lead (Gamificación Positiva)" },
      { id: 'B', text: "**Aceptar con Warning:** Diseñar las cajas pero agregar un disclaimer prominente de 'Juegue con responsabilidad'. Implementas la feature mientras cumples con responsabilidad legal formal. Evitas conflicto con Growth y cumples compliance superficial, pero introduces mecánicas adictivas en herramienta de salud financiera con disclaimer cosmético que no mitiga daño conductual.", score: 1, type: "Legalista (Parche)" },
      { id: 'C', text: "**Ejecutar la Estrategia:** Si Legal aprobó y el negocio lo necesita, la decisión está tomada. Tu rol como diseñador es hacer la mejor implementación posible de la estrategia definida. Las empresas más exitosas separan las decisiones de negocio de la ejecución táctica - eso es profesionalismo.", score: -1, type: "Professional Distance (Amoral)" }
    ],
    explanation: "Introducir **Variable Rewards** (gambling) en finanzas explota vulnerabilidad psicológica. **Rediseño Conductual** (Streaks/Badges) fomenta hábito por constancia, no adicción por azar. Aceptar con Warning es parche legal que no mitiga daño. Implementar tal cual contradice la misión de 'salud financiera'. Legal ≠ Ético."
  },
  {
    id: 'etica_ai_generated_fake_testimonials',
    category: "Ética de Diseño",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Marketing generó 50 testimonios falsos con ChatGPT para la landing de lanzamiento (aún no hay clientes reales). Te piden diseñarlos con fotos de stock para 'agregar credibilidad'. El launch es en 3 días.",
    question: "¿Qué haces ante una solicitud deshonesta?",
    options: [
      { id: 'A', text: "**Negativa Absoluta:** 'No pondré mi nombre en un diseño que engaña a los usuarios'. Te niegas a diseñar componentes para contenido falso. Estableces un estándar ético claro y proteges la integridad de la marca a largo plazo, aunque generas conflicto directo con Marketing a 3 días del launch y arriesgas ser excluido de decisiones futuras.", score: 5, type: "Lead (Integridad)" },
      { id: 'B', text: "**Diseño Neutral:** Usar ilustraciones abstractas en lugar de fotos para mantener un estilo visual consistente sin implicar autenticidad literal. El diseño presenta la propuesta de valor, no hace claims específicos - es una práctica común en landing pages de productos nuevos. Tu trabajo es el visual, no el copy.", score: -1, type: "Visual Neutrality (Cómplice)" },
      { id: 'C', text: "**Placeholder Text:** Diseñar el componente pero poner 'Lorem Ipsum' o 'Testimonio Real Aquí'. Dejas que Marketing pegue el texto falso después, lavándote las manos formalmente. Cumples el delivery técnico, pero adoptas postura pasivo-agresiva que no previene el fraude y solo protege tu conciencia sin resolver el problema ético real.", score: 1, type: "Pasivo-Agresivo" }
    ],
    explanation: "La confianza es el activo más difícil de recuperar. **Negativa Absoluta** establece estándar ético y previene **Fraudulent Misrepresentation** (testimonios falsos son ilegales en muchas jurisdicciones). Diseño Genérico = complicidad disfrazada. Placeholder = lavado de manos que no previene daño. Un launch sin clientes reales puede esperar 3 días más."
  },
  {
    id: 'validacion_prototype_vs_pixel_perfect',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tienes 2 días para validar una idea compleja con usuarios. Tu equipo quiere hacer un prototipo en alta fidelidad 'para que se vea profesional'. Sabes que el alta fidelidad distrae con detalles visuales en lugar del concepto core.",
    question: "¿Cómo diriges la estrategia de prototipado?",
    options: [
      { id: 'A', text: "**Baja Fidelidad (Lo-Fi):** Forzar el uso de wireframes en blanco y negro (Balsamiq o Figma Lo-Fi). Enfocar el test exclusivamente en flujo y propuesta de valor. Obtienes feedback sobre el concepto core sin distracciones estéticas, aunque el equipo se siente expuesto mostrando trabajo 'sin terminar' y algunos usuarios piden más contexto visual.", score: 5, type: "Lead (Focus on Value)" },
      { id: 'B', text: "**Alta Fidelidad Rápida:** Usar el Design System para armar algo 'bonito' rápido. Aprovechas componentes existentes para acelerar el prototipado y proyectas profesionalismo. Reduces la fricción interna con el equipo, pero invitas feedback sobre colores, espaciado y detalles visuales en lugar de validar la utilidad del concepto core.", score: 1, type: "Riesgo Superficial" },
      { id: 'C', text: "**Híbrido:** Mezclar pantallas reales con wireframes para mostrar diferentes niveles de fidelidad. Intentas evaluar tanto el concepto como aspectos visuales en un solo test. Maximizas la data capturada por sesión, pero confundes al usuario con inconsistencia visual y fragmentas el feedback entre 'lo bonito' y 'lo útil'.", score: 1, type: "Prototipo Híbrido" }
    ],
    explanation: "En validación temprana, el 'Polish' es enemigo del feedback honesto. **Baja Fidelidad** obliga al usuario (y al equipo) a centrarse en **Value Proposition**, no en estética. Alta Fidelidad invita a **Bikeshedding** (Parkinson): debatir detalles triviales ignorando problemas estructurales. Híbrido confunde. Valida el 'qué' antes del 'cómo'."
  },
  {
    id: 'validacion_research_synthesis_paralysis',
    category: "Validación Ágil",
    icon: <Search className="w-6 h-6 text-blue-500" />,
    scenario: "El equipo de Research hizo 20 entrevistas de usuario. Quieren 2 semanas para transcribir, codificar y sintetizar un reporte de 50 páginas. El sprint de desarrollo empieza en 3 días y el PM está bloqueado esperando insights.",
    question: "¿Cómo obtienes insights accionables a tiempo?",
    options: [
      { id: 'A', text: "**Debrief Diario:** Implementar sesiones de 30 min post-entrevistas donde el equipo comparte 'Top 3 hallazgos' inmediatamente. Construir el backlog con esto, el reporte formal viene después. Inyectas insights frescos al ciclo de desarrollo sin detener el sprint, aunque sacrificas profundidad de análisis y podrías perder patrones que solo emergen con síntesis completa.", score: 5, type: "Lead (Agile Research)" },
      { id: 'B', text: "**Esperar el Reporte:** Retrasar el sprint 2 semanas. 'Sin research completo no movemos un pixel'. Priorizas rigor académico y análisis exhaustivo antes de tomar decisiones. Obtienes insights completos con alta confianza, pero desconectas el research del ciclo de producto y conviertes el conocimiento en artefacto académico que llega tarde al mercado.", score: 1, type: "Académico (Lento)" },
      { id: 'C', text: "**Intuición Informada:** Priorizas velocity sobre exhaustividad. Usas los insights que ya capturaste de las sesiones presenciadas más tu experiencia de 10+ años para decidir rápido. Desbloqueas el sprint inmediatamente, pero basas decisiones en memoria selectiva y sesgo de confirmación sin validar patrones reales en las 20 entrevistas completas.", score: 1, type: "Atajo de Experiencia" }
    ],
    explanation: "El research tiene fecha de caducidad. **Debrief Diario** aplica **Just-in-Time Research**: inyecta conocimiento fresco sin detener delivery. Esperar el Reporte convierte insights en artefacto académico irrelevante. Intuición Informada es **HiPPO** (Highest Paid Person's Opinion) disfrazado de experiencia. Los insights que no impactan decisiones no son insights, son documentación."
  },
  {
    id: 'legal_algorithmic_bias_gender',
    category: "Edge Cases Legales/Éticos",
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    scenario: "Diseñas un algoritmo de aprobación de créditos. Data Science pide incluir 'Código Postal' como variable (mejora precisión del modelo 12%). Sabes que esto correlaciona con raza/nivel socioeconómico (redlining histórico). Legal: 'Técnicamente no es raza, es legal'.",
    question: "¿Qué haces ante un sesgo algorítmico legal pero no ético?",
    options: [
      { id: 'A', text: "**Challenge Ético:** Presentar evidencia de 'Proxy Bias' a los stakeholders. Proponer excluir variables geográficas para garantizar equidad real, aunque baje un poco la precisión del modelo. Estableces estándar de justicia algorítmica y proteges reputación de la empresa, aunque reduces accuracy 12% y generas fricción con Data Science que priorizan performance técnico.", score: 5, type: "Lead (Algorithmic Justice)" },
      { id: 'B', text: "**Deferencia a Expertos:** Si Legal aprobó la variable, tu responsabilidad termina ahí. Los abogados son los expertos en compliance y los data scientists en accuracy. Respetar la expertise de cada área es profesionalismo - no es tu rol cuestionar decisiones fuera de tu dominio.", score: -1, type: "Deference to Experts (Cómplice)" },
      { id: 'C', text: "**Transparencia Proactiva:** Agregar copy que explique 'Nuestros créditos se basan en múltiples variables de data objetiva'. Comunicar el proceso de evaluación de manera clara demuestra profesionalismo y genera confianza. La transparencia es siempre la mejor política.", score: -1, type: "Transparency Theater (Falsa)" }
    ],
    explanation: "El diseño incluye el diseño del sistema y sus consecuencias. Permitir **Proxy Bias** (Código Postal = raza/clase) perpetúa **Redlining** histórico bajo disfraz de neutralidad. **Challenge Ético** educa sobre Algorithmic Justice. Aceptar la definición legal = complicidad. Transparencia Falsa oculta discriminación con jerga. Legal ≠ Justo."
  },
  {
    id: 'legal_accessibility_wcag_lawsuit',
    category: "Edge Cases Legales/Éticos",
    icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
    scenario: "Un competidor fue demandado por no cumplir WCAG (settlement de $250K). Tu CEO entra en pánico: 'Hacer la app accesible para mañana'. Es imposible. Requiere auditoría y refactor de meses.",
    question: "¿Cómo gestionas el pánico ejecutivo con realidad técnica?",
    options: [
      { id: 'A', text: "**Solución Rápida (Plugin):** Instalar un overlay de accesibilidad como AccessiBe o UserWay que promete cumplimiento WCAG inmediato. Permite mostrar progreso visible al CEO hoy, calmar el pánico, y demostrar 'good faith effort' ante cualquier demanda. Es la solución que muchas empresas Fortune 500 usan.", score: -1, type: "Quick Fix (Snake Oil)" },
      { id: 'B', text: "**Roadmap de Remediación:** Auditar las 5 pantallas críticas hoy, arreglarlas en 1 sprint y presentar un plan de 6 meses para el resto. Mostrar progreso real y documentado reduce el riesgo legal inmediato. Estableces diligencia debida demostrable, aunque no eliminas el riesgo por completo hasta completar la remediación total.", score: 5, type: "Lead (Progreso Sostenible)" },
      { id: 'C', text: "**Análisis de Riesgo:** Evaluar la probabilidad real de demanda. Las demandas de accesibilidad típicamente apuntan a empresas grandes con presencia física. Tu empresa es B2B SaaS pequeña - el costo de oportunidad de desviar recursos de producto supera el riesgo estadístico de litigio. Prioriza lo que mueve métricas.", score: -1, type: "Risk Analysis (Negligente)" }
    ],
    explanation: "No existe 'accesibilidad instantánea'. Los plugins automáticos son **Snake Oil** conocido en la industria legal: no protegen de demandas. La única defensa es **Diligencia Debida**: **Roadmap de Remediación** activo y documentado que demuestre voluntad progresiva. Ignorar señales del mercado = negligencia. El pánico se calma con plan, no con parches."
  },
  {
    id: 'legal_data_sovereignty_gdpr_us_servers',
    category: "Edge Cases Legales/Éticos",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "Tu empresa (LATAM) quiere expandirse a Europa. Todos los datos están en AWS Virginia (USA). GDPR prohíbe transferir datos de ciudadanos UE a USA sin protecciones específicas. El CTO: 'Migrar servidores es muy caro, diseña la UI mientras nosotros vemos el tema'.",
    question: "¿Cuál es tu rol desde Producto/Diseño en este problema de infraestructura?",
    options: [
      { id: 'A', text: "**Alertar el Blocker:** Marcar la expansión a Europa como 'Bloqueada por Compliance' en el roadmap. No diseñar ni una pantalla para Europa hasta que Infra resuelva el almacenamiento. Previenes desperdicio de recursos en diseño para mercado inoperable, aunque generas fricción política con Growth y requieres autoridad para bloquear iniciativa ejecutiva.", score: 5, type: "Lead (Strategic Blocker)" },
      { id: 'B', text: "**Diseñar Igual:** Asumes que compliance es responsabilidad de Legal/Infra. Continúas diseñando la UI globalmente agnóstica mientras ellos resuelven data residency. Evitas conflicto interdepartamental y mantienes velocity del equipo, pero inviertes recursos de diseño en expansión inviable y operas en silos que ignoran blockers fundamentales.", score: 1, type: "Silo approach" },
      { id: 'C', text: "**Consent-Based Solution:** Agregar un checkbox prominente 'Acepto que mis datos sean procesados en servidores de USA'. El consentimiento explícito e informado es un pilar de GDPR - si el usuario acepta voluntariamente, el framework legal está cubierto. Es la solución más rápida mientras Infra evalúa migración.", score: -1, type: "User Consent (Inválido)" }
    ],
    explanation: "Diseñar para un mercado donde no puedes operar legalmente es **Waste** (Lean). Un Lead identifica **Strategic Blockers** de infraestructura antes de invertir horas en expansión inviable. Diseñar Igual opera en silos. Pedir consentimiento ignora que GDPR requiere **Data Residency**, no solo consent. El compliance es blocker, no detalle de Legal."
  },
  {
    id: 'legal_minor_protection_addictive_mechanics',
    category: "Edge Cases Legales/Éticos",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Descubres que el 15% de tus usuarios son menores de 13 años (mintieron en su edad). Tu app tiene chat abierto y compras in-app. COPPA impone multas de hasta $43K por menor afectado. Growth dice 'no toques nada'.",
    question: "¿Qué acción inmediata tomas?",
    options: [
      { id: 'A', text: "**Purga de Cuentas:** Identificar patrones de comportamiento infantil y cerrar esas cuentas preventivamente. Pierdes 15% de usuarios inmediatamente para proteger la empresa. Reduces riesgo legal rápido con acción unilateral, pero implementas sistema de detección imperfecto que puede generar falsos positivos y no previene re-registro.", score: 3, type: "Protección Agresiva" },
      { id: 'B', text: "**Age Gate Robusto:** Implementar verificación de edad real (ID o tarjeta de crédito) para features riesgosas (chat/compras). Introduces fricción alta en experiencia pero necesaria por compliance. Proteges menores estructuralmente y cumples COPPA, aunque reduces conversión significativamente y requieres inversión en sistema de verificación.", score: 5, type: "Lead (Safety First)" },
      { id: 'C', text: "**Terms of Service Defense:** Los usuarios aceptaron que tienen 18+ en el registro - la responsabilidad legal de la falsificación es suya, no nuestra. Cambiar features basándose en especulación de edades sería discriminatorio y perjudicaría a usuarios legítimos. Nuestros ToS nos protegen.", score: -1, type: "Legal Shield (Negligencia)" }
    ],
    explanation: "La ignorancia deliberada no es defensa legal ante **COPPA**. Descubrir evidencia = obligación de actuar. **Age Gate Robusto** introduce fricción necesaria para proteger menores y empresa. Purga de Cuentas es reactivo, no preventivo. Ignorancia Plausible = negligencia criminal. $43K × menores afectados = riesgo existencial. Safety > Growth."
  },
  {
    id: 'user_research_budget_cut_qual_vs_quant',
    category: "User Research",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "El CFO cortó el presupuesto de Research (adiós UserTesting, adiós Dovetail). Solo queda Google Analytics y Google Meet. El PM: 'Ahora seremos 100% Data-Driven con Analytics, ya no necesitamos hablar con usuarios'.",
    question: "¿Cómo defiendes el research cualitativo sin presupuesto?",
    options: [
      { id: 'A', text: "**Guerrilla Research:** Reclutar usuarios gratis (redes sociales, customer support tickets) y usar herramientas gratuitas (Google Meet, Notion). Demostrar que el 'Por qué' (Cuali) explica el 'Qué' (Cuanti). Mantienes pulso del usuario a costo cero y validas que empatía no depende de presupuesto, aunque requieres más esfuerzo manual en reclutamiento y síntesis.", score: 5, type: "Lead (Resourceful)" },
      { id: 'B', text: "**Aceptar la derrota:** Enfocarse solo en funnels y A/B testing. 'Si la empresa no paga herramientas, no valora la empatía'. Evitas esfuerzo extra sin recursos y alineas con la decisión de CFO, pero abandonas la responsabilidad de entender al usuario y cedes el research como disciplina por falta de presupuesto.", score: 1, type: "Resignado" },
      { id: 'C', text: "**Pagar de tu bolsillo:** Pagar una suscripción personal a herramientas básicas (UserTesting, Dovetail) para mantener la calidad del research. Mantienes el estándar profesional temporalmente, pero estableces precedente insostenible de subsidiar el trabajo con recursos personales y normalizas que la empresa no invierta en research.", score: 1, type: "Mártir" }
    ],
    explanation: "El research es mentalidad, no tooling. Analytics dice QUÉ pasa (síntoma), hablar con humanos dice POR QUÉ (causa). **Guerrilla Research** demuestra ingenio: reclutamiento gratis + herramientas gratuitas = research válido. Aceptar derrota normaliza ignorancia del usuario. Pagar de tu bolsillo establece precedente tóxico. Empatía no requiere presupuesto, requiere voluntad."
  },
  {
    id: 'user_research_ceo_demands_speed_vs_quality',
    category: "User Research",
    icon: <Timer className="w-6 h-6 text-red-500" />,
    scenario: "El CEO quiere lanzar una feature nueva en 2 semanas. Te ordena: 'Sáltate el research esta vez, yo soy el usuario target y sé que esto funciona'. Ya invirtió $80K en desarrollo.",
    question: "¿Cómo gestionas el riesgo de construir lo incorrecto?",
    options: [
      { id: 'A', text: "**Research Paralelo (Just-in-Time):** Aceptar el deadline pero correr tests de usabilidad rápidos (24-48h) con prototipos en papel/figma mientras los devs preparan el entorno. Si encuentras un blocker grave, tienes datos para frenar antes del desastre. Inyectas validación sin detener el tren, aunque no obtienes insights profundos y requieres ejecutar research comprimido.", score: 5, type: "Lead (Agile Validation)" },
      { id: 'B', text: "**Obedecer y Documentar:** 'Lanzamos bajo su responsabilidad'. Te proteges con un correo formal pero dejas que el producto falle. Evitas conflicto político con CEO y cumples la orden, pero abdicas la responsabilidad profesional de validar y conviertes el diseño en ejecución ciega de órdenes.", score: 1, type: "CYA (Cover Your Ass)" },
      { id: 'C', text: "**Bloquear por Proceso:** 'Sin research no hay diseño'. Te niegas a avanzar sin validación completa. Defiendes el proceso de diseño con integridad metodológica, pero te conviertes en departamento del 'No', pierdes credibilidad con liderazgo y te excluyes de decisiones estratégicas futuras.", score: 1, type: "Dogmático" }
    ],
    explanation: "En startups, velocidad es feature. **Bloquear por Proceso** te excluye de la mesa de decisiones. Obedecer ciegamente es abdicar responsabilidad. **Research Paralelo** aplica **Lean UX**: validación rápida sin detener delivery. Compra velocidad política + inyecta data para mitigar riesgos catastróficos. $80K invertidos no justifican $0 de validación."
  },
  {
    id: 'user_research_conflicting_data_survey_vs_usability',
    category: "User Research",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    scenario: "Encuesta (N=1000): 70% de usuarios QUIERE 'Dashboard Personalizable'. Tests de usabilidad (N=10): nadie usa la personalización y todos se confunden con la complejidad. Ingeniería estima 3 sprints para construirlo.",
    question: "¿A qué data le crees?",
    options: [
      { id: 'A', text: "**Creer a la Encuesta (Lo que dicen):** 1000 personas son estadística, 10 son anécdota. Construyes el dashboard personalizable. Validas la decisión con muestra grande y cumples con lo que usuarios 'piden', pero inviertes 3 sprints construyendo feature que nadie usará porque las encuestas miden aspiración idealizada, no comportamiento real.", score: 1, type: "Ingenuo (Self-reported bias)" },
      { id: 'B', text: "**Creer a la Usabilidad (Lo que hacen):** Los usuarios son malos prediciendo su comportamiento futuro. Si en la práctica no lo usan y confunde, no se construye. Priorizas evidencia conductual sobre aspiracional y evitas desperdiciar 3 sprints, aunque descartas solicitud de 70% de usuarios basándote en muestra pequeña (N=10).", score: 5, type: "Lead (Behavioral > Attitudinal)" },
      { id: 'C', text: "**Hacer A/B Test:** Construir una versión barata (MVP) para ver si lo usan en producción. Resuelves el conflicto de data con experimento real y obtienes evidencia definitiva, pero inviertes recursos en construir algo que la usabilidad ya demostró genera fricción y retrasas otras features del roadmap.", score: 3, type: "Data-driven costoso" }
    ],
    explanation: "Regla de oro en UX: Lo que la gente HACE (**Behavioral**) > lo que la gente DICE (**Attitudinal**). Encuestas miden aspiración idealizada ('Quiero ser organizado'), usabilidad mide realidad operativa ('No tengo tiempo de configurar'). **Creer a la Usabilidad** evita **Feature Graveyards**: features que todos piden, nadie usa. N=10 bien observado > N=1000 mal preguntado."
  },
];
