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
      { id: 'B', text: "Defender PWA: Intentas educar al banco sobre las bondades de las Progressive Web Apps. Arriesgas perder el deal porque los bancos compran checkboxes ('¿Tienen app? Sí/No').", score: 1, type: "Purista Técnico (Pierde negocio)" },
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
      { id: 'A', text: "Arreglo Inmediato: Demoras el release 1 día. 'Funcionar correctamente en todos los dispositivos' es parte de la calidad básica del producto. 3% sigue siendo miles de usuarios.", score: 1, type: "Perfeccionista (Mal ROI)" },
      { id: 'B', text: "Análisis de Valor: Segmentas ese 3% en analytics: Si son clientes Enterprise de alto valor, se arregla antes del release. Si es tráfico casual, se backlogea como P3 post-launch.", score: 5, type: "Lead (Value-Based Priority)" },
      { id: 'C', text: "Ship y Monitorea: Lanzas mañana según plan. Solo arreglas el tablet bug si empiezan a llegar quejas explícitas via soporte o impacta métricas clave de conversión.", score: 3, type: "Reactivo (Velocidad)" }
    ],
    explanation: "No todos los bugs son iguales. El % de tráfico no cuenta toda la historia: ¿quién es ese 3%? Si son CFOs revisando dashboards en iPad, es crítico. Si es bounce traffic aleatorio, no justifica demora. La opción B prioriza por impacto en negocio."
  },
  {
    id: 'gesture_vs_button_mobile',
    category: "Interacción Móvil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "El 40% de los tickets de soporte son '¿Cómo archivo este item?'. Diseñaste un gesto de 'swipe left' elegante, pero invisible. El PM quiere eliminar el gesto y poner un botón feo y grande en cada fila porque 'los usuarios son tontos'.",
    question: "¿Cómo defiendes la usabilidad sin sacrificar la elegancia?",
    options: [
      { id: 'A', text: "Diseño Dual: Mantienes el swipe para power users, pero agregas una acción visible (menú de 3 puntos) para el resto. La discoverability es prioritaria sobre el minimalismo.", score: 5, type: "Lead (Inclusivo)" },
      { id: 'B', text: "Coach Marks: Agregar un overlay educativo en el primer uso que señale el gesto de 'Swipe' con una animación clara. Aseguras que el usuario descubra la funcionalidad sin alterar la UI permanente.", score: 1, type: "Parche débil" },
      { id: 'C', text: "Visibilidad Total: Sacrificas espacio en pantalla y minimalismo estético a favor de claridad funcional completa. Agregas un botón de acción visible en cada fila para asegurar discoverability al 100%.", score: 3, type: "Funcional pero tosco" }
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
      { id: 'B', text: "Mantener la estética actual y agregar un 'High Contrast Mode' opcional en Settings para usuarios que lo necesiten.", score: 3, type: "Compromiso (Fragmenta la experiencia)" },
      { id: 'C', text: "Mantener el diseño actual. WCAG AA es una guía, no una ley (a menos que estés en gobierno/educación).", score: -1, type: "Irresponsable (Riesgo legal)" }
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
      { id: 'B', text: "Insistir en la Calidad: Argumentas que la animación es differentiador de brand y que la mayoría de users tienen hardware reciente. Solicitas metrics de distribución de dispositivos antes de comprometer.", score: 1, type: "Design-first approach" },
      { id: 'C', text: "Eliminar la Animación: Priorizas shipping rápido y score perfecto de Lighthouse. Removes la animación completamente para evitar debate técnico prolongado.", score: 1, type: "Pragmático conservador" }
    ],
    explanation: "Performance ES User Experience. Si tu animación laguea el teléfono, es mala UX. Un Lead no pelea contra la métrica, colabora para optimizar la implementación o simplificar el diseño."
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
      { id: 'C', text: "Te niegas rotundamente: 'Mid-sprint changes' están prohibidos por proceso Agile. Cierras la discusión citando el manual de Scrum sin dar alternativas.", score: 3, type: "Dogmático (Inflexible)" }
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
      { id: 'A', text: "Ship It & Fix Monday: Autorizas el release asumiendo el riesgo por 48 horas. Creas ticket P0 para arreglar el lunes a primera hora. Priorizas la campaña de marketing ya pagada.", score: 3, type: "Pragmático (Riesgo calculado)" },
      { id: 'B', text: "Hotfix Inmediato: Te quedas con un dev a arreglar el color hexadecimal ahora mismo, aunque signifique salir tarde. Es un cambio de 1 línea de código. Pides a QA un smoke test rápido solo de ese botón. Proteges compliance y campaña.", score: 5, type: "Lead (Ownership de Calidad)" },
      { id: 'C', text: "Bloquear Release: Mantienes el standard de compliance sin excepciones. Comunicas a Marketing que deben coordinar timelines con QA cycles para futuras campañas.", score: 1, type: "Compliance-first" }
    ],
    explanation: "Un contraste de 2.9:1 es un fallo técnico menor pero legalmente real. Cancelar una campaña es desproporcionado. Ignorarlo es riesgoso. Un Lead resuelve el problema pequeño (cambiar un hex code toma 5 min) en el momento para habilitar al negocio sin bajar el estándar."
  },
  {
    id: 'documentation_handoff_speed',
    category: "Process",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Debes entregar el diseño de 'Cálculo de Intereses Compuestos' para una Fintech. La lógica es compleja (casos borde, redondeo, fechas de corte). El PM presiona: 'Solo danos las pantallas, los devs deducen la lógica'. Sabes que si lo interpretan mal, usuarios perderán dinero real y habrá demandas. Documentar la lógica completa toma 2 días que no tienes.",
    question: "¿Cómo gestionas el riesgo de implementación en un feature financiero crítico?",
    options: [
      { id: 'A', text: "Entregar Pantallas + Disclaimer: Entregas el UI y clarif icas que Backend owns la lógica de cálculo. Confías en que el Tech Lead tiene expertise financiero necesario para implementación correcta.", score: 1, type: "Handoff tradicional" },
      { id: 'B', text: "Pairing con Tech Lead: En lugar de documentar 2 días, te sientas 3 horas con el Tech Lead a escribir los 'Test Cases'. Aseguras entendimiento lógico antes de codear.", score: 5, type: "Lead (Colaboración de Alto Valor)" },
      { id: 'C', text: "Documentación Completa: Bloqueas el handoff hasta que termines el documento completo de especificación. Priorizas la calidad y precisión de la documentación sobre la velocidad de entrega.", score: 1, type: "Documentación Completa" }
    ],
    explanation: "En dominios de alto riesgo (Fintech, Salud), la ambigüedad es inaceptable. Documentar solo es lento. Lavarse las manos es negligente. Pairing para definir Test Cases es la forma más rápida y segura de transferir lógica compleja."
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
      { id: 'C', text: "Ajuste Manual: Aplicar `text-align: right` manualmente en cada componente. Solución rápida que permite cumplir con el requisito sin cambios arquitectónicos mayores.", score: 1, type: "Ajuste Manual" }
    ],
    explanation: "RTL no es traducción, es localización. La dirección de lectura afecta toda la cognición espacial de la interfaz. Un Lead educa sobre la complejidad técnica (CSS Logical Properties) y cultural."
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
    explanation: "El diseño internacional debe ser flexible. Asumir longitudes de texto en inglés es un error de novato. La solución sistémica es componentes fluidos."
  },
  {
    id: 'mobile_offline_mode_sync_conflict',
    category: "Service Design",
    icon: <Wifi className="w-6 h-6 text-gray-500" />,
    scenario: "Estás diseñando una app para técnicos de campo que trabajan en sótanos sin señal. Necesitan editar datos offline. El problema es la sincronización: ¿Qué pasa si dos técnicos editan lo mismo offline?",
    question: "¿Cómo diseñas la resolución de conflictos?",
    options: [
      { id: 'A', text: "Last Write Wins: El último que sincroniza sobrescribe al anterior automáticamente. Es fácil de programar pero puede borrar datos válidos sin aviso.", score: 1, type: "Riesgoso (Pérdida de datos)" },
      { id: 'B', text: "UI de Conflicto: Detectar el conflicto al reconectar y mostrar al usuario ambas versiones (la suya y la del servidor) para que decida cuál guardar.", score: 5, type: "Lead (Transparencia y Control)" },
      { id: 'C', text: "Prevención de Conflictos: Prohibir editar si no hay conexión. Elimina el riesgo de conflictos de sincronización y garantiza integridad de datos. Requiere conexión constante para operar.", score: -1, type: "Prevención Estricta" }
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
      { id: 'B', text: "Zoom UI: Decirle al usuario que haga zoom si no puede tocarlo. Transfieres la carga de la accesibilidad al usuario.", score: -1, type: "Excluyente" },
      { id: 'C', text: "Rediseño Espacial: Reorganizar el layout para separar los botones visualmente con mayor spacing. Mejora la experiencia reduciendo errores accidentales mediante mejor distribución espacial.", score: 3, type: "Parcial" }
    ],
    explanation: "Los estándares de Apple y Google existen por biomecánica, no capricho. Un área táctil invisible (padding) resuelve la usabilidad sin necesariamente cambiar la estética visual."
  },
  {
    id: 'pwa_vs_native_political_war',
    category: "Estrategia de Plataforma",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Engineering quiere PWA (1 codebase, deploy rápido). iOS PM exige app nativa ('push notifications mejores, mejor performance'). Android PM neutral. Tienes 1 sprint para decidir antes de Q planning.",
    question: "¿Cómo decides la arquitectura mobile sin iniciar guerra política?",
    options: [
      { id: 'A', text: "Hybrid Approach (React Native): Compromiso que satisface a nadie completamente. Performance menor a native, complejidad mayor a PWA, pero evitas confrontación directa.", score: 3, type: "Compromiso político (Nadie gana)" },
      { id: 'B', text: "Platform-Specific MVP Test: PWA para Android (80% userbase, menos exigente), Native para iOS (20% userbase, crítico). Aprendes con inversión controlada antes de comprometer arquitectura.", score: 5, type: "Lead (Learn before commit)" },
      { id: 'C', text: "Let Engineering Decide: Confías en el criterio técnico del team dado que tienen más contexto de infraestructura. Ofreces support en UX testing una vez que hayan elegido approach.", score: 1, type: "Delegación técnica" }
    ],
    explanation: "Hybrid es compromiso tibio que no optimiza para ningún caso. Dejar que Engineering decida solo ignora que UX/producto tienen stake crítico en performance y capabilities. Platform-specific test da data real sobre trade-offs antes de bet-the-company decision."
  },
  {
    id: 'mobile_performance_budget_sacrifice',
    category: "Mobile Performance",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Tu app pesa 85MB y tarda 8s en cold start. Compromiso con Product: llegar a <40MB y <3s. Ingeniería dice que remover half-used SDKs (analytics de 3 vendors, AB testing, crashlytics, feature flags) es 'imposible sin romper funcionalidad'.",
    question: "¿Cómo alcanzas performance budget sin romper features críticas?",
    options: [
      { id: 'A', text: "SDK Audit ROI: Evalúas cada MB de SDK vs su valor real. Mantienes Crashlytics + 1 analytics tool, removes el resto. 28MB menos, funcionalidad core intacta.", score: 5, type: "Lead (ROI-based pruning)" },
      { id: 'B', text: "On-Demand Loading: Implementar carga diferida (Lazy Load) para todos los SDKs no críticos. Priorizas el 'Time to Interactive' del dashboard principal y cargas analytics/feature flags en segundo plano.", score: 1, type: "Técnico (Ignora UX real)" },
      { id: 'C', text: "Timeline Extension: Negocias 2 sprints adicionales para refactor perfecto sin comprometer calidad. Priorizas technical excellence y sustainability sobre quick wins inmediatos.", score: 3, type: "Conservador (Pierde momentum)" }
    ],
    explanation: "Lazy loading traslada el problema de startup a runtime - users siguen esperando. Pedir más tiempo es honesto pero erosiona confianza cuando todos están under pressure. SDK audit es brutal pero necesario: la mayoría de SDKs son legacy de experimentos pasados que ya no justifican su peso."
  },
  {
    id: 'touch_target_accessibility_rebellion',
    category: "Accesibilidad & Diseño",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Diseñador Senior se niega a hacer botones de 44pt ('se ve feo, rompe mi diseño minimalista'). Su portfolio tiene 50K followers en Dribbble. El resto del equipo lo idolatra. Accessibility audit encontró 15 violaciones críticas.",
    question: "¿Cómo manejas la rebelión de diseño vs accessibility standards?",
    options: [
      { id: 'A', text: "Compromise de 36pt: Negocias target intermedio entre aesthetics (32pt del diseñador) y accessibility (44pt standard). Propones implementarlo como pilot en features no-críticas para validar con accessibility testers externos.", score: 1, type: "Compromiso incremental" },
      { id: 'B', text: "Educación + Enforcement: Muestras ejemplos de Apple/Google usando 44pt elegantemente. Si se niega, lo sacas del proyecto. Accessibility no es negociable.", score: 5, type: "Lead (Principios > Popularidad)" },
      { id: 'C', text: "Invisible Padding: Implementas hit area de 44pt con padding transparente, ícono visible de 32pt. Cumples el standard técnicamente manteniendo la estética deseada por el diseñador.", score: 3, type: "Hack técnico (Funciona pero no enseña)" }
    ],
    explanation: "Comprometer a 36pt falla el audit y le dice al equipo que acc cessibility es negociable si tienes influencia. Invisible padding funciona pero perpetúa la mentalidad de que accessibility es 'hack' vs diseño fundamental. Un Lead (B) usa esto como teachable moment: accessibility IS good design."
  },
  {
    id: 'offline_mode_scope_creep',
    category: "Mobile Architecture",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "PM quiere 'offline mode' para cerrar deal Enterprise ($400K). Ingeniería estima 4 meses (sync conflicts, data consistency, cache invalidation). El cliente necesita demo funcional en 6 semanas para board approval.",
    question: "¿Cómo balanceas promesa de venta vs realidad técnica?",
    options: [
      { id: 'A', text: "Optimistic UI: Implementar UI optimista que permita trabajar sin conexión y guarde los cambios localmente para sincronizar al recuperar señal. Priorizas la fluidez de la demo para cerrar el trato.", score: 1, type: "Demo-driven (Deuda técnica masiva)" },
      { id: 'B', text: "Scoped Offline (Read-Only): Implementas offline viewing de data crítica en 3 semanas. Escritura requiere conexión. Cumples 80% del caso de uso Enterprise sin 4 meses de complejidad.", score: 5, type: "Lead (Pragmatic scoping)" },
      { id: 'C', text: "Enterprise Custom Build: Vendes como Professional Service ($80K, 4 meses). No contamina roadmap core pero requiere capital político con CPO para aprobar services model.", score: 3, type: "Services (Clean pero requiere buy-in)" }
    ],
    explanation: "Fake offline es trampa que explota en real use - conflictos de sync son problema hard, no falta de tiempo. Professional service es limpio pero startups raramente tienen services org. Scoped offline read-only cumple el job-to-be-done real (ver data on plane) sin construir Google Docs offline sync."
  },
  {
    id: 'cross_platform_design_debt_explosion',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Tienes 3 designers: uno diseña solo iOS (HIG purista), otro solo Android (Material fanático), otro Web. Los 3 productos se ven completamente distintos. Users confundidos, engineering mantiene 3 design systems.",
    question: "¿Cómo unificas sin iniciar revuelta de plataform puristas?",
    options: [
      { id: 'A', text: "Platform-Specific Excellence: Aceptas divergencia como 'respeto por platform conventions'. Cada plataforma es excelente en su silo pero brand inconsistente.", score: 3, type: "Purista (Fragmentación de marca)" },
      { id: 'B', text: "Core + Platform Variants: Defines 20 componentes core unificados (buttons, forms, nav) + permites platform-specific flourishes en 20% del UI. Brand coherente, platforms respetadas.", score: 5, type: "Lead (Principled flexibility)" },
      { id: 'C', text: "Force One Design: Impones Material Design en todos lados ('Android tiene más users'). iOS users odian la experiencia, tu iOS designer renuncia.", score: 1, type: "Autoritario (Aliena users y equipo)" }
    ],
    explanation: "Pure platform fidelity fragmenta la marca cuando user cruza devices. Forcing one design language ignora que iOS users EXPECT iOS patterns. Core + variants es el balance: button styling puede variar (platform), pero placement y IA son consistentes (brand)."
  },
  {
    id: 'mobile_onboarding_seven_screen_hell',
    category: "Mobile Onboarding",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu onboarding tiene 7 pantallas explicativas. Analytics: 60% drop-off en screen 3. Marketing exige agregar 2 screens más (GDPR consent + promotional opt-in). Completion rate actual: 22%.",
    question: "¿Qué haces con el onboarding que nadie completa?",
    options: [
      { id: 'A', text: "Progressive Onboarding: Eliminas todo onboarding upfront. Users entran directo, aprenden con tooltips contextuales on-demand. GDPR en primera interacción relevante, promo opt-in post-first-value.", score: 5, type: "Lead (Zero friction onboarding)" },
      { id: 'B', text: "Reduce a 3 Screens Core: Cortas a valor esencial solamente. GDPR y promo van después. Mejora a ~40% completion pero sigue siendo fricción upfront vs progressive.", score: 3, type: "Mejora incremental (No resuelve raíz)" },
      { id: 'C', text: "Progress Motivation: Mantener los pasos necesarios pero agregar una barra de progreso gamificada y micro-recompensas visuales. Motivas al usuario a completar el flujo mediante refuerzo positivo y visibilidad del avance.", score: 1, type: "Lipstick on pig" }
    ],
    explanation: "Gamification es parche cosmético cuando el problema es que users no quieren 7 screens. Reducir a 3 es mejor pero todavía pregunta 'qué quieres lograr' antes de dejar usar el producto. Progressive (A) es contraintuitivo pero funciona: Slack/Notion te dejan entrar sin tutorial, aprendes haciendo. GDPR se puede mostrar en first data access."
  },
];
