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
    id: 'ai_feature_hype_cycle',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El pipeline de Series B ($12M target) se enfrió después de que 3 VCs mencionaron en calls: 'No vemos estrategia de AI clara en el producto'. En el All-Hands mensual, el CEO anuncia públicamente: 'Necesitamos AI visible en el producto para Q2 - todos nuestros competidores ya lo tienen y estamos perdiendo deals'. No especifica QUÉ problema debe resolver, solo que 'debe estar visible en la UI para demos con inversores'. El VP de Product te escribe en privado: '¿Qué podemos hacer rápido para cumplir? El CEO está nervioso porque el runway es de 8 meses sin el Series B'. Tienes 6 semanas antes del próximo pitch con Sequoia.",
    question: "¿Cómo canalizas la presión de AI hype hacia implementación con valor real?",
    options: [
      { id: 'A', text: "**Chatbot GPT Genérico:** Implementas un chat assistant con GPT-4 en el dashboard. Es visible, cumple el deadline de 6 semanas y genera impacto visual inmediato en demos, aunque su utilidad real sea limitada.", score: 1, type: "Quick win (Expectativa > realidad)" },
      { id: 'B', text: "**Problem-First Discovery:** 2 semanas de entrevistas con power users para hallar tareas repetitivas automatizables. Presentas 3 casos de uso con ROI medible y pides 1Q para build, aunque arriesgas perder el deadline de 6 semanas y decepcionar al CEO que espera 'algo visible para inversores'.", score: 5, type: "Lead (Delayed gratification)" },
      { id: 'C', text: "**Marketing Truth:** Agregas badges 'Powered by AI' a features existentes que ya usan algoritmos. La autenticidad importa - si ya usas machine learning, ¿por qué esconderlo? El mercado premia la transparencia sobre la modestia técnica.", score: -1, type: "Truth in Marketing (Spin sin sustancia)" }
    ],
    explanation: "Cuando el pipeline de Series B se enfría y el runway es limitado, la presión por AI visible es real. Pero el **AI-washing** (badges 'Powered by AI') genera backlash cuando VCs hacen due diligence. **Chatbot GPT Genérico** cumple deadline pero decepciona en uso real. **Problem-First Discovery** arriesga decepcionar al CEO hoy pero construye casos de uso con **ROI medible** que VCs evalúan seriamente."
  },
  {
    id: 'design_trend_neumorphism',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Un diseñador Mid quiere rediseñar el Dashboard con 'Neumorphism' (sombras sutiles 3D soft) después de que su prototipo recibiera 2.4K likes en Dribbble. Sales reporta que 18% de usuarios enterprise rechazan productos que fallan auditorías de accesibilidad en procurement. Al auditar el diseño, descubres ratio de contraste de 2.8:1 en botones críticos (WCAG AA requiere 4.5:1). El diseñador argumenta que 'la estética moderna atrae usuarios' y que 'podemos iterar después'. Tienes que decidir antes del sprint planning del viernes.",
    question: "¿Cómo evalúas adoptar trends visuales?",
    options: [
      { id: 'A', text: "**Híbrido de Marketing:** Permites usar Neumorphism solo en secciones de Marketing (landing page, homepage pública) donde el impacto visual importa más, pero lo prohíbes en el producto core donde prima la usabilidad.", score: 3, type: "Compromiso (Inconsistencia)" },
      { id: 'B', text: "**Innovación Visual:** Lo permites. La diferenciación visual atrae usuarios y demuestra que el producto es moderno. Los problemas de contraste se pueden ajustar iterativamente después del lanzamiento basado en feedback.", score: 1, type: "Trend Chaser (Arriesga usabilidad)" },
      { id: 'C', text: "**Accessibility First:** Si el trend no puede cumplir WCAG AA sin compromisos estéticos severos, se rechaza. La moda no justifica excluir usuarios con baja visión o condiciones de luz, aunque arriesgas frustrar al diseñador y perder el momentum visual de 2.4K likes en Dribbble. Los principios no son negociables.", score: 5, type: "Lead (Principios > Estética)" }
    ],
    explanation: "Cuando clientes enterprise rechazan productos por fallas de accesibilidad y el contraste viola **WCAG AA**, permitir **Neumorphism** arriesga deals comerciales. Los trends visuales son pasajeros, la accesibilidad es permanente y legal. **Accessibility First** establece que ningún trend justifica excluir usuarios. Híbrido de Marketing crea inconsistencia de marca. Innovación Visual prioriza estética sobre usabilidad."
  },

  // --- NUEVAS PREGUNTAS: BLOQUE 31 - INNOVACIÓN & AI ---
  {
    id: 'ai_design_automation_job_threat',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Durante 1:1, un diseñador junior con 2 años de experiencia te dice que pasó el fin de semana probando Midjourney y está 'aterrado' - generó 50 pantallas de UI en 20 minutos, trabajo que le tomaría 2 semanas normalmente. Te pregunta directamente: '¿Los diseñadores vamos a ser reemplazados por AI?'. En Slack #design-team, ves que 3 diseñadores más compartieron artículos sobre 'AI va a reemplazar a diseñadores' con emojis de preocupación. El morale está cayendo.",
    question: "¿Cómo recontextualizas el rol del diseñador ante la AI?",
    options: [
      { id: 'A', text: "**Human Creativity First:** 'La creatividad humana es irreemplazable. Los mejores equipos confían en su craft artesanal, no en herramientas que commoditizan el diseño. Nuestra ventaja competitiva es la autenticidad humana'.", score: -1, type: "Filosofía Artesanal (Niega evolución)" },
      { id: 'B', text: "**Shift de Skills:** 'La AI automatiza la ejecución, no la estrategia. Nuestro valor es entender al usuario y el negocio. Usen AI como asistente para acelerar, no como amenaza', aunque arriesgas que algunos en el equipo no logren hacer la transición y se sientan obsoletos.", score: 5, type: "Lead (Reframe Constructivo)" },
      { id: 'C', text: "**Craft Protection:** Prohibir herramientas de AI en el equipo para proteger el trabajo manual y la calidad artesanal. Netflix promueve 'proceso sobre herramientas' - el craft manual desarrolla mejor intuición de diseño que los atajos tecnológicos.", score: -1, type: "Proceso > Tecnología (Aísla al equipo)" }
    ],
    explanation: "Cuando la AI genera 50 pantallas en 20 minutos vs 2 semanas manuales, negar la evolución deja al equipo obsoleto. **Shift de Skills** reconoce que AI automatiza ejecución pixel-pushing, elevando el valor del diseñador hacia estrategia, user research y resolución de problemas de negocio—habilidades que AI no puede reemplazar. Human Creativity First niega evolución. Craft Protection aísla al equipo del mercado."
  },
  {
    id: 'ai_personalization_ethical_limit',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El equipo de Growth construyó un prototipo de AI que personaliza la UI completa por usuario (colores, layout, CTAs) basado en perfiles psicológicos inferidos de comportamiento. En A/B test con 5K usuarios, aumentó conversión de trial-to-paid un 15% ($180K ARR anual). Sin embargo, Privacy Counsel advierte que el tracking intensivo requerido está 'en zona gris legal GDPR' y que usuarios podrían sentirse manipulados si descubren el sistema. Growth insiste: 'Es personalización, no manipulación - Amazon lo hace'.",
    question: "¿Hasta dónde llevas la personalización?",
    options: [
      { id: 'A', text: "**Growth-Driven Personalization:** Implementarlo por defecto. Amazon, Netflix y Google personalizan agresivamente - es el estándar de la industria. Los usuarios esperan experiencias adaptadas. La mejora de 15% en conversión valida que funciona.", score: -1, type: "Estándar de Industria (Normaliza vigilancia)" },
      { id: 'B', text: "**Personalización Transparente con Opt-In:** Ofrecer la experiencia personalizada como opción que el usuario ELIGE activar, explicando claramente qué datos se usan y para qué, aunque arriesgas perder $180K ARR al reducir la adopción significativamente vs implementación por defecto.", score: 5, type: "Lead (Privacy by Design)" },
      { id: 'C', text: "**Personalización Superficial:** Limitarse a personalizar preferencias explícitas (tema claro/oscuro, idioma, timezone). Evitas zona gris legal pero dejas $180K ARR sobre la mesa.", score: 1, type: "Conservador (Deja valor sobre la mesa)" }
    ],
    explanation: "Cuando Growth argumenta 'Amazon lo hace' con $180K ARR en juego, apelar a 'estándar de industria' no justifica zona gris **GDPR**. **Personalización Transparente con Opt-In** empodera al usuario, convirtiendo táctica opaca en feature de valor que respeta privacidad. Growth-Driven Personalization normaliza vigilancia. Personalización Superficial deja valor sobre la mesa. **Privacy by Design** construye confianza duradera."
  },
  {
    id: 'ai_strategy_ux',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El Board exige una 'Estrategia de AI' para el press release del lunes (48 horas). El stock cayó 5% porque competidores anunciaron AI. El PM sugiere poner un chatbot genérico en la home 'para cumplir'. Tú sabes que es una experiencia pobre que alucina y frustra, pero la presión por 'anunciar algo' es máxima.",
    question: "¿Cuál es tu contra-propuesta de valor bajo presión de PR?",
    options: [
      { id: 'A', text: "**Chatbot 'Beta' Controlado:** Aceptas el chatbot pero lo etiquetas claramente como 'Experimental Beta' y limitas sus respuestas a temas de soporte pre-aprobados. Cumples con el PR del lunes minimizando riesgo de alucinaciones.", score: 3, type: "Compromiso defensivo" },
      { id: 'B', text: "**Invisible AI (Magic Fill):** Propones feature de 'Auto-completado de formularios con AI' (scan de PDF/imagen). Es menos vistoso que un chat, pero resuelve un dolor real (data entry). Haces un prototipo en video para el PR del lunes y prometes delivery en 4 semanas, aunque arriesgas que el Board lo considere 'poco ambicioso' comparado con chatbots de competidores y que no calme la presión del mercado. Vendes 'Productividad Real' vs 'Hype'.", score: 5, type: "Lead (User-Centric AI)" },
      { id: 'C', text: "**Fake Door Test:** Anuncias 'AI Assistant Coming Soon' con un botón que recoge emails de interesados. Ganas tiempo para diseñar algo real mientras calmas al Board con el anuncio.", score: 1, type: "Vaporware (Riesgo de decepción)" }
    ],
    explanation: "Cuando el Board exige anuncio en 48 horas por presión del mercado, el chatbot genérico alucina y frustra usuarios. **Invisible AI (Magic Fill)** arriesga parecer 'poco ambicioso' pero ofrece narrativa de 'Productividad Real' resolviendo dolores de data entry. Chatbot 'Beta' Controlado minimiza riesgo pero sigue siendo poor UX. Fake Door Test promete sin sustancia."
  },
  {
    id: 'design_system_library_vs_custom',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "En Planning Anual, el VP de Engineering propone reemplazar tu Design System custom (3 años de desarrollo, 200+ componentes, $400K en salarios de mantenimiento/año) con Shadcn/UI o MUI. Argumenta: 'Features demoran 30% más porque tenemos que mantener componentes custom. Shadcn está mantenido por la comunidad, es gratis, y podemos reasignar al Design Systems Engineer a producto'. CFO apoya la idea por el ahorro de costos. Tu equipo de diseño contraargumenta que los componentes custom están optimizados para workflows específicos y tienen mejor performance. Tienes que presentar tu posición en la reunión de mañana.",
    question: "¿Cómo defiendes o migras tu Design System ante presión de adoptar libraries third-party?",
    options: [
      { id: 'A', text: "**Defender el Custom System:** 'Nuestros componentes están optimizados para nuestro caso de uso específico, tienen mejor performance y reflejan nuestro brand únicamente'. Te niegas a migrar, argumentando que el control total justifica el costo de mantenimiento.", score: 1, type: "Purista (Ignora costos reales)" },
      { id: 'B', text: "**Hybrid Approach:** Migrar componentes genéricos (Buttons, Inputs) a la library, pero mantener componentes complejos y específicos del dominio (wizards, dashboards) custom. Reduces mantenimiento sin perder diferenciación, aunque arriesgas crear inconsistencias sutiles entre componentes library y custom que compliquen debugging.", score: 5, type: "Lead (Pragmatismo estratégico)" },
      { id: 'C', text: "**Big Bang Migration:** Planificar 6 meses para migrar TODO a Shadcn/UI. Paraizas el roadmap de features para hacer la transición completa y eliminar toda deuda técnica de una vez.", score: 1, type: "Big Bang (Mata momentum)" }
    ],
    explanation: "Cuando el mantenimiento cuesta $400K/año y features son 30% más lentas, defender custom totalmente ignora costos. Migrar todo en 6 meses paraliza roadmap. **Hybrid Approach** es pragmático: migra lo commodity (botones, inputs) a library, mantiene custom lo que diferencia (wizards, dashboards específicos). Defender el Custom System perpetúa costos insostenibles. Big Bang Migration mata momentum."
  },
  {
    id: 'web3_wallet_integration_skepticism',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "En All-Hands, el CEO anuncia que integrará wallets Web3 (MetaMask, WalletConnect) al producto SaaS B2B tradicional después de asistir a una conferencia blockchain. Argumenta: 'Es el futuro, nos posiciona como innovadores y diferencia de competidores'. Cuando revisas Salesforce y Intercom, descubres que cero de 200+ clientes enterprise lo han pedido. Engineering estima 2 meses de desarrollo + educar a usuarios no-crypto sobre seed phrases y gas fees. Product está dividido: algunos ven 'oportunidad', otros ven 'distracción'.",
    question: "¿Cómo evalúas integrar tecnología emergente sin demanda validada?",
    options: [
      { id: 'A', text: "**Build for Future:** Implementarlo inmediatamente. Los early adopters lideran el mercado. Si esperas a que los clientes lo pidan, ya es tarde - la competencia ya lo tendrá.", score: 1, type: "Especulativo (Desperdicia recursos)" },
      { id: 'B', text: "**Fake Door + Survey:** Agregar un botón 'Connect Wallet (Coming Soon)' que registra interés. Si <3% clickea, la hipótesis se invalida sin costo de desarrollo, aunque arriesgas que el CEO perciba esto como 'falta de convicción' en su visión de innovación.", score: 5, type: "Lead (Evidence before investment)" },
      { id: 'C', text: "**Hard No:** 'Web3 es hype pasajero, no agregamos tecnología sin demand signal clear'. Te niegas categóricamente, potencialmente bloqueando verdadera innovación.", score: 3, type: "Conservador (Puede perder ventana)" }
    ],
    explanation: "Cuando cero de 200+ clientes piden wallets **Web3** y el desarrollo cuesta 2 meses, construir inmediatamente desperdicia recursos. **Fake Door + Survey** valida interés con costo cero—si <3% clickea, la hipótesis se invalida sin gasto. Build for Future es especulativo. Hard No puede bloquear innovación legítima. Evidence before investment minimiza riesgo."
  },
  {
    id: 'ar_product_visualization_roi',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "En roadmap review, el equipo de E-commerce propone AR 'Try Before You Buy' (visualizar productos en tu espacio con cámara). Muestran demos de IKEA y Amazon que tienen la feature. Estimación: 3 meses de desarrollo, solo funciona en iOS (60% de tu base es Android), requiere crear modelos 3D de 500+ SKUs ($50K costo externo). El ROI proyectado es 'aumento de confianza y reducción de retornos', pero no tienen data dura. Marketing insiste que 'la competencia ya lo tiene y estamos quedando atrás en innovation perception'.",
    question: "¿Cómo priorizas features de tech emergente con ROI incierto?",
    options: [
      { id: 'A', text: "**Feature Parity:** Implementarlo porque competidores lo tienen. 'No podemos quedarnos atrás en la comparison matrix'. Priorizas la paridad perceptual sobre la evidencia de uso.", score: 1, type: "Defensivo (Costly parity)" },
      { id: 'B', text: "**MVP Scoped:** Hacer un pilot con 10 SKUs top-sellers y solo iOS. Medir conversion lift en esos productos antes de escalar a todo el catálogo. Aprendes con inversión controlada, aunque arriesgas que Marketing siga presionando por feature parity completa antes de tener resultados.", score: 5, type: "Lead (Learn before scale)" },
      { id: 'C', text: "**Wait and See:** 'Es muy early, esperamos a que la tecnología madure y sea cross-platform'. Evitas riesgo pero pierdes ventana de innovación.", score: 3, type: "Late follower" }
    ],
    explanation: "Cuando el ROI es 'no medible directamente', 3 meses de desarrollo y $50K en modelos 3D, implementar por **feature parity** es especulación costosa. **MVP Scoped** (10 SKUs top-sellers, iOS-only) invierte mínimo para aprender si AR mueve conversion antes de comprometer implementación masiva. Feature Parity es defensivo y costoso. Wait and See te hace seguidor tardío."
  },
  {
    id: 'voice_ui_accessibility_vs_power_users',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Durante Accessibility Review Quarterly, un advocate de accesibilidad propone Voice UI para workflows complejos multi-step (ejemplo: crear una Invoice de 15 campos por voz). Presenta testimonial de un usuario con discapacidad motora que 'no puede usar el producto actual sin asistencia'. Sin embargo, analytics muestran que 92% de usuarios son power users que completan 20+ invoices/día con keyboard shortcuts - Voice sería 3x más lento para ellos. El advocate argumenta que 'accesibilidad no es negociable', pero Product advierte que 'imponer voice ralentizaría el core workflow'.",
    question: "¿Cómo balanceas accesibilidad con eficiencia de power users?",
    options: [
      { id: 'A', text: "**Voice-First Mandatorio:** Rediseñar el workflow para voice como primary interface. Forzar adoption para garantizar accesibilidad universal, aunque impacte velocidad de power users.", score: 1, type: "Idealista (Aliena core users)" },
      { id: 'B', text: "**Dual Interface:** Ofrecer voice como opción alternativa, manteniendo keyboard/visual como default. Los usuarios eligen su modalidad preferida según contexto, aunque arriesgas duplicar el costo de mantenimiento al sostener dos interfaces completas en paralelo.", score: 5, type: "Lead (Inclusive choice)" },
      { id: 'C', text: "**Voice para Simple Tasks Only:** Limitar voice a comandos básicos (search, filter). No invertir en voice para workflows complejos porque pocos lo usarían.", score: 3, type: "Pragmático (Limita alcance)" }
    ],
    explanation: "Cuando 92% de users completa 20+ invoices/día con keyboard shortcuts, forzar **voice-first** (3x más lento) destruye productividad. **Dual Interface** ofrece elección: accesibilidad completa para quien la necesita, eficiencia keyboard para power users. Voice-First Mandatorio aliena core users. Voice para Simple Tasks Only abandona usuarios con discapacidad en workflows complejos."
  },
  {
    id: 'ai_content_moderation_bias_risk',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "En Cost Review Quarterly, Legal propone usar AI (GPT-4 + moderation API) para auto-moderar user-generated content y reducir costos de $40K/mes (4 moderadores humanos) a $5K/mes. CFO está entusiasmado con el ahorro de $420K/año. Sin embargo, Trust & Safety presenta un audit de OpenAI Moderation API que muestra tasa de falsos positivos del 8% (elimina contenido legítimo) y sesgo racial/cultural documentado en estudios académicos. En los últimos 3 meses, recibieron 12 quejas de usuarios por 'censura injusta' con moderación humana - con AI esto podría escalar. Legal argumenta que 'la AI mejorará con el tiempo'.",
    question: "¿Cómo decides sobre AI moderation con beneficios claros pero riesgos éticos?",
    options: [
      { id: 'A', text: "**Full Automation:** Implementar AI moderation completamente. Ahorrar $35K/mes justifica el 8% de error. Usuarios afectados pueden apelar manualmente.", score: 1, type: "Cost-first (Ignora impacto humano)" },
      { id: 'B', text: "**Human-in-the-loop:** AI flagea content, pero humanos revisan antes de eliminar. Reduces costo a $15K/mes (vs $40K) y eliminas falsos positivos, aunque arriesgas no satisfacer completamente al CFO que espera ahorros de $420K/año y solo obtienes $300K.", score: 5, type: "Lead (Augment, not replace)" },
      { id: 'C', text: "**No AI:** Mantener 100% moderación humana por principios éticos. Es más costoso y más lento, pero preservas total control de calidad y evitas sesgos sistémicos.", score: 1, type: "Purista (Costly long-term)" }
    ],
    explanation: "Cuando $420K/año en ahorro tiene costo de 8% de falsos positivos con sesgo racial/cultural documentado, automatización total ignora impacto humano. **Human-in-the-loop** ahorra $300K/año usando AI como filtro pero mantiene juicio humano para proteger equidad. Full Automation maximiza ahorro pero genera censura injusta sistemática. No AI mantiene $40K/mes insostenibles."
  },
  {
    id: 'emerging_tech_timing_pmf_tension',
    category: "Estrategia de Producto",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Tu startup tiene Product-Market Fit básico pero no explosivo (15% MoM growth, 5% churn, $800K ARR). Tienes runway de 8 meses. El CTO viene de reunión con un VC y propone pivotar messaging a 'AI-First Platform' para fundraising Series A. Argumenta: 'Los inversores solo financian startups con AI en el pitch - vi 3 pitch decks exitosos esta semana, todos eran AI-first'. Requiere re-arquitecturar el producto para meter AI visible, desviando 3 meses del roadmap core que está optimizando retention (5%→3% churn target). PM advierte que 'perder momentum en PMF es mortal', pero CTO insiste que 'sin funding mueres en 8 meses de todas formas'.",
    question: "¿Cómo priorizas narrativa de fundraising vs consolidar PMF?",
    options: [
      { id: 'A', text: "**AI-First Pivot:** Priorizar el pivote de messaging y producto. Sin funding mueres en 8 meses - el PMF puede esperar. La narrativa de AI da 18 meses extra de runway.", score: 1, type: "Fundraising-driven (Distracción de PMF)" },
      { id: 'B', text: "**PMF First, Then AI:** Rechazar el pivot. Consolidar el PMF actual acelerándolo de 15% a 25% MoM reduciendo churn de 5%→3%. Con tracción sólida, fundraiseas sin necesidad de hype tech, aunque arriesgas que con solo 8 meses de runway no alcances a demostrar suficiente crecimiento antes de quedarte sin cash. Producto > Marketing.", score: 5, type: "Lead (Substance over hype)" },
      { id: 'C', text: "**Dual Track:** Mitad del equipo optimiza PMF, mitad construye 'AI features' para demo de fundraising. Intentas ambos pero divides foco en momento crítico.", score: 1, type: "Compromiso (Falla en ambos)" }
    ],
    explanation: "Con 8 meses de runway, pivotar a 'AI-First' distrae del roadmap que reduce churn. Los inversores que financian hype pedirán resultados eventualmente. **PMF First** apuesta a sustancia: acelerar growth 15%→25% MoM con churn bajo crea métricas sólidas. AI-First Pivot prioriza narrativa sobre product. Dual Track divide foco en momento crítico de **Product-Market Fit**."
  },


  // Category 7: Branding & Visual Identity (1 question)
  {
    id: 'branding_rebrand_in_progress_legacy_components_confuse_users',
    category: "Branding & Visual Identity",
    icon: <Palette className="w-6 h-6 text-pink-700" />,
    scenario: "Rebrand en proceso (timeline: 6 meses). Marketing lanzó el nuevo brand en homepage y ads hace 2 semanas. El Producto sigue con el viejo brand. En los últimos 7 días, Support recibió 23 tickets de usuarios reportando 'posible sitio de phishing' al hacer login - la inconsistencia visual (logo viejo, colores distintos) dispara alarmas de seguridad. Conversion de landing→signup cayó 12%. El CEO quiere seguir empujando el nuevo brand en marketing para no perder momentum, pero Engineering dice que actualizar Producto tomará 8 semanas más (componentes legacy hardcodeados). Tienes que presentar una solución en la reunión de mañana.",
    question: "¿Cómo gestionas la inconsistencia visual durante un rebrand gradual?",
    options: [
      { id: 'A', text: "**Big Bang Release:** Pausar updates graduales y lanzar todo junto cuando esté listo. Elimina la inconsistencia pero retrasa el valor para marketing.", score: 3, type: "Big Bang (Requiere delay de marketing)" },
      { id: 'B', text: "**Theme Switcher Temporal:** Implementar un 'theme toggle' que permita a usuarios elegir entre el diseño nuevo y anterior. Reduces confusión y permite transición gradual según preferencia de cada usuario.", score: 3, type: "Técnico (Complejidad de mantenimiento)" },
      { id: 'C', text: "**Priorizar Key Journeys:** Actualizar solo el Login y Navigation bar inmediatamente (2 semanas vs 8 semanas full) para que coincidan con Marketing. El resto puede esperar. Arreglas la primera impresión crítica, aunque arriesgas mantener inconsistencias visuales en el resto del producto por 6 semanas más.", score: 5, type: "Lead (Priorización por impacto)" }
    ],
    explanation: "Cuando tickets de 'phishing' explotan y conversion cae 12%, la inconsistencia visual genera fricción real. **Priorizar Key Journeys** (Login/Nav en 2 semanas) arregla primera impresión crítica donde ocurre el scare. Big Bang Release pierde momentum de marketing por 8 semanas. Theme Switcher Temporal añade complejidad de mantenimiento."
  },
  {
    id: 'nocode_tools_designer_replacement_threat',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "En Slack #product, un PM comparte con orgullo: 'Lancé 3 landing pages esta semana con Framer, sin esperar a diseño'. Otros PMs reaccionan con emojis celebratorios. En #design-team, ves frustración: 'Las landing pages tienen tipografía inconsistente, espaciado raro y colores off-brand'. Un diseñador senior escribe: '¿Ya no necesitan diseñadores?'. Morale del equipo de diseño cae - en tu 1:1 semanal, 2 diseñadores expresan que 'se sienten reemplazados por templates'. Product argumenta: 'Antes esperábamos 2 semanas por una landing page, ahora hacemos 3/semana - es massive productivity gain'.",
    question: "¿Cómo respondes a la democratización de diseño vía no-code?",
    options: [
      { id: 'A', text: "**Prohibir No-Code:** Estableces policy de que todo diseño visual debe pasar por Design QA. Implementas approval process formal para mantener brand consistency.", score: 1, type: "Governance approach" },
      { id: 'B', text: "**Upskill + Design QA:** Entrenas PMs en design basics (tipografía, spacing, color) + estableces Design QA review al final. PMs hacen landing pages, designers se enfocan en producto core, aunque arriesgas que el proceso de QA genere fricción y PMs lo bypaseen eventualmente.", score: 5, type: "Lead (Leverage, no control)" },
      { id: 'C', text: "**Designers Learn No-Code:** Tu equipo aprende Framer para mantener control. Resuelve amenaza política pero designers gastan tiempo en trabajo de menor strategic value.", score: 3, type: "Defensivo (Mantiene control, pierde focus)" }
    ],
    explanation: "Cuando PMs lanzan 3 landing pages/semana vs 2 semanas de wait time pero calidad es off-brand, prohibir no-code frena productivity. **Upskill + Design QA** reconoce realidad: entrena PMs en **design basics**, establece guardrails (QA review), libera diseñadores para producto core. Prohibir No-Code frena velocity. Designers Learn No-Code es defensivo y pierde focus estratégico."
  },
  {
    id: 'ai_generated_assets_policy_chaos',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "En Design Review, descubres que un diseñador usó Midjourney para hero images en homepage (ya en producción, 500K views/mes). Legal envía alerta inmediata: 'Copyright unclear, posible lawsuit si alguien reclama'. Otro diseñador usó ChatGPT para microcopy de onboarding. Brand team escala a VP: 'Esto no refleja nuestra voz, suena genérico - destruye 2 años de brand building'. El diseñador defiende: 'Aceleré el trabajo 10x, todos en la industria usan AI'. Revisas Notion y descubres que no hay policy de AI establecida - cada quien decide por su cuenta. Necesitas definir reglas antes del All-Hands del viernes.",
    question: "¿Qué policy implementas para AI-generated assets?",
    options: [
      { id: 'A', text: "**AI Augmentation Guidelines:** AI permitido para inspiration/iteration, humano valida y edita output final. Todo AI-generated content requiere disclosure obligatorio en file metadata, aunque arriesgas que diseñadores perciban esto como micromanagement y burocracia innecesaria.", score: 5, type: "Lead (Harness AI con accountability)" },
      { id: 'B', text: "**Human Craft Excellence:** 'Solo trabajo 100% humano'. La autenticidad y originalidad son diferenciadores competitivos. Los mejores equipos confían en craft artesanal, no en atajos que commoditizan el diseño.", score: -1, type: "Filosofía de Craft (Pierde leverage)" },
      { id: 'C', text: "**Tools Autonomy:** Permitir que cada diseñador elija sus herramientas. Netflix y Spotify empoderan creativos con autonomía total. La velocidad y experimentación son prioridad - el legal risk es manageable con disclaimers estándar.", score: -1, type: "Empoderamiento Creativo (Abdica responsabilidad)" }
    ],
    explanation: "Cuando hero images de copyright unclear están en producción con 500K views/mes y microcopy destruye brand, autonomía sin reglas genera riesgo. **AI Augmentation Guidelines** (inspiration/iteration + validación humana + disclosure) captura productividad con controles. Human Craft Excellence pierde leverage de 10x velocidad. Tools Autonomy abdica responsabilidad legal y de marca."
  },
  {
    id: 'spatial_computing_roi_vs_desktop_reality',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Durante All-Hands post-WWDC, el CEO anuncia: 'Necesitamos Apple Vision Pro experience para Q3 launch'. Quedó impresionado con el keynote y quiere 'posicionar la compañía como innovadora en spatial computing'. Cuando revisas analytics, descubres que 0.01% de tu user base (200 usuarios de 2M) tienen el headset ($3500). Engineering estima 6 meses de desarrollo + $300K budget. Tu roadmap desktop tiene 12 features críticas esperando (payment redesign, onboarding v2, mobile responsive) que impactan 100% de usuarios. Marketing insiste: 'La cobertura de prensa de ser early en Vision Pro vale millones en PR'.",
    question: "¿Cómo priorizas innovation PR vs product reality?",
    options: [
      { id: 'A', text: "**Vision Pro Prototype for PR:** 2 semanas, 1 screen showcase inmersivo para press/demos. Cero production deployment. ROI = innovation brand positioning, no product revenue. Desktop roadmap continúa, aunque arriesgas que el CEO quede decepcionado al descubrir que es solo un demo no funcional.", score: 5, type: "Lead (PR vs Product separation)" },
      { id: 'B', text: "**First-Mover Advantage:** Apostar por el desarrollo completo. Ser los primeros en el Store nos garantiza featured placement de Apple y posicionamiento como líderes de innovación en la categoría.", score: 1, type: "Hype-driven (Ignora userbase real)" },
      { id: 'C', text: "**Market-Driven Decision:** Proponer esperar hasta que la adopción de Vision Pro alcance 5% antes de invertir. Priorizas market reality y ROI medible sobre early adoption speculative.", score: 3, type: "Conservador (Pierde momento)" }
    ],
    explanation: "Con 0.01% de userbase (200 de 2M) y 12 features críticas desktop esperando, desarrollo completo Vision Pro es vanidad. **Vision Pro Prototype** (2 semanas, 1 screen demo) captura narrativa de innovación con inversión mínima. First-Mover Advantage ignora userbase real. Market-Driven Decision pierde ventana de PR esperando 5% adoption."
  },
  {
    id: 'realtime_collaboration_feature_hype',
    category: "Innovación & AI",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "En quarterly roadmap review, Product presenta 'Figma-style real-time collaboration' como top priority después de user interviews con 3 enterprise prospects que mencionaron 'queremos colaboración en vivo como Figma'. Ingeniería estima 9 meses (CRDTs, conflict resolution, WebSockets infrastructure). Cuando revisas analytics actuales, descubres que solo 8% de usuarios colaboran sincrónicamente (mismo documento, mismo tiempo), mientras 92% trabaja async (comments, handoffs). Engineering advierte: '9 meses es opportunity cost masivo - tenemos 15 features con >50% adoption esperando'. Product contraargumenta: 'Los 3 prospects representan $2M ARR potential'.",
    question: "¿Cómo evalúas investment en real-time collab?",
    options: [
      { id: 'A', text: "**Async Collaboration First:** Comments + version history + notifications delivered en 6 semanas. ROI positivo para 92% de users. Real-time va a backlog condicional post-PMF validation, aunque arriesgas perder los 3 enterprise prospects ($2M ARR) que específicamente pidieron real-time.", score: 5, type: "Lead (Serve majority first)" },
      { id: 'B', text: "**Polling Sync:** Implementar sincronización por intervalos cortos (Short Polling) en lugar de WebSockets complejos. Logramos el 80% de la experiencia 'en vivo' con una fracción del costo de ingeniería.", score: 1, type: "Compromiso técnico (Decepciona)" },
      { id: 'C', text: "**Build Real-Time Correctly:** 9 meses, feature technically perfect como Figma. Beneficia 8% de users, opportunity cost massive en features con 10x mayor adoption potential.", score: 3, type: "Platform bet (Correcto pero costoso)" }
    ],
    explanation: "Cuando solo 8% usa sincrónico vs 92% async, y 9 meses de **opportunity cost** está en juego, real-time perfecto es costoso para uso marginal. **Async Collaboration First** (6 semanas) sirve a mayoría (92%), valida si $2M ARR realmente necesita real-time. Polling Sync promete experiencia pero decepciona. Build Real-Time Correctly es correcto pero costoso."
  },
  {
    id: 'blockchain_ux_beyond_crypto_wallets',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "En Planning Anual, el CTO propone 'blockchain-backed audit trail' para HIPAA compliance después de leer un whitepaper en conferencia. Argumenta: 'La inmutabilidad de blockchain garantiza compliance perfecto ante auditorías'. Engineering estima contratar ingeniero blockchain especializado ($180K/año salary premium) + 4 meses de desarrollo. Cuando consultas con Legal y tu Lead Engineer, descubren que PostgreSQL + append-only logs + cryptographic signatures cumple exactamente los mismos requisitos HIPAA a $0 infra cost extra (stack actual). Legal confirma: 'Ambas soluciones cumplen compliance'. CTO insiste que 'blockchain es el futuro y demuestra innovación técnica'.",
    question: "¿Cómo evalúas blockchain vs soluciones convencionales?",
    options: [
      { id: 'A', text: "**PostgreSQL Immutable Logs:** Cumple HIPAA, completamente auditable, zero blockchain complexity/cost. CTO se siente menos innovador pero CFO y Legal felices con solution probada, aunque arriesgas parecer 'resistente a innovación' frente al CTO.", score: 5, type: "Lead (Boring tech que funciona)" },
      { id: 'B', text: "**Blockchain Pilot:** 'Probemos 3 meses con consultant'. $50K gastados en POC, discover que PostgreSQL hacía lo mismo. CTO aprende (expensive lesson) pero al menos no full commitment.", score: 1, type: "Expensive learning (Predecible outcome)" },
      { id: 'C', text: "**Future-Proof Infrastructure:** Contratar ingeniero especializado ($180K/año) y desarrollar solución blockchain completa. La tecnología de vanguardia posiciona a la empresa como innovadora técnica. Amazon y Microsoft invierten en blockchain - seguir su liderazgo es estratégico.", score: -1, type: "Tech Leadership (Resume-driven development)" }
    ],
    explanation: "Cuando PostgreSQL cumple exactamente los mismos requisitos **HIPAA** a $0 infra cost vs blockchain a $180K/año, blockchain pilot es aprendizaje costoso con outcome predecible. **PostgreSQL Immutable Logs** es **boring technology** que cumple compliance sin complejidad. Blockchain Pilot desperdicia $50K. Future-Proof Infrastructure es **resume-driven development**."
  },
  {
    id: 'figma_ai_features_adoption_timing',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Figma lanzó 'AI auto-layout' y 'AI rename layers' en su Config conference. En Slack #design-team, 5 diseñadores exigen adopción inmediata: 'Esto nos ahorrará horas de cleanup manual'. Tienes 200+ archivos legacy de 3 años con layer naming caótico ('Rectangle 47 Copy 3') y structure inconsistente. Cuando haces beta testing con AI 'auto-fix' en 10 archivos legacy, descubres que corrompe 3 archivos (re-naming incorrecto que rompe Auto-layout existente, componentes desvinculados). El equipo argumenta: 'Es bleeding-edge, vale la pena el riesgo'. Engineering advierte que 'limpiar archivos corruptos toma más tiempo que el ahorro de AI'.",
    question: "¿Cómo manejas adoption de bleeding-edge features con legacy debt?",
    options: [
      { id: 'A', text: "**Pilot with New Projects Only:** AI features habilitadas solo en archivos nuevos. Files legacy se migran gradualmente cuando hay touch natural. Evitas caos masivo de re-naming batch, aunque arriesgas frustrar al equipo que quiere 'ahorrar horas de cleanup manual' en archivos legacy inmediatamente.", score: 5, type: "Lead (Incremental adoption)" },
      { id: 'B', text: "**Enable for Everyone Immediately:** Team presiona, habilitas global. AI chaos en legacy files, 3 días perdidos limpiando auto-renames incorrectos. Learn expensive lesson sobre early adoption.", score: 1, type: "FOMO-driven (Predictable chaos)" },
      { id: 'C', text: "**Training First, Enable Later:** 2 weeks de capacitación formal antes de rollout. Timing approach correcto pero equipo frustrado por delay de 'obvious beneficial feature'.", score: 3, type: "Conservative (Timing friction)" }
    ],
    explanation: "Cuando beta testing muestra 30% de corrupción en archivos legacy, habilitar AI globally genera caos predecible. **Pilot with New Projects Only** permite adopción incremental en terreno limpio sin corromper 200+ archivos históricos. Enable for Everyone Immediately genera cleanup costoso. Training First, Enable Later frustra al equipo con delay innecesario. **Tech Debt** requiere cautela."
  },
];
