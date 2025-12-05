import React from 'react';
import {
  Brain, Layers, Lock, Palette, Users
} from 'lucide-react';

/**
 * Innovación, AI & Tendencias
 */
export const innovation_questions = [
  // --- BLOQUE 14: INNOVACIÓN, TRENDS & TECH DEBT ---
  {
    id: 'design_trend_neumorphism',
    displayId: 'INN-01',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Un diseñador Mid propone rediseñar el Dashboard con 'Neumorphism' tras recibir 2.4K likes en su prototipo de Dribbble. Sin embargo, la auditoría revela un contraste de 2.8:1 que viola WCAG AA. Sales advierte que el 18% de los deals Enterprise se caen si el producto falla la validación de accesibilidad en procurement.",
    question: "¿Cómo evalúas adoptar trends visuales?",
    options: [
      { id: 'A', text: "**Marketing-Only Adoption:** Autorizas el estilo para landing pages y marketing assets donde la conversión visual es prioritaria. Mantienes el producto core en un sistema de diseño accesible y funcional, separando 'Brand' de 'Product UI'.", score: 3, type: "Compromiso (Inconsistencia)" },
      { id: 'B', text: "**Modernization Wave:** Permites el rediseño para mantener el producto visualmente competitivo. La estética moderna es un factor de decisión de compra y los problemas de contraste se pueden micro-ajustar post-lanzamiento con feedback de usuarios reales.", score: 1, type: "Trend Chaser (Arriesga usabilidad)" },
      { id: 'C', text: "**Accessibility Gate:** Rechazas el estilo si no cumple matemáticamente con WCAG AA. Estableces que la inclusión no es negociable por moda. La deuda de accesibilidad en B2B bloquea contratos Enterprise, por lo que el riesgo comercial supera al beneficio estético.", score: 5, type: "Lead (Principios > Estética)" }
    ],
    explanation: "En Enterprise, **Accesibilidad** es un requisito de compra, no un 'nice to have'. Adoptar un trend que rompe contraste (**Neumorphism**) es suicidio comercial. **Accessibility Gate** protege el revenue. Separar Marketing de Producto crea deuda de marca."
  },
  {
    id: 'ai_design_automation_job_threat',
    displayId: 'INN-02',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Tu Junior está visiblemente afectado: 'Midjourney generó en 20 minutos las pantallas que a mí me tomarían 2 semanas'. En el canal de Slack, el equipo comparte artículos sobre 'El fin del diseño UI' y la ansiedad es palpable. Te preguntan directamente en el 1:1: '¿Me van a reemplazar?'.",
    question: "¿Cómo recontextualizas el rol del diseñador ante la AI?",
    options: [
      { id: 'A', text: "**Human-Centric Defense:** Reafirmas que la empatía y la creatividad humana son inimitables. 'La AI alucina, nosotros entendemos el alma humana'. Enfocas al equipo en el valor artesanal del diseño como diferenciador premium.", score: -1, type: "Filosofía Artesanal (Niega evolución)" },
      { id: 'B', text: "**Strategic Up-Leveling:** 'La AI commoditiza los píxeles, no la estrategia. Ahora su trabajo es resolver problemas de negocio, no mover rectángulos. Usen la AI para saltarse la ejecución aburrida'. Redefines el rol hacia arriba en la cadena de valor.", score: 5, type: "Lead (Reframe Constructivo)" },
      { id: 'C', text: "**Tool Agnosticism:** 'Son solo herramientas, como Photoshop en los 90'. Bajas el perfil a la tecnología para calmar la ansiedad. Si ignoramos el hype y nos enfocamos en el trabajo diario, la histeria pasará.", score: 3, type: "Minimización (Ignora magnitud)" }
    ],
    explanation: "Negar el impacto de la AI es ingenuo. **Strategic Up-Leveling** acepta la realidad: la ejecución visual se abarata, el valor se mueve a la **Estrategia** y **Resolución de Problemas**. Defender el 'alma humana' no protege empleos; evolucionar skills sí."
  },
  {
    id: 'ai_personalization_ethical_limit',
    displayId: 'INN-03',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Growth desarrolló un prototipo de AI que adapta la UI según el perfil psicológico del usuario, logrando un lift del 15% en conversión ($180K ARR proyectado). Privacy Counsel advierte que el tracking necesario está en una 'zona gris' de GDPR, pero Growth insiste: 'Amazon y Netflix lo hacen, es el estándar'.",
    question: "¿Hasta dónde llevas la personalización?",
    options: [
      { id: 'A', text: "**Industry Standard Execution:** Implementas la personalización por defecto. Si Amazon y Netflix lo hacen, el usuario ya tiene la expectativa de experiencias adaptadas. La mejora de conversión valida que el usuario percibe valor en la relevancia.", score: -1, type: "Estándar de Industria (Normaliza vigilancia)" },
      { id: 'B', text: "**Transparent Opt-In:** Ofreces la personalización como una feature ('Activar Modo Inteligente') explicando qué datos usa. Transformas una táctica oculta en una propuesta de valor transparente, cumpliendo GDPR y ganando confianza.", score: 5, type: "Lead (Privacy by Design)" },
      { id: 'C', text: "**Safe Personalization:** Limitas la personalización a variables explícitas (rol, industria) y descartas el perfilado psicológico. Sacrificas parte del lift de conversión para mantenerte 100% en la zona blanca legal.", score: 1, type: "Conservador (Deja valor sobre la mesa)" }
    ],
    explanation: "El argumento 'Amazon lo hace' no protege de multas **GDPR**. La personalización oculta erosiona la confianza. **Transparent Opt-In** aplica **Privacy by Design**: convierte la data en un intercambio de valor explícito. Safe Personalization pierde revenue. Industry Standard asume riesgos legales innecesarios."
  },
  {
    id: 'ai_strategy_ux',
    displayId: 'INN-04',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El Board exige anunciar una 'Estrategia de AI' en el press release del lunes (48 horas) para frenar una caída del 5% en acciones. El PM sugiere integrar un chatbot genérico 'para cumplir', aunque sabes que la experiencia es pobre y propensa a alucinaciones. La presión es máxima.",
    question: "¿Cuál es tu contra-propuesta de valor?",
    options: [
      { id: 'A', text: "**Beta Labeling:** Lanzas el chatbot con etiqueta 'Experimental'. Cumples el requisito de PR protegiendo la marca de los errores de alucinación. Es la solución de compromiso estándar para ganar tiempo.", score: 3, type: "Compromiso defensivo" },
      { id: 'B', text: "**Invisible AI (Magic Fill):** Prototipas una feature de 'Scan to Form' (OCR + AI) que resuelve un dolor real de data entry. Vendes la narrativa de 'Productividad Real vs Hype' al Board, ofreciendo valor tangible en lugar de una demo vacía.", score: 5, type: "Lead (User-Centric AI)" },
      { id: 'C', text: "**Waitlist Strategy:** Anuncias la visión con una landing page 'Coming Soon'. Ganas tiempo para construir algo real sin comprometer código basura en producción hoy.", score: 1, type: "Vaporware (Riesgo de decepción)" }
    ],
    explanation: "Los chatbots genéricos son commodities. **Invisible AI** resuelve problemas reales (boring but useful). **Beta Labeling** es una excusa para shippear basura. **Waitlist** es vaporware. La mejor estrategia de AI es aquella que el usuario no nota pero agradece."
  },
  {
    id: 'design_system_library_vs_custom',
    displayId: 'INN-05',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El VP de Engineering propone reemplazar tu Design System custom (que cuesta $400K/año mantener) por una librería open source como Shadcn/UI. Su argumento es financiero y operativo: 'Cada feature demora un 30% más porque gastamos tiempo manteniendo componentes en lugar de construir producto'.",
    question: "¿Cómo defiendes o migras tu sistema?",
    options: [
      { id: 'A', text: "**Custom Value Defense:** Argumentas que la velocidad a largo plazo depende de tener componentes optimizados para el dominio específico. El costo de re-escribir todo en una librería genérica superará el ahorro de mantenimiento en el primer año.", score: 1, type: "Purista (Ignora costos reales)" },
      { id: 'B', text: "**Hybrid Architecture:** Migras los componentes commodity (botones, inputs) a la librería open source, pero mantienes custom los componentes de negocio complejos (tablas, wizards). Reduces el mantenimiento un 60% sin perder la capacidad de diferenciación en UX core.", score: 5, type: "Lead (Pragmatismo estratégico)" },
      { id: 'C', text: "**Full Migration Roadmap:** Aceptas la premisa de ingeniería y planeas la migración total. Estandarizar sobre tecnología comunitaria permite contratar más fácil y aprovechar el ecosistema, eliminando la deuda técnica propietaria.", score: 1, type: "Big Bang (Mata momentum)" }
    ],
    explanation: "Defender un sistema propietario costoso por orgullo es un error. Migrar todo es un proyecto faraónico. **Hybrid Architecture** aplica la regla 80/20: usa lo estándar para lo básico, invierte esfuerzo solo donde aporta valor diferencial. **Commoditize your complements**."
  },
  {
    id: 'web3_wallet_integration_skepticism',
    displayId: 'INN-06',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El CEO regresa de una conferencia exigiendo integrar wallets Web3 en tu SaaS B2B tradicional para 'posicionarnos como innovadores'. Revisas el CRM y descubres que cero de tus 200 clientes Enterprise lo han solicitado. Engineering estima que la integración desviará 2 meses de recursos críticos.",
    question: "¿Cómo evalúas la integración?",
    options: [
      { id: 'A', text: "**Visionary Bet:** Ejecutas la integración. La innovación disruptiva nunca viene de lo que los clientes piden hoy (Faster Horses). Posicionas a la empresa como pionera tecnológica.", score: 1, type: "Especulativo (Desperdicia recursos)" },
      { id: 'B', text: "**Fake Door Test:** Implementas un botón 'Connect Wallet' que lleva a una encuesta de interés. Mides la intención real con costo de desarrollo casi cero. Si nadie hace clic, tienes datos para matar la idea objetivamente.", score: 5, type: "Lead (Evidence before investment)" },
      { id: 'C', text: "**Strategic Refusal:** Te niegas argumentando falta de casos de uso. Proteges el roadmap de distracciones tecnológicas que no resuelven problemas actuales de los usuarios.", score: 3, type: "Conservador (Puede perder ventana)" }
    ],
    explanation: "Construir sin demanda es desperdicio. Negarse por opinión es político. El **Fake Door Test** objetiviza la decisión: trae datos de intención real a la mesa por centavos. **Visionary Bet** es apostar la casa. **Strategic Refusal** puede ser visto como falta de visión."
  },
  {
    id: 'ar_product_visualization_roi',
    displayId: 'INN-07',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "E-commerce propone 'Try Before You Buy' con Realidad Aumentada. Requiere 3 meses de desarrollo y $50K en modelos 3D, pero el ROI es incierto. Marketing presiona argumentando que 'la competencia ya lo tiene' y que la percepción de innovación es vital para la marca.",
    question: "¿Cómo priorizas?",
    options: [
      { id: 'A', text: "**Competitive Parity:** Implementas la feature para neutralizar la ventaja de marketing del competidor. En e-commerce, la percepción de innovación es un driver de confianza importante.", score: 1, type: "Defensivo (Costly parity)" },
      { id: 'B', text: "**Scoped MVP Pilot:** Lanzas solo en iOS para los top 10 productos más vendidos. Mides impacto en devoluciones y conversión antes de escalar al catálogo completo. Controlas la inversión basándola en resultados probados.", score: 5, type: "Lead (Learn before scale)" },
      { id: 'C', text: "**Wait & See:** Esperas a que la tecnología se estandarice y los costos de modelado bajen. Ser 'Fast Follower' es más rentable que ser pionero en tecnologías no esenciales.", score: 3, type: "Late follower" }
    ],
    explanation: "Paridad por paridad es caro. **Scoped MVP Pilot** reduce el riesgo de inventario (solo 10 modelos) y técnico (solo iOS) para validar la hipótesis de negocio (¿bajan las devoluciones?). **Competitive Parity** asume que al competidor le funciona. **Wait & See** pierde la oportunidad de aprender."
  },
  {
    id: 'voice_ui_accessibility_vs_power_users',
    displayId: 'INN-08',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Un advocate de accesibilidad propone migrar workflows complejos a Voice UI para inclusión total. Sin embargo, tu data muestra que el 92% de usuarios son 'Power Users' que operan a alta velocidad con atajos de teclado; para ellos, la voz sería 3x más lenta e ineficiente.",
    question: "¿Cómo balanceas accesibilidad y eficiencia?",
    options: [
      { id: 'A', text: "**Universal Design:** Priorizas Voice UI como método primario. La accesibilidad universal beneficia a todos a largo plazo y prepara el producto para un futuro sin pantallas.", score: 1, type: "Idealista (Aliena core users)" },
      { id: 'B', text: "**Multimodal Interfaces:** Implementas Voice como capa aditiva, no sustitutiva. Mantienes la optimización de teclado para expertos mientras abres el canal de voz para accesibilidad. Soportas ambos modos de uso sin degradar ninguno.", score: 5, type: "Lead (Inclusive choice)" },
      { id: 'C', text: "**Scope Limitation:** Limitas los comandos de voz a funciones de búsqueda y navegación simple. Evitas la complejidad de data entry por voz, enfocando el esfuerzo donde aporta más valor con menos riesgo.", score: 3, type: "Pragmático (Limita alcance)" }
    ],
    explanation: "La accesibilidad no debe degradar la experiencia experta. **Multimodal Interfaces** permite coexistencia: velocidad para el experto, acceso para quien lo necesita. **Universal Design** mal entendido nivela hacia abajo. **Scope Limitation** excluye a usuarios con discapacidad de flujos complejos."
  },
  {
    id: 'ai_content_moderation_bias_risk',
    displayId: 'INN-09',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Legal propone reemplazar a los moderadores humanos ($40K/mes) con AI ($5K/mes) para reducir opex. El problema: la auditoría del modelo muestra un 8% de falsos positivos y sesgo racial documentado. El CFO está enamorado del ahorro, pero Trust & Safety teme una crisis de PR.",
    question: "¿Cómo decides sobre AI moderation?",
    options: [
      { id: 'A', text: "**Automation First:** Implementas la AI completa. El ahorro de costos justifica el margen de error del 8%. Estableces un canal de apelación para los usuarios afectados como válvula de escape.", score: 1, type: "Cost-first (Ignora impacto humano)" },
      { id: 'B', text: "**Augmented Moderation (HITL):** Usas AI para pre-filtrar y priorizar, pero mantienes humanos para la decisión final de ban (Human-in-the-Loop). Capturas el 70% del ahorro de eficiencia sin sacrificar la justicia del proceso ni introducir sesgos automatizados.", score: 5, type: "Lead (Augment, not replace)" },
      { id: 'C', text: "**Ethical Stand:** Rechazas la AI hasta que el sesgo sea cero. La moderación es un tema de derechos humanos y no se puede automatizar con herramientas imperfectas.", score: 1, type: "Purista (Costly long-term)" }
    ],
    explanation: "Automatizar sesgos es amplificar injusticia a escala. **Augmented Moderation** usa la AI para lo que es buena (filtrar volumen) y humanos para lo que son necesarios (contexto y juicio). **Automation First** es negligencia ética. **Ethical Stand** ignora la realidad financiera."
  },
  {
    id: 'emerging_tech_timing_pmf_tension',
    displayId: 'INN-10',
    category: "Estrategia de Producto",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Tu startup tiene tracción básica ($800K ARR) pero solo 8 meses de runway. El CTO propone un pivote radical a 'AI-First Platform' para atraer inversores de Series A, desviando recursos del roadmap actual que está enfocado en reducir el churn del 5% al 3%.",
    question: "¿Cómo priorizas fundraising vs producto?",
    options: [
      { id: 'A', text: "**Narrative Pivot:** Cambias el roadmap para construir features de AI vistosas. Entiendes que sin capital (Series A) no hay empresa, y el mercado actual exige esa narrativa para invertir.", score: 1, type: "Fundraising-driven (Distracción de PMF)" },
      { id: 'B', text: "**Fundamentals First:** Te mantienes en el plan de reducción de churn. Un negocio con métricas sólidas (retención, crecimiento real) es financiable en cualquier clima. La AI debe servir al producto, no al pitch deck.", score: 5, type: "Lead (Substance over hype)" },
      { id: 'C', text: "**Dual Strategy:** Divides el equipo para atacar ambos frentes. Intentas mantener la optimización del core mientras construyes prototipos de AI para mostrar a inversores.", score: 1, type: "Compromiso (Falla en ambos)" }
    ],
    explanation: "Pivotar por hype distrae del **Product-Market Fit**. Los inversores compran crecimiento real, no buzzwords. **Fundamentals First** asegura la supervivencia operativa. **Narrative Pivot** es una apuesta de todo o nada. **Dual Strategy** con 8 meses de runway es suicida."
  },
  {
    id: 'branding_rebrand_in_progress_legacy_components_confuse_users',
    displayId: 'INN-11',
    category: "Branding & Visual Identity",
    icon: <Palette className="w-6 h-6 text-pink-700" />,
    scenario: "El rebrand está a medias: Marketing ya lanzó la nueva identidad, pero el Producto sigue con la vieja. Los usuarios están reportando 'sitio de phishing' por la inconsistencia visual y la conversión cayó 12%. Engineering dice que actualizar el producto completo tomará 8 semanas más.",
    question: "¿Cómo gestionas la inconsistencia?",
    options: [
      { id: 'A', text: "**Full Rollback:** Reviertes Marketing al brand antiguo hasta que Producto esté listo. Priorizas la coherencia total de la experiencia sobre el lanzamiento de la nueva marca.", score: 3, type: "Big Bang (Requiere delay de marketing)" },
      { id: 'B', text: "**Key Journey Patch:** Actualizas inmediatamente solo el Login y la Navegación (2 semanas). Arreglas la primera impresión crítica que causa el miedo a phishing, aceptando inconsistencias menores en páginas profundas.", score: 5, type: "Lead (Priorización por impacto)" },
      { id: 'C', text: "**User Communication:** Agregas un banner en el producto explicando 'Estamos cambiando de look'. Gestionas la expectativa del usuario mediante comunicación directa en lugar de ingeniería.", score: 1, type: "Comunicación (No resuelve fricción visual)" }
    ],
    explanation: "La desconfianza en Login es crítica. **Key Journey Patch** aplica **Triage**: arregla lo que sangra (confianza en seguridad) inmediatamente. Rollback mata el momentum de marketing. Banner es una curita."
  },
  {
    id: 'nocode_tools_designer_replacement_threat',
    displayId: 'INN-12',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Los PMs empezaron a lanzar landing pages usando Framer sin pasar por Diseño. Aunque la calidad visual es inconsistente y off-brand, la velocidad de entrega se triplicó. Tu equipo de diseño se siente amenazado y exige recuperar el control del output.",
    question: "¿Cómo respondes a la democratización no-code?",
    options: [
      { id: 'A', text: "**Gatekeeping de Calidad:** Prohíbes el uso de herramientas no aprobadas y requieres sign-off de diseño para todo lo público. Proteges la integridad de la marca centralizando el control.", score: 1, type: "Governance approach" },
      { id: 'B', text: "**Enablement & Governance:** Creas templates de Framer aprobados y capacitas a los PMs. Estableces un 'Office Hours' para revisión rápida. Conviertes a Diseño en habilitador de velocidad, no en bloqueador, manteniendo estándares.", score: 5, type: "Lead (Leverage, no control)" },
      { id: 'C', text: "**Competitive Adoption:** Entrenas a tus diseñadores en no-code para que ellos recuperen ese trabajo. Aseguras que la ejecución sea profesional, manteniendo el control del output en el equipo de diseño.", score: 3, type: "Defensivo (Mantiene control, pierde focus)" }
    ],
    explanation: "Luchar contra la velocidad es perder. **Enablement & Governance** escala el impacto de diseño: empodera a otros con **Guardrails**. Gatekeeping te vuelve el departamento del 'No'. Designers haciendo landing pages es mal uso de recursos especializados."
  },
  {
    id: 'ai_generated_assets_policy_chaos',
    displayId: 'INN-13',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Descubres que varios diseñadores están usando Midjourney para imágenes de producción y ChatGPT para copy sin supervisión. Legal alerta sobre riesgos de copyright y Brand advierte que la voz de la marca se está diluyendo. No existe ninguna política interna que regule esto.",
    question: "¿Qué policy implementas?",
    options: [
      { id: 'A', text: "**AI-Augmented Workflow:** Permites AI para ideación y borradores, pero prohíbes el uso directo de assets generados en producción final sin edición humana significativa. Mitigas riesgo legal manteniendo la ganancia de productividad.", score: 5, type: "Lead (Harness AI con accountability)" },
      { id: 'B', text: "**Ban Total Preventivo:** Prohíbes el uso de Generative AI en assets comerciales hasta que la jurisprudencia de copyright esté clara. Priorizas la seguridad legal absoluta de la propiedad intelectual de la empresa.", score: 1, type: "Filosofía de Craft (Pierde leverage)" },
      { id: 'C', text: "**Creative Freedom:** Dejas la decisión a criterio de cada Lead. Fomentas la experimentación y velocidad, asumiendo que los riesgos legales son teóricos y manejables.", score: -1, type: "Empoderamiento Creativo (Abdica responsabilidad)" }
    ],
    explanation: "El riesgo de copyright en AI es real. **AI-Augmented Workflow** captura la eficiencia pero asegura **Human-in-the-Loop** para calidad y legalidad. Ban Total te deja atrás competitivamente. Creative Freedom es irresponsable corporativamente."
  },
  {
    id: 'spatial_computing_roi_vs_desktop_reality',
    displayId: 'INN-14',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El CEO exige una app para Apple Vision Pro ($3500) para el Q3 launch, buscando un golpe de PR. La data muestra que solo el 0.01% de tus usuarios tiene el dispositivo. El roadmap de escritorio tiene deuda técnica crítica acumulada que impacta al 100% de la base.",
    question: "¿Cómo priorizas?",
    options: [
      { id: 'A', text: "**PR Prototype:** Construyes un 'Concept Demo' de alta fidelidad (no funcional o alcance mínimo) solo para prensa y video. Cumples el objetivo de posicionamiento de marca sin desviar recursos de ingeniería del roadmap real.", score: 5, type: "Lead (PR vs Product separation)" },
      { id: 'B', text: "**Full Commitment:** Asignas un squad completo. Ser 'First Mover' en una nueva plataforma define a los líderes de la industria. Apuestas a que el mercado crecerá y ya estarás posicionado.", score: 1, type: "Hype-driven (Ignora userbase real)" },
      { id: 'C', text: "**Data Rejection:** Muestras la data de adopción (0.01%) y te niegas. Argumentas que es irresponsable invertir en una plataforma sin usuarios cuando el core product tiene necesidades urgentes.", score: 3, type: "Conservador (Pierde momento)" }
    ],
    explanation: "El objetivo del CEO es PR, no usuarios. **PR Prototype** resuelve el **Job-to-be-Done** del CEO (parecer innovador) con costo mínimo. Full Commitment desperdicia recursos en un mercado inexistente. Data Rejection ignora el valor intangible de la marca."
  },
  {
    id: 'realtime_collaboration_feature_hype',
    displayId: 'INN-15',
    category: "Innovación & AI",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Product propone construir 'colaboración en tiempo real estilo Figma' como prioridad máxima. Ingeniería estima 9 meses de infraestructura compleja. Sin embargo, tus analíticas revelan que solo el 8% de los usuarios colabora sincrónicamente; el 92% trabaja de forma asíncrona.",
    question: "¿Cómo evalúas el investment?",
    options: [
      { id: 'A', text: "**Async Excellence:** Priorizas features de colaboración asíncrona (comentarios, hilos, historial). Sirves al 92% de tu base con una fracción del costo técnico, resolviendo la necesidad de colaboración sin la complejidad de tiempo real.", score: 5, type: "Lead (Serve majority first)" },
      { id: 'B', text: "**Strategic Parity:** Apruebas el proyecto de 9 meses. La colaboración en tiempo real se está convirtiendo en un 'table stake' en software de productividad B2B. Si no lo construyes hoy, serás obsoleto mañana.", score: 3, type: "Platform bet (Correcto pero costoso)" },
      { id: 'C', text: "**Low-Tech Sync:** Implementas una solución de 'bloqueo de archivo' (Check-in/Check-out) para evitar conflictos. Es tecnología antigua pero resuelve el problema técnico de sobreescritura inmediatamente.", score: 1, type: "Compromiso técnico (Decepciona)" }
    ],
    explanation: "Construir tecnología compleja para un caso de uso marginal (8%) es mal **Resource Allocation**. **Async Excellence** entrega valor rápido a la mayoría. Real-time es costoso de mantener y escalar. Optimiza para el comportamiento dominante."
  },
  {
    id: 'blockchain_ux_beyond_crypto_wallets',
    displayId: 'INN-16',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El CTO insiste en implementar un 'Blockchain audit trail' para cumplir con HIPAA, argumentando innovación técnica. Tu Lead Engineer y Legal confirman que una base de datos PostgreSQL estándar cumple los mismos requisitos regulatorios a costo cero y sin complejidad adicional.",
    question: "¿Cómo evalúas la tecnología?",
    options: [
      { id: 'A', text: "**Pragmatic Tech Choice:** Eliges la solución de base de datos estándar (PostgreSQL). Cumple el requisito de negocio (HIPAA) con menor riesgo, menor costo y mayor mantenibilidad. La tecnología aburrida es la mejor tecnología para problemas resueltos.", score: 5, type: "Lead (Boring tech que funciona)" },
      { id: 'B', text: "**Innovation Pilot:** Aceptas el proyecto blockchain como piloto de R&D. Mantienes al equipo técnico motivado explorando nuevas tecnologías y posicionas a la empresa como vanguardista, aunque el caso de uso sea forzado.", score: 1, type: "Expensive learning (Predecible outcome)" },
      { id: 'C', text: "**Marketing Feature:** Implementas blockchain y lo usas agresivamente en ventas como diferenciador de seguridad 'inmutable'. Aprovechas el hype tecnológico para vender, aunque técnicamente sea overkill.", score: -1, type: "Tech Leadership (Resume-driven development)" }
    ],
    explanation: "**Resume-Driven Development** (elegir tech para el CV) es tóxico. Si PostgreSQL resuelve el problema gratis, Blockchain es desperdicio. **Pragmatic Tech Choice** prioriza la viabilidad y mantenibilidad. **Boring Technology** es una virtud en infraestructura crítica."
  },
  {
    id: 'figma_ai_features_adoption_timing',
    displayId: 'INN-17',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Figma lanzó features de AI y tu equipo quiere aplicarlas inmediatamente para limpiar 3 años de archivos legacy desordenados. Un test rápido reveló que la AI corrompió el 30% de los componentes complejos. La presión por automatizar el trabajo sucio es alta, pero el riesgo es sistémico.",
    question: "¿Cómo manejas la adopción?",
    options: [
      { id: 'A', text: "**Containment Strategy:** Habilitas las features solo para proyectos nuevos ('Greenfield'). Prohíbes su uso en archivos legacy hasta que la herramienta madure. Balanceas innovación con estabilidad operativa.", score: 5, type: "Lead (Incremental adoption)" },
      { id: 'B', text: "**Full Steam Ahead:** Habilitas globalmente y asignas un tiempo de 'cleanup' para arreglar lo que se rompa. El aumento de productividad a largo plazo compensa el dolor inicial de la transición.", score: 1, type: "FOMO-driven (Predictable chaos)" },
      { id: 'C', text: "**Wait for Stable:** Bloqueas la feature por 3 meses hasta la versión 1.1. Dejas que otros equipos sufran los bugs iniciales. Priorizas la integridad de la librería de diseño sobre la novedad.", score: 3, type: "Conservative (Timing friction)" }
    ],
    explanation: "Aplicar automatización inmadura a deuda técnica (legacy) es desastre. **Containment Strategy** permite probar sin riesgo sistémico. Corromper archivos históricos es inaceptable. Esperar demasiado frustra al equipo. Innovar en lo nuevo, proteger lo viejo."
  }
];
