# Plan de Extensión del Pool de Preguntas

> **Objetivo:** Expandir de 96 a 120-144 preguntas con dificultad brutal
> **Fecha:** 2025-11-28
> **Autor:** Product Design Leadership Expert

---

## Estado Actual

### Inventario de Preguntas
- **Total preguntas:** 96
- **Distribución por score:**
  - Score 0: 44 (15.3%) - Catastrófico
  - Score 1: 24 (8.3%) - Pobre
  - Score 2: 55 (19.1%) - Junior/Funcional
  - Score 3: 25 (8.7%) - Mid/Competente
  - Score 4: 44 (15.3%) - Senior/Muy Bueno
  - Score 5: 96 (33.3%) - Lead/Excelente (1 por pregunta)

### Progreso TIER 1
- TIER 1.1 (Shuffle opciones): Completado
- TIER 1.2 (Sistema 0-5): Completado
- TIER 1.3 (Identificar obvias): Completado (28 preguntas identificadas)
- TIER 1.4 (Reescribir obvias): 82% (23/28 completadas)

### Distribución por Categoría (Top 10)

| Categoría | Cantidad |
|-----------|----------|
| Gestión de Crisis & Liderazgo | 5 |
| Data-Driven Design | 5 |
| Arquitectura de Sistemas | 5 |
| Ética de Diseño | 4 |
| Validación Ágil | 4 |
| Producto vs Ventas | 4 |
| Mentoría & Crecimiento | 4 |
| Innovación & AI | 4 |
| Gestión de Stakeholders | 4 |
| Estrategia de Producto | 4 |

### Gaps de Contenido Identificados
Según PLAN_MEJORAS_CONSOLIDADO.md TIER 2.3:
- Presupuesto & Hiring: 0 preguntas actuales (necesita +5)
- Service Design: 0 preguntas actuales (necesita +4)
- Manage Up: 0 preguntas actuales (necesita +3)
- Escenarios Positivos: muy pocas (necesita +10)
- Total gap: 35-40 preguntas nuevas

---

## Objetivo

**Meta:** Expandir de 96 a 120-144 preguntas (+24 a +48 preguntas)

**Principios de Expansión:**
1. **Más brutal:** Aumentar presión temporal, stakes políticos, dilemas éticos
2. **Más impredecible:** Opciones más ambiguas donde score 4 suena perfectamente razonable
3. **Más realista:** Edge cases del mundo real (legal, presupuesto, política organizacional)
4. **Llenar gaps:** Priorizar categorías ausentes o con 1-2 preguntas

---

## Phase 1: Completar TIER 1.4 (5 preguntas restantes)

**Tiempo estimado:** 2-3 horas

### Preguntas Pendientes de Reescritura

De las 28 identificadas en TIER_1.3_PREGUNTAS_OBVIAS.md, faltan 5 por reescribir:

