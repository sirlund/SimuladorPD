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
      { id: 'A', text: "**React Native / Wrapper:** Usas Capacitor para empaquetar la web actual. Publicas en 3 semanas. Calidad 'media' pero cumples el requisito de venta ('tenemos app') sin contratar equipo nuevo.", score: 5, type: "Lead (Pragmático de Mercado)" },
      { id: 'B', text: "**Defender PWA:** Intentas educar al banco sobre las bondades de las Progressive Web Apps. Arriesgas perder el deal porque los bancos compran checkboxes ('¿Tienen app? Sí/No').", score: 1, type: "Purista Técnico (Pierde negocio)" },
      { id: 'C', text: "**Contratar Agencia Mobile:** Gastas $150k en una agencia para hacer la app nativa. Quemas budget y creas un codebase que tu equipo no sabe mantener. Deuda técnica futura masiva.", score: 3, type: "Caro y Riesgoso" }
    ],
    explanation: "En B2B Enterprise, el requisito real suele ser 'estar en el Store', no performance nativa perfecta. El **Wrapper** (React Native/Capacitor) resuelve el checkbox comercial aprovechando el skillset actual. Defender **PWA** es técnicamente correcto pero pierde deals. Contratar Agencia externa genera codebase que tu equipo no puede mantener."
  },
  {
    id: 'tablet_edge_case',
    category: "Diseño Responsive",
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    scenario: "Analytics muestra que solo el 3% del tráfico viene de tablets (4,200 usuarios/mes). El diseño actual se rompe visualmente en iPad landscape (1024x768): botones cortados, texto overflow, y un formulario crítico inutilizable. QA lo reporta como 'bug crítico P0' bloqueando el release. Tu Engineering Manager te escribe: 'Arreglarlo toma 1 día de desarrollo - ¿realmente vale la pena retrasar el deploy por el 3%?'. El deployment con $180K en features nuevas está programado para mañana 9 AM. Sin embargo, Customer Success te alerta: 'Ese 3% incluye a 12 clientes enterprise que usan iPads en sus salas de reuniones para demos - son $340K ARR'.",
    question: "¿Cómo priorizas este issue?",
    options: [
      { id: 'A', text: "**Arreglo Inmediato:** Demoras el release 1 día. 'Funcionar correctamente en todos los dispositivos' es parte de la calidad básica del producto. 3% sigue siendo miles de usuarios.", score: 1, type: "Perfeccionista (Mal ROI)" },
      { id: 'B', text: "**Análisis de Valor:** Segmentas ese 3% en analytics: Si son clientes Enterprise de alto valor, se arregla antes del release. Si es tráfico casual, se backlogea como P3 post-launch.", score: 5, type: "Lead (Value-Based Priority)" },
      { id: 'C', text: "**Ship y Monitorea:** Lanzas mañana según plan. Solo arreglas el tablet bug si empiezan a llegar quejas explícitas via soporte o impacta métricas clave de conversión.", score: 3, type: "Reactivo (Velocidad)" }
    ],
    explanation: "No todos los usuarios tienen el mismo valor. Cuando el 3% representa clientes enterprise de alto ARR, el porcentaje es irrelevante. El **Análisis de Valor** segmenta tráfico por impacto de negocio antes de priorizar. Arreglo Inmediato asume que todo bug pesa igual sin calcular **ROI**. Ship y Monitorea es reactivo y arriesga romper demos críticos de ventas."
  },
  {
    id: 'gesture_vs_button_mobile',
    category: "Interacción Móvil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "El 40% de los tickets de soporte (127 este mes) son '¿Cómo archivo este item?'. Diseñaste un gesto de 'swipe left' elegante siguiendo patrones de iOS Mail. El PM cita los tickets y exige un botón visible en cada fila. Tú argumentas que 'educar es mejor que contaminar el UI'. El debate está estancado: ¿Priorizas estética minimalista o discoverability inmediata?",
    question: "¿Cómo defiendes la usabilidad sin sacrificar la elegancia?",
    options: [
      { id: 'A', text: "**Diseño Dual:** Mantienes el swipe para power users, pero agregas una acción visible (menú de 3 puntos) para el resto. La discoverability es prioritaria sobre el minimalismo.", score: 5, type: "Lead (Inclusivo)" },
      { id: 'B', text: "**Coach Marks:** Agregar un overlay educativo en el primer uso que señale el gesto de 'Swipe' con una animación clara, aunque el 73% de usuarios cierra tooltips sin leerlos (fuente: Appcues benchmark). Mantienes la UI limpia pero arriesgas perpetuar la confusión para la mayoría.", score: 1, type: "Parche débil" },
      { id: 'C', text: "**Visibilidad Total:** Sacrificas espacio en pantalla y minimalismo estético a favor de claridad funcional completa. Agregas un botón de acción visible en cada fila para asegurar discoverability al 100%.", score: 3, type: "Funcional pero tosco" }
    ],
    explanation: "Cuando los tickets de soporte explotan por un feature invisible, el minimalismo está fallando. **Diseño Dual** ofrece ambos caminos: eficiencia para expertos (swipe) y claridad para novatos (menú visible). Coach Marks son ignorados por el 73% de usuarios. Visibilidad Total resuelve soporte pero desperdicia espacio. La **Discoverability** no se sacrifica por estética."
  },
  {
    id: 'dark_mode_accessibility_conflict',
    category: "Accesibilidad & Diseño",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "El Dark Mode que diseñaste ganó elogios en Dribbble (2.3K likes). Al auditar accesibilidad descubres que textos secundarios (gris #6B7280 sobre #1F2937) tienen ratio de 2.8:1, fallando WCAG AA que requiere 4.5:1. Legal advierte riesgo de compliance para clientes Enterprise. El diseñador original argumenta: 'Subir el gris destruye la jerarquía visual sutil que nos diferencia de la competencia'.",
    question: "¿Qué sacrificas: estética o accesibilidad?",
    options: [
      { id: 'A', text: "**Ajustar los grises:** Ajustar los grises para cumplir el contraste mínimo, aunque se vean menos sutiles y más duros.", score: 5, type: "Lead (Accesibilidad no negociable)" },
      { id: 'B', text: "**High Contrast Mode opcional:** Mantener la estética actual y agregar un 'High Contrast Mode' opcional en Settings para usuarios que lo necesiten.", score: 3, type: "Compromiso (Fragmenta la experiencia)" },
      { id: 'C', text: "**Design Excellence First:** WCAG es guía orientativa para productos genéricos. Los mejores productos (Stripe, Linear) priorizan jerarquía visual sofisticada como diferenciador de marca. La accesibilidad real viene del diseño intencional, no de cumplir ratios arbitrarios.", score: -1, type: "Design Excellence First" }
    ],
    explanation: "Cuando Legal alerta sobre riesgo de compliance, la accesibilidad dejó de ser opcional. Ajustar los grises cumple **WCAG AA** como estándar universal. Un modo especial de alto contraste fragmenta la experiencia y estigmatiza usuarios. Design Excellence First suena sofisticado pero ignora que 15% de usuarios tiene limitaciones visuales y que los estándares se basan en investigación, no capricho."
  },

  // --- BLOQUE 11: COLABORACIÓN, PROCESO & HANDOFF ---
  {
    id: 'dev_pushback_animation',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "El Tech Lead rechaza tu PR de animación diciendo: 'Esto consume mucha CPU en Android low-end y retrasa el TTI (Time to Interactive) de 2.1s a 4.8s'. Te muestra métricas: tu animación baja el score de Lighthouse de 92 a 82. Analytics muestran que el 34% de usuarios están en dispositivos mid-to-low-end. Tú argumentas que sin la animación, el producto pierde diferenciación visual frente a competidores. El debate está en empate: ¿performance técnico o polish percibido?",
    question: "¿Cómo negocias calidad visual vs performance?",
    options: [
      { id: 'A', text: "**Optimización Colaborativa:** Te sientas con él a simplificar la animación (CSS vs JS). Buscas el 80% del impacto visual con el 20% del costo de CPU. Respetas la restricción técnica.", score: 5, type: "Lead (Performance es UX)" },
      { id: 'B', text: "**Insistir en la Calidad:** Argumentas que la animación es diferenciador de brand y que la mayoría de users tienen hardware reciente, aunque Analytics ya mostró que 34% de tu base está en dispositivos low-end. Solicitas más análisis antes de comprometer la visión de diseño.", score: 1, type: "Design-first approach" },
      { id: 'C', text: "**Eliminar la Animación:** Priorizas shipping rápido y score perfecto de Lighthouse, aunque sacrificas la diferenciación visual que justificó el diseño original. Evitas debate técnico prolongado.", score: 1, type: "Pragmático conservador" }
    ],
    explanation: "Cuando 1/3 de usuarios está en hardware low-end, **Performance ES User Experience**. La **Optimización Colaborativa** (CSS en lugar de JS, reducir keyframes) busca el 80% del impacto visual con 20% del costo de CPU. Insistir en la Calidad ignorando lag es miopía. Eliminar la Animación sacrifica diferenciación innecesariamente. **TTI** (Time to Interactive) es métrica clave de **Lighthouse**."
  },
  {
    id: 'pm_changes_scope_mid_sprint',
    category: "Gestión de Roadmap",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Estás a mitad de sprint comprometido (día 6 de 10). El PM viene con un 'small request': agregar un filtro nuevo al dashboard. Haces breakdown rápido: 2 días de trabajo (diseño, estados de carga, edge cases, QA). El PM responde: '¿2 días para un dropdown? Mi anterior diseñador lo hacía en 2 horas'. El equipo de desarrollo te mira esperando tu respuesta. Aceptar mata el sprint commitment. Negarte daña la relación con Product.",
    question: "¿Cómo educas sobre el costo real del cambio?",
    options: [
      { id: 'A', text: "**Aceptas hacerlo:** Lo tomas para mantener buena relación con Product, aunque esto consume 40% del tiempo restante del sprint y arriesgas no cumplir los commitments originales con stakeholders.", score: 1, type: "Complaciente (Mata el Sprint)" },
      { id: 'B', text: "**Visibilidad del Iceberg:** Le muestras el breakdown detallado en Figma (diseño responsive, 5 estados de carga, validación de filtros vacíos, handoff specs, QA de edge cases). Le ofreces meterlo al siguiente sprint o hacer swap con un item del backlog actual de similar esfuerzo.", score: 5, type: "Lead (Educador de Proceso)" },
      { id: 'C', text: "**Te niegas rotundamente:** 'Mid-sprint changes están prohibidos por proceso Agile', aunque no ofreces alternativas ni explicas el impacto real. Cierras la discusión citando el manual de Scrum.", score: 3, type: "Dogmático (Inflexible)" }
    ],
    explanation: "Cuando un 'dropdown' consume la mitad del sprint restante, educar sobre el iceberg es crítico. **Visibilidad del Iceberg** muestra el trabajo oculto (5 estados, **edge cases**, QA) y empodera al PM para decidir con data (nuevo sprint vs swap). Aceptarlo sienta precedente peligroso. Negarse dogmáticamente erosiona la relación. **Scrum** requiere proteger el commitment."
  },
  {
    id: 'qa_reject_pixel_perfect',
    category: "Quality Assurance",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    scenario: "Es jueves 5 PM. QA bloquea el release del Checkout porque el botón de 'Pagar' tiene un contraste de 2.9:1 (WCAG pide 3:1). Legal advierte que es un riesgo de compliance. Product dice: 'Comprometimos este release para la campaña de marketing que sale mañana a las 9 AM. Retrasar nos cuesta la inversión en ads'.",
    question: "¿Qué decisión tomas bajo presión de campaña vs compliance?",
    options: [
      { id: 'A', text: "**Ship It & Fix Monday:** Autorizas el release asumiendo el riesgo por 48 horas. Creas ticket P0 para arreglar el lunes a primera hora. Priorizas la campaña de marketing ya pagada.", score: 3, type: "Pragmático (Riesgo calculado)" },
      { id: 'B', text: "**Hotfix Inmediato:** Te quedas con un dev a arreglar el color hexadecimal ahora mismo, aunque signifique salir tarde. Es un cambio de 1 línea de código. Pides a QA un smoke test rápido solo de ese botón. Proteges compliance y campaña.", score: 5, type: "Lead (Ownership de Calidad)" },
      { id: 'C', text: "**Bloquear Release:** Mantienes el standard de compliance sin excepciones. Comunicas a Marketing que deben coordinar timelines con QA cycles para futuras campañas.", score: 1, type: "Compliance-first" }
    ],
    explanation: "Cuando compliance falla por 1 línea de código y la campaña sale mañana, cancelar es desproporcionado. **Hotfix Inmediato** (30 mins + smoke test) protege compliance Y habilita la campaña sin comprometer estándares. Ship It & Fix Monday asume riesgo legal consciente. Bloquear Release es inflexible. **WCAG** y marketing pueden coexistir con ejecución quirúrgica."
  },
  {
    id: 'documentation_handoff_speed',
    category: "Process",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Debes entregar el diseño de 'Cálculo de Intereses Compuestos' para una Fintech. La lógica es compleja (casos borde, redondeo, fechas de corte). El PM presiona: 'Solo danos las pantallas, los devs deducen la lógica'. Sabes que si lo interpretan mal, usuarios perderán dinero real y habrá demandas. Documentar la lógica completa toma 2 días que no tienes.",
    question: "¿Cómo gestionas el riesgo de implementación en un feature financiero crítico?",
    options: [
      { id: 'A', text: "**Entregar Pantallas + Disclaimer:** Entregas el UI y clarificas que Backend owns la lógica de cálculo, aunque los devs no tienen expertise financiero y el riesgo de implementación incorrecta puede resultar en demandas reales de usuarios perdiendo dinero.", score: 1, type: "Handoff tradicional" },
      { id: 'B', text: "**Pairing con Tech Lead:** En lugar de documentar 2 días, te sientas 3 horas con el Tech Lead a escribir los 'Test Cases' críticos (redondeo, fechas de corte, edge cases). Aseguras entendimiento lógico antes de codear, aunque requiere coordinación de agendas inmediata.", score: 5, type: "Lead (Colaboración de Alto Valor)" },
      { id: 'C', text: "**Documentación Completa:** Bloqueas el handoff hasta que termines el documento completo de especificación (2 días), aunque esto retrasa el timeline del PM y arriesgas que los devs deduzcan la lógica por su cuenta mientras esperas.", score: 1, type: "Documentación Completa" }
    ],
    explanation: "En dominios de alto riesgo como **Fintech**, la ambigüedad puede resultar en demandas reales. **Pairing** con Tech Lead (3 horas de test cases críticos) transfiere lógica compleja sin bloquear timelines. Documentación Completa (2 días) arriesga que devs empiecen sin esperar. Entregar Pantallas + Disclaimer es negligencia que expone usuarios a pérdidas financieras. **Edge cases** financieros tienen consecuencias legales."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'i18n_rtl_layout_challenge',
    category: "Internationalization (i18n)",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "La empresa firmó un deal de $1.2M para expandir a Medio Oriente (Árabe/Hebreo). Tu UI actual usa CSS hardcodeado con 'margin-left', 'text-align: left' en 847 componentes. El CEO pregunta: '¿Solo traducimos los textos o hay más?'. Engineering estima 6 semanas de refactor completo para CSS lógico (margin-inline-start). El cliente espera beta funcional en 4 semanas. Marketing ya diseñó la campaña de lanzamiento asumiendo solo traducción.",
    question: "¿Cómo explicas el impacto de RTL (Right-to-Left)?",
    options: [
      { id: 'A', text: "**Espejo Completo con Refactor:** Educas al CEO sobre RTL (invierte texto, flechas temporales, jerarquía visual, iconos). Propones refactor de CSS lógico en 6 semanas, aunque esto retrasa la beta 2 semanas vs expectativa del cliente y compromete la campaña de Marketing.", score: 5, type: "Lead (Cultural Awareness)" },
      { id: 'B', text: "**Solo Texto:** Aceptas traducir solo textos y dejar la UI alineada a la izquierda ('se entenderá igual'), aunque entregas una experiencia rota cognitivamente para usuarios nativos de árabe/hebreo y arriesgas el rechazo del cliente en la primera revisión.", score: 1, type: "Ignorante" },
      { id: 'C', text: "**Ajuste Manual Rápido:** Aplicas `text-align: right` y `direction: rtl` manualmente en 847 componentes para cumplir el timeline de 4 semanas, aunque creas deuda técnica masiva (sin CSS lógico) y bugs visuales que aparecerán en producción.", score: 1, type: "Ajuste Manual" }
    ],
    explanation: "**RTL** (Right-to-Left) no es 'solo traducción' - invierte toda la cognición espacial (flechas, jerarquía, iconos). **Espejo Completo con Refactor** (6 semanas de **CSS lógico**) entrega calidad arquitectónica negociando timeline realista. Solo Texto entrega experiencia cognitivamente rota. Ajuste Manual cumple timeline pero crea **deuda técnica** masiva y bugs inevitables. **i18n** requiere planificación, no parches."
  },
  {
    id: 'i18n_german_long_words_break_ui',
    category: "Internationalization (i18n)",
    icon: <Languages className="w-6 h-6 text-indigo-500" />,
    scenario: "Diseñaste botones con ancho fijo de 120px basado en textos en inglés. Al traducir a alemán para el lanzamiento en DACH (Alemania-Austria-Suiza, mercado valorado en $800K), 'Save' se convierte en 'Speichern' (9 chars vs 4). QA reporta que 23 botones críticos se rompen visualmente. El equipo de desarrollo sugiere truncar con '...' para cumplir el deadline de 2 días. El traductor dice que no hay palabra más corta en alemán sin perder precisión.",
    question: "¿Cómo solucionas la escalabilidad del texto?",
    options: [
      { id: 'A', text: "**Diseño Fluido:** Refactorizar 23 botones para ancho dinámico (auto-layout) permitiendo que el texto respire. El diseño se adapta al contenido, aunque requiere 1 día de refactor y re-testing en todos los idiomas soportados.", score: 5, type: "Lead (Scalable UI)" },
      { id: 'B', text: "**Truncar Texto:** Aceptas 'Speich...' en 23 botones para cumplir el deadline de 2 días, aunque los usuarios alemanes verán texto mutilado y tendrán que adivinar la acción ('Speich...' = ¿Speichern? ¿Speicher? ¿Speicherkarte?).", score: 1, type: "Estético Rígido" },
      { id: 'C', text: "**Cambiar el Copy:** Pides al traductor palabras más cortas en alemán, aunque ya te confirmó que no existe equivalente preciso. Pierdes 1 día en negociaciones de copy sin solución sistémica para futuros idiomas.", score: 3, type: "Parche de Contenido" }
    ],
    explanation: "Asumir longitudes de texto basadas en inglés es error de diseño fundamental. **Diseño Fluido** (auto-layout, 1 día de refactor) resuelve sistémicamente para todos los idiomas futuros. Truncar a 'Speich...' confunde usuarios y prioriza estética rígida. Cambiar el Copy cuando no hay alternativa desperdicia tiempo sin resolver el problema sistémico. **i18n** requiere diseño que acepte expansión del 30-40%."
  },
  {
    id: 'mobile_offline_mode_sync_conflict',
    category: "Service Design",
    icon: <Wifi className="w-6 h-6 text-gray-500" />,
    scenario: "Estás diseñando una app para 340 técnicos de campo (utilities company, contrato de $600K). Trabajan en sótanos sin señal 60% del tiempo según telemetría. Necesitan editar órdenes de trabajo offline. El CTO pregunta: '¿Qué pasa si dos técnicos editan la misma orden simultáneamente sin conexión?'. Engineering propone 'Last Write Wins' (simple, 2 semanas). Tú adviertes que esto puede borrar datos críticos de inspección sin aviso. El cliente espera la demo en 3 semanas.",
    question: "¿Cómo diseñas la resolución de conflictos?",
    options: [
      { id: 'A', text: "**Last Write Wins:** El último que sincroniza sobrescribe automáticamente (implementación simple, 2 semanas, cumple demo), aunque puede borrar datos críticos de inspección sin aviso cuando dos técnicos editan la misma orden offline.", score: 1, type: "Riesgoso (Pérdida de datos)" },
      { id: 'B', text: "**UI de Conflicto:** Detectar el conflicto al reconectar y mostrar al usuario ambas versiones (la suya vs servidor) para que decida cuál guardar, aunque requiere 1 semana adicional de UX y testing para cubrir edge cases.", score: 5, type: "Lead (Transparencia y Control)" },
      { id: 'C', text: "**Optimistic Lock Strategy:** Bloqueas edición si no hay conexión para garantizar integridad de datos. Los mejores sistemas enterprise (SAP, Oracle) previenen conflictos en lugar de resolverlos. La sincronización sin conflictos es el gold standard de arquitectura.", score: -1, type: "Optimistic Lock Strategy" }
    ],
    explanation: "Para trabajadores de campo sin señal el 60% del tiempo, la app DEBE funcionar offline. **UI de Conflicto** (+1 semana) empodera al usuario para resolver discrepancias transparentemente. Last Write Wins cumple demo rápido pero borra datos críticos. Optimistic Lock suena a best practice pero destruye el caso de uso (trabajar sin señal). **Service Design** de campo requiere **offline-first**."
  },
  {
    id: 'mobile_touch_targets_accessibility',
    category: "Compliance & UX",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu UI tiene botones de acción de 24x24px muy juntos para maximizar densidad de información. Accessibility audit falla con 18 violaciones críticas. Soporte reporta 47 tickets este mes de 'Fat Finger Error' (usuarios tocan 'Delete' cuando querían 'Edit'). El Designer Lead argumenta: 'Subir a 44px desperdicia espacio premium en pantallas mobile y se ve torpe visualmente'.",
    question: "¿Qué estándar aplicas?",
    options: [
      { id: 'A', text: "**Regla 44px/48px:** Aumentar el área táctil mínima a 44pt (iOS) o 48dp (Android) usando padding transparente, aunque el Designer Lead considera que 'se ve torpe' comparado con el diseño denso actual.", score: 5, type: "Lead (Estándar de Plataforma)" },
      { id: 'B', text: "**User Empowerment:** Los usuarios pueden hacer zoom si necesitan targets más grandes. Los mejores productos (Medium, Substack) confían en la habilidad del usuario para adaptar la interfaz a sus necesidades. La accesibilidad viene del empoderamiento, no de restricciones de diseño.", score: -1, type: "User Empowerment" },
      { id: 'C', text: "**Rediseño Espacial:** Reorganizas el layout para separar los botones visualmente con mayor spacing (32px targets con más separación), aunque no cumples totalmente el estándar de 44px y el accessibility audit seguirá fallando.", score: 3, type: "Parcial" }
    ],
    explanation: "Los **Touch Targets** de 44px/48px se basan en biomecánica, no en moda. La **Regla 44px** con padding invisible mantiene estética mientras cumple estándar. User Empowerment es filosofía que falla audits. Rediseño Espacial a 32px es compromiso tibio. Diseñar para todos no es opcional, es diseño profesional."
  },
  {
    id: 'pwa_vs_native_political_war',
    category: "Estrategia de Plataforma",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Debate interno sobre arquitectura mobile para Q2. Engineering prefiere PWA (1 codebase, deploy continuo, skillset actual). iOS PM exige app nativa ('push notifications confiables, performance superior, 35% de nuestros paying users están en iOS'). Android PM neutral. CFO pregunta: '¿Cuánto cuesta cada opción?'. Engineering estima: PWA (6 semanas, $80K), Native iOS+Android (16 semanas, $280K). Tienes 1 sprint para decidir antes de Q planning y resource allocation.",
    question: "¿Cómo decides la arquitectura mobile sin iniciar guerra política?",
    options: [
      { id: 'A', text: "**Hybrid Approach (React Native):** Compromiso que satisface a nadie completamente (performance menor a native, complejidad mayor a PWA), aunque evitas la confrontación directa y cierras la decisión rápido para cumplir el planning deadline.", score: 3, type: "Compromiso político (Nadie gana)" },
      { id: 'B', text: "**Platform-Specific MVP Test:** PWA para Android (65% userbase, menos exigente de performance) + Native para iOS (35% paying users, crítico para retention). Aprendes con inversión controlada ($150K, 10 semanas) antes de comprometer arquitectura full, aunque aumenta complejidad de mantenimiento durante el test.", score: 5, type: "Lead (Learn before commit)" },
      { id: 'C', text: "**Let Engineering Decide:** Confías en el criterio técnico del equipo dado que tienen más contexto de infraestructura y skillset, aunque ignoras que el iOS PM tiene data sobre 35% de paying users y el CFO necesita justificar $280K de inversión.", score: 1, type: "Delegación técnica" }
    ],
    explanation: "Cuando la decisión cuesta $200K y afecta arquitectura multi-año, aprender antes de comprometer es crítico. **Platform-Specific MVP Test** (PWA en Android + Native en iOS, $150K) da data real antes de comprometer arquitectura completa. Hybrid Approach es compromiso tibio. Let Engineering Decide ignora el input crítico sobre paying users y **ROI**. **React Native** es framework híbrido."
  },
  {
    id: 'mobile_performance_budget_sacrifice',
    category: "Mobile Performance",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "Tu app pesa 85MB y tarda 8s en cold start en dispositivos mid-range. Compromiso con Product: llegar a <40MB y <3s para evitar abandono en onboarding. Análisis de SDKs: 3 analytics tools (Mixpanel 12MB, Amplitude 8MB, GA 6MB), AB testing (Optimizely 9MB), Crashlytics (5MB), Feature Flags (LaunchDarkly 7MB). Ingeniería argumenta que remover cualquiera 'rompe funcionalidad crítica'. El PM muestra data: 28% de installs abandonan durante el cold start de 8s.",
    question: "¿Cómo alcanzas performance budget sin romper features críticas?",
    options: [
      { id: 'A', text: "**SDK Audit ROI:** Auditas cada MB vs valor real. Mantienes Crashlytics (5MB, crítico para stability) + Amplitude (8MB, analytics primario), removes Mixpanel (12MB, redundante), GA (6MB, poco usado), Optimizely (9MB, A/B testing puede ser server-side). Total: -27MB, funcionalidad core intacta, aunque pierdes capacidad de A/B testing client-side.", score: 5, type: "Lead (ROI-based pruning)" },
      { id: 'B', text: "**On-Demand Loading:** Implementas lazy load para SDKs no-críticos, priorizando Time to Interactive del dashboard principal, aunque esto solo mejora cold start percibido (3.5s vs 8s real) y usuarios siguen esperando cuando navegan a features que requieren los SDKs.", score: 1, type: "Técnico (Ignora UX real)" },
      { id: 'C', text: "**Timeline Extension:** Negocias 2 sprints adicionales para refactor perfecto sin comprometer ningún SDK, aunque el PM ya tiene data de 28% de abandono actual y cada semana de delay cuesta installs reales.", score: 3, type: "Conservador (Pierde momentum)" }
    ],
    explanation: "Cuando 28% de installs abandonan durante cold start, el costo de inacción es alto. **SDK Audit ROI** es brutal pero necesario: eliminar redundancias (3 analytics tools) mientras mantienes stability (Crashlytics). Lazy loading solo mejora percepción inicial pero usuarios esperan igual al navegar. Timeline Extension ignora que cada semana cuesta installs reales. **Performance Budget** no es opcional."
  },
  {
    id: 'touch_target_accessibility_rebellion',
    category: "Accesibilidad & Diseño",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Diseñador Senior (50K followers en Dribbble, contratado por $140K) se niega a hacer botones de 44pt: 'Rompe mi diseño minimalista que nos diferencia de la competencia genérica'. Su trabajo ganó premios y el equipo lo idolatra. Accessibility audit encontró 15 violaciones críticas de touch targets (24-32pt actuales). Legal advierte riesgo de compliance para clientes Enterprise. El CEO pregunta: '¿Seguimos los estándares o confiamos en la visión del diseñador?'.",
    question: "¿Cómo manejas la rebelión de diseño vs accessibility standards?",
    options: [
      { id: 'A', text: "**Compromise de 36pt:** Negocias target intermedio entre aesthetics (32pt) y accessibility (44pt), aunque esto falla el audit igualmente y le dice al equipo que la accesibilidad es negociable si tienes suficiente influencia social.", score: 1, type: "Compromiso incremental" },
      { id: 'B', text: "**Educación + Enforcement:** Muestras ejemplos de Stripe/Linear/Apple usando 44pt elegantemente con spacing inteligente. Si persiste la negativa después de educación, lo sacas del proyecto, aunque arriesgas perder el diseñador estrella ($140K) y desmoralizar al equipo que lo idolatra.", score: 5, type: "Lead (Principios > Popularidad)" },
      { id: 'C', text: "**Invisible Padding:** Implementas hit area de 44pt con padding transparente + ícono visible de 32pt. Cumples el audit técnicamente manteniendo la estética, aunque esto perpetúa la mentalidad de que accessibility es un 'hack' que se aplica después, no diseño inclusivo desde el inicio.", score: 3, type: "Hack técnico (Funciona pero no enseña)" }
    ],
    explanation: "Cuando compliance falla, esto es momento definitorio de cultura de producto. **Educación + Enforcement** (ejemplos de Stripe/Linear/Apple) enseña que la accesibilidad ES diseño de excelencia. Comprometer a 36pt normaliza que influencia social vence estándares. Invisible padding funciona técnicamente pero enseña que **Accesibilidad** es 'hack post-diseño'. Ninguna cantidad de followers justifica excluir usuarios."
  },
  {
    id: 'offline_mode_scope_creep',
    category: "Mobile Architecture",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "PM quiere 'offline mode' para cerrar deal Enterprise ($400K). Ingeniería estima 4 meses (sync conflicts, data consistency, cache invalidation). El cliente necesita demo funcional en 6 semanas para board approval.",
    question: "¿Cómo balanceas promesa de venta vs realidad técnica?",
    options: [
      { id: 'A', text: "**Optimistic UI:** Implementas UI optimista que permite trabajar offline y sincroniza al recuperar señal. Demo fluida para cerrar el trato en 6 semanas, aunque sin resolver conflictos de escritura concurrente, cache invalidation y data consistency (deuda técnica de 4 meses que heredará el equipo).", score: 1, type: "Demo-driven (Deuda técnica masiva)" },
      { id: 'B', text: "**Scoped Offline (Read-Only):** Implementas offline viewing de data crítica (últimas 50 órdenes, PDFs, specs) en 3 semanas. Escritura/edición requiere conexión. Cumples 80% del caso de uso real Enterprise ('consultar info en el campo') sin 4 meses de complejidad de sync bidireccional.", score: 5, type: "Lead (Pragmatic scoping)" },
      { id: 'C', text: "**Enterprise Custom Build:** Propones venderlo como Professional Service ($80K adicional, 4 meses post-contrato). No contamina roadmap core con feature ultra-específica, aunque requiere convencer al CPO de aprobar services model y arriesgas que el cliente rechace el costo extra.", score: 3, type: "Services (Clean pero requiere buy-in)" }
    ],
    explanation: "Cuando el gap es 6 semanas vs 4 meses, el scope es la respuesta. **Scoped Offline** (Read-Only de últimas 50 órdenes, 3 semanas) cumple el Job-to-be-Done real ('consultar info en el campo') sin la complejidad de **sincronización bidireccional**. Optimistic UI es trampa que explota en producción. Professional Service arriesga perder el deal. **Cache invalidation** es problema notoriamente difícil."
  },
  {
    id: 'cross_platform_design_debt_explosion',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Tienes 3 designers especializados: iOS (HIG purista), Android (Material fanático), Web (custom design system). Los 3 productos se ven completamente distintos. Soporte reporta 67 tickets este mes de 'No encuentro el botón X en mobile que sí está en web'. Engineering mantiene 3 design systems separados (Figma, código, documentación). El CTO se queja: 'Cada feature toma 3x el tiempo para mantener consistency cross-platform'. Brand Manager muestra user research: 'Los usuarios no reconocen que las 3 apps son del mismo producto'.",
    question: "¿Cómo unificas sin iniciar revuelta de plataform puristas?",
    options: [
      { id: 'A', text: "**Platform-Specific Excellence:** Aceptas divergencia permanente como 'respeto por platform conventions'. Cada plataforma es nativa excelente en su silo, aunque los usuarios siguen confundidos (67 tickets/mes), engineering mantiene 3x el esfuerzo y brand es inconsistente.", score: 3, type: "Purista (Fragmentación de marca)" },
      { id: 'B', text: "**Core + Platform Variants:** Defines 20 componentes core unificados (buttons, forms, nav, colors, typography) que funcionan igual en todas las plataformas + permites platform-specific flourishes (gestures, transitions) en 20% del UI. Brand coherente, platforms respetadas, aunque requiere 1 mes de refactor y alineación del equipo.", score: 5, type: "Lead (Principled flexibility)" },
      { id: 'C', text: "**Force One Design:** Impones Material Design en todos lados porque 'Android tiene 65% de users'. Reduces mantenimiento a 1 sistema, aunque iOS users odian la experiencia no-nativa, tu iOS designer (HIG purista) renuncia y pierdes diferenciación de plataforma.", score: 1, type: "Autoritario (Aliena users y equipo)" }
    ],
    explanation: "Cuando los usuarios no reconocen la marca cross-platform y engineering mantiene 3x el esfuerzo, el status quo es insostenible. **Core + Platform Variants** (20 componentes unificados + 20% de flourishes nativos) logra balance: consistencia de marca, respeto por convenciones de cada OS. Platform-Specific Excellence perpetúa fragmentación. Force One Design aliena usuarios y pierde diferenciación."
  },
  {
    id: 'mobile_onboarding_seven_screen_hell',
    category: "Mobile Onboarding",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu onboarding mobile tiene 7 pantallas explicativas (bienvenida, features x3, permisos, tutorial, signup). Analytics muestra: 60% drop-off en screen 3, completion rate de solo 22% (de 10,000 installs mensuales, solo 2,200 completan onboarding). Marketing exige agregar 2 screens más (GDPR consent obligatorio + promotional opt-in para campañas). Proyección: completion caería a ~12%. El CEO pregunta: '¿Por qué nuestra competencia tiene onboarding de 2 pasos y nosotros 7?'.",
    question: "¿Qué haces con el onboarding que nadie completa?",
    options: [
      { id: 'A', text: "**Progressive Onboarding:** Eliminas todo onboarding upfront. Users entran directo al dashboard, aprenden con tooltips contextuales on-demand al usar features. GDPR aparece en primera acción que requiere consent, promo opt-in post-first-value. Maximiza completion (90%+), aunque requiere rediseño de 2 semanas y convencer a Legal que GDPR just-in-time es válido.", score: 5, type: "Lead (Zero friction onboarding)" },
      { id: 'B', text: "**Reduce a 3 Screens Core:** Cortas a lo esencial (bienvenida, signup, 1 feature key). GDPR y promo pospuestos. Completion sube a ~40%, aunque sigue siendo fricción upfront que pierde 60% de installs y no resuelve la raíz del problema (onboarding como barrera).", score: 3, type: "Mejora incremental (No resuelve raíz)" },
      { id: 'C', text: "**Progress Motivation:** Mantienes las 7 pantallas pero agregas barra de progreso gamificada (5/7), micro-celebraciones y recompensas visuales. Motivas mediante refuerzo positivo, aunque el problema real es que los usuarios no quieren 7 pantallas de educación antes de ver valor.", score: 1, type: "Lipstick on pig" }
    ],
    explanation: "Cuando el onboarding pierde 78% de installs, la barrera upfront está matando adquisición. **Progressive Onboarding** (entrada directa + tooltips contextuales, 90%+ completion) elimina fricción y enseña en contexto, minimizando **Time-to-Value**. Gamification es parche cosmético. Reducir a 3 mejora a ~40% pero sigue perdiendo 60%. **Progressive Enhancement** entrega funcionalidad core primero."
  },
];
