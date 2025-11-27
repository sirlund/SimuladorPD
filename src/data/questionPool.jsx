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
      scenario: "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en la funcionalidad 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales' por una necesidad crítica de flujo de caja. El equipo de diseño está visiblemente furioso y desmotivado por el esfuerzo desperdiciado.",
      question: "¿Cuál es tu primer movimiento como Lead para gestionar esta crisis?",
      options: [
        { id: 'A', text: "Blindar al equipo emocionalmente: Te reúnes con el CEO para negociar una semana de 'transición' o 'cooldown', permitiendo que el equipo cierre el ciclo actual con calma antes de forzarlos a empezar lo nuevo.", score: 2, type: "Protector (Lento)" },
        { id: 'B', text: "Gestión de Cambio Radical: Reúnes al equipo de inmediato, validas su frustración ('Esto apesta y tienen razón'), pero explicas con total transparencia la razón financiera de supervivencia detrás del cambio. Re-enfocas la energía en el nuevo desafío hoy mismo.", score: 5, type: "Lead (Resiliencia)" },
        { id: 'C', text: "Gestión de Moral Superficial: Les das el resto del viernes libre y organizas un 'Funeral del Feature' con pizzas el lunes por la mañana para cerrar el capítulo con humor y empezar frescos.", score: 2, type: "Cultural (Táctico)" }
      ],
      explanation: "En startups, la velocidad de adaptación define la supervivencia. Un Lead no esconde la realidad ni retrasa lo inevitable (A). Valida la emoción humana, pero redirige el foco al negocio rápidamente (B)."
    },
    {
      id: 'metrics_vanity_vs_reality',
      category: "Data-Driven Design",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "En el All-Hands, el equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. Sin embargo, tus dashboards de producto muestran que la conversión final a pago (Checkout) cayó un 15% porque el tráfico nuevo es de baja calidad y rebota rápido.",
      question: "¿Cómo intervienes en la reunión sin causar una guerra política?",
      options: [
        { id: 'A', text: "Mantienes silencio en público para no avergonzar a Marketing, pero felicitas el tráfico y propones una reunión privada después para 'optimizar la conversión' en el siguiente Q.", score: 0, type: "Político (Oculta el fuego)" },
        { id: 'B', text: "Intervienes constructivamente pero con firmeza: Presentas el dato de la caída de conversión para matizar el éxito. Es vital aclarar a la empresa que 'Tráfico ≠ Dinero' y que estamos perdiendo revenue neto a pesar de las visitas.", score: 5, type: "Lead (Dueño de la Verdad)" },
        { id: 'C', text: "Te reúnes solo con el Head of Marketing antes de la reunión para acordar un discurso conjunto donde mencionen el tráfico como un 'primer paso' y la conversión como el 'desafío actual'.", score: 2, type: "Diplomático (Lento)" }
      ],
      explanation: "Una caída del 15% en ingresos es una emergencia que no puede esperar a la diplomacia. Un Lead prioriza la salud del negocio sobre la comodidad política. La transparencia radical es clave."
    },
    {
      id: 'sales_custom_demands',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "El VP de Ventas está a punto de cerrar un contrato Enterprise de $1M, vital para la ronda de inversión. El cliente exige que el Dashboard tenga su logo gigante y sus colores corporativos (que rompen la accesibilidad). Tu Design System actual no soporta 'White Labeling' ni temas.",
      question: "¿Qué decisión tomas ante esta presión?",
      options: [
        { id: 'A', text: "Te niegas rotundamente. Romper la integridad de la marca y hackear el sistema genera una deuda técnica y de diseño insostenible a largo plazo. Ofreces poner el logo pequeño en el header como máximo.", score: 0, type: "Purista (Bloquea $1M)" },
        { id: 'B', text: "Aceptas hacer un 'Hardcode' sucio aislado exclusivamente para ese cliente (CSS override), sin tocar el núcleo del sistema, y cobras ese esfuerzo técnico como un costo de 'Customización' en el contrato.", score: 5, type: "Lead (Pragmático)" },
        { id: 'C', text: "Aceptas el requerimiento, pero pones a todo el equipo de diseño e ingeniería a refactorizar el Design System durante 2 sprints para soportar 'Theming' real y hacerlo escalable.", score: 2, type: "Ingenuo (Mata el Roadmap)" }
      ],
      explanation: "Por $1M, el sistema se dobla. La opción A es suicida para la empresa. La C es idealista pero detiene el resto de la operación. La B aísla el daño técnico y captura el valor del negocio."
    },
    {
      id: 'okr_conflict_dashboard',
      category: "Gestión de OKRs",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "El Key Result crítico del trimestre es 'Aumentar la conversión de Sign-Up en un 10%'. Sin embargo, tu equipo de diseño está muy entusiasmado rediseñando el Dashboard principal porque 'se ve viejo, es inconsistente y afecta la confianza de la marca'.",
      question: "¿Cómo gestionas la asignación de recursos?",
      options: [
        { id: 'A', text: "Permites el rediseño del Dashboard como proyecto secundario (20% del tiempo, los viernes) para mantener la moral del equipo alta y mejorar la calidad visual progresivamente.", score: 2, type: "People Manager (Riesgo de Foco)" },
        { id: 'B', text: "Detienes el rediseño del Dashboard inmediatamente. Todo el esfuerzo mental y operativo debe ir al flujo de Sign-Up y Landing Page hasta que la aguja del KR se mueva. Lo 'bonito' puede esperar.", score: 5, type: "Lead (Ruthless Prioritization)" },
        { id: 'C', text: "Buscas un punto medio: Rediseñamos solo la 'Home' del Dashboard para poder sacar mejores screenshots para la Landing Page del Sign-Up, justificándolo como material de marketing.", score: 2, type: "Creativo (Solución Indirecta)" }
      ],
      explanation: "En startups, el foco lo es todo. Si un proyecto no impacta el OKR directo, es distracción disfrazada de trabajo. 'Nice to have' muere ante 'Must have'."
    },

    // --- BLOQUE 2: SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
    {
      id: 'tokens_vs_hardcode_pressure',
      category: "Ingeniería de Diseño",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Estamos a jueves y hay prisa extrema por lanzar el viernes. Los desarrolladores piden permiso para 'hardcodear' los colores hexadecimales nuevos en el CSS en lugar de configurar los Design Tokens, prometiendo arreglarlo después.",
      question: "¿Cuál es tu postura ante la deuda técnica?",
      options: [
        { id: 'A', text: "Permitirlo por la urgencia, pero con la condición estricta de crear un ticket de 'Refactor CSS' en Jira para el Sprint siguiente y asignarle prioridad alta.", score: 2, type: "Pragmático (Riesgo Alto)" },
        { id: 'B', text: "Negarse. Hardcodear impide la escalabilidad (Dark Mode, Cambios de Branding) y el costo de refactorizar luego es 10x mayor que hacerlo bien hoy. Te sientas con ellos a configurar los alias básicos ahora mismo.", score: 5, type: "Lead (Visión Sistémica)" },
        { id: 'C', text: "Sugerir un punto medio: Que usen variables SCSS genéricas ($blue-500) en lugar de hex codes, para que al menos sea mantenible aunque no sea semántico.", score: 2, type: "Operativo (Parche)" }
      ],
      explanation: "La opción A es la tentación clásica, pero un Lead sabe que ese ticket de refactor nunca se priorizará. Hay deudas sistémicas (como hardcoding) que no se deben tomar ni en crisis."
    },
    {
      id: 'legacy_ui_refactor_strategy',
      category: "Estrategia de Migración",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "El producto tiene 4 estilos de botones diferentes conviviendo (Legacy). Los devs dicen que unificar todo a los nuevos componentes romperá vistas antiguas en Angular que nadie quiere tocar por miedo a bugs.",
      question: "¿Cuál es tu estrategia de limpieza?",
      options: [
        { id: 'A', text: "Aplicar el nuevo sistema solo en las nuevas features ('Forward Only'). Aceptamos la inconsistencia visual temporalmente para no frenar el delivery.", score: 2, type: "Senior (Consistente hacia adelante)" },
        { id: 'B', text: "Estrategia de 'Boy Scout': Acordar con ingeniería que cada vez que se toque un archivo legacy por una feature nueva, es obligatorio actualizar sus componentes. Migración progresiva y oportunista.", score: 5, type: "Lead (Incremental)" },
        { id: 'C', text: "Planificar un 'Design Debt Sprint' o 'Visual QA Week' al final del trimestre donde se paraliza el desarrollo de features para arreglar el CSS globalmente.", score: 0, type: "Idealista (Difícil de vender)" }
      ],
      explanation: "Los 'Refactor Sprints' (C) rara vez se aprueban porque no traen revenue. La estrategia oportunista (B) es la única sostenible para pagar deuda técnica masiva sin detener la fábrica."
    },
    {
      id: 'component_complexity_detach',
      category: "Arquitectura de Sistemas",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "El componente 'Card' en Figma tiene 150 variantes y propiedades complejas anidadas. El equipo de diseño se queja de que es lento y difícil de usar, por lo que han empezado a hacer 'detach' para trabajar más rápido.",
      question: "¿Cómo solucionas este problema de adopción?",
      options: [
        { id: 'A', text: "Organizar un taller de capacitación obligatorio para re-enseñar el uso correcto del componente y prohibir estrictamente el 'detach' en los archivos finales.", score: 0, type: "Policía (Culpa al usuario)" },
        { id: 'B', text: "Auditar y simplificar el componente usando 'Component Properties' modernas (booleanos, text props) para reducir la combinatoria. Si el sistema es difícil de usar, el sistema está mal diseñado.", score: 5, type: "Lead (Optimización)" },
        { id: 'C', text: "Dividir la 'Card' en 3 componentes separados (Card-News, Card-User, Card-Product) para reducir la complejidad individual de cada uno.", score: 2, type: "Fragmentación (Parche)" }
      ],
      explanation: "Culpar al usuario (A) es mal diseño. Un sistema complejo incentiva el abandono. Un Lead optimiza la herramienta para facilitar el comportamiento deseado (B)."
    },
    {
      id: 'mobile_first_habit_change',
      category: "Cultura de Diseño",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      scenario: "El equipo tiene el mal hábito de diseñar siempre en lienzos Desktop (1440px) y luego 'adaptar' a la fuerza a Mobile al final, resultando en malas experiencias móviles. La data dice que el 70% del tráfico es móvil.",
      question: "¿Cómo cambias este comportamiento de raíz?",
      options: [
        { id: 'A', text: "Establecer una regla de proceso: 'No se aprueba ningún diseño en Critique si no se presenta primero la versión móvil'.", score: 2, type: "Policía (Reglas)" },
        { id: 'B', text: "Cambiar el entorno: Actualizar los templates base de Figma para que el frame por defecto al crear un archivo sea 360px, forzando la priorización de contenido desde la herramienta.", score: 5, type: "Lead (Nudge System)" },
        { id: 'C', text: "Hacer un workshop educativo sobre las ventajas de Mobile First y compartir artículos de mejores prácticas.", score: 0, type: "Teórico (Ineficaz)" }
      ],
      explanation: "Cambiar el entorno (B) es más efectivo que imponer reglas (A) o educar (C). Si el canvas empieza chico, el diseñador se ve obligado físicamente a priorizar el contenido."
    },

    // --- BLOQUE 3: LIDERAZGO, CULTURA & PERSONAS ---
    {
      id: 'senior_toxic_genius_feedback',
      category: "Gestión de Talento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño.",
      question: "¿Cómo procedes con este perfil?",
      options: [
        { id: 'A', text: "Lo mantienes alejado de las reuniones grupales y lo usas como 'Lobo Solitario' para tareas críticas individuales donde su velocidad es vital.", score: 0, type: "Habilita Toxicidad" },
        { id: 'B', text: "Inicias un 'Performance Improvement Plan' (PIP) enfocado exclusivamente en soft skills y comunicación: O cambia su trato en 30 días o se va, sin importar su output técnico.", score: 5, type: "Lead (Guardián de Cultura)" },
        { id: 'C', text: "Le pides en privado que sea más amable y tratas de mediar tú personalmente en sus entregas con desarrollo para suavizar el roce.", score: 2, type: "Niñera (Parche)" }
      ],
      explanation: "El costo oculto de un 'Genio Tóxico' es la renuncia de 3 desarrolladores buenos. Un Lead sabe que la cultura es el sistema operativo del equipo; si tiene virus, se formatea o se elimina."
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
        { id: 'C', text: "Le das una pista sutil ('¿Has pensado en cómo se verá esto en móvil?') esperando que se dé cuenta solo.", score: 2, type: "Coach Pasivo" }
      ],
      explanation: "Si el error no es catastrófico para el negocio, el aprendizaje vivido vale más que la perfección inmediata. Corregirle todo impide que desarrolle criterio propio."
    },
    {
      id: 'burnout_detection_action',
      category: "Bienestar del Equipo",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      scenario: "Notas que tu mejor diseñador está respondiendo mensajes de Slack a las 10 PM sistemáticamente y se nota cínico e irritable en las reuniones de la mañana.",
      question: "¿Qué acción tomas?",
      options: [
        { id: 'A', text: "Le agradeces públicamente en la reunión el 'compromiso extra' para que sienta que su esfuerzo es valorado y tenga un boost de moral.", score: 0, type: "Fomenta el Vicio" },
        { id: 'B', text: "Intervención privada inmediata: Fuerzas una revisión de su carga, quitas tareas no críticas y le ordenas tomarse la tarde libre. Diagnosticas si es un problema de proceso o personal.", score: 5, type: "Lead (Cuidado Activo)" },
        { id: 'C', text: "Le sugieres amablemente que instale una app de gestión de tiempo y que trate de apagar las notificaciones.", score: 2, type: "Superficial" }
      ],
      explanation: "El burnout es un riesgo de pérdida de activo capital. Agradecer el sobretrabajo (A) valida la cultura tóxica. El líder debe intervenir estructuralmente para proteger al equipo."
    },
    {
      id: 'hiring_profile_gap_logic',
      category: "Contratación Estratégica",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      scenario: "Tienes presupuesto para un rol. Tu equipo actual es muy fuerte visualmente (UI) pero débil en lógica de negocio y flujos complejos. Llega un candidato con portfolio visual 'promedio' pero con experiencia increíble en banca/fintech compleja.",
      question: "¿Cuál es tu decisión de contratación?",
      options: [
        { id: 'A', text: "No contratar. Como equipo de diseño de alta calidad, no podemos bajar la vara visual. Seguimos buscando al 'Unicornio' que tenga ambos.", score: 0, type: "Irrealista" },
        { id: 'B', text: "Contratar. Balancear el equipo es prioridad. Los Seniors visuales pueden pulir su UI, pero él resolverá los problemas lógicos que hoy nos bloquean.", score: 5, type: "Lead (Team Building)" },
        { id: 'C', text: "Contratar un freelance visual para apoyar mientras sigues buscando al candidato perfecto.", score: 2, type: "Indeciso" }
      ],
      explanation: "Contratas para cubrir brechas y diversificar habilidades, no para clonar lo que ya tienes. Un equipo de puros artistas visuales fallará en un producto B2B complejo."
    },

    // --- BLOQUE 4: RESEARCH, USUARIOS & ÉTICA ---
    {
      id: 'research_ignore_darkmode',
      category: "User Research vs Negocio",
      icon: <Users className="w-6 h-6 text-pink-500" />,
      scenario: "Hiciste un research que dice claramente que a tus usuarios NO les interesa el 'Dark Mode'. Sin embargo, el CEO insiste en lanzarlo porque 'la competencia lo tiene' y ventas dice que ayuda a cerrar demos.",
      question: "¿Qué haces con la evidencia?",
      options: [
        { id: 'A', text: "Te niegas a diseñarlo, citando la evidencia de usuario como tu defensa. 'No debemos construir lo que el usuario no quiere'.", score: 2, type: "Mártir del Usuario" },
        { id: 'B', text: "Aceptas diseñarlo. Entiendes que a veces la 'Paridad de Features' es una estrategia de ventas válida (Hygiene Factor) aunque el usuario final no lo pida explícitamente.", score: 5, type: "Lead (Visión de Mercado)" },
        { id: 'C', text: "Propones hacer un test A/B más grande y costoso para intentar convencer al CEO de nuevo con más datos.", score: 2, type: "Tercamente Costoso" }
      ],
      explanation: "El 'User Centricity' dogmático puede cegarte a la estrategia competitiva. Si ayuda a Ventas a cerrar el trato, tiene valor de negocio, aunque el usuario final sea indiferente."
    },
    {
      id: 'accessibility_legal_threat_action',
      category: "Accesibilidad & Riesgo",
      icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
      scenario: "Llega una amenaza legal de un cliente importante en USA porque el sitio no cumple con WCAG (Accesibilidad). El equipo está a tope con el Roadmap del trimestre y no hay tiempo.",
      question: "¿Cómo respondes a la emergencia?",
      options: [
        { id: 'A', text: "Auditoría de Emergencia: Pausas el Roadmap, armas un 'Tiger Team' y arreglas los problemas críticos (P0) en 1 sprint, comunicando el retraso de features a los stakeholders.", score: 5, type: "Lead (Gestión de Riesgo)" },
        { id: 'B', text: "Intentas arreglarlo 'en los bordes' del sprint actual, pidiendo horas extra al equipo, para no afectar las fechas de entrega comprometidas.", score: 0, type: "Iluso (Falla en ambos)" },
        { id: 'C', text: "Contratas una agencia externa de accesibilidad para que lo arregle en paralelo.", score: 2, type: "Válido (si hay $), pero pierde know-how interno" }
      ],
      explanation: "Una amenaza legal es un riesgo existencial para la empresa. 'Intentar meterlo en el sprint' (B) garantiza fallar en ambas cosas. Se requiere acción decisiva y re-priorización (A)."
    },
    {
      id: 'dark_pattern_retention_ethics',
      category: "Ética de Diseño",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "Debido a una crisis de retención, Marketing te pide esconder el botón de 'Cancelar Suscripción' o hacerlo muy difícil de encontrar para reducir el Churn artificialmente.",
      question: "¿Cuál es tu contra-propuesta?",
      options: [
        { id: 'A', text: "Negarse rotundamente a implementar Dark Patterns por principios éticos, escalando el tema a RRHH si es necesario.", score: 2, type: "Bloqueador (Sin alternativa)" },
        { id: 'B', text: "Diseñar un flujo de 'Offboarding Inteligente': Preguntar el motivo de salida y ofrecer automáticamente una pausa, descuento o downgrade, pero dejando la salida clara al final.", score: 5, type: "Lead (Retención por Valor)" },
        { id: 'C', text: "Aceptas hacerlo difícil (varios clicks y textos confusos) pero técnicamente posible, para cumplir con el KPI de Marketing.", score: 0, type: "Cómplice" }
      ],
      explanation: "Opción A te hace ver difícil y no resuelve el problema del negocio (Churn). Opción B alinea tu ética con el objetivo del negocio: retener usuarios ofreciendo valor real, no trampas."
    },
    {
      id: 'guerrilla_testing_speed',
      category: "Validación Ágil",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      scenario: "Tienes una duda grande sobre si el texto de un botón se entiende, pero es una feature pequeña y no hay tiempo para research formal.",
      question: "¿Cómo tomas la decisión rápidamente?",
      options: [
        { id: 'A', text: "Usar tu criterio experto y mantener la consistencia con el resto del sitio.", score: 2, type: "Ego" },
        { id: 'B', text: "5-Second Test en Slack: Muestras la pantalla a 5 colegas de Ventas/Finanzas y les preguntas '¿Qué hace este botón?'.", score: 5, type: "Lead (Data-Informed)" },
        { id: 'C', text: "Revisar qué hacen los competidores directos (Benchmarking) e imitarlos.", score: 2, type: "Imitación (Sin contexto)" }
      ],
      explanation: "El benchmarking (C) es peligroso sin conocer el contexto del otro. Un test de 5 segundos (B) valida TU contexto específico de forma rápida y barata."
    },

    // --- BLOQUE 5: PROCESO, COLABORACIÓN & HANDOFF ---
    {
      id: 'dev_handoff_war_library',
      category: "Colaboración con Ingeniería",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Ingeniería rechaza tus diseños diciendo que son 'imposibles de implementar' en el tiempo dado. Tú sabes que son estándares web, pero ellos usan una librería UI vieja y limitada.",
      question: "¿Cómo desbloqueas la situación?",
      options: [
        { id: 'A', text: "Insistes en el diseño. La deuda técnica de ellos no debe limitar la calidad del producto y deben esforzarse más.", score: 0, type: "Silo (Guerra)" },
        { id: 'B', text: "Negociación Incremental: Diseñas una versión 'V1' simplificada que se ajuste a su librería actual para lanzar ya, pero pactas una fecha concreta para actualizar la tecnología.", score: 5, type: "Lead (Negociador)" },
        { id: 'C', text: "Te sientas a programarlo con ellos (CSS/React) para demostrarles que sí se puede hacer.", score: 2, type: "Heroico (No escalable)" }
      ],
      explanation: "Tener la razón no sirve de nada si no se shippea el producto. La opción B entrega valor hoy y crea un roadmap para mejorar mañana, construyendo puentes en lugar de quemarlos."
    },
    {
      id: 'copy_late_change_legal',
      category: "Content Strategy",
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      scenario: "A 2 días del lanzamiento, el equipo Legal cambia obligatoriamente todos los textos del Onboarding. Ahora son párrafos legales de 5 líneas que rompen todo el diseño móvil.",
      question: "¿Cuál es la solución más rápida y efectiva?",
      options: [
        { id: 'A', text: "Rediseñar las pantallas urgentemente para acomodar el texto, trabajando horas extra.", score: 2, type: "Reactivo (Burnout)" },
        { id: 'B', text: "Pelear con Legal explicando que nadie lee esos textos y que afectan la conversión.", score: 0, type: "Batalla Perdida" },
        { id: 'C', text: "Solución de UI: Convertir los textos legales en un link 'Leer términos' o usar un patrón de 'Progressive Disclosure' (Acordeón/Modal), manteniendo el flujo visual limpio.", score: 5, type: "Lead (Problem Solving)" }
      ],
      explanation: "No puedes ganarle a Legal en temas de riesgo, y no tienes tiempo de rediseñar todo (A). Usa patrones de UI inteligentes (C) para esconder la complejidad sin incumplir la norma."
    },
    {
      id: 'design_committee_control',
      category: "Gestión de Stakeholders",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      scenario: "En una reunión de revisión, 8 personas empiezan a opinar subjetivamente sobre el color del botón ('No me gusta el azul', 'Hazlo más pop'). Se vuelve un 'Diseño por Comité'.",
      question: "¿Cómo retomas el control de la sala?",
      options: [
        { id: 'A', text: "Tomas nota de todo diligentemente y prometes explorar todas las opciones para complacerlos.", score: 0, type: "Pasivo (Frankenstein)" },
        { id: 'B', text: "Rediriges la discusión: Recuerdas el OBJETIVO de la sesión y el PROBLEMA del usuario. Pides feedback sobre si la solución resuelve el problema, no si les gusta estéticamente.", score: 5, type: "Lead (Facilitador)" },
        { id: 'C', text: "Dices firmemente 'Yo soy el experto en diseño aquí, confíen en mi criterio'.", score: 2, type: "Ego (Defensivo)" }
      ],
      explanation: "'Me gusta' es irrelevante. 'Resuelve el problema' es lo único que importa. Ancla la discusión en objetivos de negocio para eliminar la subjetividad."
    },
    {
      id: 'tool_debate_figma_penpot',
      category: "Design Ops & Herramientas",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      scenario: "Parte del equipo quiere migrar de Figma a Penpot (Open Source) por ideología y costos. Tú tienes un Design System maduro en Figma que funciona bien.",
      question: "¿Qué criterio usas para decidir?",
      options: [
        { id: 'A', text: "Quedarse en Figma simplemente porque es el estándar de la industria y es lo que todos saben usar.", score: 2, type: "Dogmático" },
        { id: 'B', text: "Evaluar ROI y 'Switching Cost': Calcular las horas muertas de migración + reconstrucción vs el ahorro de licencias. Si la migración detiene el roadmap 2 meses, no es viable hoy.", score: 5, type: "Lead (Visión de Negocio)" },
        { id: 'C', text: "Hacer una votación democrática en el equipo para que se sientan escuchados.", score: 0, type: "Populista" }
      ],
      explanation: "Las herramientas no son religión, son inversiones. El costo de migración (Switching cost) y la pérdida de velocidad suelen pesar más que el ahorro marginal de licencias."
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
        { id: 'C', text: "Les pides que te pregunten por Slack antes de empezar cualquier cosa.", score: 0, type: "Cuello de Botella" }
      ],
      explanation: "En remoto, la documentación clara y el estado explícito son vitales. Depender de preguntas síncronas (C) bloquea al equipo. Loom + Estructura (B) escala."
    },
    {
      id: 'meeting_overload_protection',
      category: "Productividad",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      scenario: "Tu equipo se queja de que pasan 6 horas al día en reuniones (Dailies, Syncs, Reviews) y solo tienen 2 horas para diseñar realmente.",
      question: "¿Qué medida de choque tomas?",
      options: [
        { id: 'A', text: "Pedir a los PMs que intenten hacer las reuniones más cortas (30 min).", score: 2, type: "Tímido (Poco impacto)" },
        { id: 'B', text: "Instituir 'No-Meeting Days' (ej: Martes y Jueves) a nivel de calendario de equipo y empoderarlos para declinar reuniones que no tengan agenda clara.", score: 5, type: "Lead (Defensor del Foco)" },
        { id: 'C', text: "Sugerir al equipo que bloqueen tiempo de diseño en sus calendarios personales.", score: 0, type: "Transfiere la culpa" }
      ],
      explanation: "El trabajo creativo requiere flujo (Deep Work) ininterrumpido. El individuo tiene poco poder político para rechazar reuniones; el líder debe crear la estructura (B) que lo permita."
    },
    {
      id: 'ai_strategy_ux',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Hay presión del Board para 'poner AI' en el producto. El PM sugiere un chatbot genérico en la home. Tú crees que es una mala experiencia.",
      question: "¿Cuál es tu contra-propuesta de valor?",
      options: [
        { id: 'A', text: "Aceptar el chatbot pero diseñarlo lo más limpio posible para que no moleste.", score: 2, type: "Complaciente" },
        { id: 'B', text: "Proponer 'Invisible AI': Analizar tareas repetitivas del usuario (ej: categorizar gastos, data entry) y usar la AI para automatizarlas silenciosamente. Eliminar el 'trabajo sucio' (drudgery).", score: 5, type: "Lead (User-Centric AI)" },
        { id: 'C', text: "Proponer usar AI para generar imágenes de marketing dentro de la app.", score: 2, type: "Gimmick" }
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
    }
  ];
};
