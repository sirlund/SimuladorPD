import React from 'react';
import {
  CheckCircle, Layers, Zap, Globe, FileText, Target,
  Code, Heart, Smartphone, Languages, Wifi
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
    scenario: "40% de tickets de soporte son '¿Cómo archivo?'. Tienes 'swipe left' (estilo iOS). PM exige botón visible. Tú prefieres minimalismo.",
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
    scenario: "Tu Dark Mode ganó premios de diseño, pero falla WCAG AA (contraste 2.8:1). Legal advierte riesgo. Diseñador dice 'subir contraste mata la vibra'.",
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
    scenario: "Tech Lead rechaza animación: 'Baja Lighthouse score y TTI sube a 4.8s'. Tú argumentas diferenciación de marca. 34% usuarios son low-end devices.",
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
    scenario: "Mid-sprint. PM pide 'cambio pequeño' (filtro nuevo). Breakdown real: 2 días (diseño, estados, QA). PM dice: '¿2 días para un dropdown?'.",
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
    scenario: "Jueves 5 PM. QA bloquea release por contraste de botón (2.9:1 vs 3:1). Campaña de marketing sale mañana 9 AM. Product quiere lanzar.",
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
    scenario: "Feature financiera crítica ('Interés Compuesto'). Lógica compleja. PM dice: 'Solo danos pantallas, devs deducen lógica'. Riesgo legal alto.",
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
    scenario: "Deal $1.2M en Medio Oriente. UI actual no soporta RTL (Right-to-Left). Engineering estima 6 semanas. Cliente espera en 4. Marketing asume 'solo traducción'.",
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
    scenario: "Lanzamiento en Alemania. 'Save' -> 'Speichern' rompe 23 botones de ancho fijo. Devs quieren truncar ('Speich...'). Traductor dice no hay sinónimo corto.",
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
    scenario: "App para técnicos de campo (60% offline). Conflicto de edición simultánea. Engineering propone 'Last Write Wins' (2 semanas). Tú temes pérdida de datos. Demo en 3 semanas.",
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
    scenario: "Botones de 24px causan 'Fat Finger Errors'. Audit falla. Designer Lead dice: '44px se ve feo y desperdicia espacio'.",
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
    scenario: "Debate PWA ($80K) vs Native ($280K). iOS PM exige Native por retención. CFO pregunta costo. Tienes 1 sprint para decidir.",
    question: "¿Cómo decides la arquitectura mobile?",
    options: [
      { id: 'A', text: "**Hybrid Compromise:** Eliges React Native o Flutter como punto medio. Reduces costos compartiendo lógica, pero mantienes presencia nativa en stores. Evitas los extremos de PWA puro o Native puro.", score: 3, type: "Compromiso político (Nadie gana)" },
      { id: 'B', text: "**Targeted MVP Strategy:** Lanzas PWA para Android (mercado masivo, update fácil) y Native Wrapper para iOS (mercado high-value, notificaciones críticas). Validamos tracción con inversión segmentada ($150K) antes de unificar arquitectura.", score: 5, type: "Lead (Learn before commit)" },
      { id: 'C', text: "**Engineering Vote:** Delegas la decisión al equipo técnico. Ellos mantendrán el código, así que su preferencia de stack (probablemente PWA por simplicidad) debe prevalecer sobre las preferencias de producto.", score: 1, type: "Delegación técnica" }
    ],
    explanation: "Decidir arquitectura es decidir negocio. **Targeted MVP Strategy** reconoce que iOS y Android tienen economías diferentes. **Engineering Vote** ignora el **ROI**. **Hybrid Compromise** a veces suma la complejidad de ambos mundos. Validar valor antes de escalar costo es la ruta Lead."
  },
  {
    id: 'mobile_performance_budget_sacrifice',
    displayId: 'MOB-14',
    category: "Mobile Performance",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    scenario: "App pesa 85MB. Meta <40MB. 28% abandono en cold start. Devs dicen que 5 SDKs son 'críticos'.",
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
    scenario: "Diseñador estrella ($140K) se niega a usar botones de 44pt por 'estética'. Audit falla. Legal advierte riesgos.",
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
    scenario: "PM quiere 'offline mode' completo (4 meses). Demo en 6 semanas.",
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
    scenario: "3 apps (iOS, Android, Web) se ven distintas. Mantenimiento 3x. Usuarios confundidos.",
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
    scenario: "Onboarding de 7 pantallas pierde 78% de usuarios. Marketing quiere agregar 2 más.",
    question: "¿Qué haces con el onboarding?",
    options: [
      { id: 'A', text: "**Just-in-Time Education:** Eliminas el carrusel inicial por completo. Llevas al usuario directo al valor (dashboard) y enseñas las features progresivamente cuando intenta usarlas. Priorizas la activación sobre la explicación.", score: 5, type: "Lead (Zero friction onboarding)" },
      { id: 'B', text: "**Content Optimization:** Reduces el texto, mejoras las ilustraciones y agregas una barra de progreso. Optimizas la experiencia existente para reducir el drop-off sin cambiar la estructura fundamental.", score: 3, type: "Mejora incremental (No resuelve raíz)" },
      { id: 'C', text: "**Reward Loops:** Agregas gamificación al onboarding (puntos por completar pasos). Intentas motivar al usuario extrínsecamente para que soporte la fricción del proceso largo.", score: 1, type: "Lipstick on pig" }
    ],
    explanation: "Nadie descarga una app para ver un tutorial. **Just-in-Time Education** elimina la barrera de entrada. **Content Optimization** y **Reward Loops** son intentos de hacer tolerable una experiencia fundamentalmente rota. El mejor onboarding es no tener onboarding."
  }
];