1. **`retention_vs_acquisition_focus`** (ID #25)
   - Problema: Opción A es "dejar que Growth siga quemando dinero" - obviamente desperdicio
   - Reescribir para: Comparar ratios 70/30 vs 50/50 vs pausar adquisición según estado del producto

2. **`gdpr_cookie_consent_ux`** (ID #26)
   - Problema: Opción A es "modal full-screen bloqueante" - hostile UX obvio
   - Reescribir para: Comparar banner vs modal suave vs banner con pre-selección (todos cumplen GDPR)

3. **`addictive_design_notifications`** (ID #27)
   - Problema: Opción A es "guilt-tripping 'Tu reporte te extraña'" - manipulación obvia
   - Reescribir para: Comparar tonos informativos vs persuasivos vs urgentes según contexto

4. **`data_collection_transparency`** (ID #28)
   - Problema: Opción A es "trackear todo sin consentimiento" - surveillance UX
   - Reescribir para: Comparar opt-in vs opt-out informado vs mínimo necesario

5. **`technical_debt_explosion`** (ID #22)
   - Problema: Opción A es "pausar roadmap 1Q completo" - suicidio de negocio
   - Reescribir para: Comparar big bang vs incremental vs parallel track

---

## Phase 2: Nuevas Preguntas (24-48 preguntas)

**Tiempo estimado:** 18-35 horas (45 min - 1 hora por pregunta)

### 2.1. Presupuesto & Hiring (+6 preguntas)

**Prioridad:** ALTA (categoría completamente ausente)

#### Escenario 1: Budget Cut Crisis
**Setup:** A mitad de año fiscal, CFO anuncia recorte del 30% al presupuesto de Design (herramientas + headcount). Debes elegir entre despedir a 2 diseñadores juniors o cancelar Figma Enterprise + tools.

**Opciones:**
- Score 2: Despedir juniors para mantener herramientas (cortoplacista)
- Score 4: Negociar recorte menor mostrando ROI del equipo con métricas
- Score 5: Proponer modelo híbrido: congelar hiring + downgrade a Figma Professional

**Brutal factor:** Dilema real entre personas y herramientas, sin opción fácil.

---

#### Escenario 2: Freelance vs Full-Time Budget
**Setup:** Tienes $120K anuales aprobados. Puedes contratar 1 Senior full-time ($120K) o 2 Mid freelancers ($60K cada uno, 6 meses). El roadmap es muy volátil e incierto.

**Opciones:**
- Score 3: 1 Senior full-time (estabilidad pero costoso si pivota)
- Score 4: 2 Mid freelancers (flexibilidad pero cultural debt)
- Score 5: 1 Senior contractor (6 meses, conversión a FTE si funciona)

**Brutal factor:** Trade-offs reales de budget flexibility vs team stability.

---

#### Escenario 3: Salary Negotiation Equity
**Setup:** Descubres que un Senior Designer que acabas de contratar está ganando $20K más que tu mejor diseñador actual (mismo nivel). RRHH dice "así es el mercado, los externos siempre ganan más".

**Opciones:**
- Score 2: Aceptar la inequidad para no romper budget
- Score 4: Pelear con RRHH por equity adjustment inmediato
- Score 5: Proponer banda salarial transparente para todo el equipo + ajuste progresivo en 2 quarters

**Brutal factor:** Justicia vs presupuesto vs retención.

---

#### Escenario 4: Conference Budget Politics
**Setup:** Tienes $8K de budget de capacitación para 6 diseñadores. 3 quieren ir a Config ($2.5K c/u = $7.5K) y 3 quieren cursos online ($500 c/u = $1.5K). Los de Config amenazan con irse si no van.

**Opciones:**
- Score 2: Enviar a los 3 de Config por miedo a que se vayan
- Score 4: Sistema de rotación: este año van 2 a Config, el próximo los otros 2
- Score 5: Transparencia total: publicar criterio de impacto (quien lo necesite más va)

**Brutal factor:** Meritocracia vs equidad vs retención.

---

#### Escenario 5: Tool Sprawl Budget
**Setup:** El equipo usa 12 herramientas SaaS ($3.5K/mes total): Figma, Miro, Dovetail, Maze, Hotjar, Loom, Notion, etc. CFO dice "reducir a 6 herramientas máximo".

**Opciones:**
- Score 3: Cortar las menos usadas según analytics (ignora necesidades de nicho)
- Score 4: Consolidar funciones: Figma + FigJam reemplaza Miro + Whimsical
- Score 5: Renegociar bundles Enterprise y eliminar redundancias verdaderas

**Brutal factor:** Eficiencia vs especialización de herramientas.

---

#### Escenario 6: Hiring Freeze During Growth
**Setup:** Startup levanta Serie A. El plan era contratar 4 diseñadores, pero el board impone hiring freeze por 6 meses. El roadmap esperaba ese equipo de 10, no de 6.

**Opciones:**
- Score 2: Prometer roadmap completo igual (burnout seguro)
- Score 4: Renegociar roadmap con PM: reducir scope 40%
- Score 5: Contratar contractors por 6 meses (no cuenta como headcount pero gasta budget)

**Brutal factor:** Expectativas vs capacidad real vs budget hacks.

---

### 2.2. Service Design (+5 preguntas)

**Prioridad:** ALTA (categoría completamente ausente)

#### Escenario 1: Omnichannel Consistency
**Setup:** La experiencia de compra es inconsistente: Web tiene checkout en 3 pasos, App Móvil en 5 pasos, Tienda Física usa terminal legacy. NPS muestra confusión en usuarios omnicanal.

**Opciones:**
- Score 3: Estandarizar a 3 pasos en todos los canales (rompe flujos móviles optimizados)
- Score 4: Mantener optimización por canal pero unificar lenguaje y orden de información
- Score 5: Service Blueprint completo: mapear journeys unificados y momentos de handoff

**Brutal factor:** Consistencia vs optimización por contexto.

---

#### Escenario 2: Customer Support Touchpoint
**Setup:** El equipo de Soporte usa scripts viejos que contradicen el nuevo tono de UX Writing. Los usuarios reportan "el chat suena como robot pero la app suena humana".

**Opciones:**
- Score 2: Enviar los nuevos content guidelines a Soporte y esperar que los lean
- Score 4: Workshop con Soporte para co-crear scripts alineados
- Score 5: Integrar Soporte al proceso de diseño: revisar todos los flujos de error juntos

**Brutal factor:** Cross-functional ownership de la experiencia.

---

#### Escenario 3: Physical-Digital Bridge
**Setup:** Tienda física vende productos con QR codes que llevan a la app. La app no tiene contexto de que el usuario viene de tienda, pierde la oportunidad de personalizar.

**Opciones:**
- Score 3: Agregar parámetro UTM al QR para trackear origen
- Score 4: Deep linking con contexto: "Seguí explorando el producto que viste en tienda"
- Score 5: Service design end-to-end: employees en tienda usan tablet para iniciar la compra y el usuario la completa en casa

**Brutal factor:** Integración de experiencias físicas y digitales.

---

#### Escenario 4: Behind-the-Scenes Complexity
**Setup:** Para procesar un reembolso, el usuario hace clic en 1 botón pero detrás hay 7 sistemas legacy que fallan el 15% de las veces. Soporte recibe 200 tickets/semana.

**Opciones:**
- Score 2: Mejorar el mensaje de error para ser más claro
- Score 4: Diseñar estado intermedio "Procesando reembolso" con tracking visual
- Score 5: Service blueprint con ingeniería: identificar cuál de los 7 sistemas falla más y priorizar fix técnico

**Brutal factor:** UX design vs systems architecture fix.

---

#### Escenario 5: Third-Party Service Integration
**Setup:** Integraste Stripe para pagos. Cuando Stripe cae (1-2 veces/mes), la app no tiene fallback y los usuarios ven error genérico "Algo salió mal".

**Opciones:**
- Score 3: Diseñar mejor mensaje de error con contact support
- Score 4: Fallback manual: permitir pago por transferencia bancaria cuando Stripe falla
- Score 5: Service resilience: queue de pagos que se procesa cuando Stripe vuelve + notificación proactiva

**Brutal factor:** Dependencia de third-parties en la experiencia.

---

### 2.3. Manage Up (+4 preguntas)

**Prioridad:** ALTA (categoría completamente ausente)

#### Escenario 1: CEO Bypasses Process
**Setup:** El CEO está agregando tareas directamente a diseñadores junior en Slack sin pasar por ti. Los juniors no saben decir que no, el roadmap se descalibra.

**Opciones:**
- Score 2: Pedirle a los juniors que rechacen al CEO (los pones en posición imposible)
- Score 4: Conversación privada con CEO pidiendo que pase por ti primero
- Score 5: Proponer "Office Hours" semanales donde CEO puede traer ideas y tú haces triage en vivo

**Brutal factor:** Proteger al equipo sin ofender al CEO.

---

#### Escenario 2: Executive Pet Project
**Setup:** El CMO quiere rediseñar la landing page con su "visión creativa" (que rompe toda la coherencia del sistema). Tiene power político para forzarlo.

**Opciones:**
- Score 2: Implementar su visión literal para evitar conflicto (destruye sistema)
- Score 4: A/B test: su versión vs versión optimizada del equipo (caro y demora)
- Score 5: Workshop de 1 hora con CMO: mostrar data de por qué el sistema actual funciona + co-crear versión que mezcle su visión con mejores prácticas

**Brutal factor:** Política organizacional vs principios de diseño.

---

#### Escenario 3: Budget Presentation to CFO
**Setup:** Tienes 30 minutos con el CFO para justificar el presupuesto de diseño del próximo año. Él solo entiende ROI financiero directo.

**Opciones:**
- Score 2: Presentar portfolio de proyectos bonitos (no conecta con su lenguaje)
- Score 4: Mostrar correlación entre rediseños y aumento de conversión (datos duros)
- Score 5: Business case: "Cada $1 invertido en diseño generó $4 en revenue" + roadmap de iniciativas con ROI proyectado

**Brutal factor:** Traducir valor de diseño a lenguaje financiero.

---

#### Escenario 4: CTO Wants Designers to Code
**Setup:** El CTO propone que todos los diseñadores aprendan React para "cerrar la brecha con ingeniería". Tu equipo tiene skillset mixto (algunos saben, otros no).

**Opciones:**
- Score 2: Rechazar completamente: "diseñadores diseñan, devs codean" (crea silo)
- Score 4: Proponer upskilling voluntario con budget de capacitación
- Score 5: Proponer modelo híbrido: 1-2 "Design Engineers" especializados + resto colabora via design tokens y Storybook

**Brutal factor:** Versatilidad del equipo vs especialización.

---

### 2.4. Escenarios Positivos (+10 preguntas)

**Prioridad:** MEDIA (actualmente el simulador es 90% crisis)

#### Escenario 1: Unexpected Design Win
**Setup:** Tu rediseño del onboarding aumentó activación 45% (esperabas 15%). El CEO quiere que presentes en el All-Hands y se habla de promoción.

**Opciones:**
- Score 3: Aceptar el crédito solo (ignora al equipo)
- Score 4: Creditar al equipo completo en la presentación
- Score 5: Presentar como caso de estudio detallado: proceso, hipótesis, validación, colaboración cross-funcional (enseña a la org)

**Brutal factor:** Humildad vs visibilidad de carrera.

---

#### Escenario 2: Competitor Copies Your Design
**Setup:** El competidor principal acaba de lanzar un feature que es copia pixel-perfect de tu interfaz. El equipo lo toma como validación.

**Opciones:**
- Score 3: Celebrar públicamente "somos trendsetter" (alimenta ego)
- Score 4: Usarlo como motivación para innovar más rápido
- Score 5: Analizar por qué copiaron ESO específicamente: validar hipótesis y doblar apuesta en la dirección correcta

**Brutal factor:** Ego vs aprendizaje estratégico.

---

#### Escenario 3: Exceeded Hiring Goals
**Setup:** Lograste contratar 3 Seniors excelentes en 2 meses (esperabas 4 meses). Ahora tienes budget restante de $40K sin usar.

**Opciones:**
- Score 2: Guardarlo para el próximo año (budget conservador)
- Score 4: Invertirlo en tools premium que el equipo pidió (Dovetail, Maze)
- Score 5: Proponer contratar 1 contractor especializado en área crítica (research, accessibility) para upskilling del equipo

**Brutal factor:** Optimización de presupuesto sobrante.

---

#### Escenario 4: Team Nominated for Award
**Setup:** Tu equipo fue nominado a "Best Design Team" en un premio de la industria. Te piden enviar case study.

**Opciones:**
- Score 3: Delegar a un diseñador para que escriba el case study
- Score 4: Escribirlo tú mismo destacando el trabajo del equipo
- Score 5: Co-crear el case study con el equipo (workshop de storytelling) + usarlo internamente como template de documentación

**Brutal factor:** Visibilidad externa vs aprendizaje interno.

---

#### Escenario 5: Executive Asks for Design Leadership Advice
**Setup:** El CEO de otra startup te pide 1 hora de tu tiempo para pedir consejos sobre cómo estructurar su equipo de diseño.

**Opciones:**
- Score 2: Rechazar por falta de tiempo
- Score 4: Aceptar y dar consejos generales (networking)
- Score 5: Aceptar y estructurar como caso de estudio real: entender su contexto, dar frameworks aplicables, seguir en contacto (mentor externo)

**Brutal factor:** Generosidad profesional vs tiempo limitado.

---

#### Escenario 6: Product Goes Viral
**Setup:** Un feature que diseñaste se vuelve viral en redes sociales. 50K usuarios nuevos en 3 días. La infraestructura aguanta pero la UX no fue diseñada para ese volumen.

**Opciones:**
- Score 3: Celebrar el éxito y esperar que se estabilice
- Score 4: Tiger team de emergencia para arreglar bottlenecks críticos
- Score 5: Análisis rápido de qué está rompiendo + priorizar fixes por impacto vs celebrar públicamente el win (balance)

**Brutal factor:** Capitalizar momentum vs arreglar problemas urgentes.

---

#### Escenario 7: Design System Adoption Success
**Setup:** Después de 6 meses de evangelización, el 85% del producto usa el Design System (esperabas 60%). El Tech Lead propone que presenten juntos en una conferencia.

**Opciones:**
- Score 3: Aceptar presentar solo (visibilidad personal)
- Score 4: Co-presentar con Tech Lead (colaboración cross-funcional)
- Score 5: Co-presentar + invitar a un diseñador del equipo como tercer speaker (visibility para el equipo)

**Brutal factor:** Distribución de crédito y oportunidades.

---

#### Escenario 8: Retention Metrics Exceed Goals
**Setup:** Tu estrategia de "Empty States educacionales" aumentó retención D30 del 40% al 65%. El board pregunta "qué más podemos hacer".

**Opciones:**
- Score 3: Proponer más mejoras de UX genéricas
- Score 4: Analizar data: qué segmento específico mejoró más y doblar apuesta ahí
- Score 5: Proponer framework de "Retention by Design" aplicable a todo el producto + workshop con PMs para escalar el approach

**Brutal factor:** Capitalizar win táctico vs escalar estratégicamente.

---

#### Escenario 9: Designer Wants Promotion (Deserved)
**Setup:** Un Mid Designer claramente superó expectativas, lidera proyectos complejos, mentoriza juniors. Pide promoción a Senior y la merece 100%.

**Opciones:**
- Score 3: Promocionar inmediatamente (sin proceso formal)
- Score 4: Formalizar caso de promoción con RRHH y ejecutarlo en 1 mes
- Score 5: Co-crear "Promotion Pack" con el diseñador: documentar logros, presentar a liderazgo, usarlo como template para futuros casos

**Brutal factor:** Velocidad vs proceso escalable.

---

#### Escenario 10: Accessibility Compliance Ahead of Schedule
**Setup:** Lograste WCAG 2.1 AA compliance 2 meses antes del deadline legal. Legal está celebrando, el equipo orgulloso.

**Opciones:**
- Score 3: Celebrar internamente y seguir adelante
- Score 4: Publicar case study externo (PR + recruiting)
- Score 5: Proponer ir por AAA en features críticas + crear "Accessibility Champions Program" para mantener el momentum

**Brutal factor:** Conformarse con el win vs elevar el estándar.

---

### 2.5. Crisis Política Organizacional (+3 preguntas)

#### Escenario 1: VP of Product Fired Suddenly
**Setup:** El VP que te contrató fue despedido sin aviso. El interino es el ex-Head of Sales que no entiende diseño. Tienes 1:1 con él mañana.

**Opciones:**
- Score 2: Esperar a ver qué pasa (pasivo)
- Score 4: Preparar presentación de "Qué hace el equipo de diseño + impacto en revenue"
- Score 5: Agenda proactiva: proponer quick wins alineados a sales + educación gradual sobre diseño

**Brutal factor:** Adaptación política rápida.

---

#### Escenario 2: Merger/Acquisition Announced
**Setup:** Tu startup fue adquirida. La empresa compradora tiene equipo de diseño 3x más grande con procesos diferentes. Anuncian "integración en 90 días".

**Opciones:**
- Score 2: Resistir cambios para mantener tu cultura
- Score 4: Adoptar procesos de la empresa compradora inmediatamente
- Score 5: Proponer "Best of Both Worlds" workshop: evaluar procesos de ambos lados y crear híbrido

**Brutal factor:** Cambio cultural forzado.

---

#### Escenario 3: Co-Founder Conflict Public
**Setup:** Dos co-founders están peleando públicamente sobre dirección de producto. Uno quiere B2B, otro B2C. El equipo está paralizado esperando decisión.

**Opciones:**
- Score 2: Elegir un lado y diseñar para esa visión
- Score 4: Diseñar para ambas visiones en paralelo (desperdicio)
- Score 5: Facilitar workshop de decisión: mostrar data de usuarios + trade-offs + proponer decisión basada en go-to-market más viable

**Brutal factor:** Facilitación en conflicto ejecutivo.

---

### 2.6. Edge Cases Legales/Éticos (+4 preguntas)

#### Escenario 1: GDPR vs Growth Metrics
**Setup:** El Head of Growth quiere implementar tracking agresivo de behavioral data para personalización. Legal dice "técnicamente cumple GDPR si está en el modal de cookies", pero es ético cuestionable.

**Opcions:**
- Score 2: Implementar porque cumple legalmente
- Score 4: Proponer opt-in explícito en lugar de opt-out escondido
- Score 5: Diseñar "Privacy UX": transparencia total sobre qué se trackea + valor claro para el usuario a cambio

**Brutal factor:** Legalidad vs ética.

---

#### Escenario 2: Dark Pattern Request
**Setup:** El CEO pide que el botón de "Cancelar Suscripción" sea gris-sobre-gris y requiera 5 clics. Argumenta "es estándar en la industria, mira Spotify/Amazon".

**Opciones:**
- Score 1: Implementar el dark pattern (cómplice)
- Score 3: Negarte completamente (potencial conflicto)
- Score 5: Proponer "Retention Ética": flujo de cancelación con 1 clic PERO oferta de pausa/downgrade antes (retiene sin manipular)

**Brutal factor:** Negocio vs ética de diseño.

---

#### Escenario 3: Discriminatory Algorithm
**Setup:** El algoritmo de ML está rechazando aplicaciones de ciertos códigos postales (proxy de raza/clase). Data Science dice "es lo que los datos muestran". Legal dice "no es ilegal si no filtramos por raza directamente".

**Opciones:**
- Score 1: Implementar porque "los datos no mienten"
- Score 4: Rechazar el algoritmo y usar proceso manual
- Score 5: Proponer fairness audit: identificar bias, ajustar features, validar con diverse test group antes de lanzar

**Brutal factor:** Bias algorítmico y responsabilidad.

---

#### Escenario 4: Accessibility vs Deadline
**Setup:** Launch crítico en 48 horas. QA encuentra 15 violaciones WCAG 2.1 AA (contraste, navegación por teclado). Legal dice "no hay riesgo legal inmediato en nuestro mercado".

**Opciones:**
- Score 2: Lanzar y arreglar después (deuda ética)
- Score 4: Retrasar launch 1 semana para arreglar todo
- Score 5: Triage por severidad: arreglar 5 críticas en 48h + roadmap de las 10 restantes en próximos 2 sprints

**Brutal factor:** Inclusión vs timing de negocio.

---

### 2.7. Categorías Existentes con 1-2 preguntas (+6 preguntas)

Expandir categorías que están subrepresentadas:

- **User Research vs Negocio:** +2 preguntas
- **Trabajo Remoto:** +1 pregunta
- **Quality Assurance:** +1 pregunta
- **Career Growth:** +2 preguntas

*(Detalles por desarrollar según necesidad)*

---

## Phase 3: Difficulty Boost (20-30 preguntas existentes)

**Tiempo estimado:** 12-18 horas

### Estrategias para Aumentar Dificultad

#### 3.1. Agregar Presión Temporal Extrema
**Ejemplo:** Cambiar "tienes 2 semanas" → "es viernes 4 PM, lanzamiento el lunes"

**Preguntas a modificar:**
- `strategy_pivot_burnout` - Ya es brutal, mantener
- `metrics_vanity_vs_reality` - Agregar: "la ronda se cierra en 3 semanas, no 6"
- `okr_conflict_dashboard` - Agregar: "falta 1 semana para cerrar el quarter"
- `tokens_vs_hardcode_pressure` - Ya es brutal, mantener

---

#### 3.2. Aumentar Stakes Políticos
**Ejemplo:** Agregar conflictos entre executives, board pressure, amenaza de despidos

**Preguntas a modificar:**
- `sales_custom_demands` - Agregar: "el VP de Ventas amenazó con renunciar si pierden el deal"
- `dev_handoff_war_library` - Agregar: "el CTO está considerando offshore el equipo de dev"
- `enterprise_client_custom_request` - Agregar: "es el cliente #1, representa 40% del revenue"

---

#### 3.3. Hacer Opciones Score 4 MÁS Atractivas
**Ejemplo:** Que la opción score 4 suene perfectamente profesional y solo expertos noten la diferencia con score 5

**Preguntas a modificar:**
- `mobile_first_habit_change` - Hacer que "Quality Gate" suene más razonable
- `guerrilla_testing_speed` - Hacer que "criterio experto" suene más justificado con contexto
- `legacy_ui_refactor_strategy` - Hacer que "Forward Only" suene más estratégico

---

#### 3.4. Agregar Dilemas Éticos Sin Respuesta Obvia
**Ejemplo:** Conflictos entre transparencia total vs proteger al equipo de información dañina

**Preguntas a modificar:**
- `technical_debt_explosion` - Agregar: "algunos devs senior amenazan con irse si no se refactoriza"
- `burnout_detection_action` - Agregar: "el burnout es causado por un cliente tóxico que paga 30% del revenue"
- `promotion_readiness_debate` - Agregar: "hay otro candidato interno con más tiempo en la empresa"

---

#### 3.5. Introducir Información Contradictoria
**Ejemplo:** Data cuantitativa dice A, feedback cualitativo dice B

**Preguntas a modificar:**
- `vanity_metric_viral_growth` - Agregar: "pero el CAC orgánico es $0 vs $500 en paid ads"
- `competitor_feature_launch` - Agregar: "pero tu research muestra que tus usuarios priorizan otra cosa"
- `freemium_upgrade_friction` - Agregar: "pero el NPS cae 10 puntos con cada prompt"

---

#### 3.6. Aumentar Ambigüedad en Escenarios
**Ejemplo:** Quitar claridad sobre qué es exactamente "correcto"

**Preguntas a modificar:**
- `imposter_syndrome_senior` - Agregar: "pero efectivamente le falta skill en visual design"
- `critique_session_dominance` - Agregar: "los seniors tienen más contexto histórico que es valioso"
- `meeting_overload_protection` - Agregar: "pero los PMs argumentan que la colaboración requiere tiempo sincrónico"

---

### 3.7. Lista de 25 Preguntas Priorizadas para Difficulty Boost

**Alta Prioridad (10 preguntas):**
1. `metrics_vanity_vs_reality` - Reducir tiempo de ronda de inversión
2. `sales_custom_demands` - Agregar presión del VP de Ventas
3. `okr_conflict_dashboard` - Reducir tiempo restante de quarter
4. `mobile_first_habit_change` - Mejorar opción Quality Gate
5. `guerrilla_testing_speed` - Justificar más el criterio experto
6. `technical_debt_explosion` - Agregar amenaza de devs renunciando
7. `burnout_detection_action` - Cliente tóxico que paga mucho
8. `vanity_metric_viral_growth` - CAC orgánico vs paid
9. `freemium_upgrade_friction` - Impacto en NPS
10. `competitor_feature_launch` - Data contradictoria

**Media Prioridad (10 preguntas):**
11. `dev_handoff_war_library` - Amenaza de outsourcing
12. `enterprise_client_custom_request` - % de revenue más alto
13. `legacy_ui_refactor_strategy` - Presión de NPS crítico
14. `promotion_readiness_debate` - Competencia interna
15. `imposter_syndrome_senior` - Gap real de skills
16. `critique_session_dominance` - Valor de experiencia senior
17. `meeting_overload_protection` - Argumento de colaboración
18. `qa_reject_pixel_perfect` - Agregar cliente enterprise esperando
19. `documentation_handoff_speed` - Feature crítico de seguridad
20. `component_complexity_detach` - Deadline de migración de Sketch

**Baja Prioridad (5 preguntas):**
21. `copy_late_change_legal` - Agregar regulación específica (HIPAA, SOX)
22. `hiring_profile_gap_logic` - Presión de lanzamiento inminente
23. `accessibility_legal_threat_action` - Deadline legal más corto
24. `seo_vs_ux_url_structure` - % de tráfico SEO más crítico
25. `ai_feature_hype_cycle` - Board directamente exigiendo AI

---

## Estimación de Tiempo Total

| Phase | Tareas | Horas |
|-------|--------|-------|
| **Phase 1** | Completar 5 preguntas TIER 1.4 | 2-3h |
| **Phase 2** | 24-48 preguntas nuevas | 18-35h |
| | 2.1. Presupuesto & Hiring (6) | 4-6h |
| | 2.2. Service Design (5) | 3-5h |
| | 2.3. Manage Up (4) | 3-4h |
| | 2.4. Escenarios Positivos (10) | 6-8h |
| | 2.5. Crisis Política (3) | 2-3h |
| | 2.6. Edge Cases (4) | 3-4h |
| | 2.7. Categorías 1-2 preguntas (6) | 4-5h |
| **Phase 3** | Difficulty Boost (25 preguntas) | 12-18h |
| **TOTAL** | | **32-56h** |

### Desglose Realista
- **Mínimo viable:** +24 preguntas nuevas + 5 completar TIER 1.4 + 15 difficulty boost = **32 horas**
- **Objetivo ideal:** +48 preguntas nuevas + 5 completar TIER 1.4 + 25 difficulty boost = **56 horas**

---

## Recomendaciones de Ejecución

### Top 3 Prioridades de Nuevas Categorías

1. **Presupuesto & Hiring (6 preguntas)**
   - Razón: Completamente ausente, crítico para Director/VP level
   - Impact: Alto - diferencia real entre IC y líder

2. **Service Design (5 preguntas)**
   - Razón: Ausente, tendencia creciente en la industria
   - Impact: Alto - distingue product designers de service designers

3. **Manage Up (4 preguntas)**
   - Razón: Ausente, skill crítico para leads
   - Impact: Muy Alto - diferencia entre Senior y Lead más que skill técnico

### Estrategia de Implementación Sugerida

**Opción A: Incremental (recomendada)**
- Semana 1: Phase 1 (completar TIER 1.4)
- Semana 2-3: Phase 2.1-2.3 (15 preguntas top priority)
- Semana 4: Phase 3 (difficulty boost 10 preguntas)
- Semana 5-6: Phase 2.4-2.7 (resto de preguntas nuevas)
- Semana 7: Phase 3 (difficulty boost 15 preguntas restantes)

**Opción B: Por Categoría (alternativa)**
- Completar cada categoría end-to-end antes de pasar a la siguiente
- Permite validar formato y dificultad más rápido

**Opción C: Mínimo Viable (si hay prisa)**
- Phase 1 (5 preguntas)
- Top 3 categorías (15 preguntas)
- Difficulty boost top 10
- Total: ~20 horas, pool sube a 111 preguntas

---

## Métricas de Éxito

### Cuantitativas
- Pool final: 120-144 preguntas (objetivo: 132)
- Todas las categorías con mínimo 3 preguntas
- 80%+ de preguntas tienen opciones ambiguas (score 4 suena razonable)
- Distribución de scores:
  - Score 0: 12-15% (aumentar casos catastróficos)
  - Score 1: 10-12%
  - Score 2: 15-18%
  - Score 3: 10-12%
  - Score 4: 18-20% (aumentar opciones muy buenas)
  - Score 5: 33% (1 por pregunta)

### Cualitativas
- Ninguna pregunta tiene respuesta "obvia" sin contexto
- Expertos con 10+ años debaten sobre score 4 vs 5
- Escenarios reflejan edge cases reales (no solo happy path)
- Balance entre crisis (60%) y escenarios positivos (40%)

---

## Próximos Pasos Inmediatos

1. **Validar este plan** con el usuario
2. **Elegir estrategia de implementación** (A, B o C)
3. **Comenzar con Phase 1** (completar TIER 1.4 - 2-3 horas)
4. **Iterar basado en feedback** del primer batch de preguntas nuevas

---

**Documento creado:** 2025-11-28
**Última actualización:** 2025-11-28
**Status:** Propuesta pendiente de aprobación
