# TIER 1.3: Preguntas con Maniqueísmo (Obvias)

## Resumen Ejecutivo
- **Total preguntas analizadas:** 96
- **Preguntas con maniqueísmo detectado:** 28
- **Prioridad de reescritura:** Alta
- **Fecha de análisis:** 2025-11-28

## Criterios de Identificación

Una pregunta se considera "obvia" cuando:
- Las opciones score 0 suenan como decisiones de villano/amateur sin matices
- Las opciones score 5 son textbook perfect sin trade-offs aparentes
- El contraste es tan extremo que no requiere expertise para identificar la "correcta"
- Falta presión real o ambigüedad que genere dilema genuino

---

## Lista de Preguntas Obvias (Ordenadas por Severidad)

### 1. `burnout_detection_action`
**Por qué es obvia:** La opción A (score 0) es literalmente "fomentar el vicio" y agradecer públicamente el sobretrabajo - es un villano corporativo cartoonesco. La opción C (score 1) es "instalar una app" que claramente es superficial. La opción B es obviamente la correcta porque es la única que actúa.

**Scores actuales:**
- 0: "Agradecer públicamente el compromiso extra" - Fomenta el Vicio
- 1: "Sugerir app de gestión de tiempo" - Superficial
- 5: "Intervención privada inmediata" - Lead (Cuidado Activo)

**Sugerencia:** Agregar área gris donde las 3 opciones intentan ayudar pero de formas diferentes (e.g., dar más recursos vs reducir scope vs redistribuir carga), sin que ninguna sea obviamente tóxica.

---

### 2. `design_committee_control`
**Por qué es obvia:** La opción A (score 0) es "tomar nota de todo y complacer" - obviamente débil. La opción C (score 2) es "yo soy el experto, confíen" - obviamente arrogante. Solo B suena profesional.

**Scores actuales:**
- 0: "Tomar nota y explorar todas las opciones" - Pasivo (Frankenstein)
- 2: "Yo soy el experto, confíen en mí" - Ego (Defensivo)
- 5: "Redirigir a objetivos y problema del usuario" - Lead (Facilitador)

**Sugerencia:** Las 3 opciones deberían ser formas válidas de facilitar (usar data, usar criterio experto, hacer workshop colaborativo) con diferentes trade-offs de tiempo/inclusión.

---

### 3. `tool_debate_figma_penpot`
**Por qué es obvia:** La opción C (score 0) es "votación democrática" - obviamente populista y poco profesional. La opción A (score 2) es dogmática. Solo B es seria.

**Scores actuales:**
- 0: "Votación democrática en el equipo" - Populista
- 2: "Quedarse en Figma porque es estándar" - Dogmático
- 5: "Evaluar ROI y Switching Cost" - Lead (Visión de Negocio)

**Sugerencia:** Todas las opciones deberían ser análisis de diferentes factores (costo vs ideología vs vendor lock-in vs skills del equipo) sin que una sea "votación" que claramente no tiene sentido.

---

### 4. `meeting_overload_protection`
**Por qué es obvia:** La opción C (score 0) es "sugerir que bloqueen tiempo ellos mismos" - obviamente transfiere responsabilidad. La A (score 2) es tímida. La B es el héroe que protege al equipo.

**Scores actuales:**
- 0: "Sugerir bloquear tiempo en calendarios personales" - Transfiere culpa
- 2: "Pedir a PMs reuniones más cortas" - Tímido
- 5: "No-Meeting Days institucionales" - Lead (Defensor del Foco)

**Sugerencia:** Comparar diferentes estructuras de protección (no-meeting blocks, meeting budgets, async-first defaults) donde cada una tiene pros/cons, no una que es obviamente evasiva.

---

### 5. `copy_late_change_legal`
**Por qué es obvia:** La opción B (score 0) es "pelear con Legal" - obviamente suicida. Las otras dos al menos intentan resolver.

**Scores actuales:**
- 0: "Pelear con Legal sobre los textos" - Batalla Perdida
- 4: "Rediseñar urgentemente trabajando horas extra" - Reactivo (Burnout)
- 5: "Progressive Disclosure (link/modal)" - Lead (Problem Solving)

**Sugerencia:** Todas las opciones deberían ser formas de acomodar el cambio legal (rediseño rápido vs patrones UI vs negociar micro-copy) sin que una sea "pelear" que es obviamente inútil.

---

### 6. `mobile_first_habit_change`
**Por qué es obvia:** La opción A (score 1) es "workshop de capacitación" que claramente es teórico e ineficaz. Las otras dos son estructurales, pero B es obviamente la más elegante.

