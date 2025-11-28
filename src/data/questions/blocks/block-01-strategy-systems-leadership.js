import React from 'react';
import {
    Target, BarChart2, Briefcase, Code, Layers, Smartphone, Users, Star, Coffee, Search
} from 'lucide-react';

/**
 * BLOQUE I: Estrategia, Negocio, Métricas & Sistemas de Diseño
 * Incluye: Crisis de liderazgo, data-driven, producto vs ventas, OKRs,
 * deuda técnica, arquitectura de sistemas
 */
export const block01Questions = [
    // --- ESTRATEGIA, NEGOCIO & MÉTRICAS ---
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

    // --- SISTEMAS DE DISEÑO, OPS & DEUDA TÉCNICA ---
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

    // --- LIDERAZGO, CULTURA & PERSONAS ---
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
    }
];
