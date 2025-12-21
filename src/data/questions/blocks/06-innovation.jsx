import React from 'react';
import {
  Beaker,
  Brain,
  Glasses,
  Globe,
  Layers,
  Lock,
  Palette,
  ScanFace,
  Server,
  ShieldAlert,
  Sparkles,
  Users
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
      { id: 'A', text: "**Marketing-Only Adoption:** Autorizas el estilo para landing pages y marketing assets donde la conversión visual es prioritaria. Mantienes el producto core en un sistema de diseño accesible y funcional, separando 'Brand' de 'Product UI'.", score: 3, type: "Compromiso (Inconsistencia)", decisionSummary: "Separaste marketing de producto creando inconsistencia." },
      { id: 'B', text: "**Modernization Wave:** Permites el rediseño para mantener el producto visualmente competitivo. La estética moderna es un factor de decisión de compra y los problemas de contraste se pueden micro-ajustar post-lanzamiento con feedback de usuarios reales.", score: 1, type: "Trend Chaser (Arriesga usabilidad)", decisionSummary: "Adoptaste trend visual que viola WCAG AA." },
      { id: 'C', text: "**Accessibility Gate:** Rechazas el estilo si no cumple matemáticamente con WCAG AA. Estableces que la inclusión no es negociable por moda. La deuda de accesibilidad en B2B bloquea contratos Enterprise, por lo que el riesgo comercial supera al beneficio estético.", score: 5, type: "Lead (Principios > Estética)", decisionSummary: "Rechazaste trend por no cumplir WCAG AA." }
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
      { id: 'A', text: "**Human-Centric Defense:** Reafirmas que la empatía y la creatividad humana son inimitables. 'La AI alucina, nosotros entendemos el alma humana'. Enfocas al equipo en el valor artesanal del diseño como diferenciador premium.", score: -1, type: "Filosofía Artesanal (Niega evolución)", decisionSummary: "Negaste el impacto de AI defendiendo el 'alma humana'." },
      { id: 'B', text: "**Strategic Up-Leveling:** 'La AI commoditiza los píxeles, no la estrategia. Ahora su trabajo es resolver problemas de negocio, no mover rectángulos. Usen la AI para saltarse la ejecución aburrida'. Redefines el rol hacia arriba en la cadena de valor.", score: 5, type: "Lead (Reframe Constructivo)", decisionSummary: "Reenmarcaste el rol del diseñador hacia estrategia." },
      { id: 'C', text: "**Tool Agnosticism:** 'Son solo herramientas, como Photoshop en los 90'. Bajas el perfil a la tecnología para calmar la ansiedad. Si ignoramos el hype y nos enfocamos en el trabajo diario, la histeria pasará.", score: 3, type: "Minimización (Ignora magnitud)", decisionSummary: "Minimizaste el impacto de AI para calmar ansiedad." }
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
      { id: 'A', text: "**Industry Standard Execution:** Implementas la personalización por defecto. Si Amazon y Netflix lo hacen, el usuario ya tiene la expectativa de experiencias adaptadas. La mejora de conversión valida que el usuario percibe valor en la relevancia.", score: -1, type: "Estándar de Industria (Normaliza vigilancia)", decisionSummary: "Implementaste tracking psicológico sin consentimiento." },
      { id: 'B', text: "**Transparent Opt-In:** Ofreces la personalización como una feature ('Activar Modo Inteligente') explicando qué datos usa. Transformas una táctica oculta en una propuesta de valor transparente, cumpliendo GDPR y ganando confianza.", score: 5, type: "Lead (Privacy by Design)", decisionSummary: "Ofreciste personalización como opt-in transparente." },
      { id: 'C', text: "**Safe Personalization:** Limitas la personalización a variables explícitas (rol, industria) y descartas el perfilado psicológico. Sacrificas parte del lift de conversión para mantenerte 100% en la zona blanca legal.", score: 1, type: "Conservador (Deja valor sobre la mesa)", decisionSummary: "Limitaste personalización dejando valor sobre la mesa." }
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
      { id: 'A', text: "**Beta Labeling:** Lanzas el chatbot con etiqueta 'Experimental'. Cumples el requisito de PR protegiendo la marca de los errores de alucinación. Es la solución de compromiso estándar para ganar tiempo.", score: 3, type: "Compromiso defensivo", decisionSummary: "Lanzaste chatbot genérico con etiqueta 'Beta'." },
      { id: 'B', text: "**Invisible AI (Magic Fill):** Prototipas una feature de 'Scan to Form' (OCR + AI) que resuelve un dolor real de data entry. Vendes la narrativa de 'Productividad Real vs Hype' al Board, ofreciendo valor tangible en lugar de una demo vacía.", score: 5, type: "Lead (User-Centric AI)", decisionSummary: "Propusiste AI invisible que resuelve dolor real." },
      { id: 'C', text: "**Waitlist Strategy:** Anuncias la visión con una landing page 'Coming Soon'. Ganas tiempo para construir algo real sin comprometer código basura en producción hoy.", score: 1, type: "Vaporware (Riesgo de decepción)", decisionSummary: "Anunciaste vaporware con landing de 'Coming Soon'." }
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
      { id: 'A', text: "**Custom Value Defense:** Argumentas que la velocidad a largo plazo depende de tener componentes optimizados para el dominio específico. El costo de re-escribir todo en una librería genérica superará el ahorro de mantenimiento en el primer año.", score: 1, type: "Purista (Ignora costos reales)", decisionSummary: "Defendiste sistema custom ignorando costos reales." },
      { id: 'B', text: "**Hybrid Architecture:** Migras los componentes commodity (botones, inputs) a la librería open source, pero mantienes custom los componentes de negocio complejos (tablas, wizards). Reduces el mantenimiento un 60% sin perder la capacidad de diferenciación en UX core.", score: 5, type: "Lead (Pragmatismo estratégico)", decisionSummary: "Migraste commodities a open source manteniendo custom lo crítico." },
      { id: 'C', text: "**Full Migration Roadmap:** Aceptas la premisa de ingeniería y planeas la migración total. Estandarizar sobre tecnología comunitaria permite contratar más fácil y aprovechar el ecosistema, eliminando la deuda técnica propietaria.", score: 1, type: "Big Bang (Mata momentum)", decisionSummary: "Planeaste migración total big bang." }
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
      { id: 'A', text: "**Visionary Bet:** Ejecutas la integración. La innovación disruptiva nunca viene de lo que los clientes piden hoy (Faster Horses). Posicionas a la empresa como pionera tecnológica.", score: 1, type: "Especulativo (Desperdicia recursos)", decisionSummary: "Invertiste 2 meses en Web3 sin demanda validada de clientes." },
      { id: 'B', text: "**Fake Door Test:** Implementas un botón 'Connect Wallet' que lleva a una encuesta de interés. Mides la intención real con costo de desarrollo casi cero. Si nadie hace clic, tienes datos para matar la idea objetivamente.", score: 5, type: "Lead (Evidence before investment)", decisionSummary: "Validaste demanda con Fake Door Test antes de invertir." },
      { id: 'C', text: "**Strategic Refusal:** Te niegas argumentando falta de casos de uso. Proteges el roadmap de distracciones tecnológicas que no resuelven problemas actuales de los usuarios.", score: 3, type: "Conservador (Puede perder ventana)", decisionSummary: "Rechazaste librerías estándar para construir sistema custom." }
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
      { id: 'A', text: "**Competitive Parity:** Implementas la feature para neutralizar la ventaja de marketing del competidor. En e-commerce, la percepción de innovación es un driver de confianza importante.", score: 1, type: "Defensivo (Costly parity)", decisionSummary: "Implementaste AR completo por paridad competitiva." },
      { id: 'B', text: "**Scoped MVP Pilot:** Lanzas solo en iOS para los top 10 productos más vendidos. Mides impacto en devoluciones y conversión antes de escalar al catálogo completo. Controlas la inversión basándola en resultados probados.", score: 5, type: "Lead (Learn before scale)", decisionSummary: "Piloteaste AR en iOS con top 10 productos primero." },
      { id: 'C', text: "**Wait & See:** Esperas a que la tecnología se estandarice y los costos de modelado bajen. Ser 'Fast Follower' es más rentable que ser pionero en tecnologías no esenciales.", score: 3, type: "Late follower", decisionSummary: "Esperaste como late follower perdiendo oportunidad." }
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
      { id: 'A', text: "**Universal Design:** Priorizas Voice UI como método primario. La accesibilidad universal beneficia a todos a largo plazo y prepara el producto para un futuro sin pantallas.", score: 1, type: "Idealista (Aliena core users)", decisionSummary: "Priorizaste Voice UI alienando power users." },
      { id: 'B', text: "**Multimodal Interfaces:** Implementas Voice como capa aditiva, no sustitutiva. Mantienes la optimización de teclado para expertos mientras abres el canal de voz para accesibilidad. Soportas ambos modos de uso sin degradar ninguno.", score: 5, type: "Lead (Inclusive choice)", decisionSummary: "Implementaste Voice como capa aditiva multimodal." },
      { id: 'C', text: "**Scope Limitation:** Limitas los comandos de voz a funciones de búsqueda y navegación simple. Evitas la complejidad de data entry por voz, enfocando el esfuerzo donde aporta más valor con menos riesgo.", score: 3, type: "Pragmático (Limita alcance)", decisionSummary: "Limitaste Voice a búsqueda excluyendo flujos complejos." }
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
      { id: 'A', text: "**Automation First:** Implementas la AI completa. El ahorro de costos justifica el margen de error del 8%. Estableces un canal de apelación para los usuarios afectados como válvula de escape.", score: 1, type: "Cost-first (Ignora impacto humano)", decisionSummary: "Automatizaste moderación ignorando sesgo del 8%." },
      { id: 'B', text: "**Augmented Moderation (HITL):** Usas AI para pre-filtrar y priorizar, pero mantienes humanos para la decisión final de ban (Human-in-the-Loop). Capturas el 70% del ahorro de eficiencia sin sacrificar la justicia del proceso ni introducir sesgos automatizados.", score: 5, type: "Lead (Augment, not replace)", decisionSummary: "Implementaste Human-in-the-Loop para decisiones de ban." },
      { id: 'C', text: "**Ethical Stand:** Rechazas la AI hasta que el sesgo sea cero. La moderación es un tema de derechos humanos y no se puede automatizar con herramientas imperfectas.", score: 1, type: "Purista (Costly long-term)", decisionSummary: "Rechazaste AI esperando modelo sin sesgo." }
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
      { id: 'A', text: "**Narrative Pivot:** Cambias el roadmap para construir features de AI vistosas. Entiendes que sin capital (Series A) no hay empresa, y el mercado actual exige esa narrativa para invertir.", score: 1, type: "Fundraising-driven (Distracción de PMF)", decisionSummary: "Pivoteaste roadmap para perseguir narrativa AI." },
      { id: 'B', text: "**Fundamentals First:** Te mantienes en el plan de reducción de churn. Un negocio con métricas sólidas (retención, crecimiento real) es financiable en cualquier clima. La AI debe servir al producto, no al pitch deck.", score: 5, type: "Lead (Substance over hype)", decisionSummary: "Priorizaste reducción de churn sobre hype de AI." },
      { id: 'C', text: "**Dual Strategy:** Divides el equipo para atacar ambos frentes. Intentas mantener la optimización del core mientras construyes prototipos de AI para mostrar a inversores.", score: 1, type: "Compromiso (Falla en ambos)", decisionSummary: "Dividiste equipo entre core y AI con 8 meses runway." }
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
      { id: 'A', text: "**Full Rollback:** Reviertes Marketing al brand antiguo hasta que Producto esté listo. Priorizas la coherencia total de la experiencia sobre el lanzamiento de la nueva marca.", score: 3, type: "Big Bang (Requiere delay de marketing)", decisionSummary: "Revertiste marketing al brand antiguo retrasando lanzamiento." },
      { id: 'B', text: "**Key Journey Patch:** Actualizas inmediatamente solo el Login y la Navegación (2 semanas). Arreglas la primera impresión crítica que causa el miedo a phishing, aceptando inconsistencias menores en páginas profundas.", score: 5, type: "Lead (Priorización por impacto)", decisionSummary: "Parcheaste login y navegación para resolver miedo a phishing." },
      { id: 'C', text: "**User Communication:** Agregas un banner en el producto explicando 'Estamos cambiando de look'. Gestionas la expectativa del usuario mediante comunicación directa en lugar de ingeniería.", score: 1, type: "Comunicación (No resuelve fricción visual)", decisionSummary: "Agregaste banner en vez de resolver inconsistencia." }
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
      { id: 'A', text: "**Gatekeeping de Calidad:** Prohíbes el uso de herramientas no aprobadas y requieres sign-off de diseño para todo lo público. Proteges la integridad de la marca centralizando el control.", score: 1, type: "Governance approach", decisionSummary: "Prohibiste herramientas no-code volviéndote bloqueador." },
      { id: 'B', text: "**Enablement & Governance:** Creas templates de Framer aprobados y capacitas a los PMs. Estableces un 'Office Hours' para revisión rápida. Conviertes a Diseño en habilitador de velocidad, no en bloqueador, manteniendo estándares.", score: 5, type: "Lead (Leverage, no control)", decisionSummary: "Creaste templates y office hours habilitando velocidad." },
      { id: 'C', text: "**Competitive Adoption:** Entrenas a tus diseñadores en no-code para que ellos recuperen ese trabajo. Aseguras que la ejecución sea profesional, manteniendo el control del output en el equipo de diseño.", score: 3, type: "Defensivo (Mantiene control, pierde focus)", decisionSummary: "Entrenaste diseñadores en no-code para recuperar control." }
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
      { id: 'A', text: "**AI-Augmented Workflow:** Permites AI para ideación y borradores, pero prohíbes el uso directo de assets generados en producción final sin edición humana significativa. Mitigas riesgo legal manteniendo la ganancia de productividad.", score: 5, type: "Lead (Harness AI con accountability)", decisionSummary: "Permitiste AI para ideación con edición humana obligatoria." },
      { id: 'B', text: "**Ban Total Preventivo:** Prohíbes el uso de Generative AI en assets comerciales hasta que la jurisprudencia de copyright esté clara. Priorizas la seguridad legal absoluta de la propiedad intelectual de la empresa.", score: 1, type: "Filosofía de Craft (Pierde leverage)", decisionSummary: "Prohibiste AI generativa esperando claridad legal." },
      { id: 'C', text: "**Creative Freedom:** Dejas la decisión a criterio de cada Lead. Fomentas la experimentación y velocidad, asumiendo que los riesgos legales son teóricos y manejables.", score: -1, type: "Empoderamiento Creativo (Abdica responsabilidad)", decisionSummary: "Abdicaste responsabilidad dejando AI sin policy." }
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
      { id: 'A', text: "**PR Prototype:** Construyes un 'Concept Demo' de alta fidelidad (no funcional o alcance mínimo) solo para prensa y video. Cumples el objetivo de posicionamiento de marca sin desviar recursos de ingeniería del roadmap real.", score: 5, type: "Lead (PR vs Product separation)", decisionSummary: "Creaste concept demo para PR sin desviar engineering." },
      { id: 'B', text: "**Full Commitment:** Asignas un squad completo. Ser 'First Mover' en una nueva plataforma define a los líderes de la industria. Apuestas a que el mercado crecerá y ya estarás posicionado.", score: 1, type: "Hype-driven (Ignora userbase real)", decisionSummary: "Asignaste squad completo a plataforma con 0.01% users." },
      { id: 'C', text: "**Data Rejection:** Muestras la data de adopción (0.01%) y te niegas. Argumentas que es irresponsable invertir en una plataforma sin usuarios cuando el core product tiene necesidades urgentes.", score: 3, type: "Conservador (Pierde momento)", decisionSummary: "Rechazaste con data pero perdiste valor de PR." }
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
      { id: 'A', text: "**Async Excellence:** Priorizas features de colaboración asíncrona (comentarios, hilos, historial). Sirves al 92% de tu base con una fracción del costo técnico, resolviendo la necesidad de colaboración sin la complejidad de tiempo real.", score: 5, type: "Lead (Serve majority first)", decisionSummary: "Priorizaste colaboración asíncrona para servir al 92% de usuarios." },
      { id: 'B', text: "**Strategic Parity:** Apruebas el proyecto de 9 meses. La colaboración en tiempo real se está convirtiendo en un 'table stake' en software de productividad B2B. Si no lo construyes hoy, serás obsoleto mañana.", score: 3, type: "Platform bet (Correcto pero costoso)", decisionSummary: "Aprobaste 9 meses de desarrollo para real-time sin validar adopción." },
      { id: 'C', text: "**Low-Tech Sync:** Implementas una solución de 'bloqueo de archivo' (Check-in/Check-out) para evitar conflictos. Es tecnología antigua pero resuelve el problema técnico de sobreescritura inmediatamente.", score: 1, type: "Compromiso técnico (Decepciona)", decisionSummary: "Implementaste check-in/check-out anticuado que decepciona usuarios." }
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
      { id: 'A', text: "**Pragmatic Tech Choice:** Eliges la solución de base de datos estándar (PostgreSQL). Cumple el requisito de negocio (HIPAA) con menor riesgo, menor costo y mayor mantenibilidad. La tecnología aburrida es la mejor tecnología para problemas resueltos.", score: 5, type: "Lead (Boring tech que funciona)", decisionSummary: "Elegiste PostgreSQL sobre blockchain para HIPAA." },
      { id: 'B', text: "**Innovation Pilot:** Aceptas el proyecto blockchain como piloto de R&D. Mantienes al equipo técnico motivado explorando nuevas tecnologías y posicionas a la empresa como vanguardista, aunque el caso de uso sea forzado.", score: 1, type: "Expensive learning (Predecible outcome)", decisionSummary: "Aceptaste blockchain como piloto sin caso de uso real." },
      { id: 'C', text: "**Marketing Feature:** Implementas blockchain y lo usas agresivamente en ventas como diferenciador de seguridad 'inmutable'. Aprovechas el hype tecnológico para vender, aunque técnicamente sea overkill.", score: -1, type: "Tech Leadership (Resume-driven development)", decisionSummary: "Implementaste blockchain para marketing sin necesidad técnica." }
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
      { id: 'A', text: "**Containment Strategy:** Habilitas las features solo para proyectos nuevos ('Greenfield'). Prohíbes su uso en archivos legacy hasta que la herramienta madure. Balanceas innovación con estabilidad operativa.", score: 5, type: "Lead (Incremental adoption)", decisionSummary: "Habilitaste AI solo en proyectos nuevos protegiendo legacy." },
      { id: 'B', text: "**Full Steam Ahead:** Habilitas globalmente y asignas un tiempo de 'cleanup' para arreglar lo que se rompa. El aumento de productividad a largo plazo compensa el dolor inicial de la transición.", score: 1, type: "FOMO-driven (Predictable chaos)", decisionSummary: "Habilitaste AI globalmente corrompiendo archivos legacy." },
      { id: 'C', text: "**Wait for Stable:** Bloqueas la feature por 3 meses hasta la versión 1.1. Dejas que otros equipos sufran los bugs iniciales. Priorizas la integridad de la librería de diseño sobre la novedad.", score: 3, type: "Conservative (Timing friction)", decisionSummary: "Bloqueaste feature esperando versión estable." }
    ],
    explanation: "Aplicar automatización inmadura a deuda técnica (legacy) es desastre. **Containment Strategy** permite probar sin riesgo sistémico. Corromper archivos históricos es inaceptable. Esperar demasiado frustra al equipo. Innovar en lo nuevo, proteger lo viejo."
  },
  {
    id: 'generative_ui_vs_design_system',
    displayId: 'INN-18',
    category: "Innovación & AI",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    scenario: "Engineering quiere integrar Vercel v0 (Generative UI) para que el dashboard cree componentes 'on-the-fly' según la data del usuario. Argumentan que esto logra la 'personalización definitiva'. Tu equipo de Design Systems advierte que esto romperá la consistencia visual y de interacción, ya que la AI generará patrones no documentados. El PM está fascinado con la demo y quiere implementarlo.",
    question: "¿Cómo gestionas la tensión entre UI generativa y consistencia sistémica?",
    options: [
      { id: 'A', text: "**System-Constrained Generation:** Permites la generación por AI pero restringida estrictamente a usar tokens y componentes existentes de tu Design System. Usas la AI como 'assembler' de piezas lego aprobadas, no como creador de nuevos patrones.", score: 5, type: "Lead (Gobernanza Híbrida)", decisionSummary: "Permitiste UI generativa restringida a tokens del DS." },
      { id: 'B', text: "**Block & Protect:** Prohíbes la UI generativa en producción. La consistencia cognitiva y la confianza del usuario dependen de patrones predecibles. La marca no puede delegarse a un algoritmo estocástico.", score: 3, type: "Conservador (Frena innovación)", decisionSummary: "Prohibiste UI generativa protegiendo consistencia." },
      { id: 'C', text: "**Fluid Interfaces:** Abrazas el caos controlado. Permites que la AI genere interfaces únicas si mejora el KPI del usuario. Evolucionas tu Design System de un set de reglas rígidas a un set de 'principios guía' más flexibles.", score: 1, type: "Futurista (Riesgo de usabilidad)", decisionSummary: "Permitiste UI generativa sin restricciones creando caos." }
    ],
    explanation: "La UI generativa sin rieles crea deuda de usabilidad masiva. Bloquearla te deja atrás. **System-Constrained Generation** es el camino del Lead: usa la AI para orquestar, pero mantiene el Design System como la fuente de la verdad visual, garantizando consistencia y flexibilidad."
  },
  {
    id: 'ai_training_on_user_data_privacy',
    displayId: 'INN-19',
    category: "Innovación & Ética",
    icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
    scenario: "El CTO quiere entrenar un LLM propio usando 5 años de tickets de soporte para automatizar respuestas. Legal dice que los Términos de Servicio no mencionan explícitamente 'entrenamiento de AI', pero que es un 'uso legítimo de mejora de servicio'. Competidores ya lo hacen. Si pides permiso explícito (Opt-in), la data disponible bajará del 100% al 15%, haciendo el modelo inútil.",
    question: "¿Qué postura tomas sobre el uso de datos de clientes?",
    options: [
      { id: 'A', text: "**Silent Training:** Entrenas el modelo con la data histórica anonimizada bajo la cláusula de 'mejora de servicio'. Priorizas la competitividad del producto y la calidad del modelo, asumiendo el riesgo estándar de la industria.", score: 1, type: "Gris Legal (Riesgo de Trust)", decisionSummary: "Entrenaste LLM con data de clientes sin permiso explícito." },
      { id: 'B', text: "**Value-Exchange Opt-In:** Lanzas una campaña transparente: 'Ayúdanos a responderte más rápido'. Ofreces acceso beta prioritario o descuentos a quienes acepten el uso de datos. Reconstruyes el dataset con consentimiento explícito y confianza.", score: 5, type: "Lead (Trust Capital)", decisionSummary: "Lanzaste campaña de opt-in transparente con incentivos." },
      { id: 'C', text: "**Synthetic Data Augmentation:** No usas data real. Generas millones de tickets sintéticos con GPT-4 para entrenar tu modelo. Evitas cualquier riesgo de privacidad, utilizando datos fabricados para simular escenarios reales.", score: 3, type: "Técnico (Calidad inferior)", decisionSummary: "Usaste data sintética sacrificando calidad del modelo." }
    ],
    explanation: "Entrenar sin permiso explícito es una bomba de tiempo de PR y Legal (ver Zoom/Adobe backlash). **Value-Exchange Opt-In** convierte el problema legal en una transacción de valor. **Silent Training** arriesga la confianza de la marca. **Synthetic Data** es seguro pero degrada la calidad del producto final."
  },
  {
    id: 'innovation_lab_vs_core_product_resentment',
    displayId: 'INN-20',
    category: "Estrategia de Producto",
    icon: <Beaker className="w-6 h-6 text-teal-500" />,
    scenario: "Tienes un 'Innovation Lab' (20% del equipo) trabajando en conceptos futuristas de VR/AI que encantan al Board. Mientras tanto, el producto Core (80% del revenue) tiene deuda técnica crítica y bugs que causan churn. El equipo Core está resentido y se siente 'ciudadanos de segunda clase' limpiando el desastre mientras el Lab se divierte.",
    question: "¿Cómo reequilibras la cartera de innovación?",
    options: [
      { id: 'A', text: "**Kill the Lab:** Disuelves el equipo de innovación y reasignas a todos a arreglar el Core. 'Nadie innova hasta que el barco deje de hundirse'. Priorizas la salud inmediata del negocio sobre apuestas futuras.", score: 1, type: "Reactivo (Mata futuro)", decisionSummary: "Disolviste innovation lab para arreglar deuda técnica." },
      { id: 'B', text: "**Tour of Duty:** Implementas rotación obligatoria. Nadie está fijo en el Lab; los ingenieros/diseñadores rotan cada 6 meses. Democratizas el acceso al trabajo 'divertido' y aseguras que los innovadores mantengan contacto con la realidad del código base.", score: 5, type: "Lead (Cultura unificada)", decisionSummary: "Implementaste rotación democratizando innovación." },
      { id: 'C', text: "**Separación Total:** Mueves al Lab a una oficina/Slack separado. Aceptas que son culturas diferentes con misiones diferentes. Proteges a los innovadores de la burocracia del Core para que puedan moverse rápido.", score: 1, type: "Siloing (Empeora resentimiento)", decisionSummary: "Separaste Lab aumentando resentimiento del Core." }
    ],
    explanation: "Tener una casta privilegiada de 'innovadores' destruye la moral del equipo que paga las cuentas. **Tour of Duty** democratiza la innovación y transfiere conocimiento. Matar el Lab hipoteca el futuro. Separarlos más (**Separación Total**) solo incrementa el resentimiento y desconecta la innovación de la realidad del cliente."
  },
  {
    id: 'sustainability_feature_bloat_conflict',
    displayId: 'INN-21',
    category: "Innovación & Ética",
    icon: <Globe className="w-6 h-6 text-green-600" />,
    scenario: "Marketing quiere 'Autoplay Video' en alta resolución en el home para subir engagement (+15% proyectado). Tu equipo de sustentabilidad alerta que esto triplicará la huella de carbono digital del producto, violando el compromiso público de 'Net Zero'. El CEO dice: 'Necesitamos los números de engagement para la ronda de inversión, el planeta puede esperar un trimestre'.",
    question: "¿Cómo manejas el conflicto entre Growth y ESG?",
    options: [
      { id: 'A', text: "**Adaptive Loading (Eco-Mode):** Implementas autoplay solo en WiFi y dispositivos de gama alta, y click-to-play en redes móviles o si el usuario tiene 'Ahorro de Datos' activado. Balanceas el lift de métricas con responsabilidad técnica.", score: 5, type: "Lead (Smart Default)", decisionSummary: "Implementaste adaptive loading balanceando growth y ESG." },
      { id: 'B', text: "**Growth Priority:** Lanzas el video en 4K. La supervivencia de la empresa depende de la ronda de inversión. Si la empresa quiebra, su impacto ambiental es irrelevante. Compensas comprando créditos de carbono.", score: 1, type: "Cortoplacista (Greenwashing)", decisionSummary: "Priorizaste growth violando compromiso Net Zero." },
      { id: 'C', text: "**User Choice:** Pones un toggle de 'Eco-Friendly' en settings, desactivado por default. Transfieres la responsabilidad moral al usuario mientras capturas el engagement de la mayoría que nunca toca la configuración.", score: 3, type: "Dark Pattern (Responsabilidad delegada)", decisionSummary: "Delegaste responsabilidad ESG al usuario con toggle oculto." }
    ],
    explanation: "El conflicto Growth vs ESG es falso si se diseña inteligentemente. **Adaptive Loading** captura gran parte del valor comercial reduciendo el desperdicio masivo. Ignorar el compromiso (**Growth Priority**) es riesgo reputacional. Delegar al usuario (**User Choice**) es inefectivo porque los defaults gobiernan el comportamiento."
  },
  {
    id: 'predictive_ux_agency_friction',
    displayId: 'INN-22',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    scenario: "Data Science creó un modelo que predice con 85% de exactitud qué 'Add-on' comprará el usuario. Product quiere agregarlo al carrito automáticamente para reducir fricción ('Frictionless Commerce'). Proyectan +20% Revenue. Tú temes que esto erosione la confianza y aumente las devoluciones por compras accidentales.",
    question: "¿Dónde trazas la línea de la automatización?",
    options: [
      { id: 'A', text: "**Auto-Add con Notificación:** Agregas el item al carrito pero muestras un 'Toast' prominente: 'Hemos añadido X basado en tu historial'. Maximizas la conversión aprovechando el default bias, manteniendo una capa de transparencia.", score: 1, type: "Growth Hack (Erosiona confianza)", decisionSummary: "Auto-agregaste items al carrito sin consentimiento." },
      { id: 'B', text: "**Suggested Bundle:** Usas la predicción para crear un 'One-Click Bundle' pre-configurado, pero el usuario debe hacer clic activamente para aceptarlo. Reduces la fricción operativa sin violar la agencia del usuario.", score: 5, type: "Lead (Agencia respetada)", decisionSummary: "Ofreciste bundle sugerido respetando agencia del usuario." },
      { id: 'C', text: "**Confirmation Friction:** Agregas el item pero introduces un paso extra de confirmación en el checkout ('Revisa tu orden'). Aseguras que nadie compre por error, sacrificando gran parte del lift de conversión por la seguridad.", score: 3, type: "Protector (Mata conversión)", decisionSummary: "Agregaste fricción de confirmación matando conversión." }
    ],
    explanation: "Modificar el carrito del usuario sin su acción explícita viola la **Agencia del Usuario** y se siente como robo. **Suggested Bundle** usa la inteligencia para sugerir, no para imponer, logrando conversión ética. **Auto-Add** genera revenue tóxico (devoluciones y quejas). La confianza es más difícil de recuperar que un carrito abandonado."
  },
  {
    id: 'vendor_lockin_openai_dependency',
    displayId: 'INN-23',
    category: "Arquitectura de Sistemas",
    icon: <Lock className="w-6 h-6 text-orange-500" />,
    scenario: "Tu feature estrella 'Magic Summary' depende 100% de la API de OpenAI. Ayer tuvieron una caída de 4 horas durante el horario pico de tus clientes Enterprise. El CEO está furioso. Engineering propone construir un modelo open-source in-house (Llama 3) para tener control total, pero costará $250K y 4 meses de trabajo.",
    question: "¿Cómo gestionas el riesgo de dependencia de proveedores de AI?",
    options: [
      { id: 'A', text: "**Model Agnostic Wrapper:** Construyes una capa de abstracción (Gateway) que permite switchear entre OpenAI, Anthropic y Azure en tiempo real. Diversificas el riesgo de proveedor sin el costo masivo de mantener infraestructura propia.", score: 5, type: "Lead (Resiliencia Arquitectónica)", decisionSummary: "Construiste gateway multi-proveedor para resiliencia." },
      { id: 'B', text: "**Fine-tuned SLM (Small Language Model):** Inicias el fine-tuning de un modelo open source (Llama 3 8B) en infraestructura propia. La soberanía de datos y la eliminación de costos por token justifican la inversión de capital inicial. A largo plazo, reduces OPEX significativamente.", score: 1, type: "Not Invented Here (Costo oculto)", decisionSummary: "Iniciaste fine-tuning propio con costos ocultos de MLOps." },
      { id: 'C', text: "**Status Quo con SLA:** Negocias un contrato Enterprise con OpenAI que garantice SLA más alto. Resuelves el problema contractualmente, confiando en que el líder del mercado estabilizará su infraestructura.", score: 3, type: "Administrativo (Riesgo técnico persiste)", decisionSummary: "Negociaste SLA sin resolver riesgo de proveedor único." }
    ],
    explanation: "El **Fine-tuned SLM** suena económicamente atractivo ('sin costos por token') pero oculta: MLOps, GPU compute, talento especializado, y el modelo se queda atrás del state-of-art. Depender de un solo proveedor es frágil. **Model Agnostic Wrapper** es la estrategia resiliente: commoditiza al proveedor de inteligencia. Si OpenAI cae, ruteas a Anthropic. Resiliencia vía arquitectura, no vía propiedad."
  },
  {
    id: 'metaverse_pivot_late_adoption',
    displayId: 'INN-24',
    category: "Estrategia de Producto",
    icon: <Glasses className="w-6 h-6 text-purple-600" />,
    scenario: "El CEO quiere pivotar los eventos de comunidad a un 'Metaverso Propio' 3D porque 'el trabajo remoto llegó para quedarse'. Data muestra que la asistencia a eventos virtuales ha caído 60% post-pandemia y los usuarios prefieren video simple o audio. El CEO insiste en que 'la inmersión es el futuro' y quiere invertir $500K.",
    question: "¿Cómo frenas una inversión basada en hype caducado?",
    options: [
      { id: 'A', text: "**Smoke Test de Validación:** Creas una landing page anunciando el evento 'Inmersivo 3D' vs 'Video Simple'. Mides registros. Usas la data de desinterés (baja conversión) para matar el proyecto objetivamente antes de escribir código.", score: 5, type: "Lead (Evidence-Based Kill)", decisionSummary: "Validaste con smoke test antes de invertir $500K en metaverso." },
      { id: 'B', text: "**Compromiso 2.5D:** Propones usar una plataforma existente (ej: Gather.town) en lugar de construir. Bajas el riesgo financiero de $500K a $5K, permitiendo al CEO probar su hipótesis sin descapitalizar la empresa.", score: 3, type: "Soft Landing (Mitigación)", decisionSummary: "Propusiste plataforma existente reduciendo riesgo de $500K a $5K." },
      { id: 'C', text: "**Ejecución Fiel:** Construyes el Metaverso. Si el CEO tiene esa visión, tu trabajo es materializarla con la mejor UX posible. A veces los líderes ven tendencias que la data actual no refleja.", score: -1, type: "Obedencia Ciega (Desperdicio)", decisionSummary: "Ejecutaste metaverso de $500K sin validar demanda del mercado." }
    ],
    explanation: "Invertir en tendencias en bajada es peligroso. **Smoke Test de Validación** opone datos reales a la intuición del CEO. **Compromiso 2.5D** es una buena salida intermedia. **Ejecución Fiel** quema $500K en un producto que nadie quiere. El rol del Lead es proteger los recursos de la empresa de malas apuestas."
  },
  {
    id: 'biometric_auth_privacy_inclusion',
    displayId: 'INN-25',
    category: "Innovación & Ética",
    icon: <ScanFace className="w-6 h-6 text-blue-500" />,
    scenario: "Security quiere forzar FaceID/Biometrics para todos los logins para eliminar el fraude de 'account sharing'. Marketing alerta que esto aliena a usuarios en regiones donde la desconfianza en la vigilancia estatal es alta, y excluye a usuarios con dispositivos legacy sin sensores biométricos (20% de la base).",
    question: "¿Cómo implementas seguridad avanzada sin excluir?",
    options: [
      { id: 'A', text: "**Mandato de Seguridad:** Fuerzas Biometrics. El fraude es un problema de negocio existencial y la seguridad no es opcional. Los usuarios con dispositivos viejos tendrán que actualizarse o usar otro servicio.", score: 1, type: "Security Absolutist (Excluyente)", decisionSummary: "Forzaste biometrics excluyendo 20% de usuarios." },
      { id: 'B', text: "**Progressive Security:** Haces Biometrics el default 'Happy Path' incentivado, pero mantienes 2FA (SMS/Email) como fallback robusto. Cubres seguridad y accesibilidad, manteniendo opciones para dispositivos legacy.", score: 5, type: "Lead (Seguridad Inclusiva)", decisionSummary: "Implementaste biometrics con fallback 2FA inclusivo." },
      { id: 'C', text: "**Regional Rollout:** Activas Biometrics solo en mercados 'confiados' (USA/EU) y dejas el sistema viejo en otros. Segmentas la seguridad por geografía, creando ciudadanos de primera y segunda clase en tu plataforma.", score: 3, type: "Fragmentación (Complejidad)", decisionSummary: "Fragmentaste seguridad por región creando inequidad." }
    ],
    explanation: "La seguridad que excluye al 20% de usuarios no es viable. **Progressive Security** prioriza la biometría por fricción reducida pero mantiene **Fallbacks** inclusivos. El **Mandato de Seguridad** ignora la realidad socioeconómica de la base de usuarios. La seguridad debe ser una capa, no un muro."
  },
  {
    id: 'eu_ai_act_compliance_panic',
    displayId: 'INN-26',
    category: "Innovación & Ética",
    icon: <ShieldAlert className="w-6 h-6 text-blue-600" />,
    scenario: "Tu feature de 'Scoring de Candidatos' usa AI. El nuevo 'EU AI Act' clasifica esto como 'Alto Riesgo', exigiendo auditorías de sesgo y explicabilidad que tu modelo 'Black Box' no tiene. El CEO quiere lanzar en Europa mañana para ganar market share.",
    question: "¿Qué haces ante un bloqueo regulatorio de 'Alto Riesgo'?",
    options: [
      { id: 'A', text: "**Geofencing Estratégico:** Lanzas globalmente EXCEPTO en la Unión Europea. Proteges a la empresa de multas masivas (6% facturación global) mientras buscas un vendor compliant. Sacrificas mercado temporalmente por seguridad existencial.", score: 5, type: "Lead (Risk Containment)", decisionSummary: "Aplicaste geofencing para evitar multas del 6% por EU AI Act." },
      { id: 'B', text: "**Disclaimer de 'Asistencia':** Cambias el copy para decir que la AI es solo una 'herramienta de sugerencia' y que el humano toma la decisión final. Argumentas que esto baja la clasificación de riesgo legal ante los reguladores.", score: 1, type: "Legal Hack (Riesgoso)", decisionSummary: "Intentaste evadir regulación con disclaimer cosmético." },
      { id: 'C', text: "**Vendor Pressure:** Lanzas igual y presionas al vendor para que entregue los reportes de explicabilidad en 30 días. Asumes el riesgo calculado de que los reguladores no auditarán en el primer mes de vigencia.", score: -1, type: "Negligencia Corporativa", decisionSummary: "Lanzaste en EU sin compliance esperando no ser auditado." }
    ],
    explanation: "El **EU AI Act** tiene dientes (multas del 6% revenue). Un sistema de 'High Risk' (RRHH, Salud) no compliant es un pasivo tóxico. **Geofencing** es la única medida responsable. Disclaimers cosméticos (**Legal Hack**) no cambian la naturaleza algorítmica del riesgo."
  },
  {
    id: 'legacy_hardware_ai_limit',
    displayId: 'INN-27',
    category: "Innovación & Infraestructura",
    icon: <Server className="w-6 h-6 text-gray-600" />,
    scenario: "Quieres lanzar 'AI Assistant' en la terminal de punto de venta (POS). El 40% de tus clientes usa hardware legacy (tablets de 2018) que crashean al correr modelos locales. El CEO quiere un lanzamiento unificado: 'No podemos dejar atrás a casi la mitad de los clientes'. Cloud inference es demasiado lento (latencia) para POS.",
    question: "¿Cómo despliegas innovación sobre hardware obsoleto?",
    options: [
      { id: 'A', text: "**Cloud Fallback:** Implementas un sistema híbrido. Los dispositivos nuevos corren el modelo local (rápido), los viejos van a la nube (lento pero funcional). Aceptas la inconsistencia de UX para lograr cobertura total.", score: 3, type: "Compromiso (Mala UX legacy)", decisionSummary: "Implementaste cloud fallback creando UX inconsistente." },
      { id: 'B', text: "**Hardware Refresh Incentive:** Lanzas la feature como exclusiva para hardware nuevo y ofreces un descuento agresivo de upgrade a los clientes legacy. Usas la feature como palanca para modernizar tu flota de dispositivos.", score: 5, type: "Lead (Ecosistema)", decisionSummary: "Usaste feature como palanca para modernizar hardware." },
      { id: 'C', text: "**Model Optimization:** Dedicas 3 meses a intentar comprimir el modelo (quantization) para que corra en hardware de 2018. Retrasas el lanzamiento global para intentar salvar la experiencia en dispositivos obsoletos.", score: 1, type: "Sunk Cost (Lucha contra física)", decisionSummary: "Retrasaste 3 meses intentando soportar hardware obsoleto." }
    ],
    explanation: "Luchar contra los límites físicos de hardware de 2018 es perder el tiempo. **Hardware Refresh Incentive** convierte una limitación técnica en una oportunidad comercial y operativa (retirar deuda de hardware). **Cloud Fallback** crea clientes de segunda clase con mala experiencia."
  }
];
