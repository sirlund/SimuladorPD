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
 * Mobile, Plataformas & Handoff
 */
export const mobile_questions = [
  // --- BLOQUE 10: MOBILE, RESPONSIVE & PLATAFORMAS ---
  {
    id: 'mobile_web_vs_native_app',
    category: "Estrategia de Plataforma",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "Acabas de perder un deal de $500k con un banco porque 'no tienen App Nativa en el App Store'. El competidor sí tiene. El CEO entra en pánico y ordena 'construir la app ya'. Tu equipo es experto en React, no en Swift/Kotlin. Contratar equipo mobile tomaría 3 meses y $200k.",
    question: "¿Cuál es tu recomendación estratégica para salvar el año?",
    options: [
      { id: 'A', text: "React Native / Wrapper: Usas Capacitor para empaquetar la web actual. Publicas en 3 semanas. Calidad 'media' pero cumples el requisito de venta ('tenemos app') sin contratar equipo nuevo.", score: 5, type: "Lead (Pragmático de Mercado)" },
      { id: 'B', text: "Defender PWA: Intentas educar al banco sobre las bondades de las Progressive Web Apps. Arriesgas perder el deal porque los bancos compran checkboxes ('¿Tienen app? Sí/No').", score: 2, type: "Purista Técnico (Pierde negocio)" },
      { id: 'C', text: "Contratar Agencia Mobile: Gastas $150k en una agencia para hacer la app nativa. Quemas budget y creas un codebase que tu equipo no sabe mantener. Deuda técnica futura masiva.", score: 3, type: "Caro y Riesgoso" }
    ],
    explanation: "A veces el requisito de negocio es 'estar en el Store', no 'ser nativo'. Un wrapper (A) resuelve el problema comercial rápido aprovechando el skill actual del equipo. Defender PWA (B) es técnicamente correcto pero comercialmente suicida en Enterprise."
  },
  {
    id: 'tablet_edge_case',
    category: "Diseño Responsive",
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    scenario: "Analytics muestra que solo el 3% del tráfico viene de tablets. El diseño actual se rompe visualmente en iPad landscape (1024x768). QA lo reporta como 'bug crítico P0' bloqueando el release. Arreglarlo tomaría 1 día de desarrollo. El deployment está programado para mañana.",
    question: "¿Cómo priorizas este issue?",
    options: [
      { id: 'A', text: "Arreglo Inmediato: Demoras el release 1 día. 'Funcionar correctamente en todos los dispositivos' es parte de la calidad básica del producto. 3% sigue siendo miles de usuarios.", score: 2, type: "Perfeccionista (Mal ROI)" },
      { id: 'B', text: "Análisis de Valor: Segmentas ese 3% en analytics: Si son clientes Enterprise de alto valor, se arregla antes del release. Si es tráfico casual, se backlogea como P3 post-launch.", score: 5, type: "Lead (Value-Based Priority)" },
      { id: 'C', text: "Ship y Monitorea: Lanzas mañana según plan. Solo arreglas el tablet bug si empiezan a llegar quejas explícitas via soporte o impacta métricas clave de conversión.", score: 4, type: "Reactivo (Velocidad)" }
    ],
    explanation: "No todos los bugs son iguales. El % de tráfico no cuenta toda la historia: ¿quién es ese 3%? Si son CFOs revisando dashboards en iPad, es crítico. Si es bounce traffic aleatorio, no justifica demora. La opción B prioriza por impacto en negocio (B)."
  },
  {
    id: 'gesture_vs_button_mobile',
    category: "Interacción Móvil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "El 40% de los tickets de soporte son '¿Cómo archivo este item?'. Diseñaste un gesto de 'swipe left' elegante, pero invisible. El PM quiere eliminar el gesto y poner un botón feo y grande en cada fila porque 'los usuarios son tontos'.",
    question: "¿Cómo defiendes la usabilidad sin sacrificar la elegancia?",
    options: [
      { id: 'A', text: "Diseño Dual: Mantienes el swipe para power users, pero agregas una acción visible (menú de 3 puntos) para el resto. La discoverability es prioritaria sobre el minimalismo.", score: 5, type: "Lead (Inclusivo)" },
      { id: 'B', text: "Onboarding Tutorial: Agregas un overlay explicativo la primera vez. La data dice que los usuarios cierran estos tutoriales sin leer, por lo que el problema de usabilidad persiste.", score: 2, type: "Parche débil" },
      { id: 'C', text: "Aceptar el Botón Grande: Sacrificas espacio en pantalla y estética por claridad bruta. Funciona para archivar, pero degrada la experiencia de lectura y consumo de contenido.", score: 3, type: "Funcional pero tosco" }
    ],
    explanation: "Los gestos son invisibles. La solución no es elegir entre 'bonito' (swipe) o 'claro' (botón), sino ofrecer ambos caminos (A). Los usuarios expertos swipen, los nuevos clickean. Nadie se queda bloqueado."
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
    scenario: "El Tech Lead rechaza tu PR de animación diciendo: 'Esto consume mucha CPU en Android low-end y retrasa el TTI (Time to Interactive)'. Te muestra métricas de performance: tu animación baja el score de Lighthouse 10 puntos. Tú sientes que sin la animación, el producto se siente 'barato'.",
    question: "¿Cómo negocias calidad visual vs performance?",
    options: [
      { id: 'A', text: "Optimización Colaborativa: Te sientas con él a simplificar la animación (CSS vs JS). Buscas el 80% del impacto visual con el 20% del costo de CPU. Respetas la restricción técnica.", score: 5, type: "Lead (Performance es UX)" },
      { id: 'B', text: "Insistir en la Calidad: 'Los usuarios tienen teléfonos modernos, no podemos diseñar para el mínimo común denominador'. Ignoras la métrica de Lighthouse y priorizas la estética.", score: 1, type: "Elitista (Daña métricas)" },
      { id: 'C', text: "Eliminar la Animación: Te rindes inmediatamente ante la métrica. 'Si performance es rey, que sea estático'. El producto pierde alma y diferenciación visual.", score: 2, type: "Derrotista" }
    ],
    explanation: "Performance ES User Experience. Si tu animación laguea el teléfono, es mala UX. Un Lead no pelea contra la métrica, colabora para optimizar la implementación (A) o simplificar el diseño."
  },
  {
    id: 'pm_changes_scope_mid_sprint',
    category: "Gestión de Roadmap",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Estás a mitad de sprint. El PM viene con un 'small request': agregar un filtro nuevo al dashboard. Dices que tomará 2 días. Responde 'pero es solo un dropdown, ¿cuánto puede costar?'.",
    question: "¿Cómo educas sobre el costo real del cambio?",
    options: [
      { id: 'A', text: "Aceptas hacerlo: Lo tomas para mantener buena relación con Product. Total, son solo 2 días, aunque sabes que esto sienta un precedente peligroso para el futuro.", score: 1, type: "Complaciente (Mata el Sprint)" },
      { id: 'B', text: "Visibilidad del Iceberg: Le muestras el breakdown (diseño, estados de error, casos edge, handoff, QA). Le ofreces meterlo al siguiente sprint o quitar algo del actual.", score: 5, type: "Lead (Educador de Proceso)" },
      { id: 'C', text: "Te niegas rotundamente: 'Mid-sprint changes' están prohibidos por proceso Agile. Cierras la discusión citando el manual de Scrum sin dar alternativas.", score: 4, type: "Dogmático (Inflexible)" }
    ],
    explanation: "Decir solo 'no' (C) crea fricción. La opción B hace visible el trabajo oculto y empodera al PM para tomar decisiones informadas de trade-offs."
  },
  {
    id: 'qa_reject_pixel_perfect',
    category: "Quality Assurance",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    scenario: "Es jueves 5 PM. QA bloquea el release del Checkout porque el botón de 'Pagar' tiene un contraste de 2.9:1 (WCAG pide 3:1). Legal advierte que es un riesgo de compliance. Product dice: 'Comprometimos este release para la campaña de marketing que sale mañana a las 9 AM. Retrasar nos cuesta la inversión en ads'.",
    question: "¿Qué decisión tomas bajo presión de campaña vs compliance?",
    options: [
      { id: 'A', text: "Ship It & Fix Monday: Autorizas el release asumiendo el riesgo por 48 horas. Creas ticket P0 para arreglar el lunes a primera hora. Priorizas la campaña de marketing ya pagada.", score: 4, type: "Pragmático (Riesgo calculado)" },
      { id: 'B', text: "Hotfix Inmediato: Te quedas con un dev a arreglar el color hexadecimal ahora mismo, aunque signifique salir tarde. Es un cambio de 1 línea de código. Pides a QA un smoke test rápido solo de ese botón. Proteges compliance y campaña.", score: 5, type: "Lead (Ownership de Calidad)" },
      { id: 'C', text: "Bloquear Release: 'No lanzamos nada que viole WCAG'. Cancelas el deploy. Marketing pierde el día de campaña. Proteges el estándar pero dañas al negocio.", score: 2, type: "Dogmático (Ceguera comercial)" }
    ],
    explanation: "Un contraste de 2.9:1 es un fallo técnico menor pero legalmente real. Cancelar una campaña (C) es desproporcionado. Ignorarlo (A) es riesgoso. Un Lead resuelve el problema pequeño (cambiar un hex code toma 5 min) en el momento (B) para habilitar al negocio sin bajar el estándar."
  },
  {
    id: 'documentation_handoff_speed',
    category: "Process",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Debes entregar el diseño de 'Cálculo de Intereses Compuestos' para una Fintech. La lógica es compleja (casos borde, redondeo, fechas de corte). El PM presiona: 'Solo danos las pantallas, los devs deducen la lógica'. Sabes que si lo interpretan mal, usuarios perderán dinero real y habrá demandas. Documentar la lógica completa toma 2 días que no tienes.",
    question: "¿Cómo gestionas el riesgo de implementación en un feature financiero crítico?",
    options: [
      { id: 'A', text: "Entregar Pantallas + Disclaimer: Entregas el UI y dices 'La lógica es responsabilidad de Backend'. Te lavas las manos del riesgo matemático. Si falla, no es tu culpa.", score: 1, type: "Irresponsable" },
      { id: 'B', text: "Pairing con Tech Lead: En lugar de documentar 2 días, te sientas 3 horas con el Tech Lead a escribir los 'Test Cases'. Aseguras entendimiento lógico antes de codear.", score: 5, type: "Lead (Colaboración de Alto Valor)" },
      { id: 'C', text: "Retrasar el Sprint: Bloqueas el handoff hasta que termines el documento de 20 páginas de especificación. El equipo se queda sin trabajo 2 días. 'La calidad toma tiempo'.", score: 2, type: "Cuello de Botella" }
    ],
    explanation: "En dominios de alto riesgo (Fintech, Salud), la ambigüedad es inaceptable. Documentar solo (C) es lento. Lavarse las manos (A) es negligente. Pairing para definir Test Cases (B) es la forma más rápida y segura de transferir lógica compleja."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'i18n_rtl_layout_challenge',
    category: "Internationalization (i18n)",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "La empresa abre mercado en Medio Oriente (Árabe/Hebreo). Tu UI actual está hardcodeada para LTR (Left-to-Right). El CEO pregunta si basta con 'traducir los textos'.",
    question: "¿Cómo explicas el impacto de RTL (Right-to-Left)?",
    options: [
      { id: 'A', text: "Espejo Completo: Explicar que RTL invierte no solo texto, sino la dirección del tiempo (flechas), la jerarquía visual y la posición de iconos. Requiere soporte de CSS lógico.", score: 5, type: "Lead (Cultural Awareness)" },
      { id: 'B', text: "Solo Texto: Aceptar traducir solo textos y dejar la UI alineada a la izquierda. 'Se entenderá igual'. Es una experiencia de usuario rota para nativos.", score: 1, type: "Ignorante" },
      { id: 'C', text: "CSS Patch: Intentar forzar `text-align: right` manualmente en cada componente. Es insostenible y propenso a errores.", score: 2, type: "Parche Técnico" }
    ],
    explanation: "RTL no es traducción, es localización. La dirección de lectura afecta toda la cognición espacial de la interfaz. Un Lead educa sobre la complejidad técnica (CSS Logical Properties) y cultural (A)."
  },
  {
    id: 'i18n_german_long_words_break_ui',
    category: "Internationalization (i18n)",
    icon: <Languages className="w-6 h-6 text-indigo-500" />,
    scenario: "Diseñaste botones con ancho fijo de 120px. Al traducir al alemán, 'Save' se convierte en 'Speichern' y rompe el layout. El equipo de desarrollo sugiere cortar el texto con '...'.",
    question: "¿Cómo solucionas la escalabilidad del texto?",
    options: [
      { id: 'A', text: "Diseño Fluido: Refactorizar los botones para que tengan ancho dinámico (auto-layout) y permitan wrapping si es necesario. El diseño debe adaptarse al contenido, no al revés.", score: 5, type: "Lead (Scalable UI)" },
      { id: 'B', text: "Truncar Texto: Aceptar el 'Speich...'. El usuario adivinará qué dice. Priorizas la estética rígida sobre la legibilidad.", score: 1, type: "Estético Rígido" },
      { id: 'C', text: "Cambiar el Copy: Pedir al traductor que busque una palabra más corta en alemán. A veces funciona, pero no es una solución sistémica.", score: 3, type: "Parche de Contenido" }
    ],
    explanation: "El diseño internacional debe ser flexible. Asumir longitudes de texto en inglés es un error de novato. La solución sistémica es componentes fluidos (A)."
  },
  {
    id: 'mobile_offline_mode_sync_conflict',
    category: "Service Design",
    icon: <Wifi className="w-6 h-6 text-gray-500" />,
    scenario: "Estás diseñando una app para técnicos de campo que trabajan en sótanos sin señal. Necesitan editar datos offline. El problema es la sincronización: ¿Qué pasa si dos técnicos editan lo mismo offline?",
    question: "¿Cómo diseñas la resolución de conflictos?",
    options: [
      { id: 'A', text: "Last Write Wins: El último que sincroniza sobrescribe al anterior automáticamente. Es fácil de programar pero puede borrar datos válidos sin aviso.", score: 2, type: "Riesgoso (Pérdida de datos)" },
      { id: 'B', text: "UI de Conflicto: Detectar el conflicto al reconectar y mostrar al usuario ambas versiones (la suya y la del servidor) para que decida cuál guardar.", score: 5, type: "Lead (Transparencia y Control)" },
      { id: 'C', text: "Bloqueo Offline: Prohibir editar si no hay conexión. Elimina el conflicto pero hace la app inútil para el caso de uso principal.", score: 0, type: "Inútil" }
    ],
    explanation: "En apps profesionales offline-first, la integridad de los datos es crítica. 'Last Write Wins' es peligroso. La UI debe empoderar al usuario para resolver la discrepancia (B)."
  },
  {
    id: 'mobile_touch_targets_accessibility',
    category: "Compliance & UX",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu UI tiene botones de acción pequeños (24x24px) muy juntos para 'ahorrar espacio'. Usuarios con dedos grandes o temblores reportan 'Fat Finger Error' (tocar lo incorrecto).",
    question: "¿Qué estándar aplicas?",
    options: [
      { id: 'A', text: "Regla 44px/48px: Aumentar el área táctil mínima a 44pt (iOS) o 48dp (Android), aunque el icono visual sea más pequeño (usando padding transparente).", score: 5, type: "Lead (Estándar de Plataforma)" },
      { id: 'B', text: "Zoom UI: Decirle al usuario que haga zoom si no puede tocarlo. Transfieres la carga de la accesibilidad al usuario.", score: 0, type: "Excluyente" },
      { id: 'C', text: "Rediseño Espacial: Separar los botones visualmente. Ayuda, pero si el target sigue siendo pequeño, no resuelve el problema raíz.", score: 3, type: "Parcial" }
    ],
    explanation: "Los estándares de Apple y Google existen por biomecánica, no capricho. Un área táctil invisible (padding) resuelve la usabilidad sin necesariamente cambiar la estética visual (A)."
  },
];
