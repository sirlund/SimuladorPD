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
 * Research, Ética & Colaboración
 */
export const research_questions = [
  // --- BLOQUE 4: RESEARCH, USUARIOS & ÉTICA ---
  {
    id: 'research_ignore_darkmode',
    category: "User Research vs Negocio",
    icon: <Users className="w-6 h-6 text-pink-500" />,
    scenario: "Hiciste un research cuantitativo (N=500) que dice claramente que a tus usuarios actuales NO les interesa el 'Dark Mode' (solo 12% lo usaría). Sin embargo, el CEO insiste en lanzarlo porque 'la competencia lo tiene' y Ventas reporta que 3 deals Enterprise se frenaron por su ausencia. El feature tomaría 1.5 sprints.",
    question: "¿Qué haces con la evidencia?",
    options: [
      { id: 'A', text: "Propones Validación Adicional: Diseñar un test A/B con los prospectos Enterprise específicos que rechazaron el producto para medir si Dark Mode realmente cierra esos deals o es una objeción superficial.", score: 3, type: "Data-Driven (Demora decisión)" },
      { id: 'B', text: "Aceptas diseñarlo de inmediato. Entiendes que la 'Paridad de Features' es una estrategia de ventas válida (Hygiene Factor) aunque tu base actual no lo pida. Los usuarios Enterprise tienen necesidades diferentes.", score: 5, type: "Lead (Visión de Mercado)" },
      { id: 'C', text: "Defiendes la Evidencia: Te niegas a diseñarlo citando el research como defensa. Si solo el 12% lo usaría, invertir 1.5 sprints no tiene ROI. Ventas debe aprender a vender el valor real del producto.", score: 1, type: "Mártir del Usuario" }
    ],
    explanation: "El 'User Centricity' dogmático puede cegarte a la dinámica de ventas B2B. Los usuarios actuales (B2C/SMB) y los prospectos Enterprise tienen contextos diferentes. Si Dark Mode desbloquea 3 deals grandes, es inversión estratégica (B). La A demora decisión crítica de negocio."
  },
  {
    id: 'accessibility_legal_threat_action',
    category: "Accesibilidad & Riesgo Legal",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Es martes por la mañana. Llega una carta de abogados de un cliente Enterprise importante (20% de tu ARR) amenazando con lawsuit porque el dashboard no cumple WCAG 2.1 AA (problemas de contraste, navegación por teclado rota, screen readers incompatibles). Legal dice que el riesgo es real - este tipo de demandas suelen prosperar. El equipo está al 100% de capacidad finalizando features comprometidas para fin de trimestre (faltan 3 semanas). Ingeniería estima que arreglar los issues críticos de accesibilidad tomaría 1 sprint completo (2 semanas).",
    question: "¿Cómo respondes a la amenaza legal sabiendo que tienes compromisos activos?",
    options: [
      { id: 'A', text: "Tiger Team: Pausas el roadmap y asignas 3 personas (2 devs + tú) para arreglar issues P0 en 1 sprint. Comunicas el retraso por riesgo legal.", score: 5, type: "Lead (Gestión de riesgo existencial)" },
      { id: 'B', text: "Consultores Externos: Contratas agencia especializada ($20K) para arreglar issues en paralelo. Mantienes velocity del team pero pierdes know-how interno.", score: 3, type: "Solve con $ (Trade-off de conocimiento)" },
      { id: 'C', text: "Overtime Intensivo: Intentas meter el trabajo en 'bordes' del sprint (noches/fines de semana) para cumplir con todo. Riesgo alto de burnout y bugs.", score: 1, type: "Wishful thinking (Falla en ambos)" }
    ],
    explanation: "Una amenaza legal de cliente de 20% ARR es riesgo existencial que puede costar más que features del Q completo. La C es ilusoria: intentar hacer ambas cosas mal garantiza fallar en las dos (burnout + bugs + lawsuit). La B es válida si tienes budget, pero sacrifica aprendizaje interno. Un Lead re-prioriza radicalmente ante riesgos existenciales, aunque duela comunicar retrasos."
  },
  {
    id: 'dark_pattern_retention_ethics',
    category: "Ética de Diseño",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "La retención cayó. Tu PM propone ocultar el botón de cancelar bajo 3 sub-menús y agregar un teléfono obligatorio para 'reducir el churn artificialmente'. Argumenta que 'todos los competidores lo hacen'.",
    question: "¿Qué respondes al VP de Growth sabiendo que CFO/CEO esperan $420K de retention y designer senior amenaza con no implementar?",
    options: [
      { id: 'A', text: "Obediencia Táctica: Implementas el patrón oscuro temporalmente para salvar el Q, pero documentas tu objeción y agendas un refactor para quitarlo post-deadline.", score: 1, type: "Cómplice" },
      { id: 'B', text: "Fricción Ética: 'Hagámoslo fácil de cancelar, pero preguntemos POR QUÉ se van'. Usar el offboarding para aprender y retener con ofertas, no con trampas.", score: 5, type: "Lead (Retención Ética)" },
      { id: 'C', text: "Escalación Ética: Te niegas rotundamente y reportas la solicitud a HR como una violación de los valores de la empresa. Priorizas la integridad y los principios corporativos sobre las presiones del negocio.", score: 1, type: "Escalación Ética" }
    ],
    explanation: "La retención ética ofrece valor real (descuentos, pausas) que motiva quedarse sin ocultar la opción de cancelar. La friction genera retención artificial que daña la confianza a largo plazo. Con Series B en juego, el riesgo reputacional de dark patterns puede costar más que el revenue temporal que generan."
  },
  {
    id: 'guerrilla_testing_speed',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Jueves 4:30 PM. Deadline de deploy mañana para demo de renovación ($400K). Dudas si el CTA del checkout debe decir 'Confirmar Compra' o 'Proceder al Pago'. En testing interno, 2 de 6 usuarios dudaron. El botón es crítico (78% conversión). No hay tiempo para research formal ni A/B testing. El Tech Lead exige el copy final en 90 minutos. Tu UX Writer está fuera. Benchmarking es inconcluso (Stripe, Salesforce y competidores usan términos distintos).",
    question: "¿Cómo decides el copy en 90 minutos con $400K en juego?",
    options: [
      { id: 'A', text: "Benchmarking Contextual: Auditas rápido a 3 competidores B2B directos (no e-commerce). Si hay consenso en flujos de 'pago de facturas', lo adoptas y justificas como 'estándar de industria'. Asumes que ellos validaron.", score: 3, type: "Best practice contextual (Asume que competidores testearon)" },
      { id: 'B', text: "Criterio Experto: Decides basado en heurísticas y consistencia interna. 'Confirmar Compra' es más claro que 'Proceder'. Documentas tu racional en Notion. Confías en tu experiencia de 10 años ante la falta de data.", score: 3, type: "Expertise documentada (Autoridad profesional)" },
      { id: 'C', text: "Guerrilla Test Interno (Proxies): Envías screenshots A/B por Slack a 10 colegas de Sales y CS (que conocen el lenguaje del cliente). Pregunta: '¿Qué esperas que pase al hacer click?'. Decides en 40 min con data real de proxies cualificados.", score: 5, type: "Lead (Data-informed rápido con contexto)" }
    ],
    explanation: "Con 90 minutos y $400K en juego, 'algo de data > cero data'. La A asume que competidores testearon (arriesgado). La B depende de tu sesgo individual. La C es pragmática: 10 proxies cualificados en 40 minutos dan señales reales de TU contexto. Guerrilla testing bien diseñado >> intuición solitaria."
  },

  // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
  {
    id: 'dev_handoff_war_library',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Cliente Enterprise exige 'Drag & Drop' para cerrar un deal de $280K. Tech Lead dice que el stack legacy requiere 3 sprints para implementarlo. Tienes 1 sprint. CTO prohíbe refactors complejos hasta el próximo Q.",
    question: "¿Cómo desbloqueas la situación con cliente esperando, tech debt limitante, y equipo frustrado?",
    options: [
      { id: 'A', text: "Pair Programming Heroico: Te sientas con el dev a intentar hackear una solución en el stack viejo. Arriesgas tu tiempo y rol para salvar el sprint.", score: 3, type: "Heroico técnico (Costo personal alto)" },
      { id: 'B', text: "Escalación: Exiges al CTO que levante el 'migration freeze' dado el valor del deal. Creas conflicto con Engineering para defender la UX.", score: 1, type: "Confrontación (Sabotea colaboración)" },
      { id: 'C', text: "Negociación en Fases: Implementas una versión simplificada (botón tradicional) ahora para cumplir fecha, con compromiso firmado de hacer el Drag & Drop en Q+1.", score: 5, type: "Lead (Pragmatismo con accountability)" }
    ],
    explanation: "Nadie tiene la opción perfecta. El segundo enfoque sabotea la relación con Engineering. El primer enfoque te convierte en un 'hero developer' no escalable. La C es pragmatismo ejecutivo: entrega valor hoy (V1 funcional) mientras asegura la evolución mañana (V2 documentado)."
  },
  {
    id: 'copy_late_change_legal',
    category: "Content Strategy",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Es miércoles por la tarde. El lanzamiento del nuevo flujo de onboarding está programado para este viernes al mediodía (demo con inversores clave el lunes). El equipo Legal acaba de aprobar los textos pero con cambios obligatorios: ahora cada pantalla tiene un disclaimer de 4-5 líneas (vs el placeholder de 1 línea que habías diseñado) para cumplir regulaciones GDPR + requisitos de consentimiento. El texto completo rompe todo el diseño móvil. Ingeniería dice que rediseñar las 7 pantallas tomaría 1.5-2 días mínimo.",
    question: "¿Cómo resuelves el conflicto sin demorar el lanzamiento ni incumplir Legal?",
    options: [
      { id: 'A', text: "Progressive Disclosure Patterns: Implementas soluciones de UI que acomodan el texto legal sin rediseño masivo: disclaimers colapsados con 'Leer más', tooltips con iconos de info, o modals al hacer click. Mantienes el flujo visual limpio y cumples la norma.", score: 5, type: "Lead (Problem solving de patterns)" },
      { id: 'B', text: "Rediseño de Emergencia: El equipo trabaja hasta tarde Miércoles y Jueves para rediseñar las 7 pantallas acomodando el texto completo en el flujo, ajustando spacing y jerarquía. Llegan exhaustos al viernes pero con diseño que cumple Legal sin trucos.", score: 3, type: "Fuerza bruta (Burnout del equipo)" },
      { id: 'C', text: "Negociación de Copy con Legal: Agendas reunión urgente con Legal para negociar micro-copy más conciso (de 4-5 líneas a 2 líneas + link a términos completos). Argumentas que el texto largo afecta conversión y nadie lo lee. Arriesgas que Legal no ceda y pierdas 1 día.", score: 1, type: "Negociación (Alto riesgo de tiempo)" }
    ],
    explanation: "No puedes ganarle a Legal en temas de compliance (C suele fallar y quema tiempo). La B logra el resultado pero a costa de burnout de equipo a 48h de demo crítico. Un Lead conoce patterns de UI (progressive disclosure, collapsible content, modals) que resuelven el problema técnicamente sin rediseño masivo ni confrontación."
  },
  {
    id: 'design_committee_control',
    category: "Gestión de Stakeholders",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    scenario: "En una reunión de Design Review con 8 stakeholders (CEO, CFO, Head of Sales, Marketing, Product, 3 VPs), la discusión sobre el rediseño del dashboard se descarrila completamente. Durante 20 minutos están debatiendo si el botón principal debe ser azul o verde basados solo en preferencias personales. El CEO dice 'no me gusta el verde, mi esposa tampoco'. El tiempo de reunión se está acabando y aún quedan 4 pantallas críticas por revisar.",
    question: "¿Cómo recuperas el control de la reunión sin al ienar a los executives?",
    options: [
      { id: 'A', text: "Test A/B Rápido: Propones hacer un A/B test de 3 días la próxima semana con usuarios reales para que los datos decidan entre azul y verde, y así satisfacer a todos los stakeholders con evidencia objetiva.", score: 3, type: "Data-driven (Demora decisión)" },
      { id: 'B', text: "Redirigir a Objetivos: Detienes la discusión recordando el objetivo de negocio ('Este botón debe aumentar conversión 15%'). Preguntas: '¿Azul o verde impacta más la acción del usuario según nuestro brand research?' Anclas la decisión en criterios medibles, no en gustos.", score: 5, type: "Lead (Facilitador de criterio)" },
      { id: 'C', text: "Autoridad de Diseño: Intervienes diplomaticamente diciendo 'Aprecio el feedback, pero las decisiones de color están respaldadas por nuestro sistema de accesibilidad y brand guidelines. Confiemos en el criterio del equipo de diseño para esto y enfoquémonos en los flujos críticos'.", score: 1, type: "Experto (Puede generar resentimiento)" }
    ],
    explanation: "'Me gusta' es irrelevante sin contexto de negocio. La opción C puede sonar arrogante ante executives. La A demora una decisión simple. Un Lead redirige la energía de opiniones subjetivas a criterios objetivos que todos los stakeholders puedan evaluar (B), sin descartar sus preocupaciones."
  },
  {
    id: 'tool_debate_figma_penpot',
    category: "Design Ops & Herramientas",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Dos diseñadores senior proponen formalmente migrar de Figma a Penpot (open source) argumentando: a) Ahorro de $12K anuales en licencias, b) Principios open-source, c) Evitar vendor lock-in. Sin embargo, tienes un Design System maduro con 250+ componentes en Figma y 3 integraciones críticas (Storybook, Zeplin, Dev Mode). El equipo de ingeniería ya está familiarizado con el workflow actual. La migración requeriría reconstruir todo desde cero, estimado en 6-8 semanas de trabajo.",
    question: "¿Cómo evalúas la decisión de cambiar herramientas?",
    options: [
      { id: 'A', text: "ROI Analysis: Calculas las horas muertas de migración (320-400h) + reconstrucción del DS + re-training del equipo vs el ahorro de licencias. Si el costo total supera $50-60K y paraliza el roadmap 2 meses, no es viable hoy. Propones reevaluar en 12 meses.", score: 5, type: "Lead (Decisión basada en números)" },
      { id: 'B', text: "Pilot Program: Propones un experimento de 1 mes migrando solo 1 proyecto no crítico a  Penpot para validar la hipótesis sin apostarlo todo. Si funciona bien, escalan gradualmente.", score: 3, type: "Incremental (Consume recursos sin decisión)" },
      { id: 'C', text: "Mantener Status Quo: Explicas que Figma es el estándar de la industria, tiene mejor UX, y cambiar herramientas en este momento distraería al equipo de entregar valor. El equipo debe enfocarse en features, no en migraciones.", score: 1, type: "Mantener Estándar" }
    ],
    explanation: "Las herramientas son inversión, no religión. La C descarta argumentos legítimos de costo y vendor lock-in. La B consume recursos en experimentos cuando los números ya pueden responder. Un Lead evalúa switching cost realísticamente: migración + retraining + pérdida de momentum. Si ahorras $12K pero pierdes $60K en productividad, es mala decisión."
  },

  // --- BLOQUE 6: PRODUCTIVIDAD & REMOTO ---
  {
    id: 'remote_sync_handoff',
    category: "Trabajo Remoto",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    scenario: "Tu equipo de ingeniería está en Europa (6 horas adelante). El Tech Lead reporta que pierden el 40% de su mañana tratando de adivinar qué pantallas están listas para dev. La velocidad del sprint cayó 15% y el CTO te culpa: 'Tu equipo diseña mientras el mío duerme, y cuando despiertan, no hay specs claras'. Amenaza con imponer 'Daily Sync' obligatorio a las 6 AM tu hora.",
    question: "¿Cómo organizas el archivo para colaboración asíncrona y evitar madrugar?",
    options: [
      { id: 'A', text: "Sync Meeting de Compromiso: Aceptas la reunión de 6 AM dos veces por semana. Es brutal para tu balance, pero calma al CTO y asegura claridad inmediata.", score: 1, type: "Mártir (Insostenible)" },
      { id: 'B', text: "Protocolo Async: Implementas 'Ready for Dev' con Loom obligatorio. Si no hay video explicando el ticket, no pasa a desarrollo. Elimina ambigüedad sin reuniones.", score: 5, type: "Lead (Async Ops)" },
      { id: 'C', text: "Limpieza Diaria: Dedicas tu última hora a limpiar archivos y dejar notas. Es manual y depende de tu disciplina diaria, pero evita cambiar el proceso de los devs.", score: 3, type: "Parche (No escala)" }
    ],
    explanation: "El trabajo asíncrono requiere más estructura, no más reuniones. El enfoque correcto quema al equipo de diseño. El segundo enfoque sistematiza la claridad: Loom + Figma Sections elimina la ambigüedad sin requerir coincidencia horaria."
  },
  {
    id: 'meeting_overload_protection',
    category: "Productividad",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Haces una retrospectiva anónima de Q y el 80% del equipo reporta que 'no tienen tiempo para diseñar' porque pasan 5-6 horas diarias en reuniones (Dailies 30min, Planning 2h, Syncs con Product 1h, Syncs con Engineering 1h, Design Reviews 1.5h, All-Hands 30min). El output de diseño ha caído 40% vs el Q anterior. Los PMs argumentan que las reuniones de sync son críticas para 'alignment'. Ingeniería dice que sin los dailies pierden contexto.",
    question: "¿Qué medida estructural implementas para recuperar tiempo de trabajo profundo?",
    options: [
      { id: 'A', text: "No-Meeting Blocks Institucionales: Decretas Martes y Jueves como 'Focus Days' absolutos (no meetings de 9 AM a 5 PM a nivel de  toda la empresa, enforcement en calendarios). Las reuniones críticas se comprimen en Lunes/Miércoles/Viernes. Requiere aprobación de CPO y CTO.", score: 5, type: "Lead (Cambio sistémico, costo político)" },
      { id: 'B', text: "Optimización de Reuniones: Trabajas con cada dueño de reunión para reducir duración (Dailies a 15min, Planning a 90min) y consolidas syncs duplicados. Empoderas al equipo a agendar 'Office Hours' en lugar de meetings ad-hoc.", score: 3, type: "Incremental (No resuelve volumen)" },
      { id: 'C', text: "Async-First Protocol: Implementas que toda información debe compartirse por escrito primero (Notion, Slack threads), y solo si hay bloqueos o decisiones complejas se escala a meeting sincrónico. Reduces reuniones 30-40%.", score: 3, type: "Cultural shift (Requiere disciplina)" }
    ],
    explanation: "El trabajo creativo requiere bloques ininterrumpidos de 3-4 horas (Deep Work). La B optimiza pero no elimina el problema de sobre-comunicación sincrónica. La C funciona pero requiere cambio cultural difícil de enforcement. Un Lead crea estructura institucional (No-Meeting Days) que protege tiempo por default, aunque requiere capital político con líderes de otras áreas."
  },
  {
    id: 'file_chaos_structure',
    category: "Design Ops",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Un desarrollador implementó la versión incorrecta de la Home porque tomó el archivo 'Final_V2' en lugar de 'Final_Real_V3'. Esto costó 1 semana de rework y retrasó el lanzamiento. El VP de Engineering está furioso: 'Si Diseño no puede organizar sus archivos, nosotros no podemos confiar en sus entregas'.",
    question: "¿Qué solución implementas el día 1 para recuperar confianza?",
    options: [
      { id: 'A', text: "Limpieza Heroica: Te quedas el fin de semana organizando todo el Drive. El lunes anuncias 'todo limpio'. Resuelve el síntoma hoy, pero el caos volverá mañana.", score: 1, type: "Mártir (No escala)" },
      { id: 'B', text: "Gobernanza Bloqueante: Creas un archivo 'Master' de solo lectura para Devs. Solo los Leads pueden mover diseños aprobados ahí. Estableces una 'Fuente de la Verdad' sistémica.", score: 5, type: "Lead (Gobernanza Sistémica)" },
      { id: 'C', text: "Workshop de Naming: Reúnes al equipo para acordar convenciones de nombres ('Final_V3'). Estableces estándares de organización basados en la disciplina del equipo.", score: 3, type: "Estándares de Equipo" }
    ],
    explanation: "El orden no ocurre por buena voluntad, ocurre por diseño del sistema. La gobernanza (quién puede editar qué y dónde viven los entregables) elimina el error humano. La segunda opción crea un firewall entre el caos creativo y la producción."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'gdpr_cookie_consent_ux',
    category: "Compliance & UX",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige un banner de cookies que bloquee toda la pantalla hasta que el usuario acepte. Sabes que esto aumenta el bounce rate un 40%.",
    question: "¿Cómo diseñas el consentimiento sin destruir la conversión?",
    options: [
      { id: 'A', text: "Compliance Malicioso: Diseñar el banner más molesto posible para que Legal vea la caída de métricas y reconsidere. Usas el fracaso como argumento.", score: 1, type: "Sabotaje" },
      { id: 'B', text: "Diseño Ético y Legal: Implementar el bloqueo pero con copy claro y opciones granulares fáciles. Aceptar el bounce rate como costo de hacer negocios éticos en Europa.", score: 5, type: "Lead (Ética > Conversión)" },
      { id: 'C', text: "Optimización de Conversión: Diseñar el banner con jerarquía visual clara: botón principal de aceptación destacado y opciones secundarias accesibles. Maximiza la tasa de consentimiento dentro del cumplimiento legal.", score: 1, type: "Optimización de Conversión" }
    ],
    explanation: "El compliance no es opcional. Los Dark Patterns son riesgosos legalmente a largo plazo. La segunda opción acepta la realidad regulatoria y optimiza dentro de la ética."
  },
  {
    id: 'addictive_design_notifications',
    category: "Ética de Diseño",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "El PM te pide diseñar un sistema de notificaciones 'tipo casino' (sonidos, luces, recompensas variables) para aumentar el DAU (Daily Active Users) en una app para adolescentes. Sabes que esto genera adicción.",
    question: "¿Cuál es tu postura ética?",
    options: [
      { id: 'A', text: "Negativa de Conciencia: 'No diseño mecánicas adictivas para menores'. Te niegas rotundamente y escalas el tema a HR o Ethics Committee si existe.", score: 5, type: "Lead (Guardián Ético)" },
      { id: 'B', text: "Diseño 'Lite': Implementas las notificaciones pero sin los sonidos más agresivos. Intentas suavizar el impacto negativo sin confrontar al PM.", score: 1, type: "Cómplice Pasivo" },
      { id: 'C', text: "Cumplir Objetivos: Diseñas lo que pide el negocio. 'Si no lo hago yo, lo hará otro'. Tu trabajo es mover métricas, no ser policía moral.", score: -1, type: "Mercenario" }
    ],
    explanation: "Hay líneas rojas. Diseñar adicción para menores es una de ellas. Un Lead debe tener una brújula moral firme, incluso si cuesta capital político."
  },
  {
    id: 'data_collection_transparency',
    category: "Privacidad & Trust",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Marketing quiere pedir número de teléfono y fecha de nacimiento en el registro 'para futuras campañas'. Esto no es necesario para el producto y aumenta la fricción.",
    question: "¿Cómo proteges la privacidad del usuario y la conversión?",
    options: [
      { id: 'A', text: "Progressive Profiling: Pedir esos datos solo cuando sean necesarios para una feature específica (ej: regalo de cumpleaños), no en el registro.", score: 5, type: "Lead (Data Minimization)" },
      { id: 'B', text: "Añadir Campos Opcionales: Ponerlos en el registro pero marcados como opcionales. Aumenta la carga cognitiva visual pero satisface a Marketing.", score: 3, type: "Compromiso (Fricción visual)" },
      { id: 'C', text: "Bloquear el Request: 'No pedimos datos que no usamos'. Te niegas a agregar los campos por principio de minimización de datos.", score: 3, type: "Protector (Correcto pero rígido)" }
    ],
    explanation: "Pedir datos 'por si acaso' es mala práctica. Progressive Profiling (A) obtiene el dato cuando el usuario tiene un incentivo real para darlo, mejorando confianza y conversión."
  },
  {
    id: 'etica_gambling_mechanics_gamification',
    category: "Ética de Diseño",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tu app de finanzas personales quiere agregar 'Cajas Misteriosas' con premios en efectivo por ahorrar. El equipo legal dice que es legal, pero tú sientes que introduce mecánicas de juego (gambling) en una herramienta de salud financiera.",
    question: "¿Cómo abordas el conflicto ético?",
    options: [
      { id: 'A', text: "Rediseño Conductual: Proponer 'Streaks' o 'Badges' de logro en lugar de premios aleatorios. Fomentar el hábito por constancia, no por azar.", score: 5, type: "Lead (Gamificación Positiva)" },
      { id: 'B', text: "Aceptar con Warning: Diseñar las cajas pero agregar un disclaimer prominente de 'Juegue con responsabilidad'. Implementas la feature mientras cumples con responsabilidad legal y comunicativa.", score: 1, type: "Legalista" },
      { id: 'C', text: "Implementar tal cual: Si es legal y sube la retención, se hace. La ética es subjetiva y el negocio necesita crecer.", score: 1, type: "Amoral" }
    ],
    explanation: "Introducir azar (gambling) en finanzas explota la vulnerabilidad. La gamificación basada en esfuerzo (Streaks) construye hábitos saludables."
  },
  {
    id: 'etica_ai_generated_fake_testimonials',
    category: "Ética de Diseño",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Marketing generó 50 testimonios de usuarios usando ChatGPT para 'llenar' la landing page de lanzamiento porque aún no tienen clientes reales. Te piden diseñarlos para que parezcan reales (con fotos de stock).",
    question: "¿Qué haces ante una solicitud deshonesta?",
    options: [
      { id: 'A', text: "Negativa Absoluta: 'No pondré mi nombre en un diseño que engaña a los usuarios'. Te niegas a diseñar componentes para contenido falso.", score: 5, type: "Lead (Integridad)" },
      { id: 'B', text: "Diseño Genérico: Usar ilustraciones abstractas en lugar de fotos para mantener un estilo visual consistente. El diseño no implica autenticidad del contenido, solo presenta la información proporcionada.", score: 1, type: "Diseño Genérico" },
      { id: 'C', text: "Placeholder Text: Diseñar el componente pero poner 'Lorem Ipsum' o 'Testimonio Real Aquí'. Dejas que Marketing pegue el texto falso después, lavándote las manos.", score: 3, type: "Pasivo-Agresivo" }
    ],
    explanation: "La confianza es el activo más valioso. Falsificar testimonios es fraude. Un Lead protege la integridad de la marca negándose a participar en engaños."
  },
  {
    id: 'validacion_prototype_vs_pixel_perfect',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tienes 2 días para validar una idea compleja. Tu equipo quiere hacer un prototipo en alta fidelidad 'para que se vea profesional'. Tú sabes que el alta fidelidad distrae a los usuarios con detalles visuales (colores, sombras) en lugar del concepto.",
    question: "¿Cómo diriges la estrategia de prototipado?",
    options: [
      { id: 'A', text: "Baja Fidelidad (Lo-Fi): Forzar el uso de wireframes en blanco y negro (Balsamiq o Figma Lo-Fi). Enfocar el test exclusivamente en flujo y propuesta de valor.", score: 5, type: "Lead (Focus on Value)" },
      { id: 'B', text: "Alta Fidelidad Rápida: Usar el Design System para armar algo 'bonito' rápido. Arriesgas que el feedback sea sobre el color del botón y no la utilidad.", score: 1, type: "Riesgo de Feedback Superficial" },
      { id: 'C', text: "Híbrido: Mezclar pantallas reales con wireframes para mostrar diferentes niveles de fidelidad. Permite evaluar tanto el concepto como aspectos visuales en un solo test.", score: 1, type: "Prototipo Híbrido" }
    ],
    explanation: "En validación temprana, el 'polish' es enemigo del feedback honesto. Lo-Fi (A) obliga a evaluar la idea, no la estética."
  },
  {
    id: 'validacion_research_synthesis_paralysis',
    category: "Validación Ágil",
    icon: <Search className="w-6 h-6 text-blue-500" />,
    scenario: "Hicieron 20 entrevistas de usuario. El equipo de Research quiere tomarse 2 semanas para transcribir, codificar y sintetizar un reporte perfecto de 50 páginas. El sprint de desarrollo empieza en 3 días.",
    question: "¿Cómo obtienes insights accionables a tiempo?",
    options: [
      { id: 'A', text: "Debrief Diario: Implementar sesiones de 30 min post-entrevistas donde el equipo comparte 'Top 3 hallazgos' inmediatamente. Construir el backlog con esto, el reporte formal viene después.", score: 5, type: "Lead (Agile Research)" },
      { id: 'B', text: "Esperar el Reporte: Retrasar el sprint 2 semanas. 'Sin research completo no movemos un pixel'. Priorizas el rigor académico sobre el time-to-market.", score: 1, type: "Académico (Lento)" },
      { id: 'C', text: "Intui ción Informada: Priorizas velocity sobre exhaustividad. Usas los insights que ya capturaste de las sesiones presenciadas más tu experiencia de 10+ años para decidir rápido.", score: 1, type: "Experience-based shortcut" }
    ],
    explanation: "El research que llega tarde no sirve. El Debrief Diario inyecta conocimiento fresco al equipo de producto sin esperar la 'tesis doctoral'."
  },
  {
    id: 'legal_algorithmic_bias_gender',
    category: "Edge Cases Legales/Éticos",
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    scenario: "Estás diseñando un algoritmo de aprobación de créditos. Data Science te pide incluir 'Código Postal' como variable. Sabes que históricamente esto correlaciona con raza y nivel socioeconómico, introduciendo sesgo (redlining). Legal dice que 'técnicamente no es raza, así que es legal'.",
    question: "¿Qué haces ante un sesgo algorítmico legal pero no ético?",
    options: [
      { id: 'A', text: "Challenge Ético: Presentar evidencia de 'Proxy Bias' a los stakeholders. Proponer excluir variables geográficas para garantizar equidad real, aunque baje un poco la precisión del modelo.", score: 5, type: "Lead (Algorithmic Justice)" },
      { id: 'B', text: "Aceptar la definición legal: Si Legal lo aprueba, tu responsabilidad termina ahí. El objetivo es maximizar la predicción del modelo.", score: 1, type: "Cómplice" },
      { id: 'C', text: "Transparencia de Proceso: Agregar un texto que diga 'Nuestros créditos se basan en data objetiva'. Comunicar el proceso de evaluación de manera clara y transparente para los usuarios.", score: -1, type: "Transparencia de Proceso" }
    ],
    explanation: "El diseño no es solo UI, es el diseño del sistema. Permitir variables proxy de discriminación perpetúa injusticia sistémica. Un Lead levanta la bandera ética."
  },
  {
    id: 'legal_accessibility_wcag_lawsuit',
    category: "Edge Cases Legales/Éticos",
    icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
    scenario: "Un competidor fue demandado por no ser accesible. Tu CEO entra en pánico y pide 'Hacer la app accesible para mañana'. Es imposible, requiere auditoría y refactor de meses.",
    question: "¿Cómo gestionas el pánico ejecutivo con realidad técnica?",
    options: [
      { id: 'A', text: "Solución Rápida de Terceros: Instalar un plugin de accesibilidad que promete cumplimiento inmediato con una línea de código. Permite mostrar progreso al CEO hoy mientras se planifica la remediación estructural.", score: 1, type: "Solución Rápida" },
      { id: 'B', text: "Roadmap de Remediación: Auditar las 5 pantallas críticas hoy, arreglarlas en 1 sprint y presentar un plan de 6 meses para el resto. Mostrar progreso real reduce el riesgo legal.", score: 5, type: "Lead (Progreso Sostenible)" },
      { id: 'C', text: "Ignorar el pánico: 'No nos demandarán a nosotros'. Apostar a la suerte. Irresponsable.", score: -1, type: "Negligente" }
    ],
    explanation: "No existe la 'accesibilidad instantánea'. Los overlays (A) son demandados frecuentemente. La única defensa real es un plan de remediación activo y documentado (B)."
  },
  {
    id: 'legal_data_sovereignty_gdpr_us_servers',
    category: "Edge Cases Legales/Éticos",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "Tu empresa (basada en LATAM) quiere expandirse a Europa. Tu arquitectura actual guarda todos los datos en servidores de AWS en Virginia (USA). GDPR prohíbe transferir datos de ciudadanos UE a USA sin protecciones específicas. El CTO dice que migrar servidores es 'muy caro'.",
    question: "¿Cuál es tu rol desde Producto/Diseño en este problema de infraestructura?",
    options: [
      { id: 'A', text: "Alertar el Blocker: Marcar la expansión a Europa como 'Bloqueada por Compliance' en el roadmap. No diseñar ni una pantalla para Europa hasta que Infra resuelva el almacenamiento.", score: 5, type: "Lead (Strategic Blocker)" },
      { id: 'B', text: "Diseñar Igual: Asumes que compliance es responsabilidad de Legal/Infra. Continúas diseñando la UI globalmente agnóstica mientras ellos resuel ven data residency.", score: 1, type: "Silo approach" },
      { id: 'C', text: "Pedir consentimiento: Agregar un checkbox 'Acepto que mis datos vayan a USA'. Legalmente dudoso que esto sea suficiente para GDPR hoy en día.", score: 1, type: "Parche Legal Débil" }
    ],
    explanation: "Diseñar para un mercado donde no puedes operar legalmente es desperdicio. Un Lead identifica blockers estratégicos antes de invertir horas de diseño."
  },
  {
    id: 'legal_minor_protection_addictive_mechanics',
    category: "Edge Cases Legales/Éticos",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Descubres que el 15% de tus usuarios son menores de 13 años que mintieron en su fecha de nacimiento. Tu app tiene chat abierto y compras in-app. COPPA y regulaciones locales imponen multas masivas por recolectar datos de menores sin consentimiento parental.",
    question: "¿Qué acción inmediata tomas?",
    options: [
      { id: 'A', text: "Purga de Cuentas: Identificar patrones de comportamiento infantil y cerrar esas cuentas preventivamente. Perder usuarios para proteger la empresa.", score: 3, type: "Protección Agresiva" },
      { id: 'B', text: "Age Gate Robusto: Implementar verificación de edad real (ID o tarjeta de crédito) para features riesgosas (chat/compras). Fricción alta pero necesaria.", score: 5, type: "Lead (Safety First)" },
      { id: 'C', text: "Ignorancia Plausible: 'Si dijeron que tenían 18, no es nuestro problema'. Mantener los ojos cerrados ante la evidencia.", score: -1, type: "Negligencia Criminal" }
    ],
    explanation: "La ignorancia no es defensa legal con menores. Implementar barreras reales (Age Gating) para features peligrosas es la única vía responsable."
  },
  {
    id: 'user_research_budget_cut_qual_vs_quant',
    category: "User Research",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "El CFO cortó el presupuesto de herramientas de Research (adiós UserTesting, adiós Dovetail). Solo te queda Google Analytics (gratis) y Google Meet. El PM dice: 'Bueno, ahora seremos 100% Data-Driven con Analytics, ya no necesitamos hablar con usuarios'.",
    question: "¿Cómo defiendes el research cualitativo sin presupuesto?",
    options: [
      { id: 'A', text: "Guerrilla Research: Reclutar usuarios gratis (redes sociales, customer support tickets) y usar herramientas gratuitas. Demostrar que el 'Por qué' (Cuali) explica el 'Qué' (Cuanti).", score: 5, type: "Lead (Resourceful)" },
      { id: 'B', text: "Aceptar la derrota: Enfocarse solo en funnels y A/B testing. Si la empresa no paga herramientas, no valora la empatía.", score: 1, type: "Resignado" },
      { id: 'C', text: "Pagar de tu bolsillo: Pagar una suscripción personal a herramientas básicas para mantener la calidad. Insostenible y sienta mal precedente.", score: 1, type: "Mártir" }
    ],
    explanation: "El research es una mentalidad, no una herramienta. Analytics te dice QUÉ pasa (el drop-off), pero solo hablar con humanos te dice POR QUÉ. Guerrilla Research mantiene vivo el pulso del usuario a costo cero."
  },
  {
    id: 'user_research_ceo_demands_speed_vs_quality',
    category: "User Research",
    icon: <Timer className="w-6 h-6 text-red-500" />,
    scenario: "El CEO quiere lanzar una feature nueva en 2 semanas. Te pide 'saltarte el research esta vez' porque 'yo soy el usuario target y sé que esto funciona'.",
    question: "¿Cómo gestionas el riesgo de construir lo incorrecto?",
    options: [
      { id: 'A', text: "Research Paralelo (Just-in-Time): Aceptar el deadline pero correr tests de usabilidad rápidos (24h) con prototipos en papel/figma mientras los devs preparan el entorno. Si encuentras un blocker grave, tienes datos para frenar.", score: 5, type: "Lead (Agile Validation)" },
      { id: 'B', text: "Obedecer y Documentar: 'Lanzamos bajo su responsabilidad'. Te proteges con un correo pero dejas que el producto falle.", score: 1, type: "CYA (Cover Your Ass)" },
      { id: 'C', text: "Bloquear por Proceso: 'Sin research no hay diseño'. Te conviertes en el departamento del 'No' y eres visto como burocrático.", score: 1, type: "Dogmático" }
    ],
    explanation: "Decir 'No' (C) te excluye. Decir 'Sí' ciego (B) es irresponsable. La opción A compra velocidad pero inyecta validación rápida en paralelo. Es el compromiso ágil."
  },
  {
    id: 'user_research_conflicting_data_survey_vs_usability',
    category: "User Research",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    scenario: "En una encuesta (N=1000), el 70% de los usuarios dijo que QUERÍA un 'Dashboard Personalizable'. En tests de usabilidad (N=10), nadie usó la personalización y todos se confundieron con la complejidad extra.",
    question: "¿A qué data le crees?",
    options: [
      { id: 'A', text: "Creer a la Encuesta (Lo que dicen): 1000 personas son estadística, 10 son anécdota. Construyes el dashboard.", score: 1, type: "Ingenuo (Self-reported data bias)" },
      { id: 'B', text: "Creer a la Usabilidad (Lo que hacen): Los usuarios son malos prediciendo su comportamiento futuro. Si en la práctica no lo usan y confunde, no se construye.", score: 5, type: "Lead (Behavioral > Attitudinal)" },
      { id: 'C', text: "Hacer A/B Test: Construir una versión barata para ver si lo usan en producción. Es costoso si la usabilidad ya mostró fricción.", score: 3, type: "Data-driven costoso" }
    ],
    explanation: "Regla de oro en UX: Lo que la gente HACE (Behavioral) > Lo que la gente DICE (Attitudinal). Las encuestas miden aspiraciones ('Quiero ser organizado'), la usabilidad mide realidad ('No tengo tiempo de configurar'). Opción B ahorra construir features fantasma."
  },
];
