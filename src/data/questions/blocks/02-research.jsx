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
      { id: 'A', text: "Propones Validación Adicional: Diseñar un test A/B con los prospectos Enterprise específicos que rechazaron el producto para medir si Dark Mode realmente cierra esos deals o es una objeción superficial.", score: 4, type: "Data-Driven (Demora decisión)" },
      { id: 'B', text: "Aceptas diseñarlo de inmediato. Entiendes que la 'Paridad de Features' es una estrategia de ventas válida (Hygiene Factor) aunque tu base actual no lo pida. Los usuarios Enterprise tienen necesidades diferentes.", score: 5, type: "Lead (Visión de Mercado)" },
      { id: 'C', text: "Defiendes la Evidencia: Te niegas a diseñarlo citando el research como defensa. Si solo el 12% lo usaría, invertir 1.5 sprints no tiene ROI. Ventas debe aprender a vender el valor real del producto.", score: 2, type: "Mártir del Usuario" }
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
      { id: 'A', text: "Tiger Team de Emergencia: Pausas el roadmap inmediatamente, armas un equipo dedicado de 3 personas (2 devs + tú), auditas y arreglas los problemas P0 de accesibilidad en 1 sprint. Comunicas el retraso de features a stakeholders con contexto legal.", score: 5, type: "Lead (Gestión de riesgo existencial)" },
      { id: 'B', text: "Consultores Externos: Contratas una agencia especializada en accesibilidad ($15-20K) para que arregle los issues críticos en paralelo sin detener tu equipo. Pierdes el know-how interno pero mantienes velocity en compromisos Q.", score: 4, type: "Solve con $ (Trade-off de conocimiento)" },
      { id: 'C', text: "Overtime Intensivo: Intentas meter el trabajo de accesibilidad 'en los bordes' del sprint actual pidiendo horas extra al equipo (noches/fines de semana) para no retrasar features comprometidas. Prometes comp days después del Q.", score: 1, type: "Wishful thinking (Falla en ambos)" }
    ],
    explanation: "Una amenaza legal de cliente de 20% ARR es riesgo existencial que puede costar más que features del Q completo. La C es ilusoria: intentar hacer ambas cosas mal garantiza fallar en las dos (burnout + bugs + lawsuit). La B es válida si tienes budget, pero sacrifica aprendizaje interno. Un Lead re-prioriza radicalmente ante riesgos existenciales (A), aunque duela comunicar retrasos."
  },
  {
    id: 'dark_pattern_retention_ethics',
    category: "Ética de Diseño",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "La retención cayó. Tu PM propone ocultar el botón de cancelar bajo 3 sub-menús y agregar un teléfono obligatorio para 'reducir el churn artificialmente'. Argumenta que 'todos los competidores lo hacen'.",
    question: "¿Qué respondes al VP de Growth sabiendo que CFO/CEO esperan $420K de retention y designer senior amenaza con no implementar?",
    options: [
      { id: 'A', text: "Implementarlo. Es un patrón oscuro pero efectivo a corto plazo.", score: 1, type: "Cómplice" },
      { id: 'B', text: "Fricción Ética: 'Hagámoslo fácil de cancelar, pero preguntemos POR QUÉ se van'. Usar el offboarding para aprender y retener con ofertas, no con trampas.", score: 5, type: "Lead (Retención Ética)" },
      { id: 'C', text: "Negarse rotundamente citando ética de diseño.", score: 2, type: "Mártir" }
    ],
    explanation: "Con Board esperando mejora de retention para Series B en 4 meses, CEO/CFO proyectando $420K ARR, y precedente de competidores usando friction, esta es crisis de valores vs negocio. La C es éticamente pura (rechazar dark patterns + proponer alternativas) PERO el timing es brutal: onboarding improvements + re-engagement toman 8+ semanas en mostrar impacto - puede ser tarde para Series B pitch. Además, rechazar frontalmente genera costo político masivo (VP de Growth te ve como blocker). La B es zona gris: friction moderado (3 clicks, no 5) con transparencia comunicada públicamente + analytics para rollback si backlash ocurre. $240K ARR < $420K (VP no está feliz) pero designer senior acepta reluctantemente ('límite ético pero no dark pattern total'). Riesgo: comunidades como HN/Reddit pueden detectar y exponer igual - 'transparencia' no absuelve friction intencional. La A es la jugada de Lead que alinea ética con negocio: offboarding inteligente con retention offers basadas en motivo real. Es ÉTICO (Cancel sigue visible, 1-2 clicks) pero EFECTIVO (Spotify/Notion logran 18-25% save rates). Proyección $180K < $420K de friction pura, PERO sin riesgo reputacional + designer implementa sin conflicto + precedente: Patagonia/REI usan 'Are you sure?' con alternativas y son admiradas por honestidad. Un Lead senior reconoce que retención por fricción es optimización de corto plazo que genera deuda reputacional - usuarios atrapados != usuarios felices. La diferencia crítica: opción B intenta 'suavizar' el dark pattern (3 clicks vs 5, transparencia en changelog) pero sigue siendo friction intencional sin valor al usuario. Opción A ELIMINA friction pero AGREGA valor (descuentos, pausas, bug fixes según motivo). En crisis pre-funding, la tentación es maximizar retention metrics (B), pero si el backlash ocurre 2 meses antes de Series B pitch, el daño es irreversible."
  },
  {
    id: 'guerrilla_testing_speed',
    category: "Validación Ágil",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Jueves 4:30 PM. Deadline de deploy mañana para demo de renovación ($400K). Dudas si el CTA del checkout debe decir 'Confirmar Compra' o 'Proceder al Pago'. En testing interno, 2 de 6 usuarios dudaron. El botón es crítico (78% conversión). No hay tiempo para research formal ni A/B testing. El Tech Lead exige el copy final en 90 minutos. Tu UX Writer está fuera. Benchmarking es inconcluso (Stripe, Salesforce y competidores usan términos distintos).",
    question: "¿Cómo decides el copy en 90 minutos con $400K en juego?",
    options: [
      { id: 'A', text: "Benchmarking Contextual: Auditas rápido a 3 competidores B2B directos (no e-commerce). Si hay consenso en flujos de 'pago de facturas', lo adoptas y justificas como 'estándar de industria'. Asumes que ellos validaron.", score: 3, type: "Best practice contextual (Asume que competidores testearon)" },
      { id: 'B', text: "Criterio Experto: Decides basado en heurísticas y consistencia interna. 'Confirmar Compra' es más claro que 'Proceder'. Documentas tu racional en Notion. Confías en tu experiencia de 10 años ante la falta de data.", score: 4, type: "Expertise documentada (Autoridad profesional)" },
      { id: 'C', text: "Guerrilla Test Interno (Proxies): Envías screenshots A/B por Slack a 10 colegas de Sales y CS (que conocen el lenguaje del cliente). Pregunta: '¿Qué esperas que pase al hacer click?'. Decides en 40 min con data real de proxies cualificados.", score: 5, type: "Lead (Data-informed rápido con contexto)" }
    ],
    explanation: "Con 90 minutos y $400K en juego, 'algo de data > cero data'. La A asume que competidores testearon (arriesgado). La B depende de tu sesgo individual. La C es pragmática: 10 proxies cualificados en 40 minutos dan señales reales de TU contexto. Guerrilla testing bien diseñado >> intuición solitaria."
  },

  // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
  {
    id: 'dev_handoff_war_library',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Es martes 2 PM - design review con Engineering. El Tech Lead rechaza frontalmente tus diseños del nuevo componente 'File Upload' para el feature de 'Bulk Document Processing' (crítico para cliente enterprise que cierra Q próximo, $280K ARR). Dice: 'Imposible en este sprint - drag & drop multi-file con preview y progress bars granulares requiere refactor completo de nuestro upload system'. Tú sabes que son estándares web básicos, pero descubres que usan librería legacy (React 16 + Material-UI v4 + custom wrapper del 2019). El CTO está en la reunión y dice: 'Estamos bajo migration freeze - actualizamos stack en Q+1, no antes. ¿Diseño puede simplificarse?' El PM interrumpe: 'El cliente específicamente pidió drag & drop en el demo - es deal-breaker'. El Tech Lead contraataca: 'Entonces necesitamos 3 sprints, no 1'. Tres engineers seniors hacen gestos de frustración. El CTO te mira esperando propuesta.",
    question: "¿Cómo desbloqueas la situación con cliente esperando, tech debt limitante, y equipo frustrado?",
    options: [
      { id: 'A', text: "Pair Programming Heroico: Propones sesión de 4 horas mañana con Tech Lead donde tú investigas cómo implementar versión completa del diseño con su stack legacy actual. Traes ejemplos de código (CodePen/Sandbox), ofreces escribir CSS base + pseudo-código de la lógica. Si funciona, desbloquea sprint. Si no, al menos demuestras que intentaste entender sus constraints. Riesgo: No escalable, te convierte en 'developer de apoyo'.", score: 4, type: "Heroico técnico (Costo personal alto)" },
      { id: 'B', text: "Defender Estándar de Diseño con Escalación: Mantienes que el diseño es correcto y estándar web moderno - la deuda técnica de Engineering no debe comprometer calidad del producto ni credibilidad con clientes. Propones al CTO ante el grupo: 'O desbloqueamos migration freeze AHORA para este componente crítico, o arriesgamos deal de $280K'. Forcing function para decisión ejecutiva inmediata. Riesgo: Guerra con Engineering, relación dañada.", score: 1, type: "Confrontación (Sabotea colaboración)" },
      { id: 'C', text: "Negociación en Fases con Compromiso Documentado: Propones en sala: 'V1 Simplificado' que funcione con stack actual - botón de upload tradicional + lista de archivos con progress total (no granular) - entregable en 1 sprint. Cumple funcionalidad core para cliente aunque menos 'wow'. PERO documentas en Jira ticket P0 (visible para CTO): 'V2 Full Experience' (drag & drop completo) comprometido para implementar en Sprint 2 de Q+1 post stack migration. Capturas compromiso formal con fecha.", score: 5, type: "Lead (Pragmatismo con accountability)" }
    ],
    explanation: "Con cliente esperando $280K, tech debt real, y migration freeze, nadie tiene opción perfecta. La B es técnicamente correcta pero sabotea relación con Engineering - el CTO ya dijo 'no migration hasta Q+1', forzarlo ahora genera enemies. La A es noble pero te convierte en hero developer no escalable - además, si fallas después de 4 horas, perdiste tiempo crítico. La C es pragmatismo ejecutivo: entrega valor hoy (V1 funcional) mientras asegura evolución mañana (V2 documentado y comprometido). Un Lead entiende que 'perfecto en 3 sprints' pierde deal vs 'funcional en 1 sprint + perfecto en Q+1 documentado'. La clave es capturar el compromiso V2 formalmente (Jira P0 visible) para que no se pierda post-launch."
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
      { id: 'C', text: "Negociación de Copy con Legal: Agendas reunión urgente con Legal para negociar micro-copy más conciso (de 4-5 líneas a 2 líneas + link a términos completos). Argumentas que el texto largo afecta conversión y nadie lo lee. Arriesgas que Legal no ceda y pierdas 1 día.", score: 2, type: "Negociación (Alto riesgo de tiempo)" }
    ],
    explanation: "No puedes ganarle a Legal en temas de compliance (C suele fallar y quema tiempo). La B logra el resultado pero a costa de burnout de equipo a 48h de demo crítico. Un Lead conoce patterns de UI (progressive disclosure, collapsible content, modals) que resuelven el problema técnicamente sin rediseño masivo ni confrontación (A)."
  },
  {
    id: 'design_committee_control',
    category: "Gestión de Stakeholders",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    scenario: "En una reunión de Design Review con 8 stakeholders (CEO, CFO, Head of Sales, Marketing, Product, 3 VPs), la discusión sobre el rediseño del dashboard se descarrila completamente. Durante 20 minutos están debatiendo si el botón principal debe ser azul o verde basados solo en preferencias personales. El CEO dice 'no me gusta el verde, mi esposa tampoco'. El tiempo de reunión se está acabando y aún quedan 4 pantallas críticas por revisar.",
    question: "¿Cómo recuperas el control de la reunión sin al ienar a los executives?",
    options: [
      { id: 'A', text: "Test A/B Rápido: Propones hacer un A/B test de 3 días la próxima semana con usuarios reales para que los datos decidan entre azul y verde, y así satisfacer a todos los stakeholders con evidencia objetiva.", score: 4, type: "Data-driven (Demora decisión)" },
      { id: 'B', text: "Redirigir a Objetivos: Detienes la discusión recordando el objetivo de negocio ('Este botón debe aumentar conversión 15%'). Preguntas: '¿Azul o verde impacta más la acción del usuario según nuestro brand research?' Anclas la decisión en criterios medibles, no en gustos.", score: 5, type: "Lead (Facilitador de criterio)" },
      { id: 'C', text: "Autoridad de Diseño: Intervienes diplomaticamente diciendo 'Aprecio el feedback, pero las decisiones de color están respaldadas por nuestro sistema de accesibilidad y brand guidelines. Confiemos en el criterio del equipo de diseño para esto y enfoquémonos en los flujos críticos'.", score: 2, type: "Experto (Puede generar resentimiento)" }
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
      { id: 'B', text: "Pilot Program: Propones un experimento de 1 mes migrando solo 1 proyecto no crítico a  Penpot para validar la hipótesis sin apostarlo todo. Si funciona bien, escalan gradualmente.", score: 4, type: "Incremental (Consume recursos sin decisión)" },
      { id: 'C', text: "Mantener Status Quo: Explicas que Figma es el estándar de la industria, tiene mejor UX, y cambiar herramientas por ideología no es profesional. El equipo debe enfocarse en entregar valor, no en herramientas.", score: 2, type: "Conservador (Ignora argumentos válidos)" }
    ],
    explanation: "Las herramientas son inversión, no religión. La C descarta argumentos legítimos de costo y vendor lock-in. La B consume recursos en experimentos cuando los números ya pueden responder. Un Lead evalúa switching cost realísticamente: migración + retraining + pérdida de momentum (A). Si ahorras $12K pero pierdes $60K en productividad, es mala decisión."
  },

  // --- BLOQUE 6: PRODUCTIVIDAD & REMOTO ---
  {
    id: 'remote_sync_handoff',
    category: "Trabajo Remoto",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    scenario: "Tu equipo de ingeniería está en Europa (6 horas adelante). El Tech Lead reporta que pierden el 40% de su mañana tratando de adivinar qué pantallas están listas para dev. La velocidad del sprint cayó 15% y el CTO te culpa: 'Tu equipo diseña mientras el mío duerme, y cuando despiertan, no hay specs claras'. Amenaza con imponer 'Daily Sync' obligatorio a las 6 AM tu hora.",
    question: "¿Cómo organizas el archivo para colaboración asíncrona y evitar madrugar?",
    options: [
      { id: 'A', text: "Sync Meeting de Compromiso: Aceptas la reunión de 6 AM dos veces por semana para hacer handoff en vivo. Es brutal para tu work-life balance, pero calma al CTO y asegura claridad inmediata.", score: 2, type: "Mártir (Insostenible)" },
      { id: 'B', text: "Protocolo Async Estricto: Implementas sistema de 'Ready for Dev' con Sections en Figma + Loom de 3 min por ticket OBLIGATORIO antes de cerrar el día. Si no hay video, no hay ticket. Entrenas a devs para consumir video. Recuperas la velocidad sin reuniones.", score: 5, type: "Lead (Async Ops)" },
      { id: 'C', text: "Limpieza Diaria: Dedicas tu última hora del día a limpiar archivos y dejar notas. Es manual y depende de ti, pero evita cambiar el proceso de los devs.", score: 3, type: "Parche (No escala)" }
    ],
    explanation: "El trabajo asíncrono requiere más estructura, no más reuniones. La opción A quema al equipo de diseño. La B sistematiza la claridad: Loom + Figma Sections elimina la ambigüedad sin requerir coincidencia horaria."
  },
  {
    id: 'meeting_overload_protection',
    category: "Productividad",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Haces una retrospectiva anónima de Q y el 80% del equipo reporta que 'no tienen tiempo para diseñar' porque pasan 5-6 horas diarias en reuniones (Dailies 30min, Planning 2h, Syncs con Product 1h, Syncs con Engineering 1h, Design Reviews 1.5h, All-Hands 30min). El output de diseño ha caído 40% vs el Q anterior. Los PMs argumentan que las reuniones de sync son críticas para 'alignment'. Ingeniería dice que sin los dailies pierden contexto.",
    question: "¿Qué medida estructural implementas para recuperar tiempo de trabajo profundo?",
    options: [
      { id: 'A', text: "No-Meeting Blocks Institucionales: Decretas Martes y Jueves como 'Focus Days' absolutos (no meetings de 9 AM a 5 PM a nivel de  toda la empresa, enforcement en calendarios). Las reuniones críticas se comprimen en Lunes/Miércoles/Viernes. Requiere aprobación de CPO y CTO.", score: 5, type: "Lead (Cambio sistémico, costo político)" },
      { id: 'B', text: "Optimización de Reuniones: Trabajas con cada dueño de reunión para reducir duración (Dailies a 15min, Planning a 90min) y consolidas syncs duplicados. Empoderas al equipo a agendar 'Office Hours' en lugar de meetings ad-hoc.", score: 4, type: "Incremental (No resuelve volumen)" },
      { id: 'C', text: "Async-First Protocol: Implementas que toda información debe compartirse por escrito primero (Notion, Slack threads), y solo si hay bloqueos o decisiones complejas se escala a meeting sincrónico. Reduces reuniones 30-40%.", score: 4, type: "Cultural shift (Requiere disciplina)" }
    ],
    explanation: "El trabajo creativo requiere bloques ininterrumpidos de 3-4 horas (Deep Work). La B optimiza pero no elimina el problema de sobre-comunicación sincrónica. La C funciona pero requiere cambio cultural difícil de enforcement. Un Lead crea estructura institucional (No-Meeting Days) que protege tiempo por default (A), aunque requiere capital político con líderes de otras áreas."
  },
  {
    id: 'ai_strategy_ux',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El Board exige una 'Estrategia de AI' para el press release del lunes (48 horas). El stock cayó 5% porque competidores anunciaron AI. El PM sugiere poner un chatbot genérico en la home 'para cumplir'. Tú sabes que es una experiencia pobre que alucina y frustra, pero la presión por 'anunciar algo' es máxima.",
    question: "¿Cuál es tu contra-propuesta de valor bajo presión de PR?",
    options: [
      { id: 'A', text: "Chatbot 'Beta' Controlado: Aceptas el chatbot pero lo etiquetas claramente como 'Experimental Beta' y limitas sus respuestas a temas de soporte pre-aprobados. Cumples con el PR del lunes minimizando riesgo de alucinaciones.", score: 3, type: "Compromiso defensivo" },
      { id: 'B', text: "Invisible AI (Magic Fill): Propones feature de 'Auto-completado de formularios con AI' (scan de PDF/imagen). Es menos vistoso que un chat, pero resuelve un dolor real (data entry). Haces un prototipo en video para el PR del lunes y prometes delivery en 4 semanas. Vendes 'Productividad Real' vs 'Hype'.", score: 5, type: "Lead (User-Centric AI)" },
      { id: 'C', text: "Fake Door Test: Anuncias 'AI Assistant Coming Soon' con un botón que recoge emails de interesados. Ganas tiempo para diseñar algo real mientras calmas al Board con el anuncio.", score: 2, type: "Vaporware (Riesgo de decepción)" }
    ],
    explanation: "El mayor valor de la AI en UX no es conversar (Chatbot), es eliminar trabajo. La opción B ofrece una narrativa de 'Productividad' que es superior al hype de 'Chat' y protege la UX a largo plazo."
  },
  {
    id: 'file_chaos_structure',
    category: "Design Ops",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Un desarrollador implementó la versión incorrecta de la Home porque tomó el archivo 'Final_V2' en lugar de 'Final_Real_V3'. Esto costó 1 semana de rework y retrasó el lanzamiento. El VP de Engineering está furioso: 'Si Diseño no puede organizar sus archivos, nosotros no podemos confiar en sus entregas'.",
    question: "¿Qué solución implementas el día 1 para recuperar confianza?",
    options: [
      { id: 'A', text: "Limpieza Heroica de Fin de Semana: Te quedas el sábado organizando todo el Drive/Figma. El lunes anuncias que 'todo está limpio'. Resuelve el síntoma pero no la causa (el equipo volverá a desordenar).", score: 2, type: "Mártir (No escala)" },
      { id: 'B', text: "Sistema de Gobernanza Bloqueante: Creas un archivo 'Master' de solo lectura para Devs. Solo los Leads pueden mover diseños ahí tras aprobación. Nadie codifica desde archivos de trabajo. Estableces la 'Fuente de la Verdad' por sistema, no por nombre de archivo.", score: 5, type: "Lead (Gobernanza Sistémica)" },
      { id: 'C', text: "Naming Convention Workshop: Haces una reunión para acordar que todos usarán 'YYYY-MM-DD_Nombre'. Confías en la disciplina del equipo.", score: 3, type: "Optimista (Falla sin enforcement)" }
    ],
    explanation: "El orden no ocurre por buena voluntad, ocurre por diseño del sistema. La gobernanza (quién puede editar qué y dónde viven los entregables) elimina el error humano. La opción B crea un firewall entre el caos creativo y la producción."
  },

];
