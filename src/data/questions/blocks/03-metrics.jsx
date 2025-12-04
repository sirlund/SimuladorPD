import React from 'react';
import {
  Timer, AlertTriangle, ArrowRight, BarChart2, Users, Zap,
  Globe, Lock, RefreshCw, Target, Play, Star, AlertOctagon,
  Trophy, TrendingUp, DollarSign
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
    scenario: "El dashboard de analytics muestra un churn del 40% en los últimos 7 días (normal es 8%), equivalente a $280K en ARR perdido. El equipo de Customer Success culpa al rediseño del flujo de pago que lanzaste hace 2 semanas. El VP de Engineering ya preparó un rollback, pero tu PM argumenta: 'Si revertimos sin evidencia, admitimos fracaso públicamente ante el Board'. El CEO te convoca a una reunión de emergencia en 2 horas donde tendrás que defender o sacrificar tu decisión de diseño.",
    question: "¿Cuál es tu primer movimiento en las próximas 2 horas?",
    options: [
      { id: 'A', text: "**Reversión Preventiva:** Coordinas con ingeniería para revertir inmediatamente el diseño nuevo y volver al flujo anterior mientras investigas en paralelo qué causó el spike. Detener la hemorragia es prioridad, aunque arriesgas revertir un cambio inocente y perder credibilidad si el problema real era externo (pasarela de pago, fraude, etc.).", score: 3, type: "Reactivo (Puede ser prematuro)" },
      { id: 'B', text: "**Análisis Forense Urgente:** Segmentas el churn por cohorte (usuarios nuevos vs antiguos), flujo usado (nuevo vs legacy), fuente de tráfico y analizas heat maps + session recordings para identificar el punto exacto de fricción antes de la reunión, aunque arriesgas llegar con hipótesis en lugar de una solución definitiva si el análisis no es concluyente en 2 horas.", score: 5, type: "Lead (Data-First)" },
      { id: 'C', text: "**War Room Inmediato:** Convocas a todos los stakeholders (CS, Product, Eng, Data) a una sala para generar hipótesis colaborativas y dividir las investigaciones entre el equipo, aunque arriesgas perder tiempo valioso en discusiones sin datos concretos cuando solo tienes 2 horas antes de enfrentar al CEO.", score: 3, type: "Comité de Crisis (Ruido)" }
    ],
    explanation: "Con $280K en ARR perdido y el CEO esperando en 2 horas, revertir sin evidencia puede ser prematuro si el problema no es el diseño (podría ser un bug de pasarela, cambio de precio, o tráfico de mala calidad). El **Análisis Forense Urgente** te permite llegar a la reunión con datos concretos sobre el churn del 40%, transformando el pánico en un plan de acción informado. El **War Room** sin datos previos suele generar ruido y caos."
  },
  {
    id: 'competitor_feature_launch',
    category: "Estrategia Competitiva",
    icon: <Trophy className="w-6 h-6 text-yellow-600" />,
    scenario: "Tu competidor lanzó 'Reportes AI' y el VP de Ventas está en pánico tras perder 3 deals ($340K). Exige clonarlo en 1 sprint para 'salvar el Q'. Sin embargo, tu research confirma que la queja #1 de los clientes actuales es la lentitud de los reportes, no la falta de AI. Engineering estima que clonar tomaría 8 semanas, paralizando la optimización de velocidad.",
    question: "¿Cómo respondes al VP de Ventas ante presión competitiva vs. evidencia de usuario?",
    options: [
      { id: 'A', text: "**Market-Driven Velocity:** Pivotar todo el equipo a clonar 'Reportes AI' inmediatamente. En mercados competitivos, quien shippea primero gana - los mejores equipos de Silicon Valley priorizan velocidad de respuesta sobre research perfecto. Los usuarios actuales entienden que la innovación requiere experimentación.", score: -1, type: "Feature Factory" },
      { id: 'B', text: "**Diagnóstico de Deals:** Entrevistar hoy mismo a esos 3 clientes. ¿Realmente querían 'AI' o solo necesitaban exportar data? Resuelves el problema de fondo, no la solución, aunque arriesgas perder momentum competitivo si resulta que el mercado genuinamente valoraba la capacidad de AI y tardas 8 semanas en responder.", score: 5, type: "Lead (Estratégico)" },
      { id: 'C', text: "**Contra-oferta Táctica:** Lanzar 'Export to Excel' rápido y vender nuestra velocidad como ventaja competitiva. 'Ellos tienen AI lenta, nosotros reportes instantáneos', aunque arriesgas que el mercado perciba esto como feature inferior si la narrativa de AI ya se instaló en la industria.", score: 3, type: "Pragmático" }
    ],
    explanation: "Con $340K en deals perdidos y presión de Ventas, copiar por pánico es amateur. El **Diagnóstico de Deals** frena la histeria para entender el **Job-to-be-Done** real detrás de esos 3 clientes. A menudo, el cliente pide 'AI' (la solución de moda) pero necesita 'Excel' o 'Velocidad' (el problema real). Construir lo que piden sin validar el problema convierte al equipo en una **Feature Factory**."
  },
  {
    id: 'investor_demo_cosmetics',
    category: "Gestión de Stakeholders",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    scenario: "Pitch de Series A en 4 días con Sequoia ($8M target valuation). El CEO te pide 'embellecer el dashboard para la demo': gráficos más 'wow', animaciones, colores vibrantes, data que se vea impresionante. El producto real tiene 2,400 usuarios activos pero es visualmente austero (diseño enterprise conservador). Él argumenta: 'Los VCs invierten en visión, no en el presente - necesitamos mostrar potencial'. Tu designer estima 40 horas para una versión 'demo mode' completamente custom. Tu CTO advierte: 'Si Sequoia pide acceso durante Due Diligence y ven código demo fake, nos descalifican instantáneamente'. Tienes que decidir hoy para que el designer pueda ejecutar.",
    question: "¿Qué nivel de 'polish aspiracional' permites sin cruzar línea ética?",
    options: [
      { id: 'A', text: "**Demo Mode Producido:** Diseñas versión 'demo' con UI pulida, animaciones, datos ficticios hermosos que nunca se usará en producción. Es lo que hacen todos - los VCs lo entienden. Separas claramente 'vision' de 'realidad actual', aunque arriesgas que Sequoia descubra el código demo durante Due Diligence y perciba esto como deshonestidad fundacional que destruya el deal de $8M.", score: 1, type: "Teatro (Deuda ética)" },
      { id: 'B', text: "**Polish del Roadmap Q Actual:** Mejoras SOLO features que están ya comprometidas en roadmap de Q2-Q3 (con designs WIP). La demo muestra dirección real del producto, no un espejismo. Es aspiracional pero honest-to-roadmap.", score: 5, type: "Lead (Honestidad aspiracional)" },
      { id: 'C', text: "**Pureza Absoluta:** Te niegas a 'maquillar' nada. Lo que ven los inversores debe ser EXACTAMENTE lo que usan los clientes hoy, pixel por pixel. La honestidad radical es tu principio, aunque arriesgas que el pitch se vea poco inspirador comparado con competidores que muestran visión aspiracional y Sequoia descarte la oportunidad por falta de ambición visual.", score: 1, type: "Purista (Pierde momentum de pitch)" }
    ],
    explanation: "Con Sequoia en 4 días y $8M en juego, una demo de inversión vende el futuro próximo, no solo el presente. El **Polish del Roadmap Actual** balancea la visión con la integridad de ejecución mostrando features ya comprometidas. Crear un **Demo Mode Producido** (vaporware) genera una deuda de expectativas que explotará cuando el CTO advierte que Sequoia verá el código demo durante **Due Diligence**. La **Pureza Absoluta** falla en inspirar sobre el potencial del producto."
  },
  {
    id: 'technical_debt_explosion',
    category: "Arquitectura de Sistemas",
    icon: <AlertOctagon className="w-6 h-6 text-orange-600" />,
    scenario: "La velocidad del equipo cayó 40% en los últimos 2 sprints (de 32 story points/sprint a 19). Tu Tech Lead principal midió que el 68% del tiempo se consume en hotfixes y workarounds por deuda técnica acumulada. Engineering exige un 'Refactor Sprint' de 2 semanas sin features nuevas para sanear el código legacy. El VP de Product argumenta: 'Imposible parar - tenemos demo con cliente enterprise ($420K deal) en 3 semanas y necesitamos el SSO funcionando'. Tu Engineering Manager amenaza: 'Si no refactoreamos ya, renuncio y me llevo a 2 seniors conmigo'. Board meeting es mañana.",
    question: "¿Qué estrategia de balance deuda/delivery propones al Board AHORA con amenaza de renuncia de engineers?",
    options: [
      { id: 'A', text: "**Velocity Through Adversity:** Seguir shippeando features aunque sea lento. Los mejores equipos de startup operan bajo constraints - la deuda técnica es normal en crecimiento acelerado. El revenue de nuevas features compensará la ineficiencia operativa y después refactoreamos con más recursos.", score: -1, type: "Miope" },
      { id: 'B', text: "**Tax de Deuda:** Acordar dedicar 20% de cada sprint a refactor progresivo. Evitas el parón total traumático pero pagas la deuda constantemente, aunque arriesgas no llegar al demo de SSO en 3 semanas si la capacidad reducida (de 19 a ~15 points efectivos) retrasa features críticas.", score: 5, type: "Lead (Sostenible)" },
      { id: 'C', text: "**Parón Total:** Apoyar detener el roadmap 2 semanas. Argumentas que es mejor sufrir un retraso corto ahora que sangrar eficiencia por meses, aunque arriesgas perder el deal de $420K si el demo con cliente enterprise se retrasa y que el Board cuestione tu capacidad de delivery bajo presión.", score: 3, type: "Drástico" }
    ],
    explanation: "Con velocidad cayendo 40% (de 32 a 19 story points) y amenaza de renuncia del Engineering Manager, ignorar deuda degrada velocidad permanentemente. Parar 2 semanas arriesga el demo de $420K en 3 semanas. El **Tax de Deuda** del 20% paga deuda constantemente sin trauma, manteniendo delivery y moral del equipo. Es sostenible a largo plazo aunque requiere sacrificar algo de capacidad inmediata."
  },

  // --- BLOQUE 8: DATA, MÉTRICAS & EXPERIMENTACIÓN ---
  {
    id: 'ab_test_interpretation_bias',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Tu A/B test del nuevo Home corrió 3 semanas con 12,000 usuarios y el resultado es p-value de 0.23 (necesitas <0.05 para significancia). La conversión subió de 3.2% a 3.4%, pero el intervalo de confianza incluye resultados negativos. Tu PM te escribe en Slack: 'El CFO ya prometió $1.8M de revenue incremental al Board basado en este lanzamiento - TENEMOS que encontrar algo positivo. ¿Qué tal si reportamos el 8% de mejora en tiempo de engagement? Esa métrica sí es significativa'. El lanzamiento está programado para el lunes. Data Science advierte: 'Cherry-picking métricas secundarias destruye la credibilidad del proceso de experimentación a largo plazo'.",
    question: "¿Qué recomendación das sobre el launch del lunes?",
    options: [
      { id: 'A', text: "**Apoyar el lanzamiento:** 'Done is better than perfect'. Argumentas que el 8% de mejora, aunque no significativo, es mejor que nada, aunque arriesgas contaminar el producto con cambios sin valor probado y erosionar la cultura de experimentación rigurosa del equipo.", score: 1, type: "Complaciente" },
      { id: 'B', text: "**Defensa de la Data:** 'El test falló. Si lanzamos, ensuciamos el producto sin valor probado. Iteremos la hipótesis y testeemos de nuevo', aunque arriesgas enfrentar la presión política del CFO que ya prometió $1.8M al Board basado en este lanzamiento y necesitas capital para mantener tu posición.", score: 5, type: "Lead (Integridad de Data)" },
      { id: 'C', text: "**Lanzamiento Vigilado:** Lanzar pero monitorear de cerca por 48h. Si la conversión baja, haces rollback inmediato. Asumes el riesgo, aunque arriesgas que 48 horas de tráfico negativo contaminen tu funnel y que el CFO use este precedente para presionar futuros lanzamientos sin validación.", score: 3, type: "Riesgoso" }
    ],
    explanation: "Con $1.8M prometidos al Board y el lanzamiento del lunes, lanzar un test inconcluso compromete la credibilidad del proceso de experimentación. **Lanzamiento Vigilado** es riesgoso sin evidencia de mejora. Un Lead defiende la integridad de datos (**Defensa de la Data**): si el test falló y el PM quiere hacer **cherry-picking** de métricas secundarias, iteremos la hipótesis. La credibilidad científica es más valiosa que un lanzamiento apresurado."
  },
  {
    id: 'vanity_metric_viral_growth',
    category: "Métricas de Producto",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Un hack viral (TikTok trending sound con tu logo) trajo 50,000 usuarios nuevos en 7 días. Los inversores celebran el crecimiento 'explosivo' en el Board call del viernes. Sin embargo, tu análisis cohort muestra que la retención día-30 es del 0.5% (vs 38% promedio histórico). El CAC de estos usuarios virales fue $0, pero el LTV proyectado es $0.12 (costo de servidor excede valor). Tu CMO argumenta: 'Este momentum viral puede ayudarnos a cerrar Series B - los VCs aman growth curves así'. Tienes que presentar métricas de producto en el Board meeting de mañana.",
    question: "¿Cómo evalúas el verdadero ROI del feature ante el equipo ejecutivo con data contradictoria?",
    options: [
      { id: 'A', text: "**Celebrar con ellos:** El crecimiento ayuda a levantar capital. Asumes que la retención se puede arreglar después con emails y notificaciones, aunque arriesgas que el Board tome decisiones estratégicas basadas en métricas engañosas y que la Serie B se caiga cuando los VCs descubran la retención de 0.5% durante Due Diligence.", score: 1, type: "Vanity" },
      { id: 'B', text: "**Reality Check:** Mostrar el gráfico de retención al CEO. 'Estamos llenando un balde agujereado. Pautemos el viral y arreglemos el onboarding ya', aunque arriesgas ser percibido como aguafiestas que mata el momentum de fundraising y que el CMO te culpe si la Serie B tarda más en cerrarse.", score: 5, type: "Lead (Honestidad Radical)" },
      { id: 'C', text: "**Rediseño Reactivo:** Detener todo para rediseñar el producto y adaptarlo a estos nuevos usuarios, asumiendo que son el nuevo target, aunque arriesgas pivotar tu estrategia de producto completa basado en una cohorte viral de 0.5% retención que puede no representar tu ICP real.", score: 1, type: "Reactivo" }
    ],
    explanation: "Con 50K usuarios nuevos pero retención de 0.5% (vs 38% histórico), crecimiento sin retención significa llenar un balde agujereado. Un Lead muestra el funnel completo en el Board meeting de mañana (**Reality Check**) para reorientar la estrategia hacia la retención. Celebrar **Vanity Metrics** distorsiona la realidad del negocio y puede colapsar la Serie B durante **Due Diligence**. El **Rediseño Reactivo** es costoso y prematuro sin entender la causa del abandono."
  },
  {
    id: 'sample_size_impatience',
    category: "Validación Ágil",
    icon: <Timer className="w-6 h-6 text-blue-500" />,
    scenario: "Lanzas un A/B test un lunes para optimizar el flujo de checkout. El miércoles, la variante B está ganando por 12% en conversión (de 18% a 20.16%) pero el tamaño de muestra es de solo 300 usuarios (necesitas 2,000 para significancia estadística del 95%). El PM te presiona: 'Si esperamos 2 semanas más, perdemos $40K en revenue potencial - shippea ya'. Tu Data Scientist advierte: 'Con 300 usuarios, el intervalo de confianza es tan amplio que podría ser un falso positivo'. El CEO pregunta: '¿Cuándo lanzamos la mejora?'",
    question: "¿Cedes a la presión o esperas?",
    options: [
      { id: 'A', text: "**Esperar Significancia:** Mantienes el test activo 2 semanas más hasta llegar al 95% de confianza. La integridad de los datos es innegociable, aunque arriesgas perder $40K en revenue potencial según el PM y que el CEO perciba tu proceso como 'análisis parálisis' que frena velocity.", score: 3, type: "Científico (Lento)" },
      { id: 'B', text: "**Decisión Bayesiana:** Si la ganancia es enorme (+12%) y el riesgo de error bajo, shippeas early con monitoreo intensivo post-launch, aunque arriesgas que sea un falso positivo y contamines el checkout con un cambio que empeora conversión cuando escale a toda la base.", score: 5, type: "Lead (Risk-Reward)" },
      { id: 'C', text: "**Execution Velocity Culture:** Shippeas inmediatamente sin cuestionarlo. En startups de alto crecimiento, velocity supera rigor científico - los mejores equipos confían en la intuición de producto y corrigen rápido si hay problemas. Amazon shippea con 80% de confianza, no 95%.", score: -1, type: "Cómplice de mala ciencia" }
    ],
    explanation: "Con el PM presionando por $40K en revenue potencial y solo 300 usuarios (necesitas 2,000), la significancia estadística es importante, pero en startups la velocidad de aprendizaje a veces vale más que la perfección científica. La clave es evaluar el riesgo de equivocarse con un 12% de mejora. La **Decisión Bayesiana** balancea riesgo-recompensa. **Esperar Significancia** puede ser demasiado lento. Obediencia Ciega renuncia al rigor analítico."
  },
  {
    id: 'retention_vs_acquisition_focus',
    category: "Estrategia de Producto",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Series B cerrada hace 3 meses ($15M). Board exige 3x growth de usuarios para Series C en 9 meses. Growth Team tiene $180K/mes en paid acquisition generando 8,500 sign-ups mensuales. Tu análisis cohort muestra: 62% abandona en Día 7 sin activarse, pero el 38% que se activa tiene excelente LTV ($840 anual). VP de Growth argumenta: 'Necesitamos volumen para el pitch - podemos optimizar retención después de levantar C'. CFO apoya porque los números de adquisición se ven bien en el board deck. Tienes reunión de Q Planning mañana.",
    question: "¿Qué estrategia de balance adquisición/retención defiendes para los próximos 90 días?",
    options: [
      { id: 'A', text: "**70/30 Split Parallel:** Mantener $125K/mes en adquisición (reducción 30% controlada) y reasignar $55K + 1 designer + 1 PM a Sprint Intensivo de Activación (rediseñar onboarding, first-run experience, aha moment). Riesgo político: Growth se siente atacado. Upside: Si mejoras activación 62%→75% en 60 días, cada nuevo usuario vale 40% más.", score: 5, type: "Lead (Calculated rebalance)" },
      { id: 'B', text: "**Acquisition Freeze de 4 Semanas:** Presentas 'Leaky Bucket' memo al CEO proponiendo pausar TODA adquisición paid por 1 mes para focus 100% en retención. Argumentas que llenar balde roto quema dinero. Propones medir impacto en activación antes de reactivar spend. Riesgo: Board ve caída de sign-ups en Q y entra en pánico. Delays en Series C podrían costar runway.", score: 1, type: "Bold pero arriesgado políticamente" },
      { id: 'C', text: "**Growth-Led con Retention Insights:** Propones AUMENTAR adquisición a $220K/mes pero con targeting más preciso basado en perfil de los usuarios que SÍ se activan (industria, company size, use case). Usas data de cohorte exitosa para mejorar CAC efficiency. Dejas onboarding como está - el producto ya funciona para quienes lo entienden. Prioridad: volumen para narrativa de Series C.", score: 3, type: "Growth-focused con optimización" }
    ],
    explanation: "Con presión de Board para Series C, pausar adquisición es arriesgado políticamente. Acelerar sin optimizar desperdicia inversión. El balance calculado (**70/30 Split**) mejora **unit economics** sin detener crecimiento: reduce spend 30% y dedica recursos a mejorar activación, haciendo cada usuario más valioso."
  },

  // --- BLOQUE 9: DISEÑO DE FLUJOS & INTERACCIÓN ---
  {
    id: 'onboarding_length_debate',
    category: "Onboarding & Activación",
    icon: <Play className="w-6 h-6 text-green-500" />,
    scenario: "Marketing prometió en los ads 'Configuración en 2 minutos', pero el PM insiste en un onboarding de 7 pasos obligatorios para 'educar al usuario'. La data muestra 70% de abandono en el paso 3. El CAC es $200 y estás quemando dinero. El PM dice: 'Si quitamos pasos, no entenderán el valor y harán churn después'.",
    question: "¿Cuál es tu contra-propuesta estratégica para salvar el funnel?",
    options: [
      { id: 'A', text: "**Onboarding Progresivo (Just-in-Time):** Reduces a 2 pasos (Setup crítico) y mueves la educación al contexto de uso real con tooltips activados por acción. 'Enséñame cuando lo necesite, no antes'. Reduces Time-to-Value drásticamente.", score: 5, type: "Lead (Time-to-Value)" },
      { id: 'B', text: "**Botón 'Skip' Prominente:** Mantienes los 7 pasos pero permites saltar. Es un compromiso político que calma al PM pero sigue mostrando fricción inicial. Muchos usuarios saltarán sin aprender nada.", score: 3, type: "Parche (Compromiso débil)" },
      { id: 'C', text: "**Gamificación del Onboarding:** Agregas barra de progreso y celebraciones (confeti) en cada paso para hacerlo 'menos aburrido'. Maquillas el problema de longitud con UI.", score: 1, type: "Lipstick on a pig" }
    ],
    explanation: "70% de abandono con **CAC** alto es una emergencia financiera. La educación no sirve si el usuario se va antes de entrar. El **Onboarding Progresivo** prioriza el **Aha Moment** y mueve la educación al momento donde es relevante. Gamificación y Botón Skip son parches que no resuelven la fricción estructural."
  },
  {
    id: 'error_message_user_blame',
    category: "UX Writing & Errores",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    scenario: "Los tickets de soporte aumentaron 40% esta semana ($5k costo extra). La causa: mensajes de error técnicos como 'Error 403: Token Invalid' en el login. Los usuarios creen que su cuenta fue borrada y llaman en pánico. Ingeniería dice que 'no hay tiempo para mapear todos los errores' y que el usuario debería saber reintentar.",
    question: "¿Cómo intervienes para detener la hemorragia de soporte?",
    options: [
      { id: 'A', text: "**Reescritura Cosmética:** Cambias todos los textos a '¡Ups! Algo salió mal' con una ilustración amigable. Es menos técnico, pero igual de inútil para el usuario.", score: 1, type: "Genérico (Poco útil)" },
      { id: 'B', text: "**Mapeo Pareto (Top 5):** Identificas los 5 errores más frecuentes (80% del volumen) y diseñas mensajes con ACCIÓN clara. Ignoras los edge cases por ahora.", score: 5, type: "Lead (Pareto Principle)" },
      { id: 'C', text: "**Self-Service:** Agregas un link '¿Problemas?' debajo del error que lleva a una wiki técnica con soluciones comunes. Empoderas al usuario para resolver problemas de forma autónoma.", score: 1, type: "Self-Service" }
    ],
    explanation: "Cuando los errores cuestan dinero, la prioridad es la resolución autónoma. Mensajes genéricos no resuelven. **Mapeo Pareto** aplica el **Pareto Principle** (80/20) para eliminar la gran mayoría del dolor con un esfuerzo focalizado en los errores más frecuentes."
  },
  {
    id: 'loading_spinner_anxiety',
    category: "Micro-interacciones",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    scenario: "El proceso de 'Procesar Pago' toma 8 segundos por validación anti-fraude del banco. Esta semana explotó el problema: 150 cargos duplicados ($23K en devoluciones), el equipo de Finance gastó 40 horas procesando refunds, y Visa envió carta formal amenazando con subir tu interchange fee si los chargebacks superan el 1% (actualmente estás en 0.8%). Tu PM de Payments te escribe alarmado: 'El CFO está furioso - necesitamos una solución para HOY, no podemos esperar a que Backend optimice el tiempo de respuesta'. El problema: usuarios ven un spinner estático, asumen que se colgó, y hacen click 3-4 veces en 'Pagar'.",
    question: "¿Cómo arreglas esto hoy mismo sin poder acelerar el backend?",
    options: [
      { id: 'A', text: "**Bloqueo de UI + Feedback:** Deshabilitas el botón tras el primer click y cambias el texto a 'Procesando...'. Gestionas la ansiedad con narrativa.", score: 5, type: "Lead (Perceived Performance)" },
      { id: 'B', text: "**Spinner más Grande:** Haces el spinner más visible y agregas texto 'No cierres esta ventana'. Confías en que el usuario lea y obedezca.", score: 1, type: "Débil (No previene error)" },
      { id: 'C', text: "**Confirmation Step:** Implementar un modal de confirmación '¿Confirmar pago de $X?' previo al envío. Reduces errores accidentales y aseguras la intención del usuario antes de procesar.", score: 1, type: "Fricción incorrecta" }
    ],
    explanation: "Con 150 cargos duplicados ($23K en devoluciones), Visa amenazando subir fees, y el CFO exigiendo solución HOY, el problema no es solo la espera de 8 segundos - es el error catastrófico del doble cargo. El **Bloqueo de UI + Feedback** impide físicamente el error (botón deshabilitado) y gestiona la ansiedad con narrativa ('Procesando...'). **Spinner más Grande** es cosmético y no previene clicks múltiples. **Confirmation Step** agrega fricción en el momento equivocado - el usuario ya decidió pagar."
  },
  {
    id: 'infinite_scroll_vs_pagination',
    category: "Patrones de Interacción",
    icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
    scenario: "Marketing lanzó una campaña viral y el tráfico explotó. Pero el CFO está furioso: no puede auditar las transacciones de Q3 porque el 'Infinite Scroll' que implementaste hace imposible encontrar registros específicos de hace 3 meses. 'O me das paginación para el lunes o no puedo cerrar los libros contables'. Marketing dice que la paginación 'se ve vieja'.",
    question: "¿Qué patrón eliges ante un bloqueo legal/financiero?",
    options: [
      { id: 'A', text: "**Paginación Inmediata:** Reviertes a paginación estándar. La necesidad del CFO (auditoría legal) supera cualquier preferencia estética de Marketing. La funcionalidad crítica es innegociable.", score: 5, type: "Lead (Funcionalidad > Estética)" },
      { id: 'B', text: "**Infinite Scroll con Filtros Avanzados:** Mantienes el scroll pero agregas filtros potentes por fecha/monto. Resuelve la búsqueda del CFO sin sacrificar la UX moderna. (Toma más tiempo de dev, riesgo de no llegar al lunes).", score: 3, type: "Idealista (Riesgo de deadline)" },
      { id: 'C', text: "**External Audit Tool:** Habilitar una exportación robusta a Excel/CSV para auditorías. Las herramientas de hoja de cálculo son más potentes para la tarea del CFO que cualquier UI que podamos construir.", score: 1, type: "Arrogante" }
    ],
    explanation: "En herramientas B2B/Financieras, la 'encontrabilidad' y auditoría son requisitos funcionales, no opcionales. **Infinite Scroll** rompe la navegación profunda. Ante un bloqueo de cierre contable, la **Paginación Inmediata** es la solución robusta y rápida. Export to CSV delega el problema al usuario fuera de la plataforma."
  },

  // --- MIGRATED FROM INNOVATION BLOCK ---
  {
    id: 'growth_dark_patterns_subscription',
    category: "Growth Hacking vs Ética",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    scenario: "El churn mensual explotó a 18% (vs 6% histórico), quemando $95K MRR/mes. El Head of Growth te pide diseñar un flujo de cancelación de suscripción que requiera llamar por teléfono para darse de baja (Roach Motel), argumentando: 'Nuestra competencia lo usa y reduce el churn un 80% - es la industria estándar en SaaS'. Legal advierte: 'Esto viola la FTC Restore Online Shoppers Confidence Act - multa de hasta $43K por violación'. El CFO te presiona: 'Si no detenemos el churn, nos quedamos sin runway en 9 meses'. Tienes reunión de roadmap mañana.",
    question: "¿Cómo respondes a esta táctica agresiva?",
    options: [
      { id: 'A', text: "**Negarse y Proponer Alternativa:** 'No diseñaré trampas'. Proponer un flujo digital con una oferta de retención (descuento) antes de cancelar. Retener por valor, no por secuestro, aunque arriesgas que la retención ética no detenga los $95K MRR/mes de churn lo suficientemente rápido y el CFO te culpe por la crisis de runway.", score: 5, type: "Lead (Retención Ética)" },
      { id: 'B', text: "**User Retention Best Practices:** 'El negocio manda'. Si la competencia lo usa y reduce el churn 80%, es una práctica estándar de industria validada. Los usuarios que realmente quieren irse encontrarán la forma - esto solo filtra cancelaciones impulsivas que después se arrepienten. Cumples con el KPI para salvar el runway.", score: -1, type: "Mercenario" },
      { id: 'C', text: "**Fricción Digital:** Negociar no usar el teléfono, pero poner 5 pantallas de confirmación y encuesta obligatoria. Es un punto medio molesto pero digital, aunque arriesgas que esto siga siendo percibido como dark pattern por usuarios y dañe el NPS mientras Legal todavía podría cuestionar si cumple con normativas de cancelación fácil.", score: 1, type: "Cómplice 'Light'" }
    ],
    explanation: "Con **churn** de 18% quemando $95K MRR/mes y runway de 9 meses, el **Roach Motel** es ilegal según Legal (FTC Act, multa $43K/violación) y destruye la marca. La **Retención Ética** intenta convencer al usuario de quedarse aportando valor, no obligarlo mediante fricción. Diseñar el **Dark Pattern** o aceptar **Fricción Digital** compromete la integridad del diseñador y la confianza en la marca."
  },
  {
    id: 'growth_virality_vs_privacy',
    category: "Growth Hacking vs Ética",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    scenario: "El crecimiento orgánico se estancó en +280 usuarios/mes (necesitas 1,500 para el target de Board). Growth quiere una feature que acceda a la agenda de contactos del usuario y envíe invitaciones automáticas por SMS a todos sus amigos para ganar '$10 en créditos gratis'. Proyectan un K-factor de 1.8 (viralidad explosiva). Sin embargo, Legal advierte: 'Esto viola TCPA - multas de $500-$1,500 por SMS no solicitado'. Un usuario en beta testing reportó: 'Envió 340 SMS sin querer y sus contactos lo bloquearon pensando que era spam'. El VP de Growth argumenta: 'LinkedIn e Uber crecieron así en 2011 - es lo que funciona'. Tienes meeting de roadmap Q2 mañana.",
    question: "¿Cómo gestionas este request viral?",
    options: [
      { id: 'A', text: "**Proven Growth Playbook:** Diseñarlo tal cual. La viralidad es clave para crecer y 'todos lo hacen' (Uber, LinkedIn en 2012 crecieron así). El K-factor de 1.8 puede resolver el target de Board. Los usuarios que quieren los $10 en créditos entienden el trade-off de compartir sus contactos.", score: -1, type: "Spammer" },
      { id: 'B', text: "**Invite Consciente:** Diseñar un selector de contactos donde el usuario ELIGE a quién invitar uno por uno. Menos viralidad explosiva, pero cero riesgo de reputación/spam, aunque arriesgas que el K-factor caiga de 1.8 a 0.4 y no llegues al target de 1,500 usuarios/mes que el Board exige.", score: 5, type: "Lead (Viralidad Sana)" },
      { id: 'C', text: "**Select All Default:** Pre-seleccionar todos los contactos y dejar que el usuario desmarque. Es un Dark Pattern clásico que genera accidentes, aunque arriesgas el caso del usuario beta que envió 340 SMS sin querer y la multa de TCPA ($500-$1,500 por SMS no solicitado).", score: 1, type: "Dark Pattern" }
    ],
    explanation: "Con crecimiento estancado en +280 usuarios/mes (necesitas 1,500) y **K-factor** proyectado de 1.8, el 'Contact Scraping & Spam' es una práctica odiada que quema la reputación y viola TCPA (multa $500-$1,500 por SMS). El caso del usuario que envió 340 SMS sin querer ilustra el riesgo. La **Viralidad Sana** (**Invite Consciente**) se basa en que el usuario recomiende genuinamente a personas específicas, generando un crecimiento más lento pero de mayor calidad y retención."
  },
  {
    id: 'growth_ab_test_ethical_boundary',
    category: "Growth Hacking vs Ética",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    scenario: "El ARPU promedio es $42/mes, pero Growth descubrió que usuarios de iPhone tienen CAC 30% más bajo ($140 vs $200) y datos de Stripe muestran que usuarios de dispositivos premium pagan más en otras apps. Growth quiere correr un A/B test mostrando $59/mes a usuarios de iPhone (vs $42 base) para ver si pagan más. Proyectan +$180K MRR anual si funciona. Sin embargo, un leak interno de Uber sobre 'price discrimination by device' generó backlash masivo en 2015. Tu CPO advierte: 'Si esto se filtra en Reddit, nos crucifican'. Legal dice: 'Técnicamente legal, pero reputacionalmente riesgoso'. El CFO presiona: 'Necesitamos revenue para el Q'. Testing toma 1 semana implementar.",
    question: "¿Cuál es tu límite ético en experimentación?",
    options: [
      { id: 'A', text: "**Bloquear el Test:** 'La discriminación de precios oculta es anti-ética y daña la confianza'. Proponer testear diferentes paquetes de valor, no precios arbitrarios por dispositivo, aunque arriesgas perder los $180K MRR anuales proyectados y que el CFO te perciba como obstáculo para revenue en un Q crítico.", score: 5, type: "Lead (Fairness)" },
      { id: 'B', text: "**Value-Based Pricing Optimization:** 'Es solo un experimento'. Usuarios de iPhone claramente tienen mayor willingness-to-pay (CAC 30% más bajo). El pricing dinámico es estándar en industria (Uber, Amazon, airlines). Si funciona, el negocio gana $180K MRR para reinvertir en producto. Legal confirmó que es técnicamente legal.", score: -1, type: "Amoral" },
      { id: 'C', text: "**Segmentación Geográfica:** Sugerir hacerlo por país en lugar de dispositivo. Sigue siendo discriminación de precios pero 'se ve menos feo', aunque arriesgas que esto siga siendo percibido como injusto si dos usuarios en la misma ciudad ven precios diferentes y lo descubren en redes sociales.", score: 1, type: "Racionalización" }
    ],
    explanation: "Con $180K MRR proyectados pero riesgo de backlash como el leak de Uber en 2015, la discriminación de precios oculta basada en dispositivo es percibida como injusta y depredadora. Un Lead protege la relación a largo plazo con el cliente bloqueando prácticas abusivas (**Bloquear el Test**), proponiendo testear paquetes de valor diferentes. Correr el Test prioriza el margen sobre la ética arriesgando crisis de reputación si se filtra. **Segmentación Geográfica** es una racionalización que mantiene el problema de fondo."
  },
  {
    id: 'data_driven_design_paralysis',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "El equipo lleva 4 días discutiendo el color del botón CTA principal (azul vs verde). El PM dice: 'Hagamos un A/B test para decidir'. Calculas que con el tráfico actual (850 conversions/mes), ese test tardará 3 meses en alcanzar significancia estadística del 95%. El lanzamiento del feature completo está bloqueado esperando esta decisión, retrasando $28K en revenue proyectado. El Designer argumenta: 'Verde tiene mejor contraste según WCAG'. El CMO prefiere azul por 'brand consistency'. El CEO pregunta en Slack: '¿Por qué seguimos sin lanzar esto?'. Tienes standup en 2 horas.",
    question: "¿Cómo desbloqueas la decisión?",
    options: [
      { id: 'A', text: "**Decisión Ejecutiva (Experiencia):** 'No tenemos tráfico para testear micro-optimizaciones. Usemos el estándar de la industria y avancemos'. Priorizas velocidad sobre falsa certeza, aunque arriesgas que el PM y el CMO sientan que su input fue ignorado y que la decisión arbitraria genere resentimiento en el equipo.", score: 5, type: "Lead (Pragmatismo Estadístico)" },
      { id: 'B', text: "**Lanzar el Test igual:** Dejar el test corriendo 3 meses. Bloqueas el código y recursos por una decisión trivial, aunque arriesgas retrasar el lanzamiento y perder $28K en revenue proyectado mientras el CEO pregunta por qué no avanzan.", score: 1, type: "Burocracia de Data" },
      { id: 'C', text: "**Test Cualitativo:** Probar con 5 usuarios en un pasillo. No es estadísticamente válido para conversión, pero desbloquea la discusión, aunque arriesgas que la muestra de 5 usuarios no sea representativa y que después alguien cuestione la decisión pidiendo 'datos reales'.", score: 3, type: "Validación 'Light'" }
    ],
    explanation: "Con 4 días bloqueados discutiendo color y un test que tardaría 3 meses (850 conversions/mes), retrasando $28K en revenue proyectado, el **Data-Driven** mal entendido paraliza. Si no tienes volumen suficiente, la intuición experta o estándares (**Decisión Ejecutiva**) son más eficientes que tests eternos. **Lanzar el Test** bloquea recursos en una decisión trivial. **Test Cualitativo** no ofrece validez estadística para conversión."
  },
  {
    id: 'data_vanity_metrics_trap',
    category: "Data-Driven Design",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "El equipo celebra que los 'Page Views' subieron 200% (de 45K a 135K/semana) tras un rediseño del blog que agregó 'artículos relacionados' automáticos. Growth presenta esto como 'éxito masivo' en el All-Hands del viernes. Sin embargo, tu análisis muestra que 'Time on Page' bajó de 2m 40s a 18 segundos y la conversión de blog→trial cayó de 2.8% a 0.9%. El diseño nuevo es clickbait: títulos sensacionalistas y módulos 'relacionados' que generan bouncing infinito sin valor. El VP de Marketing ya reportó el '200% growth' al Board. Inversores felicitan al equipo en Twitter. Tienes 1-on-1 con el CEO mañana donde revisarán métricas de producto.",
    question: "¿Cómo comunicas esta 'mala noticia' en medio de la celebración?",
    options: [
      { id: 'A', text: "**Aguafiestas con Data:** Presentar el análisis completo mostrando que son 'Vanity Metrics'. 'Tenemos más tráfico basura, pero menos negocio'. Reorientar al equipo a métricas de valor, aunque arriesgas avergonzar al VP de Marketing que ya reportó el '200% growth' al Board y a inversores, generando conflicto político interno.", score: 5, type: "Lead (Truth Teller)" },
      { id: 'B', text: "**Observación Pasiva:** Dejar que celebren el éxito de Page Views. Si el management está satisfecho con estas métricas, no es necesario crear fricción innecesaria, aunque arriesgas que el Board tome decisiones estratégicas basadas en métricas engañosas y que el CEO invierta más en tácticas de clickbait que destruyen conversión.", score: 1, type: "Observación Pasiva" },
      { id: 'C', text: "**Engagement-First Strategy:** Doblar la apuesta en las tácticas de diseño que están generando tráfico. Si el Page View creció 200%, el interés existe - los mejores equipos de growth optimizan para engagement primero y monetizan después. El funnel se puede arreglar más adelante cuando tengamos más volumen.", score: -1, type: "Mercenario" }
    ],
    explanation: "Con Page Views +200% (de 45K a 135K) pero conversión blog→trial cayendo de 2.8% a 0.9% y Time on Page de 2m 40s a 18s, las **Vanity Metrics** mienten. Un Lead se enfoca en métricas de negocio reales (Conversión, Retención) aunque sea impopular al principio (**Aguafiestas con Data**), especialmente cuando el VP de Marketing ya reportó el '200% growth' al Board. **Observación Pasiva** permite que la organización se autoengañe. Maximizar Engagement profundiza el problema de calidad del tráfico clickbait."
  },
  {
    id: 'freemium_upgrade_friction',
    category: "Monetización & UX",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El tier gratuito genera pérdidas de $52K/mes y el runway es de solo 7 meses. Growth propone 'upgrade prompts' agresivos cada 5 clicks. Product advierte que esto desplomará el NPS, pero el Board argumenta que 'morir adorados por usuarios que no pagan' no es una opción.",
    question: "¿Qué estrategia de monetización propones sabiendo que NPS caerá pero runway es crítico?",
    options: [
      { id: 'A', text: "**Ajuste de Límites:** Reduces la capacidad del plan Free (proyectos/storage) para forzar upgrade natural. Es menos intrusivo, pero el impacto en revenue tardará 3 meses en notarse.", score: 1, type: "Idealista optimista (Demasiado lento para runway de 7 meses)" },
      { id: 'B', text: "**Upselling Contextual:** Implementas prompts solo cuando el usuario choca con un límite real. Es fricción justificada por valor. Corres un A/B test para validar que la conversión compense la caída de NPS.", score: 5, type: "Lead (Fricción con propósito + data)" },
      { id: 'C', text: "**Monetización Agresiva:** Implementas la propuesta de Growth (prompts cada 5 clicks) con justificación de que el runway crítico requiere acción inmediata. Documentas el trade-off entre NPS y supervivencia para revisión posterior.", score: 3, type: "Monetización Agresiva" }
    ],
    explanation: "El **Upselling Contextual** es el balance de Lead: introduce fricción educativa validada con datos en el momento de necesidad. **Ajuste de Límites** es demasiado lento para un runway crítico. **Monetización Agresiva** sacrifica la marca por pánico, destruyendo el funnel a largo plazo."
  },
  {
    id: 'seo_vs_ux_url_structure',
    category: "SEO vs Experiencia",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    scenario: "Marketing comparte estudio que muestra que tus competidores ranquean 3x mejor en Google porque usan URLs descriptivas con keywords (/financial-dashboard-analytics vs tu actual /dashboard). Proponen cambiar TODAS las URLs del producto (40+ pantallas) para SEO. Ingeniería advierte que hay 12K links compartidos en Slack/Notion/emails de clientes enterprise que se romperían. Customer Success reporta que muchos clientes tienen bookmarks internos.",
    question: "¿Cómo priorizas entre ganancia de SEO vs experiencia de usuarios activos?",
    options: [
      { id: 'A', text: "**Priorizar SEO Inmediatamente:** El tráfico orgánico nuevo vale más que la inconveniencia temporal de usuarios actuales. Cambias las URLs, comunicas por email y asumes que se adaptarán.", score: 1, type: "Growth-first (Rompe confianza)" },
      { id: 'B', text: "**Migration Strategy con Redirects 301:** Cambias las URLs pero implementas redirects permanentes que mantienen compatibilidad con links antiguos. Monitoreas analytics por 30 días para validar que no hay caída de engagement antes de commitear.", score: 5, type: "Lead (No-downside migration)" },
      { id: 'C', text: "**Rechazar Cambio Completamente:** Las URLs son parte de la UX establecida, parte de muscle memory de usuarios. El SEO se puede mejorar con meta tags, contenido, backlinks - no sacrificas UX por ranking.", score: 3, type: "Conservador (Pierde oportunidad)" }
    ],
    explanation: "Cambiar URLs sin strategy rompe bookmarks, links compartidos y confianza. Los **Redirects 301** permiten evolucionar la estructura sin destruir el acceso, logrando un 'win-win'. **Priorizar SEO Inmediatamente** sacrifica la experiencia actual por tráfico futuro incierto. **Rechazar Cambio** pierde la oportunidad de crecimiento orgánico."
  },
  {
    id: 'analytics_platform_cost_explosion',
    category: "Data-Driven Design",
    icon: <BarChart2 className="w-6 h-6 text-green-600" />,
    scenario: "Tu plan de Segment/Amplitude cuesta $15K/mes y Amplitude notificó que subirá a $45K/mes el próximo Q por volumen de eventos (pasaste de 12M a 48M events/mes). El CFO exige en email urgente: 'Corta el plan a la mitad o migra a solución más barata - $45K/mes es insostenible con nuestro burn rate'. Sin embargo, Data Science depende de estos eventos para sus modelos de ML de churn prediction (que salvaron $340K en retención el Q pasado). Tu Analytics Manager advierte: 'Si cortamos tracking, perdemos visibilidad de 60% del user journey - volamos a ciegas'. PostHog self-hosted costaría $8K/mes pero requiere 2 meses de migración. Tienes reunión de presupuesto Q2 mañana donde debes presentar plan de acción.",
    question: "¿Cómo resuelves la crisis de costo sin destruir analytics?",
    options: [
      { id: 'A', text: "**Reducir Tracking 50%:** Auditas todos los events y eliminas tracking de features con <5% adoption y experiments concluidos. Priorizas budget compliance manteniendo core user journey metrics, aunque arriesgas perder señales tempranas de features emergentes y que Data Science no pueda predecir churn sin los eventos secundarios que eliminaste.", score: 1, type: "Budget-first approach" },
      { id: 'B', text: "**Event Sampling Strategy:** Trackeas 100% de conversions críticas, 20% de pageviews, 5% de hover/scroll events. Reduces volumen 60% manteniendo calidad de insights donde importa, aunque arriesgas que el sampling introduzca ruido en análisis de baja frecuencia y que algunos A/B tests tarden más en alcanzar significancia.", score: 5, type: "Lead (Sampling inteligente)" },
      { id: 'C', text: "**Migrar a PostHog Self-Hosted:** 2 meses de migración, $8K setup inicial, ownership total. Riesgo de perder data histórica en transición y 2 meses sin analytics confiables, aunque arriesgas que durante esos 2 meses de migración pierdas visibilidad crítica del producto y que el modelo de ML de churn prediction (que salvó $340K el Q pasado) deje de funcionar.", score: 3, type: "Build vs Buy (Alto switching cost)" }
    ],
    explanation: "Con costo subiendo de $15K a $45K/mes (volumen de 12M a 48M events/mes) y Data Science dependiendo de estos eventos para ML de **churn prediction** ($340K salvados el Q pasado), cortar tracking ciegamente puede eliminar señales tempranas de **churn**. Migrar plataformas a PostHog es costoso y riesgoso durante la transición (2 meses sin analytics confiables). **Event Sampling Strategy** es la jugada inteligente: reduce el costo 60% manteniendo la significancia estadística de los eventos críticos."
  },
];
