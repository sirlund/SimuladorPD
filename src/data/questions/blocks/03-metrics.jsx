import React from 'react';
import {
  Activity, AlertOctagon, AlertTriangle, ArrowRight, BarChart2, 
  DollarSign, Globe, Layout, Lock, PieChart, Play, RefreshCw, Star, 
  Target, Timer, Trash2, TrendingUp, Trophy, Users, Zap
} from 'lucide-react';

/**
 * Crisis, Data & Experimentación
 */
export const metrics_questions = [
  // --- BLOQUE 7: CRISIS DE PRODUCTO & PRESIÓN DE ROADMAP ---
  {
    id: 'churn_spike_investigation',
    displayId: 'MET-01',
    category: "Gestión de Crisis & Liderazgo",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    scenario: "Alerta Roja: Churn del 40% en los últimos 7 días ($280K ARR en riesgo). CS culpa a tu rediseño del pago. Engineering ya tiene el dedo en el botón de 'Revertir'. Tu PM dice que revertir es admitir derrota. El CEO te convoca a una reunión de emergencia en 2 horas para explicar qué pasó.",
    question: "¿Cuál es tu primer movimiento antes de entrar a esa sala?",
    options: [
      { id: 'A', text: "**Protocolo de Reversión:** Ejecutas el rollback inmediato para detener la hemorragia. En situaciones de pérdida financiera aguda, la prioridad es estabilizar el sistema a un estado conocido y seguro antes de diagnosticar la causa raíz.", score: 3, type: "Reactivo (Puede ser prematuro)", decisionSummary: "Revertiste código sin diagnosticar causa real del churn." },
      { id: 'B', text: "**Triangulación Forense:** Segmentas el churn por cohorte y fuente de tráfico antes de tocar el código. Buscas descartar variables externas (pasarela caída, fraude, marketing) para llegar a la reunión con un diagnóstico basado en evidencia, no en pánico.", score: 5, type: "Lead (Data-First)", decisionSummary: "Diagnosticaste con data antes de actuar en crisis." },
      { id: 'C', text: "**War Room de Stakeholders:** Convocas a CS, Product, Eng y Data a una sala de guerra inmediata. Centralizas la comunicación y generas hipótesis colaborativas para asegurar que todas las áreas estén alineadas en la respuesta.", score: 1, type: "Comité de Crisis (Ruido)", decisionSummary: "Convocaste reunión de crisis sin datos previos." }
    ],
    explanation: "Revertir sin evidencia es pánico, no estrategia (podría ser un bug de pasarela o fraude). El **War Room** sin datos previos genera ruido. La **Triangulación Forense** transforma el caos en un plan de acción informado. Con $280K en juego, necesitas el diagnóstico correcto, no el más rápido."
  },
  {
    id: 'competitor_feature_launch',
    displayId: 'MET-02',
    category: "Estrategia Competitiva",
    icon: <Trophy className="w-6 h-6 text-yellow-600" />,
    scenario: "Competidor lanzó 'Reportes AI'. Perdiste 3 deals ($340K). Ventas exige clonarlo en 1 sprint. Tu research dice que la queja #1 actual es 'lentitud', no 'falta de AI'. Engineering dice que clonar toma 8 semanas.",
    question: "¿Cómo respondes a la presión competitiva?",
    options: [
      { id: 'A', text: "**Fast-Follow Strategy:** Pivotas al equipo para clonar la feature de AI inmediatamente. En mercados 'Winner-takes-all', neutralizar la ventaja competitiva del rival es crítico para proteger el pipeline de ventas a corto plazo.", score: -1, type: "Feature Factory", decisionSummary: "Clonaste feature del competidor sin validar necesidad." },
      { id: 'B', text: "**Auditoría de Pérdida:** Entrevistas hoy a los 3 clientes perdidos para entender el 'Job-to-be-Done'. Validas si querían 'AI' o simplemente 'Data accesible'. Resuelves el problema raíz del cliente, no la solución de moda del competidor.", score: 5, type: "Lead (Estratégico)", decisionSummary: "Entrevistaste clientes perdidos antes de decidir." },
      { id: 'C', text: "**Posicionamiento Diferenciado:** Doblas la apuesta en 'Velocidad' y lanzas una campaña de 'Reportes Instantáneos'. Re-enmarcas la narrativa del mercado hacia tu fortaleza actual en lugar de competir en la debilidad.", score: 3, type: "Pragmático", decisionSummary: "Pivoteaste a diferenciación sin validar mercado." }
    ],
    explanation: "Copiar por pánico convierte al equipo en una **Feature Factory**. A menudo, el cliente pide 'AI' (solución) pero necesita 'Velocidad' (problema). La **Auditoría de Pérdida** frena la histeria para validar el problema real. **Posicionamiento Diferenciado** es válido, pero arriesgado si la narrativa de mercado ya cambió irreversiblemente."
  },
  {
    id: 'investor_demo_cosmetics',
    displayId: 'MET-03',
    category: "Gestión de Stakeholders",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    scenario: "Pitch Series A con Sequoia ($8M). CEO pide 'embellecer el dashboard' (fake data, animaciones) porque el producto real es austero. CTO advierte: 'Si ven código fake en Due Diligence, nos matan'.",
    question: "¿Qué nivel de 'polish' permites?",
    options: [
      { id: 'A', text: "**Visionary Demo Mode:** Creas una versión separada 'North Star' con UI pulida y data ficticia perfecta. Los inversores compran la visión de futuro, no el estado actual. Es una práctica estándar para comunicar el potencial del producto.", score: 1, type: "Teatro (Deuda ética)", decisionSummary: "Creaste demo con data falsa para inversores." },
      { id: 'B', text: "**Roadmap Acceleration:** Pules visualmente SOLO las features que ya están comprometidas en el roadmap de Q2. La demo muestra una versión aspiracional pero honesta de hacia dónde va el producto real en el corto plazo.", score: 5, type: "Lead (Honestidad aspiracional)", decisionSummary: "Puliste features reales del roadmap para la demo." },
      { id: 'C', text: "**Radical Transparency:** Muestras el producto exactamente como es hoy. La honestidad construye confianza a largo plazo y evitas cualquier riesgo de que el Due Diligence técnico revele discrepancias.", score: 1, type: "Purista (Pierde momentum)", decisionSummary: "Mostraste producto austero perdiendo momentum." }
    ],
    explanation: "Una demo de inversión vende el futuro próximo. **Visionary Demo Mode** es vaporware que explota en el Due Diligence. **Radical Transparency** no inspira. **Roadmap Acceleration** balancea la venta de visión con la integridad de ejecución: es aspiracional, pero técnicamente honesto."
  },
  {
    id: 'technical_debt_explosion',
    displayId: 'MET-04',
    category: "Arquitectura de Sistemas",
    icon: <AlertOctagon className="w-6 h-6 text-orange-600" />,
    scenario: "Velocidad cayó 40% por deuda técnica. Engineering Manager amenaza con renunciar si no hay un 'Refactor Sprint' de 2 semanas. Tienes demo con cliente enterprise ($420K) en 3 semanas que necesita SSO.",
    question: "¿Qué estrategia propones al Board?",
    options: [
      { id: 'A', text: "**Growth Mindset:** Mantienes el roadmap de features. La deuda técnica es señal de crecimiento. El revenue del nuevo deal ($420K) permitirá contratar más ingenieros para arreglar el código después.", score: -1, type: "Miope", decisionSummary: "Ignoraste deuda técnica priorizando features." },
      { id: 'B', text: "**Tech Debt Tax (20%):** Institucionalizas una cuota del 20% de capacidad por sprint para refactor continuo. Evitas el parón total traumático y pagas la deuda progresivamente mientras avanzas hacia el demo.", score: 5, type: "Lead (Sostenible)", decisionSummary: "Instituiste 20% de capacidad para deuda técnica." },
      { id: 'C', text: "**Strategic Pause:** Autorizas el parón de 2 semanas. Es mejor asumir un retraso corto ahora y sanear la base, que operar con una velocidad degradada permanentemente que pone en riesgo todo el año.", score: 3, type: "Drástico", decisionSummary: "Pausaste desarrollo 2 semanas arriesgando deal." }
    ],
    explanation: "Ignorar la deuda con velocidad cayendo 40% es negligencia. Parar totalmente arriesga el deal de $420K. El **Tech Debt Tax** es la única solución sostenible: paga intereses de la deuda sin detener la maquinaria de ingresos. Mantiene al equipo de ingeniería motivado y al negocio funcionando."
  },

  // --- BLOQUE 8: DATA, MÉTRICAS & EXPERIMENTACIÓN ---
  {
    id: 'ab_test_interpretation_bias',
    displayId: 'MET-05',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "A/B Test inconcluso (p-value 0.23). Conversión plana. PM quiere lanzar igual porque 'engagement subió 8%' y CFO ya prometió revenue al Board. Data Science dice que es cherry-picking.",
    question: "¿Qué recomendación das sobre el launch?",
    options: [
      { id: 'A', text: "**Business Pragmatism:** Apoyas el lanzamiento basándote en la métrica secundaria positiva. 'Done is better than perfect', y el costo de no lanzar (decepcionar al Board) supera el riesgo de un impacto neutro en conversión.", score: 1, type: "Complaciente", decisionSummary: "Lanzaste feature fallida citando métrica secundaria." },
      { id: 'B', text: "**Integridad Estadística:** Recomiendas no lanzar. Si el test falló en su métrica primaria, el cambio es ruido. Iterar la hipótesis protege la calidad del producto y la credibilidad del equipo de datos a largo plazo.", score: 5, type: "Lead (Integridad de Data)", decisionSummary: "Defendiste rigor estadístico rechazando cherry-picking." },
      { id: 'C', text: "**Lanzamiento Monitoreado:** Lanzas con un rollback automático si la conversión cae en 48h. Asumes el riesgo controlado para cumplir con la expectativa política del CFO, usando producción como el test final.", score: 3, type: "Riesgoso", decisionSummary: "Lanzaste con rollback automático arriesgando." }
    ],
    explanation: "Hacer **Cherry-picking** de métricas secundarias para justificar un fracaso destruye la cultura de experimentación. **Business Pragmatism** llena el producto de basura. Un Lead defiende la **Integridad Estadística**: si no mueve la aguja, no entra al core. La credibilidad ante el Board se gana con la verdad, no con humo."
  },
  {
    id: 'vanity_metric_viral_growth',
    displayId: 'MET-06',
    category: "Métricas de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Hack viral en TikTok trajo 50k usuarios. Inversores celebran. Tu data muestra retención día-30 del 0.5% (vs 38% normal). LTV es negativo. CMO quiere usar esto para levantar Series B.",
    question: "¿Cómo evalúas el ROI ante el equipo ejecutivo?",
    options: [
      { id: 'A', text: "**Capitalize Momentum:** Celebras el crecimiento y apoyas la narrativa de 'Viral Growth' para la Series B. El problema de retención se puede resolver post-funding con más recursos y mejores herramientas de engagement.", score: 1, type: "Vanity", decisionSummary: "Celebraste métricas de vanidad sin cuestionar la retención." },
      { id: 'B', text: "**Leaky Bucket Reality:** Muestras el gráfico de retención al CEO en privado. 'Estamos llenando un balde con agujeros'. Recomiendas pausar el pautaje viral y enfocar recursos en arreglar la activación inmediatamente.", score: 5, type: "Lead (Honestidad Radical)", decisionSummary: "Detectaste métricas infladas y alineaste con el CEO antes del board." },
      { id: 'C', text: "**Pivot Reactivo:** Propones rediseñar el onboarding para adaptarse a este nuevo perfil de usuario viral. Si llegaron 50k personas, hay un Product-Market Fit potencial que debemos explorar adaptando el producto.", score: 1, type: "Reactivo", decisionSummary: "Pivoteaste hacia usuarios de baja calidad sin validar retención." }
    ],
    explanation: "Crecimiento sin retención es vanidad. Celebrar **Vanity Metrics** puede destruir la Series B durante el Due Diligence. El **Leaky Bucket Reality** reorienta la estrategia hacia lo único que importa: **Unit Economics**. Pivotar por tráfico de baja calidad (**Pivot Reactivo**) es desenfocarse del ICP real."
  },
  {
    id: 'sample_size_impatience',
    displayId: 'MET-07',
    category: "Validación Ágil",
    icon: <Timer className="w-6 h-6 text-blue-500" />,
    scenario: "A/B Test gana por 12% pero con muestra pequeña (300 usuarios vs 2000 necesarios). PM presiona: 'Si esperamos, perdemos $40K'. CEO pregunta cuándo lanzamos.",
    question: "¿Cedes a la presión o esperas?",
    options: [
      { id: 'A', text: "**Rigor Científico:** Esperas las 2 semanas necesarias. Lanzar sin significancia estadística es apostar, no optimizar. Proteges al producto de falsos positivos que podrían degradar la experiencia a largo plazo.", score: 3, type: "Científico (Lento)", decisionSummary: "Esperaste 2 semanas perdiendo $40K en revenue." },
      { id: 'B', text: "**Decisión Bayesiana (Risk/Reward):** Lanzas anticipadamente con monitoreo. Con un lift del 12% y un costo de espera de $40K, la probabilidad de que la variante B sea ganadora justifica el riesgo de error estadístico.", score: 5, type: "Lead (Risk-Reward)", decisionSummary: "Lanzaste con señal fuerte calculando risk/reward." },
      { id: 'C', text: "**Velocity Culture:** Lanzas inmediatamente. En startups, la velocidad de aprendizaje supera a la perfección académica. Confías en la señal inicial fuerte y corriges después si es necesario.", score: -1, type: "Cómplice de mala ciencia", decisionSummary: "Lanzaste sin evaluar significancia estadística." }
    ],
    explanation: "En startups, el tiempo tiene costo. Esperar la perfección estadística (**Rigor Científico**) puede costar más que el riesgo de error. La **Decisión Bayesiana** evalúa el costo de oportunidad: un 12% de lift es una señal fuerte. **Velocity Culture** ciega ignora el riesgo de falsos positivos."
  },
  {
    id: 'retention_vs_acquisition_focus',
    displayId: 'MET-08',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El Board exige triplicar usuarios activos este año. Estás gastando $180K/mes en ads pagados, pero el 62% de los usuarios nuevos abandona antes del Día 7—estás llenando un balde con agujeros. El VP de Growth quiere duplicar el presupuesto de ads: 'Más volumen resuelve todo'. El CFO apoya porque los números de 'nuevos registros' se ven bien en el deck de inversores.",
    question: "¿Qué estrategia defiendes para el Q?",
    options: [
      { id: 'A', text: "**Rebalanceo de Cartera (70/30):** Reduces el spend de ads un 30% y reasignas ese presupuesto a un squad de Activación. Optimizas el 'bucket' antes de abrir más el grifo, mejorando el LTV/CAC ratio global.", score: 5, type: "Lead (Calculated rebalance)", decisionSummary: "Rebalanceaste 30% de ads hacia activación." },
      { id: 'B', text: "**Freeze & Fix:** Pausas toda la adquisición pagada por 4 semanas. 'No tiene sentido quemar dinero en un producto que no retiene'. Fuerzas a la organización a resolver el problema de producto con urgencia máxima.", score: 1, type: "Bold pero arriesgado", decisionSummary: "Pausaste ads 4 semanas asustando al Board." },
      { id: 'C', text: "**Growth-Led Optimization:** Mantienes el volumen de adquisición alto para cumplir la meta de 'Top of Funnel' del Board, pero refinas el targeting de los anuncios para atraer usuarios más calificados.", score: 3, type: "Growth-focused", decisionSummary: "Mantuviste spend alto refinando targeting." }
    ],
    explanation: "Pausar adquisición (**Freeze & Fix**) asusta al Board. Seguir igual (**Growth-Led**) quema caja. El **Rebalanceo de Cartera** demuestra madurez financiera: inviertes en **Unit Economics** (activación) sin detener el motor de crecimiento, preparando el terreno para escalar eficientemente."
  },

  // --- BLOQUE 9: DISEÑO DE FLUJOS & INTERACCIÓN ---
  {
    id: 'onboarding_length_debate',
    displayId: 'MET-09',
    category: "Onboarding & Activación",
    icon: <Play className="w-6 h-6 text-green-500" />,
    scenario: "Tu onboarding de 7 pasos tiene 70% de abandono en el paso 3, quemando $200 de CAC por usuario perdido. El PM insiste en mantenerlo porque 'sin educación, los usuarios no entienden el valor'. Pero tu data muestra que los pocos que llegan al final tienen el mismo churn que los que abandonan—la 'educación' no está correlacionada con retención.",
    question: "¿Cuál es tu contra-propuesta estratégica?",
    options: [
      { id: 'A', text: "**Onboarding Progresivo:** Reduces el setup inicial a lo mínimo viable (2 pasos) y mueves la educación a tooltips contextuales dentro de la app. Reduces la barrera de entrada y enseñas en el momento de necesidad.", score: 5, type: "Lead (Time-to-Value)", decisionSummary: "Redujiste onboarding a 2 pasos priorizando Time-to-Value." },
      { id: 'B', text: "**Opción de Salida (Skip):** Mantienes el flujo educativo del PM pero agregas un botón 'Saltar' visible. Ofreces flexibilidad al usuario avanzado sin sacrificar la visión educativa del producto.", score: 3, type: "Parche (Compromiso débil)", decisionSummary: "Agregaste Skip sin resolver fricción estructural." },
      { id: 'C', text: "**Engagement UI:** Agregas elementos de gamificación (barra de progreso, micro-celebraciones) para hacer los 7 pasos más tolerables. Mejoras la experiencia percibida sin recortar el contenido educativo.", score: 1, type: "Lipstick on a pig", decisionSummary: "Gamificaste onboarding malo sin reducir pasos." }
    ],
    explanation: "70% de abandono es una emergencia. La educación no sirve si el usuario se va. **Onboarding Progresivo** prioriza el **Time-to-Value**. **Opción de Salida** es un parche. **Engagement UI** maquilla un problema estructural de fricción excesiva."
  },
  {
    id: 'error_message_user_blame',
    displayId: 'MET-10',
    category: "UX Writing & Errores",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    scenario: "Los tickets de soporte explotaron 40% este mes, todos variantes de 'Error 403' y 'Something went wrong'. El Head de CS te confronta: 'Mi equipo pasa 6 horas diarias explicando errores que tu UI no explica'. Ingeniería dice que mapear los 47 códigos de error del backend tomaría un sprint completo que no tienen.",
    question: "¿Cómo detienes la hemorragia de soporte?",
    options: [
      { id: 'A', text: "**Humanización Genérica:** Reescribes los mensajes por defecto a algo amigable como '¡Ups! Algo salió mal'. Eliminas el lenguaje técnico intimidante inmediatamente con esfuerzo mínimo de desarrollo.", score: 1, type: "Genérico (Poco útil)", decisionSummary: "Humanizaste errores sin dar soluciones." },
      { id: 'B', text: "**Enfoque Pareto (80/20):** Identificas el Top 5 de errores más frecuentes y reescribes SOLO esos con instrucciones de solución claras. Resuelves el 80% del volumen de tickets con el 20% del esfuerzo.", score: 5, type: "Lead (Pareto Principle)", decisionSummary: "Arreglaste Top 5 errores reduciendo 80% de tickets." },
      { id: 'C', text: "**Wiki Link:** Agregas un enlace de 'Ayuda' en todos los mensajes de error que lleva a la base de conocimientos. Empoderas al usuario para investigar su problema sin contactar a soporte.", score: 1, type: "Self-Service débil", decisionSummary: "Agregaste links a wiki sin resolver errores." }
    ],
    explanation: "Mensajes genéricos (**Humanización**) no resuelven el problema del usuario. **Wiki Link** añade fricción cognitiva. El **Enfoque Pareto** es la respuesta de liderazgo: asignación eficiente de recursos limitados para máximo impacto en negocio (reducción de tickets)."
  },
  {
    id: 'loading_spinner_anxiety',
    displayId: 'MET-11',
    category: "Micro-interacciones",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "Pagos tardan 8s. Usuarios hacen doble click pensando que se colgó -> 150 cargos duplicados. Visa amenaza subir fees. CFO furioso. Backend no puede optimizar hoy.",
    question: "¿Cómo arreglas esto hoy desde Frontend/UX?",
    options: [
      { id: 'A', text: "**Gestión de Estado (UI Lock):** Deshabilitas el botón inmediatamente tras el primer click y cambias el label a 'Procesando...'. Previenes físicamente el error humano y gestionas la ansiedad con feedback visual claro.", score: 5, type: "Lead (Perceived Performance)", decisionSummary: "Deshabilitaste botón previniendo dobles cargos." },
      { id: 'B', text: "**Visibilidad de Carga:** Aumentas el tamaño y contraste del spinner de carga. Aseguras que el usuario vea claramente que el sistema está trabajando para disuadir clicks adicionales.", score: 1, type: "Débil (No previene error)", decisionSummary: "Agrandaste spinner sin prevenir doble click." },
      { id: 'C', text: "**Modal de Confirmación:** Agregas un paso previo de '¿Estás seguro?' antes de procesar. Añades una capa de fricción intencional para asegurar la intencionalidad del usuario.", score: 1, type: "Fricción incorrecta", decisionSummary: "Agregaste fricción innecesaria con modal." }
    ],
    explanation: "El problema no es la espera, es el error financiero (doble cargo). **Visibilidad de Carga** confía en el usuario. **Modal de Confirmación** añade fricción innecesaria. **Gestión de Estado** (deshabilitar botón) es la solución de **Technical Hygiene** que hace el error imposible."
  },
  {
    id: 'infinite_scroll_vs_pagination',
    displayId: 'MET-12',
    category: "Patrones de Interacción",
    icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
    scenario: "CFO no puede cerrar libros contables porque el 'Infinite Scroll' hace imposible auditar transacciones antiguas. Exige paginación. Marketing dice que se ve 'viejo'.",
    question: "¿Qué patrón eliges ante bloqueo financiero?",
    options: [
      { id: 'A', text: "**Paginación Funcional:** Reviertes a paginación estándar inmediatamente. Entiendes que en herramientas financieras, la 'auditabilidad' y 'encontrabilidad' son requisitos funcionales superiores a la estética de navegación.", score: 5, type: "Lead (Funcionalidad > Estética)", decisionSummary: "Revertiste a paginación desbloqueando auditoría." },
      { id: 'B', text: "**Hybrid Scroll:** Mantienes el scroll infinito pero agregas filtros avanzados de fecha. Intentas preservar la experiencia moderna solucionando la necesidad de búsqueda del CFO por otra vía.", score: 3, type: "Idealista (Riesgo de deadline)", decisionSummary: "Mantuviste infinite scroll agregando filtros." },
      { id: 'C', text: "**Data Export:** Priorizas construir un 'Exportar a Excel' robusto. Asumes que la auditoría profunda debe hacerse fuera de la plataforma, manteniendo la UI del producto limpia y moderna.", score: 1, type: "Arrogante", decisionSummary: "Forzaste export a Excel como workaround." }
    ],
    explanation: "Si el CFO no puede cerrar el mes, el negocio para. **Infinite Scroll** es pésimo para tareas de búsqueda específica. **Data Export** es un workaround. La **Paginación Funcional** prioriza la utilidad del negocio sobre la vanidad de diseño en contextos B2B."
  },
  {
    id: 'growth_dark_patterns_subscription',
    displayId: 'MET-13',
    category: "Growth Hacking vs Ética",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "El churn subió al 18% y el runway peligra. Growth propone implementar un 'Roach Motel' (cancelación solo por teléfono). Legal advierte sobre multas de la FTC, pero el CFO presiona: 'Si no bajamos el churn este mes, no llegamos a Q4'.",
    question: "¿Cómo respondes a la táctica agresiva?",
    options: [
      { id: 'A', text: "**Retención por Valor:** Rechazas el Dark Pattern y propones un flujo digital con ofertas de retención personalizadas (downgrade/pausa). Buscas convencer al usuario de quedarse aportando valor, no secuestrándolo.", score: 5, type: "Lead (Retención Ética)", decisionSummary: "Propusiste retención ética con ofertas personalizadas." },
      { id: 'B', text: "**Concierge Offboarding:** Requieres una llamada telefónica para cancelar, posicionándola como una 'entrevista de salida VIP para asegurar calidad de servicio'. Obtienes feedback cualitativo valioso mientras introduces fricción natural que reduce el churn impulsivo.", score: -1, type: "Dark Pattern Disfrazado", decisionSummary: "Implementaste Roach Motel disfrazado de servicio VIP." },
      { id: 'C', text: "**Fricción Digital:** Negocias no usar teléfono, pero agregas encuestas obligatorias y múltiples pantallas de confirmación. Buscas un punto medio que dificulte la salida sin cruzar la línea de la ilegalidad explícita.", score: 1, type: "Cómplice 'Light'", decisionSummary: "Agregaste fricción digital manipulativa." }
    ],
    explanation: "El **Roach Motel** es ilegal (FTC) y tóxico. **Concierge Offboarding** es el mismo Dark Pattern disfrazado de 'buen servicio' - sigue siendo fricción manipulativa. **Fricción Digital** daña el NPS. **Retención por Valor** ataca la causa raíz del churn sin crear pasivos legales o de marca."
  },
  {
    id: 'growth_virality_vs_privacy',
    displayId: 'MET-14',
    category: "Growth Hacking vs Ética",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Growth propone implementar 'Contact Scraping': acceder a la libreta de contactos del usuario y enviar SMS automáticos de invitación a todos. Proyectan K-factor de 1.8 y 50K usuarios en 30 días. Legal advierte que viola TCPA (multas de $500-$1500 por SMS no autorizado). El VP de Growth responde: 'Uber y Airbnb crecieron así. El riesgo legal es costo de hacer negocios'.",
    question: "¿Cómo gestionas el request viral?",
    options: [
      { id: 'A', text: "**Viralidad Consciente:** Diseñas un selector donde el usuario elige explícitamente a quién invitar uno a uno. Sacrificas el coeficiente viral explosivo (K-factor) a cambio de calidad de usuarios y seguridad legal absoluta.", score: 5, type: "Lead (Viralidad Sana)", decisionSummary: "Diseñaste viralidad consciente sin spam." },
      { id: 'B', text: "**Growth Playbook:** Ejecutas la estrategia tal cual. Argumentas que la viralidad agresiva es necesaria en etapa temprana y que los términos y condiciones cubren la responsabilidad legal de la empresa.", score: -1, type: "Spammer", decisionSummary: "Ejecutaste contact scraping spammy." },
      { id: 'C', text: "**Opt-Out Default:** Pre-seleccionas todos los contactos pero permites desmarcar. Utilizas un patrón de diseño que favorece el volumen de envíos manteniendo una capa técnica de consentimiento del usuario.", score: 1, type: "Dark Pattern", decisionSummary: "Pre-seleccionaste contactos usando dark pattern." }
    ],
    explanation: "El 'Contact Scraping' es **Spam** y riesgo legal (TCPA). **Growth Playbook** ignora el daño de marca. **Opt-Out Default** es un Dark Pattern propenso a errores. **Viralidad Consciente** genera crecimiento sostenible y usuarios de mayor calidad (LTV)."
  },
  {
    id: 'growth_ab_test_ethical_boundary',
    displayId: 'MET-15',
    category: "Growth Hacking vs Ética",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    scenario: "Growth quiere cobrar más a usuarios de iPhone (Price Discrimination). Proyectan +$180K/año. Legal dice 'técnicamente legal', pero riesgo de backlash es alto.",
    question: "¿Cuál es tu límite ético?",
    options: [
      { id: 'A', text: "**Principio de Equidad:** Bloqueas el test. Explicas que la discriminación de precios oculta destruye la confianza del consumidor. Propones testear 'Paquetes Premium' transparentes en lugar de precios arbitrarios por dispositivo.", score: 5, type: "Lead (Fairness)", decisionSummary: "Bloqueaste discriminación de precios por dispositivo." },
      { id: 'B', text: "**Optimización de Margen:** Apruebas el experimento. Si los datos demuestran que el usuario de iPhone tiene mayor disposición a pagar, es responsabilidad del negocio capturar ese valor excedente para financiar el crecimiento.", score: -1, type: "Amoral", decisionSummary: "Aprobaste cobrar más a usuarios iPhone." },
      { id: 'C', text: "**Segmentación Regional:** Sugieres probar precios diferentes por geografía en lugar de dispositivo. Buscas una forma de discriminación de precios que sea socialmente más aceptada para mitigar el riesgo de PR.", score: 1, type: "Racionalización", decisionSummary: "Propusiste discriminación geográfica en vez de dispositivo." }
    ],
    explanation: "La discriminación oculta por dispositivo se percibe como estafa. **Optimización de Margen** ignora el riesgo de reputación (Caso Uber). **Segmentación Regional** es un parche. **Principio de Equidad** protege el activo más valioso: la confianza del cliente."
  },
  {
    id: 'data_driven_design_paralysis',
    displayId: 'MET-16',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Tu equipo lleva 4 días en un debate sobre 'Azul vs Verde' para el botón de CTA principal. El diseñador senior insiste en A/B testing para 'tomar decisiones basadas en data', pero con el tráfico actual tardaría 3 meses en alcanzar significancia estadística. El feature está bloqueando un epic de $80K y el CEO te pregunta en el standup: '¿Por qué no hemos lanzado todavía?'.",
    question: "¿Cómo desbloqueas la decisión?",
    options: [
      { id: 'A', text: "**Decisión Ejecutiva:** Tomas la decisión basada en estándares de industria y avanzas. Reconoces que el costo de oportunidad del retraso supera cualquier ganancia marginal de optimizar el color del botón.", score: 5, type: "Lead (Pragmatismo Estadístico)", decisionSummary: "Tomaste decisión ejecutiva y desbloqueaste el lanzamiento." },
      { id: 'B', text: "**Rigor Experimental:** Insistes en lanzar el test aunque tarde. Estableces el precedente de que ninguna decisión de diseño se toma sin validación de datos, independientemente de la presión de tiempo.", score: 1, type: "Burocracia de Data", decisionSummary: "Exigiste 3 meses de A/B testing para una decisión reversible." },
      { id: 'C', text: "**Validación de Pasillo:** Haces un test de preferencia rápido con 5 colegas. Usas feedback cualitativo interno para justificar la decisión y desbloquear el lanzamiento.", score: 3, type: "Validación 'Light'", decisionSummary: "Usaste validación informal con colegas para decidir." }
    ],
    explanation: "Sin tráfico, el A/B testing es **Parálisis por Análisis**. **Rigor Experimental** aquí es desperdicio. **Validación de Pasillo** es sesgada. La **Decisión Ejecutiva** entiende que la velocidad de ejecución vale más que la certeza en decisiones reversibles de bajo impacto."
  },
  {
    id: 'data_vanity_metrics_trap',
    displayId: 'MET-17',
    category: "Data-Driven Design",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Marketing celebra 'éxito histórico': Page Views subieron 200% gracias a una campaña de contenido viral. Pero tu dashboard muestra que la conversión cayó de 3.2% a 0.9%—el tráfico nuevo no compra. El CMO ya incluyó el crecimiento de tráfico en su presentación al Board de mañana. Tienes 1-on-1 con el CEO en 2 horas y sabes que va a preguntar por los números.",
    question: "¿Cómo comunicas la realidad?",
    options: [
      { id: 'A', text: "**Contexto de Negocio:** Presentas el análisis completo: 'Tenemos más tráfico, pero menos clientes'. Reorientas la conversación desde el volumen (Vanity) hacia la calidad y conversión (Value), protegiendo al CEO de tomar decisiones basadas en espejismos.", score: 5, type: "Lead (Truth Teller)", decisionSummary: "Expusiste métricas de vanidad al CEO." },
      { id: 'B', text: "**Diplomacia Pasiva:** Dejas que Marketing celebre su victoria de tráfico. Te enfocas en presentar tus propias métricas de producto por separado, evitando un conflicto directo sobre la interpretación de los datos.", score: 1, type: "Observación Pasiva", decisionSummary: "Callaste mientras Marketing reportaba vanity metrics." },
      { id: 'C', text: "**Optimización de Engagement:** Propones mejorar los artículos clickbait para intentar retener ese tráfico. Asumes que el volumen es positivo y tratas de arreglar el funnel 'aguas abajo'.", score: -1, type: "Mercenario", decisionSummary: "Optimizaste clickbait validando métricas vacías." }
    ],
    explanation: "Un Lead es guardián de la verdad. **Diplomacia Pasiva** permite que la empresa se estrelle. **Optimización de Engagement** valida el clickbait. **Contexto de Negocio** expone las **Vanity Metrics** para asegurar que la estrategia se base en valor real."
  },
  {
    id: 'freemium_upgrade_friction',
    displayId: 'MET-18',
    category: "Monetización & UX",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El plan gratuito está quemando $45K/mes en infraestructura sin convertir: solo 0.8% upgradea a Premium. El CFO advierte que el runway cae a 4 meses si no mejora. Growth propone popups de upgrade cada 5 clicks. El Head de Producto te escribe alarmado: 'Si destruimos el NPS, perdemos el word-of-mouth que nos trajo aquí'.",
    question: "¿Qué estrategia propones?",
    options: [
      { id: 'A', text: "**Upsell Contextual:** Implementas triggers de upgrade únicamente cuando el usuario intenta usar una feature avanzada o alcanza un límite. Justificas la fricción con valor inmediato, maximizando conversión sin destruir la experiencia general.", score: 5, type: "Lead (Fricción con propósito)", decisionSummary: "Implementaste upsell contextual en límites." },
      { id: 'B', text: "**Reducción de Capacidad:** Recortas silenciosamente los límites del plan gratuito (menos storage/proyectos). Esperas que la limitación natural fuerce el upgrade sin necesidad de invadir la interfaz con anuncios.", score: 1, type: "Idealista (Lento)", decisionSummary: "Recortaste límites free sin comunicar." },
      { id: 'C', text: "**Monetización de Supervivencia:** Aceptas la estrategia agresiva de Growth temporalmente. Documentas el impacto esperado en NPS pero priorizas la inyección de cash flow necesaria para no cerrar la empresa.", score: 3, type: "Monetización Agresiva", decisionSummary: "Implementaste popups agresivos temporalmente." }
    ],
    explanation: "**Reducción de Capacidad** es demasiado lento para una crisis. **Monetización de Supervivencia** quema la marca. **Upsell Contextual** es el balance: pide dinero cuando el usuario percibe el valor, convirtiendo la fricción en una transacción lógica."
  },
  {
    id: 'seo_vs_ux_url_structure',
    displayId: 'MET-19',
    category: "SEO vs Experiencia",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    scenario: "Marketing quiere cambiar todas las URLs para SEO. Engineering dice que romperá 12K links externos. CS advierte sobre bookmarks rotos.",
    question: "¿Cómo priorizas?",
    options: [
      { id: 'A', text: "**Estrategia de Migración (301):** Autorizas el cambio de URLs pero condicionas el lanzamiento a la implementación de redirects 301 permanentes. Aseguras el beneficio de SEO futuro sin romper la experiencia de los usuarios pasados.", score: 5, type: "Lead (No-downside)", decisionSummary: "Implementaste migración SEO con redirects 301." },
      { id: 'B', text: "**Growth First:** Priorizas el cambio de URLs inmediato. Entiendes que el tráfico orgánico nuevo es el futuro de la empresa y que los usuarios actuales eventualmente actualizarán sus marcadores.", score: 1, type: "Growth-first (Rompe confianza)", decisionSummary: "Cambiaste URLs rompiendo 12K enlaces." },
      { id: 'C', text: "**Defensa de UX:** Bloqueas el cambio. Argumentas que romper 12K enlaces externos degrada la confianza en la plataforma y que el SEO debe lograrse mediante contenido, no reestructuración técnica.", score: 3, type: "Conservador (Pierde oportunidad)", decisionSummary: "Bloqueaste migración SEO por conservadurismo." }
    ],
    explanation: "No es SEO vs UX, es ejecución competente. **Growth First** rompe la experiencia. **Defensa de UX** pierde oportunidad de crecimiento. **Estrategia de Migración (301)** es la solución técnica estándar que captura valor (SEO) sin destruir valor (UX)."
  },
  {
    id: 'analytics_platform_cost_explosion',
    displayId: 'MET-20',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Amplitude triplicó el precio de renovación: de $15K a $45K anuales. El CFO exige reducir costos de herramientas un 40% este Q. Pero Data Science advierte: 'Sin el historial de eventos de Amplitude, perdemos el modelo predictivo de churn que nos ahorra $200K/año en retención'. Migrar a otra plataforma tomaría 4 meses de ingeniería.",
    question: "¿Cómo resuelves el costo sin perder inteligencia?",
    options: [
      { id: 'A', text: "**Estrategia de Muestreo (Sampling):** Reduces el volumen de eventos trackeando solo el 100% de conversiones críticas y un muestreo estadístico (20%) del resto. Mantienes la inteligencia direccional reduciendo la factura drásticamente.", score: 5, type: "Lead (Sampling inteligente)", decisionSummary: "Implementaste sampling estadístico reduciendo costos." },
      { id: 'B', text: "**Limpieza de Eventos:** Eliminas el tracking de todas las features secundarias y experimentos pasados. Te quedas solo con el 'Core User Journey' para cumplir el presupuesto, sacrificando visibilidad periférica.", score: 1, type: "Budget-first approach", decisionSummary: "Eliminaste tracking cegando al equipo." },
      { id: 'C', text: "**Migración Self-Hosted:** Inicias migración a una solución open-source propia (PostHog). Inviertes ingeniería para eliminar el costo de licencia a largo plazo, asumiendo el riesgo operativo de mantener la infraestructura.", score: 3, type: "Build vs Buy (Alto switching cost)", decisionSummary: "Iniciaste migración a PostHog con alto costo." }
    ],
    explanation: "Cortar data a ciegas (**Limpieza**) ciega al equipo. Migrar (**Self-Hosted**) tiene costos ocultos de mantenimiento enormes. **Estrategia de Muestreo** es la solución de escala: Google y Facebook no trackean cada click de cada usuario; usan inferencia estadística para mantener costos viables."
  },
  {
    id: 'north_star_metric_misalignment',
    displayId: 'MET-21',
    category: "Métricas de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Tu producto es una herramienta B2B de productividad (tipo Asana). El CEO quiere cambiar la North Star Metric a 'Tiempo en la App' para reportar mayor engagement a inversores. Tú sabes que para una herramienta de productividad, pasar mucho tiempo en la app significa que el usuario es ineficiente o el diseño es confuso. El Board espera ver el nuevo dashboard de KPIs el lunes.",
    question: "¿Cómo reorientas la definición de éxito?",
    options: [
      { id: 'A', text: "**Engagement Optimization:** Aceptas 'Tiempo en la App' como métrica principal. Diseñas features pegajosas (notificaciones, social feed) para maximizar la permanencia. Alineas el producto con la narrativa que el CEO quiere vender a los inversores.", score: 1, type: "Vanity (Métrica tóxica)", decisionSummary: "Adoptaste métrica de vanidad para B2B." },
      { id: 'B', text: "**Efficiency Metric:** Propones 'Tareas Completadas por Sesión' o 'Tiempo para completar flujo'. Argumentas con data que la retención a largo plazo en B2B correlaciona con la velocidad, no con la permanencia. Alineas el éxito del cliente con el del negocio.", score: 5, type: "Lead (Customer Success Alignment)", decisionSummary: "Propusiste métrica de eficiencia para B2B." },
      { id: 'C', text: "**Dual Dashboard:** Creas dos sets de métricas: uno de 'Engagement' para inversores y uno de 'Eficiencia' para el equipo interno. Satisfaces la necesidad política externa mientras mantienes al equipo de producto enfocado en la utilidad real.", score: 3, type: "Silos (Disonancia estratégica)", decisionSummary: "Creaste dashboards duales creando silos." }
    ],
    explanation: "En productividad B2B, 'Tiempo en App' es una **Métrica Tóxica** (indica fricción). Maximizarla (**Engagement Optimization**) destruye valor para el usuario. **Dual Dashboard** crea esquizofrenia organizacional. La **Efficiency Metric** es la verdadera **North Star**: si el usuario es eficiente, renueva el contrato."
  },
  {
    id: 'feature_sunset_zombie_usage',
    displayId: 'MET-22',
    category: "Gestión de Roadmap",
    icon: <Trash2 className="w-6 h-6 text-gray-500" />,
    scenario: "La feature 'Reportes Legacy' es usada por solo el 1.5% de los usuarios, pero genera el 30% de los tickets de soporte y bloquea la migración a la nueva base de datos. Sales advierte: 'Ese 1.5% incluye a Coca-Cola, si quitamos esto, amenazan con churn'. Mantenerla cuesta 2 sprints de ingeniería por trimestre.",
    question: "¿Cómo gestionas el 'Zombie Feature'?",
    options: [
      { id: 'A', text: "**Legacy Support Mode:** Mantienes la feature viva pero congelada. No inviertes en mejoras, solo parches críticos. Proteges el contrato de Coca-Cola asumiendo el costo de mantenimiento como un 'impuesto' necesario para retener cuentas Enterprise.", score: 3, type: "Status Quo (Deuda técnica)", decisionSummary: "Mantuviste feature zombie por miedo a churn." },
      { id: 'B', text: "**Sunset Estratégico:** Anuncias la deprecación con 6 meses de aviso. Ofreces a Coca-Cola un servicio de migración 'White Glove' a los nuevos reportes o exportación de data. Priorizas la salud sistémica del producto eliminando lastre, gestionando el riesgo de la cuenta con servicio, no con código.", score: 5, type: "Lead (Jardinería de Producto)", decisionSummary: "Depreciaste feature con migración White Glove." },
      { id: 'C', text: "**Reescritura Moderna:** Reconstruyes los 'Reportes Legacy' en la nueva tecnología para que dejen de bloquear la base de datos. Resuelves el problema técnico y mantienes feliz al cliente, aunque inviertes recursos masivos en una feature con 1.5% de uso.", score: 1, type: "Desperdicio (Mal ROI)", decisionSummary: "Invertiste sprints en feature de 1.5% uso." }
    ],
    explanation: "Mantener features zombies (**Legacy Support**) frena la innovación de todo el producto. Reconstruir para el 1.5% (**Reescritura**) es mal ROI. El **Sunset Estratégico** es doloroso pero necesario: gestiona la relación con el cliente Enterprise mediante **Service Design** (migración asistida) en lugar de perpetuar **Deuda Técnica**."
  },
  {
    id: 'dashboard_data_density_overload',
    displayId: 'MET-23',
    category: "Diseño de Información",
    icon: <Layout className="w-6 h-6 text-indigo-500" />,
    scenario: "Un cliente Enterprise clave exige un 'Dashboard Ejecutivo' que muestre 40 métricas en una sola pantalla 'para verlo todo de un vistazo'. Tu equipo de diseño argumenta que eso viola la Ley de Miller y crea sobrecarga cognitiva. El cliente insiste: 'Soy el experto, sé lo que necesito'. Engineering advierte que cargar 40 queries simultáneas hará la página lentísima (5s+ load time).",
    question: "¿Cómo resuelves el conflicto entre deseo del cliente y usabilidad/performance?",
    options: [
      { id: 'A', text: "**Customer Obsession:** Construyes el dashboard tal cual lo piden. En B2B, el cliente es el experto de su dominio. Si quieren densidad, les das densidad. Optimizas el backend para mitigar la lentitud.", score: 1, type: "Toma de pedidos (Order Taker)", decisionSummary: "Construiste dashboard de 40 métricas sin cuestionar." },
      { id: 'B', text: "**Progressive Dashboard:** Diseñas una vista resumen con los 6 KPIs críticos y permites 'Drill-down' (clic para ver detalles) para el resto. Vendes la velocidad de carga y la claridad de decisión como beneficios ejecutivos superiores a la densidad bruta.", score: 5, type: "Lead (Consultor Experto)", decisionSummary: "Diseñaste dashboard progresivo con drill-down." },
      { id: 'C', text: "**Widget Builder:** Construyes un sistema de widgets personalizables. Sales reporta que la 'personalización total' es la feature #1 solicitada en demos de Enterprise. Le das al cliente una página en blanco para que se arme su propio dashboard, empoderándolo con libertad absoluta.", score: 3, type: "Herramienta vs Solución", decisionSummary: "Construiste widget builder delegando diseño." },
    ],
    explanation: "El cliente pide una solución (40 métricas) a un problema (visibilidad). **Customer Obsession** ciega resulta en productos inusables. **Widget Builder** abdica la responsabilidad de diseño. El **Progressive Dashboard** aplica **Progressive Disclosure**: resuelve el problema real (visibilidad rápida) cuidando la performance y la carga cognitiva."
  },
  {
    id: 'leading_vs_lagging_indicators',
    displayId: 'MET-24',
    category: "Métricas de Producto",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    scenario: "El Revenue del Q se ve plano. El Board pide un plan de acción. El PM propone lanzar una campaña de NPS para 'entender la satisfacción'. Tú notas que la métrica de 'Activación de nuevos usuarios' (Día 1) cayó un 15% hace 2 meses, lo que explica la caída de revenue hoy. El equipo quiere enfocarse en encuestas.",
    question: "¿Cómo reorientas el esfuerzo del equipo?",
    options: [
      { id: 'A', text: "**NPS Deep Dive:** Apoyas la campaña de NPS. Necesitas voz del cliente cualitativa para entender por qué no están pagando. Es una acción visible y rápida que demuestra al Board que están escuchando al mercado.", score: 1, type: "Lagging Indicator Focus", decisionSummary: "Lanzaste encuesta NPS ignorando causa raíz." },
      { id: 'B', text: "**Activation Sprint:** Detienes las encuestas. Reasignas recursos a arreglar el onboarding inmediatamente. Explicas que la Activación es un **Leading Indicator** (predice futuro), mientras que Revenue y NPS son **Lagging Indicators** (espejo retrovisor). Arreglar el input arregla el output.", score: 5, type: "Lead (Causalidad)", decisionSummary: "Enfocaste en activación atacando Leading Indicator." },
      { id: 'C', text: "**Discount Campaign:** Propones ofertas agresivas de fin de Q para levantar el revenue plano. Atacas el síntoma financiero directamente para cumplir la meta del trimestre, ganando tiempo para investigar los problemas de producto.", score: 3, type: "Cortoplacista (Daña margen)", decisionSummary: "Lanzaste descuentos dañando margen." }
    ],
    explanation: "El Revenue y el NPS son **Lagging Indicators** (lo que ya pasó). No puedes cambiarlos directamente. La Activación es un **Leading Indicator** (predice revenue futuro). Enfocarse en **NPS** cuando la activación cae es como mirar el termómetro mientras la casa se incendia. El **Activation Sprint** ataca la causa raíz."
  },
  {
    id: 'average_user_fallacy_segmentation',
    displayId: 'MET-25',
    category: "Data-Driven Design",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "Estás rediseñando el editor de documentos. La data dice que el usuario promedio usa 4 botones. El equipo propone simplificar la UI ocultando todo lo demás. Sin embargo, un análisis de distribución muestra dos picos: el 80% usa 2 botones (lectores), y el 20% usa 45 botones (editores power users que pagan la cuenta). Diseñar para el 'promedio' (4 botones) dejaría insatisfechos a ambos grupos.",
    question: "¿Cómo abordas el rediseño con esta data bimodal?",
    options: [
      { id: 'A', text: "**Simplificación Radical:** Optimizas para la mayoría (80%). Ocultas las herramientas complejas en menús para limpiar la interfaz. Priorizas la experiencia de la masa de usuarios, asumiendo que los power users aprenderán los nuevos flujos.", score: 1, type: "Alienación de Power Users", decisionSummary: "Simplificaste alienando power users que pagan." },
      { id: 'B', text: "**Contextual Modes:** Diseñas dos modos distintos: 'Lectura' (limpio, default) y 'Edición Avanzada' (denso, herramientas visibles). Reconoces que el 'usuario promedio' no existe matemáticamente y sirves a cada segmento según su intención.", score: 5, type: "Lead (Persona-Based Design)", decisionSummary: "Diseñaste modos contextuales por segmento." },
      { id: 'C', text: "**Middle Ground UI:** Dejas visibles los 10 botones más usados. Buscas un equilibrio entre simplicidad y potencia que funcione 'más o menos bien' para todos, evitando la complejidad de mantener modos distintos.", score: 3, type: "Compromiso (Nadie gana)", decisionSummary: "Buscaste equilibrio dejando a todos insatisfechos." }
    ],
    explanation: "La **Falacia del Usuario Promedio** destruye productos: si diseñas un traje para el cuerpo promedio, no le queda bien a nadie. Cuando la distribución es bimodal (lectores vs editores), el compromiso (**Middle Ground**) falla. **Contextual Modes** adapta la interfaz a la intención, protegiendo tanto la simplicidad para unos como la potencia para quienes pagan (**Power Users**)."
  },
  {
    id: 'attribution_apocalypse_cookies',
    displayId: 'MET-26',
    category: "Data & Privacidad",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Con el fin de las cookies de terceros, el CAC reportado en dashboard subió un 200% porque Marketing perdió la atribución. El CMO exige implementar 'Server-Side Fingerprinting' agresivo para recuperar el rastreo. Legal advierte que esto viola el espíritu de GDPR/CCPA, aunque técnicamente se puede ocultar.",
    question: "¿Cómo resuelves la ceguera de datos de Marketing?",
    options: [
      { id: 'A', text: "**Fingerprinting Táctico:** Implementas la solución del CMO. La supervivencia del negocio depende de optimizar el gasto en ads. Asumes el riesgo de privacidad bajo la justificación de 'interés legítimo' del negocio.", score: -1, type: "Dark Tech (Riesgo Legal)", decisionSummary: "Implementaste fingerprinting violando privacidad." },
      { id: 'B', text: "**Marketing Mix Modeling (MMM):** Rechazas el fingerprinting. Mueves la estrategia de medición hacia modelos probabilísticos (MMM) y encuestas '¿Cómo nos conociste?'. Aceptas que la era de la atribución perfecta 1:1 terminó.", score: 5, type: "Lead (Adaptación al Mercado)", decisionSummary: "Adoptaste MMM probabilístico post-cookies." },
      { id: 'C', text: "**First-Party Data Strategy:** Ofreces un lead magnet agresivo (ebook/curso) para capturar emails antes en el funnel. Recuperas atribución moviendo al usuario a canales propios (email), aunque cambias el flujo de adquisición.", score: 3, type: "Mitigación (Parcial)", decisionSummary: "Pivoteaste a first-party data parcialmente." }
    ],
    explanation: "El Fingerprinting es una carrera armamentista contra Apple/Google que vas a perder. **Marketing Mix Modeling (MMM)** es el estándar moderno post-cookie: medición probabilística, no determinística. **Dark Tech** expone a la empresa a ser bloqueada por navegadores y demandada."
  }
];
