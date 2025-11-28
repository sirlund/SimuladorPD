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
    },

    // --- BLOQUE 7: CRISIS DE PRODUCTO & PRESIÓN DE ROADMAP ---
    {
      id: 'churn_spike_investigation',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "El dashboard de analytics muestra un churn del 40% en los últimos 7 días. El equipo de Customer Success culpa al rediseño del flujo de pago que lanzaste hace 2 semanas. Hay pánico generalizado en la empresa.",
      question: "¿Cuál es tu primer movimiento?",
      options: [
        { id: 'A', text: "Revertir inmediatamente el diseño nuevo y volver al anterior mientras investigas qué pasó.", score: 2, type: "Reactivo (Puede ser prematuro)" },
        { id: 'B', text: "Análisis de Cohorte Urgente: Segmentar el churn por fecha de registro (nuevos vs antiguos), flujo usado (nuevo vs legacy) y analizar heat maps para identificar el punto exacto de abandono antes de concluir causas.", score: 5, type: "Lead (Data-First)" },
        { id: 'C', text: "Convocar una reunión de emergencia con todos los stakeholders para generar hipótesis en grupo.", score: 0, type: "Comité de Crisis (Caos)" }
      ],
      explanation: "Revertir sin evidencia (A) es pánico corporativo. El análisis estructurado (B) te permite identificar si el problema es el diseño, un bug técnico, un cambio de precio o algo externo."
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
        { id: 'C', text: "Proponer un MVP rápido de 'Exportar a Excel' que resuelva el 80% del caso de uso sin construir toda la infraestructura de reportes.", score: 2, type: "Pragmático (Parche)" }
      ],
      explanation: "Copiar features sin entender el contexto es la trampa clásica de producto reactivo. La opción B valida el problema real y permite innovar en la solución."
    },
    {
      id: 'investor_demo_cosmetics',
      category: "Gestión de Stakeholders",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      scenario: "Hay un pitch con inversores en 3 días. El CEO te pide 'embellecer' el dashboard para la demo: gráficos más 'wow', animaciones, colores vibrantes. El producto real es funcional pero visualmente sobrio.",
      question: "¿Qué balanceas entre lo real y lo aspiracional?",
      options: [
        { id: 'A', text: "Diseñas una versión 'Demo Mode' completamente falsa con datos ficticios hermosos que nunca se usará en producción.", score: 0, type: "Fraude (Deuda ética)" },
        { id: 'B', text: "Polish Estratégico: Mejoras solo lo que está en el roadmap próximo (Q actual) para que la demo muestre la dirección real del producto, no un espejismo.", score: 5, type: "Lead (Honestidad Aspiracional)" },
        { id: 'C', text: "Te niegas a 'maquillar' el producto. Lo que ven los inversores debe ser exactamente lo que usan los clientes hoy.", score: 2, type: "Purista (Pierde el deal)" }
      ],
      explanation: "Una demo puede mostrar visión de futuro (B), pero crear un producto falso (A) es una bomba de tiempo. La opción C ignora que las inversiones se cierran con narrativa y momentum."
    },
    {
      id: 'technical_debt_explosion',
      category: "Arquitectura de Sistemas",
      icon: <AlertOctagon className="w-6 h-6 text-orange-600" />,
      scenario: "El CTO declara que el frontend está tan roto técnicamente que propone pausar features por 1 trimestre completo para hacer un 'Gran Refactor' de la arquitectura.",
      question: "¿Cuál es tu posición como líder de diseño?",
      options: [
        { id: 'A', text: "Apoyas el refactor completo. Es momento de pagar la deuda técnica antes de que colapse todo.", score: 0, type: "Ingenuo (Suicidio de negocio)" },
        { id: 'B', text: "Propones 'Strangler Fig Pattern': Refactorizar módulo por módulo mientras se siguen entregando features en paralelo, aceptando convivencia temporal de sistemas.", score: 5, type: "Lead (Incremental)" },
        { id: 'C', text: "Defiendes al equipo de producto: No se puede parar el roadmap. Que ingeniería arregle su desorden sin afectar el negocio.", score: 2, type: "Silo (Irresponsable)" }
      ],
      explanation: "Pausar el roadmap por un trimestre mata el revenue y la moral. La opción B equilibra la deuda técnica con la supervivencia del negocio."
    },

    // --- BLOQUE 8: DATA, MÉTRICAS & EXPERIMENTACIÓN ---
    {
      id: 'ab_test_interpretation_bias',
      category: "Data-Driven Design",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "Corres un A/B test del checkout. La variante B aumenta las conversiones un 8% (estadísticamente significativo), pero los usuarios escriben feedback negativo diciendo que 'se siente confuso' y 'no confían'.",
      question: "¿Qué decisión tomas con esta data contradictoria?",
      options: [
        { id: 'A', text: "Shippear la variante B. Los datos cuantitativos superan a las opiniones subjetivas. La conversión es el norte.", score: 2, type: "Quantitative Dogma" },
        { id: 'B', text: "Investigación Profunda: Analizar qué segmento de usuarios convierte más (¿nuevos impulsivos?) y cuál abandona (¿clientes recurrentes?). Si estás optimizando para transacciones de corto plazo pero destruyendo LTV, es una trampa.", score: 5, type: "Lead (Pensamiento Sistémico)" },
        { id: 'C', text: "Quedarte con la variante A original. La confianza es más importante que las conversiones inmediatas.", score: 2, type: "Conservative (Deja dinero sobre la mesa)" }
      ],
      explanation: "Un incremento de conversión puede esconder una optimización para el comportamiento equivocado (compras impulsivas vs clientes de calidad). La opción B busca entender la calidad del cambio."
    },
    {
      id: 'vanity_metric_viral_growth',
      category: "Métricas de Producto",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      scenario: "Diseñas un feature de 'Compartir en Redes Sociales' que genera 50K shares en la primera semana. Marketing celebra. Pero analizas la data: solo el 2% de los que hacen click realmente crean cuenta.",
      question: "¿Cómo reportas el resultado del feature?",
      options: [
        { id: 'A', text: "Celebras con Marketing. 50K impresiones de marca tienen valor aunque no conviertan directamente.", score: 0, type: "Vanity Metric Trap" },
        { id: 'B', text: "Pivot del Feature: Rediseñas el flow compartido para que sea 'Invite-Only' (con incentivo para quien invita), cambiando de viralidad pasiva a Growth Loop activo.", score: 5, type: "Lead (Optimización de Valor)" },
        { id: 'C', text: "Matas el feature. Si no convierte, solo genera costo de mantenimiento sin ROI.", score: 2, type: "Despiadado (Pierde oportunidad)" }
      ],
      explanation: "Los shares sin conversión son ruido. La opción B transforma un vanity metric en un growth loop funcional con incentivos alineados."
    },
    {
      id: 'sample_size_impatience',
      category: "Validación Ágil",
      icon: <Timer className="w-6 h-6 text-blue-500" />,
      scenario: "Lanzas un A/B test un lunes. El miércoles, la variante B está ganando por 12% pero el tamaño de muestra es de solo 300 usuarios (necesitas 2000 para significancia estadística). El PM quiere declararlo ganador ya.",
      question: "¿Cedes a la presión o esperas?",
      options: [
        { id: 'A', text: "Esperas hasta alcanzar significancia estadística completa, aunque tome 2 semanas más.", score: 2, type: "Científico (Lento)" },
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
      scenario: "Product quiere un onboarding de 7 pasos para 'educar al usuario'. Tú ves en la data que el 70% abandona en el paso 3. Argumentan que 'los usuarios necesitan entender el valor'.",
      question: "¿Cuál es tu contra-argumento?",
      options: [
        { id: 'A', text: "Aceptas los 7 pasos pero haces el diseño más atractivo con ilustraciones y microinteracciones para reducir la fricción.", score: 0, type: "Lipstick on a pig" },
        { id: 'B', text: "Onboarding Progresivo: Diseñas un flujo mínimo de 2 pasos obligatorios para llegar al 'Aha Moment' rápido, y contextualizas el resto con tooltips y tutoriales in-app durante el uso real.", score: 5, type: "Lead (Time-to-Value)" },
        { id: 'C', text: "Propones hacer los 7 pasos opcionales (skip button) para que el usuario decida.", score: 2, type: "Parche (No resuelve abandono)" }
      ],
      explanation: "El mejor onboarding es el que no existe. La opción B prioriza llevar al usuario al valor (Aha Moment) lo antes posible y educa en contexto."
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
      scenario: "Tienes una tabla de 10,000 registros de transacciones. Marketing quiere 'Infinite Scroll' porque se ve moderno. Finanzas quiere paginación porque necesitan navegar a la página 300 directamente.",
      question: "¿Qué patrón eliges y por qué?",
      options: [
        { id: 'A', text: "Infinite Scroll. Es el estándar de apps modernas y elimina fricciones.", score: 0, type: "Trend Follower (Ignora el contexto)" },
        { id: 'B', text: "Híbrido Contextual: Infinite Scroll con un botón de 'Ir a página...' oculto en un menú avanzado para power users. Optimizas para el 90% (navegación secuencial) sin romper el 10% (búsqueda específica).", score: 5, type: "Lead (Context-Aware)" },
        { id: 'C', text: "Paginación tradicional. Priorizar la funcionalidad sobre la estética.", score: 2, type: "Conservador (UX del 2010)" }
      ],
      explanation: "Infinite scroll es terrible para navegación no-lineal (B2B, finanzas, legal). La opción B respeta ambos Jobs-to-be-Done sin forzar un patrón inadecuado."
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
      scenario: "El analytics muestra que solo el 3% del tráfico viene de tablets. El diseño actual se rompe en ese breakpoint (iPad landscape). El equipo de QA lo reporta como bug crítico.",
      question: "¿Cómo priorizas este issue?",
      options: [
        { id: 'A', text: "Arreglarlo inmediatamente. 'Funcionar en todos los dispositivos' es parte de la calidad básica del producto.", score: 0, type: "Perfeccionista (Mal ROI)" },
        { id: 'B', text: "Análisis de Impacto: Si ese 3% representa clientes Enterprise de alto valor, se arregla. Si es tráfico casual de bajo valor, se backlogea como P3.", score: 5, type: "Lead (Value-Based Priority)" },
        { id: 'C', text: "Arreglar solo si alguien se queja explícitamente via soporte.", score: 2, type: "Reactivo" }
      ],
      explanation: "No todos los bugs son iguales. El % de tráfico no cuenta toda la historia: ¿quién es ese 3%? La opción B prioriza por impacto en el negocio, no por principios."
    },
    {
      id: 'gesture_vs_button_mobile',
      category: "Interacción Móvil",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      scenario: "Diseñas un flujo donde el usuario puede 'swipe left' para archivar un item (como email). En los tests, el 40% de usuarios no descubre el gesto y busca un botón de archivar.",
      question: "¿Cómo resuelves la discoverability?",
      options: [
        { id: 'A', text: "Mantener solo el gesto. Agregar un tooltip de 'Desliza para archivar' la primera vez que entran.", score: 2, type: "Coach (Fricción inicial)" },
        { id: 'B', text: "Diseño Dual: Mantener el swipe para power users, pero agregar también un ícono de menú (tres dots) con la acción visible. Optimizar para ambos niveles de habilidad.", score: 5, type: "Lead (Progressive Disclosure)" },
        { id: 'C', text: "Eliminar el gesto y usar solo botones. Priorizar la claridad sobre la elegancia.", score: 2, type: "Conservador (Pierde velocidad)" }
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
        { id: 'B', text: "Mantener la estética actual y agregar un 'High Contrast Mode' opcional en Settings para usuarios que lo necesiten.", score: 2, type: "Compromiso (Fragmenta la experiencia)" },
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
        { id: 'C', text: "Aceptas el linear de 200ms. Las batallas pequeñas no valen la pena.", score: 2, type: "Resignado (Pierde calidad)" }
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
        { id: 'A', text: "Aceptas hacerlo para mantener buena relación con Product. Total, son solo 2 días.", score: 0, type: "Complaciente (Mata el Sprint)" },
        { id: 'B', text: "Visibilidad del Iceberg: Le muestras el breakdown (diseño, estados de error, casos edge, handoff, QA, responsive). Le ofreces meterlo al siguiente sprint o quitar algo del actual.", score: 5, type: "Lead (Educador de Proceso)" },
        { id: 'C', text: "Te niegas rotundamente. 'Mid-sprint changes' están prohibidos por proceso Agile.", score: 2, type: "Dogmático (Inflexible)" }
      ],
      explanation: "Decir solo 'no' (C) crea fricción. La opción B hace visible el trabajo oculto y empodera al PM para tomar decisiones informadas de trade-offs."
    },
    {
      id: 'qa_reject_pixel_perfect',
      category: "Quality Assurance",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      scenario: "QA rechaza el feature porque 'el espaciado del botón es de 14px en lugar de 16px'. Faltan 2 días para el deadline de lanzamiento.",
      question: "¿Cómo clasificas la severidad de este bug?",
      options: [
        { id: 'A', text: "Bloqueador (P0). La inconsistencia visual rompe la percepción de calidad. Se arregla antes de lanzar.", score: 0, type: "Pixel-Peeper (Pierde el deadline)" },
        { id: 'B', text: "Menor (P3): Se documenta para arreglarlo en la próxima iteración, pero no bloquea el lanzamiento. La funcionalidad funciona, el spacing no afecta usabilidad.", score: 5, type: "Lead (Impact-Based Triage)" },
        { id: 'C', text: "Le pides a QA que sea menos estricto y se enfoque en bugs funcionales.", score: 2, type: "Evasivo (Pierde credibilidad)" }
      ],
      explanation: "Hay una diferencia entre 'imperfecto' y 'roto'. Un spacing de 2px no impacta al usuario final. La opción B prioriza lanzar valor sobre perfección cosmética."
    },
    {
      id: 'documentation_handoff_speed',
      category: "Design Ops",
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      scenario: "Hay presión extrema por velocidad. El PM te pregunta si puedes 'saltarte la documentación de Figma' y solo hacer una llamada rápida con el dev para explicar el diseño verbalmente.",
      question: "¿Qué riesgos evalúas?",
      options: [
        { id: 'A', text: "Aceptas. La documentación es overhead burocrático. La comunicación directa es más ágil.", score: 0, type: "Cowboy (Deuda de conocimiento)" },
        { id: 'B', text: "Documentación Mínima Viable: Anotas los specs críticos (medidas, estados, lógica) directamente en Figma con Auto Layout visible, pero skipeas el documento Word extenso. Grabas un Loom de 3 min.", score: 5, type: "Lead (Async-First)" },
        { id: 'C', text: "Insistes en hacer la documentación completa como dicta el proceso. No se negocia.", score: 2, type: "Burocrático (Lento)" }
      ],
      explanation: "La documentación cero (A) genera bugs y re-work. La documentación excesiva (C) mata la velocidad. La opción B balancea: lo suficiente para no depender de tu memoria."
    },

    // --- BLOQUE 12: CULTURA, FEEDBACK & MENTORÍA ---
    {
      id: 'critique_session_dominance',
      category: "Cultura de Diseño",
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      scenario: "En las sesiones de Critique, siempre hablan los mismos 2 diseñadores seniors. Los juniors nunca opinan y solo asienten con la cabeza.",
      question: "¿Cómo balanceas las voces en la sala?",
      options: [
        { id: 'A', text: "Dejar que fluya naturalmente. Los que tienen más experiencia naturalmente tendrán más que decir.", score: 0, type: "Pasivo (Mata la diversidad)" },
        { id: 'B', text: "Facilitación Activa: Implementar 'Round Robin' donde cada persona debe dar al menos 1 feedback antes de que alguien pueda hablar dos veces. Preguntas dirigidas a los silenciosos.", score: 5, type: "Lead (Inclusive Facilitator)" },
        { id: 'C', text: "Hablar en privado con los juniors después para preguntarles qué piensan.", score: 2, type: "Band-aid (No cambia la dinámica)" }
      ],
      explanation: "La diversidad cognitiva muere si solo hablan los seniors. La facilitación activa (B) democratiza el espacio sin forzar participación incómoda."
    },
    {
      id: 'feedback_sandwich_method',
      category: "Mentoría & Crecimiento",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Un junior presenta un diseño con un error fundamental de jerarquía visual. Tienes que dar feedback correctivo en la sesión grupal.",
      question: "¿Cómo estructuras el feedback?",
      options: [
        { id: 'A', text: "Método Sándwich: Empiezas con algo positivo, luego la crítica, luego otro positivo para suavizar.", score: 2, type: "Diplomático (Confuso)" },
        { id: 'B', text: "Feedback Directo pero Específico: 'La jerarquía actual hace que el CTA se pierda. Si movemos X aquí y aumentamos el contrast Y, guiamos mejor la atención. ¿Probamos eso?'.", score: 5, type: "Lead (Constructivo y Claro)" },
        { id: 'C', text: "Preguntas Socráticas: '¿Cuál es el elemento más importante de esta pantalla? ¿Dónde va tu ojo primero?'.", score: 2, type: "Coach (Lento para grupos)" }
      ],
      explanation: "El 'sándwich' diluye el mensaje. El feedback directo (B) con solución propuesta es más útil y respetuoso que rodeos. Las preguntas socráticas (C) funcionan 1-on-1, no en grupo."
    },
    {
      id: 'imposter_syndrome_senior',
      category: "Bienestar del Equipo",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Una diseñadora senior te confiesa en privado que siente que 'no es suficientemente buena' comparándose con los portfolios de Dribbble y está considerando renunciar.",
      question: "¿Cómo la reubicas mentalmente?",
      options: [
        { id: 'A', text: "Validación emocional: Le dices que es excelente, que no se compare, que su trabajo es valioso.", score: 2, type: "Emocional (Sin raíz)" },
        { id: 'B', text: "Reframe de Impacto: Le muestras métricas concretas de cómo su trabajo movió el negocio (conversión, revenue, NPS). Le recuerdas que Dribbble es arte, no producto. El valor está en el impacto, no en los likes.", score: 5, type: "Lead (Recontextualización)" },
        { id: 'C', text: "Le sugieres que tome un curso de ilustración o animación para mejorar sus skills visuales.", score: 0, type: "Refuerza el síndrome" }
      ],
      explanation: "El síndrome del impostor se alimenta de comparaciones irrelevantes. La opción B reconecta a la persona con su valor real medible en el contexto correcto."
    },
    {
      id: 'promotion_readiness_debate',
      category: "Gestión de Talento",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Un diseñador lleva 18 meses en el rol Junior y pide una promoción a Mid. Es técnicamente bueno, pero nunca toma iniciativa, siempre espera instrucciones y no colabora proactivamente con otros equipos.",
      question: "¿Cuál es tu decisión y cómo la comunicas?",
      options: [
        { id: 'A', text: "Lo promocionas. El tiempo en el rol y la calidad técnica son suficientes. La proactividad se desarrollará con el nuevo título.", score: 0, type: "Inflación de Títulos" },
        { id: 'B', text: "No promoción con Roadmap Claro: Le explicas que 'Mid' requiere autonomía y ownership. Le das 3 meses con objetivos específicos (liderar 1 feature end-to-end, facilitar 1 critique) y reevalúan.", score: 5, type: "Lead (Growth Path)" },
        { id: 'C', text: "Le ofreces un aumento de sueldo sin cambio de título como 'reconocimiento'.", score: 2, type: "Parche (No resuelve expectativa)" }
      ],
      explanation: "Promocionar sin mérito (A) rompe el equipo y las expectativas. La opción B es transparente: define el gap y da un plan concreto para cerrarlo."
    },

    // --- BLOQUE 13: NEGOCIO, VENTAS & STAKEHOLDERS ---
    {
      id: 'enterprise_client_custom_request',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "Un cliente Enterprise que paga $500K anuales amenaza con irse si no agregas un feature muy específico para su workflow interno que solo ellos usarían.",
      question: "¿Cómo evalúas si construirlo?",
      options: [
        { id: 'A', text: "Rechazarlo. Construir features para un solo cliente es la muerte de un producto SaaS escalable.", score: 2, type: "Purista (Pierde $500K)" },
        { id: 'B', text: "Build vs Buy Analysis: Si el desarrollo toma menos de 3 meses Y puede generalizarse para al menos 3 clientes similares, se construye. Si no, se cobra como Custom Development aparte.", score: 5, type: "Lead (Strategic Flexibility)" },
        { id: 'C', text: "Construirlo inmediatamente. $500K anuales justifican cualquier request.", score: 0, type: "Feature Factory (Sin criterio)" }
      ],
      explanation: "No todo request de cliente se debe aceptar ni rechazar. La opción B evalúa ROI, escalabilidad y opciones de monetización custom."
    },
    {
      id: 'freemium_upgrade_friction',
      category: "Monetización & UX",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "El plan gratuito tiene 80% de los usuarios pero solo genera el 5% del revenue. Product quiere agregar 'upgrade prompts' agresivos cada 3 clicks. Temes que arruine la experiencia.",
      question: "¿Cuál es tu propuesta de balance?",
      options: [
        { id: 'A', text: "Rechazar los prompts. La UX no se negocia. Los usuarios pagarán si ven valor, no por presión.", score: 0, type: "Idealista (Ignora el negocio)" },
        { id: 'B', text: "Contextual Upselling: Mostrar el upgrade prompt solo cuando el usuario choca con un límite del plan gratuito (ej: 'Has alcanzado tu límite de 10 proyectos. Actualiza para ilimitados').", score: 5, type: "Lead (Value-Based Friction)" },
        { id: 'C', text: "Implementar los prompts pero con un botón de 'No volver a mostrar'.", score: 2, type: "Parche (Usuario cierra para siempre)" }
      ],
      explanation: "Los upsells genéricos (cada 3 clicks) entrenan al usuario a ignorarlos. Los contextuales (B) educan sobre el valor del upgrade en el momento de necesidad real."
    },
    {
      id: 'pricing_page_complexity',
      category: "Estrategia de Producto",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "La página de Pricing tiene 5 tiers de planes con 30 features listadas. Los usuarios están paralizados y el abandono en esa página es del 60%.",
      question: "¿Cómo simplificas la decisión?",
      options: [
        { id: 'A', text: "Reducir a 3 planes (Good-Better-Best) y listar solo las 5 diferencias clave. Esconder el resto en un 'Ver comparación completa'.", score: 5, type: "Lead (Paradox of Choice)" },
        { id: 'B', text: "Agregar un 'Plan Recomendado' badge en el tier más popular para guiar la decisión.", score: 2, type: "Nudge (Insuficiente solo)" },
        { id: 'C', text: "Crear un quiz interactivo de 5 preguntas que recomienda el plan ideal según el perfil del usuario.", score: 2, type: "Creativo (Agrega fricción)" }
      ],
      explanation: "La parálisis por análisis es real. La opción A elimina la complejidad cognitiva. El quiz (C) parece lindo pero agrega pasos antes de la decisión."
    },
    {
      id: 'seo_vs_ux_url_structure',
      category: "SEO vs Experiencia",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      scenario: "Marketing quiere cambiar todas las URLs del producto para incluir keywords SEO (/dashboard → /financial-dashboard-analytics). Ingeniería dice que romperá todos los links compartidos y favoritos de usuarios.",
      question: "¿Cómo medias entre SEO y UX?",
      options: [
        { id: 'A', text: "Priorizar SEO. El tráfico orgánico es vital para el crecimiento.", score: 0, type: "Rompe la experiencia de usuarios activos" },
        { id: 'B', text: "Implementar Redirects 301: Cambian las URLs pero mantienen compatibilidad con los links antiguos. Monitorear impacto en analytics por 1 mes antes de commitear permanentemente.", score: 5, type: "Lead (Migration Strategy)" },
        { id: 'C', text: "Rechazar el cambio. Las URLs son parte de la UX establecida y no se tocan.", score: 2, type: "Conservador (Pierde oportunidad)" }
      ],
      explanation: "Cambiar URLs sin strategy rompe la confianza del usuario (links muertos). Los redirects (B) permiten evolucionar sin destruir lo existente."
    },

    // --- BLOQUE 14: INNOVACIÓN, TRENDS & TECH DEBT ---
    {
      id: 'ai_feature_hype_cycle',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "El Board quiere que agregues 'AI' al producto porque 'todos lo están haciendo'. No hay un problema específico identificado, solo FOMO corporativo.",
      question: "¿Cómo canalizas la presión hacia valor real?",
      options: [
        { id: 'A', text: "Implementar un chatbot básico con GPT para cumplir con la expectativa rápidamente.", score: 0, type: "Teatro de Innovación" },
        { id: 'B', text: "Discovery de Pain Points: Entrevistas a 10 usuarios power para identificar tareas repetitivas/aburridas que la AI podría automatizar genuinamente (categorización, predicción, generación de reportes).", score: 5, type: "Lead (Problem-First Innovation)" },
        { id: 'C', text: "Agregar un badge de 'Powered by AI' a features existentes que usan algoritmos simples.", score: 0, type: "AI-Washing (Fraude)" }
      ],
      explanation: "Agregar AI por moda (A, C) es ruido. La opción B encuentra casos de uso reales donde la tecnología resuelve problemas existentes, no crea features buscando problemas."
    },
    {
      id: 'design_trend_neumorphism',
      category: "Tendencias de Diseño",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "Un diseñador quiere rediseñar el UI con 'Neumorphism' (el trend visual del momento). Se ve espectacular en Dribbble pero tiene problemas severos de contraste y accesibilidad.",
      question: "¿Cómo evalúas adoptar trends visuales?",
      options: [
        { id: 'A', text: "Permitirlo. La innovación visual diferencia al producto y atrae usuarios.", score: 0, type: "Trend Chaser (Ignora usabilidad)" },
        { id: 'B', text: "Accessibility First: Si el trend no puede pasar WCAG AA sin compromisos, se rechaza. La moda no justifica excluir usuarios.", score: 5, type: "Lead (Principios sobre Estética)" },
        { id: 'C', text: "Permitirlo solo en secciones de Marketing (landing page) pero no en el producto core.", score: 2, type: "Híbrido (Inconsistencia de marca)" }
      ],
      explanation: "Los trends visuales van y vienen. La accesibilidad es permanente. Un producto inaccesible es un producto roto, sin importar qué tan bonito se vea."
    },
    {
      id: 'legacy_code_rewrite_temptation',
      category: "Estrategia de Migración",
      icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
      scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
      question: "¿Cuál es tu postura como stakeholder de diseño?",
      options: [
        { id: 'A', text: "Apoyar el rewrite completo. Es momento de saldar la deuda técnica.", score: 0, type: "Ingenuo (Gran Bomba)" },
        { id: 'B', text: "Micro-Frontends o Modular Rewrite: Migrar pantalla por pantalla, permitiendo que convivan Angular y React temporalmente. Priorizar las vistas con más tráfico primero.", score: 5, type: "Lead (Incremental De-Risking)" },
        { id: 'C', text: "Oponerse completamente. Si funciona, no se toca. Priorizar features sobre refactoring.", score: 2, type: "Cortoplacista (Acumula más deuda)" }
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
        { id: 'A', text: "Revertir inmediatamente al diseño anterior y olvidar que pasó.", score: 2, type: "Reactivo (Pierde el aprendizaje)" },
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
        { id: 'A', text: "Revertir el logo inmediatamente para calmar a la comunidad.", score: 0, type: "Reactivo (Pierde autoridad)" },
        { id: 'B', text: "Vocal Minority Bias: Analizar la data real (¿cuántos usuarios activos son esos 2000? ¿cambió el NPS/retention?). Si las métricas de negocio no se mueven, es ruido. Comunicar la visión del cambio con confianza.", score: 5, type: "Lead (Data over Noise)" },
        { id: 'C', text: "Ignorar completamente el feedback. 'Los usuarios se acostumbrarán'.", score: 2, type: "Arrogante (Pierde empatía)" }
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
        { id: 'A', text: "Retrasar la reunión 2 horas enviando una excusa corporativa ('Conflicto de agenda del CEO'). Esperas que staging se arregle para hacer el demo perfecto.", score: 0, type: "Mentiroso (Pierde credibilidad)" },
        { id: 'B', text: "Demo en Producción con Datos Reales: Usas el ambiente live con usuarios reales, preparas un script tight para minimizar riesgos y asignas a alguien del equipo a monitorear errores en tiempo real. La autenticidad puede ser una ventaja.", score: 5, type: "Lead (Improvisa con Confianza)" },
        { id: 'C', text: "Convertir el demo en una presentación de slides con capturas de pantalla y videos pregrabados del producto.", score: 2, type: "Backup Plan (Menos impacto)" }
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
        { id: 'A', text: "Crear un ticket de 'Analytics Sprint' para instrumentar todo retroactivamente.", score: 2, type: "Reactivo (Nunca se prioriza)" },
        { id: 'B', text: "Definition of Done: Cambiar el proceso para que NINGUNA feature se considere 'completada' sin eventos de tracking implementados y validados en staging. Bloqueo de QA.", score: 5, type: "Lead (Cambio de Proceso)" },
        { id: 'C', text: "Contratar un Data Analyst dedicado para que sea responsable de implementar el tracking.", score: 2, type: "Bandaid (No resuelve cultura)" }
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
        { id: 'A', text: "Aceptar el compromiso pero escalar con el CEO para prohibir que Ventas prometa features sin aprobación de Product.", score: 2, type: "Reactivo (Cierra la puerta tarde)" },
        { id: 'B', text: "Proceso de 'Deal Desk': Crear un comité obligatorio de Product + Engineering + Sales que debe aprobar CUALQUIER customización antes de que se cierre el contrato. Ventas no puede prometer unilateralmente.", score: 5, type: "Lead (Proceso de Gobernanza)" },
        { id: 'C', text: "Construir la feature pero cobrar internamente a Ventas el costo de oportunidad (qué features del roadmap se retrasan por esto).", score: 2, type: "Político (No previene)" }
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
        { id: 'C', text: "Simplificar el diseño completamente para que funcione igual en todas las plataformas sin parallax.", score: 2, type: "Conservador (Pierde diferenciación)" }
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
        { id: 'A', text: "Prohibir que diseñadores toquen el código. Cada rol tiene su expertise.", score: 0, type: "Silo Rígido (Mata colaboración)" },
        { id: 'B', text: "Code Review Obligatorio: Permitir que los diseñadores contribuyan código, pero SIEMPRE debe pasar por revisión de un developer senior antes de mergear. Upskilling con guardrails.", score: 5, type: "Lead (Colaboración con Calidad)" },
        { id: 'C', text: "Crear un repositorio separado de 'Design Experiments' donde puedan codear libremente sin afectar producción.", score: 2, type: "Sandbox (Desconectado de impacto real)" }
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
        { id: 'A', text: "Forzar la asistencia del equipo. Es solo 2 horas y puede ayudar a relajarse.", score: 0, type: "Toxic Positivity (Ignora agotamiento)" },
        { id: 'B', text: "Negociar con RRHH: Hacer la 'celebración' opcional y ofrecer como alternativa un día libre compensatorio para quienes prefieran descansar. Respeto por la autonomía.", score: 5, type: "Lead (Escucha Real)" },
        { id: 'C', text: "Asistir tú mismo pero decirle al equipo en privado que no vayan si no quieren.", score: 2, type: "Hipocresía (Mensaje confuso)" }
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
        { id: 'A', text: "Dejarla continuar. El perfeccionismo es señal de estándares altos.", score: 0, type: "Enabler (Refuerza el vicio)" },
        { id: 'B', text: "Timeboxing + 'Good Enough': Establecer un límite de 1 hora más y luego shippearlo como está. Enseñarle que 'shipped imperfect' > 'perfect pero nunca lanzado'.", score: 5, type: "Lead (Enseña Pragmatismo)" },
        { id: 'C', text: "Tomar el archivo tú mismo y finalizarlo para quitarle la presión.", score: 2, type: "Rescate (No aprende)" }
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
        { id: 'A', text: "Mantenerlos separados. Cada producto tiene necesidades diferentes.", score: 0, type: "Silos (Duplicación eterna)" },
        { id: 'B', text: "Design System Core + Product Extensions: Crear una librería base compartida con primitivos (colores, tipografía, componentes básicos) y permitir que cada producto extienda con sus propios componentes específicos.", score: 5, type: "Lead (Shared Foundation)" },
        { id: 'C', text: "Forzar un único Design System para todo. Total estandarización.", score: 2, type: "Rígido (No refleja realidad)" }
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