**Scores actuales:**
- 1: "Workshop + buenas prácticas" - Teórico (Ineficaz)
- 4: "Quality Gate: no aprobar sin versión móvil" - Policía de proceso
- 5: "Cambiar template de Figma a 360px default" - Lead (Behavioral Design)

**Sugerencia:** Comparar diferentes nudges estructurales (cambiar templates vs cambiar proceso de review vs cambiar métricas de success) sin que uno sea "workshop" que claramente no funciona.

---

### 7. `component_complexity_detach`
**Por qué es obvia:** La opción C (score 1) es "capacitación obligatoria y prohibir detach" - obviamente policía que culpa al usuario. Las otras dos buscan mejorar el sistema.

**Scores actuales:**
- 1: "Capacitación obligatoria y code reviews" - Policía (Culpa al usuario)
- 4: "Dividir en 3 componentes especializados" - Simplificación
- 5: "Refactor con Component Properties" - Lead (Optimización sistémica)

**Sugerencia:** Comparar diferentes aproximaciones de simplificación (fragmentar, refactorizar, agregar documentación interactiva) sin que una sea "entrenar y prohibir" que es obviamente equivocada.

---

### 8. `hiring_profile_gap_logic`
**Por qué es obvia:** La opción A (score 1) es "no bajar la vara visual, buscar unicornio" - obviamente irrealista. La opción C es indecisa. Solo B es profesional.

**Scores actuales:**
- 1: "No contratar, buscar al unicornio" - Irrealista
- 2: "Contratar freelance mientras sigues buscando" - Indeciso
- 5: "Contratar para cubrir brechas del equipo" - Lead (Team Building)

**Sugerencia:** Comparar diferentes estrategias de hiring (hire for gaps vs hire for excellence vs hire for potential) donde cada una tiene merit según contexto del equipo.

---

### 9. `accessibility_legal_threat_action`
**Por qué es obvia:** La opción B (score 1) es "arreglarlo en los bordes pidiendo horas extra" - obviamente iluso y falla en ambas cosas. Las otras dos son serias pero A es claramente la correcta ante amenaza legal.

**Scores actuales:**
- 1: "Arreglarlo en bordes del sprint con overtime" - Iluso (Falla ambos)
- 4: "Contratar agencia externa" - Válido (pero pierde know-how)
- 5: "Tiger Team de emergencia, pausar roadmap" - Lead (Gestión de Riesgo)

**Sugerencia:** Comparar respuestas de emergencia (team interno vs consultores vs hybrid) donde cada una tiene trade-offs de velocidad/costo/conocimiento, sin que una sea obviamente "fallar en todo".

---

### 10. `guerrilla_testing_speed`
**Por qué es obvia:** La opción A (score 4) es "usar tu criterio experto" que suena como ego sin validación. La opción C (score 2) es "copiar competidores" sin contexto. La B es obviamente data-informed.

**Scores actuales:**
- 2: "Benchmarking de competidores" - Imitación (Sin contexto)
- 4: "Usar criterio experto" - Ego
- 5: "5-Second Test con colegas" - Lead (Data-Informed)

**Sugerencia:** Comparar métodos de validación rápida (expert heuristics vs quick guerrilla test vs competitive analysis) donde cada uno tiene diferentes velocidades y confiabilidad, sin etiquetar uno como "ego".

---

### 11. `dev_handoff_war_library`
**Por qué es obvia:** La opción B (score 1) es "insistir que el diseño es correcto y escalar al CTO" - obviamente genera conflicto y demora. Las otras dos buscan soluciones pragmáticas.

**Scores actuales:**
- 1: "Defender diseño y escalar al CTO" - Silo (Genera conflicto)
- 4: "Pair programming, mostrar código" - Heroico (No escalable)
- 5: "V1 simplificada + pacto fecha V2 completa" - Lead (Pragmático)

**Sugerencia:** Comparar estrategias de negociación técnica (upskilling devs vs simplificar spec vs proponer alternativa técnica) sin que una sea obviamente "guerra interdepartamental".

---

### 12. `qa_reject_pixel_perfect`
**Por qué es obvia:** La opción A (score 0) es "bloquear lanzamiento por 2px de spacing" - obviamente pixel-peeper sin sentido. Las otras dos son razonables.

**Scores actuales:**
- 0: "Bloqueador P0, arreglar antes de lanzar" - Pixel-Peeper
- 2: "Pedir a QA menos estricto" - Evasivo
- 5: "Menor P3, documentar para después" - Lead (Impact-Based Triage)

