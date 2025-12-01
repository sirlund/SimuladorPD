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
    scenario: "En el All-Hands mensual, el CEO anuncia públicamente (ante toda la empresa) que 'necesitamos AI en el producto para Q2, todos nuestros competidores ya lo tienen'. No especifica QUÉ problema debe resolver, solo que 'debe estar visible en la UI para mostrar en demos con inversores Series B'. El VP de Product te pregunta en privado 'qué podemos hacer rápido para cumplir'. Tienes 6 semanas.",
    question: "¿Cómo canalizas la presión de AI hype hacia implementación con valor real?",
    options: [
      { id: 'A', text: "Chatbot GPT Genérico: Implementas un chat assistant con GPT-4 en el dashboard. Es visible, cumple el deadline de 6 semanas y genera impacto visual inmediato en demos, aunque su utilidad real sea limitada.", score: 2, type: "Quick win (Expectativa > realidad)" },
      { id: 'B', text: "Problem-First Discovery: 2 semanas de entrevistas con power users para hallar tareas repetitivas automatizables. Presentas 3 casos de uso con ROI medible y pides 1Q para build.", score: 5, type: "Lead (Delayed gratification)" },
      { id: 'C', text: "AI-Enhanced Badges: Agregas badges 'Powered by AI' o 'Smart Suggestions' a features existentes que ya usan algoritmos básicos. Costo cero, marketing instantáneo, pero riesgo de backlash.", score: 0, type: "AI-washing (Fraude que genera backlash)" }
    ],
    explanation: "La C es fraude que genera backlash cuando usuarios descubren que no hay AI real. La A crea expectativa de 'asistente inteligente' que un chatbot genérico no cumple - decepciona. Requiere corage, pero un Lead encuentra casos de uso donde AI elimina trabajo tedioso genuino (B), aunque tome más tiempo."
  },
  {
    id: 'design_trend_neumorphism',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Un diseñador Mid quiere rediseñar el Dashboard con 'Neumorphism' (sombras sutiles 3D soft). Se ve espectacular en su prototipo de Dribbble. Sin embargo, al auditarlo descubres que tiene ratio de contraste de 2.8:1 en varios elementos (WCAG AA requiere 4.5:1) y es difícil de escanear visualmente.",
    question: "¿Cómo evalúas adoptar trends visuales?",
    options: [
      { id: 'A', text: "Híbrido de Marketing: Permites usar Neumorphism solo en secciones de Marketing (landing page, homepage pública) donde el impacto visual importa más, pero lo prohíbes en el producto core donde prima la usabilidad.", score: 4, type: "Compromiso (Inconsistencia)" },
      { id: 'B', text: "Innovación Visual: Lo permites. La diferenciación visual atrae usuarios y demuestra que el producto es moderno. Los problemas de contraste se pueden ajustar iterativamente después del lanzamiento basado en feedback.", score: 1, type: "Trend Chaser (Arriesga usabilidad)" },
      { id: 'C', text: "Accessibility First: Si el trend no puede cumplir WCAG AA sin compromisos estéticos severos, se rechaza. La moda no justifica excluir usuarios con baja visión o condiciones de luz. Los principios no son negociables.", score: 5, type: "Lead (Principios > Estética)" }
    ],
    explanation: "Los trends visuales vienen y van (Neumorphism ya está en decline), pero la accesibilidad es permanente y legal en muchas jurisdicciones. La B arriesga usabilidad por estética temporal. La A genera inconsistencia de marca. Un Lead sabe que un diseño que excluye usuarios es mal diseño (C)."
  },

  // --- NUEVAS PREGUNTAS: BLOQUE 31 - INNOVACIÓN & AI ---
  {
    id: 'ai_design_automation_job_threat',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Un diseñador junior está aterrado porque vio que Midjourney genera interfaces en segundos. Pregunta si 'los diseñadores van a ser reemplazados por AI'. El resto del equipo también está nervioso.",
    question: "¿Cómo recontextualizas el rol del diseñador ante la AI?",
    options: [
      { id: 'A', text: "Negación del Riesgo: 'La AI nunca podrá reemplazar la creatividad humana'. Intentas calmar al equipo negando la realidad tecnológica, lo que te hace perder credibilidad como líder.", score: 0, type: "Negación (Pierde credibilidad)" },
      { id: 'B', text: "Shift de Skills: 'La AI automatiza la ejecución, no la estrategia. Nuestro valor es entender al usuario y el negocio. Usen AI como asistente para acelerar, no como amenaza'.", score: 5, type: "Lead (Reframe Constructivo)" },
      { id: 'C', text: "Prohibición Defensiva: Prohibir terminantemente el uso de herramientas de AI en el equipo. Intentas proteger el 'craft' manual aislando al equipo de la evolución inevitable de la industria.", score: 0, type: "Ludita (Retrasa la evolución)" }
    ],
    explanation: "Negar la AI (A) o prohibirla (C) es miope. La opción B ayuda al equipo a entender que el diseño es problem-solving, no solo pixel-pushing."
  },
  {
    id: 'ai_personalization_ethical_limit',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Tienes capacidad de usar AI para personalizar la UI de cada usuario basado en su comportamiento histórico (colores, layout, CTAs). Aumentaría conversión un 15% pero requiere tracking intensivo y perfiles psicológicos.",
    question: "¿Hasta dónde llevas la personalización?",
    options: [
      { id: 'A', text: "Personalización Total: Implementarlo completamente por defecto. Si la conversión sube un 15%, el negocio lo justifica. Asumes que la mejora en UX compensa la invasión de privacidad.", score: 0, type: "Surveillance Capitalism (Sin ética)" },
      { id: 'B', text: "Personalización Transparente con Opt-In: Ofrecer la experiencia personalizada como opción que el usuario ELIGE activar, explicando claramente qué datos se usan y para qué.", score: 5, type: "Lead (Privacy by Design)" },
      { id: 'C', text: "Personalización Superficial: Limitarse a personalizar cosas menores como el tema (claro/oscuro) o el idioma. Evitas cualquier riesgo ético pero dejas todo el valor de negocio sobre la mesa.", score: 2, type: "Conservador (Deja valor sobre la mesa)" }
    ],
    explanation: "La personalización sin consentimiento (A) es manipulación. La opción B da poder al usuario de elegir si quiere esa experiencia, convirtiendo una táctica opaca en una feature transparente."
  },
  {
    id: 'ai_strategy_ux',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El Board exige una 'Estrategia de AI' para el press release del lunes (48 horas). El stock cayó 5% porque competidores anunciaron AI. El PM sugiere poner un chatbot genérico en la home 'para cumplir'. Tú sabes que es una experiencia pobre que alucina y frustra, pero la presión por 'anunciar algo' es máxima.",
    question: "¿Cuál es tu contra-propuesta de valor bajo presión de PR?",
    options: [
      { id: 'A', text: "Chatbot 'Beta' Controlado: Aceptas el chatbot pero lo etiquetas claramente como 'Experimental Beta' y limitas sus respuestas a temas de soporte pre-aprobados. Cumples con el PR del lunes minimizando riesgo de alucinaciones.", score: 3, type: "Compromiso defensivo" },
      { id: 'B', text: "Invisible AI (Magic Fill): Propones feature de 'Auto-completado de formularios con AI' (scan de PDF/imagen). Es menos vistoso que un chat, pero resuelve un dolor real (data entry). Haces un prototipo en video para el PR del lunes y prometes delivery en 4 semanas. Vendes 'Productividad Real' vs 'Hype'.", score: 5, type: "Lead (User-Centric AI)" },
      { id: 'C', text: "Fake Door Test: Anuncias 'AI Assistant Coming Soon' con un botón que recoge emails de interesados. Ganas tiempo para diseñar algo real mientras calmas al Board con el anuncio.", score: 2, type: "Vaporware (Riesgo de decepción)" }
    ],
    explanation: "El mayor valor de la AI en UX no es conversar (Chatbot), es eliminar trabajo. La opción B ofrece una narrativa de 'Productividad' que es superior al hype de 'Chat' y protege la UX a largo plazo."
  },
  {
    id: 'design_system_library_vs_custom',
    category: "Arquitectura de Sistemas",
    icon: <Layers className="w-6 h-6 text-cyan-600" />,
    scenario: "El VP de Engineering propone reemplazar tu Design System custom (3 años de desarrollo, 200+ componentes) con Shadcn/UI o MUI. Argumenta: 'Es más rápido shipear features, está mantenido por la comunidad, y reducimos el headcount de Design Systems Engineer'. Tu equipo invirtió años construyendo components específicos para el producto.",
    question: "¿Cómo defiendes o migras tu Design System ante presión de adoptar libraries third-party?",
    options: [
      { id: 'A', text: "Defender el Custom System: 'Nuestros componentes están optimizados para nuestro caso de uso específico, tienen mejor performance y reflejan nuestro brand únicamente'. Te niegas a migrar, argumentando que el control total justifica el costo de mantenimiento.", score: 2, type: "Purista (Ignora costos reales)" },
      { id: 'B', text: "Hybrid Approach: Migrar componentes genéricos (Buttons, Inputs) a la library, pero mantener componentes complejos y específicos del dominio (wizards, dashboards) custom. Reduces mantenimiento sin perder diferenciación.", score: 5, type: "Lead (Pragmatismo estratégico)" },
      { id: 'C', text: "Big Bang Migration: Planificar 6 meses para migrar TODO a Shadcn/UI. Paraizas el roadmap de features para hacer la transición completa y eliminar toda deuda técnica de una vez.", score: 1, type: "Big Bang (Mata momentum)" }
    ],
    explanation: "Defender todo (A) ignora que mantener un DS custom cuesta $120-180K/año. Migrar todo (C) paraliza el negocio. La opción B reconoce que botones genéricos no diferencian tu producto - usa la library para lo commodity, mantén custom lo que genera valor único."
  },
  {
    id: 'web3_wallet_integration_skepticism',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "El CEO quiere integrar wallets Web3 (MetaMask, WalletConnect) al producto SaaS B2B tradicional. Argumenta que 'es el futuro y nos posiciona como innovadores'. Zero clientes lo han pedido. El feature tomaría 2 meses de desarrollo y requiere educar a usuarios no-crypto sobre seed phrases y gas fees.",
    question: "¿Cómo evalúas integrar tecnología emergente sin demanda validada?",
    options: [
      { id: 'A', text: "Build for Future: Implementarlo inmediatamente. Los early adopters lideran el mercado. Si esperas a que los clientes lo pidan, ya es tarde - la competencia ya lo tendrá.", score: 1, type: "Especulativo (Desperdicia recursos)" },
      { id: 'B', text: "Fake Door + Survey: Agregar un botón 'Connect Wallet (Coming Soon)' que registra interés. Si <3% clickea, la hipótesis se invalida sin costo de desarrollo.", score: 5, type: "Lead (Evidence before investment)" },
      { id: 'C', text: "Hard No: 'Web3 es hype pasajero, no agregamos tecnología sin demand signal clear'. Te niegas categóricamente, potencialmente bloqueando verdadera innovación.", score: 3, type: "Conservador (Puede perder ventana)" }
    ],
    explanation: "Construir sin validación (A) desperdicia 2 meses en tech que usuarios B2B tradicionales no quieren/entienden. Rechazar por dogma (C) es cerrado. La opción B valida el interés real con costo cero antes de comprometer recursos."
  },
  {
    id: 'ar_product_visualization_roi',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "El equipo de E-commerce propone AR 'Try Before You Buy' (visualizar productos en tu espacio). Competidores (IKEA, Amazon) lo tienen. Estimación: 3 meses de desarrollo, solo funciona en iOS (60% de tu base es Android), requiere modelos 3D de 500+ SKUs. El ROI proyectado es 'aumento de confianza' (no medible directamente).",
    question: "¿Cómo priorizas features de tech emergente con ROI incierto?",
    options: [
      { id: 'A', text: "Feature Parity: Implementarlo porque competidores lo tienen. 'No podemos quedarnos atrás en la comparison matrix'. Priorizas la paridad perceptual sobre la evidencia de uso.", score: 2, type: "Defensivo (Costly parity)" },
      { id: 'B', text: "MVP Scoped: Hacer un pilot con 10 SKUs top-sellers y solo iOS. Medir conversion lift en esos productos antes de escalar a todo el catálogo. Aprendes con inversión controlada.", score: 5, type: "Lead (Learn before scale)" },
      { id: 'C', text: "Wait and See: 'Es muy early, esperamos a que la tecnología madure y sea cross-platform'. Evitas riesgo pero pierdes ventana de innovación.", score: 3, type: "Late follower" }
    ],
    explanation: "Feature parity no es estrategia (A). Esperar a 'perfección' (C) te hace late follower. La opción B es lean: invierte lo mínimo para aprender si AR realmente mueve el needle antes de commitear $150K+ y 3 meses."
  },
  {
    id: 'voice_ui_accessibility_vs_power_users',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Un advocate de accesibilidad propone Voice UI para workflows complejos multi-step (ejemplo: crear una Invoice de 15 campos). Es inclusivo para usuarios con discapacidades motoras, pero tus power users actuales prefieren keyboard shortcuts y workflows visuales batch. Voice es 3x más lento para ellos.",
    question: "¿Cómo balanceas accesibilidad con eficiencia de power users?",
    options: [
      { id: 'A', text: "Voice-First Mandatorio: Rediseñar el workflow para voice como primary interface. Forzar adoption para garantizar accesibilidad universal, aunque impacte velocidad de power users.", score: 1, type: "Idealista (Aliena core users)" },
      { id: 'B', text: "Dual Interface: Ofrecer voice como opción alternativa, manteniendo keyboard/visual como default. Los usuarios eligen su modalidad preferida según contexto.", score: 5, type: "Lead (Inclusive choice)" },
      { id: 'C', text: "Voice para Simple Tasks Only: Limitar voice a comandos básicos (search, filter). No invertir en voice para workflows complejos porque pocos lo usarían.", score: 3, type: "Pragmático (Limita alcance)" }
    ],
    explanation: "Forzar voice (A) destruye la productividad de usuarios existentes. Limitarlo solo a simple tasks (C) pierde el valor para quienes más lo necesitan. La opción B da poder de elección: accesibilidad para quien la necesita, eficiencia para quien la prefiere."
  },
  {
    id: 'ai_content_moderation_bias_risk',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "Legal propone usar AI (GPT-4 + moderation API) para auto-moderar user-generated content. Escala mejor que humanos ($40K/mes → $5K/mes). Trust & Safety advierte que AI moderation tiene tasa de falsos positivos del 8% (elimina contenido legítimo) y sesgo racial/cultural documentado.",
    question: "¿Cómo decides sobre AI moderation con beneficios claros pero riesgos éticos?",
    options: [
      { id: 'A', text: "Full Automation: Implementar AI moderation completamente. Ahorrar $35K/mes justifica el 8% de error. Usuarios afectados pueden apelar manualmente.", score: 1, type: "Cost-first (Ignora impacto humano)" },
      { id: 'B', text: "Human-in-the-loop: AI flagea content, pero humanos revisan antes de eliminar. Reduces costo a $15K/mes (vs $40K) y eliminas falsos positivos. Es el balance.", score: 5, type: "Lead (Augment, not replace)" },
      { id: 'C', text: "No AI: Mantener 100% moderación humana por principios éticos. Es más costoso y más lento, pero preservas total control de calidad y evitas sesgos sistémicos.", score: 2, type: "Purista (Costly long-term)" }
    ],
    explanation: "Full automation (A) ahorra dinero pero 8% de falsos positivos significa censurar usuarios legítimos sistemáticamente - erosiona confianza. Rechazar AI completamente (C) es costoso e insostenible a escala. Human-in-the-loop (B) usa AI como filtro, no como juez final."
  },
  {
    id: 'emerging_tech_timing_pmf_tension',
    category: "Estrategia de Producto",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Tu startup tiene Product-Market Fit básico pero no explosivo (growing 15% MoM, churn estable 5%). El CTO propone pivotar messaging a 'AI-First Platform' para fundraising. Argumenta que inversores solo funding startups con AI en el pitch. Requiere re-arquitecturar el producto para meter AI visible, desviando 3 meses del roadmap core.",
    question: "¿Cómo priorizas narrativa de fundraising vs consolidar PMF?",
    options: [
      { id: 'A', text: "AI-First Pivot: Priorizar el pivote de messaging y producto. Sin funding mueres en 8 meses - el PMF puede esperar. La narrativa de AI da 18 meses extra de runway.", score: 2, type: "Fundraising-driven (Distracción de PMF)" },
      { id: 'B', text: "PMF First, Then AI: Rechazar el pivot. Consolidar el PMF actual acelerándolo a 25% MoM. Con tracción sólida, fundraiseas sin necesidad de hype tech. Producto > Marketing.", score: 5, type: "Lead (Substance over hype)" },
      { id: 'C', text: "Dual Track: Mitad del equipo optimiza PMF, mitad construye 'AI features' para demo de fundraising. Intentas ambos pero divides foco en momento crítico.", score: 1, type: "Compromiso (Falla en ambos)" }
    ],
    explanation: "Los inversores funding hype, no sustancia (A), crean burbujas. Eventualmente te pedirán resultados reales. Dividir el equipo (C) garantiza hacer ambas cosas a medias. La opción B se enfoca: con 25% MoM growth y churn bajo, levantas funding sin trucos."
  },


  // Category 7: Branding & Visual Identity (1 question)
  {
    id: 'branding_rebrand_in_progress_legacy_components_confuse_users',
    category: "Branding & Visual Identity",
    icon: <Palette className="w-6 h-6 text-pink-700" />,
    scenario: "Rebrand en proceso (6 meses). Marketing ya tiene el nuevo look, pero el Producto sigue con el viejo. La inconsistencia visual hace que usuarios crean que están en un sitio de phishing al hacer login. El CEO quiere seguir empujando el nuevo brand en marketing, pero Producto no puede actualizarse más rápido.",
    question: "¿Cómo gestionas la inconsistencia visual durante un rebrand gradual?",
    options: [
      { id: 'A', text: "Big Bang Release: Pausar updates graduales y lanzar todo junto cuando esté listo. Elimina la inconsistencia pero retrasa el valor para marketing.", score: 4, type: "Big Bang (Requiere delay de marketing)" },
      { id: 'B', text: "Theme Switcher Temporal: Implementar un 'theme toggle' que permita a usuarios viejos seguir en el diseño anterior hasta que la migración esté 100% lista. Reduce confusión pero mantiene deuda técnica.", score: 3, type: "Técnico (Complejidad de mantenimiento)" },
      { id: 'C', text: "Priorizar Key Journeys: Actualizar solo el Login y Navigation bar inmediatamente para que coincidan con Marketing. El resto puede esperar. Arreglas la primera impresión crítica.", score: 5, type: "Lead (Priorización por impacto)" }
    ],
    explanation: "La opción C pierde todo el momentum de rebrand (Marketing ya lanzó campañas, PR, etc. - no puedes revertir). La A suena limpia pero forzar un 'Big Bang' en 400+ screens es altísimo riesgo de bugs (y requiere overtime brutal). La B es la jugada inteligente: aceptas que 6 meses de transición es inevitable, pero comunicas TRANSPARENTEMENTE a usuarios que están en medio de un rebrand. Un banner simple ('We're updating our look!') convierte confusión en anticipación. Es comunicación proactiva en vez de dejar que usuarios asuman phishing."
  },
  {
    id: 'nocode_tools_designer_replacement_threat',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "PMs descubrieron Framer/Webflow y están diseñando landing pages sin involucrar diseño. 'Ya no necesitamos diseñadores para esto - hacemos 3 páginas por semana ahora'. Tu equipo se siente amenazado, morale cae.",
    question: "¿Cómo respondes a la democratización de diseño vía no-code?",
    options: [
      { id: 'A', text: "Prohibir No-Code: Estableces policy de que todo diseño visual debe pasar por Design QA. Implementas approval process formal para mantener brand consistency.", score: 2, type: "Governance approach" },
      { id: 'B', text: "Upskill + Design QA: Entrenas PMs en design basics (tipografía, spacing, color) + estableces Design QA review al final. PMs hacen landing pages, designers se enfocan en producto core. Win-win.", score: 5, type: "Lead (Leverage, no control)" },
      { id: 'C', text: "Designers Learn No-Code: Tu equipo aprende Framer para mantener control. Resuelve amenaza política pero designers gastan tiempo en trabajo de menor strategic value.", score: 3, type: "Defensivo (Mantiene control, pierde focus)" }
    ],
    explanation: "Prohibir (A) falla porque no-code es demasiado accesible - enforcement es imposible. Que designers hagan landing pages (C) es usar talento senior en trabajo commodity. Upskilling PMs (B) reconoce que no todo diseño requiere diseñador senior - libera tu equipo para problemas complejos mientras PMs hacen páginas simples con guardrails."
  },
  {
    id: 'ai_generated_assets_policy_chaos',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "Diseñador usa Midjourney para hero images en homepage. Legal dice 'copyright unclear, posible lawsuit'. Otro usa ChatGPT para microcopy. Brand team furioso: 'no refleja nuestra voz, suena genérico'. No hay policy establecida.",
    question: "¿Qué policy implementas para AI-generated assets?",
    options: [
      { id: 'A', text: "AI Augmentation Guidelines: AI permitido para inspiration/iteration, humano valida y edita output final. Todo AI-generated content requiere disclosure obligatorio en file metadata.", score: 5, type: "Lead (Harness AI con accountability)" },
      { id: 'B', text: "Ban AI Completely: 'Solo trabajo 100% humano'. Proteges copyright y brand pero te quedas deliberately atrás vs competencia leveraging AI como productivity multiplier.", score: 2, type: "Purista (Pierde leverage)" },
      { id: 'C', text: "Laissez-Faire: 'Usen lo que quieran, confío en su criterio'. Legal liability sin control, brand inconsistency masiva, team usa AI como crutch sin desarrollar skills.", score: 1, type: "Negligente (Abdica responsabilidad)" }
    ],
    explanation: "Ban total (B) es insostenible cuando every competitor usa AI para 3x velocity. Laissez-faire (C) expone a company a legal risk (copyright de Midjourney es grey area) y brand degradation. AI augmentation (A) captura benefits (velocity, inspiration) con guardrails (human validation, disclosure)."
  },
  {
    id: 'spatial_computing_roi_vs_desktop_reality',
    category: "Innovación & AI",
    icon: <Brain className="w-6 h-6 text-teal-500" />,
    scenario: "CEO quiere 'Apple Vision Pro experience' para Q3 launch después de ver el keynote. 0.01% de users tienen el headset ($3500). Estimación: 6 meses, $300K development. Tu roadmap desktop tiene 12 features críticas esperando.",
    question: "¿Cómo priorizas innovation PR vs product reality?",
    options: [
      { id: 'A', text: "Vision Pro Prototype for PR: 2 semanas, 1 screen showcase inmersivo para press/demos. Cero production deployment. ROI = innovation brand positioning, no product revenue. Desktop roadmap continúa.", score: 5, type: "Lead (PR vs Product separation)" },
      { id: 'B', text: "Full Vision Pro Build: Sacrificas roadmap desktop y construyes experiencia espacial completa. App 'increíble' que literalmente 50 personas en el mundo pueden usar. Investors impressed, users frustrated.", score: 1, type: "Hype-driven (Ignora userbase real)" },
      { id: 'C', text: "Wait Until 5% Adoption: Proposal sensato basada en market reality, pero CEO quiere 'innovation leadership'. Pierdes momentum político interno y PR opportunity window.", score: 3, type: "Conservador (Pierde momento)" }
    ],
    explanation: "Full build (B) es vanity project que sirve a ego de CEO vs users reales. Wait-and-see (C) es racional pero timing matters - Vision Pro window de PR es NOW. Prototype for PR (A) es pragmático: captura innovation narrative con minimal investment, mantiene focus en roadmap que mueve metrics reales."
  },
  {
    id: 'realtime_collaboration_feature_hype',
    category: "Innovación & AI",
    icon: <Users className="w-6 h-6 text-purple-600" />,
    scenario: "Product quiere 'Figma-style real-time collaboration' en tu B2B tool después de user interviews con 3 enterprise prospects. Ingeniería: 9 meses (CRDTs, conflict resolution, WebSockets). Analytics actuales: solo 8% de users colaboran sincrónicamente, 92% trabaja async.",
    question: "¿Cómo evalúas investment en real-time collab?",
    options: [
      { id: 'A', text: "Async Collaboration First: Comments + version history + notifications delivered en 6 semanas. ROI positivo para 92% de users. Real-time va a backlog condicional post-PMF validation.", score: 5, type: "Lead (Serve majority first)" },
      { id: 'B', text: "Real-Time But Simplified: Implementas 'pseudo real-time' (polling cada 5s vs true WebSockets). Delivery en 3 meses pero se siente laggy, users decepcionados. Worst of both worlds.", score: 2, type: "Compromiso técnico (Decepciona)" },
      { id: 'C', text: "Build Real-Time Correctly: 9 meses, feature technically perfect como Figma. Beneficia 8% de users, opportunity cost massive en features con 10x mayor adoption potential.", score: 4, type: "Platform bet (Correcto pero costoso)" }
    ],
    explanation: "Pseudo real-time (B) promete algo que no cumple - latency frustra. Build perfecto (C) es válido como strategic platform bet PERO requiere conviction de que sync collab es future (vs current 8%). Async first (A) es pragmático: sirve al 92%, valida si demand de real-time justifica 9 meses."
  },
  {
    id: 'blockchain_ux_beyond_crypto_wallets',
    category: "Innovación & AI",
    icon: <Lock className="w-6 h-6 text-slate-700" />,
    scenario: "CTO propone 'blockchain-backed audit trail' para HIPAA compliance después de leer whitepaper. Ingeniero blockchain especializado costa $180K/año salary. Auditoría immutable puede hacerse con PostgreSQL + append-only logs a $0 infra cost extra.",
    question: "¿Cómo evalúas blockchain vs soluciones convencionales?",
    options: [
      { id: 'A', text: "PostgreSQL Immutable Logs: Cumple HIPAA, completamente auditable, zero blockchain complexity/cost. CTO se siente menos innovador pero CFO y Legal felices con solution probada.", score: 5, type: "Lead (Boring tech que funciona)" },
      { id: 'B', text: "Blockchain Pilot: 'Probemos 3 meses con consultant'. $50K gastados en POC, discover que PostgreSQL hacía lo mismo. CTO aprende (expensive lesson) pero al menos no full commitment.", score: 2, type: "Expensive learning (Predecible outcome)" },
      { id: 'C', text: "Full Blockchain Build: $180K engineer + 6 meses Development. Solución 'technically interesting' a problema que no existía. Resume-driven development para CTO, zero business value.", score: 0, type: "Resume-driven (Destruye budget)" }
    ],
    explanation: "Blockchain pilot (B) es $50K para aprender lo queググ research podía revelar gratis. Full build (C) es resume-driven development puro. PostgreSQL (A) es 'boring technology' que cumple requirements sin hype - esto ES lead thinking: solve problema, no chase trends."
  },
  {
    id: 'figma_ai_features_adoption_timing',
    category: "Tendencias de Diseño",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    scenario: "Figma lanzó 'AI auto-layout' y 'AI rename layers'. Tu equipo exige adopción inmediata. Tienes 200 archivos legacy con layer naming caótico y structure inconsistente. AI 'auto-fix' corrompe archivos existentes en beta testing.",
    question: "¿Cómo manejas adoption de bleeding-edge features con legacy debt?",
    options: [
      { id: 'A', text: "Pilot with New Projects Only: AI features habilitadas solo en archivos nuevos. Files legacy se migran gradualmente cuando hay touch natural. Evitas caos masivo de re-naming batch.", score: 5, type: "Lead (Incremental adoption)" },
      { id: 'B', text: "Enable for Everyone Immediately: Team presiona, habilitas global. AI chaos en legacy files, 3 días perdidos limpiando auto-renames incorrectos. Learn expensive lesson sobre early adoption.", score: 2, type: "FOMO-driven (Predictable chaos)" },
      { id: 'C', text: "Training First, Enable Later: 2 weeks de capacitación formal antes de rollout. Timing approach correcto pero equipo frustrado por delay de 'obvious beneficial feature'.", score: 3, type: "Conservative (Timing friction)" }
    ],
    explanation: "Enable immediately (B) ignora que AI features en beta + legacy debt = disaster predictable. Training first (C) es correcto en spirit pero 2 weeks es excessive para feature toggle. Pilot with new (A) da team chance de aprender con archivos clean mientras legacy permanence stable - incremental adoption es clave con bleeding-edge features."
  },
];
