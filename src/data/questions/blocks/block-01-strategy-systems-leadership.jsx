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
 * Estrategia, Sistemas & Liderazgo
 */
export const block_01_strategy_systems_leadership_questions = [

    // --- BLOQUE 1: ESTRATEGIA, NEGOCIO & MÉTRICAS ---
    {
      id: 'strategy_pivot_burnout',
      category: "Gestión de Crisis & Liderazgo",
      icon: <Target className="w-6 h-6 text-red-600" />,
      scenario: "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en la funcionalidad 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales' por una necesidad crítica de flujo de caja. El equipo de diseño está visiblemente furioso y desmotivado. Tu runway es de solo 4 meses.",
      question: "¿Cuál es tu primer movimiento como Lead para gestionar esta crisis?",
      options: [
        { id: 'A', text: "Gestión de Cambio Radical: Reúnes al equipo de inmediato, validas su frustración ('Esto apesta y tienen razón'), pero explicas con total transparencia la razón financiera de supervivencia detrás del cambio. Re-enfocas la energía en el nuevo desafío hoy mismo.", score: 5, type: "Lead (Resiliencia)" },
        { id: 'B', text: "Protección del Talento: Negociar con el CEO una semana de 'cooldown' dedicada a documentar aprendizajes del proyecto cancelado y realizar una transición estructurada. El equipo necesita procesar el cambio para mantener la motivación a largo plazo.", score: 4, type: "Protector (Empático)" },
        { id: 'C', text: "Cierre con Dignidad: Organizas una sesión de 'Retrospectiva de Aprendizaje' el lunes donde el equipo presenta al CEO qué descubrieron en Cobranza Automática que podría aplicarse a futuro, validando su trabajo antes de pivotar.", score: 4, type: "Cultural (Demora)" }
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
        { id: 'A', text: "Alineación Privada Pre-QBR: Reúnes al VP de Producto y CMO en privado. Muestras el funnel completo: 'Tráfico subió, pero conversión bajó. El revenue neto es -8%'. Propones presentar ambos datos como 'Aprendizaje de Calidad de Tráfico' en lugar de fracaso. Evitas humillación pública pero corriges la narrativa.", score: 5, type: "Lead (Diplomacia basada en datos)" },
        { id: 'B', text: "Desmentir en Público: Intervienes en el All-Hands o Slack público aclarando que el revenue bajó. 'El tráfico no paga las cuentas'. Proteges la verdad pero te ganas un enemigo eterno en Marketing.", score: 1, type: "Tóxico (Verdad sin tacto)" },
        { id: 'C', text: "Silencio Táctico: Dejas que Marketing celebre su métrica. En tu reporte de Producto, te enfocas solo en optimizar el checkout, asumiendo que el tráfico es problema de ellos. Evitas conflicto.", score: 2, type: "Silo (Falta de ownership)" }
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
        { id: 'B', text: "Negarse por Principios: 'No hardcodeamos clientes. El sistema es escalable o no lo es'. Riesgo de perder el deal por rigidez técnica.", score: 2, type: "Bloqueador (Falta visión comercial)" },
        { id: 'C', text: "Implementar en Prod: Hackeas el CSS en producción para que el cliente lo vea. Generas deuda técnica inmediata y riesgo de romper estilos para otros.", score: 1, type: "Irresponsable" }
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
        { id: 'A', text: "Diseñar lo que pide Ventas. Ellos traen el revenue, tienen prioridad.", score: 1, type: "Mercenario" },
        { id: 'B', text: "Workshop de Alineación: 'Diseñemos para el Outcome (Ventas), no el Output (Minutos)'. Proponer métricas de éxito que no requieran vigilancia invasiva.", score: 5, type: "Lead (Outcome-Driven)" },
        { id: 'C', text: "Escalar al CEO para que decida qué OKR gana.", score: 2, type: "Burocrático" }
      ],
      explanation: "Con 8 días para cerrar Q y el Board evaluando el viernes, esto es modo crisis. La A suena razonable pero pierde 24 horas críticas esperando análisis (cuando ya deberían estar ejecutando). La C tiene lógica de sunk cost recovery y permite capitalizar 1.5 semanas ya invertidas, PERO divide esfuerzo justo cuando necesitas impacto masivo en Sign-Up. Un Lead reconoce que en los últimos 8 días de un Q fallido, la única estrategia es concentración extrema en el OKR (B). El Dashboard es deuda técnica real, pero no mueve revenue esta semana. Cancelar duele, el equipo se frustra, pero es la única apuesta con probabilidad de salvar el Q. Lo 'bonito' siempre puede esperar - los OKRs ante el Board no."
    },

    // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
    {
      id: 'tokens_vs_hardcode_pressure',
      category: "Ingeniería de Diseño",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Estamos a jueves a las 3 PM y hay prisa extrema por lanzar el viernes antes del mediodía (demo con inversor clave). Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después. Configurar los tokens correctamente tomaría 3-4 horas adicionales.",
      question: "¿Cuál es tu postura ante la deuda técnica?",
      options: [
        { id: 'A', text: "Compromiso Controlado: Que usen variables SCSS genéricas ($blue-500, $gray-800) en lugar de hex codes. No es semántico pero al menos es mantenible y permite futuros cambios globales sin romper todo.", score: 4, type: "Operativo (Parche aceptable)" },
        { id: 'B', text: "Negarse rotundamente. Hardcodear bloquea Dark Mode y futuros cambios de branding. El costo de refactorizar después es 10x mayor. Te sientas con ellos ahora mismo a configurar los tokens básicos aunque se trabaje hasta las 7 PM.", score: 5, type: "Lead (Visión Sistémica)" },
        { id: 'C', text: "Autorización con Deuda Registrada: Permites el hardcode por la urgencia del demo, pero creas inmediatamente un ticket P0 de 'Refactor CSS' asignado al siguiente sprint con aprobación del PM y CTO.", score: 2, type: "Pragmático (Alto riesgo)" }
      ],
      explanation: "Con un demo de inversión inminente, la presión es real. Pero un Lead sabe que los tickets de refactor nunca se priorizan (C). La opción B invierte tiempo ahora para evitar multiplicar el costo después. La A es un parche que al menos mantiene mantenibilidad básica."
    },
    {
      id: 'legacy_ui_refactor_strategy',
      category: "Estrategia de Migración",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "El producto tiene 4 estilos de botones diferentes conviviendo (Legacy Angular + React + jQuery + Vanilla JS patchwork). Los devs dicen que unificar romperá vistas antiguas - nadie quiere tocar código legacy por miedo a bugs en producción. NPS cayó 6 puntos este quarter (de 52 a 46) y los comments mencionan 'se siente roto', 'parece hecho por 3 empresas diferentes'. El CEO te confronta: 'Customers preguntan si estamos en problemas financieros por la inconsistencia'. VP de Engineering advierte: 'Cualquier refactor masivo tomará 8-12 semanas y arriesga estabilidad del 40% del producto'. Tienes Q Review con Board en 3 semanas.",
      question: "¿Cuál es tu estrategia de limpieza con NPS cayendo y Board evaluando pronto?",
      options: [
        { id: 'A', text: "Estrategia 'Boy Scout Rule' con Enforcement: Propones acuerdo formal con CTO y Tech Leads: cada vez que Engineering toque un archivo legacy por feature nueva o bugfix, es OBLIGATORIO actualizar componentes visuales al nuevo sistema (no negociable, parte de Definition of Done). Migración progresiva sin detener roadmap. Creas dashboard público de 'Legacy Debt Burndown' visible en standups. Es lento (12-18 meses estimados) pero sostenible y sin riesgo catastrófico.", score: 5, type: "Lead (Incremental sistemático)" },
        { id: 'B', text: "Forward Only con Brand Refresh Narrativa: Aplicas nuevo sistema SOLO en features nuevas y creas narrativa externa: 'Estamos en proceso de Brand Evolution - verás estilos antiguos y nuevos conviviendo temporalmente'. Aceptas inconsistencia públicamente como parte de 'evolución'. No frenas delivery ni arriesgas bugs. Pero NPS puede seguir cayendo (customers ya notaron el problema) y Board puede percibirlo como falta de ownership.", score: 4, type: "Pragmático con spin de marketing (Apuesta arriesgada)" },
        { id: 'C', text: "Design Debt Sprint con Business Case Agresivo: Presentas análisis cuantitativo al CPO y Board: 'NPS cayó 6 puntos = riesgo de $X en churn. Propongo 2 semanas de Visual QA Sprint pausando features no-críticas para unificar top 20 pantallas más visitadas (80% del tráfico). Es inversión en brand equity que recuperará NPS'. Riesgo: Board/PM pueden rechazar pausar roadmap, y 2 semanas pueden no ser suficientes para impacto real en NPS.", score: 2, type: "Bold con riesgo político (Promesa difícil de cumplir)" }
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
        { id: 'B', text: "Especialización de Componentes: Divides 'Card' en 4 componentes especializados (Card-Content, Card-User, Card-Product, Card-Feature) con 30-40 variantes cada uno. Reduces complejidad individual aunque aumentes cantidad de componentes.", score: 4, type: "Fragmentación controlada" },
        { id: 'C', text: "Governance + Training: Estableces code reviews de Figma obligatorios donde rechazas archivos con detach. Organizas capacitación mensual sobre uso correcto del componente. Creas documentación interactiva con ejemplos.", score: 1, type: "Enforcement (No resuelve raíz)" }
      ],
      explanation: "Cuando 68% hace 'detach', el problema no es el equipo, es el sistema. La C culpa al usuario y genera resentimiento sin resolver la fricción. La B funciona pero fragmenta el sistema. Un Lead reconoce que si algo es difícil de usar, debe rediseñarse: 156 variantes es over-engineering (A). El mejor sistema es el que desaparece."
    },
    {
      id: 'mobile_first_habit_change',
      category: "Design Ops",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      scenario: "El equipo tiene el hábito arraigado de diseñar siempre en canvas Desktop (1440px) primero y luego 'adaptar' a Mobile al final del sprint, resultando en experiencias móviles mediocres (flows truncados, CTAs ocultos, textos que no caben). Analytics muestra que el 72% del tráfico es móvil y el NPS móvil es 18 puntos menor que desktop. Ya intentaste educar con workshops de 'Mobile First Thinking' hace 3 meses - cero cambio. Ayer el CEO te confrontó en el 1-on-1: 'Vi la demo del nuevo checkout y en mi iPhone la experiencia es terrible. ¿Por qué seguimos diseñando para desktop cuando nuestro negocio es mobile?' Tienes review de performance en 2 semanas y este tema está en tu scorecard. Dos diseñadores senior argumentan: 'Desktop nos permite pensar la información completa primero, mobile es solo quitar cosas'. El problema es cultural, de workflow, y ahora político.",
      question: "¿Cómo fuerzas el cambio de comportamiento cuando la educación falló y tu performance está en juego?",
      options: [
        { id: 'A', text: "Environment Nudge: Actualizas los templates de Figma para que el frame por defecto sea 375px (iPhone). Cambias el starter kit que aparece al crear archivos nuevos. Eliminas los templates desktop del sistema. Modificas el entorno físico para que el comportamiento correcto sea el único path fácil. Si quieren desktop, deben crearlo manualmente.", score: 5, type: "Lead (Behavioral design del sistema)" },
        { id: 'B', text: "Quality Gate Obligatorio con Consecuencias: Desde el próximo sprint, Design Review no aprueba NADA si no se presenta versión móvil primero con evidencia de testing en device real. Creas checklist obligatorio que QA valida antes de handoff. Los diseños rechazados se reasignan a otro diseñador (penalización de reputación interna). Es proceso estricto con dientes reales.", score: 4, type: "Process enforcement con accountability (Autoridad directa)" },
        { id: 'C', text: "Métrica de Performance con Incentivo: Agregas 'Mobile-First Compliance' a las métricas de evaluación individuales del equipo (visible en dashboards 1-on-1 semanales). Los que adopten mobile-first primero obtienen proyectos high-visibility (features de CEO/Board). Los que resistan quedan en maintenance mode. Usas incentivos de carrera para forzar cambio.", score: 3, type: "Incentive-based con stakes de carrera (Puede generar resentimiento)" }
      ],
      explanation: "La educación ya falló y ahora tu credibilidad con el CEO está en riesgo. La C puede funcionar pero genera política interna y resentimiento ('favoritos del lead'). La B es efectiva pero requiere enforcement constante y puede generar fricción diaria en reviews (agota tu capital político). La A es la jugada de behavioral design: si el environment default es 375px y eliminas shortcuts desktop, obligas al nuevo hábito sin confrontación directa. Los seniors pueden protestar inicialmente, pero después de 2-3 sprints el hábito se arraiga porque la fricción de crear desktop manualmente es mayor que pensar mobile-first. Un Lead cambia sistemas, no personas. El mejor enforcement es hacer que el mal comportamiento sea difícil, no castigado."
    },

    // --- BLOQUE 3: LIDERAZGO, CULTURA & PERSONAS ---
    {
      id: 'senior_toxic_genius_feedback',
      category: "Gestión de Talento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
      question: "¿Cómo procedes con este perfil?",
      options: [
        { id: 'A', text: "Mediación Activa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce. Su talento técnico es demasiado valioso para arriesgar perderlo.", score: 4, type: "Niñera (Parche temporal)" },
        { id: 'B', text: "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales donde su velocidad es vital, pero lo mantienes alejado de colaboraciones grupales y code reviews. Maximizas su output técnico mientras minimizas el daño cultural.", score: 1, type: "Habilita Toxicidad" },
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
        { id: 'A', text: "Sí, corriges el diseño tú mismo o le das la solución exacta inmediatamente antes del handoff para asegurar la excelencia del producto.", score: 2, type: "Micro-manager (Crea dependencia)" },
        { id: 'B', text: "No. Lo dejas fallar controladamente. Esperas a que salgan los resultados del test de usabilidad o la data real y usas ese momento para enseñarle a analizar y corregir el error.", score: 5, type: "Lead (Maestro)" },
        { id: 'C', text: "Le das una pista sutil ('¿Has pensado en cómo se verá esto en móvil?') esperando que se dé cuenta solo.", score: 4, type: "Coach Pasivo" }
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
        { id: 'A', text: "Reconocimiento con Incentivo: Le ofreces un bonus de $2K por 'sprint heroico' y lo destacas en el próximo All-Hands como ejemplo de compromiso. Esto motiva al equipo completo a dar el empujón final necesario para el demo.", score: 0, type: "Incentiva heroísmo tóxico" },
        { id: 'B', text: "Intervención Estructural con Trade-off Político: 1-on-1 urgente para forzar reducción del alcance del dashboard (quitar 2 features secundarias), redistribuir trabajo crítico a otro diseñador, y prohibirle trabajar después de las 7 PM. Tú asumes el costo de explicarle al CEO por qué el demo será menos ambicioso.", score: 5, type: "Lead (Protege talento, asume riesgo)" },
        { id: 'C', text: "Soporte con Recursos: Le asignas temporalmente un diseñador junior como asistente para que le quite tar eas operativas (export de assets, documentación), permitiéndole enfocarse solo en decisiones críticas de diseño sin extender sus horas.", score: 4, type: "Mitigación (No resuelve raíz)" }
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
        { id: 'A', text: "Hire for Excellence: Rechazas al candidato porque en un equipo de diseño de alta calidad no puedes 'bajar la vara visual'. Sigues buscando 2-3 meses más al perfil completo (Awwwards-level + fintech expert). El gap actual continúa.", score: 1, type: "Purista (Irrealista, bloquea progreso)" },
        { id: 'B', text: "Hire for Gaps: Lo contratas inmediatamente. Balancear el equipo es prioridad sobre mantener uniformidad visual. Tus seniors actuales pueden pulir su UI después, pero ÉL resolverá los problemas de arquitectura lógica que hoy te bloquean con Product. Diversidad de skills > homogeneidad.", score: 5, type: "Lead (Team building estratégico)" },
        { id: 'C', text: "Freelance Bridge: Contratas un freelance visual fuerte para apoyar en proyectos de alto impacto visual mientras continúas buscando el candidato perfecto full-time. Mantienes la opción abierta.", score: 2, type: "Indeciso (No resuelve gap estructural)" }
      ],
      explanation: "Contratas para cubrir brechas del equipo, no para clonar lo que ya tienes. La A asume que existe el 'unicornio' perfecto y puedes esperar, cuando tu credibilidad con Product se degrada cada sprint. La C es parche temporal costoso. Un equipo de puros Visual Designers fallará en productos B2B complejos. La diversidad de expertise hace al equipo más resiliente (B)."
    },

];
