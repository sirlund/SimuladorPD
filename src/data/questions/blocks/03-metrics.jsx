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
 * Crisis, Data & Experimentación
 */
export const metrics_questions = [
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
    scenario: "Tu competidor lanzó 'Reportes AI' y el VP de Ventas está en pánico tras perder 3 deals ($340K). Exige clonarlo en 1 sprint para 'salvar el Q'. Sin embargo, tu research confirma que la queja #1 de los clientes actuales es la lentitud de los reportes, no la falta de AI. Engineering estima que clonar tomaría 8 semanas, paralizando la optimización de velocidad.",
    question: "¿Cómo respondes al VP de Ventas ante presión competitiva vs. evidencia de usuario?",
    options: [
      { id: 'A', text: "Obediencia a Ventas: Pivotar todo el equipo a clonar 'Reportes AI' inmediatamente. Asumes que perder deals nuevos es más grave que frustrar a usuarios actuales.", score: 0, type: "Feature Factory" },
      { id: 'B', text: "Diagnóstico de Deals: Entrevistar hoy mismo a esos 3 clientes. ¿Realmente querían 'AI' o solo necesitaban exportar data? Resuelves el problema de fondo, no la solución.", score: 5, type: "Lead (Estratégico)" },
      { id: 'C', text: "Contra-oferta Táctica: Lanzar 'Export to Excel' rápido y vender nuestra velocidad como ventaja competitiva. 'Ellos tienen AI lenta, nosotros reportes instantáneos'.", score: 4, type: "Pragmático" }
    ],
    explanation: "Copiar por pánico (A) es amateur. La C es un buen parche. La B es liderazgo: frenar la histeria para entender el problema real. A veces el cliente pide 'AI' pero necesita 'Excel'."
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
    scenario: "La velocidad del equipo cayó 40% por deuda técnica acumulada. Engineering exige un 'Refactor Sprint' de 2 semanas sin features nuevas. Product dice que es imposible parar el roadmap ahora.",
    question: "¿Qué estrategia de balance deuda/delivery propones al Board AHORA con amenaza de renuncia de engineers?",
    options: [
      { id: 'A', text: "Ignorar la deuda: Seguir shippeando features aunque sea lento. Apuestas a que el revenue de nuevas features compensará la ineficiencia operativa.", score: 1, type: "Miope" },
      { id: 'B', text: "Tax de Deuda: Acordar dedicar 20% de cada sprint a refactor progresivo. Evitas el parón total traumático pero pagas la deuda constantemente.", score: 5, type: "Lead (Sostenible)" },
      { id: 'C', text: "Parón Total: Apoyar detener el roadmap 2 semanas. Argumentas que es mejor sufrir un retraso corto ahora que sangrar eficiencia por meses.", score: 3, type: "Drástico" }
    ],
    explanation: "Con Board en sala, engineers amenazando renuncia, y $1.4M en juego, esta decisión define tu liderazgo. Big Bang (C) es técnicamente defendible pero político suicidio - el Board ve '$1.4M en riesgo hoy' vs 'velocidad hipotética futura'. Parallel track (A) suena como compromiso pero es honesto sobre probabilidad de fallo (60% según data histórica) - el Board aprecia transparencia, pero puede rechazarlo por riesgo. Strangler Fig (B) es la jugada de Lead experimentado: aceptas pérdida de $180K explícitamente (13% del pipeline), salvas $1.2M (87%), retienes engineers sin caos, y mantienes operación. Es costo medido en vez de apuesta. Un Lead entiende que ante Board, 'perder $180K con control' >> 'arriesgar $1.4M con esperanza'. La pérdida calculada demuestra juicio ejecutivo."
  },

  // --- BLOQUE 8: DATA, MÉTRICAS & EXPERIMENTACIÓN ---
  {
    id: 'ab_test_interpretation_bias',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Un A/B test crítico para el nuevo Home fue inconcluso (sin mejora estadística). Tu PM quiere lanzarlo igual, haciendo cherry-picking de una métrica secundaria positiva para justificarlo ante el CEO.",
    question: "¿Qué recomendación das sobre el launch del lunes sabiendo que CFO ya prometió $1.8M al Board?",
    options: [
      { id: 'A', text: "Apoyar el lanzamiento: 'Done is better than perfect'. Argumentas que el 8% de mejora, aunque no significativo, es mejor que nada.", score: 2, type: "Complaciente" },
      { id: 'B', text: "Defensa de la Data: 'El test falló. Si lanzamos, ensuciamos el producto sin valor probado. Iteremos la hipótesis y testeemos de nuevo'.", score: 5, type: "Lead (Integridad de Data)" },
      { id: 'C', text: "Lanzamiento Vigilado: Lanzar pero monitorear de cerca por 48h. Si la conversión baja, haces rollback inmediato. Asumes el riesgo.", score: 3, type: "Riesgoso" }
    ],
    explanation: "Con CFO prometiendo $1.8M al Board y VP de Revenue presionando launch, esta es crisis de trade-offs. La C es purista (proteger NPS/brand) pero el costo político de retractar forecast al Board puede ser career-ending para CFO - además, 2 semanas más de testing no garantiza solución. La A tiene lógica cuantitativa fuerte (+8.2% es significativo, 47 tickets es 0.5% de muestra) PERO ignora la señal más crítica: Variante B optimiza para NEW customers (+12%) pero daña REPEAT customers (-4%). Si tu LTV depende de repeat purchase (común en SaaS/ecommerce), estás optimizando la métrica equivocada - ganas $1.8M short-term pero destruyes LTV long-term. La B es la jugada de Lead senior: hace análisis de cohorte profundo y descubre que el '+8%' esconde un trade-off peligroso (new vs repeat). Propone launch SEGMENTADO (Variante B solo para new, Control para repeat) que captura ganancia donde aplica (+12% new) sin dañar donde no (+4% repeat). La proyección baja a $680K (CFO debe ajustar Board deck - doloroso) pero proteges unit economics. Un Lead experto reconoce que 'conversión' sin contexto de QUIÉN convierte es vanity metric. La diferencia sutil: opción A confía en que '8.2% es 8.2%', todos los usuarios son iguales. Opción B reconoce que new customers != repeat customers, LTV importa más que conversión bruta. En crisis de forecast prometido a Board, la tentación es lanzar y 'monitorear después' (A), pero si estás optimizando para el segmento equivocado, el daño ya está hecho cuando lo descubres post-launch."
  },
  {
    id: 'vanity_metric_viral_growth',
    category: "Métricas de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Un hack viral trajo 50k usuarios nuevos en una semana. Los inversores celebran el crecimiento 'explosivo', pero tu data muestra que la retención día-30 es del 0.5%. Es tráfico basura.",
    question: "¿Cómo evalúas el verdadero ROI del feature ante el equipo ejecutivo con data contradictoria?",
    options: [
      { id: 'A', text: "Celebrar con ellos: El crecimiento ayuda a levantar capital. Asumes que la retención se puede arreglar después con emails y notificaciones.", score: 1, type: "Vanity" },
      { id: 'B', text: "Reality Check: Mostrar el gráfico de retención al CEO. 'Estamos llenando un balde agujereado. Pautemos el viral y arreglemos el onboarding ya'.", score: 5, type: "Lead (Honestidad Radical)" },
      { id: 'C', text: "Rediseño Reactivo: Detener todo para rediseñar el producto y adaptarlo a estos nuevos usuarios, asumiendo que son el nuevo target.", score: 2, type: "Reactivo" }
    ],
    explanation: "Con CMO pidiendo budget adicional y CFO preguntando por ROI, la política es brutal. La A suena razonable (CAC $45 es mejor que $120) pero ignora el costo hundido de $35K - el ROI real es $343/usuario, catastrófico. La C tiene coraje analítico pero mata prematuramente un canal con potencial (CAC orgánico ES mejor que paid, solo necesita optimización). La B es la jugada de Lead: reconoce que el concepto validó (awareness existe, CAC orgánico favorable) pero el mecanismo falló (1.8% CTR es pésimo). Propone iteración concreta con incentivos bilaterales (storage + trial) que según benchmarks de Dropbox/Notion aumentan CTR 4-6x. Pide 1.5 semanas para optimizar ANTES de doblar ads - demuestra pensamiento sistémico ante ejecutivos. Un Lead diferencia entre 'idea fracasada' y 'ejecución fracasada'."
  },
  {
    id: 'sample_size_impatience',
    category: "Validación Ágil",
    icon: <Timer className="w-6 h-6 text-blue-500" />,
    scenario: "Lanzas un A/B test un lunes. El miércoles, la variante B está ganando por 12% pero el tamaño de muestra es de solo 300 usuarios (necesitas 2000 para significancia estadística). El PM quiere declararlo ganador ya.",
    question: "¿Cedes a la presión o esperas?",
    options: [
      { id: 'A', text: "Esperar Significancia: Mantienes el test activo 2 semanas más hasta llegar al 95% de confianza. La integridad de los datos es innegociable.", score: 4, type: "Científico (Lento)" },
      { id: 'B', text: "Decisión Bayesiana: Si la ganancia es enorme (+12%) y el riesgo de error bajo, shippeas early con monitoreo intensivo post-launch.", score: 5, type: "Lead (Risk-Reward)" },
      { id: 'C', text: "Obediencia Ciega: Shippeas inmediatamente sin cuestionarlo. Asumes que el PM tiene la responsabilidad final de la decisión de negocio.", score: 0, type: "Cómplice de mala ciencia" }
    ],
    explanation: "La significancia estadística es importante, pero en startups la velocidad de aprendizaje a veces vale más que la perfección científica (B). La clave es evaluar el riesgo de equivocarse."
  },
  {
    id: 'retention_vs_acquisition_focus',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Series B cerrada hace 3 meses ($15M). Board exige 3x growth de usuarios para Series C en 9 meses. Growth Team tiene $180K/mes en paid acquisition generando 8,500 sign-ups mensuales. Tu análisis cohort muestra: 62% abandona en Día 7 sin activarse, pero el 38% que se activa tiene excelente LTV ($840 anual). VP de Growth argumenta: 'Necesitamos volumen para el pitch - podemos optimizar retención después de levantar C'. CFO apoya porque los números de adquisición se ven bien en el board deck. Tienes reunión de Q Planning mañana.",
    question: "¿Qué estrategia de balance adquisición/retención defiendes para los próximos 90 días?",
    options: [
      { id: 'A', text: "70/30 Split Parallel: Mantener $125K/mes en adquisición (reducción 30% controlada) y reasignar $55K + 1 designer + 1 PM a Sprint Intensivo de Activación (rediseñar onboarding, first-run experience, aha moment). Riesgo político: Growth se siente atacado. Upside: Si mejoras activación 62%→75% en 60 días, cada nuevo usuario vale 40% más.", score: 5, type: "Lead (Calculated rebalance)" },
      { id: 'B', text: "Acquisition Freeze de 4 Semanas: Presentas 'Leaky Bucket' memo al CEO proponiendo pausar TODA adquisición paid por 1 mes para focus 100% en retención. Argumentas que llenar balde roto quema dinero. Propones medir impacto en activación antes de reactivar spend. Riesgo: Board ve caída de sign-ups en Q y entra en pánico. Delays en Series C podrían costar runway.", score: 2, type: "Bold pero arriesgado políticamente" },
      { id: 'C', text: "Growth-Led con Retention Insights: Propones AUMENTAR adquisición a $220K/mes pero con targeting más preciso basado en perfil de los usuarios que SÍ se activan (industria, company size, use case). Usas data de cohorte exitosa para mejorar CAC efficiency. Dejas onboarding como está - el producto ya funciona para quienes lo entienden. Prioridad: volumen para narrativa de Series C.", score: 4, type: "Growth-focused con optimización" }
    ],
    explanation: "Contexto importa: pre-funding round, presión de Board cambia el cálculo. Pausar adquisición completamente (B) es valiente pero puede sabotear Series C si el runway es ajustado. Seguir quemando sin optimizar (implícito en status quo) es desperdicio. Acelerar con mejor targeting (C) es pragmático pero ignora el 62% de churn. Balance calculado (A) mejora unit economics sin detener crecimiento."
  },

  // --- BLOQUE 9: DISEÑO DE FLUJOS & INTERACCIÓN ---
  {
    id: 'onboarding_length_debate',
    category: "Onboarding & Activación",
    icon: <Play className="w-6 h-6 text-green-500" />,
    scenario: "Marketing prometió en los ads 'Configuración en 2 minutos', pero el PM insiste en un onboarding de 7 pasos obligatorios para 'educar al usuario'. La data muestra 70% de abandono en el paso 3. El CAC es $200 y estás quemando dinero. El PM dice: 'Si quitamos pasos, no entenderán el valor y harán churn después'.",
    question: "¿Cuál es tu contra-propuesta estratégica para salvar el funnel?",
    options: [
      { id: 'A', text: "Onboarding Progresivo (Just-in-Time): Reduces a 2 pasos (Setup crítico) y mueves la educación al contexto de uso real con tooltips activados por acción. 'Enséñame cuando lo necesite, no antes'. Reduces Time-to-Value drásticamente.", score: 5, type: "Lead (Time-to-Value)" },
      { id: 'B', text: "Botón 'Skip' Prominente: Mantienes los 7 pasos pero permites saltar. Es un compromiso político que calma al PM pero sigue mostrando fricción inicial. Muchos usuarios saltarán sin aprender nada.", score: 3, type: "Parche (Compromiso débil)" },
      { id: 'C', text: "Gamificación del Onboarding: Agregas barra de progreso y celebraciones (confeti) en cada paso para hacerlo 'menos aburrido'. Maquillas el problema de longitud con UI.", score: 1, type: "Lipstick on a pig" }
    ],
    explanation: "70% de abandono con CAC de $200 es una emergencia financiera. La educación no sirve si el usuario se va antes de entrar. La opción A prioriza el 'Aha Moment' y mueve la educación al momento donde es relevante."
  },
  {
    id: 'error_message_user_blame',
    category: "UX Writing & Errores",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    scenario: "Los tickets de soporte aumentaron 40% esta semana ($5k costo extra). La causa: mensajes de error técnicos como 'Error 403: Token Invalid' en el login. Los usuarios creen que su cuenta fue borrada y llaman en pánico. Ingeniería dice que 'no hay tiempo para mapear todos los errores' y que el usuario debería saber reintentar.",
    question: "¿Cómo intervienes para detener la hemorragia de soporte?",
    options: [
      { id: 'A', text: "Reescritura Cosmética: Cambias todos los textos a '¡Ups! Algo salió mal' con una ilustración amigable. Es menos técnico, pero igual de inútil para el usuario.", score: 2, type: "Genérico (Poco útil)" },
      { id: 'B', text: "Mapeo Pareto (Top 5): Identificas los 5 errores más frecuentes (80% del volumen) y diseñas mensajes con ACCIÓN clara. Ignoras los edge cases por ahora.", score: 5, type: "Lead (Pareto Principle)" },
      { id: 'C', text: "Desvío a FAQ: Agregas un link '¿Problemas?' debajo del error que lleva a una wiki técnica. Transfieres la carga de resolución al usuario frustrado.", score: 1, type: "Evasión" }
    ],
    explanation: "Cuando los errores cuestan dinero ($5k/semana), la prioridad es la resolución autónoma. Mensajes genéricos (A) no resuelven. Mapear el Top 5 (B) aplica Pareto para eliminar el 80% del dolor con 20% de esfuerzo."
  },
  {
    id: 'loading_spinner_anxiety',
    category: "Micro-interacciones",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "El proceso de 'Procesar Pago' toma 8 segundos. Como solo hay un spinner estático, los usuarios piensan que se colgó y hacen click 3-4 veces en 'Pagar'. Resultado: 150 cargos duplicados esta semana, devoluciones masivas y amenaza de Visa por chargebacks.",
    question: "¿Cómo arreglas esto hoy mismo sin poder acelerar el backend?",
    options: [
      { id: 'A', text: "Bloqueo de UI + Feedback: Deshabilitas el botón tras el primer click y cambias el texto a 'Procesando...'. Gestionas la ansiedad con narrativa.", score: 5, type: "Lead (Perceived Performance)" },
      { id: 'B', text: "Spinner más Grande: Haces el spinner más visible y agregas texto 'No cierres esta ventana'. Confías en que el usuario lea y obedezca.", score: 2, type: "Débil (No previene error)" },
      { id: 'C', text: "Alert Modal: Muestras un popup '¿Estás seguro?' antes de pagar. Agrega fricción innecesaria antes del click y no resuelve la espera posterior.", score: 1, type: "Fricción incorrecta" }
    ],
    explanation: "El problema no es solo la espera, es el error catastrófico (doble cargo). La solución debe impedir físicamente el error (deshabilitar botón) y gestionar la ansiedad (narrativa). La opción A protege al negocio y al usuario."
  },
  {
    id: 'infinite_scroll_vs_pagination',
    category: "Patrones de Interacción",
    icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
    scenario: "Marketing lanzó una campaña viral y el tráfico explotó. Pero el CFO está furioso: no puede auditar las transacciones de Q3 porque el 'Infinite Scroll' que implementaste hace imposible encontrar registros específicos de hace 3 meses. 'O me das paginación para el lunes o no puedo cerrar los libros contables'. Marketing dice que la paginación 'se ve vieja'.",
    question: "¿Qué patrón eliges ante un bloqueo legal/financiero?",
    options: [
      { id: 'A', text: "Paginación Inmediata: Reviertes a paginación estándar. La necesidad del CFO (auditoría legal) supera cualquier preferencia estética de Marketing. La funcionalidad crítica es innegociable.", score: 5, type: "Lead (Funcionalidad > Estética)" },
      { id: 'B', text: "Infinite Scroll con Filtros Avanzados: Mantienes el scroll pero agregas filtros potentes por fecha/monto. Resuelve la búsqueda del CFO sin sacrificar la UX moderna. (Toma más tiempo de dev, riesgo de no llegar al lunes).", score: 3, type: "Idealista (Riesgo de deadline)" },
      { id: 'C', text: "Export to CSV: Le dices al CFO que use Excel para auditar y dejas la UI como está. Ignoras que el usuario necesita verificar visualmente en la plataforma.", score: 1, type: "Arrogante" }
    ],
    explanation: "En herramientas B2B/Financieras, la 'encontrabilidad' y auditoría son requisitos funcionales, no opcionales. Infinite scroll rompe la navegación profunda. Ante un bloqueo de cierre contable, la paginación (A) es la solución robusta y rápida."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'growth_dark_patterns_subscription',
    category: "Growth Hacking vs Ética",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "El Head of Growth te pide diseñar un flujo de cancelación de suscripción que requiera llamar por teléfono para darse de baja (Roach Motel), porque 'eso reduce el churn un 80%'.",
    question: "¿Cómo respondes a esta táctica agresiva?",
    options: [
      { id: 'A', text: "Negarse y Proponer Alternativa: 'No diseñaré trampas'. Proponer un flujo digital con una oferta de retención (descuento) antes de cancelar. Retener por valor, no por secuestro.", score: 5, type: "Lead (Retención Ética)" },
      { id: 'B', text: "Diseñar el Dark Pattern: 'El negocio manda'. Si reduce el churn, cumples con el KPI aunque odies la táctica.", score: 0, type: "Mercenario" },
      { id: 'C', text: "Fricción Digital: Negociar no usar el teléfono, pero poner 5 pantallas de confirmación y encuesta obligatoria. Es un punto medio molesto pero digital.", score: 2, type: "Cómplice 'Light'" }
    ],
    explanation: "El 'Roach Motel' es ilegal en algunas jurisdicciones y destruye la marca. La retención ética (A) intenta convencer al usuario de quedarse, no obligarlo."
  },
  {
    id: 'growth_virality_vs_privacy',
    category: "Growth Hacking vs Ética",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Growth quiere una feature que acceda a la agenda de contactos del usuario y envíe invitaciones automáticas por SMS a todos sus amigos para ganar 'créditos gratis'.",
    question: "¿Cómo gestionas este request viral?",
    options: [
      { id: 'A', text: "Spam Machine: Diseñarlo tal cual. La viralidad es clave para crecer y 'todos lo hacen' (Uber, LinkedIn en 2012).", score: 0, type: "Spammer" },
      { id: 'B', text: "Invite Consciente: Diseñar un selector de contactos donde el usuario ELIGE a quién invitar uno por uno. Menos viralidad explosiva, pero cero riesgo de reputación/spam.", score: 5, type: "Lead (Viralidad Sana)" },
      { id: 'C', text: "Select All Default: Pre-seleccionar todos los contactos y dejar que el usuario desmarque. Es un Dark Pattern clásico que genera accidentes.", score: 1, type: "Dark Pattern" }
    ],
    explanation: "El 'Contact Scraping & Spam' es una práctica odiada. La viralidad sostenible (B) se basa en que el usuario recomiende genuinamente a personas específicas."
  },
  {
    id: 'growth_ab_test_ethical_boundary',
    category: "Growth Hacking vs Ética",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    scenario: "Growth quiere correr un A/B test mostrando precios falsos más altos a usuarios de iPhone (Price Discrimination) para ver si pagan más. Técnicamente es fácil de implementar.",
    question: "¿Cuál es tu límite ético en experimentación?",
    options: [
      { id: 'A', text: "Bloquear el Test: 'La discriminación de precios oculta es anti-ética y daña la confianza'. Proponer testear diferentes paquetes de valor, no precios arbitrarios por dispositivo.", score: 5, type: "Lead (Fairness)" },
      { id: 'B', text: "Correr el Test: 'Es solo un experimento'. Si funciona, el negocio gana más margen. La ética es secundaria a la rentabilidad.", score: 0, type: "Amoral" },
      { id: 'C', text: "Segmentación Geográfica: Sugerir hacerlo por país en lugar de dispositivo. Sigue siendo discriminación de precios pero 'se ve menos feo'.", score: 2, type: "Racionalización" }
    ],
    explanation: "La discriminación de precios oculta basada en dispositivo es percibida como injusta y depredadora. Un Lead protege la relación a largo plazo con el cliente (A)."
  },
  {
    id: 'data_driven_design_paralysis',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "El equipo está paralizado discutiendo el color de un botón. El PM dice: 'Hagamos un A/B test'. Tú sabes que con el tráfico actual, ese test tardará 3 meses en tener significancia estadística.",
    question: "¿Cómo desbloqueas la decisión?",
    options: [
      { id: 'A', text: "Decisión Ejecutiva (Experiencia): 'No tenemos tráfico para testear micro-optimizaciones. Usemos el estándar de la industria y avancemos'. Priorizas velocidad sobre falsa certeza.", score: 5, type: "Lead (Pragmatismo Estadístico)" },
      { id: 'B', text: "Lanzar el Test igual: Dejar el test corriendo 3 meses. Bloqueas el código y recursos por una decisión trivial.", score: 1, type: "Burocracia de Data" },
      { id: 'C', text: "Test Cualitativo: Probar con 5 usuarios en un pasillo. No es estadísticamente válido para conversión, pero desbloquea la discusión.", score: 3, type: "Validación 'Light'" }
    ],
    explanation: "El 'Data-Driven' mal entendido paraliza. Si no tienes volumen, la intuición experta o estándares (A) son más eficientes que tests eternos."
  },
  {
    id: 'data_vanity_metrics_trap',
    category: "Data-Driven Design",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Celebran que los 'Page Views' subieron un 200% tras un rediseño. Pero tú notas que el 'Time on Page' bajó a 3 segundos y la conversión cayó. El diseño es clickbait.",
    question: "¿Cómo comunicas esta 'mala noticia' en medio de la celebración?",
    options: [
      { id: 'A', text: "Aguafiestas con Data: Presentar el análisis completo mostrando que son 'Vanity Metrics'. 'Tenemos más tráfico basura, pero menos negocio'. Reorientar al equipo a métricas de valor.", score: 5, type: "Lead (Truth Teller)" },
      { id: 'B', text: "Silencio: Dejar que celebren. Si el management está feliz con Page Views, ¿para qué buscar problemas?", score: 1, type: "Cómplice" },
      { id: 'C', text: "Optimizar Clickbait: Sugerir más formas de aumentar Page Views artificialmente para seguir ganando bonos.", score: 0, type: "Mercenario" }
    ],
    explanation: "Las métricas de vanidad mienten. Un Lead se enfoca en métricas de negocio reales (Conversión, Retención) aunque sea impopular al principio (A)."
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
    explanation: "Cambiar URLs sin strategy rompe bookmarks, links compartidos y confianza (A). La C es conservadora pero pierde ganancia real de SEO. Los redirects 301 (B) permiten evolucionar sin destruir - literalmente win-win si está bien implementado."
  },
];
