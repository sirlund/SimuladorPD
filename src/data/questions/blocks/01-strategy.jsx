import React from 'react';
import {
  Timer, AlertTriangle, CheckCircle, XCircle, ArrowRight,
  BarChart2, ShieldAlert, Users, Layers, Brain, Zap,
  Search, MessageSquare, Briefcase, FileText, Globe,
  Lock, Heart, RefreshCw, Target, Code, Play, Star,
  Smartphone, Coffee, AlertOctagon, Trophy, RotateCcw,
  TrendingUp, Shield, Scale, Bug, DollarSign, Languages,
  Palette, Wifi,
} from 'lucide-react';

/**
 * Estrategia, Sistemas & Liderazgo
 */
export const strategy_questions = [

  // --- BLOQUE 1: ESTRATEGIA, NEGOCIO & MÉTRICAS ---
  {
    id: 'strategy_pivot_burnout',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en la funcionalidad 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales' por una necesidad crítica de flujo de caja. El equipo de diseño está visiblemente furioso y desmotivado. Tu runway es de solo 4 meses.",
    question: "¿Cuál es tu primer movimiento como Lead para gestionar esta crisis?",
    options: [
      { id: 'A', text: "Gestión de Cambio Radical: Reúnes al equipo de inmediato, validas su frustración ('Esto apesta y tienen razón'), pero explicas con total transparencia la razón financiera de supervivencia detrás del cambio. Re-enfocas la energía en el nuevo desafío hoy mismo, aunque requiere que inviertas capital político asumiendo el dolor del equipo.", score: 5, type: "Lead (Resiliencia)" },
      { id: 'B', text: "Protección del Talento: Negociar con el CEO una semana de 'cooldown' dedicada a documentar aprendizajes del proyecto cancelado y realizar una transición estructurada, pero arriesgas que el runway de 4 meses se convierta en 3.5 por la falta de velocidad inmediata.", score: 3, type: "Protector (Empático)" },
      { id: 'C', text: "Cierre con Dignidad: Organizas una sesión de 'Retrospectiva de Aprendizaje' el lunes donde el equipo presenta al CEO qué descubrieron en Cobranza Automática que podría aplicarse a futuro, a costa de posponer 3 días críticos de ejecución en el nuevo proyecto.", score: 3, type: "Cultural (Demora)" }
    ],
    explanation: "Con un Runway crítico de 4 meses, la velocidad de ejecución es supervivencia. La Gestión de Cambio Radical valida la emoción pero prioriza la solvencia financiera inmediata, actuando como un amortiguador de realidad para el equipo. La Protección del Talento mediante un 'cooldown' es una práctica excelente en tiempos de paz, pero un lujo fatal en tiempos de guerra (Wartime Leadership). Buscar un Cierre con Dignidad mediante retrospectivas prioriza el proceso sobre la urgencia del negocio, arriesgando la viabilidad de la empresa."
  },
  {
    id: 'metrics_vanity_vs_reality',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona para que 'no arruines la fiesta'.",
    question: "¿Cómo gestionas la discrepancia de métricas sin iniciar una guerra con Marketing?",
    options: [
      { id: 'A', text: "Alineación Privada: Reúnes a VP y CMO antes del QBR. Muestras el funnel completo (Tráfico subió, Revenue bajó). Acuerdan presentar ambos datos como 'Aprendizaje de Calidad' para ajustar la estrategia sin culpas, aunque tendrás que invertir capital político mediando la conversación incómoda.", score: 5, type: "Lead (Diplomacia basada en datos)" },
      { id: 'B', text: "Desmentir en Público: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico basura no paga sueldos'. Proteges la verdad financiera inmediata, pero arriesgas quemar puentes con Marketing que necesitarás en futuras colaboraciones.", score: 1, type: "Riesgo cultural (Verdad sin tacto)" },
      { id: 'C', text: "Silencio Táctico: Dejas que celebren. En tu reporte, te enfocas solo en optimizar el checkout flow para mejorar las métricas bajo tu control, a costa de permitir que la empresa tome decisiones estratégicas basadas en Vanity Metrics.", score: 1, type: "Silo funcional" }
    ],
    explanation: "El tráfico sin conversión es una Vanity Metric clásica: se ve bien en slides pero no impacta Unit Economics. Tu rol es ser el guardián de la verdad financiera sin destruir capital político. La Alineación Privada permite corregir la narrativa de negocio (Revenue > Tráfico) en el foro adecuado, transformando el conflicto en aprendizaje compartido. La estrategia de Desmentir en Público protege la verdad del dato pero quema puentes relacionales necesarios para futuras colaboraciones. El patrón de Silencio Táctico es negligencia estratégica: permite que la empresa tome decisiones de inversión basadas en datos incompletos que no reflejan la realidad del negocio."
  },
  {
    id: 'sales_custom_demands',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El Head of Sales está cerrando un contrato Enterprise clave para cumplir la meta del Q. El cliente exige ver un demo el sábado con su branding (colores y logo) hardcodeado. Tu Design System no soporta theming aún. Sales dice: 'Si no ven su logo, no firman'. El VP de Producto te pregunta si podemos hacer una excepción técnica rápida.",
    question: "¿Cómo respondes al pedido de 'hackear' el demo?",
    options: [
      { id: 'A', text: "Hardcode Aislado (Disposable Demo): Creas una rama separada o un prototipo en código 'sucio' SOLO para el demo, con disclaimer claro de que no es producción. Permites la venta sin contaminar el codebase real, aunque tendrás que invertir 4-6 horas de desarrollo desechable que no suma al producto.", score: 5, type: "Lead (Habilita negocio sin deuda técnica)" },
      { id: 'B', text: "Negarse por Principios: 'No hardcodeamos clientes. El sistema es escalable o no lo es'. Proteges la arquitectura técnica inmediata, pero arriesgas perder un deal Enterprise que podría financiar 2 trimestres de desarrollo.", score: 1, type: "Bloqueador (Falta visión comercial)" },
      { id: 'C', text: "Implementar en Prod: Hardcodeas el branding en producción usando feature flags para ese cliente específico. Sales cierra el deal con demo real inmediatamente, a costa de introducir deuda técnica y personalización insostenible en el codebase.", score: 1, type: "Quick win approach" }
    ],
    explanation: "Ventas necesita cerrar e Ingeniería necesita orden. El Hardcode Aislado satisface ambos: entrega la herramienta de venta (el demo visual) protegiendo la integridad del sistema mediante una rama desechable (Technical Hygiene). Negarse por principios (Bloqueador) ignora la realidad comercial de que sin ventas no hay producto. Implementar en Prod introduce Deuda Técnica inmediata y sienta un precedente peligroso de personalización insostenible."
  },
  {
    id: 'okr_conflict_dashboard',
    category: "Gestión de OKRs",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Ventas exige un dashboard de 'Activity Tracking' para monitorear a sus agentes minuto a minuto. El VP de Producto se opone: 'Nuestros OKRs son de eficiencia, no de vigilancia policial'. Estás atrapado en medio.",
    question: "¿Cómo reasignas recursos con el quarter literalmente terminándose?",
    options: [
      { id: 'A', text: "Obediencia Comercial: Diseñas lo que pide Ventas inmediatamente. Entregas el dashboard de vigilancia solicitado para cumplir con la urgencia del Q, a costa de comprometer la cultura de autonomía y confianza del equipo de ventas.", score: 1, type: "Mercenario" },
      { id: 'B', text: "Workshop de Alineación: 'Diseñemos para el Outcome (Ventas), no el Output (Minutos)'. Proponer métricas de éxito que no requieran vigilancia invasiva, aunque tendrás que facilitar una conversación difícil entre dos VPs con agendas opuestas.", score: 5, type: "Lead (Outcome-Driven)" },
      { id: 'C', text: "Escalación Burocrática: Elevas el conflicto al CEO pidiendo que arbitre entre los dos VPs. Detienes el trabajo hasta tener una resolución formal por escrito, pero arriesgas paralizar el cierre del Q mientras esperas una decisión ejecutiva.", score: 1, type: "Burocrático" }
    ],
    explanation: "Con el cierre del Q inminente, la parálisis es el enemigo. El Workshop de Alineación cambia la conversación de 'Output' (minutos rastreados) a 'Outcome' (ventas cerradas), aplicando el principio de Ruthless Prioritization: enfocarse en lo que mueve el negocio. La estrategia de Obediencia Comercial cede a la presión política sin considerar el Opportunity Cost cultural. El patrón de Escalación Burocrática delega la responsabilidad hacia arriba, mostrando incapacidad de resolución de conflictos a nivel Lead."
  },

  // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
  {
    id: 'tokens_vs_hardcode_pressure',
    category: "Ingeniería de Diseño",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Estamos a jueves a las 3 PM y hay prisa extrema por lanzar el viernes antes del mediodía (demo con inversor clave). Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después. Configurar los tokens correctamente tomaría 3-4 horas adicionales.",
    question: "¿Cuál es tu postura ante la deuda técnica?",
    options: [
      { id: 'A', text: "Compromiso Controlado: Que usen variables SCSS genéricas ($blue-500, $gray-800) en lugar de hex codes. No es semántico pero entregas el demo a tiempo, a costa de mantener deuda técnica semántica en el sistema de estilos.", score: 3, type: "Operativo (Parche aceptable)" },
      { id: 'B', text: "Negarse rotundamente. Hardcodear bloquea Dark Mode y futuros cambios de branding. El costo de refactorizar después es 10x mayor. Te sientas con ellos ahora mismo a configurar los tokens básicos, aunque tendrás que trabajar hasta las 7 PM y arriesgar malestar del equipo.", score: 5, type: "Lead (Visión Sistémica)" },
      { id: 'C', text: "Autorización con Deuda Registrada: Permites el hardcode por la urgencia del demo. Creas inmediatamente un ticket P0 de 'Refactor CSS' asignado al siguiente sprint, pero arriesgas que este trabajo nunca se priorice frente a features que generan revenue.", score: 1, type: "Pragmático (Alto riesgo)" }
    ],
    explanation: "La deuda de diseño tiene interés compuesto. Negarse y configurar tokens invierte unas horas hoy para evitar semanas de refactorización mañana (especialmente ante Dark Mode o Rebranding). El Compromiso Controlado (SCSS variables) es un parche aceptable pero sigue generando deuda semántica. La Autorización con Deuda Registrada es una trampa clásica: los tickets de refactor post-lanzamiento rara vez se priorizan frente a nuevos features."
  },
  {
    id: 'legacy_ui_refactor_strategy',
    category: "Estrategia de Migración",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "El producto tiene 4 estilos de botones legacy (Angular, React, jQuery, Vanilla). Unificar implica riesgo de bugs; NPS cayó 6 puntos (52→46) y clientes perciben inconsistencia. CEO y VP de Engineering advierten que un refactor masivo tomaría 8‑12 semanas y podría afectar la estabilidad del 40% del producto. Board revisa en 3 semanas.",
    question: "¿Cuál es tu estrategia de limpieza con NPS cayendo y Board evaluando pronto?",
    options: [
      { id: 'A', text: "Estrategia 'Boy Scout Rule': Acuerdo formal con CTO para que cada vez que se toque un archivo legacy, sea obligatorio actualizar componentes (Definition of Done). Migración progresiva que no detiene el roadmap, aunque tendrás que invertir capital político negociando este overhead de tiempo en cada ticket.", score: 5, type: "Lead (Incremental sistemático)" },
      { id: 'B', text: "Forward Only + Narrativa: Aplicar nuevo sistema SOLO en features nuevas. Comunicar externamente que es una 'Brand Evolution' gradual para mantener el velocity de entrega, a costa de perpetuar la inconsistencia y confusión del usuario ante 4 estilos diferentes.", score: 3, type: "Pragmático con spin de marketing (Apuesta arriesgada)" },
      { id: 'C', text: "Design Debt Sprint: Presentar business case (NPS = Churn) para pausar features no-críticas por 2 semanas y unificar las top 20 pantallas. Prometes recuperación rápida de confianza, pero arriesgas que el Board perciba 2 semanas sin features como señal de problemas operativos más graves.", score: 1, type: "Bold con riesgo político (Promesa difícil de cumplir)" }
    ],
    explanation: "Los sprints dedicados a deuda técnica (Design Debt Sprint) rara vez se aprueban porque no generan revenue visible inmediato. La estrategia 'Boy Scout Rule' es la única sostenible a largo plazo: paga deuda técnica progresivamente como parte del costo de hacer negocios, sin detener la operación. La estrategia Forward Only valida la inconsistencia, confundiendo al usuario y manteniendo la deuda legacy indefinidamente."
  },
  {
    id: 'component_complexity_detach',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El componente 'Card' de tu Design System en Figma tiene 156 variantes (8 tipos × 3 tamaños × 5 estados × 2 temas + edge cases). Tarda 6-8 segundos en cargar cada vez que alguien lo inserta. En la última auditoría descubriste que el 68% de los diseños nuevos usan 'detach' del componente para trabajar más rápido, rompiendo completamente la consistencia del sistema. Los diseñadores se quejan en retrospectivas que el componente es 'demasiado complejo' y prefieren trabajar con copias locales.",
    question: "¿Cómo resuelves el problema de adopción sin perder la arquitectura del sistema?",
    options: [
      { id: 'A', text: "Refactor de Arquitectura: Auditas y simplificas el componente usando Component Properties modernas de Figma (boolean toggles, instance swap, variant reduction). Reduces de 156 a 40-50 variantes manteniendo flexibilidad, aunque tendrás que invertir 2-3 días de rediseño y migración de archivos existentes.", score: 5, type: "Lead (Optimización sistémica)" },
      { id: 'B', text: "Especialización de Componentes: Divides 'Card' en 4 componentes especializados (Card-Content, Card-User, Card-Product, Card-Feature) con 30-40 variantes cada uno. Reduces complejidad cognitiva individual, a costa de aumentar la cantidad de componentes y fragmentar el mantenimiento futuro.", score: 3, type: "Fragmentación controlada" },
      { id: 'C', text: "Governance + Training: Estableces code reviews de Figma obligatorios donde rechazas archivos con detach. Organizas capacitación mensual sobre uso correcto del componente, pero arriesgas convertirte en cuello de botella del equipo sin resolver el problema de usabilidad raíz.", score: 1, type: "Evita confrontación (No resuelve raíz)" }
    ],
    explanation: "Si un componente requiere un manual o fuerza al 'detach', está mal diseñado. El Refactor de Arquitectura ataca la causa raíz (over-engineering) simplificando el uso. La Especialización de Componentes fragmenta el sistema, dificultando el mantenimiento futuro. Intentar solucionar un problema de usabilidad del sistema con Governance + Training es culpar al usuario (los diseñadores) por un fallo de la herramienta."
  },
  {
    id: 'mobile_first_habit_change',
    category: "Design Ops",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "El equipo diseña en Desktop y 'adapta' a Mobile al final, generando UX móvil pobre. 72% del tráfico es móvil. Los workshops educativos fallaron. El CEO exige resultados inmediatos tras ver una demo rota en su iPhone. Tienes 2 semanas para cambiar un hábito cultural arraigado.",
    question: "¿Cómo fuerzas el cambio de comportamiento cuando la educación falló y tu performance está en juego?",
    options: [
      { id: 'A', text: "Environment Nudge: Cambias los defaults de Figma a mobile (375px) y eliminas templates desktop. Haces que diseñar mobile-first sea el camino de menor resistencia, aunque tendrás que actualizar templates y librerías en una tarde de configuración.", score: 5, type: "Lead (Behavioral design del sistema)" },
      { id: 'B', text: "Quality Gate: Rechazas cualquier diseño en Review que no presente mobile primero. Sin mobile, no se aprueba nada. Aplicás enforcement estricto que garantiza compliance inmediato, a costa de convertirte en vigilante permanente y generar fricción con el equipo.", score: 3, type: "Process enforcement con accountability (Autoridad directa)" },
      { id: 'C', text: "Incentivos: Ligas 'Mobile-First' a las evaluaciones de desempeño. Quien adopte mobile recibe mejores proyectos. Alineas comportamiento con recompensas, pero arriesgas generar competencia interna en lugar de colaboración cultural.", score: 3, type: "Incentive-based con stakes de carrera (Puede generar resentimiento)" }
    ],
    explanation: "La educación pasiva ya falló. El Environment Nudge aplica 'Behavioral Design' al equipo: al cambiar el entorno para que lo correcto sea lo más fácil, moldeas el hábito sin fricción constante. Los Quality Gates funcionan pero requieren vigilancia policial perpetua. Los Incentivos punitivos pueden generar resentimiento y competencia interna tóxica en lugar de colaboración."
  },

  // --- BLOQUE 3: LIDERAZGO, CULTURA & PERSONAS ---
  {
    id: 'senior_toxic_genius_feedback',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
    question: "¿Cómo procedes con este perfil?",
    options: [
      { id: 'A', text: "Mediación Activa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce. Conservas su talento técnico valioso, a costa de convertirte en su filtro permanente y validar implícitamente su comportamiento.", score: 3, type: "Parche temporal (Niñera)" },
      { id: 'B', text: "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales donde su velocidad es vital, pero lo mantienes alejado de colaboraciones grupales. Optimizas su output técnico inmediato, aunque arriesgas que 2 desarrolladores Mid renuncien por la falta de acción ante el comportamiento tóxico.", score: 1, type: "Optimización de Recursos" },
      { id: 'C', text: "Performance Improvement Plan: Inicias un PIP de 30 días enfocado exclusivamente en soft skills y comunicación. O cambia su trato o se va, sin importar su output técnico. Proteges la cultura del equipo, aunque tendrás que invertir capital político defendiendo esta decisión ante stakeholders que solo ven su output técnico.", score: 5, type: "Lead (Guardián de Cultura)" }
    ],
    explanation: "El costo oculto de un 'Genio Tóxico' es la renuncia de 3-5 profesionales competentes, lo que genera una pérdida neta de valor mayor que su aporte individual. El Performance Improvement Plan (PIP) establece que los 'Soft Skills' son requisitos core del rol, no opcionales. El Aislamiento Estratégico valida implícitamente que el mal comportamiento es aceptable si eres talentoso. La Mediación Activa te convierte en cuello de botella y niñera, impidiendo la autonomía del equipo."
  },
  {
    id: 'mentoria_junior_failure',
    category: "Mentoría & Crecimiento",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    scenario: "Un diseñador Junior está liderando un proyecto pequeño. Ves que va directo a cometer un error de usabilidad que no es crítico (no rompe el pago), pero generará confusión en el usuario.",
    question: "¿Intervienes antes del lanzamiento?",
    options: [
      { id: 'A', text: "Sí, corriges el diseño tú mismo o le das la solución exacta inmediatamente antes del handoff. Aseguras excelencia del producto en este lanzamiento, a costa de crear dependencia permanente que impide el crecimiento autónomo del Junior.", score: 1, type: "Micro-manager (Crea dependencia)" },
      { id: 'B', text: "No. Lo dejas fallar controladamente. Esperas a que salgan los resultados del test de usabilidad o la data real y usas ese momento para enseñarle a analizar y corregir el error, aunque aceptes un pequeño impacto temporal en la experiencia del usuario.", score: 5, type: "Lead (Maestro)" },
      { id: 'C', text: "Le das una pista sutil ('¿Has pensado en cómo se verá esto en móvil?') esperando que se dé cuenta solo. Ofreces una señal de alerta sin dar la solución directa, pero arriesgas que no capte el problema raíz y el error persista.", score: 3, type: "Coach Pasivo" }
    ],
    explanation: "El aprendizaje vivido (experiencial) tiene mayor retención que la instrucción teórica. Al Dejar fallar controladamente, permites que el Junior desarrolle criterio propio y aprenda a analizar consecuencias. Corregir el diseño tú mismo (Micro-manager) asegura calidad a corto plazo pero crea dependencia y atrofia el crecimiento del diseñador. Las pistas sutiles (Coach Pasivo) pueden ser ambiguas y no garantizan el aprendizaje del error raíz."
  },
  {
    id: 'burnout_detection_action',
    category: "Bienestar del Equipo",
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    scenario: "Estás a 10 días del lanzamiento más importante del año (investor demo que define la Serie A). Tu diseñador senior está mandando PRs a las 2 AM consistentemente. En el standup menciona 'no dormí mucho pero ya casi termino el rediseño del dashboard'. El equipo completo depende de ese componente. Ayer el CEO te preguntó: '¿Seguro que vamos a llegar?'",
    question: "¿Cómo intervienes sabiendo que el deadline es inamovible y el burnout es inminente?",
    options: [
      { id: 'A', text: "Reconocimiento con Incentivo: Le ofreces un bonus de $2K por 'sprint heroico' y lo destacas en el All-Hands. Entregas motivación inmediata para el push final, pero arriesgas institucionalizar el burnout como camino legítimo al éxito y bonificaciones.", score: -1, type: "Incentiva heroísmo tóxico" },
      { id: 'B', text: "Intervención Estructural: Reduces el alcance del dashboard (cortas 2 features), redistribuyes carga y le prohíbes trabajar post-7 PM. Proteges el activo más valioso (talento senior), aunque tendrás que asumir el costo político explicando al CEO por qué el demo será menos ambicioso.", score: 5, type: "Lead (Protege talento, asume riesgo)" },
      { id: 'C', text: "Soporte con Recursos: Le asignas un Junior de asistente para tareas operativas y administrativas. Reduces su carga manual permitiendo que se enfoque en decisiones críticas, a costa de mantener la presión mental del deadline inamovible sin abordar el scope real.", score: 3, type: "Mitigación (No resuelve raíz)" }
    ],
    explanation: "El 'Hero Mode' no es sostenible ni escalable. La Intervención Estructural protege el activo más caro de la empresa (el talento senior) y fuerza una priorización honesta del alcance (Scope Cutting). Es mejor decepcionar levemente con features que colapsar el equipo antes de la Serie A. El Reconocimiento con Incentivo institucionaliza el burnout como camino al éxito. El Soporte con Recursos ayuda, pero no detiene la presión mental del delivery crítico."
  },
  {
    id: 'hiring_profile_gap_logic',
    category: "Contratación Estratégica",
    icon: <Search className="w-6 h-6 text-indigo-500" />,
    scenario: "Tienes presupuesto para 1 rol IC Senior. Tu equipo actual (4 diseñadores) es muy fuerte visualmente - todos vienen de estudios boutique con portfolios Awwwards-tier, pero débil en sistemas complejos (fintech, B2B). Estás perdiendo credibilidad con Product porque les cuesta diseñar flujos de 15+ pasos, estados de error robustos, y lógica condicional compleja. Llega un candidato con portfolio visual 'correcto pero no wow', pero tiene 6 años diseñando core banking en instituciones financieras (BBVA, JP Morgan). Entiende regulaciones, compliance, audit trails.",
    question: "¿Cuál es tu decisión de contratación estratégica?",
    options: [
      { id: 'A', text: "Hire for Excellence: Rechazas al candidato. No puedes bajar la vara visual en un equipo de élite. Mantienes la excelencia estética del equipo, a costa de perpetuar el gap funcional que está bloqueando tu credibilidad con Product y la capacidad de diseñar flujos complejos.", score: 1, type: "Principios sin contexto (Irrealista, bloquea progreso)" },
      { id: 'B', text: "Hire for Gaps: Lo contratas. Priorizas resolver el bloqueo lógico/estructural sobre la uniformidad visual. Tus seniors pueden pulir la UI, aunque tendrás que gestionar la diversidad de estilos iniciales mientras el equipo se integra.", score: 5, type: "Lead (Team building estratégico)" },
      { id: 'C', text: "Freelance Bridge: Contratas un freelance visual fuerte para apoyar en proyectos de alto impacto visual mientras continúas buscando el candidato perfecto full-time. Mantienes el estándar visual, pero arriesgas no resolver nunca el gap estructural que frena el progreso del equipo.", score: 1, type: "Indeciso (No resuelve gap estructural)" }
    ],
    explanation: "Un Lead contrata para cubrir brechas, no para clonar fortalezas existentes. Hire for Gaps inyecta el conocimiento de dominio (Fintech/B2B) que falta para desbloquear la credibilidad con Producto. Hire for Excellence visual ignora que la debilidad actual es lógica, no estética. El Freelance Bridge es un parche temporal que retrasa la solución estructural del equipo y diluye el ownership."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'legacy_code_rewrite_temptation',
    category: "Estrategia de Migración",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
    question: "¿Cuál es tu postura como stakeholder de diseño?",
    options: [
      { id: 'A', text: "Apoyar el rewrite completo: Detener features nuevas para reescribir todo el frontend en React. Entregas una base técnica moderna, pero arriesgas 6 meses sin revenue nuevo y fatiga del negocio que puede cancelar el proyecto a mitad de camino.", score: 1, type: "Optimismo sin plan (Gran Bomba)" },
      { id: 'B', text: "Modular Rewrite: Migrar pantalla por pantalla, permitiendo coexistencia temporal. Priorizar vistas con más tráfico para validar valor incrementalmente, aunque tendrás que gestionar la complejidad temporal de mantener dos sistemas en paralelo.", score: 5, type: "Lead (Incremental De-Risking)" },
      { id: 'C', text: "Priorizar Features: Si el código actual funciona y es estable, priorizar features nuevas que generen revenue inmediato. Postergás el refactoring para mantener el velocity, a costa de acumular deuda técnica que eventualmente paralizará la velocidad de entrega.", score: 3, type: "Priorización de Features" }
    ],
    explanation: "El patrón 'Big Bang Rewrite' rara vez cumple expectativas por subestimación de complejidad y fatiga de negocio. La estrategia de Modular Rewrite permite entregar valor continuo y modernizar el stack progresivamente aplicando el Strangler Fig Pattern: rodear gradualmente el sistema legacy hasta reemplazarlo completamente. Un Lead entiende que las migraciones masivas detienen el revenue y ponen en riesgo la viabilidad de la empresa. Priorizar Features ofrece velocity a corto plazo, pero sacrifica el Opportunity Cost futuro: la deuda técnica eventualmente paralizará la capacidad de innovación."
  },
  {
    id: 'design_system_v2_breaking_changes',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Quieres lanzar la V2 del Design System con cambios radicales (nuevos tokens, arquitectura de componentes). Ingeniería dice que romperá 200 archivos y tomará 3 sprints migrar todo.",
    question: "¿Cómo lanzas la V2 sin paralizar la operación?",
    options: [
      { id: 'A', text: "Code Freeze & Migración: Pausar features por 3 sprints para dedicar al equipo a la migración completa. Entregas una base limpia sin deuda futura, pero arriesgas detener el roadmap de producto por 9 semanas y perder oportunidades de revenue.", score: -1, type: "Big Bang (Mata el roadmap)" },
      { id: 'B', text: "Versionado Coexistente: Publicar V2 en namespace separado, permitiendo convivencia. Migrar gradualmente por módulos durante 6 meses sin detener el roadmap, aunque tendrás que mantener dos versiones en paralelo temporalmente.", score: 5, type: "Lead (Graceful Migration)" },
      { id: 'C', text: "Fragmentación Táctica: Lanzar solo componentes nuevos en V2. Mantener los viejos sin cambios para no bloquear features, a costa de crear dos fuentes de verdad permanentes que aumentan la carga cognitiva del equipo.", score: 1, type: "Fragmentación (Dos sistemas eternos)" }
    ],
    explanation: "Forzar una migración masiva (Code Freeze) detiene el negocio y rara vez se aprueba. El Versionado Coexistente permite evolucionar el sistema sin destruir lo que funciona, pagando la deuda de migración progresivamente. La Fragmentación Táctica crea dos fuentes de verdad permanentes, aumentando la carga cognitiva y de mantenimiento."
  },
  {
    id: 'production_bug_major_incident',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Un cambio de diseño 'menor' (quitar un paso de confirmación) causó que 50,000 usuarios enviaran datos privados a una URL pública por error. Es un Data Leak masivo. Legal está redactando notificaciones de brecha. El CTO dice públicamente: 'Diseño insistió en quitar la confirmación para reducir fricción'. Todos te miran.",
    question: "¿Cómo gestionas la crisis de reputación y responsabilidad?",
    options: [
      { id: 'A', text: "Análisis de Proceso: Argumentas que el error fue sistémico (Ingeniería aprobó, QA validó). Propones una revisión del proceso de testing y aprobación, pero arriesgas sonar a excusa defensiva en medio de una crisis donde se busca acción inmediata.", score: 1, type: "Análisis de Proceso" },
      { id: 'B', text: "Extreme Ownership: Asumes la responsabilidad pública. Presentas plan de reversión inmediato (1h), notificación empática a usuarios y auditoría de flujos para mañana, aunque tendrás que asumir el costo político de ser identificado como responsable del data leak.", score: 5, type: "Lead (Liderazgo en Crisis)" },
      { id: 'C', text: "Gestión Centralizada: Canalizar toda la comunicación a través del equipo Legal y PR para asegurar un mensaje unificado. El equipo de diseño se enfoca en el fix técnico, a costa de abdicar liderazgo visible y perder credibilidad ante el equipo que espera que des la cara.", score: -1, type: "Evita confrontación" }
    ],
    explanation: "En crisis, la velocidad y la responsabilidad lo son todo. Extreme Ownership desarma a los críticos y enfoca la energía en la remediación inmediata, recuperando la confianza. El Análisis de Proceso es correcto en tiempos de paz, pero en guerra suena a excusa defensiva. La Gestión Centralizada (esconderse detrás de Legal) abdica el liderazgo y daña tu credibilidad ante el equipo técnico."
  },
  {
    id: 'user_backlash_social_media',
    category: "Community Management",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Cambiaste el modelo de precios y la UI para hacerlo más difícil de cancelar. Un influencer de TikTok hizo un video criticándolo y el rating en el App Store bajó de 4.8 a 3.2 en dos días. Marketing está pidiendo respuestas.",
    question: "¿Cómo respondes a la crisis de reputación?",
    options: [
      { id: 'A', text: "Ignorar el Ruido: 'Son trolls de internet, se cansarán en una semana'. Mantienes el curso asumiendo que la mayoría silenciosa está satisfecha, pero arriesgas que el rating de 3.2 se convierta en la nueva realidad permanente que afecte el CAC futuro.", score: 1, type: "Negligente" },
      { id: 'B', text: "Corrección y Transparencia: Publicas update reconociendo el error, simplificas la UI y respondes reviews. Recuperas confianza con acción rápida, aunque tendrás que admitir públicamente que el diseño de precios fue hostil al usuario.", score: 5, type: "Lead (Escucha y Actúa)" },
      { id: 'C', text: "Respuesta Defensiva: Publicas comunicado explicando que 'cumplimos con los términos'. Intentas educar al usuario sobre por qué el cambio es correcto, a costa de amplificar el conflicto y validar la narrativa negativa del influencer.", score: 1, type: "Sordo (Tone-deaf)" }
    ],
    explanation: "Cuando el rating de la App cae drásticamente, afecta el CAC y la adquisición futura (Unit Economics). Corrección y Transparencia es la única vía para detener la hemorragia de confianza. Ignorar el Ruido o dar una Respuesta Defensiva amplifica el conflicto y valida la narrativa negativa del influencer."
  },
  {
    id: 'crisis_investor_demo_failure',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "Es el día del demo crítico con inversionistas para cerrar la Serie A. 30 minutos antes, el ambiente de staging se cae por un problema de infraestructura. El equipo de ingeniería dice que tomará 2 horas arreglarlo. Los inversionistas ya están en camino.",
    question: "¿Cuál es tu plan de contingencia inmediato?",
    options: [
      { id: 'A', text: "Gestión de Expectativas: Reprogramar la demo argumentando que prefieres mostrar el build final estable en lugar de un staging con riesgo. Priorizas la calidad de la presentación sobre la urgencia.", score: 1, type: "Gestión de Expectativas" },
      { id: 'B', text: "Demo en Producción: Usas el ambiente live con usuarios reales y un script tight. Asignas monitoreo en tiempo real. La autenticidad puede ser una ventaja.", score: 5, type: "Lead (Improvisa con Confianza)" },
      { id: 'C', text: "Slides de Backup: Cancelas el demo en vivo y presentas slides con capturas y videos pregrabados. Es seguro y evita errores, pero pierde el impacto emocional.", score: 3, type: "Backup Plan (Menos impacto)" }
    ],
    explanation: "Mentir o reprogramar ante inversores es señal de debilidad operativa. Demo en Producción demuestra resiliencia, confianza en el producto real y capacidad de improvisación (señales positivas para un VC). Slides de Backup es una opción segura pero pierde el impacto visceral de un producto funcional. Gestión de Expectativas (reprogramar) puede interpretarse como falta de preparación o problemas ocultos graves."
  },
  {
    id: 'crisis_key_designer_quits',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Users className="w-6 h-6 text-red-600" />,
    scenario: "Tu diseñador estrella, que lidera el rediseño completo del sistema de pagos (60% completado), renuncia abruptamente por una oferta de FAANG. Tiene 2 semanas de notice. El deadline con el cliente no se puede mover.",
    question: "¿Cómo gestionas la transición de conocimiento?",
    options: [
      { id: 'A', text: "Contraoferta agresiva: Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas. Compras tiempo para el deadline inmediato, pero arriesgas sentar un precedente donde las amenazas de renuncia se convierten en tácticas de negociación salarial.", score: -1, type: "Desesperado (Insostenible)" },
      { id: 'B', text: "Knowledge Transfer Intensivo: 2 semanas de SOLO documentación, Looms y pair design con el siguiente senior. Nada de features nuevas para maximizar la transferencia de conocimiento, aunque tendrás que negociar con el cliente una extensión del deadline.", score: 5, type: "Lead (Minimiza Pérdida)" },
      { id: 'C', text: "Contratar Freelance: Buscas un senior externo urgente para que trabaje en paralelo con el que se va y absorba el conocimiento mediante shadowing. Intentas mantener continuidad, a costa de que la curva de aprendizaje del contexto exceda las 2 semanas disponibles.", score: 1, type: "Costoso (Curva de aprendizaje)" }
    ],
    explanation: "Intentar retener con dinero (Contraoferta) cuando la decisión ya está tomada genera resentimiento y rompe la estructura salarial. El Knowledge Transfer Intensivo asume la pérdida del recurso pero protege el activo intelectual (la documentación y el contexto). Contratar un Freelance de emergencia suele fallar porque la curva de aprendizaje del contexto es mayor a las 2 semanas disponibles."
  },
  {
    id: 'sales_promise_impossible_timeline',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
    question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
    options: [
      { id: 'A', text: "Sprint de Choque: Aceptar el desafío como un 'Sprint de Guerra'. Reduces el alcance a un MVP funcional y enfocas al equipo 100% en esta entrega para cumplir la promesa comercial, pero arriesgas generar burnout masivo y deuda técnica brutal que costará meses remediar.", score: -1, type: "Burnout Factory (Deuda técnica brutal)" },
      { id: 'B', text: "Renegociación con el Cliente: Ventas y Product ofrecen plan de entrega por fases (básico en 3 semanas, full en 3 meses). Entregas transparencia sobre la realidad técnica, aunque tendrás que invertir capital político asumiendo que Ventas prometió sin consultar.", score: 5, type: "Lead (Realismo Profesional)" },
      { id: 'C', text: "Solución No-Code: Usar Zapier/Make para cumplir la promesa funcionalmente mientras construyes la integración real. Entregas valor inmediato al cliente, a costa de introducir un riesgo de seguridad y escalabilidad inaceptable para un contrato de $800K.", score: 1, type: "Solución Temporal" }
    ],
    explanation: "En B2B, la confianza es la moneda de cambio. Aceptar plazos imposibles (Sprint de Choque) genera Deuda de Confianza externa y Burnout interno. La Renegociación con el Cliente transforma un 'No' en un 'Sí, pero estructurado', alineando expectativas con realidad técnica. La Solución No-Code es un riesgo de seguridad y escalabilidad inaceptable para un contrato de esta magnitud."
  },
  {
    id: 'sales_discount_feature_negotiation',
    category: "Producto vs Ventas",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Ventas ofreció un 40% de descuento anual a un cliente a cambio de construir una feature específica de reporting que ellos necesitan. El cliente aceptó. Ahora Product debe entregarla en 2 meses sin haber participado en la negociación.",
    question: "¿Cómo estableces límites para que esto no vuelva a pasar?",
    options: [
      { id: 'A', text: "Cumplir y Documentar: Cumples el compromiso actual para mantener la relación con el cliente. Documentas el proceso y propones políticas futuras, pero arriesgas que este patrón se repita porque no cambias el incentivo sistémico de Ventas.", score: 3, type: "Cumplimiento con Documentación" },
      { id: 'B', text: "Proceso de 'Deal Desk': Comité obligatorio (Product+Eng+Sales) para aprobar customizaciones antes de cerrar contratos. Ventas no puede prometer unilateralmente, aunque tendrás que invertir capital político institucionalizando este check obligatorio.", score: 5, type: "Lead (Proceso de Gobernanza)" },
      { id: 'C', text: "Cobro Interno: Construir la feature pero descontar el Opportunity Cost del presupuesto de Ventas. Generas accountability financiero, a costa de crear una guerra civil innecesaria dentro de la organización sin prevenir el problema raíz.", score: 3, type: "Político (No previene)" }
    ],
    explanation: "Quejarse después no cambia el incentivo sistémico de Ventas. El Proceso de 'Deal Desk' institucionaliza un 'Check & Balance' donde Producto valida la viabilidad antes de la firma. Cumplir y Documentar resuelve el síntoma pero deja la puerta abierta a la repetición. El Cobro Interno crea una guerra civil innecesaria dentro de la organización."
  },
  {
    id: 'stakeholder_ceo_personal_opinion',
    category: "Gestión de Stakeholders",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El VP de Producto volvió de una conferencia obsesionado con 'Conversational UI'. Te pide reemplazar la navegación principal con un chat. Tienes 500k usuarios que dependen de la navegación actual. Él insiste: 'Es el futuro, hay que innovar'.",
    question: "¿Cómo gestionas una idea ejecutiva disruptiva pero riesgosa?",
    options: [
      { id: 'A', text: "Obedecer: Diseñas el chat tal cual lo pide. Asumes que su intuición es correcta y evitas el conflicto político inmediato, a costa de sacrificar la usabilidad de 500k usuarios que dependen de la navegación actual.", score: 1, type: "Mercenario" },
      { id: 'B', text: "Fake Door / Beta Test: 'Hagamos un experimento beta y midamos uso'. Usas data para validar (o matar) la idea sin decir 'no' de frente, aunque tendrás que invertir 1-2 semanas en un experimento controlado.", score: 5, type: "Lead (Data como Escudo)" },
      { id: 'C', text: "Ensayo de UX: Le envías artículos académicos explicando por qué el chat es mala navegación. Apelar a teoría en lugar de evidencia práctica, pero arriesgas que sea ignorado por un ejecutivo emocionado con la tendencia.", score: 1, type: "Académico" }
    ],
    explanation: "Pelear opiniones con teoría (Ensayo de UX) suele fallar contra ejecutivos emocionados. El Fake Door / Beta Test canaliza la emoción hacia un experimento controlado: si nadie usa el chat, la data mata la idea por ti, protegiendo tu relación. Obedecer sin cuestionar abdica tu responsabilidad como guardián de la experiencia del usuario."
  },
  {
    id: 'stakeholder_legal_vs_ux_tension',
    category: "Gestión de Stakeholders",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
    question: "¿Cómo medias entre compliance y experiencia?",
    options: [
      { id: 'A', text: "Sided with Legal: El riesgo legal es absoluto. Aceptas el disclaimer tal cual para evitar problemas regulatorios, a costa de aumentar la fricción un 30% y comprometer seriamente la experiencia del usuario.", score: -1, type: "Rendición (UX destruida)" },
      { id: 'B', text: "Workshop de Soluciones: Reúnes a Legal + UX + Product para co-diseñar alternativas (ej: disclaimer colapsado, tooltips) que cumplan ambos objetivos, aunque tendrás que facilitar conversaciones difíciles entre equipos con prioridades opuestas.", score: 5, type: "Lead (Facilitador de Soluciones)" },
      { id: 'C', text: "Workaround Técnico: Mostrar el disclaimer solo en el primer uso y ocultarlo después. Reduces fricción inmediata, pero arriesgas incumplimiento normativo si Legal requiere visibilidad permanente del disclaimer.", score: 1, type: "Workaround (Legal puede objetar)" }
    ],
    explanation: "Legal y UX no son enemigos si colaboran desde el principio. El Workshop de Soluciones transforma la demanda en un problema de diseño compartido. El Workaround Técnico arriesga el cumplimiento normativo. Sided with Legal destruye la usabilidad sin intentar encontrar un punto medio, priorizando la cobertura legal sobre el producto."
  },
  {
    id: 'strategy_platform_vs_feature_focus',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Producto quiere convertir el producto en una 'plataforma' con APIs públicas y marketplace. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver. El equipo de ingeniería está dividido.",
    question: "¿Cuál es tu recomendación estratégica al VP?",
    options: [
      { id: 'A', text: "Apoyar la visión de plataforma: Pensar en grande es clave. Iniciar la transición a plataforma ahora posicionará a la empresa como líder del mercado, pero arriesgas Premature Scaling: diluir recursos en infraestructura cuando el producto core aún tiene bugs básicos.", score: -1, type: "Visionario sin fundamento" },
      { id: 'B', text: "Product-Market Fit First: Argumentar que antes de ser plataforma, deben dominar su caso de uso core. Las plataformas se construyen DESPUÉS de tener tracción sólida, aunque tendrás que invertir capital político desafiando la visión ambiciosa del VP.", score: 5, type: "Lead (Secuenciación Estratégica)" },
      { id: 'C', text: "Enfoque Híbrido: Proponer construir solo las APIs públicas como primer paso, posponiendo el marketplace completo. Entregas un compromiso político, a costa de seguir diluyendo el foco del equipo entre mantener el core y construir plataforma.", score: 1, type: "Compromiso (Diluye el foco igual)" }
    ],
    explanation: "Muchas startups mueren intentando ser plataforma demasiado pronto (Premature Scaling). Product-Market Fit First secuencia el crecimiento: primero dominar el vertical (profundidad), luego expandir la superficie de ataque (amplitud). Apoyar la visión de plataforma ignora que sin un producto core sólido, no hay ecosistema que construir."
  },
  {
    id: 'strategy_competitor_feature_parity',
    category: "Estrategia de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "El competidor principal acaba de lanzar 10 features nuevas en un mega-release. Product Manager entra en pánico y quiere copiar todas las features para 'no quedarse atrás' en la matriz de comparación.",
    question: "¿Cómo evalúas qué copiar y qué ignorar?",
    options: [
      { id: 'A', text: "Auditoría de Churn: Analizar si perdiste clientes citando esas features específicas. Si no hay evidencia de pérdida, no es urgente. Usas datos reales para priorizar, aunque tendrás que resistir la presión emocional del PM y Ventas.", score: 5, type: "Lead (Evidence-Based)" },
      { id: 'B', text: "Copiar las 3-4 features más visibles para actualizar la página de comparación y calmar a Ventas. Reaccionas al competidor inmediatamente, a costa de convertirte en un seguidor perpetuo sin diferenciación estratégica.", score: 1, type: "Defensivo (Feature parity race)" },
      { id: 'C', text: "Ignorar al competidor completamente y seguir tu roadmap original. El foco es más importante que la reacción, pero arriesgas ceguera ante cambios reales del mercado que sí requieren adaptación.", score: 1, type: "Dogmático (Puede ser arriesgado)" }
    ],
    explanation: "La paridad de features es una trampa de 'Commodity'. La Auditoría de Churn usa datos reales para validar si la amenaza es real o pánico percibido. Copiar las features te convierte en un seguidor perpetuo sin diferenciación. Ignorar al competidor ciegamente puede ser ingenuo si el mercado realmente está cambiando."
  },
  {
    id: 'designops_figma_file_chaos',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El workspace de Figma es un caos: 400 archivos sin nombrar bien, duplicados, versiones antiguas mezcladas con nuevas. Nadie encuentra nada y pierden 30 minutos diarios buscando archivos.",
    question: "¿Cómo implementas orden sin frenar la operación?",
    options: [
      { id: 'A', text: "Cleanup Sprint: Asignar 1 semana completa donde nadie diseña, solo organizan archivos. Entregas orden inmediato, pero arriesgas que nunca se apruebe una semana sin producción y que el caos vuelva en 2 meses sin sistemas de mantenimiento.", score: -1, type: "Utópico (Nunca se aprueba)" },
      { id: 'B', text: "Naming + Governance: Crear estructura de carpetas obligatoria y asignar 'File Owners'. Migrar archivos activos gradualmente mientras archivas los legacy, aunque tendrás que invertir tiempo educando y auditando compliance inicial.", score: 5, type: "Lead (Sistema Sostenible)" },
      { id: 'C', text: "Contratación Externa: Contratar un Design Ops Manager o freelance dedicado exclusivamente a ordenar la biblioteca. Permite al equipo enfocarse en diseño, a costa de delegar una responsabilidad cultural que el equipo debe internalizar.", score: 1, type: "Especialización Externa" }
    ],
    explanation: "El orden no se logra con limpiezas masivas (Cleanup Sprint) que paralizan la operación y cuyo efecto dura poco. Se logra con Naming + Governance: sistemas y roles claros que mantienen la higiene día a día. La Contratación Externa delega una responsabilidad cultural del equipo, impidiendo que internalicen la disciplina necesaria."
  },
  {
    id: 'designops_version_control_disaster',
    category: "Design Ops",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "Un diseñador borró accidentalmente 3 días de trabajo en Figma y la funcionalidad de Version History no va tan atrás. No hay backup. El deadline es mañana.",
    question: "¿Cómo prevenis que vuelva a pasar?",
    options: [
      { id: 'A', text: "Implementar un plugin de auto-backup diario de archivos críticos a Google Drive. Creas una red de seguridad automatizada que elimina el factor humano, aunque tendrás que configurar e integrar la herramienta inicialmente.", score: 5, type: "Lead (Safety Net)" },
      { id: 'B', text: "Capacitar al equipo en el uso correcto de Version History y hacer recordatorios semanales. Educas sobre la herramienta existente, pero arriesgas que el estrés o error humano vuelvan a causar pérdidas de trabajo.", score: 1, type: "Educativo (No previene accidentes)" },
      { id: 'C', text: "Backup Manual: Duplicar manualmente los archivos importantes cada viernes como política de equipo. Proceso simple sin herramientas, a costa de confiar en la memoria humana que garantiza el fallo futuro ante estrés o urgencia.", score: 1, type: "Backup Manual" }
    ],
    explanation: "Confiar en la memoria humana (Backup Manual o Capacitación) garantiza el fallo futuro ante estrés o error humano. La solución de Lead es sistémica: Auto-backup automatizado que elimina el factor humano de la ecuación de seguridad."
  },
  {
    id: 'arquitectura_monorepo_vs_separate_systems',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System en Figma. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían compartir componentes.",
    question: "¿Cuál es tu estrategia de consolidación?",
    options: [
      { id: 'A', text: "Silos Independientes: Mantener los sistemas completamente separados. Cada producto optimiza para sus propias necesidades sin coordinación, a costa de duplicar trabajo eternamente y perpetuar la divergencia visual.", score: 1, type: "Silos (Duplicación eterna)" },
      { id: 'B', text: "Design System Core + Extensions: Librería base compartida (primitivos) y permitir que cada producto extienda con componentes específicos. Balanceas eficiencia centralizada con flexibilidad, aunque tendrás que gestionar la gobernanza de qué va al core vs extensiones.", score: 5, type: "Lead (Shared Foundation)" },
      { id: 'C', text: "Sistema Unificado Completo: Implementar un único Design System monolítico que todos los productos deben adoptar. Garantizas consistencia visual absoluta, pero arriesgas crear un cuello de botella rígido que ignore las necesidades únicas de Marketing vs Producto vs Móvil.", score: 3, type: "Rígido (No refleja realidad)" }
    ],
    explanation: "La arquitectura federada (Core + Extensions) balancea la eficiencia centralizada con la flexibilidad específica de cada producto. Los Silos Independientes perpetúan la deuda de duplicación. El Sistema Unificado Completo crea un cuello de botella rígido que ignora las necesidades únicas de Marketing vs Producto vs Móvil."
  },
  {
    id: 'arquitectura_atomic_design_complexity',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Implementaste Atomic Design (Átomos > Moléculas > Organismos > Templates). Ahora el equipo pasa más tiempo debatiendo 'si X es una molécula o un organismo' que diseñando. La taxonomía se volvió un obstáculo.",
    question: "¿Cómo simplificas sin perder estructura?",
    options: [
      { id: 'A', text: "Re-Educación: Mantener Atomic Design y organizar workshops intensivos para alinear al equipo. Asumes que el problema es la falta de comprensión, pero arriesgas mantener un sistema over-engineered que sigue generando fricción.", score: -1, type: "Capacitación Intensiva" },
      { id: 'B', text: "Simplificación Pragmática: Colapsar a 2 categorías (Primitives + Components). Si la taxonomía consume más energía que el diseño, está sobrediseñada. Priorizas utilidad del equipo, aunque tendrás que migrar y re-categorizar componentes existentes.", score: 5, type: "Lead (Utilidad > Pureza)" },
      { id: 'C', text: "Anarquía Estructurada: Eliminar la estructura impuesta y permitir que cada squad organice sus componentes como prefiera. Priorizas velocidad inmediata, a costa de crear caos total que destruye cualquier beneficio de tener un sistema de diseño.", score: -1, type: "Caos (Pierde la arquitectura)" }
    ],
    explanation: "El sistema debe servir al equipo, no al revés. Si la taxonomía genera fricción cognitiva, está sobrediseñada. La Simplificación Pragmática prioriza la utilidad sobre la pureza metodológica. La Re-Educación asume erróneamente que el problema es el usuario, no la herramienta."
  },
  {
    id: 'migracion_forced_upgrade_user_backlash',
    category: "Estrategia de Migración",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "Lanzas una versión 2.0 del producto con nueva arquitectura y fuerza a todos los usuarios a migrar. El 30% de los power users están furiosos porque removiste features 'legacy' que ellos usaban diariamente.",
    question: "¿Cómo gestionas la migración forzada?",
    options: [
      { id: 'A', text: "Mantener la posición: 'La V2 es superior, eventualmente se acostumbrarán'. Mantienes tu visión técnica, pero arriesgas acelerar el churn del 30% de power users que son los clientes más valiosos y vocales.", score: -1, type: "Arrogante (Churn garantizado)" },
      { id: 'B', text: "Feature Parity Roadmap: Escuchar qué features extrañan, evaluar criticidad y comprometerse a reintroducirlos en V2 en 2 meses. Validas el dolor del usuario, aunque tendrás que invertir sprints en features 'legacy' en lugar de innovación.", score: 5, type: "Lead (Responsive Migration)" },
      { id: 'C', text: "Acceso Legacy: Ofrecer acceso a la V1 legacy en paralelo para quienes no quieran migrar. Reduces el churn inmediato, a costa de duplicar el costo de ingeniería manteniendo dos versiones indefinidamente.", score: 1, type: "Parche (Duplica mantenimiento)" }
    ],
    explanation: "Ignorar el feedback de Power Users (Mantener la posición) acelera el churn de los clientes más valiosos. Mantener Acceso Legacy duplica el costo de ingeniería. El Feature Parity Roadmap valida el dolor del usuario y ofrece un camino de solución dentro de la nueva arquitectura, gestionando la relación sin comprometer la visión técnica."
  },
  {
    id: 'migracion_sunset_product_line',
    category: "Estrategia de Migración",
    icon: <XCircle className="w-6 h-6 text-red-600" />,
    scenario: "La empresa decidió discontinuar un producto que tiene 500 usuarios activos (pequeño pero leal). Tienes 6 meses para migrarlos al producto principal o perderlos. El producto principal no tiene feature parity.",
    question: "¿Cuál es tu estrategia de sunset?",
    options: [
      { id: 'A', text: "Hard Sunset: Apagar en la fecha anunciada. Los usuarios tuvieron aviso. Enfocas recursos en el producto futuro inmediatamente, a costa de perder el 100% de los 500 usuarios leales que se convertirán en detractores vocales de tu marca.", score: -1, type: "Corporate Cruelty (Churn 100%)" },
      { id: 'B', text: "Migration Concierge: Asignar recursos para construir features críticas faltantes y ofrecer onboarding personalizado. Tratas el sunset como retención activa, aunque tendrás que invertir 2-3 meses de desarrollo en cerrar el gap funcional.", score: 5, type: "Lead (Retención Activa)" },
      { id: 'C', text: "Compensación Monetaria: Ofrecer descuentos agresivos (50%) en el nuevo producto. Intentas comprar la lealtad con ahorro financiero, pero arriesgas que el descuento no resuelva la brecha funcional operativa del cliente.", score: 1, type: "$$$ (No resuelve el gap de features)" }
    ],
    explanation: "Un sunset mal manejado crea detractores vocales. Tratarlo como un problema de retención (Migration Concierge) invierte en migrar el valor del cliente, no solo sus datos. El Hard Sunset es eficiente en costos pero destructivo en marca. La Compensación Monetaria es un curita que no resuelve la brecha funcional operativa del cliente."
  },
  {
    id: 'manageup_ceo_designs_features',
    category: "Manage Up",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "El CEO (ex-diseñador en su startup anterior) abre Figma y empieza a diseñar un 'Tab de Notificaciones' directamente en el archivo de producción. Lo comparte en Slack con Engineering diciendo: 'Podemos lanzar esto la próxima semana, ¿verdad?'. No habló contigo ni con Producto. El diseño rompe 4 patterns del Design System, no tiene estados de loading/error, y resuelve un problema que solo 2 usuarios mencionaron en NPS. Engineering está confundido esperando tu aprobación.",
    question: "¿Cómo manejas al CEO que bypasea proceso sin confrontación política?",
    options: [
      { id: 'A', text: "Confrontación Directa: Escribir al CEO explicando que violó el proceso y el Design System. Defiendes la integridad del diseño públicamente, pero arriesgas quemar capital político al avergonzar al CEO y marcarte como obstáculo.", score: 1, type: "Valiente (Riesgo político)" },
      { id: 'B', text: "Validación + Redirección: Agradecer el input y proponer sesión para 'refinar juntos'. Introduces research y patterns sutilmente. Conviertes su impulso en colaboración estructurada, aunque tendrás que invertir tiempo facilitando la sesión diplomáticamente.", score: 5, type: "Lead (Diplomatic Judo)" },
      { id: 'C', text: "Obediencia Ciega: Implementar lo que pidió tal cual. Evitas conflicto inmediato con el CEO, a costa de destruir la integridad de tu sistema y tu autoridad ante el equipo que espera que defiendas los estándares.", score: 1, type: "Obediente (Pierde autonomía)" }
    ],
    explanation: "La Validación + Redirección es judo político: aprovecha la energía del CEO sin romper la estructura. Le das ownership del 'qué' mientras tú controlas el 'cómo' (calidad). La Confrontación Directa te marca como obstáculo. La Obediencia Ciega destruye la integridad de tu sistema y tu autoridad ante el equipo."
  },
  {
    id: 'manageup_cto_blockchain_pet_project',
    category: "Manage Up",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "El Director de Innovación quiere integrar blockchain al producto y pide un 'Wallet de NFTs' urgente para un demo. Cero research, cero demanda de usuarios. Tienes tickets críticos de UX en el checkout bloqueados.",
    question: "¿Cómo gestionas el pet project sin quemar puentes?",
    options: [
      { id: 'A', text: "Diseñar el Wallet: 'Si Innovación lo pide, lo hacemos'. Desvías recursos críticos del checkout para complacer al directivo, a costa de desperdiciar sprints en un pet project sin validación de usuario.", score: 1, type: "Obediente (Desperdicia recursos)" },
      { id: 'B', text: "Validación Rápida: 'Hagamos un Discovery Sprint de 3 días. Si validamos interés, priorizamos'. Usas el proceso de diseño para filtrar malas ideas con data, aunque tendrás que invertir 3 días demostrando que la hipótesis no tiene tracción.", score: 5, type: "Lead (Research como filtro)" },
      { id: 'C', text: "Priorización de Roadmap: Explicar que los tickets críticos de checkout tienen mayor impacto en revenue. Proponer evaluar el wallet después, pero arriesgas que un directivo enfocado en 'innovación' ignore argumentos de optimización.", score: 1, type: "Priorización de Roadmap" }
    ],
    explanation: "Decir 'no' por opinión genera conflicto. Usar el proceso de diseño como filtro (Validación Rápida) objetiviza la decisión: si la idea es mala, la data la matará, no tú. Diseñar el Wallet desperdicia recursos en vanidad. La Priorización de Roadmap es lógica pero a menudo ignorada por directivos enfocados en 'innovación' en lugar de optimización."
  },
  {
    id: 'manageup_cfo_design_system_roi',
    category: "Manage Up",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Necesitas $120K para contratar un Design Systems Engineer. El VP de Engineering cuestiona la inversión: '¿Por qué necesitamos un rol dedicado si los developers ya usan librerías de UI?'. El Head of Product te pide que justifiques el headcount con ROI claro antes de aprobarlo en el budget del Q.",
    question: "¿Cómo traduces el valor del Design System a lenguaje de ingeniería y negocio?",
    options: [
      { id: 'A', text: "Hablar de Craft: Explicar que los Design Systems mejoran la consistencia visual y la calidad del código. Apelar a 'best practices' y deuda técnica, pero arriesgas que el VP de Engineering y Head of Product descarten el argumento porque no habla su idioma de ROI.", score: -1, type: "Craft Talk (No convence a Eng)" },
      { id: 'B', text: "ROI en Velocity: Mostrar data: un componente toma 4h hoy vs 20min con DS. Ahorro de 180h/Q = 1 headcount liberado. El rol se paga solo en eficiencia, aunque tendrás que invertir tiempo recopilando métricas concretas de velocity.", score: 5, type: "Lead (Business Case sólido)" },
      { id: 'C', text: "Benchmark Competitivo: 'Airbnb y Uber tienen este rol'. Argumentar que es estándar de industria, a costa de apelar a autoridad sin demostrar el ROI específico de tu contexto organizacional.", score: 1, type: "Apelación a autoridad (Débil)" }
    ],
    explanation: "Para obtener budget, debes hablar el idioma de quien firma el cheque. El ROI en Velocity traduce 'consistencia' a 'dinero ahorrado y velocidad ganada', métricas que importan a Ingeniería y Finanzas. Hablar de Craft o Benchmarks son argumentos de diseñador para diseñadores, inefectivos en la mesa ejecutiva."
  },
  {
    id: 'manageup_cto_designers_should_code',
    category: "Manage Up",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "En una reunión ejecutiva, el CTO dice públicamente: 'No entiendo por qué los diseñadores no implementan sus propios diseños en código. En mi anterior startup, los diseñadores escribían React. Seríamos mucho más eficientes'. Tienes un equipo de 5 diseñadores: 2 saben HTML/CSS básico, 1 sabe React, 2 son puramente visuales. El CTO sugiere que 'los diseñadores que no codean son menos valiosos'. Algunos diseñadores te escriben después preocupados por su job security.",
    question: "¿Cómo defiendes la especialización del equipo sin antagonizar al CTO?",
    options: [
      { id: 'A', text: "Upskilling Forzado: Implementar 'Viernes de Code' obligatorios donde todos aprenden React. Intentas cerrar la brecha percibida por el CTO, a costa de distraer 20% del tiempo del equipo de su core skill (diseño estratégico) para perseguir una habilidad secundaria.", score: 1, type: "Appeasement (Distrae del core skill)" },
      { id: 'B', text: "Reframe de Roles: Explicar que Design Engineers son valiosos, pero no todos deben serlo. 'Specialization > Generalization'. No todos los devs diseñan, no todos los designers codean, aunque tendrás que invertir capital político defendiendo la especialización ante el CTO.", score: 5, type: "Lead (Claridad de roles)" },
      { id: 'C', text: "Modelo Híbrido: Proponer contratar 1 Design Engineer que haga handoff técnico mientras los diseñadores puros se enfocan en research y estrategia. Creas un puente técnico estructural, aunque no responde al desafío cultural inmediato del CTO sobre el valor de los diseñadores actuales.", score: 3, type: "Estructural (Resuelve con hiring)" }
    ],
    explanation: "La generalización forzada diluye la excelencia. El Reframe de Roles defiende la especialización: el valor del diseñador está en resolver problemas de usuario, no en escribir React. El Upskilling Forzado quita tiempo de Research/UX para perseguir una habilidad secundaria. El Modelo Híbrido es una buena solución estructural a mediano plazo, pero no responde al desafío cultural inmediato del CTO."
  },
  {
    id: 'political_ma_duplicate_teams_layoffs',
    category: "Crisis Política Organizacional",
    icon: <AlertOctagon className="w-6 h-6 text-red-700" />,
    scenario: "Tu empresa adquirió a un competidor. Ahora hay dos equipos de diseño (6 tuyos, 4 de ellos). El Head of Design te pide proponer una estructura unificada de 7 personas. Tienes que recomendar quiénes se quedan y quiénes se van (o son reasignados). El equipo adquirido tiene talento fuerte pero procesos caóticos.",
    question: "¿Cómo decides la estructura del nuevo equipo unificado?",
    options: [
      { id: 'A', text: "Meritocracia Ciega: Evaluar a los 10 diseñadores con un mismo criterio (portfolio + skills) y recomendar a los 7 mejores, sin importar el origen. Aseguras el mejor equipo posible, aunque puede significar perder gente de tu equipo original y asumir conversaciones dolorosas.", score: 5, type: "Lead (Doloroso pero justo)" },
      { id: 'B', text: "Proteger a Tu Equipo: Recomendar mantener a tus 6 diseñadores (conocen el sistema) y solo 1 del equipo adquirido. Priorizas continuidad operativa inmediata, a costa de sacrificar talento potencial superior por lealtad tribal.", score: 1, type: "Tribal (Injusto)" },
      { id: 'C', text: "Split Político: Proponer 4 tuyos y 3 de ellos para 'balancear' culturas. Entregas una solución diplomática que evita conflicto, pero arriesgas construir un equipo basado en óptica política en lugar de competencia real.", score: 3, type: "Diplomático (Evita meritocracia)" }
    ],
    explanation: "En fusiones, la lealtad tribal destruye valor. La Meritocracia Ciega asegura que la nueva organización tenga el mejor talento posible, independientemente de su origen. Proteger a Tu Equipo prioriza la comodidad sobre la competencia. El Split Político es una solución diplomática que sacrifica calidad por paz artificial."
  },
  {
    id: 'enterprise_client_custom_request',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Tu cliente Enterprise más grande (Banco LATAM que paga $800K/año, 18% de tu ARR total) solicita una feature crítica para su flujo regulatorio interno: exportar audit trails en formato XML propietario de su sistema legacy. Estimación: 6 semanas de desarrollo. Sales dice que si no lo builds, migran a competidor en Q2. Solo este cliente lo usaría - ningún otro banco tiene ese sistema legacy específico.",
    question: "¿Cómo evalúas la solicitud balanceando revenue vs integridad de producto?",
    options: [
      { id: 'A', text: "Construirlo Inmediatamente: $800K/año (18% ARR) justifica cualquier request. Priorizas el cash flow sobre la integridad del roadmap inmediatamente, a costa de convertir a la empresa en una consultora de software a medida que acumula deuda técnica.", score: 1, type: "Revenue-first (Crea deuda técnica)" },
      { id: 'B', text: "Strategic Build vs Buy: Si el desarrollo es generalizable (ej: SAP, Oracle), se construye en core. Si es 100% custom, se ofrece como Professional Services con costo adicional ($150K). Monetizas la personalización sin contaminar el roadmap, aunque tendrás que negociar el costo adicional con el cliente.", score: 5, type: "Lead (ROI-based decision)" },
      { id: 'C', text: "Rechazarlo Por Principio: 'Somos SaaS, no consultora'. Ofreces API abierta para que ellos construyan la integración. Defiendes el dogma de producto, pero arriesgas perder el 18% del ARR por rigidez estratégica en un contexto B2B donde la flexibilidad es esperada.", score: 3, type: "Principios sin contexto (Alto riesgo financiero)" }
    ],
    explanation: "Cuando un cliente representa riesgo existencial (18% ARR), el dogma de producto debe ceder ante la estrategia comercial. Ofrecerlo como Professional Services monetiza la personalización sin contaminar el roadmap del producto core. Construirlo Inmediatamente convierte a la empresa en una consultora de software a medida. Rechazarlo por Principio es suicidio financiero en B2B."
  },
  {
    id: 'pricing_page_complexity',
    category: "Estrategia de Producto",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "La página de Pricing tiene 5 tiers de planes con 30+ features listadas en una tabla de comparación. Analytics muestra 60% de bounce rate en esta página (vs 25% promedio del sitio). Session recordings muestran usuarios scrolleando arriba y abajo repetidamente sin decidir.",
    question: "¿Cómo simplificas la decisión de compra?",
    options: [
      { id: 'A', text: "Plan Finder Quiz: Diseñas un quiz interactivo de 5 preguntas (tamaño de empresa, use case, presupuesto) que recomienda el plan ideal. Reduces la carga cognitiva con guía personalizada, a costa de agregar fricción adicional antes de que el usuario vea los precios.", score: 1, type: "Creativo (Agrega fricción)" },
      { id: 'B', text: "Good-Better-Best: Reduces a 3 planes solamente, listas solo las 5 diferencias clave visibles, y escondes el resto en un accordion 'Ver comparación completa'. Eliminas la parálisis por exceso de opciones aplicando la Paradox of Choice, aunque tendrás que negociar internamente qué 2 planes eliminar.", score: 5, type: "Lead (Paradox of Choice)" },
      { id: 'C', text: "Social Proof Nudge: Mantienes los 5 planes pero agregas un badge de 'Más Popular' o 'Recomendado para empresas como la tuya' en el tier medio-alto. Guías la decisión con autoridad social, aunque no resuelvas el problema estructural de complejidad cognitiva.", score: 3, type: "Nudge (Mejora parcial)" }
    ],
    explanation: "La 'Paradoja de la Elección' dicta que más opciones reducen la conversión. La estrategia Good-Better-Best simplifica cognitivamente la decisión al estándar de la industria. Un Plan Finder Quiz agrega fricción antes de mostrar valor. El Social Proof ayuda, pero no resuelve el problema estructural de complejidad."
  },
  {
    id: 'political_founder_conflict_design_caught',
    category: "Crisis Política Organizacional",
    icon: <Shield className="w-6 h-6 text-orange-700" />,
    scenario: "Los dos Co-Founders (CEO y CTO) están en conflicto abierto sobre la dirección del producto. El CEO quiere pivotar a un modelo B2B Enterprise. El CTO quiere duplicar down en B2C consumer. Ambos te piden diseños que soporten SU visión. El CEO te dice: 'Diseña un dashboard Enterprise con analytics avanzados'. El CTO te dice al día siguiente: 'Ignora eso, diseña una app móvil consumer-first'. En las reuniones ejecutivas discuten públicamente. El equipo de diseño está paralizado sin saber qué priorizar. El VP de Producto renunció la semana pasada por 'diferencias estratégicas'. Tú eres el siguiente en la línea de fuego.",
    question: "¿Cómo navegas el conflicto de founders sin arruinar tu carrera?",
    options: [
      { id: 'A', text: "Diseño Paralelo: Dividir al equipo para prototipar ambas visiones al mismo tiempo. Intentas complacer a ambos founders políticamente, a costa de desperdiciar recursos valiosos en trabajo que será descartado y quemar al equipo trabajando en direcciones opuestas.", score: 3, type: "Neutral (Desperdicia recursos)" },
      { id: 'B', text: "Aliarte con uno: Elegir la visión que TÚ crees correcta (ej: B2B) y apostar todo a ella. Tomas una postura valiente basada en tu criterio, pero arriesgas convertirte en peón político de una guerra de founders que no puedes ganar.", score: 1, type: "Valiente (Suicida)" },
      { id: 'C', text: "Forzar Alineación: Proponer 'Strategy Workshop' donde CEO y CTO presenten data. Facilitas la decisión y no diseñas nada hasta que haya una visión unificada, aunque tendrás que invertir capital político liderando hacia arriba y deteniendo el trabajo temporalmente.", score: 5, type: "Lead (Lidera hacia arriba)" }
    ],
    explanation: "Diseñar sin estrategia clara es desperdicio. Forzar Alineación detiene la hemorragia de recursos y obliga a los líderes a liderar. Aliarte con uno te convierte en peón político en una guerra que no puedes ganar. El Diseño Paralelo quema al equipo trabajando en direcciones opuestas, garantizando que el 50% del trabajo se tire a la basura."
  },
  {
    id: 'political_vp_product_fired_interim_no_design',
    category: "Crisis Política Organizacional",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "El VP de Producto (tu jefe directo y mentor de 2 años) fue despedido abruptamente. El CEO anuncia que el CFO será 'Interim Head of Product' mientras buscan reemplazo. El CFO tiene cero experiencia en producto o diseño; su background es finanzas en una consultora. En su primera reunión contigo dice: 'No entiendo para qué necesitamos tanto diseño. ¿No podemos usar templates de Bootstrap y enfocarnos en features que generen revenue rápido?'. Canceló tu presupuesto de research ($30K/año) y sugirió que 'los diseñadores podrían ayudar con sales decks mientras hay poco trabajo de producto'. Tu equipo está en pánico.",
    question: "¿Cómo proteges al equipo bajo un líder interim hostil a diseño?",
    options: [
      { id: 'A', text: "Escalación Directa al CEO: Pedir una reunión 1-on-1 con el CEO para explicar que el CFO no entiende diseño y está tomando decisiones que destruyen capacidad de producto. Intentas cortocircuitar la cadena de mando, pero arriesgas ser visto como insubordinado y crear conflicto político innecesario.", score: 3, type: "Valiente (Riesgo político alto)" },
      { id: 'B', text: "Educar al CFO con ROI: Preparar un business case mostrando cómo el diseño impacta revenue: aumento de conversión por rediseños, reducción de churn por UX, etc. Traducir diseño a lenguaje financiero que el CFO entienda, aunque tendrás que invertir tiempo recopilando data cuantitativa de impacto.", score: 5, type: "Lead (Bridge de lenguajes)" },
      { id: 'C', text: "Modo Supervivencia: Acatar las órdenes del CFO (Bootstrap, sales decks) temporalmente mientras el CEO busca VP de Producto permanente. Mantienes bajo perfil político hasta que pase la tormenta, a costa de degradar la capacidad del equipo y validar la hipótesis del CFO de que el diseño es prescindible.", score: 3, type: "Supervivencia (Pierde momentum)" }
    ],
    explanation: "El CFO ve el diseño como un centro de costos; tu trabajo es reposicionarlo como centro de inversión. Educar con ROI habla su idioma (dinero, riesgo, eficiencia). La Escalación Directa puede ser vista como insubordinación. El Modo Supervivencia degrada la capacidad del equipo y valida la hipótesis del CFO de que el diseño es prescindible."
  },
];