**Sugerencia:** Comparar criterios de triage (impacto visual vs funcionalidad vs consistencia sistémica) donde diferentes severidades de bugs visuales requieren diferentes respuestas, sin que una sea "bloquear por nada".

---

### 13. `documentation_handoff_speed`
**Por qué es obvia:** La opción A (score 0) es "saltarse documentación y hacer llamada verbal" - obviamente cowboy que genera deuda. La C es burocrática extrema. Solo B es balanceada.

**Scores actuales:**
- 0: "Saltear documentación, llamada rápida" - Cowboy (Deuda)
- 2: "Documentación completa obligatoria" - Burocrático
- 5: "Specs críticos en Figma + Loom 3min" - Lead (Async-First)

**Sugerencia:** Comparar niveles de documentación para diferentes tipos de features (features críticas vs experimentales vs iteraciones menores) donde el contexto determina el rigor, no que una opción sea "cero doc".

---

### 14. `critique_session_dominance`
**Por qué es obvia:** La opción A (score 0) es "dejar que fluya naturalmente" - obviamente pasivo que mata diversidad. Las otras dos intervienen activamente.

**Scores actuales:**
- 0: "Dejar fluir naturalmente" - Pasivo (Mata diversidad)
- 2: "Hablar en privado con juniors después" - Band-aid
- 5: "Round Robin facilitado" - Lead (Inclusive Facilitator)

**Sugerencia:** Comparar diferentes estructuras de facilitación (round-robin vs written feedback first vs breakout groups) donde cada formato tiene pros/cons de inclusión vs eficiencia, sin uno que sea obviamente "no hacer nada".

---

### 15. `imposter_syndrome_senior`
**Por qué es obvia:** La opción C (score 0) es "sugerirle que tome curso de ilustración" - obviamente refuerza el síndrome en lugar de resolverlo. Las otras dos al menos intentan ayudar.

**Scores actuales:**
- 0: "Sugerir curso de ilustración/animación" - Refuerza síndrome
- 2: "Validación emocional genérica" - Emocional (Sin raíz)
- 5: "Mostrar métricas de impacto en negocio" - Lead (Recontextualización)

**Sugerencia:** Comparar diferentes estrategias de coaching (mostrar impacto cuantitativo vs mentoring de habilidades específicas vs peer comparison contextual) sin que una literalmente empeore el problema.

---

### 16. `promotion_readiness_debate`
**Por qué es obvia:** La opción A (score 0) es "promocionar por tiempo sin mérito" - obviamente inflación de títulos que rompe el equipo. La opción C es parche. Solo B es profesional.

**Scores actuales:**
- 0: "Promocionar por tiempo/calidad técnica" - Inflación de Títulos
- 2: "Aumento sin título" - Parche
- 5: "Roadmap de 3 meses con objetivos claros" - Lead (Growth Path)

**Sugerencia:** Comparar diferentes respuestas a la solicitud (promoción condicional vs título intermedio vs aumento compensatorio vs roadmap) donde cada una tiene diferentes implicaciones de motivación/costo/precedente.

---

### 17. `enterprise_client_custom_request`
**Por qué es obvia:** La opción C (score 0) es "construir cualquier request por $500K" - obviamente sin criterio ni estrategia. Las otras dos tienen análisis.

**Scores actuales:**
- 0: "Construirlo inmediatamente sin criterio" - Feature Factory
- 4: "Rechazarlo por purismo de producto SaaS" - Purista (Pierde $500K)
- 5: "Build vs Buy analysis con escalabilidad" - Lead (Strategic Flexibility)

**Sugerencia:** Comparar diferentes modelos de custom development (build into core vs separate tier vs professional services vs decline) donde cada uno tiene diferentes implicaciones de revenue vs deuda técnica.

---

### 18. `freemium_upgrade_friction`
**Por qué es obvia:** La opción A (score 0) es "rechazar prompts porque UX no se negocia" - obviamente idealista que ignora realidad de negocio. Las otras dos buscan balance.

**Scores actuales:**
- 0: "Rechazar prompts, UX no se negocia" - Idealista (Ignora negocio)
- 2: "Prompts con botón 'no mostrar'" - Parche
- 5: "Contextual upselling al chocar límite" - Lead (Value-Based Friction)

**Sugerencia:** Comparar diferentes estrategias de monetización (contextual vs periodic vs paywall hard vs freemium sin prompts) donde cada una tiene diferentes trade-offs de conversión vs experiencia.

---

### 19. `seo_vs_ux_url_structure`
**Por qué es obvia:** La opción A (score 1) es "priorizar SEO rompiendo links" - obviamente rompe experiencia de usuarios activos sin strategy.

