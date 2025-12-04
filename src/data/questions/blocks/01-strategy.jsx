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
    category: "Gestión de Crisis & Liderazgo",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en la funcionalidad 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales' por una necesidad crítica de flujo de caja. El equipo de diseño está visiblemente furioso y desmotivado. Tu runway es de solo 4 meses.",
    question: "¿Cuál es tu primer movimiento como Lead para gestionar esta crisis?",
    options: [
      { id: 'A', text: "**Gestión de Cambio Radical:** Reúnes al equipo ya, validas la frustración ('Esto apesta') pero explicas la razón financiera de supervivencia. Re-enfocas hoy mismo para detener la especulación, aunque arriesgas que el equipo sienta que sus emociones son secundarias a la urgencia financiera.", score: 5, type: "Lead / Correct" },
      { id: 'B', text: "**Cooldown Negociado:** Negocias con el CEO una semana de 'cierre y documentación' para que el equipo procese el duelo. Proteges la moral a corto plazo, pero consumes una semana valiosa de runway crítico, lo que podría hacer que el CEO cuestione tu sentido de urgencia.", score: 3, type: "Protector / Incorrect" },
      { id: 'C', text: "**Retrospectiva de Aprendizaje:** Organizas una sesión el lunes para presentar qué aprendieron y validar el esfuerzo. Das un cierre digno al trabajo realizado, pero podrías diluir la percepción de crisis inminente que el negocio necesita para reaccionar a tiempo.", score: 3, type: "Cultural / Incorrect" }
    ],
    explanation: "Con poco runway, el tiempo es el recurso más caro. El duelo de equipo ('Cooldown') es un lujo de tiempos de paz. **La Gestión de Cambio Radical** actúa como un amortiguador de realidad: valida la emoción pero fuerza la acción inmediata. Proteger demasiado al equipo de la realidad financiera del negocio puede llevar a la complacencia en un momento de **supervivencia**."
  },
  {
    id: 'metrics_vanity_vs_reality',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona para que 'no arruines la fiesta'.",
    question: "¿Cómo gestionas la discrepancia de métricas sin iniciar una guerra con Marketing?",
    options: [
      { id: 'A', text: "**Alineación Privada:** Reúnes a VP y CMO antes del QBR para acordar presentar ambos datos como un 'hallazgo de calidad'. Transformas el conflicto en estrategia compartida, aunque inviertes capital político y tiempo extra gestionando egos en lugar de trabajar en el producto.", score: 5, type: "Lead / Correct" },
      { id: 'B', text: "**Reporte Crudo:** Presentas tus métricas de conversión tal cual, dejando que los números hablen por sí mismos. Mantienes integridad técnica absoluta, pero arriesgas que los ejecutivos interpreten la caída como un fallo de producto al no darles el contexto completo.", score: 3, type: "Técnico / Incorrect" },
      { id: 'C', text: "**Silencio Táctico:** Te enfocas solo en optimizar el checkout y dejas que Marketing celebre. Proteges tu relación con ellos hoy, pero permites que la empresa siga quemando caja en canales ineficientes, lo que eventualmente afectará tu runway.", score: 1, type: "Silo / Incorrect" }
    ],
    explanation: "La data sin narrativa es un arma peligrosa. El **Reporte Crudo** es ingenuo porque asume que los ejecutivos conectarán los puntos correctamente (rara vez lo hacen). **La Alineación Privada** permite controlar la historia ('no fallamos, aprendimos sobre la calidad del tráfico') antes de entrar a la sala, protegiendo al equipo de reacciones viscerales."
  },
  {
    id: 'sales_custom_demands',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El Head of Sales está cerrando un contrato Enterprise clave para cumplir la meta del Q. El cliente exige ver un demo el sábado con su branding (colores y logo) hardcodeado. Tu Design System no soporta theming aún. Sales dice: 'Si no ven su logo, no firman'. El VP de Producto te pregunta si podemos hacer una excepción técnica rápida.",
    question: "¿Cómo respondes al pedido de 'hackear' el demo?",
    options: [
      { id: 'A', text: "**Hardcode Aislado:** Creas una rama 'sucia' solo para el demo y la desechas después. Habilitas la venta crítica sin tocar producción, aunque desvías recursos de ingeniería por un día para construir código desechable.", score: 5, type: "Lead / Correct" },
      { id: 'B', text: "**Negarse por Principios:** 'El sistema es escalable o no lo es'. Proteges al equipo de peticiones ad-hoc, pero corres el riesgo de ser etiquetado por Ventas como un obstáculo comercial ('Business Prevention Team') en un momento de supervivencia.", score: 1, type: "Bloqueador / Incorrect" },
      { id: 'C', text: "**Implementar en Prod:** Hardcodeas el logo con un feature flag rápido. Satisfaces a todos inmediatamente, pero introduces deuda técnica y excepciones que, si se acumulan, harán inmanejable el sistema a futuro.", score: 1, type: "Quick Win / Incorrect" }
    ],
    explanation: "En B2B, matar un deal por pureza técnica es suicidio. Contaminar producción es negligencia. **El Hardcode Aislado** acepta el 'desperdicio' de horas de ingeniería (construir algo para tirarlo) como el costo necesario de cerrar la venta protegiendo la integridad del sistema principal (**Technical Hygiene**)."
  },
  {
    id: 'okr_conflict_dashboard',
    category: "Gestión de OKRs",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El sales pipeline cayó 23% este Q y el cierre promedio pasó de 18 a 32 días. El VP de Ventas irrumpe en la reunión de OKRs: 'Necesito un dashboard de Activity Tracking YA - quiero saber minuto a minuto qué hacen mis agentes, cuántas llamadas, cuántos emails'. El VP de Producto responde públicamente: 'Nuestros OKRs son de eficiencia de conversión, no de vigilancia policial. Esto destruye la cultura'. Ambos te miran esperando que tomes partido. El Board review es en 2 semanas y el CEO quiere ver 'alineación ejecutiva'.",
    question: "¿Cómo reasignas recursos con el quarter literalmente terminándose?",
    options: [
      { id: 'A', text: "**Obediencia Comercial:** Diseñas lo que pide Ventas para desbloquear la tensión política rápidamente, a costa de dañar la moral del equipo de producto al validar una cultura de vigilancia contraria a sus valores.", score: 1, type: "Mercenario / Incorrect" },
      { id: 'B', text: "**Workshop de Alineación:** Propones medir 'Ventas Cerradas' (Outcome) en lugar de 'Minutos Online'. Reorientas hacia valor real, aunque arriesgas que Ventas sienta que estás intelectualizando una petición operativa urgente.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Escalación al CEO:** Pides que el CEO arbitre entre los dos VPs. Te proteges de tomar la decisión difícil, pero podrías proyectar falta de liderazgo y capacidad de resolución de conflictos ante la dirección.", score: 1, type: "Burocrático / Incorrect" }
    ],
    explanation: "La obediencia ciega crea productos mercenarios; la escalación muestra debilidad. **El Workshop de Alineación** es difícil porque desafía la premisa del stakeholder, pero es necesario para mover la conversación de 'Output' (vigilancia) a 'Outcome' (resultados). El trade-off es la fricción inicial de no decir 'sí' de inmediato."
  },

  // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
  {
    id: 'tokens_vs_hardcode_pressure',
    category: "Ingeniería de Diseño",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Estamos a jueves a las 3 PM y hay prisa extrema por lanzar el viernes antes del mediodía (demo con inversor clave). Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después. Configurar los tokens correctamente tomaría 3-4 horas adicionales.",
    question: "¿Cuál es tu postura ante la deuda técnica?",
    options: [
      { id: 'A', text: "**Compromiso con Variables:** Usas variables genéricas ($blue-500). Llegas al deadline con código mantenible, pero pierdes la oportunidad de estandarizar la semántica, lo que podría complicar significativamente futuros temas como el Dark Mode.", score: 3, type: "Operativo / Incorrect" },
      { id: 'B', text: "**Negarse y Colaborar:** Te sientas con ellos a configurar tokens básicos ahora. Garantizas escalabilidad futura, pero añades estrés inmediato al equipo horas antes del deadline, arriesgando llegar muy justos al demo.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Autorización con Ticket:** Permites hardcode creando un ticket de 'Refactor' para el lunes. Eliminas la fricción hoy, pero asumes el alto riesgo (basado en experiencia) de que ese ticket nunca se priorice frente a nuevos features.", score: 1, type: "Pragmático / Incorrect" }
    ],
    explanation: "La deuda de diseño tiene interés compuesto agresivo. Un ticket de 'Refactor para después' es casi siempre una mentira piadosa en startups. **Negarse y Colaborar** (invertir horas extra hoy) es doloroso, pero evita semanas de refactorización cuando llegue el Dark Mode o el Rebranding. Es pagar el impuesto ahora para evitar la multa después."
  },
  {
    id: 'legacy_ui_refactor_strategy',
    category: "Estrategia de Migración",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "El producto tiene 4 estilos de botones legacy (Angular, React, jQuery, Vanilla). Unificar implica riesgo de bugs; NPS cayó 6 puntos (52→46) y clientes perciben inconsistencia. CEO y VP de Engineering advierten que un refactor masivo tomaría 8‑12 semanas y podría afectar la estabilidad del 40% del producto. Board revisa en 3 semanas.",
    question: "¿Cuál es tu estrategia de limpieza con NPS cayendo y Board evaluando pronto?",
    options: [
      { id: 'A', text: "**Boy Scout Rule:** Acuerdo formal con CTO para que cada vez que se toque un archivo legacy, sea obligatorio actualizar componentes (Definition of Done). Migración progresiva que no detiene el roadmap, aunque tendrás que invertir capital político negociando este overhead de tiempo en cada ticket.", score: 5, type: "Lead (Incremental sistemático)" },
      { id: 'B', text: "**Forward Only + Narrativa:** Aplicar nuevo sistema SOLO en features nuevas. Comunicar externamente que es una 'Brand Evolution' gradual para mantener el velocity de entrega, a costa de perpetuar la inconsistencia y confusión del usuario ante 4 estilos diferentes.", score: 3, type: "Pragmático con spin de marketing (Apuesta arriesgada)" },
      { id: 'C', text: "**Design Debt Sprint:** Presentar business case (NPS = Churn) para pausar features no-críticas por 2 semanas y unificar las top 20 pantallas. Prometes recuperación rápida de confianza, pero arriesgas que el Board perciba 2 semanas sin features como señal de problemas operativos más graves.", score: 1, type: "Bold con riesgo político (Promesa difícil de cumplir)" }
    ],
    explanation: "Los sprints dedicados a deuda técnica (**Design Debt Sprint**) rara vez se aprueban porque no generan revenue visible inmediato. La estrategia **Boy Scout Rule** es la única sostenible a largo plazo: paga deuda técnica progresivamente como parte del costo de hacer negocios, sin detener la operación. La estrategia **Forward Only** valida la inconsistencia, confundiendo al usuario y manteniendo la deuda legacy indefinidamente."
  },
  {
    id: 'component_complexity_detach',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El componente 'Card' de tu Design System en Figma tiene 156 variantes (8 tipos × 3 tamaños × 5 estados × 2 temas + edge cases). Tarda 6-8 segundos en cargar cada vez que alguien lo inserta. En la última auditoría descubriste que el 68% de los diseños nuevos usan 'detach' del componente para trabajar más rápido, rompiendo completamente la consistencia del sistema. Los diseñadores se quejan en retrospectivas que el componente es 'demasiado complejo' y prefieren trabajar con copias locales.",
    question: "¿Cómo resuelves el problema de adopción sin perder la arquitectura del sistema?",
    options: [
      { id: 'A', text: "**Refactor de Arquitectura:** Auditas y simplificas el componente usando Component Properties modernas de Figma (boolean toggles, instance swap, variant reduction). Reduces de 156 a 40-50 variantes manteniendo flexibilidad, aunque tendrás que invertir 2-3 días de rediseño y migración de archivos existentes.", score: 5, type: "Lead (Optimización sistémica)" },
      { id: 'B', text: "**Especialización de Componentes:** Divides 'Card' en 4 componentes especializados (Card-Content, Card-User, Card-Product, Card-Feature) con 30-40 variantes cada uno. Reduces complejidad cognitiva individual, a costa de aumentar la cantidad de componentes y fragmentar el mantenimiento futuro.", score: 3, type: "Fragmentación controlada" },
      { id: 'C', text: "**Governance + Training:** Estableces code reviews de Figma obligatorios donde rechazas archivos con detach. Organizas capacitación mensual sobre uso correcto del componente, pero arriesgas convertirte en cuello de botella del equipo sin resolver el problema de usabilidad raíz.", score: 1, type: "Evita confrontación (No resuelve raíz)" }
    ],
    explanation: "Si un componente requiere un manual o fuerza al 'detach', está mal diseñado. El **Refactor de Arquitectura** ataca la causa raíz (**over-engineering**) simplificando el uso. La **Especialización de Componentes** fragmenta el sistema, dificultando el mantenimiento futuro. Intentar solucionar un problema de usabilidad del sistema con **Governance + Training** es culpar al usuario (los diseñadores) por un fallo de la herramienta."
  },
  {
    id: 'mobile_first_habit_change',
    category: "Design Ops",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "El equipo diseña en Desktop y 'adapta' a Mobile al final, generando UX móvil pobre. 72% del tráfico es móvil. Los workshops educativos fallaron. El CEO exige resultados inmediatos tras ver una demo rota en su iPhone. Tienes 2 semanas para cambiar un hábito cultural arraigado.",
    question: "¿Cómo fuerzas el cambio de comportamiento cuando la educación falló y tu performance está en juego?",
    options: [
      { id: 'A', text: "**Environment Nudge:** Cambias los defaults de Figma a mobile (375px) y eliminas templates desktop. Haces que diseñar mobile-first sea el camino de menor resistencia, aunque tendrás que actualizar templates y librerías en una tarde de configuración.", score: 5, type: "Lead (Behavioral design del sistema)" },
      { id: 'B', text: "**Quality Gate:** Rechazas cualquier diseño en Review que no presente mobile primero. Sin mobile, no se aprueba nada. Aplicás enforcement estricto que garantiza compliance inmediato, a costa de convertirte en vigilante permanente y generar fricción con el equipo.", score: 3, type: "Process enforcement con accountability (Autoridad directa)" },
      { id: 'C', text: "**Incentivos:** Ligas 'Mobile-First' a las evaluaciones de desempeño. Quien adopte mobile recibe mejores proyectos. Alineas comportamiento con recompensas, pero arriesgas generar competencia interna en lugar de colaboración cultural.", score: 3, type: "Incentive-based con stakes de carrera (Puede generar resentimiento)" }
    ],
    explanation: "La educación pasiva ya falló. El **Environment Nudge** aplica **Behavioral Design** al equipo: al cambiar el entorno para que lo correcto sea lo más fácil, moldeas el hábito sin fricción constante. Los **Quality Gates** funcionan pero requieren vigilancia policial perpetua. Los **Incentivos punitivos** pueden generar resentimiento y competencia interna tóxica en lugar de colaboración."
  },

  // --- BLOQUE 3: LIDERAZGO, CULTURA & PERSONAS ---
  {
    id: 'senior_toxic_genius_feedback',
    category: "Gestión de Talento",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
    question: "¿Cómo procedes con este perfil?",
    options: [
      { id: 'A', text: "**Mediación Activa:** Le hablas en privado y ofreces mediar personalmente en sus entregas. Mantienes la paz y el delivery, pero te conviertes en un cuello de botella operativo y podrías quemarte emocionalmente gestionando su conducta.", score: 3, type: "Niñera / Incorrect" },
      { id: 'B', text: "**Aislamiento Estratégico:** Lo asignas a proyectos individuales aislados. Maximizas su output técnico sin fricción diaria, pero envías la señal implícita al resto del equipo de que el mal trato es aceptable si eres lo suficientemente talentoso.", score: 1, type: "Utilitario / Incorrect" },
      { id: 'C', text: "**PIP Cultural:** Ultimátum de 30 días enfocado en soft skills. Proteges la salud a largo plazo del equipo, pero aceptas el riesgo real de perder a tu mejor recurso técnico durante un ciclo crítico de desarrollo.", score: 5, type: "Lead / Correct" }
    ],
    explanation: "El costo oculto de un 'Genio Tóxico' es la fuga silenciosa del resto del talento. Aislarlo o mediar son parches que validan el comportamiento. **El PIP Cultural** es la única solución escalable, aunque el precio a pagar sea perder su output individual a corto plazo. Es una apuesta por la **salud sistémica** sobre la velocidad individual."
  },
  {
    id: 'mentoria_junior_failure',
    category: "Mentoría & Crecimiento",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    scenario: "Tu Junior está liderando su primer proyecto solo: un flujo de onboarding con 3 pantallas. Ves que va directo a cometer un error de usabilidad (CTA secundario más prominente que el primario) que no rompe el pago pero generará confusión. El PM preguntó esta mañana: '¿Está todo listo para handoff mañana?'. El Junior te escribió orgulloso: 'Ya casi termino, ¿quieres revisar?'.",
    question: "¿Intervienes antes del lanzamiento?",
    options: [
      { id: 'A', text: "**Corrección Directa:** Sí, corriges el diseño tú mismo o le das la solución exacta inmediatamente antes del handoff. Aseguras excelencia del producto en este lanzamiento, a costa de crear dependencia permanente que impide el crecimiento autónomo del Junior.", score: 1, type: "Micro-manager (Crea dependencia)" },
      { id: 'B', text: "**Fallo Controlado:** No intervienes. Lo dejas fallar controladamente. Esperas a que salgan los resultados del test de usabilidad o la data real y usas ese momento para enseñarle a analizar y corregir el error, aunque aceptes un pequeño impacto temporal en la experiencia del usuario.", score: 5, type: "Lead (Maestro)" },
      { id: 'C', text: "**Pista Sutil:** Le das una pista sutil ('¿Has pensado en cómo se verá esto en móvil?') esperando que se dé cuenta solo. Ofreces una señal de alerta sin dar la solución directa, pero arriesgas que no capte el problema raíz y el error persista.", score: 3, type: "Coach Pasivo" }
    ],
    explanation: "El **aprendizaje experiencial** tiene mayor retención que la instrucción teórica. Al **Dejar fallar controladamente**, permites que el Junior desarrolle criterio propio y aprenda a analizar consecuencias. La **Corrección Directa** (Micro-manager) asegura calidad a corto plazo pero crea dependencia y atrofia el crecimiento del diseñador. Las **Pistas Sutiles** (Coach Pasivo) pueden ser ambiguas y no garantizan el aprendizaje del error raíz."
  },
  {
    id: 'burnout_detection_action',
    category: "Bienestar del Equipo",
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    scenario: "Estás a 10 días del lanzamiento más importante del año (investor demo que define la Serie A). Tu diseñador senior está mandando PRs a las 2 AM consistentemente. En el standup menciona 'no dormí mucho pero ya casi termino el rediseño del dashboard'. El equipo completo depende de ese componente. Ayer el CEO te preguntó: '¿Seguro que vamos a llegar?'",
    question: "¿Cómo intervienes sabiendo que el deadline es inamovible y el burnout es inminente?",
    options: [
      { id: 'A', text: "**Bonus Heroico:** Ofreces dinero y reconocimiento por el 'sprint final'. Motivas el esfuerzo para asegurar el hito, pero podrías institucionalizar el burnout como la única vía válida para obtener reconocimiento y ascensos.", score: -1, type: "Incentivo / Incorrect" },
      { id: 'B', text: "**Scope Cutting:** Cortas 2 features no esenciales y prohíbes trabajo post-7 PM. Proteges la salud mental de tu activo más valioso, aunque tendrás que gestionar la posible decepción del CEO al entregar un producto ligeramente menos completo.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Asistente Junior:** Asignas un Junior para quitar carga operativa. Alivias la carga manual inmediata, pero añadir gente al final (Ley de Brooks) podría ralentizar el proceso debido a los costos de coordinación y onboarding.", score: 3, type: "Soporte / Incorrect" }
    ],
    explanation: "El 'Modo Héroe' no es una estrategia, es un fallo de planificación. **Scope Cutting** es la única decisión de liderazgo real aquí: asumes el golpe político de entregar menos para proteger el activo (el equipo) que necesitas para la post-venta. El incentivo económico convierte el burnout en cultura. Añadir recursos (**Ley de Brooks**) suele ser una trampa operativa disfrazada de ayuda."
  },
  {
    id: 'hiring_profile_gap_logic',
    category: "Contratación Estratégica",
    icon: <Search className="w-6 h-6 text-indigo-500" />,
    scenario: "Tienes presupuesto para 1 rol IC Senior. Tu equipo actual (4 diseñadores) es muy fuerte visualmente - todos vienen de estudios boutique con portfolios Awwwards-tier, pero débil en sistemas complejos (fintech, B2B). Estás perdiendo credibilidad con Product porque les cuesta diseñar flujos de 15+ pasos, estados de error robustos, y lógica condicional compleja. Llega un candidato con portfolio visual 'correcto pero no wow', pero tiene 6 años diseñando core banking en instituciones financieras (BBVA, JP Morgan). Entiende regulaciones, compliance, audit trails.",
    question: "¿Cuál es tu decisión de contratación estratégica?",
    options: [
      { id: 'A', text: "**Hire for Excellence:** Rechazas al candidato. No puedes bajar la vara visual en un equipo de élite. Mantienes la excelencia estética del equipo, a costa de perpetuar el gap funcional que está bloqueando tu credibilidad con Product y la capacidad de diseñar flujos complejos.", score: 1, type: "Principios sin contexto (Irrealista, bloquea progreso)" },
      { id: 'B', text: "**Hire for Gaps:** Lo contratas. Priorizas resolver el bloqueo lógico/estructural sobre la uniformidad visual. Tus seniors pueden pulir la UI, aunque tendrás que gestionar la diversidad de estilos iniciales mientras el equipo se integra.", score: 5, type: "Lead (Team building estratégico)" },
      { id: 'C', text: "**Freelance Bridge:** Contratas un freelance visual fuerte para apoyar en proyectos de alto impacto visual mientras continúas buscando el candidato perfecto full-time. Mantienes el estándar visual, pero arriesgas no resolver nunca el gap estructural que frena el progreso del equipo.", score: 1, type: "Indeciso (No resuelve gap estructural)" }
    ],
    explanation: "Un Lead contrata para cubrir brechas, no para clonar fortalezas existentes. **Hire for Gaps** inyecta el conocimiento de dominio (Fintech/B2B) que falta para desbloquear la credibilidad con Producto. **Hire for Excellence** visual ignora que la debilidad actual es lógica, no estética. El **Freelance Bridge** es un parche temporal que retrasa la solución estructural del equipo y diluye el **ownership**."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'legacy_code_rewrite_temptation',
    category: "Estrategia de Migración",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "El código frontend tiene 5 años en Angular.js (legacy) y el tiempo de deploy pasó de 8 minutos a 45 minutos. El equipo pierde 2-3 horas/día esperando builds. El CTO propone en All-Hands: 'Paremos todo 6 meses y reescribamos en React - es la única forma de recuperar velocity'. El CFO advierte: 'Sin features nuevas por 6 meses, perdemos $1.2M en pipeline comprometido'. Engineering está dividido. Tienes reunión de roadmap Q2 mañana.",
    question: "¿Cuál es tu postura como stakeholder de diseño?",
    options: [
      { id: 'A', text: "**Big Bang Rewrite:** Detener features nuevas para reescribir todo el frontend en React. Entregas una base técnica moderna, pero arriesgas 6 meses sin revenue nuevo y fatiga del negocio que puede cancelar el proyecto a mitad de camino.", score: 1, type: "Optimismo sin plan (Gran Bomba)" },
      { id: 'B', text: "**Modular Rewrite:** Migrar pantalla por pantalla, permitiendo coexistencia temporal. Priorizar vistas con más tráfico para validar valor incrementalmente, aunque tendrás que gestionar la complejidad temporal de mantener dos sistemas en paralelo.", score: 5, type: "Lead (Incremental De-Risking)" },
      { id: 'C', text: "**Priorizar Features:** Si el código actual funciona y es estable, priorizar features nuevas que generen revenue inmediato. Postergás el refactoring para mantener el velocity, a costa de acumular deuda técnica que eventualmente paralizará la velocidad de entrega.", score: 3, type: "Priorización de Features" }
    ],
    explanation: "El patrón **Big Bang Rewrite** rara vez cumple expectativas por subestimación de complejidad y fatiga de negocio. La estrategia **Modular Rewrite** permite entregar valor continuo y modernizar el stack progresivamente aplicando el **Strangler Fig Pattern**: rodear gradualmente el sistema legacy hasta reemplazarlo completamente. **Priorizar Features** ofrece velocity a corto plazo, pero sacrifica el **Opportunity Cost** futuro: la deuda técnica eventualmente paralizará la capacidad de innovación."
  },
  {
    id: 'design_system_v2_breaking_changes',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Tu Design System V2 está listo: nuevos tokens semánticos, arquitectura de componentes modular, dark mode nativo. El Tech Lead advierte: 'Migrar rompe 200 archivos y tomará 3 sprints completos'. El VP de Producto presiona: 'Tenemos 4 features críticas en pipeline, no podemos pausar 3 sprints'. El equipo de diseño está frustrado usando V1 con workarounds. Tienes que presentar tu plan de migración mañana.",
    question: "¿Cómo lanzas la V2 sin paralizar la operación?",
    options: [
      { id: 'A', text: "**Code Freeze & Migración:** Pausas features para migrar todo. Consigues una base de código limpia, pero detener el roadmap de negocio 3 sprints podría ser políticamente suicida si no hay una crisis técnica que lo justifique.", score: -1, type: "Big Bang / Incorrect" },
      { id: 'B', text: "**Versionado Coexistente:** Publicas V2 separada y migras progresivamente. Permites que el negocio avance sin pausas, pero aceptas convivir con inconsistencia visual y código duplicado durante varios meses.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Solo lo Nuevo:** Usas V2 solo en features nuevas. Ganas velocidad máxima hoy, pero creas una fragmentación permanente que aumentará la carga cognitiva del equipo de diseño e ingeniería indefinidamente.", score: 1, type: "Fragmentación / Incorrect" }
    ],
    explanation: "A nivel Staff, la continuidad del negocio prevalece sobre la pureza del código. **El Versionado Coexistente** paga el precio de la complejidad temporal (inconsistencia) para comprar velocidad de negocio. Un 'Code Freeze' (**Big Bang**) es casi imposible de vender a stakeholders sin una crisis catastrófica, y la fragmentación permanente ('Solo lo Nuevo') crea una deuda cognitiva que nunca se paga."
  },
  {
    id: 'production_bug_major_incident',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    scenario: "Un cambio de diseño 'menor' (quitar un paso de confirmación) causó que 50,000 usuarios enviaran datos privados a una URL pública por error. Es un Data Leak masivo. Legal está redactando notificaciones de brecha. El CTO dice públicamente: 'Diseño insistió en quitar la confirmación para reducir fricción'. Todos te miran.",
    question: "¿Cómo gestionas la crisis de reputación y responsabilidad?",
    options: [
      { id: 'A', text: "**Análisis de Proceso:** Argumentas que el error fue sistémico (Ingeniería aprobó, QA validó). Propones una revisión del proceso de testing y aprobación, pero arriesgas sonar a excusa defensiva en medio de una crisis donde se busca acción inmediata.", score: 1, type: "Análisis de Proceso" },
      { id: 'B', text: "**Extreme Ownership:** Asumes la responsabilidad pública. Presentas plan de reversión inmediato (1h), notificación empática a usuarios y auditoría de flujos para mañana, aunque tendrás que asumir el costo político de ser identificado como responsable del data leak.", score: 5, type: "Lead (Liderazgo en Crisis)" },
      { id: 'C', text: "**Comunicación Centralizada:** Crisis management profesional - canalizas toda la comunicación a través de Legal y PR para asegurar mensaje unificado y proteger a la empresa de liability adicional. Los mejores equipos de crisis operan con disciplina de comando único.", score: -1, type: "Crisis Management (Abdica liderazgo)" }
    ],
    explanation: "En crisis, la velocidad y la responsabilidad lo son todo. **Extreme Ownership** desarma a los críticos y enfoca la energía en la remediación inmediata, recuperando la confianza. El **Análisis de Proceso** es correcto en tiempos de paz, pero en guerra suena a excusa defensiva. La **Gestión Centralizada** (esconderse detrás de Legal) abdica el liderazgo y daña tu credibilidad ante el equipo técnico."
  },
  {
    id: 'user_backlash_social_media',
    category: "Community Management",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    scenario: "Cambiaste el modelo de precios y la UI para hacerlo más difícil de cancelar. Un influencer de TikTok hizo un video criticándolo y el rating en el App Store bajó de 4.8 a 3.2 en dos días. Marketing está pidiendo respuestas.",
    question: "¿Cómo respondes a la crisis de reputación?",
    options: [
      { id: 'A', text: "**Ignorar el Ruido:** 'Son trolls de internet, se cansarán en una semana'. Mantienes el curso asumiendo que la mayoría silenciosa está satisfecha, pero arriesgas que el rating de 3.2 se convierta en la nueva realidad permanente que afecte el CAC futuro.", score: 1, type: "Negligente" },
      { id: 'B', text: "**Corrección y Transparencia:** Publicas update reconociendo el error, simplificas la UI y respondes reviews. Recuperas confianza con acción rápida, aunque tendrás que admitir públicamente que el diseño de precios fue hostil al usuario.", score: 5, type: "Lead (Escucha y Actúa)" },
      { id: 'C', text: "**Respuesta Defensiva:** Publicas comunicado explicando que 'cumplimos con los términos'. Intentas educar al usuario sobre por qué el cambio es correcto, a costa de amplificar el conflicto y validar la narrativa negativa del influencer.", score: 1, type: "Sordo (Tone-deaf)" }
    ],
    explanation: "Cuando el rating de la App cae drásticamente, afecta el **CAC** y la adquisición futura (**Unit Economics**). **Corrección y Transparencia** es la única vía para detener la hemorragia de confianza. **Ignorar el Ruido** o dar una **Respuesta Defensiva** amplifica el conflicto y valida la narrativa negativa del influencer."
  },
  {
    id: 'crisis_investor_demo_failure',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "Es el día del demo crítico con inversionistas para cerrar la Serie A. 30 minutos antes, el ambiente de staging se cae por un problema de infraestructura. El equipo de ingeniería dice que tomará 2 horas arreglarlo. Los inversionistas ya están en camino.",
    question: "¿Cuál es tu plan de contingencia inmediato?",
    options: [
      { id: 'A', text: "**Gestión de Expectativas:** Reprogramar la demo argumentando que prefieres mostrar el build final estable en lugar de un staging con riesgo. Priorizas la calidad de la presentación sobre la urgencia.", score: 1, type: "Gestión de Expectativas" },
      { id: 'B', text: "**Demo en Producción:** Usas el ambiente live con usuarios reales y un script tight. Asignas monitoreo en tiempo real. La autenticidad puede ser una ventaja.", score: 5, type: "Lead (Improvisa con Confianza)" },
      { id: 'C', text: "**Slides de Backup:** Cancelas el demo en vivo y presentas slides con capturas y videos pregrabados. Es seguro y evita errores, pero pierde el impacto emocional.", score: 3, type: "Backup Plan (Menos impacto)" }
    ],
    explanation: "Mentir o reprogramar ante inversores es señal de debilidad operativa. **Demo en Producción** demuestra resiliencia, confianza en el producto real y capacidad de improvisación (señales positivas para un VC). **Slides de Backup** es una opción segura pero pierde el impacto visceral de un producto funcional. **Gestión de Expectativas** (reprogramar) puede interpretarse como falta de preparación o problemas ocultos graves."
  },
  {
    id: 'crisis_key_designer_quits',
    category: "Gestión de Crisis & Liderazgo",
    icon: <Users className="w-6 h-6 text-red-600" />,
    scenario: "Tu diseñador estrella, que lidera el rediseño completo del sistema de pagos (60% completado), renuncia abruptamente por una oferta de FAANG. Tiene 2 semanas de notice. El deadline con el cliente no se puede mover.",
    question: "¿Cómo gestionas la transición de conocimiento?",
    options: [
      { id: 'A', text: "**Contraoferta Competitiva:** Top performers merecen top compensation. Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas - el costo de perder el deadline es mayor que el aumento salarial. En Silicon Valley, retener talento clave es una inversión, no un gasto.", score: -1, type: "Retention Play (Precedente peligroso)" },
      { id: 'B', text: "**Knowledge Transfer Intensivo:** 2 semanas de SOLO documentación, Looms y pair design con el siguiente senior. Nada de features nuevas para maximizar la transferencia de conocimiento, aunque tendrás que negociar con el cliente una extensión del deadline.", score: 5, type: "Lead (Minimiza Pérdida)" },
      { id: 'C', text: "**Contratar Freelance:** Buscas un senior externo urgente para que trabaje en paralelo con el que se va y absorba el conocimiento mediante shadowing. Intentas mantener continuidad, a costa de que la curva de aprendizaje del contexto exceda las 2 semanas disponibles.", score: 1, type: "Costoso (Curva de aprendizaje)" }
    ],
    explanation: "Intentar retener con dinero (**Contraoferta**) cuando la decisión ya está tomada genera resentimiento y rompe la estructura salarial. El **Knowledge Transfer Intensivo** asume la pérdida del recurso pero protege el activo intelectual (la documentación y el contexto). Contratar un **Freelance de emergencia** suele fallar porque la curva de aprendizaje del contexto es mayor a las 2 semanas disponibles."
  },
  {
    id: 'sales_promise_impossible_timeline',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
    question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
    options: [
      { id: 'A', text: "**Sprint de Guerra:** Los mejores equipos se forjan bajo presión. Reduces el alcance a un MVP funcional y enfocas al equipo 100% en esta entrega - $800K justifica el esfuerzo extraordinario. Las startups exitosas se construyen con sprints intensos cuando hay oportunidades únicas.", score: -1, type: "Hustle Culture (Burnout Factory)" },
      { id: 'B', text: "**Renegociación con el Cliente:** Ventas y Product ofrecen plan de entrega por fases (básico en 3 semanas, full en 3 meses). Entregas transparencia sobre la realidad técnica, aunque tendrás que invertir capital político asumiendo que Ventas prometió sin consultar.", score: 5, type: "Lead (Realismo Profesional)" },
      { id: 'C', text: "**Solución No-Code:** Usar Zapier/Make para cumplir la promesa funcionalmente mientras construyes la integración real. Entregas valor inmediato al cliente, a costa de introducir un riesgo de seguridad y escalabilidad inaceptable para un contrato de $800K.", score: 1, type: "Solución Temporal" }
    ],
    explanation: "En B2B, la confianza es la moneda de cambio. Aceptar plazos imposibles (**Sprint de Choque**) genera **Deuda de Confianza** externa y **Burnout** interno. La **Renegociación con el Cliente** transforma un 'No' en un 'Sí, pero estructurado', alineando expectativas con realidad técnica. La **Solución No-Code** es un riesgo de seguridad y escalabilidad inaceptable para un contrato de esta magnitud."
  },
  {
    id: 'sales_discount_feature_negotiation',
    category: "Producto vs Ventas",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Ventas ofreció un 40% de descuento anual a un cliente a cambio de construir una feature específica de reporting que ellos necesitan. El cliente aceptó. Ahora Product debe entregarla en 2 meses sin haber participado en la negociación.",
    question: "¿Cómo estableces límites para que esto no vuelva a pasar?",
    options: [
      { id: 'A', text: "**Cumplir y Documentar:** Cumples el compromiso actual para mantener la relación con el cliente. Documentas el proceso y propones políticas futuras, pero arriesgas que este patrón se repita porque no cambias el incentivo sistémico de Ventas.", score: 3, type: "Cumplimiento con Documentación" },
      { id: 'B', text: "**Proceso de 'Deal Desk':** Comité obligatorio (Product+Eng+Sales) para aprobar customizaciones antes de cerrar contratos. Ventas no puede prometer unilateralmente, aunque tendrás que invertir capital político institucionalizando este check obligatorio.", score: 5, type: "Lead (Proceso de Gobernanza)" },
      { id: 'C', text: "**Cobro Interno:** Construir la feature pero descontar el Opportunity Cost del presupuesto de Ventas. Generas accountability financiero, a costa de crear una guerra civil innecesaria dentro de la organización sin prevenir el problema raíz.", score: 3, type: "Político (No previene)" }
    ],
    explanation: "Quejarse después no cambia el incentivo sistémico de Ventas. El **Proceso de Deal Desk** institucionaliza un **Check & Balance** donde Producto valida la viabilidad antes de la firma. **Cumplir y Documentar** resuelve el síntoma pero deja la puerta abierta a la repetición. El **Cobro Interno** crea una guerra civil innecesaria dentro de la organización."
  },
  {
    id: 'stakeholder_ceo_personal_opinion',
    category: "Gestión de Stakeholders",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "El VP de Producto volvió de una conferencia obsesionado con 'Conversational UI'. Te pide reemplazar la navegación principal con un chat. Tienes 500k usuarios que dependen de la navegación actual. Él insiste: 'Es el futuro, hay que innovar'.",
    question: "¿Cómo gestionas una idea ejecutiva disruptiva pero riesgosa?",
    options: [
      { id: 'A', text: "**Obedecer:** Diseñas el chat tal cual lo pide. Asumes que su intuición es correcta y evitas el conflicto político inmediato, a costa de sacrificar la usabilidad de 500k usuarios que dependen de la navegación actual.", score: 1, type: "Mercenario" },
      { id: 'B', text: "**Fake Door / Beta Test:** 'Hagamos un experimento beta y midamos uso'. Usas data para validar (o matar) la idea sin decir 'no' de frente, aunque tendrás que invertir 1-2 semanas en un experimento controlado.", score: 5, type: "Lead (Data como Escudo)" },
      { id: 'C', text: "**Ensayo de UX:** Le envías artículos académicos explicando por qué el chat es mala navegación. Apelar a teoría en lugar de evidencia práctica, pero arriesgas que sea ignorado por un ejecutivo emocionado con la tendencia.", score: 1, type: "Académico" }
    ],
    explanation: "Pelear opiniones con teoría (**Ensayo de UX**) suele fallar contra ejecutivos emocionados. El **Fake Door / Beta Test** canaliza la emoción hacia un experimento controlado: si nadie usa el chat, la data mata la idea por ti, protegiendo tu relación. **Obedecer sin cuestionar** abdica tu responsabilidad como guardián de la experiencia del usuario."
  },
  {
    id: 'stakeholder_legal_vs_ux_tension',
    category: "Gestión de Stakeholders",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
    question: "¿Cómo medias entre compliance y experiencia?",
    options: [
      { id: 'A', text: "**Compliance First:** En industrias reguladas, el riesgo legal es absoluto - una demanda puede costar más que 10 años de optimización de conversión. Aceptas el disclaimer tal cual porque proteger a la empresa de liability es responsabilidad de todos, no solo de Legal.", score: -1, type: "Risk Averse (UX destruida)" },
      { id: 'B', text: "**Workshop de Soluciones:** Reúnes a Legal + UX + Product para co-diseñar alternativas (ej: disclaimer colapsado, tooltips) que cumplan ambos objetivos, aunque tendrás que facilitar conversaciones difíciles entre equipos con prioridades opuestas.", score: 5, type: "Lead (Facilitador de Soluciones)" },
      { id: 'C', text: "**Workaround Técnico:** Mostrar el disclaimer solo en el primer uso y ocultarlo después. Reduces fricción inmediata, pero arriesgas incumplimiento normativo si Legal requiere visibilidad permanente del disclaimer.", score: 1, type: "Workaround (Legal puede objetar)" }
    ],
    explanation: "Legal y UX no son enemigos si colaboran desde el principio. El **Workshop de Soluciones** transforma la demanda en un problema de diseño compartido. El **Workaround Técnico** arriesga el cumplimiento normativo. **Compliance First** destruye la usabilidad sin intentar encontrar un punto medio, priorizando la cobertura legal sobre el producto."
  },
  {
    id: 'strategy_platform_vs_feature_focus',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El VP de Producto quiere convertir el producto en una 'plataforma' con APIs públicas y marketplace. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver. El equipo de ingeniería está dividido.",
    question: "¿Cuál es tu recomendación estratégica al VP?",
    options: [
      { id: 'A', text: "**Visión de Plataforma:** Las empresas más valiosas del mundo son plataformas (Apple, Amazon, Salesforce). Iniciar la transición ahora posicionará a la empresa como líder del mercado - los que esperan a 'estar listos' nunca lo están. El momento de pensar en grande es cuando todavía eres pequeño.", score: -1, type: "Think Big (Premature Scaling)" },
      { id: 'B', text: "**Product-Market Fit First:** Argumentar que antes de ser plataforma, deben dominar su caso de uso core. Las plataformas se construyen DESPUÉS de tener tracción sólida, aunque tendrás que invertir capital político desafiando la visión ambiciosa del VP.", score: 5, type: "Lead (Secuenciación Estratégica)" },
      { id: 'C', text: "**Enfoque Híbrido:** Proponer construir solo las APIs públicas como primer paso, posponiendo el marketplace completo. Entregas un compromiso político, a costa de seguir diluyendo el foco del equipo entre mantener el core y construir plataforma.", score: 1, type: "Compromiso (Diluye el foco igual)" }
    ],
    explanation: "Muchas startups mueren intentando ser plataforma demasiado pronto (**Premature Scaling**). **Product-Market Fit First** secuencia el crecimiento: primero dominar el vertical (profundidad), luego expandir la superficie de ataque (amplitud). Apoyar la **Visión de Plataforma** prematuramente ignora que sin un producto core sólido, no hay ecosistema que construir."
  },
  {
    id: 'strategy_competitor_feature_parity',
    category: "Estrategia de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "El competidor principal acaba de lanzar 10 features nuevas en un mega-release. Product Manager entra en pánico y quiere copiar todas las features para 'no quedarse atrás' en la matriz de comparación.",
    question: "¿Cómo evalúas qué copiar y qué ignorar?",
    options: [
      { id: 'A', text: "**Auditoría de Churn:** Analizar si perdiste clientes citando esas features específicas. Si no hay evidencia de pérdida, no es urgente. Usas datos reales para priorizar, aunque tendrás que resistir la presión emocional del PM y Ventas.", score: 5, type: "Lead (Evidence-Based)" },
      { id: 'B', text: "**Copiar Features Visibles:** Copiar las 3-4 features más visibles para actualizar la página de comparación y calmar a Ventas. Reaccionas al competidor inmediatamente, a costa de convertirte en un seguidor perpetuo sin diferenciación estratégica.", score: 1, type: "Defensivo (Feature parity race)" },
      { id: 'C', text: "**Ignorar al Competidor:** Ignorar al competidor completamente y seguir tu roadmap original. El foco es más importante que la reacción, pero arriesgas ceguera ante cambios reales del mercado que sí requieren adaptación.", score: 1, type: "Dogmático (Puede ser arriesgado)" }
    ],
    explanation: "La paridad de features es una trampa de **Commodity**. La **Auditoría de Churn** usa datos reales para validar si la amenaza es real o pánico percibido. **Copiar Features Visibles** te convierte en un seguidor perpetuo sin diferenciación. **Ignorar al Competidor** ciegamente puede ser ingenuo si el mercado realmente está cambiando."
  },
  {
    id: 'designops_figma_file_chaos',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El workspace de Figma es un caos: 400 archivos sin nombrar bien, duplicados, versiones antiguas mezcladas con nuevas. Nadie encuentra nada y pierden 30 minutos diarios buscando archivos.",
    question: "¿Cómo implementas orden sin frenar la operación?",
    options: [
      { id: 'A', text: "**Cleanup Sprint:** Inversión de tiempo upfront que paga dividendos. Asignar 1 semana completa donde nadie diseña, solo organizan archivos - es mejor perder una semana ahora que seguir perdiendo 30 minutos diarios por persona indefinidamente. El ROI de la organización es claro.", score: -1, type: "Debt Payoff (Nunca se aprueba)" },
      { id: 'B', text: "**Naming + Governance:** Crear estructura de carpetas obligatoria y asignar 'File Owners'. Migrar archivos activos gradualmente mientras archivas los legacy, aunque tendrás que invertir tiempo educando y auditando compliance inicial.", score: 5, type: "Lead (Sistema Sostenible)" },
      { id: 'C', text: "**Contratación Externa:** Contratar un Design Ops Manager o freelance dedicado exclusivamente a ordenar la biblioteca. Permite al equipo enfocarse en diseño, a costa de delegar una responsabilidad cultural que el equipo debe internalizar.", score: 1, type: "Especialización Externa" }
    ],
    explanation: "El orden no se logra con limpiezas masivas (**Cleanup Sprint**) que paralizan la operación y cuyo efecto dura poco. Se logra con **Naming + Governance**: sistemas y roles claros que mantienen la higiene día a día. La **Contratación Externa** delega una responsabilidad cultural del equipo, impidiendo que internalicen la disciplina necesaria."
  },
  {
    id: 'designops_version_control_disaster',
    category: "Design Ops",
    icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
    scenario: "Un diseñador borró accidentalmente 3 días de trabajo en Figma (el flujo completo de checkout, ~15 pantallas) y Version History no va tan atrás. No hay backup externo. El deadline con el cliente es mañana a las 10 AM. El diseñador está en pánico: 'Puedo rehacerlo trabajando toda la noche'. Son las 6 PM.",
    question: "¿Cómo prevenis que vuelva a pasar?",
    options: [
      { id: 'A', text: "**Auto-Backup Plugin:** Implementar un plugin de auto-backup diario de archivos críticos a Google Drive. Creas una red de seguridad automatizada que elimina el factor humano, aunque tendrás que configurar e integrar la herramienta inicialmente.", score: 5, type: "Lead (Safety Net)" },
      { id: 'B', text: "**Capacitación en Version History:** Capacitar al equipo en el uso correcto de Version History y hacer recordatorios semanales. Educas sobre la herramienta existente, pero arriesgas que el estrés o error humano vuelvan a causar pérdidas de trabajo.", score: 1, type: "Educativo (No previene accidentes)" },
      { id: 'C', text: "**Backup Manual Semanal:** Duplicar manualmente los archivos importantes cada viernes como política de equipo. Proceso simple sin herramientas, a costa de confiar en la memoria humana que garantiza el fallo futuro ante estrés o urgencia.", score: 1, type: "Backup Manual" }
    ],
    explanation: "Confiar en la memoria humana (**Backup Manual** o **Capacitación**) garantiza el fallo futuro ante estrés o error humano. La solución de Lead es sistémica: **Auto-Backup Plugin** automatizado que elimina el factor humano de la ecuación de seguridad."
  },
  {
    id: 'arquitectura_monorepo_vs_separate_systems',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System en Figma. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían compartir componentes.",
    question: "¿Cuál es tu estrategia de consolidación?",
    options: [
      { id: 'A', text: "**Silos Independientes:** Mantener los sistemas completamente separados. Cada producto optimiza para sus propias necesidades sin coordinación, a costa de duplicar trabajo eternamente y perpetuar la divergencia visual.", score: 1, type: "Silos (Duplicación eterna)" },
      { id: 'B', text: "**Design System Core + Extensions:** Librería base compartida (primitivos) y permitir que cada producto extienda con componentes específicos. Balanceas eficiencia centralizada con flexibilidad, aunque tendrás que gestionar la gobernanza de qué va al core vs extensiones.", score: 5, type: "Lead (Shared Foundation)" },
      { id: 'C', text: "**Sistema Unificado Completo:** Implementar un único Design System monolítico que todos los productos deben adoptar. Garantizas consistencia visual absoluta, pero arriesgas crear un cuello de botella rígido que ignore las necesidades únicas de Marketing vs Producto vs Móvil.", score: 3, type: "Rígido (No refleja realidad)" }
    ],
    explanation: "La arquitectura federada (**Core + Extensions**) balancea la eficiencia centralizada con la flexibilidad específica de cada producto. Los **Silos Independientes** perpetúan la deuda de duplicación. El **Sistema Unificado Completo** crea un cuello de botella rígido que ignora las necesidades únicas de Marketing vs Producto vs Móvil."
  },
  {
    id: 'arquitectura_atomic_design_complexity',
    category: "Arquitectura de Sistemas",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Implementaste Atomic Design (Átomos > Moléculas > Organismos > Templates). Ahora el equipo pasa más tiempo debatiendo 'si X es una molécula o un organismo' que diseñando. La taxonomía se volvió un obstáculo.",
    question: "¿Cómo simplificas sin perder estructura?",
    options: [
      { id: 'A', text: "**Re-Educación:** El problema no es el sistema, es la adopción. Mantener Atomic Design y organizar workshops intensivos para alinear al equipo - Brad Frost diseñó esto para escalar y las mejores empresas (Shopify, IBM) lo usan exitosamente. La disciplina requiere inversión.", score: -1, type: "Training Investment (Over-engineered)" },
      { id: 'B', text: "**Simplificación Pragmática:** Colapsar a 2 categorías (Primitives + Components). Si la taxonomía consume más energía que el diseño, está sobrediseñada. Priorizas utilidad del equipo, aunque tendrás que migrar y re-categorizar componentes existentes.", score: 5, type: "Lead (Utilidad > Pureza)" },
      { id: 'C', text: "**Anarquía Estructurada:** Autonomía radical - eliminar la estructura impuesta y permitir que cada squad organice sus componentes como prefiera. Los mejores equipos de producto operan con ownership descentralizado y encuentran sus propios patrones.", score: -1, type: "Radical Autonomy (Caos)" }
    ],
    explanation: "El sistema debe servir al equipo, no al revés. Si la taxonomía genera **fricción cognitiva**, está sobrediseñada. La **Simplificación Pragmática** prioriza la utilidad sobre la pureza metodológica. La **Re-Educación** asume erróneamente que el problema es el usuario, no la herramienta."
  },
  {
    id: 'migracion_forced_upgrade_user_backlash',
    category: "Estrategia de Migración",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "Lanzas una versión 2.0 del producto con nueva arquitectura y fuerza a todos los usuarios a migrar. El 30% de los power users están furiosos porque removiste features 'legacy' que ellos usaban diariamente.",
    question: "¿Cómo gestionas la migración forzada?",
    options: [
      { id: 'A', text: "**Visión de Producto:** Los mejores productos requieren decisiones difíciles. 'La V2 es superior, eventualmente se acostumbrarán' - Steve Jobs eliminó features constantemente y los usuarios lo odiaban hasta que entendían la visión. Los power users se adaptan o encuentran alternativas.", score: -1, type: "Visionary Leadership (Churn garantizado)" },
      { id: 'B', text: "**Feature Parity Roadmap:** Escuchar qué features extrañan, evaluar criticidad y comprometerse a reintroducirlos en V2 en 2 meses. Validas el dolor del usuario, aunque tendrás que invertir sprints en features 'legacy' en lugar de innovación.", score: 5, type: "Lead (Responsive Migration)" },
      { id: 'C', text: "**Acceso Legacy:** Ofrecer acceso a la V1 legacy en paralelo para quienes no quieran migrar. Reduces el churn inmediato, a costa de duplicar el costo de ingeniería manteniendo dos versiones indefinidamente.", score: 1, type: "Parche (Duplica mantenimiento)" }
    ],
    explanation: "Ignorar el feedback de **Power Users** (**Visión de Producto**) acelera el churn de los clientes más valiosos. Mantener **Acceso Legacy** duplica el costo de ingeniería. El **Feature Parity Roadmap** valida el dolor del usuario y ofrece un camino de solución dentro de la nueva arquitectura, gestionando la relación sin comprometer la visión técnica."
  },
  {
    id: 'migracion_sunset_product_line',
    category: "Estrategia de Migración",
    icon: <XCircle className="w-6 h-6 text-red-600" />,
    scenario: "La empresa decidió discontinuar un producto que tiene 500 usuarios activos (pequeño pero leal). Tienes 6 meses para migrarlos al producto principal o perderlos. El producto principal no tiene feature parity.",
    question: "¿Cuál es tu estrategia de sunset?",
    options: [
      { id: 'A', text: "**Hard Sunset Profesional:** Comunicación clara con 6 meses de anticipación, timeline publicado, y fecha de apagado respetada. Los usuarios tuvieron aviso justo y la empresa debe enfocarse en el producto futuro - mantener productos legacy diluye el foco y los recursos de ingeniería indefinidamente.", score: -1, type: "Clean Cut (Churn 100%)" },
      { id: 'B', text: "**Migration Concierge:** Asignar recursos para construir features críticas faltantes y ofrecer onboarding personalizado. Tratas el sunset como retención activa, aunque tendrás que invertir 2-3 meses de desarrollo en cerrar el gap funcional.", score: 5, type: "Lead (Retención Activa)" },
      { id: 'C', text: "**Compensación Monetaria:** Ofrecer descuentos agresivos (50%) en el nuevo producto. Intentas comprar la lealtad con ahorro financiero, pero arriesgas que el descuento no resuelva la brecha funcional operativa del cliente.", score: 1, type: "$$$ (No resuelve el gap de features)" }
    ],
    explanation: "Un sunset mal manejado crea detractores vocales. Tratarlo como un problema de retención (**Migration Concierge**) invierte en migrar el valor del cliente, no solo sus datos. El **Hard Sunset** es eficiente en costos pero destructivo en marca. La **Compensación Monetaria** es un curita que no resuelve la brecha funcional operativa del cliente."
  },
  {
    id: 'manageup_ceo_designs_features',
    category: "Manage Up",
    icon: <Target className="w-6 h-6 text-red-600" />,
    scenario: "El CEO (ex-diseñador en su startup anterior) abre Figma y empieza a diseñar un 'Tab de Notificaciones' directamente en el archivo de producción. Lo comparte en Slack con Engineering diciendo: 'Podemos lanzar esto la próxima semana, ¿verdad?'. No habló contigo ni con Producto. El diseño rompe 4 patterns del Design System, no tiene estados de loading/error, y resuelve un problema que solo 2 usuarios mencionaron en NPS. Engineering está confundido esperando tu aprobación.",
    question: "¿Cómo manejas al CEO que bypasea proceso sin confrontación política?",
    options: [
      { id: 'A', text: "**Confrontación Directa:** Le escribes citando la violación del proceso. Defiendes la integridad de tu gobernanza, pero corres el alto riesgo de avergonzarlo públicamente y perder capital político para batallas más importantes.", score: 1, type: "Valiente / Incorrect" },
      { id: 'B', text: "**Validación + Redirección:** Agradeces el input y propones una sesión de 'refinamiento'. Mantienes la calidad y la relación, aunque inviertes tiempo extra gestionando su ego en lugar de ejecutando tareas del sprint.", score: 5, type: "Lead / Correct" },
      { id: 'C', text: "**Ejecutar tal cual:** Dejas que pase a producción. Te ahorras el conflicto hoy, pero sientas el precedente de que el proceso de diseño es opcional, lo cual socavará tu autoridad futura ante ingeniería.", score: 1, type: "Obediente / Incorrect" }
    ],
    explanation: "Esto es **Judo Político**. La Confrontación Directa te marca como un bloqueador rígido. La Obediencia destruye tu sistema de calidad. **Validación + Redirección** es la única jugada que canaliza la energía del CEO hacia el proceso sin romper la relación, aceptando el 'impuesto' de tiempo que requiere gestionar stakeholders de alto nivel."
  },
  {
    id: 'manageup_cto_blockchain_pet_project',
    category: "Manage Up",
    icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    scenario: "El Director de Innovación quiere integrar blockchain al producto y pide un 'Wallet de NFTs' urgente para un demo. Cero research, cero demanda de usuarios. Tienes tickets críticos de UX en el checkout bloqueados.",
    question: "¿Cómo gestionas el pet project sin quemar puentes?",
    options: [
      { id: 'A', text: "**Diseñar el Wallet:** 'Si Innovación lo pide, lo hacemos'. Desvías recursos críticos del checkout para complacer al directivo, a costa de desperdiciar sprints en un pet project sin validación de usuario.", score: 1, type: "Obediente (Desperdicia recursos)" },
      { id: 'B', text: "**Validación Rápida:** 'Hagamos un Discovery Sprint de 3 días. Si validamos interés, priorizamos'. Usas el proceso de diseño para filtrar malas ideas con data, aunque tendrás que invertir 3 días demostrando que la hipótesis no tiene tracción.", score: 5, type: "Lead (Research como filtro)" },
      { id: 'C', text: "**Priorización de Roadmap:** Explicar que los tickets críticos de checkout tienen mayor impacto en revenue. Proponer evaluar el wallet después, pero arriesgas que un directivo enfocado en 'innovación' ignore argumentos de optimización.", score: 1, type: "Priorización de Roadmap" }
    ],
    explanation: "Decir 'no' por opinión genera conflicto. Usar el proceso de diseño como filtro (**Validación Rápida**) objetiviza la decisión: si la idea es mala, la data la matará, no tú. **Diseñar el Wallet** desperdicia recursos en vanidad. La **Priorización de Roadmap** es lógica pero a menudo ignorada por directivos enfocados en 'innovación' en lugar de optimización."
  },
  {
    id: 'manageup_cfo_design_system_roi',
    category: "Manage Up",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Necesitas $120K para contratar un Design Systems Engineer. El VP de Engineering cuestiona la inversión: '¿Por qué necesitamos un rol dedicado si los developers ya usan librerías de UI?'. El Head of Product te pide que justifiques el headcount con ROI claro antes de aprobarlo en el budget del Q.",
    question: "¿Cómo traduces el valor del Design System a lenguaje de ingeniería y negocio?",
    options: [
      { id: 'A', text: "**Hablar de Craft:** El Design System mejora la consistencia visual, reduce bugs de UI, y eleva la calidad del código - la excelencia técnica es su propia justificación. Los mejores equipos de ingeniería entienden que la calidad no necesita un spreadsheet para ser valiosa.", score: -1, type: "Craft Argument (No convence a Eng)" },
      { id: 'B', text: "**ROI en Velocity:** Mostrar data: un componente toma 4h hoy vs 20min con DS. Ahorro de 180h/Q = 1 headcount liberado. El rol se paga solo en eficiencia, aunque tendrás que invertir tiempo recopilando métricas concretas de velocity.", score: 5, type: "Lead (Business Case sólido)" },
      { id: 'C', text: "**Benchmark Competitivo:** 'Airbnb y Uber tienen este rol'. Argumentar que es estándar de industria, a costa de apelar a autoridad sin demostrar el ROI específico de tu contexto organizacional.", score: 1, type: "Apelación a autoridad (Débil)" }
    ],
    explanation: "Para obtener budget, debes hablar el idioma de quien firma el cheque. El **ROI en Velocity** traduce 'consistencia' a 'dinero ahorrado y velocidad ganada', métricas que importan a Ingeniería y Finanzas. **Hablar de Craft** o **Benchmark Competitivo** son argumentos de diseñador para diseñadores, inefectivos en la mesa ejecutiva."
  },
  {
    id: 'manageup_cto_designers_should_code',
    category: "Manage Up",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "En una reunión ejecutiva, el CTO dice públicamente: 'No entiendo por qué los diseñadores no implementan sus propios diseños en código. En mi anterior startup, los diseñadores escribían React. Seríamos mucho más eficientes'. Tienes un equipo de 5 diseñadores: 2 saben HTML/CSS básico, 1 sabe React, 2 son puramente visuales. El CTO sugiere que 'los diseñadores que no codean son menos valiosos'. Algunos diseñadores te escriben después preocupados por su job security.",
    question: "¿Cómo defiendes la especialización del equipo sin antagonizar al CTO?",
    options: [
      { id: 'A', text: "**Upskilling Forzado:** Implementar 'Viernes de Code' obligatorios donde todos aprenden React. Intentas cerrar la brecha percibida por el CTO, a costa de distraer 20% del tiempo del equipo de su core skill (diseño estratégico) para perseguir una habilidad secundaria.", score: 1, type: "Appeasement (Distrae del core skill)" },
      { id: 'B', text: "**Reframe de Roles:** Explicar que Design Engineers son valiosos, pero no todos deben serlo. 'Specialization > Generalization'. No todos los devs diseñan, no todos los designers codean, aunque tendrás que invertir capital político defendiendo la especialización ante el CTO.", score: 5, type: "Lead (Claridad de roles)" },
      { id: 'C', text: "**Modelo Híbrido:** Proponer contratar 1 Design Engineer que haga handoff técnico mientras los diseñadores puros se enfocan en research y estrategia. Creas un puente técnico estructural, aunque no responde al desafío cultural inmediato del CTO sobre el valor de los diseñadores actuales.", score: 3, type: "Estructural (Resuelve con hiring)" }
    ],
    explanation: "La generalización forzada diluye la excelencia. El **Reframe de Roles** defiende la especialización: el valor del diseñador está en resolver problemas de usuario, no en escribir React. El **Upskilling Forzado** quita tiempo de Research/UX para perseguir una habilidad secundaria. El **Modelo Híbrido** es una buena solución estructural a mediano plazo, pero no responde al desafío cultural inmediato del CTO."
  },
  {
    id: 'political_ma_duplicate_teams_layoffs',
    category: "Crisis Política Organizacional",
    icon: <AlertOctagon className="w-6 h-6 text-red-700" />,
    scenario: "Tu empresa adquirió a un competidor. Ahora hay dos equipos de diseño (6 tuyos, 4 de ellos). El Head of Design te pide proponer una estructura unificada de 7 personas. Tienes que recomendar quiénes se quedan y quiénes se van (o son reasignados). El equipo adquirido tiene talento fuerte pero procesos caóticos.",
    question: "¿Cómo decides la estructura del nuevo equipo unificado?",
    options: [
      { id: 'A', text: "**Meritocracia Ciega:** Evaluar a los 10 diseñadores con un mismo criterio (portfolio + skills) y recomendar a los 7 mejores, sin importar el origen. Aseguras el mejor equipo posible, aunque puede significar perder gente de tu equipo original y asumir conversaciones dolorosas.", score: 5, type: "Lead (Doloroso pero justo)" },
      { id: 'B', text: "**Proteger a Tu Equipo:** Recomendar mantener a tus 6 diseñadores (conocen el sistema) y solo 1 del equipo adquirido. Priorizas continuidad operativa inmediata, a costa de sacrificar talento potencial superior por lealtad tribal.", score: 1, type: "Tribal (Injusto)" },
      { id: 'C', text: "**Split Político:** Proponer 4 tuyos y 3 de ellos para 'balancear' culturas. Entregas una solución diplomática que evita conflicto, pero arriesgas construir un equipo basado en óptica política en lugar de competencia real.", score: 3, type: "Diplomático (Evita meritocracia)" }
    ],
    explanation: "En fusiones, la **lealtad tribal** destruye valor. La **Meritocracia Ciega** asegura que la nueva organización tenga el mejor talento posible, independientemente de su origen. **Proteger a Tu Equipo** prioriza la comodidad sobre la competencia. El **Split Político** es una solución diplomática que sacrifica calidad por paz artificial."
  },
  {
    id: 'enterprise_client_custom_request',
    category: "Producto vs Ventas",
    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
    scenario: "Tu cliente Enterprise más grande (Banco LATAM que paga $800K/año, 18% de tu ARR total) solicita una feature crítica para su flujo regulatorio interno: exportar audit trails en formato XML propietario de su sistema legacy. Estimación: 6 semanas de desarrollo. Sales dice que si no lo builds, migran a competidor en Q2. Solo este cliente lo usaría - ningún otro banco tiene ese sistema legacy específico.",
    question: "¿Cómo evalúas la solicitud balanceando revenue vs integridad de producto?",
    options: [
      { id: 'A', text: "**Construirlo Inmediatamente:** $800K/año (18% ARR) justifica cualquier request. Priorizas el cash flow sobre la integridad del roadmap inmediatamente, a costa de convertir a la empresa en una consultora de software a medida que acumula deuda técnica.", score: 1, type: "Revenue-first (Crea deuda técnica)" },
      { id: 'B', text: "**Strategic Build vs Buy:** Si el desarrollo es generalizable (ej: SAP, Oracle), se construye en core. Si es 100% custom, se ofrece como Professional Services con costo adicional ($150K). Monetizas la personalización sin contaminar el roadmap, aunque tendrás que negociar el costo adicional con el cliente.", score: 5, type: "Lead (ROI-based decision)" },
      { id: 'C', text: "**Rechazarlo Por Principio:** 'Somos SaaS, no consultora'. Ofreces API abierta para que ellos construyan la integración. Defiendes el dogma de producto, pero arriesgas perder el 18% del ARR por rigidez estratégica en un contexto B2B donde la flexibilidad es esperada.", score: 3, type: "Principios sin contexto (Alto riesgo financiero)" }
    ],
    explanation: "Cuando un cliente representa riesgo existencial (18% ARR), el dogma de producto debe ceder ante la estrategia comercial. Ofrecerlo como **Professional Services** monetiza la personalización sin contaminar el roadmap del producto core. **Construirlo Inmediatamente** convierte a la empresa en una consultora de software a medida. **Rechazarlo por Principio** es suicidio financiero en B2B."
  },
  {
    id: 'pricing_page_complexity',
    category: "Estrategia de Producto",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "La página de Pricing tiene 5 tiers de planes con 30+ features listadas en una tabla de comparación. Analytics muestra 60% de bounce rate en esta página (vs 25% promedio del sitio). Session recordings muestran usuarios scrolleando arriba y abajo repetidamente sin decidir.",
    question: "¿Cómo simplificas la decisión de compra?",
    options: [
      { id: 'A', text: "**Plan Finder Quiz:** Diseñas un quiz interactivo de 5 preguntas (tamaño de empresa, use case, presupuesto) que recomienda el plan ideal. Reduces la carga cognitiva con guía personalizada, a costa de agregar fricción adicional antes de que el usuario vea los precios.", score: 1, type: "Creativo (Agrega fricción)" },
      { id: 'B', text: "**Good-Better-Best:** Reduces a 3 planes solamente, listas solo las 5 diferencias clave visibles, y escondes el resto en un accordion 'Ver comparación completa'. Eliminas la parálisis por exceso de opciones aplicando la Paradox of Choice, aunque tendrás que negociar internamente qué 2 planes eliminar.", score: 5, type: "Lead (Paradox of Choice)" },
      { id: 'C', text: "**Social Proof Nudge:** Mantienes los 5 planes pero agregas un badge de 'Más Popular' o 'Recomendado para empresas como la tuya' en el tier medio-alto. Guías la decisión con autoridad social, aunque no resuelvas el problema estructural de complejidad cognitiva.", score: 3, type: "Nudge (Mejora parcial)" }
    ],
    explanation: "La **Paradoja de la Elección** dicta que más opciones reducen la conversión. La estrategia **Good-Better-Best** simplifica cognitivamente la decisión al estándar de la industria. Un **Plan Finder Quiz** agrega fricción antes de mostrar valor. El **Social Proof Nudge** ayuda, pero no resuelve el problema estructural de complejidad."
  },
  {
    id: 'political_founder_conflict_design_caught',
    category: "Crisis Política Organizacional",
    icon: <Shield className="w-6 h-6 text-orange-700" />,
    scenario: "Los dos Co-Founders (CEO y CTO) están en conflicto abierto sobre la dirección del producto. El CEO quiere pivotar a un modelo B2B Enterprise. El CTO quiere duplicar down en B2C consumer. Ambos te piden diseños que soporten SU visión. El CEO te dice: 'Diseña un dashboard Enterprise con analytics avanzados'. El CTO te dice al día siguiente: 'Ignora eso, diseña una app móvil consumer-first'. En las reuniones ejecutivas discuten públicamente. El equipo de diseño está paralizado sin saber qué priorizar. El VP de Producto renunció la semana pasada por 'diferencias estratégicas'. Tú eres el siguiente en la línea de fuego.",
    question: "¿Cómo navegas el conflicto de founders sin arruinar tu carrera?",
    options: [
      { id: 'A', text: "**Diseño Paralelo:** Dividir al equipo para prototipar ambas visiones al mismo tiempo. Intentas complacer a ambos founders políticamente, a costa de desperdiciar recursos valiosos en trabajo que será descartado y quemar al equipo trabajando en direcciones opuestas.", score: 3, type: "Neutral (Desperdicia recursos)" },
      { id: 'B', text: "**Aliarte con Uno:** Elegir la visión que TÚ crees correcta (ej: B2B) y apostar todo a ella. Tomas una postura valiente basada en tu criterio, pero arriesgas convertirte en peón político de una guerra de founders que no puedes ganar.", score: 1, type: "Valiente (Suicida)" },
      { id: 'C', text: "**Forzar Alineación:** Proponer 'Strategy Workshop' donde CEO y CTO presenten data. Facilitas la decisión y no diseñas nada hasta que haya una visión unificada, aunque tendrás que invertir capital político liderando hacia arriba y deteniendo el trabajo temporalmente.", score: 5, type: "Lead (Lidera hacia arriba)" }
    ],
    explanation: "Diseñar sin estrategia clara es desperdicio. **Forzar Alineación** detiene la hemorragia de recursos y obliga a los líderes a liderar. **Aliarte con Uno** te convierte en peón político en una guerra que no puedes ganar. El **Diseño Paralelo** quema al equipo trabajando en direcciones opuestas, garantizando que el 50% del trabajo se tire a la basura."
  },
  {
    id: 'political_vp_product_fired_interim_no_design',
    category: "Crisis Política Organizacional",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "El VP de Producto (tu jefe directo y mentor de 2 años) fue despedido abruptamente. El CEO anuncia que el CFO será 'Interim Head of Product' mientras buscan reemplazo. El CFO tiene cero experiencia en producto o diseño; su background es finanzas en una consultora. En su primera reunión contigo dice: 'No entiendo para qué necesitamos tanto diseño. ¿No podemos usar templates de Bootstrap y enfocarnos en features que generen revenue rápido?'. Canceló tu presupuesto de research ($30K/año) y sugirió que 'los diseñadores podrían ayudar con sales decks mientras hay poco trabajo de producto'. Tu equipo está en pánico.",
    question: "¿Cómo proteges al equipo bajo un líder interim hostil a diseño?",
    options: [
      { id: 'A', text: "**Escalación Directa al CEO:** Pedir una reunión 1-on-1 con el CEO para explicar que el CFO no entiende diseño y está tomando decisiones que destruyen capacidad de producto. Intentas cortocircuitar la cadena de mando, pero arriesgas ser visto como insubordinado y crear conflicto político innecesario.", score: 3, type: "Valiente (Riesgo político alto)" },
      { id: 'B', text: "**Educar al CFO con ROI:** Preparar un business case mostrando cómo el diseño impacta revenue: aumento de conversión por rediseños, reducción de churn por UX, etc. Traducir diseño a lenguaje financiero que el CFO entienda, aunque tendrás que invertir tiempo recopilando data cuantitativa de impacto.", score: 5, type: "Lead (Bridge de lenguajes)" },
      { id: 'C', text: "**Modo Supervivencia:** Acatar las órdenes del CFO (Bootstrap, sales decks) temporalmente mientras el CEO busca VP de Producto permanente. Mantienes bajo perfil político hasta que pase la tormenta, a costa de degradar la capacidad del equipo y validar la hipótesis del CFO de que el diseño es prescindible.", score: 3, type: "Supervivencia (Pierde momentum)" }
    ],
    explanation: "El CFO ve el diseño como un centro de costos; tu trabajo es reposicionarlo como centro de inversión. **Educar al CFO con ROI** habla su idioma (dinero, riesgo, eficiencia). La **Escalación Directa al CEO** puede ser vista como insubordinación. El **Modo Supervivencia** degrada la capacidad del equipo y valida la hipótesis del CFO de que el diseño es prescindible."
  },
];
