import React from 'react';
import {
  AlertTriangle, XCircle, BarChart2, ShieldAlert, Users,
  Layers, Zap, Search, MessageSquare, Briefcase, RefreshCw,
  Target, Code, Star, Smartphone, AlertOctagon, RotateCcw, Shield
} from 'lucide-react';

/**
 * Estrategia, Sistemas & Liderazgo
 */
export const strategy_questions = [

  // --- BLOQUE 1: ESTRATEGIA, NEGOCIO & MÉTRICAS ---
  {
    id: 'strategy_pivot_burnout',
    displayId: 'STR-01',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en la funcionalidad 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales' por una necesidad crítica de flujo de caja. El equipo de diseño está visiblemente furioso y desmotivado. Tu runway es de solo 4 meses.",
    question: "¿Cómo ejecutas este giro sin destruir la moral del equipo?",
    options: [
      { id: 'A', text: "**Gestión de Cambio Radical:** Reúnes al equipo, validas la frustración brevemente y reasignas tareas de 'Pagos Manuales' para empezar hoy mismo. Al cortar la rumiación de raíz y enfocarlos en la nueva misión de supervivencia, transformas la parálisis en acción constructiva.", score: 5, type: "Lead / Correct", decisionSummary: "Validaste la frustración y redirigiste al equipo a la nueva prioridad de inmediato." },
      { id: 'B', text: "**Cierre Ceremonial:** Dedicas el resto del viernes a una retrospectiva de cierre para documentar lo aprendido y celebrar el esfuerzo. Das un cierre digno al trabajo realizado, permitiendo que el equipo sienta que su tiempo no fue desperdiciado antes de cambiar de contexto.", score: 3, type: "Cultural / Incorrect", decisionSummary: "Dedicaste tiempo a un cierre ceremonial en vez de actuar con urgencia." },
      { id: 'C', text: "**Cooldown & Recharge:** Negocias con el CEO un 'fin de semana largo' y reinicias el lunes. Priorizas la salud mental inmediata bajo la lógica de Psychological Safety, permitiendo que el equipo procese el cambio para retomar con máxima energía y sin resentimientos el lunes.", score: 1, type: "Protector / Incorrect", decisionSummary: "Priorizaste el descanso del equipo sobre la urgencia del runway." }
    ],
    explanation: "Con 4 meses de vida, el tiempo es oro. El **Cooldown** es un lujo suicida en crisis y el **Cierre Ceremonial** quema runway en rituales. Solo la **Gestión de Cambio Radical** detiene la rumiación validando la emoción con acción inmediata. En **Wartime Leadership**, la claridad reduce la ansiedad más que el descanso.",
    learning: {
      topic: 'crisis-management',
      concepts: ['wartime-leadership', 'change-management', 'team-morale']
    }
  },
  {
    id: 'metrics_vanity_vs_reality',
    displayId: 'STR-02',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona: 'No arruines la narrativa'.",
    question: "¿Cómo gestionas la discrepancia de datos ante la directiva?",
    options: [
      { id: 'A', text: "**Alineación Privada:** Reúnes a VP y CMO antes del QBR para acordar presentar ambos datos como un hallazgo conjunto ('Calidad vs. Cantidad'). Al unificar la narrativa antes de la reunión, transformas un potencial conflicto en una estrategia de optimización compartida.", score: 5, type: "Lead / Correct", decisionSummary: "Alineaste la narrativa con los stakeholders antes del QBR." },
      { id: 'B', text: "**Transparencia Radical:** Presentas el reporte crudo en el QBR: +200% tráfico, -15% conversión. Mantienes la Integridad de Datos absoluta y dejas que los números hablen por sí mismos, permitiendo que los ejecutivos saquen sus propias conclusiones basadas en la realidad objetiva.", score: 1, type: "Técnico / Incorrect", decisionSummary: "Expusiste la discrepancia de datos públicamente sin alinear antes." },
      { id: 'C', text: "**Enfoque en Soluciones:** Validas el tráfico de Marketing públicamente y te comprometes a optimizar el funnel en tu lado. Mantienes la armonía del equipo de liderazgo y te enfocas en lo que puedes controlar (el producto), evitando fricciones políticas innecesarias.", score: 1, type: "Silo / Incorrect", decisionSummary: "Validaste métricas de vanidad para evitar conflicto político." }
    ],
    explanation: "La data sin política es ingenua. La **Transparencia Radical** humilla aliados públicamente y el **Enfoque en Soluciones** permite seguir quemando caja en Vanity Metrics. La **Alineación Privada** es la única que protege tu **Political Capital** y controla la narrativa del 'Hallazgo de Calidad' antes de entrar a la sala.",
    learning: {
      topic: 'metrics-analytics',
      concepts: ['vanity-metrics', 'political-capital', 'data-storytelling']
    }
  },
  {
    id: 'sales_custom_demands',
    displayId: 'STR-03',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El Head of Sales está cerrando un contrato Enterprise clave para cumplir la meta del Q. El cliente exige ver un demo el sábado con su branding (colores y logo) hardcodeado. Tu Design System no soporta theming aún. Sales dice: 'Si no ven su logo, no firman'. El VP de Producto te pregunta si podemos hacer una excepción técnica rápida.",
    question: "¿Cómo respondes al pedido de 'hackear' el demo?",
    options: [
      { id: 'A', text: "**Rama Desechable (Throwaway):** Creas un branch sucio, hardcodeas el logo solo para el demo y lo borras el lunes. Habilitas la venta crítica aislando completamente el 'código basura' del entorno de producción, protegiendo la integridad del sistema a largo plazo.", score: 5, type: "Lead / Correct", decisionSummary: "Creaste una solución desechable para habilitar la venta sin contaminar producción." },
      { id: 'B', text: "**Defensa de Estándares:** Te niegas rotundamente explicando las limitaciones del sistema actual. Aprovechas la oportunidad para educar a Ventas sobre la importancia de la Escalabilidad y evitas sentar el precedente de que el equipo de ingeniería funciona como una agencia de personalización.", score: 1, type: "Bloqueador / Incorrect", decisionSummary: "Rechazaste el pedido de ventas citando limitaciones técnicas." },
      { id: 'C', text: "**Feature Flag Táctico:** Implementas el logo en producción oculto tras un flag. Es la solución más rápida y eficiente: satisface al cliente inmediatamente y mantiene el código 'limpio' ante los ojos del usuario final mediante control de versiones.", score: 1, type: "Quick Win / Incorrect", decisionSummary: "Implementaste código custom en producción detrás de un feature flag." }
    ],
    explanation: "Matar un deal vital por pureza técnica (**Defensa de Estándares**) es ceguera de negocio; contaminar producción con **Feature Flags** permanentes es negligencia técnica. La **Rama Desechable** acepta el **Waste** (desperdicio) como costo de venta, protegiendo la **Technical Hygiene** del sistema principal al aislar la basura.",
    learning: {
      topic: 'product-strategy',
      concepts: ['sales-engineering-balance', 'technical-debt', 'throwaway-code']
    }
  },
  {
    id: 'okr_conflict_dashboard',
    displayId: 'STR-04',
    category: "Gestión de OKRs",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Pipeline cayó 23% y el cierre promedio pasó de 18 a 32 días. El VP de Ventas exige un dashboard de 'Activity Tracking' para vigilar minuto a minuto a sus agentes. El VP de Producto lo rechaza públicamente: 'Esto destruye la cultura'. Ambos te miran esperando que tomes partido con el quarter terminándose.",
    question: "¿Cómo reasignas recursos ante este conflicto?",
    options: [
      { id: 'A', text: "**Agilidad y Servicio:** Aceptas construir una versión MVP del tracker en 3 días. Demuestras que el equipo de Producto es un socio ágil que desbloquea las necesidades urgentes de los stakeholders, reduciendo la tensión política de inmediato.", score: 1, type: "Mercenario / Incorrect", decisionSummary: "Construiste un tracker de actividad para vigilar al equipo de ventas." },
      { id: 'B', text: "**Workshop de Resultados:** Rechazas la vigilancia y contra-propones visualizar 'Conversiones por Etapa' (Outcome). Reorientas el problema hacia el valor real del negocio, ayudando a Ventas a entender qué métricas realmente mueven la aguja.", score: 5, type: "Lead / Correct", decisionSummary: "Redirigiste el foco de actividad (output) a conversiones (outcome)." },
      { id: 'C', text: "**Escalación Ejecutiva:** Solicitas que el CEO arbitre la decisión basándose en las prioridades de la empresa. Aseguras que la decisión venga de la máxima autoridad, garantizando alineación estratégica y evitando que Producto quede atrapado en fuego cruzado.", score: 3, type: "Burocrático / Incorrect", decisionSummary: "Escalaste la decisión al CEO en vez de resolver el conflicto." }
    ],
    explanation: "Convertirte en policía de empleados (**Agilidad y Servicio**) te vuelve mercenario; pedirle a papá CEO que decida (**Escalación Ejecutiva**) muestra debilidad. El **Workshop de Resultados** es el único camino de **Managing Up**: mueve la conversación de **Output** (horas silla) a **Outcome** (ventas), evitando ser una Feature Factory.",
    learning: {
      topic: 'stakeholder-management',
      concepts: ['outcome-vs-output', 'manage-up', 'feature-factory']
    }
  },

  // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
  {
    id: 'tokens_vs_hardcode_pressure',
    displayId: 'STR-05',
    category: "Ingeniería de Diseño",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Estamos a jueves a las 3 PM y hay prisa extrema por lanzar el viernes antes del mediodía (demo con inversor clave). Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después. Configurar los tokens correctamente pone en riesgo el code-freeze de las 6 PM.",
    question: "¿Cuál es tu postura ante esta deuda técnica?",
    options: [
      { id: 'A', text: "**Stop the Line:** Te sientas con ellos a configurar los tokens ahora, aunque implique quedarse tarde. Aseguras que la base del sistema sea sólida desde el día 1, evitando que el costo de refactorización se multiplique exponencialmente en el futuro.", score: 5, type: "Lead / Correct", decisionSummary: "Paraste para configurar los tokens correctamente antes del lanzamiento." },
      { id: 'B', text: "**Pragmatismo Documentado:** Autorizas el hardcode creando un ticket de 'Limpieza de Tokens' en el backlog prioritario. Priorizas el Time-to-Market y el cumplimiento del deadline, gestionando la deuda técnica de forma responsable a través de procesos de Jira.", score: 1, type: "Pragmático / Incorrect", decisionSummary: "Autorizaste hardcodear colores prometiendo limpiarlo después." },
      { id: 'C', text: "**Utility Classes (Tailwind-style):** Adoptas un enfoque de clases utilitarias directas. Aceleras el desarrollo eliminando la abstracción de nombres semánticos, alineando al equipo con prácticas modernas de frontend que priorizan velocidad sobre pureza arquitectónica.", score: 3, type: "Operativo / Incorrect", decisionSummary: "Adoptaste clases utilitarias sacrificando el vocabulario semántico." }
    ],
    explanation: "El **Pragmatismo Documentado** es falaz: el ticket de refactor nunca se prioriza (**Hyperbolic Discounting**). Las **Utility Classes** sin gobernanza crean inconsistencia a escala corporativa y eliminan el vocabulario compartido del sistema. **Stop the Line** es doloroso pero aplica la **Regla del 1-10-100**: corregir el cimiento hoy cuesta 1; corregirlo post-lanzamiento costará 100.",
    learning: {
      topic: 'design-systems',
      concepts: ['design-tokens', 'technical-debt', 'stop-the-line']
    }
  },
  {
    id: 'legacy_ui_refactor_strategy',
    displayId: 'STR-06',
    category: "Estrategia de Migración",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "El producto tiene 4 estilos de botones legacy (Angular, React, jQuery, Vanilla). Unificar implica riesgo de bugs; NPS cayó 6 puntos (52→46) y clientes perciben inconsistencia. CEO y VP de Engineering advierten que un refactor masivo tomaría 8‑12 semanas y podría afectar la estabilidad del 40% del producto. Board revisa en 3 semanas.",
    question: "¿Cuál es tu estrategia de limpieza con NPS cayendo y Board evaluando pronto?",
    options: [
      { id: 'A', text: "**Boy Scout Rule:** Acuerdo formal con CTO para que cada vez que se toque un archivo legacy, sea obligatorio actualizar componentes (Definition of Done). Migras progresivamente pagando el 'impuesto' en cada ticket sin detener el roadmap de negocio.", score: 5, type: "Lead (Incremental sistemático)", decisionSummary: "Implementaste migración incremental con Boy Scout Rule." },
      { id: 'B', text: "**Brand Evolution (Forward Only):** Aplicas el nuevo sistema SOLO en features nuevas. Comunicas externamente que es una evolución gradual de la marca, manteniendo el velocity de entrega alto y evitando el riesgo de romper código legacy.", score: 3, type: "Pragmático con spin de marketing", decisionSummary: "Dejaste el legacy intacto y solo aplicaste el nuevo sistema en features nuevas." },
      { id: 'C', text: "**Design Debt Sprint:** Presentas un Business Case (NPS = Churn) para pausar features no-críticas por 2 semanas y unificar las top 20 pantallas. Prometes una recuperación visible de la confianza del cliente antes de la reunión del Board.", score: 1, type: "Bold con riesgo político", decisionSummary: "Propusiste pausar el roadmap para un sprint de limpieza de deuda." }
    ],
    explanation: "Los sprints dedicados a deuda técnica (**Design Debt Sprint**) rara vez se aprueban porque no generan revenue visible. **Brand Evolution** valida la inconsistencia, confundiendo al usuario y aumentando la carga cognitiva. La **Boy Scout Rule** es la única sostenible: paga deuda técnica como costo operativo (COGS) sin detener la maquinaria de ingresos.",
    learning: {
      topic: 'design-systems',
      concepts: ['boy-scout-rule', 'design-debt', 'incremental-migration']
    }
  },
  {
    id: 'component_complexity_detach',
    displayId: 'STR-07',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El componente 'Card' de tu Design System en Figma tiene 156 variantes. Tarda 6-8 segundos en cargar. Una auditoría revela que el 68% de los diseños nuevos usan 'detach' para trabajar más rápido. Los diseñadores se quejan en retrospectivas de que el componente es 'demasiado complejo' y rígido.",
    question: "¿Cómo resuelves el problema de adopción sin perder la arquitectura del sistema?",
    options: [
      { id: 'A', text: "**Refactor de Arquitectura:** Auditas y simplificas el componente usando Component Properties modernas (boolean toggles, slotting). Reduces de 156 a 40 variantes, priorizando la facilidad de uso del 'cliente interno' (tu equipo) sobre la cobertura de edge cases.", score: 5, type: "Lead (Optimización sistémica)", decisionSummary: "Simplificaste el componente de 156 a 40 variantes." },
      { id: 'B', text: "**Especialización de Componentes:** Divides 'Card' en 4 componentes especializados (Card-Content, Card-User, Card-Product, etc.). Reduces la complejidad cognitiva individual de cada pieza, facilitando la búsqueda y uso específico por parte del equipo.", score: 3, type: "Fragmentación controlada", decisionSummary: "Fragmentaste el componente en múltiples versiones especializadas." },
      { id: 'C', text: "**Governance + Training:** Estableces code reviews de Figma obligatorios donde rechazas archivos con detach. Refuerzas la capacitación mensual sobre el uso correcto, asegurando que el equipo entienda y respete los estándares de calidad definidos.", score: 1, type: "Evita confrontación", decisionSummary: "Impusiste governance y training sin simplificar el componente." }
    ],
    explanation: "Si el usuario (diseñador) hace 'detach', el sistema falló, no el usuario. **Governance + Training** intenta corregir un fallo de producto con burocracia. La **Especialización** fragmenta el mantenimiento. El **Refactor de Arquitectura** ataca la causa raíz (**Over-engineering**): un sistema que es difícil de usar, inevitablemente será ignorado."
  },
  {
    id: 'hiring_profile_gap_logic',
    displayId: 'STR-08',
    category: "Contratación Estratégica",
    icon: <Search className="w-6 h-6 text-indigo-500" />,
    scenario: "Tu equipo actual es visualmente excelente (Awwwards-tier) pero débil en lógica compleja (Fintech). Product desconfía de sus flujos. Tienes una vacante. Llega un candidato: portfolio visual 'promedio' pero 6 años de experiencia en Core Banking y Compliance.",
    question: "¿Cuál es tu decisión de contratación estratégica?",
    options: [
      { id: 'A', text: "**Hire for Excellence (Culture Fit):** Rechazas al candidato. Mantienes la vara visual alta para no diluir la identidad del equipo 'élite'. Sigues buscando un 'Unicornio' que tenga ambas: excelencia visual y lógica robusta.", score: 1, type: "Idealista / Incorrect", decisionSummary: "Rechazaste al candidato con expertise de dominio por portfolio visual débil." },
      { id: 'B', text: "**Hire for Gaps:** Lo contratas. Priorizas inyectar el conocimiento de dominio (Fintech) que le falta al equipo. Asumes que la calidad visual se puede elevar con mentoría, pero la lógica bancaria es difícil de enseñar rápido.", score: 5, type: "Lead (Team building)", decisionSummary: "Contrataste al candidato con expertise de dominio para cubrir gaps." },
      { id: 'C', text: "**Estrategia Híbrida:** Contratas un freelance visual para mantener el delivery estético mientras sigues buscando el perfil perfecto full-time. Ganas tiempo sin comprometer estándares ni cerrar la puerta al candidato ideal.", score: 1, type: "Indeciso", decisionSummary: "Pospusiste la decisión contratando un freelance mientras buscas al unicornio." }
    ],
    explanation: "Un Lead contrata para cubrir brechas, no para clonar fortalezas (**Hire for Gaps**). **Hire for Excellence** visual ignora que tu debilidad actual es funcional, no estética. La **Estrategia Híbrida** es un parche que pospone la solución estructural. Necesitas **Domain Expertise** para desbloquear la credibilidad con Producto.",
    learning: {
      topic: 'team-leadership',
      concepts: ['hire-for-gaps', 'domain-expertise', 'team-composition']
    }
  },
  {
    id: 'legacy_code_rewrite_temptation',
    displayId: 'STR-09',
    category: "Estrategia de Migración",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "Frontend en Angular.js (5 años old). Deploys tardan 45 min. CTO propone: 'Paremos todo 6 meses y reescribamos en React (Big Bang)'. CFO advierte pérdida de $1.2M en oportunidades. Tienes reunión de roadmap mañana.",
    question: "¿Cuál es tu postura como stakeholder de diseño ante la reescritura?",
    options: [
      { id: 'A', text: "**Big Bang Rewrite:** Apoyas la reescritura total. El CTO garantiza que pasar a React permitirá contratar talento un 20% más económico y acelerar el hiring. Aceptas el dolor a corto plazo para ganar eficiencia financiera y técnica a largo plazo.", score: 1, type: "Optimismo técnico" },
      { id: 'B', text: "**Strangler Fig Pattern:** Propones migrar pantalla por pantalla, permitiendo coexistencia. Priorizas vistas con alto tráfico para validar valor incrementalmente. Modernizas el stack progresivamente sin detener el flujo de revenue.", score: 5, type: "Lead (Incremental De-Risking)" },
      { id: 'C', text: "**Feature Prioritization:** Sugieres posponer el refactor y enfocarse en revenue. Si el código actual funciona, no lo toques. Maximizas el retorno financiero inmediato exprimiendo el sistema legacy un año más.", score: 3, type: "Cortoplacista" }
    ],
    explanation: "El **Big Bang Rewrite** tiene una tasa de fallo del +70% por fatiga de negocio. **Feature Prioritization** acumula **Technical Debt** hasta la parálisis. El **Strangler Fig Pattern** es el estándar de industria: rodeas el sistema viejo con el nuevo gradualmente, entregando valor continuo mientras modernizas.",
    learning: {
      topic: 'innovation-tech',
      concepts: ['strangler-fig-pattern', 'big-bang-rewrite', 'incremental-modernization']
    }
  },
  {
    id: 'design_system_v2_breaking_changes',
    displayId: 'STR-10',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Design System V2 listo (Tokens semánticos, Dark mode). Tech Lead dice: 'Migrar rompe 200 archivos y toma 3 sprints'. Negocio tiene 4 features críticas en cola y se niega a pausar. El equipo de diseño está frustrado usando V1.",
    question: "¿Cómo lanzas la V2 sin paralizar la operación?",
    options: [
      { id: 'A', text: "**Code Freeze Total:** Negocias una pausa operativa argumentando que la V2 acelerará todo el desarrollo futuro en un 30%. Inviertes tiempo ahora para ganar velocidad después, asegurando una base de código limpia.", score: -1, type: "Big Bang / Incorrect" },
      { id: 'B', text: "**Versionado Coexistente:** Publicas V2 como librería paralela y migras progresivamente (feature por feature). Aceptas convivir con deuda técnica temporal (código duplicado) para no bloquear el roadmap comercial.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Forward Only:** Implementas V2 solo en proyectos nuevos y dejas lo viejo en V1 indefinidamente. Evitas el costo de migración y mantienes la velocidad máxima, asumiendo la fragmentación como una realidad operativa.", score: 1, type: "Fragmentación / Incorrect" }
    ],
    explanation: "A nivel Staff, la continuidad del negocio manda. **Code Freeze** es inviable políticamente sin crisis. **Forward Only** crea **Cognitive Debt** permanente (dos sistemas para siempre). El **Versionado Coexistente** gestiona la complejidad temporal para comprar viabilidad política, alineando técnica y negocio."
  },
  {
    id: 'production_bug_major_incident',
    displayId: 'STR-11',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Un cambio de diseño 'menor' (quitar confirmación) causó un Data Leak de 50k usuarios. Legal redacta notificaciones. El CTO dice públicamente: 'Diseño insistió en quitar la confirmación para reducir fricción'. Todos te miran.",
    question: "¿Cómo gestionas la crisis de reputación y responsabilidad?",
    options: [
      { id: 'A', text: "**Análisis de Proceso (Post-Mortem):** Enfocas la conversación en que el fallo fue sistémico (QA y Dev también aprobaron). Propones revisar los protocolos de release para asegurar que no vuelva a suceder, distribuyendo la responsabilidad.", score: 1, type: "Defensivo / Incorrect" },
      { id: 'B', text: "**Extreme Ownership:** Asumes la responsabilidad pública total inmediatamente. Presentas el plan de reversión (ya ejecutado) y la estrategia de comunicación al usuario. Desarmas el ataque tomando control de la solución.", score: 5, type: "Lead (Liderazgo en Crisis)" },
      { id: 'C', text: "**Gestión Centralizada (Legal Shield):** Remites todas las consultas a Legal y PR para asegurar un mensaje unificado y proteger a la empresa de responsabilidad civil. Sigues el protocolo corporativo de gestión de crisis al pie de la letra.", score: -1, type: "Burocrático / Abdica" }
    ],
    explanation: "En crisis, quien culpa pierde. **Análisis de Proceso** suena a excusa en medio del incendio. **Gestión Centralizada** (esconderse tras Legal) abdica el liderazgo técnico. **Extreme Ownership** es contraintuitivo pero efectivo: al asumir la culpa y presentar la solución, pasas de 'acusado' a 'líder de la resolución'.",
    learning: {
      topic: 'crisis-management',
      concepts: ['extreme-ownership', 'incident-response', 'accountability']
    }
  },
  {
    id: 'user_backlash_social_media',
    displayId: 'STR-12',
    category: "Community Management",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Cambiaste el modelo de precios y la UI para hacerlo más difícil de cancelar. Un influencer de TikTok hizo un video criticándolo y el rating en el App Store bajó de 4.8 a 3.2 en dos días. Marketing está pidiendo respuestas.",
    question: "¿Cómo respondes a la crisis de reputación?",
    options: [
      { id: 'A', text: "**Strategic Silence:** Mantienes el curso ignorando a los trolls. Asumes que la 'mayoría silenciosa' está satisfecha y que responder solo alimentará el algoritmo y dará más visibilidad a la crítica negativa.", score: 1, type: "Negligente" },
      { id: 'B', text: "**Corrección y Transparencia:** Publicas un update reconociendo el error, simplificas la UI inmediatamente y respondes reviews clave. Priorizas detener la hemorragia de confianza sobre el orgullo corporativo.", score: 5, type: "Lead (Escucha y Actúa)" },
      { id: 'C', text: "**Brand Defense:** Publicas un comunicado oficial explicando que los cambios cumplen con los términos de servicio y educas al usuario sobre el valor del nuevo modelo. Defiendes la postura de la empresa ante la desinformación.", score: 1, type: "Sordo (Tone-deaf)" }
    ],
    explanation: "Cuando el rating cae, sube el **CAC** y muere el crecimiento orgánico. **Strategic Silence** permite que la narrativa negativa se consolide. **Brand Defense** valida al atacante. Solo la **Corrección y Transparencia** detiene la crisis demostrando **Accountability** real ante el usuario.",
    learning: {
      topic: 'ethics-compliance',
      concepts: ['dark-patterns', 'user-trust', 'crisis-communication']
    }
  },
  {
    id: 'crisis_investor_demo_failure',
    displayId: 'STR-13',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "Es el día del demo crítico con inversionistas para cerrar la Serie A. 30 minutos antes, el ambiente de staging se cae por un problema de infraestructura. El equipo de ingeniería dice que tomará 2 horas arreglarlo. Los inversionistas ya están en camino.",
    question: "¿Cuál es tu plan de contingencia inmediato?",
    options: [
      { id: 'A', text: "**Gestión de Expectativas:** Reprogramas la demo argumentando que prefieres mostrar el build final con la calidad que merecen. Priorizas la perfección de la presentación sobre la urgencia del calendario.", score: 1, type: "Gestión de Expectativas" },
      { id: 'B', text: "**Demo en Producción:** Usas el ambiente live con usuarios reales y un script ajustado. Asignas monitoreo en tiempo real y demuestras confianza total en el producto que ya está en el mercado.", score: 5, type: "Lead (Improvisa con Confianza)" },
      { id: 'C', text: "**Safe Mode (Slides):** Cancelas el live demo y presentas slides con capturas y videos pregrabados de alta fidelidad. Eliminas cualquier riesgo de error técnico durante la presentación clave.", score: 3, type: "Backup Plan (Menos impacto)" }
    ],
    explanation: "Los VCs invierten en ejecución, no en slides. **Safe Mode** es seguro pero no emociona. **Gestión de Expectativas** (reprogramar) huele a incompetencia operativa. **Demo en Producción** demuestra **Operational Resilience** y audacia, convirtiendo una crisis técnica en una prueba de carácter del liderazgo."
  },
  {
    id: 'crisis_key_designer_quits',
    displayId: 'STR-14',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Users className="w-6 h-6 text-red-600" />,
    scenario: "Tu diseñador estrella, que lidera el rediseño completo del sistema de pagos (60% completado), renuncia abruptamente por una oferta de FAANG. Tiene 2 semanas de notice. El deadline con el cliente no se puede mover.",
    question: "¿Cómo gestionas la transición de conocimiento?",
    options: [
      { id: 'A', text: "**Contraoferta Agresiva:** Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas. Entiendes que el costo de perder el deadline es mayor que el aumento salarial temporal necesario para cerrar el proyecto.", score: -1, type: "Retention Play (Precedente peligroso)" },
      { id: 'B', text: "**Knowledge Transfer Intensivo:** Dedicas sus 2 semanas exclusivamente a documentación, Looms y pair design con el equipo. Sacrificas features nuevas para maximizar la captura de contexto antes de que salga por la puerta.", score: 5, type: "Lead (Minimiza Pérdida)" },
      { id: 'C', text: "**Staff Augmentation:** Contratas un senior freelance urgente para que haga shadowing inmediato. Buscas mantener la velocidad de producción sumando manos expertas que trabajen en paralelo.", score: 1, type: "Costoso (Curva de aprendizaje)" }
    ],
    explanation: "La **Contraoferta** crea mercenarios y rompe la equidad salarial interna. **Staff Augmentation** falla porque la curva de contexto supera las 2 semanas disponibles (**Mythical Man-Month**). El **Knowledge Transfer Intensivo** acepta la pérdida del recurso pero protege el **Intellectual Property** del proyecto."
  },
  {
    id: 'sales_promise_impossible_timeline',
    displayId: 'STR-15',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
    question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
    options: [
      { id: 'A', text: "**Wartime Sprint:** Movilizas al equipo bajo una misión crítica: cerrar el deal de $800K. Reduces el alcance a un MVP funcional y enfocas el 100% de la energía en cumplir la promesa comercial que impulsa el crecimiento.", score: -1, type: "Hustle Culture (Burnout Factory)" },
      { id: 'B', text: "**Renegociación Estructurada:** Ventas y Product ofrecen un plan de entrega por fases (Beta en 3 semanas, Full en 3 meses). Aportas transparencia y profesionalismo para alinear la promesa con la viabilidad técnica.", score: 5, type: "Lead (Realismo Profesional)" },
      { id: 'C', text: "**No-Code Bridge:** Usas Zapier/Make para cumplir la promesa funcionalmente 'por detrás'. Entregas valor inmediato al cliente cumpliendo el plazo, mientras Ingeniería construye la solución real en paralelo.", score: 1, type: "Solución Temporal" }
    ],
    explanation: "Aceptar plazos imposibles (**Wartime Sprint**) genera **Trust Debt** y burnout. El **No-Code Bridge** es un riesgo de seguridad inaceptable en Enterprise. La **Renegociación Estructurada** transforma un 'No' en un roadmap creíble, protegiendo la reputación técnica y la relación comercial."
  },
  {
    id: 'stakeholder_legal_vs_ux_tension',
    displayId: 'STR-16',
    category: "Gestión de Stakeholders",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
    question: "¿Cómo medias entre compliance y experiencia?",
    options: [
      { id: 'A', text: "**Risk Management First:** Aceptas el disclaimer tal cual. En industrias reguladas, la protección contra demandas (Liability) tiene jerarquía sobre la optimización de conversión. Es el costo de hacer negocios.", score: -1, type: "Risk Averse (UX destruida)" },
      { id: 'B', text: "**Co-Design Workshop:** Reúnes a Legal y Product para diseñar alternativas (tooltips, progressive disclosure) que cumplan el requisito legal sin romper la UI. Transformas la demanda legal en un reto de diseño compartido.", score: 5, type: "Lead (Facilitador de Soluciones)" },
      { id: 'C', text: "**Technical Workaround:** Muestras el disclaimer solo una vez (cookie) y lo ocultas después. Reduces la fricción para el usuario recurrente mientras técnicamente cumples con mostrar el texto legal.", score: 1, type: "Workaround (Riesgoso)" }
    ],
    explanation: "Legal no es el enemigo, es una restricción de diseño. **Risk Management First** abdica la UX. El **Technical Workaround** es jugar con fuego regulatorio. El **Co-Design Workshop** alinea objetivos: logra **Compliance** legal a través de una implementación de **User Experience** superior.",
    learning: {
      topic: 'stakeholder-management',
      concepts: ['legal-compliance', 'progressive-disclosure', 'cross-functional-collaboration']
    }
  },
  {
    id: 'strategy_platform_vs_feature_focus',
    displayId: 'STR-17',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Producto quiere convertir el producto en una 'plataforma' con APIs públicas y marketplace. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver. El equipo de ingeniería está dividido.",
    question: "¿Cuál es tu recomendación estratégica al VP?",
    options: [
      { id: 'A', text: "**Visionary Scaling:** Apoyas la transición a plataforma. Argumentas que capturar el ecosistema temprano es la única forma de construir un 'moat' defensivo contra competidores, posicionando a la empresa para crecimiento exponencial.", score: -1, type: "Think Big (Premature Scaling)" },
      { id: 'B', text: "**Sequencing Strategy:** Argumentas que 'primero profundidad, luego amplitud'. Deben dominar el caso de uso core (Product-Market Fit sólido) antes de abrir la superficie de ataque como plataforma.", score: 5, type: "Lead (Secuenciación Estratégica)" },
      { id: 'C', text: "**Compromiso Híbrido:** Propones lanzar solo las APIs públicas como MVP de plataforma, posponiendo el marketplace. Avanzas en la visión estratégica sin comprometer todos los recursos de ingeniería de inmediato.", score: 1, type: "Compromiso (Diluye el foco)" }
    ],
    explanation: "El **Premature Scaling** mata startups. Intentar ser plataforma sin un core sólido es construir sobre arena. El **Compromiso Híbrido** diluye el foco igual. La **Sequencing Strategy** entiende que las plataformas exitosas (Salesforce, Shopify) nacieron como productos excepcionales primero.",
    learning: {
      topic: 'product-strategy',
      concepts: ['premature-scaling', 'product-market-fit', 'sequencing']
    }
  },
  {
    id: 'strategy_competitor_feature_parity',
    displayId: 'STR-18',
    category: "Estrategia de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "El competidor principal acaba de lanzar 10 features nuevas en un mega-release. Product Manager entra en pánico y quiere copiar todas las features para 'no quedarse atrás' en la matriz de comparación.",
    question: "¿Cómo evalúas qué copiar y qué ignorar?",
    options: [
      { id: 'A', text: "**Churn Audit:** Analizas si realmente estás perdiendo clientes por esas features específicas. Usas evidencia de ventas perdidas (o la falta de ella) para filtrar el ruido y priorizar solo lo que impacta el negocio.", score: 5, type: "Lead (Evidence-Based)" },
      { id: 'B', text: "**Market Parity:** Copias las 3 features más visibles para neutralizar la ventaja de marketing del competidor. Aseguras que tu tabla de precios se vea competitiva ante nuevos prospectos.", score: 1, type: "Defensivo (Feature parity race)" },
      { id: 'C', text: "**Strategic Focus:** Ignoras al competidor completamente para mantener el foco en tu roadmap original. Confías en tu visión diferenciada y evitas distraer al equipo con reacciones impulsivas.", score: 1, type: "Dogmático (Puede ser arriesgado)" }
    ],
    explanation: "La paridad es una trampa de **Commoditization**. **Market Parity** te convierte en seguidor. **Strategic Focus** ciego puede ser arrogante. El **Churn Audit** utiliza datos para distinguir entre 'ruido de marketing' y 'amenaza existencial', aplicando **Evidence-Based Management**."
  },
  {
    id: 'arquitectura_monorepo_vs_separate_systems',
    displayId: 'STR-19',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían centralizar.",
    question: "¿Cuál es tu estrategia de consolidación?",
    options: [
      { id: 'A', text: "**Decentralized Agility:** Mantienes los sistemas separados. Permites que cada equipo optimice para su tecnología y velocidad sin dependencias externas, priorizando la autonomía de los squads.", score: 1, type: "Silos (Duplicación eterna)" },
      { id: 'B', text: "**Federated Architecture (Core + Extensions):** Creas una librería base compartida (Tokens, Primitivos) y permites extensiones específicas por producto. Balanceas la eficiencia central con la flexibilidad local.", score: 5, type: "Lead (Shared Foundation)" },
      { id: 'C', text: "**Unified Monolith:** Implementas un único 'One System to Rule Them All'. Garantizas consistencia visual absoluta en todos los puntos de contacto de la marca forzando la adopción de un estándar único.", score: 3, type: "Rígido (No refleja realidad)" }
    ],
    explanation: "El **Unified Monolith** se vuelve un cuello de botella rígido. La **Decentralized Agility** perpetúa deuda y silos. La **Federated Architecture** aplica el principio de **Loose Coupling**: comparte lo esencial (Core), permite libertad en lo específico."
  },
  {
    id: 'migracion_forced_upgrade_user_backlash',
    displayId: 'STR-20',
    category: "Estrategia de Migración",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "Lanzas V2 del producto y fuerzas la migración. El 30% de los power users están furiosos porque removiste features 'legacy' que usaban diariamente.",
    question: "¿Cómo gestionas la migración forzada?",
    options: [
      { id: 'A', text: "**Visionary Leadership:** Mantienes el curso. 'La gente odia el cambio, pero amará la V2'. Confías en que la superioridad del nuevo producto eventualmente convertirá a los detractores.", score: -1, type: "Steve Jobs Trap (Churn garantizado)" },
      { id: 'B', text: "**Responsive Roadmap:** Validar qué features faltantes son críticas y comprometerse públicamente a reintroducirlas en V2 a corto plazo. Muestras empatía y flexibilidad sin revertir la migración.", score: 5, type: "Lead (Responsive Migration)" },
      { id: 'C', text: "**Legacy Access:** Mantienes la V1 accesible indefinidamente para quienes no quieran migrar. Respetas la preferencia del usuario y evitas el churn inmediato manteniendo ambas opciones.", score: 1, type: "Parche (Duplica mantenimiento)" }
    ],
    explanation: "Ignorar a los Power Users (**Visionary Leadership**) es arrogancia que cuesta caro. **Legacy Access** duplica tu costo de mantenimiento para siempre. **Responsive Roadmap** gestiona la relación a través de **Feedback Loops**, validando el dolor del usuario mientras mantienes la dirección estratégica."
  },
  {
    id: 'migracion_sunset_product_line',
    displayId: 'STR-21',
    category: "Estrategia de Migración",
    icon: <XCircle className="w-6 h-6 text-red-600" />,
    scenario: "Discontinuas un producto con 500 usuarios leales. Tienes 6 meses para migrarlos al producto principal (que no tiene feature parity) o perderlos.",
    question: "¿Cuál es tu estrategia de sunset?",
    options: [
      { id: 'A', text: "**Clean Break:** Comunicas la fecha de cierre con transparencia y antelación. Permites que la empresa enfoque todos sus recursos en el futuro, eliminando distracciones legacy de forma definitiva.", score: -1, type: "Efficiency (Churn 100%)" },
      { id: 'B', text: "**Retention Migration:** Asignas un equipo 'Concierge' para construir los gaps críticos y asistir la migración. Tratas el sunset como un proyecto de retención de revenue, no solo de cierre técnico.", score: 5, type: "Lead (Retención Activa)" },
      { id: 'C', text: "**Financial Compensation:** Ofreces descuentos agresivos (50% off) en el nuevo producto. Utilizas incentivos económicos para suavizar la fricción de la pérdida funcional.", score: 1, type: "$$$ (No resuelve el gap)" }
    ],
    explanation: "El **Clean Break** destruye reputación. La **Financial Compensation** es un curita. **Retention Migration** entiende que el costo de retener un cliente (incluso construyendo features gap) es menor que el **CAC** de adquirir nuevos. Es gestión de activos, no solo ingeniería."
  },
  {
    id: 'manageup_ceo_designs_features',
    displayId: 'STR-22',
    category: "Manage Up",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "El CEO (ex-diseñador) diseña un 'Tab de Notificaciones' directamente en producción y pide lanzarlo. Rompe 4 patterns del sistema y no tiene validación de usuario.",
    question: "¿Cómo manejas al CEO que bypasea el proceso?",
    options: [
      { id: 'A', text: "**Process Defense:** Confrontas la violación del proceso para proteger la integridad del sistema. Estableces límites claros sobre la gobernanza de diseño, independientemente del cargo.", score: 1, type: "Valiente / Incorrect" },
      { id: 'B', text: "**Political Judo (Validate & Redirect):** Agradeces el 'prototipo de alta fidelidad' y propones una sesión de refinamiento técnico. Validas su aporte pero reinsertas el trabajo en el flujo de calidad normal.", score: 5, type: "Lead (Manage Up)" },
      { id: 'C', text: "**Silent Execution:** Implementas el diseño tal cual. El CEO es el stakeholder final y eliges tus batallas, priorizando la armonía política sobre la pureza del sistema.", score: 1, type: "Obediente / Incorrect" }
    ],
    explanation: "**Process Defense** te vuelve un burócrata. **Silent Execution** destruye calidad. **Political Judo** redefine la acción del CEO como un 'input' en lugar de una 'orden', protegiendo el producto y el ego del ejecutivo simultáneamente.",
    learning: {
      topic: 'stakeholder-management',
      concepts: ['manage-up', 'political-judo', 'executive-communication']
    }
  },
  {
    id: 'manageup_cfo_design_system_roi',
    displayId: 'STR-23',
    category: "Manage Up",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Necesitas $120K para un Design Systems Engineer. El CFO pregunta: '¿Cuál es el ROI? Los devs ya tienen librerías'. Tienes que justificar el budget.",
    question: "¿Cómo traduces el valor del Design System a lenguaje de negocio?",
    options: [
      { id: 'A', text: "**Quality & Craft Argument:** Explicas cómo el sistema asegura consistencia visual y excelencia de marca. Apelas al valor intangible de la calidad percibida como diferenciador de mercado.", score: -1, type: "Craft Argument (No convence)" },
      { id: 'B', text: "**Efficiency Calculator:** Presentas el ahorro en horas de ingeniería (Velocity). 'Cada componente ahorra 4h. 100 componentes = 2 FTEs liberados'. Traduces consistencia en dinero ahorrado.", score: 5, type: "Lead (Business Case)" },
      { id: 'C', text: "**Industry Standard:** Muestras que Uber, Airbnb y Google tienen equipos dedicados. Argumentas que para competir al mismo nivel, la empresa debe adoptar las mejores prácticas de la industria.", score: 1, type: "Social Proof (Débil)" }
    ],
    explanation: "El CFO habla Excel, no Figma. **Quality & Craft** es irrelevante en el P&L. **Efficiency Calculator** conecta el Design System con **OPEX Reduction** y **Time-to-Market**, métricas que justifican la inversión financiera.",
    learning: {
      topic: 'stakeholder-management',
      concepts: ['business-case', 'roi-justification', 'design-value']
    }
  },
  {
    id: 'manageup_cto_designers_should_code',
    displayId: 'STR-24',
    category: "Manage Up",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "El CTO dice: 'Los diseñadores que no codean son menos valiosos'. Tu equipo es visual/estrategico. Varios temen por su empleo.",
    question: "¿Cómo defiendes la especialización del equipo?",
    options: [
      { id: 'A', text: "**Skill Expansion:** Organizas capacitación en React para el equipo. Intentas cerrar la brecha técnica para alinear al equipo con las expectativas modernas de la ingeniería.", score: 1, type: "Appeasement (Distrae del core)" },
      { id: 'B', text: "**Role Clarity:** Defiendes la especialización: 'El valor del diseño es resolver el problema correcto, el código es la implementación'. Reafirmas que la división de trabajo genera mayor calidad en ambas puntas.", score: 5, type: "Lead (Claridad de roles)" },
      { id: 'C', text: "**Structural Hiring:** Propones contratar un 'Design Engineer' puente. Resuelves la fricción operativa con un rol híbrido sin forzar a los diseñadores actuales a cambiar su perfil.", score: 3, type: "Estructural (Parche)" }
    ],
    explanation: "Forzar a todos a codear (**Skill Expansion**) crea generalistas mediocres. **Role Clarity** establece el valor de la **Especialización**: un gran investigador vale más que un mal desarrollador de frontend. Defiende el **Core Competency** de tu disciplina.",
    learning: {
      topic: 'team-leadership',
      concepts: ['role-clarity', 'specialization', 'design-engineering']
    }
  },
  {
    id: 'political_ma_duplicate_teams_layoffs',
    displayId: 'STR-25',
    category: "Crisis Política Organizacional",
    icon: <AlertOctagon className="w-6 h-6 text-red-700" />,
    scenario: "Adquisición de empresa. Ahora hay 2 equipos de diseño duplicados. Tienes que proponer el nuevo organigrama unificado reduciendo headcount.",
    question: "¿Cómo decides quién se queda?",
    options: [
      { id: 'A', text: "**Meritocracia Ciega:** Evalúas a todos bajo el mismo estándar de skills, sin importar el origen. Construyes el mejor equipo posible, asumiendo el costo de despedir a gente leal de tu propio equipo original.", score: 5, type: "Lead (Doloroso pero justo)" },
      { id: 'B', text: "**Legacy Protection:** Priorizas a tu equipo original porque ya conocen la cultura y sistemas. Aseguras la continuidad operativa y proteges a tu gente, minimizando el riesgo de onboarding.", score: 1, type: "Tribal (Injusto)" },
      { id: 'C', text: "**Diplomatic Balance:** Propones un mix 50/50 para integrar ambas culturas. Buscas la paz política y envías una señal de unidad, equilibrando la representación de ambas empresas.", score: 3, type: "Diplomático (Evita meritocracia)" }
    ],
    explanation: "En M&A, el **Tribalismo** (**Legacy Protection**) destruye valor. La **Diplomacia** (**Balance**) prioriza la óptica sobre el desempeño. La **Meritocracia Ciega** es dolorosa pero es la única vía para construir un equipo de alto rendimiento, evitando la deuda de talento."
  },
  {
    id: 'enterprise_client_custom_request',
    displayId: 'STR-26',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Tu cliente Enterprise más grande (Banco LATAM que representa el 40% de tu ARR total - Riesgo de Concentración crítico) exige una feature ultra-customizada o se va. Es inútil para otros clientes.",
    question: "¿Cómo evalúas la solicitud?",
    options: [
      { id: 'A', text: "**Revenue First:** Construyes la feature inmediatamente en el core product. Proteges el 40% del ARR entendiendo que perder este cliente es cerrar la empresa. La supervivencia financiera habilita cualquier estrategia futura.", score: 1, type: "Revenue-first (Consultora)", decisionSummary: "Construiste la feature custom directamente en el core product." },
      { id: 'B', text: "**Professional Services Model:** Ofreces construirlo como proyecto custom con costo adicional, mantenido fuera del core. Monetizas la necesidad sin contaminar el roadmap del producto SaaS, aislando la complejidad.", score: 5, type: "Lead (ROI-based decision)", decisionSummary: "Ofreciste construirlo como proyecto custom separado del core." },
      { id: 'C', text: "**SaaS Purity:** Rechazas la solicitud ofreciendo APIs abiertas. Mantienes la disciplina de producto, evitando convertir la empresa en una consultora de desarrollo a medida.", score: -1, type: "Principios (Suicidio empresarial)", decisionSummary: "Rechazaste al cliente que representa 40% del ARR por pureza SaaS." }
    ],
    explanation: "Con 40% del ARR en juego, **SaaS Purity** es suicidio empresarial. Pero construirlo en el core (**Revenue First**) te convierte en consultora y crea deuda técnica permanente. El **Professional Services Model** es la única salida viable: aísla la complejidad custom, captura valor adicional, y protege el **Product Roadmap** mientras retienes al cliente.",
    learning: {
      topic: 'product-strategy',
      concepts: ['professional-services', 'revenue-concentration', 'saas-vs-consulting']
    }
  },
  {
    id: 'pricing_page_complexity',
    displayId: 'STR-27',
    category: "Estrategia de Producto",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Página de Pricing con 5 planes y tabla de 30 features. Bounce rate del 60%. Usuarios paralizados.",
    question: "¿Cómo simplificas la decisión de compra?",
    options: [
      { id: 'A', text: "**Interactive Guidance:** Implementas un 'Plan Finder Quiz' que recomienda la opción ideal. Ayudas al usuario a navegar la complejidad mediante personalización asistida.", score: 1, type: "Fricción adicional" },
      { id: 'B', text: "**Choice Architecture (Good-Better-Best):** Reduces a 3 opciones claras y ocultas los detalles técnicos. Aplicas psicología conductual para eliminar la parálisis por análisis y facilitar la comparación.", score: 5, type: "Lead (Paradox of Choice)" },
      { id: 'C', text: "**Social Nudge:** Agregas etiquetas de 'Más Popular' para guiar la atención. Utilizas la prueba social para influenciar la decisión sin necesidad de reestructurar la oferta comercial.", score: 3, type: "Nudge (Parcial)" }
    ],
    explanation: "La **Paradoja de la Elección** mata la conversión. Guías interactivas (**Quiz**) añaden pasos. **Choice Architecture** (reducir a 3 opciones) ataca la raíz cognitiva del problema: simplificar la oferta es más potente que explicar una oferta compleja."
  },
  {
    id: 'political_founder_conflict_design_caught',
    displayId: 'STR-28',
    category: "Crisis Política Organizacional",
    icon: <Shield className="w-6 h-6 text-orange-700" />,
    scenario: "El CEO y el CTO llevan 3 semanas en guerra fría: el CEO quiere pivotar a B2B Enterprise ('El dinero real está en contratos de $100K'), mientras el CTO defiende B2C ('Tenemos 50K usuarios, no los abandonemos'). Ambos te han pedido diseños para sus respectivas visiones, y tu equipo de 4 diseñadores está paralizado sin saber qué priorizar. El último sprint se perdió en reuniones de alineación que terminaron en gritos. El runway es de 6 meses y cada semana sin dirección clara quema $40K.",
    question: "¿Cómo navegas el conflicto de founders?",
    options: [
      { id: 'A', text: "**Parallel Prototyping:** Divides recursos para explorar ambas visiones. Generas tangibles para que la discusión sea sobre prototipos reales y no sobre ideas abstractas.", score: 3, type: "Neutral (Desperdicia recursos)" },
      { id: 'B', text: "**Strategic Freeze (Forzar Alineación):** Detienes el diseño y facilitas un workshop de decisión con data. Te niegas a quemar recursos hasta que haya una estrategia unificada clara.", score: 5, type: "Lead (Lidera hacia arriba)" },
      { id: 'C', text: "**Side Taking:** Apuestas por la visión que consideras ganadora (B2B). Aportas tu criterio experto para desbloquear al equipo y avanzar en una dirección concreta.", score: 1, type: "Valiente (Suicida)" }
    ],
    explanation: "Diseñar sin estrategia es arte, no producto. **Parallel Prototyping** desperdicia el 50% del esfuerzo. **Side Taking** es suicidio político. **Strategic Freeze** obliga a los founders a resolver su **Leadership Debt** antes de que el equipo pague los platos rotos."
  },
  {
    id: 'political_vp_product_fired_interim_no_design',
    displayId: 'STR-29',
    category: "Crisis Política Organizacional",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "VP de Producto despedido. El CFO es 'Interim Head'. No entiende diseño y sugiere usar templates y cortar research.",
    question: "¿Cómo proteges al equipo bajo un líder hostil?",
    options: [
      { id: 'A', text: "**Chain of Command Override:** Buscas audiencia con el CEO para exponer el riesgo. Actúas como guardián de la cultura de producto saltando la jerarquía temporal.", score: 3, type: "Valiente (Riesgoso)" },
      { id: 'B', text: "**Financial Translation:** Conectas cada iniciativa de diseño con métricas financieras (Churn, Conversión). Hablas el idioma del CFO para validar la inversión en diseño como motor de eficiencia.", score: 5, type: "Lead (Bridge de lenguajes)" },
      { id: 'C', text: "**Compliance Mode:** Acatas las directrices temporales para evitar conflictos. Proteges al equipo manteniendo bajo perfil hasta que se contrate al nuevo VP permanente.", score: 3, type: "Supervivencia (Pierde valor)" }
    ],
    explanation: "El CFO ve costos, tú vendes valor. **Compliance Mode** valida que el diseño es prescindible. **Override** es políticamente peligroso. **Financial Translation** convierte el diseño de 'gasto estético' a 'herramienta de rentabilidad', asegurando la supervivencia del departamento."
  },
  {
    id: 'merger_design_system_civil_war',
    displayId: 'STR-30',
    category: "Arquitectura de Sistemas (M&A)",
    icon: <Layers className="w-6 h-6 text-red-700" />,
    scenario: "Tras la fusión, tienes dos Design Systems: 'Titan' (React, feo pero accesible y estable) y 'Nova' (Vue, hermoso pero lleno de bugs y sin a11y). El CMO exige el look de Nova. El CTO exige la estabilidad de Titan. Los equipos se odian y se niegan a migrar. Debes elegir la base para el Q3.",
    question: "¿Cuál es tu estrategia de unificación en terreno hostil?",
    options: [
      { id: 'A', text: "**Visual Wrapper (Theming):** Mantienes la base de código de Titan (infraestructura sólida) pero aplicas encima los Design Tokens visuales de Nova. Satisfaces al CMO (estética) y al CTO (estabilidad), aunque fuerzas al equipo de Nova a abandonar su código.", score: 5, type: "Lead (Pragmatismo Arquitectónico)", decisionSummary: "Elegiste migración gradual con Visual Wrapper sobre infraestructura estable." },
      { id: 'B', text: "**Best of Both Worlds:** Creas un tercer sistema nuevo ('Genesis') tomando los mejores componentes de cada uno. Prometes un inicio limpio que unifica a los equipos en una misión compartida, eliminando deuda heredada.", score: 1, type: "Idealista (Tercer Sistema)", decisionSummary: "Propusiste crear un tercer sistema desde cero combinando ambos." },
      { id: 'C', text: "**Nova Evolution:** Adoptas Nova como base porque el 'Look & Feel' es lo que vende. Asignas recursos masivos para arreglar sus bugs y accesibilidad sobre la marcha. Priorizas el momentum de mercado sobre la pureza técnica.", score: 3, type: "Market-Driven (Riesgo Técnico)", decisionSummary: "Adoptaste el sistema visualmente atractivo pero técnicamente inestable." }
    ],
    explanation: "Crear un tercer sistema (**Best of Both Worlds**) garantiza 2 años sin delivery. Adoptar el sistema 'bonito pero roto' (**Nova**) hipoteca el futuro. La jugada maestra es **Visual Wrapper**: infraestructura sólida (**Titan**) vestida con la marca ganadora, minimizando el riesgo técnico."
  },
  {
    id: 'feature_flag_debt_bankruptcy',
    displayId: 'STR-31',
    category: "Deuda Técnica",
    icon: <Code className="w-6 h-6 text-slate-600" />,
    scenario: "Tu producto tiene 140 'Feature Flags' activos; algunos de hace 2 años. La matriz de combinaciones es imposible de testear (2^140). Ayer, una combinación rara causó un error de facturación silencioso en Enterprise. Engineering pide 'Flag Freeze' de 1 mes. Product dice que el roadmap no puede parar.",
    question: "¿Cómo saneas la configuración sin detener el negocio?",
    options: [
      { id: 'A', text: "**Política de Caducidad (TTL):** Estableces una regla de 'Time-to-Live' de 45 días para todo flag nuevo. Si no se limpia, el sistema alerta o bloquea deploys. Frenas el sangrado futuro inmediatamente.", score: 3, type: "Gobernanza Futura (No limpia el pasado)" },
      { id: 'B', text: "**Taxonomía de Flags:** Separas 'Release Flags' (temporales) de 'Permission Flags' (permanentes). Asignas un squad 'Janitor' al 20% de capacidad para eliminar flags temporales viejos en cada sprint, pagando la deuda progresivamente.", score: 5, type: "Lead (Limpieza Estructural)" },
      { id: 'C', text: "**Cleanup Sprint:** Autorizas la pausa de 1 mes. El riesgo de facturación es existencial. Un mes de roadmap perdido es preferible a perder la confianza de clientes Enterprise por errores aleatorios.", score: 1, type: "Reactivo (Drástico)" }
    ],
    explanation: "Parar el roadmap (**Cleanup Sprint**) es políticamente inviable. Solo poner reglas (**TTL**) no limpia la basura actual. La **Taxonomía de Flags** distingue deuda (release) de infraestructura (permission), y la **Jardinería Constante** paga la deuda sin quebrar el momentum."
  }
];
