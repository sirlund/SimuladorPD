import React from 'react';
import {
  Timer, AlertTriangle, CheckCircle, XCircle, ArrowRight,
  BarChart2, ShieldAlert, Users, Layers, Brain, Zap,
  Search, MessageSquare, Briefcase, FileText, Globe,
  Lock, Heart, RefreshCw, Target, Code, Play, Star,
  Smartphone, Coffee, AlertOctagon, Trophy, RotateCcw
} from 'lucide-react';

export const getQuestionPool = () => {
  return [
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
      scenario: "En el All-Hands, el equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. Sin embargo, tus dashboards de producto muestran que la conversión final a pago (Checkout) cayó un 15% porque el tráfico nuevo es de baja calidad y rebota rápido. La ronda de inversión se cierra en 6 semanas y los inversores evaluarán revenue, no visitas.",
      question: "¿Cómo intervienes en la reunión sin causar una guerra política?",
      options: [
        { id: 'A', text: "Intervención Diplomática Previa: Te reúnes con el Head of Marketing 30 minutos antes del All-Hands para alinear un mensaje conjunto que celebre el tráfico como paso 1, pero presente la conversión como prioridad inmediata.", score: 4, type: "Diplomático (Lento)" },
        { id: 'B', text: "Transparencia Radical: Intervienes en la reunión presentando ambos datos lado a lado. Felicitas el trabajo de Marketing pero aclaras que 'Tráfico ≠ Dinero' y que la caída del 15% en revenue es crítica para la ronda de inversión.", score: 5, type: "Lead (Dueño de la Verdad)" },
        { id: 'C', text: "Preservar la Moral: Mantienes silencio público para no opacar el momento de Marketing, pero envías un memo ejecutivo al CEO y CFO después destacando la urgencia de optimizar conversión antes de la ronda.", score: 4, type: "Político (Fragmenta comunicación)" }
      ],
      explanation: "Con una ronda de inversión en 6 semanas, el tiempo es crítico. La opción A suena profesional pero demora la acción. La B comunica la urgencia a toda la organización simultáneamente. La C oculta información vital al equipo completo."
    },
    {
      id: 'sales_custom_demands',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "El VP de Ventas está a punto de cerrar un contrato Enterprise de $1M, vital para la ronda de inversión. El cliente exige que el Dashboard tenga su logo gigante y sus colores corporativos (que rompen la accesibilidad). Tu Design System actual no soporta 'White Labeling' ni temas. El CEO dice: 'Haz lo que tengas que hacer'.",
      question: "¿Qué decisión tomas ante esta presión?",
      options: [
        { id: 'A', text: "Refactor Estratégico: Pausas el roadmap por 2 sprints para implementar un sistema de 'Theming' real y escalable en el Design System. Si ese cliente paga $1M, habrán más clientes Enterprise con la misma demanda.", score: 4, type: "Visionario (Riesgo de timing)" },
        { id: 'B', text: "Purismo de Marca: Te niegas rotundamente. Romper la accesibilidad y la integridad del sistema genera deuda técnica insostenible. Ofreces un compromiso: logo en el header y un selector de tema con 3 paletas pre-aprobadas.", score: 1, type: "Purista (Arriesga $1M)" },
        { id: 'C', text: "Hardcode Aislado: Aceptas hacer un CSS override sucio exclusivamente para ese cliente, sin tocar el núcleo del sistema, y cobras ese esfuerzo técnico como línea separada de 'Customización Enterprise' en el contrato.", score: 5, type: "Lead (Pragmático)" }
      ],
      explanation: "Por $1M vital para la ronda, el sistema se dobla estratégicamente. La opción A suena inteligente pero arriesga perder el timing del deal. La B bloquea revenue crítico. La C aísla la deuda técnica, captura el valor y monetiza el dolor."
    },
    {
      id: 'okr_conflict_dashboard',
      category: "Gestión de OKRs",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "El Key Result crítico del trimestre es 'Aumentar la conversión de Sign-Up en un 10%' (actualmente en 0% de progreso a mitad de Q). Sin embargo, tu equipo de diseño está muy entusiasmado rediseñando el Dashboard principal porque 'se ve viejo, es inconsistente y afecta la confianza de la marca'. Argumentan que impacta retención a largo plazo.",
      question: "¿Cómo gestionas la asignación de recursos?",
      options: [
        { id: 'A', text: "Rediseño del Dashboard Inmediato: Permites que el equipo trabaje en lo que les apasiona. Un equipo motivado produce mejor trabajo, y la inconsistencia visual sí afecta la percepción de marca que indirectamente impacta conversión.", score: 2, type: "People Manager (Pierde OKR)" },
        { id: 'B', text: "Foco Total en Sign-Up: Detienes el rediseño del Dashboard inmediatamente. Todo el esfuerzo mental y operativo debe ir al flujo de Sign-Up y Landing Page hasta que la aguja del KR se mueva. Lo 'bonito' puede esperar hasta el próximo quarter.", score: 5, type: "Lead (Ruthless Prioritization)" },
        { id: 'C', text: "Proyecto de Viernes (20% Time): Permites el rediseño del Dashboard como proyecto secundario (viernes por la tarde) para mantener la moral alta mientras el 80% del esfuerzo va a Sign-Up durante la semana.", score: 4, type: "Compromiso (Riesgo de fragmentación)" }
      ],
      explanation: "A mitad de Q con 0% de progreso en el OKR, cada hora cuenta. La opción A prioriza moral sobre negocio. La C fragmenta atención cuando se necesita foco extremo. Un Lead sabe que 'Nice to have' muere ante 'Must have' (B). El Dashboard puede rediseñarse en Q2."
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
      scenario: "El producto tiene 4 estilos de botones diferentes conviviendo (Legacy Angular + React + jQuery). Los devs dicen que unificar todo a los nuevos componentes romperá vistas antiguas que nadie quiere tocar por miedo a bugs. Customers se quejan de la inconsistencia en NPS comments.",
      question: "¿Cuál es tu estrategia de limpieza?",
      options: [
        { id: 'A', text: "Estrategia 'Boy Scout Rule': Acordar con el Tech Lead que cada vez que alguien toque un archivo legacy por una feature nueva, es obligatorio actualizar sus componentes visuales al nuevo sistema. Migración progresiva y oportunista sin detener el roadmap.", score: 5, type: "Lead (Incremental)" },
        { id: 'B', text: "Forward Only: Aplicar el nuevo sistema solo en features nuevas. Aceptamos la inconsistencia visual temporalmente para no frenar el delivery ni arriesgar bugs en código legacy crítico.", score: 4, type: "Pragmático (Consistencia futura)" },
        { id: 'C', text: "Design Debt Sprint: Presentas al CPO un business case sobre el impacto en NPS y solicitas pausar features por 2 semanas al final del Q para hacer un 'Visual QA Sprint' global de unificación.", score: 2, type: "Idealista (Difícil de aprobar)" }
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
      scenario: "El equipo tiene el hábito arraigado de diseñar siempre en canvas Desktop (1440px) primero y luego ‘adaptar’ a Mobile al final del sprint, resultando en experiencias móviles mediocres (flows truncados, CTAs ocultos, textos que no caben). Analytics muestra que el 72% del tráfico es móvil y el NPS móvil es 18 puntos menor que desktop. Ya intentaste educar con workshops de ‘Mobile First Thinking’ hace 3  meses pero nada cambió. El problema es cultural y de workflow, no de conocimiento.",
      question: "¿Cómo fuerzas el cambio de comportamiento a nivel de sistema, no solo con educación?",
      options: [
        { id: 'A', text: "Environment Nudge: Actualizas los templates de Figma para que el frame por defecto sea 375px (iPhone). Cambias el starter kit que aparece al crear archivos nuevos. Modificas el entorno físico para que el comportamiento correcto sea el más fácil por default.", score: 5, type: "Lead (Behavioral design del sistema)" },
        { id: 'B', text: "Quality Gate Obligatorio: Estableces regla de proceso donde Design Review no aprueba nada si no se presenta versión móvil primero y documentada. Creas checklist obligatorio que QA valida antes de handoff a ingeniería.", score: 4, type: "Process enforcement (Genera fricción)" },
        { id: 'C', text: "Métrica de Performance: Agregas 'Mobile UI Quality Score' a las métricas de evaluación del equipo y lo haces visible en dashboards semanales. Incentivas el cambio mediante accountability pública.", score: 3, type: "Incentive-based (Puede ser percibido como punitivo)" }
      ],
      explanation: "La educación (workshops previos) ya falló porque no cambia hábitos arraigados. La C puede generar resentimiento si se percibe como vigilancia. La B funciona pero genera fricción en cada review. Un Lead entiende behavioral economics: cambiar el environment para que el comportamiento deseado sea el default path (A). Si el canvas empieza en 375px, el diseñador DEBE priorizar contenido primero."
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
      scenario: "Debido a una crisis de retención (churn del 8% mensual, meta es 5%), el VP de Marketing te pide esconder el botón de 'Cancelar Suscripción' en Settings > Cuenta > Gestión > Más opciones, o hacerlo muy difícil de encontrar para reducir el Churn artificialmente. Argumenta que 'la competencia lo hace'.",
      question: "¿Cuál es tu contra-propuesta?",
      options: [
        { id: 'A', text: "Offboarding Inteligente: Diseñas un flujo que pregunta el motivo de salida y ofrece automáticamente pausas, descuentos o downgrades según la respuesta, pero dejando la salida clara y accesible al final del proceso.", score: 5, type: "Lead (Retención por Valor)" },
        { id: 'B', text: "Rechazo Ético Firme: Te niegas rotundamente a implementar Dark Patterns por principios, escalando el tema a RRHH y Legal si es necesario. La reputación de marca a largo plazo vale más que retención artificial.", score: 4, type: "Bloqueador (Sin alternativa)" },
        { id: 'C', text: "Compromiso Medido: Aceptas mover el botón a una ubicación menos prominente (2-3 clicks) pero mantienes el texto claro y el proceso simple, sin textos confusos ni confirmaciones engañosas.", score: 2, type: "Zona Gris (Riesgo reputacional)" }
      ],
      explanation: "La opción B es éticamente correcta pero no resuelve el problema de negocio (churn). La C es zona gris que puede generar backlash. La A alinea ética con negocio: retener usuarios ofreciendo valor real en el momento de frustración, no mediante obstrucción."
    },
    {
      id: 'guerrilla_testing_speed',
      category: "Validación Ágil",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      scenario: "Es jueves a las 4 PM. Mañana viernes al mediodía hacen deploy. Tienes una duda sobre el label de un CTA en el nuevo flujo de checkout: no estás 100% seguro si 'Confirmar Compra' o 'Proceder al Pago' se entiende mejor. Es una micro-decisión pero el botón es crítico (80% de los usuarios pasan por ahí). No hay tiempo para research formal con usuarios reales. Tampoco tienes A/B test configurado para esto pre-launch.",
      question: "¿Cómo tomas la decisión del copy en las próximas 2 horas?",
      options: [
        { id: 'A', text: "Benchmarking Competitivo: Revisas rápidamente los 5 competidores directos principales (Stripe, PayPal, competidor A, B, C) para ver qué terminología usan ellos en ese contexto. Si 4 de 5 dicen 'Confirmar Compra', vas con eso.", score: 3, type: "Best practice (Sin contexto propio)" },
        { id: 'B', text: "Expert Judgment: Usas tu criterio basado en 10+ años de experiencia en UX y mantienes consistencia con el resto del flujo. Confías en tu intuición profesional y conocimiento de las heurísticas de usabilidad Nielsen.", score: 4, type: "Confianza en expertise (Puede ser sesgo)" },
        { id: 'C', text: "Guerrilla 5-Second Test: Tomas screenshot del checkout y preguntas en Slack a 8 personas de otros departamentos (2 de Sales, 2 de Finance, 2 de CS, 2 random) '¿Qué esperas que pase al hacer click en este botón?'. Validación rápida en 30 min.", score: 5, type: "Lead (Data-informed rápido)" }
      ],
      explanation: "El benchmarking (A) es peligroso porque cada producto tiene contexto diferente - PayPal tiene flujos distintos a tu caso. La B funciona pero es susceptible a tus propios sesgos y no valida con usuarios reales. En 2 horas no puedes hacer research formal, pero SÍ puedes hacer guerrilla testing (C) que te da data real de TU contexto específico. 8 respuestas >> tu opinión solitaria."
    },

    // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
    {
      id: 'dev_handoff_war_library',
      category: "Colaboración con Ingeniería",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Ingeniería rechaza tus diseños de un nuevo componente de 'File Upload' diciendo que son 'imposibles de implementar' en el sprint. Tú sabes que son estándares web básicos (drag & drop, progress bar), pero ellos usan una librería UI vieja (React 16 + Material-UI v4) y están bajo presión de deadline.",
      question: "¿Cómo desbloqueas la situación?",
      options: [
        { id: 'A', text: "Pair Programming: Te sientas con el developer lead y le muestras ejemplos de código (CodePen/Sandbox) de cómo implementar el diseño con su stack actual, incluso ofreciéndote a escribir el CSS base tú mismo.", score: 4, type: "Heroico (No escalable)" },
        { id: 'B', text: "Defensa del Diseño: Insistes en que el diseño es correcto y estándar web. La deuda técnica de ingeniería no debe comprometer la calidad del producto. Escalas al CTO para solicitar actualización de la librería.", score: 1, type: "Silo (Genera conflicto)" },
        { id: 'C', text: "Negociación en Fases: Diseñas una versión 'V1' simplificada que funcione con su librería actual para lanzar en este sprint, pero documentas y pactas con el Tech Lead una fecha concreta (próximo quarter) para implementar la versión completa.", score: 5, type: "Lead (Pragmático)" }
      ],
      explanation: "Tener la razón técnica no sirve si bloqueas el lanzamiento. La opción B genera guerra y demora todo. La A es heroica pero no escala para futuros conflictos. La C entrega valor incremental hoy y crea compromiso claro para mejorar mañana."
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
      scenario: "Tu equipo de ingeniería trabaja en otra zona horaria. Se quejan de que cuando abren Figma no entienden qué está listo para codear y qué es borrador, perdiendo tiempo.",
      question: "¿Cómo organizas el archivo para colaboración asíncrona?",
      options: [
        { id: 'A', text: "Dedicas una hora diaria a limpiar los archivos tú mismo antes de que ellos entren.", score: 2, type: "Parche (No escala)" },
        { id: 'B', text: "Implementas un protocolo estricto de 'Cover Pages' (WIP vs Ready), usas Sections de Figma con estado explícito y grabas un Loom de 2 min explicando cada entrega.", score: 5, type: "Lead (Async Ops)" },
        { id: 'C', text: "Les pides que te pregunten por Slack antes de empezar cualquier cosa.", score: 1, type: "Cuello de Botella" }
      ],
      explanation: "En remoto, la documentación clara y el estado explícito son vitales. Depender de preguntas síncronas (C) bloquea al equipo. Loom + Estructura (B) escala."
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
      scenario: "Hay presión del Board para 'poner AI' en el producto. El PM sugiere un chatbot genérico en la home. Tú crees que es una mala experiencia.",
      question: "¿Cuál es tu contra-propuesta de valor?",
      options: [
        { id: 'A', text: "Aceptar el chatbot pero diseñarlo lo más limpio posible para que no moleste.", score: 4, type: "Complaciente" },
        { id: 'B', text: "Proponer 'Invisible AI': Analizar tareas repetitivas del usuario (ej: categorizar gastos, data entry) y usar la AI para automatizarlas silenciosamente. Eliminar el 'trabajo sucio' (drudgery).", score: 5, type: "Lead (User-Centric AI)" },
        { id: 'C', text: "Proponer usar AI para generar imágenes de marketing dentro de la app.", score: 4, type: "Gimmick" }
      ],
      explanation: "El mayor valor de la AI en UX no es conversar (Chatbot), es hacer el trabajo por el usuario. Eliminar la carga cognitiva y operativa es la verdadera innovación."
    },
    {
      id: 'file_chaos_structure',
      category: "Design Ops",
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      scenario: "Entras al proyecto y encuentras archivos llamados 'Final_V3_Real_Final_Copy.fig'. Nadie sabe cuál es la fuente de la verdad.",
      question: "¿Qué solución implementas el día 1?",
      options: [
        { id: 'A', text: "Limpiar todos los archivos tú mismo el fin de semana para dar el ejemplo.", score: 2, type: "Mártir (No escala)" },
        { id: 'B', text: "Definir un estándar de nomenclatura y estructura (Cover, Sandbox, Specs), y bloquear los archivos de 'Librería' para que solo los Leads puedan publicar cambios.", score: 5, type: "Lead (Gobernanza)" },
        { id: 'C', text: "Enviar un mensaje por Slack pidiendo más orden.", score: 0, type: "Inútil" }
      ],
      explanation: "El orden no ocurre por buena voluntad, ocurre por diseño del sistema. La gobernanza (quién puede editar qué) y la estructura clara son fundamentales."
    },

    // --- BLOQUE 7: CRISIS DE PRODUCTO & PRESIÓN DE ROADMAP ---
    {
      id: 'churn_spike_investigation',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "El dashboard de analytics muestra un churn del 40% en los últimos 7 días (normal es 8%). El equipo de Customer Success culpa al rediseño del flujo de pago que lanzaste hace 2 semanas. Hay pánico generalizado. El CEO te convoca a una reunión de emergencia en 2 horas.",
      question: "¿Cuál es tu primer movimiento en las próximas 2 horas?",
      options: [
        { id: 'A', text: "Reversión Preventiva: Coordinas con ingeniería para revertir inmediatamente el diseño nuevo y volver al flujo anterior mientras investigas en paralelo qué causó el spike. Detener la hemorragia es prioridad.", score: 4, type: "Reactivo (Puede ser prematuro)" },
        { id: 'B', text: "Análisis Forense Urgente: Segmentas el churn por cohorte (usuarios nuevos vs antiguos), flujo usado (nuevo vs legacy), fuente de tráfico y analizas heat maps + session recordings para identificar el punto exacto de fricción antes de la reunión.", score: 5, type: "Lead (Data-First)" },
        { id: 'C', text: "War Room Inmediato: Convocas a todos los stakeholders (CS, Product, Eng, Data) a una sala para generar hipótesis colaborativas y dividir las investigaciones entre el equipo.", score: 4, type: "Comité de Crisis (Ruido)" }
      ],
      explanation: "Revertir sin evidencia (A) puede ser prematuro si el problema no es el diseño (podría ser un bug, cambio de precio, campaña mala, etc.). La C genera ruido sin dirección. La B te permite llegar a la reunión con datos concretos para tomar la decisión correcta."
    },
    {
      id: 'competitor_feature_launch',
      category: "Estrategia Competitiva",
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      scenario: "Tu competidor principal acaba de lanzar una funcionalidad de 'Reportes Personalizados' que se ve espectacular. Ventas entra en pánico porque están perdiendo deals. Te piden clonarla en 2 semanas.",
      question: "¿Cómo evalúas si vale la pena construirla?",
      options: [
        { id: 'A', text: "La clonamos inmediatamente. Si Ventas lo necesita para cerrar, es prioridad P0.", score: 0, type: "Feature Factory (Sin estrategia)" },
        { id: 'B', text: "Análisis de Jobs-to-be-Done: Entrevistar a los 5 clientes perdidos para entender qué problema intentaban resolver con esa feature. Si es crítico, diseñas una solución propia mejor que copiar pixel a pixel.", score: 5, type: "Lead (Estratégico)" },
        { id: 'C', text: "Proponer un MVP rápido de 'Exportar a Excel' que resuelva el 80% del caso de uso sin construir toda la infraestructura de reportes.", score: 4, type: "Pragmático (Parche)" }
      ],
      explanation: "Copiar features sin entender el contexto es la trampa clásica de producto reactivo. La opción B valida el problema real y permite innovar en la solución."
    },
    {
      id: 'investor_demo_cosmetics',
      category: "Gestión de Stakeholders",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      scenario: "Pitch de Series A en 4 días con Sequoia. El CEO te pide 'embellecer el dashboard para la demo': gráficos más 'wow', animaciones, colores vibrantes, data que se vea impresionante. El producto real es funcional pero visualmente austero (diseño enterprise conservador). Él argumenta: 'Los VCs invierten en visión, no en el presente - necesitamos mostrar potencial'. Tu designer quiere hacer version 'demo mode' completamente  custom.",
      question: "¿Qué nivel de 'polish aspiracional' permites sin cruzar línea ética?",
      options: [
        { id: 'A', text: "Demo Mode Producido: Diseñas versión 'demo' con UI pulida, animaciones, datos ficticios hermosos que nunca se usará en producción. Es lo que hacen todos - los VCs lo entienden. Separas claramente 'vision' de 'realidad actual'.", score: 1, type: "Teatro (Deuda ética)" },
        { id: 'B', text: "Polish del Roadmap Q Actual: Mejoras SOLO features que están ya comprometidas en roadmap de Q2-Q3 (con designs WIP). La demo muestra dirección real del producto, no un espejismo. Es aspiracional pero honest-to-roadmap.", score: 5, type: "Lead (Honestidad aspiracional)" },
        { id: 'C', text: "Pureza Absoluta: Te niegas a 'maquillar' nada. Lo que ven los inversores debe ser EXACTAMENTE lo que usan los clientes hoy, pixel por pixel. La honestidad radical es tu principio.", score: 2, type: "Purista (Pierde momentum de pitch)" }
      ],
      explanation: "Una demo puede mostrar visión de futuro PRÓXIMO (B), pero crear producto falso (A) es bomba de tiempo - cuando los VCs hagan DD verán la brecha. La C ignora que pitches son storytelling legítimo sobre ejecución futura. El balance está en mostrar lo que YA ESTÁ en roadmap funded."
    },
    {
      id: 'technical_debt_explosion',
      category: "Arquitectura de Sistemas",
      icon: <AlertOctagon className="w-6 h-6 text-orange-600" />,
      scenario: "El CTO presenta en All-Hands que el frontend está 'insostenible técnicamente': componentes duplicados, lógica acoplada, builds lentos (12min), bugs recurrentes. Propone pausar el roadmap de producto por 1 trimestre completo (12 semanas) para Gran Refactor de arquitectura. El CFO está en shock porque hay commitments con clientes enterprise para Q2. Sales gest projected $1.2M en deals que requieren features del Q.",
      question: "¿Cuál es tu posición como líder de diseño ante el dilema deuda vs negocio?",
      options: [
        { id: 'A', text: "Apoyar Refactor Completo: La deuda técnica es real y terminal. Si colapsa el sistema, no habrá negocio que salvar. 1Q de dolor ahora previene 2-3 años de sufrimiento. Defiendes la propuesta del CTO ante el CFO.", score: 2, type: "Ingenuo (Suicidio de negocio a corto plazo)" },
        { id: 'B', text: "Strangler Fig Pattern Incremental: Propones refactorizar módulo por módulo (1 componente crítico por sprint) mientras se entregan features en paralelo. 20% del tiempo de ingeniería dedicado a refactor systemático. Lento pero constante.", score: 5, type: "Lead (Risk-balanced)" },
        { id: 'C', text: "Defender Roadmap a Toda Costa: La deuda técnica es problema de ingeniería, no de producto. Que encuentren la manera de arreglarlo sin impactar commitments de negocio. No puedes defraudar clientes.", score: 1, type: "Silo (Irresponsable, ignora colapso)" }
      ],
      explanation: "Pausar 1Q completo (A) probablemente mata la empresa - los clientes migran, deals se caen, runway se acaba. La C ignora que sistemas colapsados eventualmente bloquean TODO. Strangler Fig (B) balancea deuda vs velocity: avance incremental sostenible."
    },

    // --- BLOQUE 8: DATA, MÉTRICAS & EXPERIMENTACIÓN ---
    {
      id: 'ab_test_interpretation_bias',
      category: "Data-Driven Design",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "Corres un A/B test del checkout durante 3 semanas. La variante B aumenta las conversiones un 8% (estadísticamente significativo, p<0.05), pero recibes 47 tickets de soporte diciendo que 'se siente confuso' y 'no confían en el proceso'. El PM quiere shippearlo inmediatamente.",
      question: "¿Qué decisión tomas con esta data contradictoria?",
      options: [
        { id: 'A', text: "Shipear Variante B: Los datos cuantitativos (8% más conversión) superan a las opiniones subjetivas de un grupo vocal minoritario. La conversión es el norte, y 47 quejas de miles de usuarios no es estadísticamente relevante.", score: 4, type: "Quantitative Dogma" },
        { id: 'B', text: "Conservar Variante A: La confianza del usuario es el activo más valioso a largo plazo. Un incremento del 8% en conversión no vale la pena si destruye la percepción de seguridad y genera tickets de soporte.", score: 4, type: "Conservative (Deja dinero sobre la mesa)" },
        { id: 'C', text: "Análisis de Cohorte Profundo: Segmentar qué usuarios convierten más con B (¿nuevos impulsivos?) y quiénes se quejan (¿clientes recurrentes de alto valor?). Si optimizas para compras de una sola vez pero destruyes LTV y repeat purchase, es una trampa.", score: 5, type: "Lead (Pensamiento Sistémico)" }
      ],
      explanation: "Un incremento de conversión puede esconder una optimización para el comportamiento equivocado. La A ignora señales cualitativas importantes. La B deja dinero sobre la mesa sin investigar. La C busca entender la calidad del cambio: ¿estás ganando clientes valiosos o solo tráfico de baja calidad?"
    },
    {
      id: 'vanity_metric_viral_growth',
      category: "Métricas de Producto",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      scenario: "Diseñaste un feature de 'Compartir Proyecto en Redes Sociales' que lanzaron hace 2 semanas. Marketing celebra porque generó 48K shares en Twitter/LinkedIn (viral moment). Pero cuando auditas Mixpanel descubres: solo el 1.8% de los clicks en esos shares resultan en sign-ups (~850 usuarios), y de esos, solo 12% se activan (102 activados). El feature costó 4 semanas de desarrollo + $8K en infraestructura de Open Graph.",
      question: "¿Cómo evalúas el verdadero ROI del feature de viralidad?",
      options: [
        { id: 'A', text: "Celebrar con Marketing: 48K impresiones de marca tienen valor como top-of-funnel aunque no conviertan directamente. Es awareness building legítimo. El CAC indirecto es difícil de medir.", score: 2, type: "Vanity metric justification" },
        { id: 'B', text: "Pivot a Growth Loop: Rediseñas el flow para 'Invite-Only Sharing' con incentivo bilateral (invitador gana storage, invitado  gana trial premium). Transformas viralidad pasiva en referral program activo con conversion tracking.", score: 5, type: "Lead (Optimize for real growth)" },
        { id: 'C', text: "Matar el Feature: 102 activaciones de 4 semanas de dev es fracaso total. Lo deprecas, comunicas el learning, liberas al equipo para features con ROI comprobado.", score: 3, type: "Pragmático (Pierde potencial)" }
      ],
      explanation: "Shares sin conversión son ruido costoso (A). La C es coraje pero destruye oportunidad de iterar. Un Lead reconoce que el CONCEPTO de compartir es válido pero el MECANISMO falló - rediseña con incentivos (B) para crear growth loop real."
    },
    {
      id: 'sample_size_impatience',
      category: "Validación Ágil",
      icon: <Timer className="w-6 h-6 text-blue-500" />,
      scenario: "Lanzas un A/B test un lunes. El miércoles, la variante B está ganando por 12% pero el tamaño de muestra es de solo 300 usuarios (necesitas 2000 para significancia estadística). El PM quiere declararlo ganador ya.",
      question: "¿Cedes a la presión o esperas?",
      options: [
        { id: 'A', text: "Esperas hasta alcanzar significancia estadística completa, aunque tome 2 semanas más.", score: 4, type: "Científico (Lento)" },
        { id: 'B', text: "Decisión Bayesiana: Si la ganancia potencial es enorme (ej: +12% en revenue) y el riesgo de error es bajo (no es un cambio destructivo), shippeas early con monitoreo intensivo post-launch.", score: 5, type: "Lead (Risk-Reward)" },
        { id: 'C', text: "Shippeas inmediatamente sin cuestionarlo. El PM es quien decide.", score: 0, type: "Cómplice de mala ciencia" }
      ],
      explanation: "La significancia estadística es importante, pero en startups la velocidad de aprendizaje a veces vale más que la perfección científica (B). La clave es evaluar el riesgo de equivocarse."
    },
    {
      id: 'retention_vs_acquisition_focus',
      category: "Estrategia de Producto",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "El equipo de Growth está obsesionado con aumentar Sign-Ups (Adquisición). Pero tu análisis muestra que el 60% de los usuarios abandona el producto en la primera semana sin activarse.",
      question: "¿Cómo redireccionas el foco estratégico?",
      options: [
        { id: 'A', text: "Dejas que Growth siga su plan. Tú te enfocas en mejorar la experiencia del core product para los usuarios activos.", score: 0, type: "Silo (Balde roto)" },
        { id: 'B', text: "Intervención de Priorización: Presentas al CEO la métrica de 'Leaky Bucket'. Propones pausar campañas de adquisición y redirigir TODO el esfuerzo a activación (Onboarding, Aha Moment) por 1 mes.", score: 5, type: "Lead (First Principles)" },
        { id: 'C', text: "Propones un experimento pequeño de onboarding sin tocar el presupuesto de Growth.", score: 2, type: "Tibio (Insuficiente)" }
      ],
      explanation: "Llenar un balde roto es quemar dinero. Si la retención está quebrada, aumentar adquisición solo amplifica el problema. La opción B detiene la hemorragia."
    },

    // --- BLOQUE 9: DISEÑO DE FLUJOS & INTERACCIÓN ---
    {
      id: 'onboarding_length_debate',
      category: "Onboarding & Activación",
      icon: <Play className="w-6 h-6 text-green-500" />,
      scenario: "Product Manager quiere un onboarding de 7 pasos para 'educar al usuario sobre todas las funcionalidades'. Tú ves en Mixpanel que el 70% abandona en el paso 3 sin llegar al dashboard. El PM argumenta que 'los usuarios necesitan entender el valor completo del producto antes de usarlo'.",
      question: "¿Cuál es tu contra-propuesta estratégica?",
      options: [
        { id: 'A', text: "Onboarding Progresivo (Just-in-Time): Diseñas un flujo mínimo de 2 pasos obligatorios para llegar al 'Aha Moment' rápido, y contextualizas el resto con tooltips y coach marks durante el uso real del producto.", score: 5, type: "Lead (Time-to-Value)" },
        { id: 'B', text: "Onboarding Opcional: Propones mantener los 7 pasos pero agregar un botón de 'Skip' prominente en cada paso para que usuarios impacientes puedan saltarse la educación.", score: 2, type: "Parche (No resuelve problema)" },
        { id: 'C', text: "Onboarding Mejorado: Aceptas los 7 pasos pero rediseñas con ilustraciones atractivas, microinteracciones, progress bar y animaciones para hacer la experiencia más engaging y reducir fricción.", score: 1, type: "Lipstick on a pig" }
      ],
      explanation: "El 70% de abandono en paso 3 es evidencia clara de que el onboarding bloquea valor. La opción C hace más 'bonito' el problema sin resolverlo. La B permite skip pero no reduce abandono. Un Lead sabe que el mejor onboarding lleva al valor inmediatamente (A) y educa en contexto después."
    },
    {
      id: 'error_message_user_blame',
      category: "UX Writing & Errores",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      scenario: "El equipo de ingeniería escribió mensajes de error técnicos ('Error 403: Invalid Token Refresh'). Los usuarios están confundidos y abandonan el flujo.",
      question: "¿Cómo intervienes en la calidad del copy?",
      options: [
        { id: 'A', text: "Reescribir todos los errores con lenguaje humano ('Algo salió mal, por favor intenta de nuevo').", score: 2, type: "Genérico (Poco útil)" },
        { id: 'B', text: "Mensajes Accionables: Clasificar errores por causa (usuario, sistema, red) y diseñar mensajes específicos con pasos siguientes claros ('Tu sesión expiró. Inicia sesión nuevamente [CTA]').", score: 5, type: "Lead (UX Writing Strategy)" },
        { id: 'C', text: "Mantener los mensajes técnicos pero agregar un link de 'Ayuda' que abre el soporte.", score: 0, type: "Evasión (Traslada el problema)" }
      ],
      explanation: "Los mensajes genéricos (A) frustran al usuario tanto como los técnicos. La opción B empodera al usuario con contexto y acción clara."
    },
    {
      id: 'loading_spinner_anxiety',
      category: "Micro-interacciones",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      scenario: "El proceso de 'Generar Reporte' toma 8 segundos (backend lento). Los usuarios creen que está roto y hacen click múltiples veces, generando duplicados.",
      question: "¿Cómo manejas la percepción de espera?",
      options: [
        { id: 'A', text: "Poner un spinner genérico con el texto 'Cargando...'.", score: 0, type: "Lazy Default" },
        { id: 'B', text: "Loading con Narrativa: Skeleton screens + Progress indicator con mensajes ('Analizando datos...', 'Generando gráficos...') que dan sensación de progreso y deshabilitan el botón para evitar duplicados.", score: 5, type: "Lead (Perceived Performance)" },
        { id: 'C', text: "Optimizar el backend para que tarde menos de 3 segundos.", score: 2, type: "Ideal (pero fuera de tu control)" }
      ],
      explanation: "Si no puedes hacer el proceso más rápido (C), debes hacer que se sienta más rápido (B). La narrativa de progreso reduce la ansiedad percibida."
    },
    {
      id: 'infinite_scroll_vs_pagination',
      category: "Patrones de Interacción",
      icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
      scenario: "Tienes una tabla de 10,000+ registros de transacciones bancarias. Marketing quiere 'Infinite Scroll' porque se ve moderno y es estándar en redes sociales. El CFO (power user) quiere paginación porque necesita saltar a transacciones específicas (ej: 'ir a Marzo 2023' = página 287).",
      question: "¿Qué patrón de navegación eliges?",
      options: [
        { id: 'A', text: "Paginación Tradicional: Priorizar funcionalidad sobre estética. Los CFOs y contadores necesitan navegación precisa para auditorías. Un producto B2B debe resolver trabajo real, no verse 'trendy'.", score: 4, type: "Conservador (Funcional)" },
        { id: 'B', text: "Infinite Scroll Puro: Es el estándar de apps modernas, elimina clicks y reduce fricción cognitiva. Agregas un filtro por fecha que permite encontrar transacciones específicas sin navegar manualmente.", score: 2, type: "Trend Follower (Ignora contexto)" },
        { id: 'C', text: "Híbrido Contextual: Infinite Scroll como default para el 90% de casos (navegación secuencial), pero con un botón de 'Ir a fecha/página...' en el header para power users que necesitan saltos directos.", score: 5, type: "Lead (Context-Aware)" }
      ],
      explanation: "Infinite scroll es terrible para navegación no-lineal en contextos B2B/financieros donde usuarios necesitan saltar a puntos específicos. La opción B ignora el use case del CFO. La A funciona pero sacrifica UX moderna. La C respeta ambos Jobs-to-be-Done sin imponer un único patrón."
    },

    // --- BLOQUE 10: MOBILE, RESPONSIVE & PLATAFORMAS ---
    {
      id: 'mobile_web_vs_native_app',
      category: "Estrategia de Plataforma",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      scenario: "El 65% del tráfico es móvil, pero todos usan el sitio web responsive. Ventas insiste en que necesitan una App Nativa 'para verse serios' ante clientes Enterprise.",
      question: "¿Cuál es tu recomendación estratégica?",
      options: [
        { id: 'A', text: "Construir una app nativa. Si Ventas dice que cierra deals con eso, es inversión directa en revenue.", score: 0, type: "Feature Factory (Sin validación)" },
        { id: 'B', text: "PWA (Progressive Web App): Mejorar el mobile web actual con capacidades de app (instalable, notificaciones, offline) sin duplicar código. Validar tracción antes de ir nativo.", score: 5, type: "Lead (Incremental Investment)" },
        { id: 'C', text: "Preguntar a los usuarios actuales si usarían una app mediante una encuesta.", score: 2, type: "Investigación sin acción" }
      ],
      explanation: "Una app nativa duplica costos de desarrollo y QA sin garantía de adopción. La PWA (B) te permite testear la hipótesis sin el commitment total."
    },
    {
      id: 'tablet_edge_case',
      category: "Diseño Responsive",
      icon: <Layers className="w-6 h-6 text-cyan-500" />,
      scenario: "Analytics muestra que solo el 3% del tráfico viene de tablets. El diseño actual se rompe visualmente en iPad landscape (1024x768). QA lo reporta como 'bug crítico P0' bloqueando el release. Arreglarlo tomaría 1 día de desarrollo. El deployment está programado para mañana.",
      question: "¿Cómo priorizas este issue?",
      options: [
        { id: 'A', text: "Arreglo Inmediato: Demoras el release 1 día. 'Funcionar correctamente en todos los dispositivos' es parte de la calidad básica del producto. 3% sigue siendo miles de usuarios.", score: 2, type: "Perfeccionista (Mal ROI)" },
        { id: 'B', text: "Análisis de Valor: Segmentas ese 3% en analytics: Si son clientes Enterprise de alto valor o tráfico de decision-makers, se arregla antes del release. Si es tráfico casual/bounce alto, se backlogea como P3 post-launch.", score: 5, type: "Lead (Value-Based Priority)" },
        { id: 'C', text: "Ship y Monitorea: Lanzas mañana según plan. Solo arreglas el tablet bug si empiezan a llegar quejas explícitas via soporte o impacta métricas clave.", score: 4, type: "Reactivo (Velocidad)" }
      ],
      explanation: "No todos los bugs son iguales. El % de tráfico no cuenta toda la historia: ¿quién es ese 3%? Si son CFOs revisando dashboards en iPad, es crítico. Si es bounce traffic aleatorio, no justifica demora. La opción B prioriza por impacto en negocio (B)."
    },
    {
      id: 'gesture_vs_button_mobile',
      category: "Interacción Móvil",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      scenario: "Diseñas un flujo donde el usuario puede 'swipe left' para archivar un item (como email). En los tests, el 40% de usuarios no descubre el gesto y busca un botón de archivar.",
      question: "¿Cómo resuelves la discoverability?",
      options: [
        { id: 'A', text: "Mantener solo el gesto. Agregar un tooltip de 'Desliza para archivar' la primera vez que entran.", score: 4, type: "Coach (Fricción inicial)" },
        { id: 'B', text: "Diseño Dual: Mantener el swipe para power users, pero agregar también un ícono de menú (tres dots) con la acción visible. Optimizar para ambos niveles de habilidad.", score: 5, type: "Lead (Progressive Disclosure)" },
        { id: 'C', text: "Eliminar el gesto y usar solo botones. Priorizar la claridad sobre la elegancia.", score: 4, type: "Conservador (Pierde velocidad)" }
      ],
      explanation: "Los gestos ocultos son eficientes para expertos pero invisibles para novatos. La opción B permite descubrir visualmente y luego acelerar con el gesto."
    },
    {
      id: 'dark_mode_accessibility_conflict',
      category: "Accesibilidad & Diseño",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "El Dark Mode que diseñaste se ve hermoso, pero al auditarlo descubres que varios textos grises sobre fondo oscuro no cumplen el contraste mínimo WCAG AA (4.5:1).",
      question: "¿Qué sacrificas: estética o accesibilidad?",
      options: [
        { id: 'A', text: "Ajustar los grises para cumplir el contraste mínimo, aunque se vean menos sutiles y más duros.", score: 5, type: "Lead (Accesibilidad no negociable)" },
        { id: 'B', text: "Mantener la estética actual y agregar un 'High Contrast Mode' opcional en Settings para usuarios que lo necesiten.", score: 4, type: "Compromiso (Fragmenta la experiencia)" },
        { id: 'C', text: "Mantener el diseño actual. WCAG AA es una guía, no una ley (a menos que estés en gobierno/educación).", score: 0, type: "Irresponsable (Riesgo legal)" }
      ],
      explanation: "La accesibilidad no es opcional ni cosmética. Un 'modo especial' (B) estigmatiza. La opción A integra la inclusión como estándar, no como feature."
    },

    // --- BLOQUE 11: COLABORACIÓN, PROCESO & HANDOFF ---
    {
      id: 'dev_pushback_animation',
      category: "Colaboración con Ingeniería",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Diseñaste una animación de transición de 400ms con easing personalizado. El desarrollador dice que es 'demasiado complejo' y propone hacerla linear de 200ms para ahorrar tiempo.",
      question: "¿Cómo negocías la implementación?",
      options: [
        { id: 'A', text: "Insistes en tu spec original. Los detalles de micro-interacción definen la calidad percibida del producto.", score: 0, type: "Purista (Relación tóxica)" },
        { id: 'B', text: "Pair Programming: Te sientas con el dev, le muestras el código CSS exacto (cubic-bezier) y lo implementan juntos en 10 minutos. Educas mientras entregas.", score: 5, type: "Lead (Enabler)" },
        { id: 'C', text: "Aceptas el linear de 200ms. Las batallas pequeñas no valen la pena.", score: 4, type: "Resignado (Pierde calidad)" }
      ],
      explanation: "Si el dev dice 'es complejo', muchas veces significa 'no sé cómo hacerlo'. La opción B transforma el conflicto en upskilling y fortalece la relación."
    },
    {
      id: 'pm_changes_scope_mid_sprint',
      category: "Gestión de Roadmap",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "Estás a mitad de sprint. El PM viene con un 'small request': agregar un filtro nuevo al dashboard. Dices que tomará 2 días. Responde 'pero es solo un dropdown, ¿cuánto puede costar?'.",
      question: "¿Cómo educas sobre el costo real del cambio?",
      options: [
        { id: 'A', text: "Aceptas hacerlo para mantener buena relación con Product. Total, son solo 2 días.", score: 1, type: "Complaciente (Mata el Sprint)" },
        { id: 'B', text: "Visibilidad del Iceberg: Le muestras el breakdown (diseño, estados de error, casos edge, handoff, QA, responsive). Le ofreces meterlo al siguiente sprint o quitar algo del actual.", score: 5, type: "Lead (Educador de Proceso)" },
        { id: 'C', text: "Te niegas rotundamente. 'Mid-sprint changes' están prohibidos por proceso Agile.", score: 4, type: "Dogmático (Inflexible)" }
      ],
      explanation: "Decir solo 'no' (C) crea fricción. La opción B hace visible el trabajo oculto y empodera al PM para tomar decisiones informadas de trade-offs."
    },
    {
      id: 'qa_reject_pixel_perfect',
      category: "Quality Assurance",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      scenario: "Es jueves a las 5 PM. El release final del feature 'Dashboard Financiero' está programado para viernes al mediodía (demo con CFO de cliente Enterprise el lunes). QA rechaza el build con un P0 bloqueador: 'El spacing entre cards es de 14px en lugar de 16px especificado en Figma. Inconsistencia crítica del Design System'. Arreglarlo tomaría 2-3 horas de dev + re-testing. Ingeniería está frustrada porque todo funciona perfectamente.",
      question: "¿Cómo triages este conflicto entre consistencia visual y deadline de negocio?",
      options: [
        { id: 'A', text: "Bloqueador P0: El Design System existe por una razón - inconsistencias pequeñas acumulan deuda técnica masiva. Arreglar ahora o la integridad del sistema colapsa gradualmente. El equipo trabaja tarde.", score: 2, type: "Purista (Costo/beneficio cuestionable)" },
        { id: 'B', text: "Triage por Impacto: Evalúas si alguien (usuario, cliente, CFO en demo) notará realmente 2px de diferencia en spacing. Si no afecta percepción de calidad ni funcionalidad, lo clasificas como P3 post-launch y shipeas.", score: 5, type: "Lead (Impact-based triage)" },
        { id: 'C', text: "Negociación con QA: Les pides que 'sean menos estrictos con detalles visuales' y se enfoquen en bugs funcionales críticos. Estableces threshold de tolerancia (±4px es aceptable).", score: 3, type: "Pragmático (Erosiona proceso)" }
      ],
      explanation: "2px de spacing raramente es perceptible ni afecta uso real del producto. La A bloquea por dogma del sistema sin considerar ROI. La C genera resentimiento con QA y erosiona su autoridad. Un Lead triage por impacto real en usuario/negocio (B), no por specs abstractas."
    },
    {
      id: 'documentation_handoff_speed',
      category: "Process",
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      scenario: "Es miércoles a las 4 PM. Tienes una iteración menor de un componente (cambio de color de botón secundario) que debe entregarse a ingeniería mañana jueves para el sprint. Crear documentación completa en Figma (specs, estados, responsive, accesibilidad, casos edge) tomaría 3 horas. Es un cambio simple pero el proceso formal establece documentación completa obligatoria para TODO handoff.",
      question: "¿Qué nivel de documentación entregas para balancear velocidad y claridad?",
      options: [
        { id: 'A', text: "Documentación Completa Obligatoria: 3 horas invertidas en specs exhaustivas, independientemente del tamaño del cambio. El proceso existe para prevenir malentendidos costosos. La consistencia del proceso es sagrada.", score: 2, type: "Burocrático (No escala)" },
        { id: 'B', text: "Specs Críticos + Async Support: Documentas solo decisiones ambiguas (nuevo color, estados hover/disabled) en Figma + Loom de 3min mostrando interacción. Ofreces estar disponible en Slack para aclarar dudas. Balanceas rigor con agilidad.", score: 5, type: "Lead (Context-appropriate rigor)" },
        { id: 'C', text: "Comunicación Verbal Rápida: Saltas la documentación y haces una llamada rápida de 15min con el dev lead mostrando el cambio en pantalla compartida. 'Es solo un color, no necesitamos burocracia'.", score: 1, type: "Cowboy (Genera deuda de conocimiento)" }
      ],
      explanation: "Documentación debe ser proporcional a complejidad del cambio. La A aplica proceso rígido sin considerar contexto (cambio menor). La C genera deuda de conocimiento porque no queda registro. Un cambio simple requiere docs mínimas + async support (B)."
    },

    // --- BLOQUE 12: CULTURA, FEEDBACK & MENTORÍA ---
    {
      id: 'critique_session_dominance',
      category: "Team Dynamics",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      scenario: "En tus Design Critiques semanales (10 personas: 3 seniors, 4 mids, 3 juniors), observas un patrón consistente: Los 3 seniors dominan completamente la conversación - hablan el 80% del tiempo, interrumpen a los juniors, y sus opiniones siempre prevalecen incluso en proyectos que no lideran. Los juniors han dejado de participar activamente y solo escuchan. Uno te confesó en privado que 'se siente intimidado para opinar'.",
      question: "¿Cómo reestructuras las Critiques para balance de voces sin alienar a los seniors?",
      options: [
        { id: 'A', text: "Dejar Fluir Naturalmente: Confías en que la meritocracia de ideas prevalezca orgánicamente. Los seniors hablan más porque tienen más experiencia - es natural. Intervenir sería artificial y condescendiente con los juniors.", score: 1, type: "Pasivo (Mantiene desbalance)" },
        { id: 'B', text: "Round-Robin Estructurado: Estableces formato obligatorio donde cada persona tiene 2 minutos sin interrupciones para opinar, en orden rotativo (junior → mid → senior). Después abres discusión general. Estructura forzada pero inclusiva.", score: 5, type: "Lead (Equaliza voces activamente)" },
        { id: 'C', text: "Coaching Privado Post-Critique: No cambias el formato de las sesiones, pero hablas con juniors individualmente después para escuchar sus opiniones 'en un espacio seguro' y luego las compartes anónimamente con el equipo.", score: 3, type: "Band-aid (No cambia dinámica raíz)" }
      ],
      explanation: "Dejar la dinámica natural (A) perpetúa el desbalance de poder. La C es parche que no empodera a juniors directamente. Facilitar activamente mediante estructura (Round-Robin B) fuerza igualdad de airtime y entrena a seniors a escuchar más. La diversidad de perspectivas mejora decisiones."
    },
    {
      id: 'feedback_sandwich_method',
      category: "Mentoría & Crecimiento",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Un junior presenta un diseño con un error fundamental de jerarquía visual. Tienes que dar feedback correctivo en la sesión grupal.",
      question: "¿Cómo estructuras el feedback?",
      options: [
        { id: 'A', text: "Método Sándwich: Empiezas con algo positivo, luego la crítica, luego otro positivo para suavizar.", score: 4, type: "Diplomático (Confuso)" },
        { id: 'B', text: "Feedback Directo pero Específico: 'La jerarquía actual hace que el CTA se pierda. Si movemos X aquí y aumentamos el contrast Y, guiamos mejor la atención. ¿Probamos eso?'.", score: 5, type: "Lead (Constructivo y Claro)" },
        { id: 'C', text: "Preguntas Socráticas: '¿Cuál es el elemento más importante de esta pantalla? ¿Dónde va tu ojo primero?'.", score: 4, type: "Coach (Lento para grupos)" }
      ],
      explanation: "El 'sándwich' diluye el mensaje. El feedback directo (B) con solución propuesta es más útil y respetuoso que rodeos. Las preguntas socráticas (C) funcionan 1-on-1, no en grupo."
    },
    {
      id: 'imposter_syndrome_senior',
      category: "People Management",
      icon: <User className="w-6 h-6 text-indigo-400" />,
      scenario: "Una diseñadora Senior (5 años en tech, liderando proyectos críticos exitosamente) te confiesa en un 1-on-1 que se siente 'fraude' porque no sabe ilustración ni animación como los diseñadores que ve en Dribbble. Dice que 'no es realmente creativa, solo sigue procesos'. Tú sabes que ella diseñó el flujo de onboarding que aumentó activación 35% - uno de los wins más grandes del año.",
      question: "¿Cómo abordas el síndrome del impostor de manera que genere cambio real de perspectiva?",
      options: [
        { id: 'A', text: "Upskilling Reactivo: Le sugieres inscribirse en un curso de After Effects y contratar un mentor de ilustración para 'llenar esos vacíos'. Apoyas su auto-desarrollo en las áreas donde se siente inferior.", score: 1, type: "Refuerza el síndrome (Valida inseguridad)" },
        { id: 'B', text: "Mostrar Impacto Cuantitativo: Le muestras dashboard con métricas de sus proyectos (+35% activación, -20% churn, $2M revenue atribuible). Recontextualizas su valor: 'Tu trabajo movió la aguja del negocio más que cualquier ilustración bonita. ESO es diseño senior'.", score: 5, type: "Lead (Reframe con evidencia)" },
        { id: 'C', text: "Validación Emocional: Le dices 'Todos sentimos eso a veces, es totalmente normal. Eres increíble, confía en ti misma'. Empatía y refuerzo positivo genérico.", score: 2, type: "Superficial (No cambia creencia raíz)" }
      ],
      explanation: "La A valida la creencia errónea de que 'le faltan skills', empeorando el síndrome. La C es empatía sin sustancia que no cambia perspectiva. Un Lead usa EVIDENCIA objetiva de impacto (B) para demostrar que el valor real está en problem-solving, no en aesthetic flexing de Dribbble."
    },
    {
      id: 'promotion_readiness_debate',
      category: "Career Growth",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      scenario: "Un diseñador Mid (3 años en la empresa, trabajo técnico excelente, pero cero mentoría, no lidera proyectos cross-funcionales, evita presentar a stakeholders) te pide promoción a Senior. Argumenta: 'Llevo 3 años aquí, mi calidad de diseño es Senior-level, merezco el título y el aumento'. Pero tú sabes que Senior requiere liderazgo y influencia, no solo craft. Promover prematuramente crearía precedente peligroso.",
      question: "¿Cómo manejas la solicitud sin desmotivar pero manteniendo bar de promoción?",
      options: [
        { id: 'A', text: "Promoción por Permanencia: Lo asciendes porque 3 años es 'suficiente tiempo' y su craft técnico es sólido. No quieres que se vaya frustrado. El título Senior puede motivarlo a crecer en liderazgo después.", score: 1, type: "Inflación de títulos (Rompe bar)" },
        { id: 'B', text: "Roadmap de 3-6 Meses: Rechazas la promoción HOY pero creas plan concreto con 3 objetivos medibles de liderazgo (mentoría de 1 junior, liderar 1 proyecto cross-functional, presentar en Design Review mensual). Si cumple en 6 meses, promoción garantizada.", score: 5, type: "Lead (Growth plan con accountability)" },
        { id: 'C', text: "Aumento sin Título: Le das el aumento salarial que pide pero no el título Senior. 'Compensamos tu craft, pero el título requiere más liderazgo'. Compras tiempo sin cambiar expectations.", score: 3, type: "Parche (No resuelve expectativa de crecimiento)" }
      ],
      explanation: "Promocionar por tiempo/craft solo (A) infla títulos y baja el bar para todos. La C es parche que no da path claro. Un Lead establece criterios transparentes de promoción y da roadmap concreto con ownership (B). Si falla en cumplir, al menos tiene claridad del porqué."
    },

    // --- BLOQUE 13: NEGOCIO, VENTAS & STAKEHOLDERS ---
    {
      id: 'enterprise_client_custom_request',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "Tu cliente Enterprise más grande (Banco LATAM que paga $800K/año, 18% de tu ARR total) solicita una feature crítica para su flujo regulatorio interno: exportar audit trails en formato XML propietario de su sistema legacy. Estimación: 6 semanas de desarrollo. Sales dice que si no lo builds, migran a competidor en Q2. Solo este cliente lo usaría - ningún otro banco tiene ese sistema legacy específico.",
      question: "¿Cómo evalúas la solicitud balanceando revenue vs integridad de producto?",
      options: [
        { id: 'A', text: "Construirlo Inmediatamente: $800K/año (18% ARR) justifica cualquier request. Priorizas sobre roadmap. El concepto de 'pureza de producto SaaS' no paga los salarios del equipo.", score: 2, type: "Revenue-first (Crea deuda técnica)" },
        { id: 'B', text: "Strategic Build vs Buy: Si el desarrollo puede generalizarse parcialmente a otras integraciones enterprise (SAP, Oracle) y el LTV del cliente > costo de desarrollo, se construye en core. Si no, se ofrece como Professional Services con costo adicional ($150-200K one-time).", score: 5, type: "Lead (ROI-based decision)" },
        { id: 'C', text: "Rechazarlo Por Principio: Construir features para un solo cliente es la muerte de productos SaaS escalables. Ofreces API abierta para que ellos construyan la integración. Arriesgas perder el cliente.", score: 3, type: "Purista (Alto riesgo financiero)" }
      ],
      explanation: "La A convierte el producto en consultora. La C aplica dogma sin considerar que 18% ARR es existencial. Un Lead evalúa: ¿el feature tiene abstracción generalizable? ¿El LTV justifica el costo? Si no, Professional Services monetiza sin contaminar roadmap (B)."
    },
    {
      id: 'freemium_upgrade_friction',
      category: "Monetización & UX",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "El plan Free tiene el 82% de tu base de usuarios activos (45K de 55K totales) pero genera solo el 3% del revenue. El burn rate actual dice que la empresa tiene runway de 9 meses. El CFO presiona porque cada usuario gratis cuesta $2/mes en infraestructura. Product/Growth quiere implementar 'upgrade prompts' invasivos cada 5 clicks para aumentar conversión. Benchmarking muestra que Slack/Notion tienen prompts similares.",
      question: "¿Cómo balanceas agresividad de monetización vs experiencia de usuario?",
      options: [
        { id: 'A', text: "Rechazar Prompts por Principio: 'La UX no se negocia'. Los usuarios pagarán orgánicamente si perciben valor, no por presión. Confías en que mejorar el producto aumentará conversión naturalmente.", score: 1, type: "Idealista (Ignora realidad de runway)" },
        { id: 'B', text: "Contextual Value-Based Upselling: Mostrar upgrade prompt SOLO cuando el usuario choca con límite de su plan (ej: 'Alcanzaste tu límite de 10 proyectos. Upgrade para ilimitados + features X, Y'). Educas sobre valor en momento de necesidad.", score: 5, type: "Lead (Fricción intencional)" },
        { id: 'C', text: "Prompts con Opt-Out: Implementas los prompts cada 5 clicks como pide Growth, pero agregas botón 'No mostrar por 30 días'. Cumples con Growth, das escape al usuario.", score: 3, type: "Compromiso (Usuario cierra permanentemente)" }
      ],
      explanation: "Con 9 meses de runway, rechazar monetización (A) es iluso - la empresa morirá antes. La C entrena al usuario a ignorar/cerrar prompts inmediatamente. Los upsells contextuales (B) convierten mejor porque demuestran PORQUÉ pagar en el momento exacto de fricción."
    },
    {
      id: 'pricing_page_complexity',
      category: "Estrategia de Producto",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "La página de Pricing tiene 5 tiers de planes con 30+ features listadas en una tabla de comparación. Analytics muestra 60% de bounce rate en esta página (vs 25% promedio del sitio). Session recordings muestran usuarios scrolleando arriba y abajo repetidamente sin decidir.",
      question: "¿Cómo simplificas la decisión de compra?",
      options: [
        { id: 'A', text: "Plan Finder Quiz: Diseñas un quiz interactivo de 5 preguntas (tamaño de empresa, use case, presupuesto) que recomienda el plan ideal. Reduces la carga cognitiva guiando al usuario paso a paso.", score: 2, type: "Creativo (Agrega fricción)" },
        { id: 'B', text: "Good-Better-Best: Reduces a 3 planes solamente, listas solo las 5 diferencias clave visibles, y escondes el resto en un accordion 'Ver comparación completa'. Eliminas la parálisis por exceso de opciones.", score: 5, type: "Lead (Paradox of Choice)" },
        { id: 'C', text: "Social Proof Nudge: Mantienes los 5 planes pero agregas un badge de 'Más Popular' o 'Recomendado para empresas como la tuya' en el tier medio-alto para guiar la decisión con autoridad.", score: 4, type: "Nudge (Mejora parcial)" }
      ],
      explanation: "60% de bounce es evidencia de parálisis por análisis. La A agrega pasos adicionales cuando el problema es exceso de opciones. La C ayuda pero no elimina la complejidad. La B aplica el principio de 'Paradox of Choice': menos opciones con diferencias claras facilitan la decisión (B)."
    },
    {
      id: 'seo_vs_ux_url_structure',
      category: "SEO vs Experiencia",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      scenario: "Marketing comparte estudio que muestra que tus competidores ranquean 3x mejor en Google porque usan URLs descriptivas con keywords (/financial-dashboard-analytics vs tu actual /dashboard). Proponen cambiar TODAS las URLs del producto (40+ pantallas) para SEO. Ingeniería advierte que hay 12K links compartidos en Slack/Notion/emails de clientes enterprise que se romperían. Customer Success reporta que muchos clientes tienen bookmarks internos.",
      question: "¿Cómo priorizas entre ganancia de SEO vs experiencia de usuarios activos?",
      options: [
        { id: 'A', text: "Priorizar SEO Inmediatamente: El tráfico orgánico nuevo vale más que la inconveniencia temporal de usuarios actuales. Cambias las URLs, comunicas por email y asumes que se adaptarán.", score: 2, type: "Growth-first (Rompe confianza)" },
        { id: 'B', text: "Migration Strategy con Redirects 301: Cambias las URLs pero implementas redirects permanentes que mantienen compatibilidad con links antiguos. Monitoreas analytics por 30 días para validar que no hay caída de engagement antes de commitear.", score: 5, type: "Lead (No-downside migration)" },
        { id: 'C', text: "Rechazar Cambio Completamente: Las URLs son parte de la UX establecida, parte de muscle memory de usuarios. El SEO se puede mejorar con meta tags, contenido, backlinks - no sacrificas UX por ranking.", score: 3, type: "Conservador (Pierde oportunidad)" }
      ],
      explanation: "Cambiar URLs sin strategy rompe bookmarks, links compartidos y confianza (A). La C es conservadora pero pierde ganancia real de SEO. Los redirects 301 (B) permiten evolucionar sin destruir -  literalmente win-win si está bien implementado."
    },

    // --- BLOQUE 14: INNOVACIÓN, TRENDS & TECH DEBT ---
    {
      id: 'ai_feature_hype_cycle',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "En el All-Hands mensual, el CEO anuncia públicamente (ante toda la empresa) que 'necesitamos AI en el producto para Q2, todos nuestros competidores ya lo tienen'. No especifica QUÉ problema debe resolver, solo que 'debe estar visible en la UI para mostrar en demos con inversores Series B'. El VP de Product te pregunta en privado 'qué podemos hacer rápido para cumplir'. Tienes 6 semanas.",
      question: "¿Cómo canalizas la presión de AI hype hacia implementación con valor real?",
      options: [
        { id: 'A', text: "Chatbot GPT Genérico: Implementas chat assistant con GPT-4 en esquina del dashboard. Los usuarios pueden 'preguntarle cosas' al producto. Es visible, cumple el deadline de 6 semanas, y suena innovador en pitch.", score: 2, type: "Quick win (Expectativa > realidad)" },
        { id: 'B', text: "Problem-First Discovery Sprint: 2 semanas de entrevistas con 15 power users identificando tareas manuales repetitivas que AI podría automatizar (categorización, data entry, predicciones, generación de reportes). Presentas 3 casos de uso con ROI medible. Pides 1Q para build correcto.", score: 5, type: "Lead (Delayed gratification)" },
        { id: 'C', text: "AI-Enhanced Badges: Agregas badges 'Powered by AI' o 'Smart Suggestions' a features existentes que ya usan algoritmos básicos (sorting, filtering, regex). Costo cero, marketing instantáneo.", score: 0, type: "AI-washing (Fraude que genera backlash)" }
      ],
      explanation: "La C es fraude que genera backlash cuando usuarios descubren que no hay AI real. La A crea expectativa de 'asistente inteligente' que un chatbot genérico no cumple - decepciona. Requiere corage, pero un Lead encuentra casos de uso donde AI elimina trabajo tedioso genuino (B), aunque tome más tiempo."
    },
    {
      id: 'design_trend_neumorphism',
      category: "Tendencias de Diseño",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "Un diseñador Mid quiere rediseñar el Dashboard con 'Neumorphism' (sombras sutiles 3D soft). Se ve espectacular en su prototipo de Dribbble. Sin embargo, al auditarlo descubres que tiene ratio de contraste de 2.8:1 en varios elementos (WCAG AA requiere 4.5:1) y es difícil de escanear visualmente.",
      question: "¿Cómo evalúas adoptar trends visuales?",
      options: [
        { id: 'A', text: "Híbrido de Marketing: Permites usar Neumorphism solo en secciones de Marketing (landing page, homepage pública) donde el impacto visual importa más, pero lo prohíbes en el producto core donde prima la usabilidad.", score: 4, type: "Compromiso (Inconsistencia)" },
        { id: 'B', text: "Innovación Visual: Lo permites. La diferenciación visual atrae usuarios y demuestra que el producto es moderno. Los problemas de contraste se pueden ajustar iterativamente después del lanzamiento basado en feedback.", score: 1, type: "Trend Chaser (Arriesga usabilidad)" },
        { id: 'C', text: "Accessibility First: Si el trend no puede cumplir WCAG AA sin compromisos estéticos severos, se rechaza. La moda no justifica excluir usuarios con baja visión o condiciones de luz. Los principios no son negociables.", score: 5, type: "Lead (Principios > Estética)" }
      ],
      explanation: "Los trends visuales vienen y van (Neumorphism ya está en decline), pero la accesibilidad es permanente y legal en muchas jurisdicciones. La B arriesga usabilidad por estética temporal. La A genera inconsistencia de marca. Un Lead sabe que un diseño que excluye usuarios es mal diseño (C)."
    },
    {
      id: 'legacy_code_rewrite_temptation',
      category: "Estrategia de Migración",
      icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
      scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
      question: "¿Cuál es tu postura como stakeholder de diseño?",
      options: [
        { id: 'A', text: "Apoyar el rewrite completo. Es momento de saldar la deuda técnica.", score: 1, type: "Ingenuo (Gran Bomba)" },
        { id: 'B', text: "Micro-Frontends o Modular Rewrite: Migrar pantalla por pantalla, permitiendo que convivan Angular y React temporalmente. Priorizar las vistas con más tráfico primero.", score: 5, type: "Lead (Incremental De-Risking)" },
        { id: 'C', text: "Oponerse completamente. Si funciona, no se toca. Priorizar features sobre refactoring.", score: 4, type: "Cortoplacista (Acumula más deuda)" }
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
        { id: 'A', text: "Pausar features por 3 sprints para hacer la migración completa de una vez.", score: 0, type: "Big Bang (Mata el roadmap)" },
        { id: 'B', text: "Versionado Coexistente: Publicar la V2 en un namespace separado (@design-system/v2), permitir que ambas versiones convivan, y migrar módulo por módulo durante 6 meses.", score: 5, type: "Lead (Graceful Migration)" },
        { id: 'C', text: "Lanzar solo los componentes nuevos en V2, manteniendo los viejos sin cambios.", score: 2, type: "Fragmentación (Dos sistemas eternos)" }
      ],
      explanation: "Forzar una migración masiva (A) detiene el negocio. La coexistencia temporal (B) permite evolucionar sin destruir lo que funciona."
    },

    // --- BLOQUE 15: ÉTICA, COMPLIANCE & DARK PATTERNS ---
    {
      id: 'gdpr_cookie_consent_ux',
      category: "Compliance & UX",
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      scenario: "Legal exige implementar un banner de consentimiento de cookies por GDPR. Te mandan un texto de 400 palabras que debe ser visible antes de que el usuario haga nada.",
      question: "¿Cómo diseñas el cumplimiento sin destruir la UX?",
      options: [
        { id: 'A', text: "Un modal full-screen que bloquea todo hasta que acepte. Cumplimiento estricto.", score: 0, type: "Hostile UX (Ahuyenta usuarios)" },
        { id: 'B', text: "Banner Bottom con Resumen: Texto corto + link a 'Leer más'. Botones claros de 'Aceptar' y 'Personalizar'. El cumplimiento no requiere saturación, requiere consentimiento informado.", score: 5, type: "Lead (Compliance + UX)" },
        { id: 'C', text: "Esconder el banner detrás de un ícono pequeño de 'Cookies' en el footer.", score: 0, type: "No cumple GDPR" }
      ],
      explanation: "El GDPR no exige hostilidad, exige claridad y consentimiento. Un banner bien diseñado (B) cumple sin arruinar la primera impresión."
    },
    {
      id: 'addictive_design_notifications',
      category: "Ética de Diseño",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Growth quiere implementar notificaciones push diarias con mensajes tipo 'Tu reporte te extraña' para aumentar el engagement. Sabes que es manipulación emocional.",
      question: "¿Dónde trazas la línea ética?",
      options: [
        { id: 'A', text: "Implementarlo. El engagement es una métrica clave del negocio.", score: 0, type: "Cómplice de manipulación" },
        { id: 'B', text: "Proponer notificaciones basadas en valor real: 'Nuevo reporte disponible', 'Anomalía detectada en tus datos'. Engagement por utilidad, no por guilt-tripping.", score: 5, type: "Lead (Ética de Valor)" },
        { id: 'C', text: "Rechazar todas las notificaciones push por principio.", score: 2, type: "Extremista (Pierde canal válido)" }
      ],
      explanation: "Las notificaciones no son inherentemente malas, pero el tono manipulador sí lo es. La opción B usa el canal para entregar valor real, no para jugar con emociones."
    },
    {
      id: 'data_collection_transparency',
      category: "Privacidad & Trust",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "El equipo de Analytics quiere trackear cada click, scroll y tiempo en pantalla del usuario. Marketing dice que es 'estándar de la industria'. No hay consentimiento explícito.",
      question: "¿Qué nivel de tracking defiendes?",
      options: [
        { id: 'A', text: "Trackear todo. Es data agregada y anónima, no hay problema ético.", score: 0, type: "Surveillance UX" },
        { id: 'B', text: "Tracking con Consentimiento: Implementar un sistema opt-in claro en Settings donde el usuario decide qué comparte. Por defecto, solo tracking funcional (errores, performance).", score: 5, type: "Lead (Privacy by Design)" },
        { id: 'C', text: "Solo trackear eventos de negocio críticos (sign-up, purchase), nada más.", score: 2, type: "Limitante (Pierde insights de UX)" }
      ],
      explanation: "'Todo el mundo lo hace' no es justificación ética. La opción B respeta al usuario como dueño de sus datos y construye confianza de marca."
    },
    {
      id: 'fake_social_proof',
      category: "Growth Hacking vs Ética",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Marketing quiere agregar un popup de 'Juan de México acaba de suscribirse' (estilo Booking.com) para generar FOMO. Te piden usar datos reales de sign-ups. Hay 5 sign-ups al día reales.",
      question: "¿Qué implementas?",
      options: [
        { id: 'A', text: "Mostrar los 5 sign-ups reales espaciados durante el día. Social proof honesto.", score: 5, type: "Lead (Autenticidad)" },
        { id: 'B', text: "Generar notificaciones falsas cada 2 minutos para crear sensación de actividad constante.", score: 0, type: "Fraude (Erosión de confianza)" },
        { id: 'C', text: "No implementar social proof. Es manipulación psicológica.", score: 2, type: "Purista (Pierde conversión legítima)" }
      ],
      explanation: "El social proof funciona cuando es real (A). Fake urgency (B) es mentir al usuario y eventualmente se descubre, destruyendo la confianza. La opción C es demasiado extrema."
    },

    // --- BLOQUE 16: CRISIS, FAILURES & LEARNING ---
    {
      id: 'production_bug_major_incident',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
      scenario: "Sale un bug crítico a producción que rompe el flujo de pago. Los usuarios no pueden comprar. Perdiste $50K en 2 horas. Fue un error en el handoff de diseño (faltó documentar un estado de error).",
      question: "¿Cómo manejas la post-mortem?",
      options: [
        { id: 'A', text: "Asumir responsabilidad pública en la reunión de post-mortem y ofrecer tu renuncia si es necesario.", score: 0, type: "Dramático (Innecesario)" },
        { id: 'B', text: "Blameless Post-Mortem: Analizar la falla sistémica (proceso de QA, checklist de handoff, cobertura de tests) y proponer mejoras concretas para que no vuelva a pasar.", score: 5, type: "Lead (Cultura de Aprendizaje)" },
        { id: 'C', text: "Culpar al desarrollador que no preguntó por ese estado específico.", score: 0, type: "Tóxico (Destruye confianza)" }
      ],
      explanation: "Los errores individuales son síntomas de procesos rotos. La cultura blameless (B) convierte fallas en aprendizaje sistémico. Culpar (A, C) genera miedo y oculta futuros problemas."
    },
    {
      id: 'failed_redesign_metrics_drop',
      category: "Data-Driven Design",
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      scenario: "Lanzaste un rediseño 'basado en research' con mucha confianza. A las 2 semanas, las métricas clave cayeron un 12%. El equipo está desmoralizado.",
      question: "¿Cuál es tu respuesta?",
      options: [
        { id: 'A', text: "Revertir inmediatamente al diseño anterior y olvidar que pasó.", score: 3, type: "Reactivo (Pierde el aprendizaje)" },
        { id: 'B', text: "Root Cause Analysis: Analizar qué específicamente causó la caída (¿un flujo? ¿un botón? ¿mobile vs desktop?). Iterar rápido sobre las hipótesis de falla sin revertir todo.", score: 5, type: "Lead (Scientific Iteration)" },
        { id: 'C', text: "Esperar 1 mes más. A veces los usuarios necesitan tiempo para acostumbrarse al cambio.", score: 0, type: "Negación (Quema dinero)" }
      ],
      explanation: "Una caída del 12% no se 'arregla sola' (C). Revertir (A) es seguro pero no aprendes nada. La opción B diagnostica el problema específico y ajusta con datos."
    },
    {
      id: 'user_backlash_social_media',
      category: "Community Management",
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      scenario: "Cambias el ícono del producto y los usuarios explotan en Twitter/Reddit diciendo que 'el nuevo logo es horrible' y 'ya no entienden la marca'. Hay 2000 tweets negativos.",
      question: "¿Cómo respondes a la crisis de percepción?",
      options: [
        { id: 'A', text: "Revertir el logo inmediatamente para calmar a la comunidad.", score: 1, type: "Reactivo (Pierde autoridad)" },
        { id: 'B', text: "Vocal Minority Bias: Analizar la data real (¿cuántos usuarios activos son esos 2000? ¿cambió el NPS/retention?). Si las métricas de negocio no se mueven, es ruido. Comunicar la visión del cambio con confianza.", score: 5, type: "Lead (Data over Noise)" },
        { id: 'C', text: "Ignorar completamente el feedback. 'Los usuarios se acostumbrarán'.", score: 3, type: "Arrogante (Pierde empatía)" }
      ],
      explanation: "Twitter no es representativo de toda tu base. La opción B separa ruido de señal. Si la métrica clave (retención, conversión) no cambió, es resistencia al cambio, no un problema real."
    },
    {
      id: 'layoff_team_morale',
      category: "Bienestar del Equipo",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "La empresa hace un layoff del 20%. Tu equipo se salvó, pero el ambiente está devastado: miedo, culpa del sobreviviente, desconfianza en la dirección.",
      question: "¿Cómo reconstruyes la moral?",
      options: [
        { id: 'A', text: "Organizar un team building o happy hour para 'levantar los ánimos'.", score: 0, type: "Tone-deaf (Insulta la situación)" },
        { id: 'B', text: "Transparencia Radical: Reunión 1-on-1 con cada persona para validar sus emociones, explicar la situación financiera con honestidad y darles visibilidad del roadmap próximo. Acción > Palabras.", score: 5, type: "Lead (Honestidad + Estabilidad)" },
        { id: 'C', text: "Dar espacio. No forzar conversaciones incómodas y dejar que el tiempo cure.", score: 2, type: "Pasivo (Deja heridas abiertas)" }
      ],
      explanation: "Un layoff rompe la confianza. La transparencia (B) reconstruye más rápido que el silencio (C) o la distracción superficial (A). Las personas necesitan claridad, no fiestas."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 17 - GESTIÓN DE CRISIS & LIDERAZGO ---
    {
      id: 'crisis_investor_demo_failure',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "Es el día del demo crítico con inversionistas para cerrar la Serie A. 30 minutos antes, el ambiente de staging se cae por un problema de infraestructura. El equipo de ingeniería dice que tomará 2 horas arreglarlo. Los inversionistas ya están en camino.",
      question: "¿Cuál es tu plan de contingencia inmediato?",
      options: [
        { id: 'A', text: "Retrasar la reunión 2 horas enviando una excusa corporativa ('Conflicto de agenda del CEO'). Esperas que staging se arregle para hacer el demo perfecto.", score: 1, type: "Mentiroso (Pierde credibilidad)" },
        { id: 'B', text: "Demo en Producción con Datos Reales: Usas el ambiente live con usuarios reales, preparas un script tight para minimizar riesgos y asignas a alguien del equipo a monitorear errores en tiempo real. La autenticidad puede ser una ventaja.", score: 5, type: "Lead (Improvisa con Confianza)" },
        { id: 'C', text: "Convertir el demo en una presentación de slides con capturas de pantalla y videos pregrabados del producto.", score: 3, type: "Backup Plan (Menos impacto)" }
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
        { id: 'A', text: "Contraoferta agresiva: Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas.", score: 0, type: "Desesperado (Insostenible)" },
        { id: 'B', text: "Knowledge Transfer Intensivo: Las próximas 2 semanas son SOLO documentación, grabación de Looms, sesiones de pair design con el siguiente senior, y traspaso estructurado. Nada de features nuevas.", score: 5, type: "Lead (Minimiza Pérdida)" },
        { id: 'C', text: "Contratar un freelance senior urgentemente para que trabaje en paralelo estas 2 semanas y aprenda observando.", score: 2, type: "Costoso (Curva de aprendizaje)" }
      ],
      explanation: "Contraatacar con dinero (A) genera resentimiento si cedes bajo presión. La opción B maximiza la transferencia de conocimiento estructurado en el tiempo limitado disponible."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 18 - DATA-DRIVEN DESIGN ---
    {
      id: 'data_contradictory_qualitative_quantitative',
      category: "Data-Driven Design",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "El research cualitativo (entrevistas con 15 usuarios) dice que odian el nuevo flujo de checkout. Pero el A/B test cuantitativo muestra un aumento del 8% en conversión. Product dice 'los números no mienten'.",
      question: "¿Cómo concilias la contradicción?",
      options: [
        { id: 'A', text: "Priorizar la data cuantitativa. La conversión subió, eso es lo único que importa para el negocio.", score: 0, type: "Miope (Ignora calidad)" },
        { id: 'B', text: "Análisis de Cohortes: Investigar si el aumento de conversión viene de nuevos usuarios (que no conocen la versión vieja) vs usuarios recurrentes. Podríamos estar optimizando para una sola vez a costa de la retención.", score: 5, type: "Lead (Profundidad Analítica)" },
        { id: 'C', text: "Mantener el diseño nuevo pero abrir un backlog de mejoras UX basadas en el feedback cualitativo para iterar después.", score: 2, type: "Compromiso (No resuelve la tensión)" }
      ],
      explanation: "Un incremento de conversión puede ser a corto plazo si degrada la experiencia. La opción B busca entender QUIÉN convierte más y si hay trade-offs ocultos en retención o NPS."
    },
    {
      id: 'data_analytics_instrumentation_debt',
      category: "Data-Driven Design",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Lanzaste 5 features nuevas en los últimos 2 meses, pero ninguna tiene tracking de eventos implementado. No puedes medir su impacto. Ingeniería dice que 'no hubo tiempo' para agregar analytics.",
      question: "¿Cómo prevenis que esto vuelva a pasar?",
      options: [
        { id: 'A', text: "Crear un ticket de 'Analytics Sprint' para instrumentar todo retroactivamente.", score: 3, type: "Reactivo (Nunca se prioriza)" },
        { id: 'B', text: "Definition of Done: Cambiar el proceso para que NINGUNA feature se considere 'completada' sin eventos de tracking implementados y validados en staging. Bloqueo de QA.", score: 5, type: "Lead (Cambio de Proceso)" },
        { id: 'C', text: "Contratar un Data Analyst dedicado para que sea responsable de implementar el tracking.", score: 3, type: "Bandaid (No resuelve cultura)" }
      ],
      explanation: "Arreglar retroactivamente (A) nunca se hace. Contratar (C) no cambia la cultura. La opción B hace que el tracking sea un requerimiento no negociable del flujo de desarrollo."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 19 - PRODUCTO VS VENTAS ---
    {
      id: 'sales_promise_impossible_timeline',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
      question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
      options: [
        { id: 'A', text: "Forzar al equipo a hacer un MVP sucio en 3 semanas trabajando overtime para no perder el contrato.", score: 0, type: "Burnout Factory (Deuda técnica brutal)" },
        { id: 'B', text: "Renegociación con el Cliente: Ventas y Product van juntos a ofrecer un plan de entrega por fases (integración básica en 3 semanas, features completas en 3 meses). Transparencia > Promesas rotas.", score: 5, type: "Lead (Realismo Profesional)" },
        { id: 'C', text: "Buscar una solución no-code temporal (Zapier, Make) para cumplir la promesa mientras construyes la integración real en paralelo.", score: 2, type: "Parche Creativo (Funcional pero no escalable)" }
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
        { id: 'A', text: "Aceptar el compromiso pero escalar con el CEO para prohibir que Ventas prometa features sin aprobación de Product.", score: 3, type: "Reactivo (Cierra la puerta tarde)" },
        { id: 'B', text: "Proceso de 'Deal Desk': Crear un comité obligatorio de Product + Engineering + Sales que debe aprobar CUALQUIER customización antes de que se cierre el contrato. Ventas no puede prometer unilateralmente.", score: 5, type: "Lead (Proceso de Gobernanza)" },
        { id: 'C', text: "Construir la feature pero cobrar internamente a Ventas el costo de oportunidad (qué features del roadmap se retrasan por esto).", score: 3, type: "Político (No previene)" }
      ],
      explanation: "Quejarse después (A) no cambia nada. La opción B institucionaliza un proceso donde Product es stakeholder obligatorio en negociaciones que afectan el roadmap."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 20 - GESTIÓN DE TALENTO ---
    {
      id: 'talent_flight_risk_retention',
      category: "Gestión de Talento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Detectas señales de que un diseñador Mid-Level está siendo reclutado activamente (actualización de LinkedIn, reuniones misteriosas, menos engagement). Es un momento crítico del proyecto y no puedes darte el lujo de perderlo.",
      question: "¿Cómo intervienes preventivamente?",
      options: [
        { id: 'A', text: "Ofrecerle un aumento de sueldo preemptivo del 15% y un título de Senior para retenerlo.", score: 0, type: "Parche Costoso (Sin diagnóstico)" },
        { id: 'B', text: "Conversación de Career Path: 1-on-1 honesto preguntando directamente por su satisfacción, visión de carrera y qué necesitaría para quedarse. Diagnosticar si es $ o crecimiento o cultura.", score: 5, type: "Lead (Escucha Activa)" },
        { id: 'C', text: "Asignarle el proyecto más interesante del roadmap para re-engancharlo emocionalmente.", score: 2, type: "Incentivo Táctico (Temporal)" }
      ],
      explanation: "Tirar dinero (A) sin entender la causa subyacente no funciona. La opción B diagnostica la raíz del problema (¿es compensación, aburrimiento, falta de crecimiento?) antes de actuar."
    },
    {
      id: 'talent_diversity_hiring_pressure',
      category: "Gestión de Talento",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      scenario: "RRHH presiona para que contrates con 'cuotas de diversidad' (50% mujeres, minorías). Tuviste 8 candidatos en el último proceso: 6 hombres excelentes, 2 mujeres con skills levemente por debajo del nivel que buscas.",
      question: "¿Cómo balanceas meritocracia y diversidad?",
      options: [
        { id: 'A', text: "Contratar al mejor candidato puro basado en skills, sin considerar género. La meritocracia no debe comprometerse.", score: 0, type: "Ignora el sesgo sistémico" },
        { id: 'B', text: "Pipeline Fix: Rechazar a todos y reiniciar el proceso de reclutamiento expandiendo las fuentes (comunidades de mujeres en diseño, bootcamps diversos) para tener un pool más balanceado desde el inicio.", score: 5, type: "Lead (Ataca el Problema Raíz)" },
        { id: 'C', text: "Contratar a una de las candidatas mujeres y darle un plan de onboarding intensivo para nivelarla rápidamente.", score: 2, type: "Diversity Hire (Riesgoso para ambos)" }
      ],
      explanation: "Si tu pipeline siempre es 80% hombres, el sesgo está en el sourcing, no en la evaluación. La opción B ataca la raíz del problema antes de tener que elegir."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 21 - GESTIÓN DE STAKEHOLDERS ---
    {
      id: 'stakeholder_ceo_personal_opinion',
      category: "Gestión de Stakeholders",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "Presentas un diseño final al CEO después de 3 sprints de investigación y validación. Su feedback: 'No me gusta el color verde, mi esposa tampoco. Cámbialo a azul'. No hay argumento de negocio, solo preferencia personal.",
      question: "¿Cómo respondes sin quemar tu capital político?",
      options: [
        { id: 'A', text: "Cambias a azul inmediatamente. Al final del día, el CEO tiene la última palabra.", score: 0, type: "Sumiso (Invalida el proceso)" },
        { id: 'B', text: "Data-Driven Pushback: 'Entiendo la preferencia estética. ¿Podemos hacer un A/B test de 1 semana entre verde y azul para validar cuál performa mejor con usuarios reales antes de commitear?'.", score: 5, type: "Lead (Redirige a Evidencia)" },
        { id: 'C', text: "Ofrecer un compromiso: Un tono de verde más azulado (verde-agua) que satisfaga parcialmente su preferencia.", score: 2, type: "Negociador (Salomónico)" }
      ],
      explanation: "Ceder a caprichos personales (A) establece un precedente peligroso. La opción B redirige la decisión desde opinión a evidencia sin confrontar directamente al CEO."
    },
    {
      id: 'stakeholder_legal_vs_ux_tension',
      category: "Gestión de Stakeholders",
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
      question: "¿Cómo medias entre compliance y experiencia?",
      options: [
        { id: 'A', text: "Sided with Legal. El riesgo legal es más importante que la fricción de UX.", score: 0, type: "Rendición (UX destruida)" },
        { id: 'B', text: "Workshop de Soluciones: Reúnes a Legal + UX + Product para co-diseñar alternativas que cumplan ambos objetivos (ej: disclaimer colapsado con checkbox 'He leído', tooltips contextuales, videos cortos).", score: 5, type: "Lead (Facilitador de Soluciones)" },
        { id: 'C', text: "Mostrar el disclaimer solo en el primer uso y luego ocultarlo para usuarios recurrentes.", score: 2, type: "Workaround (Legal puede objetar)" }
      ],
      explanation: "Legal y UX no son enemigos si colaboran. La opción B crea un espacio de problem-solving conjunto en lugar de guerra de trincheras."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 22 - ESTRATEGIA DE PRODUCTO ---
    {
      id: 'strategy_platform_vs_feature_focus',
      category: "Estrategia de Producto",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "El CEO quiere convertir el producto en una 'plataforma' con APIs públicas, marketplace de integraciones y white labeling. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver.",
      question: "¿Cuál es tu recomendación estratégica?",
      options: [
        { id: 'A', text: "Apoyar la visión de plataforma. Pensar en grande es lo que diferencia a los ganadores.", score: 0, type: "Visionario sin fundamento" },
        { id: 'B', text: "Product-Market Fit First: Argumentar que antes de ser plataforma, deben dominar su caso de uso core. Las plataformas se construyen DESPUÉS de tener tracción sólida, no antes.", score: 5, type: "Lead (Secuenciación Estratégica)" },
        { id: 'C', text: "Proponer construir solo las APIs públicas (lo más fácil) y posponer marketplace/white-label.", score: 2, type: "Compromiso (Diluye el foco igual)" }
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
        { id: 'B', text: "Copiar las 3-4 features más visibles para actualizar la página de comparación y calmar a Ventas.", score: 2, type: "Defensivo (Feature parity race)" },
        { id: 'C', text: "Ignorar al competidor completamente y seguir tu roadmap original. El foco es más importante que la reacción.", score: 2, type: "Dogmático (Puede ser arriesgado)" }
      ],
      explanation: "Copiar por pánico (B) te convierte en follower. Ignorar completamente (C) puede ser ingenuo. La opción A usa data de churn para priorizar racionalmente."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 23 - DESIGN OPS ---
    {
      id: 'designops_figma_file_chaos',
      category: "Design Ops",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "El workspace de Figma es un caos: 400 archivos sin nombrar bien, duplicados, versiones antiguas mezcladas con nuevas. Nadie encuentra nada y pierden 30 minutos diarios buscando archivos.",
      question: "¿Cómo implementas orden sin frenar la operación?",
      options: [
        { id: 'A', text: "Asignar 1 semana completa de 'Cleanup Sprint' donde nadie diseña, solo organizan archivos.", score: 0, type: "Utópico (Nunca se aprueba)" },
        { id: 'B', text: "Naming Convention + Archivo + Governance: Crear una estructura de carpetas obligatoria, template de nombres, y asignar 'File Owners'. Migrar archivos activos gradualmente mientras archivas los legacy.", score: 5, type: "Lead (Sistema Sostenible)" },
        { id: 'C', text: "Contratar un Design Ops Manager para que se encargue de mantener el orden.", score: 2, type: "Delegación (Funciona si tienes $)" }
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
        { id: 'B', text: "Capacitar al equipo en el uso correcto de Version History y hacer recordatorios semanales.", score: 2, type: "Educativo (No previene accidentes)" },
        { id: 'C', text: "Duplicar manualmente los archivos importantes cada viernes como política de equipo.", score: 2, type: "Manual (No escalable)" }
      ],
      explanation: "Confiar en la memoria humana (B, C) falla eventualmente. La opción A automatiza el backup para que sea imposible perder trabajo sin importar errores humanos."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 24 - CULTURA DE DISEÑO ---
    {
      id: 'cultura_credit_stealing_conflict',
      category: "Cultura de Diseño",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Un diseñador junior hizo el 80% del trabajo de un feature exitoso, pero en el All-Hands el diseñador senior que lo supervisó presentó el caso de estudio sin mencionar al junior. El junior está furioso.",
      question: "¿Cómo manejas esta violación de cultura?",
      options: [
        { id: 'A', text: "Hablar en privado con el senior para pedirle que dé crédito la próxima vez.", score: 2, type: "Suave (Sin consecuencia)" },
        { id: 'B', text: "Intervención Pública + Privada: Enviar un mensaje en Slack dando crédito explícito al junior post-presentación. Luego hablar con el senior sobre valores de equipo y hacer clear que repetirlo tiene consecuencias.", score: 5, type: "Lead (Restaura Justicia + Educación)" },
        { id: 'C', text: "Dejar que ellos lo resuelvan entre sí como adultos.", score: 0, type: "Evasivo (Normaliza el abuso)" }
      ],
      explanation: "Robar crédito es tóxico y debe corregirse visiblemente. La opción B restaura la justicia públicamente y educa al senior sobre las consecuencias de esa conducta."
    },
    {
      id: 'cultura_remote_office_divide',
      category: "Cultura de Diseño",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      scenario: "El equipo está dividido: 3 diseñadores en la oficina (que colaboran todo el día) y 2 remotos (que sienten que se pierden decisiones y contexto). Empieza a haber resentimiento.",
      question: "¿Cómo nivelar el campo de juego?",
      options: [
        { id: 'A', text: "Pedir a todos que vuelvan a la oficina para mantener la cohesión.", score: 0, type: "Autoritario (Pierde talento remoto)" },
        { id: 'B', text: "Remote-First Practices: TODAS las decisiones se documentan por escrito (Notion/Slack), TODAS las reuniones se graban, y se establece una regla: si hay 1 persona remota, TODOS se conectan desde su laptop (no sala de conferencia).", score: 5, type: "Lead (Nivel Playing Field)" },
        { id: 'C', text: "Rotar: 1 semana al mes todos trabajan remoto para que los de oficina 'entiendan la experiencia'.", score: 2, type: "Experimental (No resuelve estructura)" }
      ],
      explanation: "Forzar presencialidad (A) es regresivo. La opción B cambia los defaults del equipo para que el trabajo asíncrono y documentado sea el estándar, no la excepción."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 25 - COLABORACIÓN CON INGENIERÍA ---
    {
      id: 'engineering_technical_constraints_creative',
      category: "Colaboración con Ingeniería",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Diseñaste un scroll parallax hermoso para la landing page. El tech lead dice que 'mata la performance en mobile' y los tests muestran un aumento de 2 segundos en el load time.",
      question: "¿Qué priorizas: la experiencia visual o la performance?",
      options: [
        { id: 'A', text: "Mantener el parallax. Los 2 segundos extra valen la pena por la diferenciación visual.", score: 0, type: "Ego sobre Datos (UX rota)" },
        { id: 'B', text: "Progressive Enhancement: Implementar el parallax solo en desktop/tablets y usar una versión estática optimizada en mobile. Adaptas la experiencia al contexto técnico.", score: 5, type: "Lead (Pragmatismo Contextual)" },
        { id: 'C', text: "Simplificar el diseño completamente para que funcione igual en todas las plataformas sin parallax.", score: 3, type: "Conservador (Pierde diferenciación)" }
      ],
      explanation: "2 segundos de load en mobile matan la conversión. La opción B reconoce que no todas las plataformas necesitan la misma implementación si las capacidades técnicas difieren."
    },
    {
      id: 'engineering_designer_code_boundary',
      category: "Colaboración con Ingeniería",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "Un diseñador del equipo aprendió React y empezó a hacer pull requests directamente al código para 'agilizar' el proceso. Los desarrolladores se quejan de que el código no sigue los estándares y genera bugs.",
      question: "¿Cómo estableces límites saludables?",
      options: [
        { id: 'A', text: "Prohibir que diseñadores toquen el código. Cada rol tiene su expertise.", score: 1, type: "Silo Rígido (Mata colaboración)" },
        { id: 'B', text: "Code Review Obligatorio: Permitir que los diseñadores contribuyan código, pero SIEMPRE debe pasar por revisión de un developer senior antes de mergear. Upskilling con guardrails.", score: 5, type: "Lead (Colaboración con Calidad)" },
        { id: 'C', text: "Crear un repositorio separado de 'Design Experiments' donde puedan codear libremente sin afectar producción.", score: 3, type: "Sandbox (Desconectado de impacto real)" }
      ],
      explanation: "Prohibir (A) mata la iniciativa. La opción B permite el aprendizaje y contribución mientras mantiene la calidad del código a través de procesos existentes."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 26 - BIENESTAR DEL EQUIPO ---
    {
      id: 'bienestar_toxic_positivity_culture',
      category: "Bienestar del Equipo",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Después de un trimestre brutal con 3 deadlines imposibles, la empresa organiza una 'Fiesta de Celebración' obligatoria. El equipo está exhausto y preferiría descansar. RRHH insiste en que 'es importante para la cultura'.",
      question: "¿Cómo abordas la desconexión entre la intención y la realidad?",
      options: [
        { id: 'A', text: "Forzar la asistencia del equipo. Es solo 2 horas y puede ayudar a relajarse.", score: 1, type: "Toxic Positivity (Ignora agotamiento)" },
        { id: 'B', text: "Negociar con RRHH: Hacer la 'celebración' opcional y ofrecer como alternativa un día libre compensatorio para quienes prefieran descansar. Respeto por la autonomía.", score: 5, type: "Lead (Escucha Real)" },
        { id: 'C', text: "Asistir tú mismo pero decirle al equipo en privado que no vayan si no quieren.", score: 3, type: "Hipocresía (Mensaje confuso)" }
      ],
      explanation: "Forzar celebraciones cuando el equipo está quemado (A) es contraproducente. La opción B reconoce que diferentes personas se recuperan de formas distintas."
    },
    {
      id: 'bienestar_perfectionism_junior',
      category: "Bienestar del Equipo",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      scenario: "Una diseñadora junior está re-haciendo un componente por quinta vez porque 'no se ve perfecto'. Ha pasado 2 días en algo que debía tomar 4 horas. El perfeccionismo la está paralizando.",
      question: "¿Cómo intervienes para desbloquearla?",
      options: [
        { id: 'A', text: "Dejarla continuar. El perfeccionismo es señal de estándares altos.", score: 1, type: "Enabler (Refuerza el vicio)" },
        { id: 'B', text: "Timeboxing + 'Good Enough': Establecer un límite de 1 hora más y luego shippearlo como está. Enseñarle que 'shipped imperfect' > 'perfect pero nunca lanzado'.", score: 5, type: "Lead (Enseña Pragmatismo)" },
        { id: 'C', text: "Tomar el archivo tú mismo y finalizarlo para quitarle la presión.", score: 3, type: "Rescate (No aprende)" }
      ],
      explanation: "El perfeccionismo no gestionado mata la productividad. La opción B enseña que el progreso iterativo es más valioso que la perfección paralizante."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 27 - ARQUITECTURA DE SISTEMAS ---
    {
      id: 'arquitectura_monorepo_vs_separate_systems',
      category: "Arquitectura de Sistemas",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System en Figma. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían compartir componentes.",
      question: "¿Cuál es tu estrategia de consolidación?",
      options: [
        { id: 'A', text: "Mantenerlos separados. Cada producto tiene necesidades diferentes.", score: 1, type: "Silos (Duplicación eterna)" },
        { id: 'B', text: "Design System Core + Product Extensions: Crear una librería base compartida con primitivos (colores, tipografía, componentes básicos) y permitir que cada producto extienda con sus propios componentes específicos.", score: 5, type: "Lead (Shared Foundation)" },
        { id: 'C', text: "Forzar un único Design System para todo. Total estandarización.", score: 3, type: "Rígido (No refleja realidad)" }
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
        { id: 'A', text: "Mantener Atomic Design pero hacer un workshop de alineación para que todos entiendan la clasificación correcta.", score: 0, type: "Dogmático (El problema es el sistema)" },
        { id: 'B', text: "Simplificación Pragmática: Colapsar a solo 2 categorías (Primitives + Components). Si un equipo gasta más energía en la taxonomía que en el diseño, la taxonomía está sobrediseñada.", score: 5, type: "Lead (Utilidad > Pureza)" },
        { id: 'C', text: "Eliminar toda la estructura y dejar que cada quien organice como quiera.", score: 0, type: "Caos (Pierde la arquitectura)" }
      ],
      explanation: "Atomic Design puede ser over-engineering para muchos equipos. La opción B reconoce que el sistema debe servir al equipo, no al revés."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 28 - ÉTICA DE DISEÑO ---
    {
      id: 'etica_gambling_mechanics_gamification',
      category: "Ética de Diseño",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "Product quiere agregar 'loot boxes' o recompensas aleatorias al producto para aumentar engagement. El mecanismo es idéntico al de apps de gambling. Los usuarios objetivo incluyen menores de edad.",
      question: "¿Dónde trazas la línea ética?",
      options: [
        { id: 'A', text: "Implementarlo. Gamification es una técnica válida de producto y está en todas las apps exitosas.", score: 0, type: "Cómplice (Explotación)" },
        { id: 'B', text: "Rechazo con Alternativa: Rechazar mecánicas de azar y proponer sistemas de progreso predecibles (badges, niveles basados en logros) que recompensen la acción sin crear adicción.", score: 5, type: "Lead (Engagement Ético)" },
        { id: 'C', text: "Aceptarlo pero con un disclaimer de 'Este feature puede crear hábitos'.", score: 0, type: "Disclaimer washing (No cambia nada)" }
      ],
      explanation: "Las mecánicas de gambling están diseñadas para crear adicción. La opción B busca engagement genuino sin explotar vulnerabilidades psicológicas, especialmente en menores."
    },
    {
      id: 'etica_ai_generated_fake_testimonials',
      category: "Ética de Diseño",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Marketing te pide usar testimonials generados con AI (fotos falsas de 'clientes') porque no tienen suficientes testimoniales reales aún. Argumentan que 'representan la experiencia que los usuarios TENDRÍAN'.",
      question: "¿Qué implementas?",
      options: [
        { id: 'A', text: "Usar los testimoniales AI. Son indistinguibles de reales y ayudan a la conversión.", score: 0, type: "Fraude (Destruye confianza)" },
        { id: 'B', text: "No testimoniales > Testimoniales Falsos: Diseñar la landing sin testimoniales o usar 'early adopter reviews' reales aunque sean solo 2. La autenticidad construye confianza a largo plazo.", score: 5, type: "Lead (Integridad)" },
        { id: 'C', text: "Usar los testimoniales AI pero agregar un disclaimer pequeño de 'Representaciones ilustrativas'.", score: 0, type: "Transparencia falsa (Sigue siendo engañoso)" }
      ],
      explanation: "Los usuarios eventualmente descubren los testimoniales falsos. Perder esa confianza es devastador. La opción B construye credibilidad desde la honestidad."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 29 - VALIDACIÓN ÁGIL ---
    {
      id: 'validacion_prototype_vs_pixel_perfect',
      category: "Validación Ágil",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      scenario: "Necesitas validar un concepto nuevo con usuarios. Un diseñador quiere hacer un prototipo de alta fidelidad pixel-perfect que tomará 3 días. Otro propone hacer un wireframe interactivo en Figma que toma 3 horas.",
      question: "¿Qué nivel de fidelidad es apropiado para validación temprana?",
      options: [
        { id: 'A', text: "Alta fidelidad. Los usuarios no pueden opinar correctamente sobre wireframes feos.", score: 0, type: "Perfeccionista (Desperdicia tiempo)" },
        { id: 'B', text: "Fidelidad Mínima Testeable: Wireframes interactivos son suficientes para validar flujo y lógica. La estética se pulirá DESPUÉS de validar que el concepto funciona.", score: 5, type: "Lead (Lean Validation)" },
        { id: 'C', text: "Mid-fidelity: Un punto medio con algunos colores y tipografía pero sin pulir cada pixel.", score: 2, type: "Compromiso (Toma más tiempo)" }
      ],
      explanation: "En validación temprana, gastar 3 días en fidelidad visual es prematuro. La opción B valida la hipótesis crítica (¿el flujo funciona?) antes de invertir en pulido."
    },
    {
      id: 'validacion_research_synthesis_paralysis',
      category: "Validación Ágil",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      scenario: "Después de 15 entrevistas con usuarios, tienes 200 páginas de notas y insights. El equipo está esperando tus recomendaciones pero te sientes abrumado con tanta data y no sabes cómo sintetizarla rápidamente.",
      question: "¿Cómo priorizas los insights para acción inmediata?",
      options: [
        { id: 'A', text: "Tomarte 1 semana para hacer un reporte exhaustivo con todos los findings, gráficos y quotes.", score: 0, type: "Análisis paralítico (Pierde momentum)" },
        { id: 'B', text: "Impact-Effort Matrix: Identificar los 3 insights que más se repitieron Y que tienen solución viable. Presentarlos en 1 slide con 'Top 3 Actions' en lugar de reporte completo.", score: 5, type: "Lead (Actionable Insights)" },
        { id: 'C', text: "Hacer una sesión de co-análisis con el equipo completo para que todos lean las notas juntos.", score: 2, type: "Democrático (Lento)" }
      ],
      explanation: "El research que no se convierte en acción es desperdicio. La opción B prioriza velocidad de decisión sobre exhaustividad académica."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 30 - MENTORÍA & CRECIMIENTO ---
    {
      id: 'mentoria_delegation_fear_control',
      category: "Mentoría & Crecimiento",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Tienes un proyecto crítico y puedes delegarlo a tu Mid-Level designer o hacerlo tú mismo. Delegar le daría crecimiento pero existe riesgo de que no alcance tu estándar de calidad y tengas que rehacer parte del trabajo.",
      question: "¿Cómo balanceas desarrollo de talento vs riesgo?",
      options: [
        { id: 'A', text: "Hacerlo tú mismo. El proyecto es demasiado importante para arriesgarlo.", score: 0, type: "Cuello de Botella (No escala)" },
        { id: 'B', text: "Delegación con Checkpoints: Asignar el proyecto pero establecer 3 puntos de revisión (Concepto, Wireframes, Alta Fidelidad) para dar feedback temprano y corregir curso sin perder control total.", score: 5, type: "Lead (Coaching Estructurado)" },
        { id: 'C', text: "Delegarlo completamente sin supervisión para demostrar confianza.", score: 2, type: "Naive Trust (Alto riesgo)" }
      ],
      explanation: "Delegar sin estructura (C) es negligencia. Hacerlo todo tú (A) impide el crecimiento del equipo. La opción B permite aprendizaje con safety nets."
    },
    {
      id: 'mentoria_career_path_ic_vs_management',
      category: "Mentoría & Crecimiento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Un diseñador Senior te dice que quiere ser manager 'porque es el siguiente paso natural'. Pero observas que es introvertido, odia las reuniones y brilla cuando diseña solo. Sospechas que busca el título, no el rol.",
      question: "¿Cómo lo orientas?",
      options: [
        { id: 'A', text: "Darle la oportunidad de ser manager. La única forma de saber si le gusta es probarlo.", score: 0, type: "Experimento costoso (Arruina al diseñador Y al equipo)" },
        { id: 'B', text: "Presentar IC Track: Explicarle que existe un camino de Staff Designer / Principal Designer (Individual Contributor senior) con igual compensación y prestigio que management, enfocado en craft y liderazgo técnico.", score: 5, type: "Lead (Career Path Clarity)" },
        { id: 'C', text: "Proponerle liderar un proyecto como 'Design Lead' temporal para probar sus habilidades de coordinación.", score: 2, type: "Piloto (Confunde Lead con Manager)" }
      ],
      explanation: "Muchos diseñadores creen que management es la única progresión. La opción B abre los ojos a un track IC que premia excelencia sin forzar un cambio de rol que no es natural."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 31 - INNOVACIÓN & AI ---
    {
      id: 'ai_design_automation_job_threat',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Un diseñador junior está aterrado porque vio que Midjourney genera interfaces en segundos. Pregunta si 'los diseñadores van a ser reemplazados por AI'. El resto del equipo también está nervioso.",
      question: "¿Cómo recontextualizas el rol del diseñador ante la AI?",
      options: [
        { id: 'A', text: "Minimizar el miedo: 'La AI nunca podrá reemplazar la creatividad humana'. Negar la amenaza.", score: 0, type: "Negación (Pierde credibilidad)" },
        { id: 'B', text: "Shift de Skills: 'La AI automatiza la ejecución, no la estrategia. Nuestro valor está en entender al usuario, el negocio y el contexto. Usen AI como asistente de ejecución, no como amenaza.'", score: 5, type: "Lead (Reframe Constructivo)" },
        { id: 'C', text: "Prohibir el uso de herramientas de AI en el equipo para proteger el craft.", score: 0, type: "Ludita (Retrasa la evolución)" }
      ],
      explanation: "Negar la AI (A) o prohibirla (C) es miope. La opción B ayuda al equipo a entender que el diseño es problem-solving, no solo pixel-pushing."
    },
    {
      id: 'ai_personalization_ethical_limit',
      category: "Innovación & AI",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "Tienes capacidad de usar AI para personalizar la UI de cada usuario basado en su comportamiento histórico (colores, layout, CTAs). Aumentaría conversión un 15% pero requiere tracking intensivo y perfiles psicológicos.",
      question: "¿Hasta dónde llevas la personalización?",
      options: [
        { id: 'A', text: "Implementarlo completamente. 15% de conversión es enorme y la personalización es el futuro.", score: 0, type: "Surveillance Capitalism (Sin ética)" },
        { id: 'B', text: "Personalización Transparente con Opt-In: Ofrecer la experiencia personalizada como una opción que el usuario ELIGE activar después de explicarle qué datos se usan y cómo.", score: 5, type: "Lead (Privacy by Design)" },
        { id: 'C', text: "Solo personalizar cosas menores (tema claro/oscuro, idioma) sin tocar comportamiento psicológico.", score: 2, type: "Conservador (Deja valor sobre la mesa)" }
      ],
      explanation: "La personalización sin consentimiento (A) es manipulación. La opción B da poder al usuario de elegir si quiere esa experiencia, convirtiendo una táctica opaca en una feature transparente."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 32 - ESTRATEGIA DE MIGRACIÓN ---
    {
      id: 'migracion_forced_upgrade_user_backlash',
      category: "Estrategia de Migración",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      scenario: "Lanzas una versión 2.0 del producto con nueva arquitectura y fuerza a todos los usuarios a migrar. El 30% de los power users están furiosos porque removiste features 'legacy' que ellos usaban diariamente.",
      question: "¿Cómo gestionas la migración forzada?",
      options: [
        { id: 'A', text: "Mantener la posición: 'La V2 es superior, eventualmente se acostumbrarán'. Ignorar el feedback.", score: 0, type: "Arrogante (Churn garantizado)" },
        { id: 'B', text: "Feature Parity Roadmap: Escuchar qué features específicos extrañan, evaluar cuáles son críticos, y comprometerse públicamente a reintroducirlos en V2 en los próximos 2 meses.", score: 5, type: "Lead (Responsive Migration)" },
        { id: 'C', text: "Ofrecer acceso a la V1 legacy en paralelo para quienes no quieran migrar.", score: 2, type: "Parche (Duplica mantenimiento)" }
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
        { id: 'A', text: "Apagar el producto en la fecha anunciada. Los usuarios tuvieron 6 meses de aviso.", score: 0, type: "Corporate Cruelty (Churn 100%)" },
        { id: 'B', text: "Migration Concierge: Asignar recursos para construir las 3 features más críticas que faltan, crear guías de migración personalizadas y ofrecer sesiones 1-on-1 de onboarding al nuevo producto para clientes de alto valor.", score: 5, type: "Lead (Retención Activa)" },
        { id: 'C', text: "Ofrecer descuentos del 50% en el nuevo producto a los usuarios afectados como compensación.", score: 2, type: "$$$ (No resuelve el gap de features)" }
      ],
      explanation: "500 usuarios pequeños pueden incluir clientes de alto valor o advocates. La opción B trata el sunset como un problema de retención, no solo como un apagado técnico."
    }
  ];
};
