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
      { id: 'A', text: "Gestión de Cambio Radical: Reúnes al equipo de inmediato, validas su frustración ('Esto apesta y tienen razón'), pero explicas con total transparencia la razón financiera de supervivencia detrás del cambio. Re-enfocas la energía en el nuevo desafío hoy mismo.", score: 5, type: "Lead (Resiliencia)" },
      { id: 'B', text: "Protección del Talento: Negociar con el CEO una semana de 'cooldown' dedicada a documentar aprendizajes del proyecto cancelado y realizar una transición estructurada. El equipo necesita procesar el cambio para mantener la motivación a largo plazo.", score: 3, type: "Protector (Empático)" },
      { id: 'C', text: "Cierre con Dignidad: Organizas una sesión de 'Retrospectiva de Aprendizaje' el lunes donde el equipo presenta al CEO qué descubrieron en Cobranza Automática que podría aplicarse a futuro, validando su trabajo antes de pivotar.", score: 3, type: "Cultural (Demora)" }
    ],
    explanation: "Con 4 meses de runway, cada día cuenta. Un Lead valida las emociones pero actúa con urgencia financiera (A). La opción B suena cuidadosa pero demora la ejecución en un momento crítico. La C busca validación emocional cuando la supervivencia está en juego."
  },
  {
    id: 'metrics_vanity_vs_reality',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona para que 'no arruines la fiesta'.",
    question: "¿Cómo gestionas la discrepancia de métricas sin iniciar una guerra con Marketing?",
    options: [
      { id: 'A', text: "Alineación Privada: Reúnes a VP y CMO antes del QBR. Muestras el funnel completo (Tráfico subió, Revenue bajó). Acuerdan presentar ambos datos como 'Aprendizaje de Calidad' para ajustar la estrategia sin culpas.", score: 5, type: "Lead (Diplomacia basada en datos)" },
      { id: 'B', text: "Desmentir en Público: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico basura no paga sueldos'. Proteges la verdad financiera pero humillas a Marketing públicamente.", score: 1, type: "Tóxico (Verdad sin tacto)" },
      { id: 'C', text: "Silencio Táctico: Dejas que celebren. En tu reporte, te enfocas solo en optimizar el checkout flow. Confías en que Marketing ajustará su targeting basado en sus propias métricas de calidad.", score: 1, type: "Silo funcional" }
    ],
    explanation: "Un Lead no deja que la empresa crea mentiras, pero tampoco humilla colegas públicamente. La opción A corrige la narrativa de negocio (Revenue > Tráfico) en el foro adecuado (QBR) y con alineación previa, transformando el conflicto en aprendizaje compartido."
  },
  {
    id: 'sales_custom_demands',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El Head of Sales está cerrando un contrato Enterprise clave para cumplir la meta del Q. El cliente exige ver un demo el sábado con su branding (colores y logo) hardcodeado. Tu Design System no soporta theming aún. Sales dice: 'Si no ven su logo, no firman'. El VP de Producto te pregunta si podemos hacer una excepción técnica rápida.",
    question: "¿Cómo respondes al pedido de 'hackear' el demo?",
    options: [
      { id: 'A', text: "Hardcode Aislado (Disposable Demo): Creas una rama separada o un prototipo en código 'sucio' SOLO para el demo, con disclaimer claro de que no es producción. Permites la venta sin contaminar el codebase real. Cobras el esfuerzo como 'Proof of Concept'.", score: 5, type: "Lead (Habilita negocio sin deuda técnica)" },
      { id: 'B', text: "Negarse por Principios: 'No hardcodeamos clientes. El sistema es escalable o no lo es'. Riesgo de perder el deal por rigidez técnica.", score: 1, type: "Bloqueador (Falta visión comercial)" },
      { id: 'C', text: "Implementar en Prod: Hardcodeas el branding en producción usando feature flags para ese cliente específico. Sales cierra el deal inmediatamente con demo real vs mockup.", score: 1, type: "Quick win approach" }
    ],
    explanation: "Ventas necesita cerrar. Ingeniería necesita orden. La opción A satisface ambos: das la herramienta de venta (el demo visual) pero proteges la integridad del sistema (rama aislada/desechable). Un Lead busca el 'Cómo sí', no solo el 'No'."
  },
  {
    id: 'okr_conflict_dashboard',
    category: "Gestión de OKRs",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Ventas exige un dashboard de 'Activity Tracking' para monitorear a sus agentes minuto a minuto. El VP de Producto se opone: 'Nuestros OKRs son de eficiencia, no de vigilancia policial'. Estás atrapado en medio.",
    question: "¿Cómo reasignas recursos con el quarter literalmente terminándose?",
    options: [
      { id: 'A', text: "Obediencia Comercial: Diseñas lo que pide Ventas inmediatamente. Asumes que si ellos traen el dinero, su criterio de gestión debe prevalecer sobre la cultura de producto.", score: 1, type: "Mercenario" },
      { id: 'B', text: "Workshop de Alineación: 'Diseñemos para el Outcome (Ventas), no el Output (Minutos)'. Proponer métricas de éxito que no requieran vigilancia invasiva.", score: 5, type: "Lead (Outcome-Driven)" },
      { id: 'C', text: "Escalación Burocrática: Elevas el conflicto al CEO pidiendo que arbitre entre los dos VPs. Detienes el trabajo hasta tener una resolución formal por escrito.", score: 1, type: "Burocrático" }
    ],
    explanation: "Con 8 días para cerrar Q ante el Board, la única jugada es concentración extrema en el OKR (B). La A pierde 24h críticas en análisis. La C divide esfuerzo cuando necesitas impacto masivo. Cancelar el Dashboard duele, pero los OKRs ante el Board no esperan."
  },

  // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
  {
    id: 'tokens_vs_hardcode_pressure',
    category: "Ingeniería de Diseño",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Estamos a jueves a las 3 PM y hay prisa extrema por lanzar el viernes antes del mediodía (demo con inversor clave). Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después. Configurar los tokens correctamente tomaría 3-4 horas adicionales.",
    question: "¿Cuál es tu postura ante la deuda técnica?",
    options: [
      { id: 'A', text: "Compromiso Controlado: Que usen variables SCSS genéricas ($blue-500, $gray-800) en lugar de hex codes. No es semántico pero al menos es mantenible y permite futuros cambios globales sin romper todo.", score: 3, type: "Operativo (Parche aceptable)" },
      { id: 'B', text: "Negarse rotundamente. Hardcodear bloquea Dark Mode y futuros cambios de branding. El costo de refactorizar después es 10x mayor. Te sientas con ellos ahora mismo a configurar los tokens básicos aunque se trabaje hasta las 7 PM.", score: 5, type: "Lead (Visión Sistémica)" },
      { id: 'C', text: "Autorización con Deuda Registrada: Permites el hardcode por la urgencia del demo, pero creas inmediatamente un ticket P0 de 'Refactor CSS' asignado al siguiente sprint con aprobación del PM y CTO.", score: 1, type: "Pragmático (Alto riesgo)" }
    ],
    explanation: "Con un demo de inversión inminente, la presión es real. Pero un Lead sabe que los tickets de refactor nunca se priorizan (C). La opción B invierte tiempo ahora para evitar multiplicar el costo después. La A es un parche que al menos mantiene mantenibilidad básica."
  },
  {
    id: 'legacy_ui_refactor_strategy',
    category: "Estrategia de Migración",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "El producto tiene 4 estilos de botones legacy (Angular, React, jQuery, Vanilla). Unificar implica riesgo de bugs; NPS cayó 6 puntos (52→46) y clientes perciben inconsistencia. CEO y VP de Engineering advierten que un refactor masivo tomaría 8‑12 semanas y podría afectar la estabilidad del 40% del producto. Board revisa en 3 semanas.",
    question: "¿Cuál es tu estrategia de limpieza con NPS cayendo y Board evaluando pronto?",
    options: [
      { id: 'A', text: "Estrategia 'Boy Scout Rule': Acuerdo formal con CTO para que cada vez que se toque un archivo legacy, sea obligatorio actualizar componentes (Definition of Done). Migración progresiva que no detiene el roadmap, aunque sea lenta.", score: 5, type: "Lead (Incremental sistemático)" },
      { id: 'B', text: "Forward Only + Narrativa: Aplicar nuevo sistema SOLO en features nuevas. Comunicar externamente que es una 'Brand Evolution' gradual. Aceptas la inconsistencia temporal para no frenar delivery ni arriesgar bugs.", score: 3, type: "Pragmático con spin de marketing (Apuesta arriesgada)" },
      { id: 'C', text: "Design Debt Sprint: Presentar business case (NPS = Churn) para pausar features no-críticas por 2 semanas y unificar las top 20 pantallas. Inversión de shock para recuperar confianza rápida.", score: 1, type: "Bold con riesgo político (Promesa difícil de cumplir)" }
    ],
    explanation: "Los 'Refactor Sprints' dedicados (C) rara vez se aprueban porque no generan revenue visible. La opción B mantiene el problema indefinidamente. La estrategia 'Boy Scout' (A) es la única sostenible: pagas deuda técnica progresivamente sin detener la operación."
  },
  {
    id: 'component_complexity_detach',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El componente 'Card' de tu Design System en Figma tiene 156 variantes (8 tipos × 3 tamaños × 5 estados × 2 temas + edge cases). Tarda 6-8 segundos en cargar cada vez que alguien lo inserta. En la última auditoría descubriste que el 68% de los diseños nuevos usan 'detach' del componente para trabajar más rápido, rompiendo completamente la consistencia del sistema. Los diseñadores se quejan en retrospectivas que el componente es 'demasiado complejo' y prefieren trabajar con copias locales.",
    question: "¿Cómo resuelves el problema de adopción sin perder la arquitectura del sistema?",
    options: [
      { id: 'A', text: "Refactor de Arquitectura: Auditas y simplificas el componente usando Component Properties modernas de Figma (boolean toggles, instance swap, variant reduction). Reduces de 156 a 40-50 variantes manteniendo flexibilidad. El sistema debe servir al equipo, no al revés.", score: 5, type: "Lead (Optimización sistémica)" },
      { id: 'B', text: "Especialización de Componentes: Divides 'Card' en 4 componentes especializados (Card-Content, Card-User, Card-Product, Card-Feature) con 30-40 variantes cada uno. Reduces complejidad individual aunque aumentes cantidad de componentes.", score: 3, type: "Fragmentación controlada" },
      { id: 'C', text: "Governance + Training: Estableces code reviews de Figma obligatorios donde rechazas archivos con detach. Organizas capacitación mensual sobre uso correcto del componente. Creas documentación interactiva con ejemplos.", score: 1, type: "Enforcement (No resuelve raíz)" }
    ],
    explanation: "Cuando 68% hace 'detach', el problema no es el equipo, es el sistema. La C culpa al usuario y genera resentimiento sin resolver la fricción. La B funciona pero fragmenta el sistema. Un Lead reconoce que si algo es difícil de usar, debe rediseñarse: 156 variantes es over-engineering (A). El mejor sistema es el que desaparece."
  },
  {
    id: 'mobile_first_habit_change',
    category: "Design Ops",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "El equipo diseña en Desktop y 'adapta' a Mobile al final, generando UX móvil pobre. 72% del tráfico es móvil. Los workshops educativos fallaron. El CEO exige resultados inmediatos tras ver una demo rota en su iPhone. Tienes 2 semanas para cambiar un hábito cultural arraigado.",
    question: "¿Cómo fuerzas el cambio de comportamiento cuando la educación falló y tu performance está en juego?",
    options: [
      { id: 'A', text: "Environment Nudge: Cambias los defaults de Figma a mobile (375px) y eliminas templates desktop. Haces que diseñar mobile-first sea el camino de menor resistencia.", score: 5, type: "Lead (Behavioral design del sistema)" },
      { id: 'B', text: "Quality Gate: Rechazas cualquier diseño en Review que no presente mobile primero. Sin mobile, no se aprueba nada. Enforcement estricto.", score: 3, type: "Process enforcement con accountability (Autoridad directa)" },
      { id: 'C', text: "Incentivos: Ligas 'Mobile-First' a las evaluaciones de desempeño. Quien adopte mobile recibe mejores proyectos; quien no, queda relegado.", score: 3, type: "Incentive-based con stakes de carrera (Puede generar resentimiento)" }
    ],
    explanation: "La educación ya falló. La C genera política interna. La B requiere vigilancia constante. La A es behavioral design: cambias el entorno para que el comportamiento correcto sea el más fácil. Un Lead diseña sistemas que moldean hábitos."
  },

  // --- BLOQUE 3: LIDERAZGO, CULTURA & PERSONAS ---
  {
    id: 'senior_toxic_genius_feedback',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
    question: "¿Cómo procedes con este perfil?",
    options: [
      { id: 'A', text: "Mediación Activa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce. Su talento técnico es demasiado valioso para arriesgar perderlo.", score: 3, type: "Niñera (Parche temporal)" },
      { id: 'B', text: "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales donde su velocidad es vital, pero lo mantienes alejado de colaboraciones grupales y code reviews. Optimizas su output técnico mientras proteges la dinámica del equipo.", score: 1, type: "Optimización de Recursos" },
      { id: 'C', text: "Performance Improvement Plan: Inicias un PIP de 30 días enfocado exclusivamente en soft skills y comunicación. O cambia su trato o se va, sin importar su output técnico. La cultura del equipo no es negociable.", score: 5, type: "Lead (Guardián de Cultura)" }
    ],
    explanation: "El costo oculto de un 'Genio Tóxico' es la renuncia de 3-5 profesionales buenos que generan más valor agregado a largo plazo. La opción A solo pospone el problema. La B valida la toxicidad. Un Lead protege la cultura como activo estratégico (C)."
  },
  {
    id: 'mentoria_junior_failure',
    category: "Mentoría & Crecimiento",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    scenario: "Un diseñador Junior está liderando un proyecto pequeño. Ves que va directo a cometer un error de usabilidad que no es crítico (no rompe el pago), pero generará confusión en el usuario.",
    question: "¿Intervienes antes del lanzamiento?",
    options: [
      { id: 'A', text: "Sí, corriges el diseño tú mismo o le das la solución exacta inmediatamente antes del handoff para asegurar la excelencia del producto.", score: 1, type: "Micro-manager (Crea dependencia)" },
      { id: 'B', text: "No. Lo dejas fallar controladamente. Esperas a que salgan los resultados del test de usabilidad o la data real y usas ese momento para enseñarle a analizar y corregir el error.", score: 5, type: "Lead (Maestro)" },
      { id: 'C', text: "Le das una pista sutil ('¿Has pensado en cómo se verá esto en móvil?') esperando que se dé cuenta solo.", score: 3, type: "Coach Pasivo" }
    ],
    explanation: "Si el error no es catastrófico para el negocio, el aprendizaje vivido vale más que la perfección inmediata. Corregirle todo impide que desarrolle criterio propio."
  },
  {
    id: 'burnout_detection_action',
    category: "Bienestar del Equipo",
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    scenario: "Estás a 10 días del lanzamiento más importante del año (investor demo que define la Serie A). Tu diseñador senior está mandando PRs a las 2 AM consistentemente. En el standup menciona 'no dormí mucho pero ya casi termino el rediseño del dashboard'. El equipo completo depende de ese componente. Ayer el CEO te preguntó: '¿Seguro que vamos a llegar?'",
    question: "¿Cómo intervienes sabiendo que el deadline es inamovible y el burnout es inminente?",
    options: [
      { id: 'A', text: "Reconocimiento con Incentivo: Le ofreces un bonus de $2K por 'sprint heroico' y lo destacas en el All-Hands. Motivas el esfuerzo final pero validas la cultura de burnout.", score: -1, type: "Incentiva heroísmo tóxico" },
      { id: 'B', text: "Intervención Estructural: Reduces el alcance del dashboard (cortas 2 features), redistribuyes carga y le prohíbes trabajar post-7 PM. Asumes el costo político con el CEO.", score: 5, type: "Lead (Protege talento, asume riesgo)" },
      { id: 'C', text: "Soporte con Recursos: Le asignas un Junior de asistente para tareas operativas. Ayuda con la carga manual, pero no resuelve la presión mental ni las horas de decisión crítica.", score: 3, type: "Mitigación (No resuelve raíz)" }
    ],
    explanation: "Los 'héroes' que se queman salvando deadlines renuncian 3-6 meses después, costando más que cualquier lanzamiento. La opción A normaliza la cultura tóxica. La C mitiga síntomas pero no detiene el sobretrabajo. Un Lead protege el activo humano aunque eso signifique negociar scope con stakeholders (B)."
  },
  {
    id: 'hiring_profile_gap_logic',
    category: "Contratación Estratégica",
    icon: <Search className="w-6 h-6 text-indigo-500" />,
    scenario: "Tienes presupuesto para 1 rol IC Senior. Tu equipo actual (4 diseñadores) es muy fuerte visualmente - todos vienen de estudios boutique con portfolios Awwwards-tier, pero débil en sistemas complejos (fintech, B2B). Estás perdiendo credibilidad con Product porque les cuesta diseñar flujos de 15+ pasos, estados de error robustos, y lógica condicional compleja. Llega un candidato con portfolio visual 'correcto pero no wow', pero tiene 6 años diseñando core banking en instituciones financieras (BBVA, JP Morgan). Entiende regulaciones, compliance, audit trails.",
    question: "¿Cuál es tu decisión de contratación estratégica?",
    options: [
      { id: 'A', text: "Hire for Excellence: Rechazas al candidato. No puedes bajar la vara visual en un equipo de élite. Prefieres mantener el gap funcional antes que diluir la calidad estética del equipo.", score: 1, type: "Purista (Irrealista, bloquea progreso)" },
      { id: 'B', text: "Hire for Gaps: Lo contratas. Priorizas resolver el bloqueo lógico/estructural sobre la uniformidad visual. Tus seniors pueden pulir la UI, pero él trae el conocimiento de banca que falta.", score: 5, type: "Lead (Team building estratégico)" },
      { id: 'C', text: "Freelance Bridge: Contratas un freelance visual fuerte para apoyar en proyectos de alto impacto visual mientras continúas buscando el candidato perfecto full-time. Mantienes la opción abierta.", score: 1, type: "Indeciso (No resuelve gap estructural)" }
    ],
    explanation: "Contratas para cubrir brechas del equipo, no para clonar lo que ya tienes. La A asume que existe el 'unicornio' perfecto y puedes esperar, cuando tu credibilidad con Product se degrada cada sprint. La C es parche temporal costoso. Un equipo de puros Visual Designers fallará en productos B2B complejos. La diversidad de expertise hace al equipo más resiliente (B)."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'legacy_code_rewrite_temptation',
    category: "Estrategia de Migración",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
    question: "¿Cuál es tu postura como stakeholder de diseño?",
    options: [
      { id: 'A', text: "Apoyar el rewrite completo: Detener features nuevas para reescribir todo el frontend. Es la única forma de eliminar la deuda técnica de raíz y modernizar el stack de una vez.", score: 1, type: "Ingenuo (Gran Bomba)" },
      { id: 'B', text: "Modular Rewrite: Migrar pantalla por pantalla, permitiendo coexistencia temporal. Priorizar vistas con más tráfico para validar valor incrementalmente.", score: 5, type: "Lead (Incremental De-Risking)" },
      { id: 'C', text: "Priorizar Features: Si el código actual funciona y es estable, priorizar features nuevas que generen revenue. El refactoring puede esperar hasta que haya capacidad disponible.", score: 3, type: "Priorización de Features" }
    ],
    explanation: "Los 'Big Bang Rewrites' casi siempre fallan (A). La migración incremental (B) permite entregar valor mientras se moderniza sin apostar todo."
  },
  {
    id: 'design_system_v2_breaking_changes',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Quieres lanzar la V2 del Design System con cambios radicales (nuevos tokens, arquitectura de componentes). Ingeniería dice que romperá 200 archivos y tomará 3 sprints migrar todo.",
    question: "¿Cómo lanzas la V2 sin paralizar la operación?",
    options: [
      { id: 'A', text: "Code Freeze & Migración: Pausar features por 3 sprints para dedicar al equipo a la migración completa. Doloroso ahora, pero garantiza base limpia sin deuda futura.", score: -1, type: "Big Bang (Mata el roadmap)" },
      { id: 'B', text: "Versionado Coexistente: Publicar V2 en namespace separado, permitiendo convivencia. Migrar gradualmente por módulos durante 6 meses sin detener el roadmap.", score: 5, type: "Lead (Graceful Migration)" },
      { id: 'C', text: "Fragmentación Táctica: Lanzar solo componentes nuevos en V2. Mantener los viejos sin cambios. Aceptas inconsistencia visual temporal para no bloquear.", score: 1, type: "Fragmentación (Dos sistemas eternos)" }
    ],
    explanation: "Forzar una migración masiva (A) detiene el negocio. La coexistencia temporal (B) permite evolucionar sin destruir lo que funciona."
  },
  {
    id: 'production_bug_major_incident',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Un cambio de diseño 'menor' (quitar un paso de confirmación) causó que 50,000 usuarios enviaran datos privados a una URL pública por error. Es un Data Leak masivo. Legal está redactando notificaciones de brecha. El CTO dice públicamente: 'Diseño insistió en quitar la confirmación para reducir fricción'. Todos te miran.",
    question: "¿Cómo gestionas la crisis de reputación y responsabilidad?",
    options: [
      { id: 'A', text: "Análisis de Proceso: Argumentas que el error fue sistémico (Ingeniería aprobó, QA validó). Propones una revisión del proceso de testing y aprobación para evitar futuros fallos.", score: 1, type: "Análisis de Proceso" },
      { id: 'B', text: "Extreme Ownership: Asumes la responsabilidad. Presentas plan de reversión inmediato (1h), notificación empática a usuarios y auditoría de flujos para mañana.", score: 5, type: "Lead (Liderazgo en Crisis)" },
      { id: 'C', text: "Silencio Estratégico: Dejas que Legal y PR gestionen la comunicación externa para evitar responsabilidad legal personal. Te enfocas solo en el fix técnico.", score: -1, type: "Cobarde" }
    ],
    explanation: "En una crisis grave, quien asume la responsabilidad y ofrece un plan (B) se convierte en el líder. Culpar a otros (A) o esconderse (C) destruye tu carrera. Ownership genera confianza incluso en el error."
  },
  {
    id: 'user_backlash_social_media',
    category: "Community Management",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Cambiaste el modelo de precios y la UI para hacerlo más difícil de cancelar. Un influencer de TikTok hizo un video criticándolo y el rating en el App Store bajó de 4.8 a 3.2 en dos días. Marketing está pidiendo respuestas.",
    question: "¿Cómo respondes a la crisis de reputación?",
    options: [
      { id: 'A', text: "Ignorar el Ruido: 'Son trolls de internet, se cansarán en una semana'. Mantienes el curso, asumiendo que la mayoría silenciosa está satisfecha.", score: 1, type: "Negligente" },
      { id: 'B', text: "Corrección y Transparencia: Publicas update reconociendo el error, simplificas la UI y respondes reviews. Recuperas confianza con acción.", score: 5, type: "Lead (Escucha y Actúa)" },
      { id: 'C', text: "Respuesta Defensiva: Publicas comunicado explicando que 'cumplimos con los términos'. Intentas educar al usuario sobre por qué el cambio es correcto.", score: 1, type: "Sordo (Tone-deaf)" }
    ],
    explanation: "Cuando el rating de la App cae drásticamente, afecta la adquisición futura. Ignorar (A) o defenderse (C) empeora todo. La única salida es corregir el producto y comunicar la corrección (B)."
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
    explanation: "Mentir a inversionistas (A) es suicida si se descubre. Los slides (C) pierden el impacto del producto vivo. La opción B muestra resiliencia operativa y confianza en el producto real."
  },
  {
    id: 'crisis_key_designer_quits',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Users className="w-6 h-6 text-red-600" />,
    scenario: "Tu diseñador estrella, que lidera el rediseño completo del sistema de pagos (60% completado), renuncia abruptamente por una oferta de FAANG. Tiene 2 semanas de notice. El deadline con el cliente no se puede mover.",
    question: "¿Cómo gestionas la transición de conocimiento?",
    options: [
      { id: 'A', text: "Contraoferta agresiva: Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas. Compras tiempo pero sientas un precedente peligroso.", score: -1, type: "Desesperado (Insostenible)" },
      { id: 'B', text: "Knowledge Transfer Intensivo: 2 semanas de SOLO documentación, Looms y pair design con el siguiente senior. Nada de features nuevas.", score: 5, type: "Lead (Minimiza Pérdida)" },
      { id: 'C', text: "Contratar Freelance: Buscas un senior externo urgente para que trabaje en paralelo y aprenda observando. Es costoso y la curva de aprendizaje limitará su aporte.", score: 1, type: "Costoso (Curva de aprendizaje)" }
    ],
    explanation: "Contraatacar con dinero (A) genera resentimiento si cedes bajo presión. La opción B maximiza la transferencia de conocimiento estructurado en el tiempo limitado disponible."
  },
  {
    id: 'sales_promise_impossible_timeline',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
    question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
    options: [
      { id: 'A', text: "Forzar al equipo: Hacer un MVP sucio en 3 semanas con overtime. Cumples la promesa de ventas pero quemas al equipo y generas deuda técnica brutal.", score: -1, type: "Burnout Factory (Deuda técnica brutal)" },
      { id: 'B', text: "Renegociación con el Cliente: Ventas y Product ofrecen plan de entrega por fases (básico en 3 semanas, full en 3 meses). Transparencia > Promesas rotas.", score: 5, type: "Lead (Realismo Profesional)" },
      { id: 'C', text: "Solución No-Code: Usar Zapier/Make para cumplir la promesa funcionalmente mientras construyes la integración real. Permite entregar valor inmediato al cliente mientras se desarrolla la solución permanente.", score: 1, type: "Solución Temporal" }
    ],
    explanation: "Prometer lo imposible y luego fallar (A) destruye la confianza del cliente Y del equipo. La opción B gestiona expectativas con honestidad profesional desde el principio."
  },
  {
    id: 'sales_discount_feature_negotiation',
    category: "Producto vs Ventas",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Ventas ofreció un 40% de descuento anual a un cliente a cambio de construir una feature específica de reporting que ellos necesitan. El cliente aceptó. Ahora Product debe entregarla en 2 meses sin haber participado en la negociación.",
    question: "¿Cómo estableces límites para que esto no vuelva a pasar?",
    options: [
      { id: 'A', text: "Cumplir y Documentar: Cumples el compromiso actual para mantener la relación con el cliente. Documentas el proceso y propones al CEO establecer políticas para prevenir situaciones similares a futuro.", score: 3, type: "Cumplimiento con Documentación" },
      { id: 'B', text: "Proceso de 'Deal Desk': Comité obligatorio (Product+Eng+Sales) para aprobar customizaciones antes de cerrar contratos. Ventas no puede prometer unilateralmente.", score: 5, type: "Lead (Proceso de Gobernanza)" },
      { id: 'C', text: "Cobro Interno: Construir la feature pero descontar el costo de oportunidad del presupuesto de Ventas. Es una maniobra política que genera fricción sin prevenir.", score: 3, type: "Político (No previene)" }
    ],
    explanation: "Quejarse después (A) no cambia nada. La opción B institucionaliza un proceso donde Product es stakeholder obligatorio en negociaciones que afectan el roadmap."
  },
  {
    id: 'stakeholder_ceo_personal_opinion',
    category: "Gestión de Stakeholders",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El VP de Producto volvió de una conferencia obsesionado con 'Conversational UI'. Te pide reemplazar la navegación principal con un chat. Tienes 500k usuarios que dependen de la navegación actual. Él insiste: 'Es el futuro, hay que innovar'.",
    question: "¿Cómo gestionas una idea ejecutiva disruptiva pero riesgosa?",
    options: [
      { id: 'A', text: "Obedecer: Diseñas el chat tal cual lo pide. Asumes que su intuición es correcta y evitas el conflicto político, aunque sacrifiques la usabilidad.", score: 1, type: "Mercenario" },
      { id: 'B', text: "Fake Door / Beta Test: 'Hagamos un experimento beta y midamos uso'. Usas data para validar (o matar) la idea sin decir 'no' de frente.", score: 5, type: "Lead (Data como Escudo)" },
      { id: 'C', text: "Ensayo de UX: Le envías artículos académicos explicando por qué el chat es mala navegación. Es una respuesta teórica que probablemente será ignorada.", score: 1, type: "Académico" }
    ],
    explanation: "Pelear opiniones con teoría (C) suele fallar contra ejecutivos emocionados. La opción B canaliza la emoción hacia un experimento controlado. Si nadie usa el chat, la data mata la idea por ti."
  },
  {
    id: 'stakeholder_legal_vs_ux_tension',
    category: "Gestión de Stakeholders",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
    question: "¿Cómo medias entre compliance y experiencia?",
    options: [
      { id: 'A', text: "Sided with Legal: El riesgo legal es absoluto. Aceptas el disclaimer tal cual para evitar problemas regulatorios, aunque la UX sufra significativamente.", score: -1, type: "Rendición (UX destruida)" },
      { id: 'B', text: "Workshop de Soluciones: Reúnes a Legal + UX + Product para co-diseñar alternativas (ej: disclaimer colapsado, tooltips) que cumplan ambos objetivos.", score: 5, type: "Lead (Facilitador de Soluciones)" },
      { id: 'C', text: "Workaround Técnico: Mostrar el disclaimer solo en el primer uso y ocultarlo después. Asumes el riesgo de que Legal objete si hay una auditoría estricta.", score: 1, type: "Workaround (Legal puede objetar)" }
    ],
    explanation: "Legal y UX no son enemigos si colaboran. La opción B crea un espacio de problem-solving conjunto en lugar de guerra de trincheras."
  },
  {
    id: 'strategy_platform_vs_feature_focus',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Producto quiere convertir el producto en una 'plataforma' con APIs públicas y marketplace. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver. El equipo de ingeniería está dividido.",
    question: "¿Cuál es tu recomendación estratégica al VP?",
    options: [
      { id: 'A', text: "Apoyar la visión de plataforma: Pensar en grande es clave. Iniciar la transición a plataforma ahora posicionará a la empresa como líder del mercado a largo plazo.", score: -1, type: "Visionario sin fundamento" },
      { id: 'B', text: "Product-Market Fit First: Argumentar que antes de ser plataforma, deben dominar su caso de uso core. Las plataformas se construyen DESPUÉS de tener tracción sólida.", score: 5, type: "Lead (Secuenciación Estratégica)" },
      { id: 'C', text: "Enfoque Híbrido: Proponer construir solo las APIs públicas como primer paso, posponiendo el marketplace completo para no diluir los recursos del equipo actual.", score: 1, type: "Compromiso (Diluye el foco igual)" }
    ],
    explanation: "Muchas startups mueren intentando ser plataforma demasiado pronto. La opción B secuencia: primero dominar el vertical, luego expandir la superficie de ataque."
  },
  {
    id: 'strategy_competitor_feature_parity',
    category: "Estrategia de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "El competidor principal acaba de lanzar 10 features nuevas en un mega-release. Product Manager entra en pánico y quiere copiar todas las features para 'no quedarse atrás' en la matriz de comparación.",
    question: "¿Cómo evalúas qué copiar y qué ignorar?",
    options: [
      { id: 'A', text: "Auditoría de Churn: Analizar si perdiste clientes citando esas features específicas. Si no hay evidencia de pérdida, no es urgente.", score: 5, type: "Lead (Evidence-Based)" },
      { id: 'B', text: "Copiar las 3-4 features más visibles para actualizar la página de comparación y calmar a Ventas.", score: 1, type: "Defensivo (Feature parity race)" },
      { id: 'C', text: "Ignorar al competidor completamente y seguir tu roadmap original. El foco es más importante que la reacción.", score: 1, type: "Dogmático (Puede ser arriesgado)" }
    ],
    explanation: "Copiar por pánico (B) te convierte en follower. Ignorar completamente (C) puede ser ingenuo. La opción A usa data de churn para priorizar racionalmente."
  },
  {
    id: 'designops_figma_file_chaos',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El workspace de Figma es un caos: 400 archivos sin nombrar bien, duplicados, versiones antiguas mezcladas con nuevas. Nadie encuentra nada y pierden 30 minutos diarios buscando archivos.",
    question: "¿Cómo implementas orden sin frenar la operación?",
    options: [
      { id: 'A', text: "Cleanup Sprint: Asignar 1 semana completa donde nadie diseña, solo organizan archivos. Detener la producción para limpiar la casa de una vez por todas.", score: -1, type: "Utópico (Nunca se aprueba)" },
      { id: 'B', text: "Naming + Governance: Crear estructura de carpetas obligatoria y asignar 'File Owners'. Migrar archivos activos gradualmente mientras archivas los legacy.", score: 5, type: "Lead (Sistema Sostenible)" },
      { id: 'C', text: "Contratación Externa: Contratar un Design Ops Manager o freelance dedicado para que se encargue exclusivamente de ordenar y mantener la biblioteca de archivos. Permite al equipo enfocarse en diseño mientras un especialista gestiona la organización.", score: 1, type: "Especialización Externa" }
    ],
    explanation: "El cleanup masivo (A) nunca pasa. La opción B crea un sistema con roles y reglas que previene que el caos vuelva a crecer."
  },
  {
    id: 'designops_version_control_disaster',
    category: "Design Ops",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "Un diseñador borró accidentalmente 3 días de trabajo en Figma y la funcionalidad de Version History no va tan atrás. No hay backup. El deadline es mañana.",
    question: "¿Cómo prevenis que vuelva a pasar?",
    options: [
      { id: 'A', text: "Implementar un plugin de auto-backup diario de archivos críticos a Google Drive.", score: 5, type: "Lead (Safety Net)" },
      { id: 'B', text: "Capacitar al equipo en el uso correcto de Version History y hacer recordatorios semanales.", score: 1, type: "Educativo (No previene accidentes)" },
      { id: 'C', text: "Backup Manual: Duplicar manualmente los archivos importantes cada viernes como política de equipo. Proceso simple que no requiere herramientas adicionales ni configuración técnica.", score: 1, type: "Backup Manual" }
    ],
    explanation: "Confiar en la memoria humana (B, C) falla eventualmente. La opción A automatiza el backup para que sea imposible perder trabajo sin importar errores humanos."
  },
  {
    id: 'arquitectura_monorepo_vs_separate_systems',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System en Figma. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían compartir componentes.",
    question: "¿Cuál es tu estrategia de consolidación?",
    options: [
      { id: 'A', text: "Silos Independientes: Mantener los sistemas completamente separados. Cada producto optimiza para sus propias necesidades sin la carga de coordinarse con los demás.", score: 1, type: "Silos (Duplicación eterna)" },
      { id: 'B', text: "Design System Core + Extensions: Librería base compartida (primitivos) y permitir que cada producto extienda con componentes específicos.", score: 5, type: "Lead (Shared Foundation)" },
      { id: 'C', text: "Estandarización Total: Forzar un único Design System monolítico para todos los productos. Garantiza consistencia visual absoluta pero ignora las necesidades específicas.", score: 3, type: "Rígido (No refleja realidad)" }
    ],
    explanation: "Sistemas completamente separados (A) duplican trabajo. Un único sistema (C) no reconoce necesidades específicas. La opción B balancea consistencia y flexibilidad."
  },
  {
    id: 'arquitectura_atomic_design_complexity',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Implementaste Atomic Design (Átomos > Moléculas > Organismos > Templates). Ahora el equipo pasa más tiempo debatiendo 'si X es una molécula o un organismo' que diseñando. La taxonomía se volvió un obstáculo.",
    question: "¿Cómo simplificas sin perder estructura?",
    options: [
      { id: 'A', text: "Re-Educación: Mantener Atomic Design y organizar workshops intensivos para alinear al equipo. Asumes que el problema es la falta de comprensión y que con más capacitación el sistema funcionará.", score: -1, type: "Capacitación Intensiva" },
      { id: 'B', text: "Simplificación Pragmática: Colapsar a 2 categorías (Primitives + Components). Si la taxonomía consume más energía que el diseño, está sobrediseñada.", score: 5, type: "Lead (Utilidad > Pureza)" },
      { id: 'C', text: "Anarquía Estructurada: Eliminar la estructura impuesta y permitir que cada squad organice sus componentes como prefiera. Priorizas velocidad sobre consistencia.", score: -1, type: "Caos (Pierde la arquitectura)" }
    ],
    explanation: "Atomic Design puede ser over-engineering para muchos equipos. La opción B reconoce que el sistema debe servir al equipo, no al revés."
  },
  {
    id: 'migracion_forced_upgrade_user_backlash',
    category: "Estrategia de Migración",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "Lanzas una versión 2.0 del producto con nueva arquitectura y fuerza a todos los usuarios a migrar. El 30% de los power users están furiosos porque removiste features 'legacy' que ellos usaban diariamente.",
    question: "¿Cómo gestionas la migración forzada?",
    options: [
      { id: 'A', text: "Mantener la posición: 'La V2 es superior, eventualmente se acostumbrarán'. Ignorar el feedback y asumir que la resistencia al cambio es temporal y natural en cualquier migración.", score: -1, type: "Arrogante (Churn garantizado)" },
      { id: 'B', text: "Feature Parity Roadmap: Escuchar qué features extrañan, evaluar criticidad y comprometerse a reintroducirlos en V2 en 2 meses.", score: 5, type: "Lead (Responsive Migration)" },
      { id: 'C', text: "Acceso Legacy: Ofrecer acceso a la V1 legacy en paralelo para quienes no quieran migrar. Es un parche costoso que duplica el mantenimiento y fragmenta la base de usuarios.", score: 1, type: "Parche (Duplica mantenimiento)" }
    ],
    explanation: "Forzar sin escuchar (A) aliena a tus usuarios más leales. Mantener V1 (C) es costoso. La opción B escucha pain real y construye un plan de mitigación concreto."
  },
  {
    id: 'migracion_sunset_product_line',
    category: "Estrategia de Migración",
    icon: <XCircle className="w-6 h-6 text-red-600" />,
    scenario: "La empresa decidió discontinuar un producto que tiene 500 usuarios activos (pequeño pero leal). Tienes 6 meses para migrarlos al producto principal o perderlos. El producto principal no tiene feature parity.",
    question: "¿Cuál es tu estrategia de sunset?",
    options: [
      { id: 'A', text: "Hard Sunset: Apagar en la fecha anunciada. Los usuarios tuvieron aviso. Enfocas recursos en el producto futuro, no en el pasado.", score: -1, type: "Corporate Cruelty (Churn 100%)" },
      { id: 'B', text: "Migration Concierge: Asignar recursos para construir features críticas faltantes y ofrecer onboarding personalizado. Tratas el sunset como retención.", score: 5, type: "Lead (Retención Activa)" },
      { id: 'C', text: "Compensación Monetaria: Ofrecer descuentos agresivos (50%) en el nuevo producto. Intentas comprar la lealtad perdida con ahorro financiero.", score: 1, type: "$$$ (No resuelve el gap de features)" }
    ],
    explanation: "500 usuarios pequeños pueden incluir clientes de alto valor o advocates. La opción B trata el sunset como un problema de retención, no solo como un apagado técnico."
  },
  {
    id: 'manageup_ceo_designs_features',
    category: "Manage Up",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "El CEO (ex-diseñador en su startup anterior) abre Figma y empieza a diseñar un 'Tab de Notificaciones' directamente en el archivo de producción. Lo comparte en Slack con Engineering diciendo: 'Podemos lanzar esto la próxima semana, ¿verdad?'. No habló contigo ni con Producto. El diseño rompe 4 patterns del Design System, no tiene estados de loading/error, y resuelve un problema que solo 2 usuarios mencionaron en NPS. Engineering está confundido esperando tu aprobación.",
    question: "¿Cómo manejas al CEO que bypasea proceso sin confrontación política?",
    options: [
      { id: 'A', text: "Confrontación Directa: Escribir al CEO explicando que violó el proceso y el Design System. Defiendes la integridad del diseño pero arriesgas tu capital político al avergonzarlo.", score: 1, type: "Valiente (Riesgo político)" },
      { id: 'B', text: "Validación + Redirección: Agradecer el input y proponer sesión para 'refinar juntos'. Introduces research y patterns sutilmente. Conviertes su impulso en colaboración estructurada.", score: 5, type: "Lead (Diplomatic Judo)" },
      { id: 'C', text: "Obediencia Ciega: Implementar lo que pidió tal cual. Asumes que su visión estratégica justifica romper los estándares de calidad y procesos que tú mismo estableciste.", score: 1, type: "Obediente (Pierde autonomía)" }
    ],
    explanation: "La opción A es suicida políticamente. La C normaliza el bypass y destruye tu autoridad. La B es judo político: validas el interés del CEO (no lo humillas), pero canalizas su energía dentro de un proceso correcto. 'Refinar juntos' le da ownership mientras tú introduces rigor de UX."
  },
  {
    id: 'manageup_cto_blockchain_pet_project',
    category: "Manage Up",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "El Director de Innovación quiere integrar blockchain al producto y pide un 'Wallet de NFTs' urgente para un demo. Cero research, cero demanda de usuarios. Tienes tickets críticos de UX en el checkout bloqueados.",
    question: "¿Cómo gestionas el pet project sin quemar puentes?",
    options: [
      { id: 'A', text: "Diseñar el Wallet: 'Si Innovación lo pide, lo hacemos'. Desvías recursos críticos del checkout para complacer al directivo, sabiendo que es un desperdicio.", score: 1, type: "Obediente (Desperdicia recursos)" },
      { id: 'B', text: "Validación Rápida: 'Hagamos un Discovery Sprint de 3 días. Si validamos interés, priorizamos'. Usas el proceso de diseño para filtrar malas ideas con data.", score: 5, type: "Lead (Research como filtro)" },
      { id: 'C', text: "Priorización de Roadmap: Explicar que los tickets críticos de checkout tienen mayor impacto en revenue. Proponer evaluar el wallet de NFTs después de resolver los bloqueos actuales.", score: 1, type: "Priorización de Roadmap" }
    ],
    explanation: "Negarse por ideología (C) es malo. Obedecer ciegamente (A) también. La opción B usa las herramientas de diseño (Discovery) para evaluar objetivamente la idea. Si es mala, la data la matará, no tú."
  },
  {
    id: 'manageup_cfo_design_system_roi',
    category: "Manage Up",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Necesitas $120K para contratar un Design Systems Engineer. El VP de Engineering cuestiona la inversión: '¿Por qué necesitamos un rol dedicado si los developers ya usan librerías de UI?'. El Head of Product te pide que justifiques el headcount con ROI claro antes de aprobarlo en el budget del Q.",
    question: "¿Cómo traduces el valor del Design System a lenguaje de ingeniería y negocio?",
    options: [
      { id: 'A', text: "Hablar de Craft: Explicar que los Design Systems mejoran la consistencia visual y la calidad del código. Apelar a 'best practices' y deuda técnica, aunque no resuene con finanzas.", score: -1, type: "Craft Talk (No convence a Eng)" },
      { id: 'B', text: "ROI en Velocity: Mostrar data: un componente toma 4h hoy vs 20min con DS. Ahorro de 180h/Q = 1 headcount liberado. El rol se paga solo en eficiencia.", score: 5, type: "Lead (Business Case sólido)" },
      { id: 'C', text: "Benchmark Competitivo: 'Airbnb y Uber tienen este rol'. Argumentar que es estándar de industria y que no tenerlo nos deja atrás en la guerra por el talento.", score: 1, type: "Apelación a autoridad (Débil)" }
    ],
    explanation: "La opción A habla un idioma que Engineering ignora. La C es débil. La B habla el idioma del VP: velocity y eficiencia. Mostrar que el rol libera capacidad de feature development convierte el 'gasto' en 'acelerador'."
  },
  {
    id: 'manageup_cto_designers_should_code',
    category: "Manage Up",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "En una reunión ejecutiva, el CTO dice públicamente: 'No entiendo por qué los diseñadores no implementan sus propios diseños en código. En mi anterior startup, los diseñadores escribían React. Seríamos mucho más eficientes'. Tienes un equipo de 5 diseñadores: 2 saben HTML/CSS básico, 1 sabe React, 2 son puramente visuales. El CTO sugiere que 'los diseñadores que no codean son menos valiosos'. Algunos diseñadores te escriben después preocupados por su job security.",
    question: "¿Cómo defiendes la especialización del equipo sin antagonizar al CTO?",
    options: [
      { id: 'A', text: "Upskilling Forzado: Implementar 'Viernes de Code' obligatorios donde todos aprenden React. Intentas cerrar la brecha percibida por el CTO, aunque distraiga del core skill de diseño.", score: 1, type: "Appeasement (Distrae del core skill)" },
      { id: 'B', text: "Reframe de Roles: Explicar que Design Engineers son valiosos, pero no todos deben serlo. 'Specialization > Generalization'. No todos los devs diseñan, no todos los designers codean.", score: 5, type: "Lead (Claridad de roles)" },
      { id: 'C', text: "Modelo Híbrido: Proponer contratar 1 Design Engineer que haga handoff técnico mientras los diseñadores puros se enfocan en research y estrategia. Creas un puente técnico sin forzar a todos.", score: 3, type: "Estructural (Resuelve con hiring)" }
    ],
    explanation: "La opción A desvía tiempo de diseñadores a aprender código cuando su valor está en UX/Research. La C es buena pero no responde la pregunta de fondo. La B educa al CTO sobre roles modernos: Design Engineers existen Y son valiosos, pero no todos los diseñadores deben ser híbridos. La especialización permite profundidad."
  },
  {
    id: 'political_ma_duplicate_teams_layoffs',
    category: "Crisis Política Organizacional",
    icon: <AlertOctagon className="w-6 h-6 text-red-700" />,
    scenario: "Tu empresa adquirió a un competidor. Ahora hay dos equipos de diseño (6 tuyos, 4 de ellos). El Head of Design te pide proponer una estructura unificada de 7 personas. Tienes que recomendar quiénes se quedan y quiénes se van (o son reasignados). El equipo adquirido tiene talento fuerte pero procesos caóticos.",
    question: "¿Cómo decides la estructura del nuevo equipo unificado?",
    options: [
      { id: 'A', text: "Meritocracia Ciega: Evaluar a los 10 diseñadores con un mismo criterio (portfolio + skills) y recomendar a los 7 mejores, sin importar el origen. Puede significar perder gente de tu equipo original.", score: 5, type: "Lead (Doloroso pero justo)" },
      { id: 'B', text: "Proteger a Tu Equipo: Recomendar mantener a tus 6 diseñadores (conocen el sistema) y solo 1 del equipo adquirido. Priorizar continuidad operativa sobre talento potencial.", score: 1, type: "Tribal (Injusto)" },
      { id: 'C', text: "Split Político: Proponer 4 tuyos y 3 de ellos para 'balancear' culturas. Decisión basada en óptica política, no en skills.", score: 3, type: "Diplomático (Evita meritocracia)" }
    ],
    explanation: "La opción B es tribal y crea resentimiento. La C es política pero no optimiza talento. La A es la única forma de construir un equipo de alto rendimiento real: evaluar skills objetivamente. Como Lead, tu lealtad es a la calidad del equipo, no solo a tus amigos."
  },
  {
    id: 'enterprise_client_custom_request',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Tu cliente Enterprise más grande (Banco LATAM que paga $800K/año, 18% de tu ARR total) solicita una feature crítica para su flujo regulatorio interno: exportar audit trails en formato XML propietario de su sistema legacy. Estimación: 6 semanas de desarrollo. Sales dice que si no lo builds, migran a competidor en Q2. Solo este cliente lo usaría - ningún otro banco tiene ese sistema legacy específico.",
    question: "¿Cómo evalúas la solicitud balanceando revenue vs integridad de producto?",
    options: [
      { id: 'A', text: "Construirlo Inmediatamente: $800K/año (18% ARR) justifica cualquier request. Priorizas el cash flow sobre la integridad del roadmap. El concepto de 'pureza de producto' no paga salarios.", score: 1, type: "Revenue-first (Crea deuda técnica)" },
      { id: 'B', text: "Strategic Build vs Buy: Si el desarrollo es generalizable (ej: SAP, Oracle), se construye en core. Si es 100% custom, se ofrece como Professional Services con costo adicional ($150K).", score: 5, type: "Lead (ROI-based decision)" },
      { id: 'C', text: "Rechazarlo Por Principio: 'Somos SaaS, no consultora'. Ofreces API abierta para que ellos construyan la integración. Arriesgas perder el cliente más grande por dogma de producto.", score: 3, type: "Purista (Alto riesgo financiero)" }
    ],
    explanation: "La A convierte el producto en consultora. La C aplica dogma sin considerar que 18% ARR es existencial. Un Lead evalúa: ¿el feature tiene abstracción generalizable? ¿El LTV justifica el costo? Si no, Professional Services monetiza sin contaminar roadmap (B)."
  },
  {
    id: 'pricing_page_complexity',
    category: "Estrategia de Producto",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "La página de Pricing tiene 5 tiers de planes con 30+ features listadas en una tabla de comparación. Analytics muestra 60% de bounce rate en esta página (vs 25% promedio del sitio). Session recordings muestran usuarios scrolleando arriba y abajo repetidamente sin decidir.",
    question: "¿Cómo simplificas la decisión de compra?",
    options: [
      { id: 'A', text: "Plan Finder Quiz: Diseñas un quiz interactivo de 5 preguntas (tamaño de empresa, use case, presupuesto) que recomienda el plan ideal. Reduces la carga cognitiva guiando al usuario paso a paso.", score: 1, type: "Creativo (Agrega fricción)" },
      { id: 'B', text: "Good-Better-Best: Reduces a 3 planes solamente, listas solo las 5 diferencias clave visibles, y escondes el resto en un accordion 'Ver comparación completa'. Eliminas la parálisis por exceso de opciones.", score: 5, type: "Lead (Paradox of Choice)" },
      { id: 'C', text: "Social Proof Nudge: Mantienes los 5 planes pero agregas un badge de 'Más Popular' o 'Recomendado para empresas como la tuya' en el tier medio-alto para guiar la decisión con autoridad.", score: 3, type: "Nudge (Mejora parcial)" }
    ],
    explanation: "60% de bounce es evidencia de parálisis por análisis. La A agrega pasos adicionales cuando el problema es exceso de opciones. La C ayuda pero no elimina la complejidad. La B aplica el principio de 'Paradox of Choice': menos opciones con diferencias claras facilitan la decisión (B)."
  },
  {
    id: 'political_founder_conflict_design_caught',
    category: "Crisis Política Organizacional",
    icon: <Shield className="w-6 h-6 text-orange-700" />,
    scenario: "Los dos Co-Founders (CEO y CTO) están en conflicto abierto sobre la dirección del producto. El CEO quiere pivotar a un modelo B2B Enterprise. El CTO quiere duplicar down en B2C consumer. Ambos te piden diseños que soporten SU visión. El CEO te dice: 'Diseña un dashboard Enterprise con analytics avanzados'. El CTO te dice al día siguiente: 'Ignora eso, diseña una app móvil consumer-first'. En las reuniones ejecutivas discuten públicamente. El equipo de diseño está paralizado sin saber qué priorizar. El VP de Producto renunció la semana pasada por 'diferencias estratégicas'. Tú eres el siguiente en la línea de fuego.",
    question: "¿Cómo navegas el conflicto de founders sin arruinar tu carrera?",
    options: [
      { id: 'A', text: "Diseño Paralelo: Dividir al equipo para prototipar ambas visiones al mismo tiempo. Intentas complacer al ambos pero desperdicias recursos valiosos en trabajo que será descartado.", score: 3, type: "Neutral (Desperdicia recursos)" },
      { id: 'B', text: "Aliarte con uno: Elegir la visión que TÚ crees correcta (ej: B2B) y apostar todo a ella. Es una jugada valiente pero te convierte en enemigo político del otro founder.", score: 1, type: "Valiente (Suicida)" },
      { id: 'C', text: "Forzar Alineación: Proponer 'Strategy Workshop' donde CEO y CTO presenten data. Facilitas la decisión y no diseñas nada hasta que haya una visión unificada.", score: 5, type: "Lead (Lidera hacia arriba)" }
    ],
    explanation: "La opción B es suicida: te conviertes en peón de un founder vs el otro (el que pierde te odiará). La A desperdicia recursos del equipo diseñando dos futuros mutuamente excluyentes. La C es liderazgo real: te niegas a diseñar en medio del caos y fuerzas a los founders a alinearse ANTES de pedirte ejecución. Es incómodo pero es tu única jugada de supervivencia."
  },
  {
    id: 'political_vp_product_fired_interim_no_design',
    category: "Crisis Política Organizacional",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "El VP de Producto (tu jefe directo y mentor de 2 años) fue despedido abruptamente. El CEO anuncia que el CFO será 'Interim Head of Product' mientras buscan reemplazo. El CFO tiene cero experiencia en producto o diseño; su background es finanzas en una consultora. En su primera reunión contigo dice: 'No entiendo para qué necesitamos tanto diseño. ¿No podemos usar templates de Bootstrap y enfocarnos en features que generen revenue rápido?'. Canceló tu presupuesto de research ($30K/año) y sugirió que 'los diseñadores podrían ayudar con sales decks mientras hay poco trabajo de producto'. Tu equipo está en pánico.",
    question: "¿Cómo proteges al equipo bajo un líder interim hostil a diseño?",
    options: [
      { id: 'A', text: "Escalación Directa al CEO: Pedir una reunión 1-on-1 con el CEO para explicar que el CFO no entiende diseño y está tomando decisiones que destruyen capacidad de producto. Pedir reporte directo temporal al CEO.", score: 3, type: "Valiente (Riesgo político alto)" },
      { id: 'B', text: "Educar al CFO con ROI: Preparar un business case mostrando cómo el diseño impacta revenue: aumento de conversión por rediseños, reducción de churn por UX, etc. Traducir diseño a lenguaje financiero que el CFO entienda.", score: 5, type: "Lead (Bridge de lenguajes)" },
      { id: 'C', text: "Modo Supervivencia: Acatar las órdenes del CFO (Bootstrap, sales decks) temporalmente mientras el CEO busca VP de Producto permanente. Mantener bajo perfil político hasta que pase la tormenta.", score: 3, type: "Supervivencia (Pierde momentum)" }
    ],
    explanation: "La opción A es nuclear: puede funcionar pero quemas puentes con el CFO (quien tiene poder financiero). La C es segura pero aceptas 3-6 meses de retroceso en capacidad de diseño. La B es la jugada inteligente: el CFO respeta ROI y data financiera. Mostrar que 'diseño = revenue' en su lenguaje (CAC, LTV, conversion rate) puede convertirlo de antagonista a aliado. Si hablas su idioma, puede escucharte."
  },
];