**Scores actuales:**
- 1: "Priorizar SEO sin mitigación" - Rompe experiencia
- 4: "Rechazar cambio completamente" - Conservador
- 5: "Redirects 301 + monitoreo" - Lead (Migration Strategy)

**Sugerencia:** Comparar diferentes aproximaciones de migración de URLs (redirects permanentes vs canonical tags vs gradual rollout vs mantener URLs) donde cada estrategia tiene diferentes impactos de SEO/UX.

---

### 20. `ai_feature_hype_cycle`
**Por qué es obvia:** La opción C (score 0) es "AI-washing" agregando badges falsos a features existentes - obviamente fraude. La A es teatro. Solo B es seria.

**Scores actuales:**
- 0: "Badges 'Enhanced by AI' a features existentes" - AI-Washing (Fraude)
- 1: "Chatbot GPT genérico" - Teatro de Innovación
- 5: "Problem-First Discovery con ROI medible" - Lead (Innovation con propósito)

**Sugerencia:** Comparar diferentes respuestas a presión de AI (quick wins con chatbot vs automation de tareas específicas vs wait for right use case) sin que una sea literalmente "mentir a los usuarios".

---

### 21. `investor_demo_cosmetics`
**Por qué es obvia:** La opción A (score 0) es "demo mode completamente falso" - obviamente fraude y deuda ética. Las otras dos son honestas de diferentes formas.

**Scores actuales:**
- 0: "Demo Mode falso con datos ficticios" - Fraude (Deuda ética)
- 2: "Negarse a maquillar, mostrar exacto lo real" - Purista
- 5: "Polish solo lo que está en roadmap Q actual" - Lead (Honestidad Aspiracional)

**Sugerencia:** Comparar diferentes niveles de polish para demo (mostrar lo real vs mostrar visión próxima vs concepto aspiracional) donde cada uno tiene diferentes implicaciones éticas vs impacto de pitch.

---

### 22. `technical_debt_explosion`
**Por qué es obvia:** La opción A (score 0) es "pausar roadmap 1 trimestre completo" - obviamente suicidio de negocio. Las otras dos son más razonables.

**Scores actuales:**
- 0: "Apoyar refactor completo 1Q" - Ingenuo (Suicidio negocio)
- 2: "Que ingeniería arregle sin afectar negocio" - Silo (Irresponsable)
- 5: "Strangler Fig, migración modular" - Lead (Incremental)

**Sugerencia:** Comparar diferentes estrategias de pago de deuda técnica (big bang vs incremental vs parallel track) donde cada una tiene diferentes velocidades y riesgos, sin que una sea "detener todo el negocio".

---

### 23. `competitor_feature_launch`
**Por qué es obvia:** La opción A (score 0) es "clonar inmediatamente sin análisis" - obviamente feature factory sin estrategia. Las otras dos piensan antes de actuar.

**Scores actuales:**
- 0: "Clonar inmediatamente" - Feature Factory (Sin estrategia)
- 4: "MVP de Export Excel" - Pragmático (Parche)
- 5: "Jobs-to-be-Done analysis" - Lead (Estratégico)

**Sugerencia:** Comparar diferentes respuestas competitivas (fast follower vs innovate differently vs ignore) donde el contexto de mercado determina la mejor opción, sin que una sea "copiar sin pensar".

---

### 24. `vanity_metric_viral_growth`
**Por qué es obvia:** La opción A (score 0) es "celebrar shares sin conversión" - obviamente vanity metric trap. Las otras dos reconocen el problema.

**Scores actuales:**
- 0: "Celebrar 50K shares sin conversión" - Vanity Metric Trap
- 2: "Matar el feature completamente" - Despiadado
- 5: "Pivot a Invite-Only con incentivo" - Lead (Optimización)

**Sugerencia:** Comparar diferentes respuestas a features de bajo ROI (optimizar, iterar, mantener como brand awareness, deprecar) donde cada una tiene justificación según objetivos, sin que una sea "celebrar métricas vacías".

---

### 25. `retention_vs_acquisition_focus`
**Por qué es obvia:** La opción A (score 0) es "dejar que Growth siga quemando dinero en balde roto" obviamente desperdicio. Las otras dos reconocen el problema.

**Scores actuales:**
- 0: "Dejar que Growth siga su plan" - Silo (Balde roto)
- 2: "Experimento pequeño sin tocar presupuesto" - Tibio
- 5: "Pausar adquisición, focus en activación" - Lead (First Principles)

**Sugerencia:** Comparar diferentes balances de adquisición vs retención (70/30 vs 50/50 vs pausar adquisición) donde el ratio depende del estado del producto, no que uno sea obviamente "ignorar el problema".

