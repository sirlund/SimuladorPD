import {
  CheckCircle, Layers, Zap, Globe, FileText, Target,
  Code, Heart, Smartphone, Languages, Wifi, 
  AlertTriangle, 
  Archive, Bell, Link, Menu, Star
} from 'lucide-react';

/**
 * Mobile, Plataformas & Handoff
 */
export const mobile_questions = [
  // --- BLOQUE 10: MOBILE, RESPONSIVE & PLATAFORMAS ---
  {
    id: 'mobile_web_vs_native_app',
    displayId: 'MOB-01',
    category: "Estrategia de Plataforma",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "Acabas de perder un contrato bancario de $500k. El feedback de procurement fue brutal: 'Sin App Nativa en el Store, no pasamos auditoría'. El CEO golpea la mesa y exige una app para el Q3. Tu equipo es experto en React y contratar devs de Swift tomaría 3 meses y $200k que no tienes.",    question: "¿Cuál es tu recomendación estratégica?",
    options: [
      { id: 'A', text: "**Native Wrapper (Capacitor/RN):** Empaquetas la web actual en un contenedor nativo. Cumples el requisito contractual de 'presencia en App Store' en 3 semanas utilizando el skillset existente de React, desbloqueando el deal sin contratar equipo nuevo.", score: 5, type: "Lead (Pragmático de Mercado)" },
      { id: 'B', text: "**Defensa de PWA:** Educas al cliente sobre las ventajas de Progressive Web Apps (no install, auto-update). Te mantienes firme en la estrategia técnica moderna, evitando la deuda de mantener una app 'falsa' en los stores.", score: 1, type: "Purista Técnico (Pierde negocio)" },
      { id: 'C', text: "**Outsourcing Especializado:** Contratas una agencia mobile ($150k) para desarrollar una app nativa real en paralelo. Aseguras calidad de plataforma (Swift/Kotlin) sin distraer a tu equipo core de su roadmap web.", score: 3, type: "Caro y Riesgoso" }
    ],
    explanation: "En B2B Enterprise, 'App Nativa' suele ser un checkbox de procurement, no una necesidad de performance. El **Native Wrapper** resuelve el problema comercial con costo mínimo. **PWA** es técnicamente superior pero comercialmente débil. **Outsourcing** crea un codebase huérfano que tu equipo no sabrá mantener."
  },
  {
    id: 'tablet_edge_case',
    displayId: 'MOB-02',
    category: "Diseño Responsive",
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    scenario: "Un bug visual rompe el layout en tablets (3% del tráfico). El release de $180K está programado para mañana y Engineering dice que no vale la pena retrasarlo. Sin embargo, Customer Success te alerta en privado: 'Ese 3% incluye a nuestros 12 clientes Enterprise más grandes que usan iPads en sus comités directivos'.",
    question: "¿Cómo priorizas este issue?",
    options: [
      { id: 'A', text: "**Quality First:** Retrasas el release 24h. Un producto roto en cualquier resolución aceptada es inaceptable. Mantienes el estándar de calidad 'cero bugs conocidos' para proteger la reputación de la marca.", score: 1, type: "Perfeccionista (Mal ROI)" },
      { id: 'B', text: "**Segmentation Analysis:** Validas el impacto financiero del segmento afectado. Dado que el 3% representa $340K de ARR crítico, el bug se reclasifica como P0 y bloquea el release. Priorizas por valor de negocio, no por volumen de usuarios.", score: 5, type: "Lead (Value-Based Priority)" },
      { id: 'C', text: "**Post-Launch Patch:** Lanzas mañana para cumplir con el 97% de usuarios. Preparas un hotfix específico para tablets para el día siguiente. Maximizas el valor entregado a la mayoría sin detener el tren de despliegue.", score: 3, type: "Reactivo (Velocidad)" }
    ],
    explanation: "No todos los usuarios valen lo mismo. El 3% de tráfico puede ser el 50% del revenue. **Segmentation Analysis** evita decisiones basadas en métricas vanidosas (volumen) y enfoca en **Impacto de Negocio** ($340K ARR). Lanzar roto para clientes VIP (**Post-Launch Patch**) arriesga churn enterprise."
  },
  {
    id: 'gesture_vs_button_mobile',
    displayId: 'MOB-03',
    category: "Interacción Móvil",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tu dashboard de Customer Success muestra una estadística preocupante: el 40% de los tickets de soporte (450 tickets/mes, $15K en costo de atención) son variaciones de '¿Cómo archivo un mensaje?'. La funcionalidad existe via 'swipe left' (estilo iOS Mail), pero claramente los usuarios no la descubren. El PM de producto te escribe frustrado: 'Necesitamos un botón visible, esto está matando nuestro CSAT'. Tú diseñaste la interfaz minimalista y la defiendes estéticamente.",
    question: "¿Cómo defiendes la usabilidad?",
    options: [
      { id: 'A', text: "**Dual Action Design:** Mantienes el swipe para power users y agregas una acción visible (menú contextual) para el resto. Reconoces que la **Discoverability** triunfa sobre el minimalismo cuando los costos de soporte se disparan.", score: 5, type: "Lead (Inclusivo)" },
      { id: 'B', text: "**Onboarding Overlay:** Implementas 'Coach Marks' en el primer uso enseñando el gesto. Mantienes la pureza de la interfaz confiando en que la educación resolverá la brecha de conocimiento del usuario.", score: 1, type: "Parche débil" },
      { id: 'C', text: "**Explicit UI:** Reemplazas los gestos con botones visibles en cada fila. Sacrificas la elegancia y espacio en pantalla para garantizar que el 100% de usuarios entienda la función sin ayuda.", score: 3, type: "Funcional pero tosco" }
    ],
    explanation: "Si Soporte explota, el diseño falló. **Coach Marks** tienen tasas de lectura <20%. **Dual Action Design** cubre ambos modelos mentales: exploración (gestos) y explícito (botones). Sacrificar **Discoverability** por estética minimalista es vanidad de diseñador, no UX."
  },
  {
    id: 'dark_mode_accessibility_conflict',
    displayId: 'MOB-04',
    category: "Accesibilidad & Diseño",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    scenario: "Tu Dark Mode ganó un Webby Award y fue destacado en 'UI of the Day'. Sin embargo, la auditoría de accesibilidad que acaba de completarse revela un problema: el contraste de texto es 2.8:1 (WCAG AA exige 4.5:1 mínimo). Legal te advierte: 'Tenemos un cliente Government que puede demandarnos por incumplimiento ADA'. El diseñador senior que creó el tema te responde frustrado: 'Subir el contraste a 4.5 mata la estética sutil que nos ganó el premio. ¿De verdad vamos a sacrificar la marca por burocracia?'.",
    question: "¿Qué sacrificas?",
    options: [
      { id: 'A', text: "**Compliance Refactor:** Ajustas los colores para cumplir 4.5:1 (WCAG AA). Aceptas que la accesibilidad es un requisito funcional no negociable, incluso si la estética se vuelve 'menos sutil'.", score: 5, type: "Lead (Accesibilidad no negociable)" },
      { id: 'B', text: "**High Contrast Toggle:** Mantienes el diseño actual como default y ofreces un modo 'Alta Accesibilidad' en configuración. Preservas la visión artística original mientras das una opción a quienes la necesitan.", score: 3, type: "Compromiso (Fragmenta)" },
      { id: 'C', text: "**Brand Differentiation:** Priorizas la identidad visual única. Argumentas que las guías WCAG son restrictivas para marcas premium y que la jerarquía visual se logra por otros medios (tamaño, peso), no solo contraste.", score: -1, type: "Design Excellence First" }
    ],
    explanation: "La accesibilidad no es un 'modo' opcional, es la base. **Compliance Refactor** garantiza usabilidad universal y legalidad. **High Contrast Toggle** segrega a los usuarios ('Separate but Equal'). **Brand Differentiation** a costa de legibilidad es mala praxis. WCAG AA es el piso, no el techo."
  },

  // --- BLOQUE 11: COLABORACIÓN, PROCESO & HANDOFF ---
  {
    id: 'dev_pushback_animation',
    displayId: 'MOB-05',
    category: "Colaboración con Ingeniería",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    scenario: "Diseñaste una animación de transición 'signature' para el flujo de checkout que el CMO ama ('Es lo que nos diferencia de la competencia'). El Tech Lead la rechaza en el PR review: 'Esta animación baja nuestro Lighthouse score de 92 a 71 y el TTI sube de 2.1s a 4.8s'. Analytics confirma que el 34% de tus usuarios están en dispositivos low-end (Android Go, móviles de 2GB RAM) donde la animación causa stuttering visible. El deadline de lanzamiento es en 5 días.",
    question: "¿Cómo negocias calidad visual vs performance?",
    options: [
      { id: 'A', text: "**Performance Partnership:** Te sientas con ingeniería a simplificar la implementación (CSS vs JS, reducir capas). Buscas lograr el 80% del impacto visual con el 20% del costo de CPU, respetando el presupuesto de rendimiento.", score: 5, type: "Lead (Performance es UX)" },
      { id: 'B', text: "**Brand Defense:** Insistes en la implementación original. La marca es el diferenciador clave a largo plazo y sacrificar 'delight' por milisegundos de carga commoditiza el producto.", score: 1, type: "Design-first approach" },
      { id: 'C', text: "**Feature Kill:** Eliminas la animación para proteger el score de Lighthouse. Si ingeniería dice que afecta métricas web vitales, la funcionalidad pura debe prevalecer sobre la decoración.", score: 1, type: "Pragmático conservador" }
    ],
    explanation: "Para el 34% de usuarios en low-end, **Performance ES UX**. Ignorar TTI (**Brand Defense**) aumenta rebote. Matar la feature (**Feature Kill**) pierde valor. **Performance Partnership** encuentra el equilibrio técnico: optimizar la ejecución sin sacrificar la intención."
  },
  {
    id: 'pm_changes_scope_mid_sprint',
    displayId: 'MOB-06',
    category: "Gestión de Roadmap",
    icon: <Target className="w-6 h-6 text-red-500" />,
    scenario: "Es miércoles, día 4 de un sprint de 10 días. El PM te escribe por Slack: 'Cambio pequeño: ¿podemos agregar un filtro por fecha en la lista de transacciones? Es solo un dropdown'. Cuando haces el breakdown real, la cuenta es diferente: diseñar 4 estados (vacío, cargando, con data, error), responsive en 3 breakpoints, documentar para handoff, y coordinar QA. Total: 2 días de trabajo. El PM responde incrédulo: '¿2 días para un dropdown? Ventas lo necesita para el demo del viernes'.",
    question: "¿Cómo educas sobre el costo real?",
    options: [
      { id: 'A', text: "**Service Mindset:** Aceptas el cambio para demostrar agilidad y colaboración. Haces el esfuerzo extra para entregarlo sin afectar el resto del sprint, construyendo capital político con Product.", score: 1, type: "Complaciente (Mata el Sprint)" },
      { id: 'B', text: "**Iceberg Visualization:** Muestras el breakdown detallado (Responsive, Empty States, Error handling, QA). Ofreces un 'Swap': entra el filtro, sale otra cosa de igual tamaño. Haces visible el costo oculto de la decisión.", score: 5, type: "Lead (Educador de Proceso)" },
      { id: 'C', text: "**Scrum Defense:** Te niegas citando la metodología. 'El alcance del sprint está cerrado'. Proteges al equipo de interrupciones, manteniendo la disciplina del proceso por encima de la flexibilidad.", score: 3, type: "Dogmático (Inflexible)" }
    ],
    explanation: "Decir 'sí' siempre destruye al equipo; decir 'no' siempre destruye la relación. **Iceberg Visualization** educa sobre la complejidad oculta (**Edge Cases**, QA) y ofrece un trade-off justo (**Scope Swap**). Protege el sprint sin ser un bloqueador burocrático."
  },
  {
    id: 'qa_reject_pixel_perfect',
    displayId: 'MOB-07',
    category: "Quality Assurance",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    scenario: "Jueves 5:30 PM. El equipo está celebrando el cierre de sprint cuando QA bloquea el release: 'El contraste del botón primario es 2.9:1, WCAG exige 3:1 mínimo'. La campaña de Black Friday ($45K en ads) está programada para mañana 9 AM. El PM de Growth explota: 'Es una diferencia de 0.1, nadie lo va a notar'. El Head de Legal te recuerda que tienen un cliente Government con cláusula de accesibilidad. El CEO pregunta: '¿Cuánto nos cuesta arreglarlo vs cuánto nos cuesta no lanzar?'",
    question: "¿Qué decisión tomas?",
    options: [
      { id: 'A', text: "**Risk Acceptance:** Autorizas el release. La diferencia de 0.1 en contraste es imperceptible y no justifica perder la inversión en medios de la campaña. Creas ticket para arreglarlo post-launch.", score: 3, type: "Pragmático (Riesgo calculado)" },
      { id: 'B', text: "**Surgical Hotfix:** Te quedas con un dev a corregir el hex code ahora (15 min). Pides 'Smoke Test' solo de ese componente. Proteges el estándar de calidad Y la inversión de marketing simultáneamente.", score: 5, type: "Lead (Ownership de Calidad)" },
      { id: 'C', text: "**Gatekeeper Protocol:** Mantienes el bloqueo. Las reglas de calidad son absolutas; si se hace una excepción hoy, se normaliza la deuda técnica para siempre. Marketing deberá reprogramar.", score: 1, type: "Compliance-first" }
    ],
    explanation: "Bloquear una campaña por 0.1 de contraste es miopía; lanzar roto es negligencia. **Surgical Hotfix** demuestra **Extreme Ownership**: resuelves el problema real (el código) en lugar de debatir el problema político. Calidad y velocidad no son mutuamente excluyentes."
  },
  {
    id: 'documentation_handoff_speed',
    displayId: 'MOB-08',
    category: "Process",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    scenario: "Tu fintech está lanzando la feature más compleja del año: 'Calculadora de Interés Compuesto' para créditos personales. La lógica tiene 14 variables (tasa, plazo, comisiones, seguros, IVA, mora) y el cálculo erróneo es demandable por ley de protección al consumidor. El PM te presiona: 'Solo entréganos las pantallas bonitas, los devs deducen la lógica del flujo'. El Tech Lead te advierte en privado: 'La última vez que dedujimos lógica de mockups, tuvimos 3 bugs en producción que costaron $80K en compensaciones'. El deadline es en 4 días.",
    question: "¿Cómo gestionas el riesgo sin tiempo para documentar?",
    options: [
      { id: 'A', text: "**Visual Handoff:** Entregas las pantallas UI a tiempo. Aclaras por escrito que la lógica de negocio es responsabilidad de Backend/Product, delimitando tu responsabilidad al diseño de interfaz.", score: 1, type: "Handoff tradicional" },
      { id: 'B', text: "**Synchronous Spec:** En lugar de escribir un doc de 20 páginas, haces una sesión de 'Pairing' de 3 horas con el Tech Lead para co-escribir los Test Cases críticos. Aseguras transferencia de conocimiento sin burocracia.", score: 5, type: "Lead (Colaboración de Alto Valor)" },
      { id: 'C', text: "**Documentation Blocker:** Retrasas la entrega hasta completar la especificación detallada. En fintech, la precisión es más importante que la velocidad. Es mejor entregar tarde que entregar mal y causar pérdidas financieras.", score: 1, type: "Documentación Completa" }
    ],
    explanation: "En Fintech, ambigüedad = demanda. Documentar solo por escrito es lento. **Visual Handoff** es negligencia. **Synchronous Spec** (Pairing) transfiere el modelo mental y los **Edge Cases** directamente al ingeniero, asegurando calidad lógica con velocidad de ejecución."
  },
  {
    id: 'i18n_rtl_layout_challenge',
    displayId: 'MOB-09',
    category: "Internationalization (i18n)",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    scenario: "Sales cerró el deal más grande de la historia de la empresa: $1.2M anuales con un banco de Arabia Saudita. El contrato especifica 'soporte completo en árabe' para el Q2. Marketing asume que es 'solo traducir los textos'. Cuando Engineering revisa el codebase, el diagnóstico es brutal: la UI está hardcodeada en LTR (Left-to-Right) - iconos de navegación, alineación de formularios, dirección de lectura de tablas. Estiman 6 semanas de refactor. El cliente espera el beta en 4 semanas. El VP de Sales te llama furioso: '¿Me estás diciendo que vamos a perder $1.2M por un tema de CSS?'",
    question: "¿Cómo gestionas el gap de RTL?",
    options: [
      { id: 'A', text: "**Arquitectura Lógica:** Explicas que RTL invierte la cognición espacial, no solo el texto. Negocias las 6 semanas para implementar CSS lógico (margin-inline-start). Es mejor retrasar el beta que entregar un producto culturalmente roto.", score: 5, type: "Lead (Cultural Awareness)" },
      { id: 'B', text: "**Translation Only:** Traduces los textos manteniendo el layout LTR. Cumples la fecha de entrega y permites que el cliente valide la funcionalidad básica, postergando el refactor de interfaz para la fase 2.", score: 1, type: "Ignorante" },
      { id: 'C', text: "**Hardcoded Patch:** Fuerzas la alineación derecha manualmente en las pantallas clave del demo. Cumples el timeline visualmente, asumiendo la deuda técnica de mantener dos codebases separados temporalmente.", score: 1, type: "Ajuste Manual" }
    ],
    explanation: "**RTL** afecta jerarquía, flujo y significado, no solo texto. **Translation Only** es insultante. **Hardcoded Patch** crea deuda impagable. **Arquitectura Lógica** defiende la calidad del producto global: si vamos a internacionalizar, la arquitectura debe soportarlo sistémicamente."
  },
  {
    id: 'i18n_german_long_words_break_ui',
    displayId: 'MOB-10',
    category: "Internationalization (i18n)",
    icon: <Languages className="w-6 h-6 text-indigo-500" />,
    scenario: "Primera expansión internacional: Alemania. A 3 días del launch, QA reporta que 23 botones están rotos visualmente. El problema: 'Save' (4 caracteres) se traduce a 'Speichern' (9 caracteres) y los botones tienen ancho fijo de 80px. El texto se desborda o se corta feo. Engineering propone truncar con elipsis ('Speich...'). El equipo de localización responde: 'No existe sinónimo corto en alemán, y truncar verbos es gramaticalmente incorrecto'. El PM de Growth presiona: 'El mercado alemán vale €2M de pipeline, no podemos retrasar por tipografía'.",
    question: "¿Cómo solucionas la escalabilidad?",
    options: [
      { id: 'A', text: "**Responsive Components:** Refactorizas los botones a 'Auto-Layout' para que crezcan con el contenido. Inviertes 1 día en hacer el sistema resiliente a cualquier longitud de idioma futuro, en lugar de parchar el contenido.", score: 5, type: "Lead (Scalable UI)" },
      { id: 'B', text: "**Content Truncation:** Aceptas truncar el texto con elipsis (...). Mantienes la integridad visual del layout original y cumples el deadline inmediato sin tocar código.", score: 1, type: "Estético Rígido" },
      { id: 'C', text: "**Copy Negotiation:** Presionas al equipo de localización para encontrar alternativas creativas o iconos que reemplacen texto. Buscas adaptar el contenido al diseño existente para evitar retrabajo técnico.", score: 3, type: "Parche de Contenido" }
    ],
    explanation: "Diseñar con ancho fijo en inglés es un error junior. **Content Truncation** rompe la usabilidad ('Speich...' no significa nada). **Responsive Components** resuelve la causa raíz: la UI debe adaptarse al contenido, no al revés. **i18n** requiere flexibilidad del 30-40% en espacio."
  },
  {
    id: 'mobile_offline_mode_sync_conflict',
    displayId: 'MOB-11',
    category: "Service Design",
    icon: <Wifi className="w-6 h-6 text-gray-500" />,
    scenario: "Estás diseñando una app para técnicos de mantenimiento industrial que trabajan en plantas petroleras remotas - el 60% de su jornada están sin conectividad. El problema: dos técnicos pueden editar el mismo reporte de inspección offline y cuando reconectan, hay conflicto. Engineering propone 'Last Write Wins' (la última sincronización sobrescribe todo) porque es simple de implementar en 2 semanas. Tú ves el riesgo: si el Técnico A documenta una fuga de gas crítica offline y el Técnico B sincroniza después con data trivial, se pierde información de seguridad. El demo con el cliente ancla ($500K) es en 3 semanas.",
    question: "¿Cómo diseñas la resolución de conflictos?",
    options: [
      { id: 'A', text: "**Last Write Wins:** Aceptas la solución técnica simple. Priorizas tener una demo funcional y estable en 2 semanas, asumiendo que la colisión de datos es un borde case poco frecuente.", score: 1, type: "Riesgoso (Pérdida de datos)" },
      { id: 'B', text: "**Conflict Resolution UI:** Diseñas una interfaz de 'Fusión' que aparece al reconectar, mostrando las diferencias y pidiendo al usuario decidir. Inviertes la semana extra para garantizar integridad de datos crítica.", score: 5, type: "Lead (Transparencia y Control)" },
      { id: 'C', text: "**Connection Lock:** Bloqueas la edición si no hay conexión a internet. Garantizas que nunca haya conflictos de versión, aunque reduces la utilidad de la app para el 60% del tiempo de uso real.", score: -1, type: "Optimistic Lock Strategy" }
    ],
    explanation: "Para 'Field Workers', **Offline** es el estado principal. **Last Write Wins** destruye trabajo sin aviso. **Connection Lock** hace la app inútil. **Conflict Resolution UI** respeta el modelo mental del usuario y protege la data, que es el activo más valioso del negocio."
  },
  {
    id: 'mobile_touch_targets_accessibility',
    displayId: 'MOB-12',
    category: "Compliance & UX",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "La auditoría de accesibilidad de tu app financiera acaba de fallar. El problema: los botones de acción tienen 24x24px de área táctil, muy por debajo del mínimo de 44x44px (iOS) / 48x48dp (Android). Los usuarios reportan 'Fat Finger Errors' constantes - tocan 'Transferir' y activan 'Eliminar cuenta' que está al lado. El Designer Lead que creó el sistema visual se opone: 'Subir a 44px arruina la densidad de información y se ve como una app para ancianos. Nuestro diferenciador es la elegancia minimalista'. El Head de Producto te pregunta: '¿Accesibilidad o estética? Elige uno'.",
    question: "¿Qué estándar aplicas?",
    options: [
      { id: 'A', text: "**Invisible Touch Targets:** Mantienes el ícono visual de 24px pero expandes el área táctil (hitbox) a 48px con padding transparente. Cumples el estándar de usabilidad y accesibilidad sin comprometer la densidad visual del diseño.", score: 5, type: "Lead (Estándar de Plataforma)" },
      { id: 'B', text: "**Zoom Empowerment:** Mantienes el diseño denso. Confías en que los usuarios modernos saben hacer zoom o usar herramientas de accesibilidad del OS si tienen dificultades motoras.", score: -1, type: "User Empowerment" },
      { id: 'C', text: "**Layout Spacer:** Aumentas el margen visible entre elementos a 32px. Mejoras la separación visual para reducir errores accidentales, buscando un punto medio entre densidad y usabilidad.", score: 3, type: "Parcial" }
    ],
    explanation: "La accesibilidad no es estética, es biomecánica. **Invisible Touch Targets** es la técnica estándar (iOS/Android) para balancear densidad visual con usabilidad física. **Zoom Empowerment** es excusa para mal diseño. **Layout Spacer** de 32px sigue fallando estándares (44px/48dp mínimo)."
  },
  {
    id: 'pwa_vs_native_political_war',
    displayId: 'MOB-13',
    category: "Estrategia de Plataforma",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu startup B2C necesita lanzar app mobile para competir. Engineering presenta dos opciones: PWA ($80K, 6 semanas) vs Native iOS+Android ($280K, 4 meses). El iOS PM argumenta que las push notifications nativas son críticas para retención (60% del engagement). El CFO presiona: 'Con 8 meses de runway, no podemos apostar $280K sin validar tracción'. Marketing insiste en estar en ambos stores 'para credibilidad'. Tienes 1 sprint para presentar la recomendación al Board.",
    question: "¿Cómo decides la arquitectura mobile?",
    options: [
      { id: 'A', text: "**Multiplatform Framework (Flutter):** Unificas el desarrollo en Flutter. Prometes 'escribir una vez, correr en todos lados', reduciendo el headcount necesario para mantener dos bases de código nativas. El CFO aprueba el ahorro de costos proyectado.", score: 3, type: "Compromiso político (Nadie gana)" },
      { id: 'B', text: "**Targeted MVP Strategy:** Lanzas PWA para Android (mercado masivo, update fácil) y Native Wrapper para iOS (mercado high-value, notificaciones críticas). Validamos tracción con inversión segmentada ($150K) antes de unificar arquitectura.", score: 5, type: "Lead (Learn before commit)" },
      { id: 'C', text: "**Engineering Vote:** Delegas la decisión al equipo técnico. Ellos mantendrán el código, así que su preferencia de stack (probablemente PWA por simplicidad) debe prevalecer sobre las preferencias de producto.", score: 1, type: "Delegación técnica" }
    ],
    explanation: "Decidir arquitectura es decidir negocio. **Targeted MVP Strategy** reconoce que iOS y Android tienen economías diferentes. **Engineering Vote** ignora el **ROI**. **Flutter** promete ahorro pero a escala puede generar deuda de experiencia no-nativa y lock-in de talento especializado. Validar valor antes de escalar costo es la ruta Lead."
  },
  {
    id: 'mobile_performance_budget_sacrifice',
    displayId: 'MOB-14',
    category: "Mobile Performance",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "El funnel de adquisición está sangrando: 28% de los usuarios abandonan durante la descarga/instalación. Analytics revela que tu app pesa 85MB - el doble del benchmark de la industria (<40MB). Cuando auditas el bundle, encuentras 5 SDKs de analytics y tracking que suman 35MB. Engineering defiende cada uno: 'Firebase es crítico para push, Amplitude para product analytics, Mixpanel lo usa Growth, Segment lo pidió Marketing, y Crashlytics es para estabilidad'. El CFO pregunta por qué están pagando $45K/año en herramientas que hacen lo mismo. El PM de Growth añade: 'El 28% de abandono en mercados emergentes (donde los datos móviles son caros) nos está matando'.",
    question: "¿Cómo alcanzas performance budget?",
    options: [
      { id: 'A', text: "**Ruthless Prioritization:** Auditas el valor de negocio de cada SDK. Eliminas redundancias (ej: quedarte con 1 analytics en lugar de 3). Priorizas la experiencia de usuario (velocidad) sobre la comodidad de recolección de datos interna.", score: 5, type: "Lead (ROI-based pruning)" },
      { id: 'B', text: "**Technical Optimization:** Implementas carga diferida (Lazy Loading) para todos los SDKs. Mejoras la métrica de 'Time to Interactive' sin eliminar ninguna herramienta, confiando en la magia técnica para resolver el problema de peso.", score: 1, type: "Técnico (Ignora UX real)" },
      { id: 'C', text: "**Budget Expansion:** Aceptas que la app pese 85MB y pides a Marketing que ajuste las expectativas. El costo de remover herramientas críticas es mayor que la pérdida de usuarios en el onboarding.", score: 3, type: "Conservador (Pierde momentum)" }
    ],
    explanation: "El peso de la app mata la adquisición. Tener 3 analytics SDKs es **Bloatware**. **Ruthless Prioritization** defiende al usuario final: ninguna data interna vale 28% de abandono. **Technical Optimization** (lazy load) es un parche si el bundle sigue siendo gigante."
  },
  {
    id: 'touch_target_accessibility_rebellion',
    displayId: 'MOB-15',
    category: "Accesibilidad & Diseño",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "Tu diseñador senior más talentoso ($140K/año, 50K seguidores en Dribbble, ganador de 2 Webby Awards) está en guerra abierta con el equipo de accesibilidad. Se niega a implementar touch targets de 44pt porque 'destruye la proporción áurea del sistema visual'. La auditoría de WCAG falló por segunda vez consecutiva. Legal te advierte: 'El cliente Enterprise del sector público tiene cláusula de accesibilidad - si no cumplimos, pueden rescindir el contrato de $200K'. El diseñador te escribe: 'Si me obligan a hacer diseño feo, renuncio. Y me llevo mi audiencia de Twitter conmigo'. HR te recuerda que reemplazarlo tomaría 4 meses.",
    question: "¿Cómo manejas la rebelión de diseño?",
    options: [
      { id: 'A', text: "**Estándar Profesional:** Estableces que la accesibilidad es un requisito de calidad no negociable, igual que la seguridad o performance. Si el diseño no es accesible, no está terminado, independientemente de la fama del diseñador.", score: 5, type: "Lead (Principios > Popularidad)" },
      { id: 'B', text: "**Middle Ground:** Acuerdas subir a 36pt como compromiso. Mejoras la situación actual sin alienar al talento clave, buscando un equilibrio entre cumplimiento normativo y visión artística.", score: 1, type: "Compromiso incremental" },
      { id: 'C', text: "**Creative Exception:** Permites la excepción visual confiando en la visión del experto, pero implementas áreas táctiles invisibles más grandes. Priorizas retener al talento y su impacto en la marca visual.", score: 3, type: "Hack técnico (Funciona pero no enseña)" }
    ],
    explanation: "Un Lead define la cultura de calidad. **Estándar Profesional** deja claro que la exclusión no es una decisión estilística válida. **Middle Ground** enseña que los estándares son sugerencias. **Creative Exception** crea una cultura de 'Divas' donde el ego supera al usuario."
  },
  {
    id: 'offline_mode_scope_creep',
    displayId: 'MOB-16',
    category: "Mobile Architecture",
    icon: <Wifi className="w-6 h-6 text-blue-400" />,
    scenario: "En el kickoff de proyecto, el PM presenta su visión: 'Necesitamos offline mode completo - lectura, escritura, sincronización automática de conflictos. Como Notion pero para field workers'. Engineering estima 4 meses de desarrollo y $180K de inversión. El problema: el demo con el cliente ancla ($500K deal) está agendado en 6 semanas y no se puede mover. El VP de Ventas presiona: 'Si no mostramos offline, perdemos el deal. Hagan lo que tengan que hacer'.",
    question: "¿Cómo balanceas promesa vs realidad?",
    options: [
      { id: 'A', text: "**Read-Only MVP:** Reduces el alcance a 'Consulta Offline' (solo lectura). Entregas el 80% del valor (acceso a información en campo) en 3 semanas, posponiendo la complejidad de sincronización de escritura para la fase 2.", score: 5, type: "Lead (Pragmatic scoping)" },
      { id: 'B', text: "**Optimistic Frontend:** Construyes una interfaz que 'finge' funcionar offline y guarda cambios localmente, sin resolver los conflictos de backend. Cumples con la demo visualmente para cerrar la venta.", score: 1, type: "Demo-driven (Deuda técnica masiva)" },
      { id: 'C', text: "**Services Contract:** Ofreces la funcionalidad completa como un desarrollo a medida post-firma con costo adicional. Proteges el roadmap del producto core externalizando la complejidad específica del cliente.", score: 3, type: "Services (Clean pero requiere buy-in)" }
    ],
    explanation: "Sync bidireccional es difícil (**Cache Invalidation**, conflictos). **Read-Only MVP** desbloquea el caso de uso principal sin riesgo técnico. **Optimistic Frontend** es una bomba de tiempo. **Services Contract** es válido pero arriesga el deal si el cliente lo ve como feature core."
  },
  {
    id: 'cross_platform_design_debt_explosion',
    displayId: 'MOB-17',
    category: "Design Ops",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "El Head de Customer Success te muestra un hilo de Twitter viral: un usuario publicó screenshots de tu producto en iOS, Android y Web lado a lado - las 3 interfaces se ven completamente diferentes (colores distintos, iconografía inconsistente, navegación en lugares opuestos). El post tiene 2.3K likes y comentarios burlándose de la 'falta de identidad de marca'. Internamente, el costo de mantener 3 Design Systems separados es de $120K/año en tiempo de diseño duplicado. Los usuarios reportan confusión al cambiar de dispositivo.",
    question: "¿Cómo unificas sin iniciar revuelta?",
    options: [
      { id: 'A', text: "**Unified Core System:** Defines un set de componentes base compartidos (colores, tipo, estructura) pero permites 'sabores' nativos para navegación y controles. Balanceas la eficiencia de marca con la familiaridad de plataforma.", score: 5, type: "Lead (Principled flexibility)" },
      { id: 'B', text: "**Platform Respect:** Mantienes la independencia. Fuerzas la alineación solo en assets de marca (logos, iconos), pero dejas que cada plataforma siga sus propias guías (Material vs HIG) para maximizar la calidad nativa.", score: 3, type: "Purista (Fragmentación de marca)" },
      { id: 'C', text: "**Single Source of Truth:** Impones un diseño único (probablemente web-based) para todas las plataformas. Maximizas la consistencia y reduces costo de mantenimiento a 1, ignorando las quejas de puristas.", score: 1, type: "Autoritario (Aliena users y equipo)" }
    ],
    explanation: "**Unified Core System** es la estrategia moderna (ej: Spotify, Airbnb): marca fuerte, contenedor nativo. **Platform Respect** es caro e inconsistente. **Single Source** se siente 'alienígena' en el dispositivo y baja la calidad percibida."
  },
  {
    id: 'mobile_onboarding_seven_screen_hell',
    displayId: 'MOB-18',
    category: "Mobile Onboarding",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    scenario: "El funnel de analytics es brutal: de cada 100 usuarios que descargan la app, solo 22 llegan al Dashboard. El culpable es el onboarding de 7 pantallas (carrusel explicativo de features). En el standup de Growth, el Head de Marketing propone: 'Agreguemos 2 pantallas más para explicar las nuevas features de AI - los usuarios no las están descubriendo'. Tú miras los datos de abandono por pantalla y ves que el drop-off más fuerte está en las pantallas 3 y 4. Más contenido parece contraproducente, pero Marketing insiste en 'educar mejor'.",
    question: "¿Qué haces con el onboarding?",
    options: [
      { id: 'A', text: "**Just-in-Time Education:** Eliminas el carrusel inicial por completo. Llevas al usuario directo al valor (dashboard) y enseñas las features progresivamente cuando intenta usarlas. Priorizas la activación sobre la explicación.", score: 5, type: "Lead (Zero friction onboarding)" },
      { id: 'B', text: "**Content Optimization:** Reduces el texto, mejoras las ilustraciones y agregas una barra de progreso. Optimizas la experiencia existente para reducir el drop-off sin cambiar la estructura fundamental.", score: 3, type: "Mejora incremental (No resuelve raíz)" },
      { id: 'C', text: "**Reward Loops:** Agregas gamificación al onboarding (puntos por completar pasos). Intentas motivar al usuario extrínsecamente para que soporte la fricción del proceso largo.", score: 1, type: "Lipstick on pig" }
    ],
    explanation: "Nadie descarga una app para ver un tutorial. **Just-in-Time Education** elimina la barrera de entrada. **Content Optimization** y **Reward Loops** son intentos de hacer tolerable una experiencia fundamentalmente rota. El mejor onboarding es no tener onboarding."
  },
  {
    id: 'app_store_rejection_iap_tax',
    displayId: 'MOB-19',
    category: "App Store & Compliance",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    scenario: "Apple rechazó tu último update (bloqueando un bug fix crítico) citando la regla 3.1.1: estás vendiendo cursos digitales sin usar In-App Purchase (IAP) y evadiendo el 'Apple Tax' del 30%. El CFO prohíbe pagar el 30% porque destruye el margen. El CEO sugiere: 'Esconde el botón de compra solo para los revisores de Apple'. Tienes 24 horas para desbloquear el release.",
    question: "¿Cómo resuelves el bloqueo de Apple sin cometer fraude ni quebrar el margen?",
    options: [
      { id: 'A', text: "**Shadow Toggle (Geofencing):** Implementas un feature flag que oculta el flujo de pago cerca de las oficinas de Cupertino. Desbloqueas el release inmediato protegiendo el negocio, asumiendo el riesgo calculado de un juego del gato y el ratón.", score: -1, type: "Fraude (Riesgo de Ban)" },
      { id: 'B', text: "**Reader App Strategy:** Eliminas el botón de compra en la app iOS. Cambias el copy a 'Gestiona tu cuenta en la web'. Cumples la normativa estricta permitiendo el consumo de contenido en la app, moviendo la transacción al canal web donde tienes 100% de margen.", score: 5, type: "Lead (Compliance Estratégico)" },
      { id: 'C', text: "**Premium Markup:** Implementas IAP pero subes el precio un 30% en la app para compensar la comisión. Le das al usuario la opción de la comodidad nativa, transfiriendo el costo de la plataforma al consumidor final.", score: 3, type: "Fricción de Precio" }
    ],
    explanation: "Engañar a Apple (**Shadow Toggle**) termina en la **Termination** de la cuenta de desarrollador (riesgo existencial). Subir precios (**Premium Markup**) es permitido pero genera fricción y quejas. **Reader App Strategy** es la vía estándar (Spotify/Netflix) para proteger el margen en negocios de contenido digital."
  },
  {
    id: 'push_notification_marketing_spam',
    displayId: 'MOB-20',
    category: "Engagement & Growth",
    icon: <Bell className="w-6 h-6 text-yellow-500" />,
    scenario: "Marketing quiere enviar Push Notifications diarias con 'Ofertas Flash' a toda la base. Proyectan un lift de ventas del 15%. Tu data muestra que la tasa de 'Opt-out' (usuarios desactivando notificaciones) sube 4x cuando la frecuencia pasa de semanal a diaria. Una vez que un usuario apaga notificaciones a nivel de OS, es casi imposible recuperarlo.",
    question: "¿Cómo gestionas el canal de notificaciones?",
    options: [
      { id: 'A', text: "**Growth Blast:** Ejecutas la campaña diaria. El incremento del 15% en ventas inmediatas justifica el churn de notificaciones. En e-commerce, la atención se captura con frecuencia y el usuario interesado agradecerá las ofertas.", score: 1, type: "Short-term Gain (Channel Burnout)" },
      { id: 'B', text: "**Notification Center (Preference Center):** Creas una sección en la app para que el usuario elija la frecuencia. Derivas a Marketing a enviar solo a quienes hicieron opt-in explícito a 'Ofertas Diarias', protegiendo el canal crítico del resto.", score: 5, type: "Lead (Permiso Granular)" },
      { id: 'C', text: "**Segmentación Silenciosa:** Filtras los envíos solo a usuarios que han comprado en los últimos 30 días. Reduces el riesgo de molestar a usuarios inactivos, enfocando el esfuerzo de marketing en el segmento de mayor conversión.", score: 3, type: "Mitigación Parcial" }
    ],
    explanation: "Quemantar el canal de Push (**Channel Burnout**) es irreversible a nivel de OS. **Growth Blast** sacrifica el LTV por ventas de hoy. **Segmentación Silenciosa** ayuda pero no resuelve la preferencia. **Notification Center** transfiere el control al usuario, garantizando que el canal siga abierto para notificaciones transaccionales críticas."
  },
  {
    id: 'deep_linking_infrastructure_hell',
    displayId: 'MOB-21',
    category: "Mobile Architecture",
    icon: <Link className="w-6 h-6 text-blue-400" />,
    scenario: "Marketing gasta $50K/mes en ads, pero el 40% de los usuarios que tienen la app instalada terminan en la web mobile (sin loguear) al hacer clic, destruyendo la conversión. Engineering dice que arreglar Universal Links (iOS) y App Links (Android) es un 'infierno de configuración' que requiere tocar servidores y certificados, estimado en 2 sprints.",
    question: "¿Cómo priorizas la infraestructura de Deep Linking?",
    options: [
      { id: 'A', text: "**Marketing Wrapper:** Usas una herramienta de atribución externa (ej: AppsFlyer/Branch) para envolver los links. Solucionas el ruteo inmediatamente sin tocar la infraestructura core, delegando la complejidad técnica al proveedor.", score: 3, type: "Dependencia de Vendor" },
      { id: 'B', text: "**Infrastructure Priority:** Detienes features de producto para arreglar los Universal Links nativos. La experiencia rota de 'Web teniendo la App' es un bug de usabilidad P0 que está quemando el 40% del presupuesto de marketing.", score: 5, type: "Lead (Fix the Foundation)" },
      { id: 'C', text: "**Smart Banner:** Implementas un banner en la web mobile que dice 'Abrir en la App'. Es una solución low-code que permite al usuario saltar manualmente a la app si lo desea, salvando la conversión sin desarrollo complejo.", score: 1, type: "Fricción de Usuario" }
    ],
    explanation: "Si el 40% del tráfico pago rebota por mala redirección, la infraestructura es prioridad de negocio, no técnica. **Smart Banner** agrega fricción. **Marketing Wrapper** (Branch) es válido pero añade costo y dependencia. **Infrastructure Priority** arregla la fuga de dinero en la raíz, asegurando una experiencia **Seamless**."
  },
  {
    id: 'android_fragmentation_low_end_crash',
    displayId: 'MOB-22',
    category: "Mobile Performance",
    icon: <Smartphone className="w-6 h-6 text-green-600" />,
    scenario: "Tu nueva feature de 'Video Preview' causa crashes en dispositivos Android de gama baja (Samsung J-series, 12% de tu base). El fix requiere reescribir el renderizado de video (3 semanas). Product quiere lanzar ya para capturar la campaña de Navidad. El CEO pregunta: '¿Podemos ignorar ese 12% y lanzar?'",
    question: "¿Cómo gestionas la fragmentación de Android?",
    options: [
      { id: 'A', text: "**Feature Flag por Device Class:** Lanzas la feature habilitada solo para dispositivos de gama media/alta. El 12% de gama baja ve la versión estática anterior. Proteges la estabilidad del release sin retrasar la campaña navideña.", score: 5, type: "Lead (Degradación Graciosa)" },
      { id: 'B', text: "**Launch & Patch:** Lanzas globalmente aceptando el crash rate temporal. El 88% de usuarios tendrá una experiencia excelente. Publicas un hotfix para los gama baja tan pronto esté listo en enero.", score: -1, type: "Negligencia (Crash Rate spike)" },
      { id: 'C', text: "**Bloqueo de Calidad:** Retrasas el lanzamiento hasta que funcione en todos los dispositivos soportados. La consistencia de la experiencia es sagrada y no puedes discriminar a usuarios por su poder adquisitivo.", score: 3, type: "Idealista (Pierde Navidad)" }
    ],
    explanation: "Lanzar sabiendo que crashea el 12% dispara las vitals de Android (ANR/Crashes) y Google penaliza tu visibilidad en Play Store. **Launch & Patch** es suicida. **Feature Flag por Device Class** aplica **Graceful Degradation**: entrega valor a quien puede recibirlo y estabilidad a quien no, salvando la Navidad."
  },
  {
    id: 'navigation_hamburger_vs_tabs',
    displayId: 'MOB-23',
    category: "Information Architecture",
    icon: <Menu className="w-6 h-6 text-gray-500" />,
    scenario: "La app creció y el Tab Bar de 5 items ya no aguanta más features. El PM quiere mover todo a un 'Hamburger Menu' lateral para tener espacio infinito. Data muestra que las features ocultas en menús laterales tienen -80% de engagement. Marketing insiste en meter 'Rewards' en el home.",
    question: "¿Cómo escalas la navegación sin matar el engagement?",
    options: [
      { id: 'A', text: "**Hamburger Drawer:** Mueves la navegación secundaria al menú lateral. Limpias la interfaz principal priorizando el contenido, permitiendo escalabilidad infinita de nuevas secciones en el futuro.", score: 1, type: "Oculta valor (Baja engagement)" },
      { id: 'B', text: "**IA Audit & Consolidation:** Re-evalúas la arquitectura. Agrupas features relacionadas para mantener el Tab Bar en 5 items. Si 'Rewards' es crítico, reemplaza a la feature de menor uso. Priorizas foco sobre volumen.", score: 5, type: "Lead (Hard Choices)" },
      { id: 'C', text: "**Scrollable Tab Bar:** Haces que la barra de navegación sea scrolleable horizontalmente. Mantienes todo 'a un nivel' sin ocultarlo en un menú, dando acceso rápido a más de 5 secciones.", score: 1, type: "Anti-patrón (Mala UX)" }
    ],
    explanation: "El **Hamburger Menu** es el sótano de la app: lo que entra ahí muere. **Scrollable Tab Bar** tiene pobre discoverability. La solución de Lead es **IA Audit**: tomar decisiones difíciles de priorización. Si todo es importante, nada es importante. Mantener 5 tabs obliga a definir la estrategia del producto."
  },
  {
    id: 'rating_prompt_aggressive_growth',
    displayId: 'MOB-24',
    category: "Growth & UX",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    scenario: "El rating en App Store es 4.2 y el CEO quiere 4.8. Growth implementó un prompt nativo de 'Califícanos' que aparece cada vez que abres la app. El rating subió a 4.5, pero el tiempo de sesión bajó 10% por la molestia. Los usuarios se quejan en Twitter del 'spam de estrellas'.",
    question: "¿Cómo optimizas el rating sin destruir la experiencia?",
    options: [
      { id: 'A', text: "**Maximización de Volumen:** Mantienes la frecuencia agresiva. La correlación entre rating alto y conversión de installs es directa. Un poco de molestia en usuarios actuales es el costo de adquirir nuevos usuarios orgánicos.", score: 1, type: "Growth Hack (Miope)" },
      { id: 'B', text: "**Happy Path Trigger:** Mueves el prompt al 'Momento de Éxito' (ej: completar una tarea, recibir un pago). Solo preguntas cuando el usuario siente valor, y limitas la frecuencia a una vez cada 3 meses por política de sistema.", score: 5, type: "Lead (Contextual)" },
      { id: 'C', text: "**Settings Menu:** Quitas el prompt automático y dejas un botón permanente 'Califícanos' en configuración. Respetas al usuario al 100%, dejando que la calificación sea un acto puramente voluntario.", score: 1, type: "Pasivo (Nadie califica)" }
    ],
    explanation: "Interrumpir el inicio de sesión genera fricción cognitiva. **Maximización de Volumen** quema la base instalada. **Settings Menu** solo recolecta quejas (sesgo negativo). **Happy Path Trigger** aprovecha la dopamina del logro para pedir el favor, alineando el incentivo del usuario con el del negocio."
  },
  {
    id: 'legacy_os_support_deprecation',
    displayId: 'MOB-25',
    category: "Mobile Architecture",
    icon: <Archive className="w-6 h-6 text-slate-500" />,
    scenario: "Engineering quiere dejar de soportar iOS 15 para usar las nuevas APIs de SwiftUI que aceleran el desarrollo un 40%. Analytics muestra que el 8% de tus usuarios (clientes leales antiguos) siguen en iOS 15. Representan $120K de ARR. Si actualizas, la app dejará de funcionar para ellos.",
    question: "¿Cómo decides el 'End of Life' (EOL) del soporte?",
    options: [
      { id: 'A', text: "**Dev Experience First:** Actualizas a iOS 16+. La velocidad de desarrollo (40% más rápido) beneficia al 92% de los usuarios. Mantener código legacy frena la innovación y desmotiva al equipo de ingeniería.", score: 1, type: "Tecnocéntrico (Pierde clientes)" },
      { id: 'B', text: "**Data-Driven Deprecation Plan:** Anuncias el EOL con 3 meses de aviso. Mides cuántos de ese 8% pueden actualizar dispositivo vs cuántos están atrapados. Ofreces incentivos o acceso web a los atrapados. Ejecutas el corte solo cuando el churn proyectado sea menor al ahorro operativo.", score: 5, type: "Lead (Gestión de Ciclo de Vida)" },
      { id: 'C', text: "**Legacy Freeze:** Mantienes el soporte a iOS 15 indefinidamente. No puedes permitirte perder $120K de ARR. Bifurcas el código si es necesario para usar SwiftUI en lo nuevo y UIKit en lo viejo.", score: 3, type: "Deuda Técnica (Mantenimiento alto)" }
    ],
    explanation: "Cortar el soporte al 8% de golpe es perder $120K. Mantenerlo eternamente (**Legacy Freeze**) frena todo el roadmap. **Data-Driven Deprecation** gestiona la transición: comunica, da tiempo y alternativas, minimizando el impacto financiero mientras desbloquea la velocidad técnica futura."
  },
  {
    id: 'super_app_merger_bloat',
    displayId: 'MOB-26',
    category: "Mobile Architecture",
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    scenario: "El CEO quiere fusionar las apps de 'Rider', 'Driver' y 'Eats' en una sola 'Super App' para 'crear sinergias de ecosistema'. Engineering advierte que el binario pesará 250MB y el tiempo de inicio subirá a 6s. Los equipos de producto de cada vertical temen perder autonomía.",
    question: "¿Cuál es tu postura arquitectónica ante la Super App?",
    options: [
      { id: 'A', text: "**Unified Binary:** Ejecutas la fusión. La fricción de instalación única y el cross-selling justifican el peso. Los usuarios tienen teléfonos modernos y 250MB no es bloqueante hoy en día.", score: 1, type: "Visionary (Ignora Performance)" },
      { id: 'B', text: "**Ecosystem Linking:** Mantienes apps separadas pero implementas 'App Clips' y Deep Links fluidos entre ellas con Single Sign-On (SSO) compartido. Logras la fricción reducida sin crear un monstruo monolítico inmanejable.", score: 5, type: "Lead (Arquitectura Distribuida)" },
      { id: 'C', text: "**Modular Architecture:** Fusionas las apps pero usando carga dinámica de módulos (On-demand features). Es una ingeniería compleja que tomará 9 meses, pero teóricamente resuelve el problema del peso.", score: 3, type: "Over-engineering (Riesgo de ejecución)" }
    ],
    explanation: "Las 'Super Apps' funcionan en Asia por contextos de OS específicos (WeChat). En occidente, apps monolíticas de 250MB tienen menor conversión. **Ecosystem Linking** (SSO + Deep Links) logra la sinergia comercial sin la deuda técnica y organizacional de un monolito. **Modular Architecture** es teóricamente ideal pero operativamente una pesadilla."
  }
];
