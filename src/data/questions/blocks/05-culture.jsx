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
 * Cultura, Stakeholders & Business
 */
export const culture_questions = [
  // --- BLOQUE 12: CULTURA, FEEDBACK & MENTORÍA ---
  {
    id: 'critique_session_dominance',
    category: "Team Dynamics",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    scenario: "Heredaste un equipo donde los Design Critiques son 'Roasts'. Los Seniors destrozan el trabajo de los Juniors con comentarios brutales ('esto parece de 1998', '¿en serio pensaste eso?'). Ellos lo llaman 'mantener la vara alta'. Dos Juniors renunciaron el mes pasado citando 'ambiente tóxico'. Los Seniors son tus mejores performers individuales.",
    question: "¿Cómo intervienes sin perder a tus estrellas técnicas?",
    options: [
      { id: 'A', text: "Prohibir la crítica negativa: Instaurar regla de 'solo feedback constructivo tipo sándwich'. Los Seniors sienten que estás 'suavizando' la cultura y bajando el estándar. Se quejan de que 'ya no se puede decir la verdad'.", score: 2, type: "Policía (Genera cinismo)" },
      { id: 'B', text: "Rediseñar el Ritual: Cambiar el formato a 'Design Studio' o 'Pairing' donde los Seniors deben CO-CREAR soluciones con los Juniors, no solo juzgar. Cambias su rol de 'Juez' a 'Mentor'. Mides a los Seniors por el crecimiento de sus Juniors.", score: 5, type: "Lead (Cambio Estructural)" },
      { id: 'C', text: "Hablar con los Juniors: Decirles que no lo tomen personal, que así se aprende en la industria. Intentar darles herramientas de resiliencia.", score: 1, type: "Cómplice (Normaliza abuso)" }
    ],
    explanation: "La cultura de 'Roast' disfraza la toxicidad de excelencia. Prohibir (A) no funciona. La opción B cambia la estructura de incentivos: si el Senior es responsable del output del Junior, su comportamiento cambia de ataque a colaboración."
  },
  {
    id: 'feedback_sandwich_method',
    category: "Mentoría & Crecimiento",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tienes un diseñador Mid-Level que es la persona más amable del equipo, trae donas, organiza happy hours. Pero ha fallado 3 deadlines consecutivos y su calidad técnica está estancada. El equipo lo adora, pero tienes que tener 'La Conversación' (Performance Improvement Plan - PIP). Si no mejora en 30 días, debes despedirlo.",
    question: "¿Cómo das feedback duro a alguien querido por todos?",
    options: [
      { id: 'A', text: "Método Sándwich Extremo: 'Eres vital para la cultura... el trabajo técnico necesita mejorar un poco... pero te queremos mucho'. El mensaje se pierde. Él sale de la reunión pensando que todo está bien.", score: 1, type: "Cobarde (Daña al empleado)" },
      { id: 'B', text: "Claridad Radical con Apoyo: 'Tu rol está en riesgo. Estos son los 3 gaps específicos. Este es el plan de 30 días para cerrarlos. Quiero que te quedes, pero necesito ver X, Y, Z. ¿Cómo te ayudo a lograrlo?'.", score: 5, type: "Lead (Duro con el problema, suave con la persona)" },
      { id: 'C', text: "Delegar a HR: Pedirle a RRHH que inicie el proceso formal de PIP para no dañar tu relación personal con él.", score: 0, type: "Abandono de Liderazgo" },
    ],
    explanation: "Ser 'amable' ocultando la gravedad de la situación (A) es cruel, porque le niegas la oportunidad de salvar su trabajo. La claridad radical (B) es la verdadera empatía: le das la verdad y las herramientas para mejorar."
  },
  {
    id: 'imposter_syndrome_senior',
    category: "People Management",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    scenario: "Tu diseñadora Senior (crítica para el roadmap) rompe en llanto en el 1-on-1. Se siente un fraude tras ver el portfolio visual del nuevo hire (ilustraciones Awwwards). Ella 'solo' hace wireframes y procesos, aunque su último redesign subió la activación un 35%. Teme no ser 'creativa'. El CEO te preguntará por flight risks en 2 horas.",
    question: "¿Cómo abordas el síndrome del impostor de manera que genere cambio real de perspectiva AHORA?",
    options: [
      { id: 'A', text: "Upskilling Reactivo: Le pagas un curso de After Effects ($1,200) para 'llenar sus gaps'. Validas su inseguridad confirmando implícitamente que le faltan skills visuales.", score: 1, type: "Refuerza síndrome (Valida inseguridad + costo)" },
      { id: 'B', text: "Reframe con ROI: Le muestras el dashboard: 'Tus flows generaron $2.1M. Las ilustraciones ganan likes, tu diseño paga sueldos'. Redefines Seniority como impacto de negocio, no estética.", score: 5, type: "Lead (Reframe con ROI concreto)" },
      { id: 'C', text: "Validación Emocional: 'Todos sentimos síndrome del impostor, eres talentosa'. Empatía pura sin evidencia objetiva que cambie su creencia raíz.", score: 2, type: "Superficial empático (No cambia creencia raíz)" }
    ],
    explanation: "La A valida que 'le falta algo'. La C es amable pero no cambia su creencia. La B ataca la raíz con datos: demuestra que el Seniority real se mide en impacto de negocio ($2.1M), no en estética de Dribbble. Combates el sentimiento de fraude con evidencia irrefutable de valor."
  },
  {
    id: 'promotion_readiness_debate',
    category: "Career Growth",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    scenario: "Un Mid-Level con craft excelente exige promoción a Senior y +$25K. Sin embargo, evita la mentoría y el liderazgo, requisitos clave para el rol en tu empresa. Sabes que tiene una oferta externa y se irá si dices que no, pero promoverlo bajaría la vara de Senior para todos.",
    question: "¿Cómo manejas promoción con flight risk real pero necesidad de mantener bar?",
    options: [
      { id: 'A', text: "Promoción Preventiva: Lo asciendes para retenerlo. Priorizas conservar su output técnico hoy, aunque diluyas el significado de 'Senior' a largo plazo.", score: 1, type: "Inflación por miedo (Rompe precedente)" },
      { id: 'B', text: "Roadmap Acelerado: Rechazas la promoción hoy pero ofreces un plan de 3 meses con objetivos claros de liderazgo. Si cumple, asciende. Pones la responsabilidad en él.", score: 5, type: "Lead (Growth plan acelerado con accountability)" },
      { id: 'C', text: "Aumento sin Título: Le das un aumento salarial por su craft, pero mantienes el título Mid. Intentas retener con dinero sin comprometer la estructura de roles.", score: 3, type: "Parche costoso (No resuelve expectativa ni garantiza retención)" }
    ],
    explanation: "Promover por miedo (A) crea inflación de títulos. Dar dinero sin título (C) no resuelve la ambición de carrera. La B es justa: roadmap acelerado con criterios claros. Si se va porque no quiere liderar, validaste que no era Senior material."
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
    scenario: "El tier gratuito genera pérdidas de $52K/mes y el runway es de solo 7 meses. Growth propone 'upgrade prompts' agresivos cada 5 clicks. Product advierte que esto desplomará el NPS, pero el Board argumenta que 'morir adorados por usuarios que no pagan' no es una opción.",
    question: "¿Qué estrategia de monetización propones sabiendo que NPS caerá pero runway es crítico?",
    options: [
      { id: 'A', text: "Ajuste de Límites: Reduces la capacidad del plan Free (proyectos/storage) para forzar upgrade natural. Es menos intrusivo, pero el impacto en revenue tardará 3 meses en notarse.", score: 1, type: "Idealista optimista (Demasiado lento para runway de 7 meses)" },
      { id: 'B', text: "Upselling Contextual: Implementas prompts solo cuando el usuario choca con un límite real. Es fricción justificada por valor. Corres un A/B test para validar que la conversión compense la caída de NPS.", score: 5, type: "Lead (Fricción con propósito + data)" },
      { id: 'C', text: "Prompts Agresivos: Implementas la propuesta de Growth (prompts cada 5 clicks) aceptando la caída de NPS como costo de supervivencia. Priorizas cash flow inmediato sobre experiencia de usuario.", score: 4, type: "Agresivo con transparencia (Prioriza revenue sobre UX)" }
    ],
    explanation: "La A es demasiado lenta para un runway de 7 meses. La C sacrifica la marca por pánico. La B es el balance de Lead: fricción contextual (educativa) validada con datos. No puedes morir adorado, pero tampoco debes alienar a tu base sin probar."
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

];
