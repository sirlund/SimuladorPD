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
 * Innovación, Ética Avanzada & Crisis
 */
export const block_06_innovation_ethics_crisis_questions = [
    // --- BLOQUE 14: INNOVACIÓN, TRENDS & TECH DEBT ---
    {
      id: 'ai_feature_hype_cycle',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "En el All-Hands mensual, el CEO anuncia públicamente (ante toda la empresa) que 'necesitamos AI en el producto para Q2, todos nuestros competidores ya lo tienen'. No especifica QUÉ problema debe resolver, solo que 'debe estar visible en la UI para mostrar en demos con inversores Series B'. El VP de Product te pregunta en privado 'qué podemos hacer rápido para cumplir'. Tienes 6 semanas.",
      question: "¿Cómo canalizas la presión de AI hype hacia implementación con valor real?",
      options: [
        { id: 'A', text: "Chatbot GPT Genérico: Implementas chat assistant con GPT-4 en esquina del dashboard. Los usuarios pueden 'preguntarle cosas' al producto. Es visible, cumple el deadline de 6 semanas, y suena innovador en pitch.", score: 2, type: "Quick win (Expectativa > realidad)" },
        { id: 'B', text: "Problem-First Discovery Sprint: 2 semanas de entrevistas con 15 power users identificando tareas manuales repetitivas que AI podría automatizar (categorización, data entry, predicciones, generación de reportes). Presentas 3 casos de uso con ROI medible. Pides 1Q para build correcto.", score: 5, type: "Lead (Delayed gratification)" },
        { id: 'C', text: "AI-Enhanced Badges: Agregas badges 'Powered by AI' o 'Smart Suggestions' a features existentes que ya usan algoritmos básicos (sorting, filtering, regex). Costo cero, marketing instantáneo.", score: 0, type: "AI-washing (Fraude que genera backlash)" }
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
    {
      id: 'legacy_code_rewrite_temptation',
      category: "Estrategia de Migración",
      icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
      scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
      question: "¿Cuál es tu postura como stakeholder de diseño?",
      options: [
        { id: 'A', text: "Apoyar el rewrite completo. Es momento de saldar la deuda técnica.", score: 1, type: "Ingenuo (Gran Bomba)" },
        { id: 'B', text: "Micro-Frontends o Modular Rewrite: Migrar pantalla por pantalla, permitiendo que convivan Angular y React temporalmente. Priorizar las vistas con más tráfico primero.", score: 5, type: "Lead (Incremental De-Risking)" },
        { id: 'C', text: "Oponerse completamente. Si funciona, no se toca. Priorizar features sobre refactoring.", score: 4, type: "Cortoplacista (Acumula más deuda)" }
      ],
      explanation: "Los 'Big Bang Rewrites' casi siempre fallan (A). La migración incremental (B) permite entregar valor mientras se moderniza sin apostar todo."
    },
    {
      id: 'design_system_v2_breaking_changes',
      category: "Arquitectura de Sistemas",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Quieres lanzar la V2 del Design System con cambios radicales (nuevos tokens, arquitectura de componentes). Ingeniería dice que romperá 200 archivos y tomará 3 sprints migrar todo.",
      question: "¿Cómo lanzas la V2 sin paralizar la operación?",
      options: [
        { id: 'A', text: "Pausar features por 3 sprints para hacer la migración completa de una vez.", score: 0, type: "Big Bang (Mata el roadmap)" },
        { id: 'B', text: "Versionado Coexistente: Publicar la V2 en un namespace separado (@design-system/v2), permitir que ambas versiones convivan, y migrar módulo por módulo durante 6 meses.", score: 5, type: "Lead (Graceful Migration)" },
        { id: 'C', text: "Lanzar solo los componentes nuevos en V2, manteniendo los viejos sin cambios.", score: 2, type: "Fragmentación (Dos sistemas eternos)" }
      ],
      explanation: "Forzar una migración masiva (A) detiene el negocio. La coexistencia temporal (B) permite evolucionar sin destruir lo que funciona."
    },

    // --- BLOQUE 15: ÉTICA, COMPLIANCE & DARK PATTERNS ---
    {
      id: 'gdpr_cookie_consent_ux',
      category: "Compliance & UX",
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      scenario: "Slack explota 9:14am. Legal Counsel (externa, €18K retainer): 'Banner actual NO cumple GDPR. Interpretación post Schrems II: necesitamos consentimiento EXPLÍCITO y GRANULAR antes de cargar cookies no-esenciales. Recomiendo modal bloqueante con checkboxes por categoría (Analytics, Marketing, Funcional) + texto de 140 palabras mínimo. Inspiración: CookieBot enterprise templates'. Marketing responde con data: A/B test de competidor mostró que modal bloqueante = -14% sign-ups, -22% free trials. CFO calcula: en tráfico mensual (45K visitors) eso es ~€28K MRR perdido por trimestre. Deadline: GDPR audit de cliente enterprise (€180K/año) en 12 días - si no pasamos, deal se cancela.",
      question: "¿Qué implementación propones que balancee compliance legal verificable vs impacto en conversión?",
      options: [
        { id: 'A', text: "Modal Bloqueante Optimizado (Compliance-First): Implementas modal que bloquea contenido PERO diseñas para mínima fricción: pre-selección inteligente de 'Esenciales + Funcionales' (no Marketing), copy reducido a 95 palabras, diseño claro con jerarquía visual, botón primario 'Aceptar Selección'. Legal aprueba. Estimado: -8% conversion (€16K MRR/Q de impacto). Riesgo cero de multa GDPR (hasta €20M). Ganas deal de €180K.", score: 5, type: "Lead (Compliance con UX optimizada)" },
        { id: 'B', text: "Banner Sticky Persistente con Consent Implícito: Banner bottom no-bloqueante con texto compacto (50 palabras) + 'Al continuar navegando aceptas cookies. Personalizar'. Visible siempre hasta que usuario actúe. Argumentas a Legal que 'navegación continuada = consent activo' (interpretación de ePrivacy Directive). Riesgo: Legal externa advierte que esto NO pasa auditoría GDPR estricta - 30% chance de que cliente enterprise rechace. Si rechazan: pierdes €180K + reputación.", score: 2, type: "Grey zone con riesgo legal medible" },
        { id: 'C', text: "Hybrid Contextual Consent: Banner suave inicial NO bloqueante (solo cookies esenciales cargadas). Cuando usuario intenta action que REQUIERE tracking (ej: 'Ver Demo', 'Descargar Whitepaper'), ENTONCES aparece micro-modal contextual: 'Para esta acción necesitamos Analytics cookies'. Granular y just-in-time. Legal concern: complejidad de implementación + riesgo de cargar cookies antes de consent en algunos edge cases. Dev estima 3 semanas (pierdes deadline de 12 días).", score: 4, type: "Innovador pero timing arriesgado" }
      ],
      explanation: "Contexto crítico: €180K deal + audit en 12 días elimina opción C (timing). Banner sticky (B) tiene 30% riesgo de fallar audit = perder deal completo, apostando €180K para salvar €16K/Q. Modal bloqueante optimizado (A) es el único que garantiza pasar audit + cerrar deal, aceptando costo medible de conversion. Cuando hay deadline legal + deal en riesgo, compliance verificable > optimización de conversion marginal."
    },
    {
      id: 'addictive_design_notifications',
      category: "Ética de Diseño",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Q2 Planning. VP Growth presenta OKR: 'DAU +28% en 90 días para cumplir Series B metrics'. Propone: push notification strategy con 3 tiers de mensajes. Tier 1 (Día 1-2 inactivo): 'Tienes 2 reportes nuevos esperando'. Tier 2 (Día 3-5): 'Tu equipo revisó 4 dashboards esta semana - no te quedes atrás'. Tier 3 (Día 6+): 'Han pasado 6 días. ¿Necesitas ayuda para empezar?'. Cita case study: Duolingo aumentó retention 18% con notificaciones progresivamente persuasivas (tienen 500M users). Head of Data muestra: current DAU 8,400 → necesitamos 10,750 para Q2. Churn actual D7: 38%. Budget de Product Marketing para otros canales: $0 (cortado). Push es única palanca disponible.",
      question: "¿Qué estrategia de notificaciones propones que balancee engagement necesario vs principios éticos?",
      options: [
        { id: 'A', text: "Persuasive Notifications con Guardrails: Implementas Tier 1-2 de la propuesta (utilidad + social proof suave) PERO eliminas Tier 3 (guilt-tripping directo). Añades frequency cap: máximo 3 notif/semana, opt-out fácil en settings. A/B test muestra +12% DAU (alcanzas ~9,400, no 10,750). Te quedas corto del OKR pero mantienes línea ética. VP Growth frustrado: 'Dejamos dinero sobre la mesa'.", score: 4, type: "Pragmático con límites éticos" },
        { id: 'B', text: "Engagement Basado en Valor Real: Rechazas mensajes emocionales/sociales completamente. Solo notificaciones tied a EVENTOS reales: 'Reporte X generado', 'Alguien te mencionó', 'Anomalía detectada en Dashboard Y'. Propones inversión en mejor onboarding para reducir churn en origen (requiere 4 semanas). Estimado: +6% DAU en Q2 (alcanzas 8,900). Fallas OKR por 17%. Riesgo: Board cuestiona si Product está alineado con growth needs.", score: 5, type: "Lead (Valor genuino, acepta costo político)" },
        { id: 'C', text: "Full Strategy con Ethics Disclosure: Implementas Tier 1-3 completo (incluyendo guilt-driven) porque los números lo exigen. PERO añades transparencia: en Settings, sección 'Notification Philosophy' explicando 'Usamos recordatorios motivacionales para ayudarte a formar hábitos'. Usuario puede optar out. Argumentas: si eres transparente sobre persuasión, no es manipulación - es nudging honesto. Proyección: alcanzas OKR (10,800 DAU). Dilema: ¿transparencia justifica persuasión emocional?", score: 2, type: "Utilitarista con transparency washing" }
      ],
      explanation: "No hay respuesta perfecta aquí - es dilema genuino. Full strategy (C) logra OKR pero 'transparency' no absuelve manipulación emocional (es ethics washing). Valor puro (B) es íntegro pero falla OKR, arriesga credibilidad de Product ante Board - puede costar seat en estrategia futura. Middle ground (A) sacrifica parte del goal pero mantiene guardrails. Contexto importa: si Series B metrics son existenciales (runway corto), cálculo cambia vs empresa estable."
    },
    {
      id: 'data_collection_transparency',
      category: "Privacidad & Trust",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      scenario: "Roadmap Planning, Q3. VP Product Data presenta: 'Necesitamos visibility de UX friction. Propongo FullStory (session replay + heatmaps + click tracking). Costo: $24K/año. ROI: identificamos 3 friction points en Q1 que costaron ~$85K en churn'. Muestra demo: puedes VER exactamente dónde usuarios se confunden, qué leen, dónde abandonan. Head of Growth apoya: 'Sin esto diseñamos a ciegas'. Legal interviene: 'FullStory es GDPR-compliant si anonimizamos PII y tenemos consent mechanism. Recomiendo opt-out con toggle en Privacy Settings'. Contexto: competidor principal usa Hotjar (confirmado en job posts). Actualmente tienes solo Google Analytics básico (pageviews, eventos custom). UX team de 2 personas - necesitan data para priorizar esfuerzo.",
      question: "¿Qué nivel de tracking implementas considerando insights necesarios vs autonomía del usuario?",
      options: [
        { id: 'A', text: "Session Replay Opt-Out con Visibility: Implementas FullStory con opt-out claro en Privacy Settings + banner one-time al primer login: 'Usamos session recordings para mejorar UX. Puedes desactivarlo en Settings'. Legal aprueba (GDPR-compliant con consent implícito). Estimado: 87% usuarios dejan default ON. Obtienes insights críticos. Crítica: aprovechas inercia - la mayoría no lee Settings. ¿Es consent genuino?", score: 4, type: "Pragmático (Legal pero éticamente gris)" },
        { id: 'B', text: "Business Events + Heatmaps Agregados: Rechazas session replay individual (demasiado invasivo). Implementas solo heatmaps agregados (clicks/scrolls sin identificar usuarios) + eventos de negocio críticos (sign-ups, checkouts, feature adoption). Costo: $8K/año (Hotjar Basic). Visibilidad: 60% de lo que FullStory ofrece. Pérdida: no puedes debuggear user journeys individuales cuando alguien reporta bug de UX confuso.", score: 5, type: "Lead (Privacy-conscious, acepta menor visibility)" },
        { id: 'C', text: "Full Tracking con Opt-In Activo: Implementas FullStory PERO requieres opt-in explícito post-signup: modal 'Ayúdanos a mejorar compartiendo datos de uso anónimos' con explicación de qué trackeas (session replays, clicks, scrolls). Incentivo: early access a beta features. Legal ama (consent explícito = zero risk). Estimado: solo 18-25% opt-in. Pierdes 75% de insights potenciales. VP Data: 'Sample size insuficiente para decisiones estadísticas'.", score: 2, type: "Privacy-first con trade-off severo de insights" }
      ],
      explanation: "Dilema real entre visibility para hacer buen diseño vs respeto a privacidad. Opt-in puro (C) es más ético pero sample size de 18% mata utilidad estadística - terminas diseñando con datos no-representativos (solo early adopters/fanáticos). Opt-out (A) es legal y efectivo pero explota inercia. Heatmaps agregados (B) balance: mantienes privacy individual pero pierdes capacidad de debuggear journeys específicos. Contexto: equipo pequeño (2 UX) hace que insights eficientes sean críticos."
    },
    {
      id: 'fake_social_proof',
      category: "Growth Hacking vs Ética",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "El Head of Growth está bajo presión porque los números del Q vienen bajos. Te pide implementar 'Dark Patterns' en la web: 'Pon un contador que diga que solo quedan 2 cupos, aunque sea mentira. Necesitamos urgencia'. Dice que 'todos lo hacen'.",
      question: "¿Qué haces ante una solicitud de diseño no ético?",
      options: [
        { id: 'A', text: "Obedecer a regañadientes: Implementas el contador falso para ayudar al equipo de Growth, pero te prometes quitarlo cuando los números mejoren.", score: 1, type: "Cómplice" },
        { id: 'B', text: "Pushback con Alternativa Real: 'No diseñamos mentiras, eso daña la marca. PERO podemos mostrar datos reales de urgencia: 'X personas vieron esto hoy'. Genera el mismo FOMO pero es honesto'. Ofreces solución al problema de negocio sin cruzar la línea ética.", score: 5, type: "Lead (Ética con Solución)" },
        { id: 'C', text: "Escalar a HR: Reportas al Head of Growth por comportamiento no ético.", score: 2, type: "Exagerado (Rompe relaciones)" }
      ],
      explanation: "Decir solo 'no' (C) te aísla. Obedecer (A) corrompe el producto. La opción B ofrece una solución al problema de negocio (necesidad de urgencia) usando mecanismos éticos (social proof real)."
    },

    // --- BLOQUE 16: CRISIS, FAILURES & LEARNING ---
    {
      id: 'production_bug_major_incident',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
      scenario: "Un cambio de diseño 'menor' (quitar un paso de confirmación) causó que 50,000 usuarios enviaran datos privados a una URL pública por error. Es un Data Leak masivo. Legal está redactando notificaciones de brecha. El CTO dice públicamente: 'Diseño insistió en quitar la confirmación para reducir fricción'. Todos te miran.",
      question: "¿Cómo gestionas la crisis de reputación y responsabilidad?",
      options: [
        { id: 'A', text: "Defensa Agresiva: 'Ingeniería aprobó el PR. QA lo testeó. Es culpa compartida'. Te defiendes atacando el proceso de revisión.", score: 1, type: "Tóxico (Guerra Civil)" },
        { id: 'B', text: "Extreme Ownership + Remediation: 'Fue mi decisión de diseño. Asumo la responsabilidad. Aquí está el plan para revertir la UI en 1 hora, notificar a usuarios afectados con empatía, y auditar todos los flujos similares para mañana'.", score: 5, type: "Lead (Liderazgo en Crisis)" },
        { id: 'C', text: "Silencio: Dejar que Legal maneje las comunicaciones y esconderte hasta que pase la tormenta.", score: 0, type: "Cobarde" }
      ],
      explanation: "En una crisis grave, quien asume la responsabilidad y ofrece un plan (B) se convierte en el líder. Culpar a otros (A) o esconderse (C) destruye tu carrera. Ownership genera confianza incluso en el error."
    },
    {
      id: 'failed_redesign_metrics_drop',
      category: "Data-Driven Design",
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      scenario: "El rediseño que lideraste se lanzó hace 2 semanas y el revenue cayó 12%. El VP de Producto está preocupado y pregunta si deberíamos revertir (rollback) a la versión anterior. El equipo está desmoralizado.",
      question: "¿Cuál es tu estrategia de respuesta?",
      options: [
        { id: 'A', text: "Rollback Inmediato: 'Si bajó el revenue, volvamos atrás ya'. Detienes la pérdida pero pierdes el aprendizaje y el trabajo de meses.", score: 2, type: "Pánico (Reactivo)" },
        { id: 'B', text: "Diagnóstico Quirúrgico: 'No revirtamos todo aún. Analicemos DÓNDE está la caída (¿checkout? ¿landing? ¿mobile?). Hagamos hotfixes rápidos en los puntos de fricción'. Defiendes la iteración basada en datos, no el pánico.", score: 5, type: "Lead (Iteración Científica)" },
        { id: 'C', text: "Defender la Visión: 'Es la curva de aprendizaje, los usuarios se acostumbrarán'. Te niegas a aceptar que algo está mal.", score: 1, type: "Negación (Arrogante)" }
      ],
      explanation: "Una caída del 12% es seria pero no terminal. Revertir todo (A) es desperdicio. Negar (C) es peligroso. La opción B busca arreglar lo que está roto sin tirar lo que funciona."
    },
    {
      id: 'user_backlash_social_media',
      category: "Community Management",
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      scenario: "Cambiaste el modelo de precios y la UI para hacerlo más difícil de cancelar. Un influencer de TikTok hizo un video criticándolo y el rating en el App Store bajó de 4.8 a 3.2 en dos días. Marketing está pidiendo respuestas.",
      question: "¿Cómo respondes a la crisis de reputación?",
      options: [
        { id: 'A', text: "Ignorar el Ruido: 'Son trolls de internet, se cansarán en una semana'. No haces nada.", score: 1, type: "Negligente" },
        { id: 'B', text: "Corrección y Transparencia: Publicas un update reconociendo que la UI de cancelación quedó 'demasiado oculta', la simplificas en el próximo release, y respondes a las reviews explicando el cambio. Recuperas confianza con acción.", score: 5, type: "Lead (Escucha y Actúa)" },
        { id: 'C', text: "Respuesta Defensiva: Publicas un comunicado explicando que 'cumplimos con los términos de servicio'.", score: 2, type: "Sordo (Tone-deaf)" }
      ],
      explanation: "Cuando el rating de la App cae drásticamente, afecta la adquisición futura. Ignorar (A) o defenderse (C) empeora todo. La única salida es corregir el producto y comunicar la corrección (B)."
    },
    {
      id: 'layoff_team_morale',
      category: "Bienestar del Equipo",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Hubo un layoff del 20%. Tu equipo sobrevivió, pero tus 2 mejores diseñadores Senior te renuncian la semana siguiente: 'No confiamos en el liderazgo, esto es un barco hundiéndose'. Si se van, el roadmap colapsa. No tienes presupuesto para contraofertas.",
      question: "¿Cómo retienes talento sin dinero en un ambiente tóxico?",
      options: [
        { id: 'A', text: "Apelación Emocional: 'El equipo los necesita, no nos abandonen ahora'. (Suena manipulador).", score: 1, type: "Desesperado" },
        { id: 'B', text: "Re-Recruiting con Honestidad: 'Tienen razón, la situación es mala. Pero aquí está el plan para los próximos 6 meses. Si se quedan, les doy libertad total para liderar X y Y. Si en 6 meses no mejora, yo mismo les ayudo a encontrar otro trabajo'.", score: 5, type: "Lead (Alianza Profesional)" },
        { id: 'C', text: "Dejarlos ir: 'Si no quieren estar aquí, mejor que se vayan'. (Te quedas sin equipo y fallas el roadmap).", score: 2, type: "Orgulloso" }
      ],
      explanation: "Sin dinero, solo tienes confianza y oportunidad. La opción B crea una 'alianza': honestidad brutal sobre la situación + autonomía extrema + promesa de ayuda futura. Tratas a los empleados como agentes libres, no como sirvientes."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 17 - GESTIÓN DE CRISIS & LIDERAZGO ---
    {
      id: 'crisis_investor_demo_failure',
      category: "Gestión de Crisis & Liderazgo",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "Es el día del demo crítico con inversionistas para cerrar la Serie A. 30 minutos antes, el ambiente de staging se cae por un problema de infraestructura. El equipo de ingeniería dice que tomará 2 horas arreglarlo. Los inversionistas ya están en camino.",
      question: "¿Cuál es tu plan de contingencia inmediato?",
      options: [
        { id: 'A', text: "Retrasar la reunión 2 horas enviando una excusa corporativa ('Conflicto de agenda del CEO'). Esperas que staging se arregle para hacer el demo perfecto.", score: 1, type: "Mentiroso (Pierde credibilidad)" },
        { id: 'B', text: "Demo en Producción con Datos Reales: Usas el ambiente live con usuarios reales, preparas un script tight para minimizar riesgos y asignas a alguien del equipo a monitorear errores en tiempo real. La autenticidad puede ser una ventaja.", score: 5, type: "Lead (Improvisa con Confianza)" },
        { id: 'C', text: "Convertir el demo en una presentación de slides con capturas de pantalla y videos pregrabados del producto.", score: 3, type: "Backup Plan (Menos impacto)" }
      ],
      explanation: "Mentir a inversionistas (A) es suicida si se descubre. Los slides (C) pierden el impacto del producto vivo. La opción B muestra resiliencia operativa y confianza en el producto real."
    },
    {
      id: 'crisis_key_designer_quits',
      category: "Gestión de Crisis & Liderazgo",
      icon: <Users className="w-6 h-6 text-red-600" />,
      scenario: "Tu diseñador estrella, que lidera el rediseño completo del sistema de pagos (60% completado), renuncia abruptamente por una oferta de FAANG. Tiene 2 semanas de notice. El deadline con el cliente no se puede mover.",
      question: "¿Cómo gestionas la transición de conocimiento?",
      options: [
        { id: 'A', text: "Contraoferta agresiva: Igualas o superas el salario de FAANG para retenerlo esas 8 semanas críticas.", score: 0, type: "Desesperado (Insostenible)" },
        { id: 'B', text: "Knowledge Transfer Intensivo: Las próximas 2 semanas son SOLO documentación, grabación de Looms, sesiones de pair design con el siguiente senior, y traspaso estructurado. Nada de features nuevas.", score: 5, type: "Lead (Minimiza Pérdida)" },
        { id: 'C', text: "Contratar un freelance senior urgentemente para que trabaje en paralelo estas 2 semanas y aprenda observando.", score: 2, type: "Costoso (Curva de aprendizaje)" }
      ],
      explanation: "Contraatacar con dinero (A) genera resentimiento si cedes bajo presión. La opción B maximiza la transferencia de conocimiento estructurado en el tiempo limitado disponible."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 18 - DATA-DRIVEN DESIGN ---
    {
      id: 'data_contradictory_qualitative_quantitative',
      category: "Data-Driven Design",
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      scenario: "El research cualitativo (entrevistas con 15 usuarios) dice que odian el nuevo flujo de checkout. Pero el A/B test cuantitativo muestra un aumento del 8% en conversión. Product dice 'los números no mienten'.",
      question: "¿Cómo concilias la contradicción?",
      options: [
        { id: 'A', text: "Priorizar la data cuantitativa. La conversión subió, eso es lo único que importa para el negocio.", score: 0, type: "Miope (Ignora calidad)" },
        { id: 'B', text: "Análisis de Cohortes: Investigar si el aumento de conversión viene de nuevos usuarios (que no conocen la versión vieja) vs usuarios recurrentes. Podríamos estar optimizando para una sola vez a costa de la retención.", score: 5, type: "Lead (Profundidad Analítica)" },
        { id: 'C', text: "Mantener el diseño nuevo pero abrir un backlog de mejoras UX basadas en el feedback cualitativo para iterar después.", score: 2, type: "Compromiso (No resuelve la tensión)" }
      ],
      explanation: "Un incremento de conversión puede ser a corto plazo si degrada la experiencia. La opción B busca entender QUIÉN convierte más y si hay trade-offs ocultos en retención o NPS."
    },
    {
      id: 'data_analytics_instrumentation_debt',
      category: "Data-Driven Design",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Lanzaste 5 features nuevas en los últimos 2 meses, pero ninguna tiene tracking de eventos implementado. No puedes medir su impacto. Ingeniería dice que 'no hubo tiempo' para agregar analytics.",
      question: "¿Cómo prevenis que esto vuelva a pasar?",
      options: [
        { id: 'A', text: "Crear un ticket de 'Analytics Sprint' para instrumentar todo retroactivamente.", score: 3, type: "Reactivo (Nunca se prioriza)" },
        { id: 'B', text: "Definition of Done: Cambiar el proceso para que NINGUNA feature se considere 'completada' sin eventos de tracking implementados y validados en staging. Bloqueo de QA.", score: 5, type: "Lead (Cambio de Proceso)" },
        { id: 'C', text: "Contratar un Data Analyst dedicado para que sea responsable de implementar el tracking.", score: 3, type: "Bandaid (No resuelve cultura)" }
      ],
      explanation: "Arreglar retroactivamente (A) nunca se hace. Contratar (C) no cambia la cultura. La opción B hace que el tracking sea un requerimiento no negociable del flujo de desarrollo."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 19 - PRODUCTO VS VENTAS ---
    {
      id: 'sales_promise_impossible_timeline',
      category: "Producto vs Ventas",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "El equipo de Ventas prometió a un cliente Enterprise una integración con Salesforce 'en 3 semanas' para cerrar un contrato de $800K. El tech lead dice que realistamente toma 3 meses construirla bien.",
      question: "¿Cómo manejas la desconexión entre expectativa y realidad?",
      options: [
        { id: 'A', text: "Forzar al equipo a hacer un MVP sucio en 3 semanas trabajando overtime para no perder el contrato.", score: 0, type: "Burnout Factory (Deuda técnica brutal)" },
        { id: 'B', text: "Renegociación con el Cliente: Ventas y Product van juntos a ofrecer un plan de entrega por fases (integración básica en 3 semanas, features completas en 3 meses). Transparencia > Promesas rotas.", score: 5, type: "Lead (Realismo Profesional)" },
        { id: 'C', text: "Buscar una solución no-code temporal (Zapier, Make) para cumplir la promesa mientras construyes la integración real en paralelo.", score: 2, type: "Parche Creativo (Funcional pero no escalable)" }
      ],
      explanation: "Prometer lo imposible y luego fallar (A) destruye la confianza del cliente Y del equipo. La opción B gestiona expectativas con honestidad profesional desde el principio."
    },
    {
      id: 'sales_discount_feature_negotiation',
      category: "Producto vs Ventas",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "Ventas ofreció un 40% de descuento anual a un cliente a cambio de construir una feature específica de reporting que ellos necesitan. El cliente aceptó. Ahora Product debe entregarla en 2 meses sin haber participado en la negociación.",
      question: "¿Cómo estableces límites para que esto no vuelva a pasar?",
      options: [
        { id: 'A', text: "Aceptar el compromiso pero escalar con el CEO para prohibir que Ventas prometa features sin aprobación de Product.", score: 3, type: "Reactivo (Cierra la puerta tarde)" },
        { id: 'B', text: "Proceso de 'Deal Desk': Crear un comité obligatorio de Product + Engineering + Sales que debe aprobar CUALQUIER customización antes de que se cierre el contrato. Ventas no puede prometer unilateralmente.", score: 5, type: "Lead (Proceso de Gobernanza)" },
        { id: 'C', text: "Construir la feature pero cobrar internamente a Ventas el costo de oportunidad (qué features del roadmap se retrasan por esto).", score: 3, type: "Político (No previene)" }
      ],
      explanation: "Quejarse después (A) no cambia nada. La opción B institucionaliza un proceso donde Product es stakeholder obligatorio en negociaciones que afectan el roadmap."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 20 - GESTIÓN DE TALENTO ---
    {
      id: 'talent_flight_risk_retention',
      category: "Gestión de Talento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Detectas señales de que un diseñador Mid-Level está siendo reclutado activamente (actualización de LinkedIn, reuniones misteriosas, menos engagement). Es un momento crítico del proyecto y no puedes darte el lujo de perderlo.",
      question: "¿Cómo intervienes preventivamente?",
      options: [
        { id: 'A', text: "Ofrecerle un aumento de sueldo preemptivo del 15% y un título de Senior para retenerlo.", score: 0, type: "Parche Costoso (Sin diagnóstico)" },
        { id: 'B', text: "Conversación de Career Path: 1-on-1 honesto preguntando directamente por su satisfacción, visión de carrera y qué necesitaría para quedarse. Diagnosticar si es $ o crecimiento o cultura.", score: 5, type: "Lead (Escucha Activa)" },
        { id: 'C', text: "Asignarle el proyecto más interesante del roadmap para re-engancharlo emocionalmente.", score: 2, type: "Incentivo Táctico (Temporal)" }
      ],
      explanation: "Tirar dinero (A) sin entender la causa subyacente no funciona. La opción B diagnostica la raíz del problema (¿es compensación, aburrimiento, falta de crecimiento?) antes de actuar."
    },
    {
      id: 'talent_diversity_hiring_pressure',
      category: "Gestión de Talento",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      scenario: "RRHH presiona para que contrates con 'cuotas de diversidad' (50% mujeres, minorías). Tuviste 8 candidatos en el último proceso: 6 hombres excelentes, 2 mujeres con skills levemente por debajo del nivel que buscas.",
      question: "¿Cómo balanceas meritocracia y diversidad?",
      options: [
        { id: 'A', text: "Contratar al mejor candidato puro basado en skills, sin considerar género. La meritocracia no debe comprometerse.", score: 0, type: "Ignora el sesgo sistémico" },
        { id: 'B', text: "Pipeline Fix: Rechazar a todos y reiniciar el proceso de reclutamiento expandiendo las fuentes (comunidades de mujeres en diseño, bootcamps diversos) para tener un pool más balanceado desde el inicio.", score: 5, type: "Lead (Ataca el Problema Raíz)" },
        { id: 'C', text: "Contratar a una de las candidatas mujeres y darle un plan de onboarding intensivo para nivelarla rápidamente.", score: 2, type: "Diversity Hire (Riesgoso para ambos)" }
      ],
      explanation: "Si tu pipeline siempre es 80% hombres, el sesgo está en el sourcing, no en la evaluación. La opción B ataca la raíz del problema antes de tener que elegir."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 21 - GESTIÓN DE STAKEHOLDERS ---
    {
      id: 'stakeholder_ceo_personal_opinion',
      category: "Gestión de Stakeholders",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "El VP de Producto volvió de una conferencia obsesionado con 'Conversational UI'. Te pide reemplazar la navegación principal con un chat. Tienes 500k usuarios que dependen de la navegación actual. Él insiste: 'Es el futuro, hay que innovar'.",
      question: "¿Cómo gestionas una idea ejecutiva disruptiva pero riesgosa?",
      options: [
        { id: 'A', text: "Obedecer: Diseñas el chat como pide. 'Donde manda capitán no manda marinero'.", score: 1, type: "Mercenario" },
        { id: 'B', text: "Fake Door / Beta Test: 'Hagamos un experimento. Pongamos el chat como opción beta en el dashboard y midamos cuánta gente lo usa vs la navegación'. Usas data para validar (o matar) la idea sin decir 'no' de frente.", score: 5, type: "Lead (Data como Escudo)" },
        { id: 'C', text: "Escribir un ensayo de UX: Le mandas artículos de Nielsen Norman Group explicando por qué el chat es mala navegación. (Probablemente no los lea).", score: 2, type: "Académico" }
      ],
      explanation: "Pelear opiniones con teoría (C) suele fallar contra ejecutivos emocionados. La opción B canaliza la emoción hacia un experimento controlado. Si nadie usa el chat, la data mata la idea por ti."
    },
    {
      id: 'stakeholder_legal_vs_ux_tension',
      category: "Gestión de Stakeholders",
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      scenario: "Legal exige que cada feature tenga un disclaimer de 2 párrafos visible antes de usar. UX Research muestra que nadie lee esos textos y aumentan la fricción un 30%. Legal no cede porque 'es riesgo regulatorio'.",
      question: "¿Cómo medias entre compliance y experiencia?",
      options: [
        { id: 'A', text: "Sided with Legal. El riesgo legal es más importante que la fricción de UX.", score: 0, type: "Rendición (UX destruida)" },
        { id: 'B', text: "Workshop de Soluciones: Reúnes a Legal + UX + Product para co-diseñar alternativas que cumplan ambos objetivos (ej: disclaimer colapsado con checkbox 'He leído', tooltips contextuales, videos cortos).", score: 5, type: "Lead (Facilitador de Soluciones)" },
        { id: 'C', text: "Mostrar el disclaimer solo en el primer uso y luego ocultarlo para usuarios recurrentes.", score: 2, type: "Workaround (Legal puede objetar)" }
      ],
      explanation: "Legal y UX no son enemigos si colaboran. La opción B crea un espacio de problem-solving conjunto en lugar de guerra de trincheras."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 22 - ESTRATEGIA DE PRODUCTO ---
    {
      id: 'strategy_platform_vs_feature_focus',
      category: "Estrategia de Producto",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "El VP de Producto quiere convertir el producto en una 'plataforma' con APIs públicas y marketplace. Actualmente tienen 500 clientes y el core product aún tiene bugs básicos de usabilidad sin resolver. El equipo de ingeniería está dividido.",
      question: "¿Cuál es tu recomendación estratégica al VP?",
      options: [
        { id: 'A', text: "Apoyar la visión de plataforma. Pensar en grande es lo que diferencia a los ganadores.", score: 0, type: "Visionario sin fundamento" },
        { id: 'B', text: "Product-Market Fit First: Argumentar que antes de ser plataforma, deben dominar su caso de uso core. Las plataformas se construyen DESPUÉS de tener tracción sólida, no antes.", score: 5, type: "Lead (Secuenciación Estratégica)" },
        { id: 'C', text: "Proponer construir solo las APIs públicas (lo más fácil) y posponer marketplace/white-label.", score: 2, type: "Compromiso (Diluye el foco igual)" }
      ],
      explanation: "Muchas startups mueren intentando ser plataforma demasiado pronto. La opción B secuencia: primero dominar el vertical, luego expandir la superficie de ataque."
    },
    {
      id: 'strategy_competitor_feature_parity',
      category: "Estrategia de Producto",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      scenario: "El competidor principal acaba de lanzar 10 features nuevas en un mega-release. Product Manager entra en pánico y quiere copiar todas las features para 'no quedarse atrás' en la matriz de comparación.",
      question: "¿Cómo evalúas qué copiar y qué ignorar?",
      options: [
        { id: 'A', text: "Auditoría de Churn: Analizar si perdiste clientes citando esas features específicas. Si no hay evidencia de pérdida, no es urgente.", score: 5, type: "Lead (Evidence-Based)" },
        { id: 'B', text: "Copiar las 3-4 features más visibles para actualizar la página de comparación y calmar a Ventas.", score: 2, type: "Defensivo (Feature parity race)" },
        { id: 'C', text: "Ignorar al competidor completamente y seguir tu roadmap original. El foco es más importante que la reacción.", score: 2, type: "Dogmático (Puede ser arriesgado)" }
      ],
      explanation: "Copiar por pánico (B) te convierte en follower. Ignorar completamente (C) puede ser ingenuo. La opción A usa data de churn para priorizar racionalmente."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 23 - DESIGN OPS ---
    {
      id: 'designops_figma_file_chaos',
      category: "Design Ops",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "El workspace de Figma es un caos: 400 archivos sin nombrar bien, duplicados, versiones antiguas mezcladas con nuevas. Nadie encuentra nada y pierden 30 minutos diarios buscando archivos.",
      question: "¿Cómo implementas orden sin frenar la operación?",
      options: [
        { id: 'A', text: "Asignar 1 semana completa de 'Cleanup Sprint' donde nadie diseña, solo organizan archivos.", score: 0, type: "Utópico (Nunca se aprueba)" },
        { id: 'B', text: "Naming Convention + Archivo + Governance: Crear una estructura de carpetas obligatoria, template de nombres, y asignar 'File Owners'. Migrar archivos activos gradualmente mientras archivas los legacy.", score: 5, type: "Lead (Sistema Sostenible)" },
        { id: 'C', text: "Contratar un Design Ops Manager para que se encargue de mantener el orden.", score: 2, type: "Delegación (Funciona si tienes $)" }
      ],
      explanation: "El cleanup masivo (A) nunca pasa. La opción B crea un sistema con roles y reglas que previene que el caos vuelva a crecer."
    },
    {
      id: 'designops_version_control_disaster',
      category: "Design Ops",
      icon: <RotateCcw className="w-6 h-6 text-orange-500" />,
      scenario: "Un diseñador borró accidentalmente 3 días de trabajo en Figma y la funcionalidad de Version History no va tan atrás. No hay backup. El deadline es mañana.",
      question: "¿Cómo prevenis que vuelva a pasar?",
      options: [
        { id: 'A', text: "Implementar un plugin de auto-backup diario de archivos críticos a Google Drive.", score: 5, type: "Lead (Safety Net)" },
        { id: 'B', text: "Capacitar al equipo en el uso correcto de Version History y hacer recordatorios semanales.", score: 2, type: "Educativo (No previene accidentes)" },
        { id: 'C', text: "Duplicar manualmente los archivos importantes cada viernes como política de equipo.", score: 2, type: "Manual (No escalable)" }
      ],
      explanation: "Confiar en la memoria humana (B, C) falla eventualmente. La opción A automatiza el backup para que sea imposible perder trabajo sin importar errores humanos."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 24 - CULTURA DE DISEÑO ---
    {
      id: 'cultura_credit_stealing_conflict',
      category: "Cultura de Diseño",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Un diseñador junior hizo el 80% del trabajo de un feature exitoso, pero en el All-Hands el diseñador senior que lo supervisó presentó el caso de estudio sin mencionar al junior. El junior está furioso.",
      question: "¿Cómo manejas esta violación de cultura?",
      options: [
        { id: 'A', text: "Hablar en privado con el senior para pedirle que dé crédito la próxima vez.", score: 2, type: "Suave (Sin consecuencia)" },
        { id: 'B', text: "Intervención Pública + Privada: Enviar un mensaje en Slack dando crédito explícito al junior post-presentación. Luego hablar con el senior sobre valores de equipo y hacer clear que repetirlo tiene consecuencias.", score: 5, type: "Lead (Restaura Justicia + Educación)" },
        { id: 'C', text: "Dejar que ellos lo resuelvan entre sí como adultos.", score: 0, type: "Evasivo (Normaliza el abuso)" }
      ],
      explanation: "Robar crédito es tóxico y debe corregirse visiblemente. La opción B restaura la justicia públicamente y educa al senior sobre las consecuencias de esa conducta."
    },
    {
      id: 'cultura_remote_office_divide',
      category: "Cultura de Diseño",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      scenario: "El equipo está dividido: 3 diseñadores en la oficina (que colaboran todo el día) y 2 remotos (que sienten que se pierden decisiones y contexto). Empieza a haber resentimiento.",
      question: "¿Cómo nivelar el campo de juego?",
      options: [
        { id: 'A', text: "Pedir a todos que vuelvan a la oficina para mantener la cohesión.", score: 0, type: "Autoritario (Pierde talento remoto)" },
        { id: 'B', text: "Remote-First Practices: TODAS las decisiones se documentan por escrito (Notion/Slack), TODAS las reuniones se graban, y se establece una regla: si hay 1 persona remota, TODOS se conectan desde su laptop (no sala de conferencia).", score: 5, type: "Lead (Nivel Playing Field)" },
        { id: 'C', text: "Rotar: 1 semana al mes todos trabajan remoto para que los de oficina 'entiendan la experiencia'.", score: 2, type: "Experimental (No resuelve estructura)" }
      ],
      explanation: "Forzar presencialidad (A) es regresivo. La opción B cambia los defaults del equipo para que el trabajo asíncrono y documentado sea el estándar, no la excepción."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 25 - COLABORACIÓN CON INGENIERÍA ---
    {
      id: 'engineering_technical_constraints_creative',
      category: "Colaboración con Ingeniería",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Diseñaste un scroll parallax hermoso para la landing page. El tech lead dice que 'mata la performance en mobile' y los tests muestran un aumento de 2 segundos en el load time.",
      question: "¿Qué priorizas: la experiencia visual o la performance?",
      options: [
        { id: 'A', text: "Mantener el parallax. Los 2 segundos extra valen la pena por la diferenciación visual.", score: 0, type: "Ego sobre Datos (UX rota)" },
        { id: 'B', text: "Progressive Enhancement: Implementar el parallax solo en desktop/tablets y usar una versión estática optimizada en mobile. Adaptas la experiencia al contexto técnico.", score: 5, type: "Lead (Pragmatismo Contextual)" },
        { id: 'C', text: "Simplificar el diseño completamente para que funcione igual en todas las plataformas sin parallax.", score: 3, type: "Conservador (Pierde diferenciación)" }
      ],
      explanation: "2 segundos de load en mobile matan la conversión. La opción B reconoce que no todas las plataformas necesitan la misma implementación si las capacidades técnicas difieren."
    },
    {
      id: 'engineering_designer_code_boundary',
      category: "Colaboración con Ingeniería",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      scenario: "Un diseñador del equipo aprendió React y empezó a hacer pull requests directamente al código para 'agilizar' el proceso. Los desarrolladores se quejan de que el código no sigue los estándares y genera bugs.",
      question: "¿Cómo estableces límites saludables?",
      options: [
        { id: 'A', text: "Prohibir que diseñadores toquen el código. Cada rol tiene su expertise.", score: 1, type: "Silo Rígido (Mata colaboración)" },
        { id: 'B', text: "Code Review Obligatorio: Permitir que los diseñadores contribuyan código, pero SIEMPRE debe pasar por revisión de un developer senior antes de mergear. Upskilling con guardrails.", score: 5, type: "Lead (Colaboración con Calidad)" },
        { id: 'C', text: "Crear un repositorio separado de 'Design Experiments' donde puedan codear libremente sin afectar producción.", score: 3, type: "Sandbox (Desconectado de impacto real)" }
      ],
      explanation: "Prohibir (A) mata la iniciativa. La opción B permite el aprendizaje y contribución mientras mantiene la calidad del código a través de procesos existentes."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 26 - BIENESTAR DEL EQUIPO ---
    {
      id: 'bienestar_toxic_positivity_culture',
      category: "Bienestar del Equipo",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      scenario: "Después de un trimestre brutal con 3 deadlines imposibles, la empresa organiza una 'Fiesta de Celebración' obligatoria. El equipo está exhausto y preferiría descansar. RRHH insiste en que 'es importante para la cultura'.",
      question: "¿Cómo abordas la desconexión entre la intención y la realidad?",
      options: [
        { id: 'A', text: "Forzar la asistencia del equipo. Es solo 2 horas y puede ayudar a relajarse.", score: 1, type: "Toxic Positivity (Ignora agotamiento)" },
        { id: 'B', text: "Negociar con RRHH: Hacer la 'celebración' opcional y ofrecer como alternativa un día libre compensatorio para quienes prefieran descansar. Respeto por la autonomía.", score: 5, type: "Lead (Escucha Real)" },
        { id: 'C', text: "Asistir tú mismo pero decirle al equipo en privado que no vayan si no quieren.", score: 3, type: "Hipocresía (Mensaje confuso)" }
      ],
      explanation: "Forzar celebraciones cuando el equipo está quemado (A) es contraproducente. La opción B reconoce que diferentes personas se recuperan de formas distintas."
    },
    {
      id: 'bienestar_perfectionism_junior',
      category: "Bienestar del Equipo",
      icon: <Coffee className="w-6 h-6 text-brown-600" />,
      scenario: "Una diseñadora junior está re-haciendo un componente por quinta vez porque 'no se ve perfecto'. Ha pasado 2 días en algo que debía tomar 4 horas. El perfeccionismo la está paralizando.",
      question: "¿Cómo intervienes para desbloquearla?",
      options: [
        { id: 'A', text: "Dejarla continuar. El perfeccionismo es señal de estándares altos.", score: 1, type: "Enabler (Refuerza el vicio)" },
        { id: 'B', text: "Timeboxing + 'Good Enough': Establecer un límite de 1 hora más y luego shippearlo como está. Enseñarle que 'shipped imperfect' > 'perfect pero nunca lanzado'.", score: 5, type: "Lead (Enseña Pragmatismo)" },
        { id: 'C', text: "Tomar el archivo tú mismo y finalizarlo para quitarle la presión.", score: 3, type: "Rescate (No aprende)" }
      ],
      explanation: "El perfeccionismo no gestionado mata la productividad. La opción B enseña que el progreso iterativo es más valioso que la perfección paralizante."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 27 - ARQUITECTURA DE SISTEMAS ---
    {
      id: 'arquitectura_monorepo_vs_separate_systems',
      category: "Arquitectura de Sistemas",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "Tienes 3 productos diferentes (Web App, Mobile App, Marketing Site) cada uno con su propio Design System en Figma. Empiezan a divergir visualmente y duplicas trabajo. Ingeniería pregunta si deberían compartir componentes.",
      question: "¿Cuál es tu estrategia de consolidación?",
      options: [
        { id: 'A', text: "Mantenerlos separados. Cada producto tiene necesidades diferentes.", score: 1, type: "Silos (Duplicación eterna)" },
        { id: 'B', text: "Design System Core + Product Extensions: Crear una librería base compartida con primitivos (colores, tipografía, componentes básicos) y permitir que cada producto extienda con sus propios componentes específicos.", score: 5, type: "Lead (Shared Foundation)" },
        { id: 'C', text: "Forzar un único Design System para todo. Total estandarización.", score: 3, type: "Rígido (No refleja realidad)" }
      ],
      explanation: "Sistemas completamente separados (A) duplican trabajo. Un único sistema (C) no reconoce necesidades específicas. La opción B balancea consistencia y flexibilidad."
    },
    {
      id: 'arquitectura_atomic_design_complexity',
      category: "Arquitectura de Sistemas",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      scenario: "Implementaste Atomic Design (Átomos > Moléculas > Organismos > Templates). Ahora el equipo pasa más tiempo debatiendo 'si X es una molécula o un organismo' que diseñando. La taxonomía se volvió un obstáculo.",
      question: "¿Cómo simplificas sin perder estructura?",
      options: [
        { id: 'A', text: "Mantener Atomic Design pero hacer un workshop de alineación para que todos entiendan la clasificación correcta.", score: 0, type: "Dogmático (El problema es el sistema)" },
        { id: 'B', text: "Simplificación Pragmática: Colapsar a solo 2 categorías (Primitives + Components). Si un equipo gasta más energía en la taxonomía que en el diseño, la taxonomía está sobrediseñada.", score: 5, type: "Lead (Utilidad > Pureza)" },
        { id: 'C', text: "Eliminar toda la estructura y dejar que cada quien organice como quiera.", score: 0, type: "Caos (Pierde la arquitectura)" }
      ],
      explanation: "Atomic Design puede ser over-engineering para muchos equipos. La opción B reconoce que el sistema debe servir al equipo, no al revés."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 28 - ÉTICA DE DISEÑO ---
    {
      id: 'etica_gambling_mechanics_gamification',
      category: "Ética de Diseño",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "Product quiere agregar 'loot boxes' o recompensas aleatorias al producto para aumentar engagement. El mecanismo es idéntico al de apps de gambling. Los usuarios objetivo incluyen menores de edad.",
      question: "¿Dónde trazas la línea ética?",
      options: [
        { id: 'A', text: "Implementarlo. Gamification es una técnica válida de producto y está en todas las apps exitosas.", score: 0, type: "Cómplice (Explotación)" },
        { id: 'B', text: "Rechazo con Alternativa: Rechazar mecánicas de azar y proponer sistemas de progreso predecibles (badges, niveles basados en logros) que recompensen la acción sin crear adicción.", score: 5, type: "Lead (Engagement Ético)" },
        { id: 'C', text: "Aceptarlo pero con un disclaimer de 'Este feature puede crear hábitos'.", score: 0, type: "Disclaimer washing (No cambia nada)" }
      ],
      explanation: "Las mecánicas de gambling están diseñadas para crear adicción. La opción B busca engagement genuino sin explotar vulnerabilidades psicológicas, especialmente en menores."
    },
    {
      id: 'etica_ai_generated_fake_testimonials',
      category: "Ética de Diseño",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Marketing te pide usar testimonials generados con AI (fotos falsas de 'clientes') porque no tienen suficientes testimoniales reales aún. Argumentan que 'representan la experiencia que los usuarios TENDRÍAN'.",
      question: "¿Qué implementas?",
      options: [
        { id: 'A', text: "Usar los testimoniales AI. Son indistinguibles de reales y ayudan a la conversión.", score: 0, type: "Fraude (Destruye confianza)" },
        { id: 'B', text: "No testimoniales > Testimoniales Falsos: Diseñar la landing sin testimoniales o usar 'early adopter reviews' reales aunque sean solo 2. La autenticidad construye confianza a largo plazo.", score: 5, type: "Lead (Integridad)" },
        { id: 'C', text: "Usar los testimoniales AI pero agregar un disclaimer pequeño de 'Representaciones ilustrativas'.", score: 0, type: "Transparencia falsa (Sigue siendo engañoso)" }
      ],
      explanation: "Los usuarios eventualmente descubren los testimoniales falsos. Perder esa confianza es devastador. La opción B construye credibilidad desde la honestidad."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 29 - VALIDACIÓN ÁGIL ---
    {
      id: 'validacion_prototype_vs_pixel_perfect',
      category: "Validación Ágil",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      scenario: "Necesitas validar un concepto nuevo con usuarios. Un diseñador quiere hacer un prototipo de alta fidelidad pixel-perfect que tomará 3 días. Otro propone hacer un wireframe interactivo en Figma que toma 3 horas.",
      question: "¿Qué nivel de fidelidad es apropiado para validación temprana?",
      options: [
        { id: 'A', text: "Alta fidelidad. Los usuarios no pueden opinar correctamente sobre wireframes feos.", score: 0, type: "Perfeccionista (Desperdicia tiempo)" },
        { id: 'B', text: "Fidelidad Mínima Testeable: Wireframes interactivos son suficientes para validar flujo y lógica. La estética se pulirá DESPUÉS de validar que el concepto funciona.", score: 5, type: "Lead (Lean Validation)" },
        { id: 'C', text: "Mid-fidelity: Un punto medio con algunos colores y tipografía pero sin pulir cada pixel.", score: 2, type: "Compromiso (Toma más tiempo)" }
      ],
      explanation: "En validación temprana, gastar 3 días en fidelidad visual es prematuro. La opción B valida la hipótesis crítica (¿el flujo funciona?) antes de invertir en pulido."
    },
    {
      id: 'validacion_research_synthesis_paralysis',
      category: "Validación Ágil",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      scenario: "Después de 15 entrevistas con usuarios, tienes 200 páginas de notas y insights. El equipo está esperando tus recomendaciones pero te sientes abrumado con tanta data y no sabes cómo sintetizarla rápidamente.",
      question: "¿Cómo priorizas los insights para acción inmediata?",
      options: [
        { id: 'A', text: "Tomarte 1 semana para hacer un reporte exhaustivo con todos los findings, gráficos y quotes.", score: 0, type: "Análisis paralítico (Pierde momentum)" },
        { id: 'B', text: "Impact-Effort Matrix: Identificar los 3 insights que más se repitieron Y que tienen solución viable. Presentarlos en 1 slide con 'Top 3 Actions' en lugar de reporte completo.", score: 5, type: "Lead (Actionable Insights)" },
        { id: 'C', text: "Hacer una sesión de co-análisis con el equipo completo para que todos lean las notas juntos.", score: 2, type: "Democrático (Lento)" }
      ],
      explanation: "El research que no se convierte en acción es desperdicio. La opción B prioriza velocidad de decisión sobre exhaustividad académica."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 30 - MENTORÍA & CRECIMIENTO ---
    {
      id: 'mentoria_delegation_fear_control',
      category: "Mentoría & Crecimiento",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Tienes un proyecto crítico y puedes delegarlo a tu Mid-Level designer o hacerlo tú mismo. Delegar le daría crecimiento pero existe riesgo de que no alcance tu estándar de calidad y tengas que rehacer parte del trabajo.",
      question: "¿Cómo balanceas desarrollo de talento vs riesgo?",
      options: [
        { id: 'A', text: "Hacerlo tú mismo. El proyecto es demasiado importante para arriesgarlo.", score: 0, type: "Cuello de Botella (No escala)" },
        { id: 'B', text: "Delegación con Checkpoints: Asignar el proyecto pero establecer 3 puntos de revisión (Concepto, Wireframes, Alta Fidelidad) para dar feedback temprano y corregir curso sin perder control total.", score: 5, type: "Lead (Coaching Estructurado)" },
        { id: 'C', text: "Delegarlo completamente sin supervisión para demostrar confianza.", score: 2, type: "Naive Trust (Alto riesgo)" }
      ],
      explanation: "Delegar sin estructura (C) es negligencia. Hacerlo todo tú (A) impide el crecimiento del equipo. La opción B permite aprendizaje con safety nets."
    },
    {
      id: 'mentoria_career_path_ic_vs_management',
      category: "Mentoría & Crecimiento",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "Un diseñador Senior te dice que quiere ser manager 'porque es el siguiente paso natural'. Pero observas que es introvertido, odia las reuniones y brilla cuando diseña solo. Sospechas que busca el título, no el rol.",
      question: "¿Cómo lo orientas?",
      options: [
        { id: 'A', text: "Darle la oportunidad de ser manager. La única forma de saber si le gusta es probarlo.", score: 0, type: "Experimento costoso (Arruina al diseñador Y al equipo)" },
        { id: 'B', text: "Presentar IC Track: Explicarle que existe un camino de Staff Designer / Principal Designer (Individual Contributor senior) con igual compensación y prestigio que management, enfocado en craft y liderazgo técnico.", score: 5, type: "Lead (Career Path Clarity)" },
        { id: 'C', text: "Proponerle liderar un proyecto como 'Design Lead' temporal para probar sus habilidades de coordinación.", score: 2, type: "Piloto (Confunde Lead con Manager)" }
      ],
      explanation: "Muchos diseñadores creen que management es la única progresión. La opción B abre los ojos a un track IC que premia excelencia sin forzar un cambio de rol que no es natural."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 31 - INNOVACIÓN & AI ---
    {
      id: 'ai_design_automation_job_threat',
      category: "Innovación & AI",
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      scenario: "Un diseñador junior está aterrado porque vio que Midjourney genera interfaces en segundos. Pregunta si 'los diseñadores van a ser reemplazados por AI'. El resto del equipo también está nervioso.",
      question: "¿Cómo recontextualizas el rol del diseñador ante la AI?",
      options: [
        { id: 'A', text: "Minimizar el miedo: 'La AI nunca podrá reemplazar la creatividad humana'. Negar la amenaza.", score: 0, type: "Negación (Pierde credibilidad)" },
        { id: 'B', text: "Shift de Skills: 'La AI automatiza la ejecución, no la estrategia. Nuestro valor está en entender al usuario, el negocio y el contexto. Usen AI como asistente de ejecución, no como amenaza.'", score: 5, type: "Lead (Reframe Constructivo)" },
        { id: 'C', text: "Prohibir el uso de herramientas de AI en el equipo para proteger el craft.", score: 0, type: "Ludita (Retrasa la evolución)" }
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
        { id: 'A', text: "Implementarlo completamente. 15% de conversión es enorme y la personalización es el futuro.", score: 0, type: "Surveillance Capitalism (Sin ética)" },
        { id: 'B', text: "Personalización Transparente con Opt-In: Ofrecer la experiencia personalizada como una opción que el usuario ELIGE activar después de explicarle qué datos se usan y cómo.", score: 5, type: "Lead (Privacy by Design)" },
        { id: 'C', text: "Solo personalizar cosas menores (tema claro/oscuro, idioma) sin tocar comportamiento psicológico.", score: 2, type: "Conservador (Deja valor sobre la mesa)" }
      ],
      explanation: "La personalización sin consentimiento (A) es manipulación. La opción B da poder al usuario de elegir si quiere esa experiencia, convirtiendo una táctica opaca en una feature transparente."
    },

    // --- NUEVAS PREGUNTAS: BLOQUE 32 - ESTRATEGIA DE MIGRACIÓN ---
    {
      id: 'migracion_forced_upgrade_user_backlash',
      category: "Estrategia de Migración",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      scenario: "Lanzas una versión 2.0 del producto con nueva arquitectura y fuerza a todos los usuarios a migrar. El 30% de los power users están furiosos porque removiste features 'legacy' que ellos usaban diariamente.",
      question: "¿Cómo gestionas la migración forzada?",
      options: [
        { id: 'A', text: "Mantener la posición: 'La V2 es superior, eventualmente se acostumbrarán'. Ignorar el feedback.", score: 0, type: "Arrogante (Churn garantizado)" },
        { id: 'B', text: "Feature Parity Roadmap: Escuchar qué features específicos extrañan, evaluar cuáles son críticos, y comprometerse públicamente a reintroducirlos en V2 en los próximos 2 meses.", score: 5, type: "Lead (Responsive Migration)" },
        { id: 'C', text: "Ofrecer acceso a la V1 legacy en paralelo para quienes no quieran migrar.", score: 2, type: "Parche (Duplica mantenimiento)" }
      ],
      explanation: "Forzar sin escuchar (A) aliena a tus usuarios más leales. Mantener V1 (C) es costoso. La opción B escucha pain real y construye un plan de mitigación concreto."
    },
    {
      id: 'migracion_sunset_product_line',
      category: "Estrategia de Migración",
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      scenario: "La empresa decidió discontinuar un producto que tiene 500 usuarios activos (pequeño pero leal). Tienes 6 meses para migrarlos al producto principal o perderlos. El producto principal no tiene feature parity.",
      question: "¿Cuál es tu estrategia de sunset?",
      options: [
        { id: 'A', text: "Apagar el producto en la fecha anunciada. Los usuarios tuvieron 6 meses de aviso.", score: 0, type: "Corporate Cruelty (Churn 100%)" },
        { id: 'B', text: "Migration Concierge: Asignar recursos para construir las 3 features más críticas que faltan, crear guías de migración personalizadas y ofrecer sesiones 1-on-1 de onboarding al nuevo producto para clientes de alto valor.", score: 5, type: "Lead (Retención Activa)" },
        { id: 'C', text: "Ofrecer descuentos del 50% en el nuevo producto a los usuarios afectados como compensación.", score: 2, type: "$$$ (No resuelve el gap de features)" }
      ],
      explanation: "500 usuarios pequeños pueden incluir clientes de alto valor o advocates. La opción B trata el sunset como un problema de retención, no solo como un apagado técnico."
    },

    // --- PHASE 2 BATCH 1: PRESUPUESTO & HIRING ---
    {
      id: 'budget_layoffs_vs_tools',
      category: "Presupuesto & Hiring",
      icon: <Briefcase className="w-6 h-6 text-red-700" />,
      scenario: "El Head of Operations te pide recortar $60K anuales del presupuesto de diseño. Tienes dos opciones dolorosas: (1) No renovar el contrato de tu mejor diseñador Freelance (que maneja todo el overflow de Marketing), o (2) Cancelar licencias de herramientas clave (Maze, Dovetail, Lottie) y bajar Figma a plan básico, afectando la velocidad del equipo core.",
      question: "¿Qué recortas para cumplir la meta?",
      options: [
        { id: 'A', text: "Cortar al Freelance: Proteges las herramientas del equipo core. El equipo tendrá que absorber el trabajo de Marketing, lo que causará burnout, pero mantienes la infraestructura.", score: 2, type: "Protege Tools (Sobrecarga al equipo)" },
        { id: 'B', text: "Cortar Herramientas: Mantienes al Freelance para evitar burnout. El equipo usará herramientas gratuitas o procesos manuales. Es más lento, pero mantienes la capacidad humana (bandwidth).", score: 5, type: "Lead (People > Tools)" },
        { id: 'C', text: "Negociar reducción parcial: Cortar mitad de herramientas y reducir horas del freelance. Nadie queda contento.", score: 3, type: "Compromiso (Mediocre)" }
      ],
      explanation: "Las herramientas se recuperan, el talento y la moral no. La opción B prioriza mantener las manos en el teclado (capacidad operativa) sobre el software premium. Es más fácil volver a comprar una licencia de Maze en 6 meses que volver a encontrar un buen freelance o recuperar un equipo quemado."
    },
    {
      id: 'budget_freelance_vs_fulltime_runway',
      category: "Presupuesto & Hiring",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      scenario: "Necesitas escalar el equipo de diseño de 3 a 5 personas para cumplir el roadmap de Q2. Tienes dos opciones: (A) Contratar 2 diseñadores full-time a $85K cada uno ($170K/año = $42.5K en Q2), o (B) Contratar 2 freelancers senior a $95/hora × 160 horas/mes × 3 meses = $91.2K total en Q2. El runway actual de la empresa es de solo 7 meses. El VP de Producto presiona por full-time para 'retener conocimiento del producto'. El CFO prefiere freelance para 'mantener flexibilidad'.",
      question: "¿Cómo estructuras el scaling del equipo bajo presión de runway?",
      options: [
        { id: 'A', text: "Full-Time Hires: Contratas 2 diseñadores permanentes. El conocimiento del producto es crítico y los freelancers son caros a largo plazo. Si la ronda de inversión cierra bien, valió la pena la apuesta.", score: 2, type: "Apuesta de Runway (Alto riesgo)" },
        { id: 'B', text: "Freelancers Q2, Evalúa Q3: Contratas freelancers por Q2 para validar que la demanda es sostenible. Si la ronda cierra y el revenue crece, conviertes a 1-2 en full-time. Si el runway se achica, los liberas sin severance.", score: 5, type: "Lead (Flexibilidad financiera)" },
        { id: 'C', text: "Híbrido: 1 Full-Time ($85K/año) + 1 Freelancer ($45.6K en Q2). Balanceas retención de conocimiento con flexibilidad de costos. El FTE se convierte en lead interno del freelancer.", score: 4, type: "Compromiso (Divide capacidades)" }
      ],
      explanation: "Con 7 meses de runway, cada hire full-time es una apuesta de supervivencia. La opción A asume que la ronda cierra, lo cual es irresponsable. La B mantiene agilidad financiera y valida la necesidad real antes de comprometer burn mensual. La C es prudente pero diluye el ahorro."
    },
    {
      id: 'budget_salary_equity_crisis',
      category: "Presupuesto & Hiring",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      scenario: "Tu diseñador Senior descubre que un nuevo hire gana más que él. Exige un aumento inmediato. RRHH te confirma que no hay presupuesto para aumentos salariales hasta el próximo ciclo anual (en 8 meses). El Senior es crítico para el Design System y amenaza con irse.",
      question: "¿Cómo retienes al talento sin presupuesto cash?",
      options: [
        { id: 'A', text: "Pelear con RRHH: Exiges una excepción. 'Si se va, nos costará el doble reemplazarlo'. Gastas todo tu capital político en una batalla que probablemente pierdas.", score: 2, type: "Reactivo (Poco estratégico)" },
        { id: 'B', text: "Paquete de Retención No-Monetario: Ofreces un cambio de título inmediato (Senior -> Lead), acceso a conferencias, y un compromiso escrito de revisión salarial prioritaria en el próximo ciclo. Negocias 'Career Growth' en lugar de cash inmediato.", score: 5, type: "Lead (Creatividad en Compensación)" },
        { id: 'C', text: "Decir la verdad y esperar: 'No hay plata hasta dentro de 8 meses'. Probablemente empiece a entrevistar mañana.", score: 1, type: "Pasivo (Pierde al talento)" }
      ],
      explanation: "Cuando no hay dinero, un Lead usa otras palancas: título, visibilidad, proyectos, flexibilidad. La opción B construye un paquete de valor que demuestra aprecio y futuro, ganando tiempo hasta que se abra el presupuesto."
    },
    {
      id: 'budget_conference_politics',
      category: "Presupuesto & Hiring",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      scenario: "Tienes $12K de presupuesto anual para conferencias (3 personas a Config, $4K cada una: vuelo, hotel, ticket). Tienes un equipo de 6 diseñadores. Dos Senior quieren ir porque 'ya fueron antes y saben aprovechar el networking'. Dos Mid-Level argumentan que 'necesitan la exposición para crecer'. Un Junior dice que 'nunca ha ido a una conferencia grande y sería transformador'. Un diseñador remoto de Latinoamérica necesita visa y su vuelo cuesta $2.8K (vs $800 para los locales), lo que reduce cupos. Todos saben que solo 3 pueden ir.",
      question: "¿Cómo decides quién va a Config sin destruir la moral del equipo?",
      options: [
        { id: 'A', text: "Meritocracia de Performance: Los 3 diseñadores con mejor performance review del año pasado van. Criterio objetivo, cero política. Anuncias la decisión con data transparente.", score: 4, type: "Objetivo (Puede castigar Juniors)" },
        { id: 'B', text: "Rotación Democrática: Crear un sistema de 'Conference Credits' donde cada diseñador acumula puntos por antigüedad y los que nunca han ido tienen prioridad. Este año van 2 Mid-Level + 1 Junior. Los Seniors irán el próximo año.", score: 5, type: "Lead (Equidad de desarrollo)" },
        { id: 'C', text: "ROI Estratégico: Los 2 Seniors van porque traerán conocimiento aplicable inmediatamente + 1 Mid-Level para balancear. Los Juniors aún no tienen contexto para aprovechar conferencias de ese nivel.", score: 3, type: "Utilitario (Perpetúa inequidad)" }
      ],
      explanation: "Las conferencias son desarrollo profesional, no premios de performance. La opción C perpetúa ventaja de los seniors. La A puede ser injusta con Juniors que recién empiezan. La B construye un sistema sostenible que balancea desarrollo equitativo con rotación justa a largo plazo."
    },
    {
      id: 'budget_tool_sprawl_revolt',
      category: "Presupuesto & Hiring",
      icon: <Briefcase className="w-6 h-6 text-red-500" />,
      scenario: "El CFO te ordena reducir el gasto en SaaS de $78K/año a $35K/año. Te pide cancelar Notion ($8K), Miro ($12K), y bajar Figma Organization a Professional (ahorro de $32K). El equipo usa Notion para documentación de Design System, Miro para workshops con stakeholders, y Figma Org para branch/merge y shared libraries. Los diseñadores amenazan con 'productividad colapsada' y algunos mencionan buscar trabajo si les quitas herramientas. Producto y Engineering también usan Notion y Miro; cancelarlos afecta colaboración cross-functional.",
      question: "¿Cómo ejecutas el recorte de $43K sin una revuelta operativa?",
      options: [
        { id: 'A', text: "Cancelar todo como ordenó el CFO. Las herramientas son lujos; el equipo se adaptará. Usarán Google Docs y Figma básico. El ahorro justifica la fricción temporal.", score: 1, type: "Obediente (Destruye workflow)" },
        { id: 'B', text: "Negociar Parcial con CFO: Propones cancelar Miro ($12K) y Notion ($8K), reemplazarlos con FigJam (incluido en Figma) y Confluence (ya pago por Engineering). Mantienes Figma Org porque branch/merge es no-negociable. Ahorras $20K, no $43K, pero preservas core workflow.", score: 5, type: "Lead (Operativamente viable)" },
        { id: 'C', text: "Crowdfunding Interno: Propones que cada diseñador pague $40/mes de su bolsillo para mantener las herramientas premium si las valoran tanto. Los que no paguen usan versiones básicas.", score: 0, type: "Absurdo (Destruye confianza)" }
      ],
      explanation: "La opción A destruye productividad por obediencia ciega. La C es ridícula y tóxica. La B negocia con data: propone alternativas viables (FigJam, Confluence) que mantienen capacidades críticas mientras entrega ahorro parcial. Un Lead pelea por lo no-negociable (Figma Org) y cede en lo reemplazable (Miro, Notion)."
    },
    {
      id: 'budget_hiring_freeze_workarounds',
      category: "Presupuesto & Hiring",
      icon: <Users className="w-6 h-6 text-slate-600" />,
      scenario: "Hay un hiring freeze total. Tu equipo está colapsado (4 diseñadores para 9 squads). Engineering logró contratar 'contractors' porque salen de otro presupuesto (OpEx vs CapEx). Necesitas ayuda urgente.",
      question: "¿Cómo consigues recursos durante un freeze?",
      options: [
        { id: 'A', text: "Pedir Contractors: Armar un caso de negocio para contratar 2 freelancers por 3 meses usando presupuesto de proyecto (OpEx), igual que Ingeniería. 'Es temporal, no headcount'.", score: 5, type: "Lead (Navegación Financiera)" },
        { id: 'B', text: "Pedir a los PMs que diseñen: 'No tengo gente, hagan wireframes ustedes'. Baja la calidad del producto dramáticamente.", score: 1, type: "Rendición (Daña calidad)" },
        { id: 'C', text: "Esperar a que levanten el freeze: Dejar que el equipo se queme hasta que la empresa cambie de opinión.", score: 0, type: "Negligente" }
      ],
      explanation: "Los hiring freezes suelen aplicar a FTEs (Full Time Employees). Los contractors salen de otro bolsillo. La opción A demuestra entendimiento de cómo funcionan los presupuestos corporativos para desbloquear recursos."
    },

    // --- PHASE 2 BATCH 1: SERVICE DESIGN ---
    {
      id: 'service_omnichannel_inconsistency',
      category: "Service Design",
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      scenario: "El flujo de devolución en app es de 3 pasos (simple). En web son 7 pasos (legacy). En tienda, el sistema POS no ve las devoluciones iniciadas en app. Customer Support recibe 50 quejas semanales por esta desconexión.",
      question: "¿Cómo alineas la experiencia omnicanal sin rehacer 3 sistemas?",
      options: [
        { id: 'A', text: "Igualar a la baja: Hacer la app más compleja (7 pasos) para que coincida con la web.", score: 1, type: "Nivelar hacia abajo" },
        { id: 'B', text: "Status Bridge: Crear un middleware que sincronice solo el ESTADO de la devolución entre sistemas. Los flujos pueden ser distintos, pero la data debe fluir.", score: 5, type: "Lead (Integración Sistémica)" },
        { id: 'C', text: "Poner un aviso en la app: 'Si vas a tienda, lleva tu número de pedido'.", score: 3, type: "Parche" }
      ],
      explanation: "La opción A destruye la UX móvil por consistencia superficial. La C es un parche que admite la derrota. La B entiende que Service Design no es hacer todos los touchpoints idénticos, sino garantizar que la información fluya entre sistemas. El status sincronizado permite flujos diferentes pero experiencia coherente."
    },
    {
      id: 'service_cs_agents_cant_deliver',
      category: "Service Design",
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      scenario: "Diseñaste un feature de 'Resolución Instantánea' donde usuarios pueden resolver problemas de facturación directamente desde la app sin contactar soporte. Producto lo celebra como 'reducción de tickets'. Pero el equipo de Customer Support (outsourced en Filipinas) no fue entrenado: cuando los usuarios tienen problemas con la feature, los agentes no saben cómo funciona y dan instrucciones incorrectas que contradicen la UI. CSAT de soporte cayó de 4.2 a 3.1 estrellas. El Head of CS te culpa por 'lanzar sin coordinar'.",
      question: "¿Cómo alineas diseño con la realidad operativa de Customer Support?",
      options: [
        { id: 'A', text: "Training Retroactivo Urgente: Crear un playbook visual de 1 página con screenshots del flujo + FAQs comunes, y hacer una sesión de Zoom de 30 minutos con los agentes de CS para capacitarlos. Solución rápida.", score: 4, type: "Reactivo (Debió ser preventivo)" },
        { id: 'B', text: "Service Blueprint Pre-Launch: Institucionalizar un proceso donde TODO feature nuevo requiere un 'Service Impact Review' 2 semanas antes de launch: mapeas todos los touchpoints (CS, Sales, Ops) afectados y creas enablement materials ANTES de lanzar.", score: 5, type: "Lead (Service Design preventivo)" },
        { id: 'C', text: "Culpar a CS: Argumentar que la feature es self-service justamente para reducir dependencia en CS. Si los agentes no se adaptan, el problema es de ellos, no tuyo.", score: 0, type: "Silos (Destruye colaboración)" }
      ],
      explanation: "La opción C es tóxica y miope. La A soluciona la crisis pero no previene la siguiente. La B institucionaliza Service Design correcto: entiendes que un feature no es solo UI, sino todos los puntos de contacto humanos y técnicos que lo soportan. El Service Blueprint pre-launch convierte el diseño en un sistema, no solo una pantalla."
    },
    {
      id: 'service_physical_digital_bridge_failure',
      category: "Service Design",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      scenario: "Pusiste QRs en tiendas para ver reviews. Fracaso total: el WiFi de la tienda es lento, los empleados no saben explicarlo, y la landing page pesa 4MB. Marketing ya imprimió 10,000 posters.",
      question: "¿Cómo rescatas el physical-digital bridge antes de que sea un fracaso público?",
      options: [
        { id: 'A', text: "Optimizar la web: Bajar el peso de 4MB a 500KB. Arregla la velocidad, pero no el WiFi ni el staff.", score: 3, type: "Técnico Parcial" },
        { id: 'B', text: "Orquestación Completa: Instalar WiFi mesh, entrenar al staff con un script de 30s, Y optimizar la web. Service Design requiere arreglar el entorno, no solo la pantalla.", score: 5, type: "Lead (Holístico)" },
        { id: 'C', text: "Cambiar a NFC. Es mejor tecnología.", score: 2, type: "Tecnicismo (Ignora contexto)" }
      ],
      explanation: "La opción A soluciona síntomas, no causas. La C introduce un problema nuevo (compatibilidad). La B entiende que un touchpoint físico-digital requiere infraestructura (WiFi), capacitación humana (empleados), y optimización técnica (landing page). Service Design es orquestar los 3 simultáneamente."
    },
    {
      id: 'service_backend_operations_chaos',
      category: "Service Design",
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      scenario: "Diseñaste un flujo de checkout 'One-Click' super limpio: el usuario clickea 'Comprar', ve un spinner de 2 segundos, y recibe confirmación. Magia. Pero detrás de escena: el equipo de Operaciones recibe un email con el pedido, lo copian manualmente a un Excel, lo pasan a Logística por Slack, y Logística lo ingresa en el sistema de Fulfillment. Cuando hay error humano (30% de las veces), el pedido se pierde y el cliente reclama. El Head de Ops te dice: 'Tu UI es hermosa pero generó más trabajo manual para nosotros'.",
      question: "¿Cómo reconcilias UX limpia con realidad operativa caótica?",
      options: [
        { id: 'A', text: "Automatización Backend: Pausar features nuevas por 1 sprint para construir una integración API directa entre Checkout y el sistema de Fulfillment. Eliminar los pasos manuales de Email → Excel → Slack.", score: 5, type: "Lead (Deuda operativa)" },
        { id: 'B', text: "Hacer Visible el Caos: Cambiar la UI de 'Confirmación instantánea' a 'Tu pedido está en revisión. Te notificaremos en 24-48 horas'. Honestidad sobre el proceso real en lugar de ilusión de velocidad.", score: 3, type: "Transparente (Admite derrota)" },
        { id: 'C', text: "Capacitar a Ops: Crear un Notion doc con el proceso correcto de copiar pedidos de Email a Excel. El problema es ejecución, no el diseño.", score: 0, type: "Negligente (Ignora root cause)" }
      ],
      explanation: "La opción C ignora que el diseño creó una promesa (One-Click) que la operación no puede cumplir. La B es honesta pero frustrante. La A entiende que Service Design incluye backend: una UX limpia no puede depender de procesos manuales frágiles. Invertir 1 sprint en automatización previene años de errores."
    },
    {
      id: 'service_third_party_api_resilience',
      category: "Service Design",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "Tu flujo de onboarding usa Stripe Identity para verificación de documentos (KYC). Toma 30 segundos, funciona perfecto, conversión del 78%. Pero la semana pasada la API de Stripe tuvo un outage de 4 horas. Durante ese tiempo, CERO usuarios pudieron completar onboarding. Perdiste ~$45K en revenue estimado de sign-ups bloqueados. No tienes backup. El CEO te pregunta: '¿Por qué todo nuestro onboarding depende de un servicio externo que no controlamos?'",
      question: "¿Cómo diseñas resiliencia en flujos dependientes de third-party APIs?",
      options: [
        { id: 'A', text: "Vendor Redundancy: Implementar un segundo proveedor de KYC (Onfido o Persona) como fallback. Si Stripe falla, el sistema switchea automáticamente. Cuesta $8K/año extra pero elimina el single point of failure.", score: 5, type: "Lead (Resiliencia estratégica)" },
        { id: 'B', text: "Graceful Degradation: Cuando Stripe está down, permitir que usuarios completen onboarding sin KYC pero marcar sus cuentas como 'Pending Verification'. Pueden explorar el producto pero no hacer transacciones hasta que KYC se complete.", score: 4, type: "UX Resiliente (Compromiso de riesgo)" },
        { id: 'C', text: "SLA Monitoring + Alertas: Configurar monitoreo de uptime de Stripe y notificar al equipo cuando caiga. No previene el problema pero permite reaccionar rápido.", score: 2, type: "Reactivo (No previene pérdida)" }
      ],
      explanation: "La opción C solo notifica el desastre, no lo previene. La B permite flujo parcial pero introduce riesgo de fraude. La A es cara ($8K/año) pero $45K en 4 horas de outage justifica la inversión. Service Design maduro no depende de un solo vendor crítico sin fallback."
    },

    // --- PHASE 2 BATCH 1: MANAGE UP ---
    {
      id: 'manageup_ceo_designs_features',
      category: "Manage Up",
      icon: <Target className="w-6 h-6 text-red-600" />,
      scenario: "El CEO (ex-diseñador en su startup anterior) abre Figma y empieza a diseñar un 'Tab de Notificaciones' directamente en el archivo de producción. Lo comparte en Slack con Engineering diciendo: 'Podemos lanzar esto la próxima semana, ¿verdad?'. No habló contigo ni con Producto. El diseño rompe 4 patterns del Design System, no tiene estados de loading/error, y resuelve un problema que solo 2 usuarios mencionaron en NPS. Engineering está confundido esperando tu aprobación.",
      question: "¿Cómo manejas al CEO que bypasea proceso sin confrontación política?",
      options: [
        { id: 'A', text: "Confrontación Directa: Le escribes al CEO (cc: CPO) explicando que el diseño no sigue el Design System y el proceso correcto es Producto → Diseño → Engineering. Estableces límites claros.", score: 2, type: "Valiente (Riesgo político)" },
        { id: 'B', text: "Validación + Redirección: Respondes públicamente agradeciendo el input del CEO, propones una sesión de 30 min para 'refinar el concepto juntos' donde sutilmente introduces research, priorización y Design System patterns. Convertir su impulso en colaboración estructurada.", score: 5, type: "Lead (Diplomatic Judo)" },
        { id: 'C', text: "Implementar lo que pidió. Es el CEO; tiene contexto estratégico que tú no tienes. Adaptas el diseño al Design System y lo lanzas.", score: 1, type: "Obediente (Pierde autonomía)" }
      ],
      explanation: "La opción A es suicida políticamente. La C normaliza el bypass y destruye tu autoridad. La B es judo político: validas el interés del CEO (no lo humillas), pero canalizas su energía dentro de un proceso correcto. 'Refinar juntos' le da ownership mientras tú introduces rigor de UX."
    },
    {
      id: 'manageup_cto_blockchain_pet_project',
      category: "Manage Up",
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      scenario: "El Director de Innovación quiere integrar blockchain al producto y pide un 'Wallet de NFTs' urgente para un demo. Cero research, cero demanda de usuarios. Tienes tickets críticos de UX en el checkout bloqueados.",
      question: "¿Cómo gestionas el pet project sin quemar puentes?",
      options: [
        { id: 'A', text: "Diseñar el Wallet: 'Si Innovación lo pide, lo hacemos'. Desvías recursos del checkout.", score: 2, type: "Obediente (Desperdicia recursos)" },
        { id: 'B', text: "Validación Rápida: 'Hagamos un Discovery Sprint de 3 días. Si validamos interés, lo priorizamos. Si no, tenemos data para posponerlo'. Usas el proceso de diseño para filtrar malas ideas.", score: 5, type: "Lead (Research como filtro)" },
        { id: 'C', text: "Negarse rotundamente: 'Blockchain es una estafa y no voy a perder tiempo en esto'.", score: 1, type: "Conflictivo (Cierra puertas)" }
      ],
      explanation: "Negarse por ideología (C) es malo. Obedecer ciegamente (A) también. La opción B usa las herramientas de diseño (Discovery) para evaluar objetivamente la idea. Si es mala, la data la matará, no tú."
    },
    {
      id: 'manageup_cfo_design_system_roi',
      category: "Manage Up",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "Necesitas $120K para contratar un Design Systems Engineer. El VP de Engineering cuestiona la inversión: '¿Por qué necesitamos un rol dedicado si los developers ya usan librerías de UI?'. El Head of Product te pide que justifiques el headcount con ROI claro antes de aprobarlo en el budget del Q.",
      question: "¿Cómo traduces el valor del Design System a lenguaje de ingeniería y negocio?",
      options: [
        { id: 'A', text: "Hablar de Craft: Explicar que los Design Systems mejoran la consistencia visual y la calidad del código. Apelar a 'best practices'.", score: 0, type: "Craft Talk (No convence a Eng)" },
        { id: 'B', text: "ROI en Velocity: Mostrar data: un componente nuevo toma 4 horas hoy vs 20 min con DS. Ahorro de 180 horas/quarter = 1 headcount de ingeniería liberado para features. El rol se paga solo en eficiencia.", score: 5, type: "Lead (Business Case sólido)" },
        { id: 'C', text: "Benchmark Competitivo: 'Airbnb y Uber tienen este rol'. Argumentar que es estándar de industria.", score: 2, type: "Apelación a autoridad (Débil)" }
      ],
      explanation: "La opción A habla un idioma que Engineering ignora. La C es débil. La B habla el idioma del VP: velocity y eficiencia. Mostrar que el rol libera capacidad de feature development convierte el 'gasto' en 'acelerador'."
    },
    {
      id: 'manageup_cto_designers_should_code',
      category: "Manage Up",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      scenario: "En una reunión ejecutiva, el CTO dice públicamente: 'No entiendo por qué los diseñadores no implementan sus propios diseños en código. En mi anterior startup, los diseñadores escribían React. Seríamos mucho más eficientes'. Tienes un equipo de 5 diseñadores: 2 saben HTML/CSS básico, 1 sabe React, 2 son puramente visuales. El CTO sugiere que 'los diseñadores que no codean son menos valiosos'. Algunos diseñadores te escriben después preocupados por su job security.",
      question: "¿Cómo defiendes la especialización del equipo sin antagonizar al CTO?",
      options: [
        { id: 'A', text: "Upskilling Forzado: Implementar 'Viernes de Code' obligatorios donde todos los diseñadores aprenden React. Intentas cerrar la brecha que el CTO percibe.", score: 2, type: "Appeasement (Distrae del core skill)" },
        { id: 'B', text: "Reframe de Roles: Explicar al CTO que diseñadores que codean (Design Engineers) son un rol específico y valioso, pero no todos los diseñadores deben codear. Analogía: 'No todos los developers deben saber diseñar, y viceversa. Specialization > Generalization en equipos maduros.'", score: 5, type: "Lead (Claridad de roles)" },
        { id: 'C', text: "Modelo Híbrido: Proponer contratar 1 Design Engineer que haga handoff técnico mientras los diseñadores puros se enfocan en research, strategy y craft visual. División de labor clara.", score: 4, type: "Estructural (Resuelve con hiring)" }
      ],
      explanation: "La opción A desvía tiempo de diseñadores a aprender código cuando su valor está en UX/Research. La C es buena pero no responde la pregunta de fondo. La B educa al CTO sobre roles modernos: Design Engineers existen Y son valiosos, pero no todos los diseñadores deben ser híbridos. La especialización permite profundidad."
    },

    // --- PHASE 2 BATCH 2: ESCENARIOS POSITIVOS ---
    {
      id: 'positive_unexpected_promotion_tension',
      category: "Escenarios Positivos",
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      scenario: "Sofía, tu Mid Designer, acaba de ser promovida a Senior después de liderar el exitoso rediseño del checkout que aumentó conversión 23%. Está eufórica. Pero dos problemas emergen: (1) Marcos, Senior hace 2 años con buen desempeño pero sin proyectos 'estrella', está resentido y te escribió un Slack privado diciendo 'No entiendo qué hizo Sofía que yo no'. (2) Sofía ahora gana $95K, solo $5K menos que Marcos que tiene 4 años más de experiencia. HR te advierte que Marcos puede pedir ajuste salarial o irse.",
      question: "¿Cómo gestionas la tensión post-promoción sin deshacer el logro de Sofía?",
      options: [
        { id: 'A', text: "Conversación Individual con Marcos: Reúnete 1-on-1 para validar sus sentimientos, pero explica que las promociones son por impacto (no antigüedad). Ofrece definir juntos un 'proyecto estelar' donde pueda brillar en el próximo quarter.", score: 5, type: "Lead (Coaching hacia adelante)" },
        { id: 'B', text: "Ajuste Salarial Preventivo: Pedir a HR un aumento de $10K para Marcos (total $105K) para preservar la jerarquía salarial y evitar que renuncie. Es más barato que reemplazarlo.", score: 3, type: "Financiero (Inflación salarial)" },
        { id: 'C', text: "Transparencia Grupal: En el próximo team meeting, explicar públicamente los criterios de promoción (impacto medible, ownership, mentorship) para que todos entiendan que no es favoritismo.", score: 4, type: "Cultural (Riesgo de exponer a Marcos)" }
      ],
      explanation: "La opción B crea precedente peligroso: promociones generan ajustes reactivos sin justificación de desempeño. La C es transparente pero puede humillar a Marcos públicamente. La A convierte el resentimiento en motivación: valida sus sentimientos pero redirige su energía a demostrar impacto propio, no compararse con Sofía."
    },
    {
      id: 'positive_viral_feature_infrastructure_collapse',
      category: "Escenarios Positivos",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      scenario: "Tu feature se hizo viral. Tráfico x10 en 72 horas. La infraestructura colapsó: latencia de 8 segundos. Engineering necesita 1 semana para escalar. El viral muere en 48h si no funciona ya.",
      question: "¿Cómo capitalizas el momentum viral sin romper la experiencia?",
      options: [
        { id: 'A', text: "Honestidad Brutal: Poner un aviso 'Estamos sobrecargados, espera 30 segundos'.", score: 4, type: "Transparente" },
        { id: 'B', text: "Throttling Inteligente: Cola de espera con notificación asíncrona ('Te avisamos en 10 min cuando esté listo'). Mantiene la ilusión de funcionamiento y captura al usuario.", score: 5, type: "Lead (Gestión de Demanda)" },
        { id: 'C', text: "Pausar todo para arreglar servidores.", score: 3, type: "Reactivo" }
      ],
      explanation: "La opción A es honesta pero mata el viralidad ('30 segundos' frustra a usuarios móviles impacientes). La C sacrifica 48 horas críticas del momento viral. La B usa Service Design inteligente: throttling + notificaciones asíncronas preserva la percepción de que 'funciona' mientras distribuyes carga. Los usuarios toleran esperar 10 min si les avisas proactivamente."
    },
    {
      id: 'positive_design_award_ceo_pr_demands',
      category: "Escenarios Positivos",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      scenario: "Tu equipo ganó el 'Best UX in FinTech 2024' de Awwwards por el dashboard de analytics. El CEO está emocionado y quiere capitalizar el PR: te pide que prepares un 'Behind the Scenes' case study para publicar en Medium, LinkedIn, y presentar en 3 conferencias en los próximos 2 meses. El problema: ese dashboard fue un infierno de hacer (6 meses de retrasos, conflictos con Engineering, features cortadas). La versión 'marketeable' del caso omite todo el caos. Además, tu equipo tiene un deadline crítico de rediseño del onboarding en 4 semanas.",
      question: "¿Cómo balanceas la demanda de PR del CEO con la realidad operativa?",
      options: [
        { id: 'A', text: "Case Study Honesto: Escribir el caso real incluyendo los retrasos y conflictos, posicionándolo como 'Lecciones de resiliencia'. La transparencia sobre el proceso imperfecto es más valiosa que el storytelling pulido.", score: 3, type: "Transparente (Riesgo de reputación)" },
        { id: 'B', text: "Delegar el Storytelling: Asignar a Sofía (la Senior recién promovida) que lidere el case study y las charlas, mientras tú te enfocas en el onboarding. Es una oportunidad de visibilidad para ella y libera tu tiempo.", score: 5, type: "Lead (Desarrollo de talento + eficiencia)" },
        { id: 'C', text: "Rechazar Educadamente: Explicar al CEO que el equipo está en crunch mode con onboarding y que el PR puede esperar. Priorizar shipping sobre storytelling.", score: 2, type: "Producto first (Desperdicia momentum)" }
      ],
      explanation: "La opción A arriesga exponer caos interno públicamente (no todo debe ser transparente en PR). La C desperdicia un momento de visibilidad que no volverá (los awards tienen shelf-life corto). La B es win-win: Sofía gana exposición profesional (parte de su desarrollo como Senior), tú mantienes foco en onboarding, y el CEO consigue su PR."
    },
    {
      id: 'positive_series_b_scale_team_3x',
      category: "Escenarios Positivos",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      scenario: "La Serie B cerró: $20M en el banco. El VP de Producto te dice que necesitas escalar el equipo de diseño de 5 personas a 15 en 6 meses para soportar 3 nuevos product verticals. HR aprobó 10 headcounts. Pero tienes un dilema: (1) Contratar rápido = riesgo de bad hires y diluir cultura del equipo. (2) Contratar lento y selectivo = los nuevos product verticals se retrasan, Engineering se frustra esperando diseños. El CFO te recuerda: 'Ese dinero tiene que traducirse en crecimiento rápido, no en procesos lentos de hiring'.",
      question: "¿Cómo escalas el equipo 3x sin sacrificar calidad ni velocidad?",
      options: [
        { id: 'A', text: "Hiring Agresivo: Contratar 10 diseñadores en 3 meses usando recruiters externos. Priorizar llenado rápido de roles sobre culture fit perfecto. Podrás iterar y hacer performance management después.", score: 2, type: "Velocidad (Riesgo de calidad)" },
        { id: 'B', text: "Modelo Híbrido: Contratar 5 diseñadores full-time (high bar, proceso riguroso) + 5 contractors/freelancers de alta calidad para cubrir el gap inicial. Los contractors absorben el volumen mientras construyes el core team correcto.", score: 5, type: "Lead (Balance riesgo/velocidad)" },
        { id: 'C', text: "Hiring Selectivo Lento: Mantener tu proceso de hiring estricto (4 entrevistas, design challenge, culture fit). Contratar 10 personas excelentes tomará 9-12 meses, pero el equipo será sólido. Pedir al VP de Producto que ajuste expectativas de timeline.", score: 3, type: "Calidad first (Frustra al negocio)" }
      ],
      explanation: "La opción A es receta para chaos: 10 diseñadores mediocres generan más problemas que soluciones (deuda de diseño, re-work, cultural dilution). La C es idealista pero ignora la presión del negocio ($20M exige velocidad). La B es pragmática: contractors cubren volumen inmediato mientras haces hiring cuidadoso del core team. Después de 6 meses, conviertes los mejores contractors a full-time."
    },
    {
      id: 'positive_competitor_acquisition_poaching',
      category: "Escenarios Positivos",
      icon: <Target className="w-6 h-6 text-red-500" />,
      scenario: "Un competidor Fortune 500 ofrece a tu diseñador estrella $140K (vs tus $100K) y título de Lead. Él te lo cuenta transparentemente. No puedes igualar el salario.",
      question: "¿Cómo retienes a Martín sin crear precedente insostenible de counter-offers?",
      options: [
        { id: 'A', text: "Igualar la oferta a toda costa. Es indispensable.", score: 3, type: "Desesperado" },
        { id: 'B', text: "Paquete de Crecimiento: Ofrecer $115K (lo máximo posible), más equity, y un plan escrito para llegar a Staff Designer en 6 meses. Competir con carrera, no solo cash.", score: 5, type: "Lead (Career Pathing)" },
        { id: 'C', text: "Dejarlo ir. No podemos competir con Fortune 500.", score: 2, type: "Derrotista" }
      ],
      explanation: "La opción A crea precedente tóxico: 'Para conseguir aumento, necesito una offer externa'. La C es noble pero ignora que perder a Martín afecta proyectos críticos Y señala al resto del equipo que 'irse paga mejor que quedarse'. La B es honesta sobre límites financieros pero muestra un path de crecimiento tangible. El equity refresh + promoción en 6 meses cierra parte del gap sin romper la estructura salarial."
    },
    {
      id: 'positive_product_market_fit_scale_transition',
      category: "Escenarios Positivos",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      scenario: "Lograron Product-Market Fit. El CEO anuncia: 'Se acabó el modo startup caótico. Ahora necesitamos procesos y escala'. Tu equipo está acostumbrado a diseñar sin reglas ni docs.",
      question: "¿Cómo transicionas al equipo de 'scrappy' a 'scalable' sin matar creatividad?",
      options: [
        { id: 'A', text: "Imponer procesos corporativos de golpe. Es lo que pide el CEO.", score: 2, type: "Burocrático" },
        { id: 'B', text: "Guardrails Mínimos Viables: Introducir solo los procesos que eliminan dolor (ej: Design Specs para evitar preguntas de devs), no burocracia por burocracia. Escalar lo útil, ignorar lo ceremonial.", score: 5, type: "Lead (Escala Pragmática)" },
        { id: 'C', text: "Defender la cultura 'scrappy'. La velocidad es nuestra ventaja.", score: 3, type: "Nostálgico" }
      ],
      explanation: "La opción A mata la cultura. La C ignora la realidad de la escala (lo que funciona con 5 personas rompe con 50). La B introduce estructura solo donde agrega valor inmediato, facilitando la transición."
    },
    {
      id: 'positive_design_system_adoption_customization',
      category: "Escenarios Positivos",
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      scenario: "Tu Design System es un éxito interno. Ahora 3 equipos diferentes (Marketing, Sales, Customer Success) quieren adoptarlo para sus propias herramientas. Pero cada uno quiere 'customizaciones': Marketing quiere colores de campaña más vibrantes, Sales quiere componentes de CRM que no existen, CS quiere una versión 'simplificada' para usuarios no-técnicos. Si dices que sí a todo, el Design System se fragmenta. Si dices que no, pierdes la oportunidad de estandarizar la experiencia completa de la empresa.",
      question: "¿Cómo gestionas la adopción amplia sin fragmentar el sistema?",
      options: [
        { id: 'A', text: "Customizaciones Aisladas: Permitir que cada equipo haga 'forks' del Design System con sus customizaciones, pero sin tocar el core. Tres versiones: DS Core, DS Marketing, DS Sales, DS CS.", score: 2, type: "Fragmentación (Mantenimiento insostenible)" },
        { id: 'B', text: "Theming + Composition: Extender el Design System con un sistema de 'Themes' (paletas customizables) y 'Composite Components' (componentes específicos de dominio que usan el core). Marketing obtiene un Theme vibrante, Sales obtiene componentes de CRM, pero todos usan el mismo foundation.", score: 5, type: "Lead (Arquitectura escalable)" },
        { id: 'C', text: "Rechazar Adopción Externa: Explicar que el Design System es exclusivamente para el producto core. Los otros equipos deben usar sus propias soluciones. Mantener pureza del sistema.", score: 1, type: "Purista (Desperdicia oportunidad)" }
      ],
      explanation: "La opción A crea 3 sistemas paralelos que divergen rápidamente (mantenimiento = pesadilla). La C desperdicia la oportunidad de estandarizar la experiencia de toda la empresa. La B aplica principios de arquitectura: un 'foundation layer' compartido (tipografía, spacing, tokens) + 'theme layer' customizable + 'component layer' extensible. Es la misma estrategia que Material Design o Ant Design."
    },
    {
      id: 'positive_junior_breakthrough_team_dynamics',
      category: "Escenarios Positivos",
      icon: <Star className="w-6 h-6 text-purple-500" />,
      scenario: "Laura, tu Junior Designer de 8 meses, resolvió un problema de usabilidad crítico en el flujo de pagos que los dos Seniors (Marcos y Andrea) llevaban 3 semanas atacando sin éxito. Su solución fue simple pero brillante: eliminó 2 pasos del flujo y aumentó conversión 18% en el A/B test. En el Design Review, el CPO la felicitó públicamente diciendo 'A veces la mirada fresca ve lo que la experiencia no'. Después de la reunión, Andrea te dice en privado: 'Me siento re mal. ¿Cómo es posible que una Junior me haya superado? ¿Estoy perdiendo mi toque?'. Marcos está callado pero visiblemente incómodo.",
      question: "¿Cómo manejas el impacto psicológico del breakthrough de Laura sin minimizar su logro?",
      options: [
        { id: 'A', text: "Celebrar a Laura + Coach a Seniors: Celebrar públicamente el logro de Laura (es justo), pero tener 1-on-1s con Andrea y Marcos explicando que seniority no es infalibilidad. Los juniors pueden tener insights valiosos; eso no disminuye su experiencia.", score: 5, type: "Lead (Balance reconocimiento + coaching)" },
        { id: 'B', text: "Minimizar el Logro de Laura: Reencuadrar el logro como 'suerte de timing' o 'mirada fresca que solo funciona ocasionalmente' para proteger el ego de los Seniors. Preservar la jerarquía del equipo.", score: 0, type: "Tóxico (Injusto con Laura)" },
        { id: 'C', text: "Promover a Laura a Mid: Su breakthrough demuestra capacidad Senior-level. Promoverla inmediatamente envía el mensaje de que el impacto importa más que el tiempo en el rol.", score: 3, type: "Meritocrático (Demasiado rápido)" }
      ],
      explanation: "La opción B es tóxica: minimiza el logro de Laura para proteger egos frágiles. La C es impulsiva (8 meses no es suficiente track record para Mid; un breakthrough no define seniority). La A es balanceada: Laura merece reconocimiento (no castigarla por ser junior), pero Andrea y Marcos necesitan coaching sobre el hecho de que el rango no garantiza tener siempre las mejores ideas. Un equipo saludable celebra cuando CUALQUIERA resuelve problemas."
    },
    {
      id: 'positive_user_love_feature_demand_overload',
      category: "Escenarios Positivos",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      scenario: "El NPS saltó de 45 a 85 después del rediseño del dashboard. Los usuarios están ENAMORADOS del producto. Pero ahora el problema es el opuesto: están pidiendo features a una velocidad brutal. Tienes 247 feature requests en el backlog (vs 40 el trimestre pasado), el canal de Slack de 'user-feedback' recibe 50+ mensajes diarios, y el CEO te dice: 'Los usuarios están rogando por estas features. ¿Por qué tardamos tanto en entregarlas?'. Tu roadmap ya está lleno por 9 meses. El equipo de CS está frustrado porque no puede dar timelines a usuarios que preguntan '¿Cuándo van a agregar X?'.",
      question: "¿Cómo gestionas el 'problema del éxito' sin decepcionar a usuarios enamorados?",
      options: [
        { id: 'A', text: "Priorización Pública: Crear un 'Public Roadmap' donde los usuarios vean qué features están en desarrollo, cuáles en backlog, y cuáles rechazadas. Transparencia total sobre decisiones de priorización.", score: 4, type: "Transparente (Riesgo de compromisos públicos)" },
        { id: 'B', text: "Votación de Features: Implementar un sistema de 'Feature Voting' donde usuarios votan por sus features favoritas. Las más votadas suben en el roadmap. Democratizar la priorización.", score: 3, type: "User-Driven (Pierde visión de producto)" },
        { id: 'C', text: "Feature Request Framework: Crear un proceso donde CADA feature request debe pasar por un filtro: (1) ¿Alinea con visión de producto? (2) ¿Cuántos usuarios lo piden? (3) ¿Cuál es el impact/effort ratio? Comunicar los rechazos con reasoning transparente.", score: 5, type: "Lead (Priorización estratégica)" }
      ],
      explanation: "La opción B suena democrática pero es peligrosa: los usuarios votan por lo que QUIEREN, no necesariamente lo que NECESITAN (o lo que es estratégico para el negocio). La A es buena pero crea presión pública ('dijeron que X estaría en Q3 y no está'). La C aplica rigor estratégico: cada feature se evalúa contra visión de producto + data + esfuerzo. Los rechazos se explican con reasoning ('No es que ignoremos tu pedido, es que priorizamos Y porque...')."
    },
    {
      id: 'positive_remote_success_ceo_hybrid_culture',
      category: "Escenarios Positivos",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      scenario: "Tu equipo de diseño ha trabajado 100% remoto por 18 meses con resultados increíbles: productividad alta, retention de 100%, NPS interno del equipo de 9/10. Pero el CEO anuncia nueva política: 'Hybrid obligatorio, 3 días en oficina a partir del próximo mes para preservar la cultura y colaboración'. Tu equipo está FURIOSO. Tres diseñadores (incluyendo Martín, el Senior estrella) amenazan con renunciar si los fuerzan a volver. Dos viven en otras ciudades y se mudaron asumiendo remote permanente. El CEO te dice: 'Entiendo que tu equipo está molesto, pero es una decisión de toda la empresa. No puedo hacer excepciones solo para diseño'.",
      question: "¿Cómo abordas la tensión entre autonomía del equipo y política corporativa?",
      options: [
        { id: 'A', text: "Negociar Excepción: Presentar al CEO data de productividad del equipo (delivery on-time, calidad, retention) y argumentar que Design debería ser excepción a la regla hybrid. El equipo ha probado que remote funciona.", score: 3, type: "Data-Driven (Crea resentimiento en otras áreas)" },
        { id: 'B', text: "Acatar la Política: Comunicar al equipo que es una decisión corporativa no-negociable. Ayudar a los que viven en otras ciudades a buscar relocation support de HR. Preservar tu capital político con el CEO.", score: 2, type: "Obediente (Pierde talento)" },
        { id: 'C', text: "Modelo Flexible Negociado: Proponer al CEO un 'Hybrid Flexible': diseñadores pueden elegir CUÁLES 3 días venir (no días fijos) y pueden hacer 2 semanas/mes remotas si tienen razones válidas (childcare, salud, etc). Cumple el espíritu de la política pero preserva flexibilidad.", score: 5, type: "Lead (Compromiso inteligente)" }
      ],
      explanation: "La opción A crea resentimiento en otros equipos ('¿Por qué Design es especial?') y quema capital político del CEO. La B acata ciegamente y pierde talento crítico (Martín renunciará). La C negocia un middle ground: 3 días en oficina pero CUÁLES días son flexibles. No es remote puro, pero da autonomía sobre cuándo colaborar presencialmente. Es un compromiso donde ambos lados ceden algo."
    },

    // --- PHASE 2 BATCH 2: CRISIS POLÍTICA ORGANIZACIONAL ---
    {
      id: 'political_ma_duplicate_teams_layoffs',
      category: "Crisis Política Organizacional",
      icon: <AlertOctagon className="w-6 h-6 text-red-700" />,
      scenario: "Tu empresa adquirió a un competidor. Ahora hay dos equipos de diseño (6 tuyos, 4 de ellos). El Head of Design te pide proponer una estructura unificada de 7 personas. Tienes que recomendar quiénes se quedan y quiénes se van (o son reasignados). El equipo adquirido tiene talento fuerte pero procesos caóticos.",
      question: "¿Cómo decides la estructura del nuevo equipo unificado?",
      options: [
        { id: 'A', text: "Meritocracia Ciega: Evaluar a los 10 diseñadores con un mismo criterio (portfolio + skills) y recomendar a los 7 mejores, sin importar el origen. Puede significar perder gente de tu equipo original.", score: 5, type: "Lead (Doloroso pero justo)" },
        { id: 'B', text: "Proteger a Tu Equipo: Recomendar mantener a tus 6 diseñadores (conocen el sistema) y solo 1 del equipo adquirido. Priorizar continuidad operativa sobre talento potencial.", score: 2, type: "Tribal (Injusto)" },
        { id: 'C', text: "Split Político: Proponer 4 tuyos y 3 de ellos para 'balancear' culturas. Decisión basada en óptica política, no en skills.", score: 4, type: "Diplomático (Evita meritocracia)" }
      ],
      explanation: "La opción B es tribal y crea resentimiento. La C es política pero no optimiza talento. La A es la única forma de construir un equipo de alto rendimiento real: evaluar skills objetivamente. Como Lead, tu lealtad es a la calidad del equipo, no solo a tus amigos."
    },
    {
      id: 'political_founder_conflict_design_caught',
      category: "Crisis Política Organizacional",
      icon: <Shield className="w-6 h-6 text-orange-700" />,
      scenario: "Los dos Co-Founders (CEO y CTO) están en conflicto abierto sobre la dirección del producto. El CEO quiere pivotar a un modelo B2B Enterprise. El CTO quiere duplicar down en B2C consumer. Ambos te piden diseños que soporten SU visión. El CEO te dice: 'Diseña un dashboard Enterprise con analytics avanzados'. El CTO te dice al día siguiente: 'Ignora eso, diseña una app móvil consumer-first'. En las reuniones ejecutivas discuten públicamente. El equipo de diseño está paralizado sin saber qué priorizar. El VP de Producto renunció la semana pasada por 'diferencias estratégicas'. Tú eres el siguiente en la línea de fuego.",
      question: "¿Cómo navegas el conflicto de founders sin arruinar tu carrera?",
      options: [
        { id: 'A', text: "Diseñar Ambas Visiones en Paralelo: Dividir al equipo: 3 diseñadores en Enterprise, 3 en Consumer. Mostrar ambos prototipos al Board y dejar que ellos decidan. Mantenerse neutral.", score: 4, type: "Neutral (Desperdicia recursos)" },
        { id: 'B', text: "Aliarte con uno: Elegir la visión que TÚ crees correcta (digamos, B2B) y diseñar solo eso. Argumentar con data que es el camino viable. Aceptar que el otro founder quedará furioso.", score: 2, type: "Valiente (Suicida)" },
        { id: 'C', text: "Forzar Alineación Facilitada: Proponer una 'Strategy Workshop' de 2 días donde CEO + CTO + tú presentan data (market size, competencia, unit economics) y facilitas un proceso estructurado de decisión. No diseñas nada hasta que haya alineación.", score: 5, type: "Lead (Lidera hacia arriba)" }
      ],
      explanation: "La opción B es suicida: te conviertes en peón de un founder vs el otro (el que pierde te odiará). La A desperdicia recursos del equipo diseñando dos futuros mutuamente excluyentes. La C es liderazgo real: te niegas a diseñar en medio del caos y fuerzas a los founders a alinearse ANTES de pedirte ejecución. Es incómodo pero es tu única jugada de supervivencia."
    },
    {
      id: 'political_vp_product_fired_interim_no_design',
      category: "Crisis Política Organizacional",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      scenario: "El VP de Producto (tu jefe directo y mentor de 2 años) fue despedido abruptamente. El CEO anuncia que el CFO será 'Interim Head of Product' mientras buscan reemplazo. El CFO tiene cero experiencia en producto o diseño; su background es finanzas en una consultora. En su primera reunión contigo dice: 'No entiendo para qué necesitamos tanto diseño. ¿No podemos usar templates de Bootstrap y enfocarnos en features que generen revenue rápido?'. Canceló tu presupuesto de research ($30K/año) y sugirió que 'los diseñadores podrían ayudar con sales decks mientras hay poco trabajo de producto'. Tu equipo está en pánico.",
      question: "¿Cómo proteges al equipo bajo un líder interim hostil a diseño?",
      options: [
        { id: 'A', text: "Escalación Directa al CEO: Pedir una reunión 1-on-1 con el CEO para explicar que el CFO no entiende diseño y está tomando decisiones que destruyen capacidad de producto. Pedir reporte directo temporal al CEO.", score: 4, type: "Valiente (Riesgo político alto)" },
        { id: 'B', text: "Educar al CFO con ROI: Preparar un business case mostrando cómo el diseño impacta revenue: aumento de conversión por rediseños, reducción de churn por UX, etc. Traducir diseño a lenguaje financiero que el CFO entienda.", score: 5, type: "Lead (Bridge de lenguajes)" },
        { id: 'C', text: "Modo Supervivencia: Acatar las órdenes del CFO (Bootstrap, sales decks) temporalmente mientras el CEO busca VP de Producto permanente. Mantener bajo perfil político hasta que pase la tormenta.", score: 3, type: "Supervivencia (Pierde momentum)" }
      ],
      explanation: "La opción A es nuclear: puede funcionar pero quemas puentes con el CFO (quien tiene poder financiero). La C es segura pero aceptas 3-6 meses de retroceso en capacidad de diseño. La B es la jugada inteligente: el CFO respeta ROI y data financiera. Mostrar que 'diseño = revenue' en su lenguaje (CAC, LTV, conversion rate) puede convertirlo de antagonista a aliado. Si hablas su idioma, puede escucharte."
    },

    // --- PHASE 2 BATCH 3: EDGE CASES LEGALES/ÉTICOS + CATEGORÍAS SUB-REPRESENTADAS ---

    // Category 6: Edge Cases Legales/Éticos (4 questions)
    {
      id: 'legal_algorithmic_bias_gender',
      category: "Edge Cases Legales/Éticos",
      icon: <Scale className="w-6 h-6 text-purple-700" />,
      scenario: "Tu equipo de Data Science presenta resultados del A/B test del nuevo algoritmo de recomendación de productos. Los resultados muestran un 22% de aumento en conversión. Sin embargo, al segmentar por demographics, descubres que el algoritmo recomienda productos de 'Belleza y Cuidado Personal' desproporcionadamente a usuarios identificados como mujeres, mientras recomienda 'Tecnología y Finanzas' a hombres, reforzando estereotipos de género. Legal aún no lo ha detectado, pero si sale públicamente, puede haber demanda colectiva. El VP de Revenue quiere lanzar en 2 semanas.",
      question: "¿Cómo gestionas el descubrimiento de bias algorítmico antes del lanzamiento?",
      options: [
        { id: 'A', text: "Pausa Inmediata + Auditoría: Detener el lanzamiento, escalar al CEO y Legal de inmediato, y contratar una auditoría externa de Algorithmic Fairness antes de lanzar. Aceptar el delay pero proteger a la empresa de riesgo legal y reputacional.", score: 5, type: "Lead (Protección ética y legal)" },
        { id: 'B', text: "Mitigación Técnica Rápida: Trabajar con Data Science para re-entrenar el modelo con constraints de equidad de género en 1 semana. Lanzar solo si el bias se reduce bajo el 5% de diferencia entre grupos.", score: 4, type: "Pragmático (Riesgo de timing)" },
        { id: 'C', text: "Divulgación Transparente: Lanzar el algoritmo pero agregar un disclaimer en la UI que dice 'Recomendaciones basadas en patrones de compra históricos' para cubrirse legalmente. El bias es reflejo de la realidad del mercado.", score: 1, type: "Cínico (Ignora responsabilidad)" }
      ],
      explanation: "La opción C es legalmente y éticamente insostenible: un disclaimer no protege contra demandas de discriminación algorítmica. La B suena pragmática pero 1 semana puede no ser suficiente para resolver bias sistémico (y si falla, estás en la misma posición). La A es la única jugada defensible: pausas, traes expertos externos, y proteges a la empresa. El Revenue del algoritmo no vale el riesgo de una demanda millonaria y daño reputacional."
    },
    {
      id: 'legal_accessibility_wcag_lawsuit',
      category: "Edge Cases Legales/Éticos",
      icon: <ShieldAlert className="w-6 h-6 text-red-700" />,
      scenario: "Un cliente Enterprise clave (contrato de $500K) audita tu plataforma y encuentra 37 violaciones de accesibilidad (WCAG AA). Amenazan con cancelar el contrato si no se arreglan en 30 días. Tu equipo tiene un roadmap lleno y arreglar todo tomaría 8 semanas. El VP de Sales está en pánico.",
      question: "¿Cómo gestionas la crisis de accesibilidad con recursos limitados?",
      options: [
        { id: 'A', text: "Parche Rápido: Arreglar solo los issues cosméticos (colores, alt text) en 1 semana y decir que el resto está 'en progreso'. Esperar que el cliente no audite a fondo.", score: 2, type: "Engañoso (Riesgo alto)" },
        { id: 'B', text: "Negociación con Plan de Remediación: Arreglar los 10 issues críticos (bloqueantes) en 30 días y presentar un roadmap firmado para el resto en 90 días. Mostrar compromiso serio y transparencia para salvar el contrato sin matar al equipo.", score: 5, type: "Lead (Gestión de Expectativas)" },
        { id: 'C', text: "Detener Todo: Pausar todo el roadmap de la empresa para arreglar los 37 issues en 4 semanas. 'Accesibilidad es prioridad cero'.", score: 3, type: "Reactivo (Disruptivo)" }
      ],
      explanation: "Ignorar el problema (A) pierde al cliente. Detener todo (C) daña el negocio. La opción B es gestión de crisis profesional: priorizar lo crítico, comunicar un plan creíble para el resto, y negociar tiempos basados en confianza y transparencia."
    },
    {
      id: 'legal_data_sovereignty_gdpr_us_servers',
      category: "Edge Cases Legales/Éticos",
      icon: <Lock className="w-6 h-6 text-blue-700" />,
      scenario: "Legal te informa que para cumplir con GDPR, debes pedir consentimiento explícito a usuarios europeos para transferir datos a US, O bloquearles el acceso. Bloquearlos pierde 15% de revenue. Pedir consentimiento con un modal agresivo reduce conversión un estimado de 20%. El VP de Growth quiere 'esconder' el consentimiento en los Términos y Condiciones.",
      question: "¿Cómo diseñas el flujo de compliance minimizando impacto?",
      options: [
        { id: 'A', text: "Dark Pattern: Esconder el consentimiento como sugiere Growth. Cumple la letra de la ley (técnicamente) y protege conversión.", score: 0, type: "Riesgoso (No cumple espíritu GDPR)" },
        { id: 'B', text: "Consentimiento Transparente + Valor: Diseñar un modal claro que explique POR QUÉ necesitamos los datos (para dar el servicio) y qué valor recibe el usuario. Aceptar la caída de conversión pero dormir tranquilo legalmente. Iterar el copy para mejorar opt-in.", score: 5, type: "Lead (Compliance ético)" },
        { id: 'C', text: "Bloquear EU temporalmente: Hasta que Engineering migre servidores a Europa (6 meses). Es la única forma 100% segura.", score: 2, type: "Drástico (Pérdida masiva de revenue)" }
      ],
      explanation: "Esconder el consentimiento (A) es ilegal bajo GDPR (debe ser explícito). Bloquear EU (C) es innecesario si puedes obtener consentimiento. La opción B asume el reto de diseño: hacer que el compliance sea parte de una experiencia de usuario honesta y clara, optimizando la conversión a través de confianza, no engaño."
    },
    {
      id: 'legal_minor_protection_addictive_mechanics',
      category: "Edge Cases Legales/Éticos",
      icon: <Shield className="w-6 h-6 text-orange-700" />,
      scenario: "Tu app usa 'Daily Streaks' y 'Loot Boxes'. Apple App Store Review te rechaza el último update citando 'Mecánicas predatorias para menores' (Guideline 3.1). Tienes 48 horas para responder o arreglarlo antes de perder la fecha de lanzamiento de marketing. El PM sugiere 'ocultar' las loot boxes solo para el reviewer de Apple.",
      question: "¿Cómo respondes al rechazo del App Store?",
      options: [
        { id: 'A', text: "Ocultar al Reviewer: Implementar un flag que oculta loot boxes si la IP es de Apple. Es trampa, pero salva el lanzamiento.", score: 0, type: "Fraude (Riesgo de ban total)" },
        { id: 'B', text: "Age-Gating Real: Implementar un flujo de verificación de edad estricto y deshabilitar loot boxes para usuarios <18 años. Cumplir con la guideline protegiendo a menores, aunque baje el revenue.", score: 5, type: "Lead (Ética + Compliance)" },
        { id: 'C', text: "Apelar la Decisión: Argumentar que 'otros juegos lo hacen'. Perderás tiempo valioso y probablemente rechacen igual.", score: 2, type: "Defensivo (Pérdida de tiempo)" }
      ],
      explanation: "Hacer trampa (A) te puede costar la cuenta de developer completa. Apelar (C) es lento. La opción B resuelve el problema de fondo: proteges a los menores y cumples la regla. Es la única solución sostenible."
    },

    // Category 7: User Research (3 questions)
    {
      id: 'user_research_budget_cut_qual_vs_quant',
      category: "User Research",
      icon: <Search className="w-6 h-6 text-green-700" />,
      scenario: "El Head of Product anuncia recortes: tu presupuesto de Research se reduce un 60%. Tienes 3 estudios cualitativos planeados (entrevistas profundas) para el Q. El VP sugiere: 'Usa herramientas de analytics y encuestas, son más baratas y escalables. No necesitamos tantas entrevistas'.",
      question: "¿Cómo ajustas la estrategia de research con 60% menos budget?",
      options: [
        { id: 'A', text: "Pelear por el Budget: Insistir en que 'Qualitative is King' y que sin entrevistas no hay empatía. Arriesgarte a ser visto como alguien que no se adapta a la realidad financiera.", score: 2, type: "Idealista (Poco flexible)" },
        { id: 'B', text: "Guerrilla Research + Democratización: Cancelar estudios caros externos. Entrenar a los diseñadores para hacer 'Guerrilla Testing' y usar herramientas remotas unmoderated (más baratas). Mantener el insight cualitativo pero bajando el costo de operación.", score: 5, type: "Lead (Creatividad operativa)" },
        { id: 'C', text: "Solo Analytics: Aceptar la sugerencia del VP y mover todo a Quantitative (Hotjar, Amplitude). Perder el 'por qué' de los usuarios.", score: 1, type: "Rendición (Pierde calidad)" }
      ],
      explanation: "La opción C pierde insights críticos. La A ignora la realidad financiera. La B demuestra liderazgo: encuentras formas de obtener insights cualitativos (guerrilla, unmoderated) sin gastar fortunas. Democratizar el research hace al equipo más resiliente."
    },
    {
      id: 'user_research_ceo_demands_speed_vs_quality',
      category: "User Research",
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      scenario: "Estás a mitad de un usability test crítico (8 de 15 usuarios). Data preliminar es preocupante: 75% abandonan el nuevo flujo, pero la muestra es pequeña. El CEO exige un reporte MAÑANA a las 9 AM para decidir si lanza el viernes, presionado por un competidor. Si recomiendas 'No Lanzar', Engineering enfurece por el trabajo perdido. Si recomiendas 'Lanzar' y falla, es tu culpa. Tu Research Lead advierte que la data actual es inconclusa.",
      question: "¿Qué entregas al CEO mañana 9 AM sabiendo que tu reporte decide lanzamiento vs 8 semanas de trabajo perdido?",
      options: [
        { id: 'A', text: "Reporte Preliminar Transparente: Entregar lo que tienes con disclaimers claros: '75% abandono (6/8 usuarios) pero muestra insuficiente. Recomendación: NO LANZAR sin validar 5 días más'. Proteges la integridad de la data aunque frustres al CEO.", score: 5, type: "Lead (Integridad + transparencia radical)" },
        { id: 'B', text: "Negociar Extensión Express: Pedir al CEO 48 horas extra para completar 4 entrevistas más y llegar a 12 (mínimo defendible). Ofreces velocidad y rigor mínimo, pero arriesgas que te diga 'no' si la presión del Board es absoluta.", score: 4, type: "Negociación con riesgo de rechazo (Timing crítico)" },
        { id: 'C', text: "Reporte 'Optimista' con A/B Test: Presentar los 8 usuarios como 'indicativos', resaltar a los 2 que tuvieron éxito, y recomendar lanzar con un A/B test al 15%. Das una solución política para lanzar ya, pero con data científicamente débil.", score: 2, type: "Spin político (Compromete integridad + riesgo de A/B mal informado)" }
      ],
      explanation: "Con CEO decidiendo mañana entre lanzar vs matar 8 semanas de trabajo, Board presionando, y data contradictoria (75% fallan, 25% mejoran), esta es decisión de alta presión. La C suena pragmática ('lanzar con A/B test') pero es científicamente deshonesta: presentar 8 usuarios como 'representativos' cuando los hallazgos son contradictorios es malpractice. El A/B test al 15% tampoco es solución mágica - si 75% de abandono es real, acabas de exponer a 15% de usuarios a experiencia rota basada en research que TÚ SABÍAS era insuficiente. La B tiene lógica (comprimir a 12 usuarios en 3 días es factible técnicamente) PERO requiere que CEO acepte 'viernes' cuando dijo 'mañana' - si Board está presionando HOY por respuesta, esa extensión puede ser rechazada. Además, comprimir 4 entrevistas + análisis en 48 horas arriesga calidad. La A es la jugada de integridad radical: entregas lo que tienes con transparency brutal ('75% abandonaron PERO muestra pequeña = INCONCLUSIVO') y recomiendas 5 días más para validar patrón. Es incómodo (frustra CEO + Engineering) pero proteges decisión empresarial: si el 75% de abandono ES real y lanzan basados en tu reporte incompleto, 68% del revenue está en riesgo. Un Lead senior reconoce que su JOB no es decirle al CEO lo que quiere oír - es darle la mejor información disponible CON contexto de sus limitaciones. La diferencia sutil entre A y B: opción B asume que puedes negociar tiempo (puede funcionar con CEOs razonables, pero este ya dijo 'mañana' bajo presión de Board). Opción A asume que no hay tiempo negociable, entonces entregas lo mejor posible HOY con honestidad total sobre gaps. En crisis de credibilidad (Board cuestionando velocidad), comprometer rigor científico puede costar más que frustrar stakeholders hoy."
    },
    {
      id: 'user_research_conflicting_data_survey_vs_usability',
      category: "User Research",
      icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
      scenario: "Lanzamiento en 5 días. Tienes data contradictoria: Survey (N=500) dice que 78% PREFIEREN el nuevo diseño. Usability Test (N=12) muestra que solo 25% pueden USARLO (fallan tareas básicas). El VP de Producto quiere lanzar basándose en el survey ('N=500 mata a N=12'). Marketing ya anunció el lanzamiento. El CEO te pide explicar la contradicción y recomendar qué hacer.",
      question: "¿Qué recomendación llevas al CEO a las 3 PM sabiendo que el launch es en 5 días y 2,400 clientes esperan?",
      options: [
        { id: 'A', text: "Defender Comportamiento (Usability): Argumentar que 'Preferencia (Survey) no es Uso'. Si 75% fallan tareas básicas, el producto está roto. Recomendar delay de 2 semanas. Proteges la calidad pero rompes la promesa pública de lanzamiento.", score: 4, type: "Purista con riesgo político (Credibilidad externa afectada)" },
        { id: 'B', text: "Desempate Rápido (UserTesting): Correr un test remoto no moderado (N=50) en 72 horas para tener data cuantitativa de uso. Si task success >70%, lanzas. Si no, retrasas. Es arriesgado por el tiempo tan corto.", score: 3, type: "Riguroso pero arriesgado (Tiempo crítico + puede fallar)" },
        { id: 'C', text: "Lanzamiento Gradual con Kill Switch: Lanzar el martes solo al 15% de usuarios con monitoreo agresivo. Si el task completion baja del 60%, rollback automático. Validas con usuarios reales en producción sin arriesgar a todos.", score: 5, type: "Lead (Validación en producción con guardrails)" }
      ],
      explanation: "Con 5 días para launch público, 2,400 clientes esperando, y VP presionando, no hay tiempo para research adicional extenso. La A es metodológicamente correcta (task success 25% es catastrófico) PERO delay de 2-3 semanas rompe commitment público con 2,400 clientes - daño reputacional real + guerra política con VP/Marketing. La B intenta resolver con más research (UserTesting N=50) pero 72 horas es muy agresivo para reclutar + correr + analizar - además, si sale contradictorio OTRA VEZ, no avanzaste nada. La C es pragmatismo ejecutivo: reconoce que research tiene limitaciones (survey mide preferencia, usability mide comportamiento, ambos son verdad parcial) y resuelve con PRODUCCIÓN. Launch gradual a 15% + analytics + kill switch automático si task completion <60% = validación real sin arriesgar 100% de usuarios. Si usability testing tenía razón (25% task success), el kill switch rollback en 48 hrs protege marca. Si survey tenía razón (usuarios reales SÍ completan tareas), full launch viernes. Un Lead senior reconoce que cuando research se contradice, usuarios reales en producción CON GUARDRAILS son mejor tiebreaker que más research. La diferencia sutil: opción A protege calidad teórica pero sacrifica credibilidad externa (2,400 esperando). Opción C acepta incertidumbre PERO mitiga riesgo con feature flag + monitoreo agresivo + rollback automático. En conflictos de data, producción controlada > parálisis por análisis."
    },

    // Category 7: Remote Work & Distributed Teams (3 questions)
    {
      id: 'remote_timezone_designer_india_sf_team',
      category: "Remote Work & Distributed Teams",
      icon: <Globe className="w-6 h-6 text-blue-700" />,
      scenario: "Priya, tu Staff Designer estrella en India (13.5h diferencia), tiene output técnico impecable pero bloquea al equipo de SF por falta de overlap. El equipo se queja de retrasos en feedback loops ('trabajamos con un fantasma'). Priya está exhausta intentando madrugar para tener 1 hora de overlap. El VP exige que se ajuste al horario SF o sea reemplazada. Perderla cuesta meses de hiring; mantenerla frustra a todo el equipo.",
      question: "¿Qué propones al VP sabiendo que perder a Priya cuesta $30K + 4 meses, pero mantenerla frustra a 5 diseñadores?",
      options: [
        { id: 'A', text: "Reasignar a Design Ops (Async): Mover a Priya a un rol 100% técnico (Design Systems) donde el trabajo async es ventaja, no problema. Contratas un mid-level en SF para producto. Retienes su talento sin frenar al equipo.", score: 4, type: "Realineación con headcount (Costo financiero + riesgo de percepción)" },
        { id: 'B', text: "Ultimátum de Horario (Overlap): Exigir 3 horas de overlap diario (ej: 8-11 AM PST) como condición de empleo. Si afecta su salud, ayudarla a transicionar fuera de la empresa. Priorizas la velocidad del equipo sobre la comodidad individual.", score: 5, type: "Lead (Velocidad de equipo > Individuo)" },
        { id: 'C', text: "Forzar al Equipo a Async: Cambiar los procesos del equipo de SF para que sean 'truly async' y acomoden a Priya. Eliminar reuniones sincrónicas. Arriesgas la moral de 5 personas por 1.", score: 1, type: "Idealismo dogmático (Ignora realidad del equipo)" }
      ],
      explanation: "Con VP amenazando reemplazo, equipo SF frustrado, y Priya exhausta, no hay opción sin dolor. La A es pragmática (aprovecha fortaleza de Priya en Design Systems) PERO requiere headcount adicional ($95K) que VP puede rechazar + Priya puede sentir que la 'sacaron' de product strategy. La C ofrece overlap inmediato ($35K premium) pero horario nocturno 4 días/semana sigue siendo insostenible - Priya probablemente renuncia en 6-12 meses por salud (precedente de GitLab/Shopify: remote workers en horarios nocturnos queman en <1 año). Además crea precedente caro. La B es la jugada de transformación sistémica: fuerza async-first radical en TODO el equipo. Es doloroso por 4-6 semanas (equipo SF resiste, velocity cae ~15%), pero si funciona, desbloqueas talento global permanentemente (Priya hoy, futuros hires en LATAM/EU mañana). Gitlab/Zapier/Automattic probaron que async-first FUNCIONA pero requiere cambio cultural completo, no half-measures. Un Lead senior reconoce que timezone con 13.5 hrs de diferencia NO se resuelve con 'meetings en horario compartido' - requiere rediseño de workflows. La diferencia crítica: opción A y C intentan 'arreglar' a Priya (cambiarla de rol o pagarle para trabajar de noche). Opción B arregla el SISTEMA (async-first beneficia a TODOS, no solo Priya). Es inversión en escalabilidad futura vs parche costoso de short-term."
    },
    {
      id: 'remote_async_overdocumentation_slowing_velocity',
      category: "Remote Work & Distributed Teams",
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      scenario: "Tu equipo remoto 'async-first' redujo su velocidad un 25%. Descubres que pasan 40% del tiempo escribiendo RFCs y grabando Looms para cada decisión menor. Lo que antes era una charla de 2 minutos, ahora es un doc de 3 páginas. El equipo sufre 'parálisis por documentación', pero temen que reducirla rompa la cultura async.",
      question: "¿Cómo balanceas async documentation vs exceso de fricción?",
      options: [
        { id: 'A', text: "Niveles de Documentación: Establecer reglas claras: Cambios chicos = Slack. Cambios medios = Loom. Cambios grandes = RFC. Eliminas la ambigüedad de 'cuánto documentar'.", score: 4, type: "Estructurado (Requiere adoption)" },
        { id: 'B', text: "Sync para Desbloquear: Reintroducir 'Sync Hours' opcionales para decisiones rápidas. Si un hilo de Slack pasa de 10 mensajes, se salta a una llamada de 5 min. Balanceas async con sentido común.", score: 5, type: "Lead (Pragmatismo híbrido)" },
        { id: 'C', text: "Prohibir Documentación Excesiva: Poner límite de palabras a los RFCs y prohibir Looms de >3 min. Tratas el síntoma pero no la causa (miedo a tomar decisiones sin rastro).", score: 2, type: "Micro-management (No resuelve la raíz)" }
      ],
      explanation: "La opción B retrocede a síncronos, perdiendo los beneficios de async para timezones. La A es sólida pero requiere que el equipo lea y adopte la rubrica (¿cuántos realmente la consultarán?). La C es la jugada más inteligente: los templates FUERZAN estructura sin requerir que la gente recuerde criterios. El campo 'Impact' obliga a pensar si la decisión es grande o chica. El límite de 15 mins asegura que documentar no se vuelva trabajo full-time. Es friction reduction by design."
    },
    {
      id: 'remote_office_perks_inequality_snacks_gym',
      category: "Remote Work & Distributed Teams",
      icon: <Coffee className="w-6 h-6 text-yellow-700" />,
      scenario: "Modelo híbrido: La oficina tiene snacks, gym y almuerzos ($800/mes valor). Los remotos reciben cero. Un diseñador remoto se queja públicamente en Slack: '¿Somos ciudadanos de segunda clase?'. El thread explota. HR se niega a dar stipends remotos alegando falta de presupuesto, pero mantiene los perks de oficina para 'incentivar asistencia'.",
      question: "¿Cómo addressing la inequidad de perks entre oficina vs remoto?",
      options: [
        { id: 'A', text: "Stipend Remoto Equitativo: Dar $200/mes a remotos para coworking/café. Reconoce el costo de trabajar desde casa y reduce la percepción de inequidad.", score: 5, type: "Lead (Equidad estructural)" },
        { id: 'B', text: "Monetizar Perks de Oficina: Calcular el valor real de los perks ($800) y ofrecerlo como bono salarial a quien renuncie a su escritorio fijo. Creas igualdad financiera total.", score: 3, type: "Financiero puro (Complejidad administrativa)" },
        { id: 'C', text: "Ignorar (Es parte del contrato): Responder que 'trabajar desde casa es el perk'. Ahorran en commute y ropa. No hacer nada. Ignoras el sentimiento de exclusión cultural.", score: 1, type: "Sordo culturalmente (Riesgo de atrición)" }
      ],
      explanation: "La opción B es políticamente suicida: quitarle snacks y gym a empleados de oficina genera revuelta. La C suena creativa pero 'Remote First Fridays' no compensa $800/mes en valor tangible. La A es la jugada justa: si la empresa gasta ~$800/persona/mes en oficina (snacks, lunch, gym), darle $200/mes a remotos para internet/coworking es razonable (ni siquiera es paridad completa, es 25%). Es un costo real pero retiene talento remoto y elimina percepción de inequidad."
    },

    // Category 7: QA & Testing (2 questions)
    {
      id: 'qa_critical_ux_bug_1day_before_launch',
      category: "QA & Testing",
      icon: <Bug className="w-6 h-6 text-red-600" />,
      scenario: "Lanzamiento mañana (webinar agendado). QA encuentra bug crítico a las 6 PM: el feature no funciona en iPhone (40% usuarios). Arreglarlo toma 2 semanas. El VP de Producto quiere lanzar solo en desktop. Marketing ya prometió el feature a 10,000 usuarios sin especificar plataforma.",
      question: "¿Qué decisión tomas 1 día antes del lanzamiento con bug crítico de mobile?",
      options: [
        { id: 'A', text: "Delay Transparente: Cancelar el lanzamiento, explicar el bug a usuarios y relanzar en 2 semanas. Priorizas calidad sobre deadline.", score: 4, type: "Purista (Rompe commitment público)" },
        { id: 'B', text: "Lanzamiento Parcial (Desktop Only): Lanzar en desktop como planeado. Ocultar el feature en mobile via feature flag hasta el fix. Cumples el deadline para el 60% de usuarios sin romper la experiencia mobile.", score: 5, type: "Lead (Pragmatismo técnico)" },
        { id: 'C', text: "Lanzar con Known Bug: Lanzar todo y poner un banner de 'Beta - Mobile issues known'. Arriesgas frustrar al 40% de usuarios por cumplir la fecha.", score: 1, type: "Irresponsable (Daña reputación)" }
      ],
      explanation: "La opción A rompe un commitment público (10,000 emails enviados, webinar agendado). La B lanza un feature inutilizable para 40% de usuarios (frustrante). La C es la jugada más inteligente: defines un MVP mobile que SÍ funciona (export básico sin bells & whistles) y lo implementas overnight. No es la UX ideal, pero cumples la promesa ('PDF export funciona en mobile') y das transparency sobre cuándo vendrá la versión completa. Es scope negotiation + comunicación honesta."
    },
    {
      id: 'qa_automated_vs_manual_design_inconsistency',
      category: "QA & Testing",
      icon: <CheckCircle className="w-6 h-6 text-green-700" />,
      scenario: "Tu sistema de testing visual (Percy) bloquea deploys por 47 inconsistencias menores (diferencias de 2px, hex codes casi idénticos). QA Manual se queja: 'Estamos parando releases por detalles que ningún usuario nota'. Tú sabes que ignorarlas degrada el sistema, pero el bloqueo actual es insostenible.",
      question: "¿Priorizas automated testing estricto vs pragmatismo de QA manual?",
      options: [
        { id: 'A', text: "Tolerancia Configurada: Ajustar Percy para ignorar diferencias imperceptibles (±2px, hex codes similares). Bloquear solo por errores reales. Pragmatismo calibrado.", score: 5, type: "Lead (Pragmatismo calibrado)" },
        { id: 'B', text: "Desactivar Bloqueo en CI: Convertir Percy en 'aviso no bloqueante'. Los deploys pasan siempre. Pierdes la protección contra regresiones reales.", score: 2, type: "Rendición (Degrada calidad)" },
        { id: 'C', text: "Regla de Cero Tolerancia: Mantener el bloqueo estricto. 'Si el diseño dice 8px, debe ser 8px'. Educar a Devs para ser pixel-perfect. Calidad visual perfecta a costa de velocidad.", score: 3, type: "Perfeccionista (Cuello de botella)" }
      ],
      explanation: "La opción C tira la herramienta (automated testing es valiosa, solo necesita calibración). La B suena disciplinada pero bloquear deploys por 2px de diferencia que ningún usuario nota es dogmático. La A es la jugada inteligente: configuras tolerancia razonable en tu tooling. Automated testing DEBE capturar inconsistencias significativas (border-radius 6px vs 12px SÍ se nota), pero ±2px de spacing es ruido. Calibrar tolerancia te da rigor sin parálisis."
    },

    // Category 7: Career Growth & Mentorship (3 questions)
    {
      id: 'career_senior_refuses_to_mentor_learned_alone',
      category: "Career Growth & Mentorship",
      icon: <Users className="w-6 h-6 text-purple-700" />,
      scenario: "Diego, tu mejor Staff Designer (IC top performer), se niega a mentorear a Sofía (Junior) argumentando que él aprendió solo y su valor es shipear, no enseñar. El equipo lo percibe como egoísta y el VP de Producto te advierte que su actitud es tóxica. Tienes un candidato externo interesado (excelente mentor, pero 40% menos output). Reemplazar a Diego baja la velocidad del equipo; mantenerlo valida que los seniors no necesitan colaborar.",
      question: "¿Qué decisión tomas con Diego sabiendo que VP está evaluando tu liderazgo cultural?",
      options: [
        { id: 'A', text: "Crear Track 'IC Puro': Formalizar un track donde el mentoring no sea obligatorio, solo el output técnico. Diego se queda como 'Staff IC' sin gente a cargo. Resuelves la fricción inmediata pero validas que los seniors pueden no colaborar.", score: 4, type: "Structural solution (Requiere aprobación ejecutiva + complejidad)" },
        { id: 'B', text: "Ultimátum de Liderazgo: Clarificar a Diego que en nivel Staff, 'hacer mejores a otros' es el 50% del rol. Si no mentorea, no cumple las expectativas de su nivel, por más output que tenga. Si no cambia en 30 días, inicias PIP o transición de salida.", score: 5, type: "Lead (Cultura > Individuo)" },
        { id: 'C', text: "Mentoring 'Opt-in' (Evitar Conflicto): Asignar a Sofía con otro mentor externo o de otro equipo. Dejar a Diego tranquilo produciendo. Mantienes el output alto hoy, pero dañas la cultura a largo plazo al permitir 'brilliant jerks'.", score: 1, type: "Evitación de conflicto (Daña cultura a largo plazo)" }
      ],
      explanation: "Con VP cuestionando tu liderazgo cultural, Diego amenazando renuncia, y recruiter ofreciendo alternativa (Airbnb Senior), esta es decisión de valores. La A es estructuralmente elegante (IC Track sin mentoring es válido en empresas grandes como Google) PERO requiere aprobación de VP + crea complejidad en equipo pequeño + puede generar 'culture opt-out' donde seniors evitan mentoring eligiendo IC track. La C es pragmática (swap Diego por Airbnb Senior) pero pierdes 40% de output + 2-3 meses de transición - en startup con roadmap agresivo, ese gap puede ser fatal. La B es la jugada de claridad cultural brutal: comunicas que Staff level en ESTA empresa = mentoring NO negociable. Si Diego se niega, PIP → termination. Es riesgoso (puede renunciar, pierdes talento), pero establece precedente crítico: 'knowledge hoarding' no es tolerable, seniors deben multiplicar impacto. Un Lead senior reconoce que preservar a Diego (max IC output) al costo de cultura tóxica (otros seniors imitan su egoísmo, juniors se estancan) es optimización local que destruye equipo long-term. La diferencia sutil: opción A 'acepta' la filosofía de Diego (IC puro es válido) y crea track formal para ello. Opción B RECHAZA esa filosofía para este contexto - dice 'Staff level aquí = leadership, no IC puro'. Contexto importa: en empresa de 500+ diseñadores, IC track tiene sentido. En equipo de 8, todos los seniors DEBEN mentorear o el equipo no escala. VP evaluando tu liderazgo significa que NO actuar (dejar que Diego siga sin mentorear) es decisión política suicida."
    },
    {
      id: 'career_designer_wants_specialize_a11y_company_needs_generalists',
      category: "Career Growth & Mentorship",
      icon: <TrendingUp className="w-6 h-6 text-green-700" />,
      scenario: "Luisa (Mid-level) quiere especializarse 80% en Accessibility. Tu equipo es pequeño (5 personas) y necesita generalistas flexibles para cubrir el roadmap. No tienes budget para un rol especialista. Si le dices que no, probablemente renuncie para buscar ese rol en otro lado.",
      question: "¿Cómo manejas a alguien que quiere especializarse cuando necesitas generalistas?",
      options: [
        { id: 'A', text: "Modelo 70/30: Negociar 30% de tiempo para a11y (auditorías, training) y 70% generalista. Le das espacio para crecer sin perder cobertura de roadmap.", score: 4, type: "Compromiso (Riesgo: 30% no es suficiente)" },
        { id: 'B', text: "Rotación de 'Champion': Hacer que el rol de 'A11y Lead' sea rotativo cada Q. Luisa lo toma primero, pero luego debe pasar la antorcha. Evita silos de conocimiento.", score: 3, type: "Democrático (Diluye expertise)" },
        { id: 'C', text: "Business Case para Especialista: Retar a Luisa: 'Si quieres ser 100% a11y, demuéstrame el ROI (reducción de riesgo legal, nuevos mercados)'. Si el caso es sólido, peleas el budget. Si no, debe seguir generalista. Alineas su deseo con el negocio.", score: 5, type: "Lead (Alineación estratégica)" }
      ],
      explanation: "La opción B es promesa incierta (18 meses es mucho). La A puede funcionar pero 30% puede no ser suficiente para desarrollar expertise real (¿cómo compite con alguien que hace a11y 100%?). La C es la jugada más inteligente: el Guild Model le da OWNERSHIP de a11y en toda la empresa sin crear un rol dedicado. Lidera 4 horas/semana enseñando a designers+devs, audita proyectos cross-team, y se convierte en THE expert interna. Su impacto escala 5x porque multiplica su conocimiento, no solo hace IC work. Es win-win sin headcount."
    },
    {
      id: 'career_promotion_criteria_unclear_ic_to_staff',
      category: "Career Growth & Mentorship",
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      scenario: "Raúl (Senior, 5 años) pide ascenso a Staff Designer. La empresa nunca ha tenido ese rol y no existe career ladder ni criterios definidos. HR te dice 'decídelo tú'. Raúl está frustrado por la falta de claridad y el resto del equipo observa si crearás un precedente arbitrario.",
      question: "¿Cómo creas criterios de promoción cuando no existen formalmente?",
      options: [
        { id: 'A', text: "Crear Career Ladder Formal: Diseñar una rubrica completa (Junior a Principal) con criterios claros. Publicarla y evaluar a Raúl. Es lento pero escalable.", score: 5, type: "Lead (Crea estructura escalable)" },
        { id: 'B', text: "Promoción por Mérito Individual: Evaluar a Raúl por sus logros pasados y promoverlo si lo merece. Resuelves su caso hoy, pero sin sistema para el futuro.", score: 2, type: "Ad-hoc (Short-term fix)" },
        { id: 'C', text: "Copiar Ladder de Industria: Adoptar el ladder de una empresa similar (ej: Intercom/GitLab) tal cual. Rápido, pero puede no encajar con tu realidad.", score: 3, type: "Eficiente pero riesgoso (Context mismatch)" }
      ],
      explanation: "La opción C es peligrosa: sin criterios claros, creas percepción de favoritismo ('¿Por qué Raúl fue promovido y yo no?'). La B es sólida pero toma tiempo (Raúl lleva 5 años esperando clarity). La A es la jugada correcta: inviertes 2-3 semanas en crear un career ladder formal con criterios transparentes. Puede que Raúl tenga que esperar un poco, pero TODOS los diseñadores del equipo (actuales y futuros) se benefician de tener una rubrica clara. Es trabajo de liderazgo que debiste hacer antes."
    },

    // Category 7: Freelance & Agency Work (2 questions)
    {
      id: 'freelance_client_scope_creep_threatens_bad_review',
      category: "Freelance & Agency Work",
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      scenario: "Freelance: Proyecto al 90%. El cliente exige +30 horas de trabajo extra (3 páginas, blog, animaciones) asumiendo que estaba incluido. Cuando pides pago adicional ($3K), amenaza con dejarte una review de 1 estrella en Upwork si no lo haces gratis. Tu rating es 5.0 y tu sustento depende de ello.",
      question: "¿Cómo manejas scope creep con amenaza de review negativa?",
      options: [
        { id: 'A', text: "Compromiso Firme: Ofrecer 1 página extra gratis como gesto de buena fe, pero cobrar el resto. Proteges tu rating sin regalar todo tu trabajo.", score: 5, type: "Lead (Compromiso firme pero justo)" },
        { id: 'B', text: "Ceder Totalmente: Hacer todo gratis para evitar la mala review. Tu reputación vale más que $3K. Creas un precedente de que eres explotable.", score: 2, type: "Sumisión (Daña negocio a largo plazo)" },
        { id: 'C', text: "Confrontación Legal: Citar el contrato firmado y negarse a hacer nada extra sin pago. Si deja mala review, disputarla con Upwork. Arriesgas tu perfil por principios.", score: 3, type: "Legalista (Riesgo de reputación)" }
      ],
      explanation: "La opción C establece un precedente terrible (el cliente aprendió que amenazas funcionan). La B es firme pero arriesga review negativa (que puede costar más de $3K en clientes futuros perdidos). La A es la jugada inteligente: ofreces un gesto de buena fe (1 página gratis) que muestra flexibilidad, pero mantienes límites en el resto del scope creep. La mayoría de clientes aceptan un middle ground razonable, y si aún así dejan review negativa, puedes señalar que intentaste compromiso."
    },
    {
      id: 'agency_pitch_underpromise_realistic_vs_overpromise_win',
      category: "Freelance & Agency Work",
      icon: <DollarSign className="w-6 h-6 text-green-700" />,
      scenario: "Pitch de agencia ($120K). El cliente pregunta timeline. Sabes que toma 6 meses realistas, pero tu competidor prometió 3 meses. El cliente prioriza velocidad. Si eres honesto (6 meses), pierdes el contrato. Si prometes 3 meses, arriesgas incumplir.",
      question: "¿Underpromising realista vs overpromising para ganar el contrato?",
      options: [
        { id: 'A', text: "Realismo con Plan Faseado: Decir '6 meses para todo, pero MVP crítico en 3 meses'. Ofreces velocidad real sin mentir sobre el scope completo.", score: 5, type: "Lead (Transparencia + velocidad)" },
        { id: 'B', text: "Igualar la Promesa (Mentira Piadosa): Decir '3 meses' para ganar el contrato, y luego 'descubrir complejidad' para extenderlo. Ganas el deal, pero inicias la relación con una mentira.", score: 1, type: "Venta deshonesta (Riesgo legal/reputacional)" },
        { id: 'C', text: "Honestidad Brutal: Decir 'Quien te prometa 3 meses te miente. Nosotros tardamos 6 porque hacemos calidad'. Te posicionas como premium, pero arriesgas perder ante la urgencia del cliente.", score: 4, type: "Purista (Riesgo de perder deal)" }
      ],
      explanation: "La opción B es cortoplacista: puede que ganes el contrato, pero cuando en el mes 3 digas 'necesitamos 3 meses más', el cliente sentirá que lo engañaste (nunca te referirán). La C apuesta a que honestidad gana, pero es arriesgado (muchos clientes eligen velocidad sobre realismo). La A es la jugada más inteligente: ofreces un MVP en 3 meses (cumples su urgencia) pero eres transparente que el scope completo es 6 meses. Phased delivery es la mejor forma de balancear velocidad con realismo."
    },

    // Category 7: Internationalization (i18n) (2 questions)
    {
      id: 'i18n_rtl_arabic_breaks_layout_2_percent_users',
      category: "Internationalization (i18n)",
      icon: <Languages className="w-6 h-6 text-blue-600" />,
      scenario: "Soporte Árabe (RTL) rompe todo el layout para 300 usuarios (2% del total). Arreglarlo requiere refactorizar 40 componentes (6 semanas de trabajo). El VP de Producto argumenta que no vale la pena detener features para el 98% de usuarios por un grupo tan pequeño.",
      question: "¿Priorizas fixing RTL para 2% de usuarios vs features para el 98%?",
      options: [
        { id: 'A', text: "Arreglarlo (Integridad): Invertir las 6 semanas. Si vendes soporte en Árabe, debe funcionar. Es un tema de calidad base, no de ROI por usuario.", score: 4, type: "Purista (6 semanas es mucho)" },
        { id: 'B', text: "Deshabilitar RTL Temporalmente: Apagar el soporte de Árabe hasta que se pueda arreglar bien en el Q siguiente. Mejor no tener feature que tenerla rota. Reembolsar a los 300 usuarios afectados.", score: 5, type: "Lead (Decisión difícil pero honesta)" },
        { id: 'C', text: "Ignorar (ROI Focus): Seguir el consejo del VP. Dejar el bug abierto y enfocarse en el 98%. Los usuarios de MENA se quejarán, pero el impacto en revenue es mínimo.", score: 1, type: "Negligencia (Deuda técnica + moral)" }
      ],
      explanation: "La opción B es mala fe (anunciar Beta DESPUÉS de lanzar es deshonesto). La A es correcta pero 6 semanas full stop en features puede ser rechazo del VP de Producto. La C es la jugada más inteligente: priorizas un 'RTL MVP' que hace workflows core USABLES en 2 semanas (no perfectos, pero funcionales). Luego publicas roadmap transparente de cuándo arreglarás los otros 32 componentes (1-2 por sprint). Usuarios MENA ven progreso constante, no 6 semanas de silencio. Es commitment visible + momentum."
    },
    {
      id: 'i18n_cultural_sensitivity_apac_feature_offensive_80k_redesign',
      category: "Internationalization (i18n)",
      icon: <Globe className="w-6 h-6 text-orange-700" />,
      scenario: "Tu feature de 'Gifting' usa íconos de relojes y paraguas. En China, estos simbolizan muerte y separación. Clientes corporativos están cancelando contratos por la ofensa cultural. Rediseñar para APAC cuesta $80K y 3 meses. APAC es 15% de tu revenue.",
      question: "¿Cómo respondes a una feature culturalmente ofensiva en un mercado clave?",
      options: [
        { id: 'A', text: "Hotfix Cultural (Disable): Apagar la feature en APAC inmediatamente. Disculparse y prometer un relanzamiento corregido. Detienes el daño reputacional ya.", score: 5, type: "Lead (Crisis management + commitment)" },
        { id: 'B', text: "Rediseño Global Rápido: Cambiar los íconos para TODOS los mercados a algo neutro (ej: estrellas, corazones). Es más rápido que hacer fork del código solo para APAC. Solución técnica eficiente.", score: 4, type: "Eficiencia técnica (Puede diluir marca)" },
        { id: 'C', text: "Mantener y Educar: Explicar a clientes chinos que es una app global y los íconos son estándar en occidente. No cambiar nada. Arriesgas perder el 15% del revenue por orgullo.", score: 1, type: "Arrogancia cultural (Pérdida de mercado)" }
      ],
      explanation: "La opción B es cultural insensitivity brutal (un disclaimer no arregla que regalaste símbolos de muerte a clientes chinos). La C es la solución ideal a largo plazo pero toma 3 meses (mientras tanto sigues perdiendo contratos). La A es crisis management correcto: deshabilitas la feature ofensiva INMEDIATAMENTE en APAC (stopping the bleeding), te disculpas públicamente, y te comprometes a relanzar bien en 3 meses. Es doloroso perder la feature por 3 meses, pero es mejor que perder clientes corporativos por insensibilidad cultural."
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
    }
];
