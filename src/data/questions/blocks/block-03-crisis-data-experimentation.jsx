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
export const block_03_crisis_data_experimentation_questions = [
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
        { id: 'A', text: "Obedecer a Ventas: Pivotar todo el equipo a clonar 'Reportes AI' inmediatamente. Perder deals nuevos es más grave que frustrar a usuarios actuales.", score: 0, type: "Feature Factory" },
        { id: 'B', text: "Diagnóstico de Deals Perdidos: Entrevistar hoy mismo a esos 3 clientes. ¿Realmente querían 'AI' o solo necesitaban exportar data? Resolver el problema de fondo (ej: API), no copiar la solución ciega.", score: 5, type: "Lead (Estratégico)" },
        { id: 'C', text: "Contra-oferta Táctica: Lanzar 'Export to Excel' rápido y vender nuestra velocidad como ventaja. 'Ellos tienen AI, nosotros tenemos reportes instantáneos'.", score: 4, type: "Pragmático" }
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
        { id: 'A', text: "Ignorar la deuda. Seguir shippeando features aunque sea lento.", score: 1, type: "Miope" },
        { id: 'B', text: "Tax de Deuda: Acordar dedicar 20% de cada sprint a refactor progresivo, evitando el parón total pero pagando la deuda constantemente.", score: 5, type: "Lead (Sostenible)" },
        { id: 'C', text: "Apoyar el parón total. Mejor sufrir 2 semanas que sangrar meses.", score: 3, type: "Drástico" }
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
        { id: 'A', text: "Apoyar el lanzamiento. 'Done is better than perfect'.", score: 2, type: "Complaciente" },
        { id: 'B', text: "Defensa de la Data: 'El test falló. Si lanzamos, ensuciamos el producto sin valor probado. Iteremos la hipótesis y testeemos de nuevo'.", score: 5, type: "Lead (Integridad de Data)" },
        { id: 'C', text: "Lanzar pero monitorear de cerca por si baja la conversión.", score: 3, type: "Riesgoso" }
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
        { id: 'A', text: "Celebrar con ellos. El crecimiento ayuda a levantar capital, luego arreglamos la retención.", score: 1, type: "Vanity" },
        { id: 'B', text: "Reality Check: Mostrar el gráfico de retención al CEO. 'Estamos llenando un balde agujereado. Pautemos el viral y arreglemos el onboarding ya'.", score: 5, type: "Lead (Honestidad Radical)" },
        { id: 'C', text: "Rediseñar el producto entero para adaptarlo a estos nuevos usuarios.", score: 2, type: "Reactivo" }
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
        { id: 'A', text: "Reescritura Cosmética Masiva: Cambias todos los textos a '¡Ups! Algo salió mal' con una ilustración amigable. Es menos técnico, pero igual de inútil. El usuario sigue llamando a soporte.", score: 2, type: "Genérico (Poco útil)" },
        { id: 'B', text: "Mapeo de Errores Top 5: Identificas en logs los 5 errores más frecuentes (80% del volumen) y diseñas mensajes con ACCIÓN clara ('Tu sesión expiró. Haz click aquí para reconectar'). Ignoras los edge cases por ahora. Impacto inmediato en tickets.", score: 5, type: "Lead (Pareto Principle)" },
        { id: 'C', text: "Link a FAQ: Agregas un link '¿Problemas?' debajo del error que lleva a una wiki técnica. Transfieres la carga cognitiva al usuario.", score: 1, type: "Evasión" }
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
        { id: 'A', text: "Bloqueo de UI + Feedback Narrativo: Deshabilitas el botón inmediatamente tras el primer click (prevent default) y cambias el texto a 'Procesando pago de forma segura...'. Agregas una barra de progreso falsa si es necesario para calmar ansiedad.", score: 5, type: "Lead (Perceived Performance + Safety)" },
        { id: 'B', text: "Spinner más Grande: Haces el spinner más visible y agregas texto 'No cierres esta ventana'. Confías en que el usuario lea.", score: 2, type: "Débil (No previene error)" },
        { id: 'C', text: "Alert Modal: Mostrar un popup '¿Estás seguro?' antes de pagar. Agrega fricción innecesaria y no resuelve la espera posterior.", score: 1, type: "Fricción incorrecta" }
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

];