---

### 26. `gdpr_cookie_consent_ux`
**Por qué es obvia:** La opción A (score 0) es "modal full-screen bloqueante" - obviamente hostile UX. La opción C no cumple GDPR. Solo B es viable.

**Scores actuales:**
- 0: "Modal full-screen bloqueante" - Hostile UX
- 0: "Ícono pequeño en footer" - No cumple GDPR
- 5: "Banner bottom con resumen + link" - Lead (Compliance + UX)

**Sugerencia:** Comparar diferentes implementaciones que CUMPLEN GDPR (banner vs modal suave vs banner con pre-selección) donde cada una tiene diferentes trade-offs de conversión vs transparencia.

---

### 27. `addictive_design_notifications`
**Por qué es obvia:** La opción A (score 0) es "implementar guilt-tripping" - obviamente manipulación emocional. La opción C rechaza todo. Solo B es ético.

**Scores actuales:**
- 0: "Implementar 'Tu reporte te extraña'" - Cómplice de manipulación
- 2: "Rechazar todas las push notifications" - Extremista
- 5: "Notificaciones basadas en valor real" - Lead (Ética)

**Sugerencia:** Comparar diferentes tonos de notificaciones (informativo vs persuasivo vs urgente vs emotivo) donde el contexto del producto determina apropiado, sin que uno sea obviamente "guilt-trip".

---

### 28. `data_collection_transparency`
**Por qué es obvia:** La opción A (score 0) es "trackear todo sin consentimiento" - obviamente surveillance UX. Las otras dos tienen algún nivel de respeto al usuario.

**Scores actuales:**
- 0: "Trackear todo, es anónimo" - Surveillance UX
- 2: "Solo eventos de negocio críticos" - Limitante
- 5: "Tracking con opt-in en Settings" - Lead (Privacy by Design)

**Sugerencia:** Comparar diferentes niveles de tracking con transparencia (opt-in vs opt-out informado vs mínimo necesario) donde cada uno tiene trade-offs de insights vs privacidad, sin que uno sea "vigilancia total".

---

## Patrones Comunes de Obviedad Detectados

### 1. **Villanos Corporativos Cartoonescos**
- Opciones score 0 que son literalmente tóxicas/fraudulentas/incompetentes
- Ejemplos: "agradecer el burnout", "AI-washing", "pelear con Legal", "demo falso"
- Frecuencia: 15 preguntas

### 2. **Extremismo sin Matices**
- Opciones que son posiciones absolutas sin considerar contexto
- Ejemplos: "pausar roadmap 1Q", "rechazar UX por negocio", "prohibir AI"
- Frecuencia: 8 preguntas

### 3. **Pasividad Obviamente Ineficaz**
- Opciones que claramente no resuelven nada
- Ejemplos: "workshop teórico", "dejar fluir", "sugerir app"
- Frecuencia: 6 preguntas

### 4. **Falta de Dilema Real**
- Escenarios sin presión genuina o trade-offs difíciles
- La opción correcta es obvia incluso sin expertise en producto
- Frecuencia: 12 preguntas

### 5. **Etiquetas que Revelan la Respuesta**
- Labels como "Fraude", "Suicidio", "Villano" hacen obvio qué evitar
- Las etiquetas deberían ser más neutrales
- Frecuencia: 20+ preguntas

---

## Recomendaciones Generales para Reescritura

### Para Opciones Score 0-1:
- Eliminar comportamientos obviamente tóxicos/incompetentes
- Convertirlas en aproximaciones plausibles pero con trade-offs negativos
- Ejemplo: En lugar de "agradecer burnout" → "ofrecer bonus por sprint extra"

### Para Opciones Score 5:
- Agregar trade-offs visibles (tiempo, costo, riesgo político)
- No deben sonar como textbook perfecto sin consecuencias
- Ejemplo: En lugar de "solución perfecta" → "mejor opción pero requiere X sacrificio"

### Para Escenarios:
- Agregar presión real que genere dilema genuino
- Múltiples stakeholders con objetivos conflictivos válidos
- Tiempo/recursos limitados que fuerzan compromisos duros

### Para Etiquetas:
- Usar lenguaje más neutral y descriptivo
- Evitar: "Fraude", "Villano", "Suicidio", "Incompetente"
- Preferir: "High-risk", "Short-term focus", "Political approach"

---

## Próximos Pasos (TIER 1.4)

1. Priorizar las 10 preguntas más obvias para reescritura inmediata
2. Crear versiones con "área gris" para cada pregunta identificada
3. Validar que las nuevas versiones mantengan dificultad sin obviedad
