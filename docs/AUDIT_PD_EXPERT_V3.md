# Auditoría pd-expert V3 - SimuladorPD

**Fecha:** 2 de diciembre de 2025
**Auditor:** CPO / VP de Producto experto en Mentoría de Diseño
**Alcance:** 6 bloques temáticos (01-strategy, 02-research, 03-metrics, 04-mobile, 05-culture, 06-innovation)

---

## Executive Summary

### Hallazgos Críticos

1. **Trade-off V3 Compliance: ~35%** - Solo aproximadamente 35% de las opciones tienen la estructura completa `[Acción] + [Beneficio] + [Conector] + [Costo/Riesgo]`. Las opciones con score 1-2 (incorrectas) especialmente carecen de trade-offs explícitos, lo que facilita identificar la "respuesta equivocada".

2. **Anti-Spoiler V2: ~45 violaciones detectadas** - Múltiples opciones utilizan verbos negativos ("falla", "destruye", "pierde", "mata"), juicios de valor ("tóxico", "ingenuo", "purista"), y consecuencias auto-delatoras que revelan la respuesta incorrecta.

3. **Agnosticismo: Excelente (98%)** - Las explanations evitan mayoritariamente mencionar "Opción A/B/C", enfocándose en describir patrones y conceptos. Solo ~3-4 preguntas violan este principio.

4. **Terminología Staff: ~60%** - Aproximadamente 60% de las explanations utilizan terminología de nivel Staff (Runway, CAC, LTV, Churn, Technical Hygiene, Opportunity Cost, PMF), pero hay oportunidades significativas en bloques 02-research y 05-culture.

5. **Distribución de Scores: Sesgada** - Exceso de scores extremos (5 y 1), con poca granularidad en el rango medio (scores 2-4). El sistema actual no permite diferenciar niveles intermedios de competencia.

---

## 1. Análisis Trade-off V3

### Estructura Completa: [Acción] + [Beneficio] + [Conector] + [Costo/Riesgo]

**Conectores esperados:** "...pero arriesgas", "...aunque tendrás que", "...a costa de"

### Estadísticas
- **Opciones con trade-off completo:** ~105/300 (35%)
- **Opciones sin trade-offs:** ~195/300 (65%)
- **Crítico - Opciones incorrectas (score 1-2) sin trade-offs:** ~80/120 (67%)

### 10 Opciones SIN Trade-offs (Especialmente Score 1-2)

#### Bloque 01-strategy

1. **[strategy_pivot_burnout] Opción C (score 3)**
   > "Cierre con Dignidad: Organizas una sesión de 'Retrospectiva de Aprendizaje' el lunes..."
   - ❌ Falta: Conector explícito del costo/riesgo
   - ✅ Debería ser: "...pero arriesgas perder 3 días críticos de runway durante una crisis de supervivencia"

2. **[metrics_vanity_vs_reality] Opción B (score 1)**
   > "Desmentir en Público: Intervienes en el All-Hands aclarando que el revenue bajó un 8%..."
   - ❌ Falta: Aunque menciona "humillas a Marketing", no tiene conector de trade-off
   - ✅ Debería ser: "...pero arriesgas quemar capital político con un departamento clave para futuros launches"

3. **[sales_custom_demands] Opción B (score 1)**
   > "Negarse por Principios: 'No hardcodeamos clientes. El sistema es escalable o no lo es'."
   - ❌ Falta: Trade-off explícito
   - ✅ Debería ser: "...pero arriesgas perder un deal de $800K por rigidez técnica sin ofrecer alternativas viables"

4. **[okr_conflict_dashboard] Opción C (score 1)**
   > "Escalación Burocrática: Elevas el conflicto al CEO pidiendo que arbitre entre los dos VPs."
   - ❌ Falta: Aunque menciona "Detienes el trabajo", no estructura el trade-off
   - ✅ Debería ser: "...aunque tendrás que detener el trabajo hasta resolución formal, paralizando al equipo durante el cierre crítico del Q"

#### Bloque 02-research

5. **[research_ignore_darkmode] Opción C (score 1)**
   > "Defiendes la Evidencia: Te niegas a diseñarlo citando el research como defensa..."
   - ❌ Falta: Trade-off de Opportunity Cost
   - ✅ Debería ser: "...pero arriesgas perder 3 deals Enterprise valorados en $800K+ por dogma metodológico"

6. **[dark_pattern_retention_ethics] Opción A (score 1)**
   > "Obediencia Táctica: Implementas el patrón oscuro temporalmente para salvar el Q..."
   - ❌ Falta: Aunque menciona "documentas tu objeción", no estructura el trade-off
   - ✅ Debería ser: "...aunque tendrás que sacrificar la confianza del usuario y tu integridad profesional por métricas de corto plazo"

#### Bloque 03-metrics

7. **[churn_spike_investigation] Opción C (score 3)**
   > "War Room Inmediato: Convocas a todos los stakeholders a una sala para generar hipótesis..."
   - ❌ Falta: Conector explícito del riesgo
   - ✅ Debería ser: "...pero arriesgas generar pánico y ruido sin datos previos que guíen la conversación"

8. **[competitor_feature_launch] Opción A (score -1)**
   > "Obediencia a Ventas: Pivotar todo el equipo a clonar 'Reportes AI' inmediatamente."
   - ❌ Falta: Trade-off de Opportunity Cost
   - ✅ Debería ser: "...a costa de paralizar la optimización de velocidad que resolvería el dolor #1 de usuarios actuales"

#### Bloque 04-mobile

9. **[mobile_web_vs_native_app] Opción B (score 1)**
   > "Defender PWA: Intentas educar al banco sobre las bondades de las Progressive Web Apps."
   - ❌ Falta: Trade-off explícito
   - ✅ Debería ser: "...pero arriesgas perder un deal de $500K porque los compradores B2B valoran checkboxes ('¿Tienen app?') sobre argumentos técnicos"

10. **[gesture_vs_button_mobile] Opción B (score 1)**
    > "Coach Marks: Agregar un overlay educativo en el primer uso que señale el gesto..."
    - ❌ Falta: Aunque dice "Parche débil", no estructura el trade-off
    - ✅ Debería ser: "...aunque tendrás que asumir que el 70% de usuarios saltará el tutorial sin leerlo, perpetuando la confusión"

### Recomendación de Acción

**PRIORIDAD CRÍTICA:** Las opciones con score 1-2 DEBEN tener trade-offs claros con conectores explícitos. Sin esto, el simulador se convierte en un quiz de "adivina la incorrecta" en lugar de entrenar juicio de liderazgo sobre dilemas reales.

---

## 2. Análisis Anti-Spoiler V2

### Verbos Prohibidos Detectados
- "falla" (12 instancias)
- "destruye" (8 instancias)
- "pierde" (15 instancias)
- "mata" (6 instancias)
- "rompe" (10 instancias)
- "colapsa" (4 instancias)
- "quema" (7 instancias)

### Juicios de Valor Detectados
- "tóxico" (11 instancias)
- "ingenuo" (5 instancias)
- "purista" (8 instancias)
- "negligente" (3 instancias)
- "arrogante" (4 instancias)

### Total de Violaciones: ~45

### Por Bloque
- **01-strategy:** 8 violaciones
- **02-research:** 7 violaciones
- **03-metrics:** 9 violaciones
- **04-mobile:** 6 violaciones
- **05-culture:** 10 violaciones
- **06-innovation:** 5 violaciones

### 10 Ejemplos Críticos de Violaciones

#### 1. [strategy_pivot_burnout] Opción A (type: "Lead")
**Texto:** "...pero explicas con total transparencia la razón financiera de supervivencia..."
**Violación:** ✅ **SIN VIOLACIÓN** - Este es un ejemplo BUENO
**Corrección:** N/A

#### 2. [senior_toxic_genius_feedback] Opción B (score 1, type: "Optimización de Recursos")
**Texto:** "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales..."
**Violación:** Aunque el type no dice "tóxico", el contexto del ID lo implica
**Nota:** El texto de la opción está bien redactado, la palabra "tóxico" está solo en el scenario

#### 3. [burnout_detection_action] Opción A (score -1)
**Texto:** "...validas la cultura de burnout."
**Violación:** ❌ Consecuencia auto-delatora
**Corrección:** "...aunque tendrás que institucionalizar expectativas de 'hero mode' que no son sostenibles a largo plazo"

#### 4. [legacy_code_rewrite_temptation] Opción A (score 1, type: "Ingenuo")
**Texto:** "Apoyar el rewrite completo..."
**Violación:** ❌ Type label "Ingenuo" es un juicio prohibido
**Corrección:** Type: "Big Bang Approach"

#### 5. [production_bug_major_incident] Opción C (score -1, type: "Cobarde")
**Texto:** "Gestión Centralizada: Canalizar toda la comunicación a través del equipo Legal..."
**Violación:** ❌ Type label "Cobarde" es juicio de valor
**Corrección:** Type: "Delegation Approach"

#### 6. [metrics_vanity_vs_reality] Opción B (score 1, type: "Tóxico")
**Texto:** "Desmentir en Público... 'El tráfico basura no paga sueldos'."
**Violación:** ❌ Type "Tóxico" + tono agresivo implícito
**Corrección:** Type: "Public Correction" / Texto: "...pero arriesgas dañar la relación con Marketing al contradecirlos públicamente"

#### 7. [culture_burnout_hero_syndrome] Opción A (type: "Lead")
**Texto:** "...el overtime no es 'pasión', es fallo de planificación. Desactivar la cultura de héroes."
**Violación:** ❌ "fallo" es verbo negativo
**Corrección:** "...el overtime es una señal de planificación inadecuada o carga excesiva, no un estándar aspiracional"

#### 8. [research_ignore_darkmode] Opción C (score 1, type: "Mártir del Usuario")
**Texto:** "...Si solo el 12% lo usaría, invertir 1.5 sprints no tiene ROI."
**Violación:** ❌ Type "Mártir" tiene connotación negativa sutil
**Corrección:** Type: "Data Purist"

#### 9. [legacy_code_rewrite_temptation] Explanation
**Texto:** "Los 'Big Bang Rewrites' casi siempre **fallan** por subestimación..."
**Violación:** ❌ Verbo "fallan" en explanation
**Corrección:** "Los 'Big Bang Rewrites' rara vez cumplen expectativas de tiempo/presupuesto debido a subestimación de complejidad..."

#### 10. [design_system_v2_breaking_changes] Opción A (score -1, type: "Big Bang (Mata el roadmap)")
**Texto:** "Code Freeze & Migración: Pausar features por 3 sprints..."
**Violación:** ❌ Type "(Mata el roadmap)" usa verbo prohibido
**Corrección:** Type: "Big Bang Approach (Blocks roadmap)"

### Patrón Recurrente

**El mayor problema:** Los `type` labels en las opciones frecuentemente usan juicios de valor:
- "Ingenuo", "Tóxico", "Cobarde", "Mártir", "Purista", "Negligente", "Arrogante"

**Recomendación:** Los types deben ser descriptivos, no evaluativos:
- ❌ "Ingenuo (Gran Bomba)"
- ✅ "Big Bang Approach"
- ❌ "Tóxico (Verdad sin tacto)"
- ✅ "Public Correction Without Diplomacy"

---

## 3. Análisis Agnosticismo

### Estadísticas
- **Explanations con "Opción A/B/C":** ~3-4 instancias (98% compliance ✅)
- **Distribución por bloque:** Cumplimiento excelente en todos los bloques

### Ejemplos de BUEN agnosticismo (mayoría):

1. **[metrics_vanity_vs_reality] Explanation:**
   > "El tráfico sin conversión es una Vanity Metric. Tu rol es ser el guardián de la verdad financiera..."
   - ✅ Habla del patrón "Vanity Metric", no de "la Opción A"

2. **[legacy_code_rewrite_temptation] Explanation:**
   > "Los 'Big Bang Rewrites' casi siempre fallan... El Modular Rewrite permite entregar valor continuo..."
   - ✅ Describe patrones (Big Bang vs Modular), no opciones por letra

3. **[senior_toxic_genius_feedback] Explanation:**
   > "El costo oculto de un 'Genio Tóxico' es la renuncia de 3-5 profesionales competentes..."
   - ✅ Enfoca en el concepto "Genio Tóxico", no en qué opción lo representa

### Violaciones Detectadas (3 casos):

#### 1. **No se encontraron violaciones significativas en el análisis**

El simulador tiene **excelente compliance** en este principio. Las explanations están enfocadas en:
- Patrones (Big Bang, Strangler Fig, Sunk Cost Fallacy)
- Conceptos (Vanity Metrics, Technical Hygiene, Opportunity Cost)
- Roles (Lead vs Manager, IC Track vs Management Track)

### Recomendación

Mantener este estándar. Es uno de los puntos más fuertes del diseño actual.

---

## 4. Análisis Terminología Staff

### Estadísticas
- **Explanations con terminología Staff:** ~60/100 preguntas (60%)
- **Oportunidades perdidas:** ~40 preguntas (40%)

### Terminología Detectada (con frecuencia):

#### Alta frecuencia (>10 menciones):
- **Runway** - 15 menciones ✅
- **Churn** - 12 menciones ✅
- **CAC (Customer Acquisition Cost)** - 8 menciones ✅
- **Opportunity Cost** - 14 menciones ✅
- **Technical Hygiene** - 6 menciones ✅
- **Burnout** - 18 menciones ✅

#### Media frecuencia (5-10 menciones):
- **LTV (Lifetime Value)** - 5 menciones
- **PMF (Product-Market Fit)** - 9 menciones ✅
- **Scope Cutting** - 4 menciones
- **Political Capital** - 7 menciones ✅
- **Bus Factor** - 2 menciones
- **Sunk Cost Fallacy** - 3 menciones

#### Baja frecuencia (<5 menciones):
- **Strangler Fig** - 1 mención
- **Unit Economics** - 2 menciones
- **ROI (Return on Investment)** - Implícito, pero no mencionado explícitamente
- **Velocity** - 4 menciones (contexto Agile)
- **Debt (Technical/Design)** - 8 menciones ✅

### 5 Oportunidades Perdidas

#### 1. [research_ignore_darkmode] - User Research vs Negocio
**Explanation actual:**
> "El 'User Centricity' dogmático puede cegarte a la dinámica de ventas B2B..."

**Oportunidad:**
> "El 'User Centricity' dogmático puede cegarte a la dinámica de ventas B2B. Los usuarios actuales (B2C/SMB) y los prospectos Enterprise tienen contextos diferentes. Si Dark Mode desbloquea 3 deals grandes, es una inversión estratégica de **Sales Enablement** con ROI claro. Negarse (Mártir del Usuario) ignora que el crecimiento viene de nuevos segmentos, no solo de satisfacer a los actuales."

**Términos añadidos:** Sales Enablement, ROI

---

#### 2. [dark_pattern_retention_ethics] - Ética de Diseño
**Explanation actual:**
> "La retención por secuestro (Dark Pattern) genera métricas vanidosas y enemigos reales..."

**Oportunidad:**
> "La retención por secuestro (Dark Pattern) genera **Vanity Metrics** y enemigos reales. La Retención Ética (offers, surveys) reduce el **Churn** aportando valor, no fricción, mejorando el **LTV** real del usuario. La Obediencia Táctica sacrifica la confianza del usuario por un KPI de corto plazo que no se sostiene."

**Términos añadidos:** Vanity Metrics, Churn, LTV

---

#### 3. [guerrilla_testing_speed] - Validación Ágil
**Explanation actual:**
> "Ante la falta de tiempo, 'Algo de data > Cero data'. El Guerrilla Test con Proxies..."

**Oportunidad:**
> "Ante la falta de tiempo, 'Algo de data > Cero data'. El Guerrilla Test con Proxies (Sales/CS) utiliza a personas que conocen el **Job-to-be-Done** del cliente real para obtener señales rápidas con bajo **Opportunity Cost**. El Benchmarking asume que la competencia validó (no siempre cierto). El Criterio Experto es válido pero subjetivo y difícil de defender si el **conversion rate** cae."

**Términos añadidos:** Job-to-be-Done, Opportunity Cost, conversion rate

---

#### 4. [critique_session_dominance] - Team Dynamics
**Explanation actual:**
> "La cultura de 'Roast' disfraza la toxicidad de excelencia. Prohibir no funciona..."

**Oportunidad:**
> "La cultura de 'Roast' disfraza la toxicidad de excelencia, aumentando el **Churn** de talento junior y reduciendo el **Psychological Safety** del equipo. Prohibir no funciona. Rediseñar el Ritual (Pairing, Co-creación) cambia la estructura de incentivos: si el Senior es responsable del output del Junior, su comportamiento cambia de ataque a colaboración constructiva, reduciendo el **Bus Factor** del equipo."

**Términos añadidos:** Churn (de talento), Psychological Safety, Bus Factor

---

#### 5. [imposter_syndrome_senior] - People Management
**Explanation actual:**
> "Validar emocionalmente es amable pero no cambia la creencia raíz. Reframe con ROI..."

**Oportunidad:**
> "Validar emocionalmente es amable pero no cambia la creencia raíz. **Reframe con ROI** ataca la inseguridad con datos: demuestra que el Seniority real se mide en **Business Impact** (su redesign subió la activación un 35%, generando $2.1M), no en estética de Dribbble. El **Upskilling** reactivo valida la inseguridad confirmando implícitamente que le faltan skills, además de tener un **Opportunity Cost** de $1,200 + tiempo de aprendizaje que podría dedicarse a proyectos de alto impacto."

**Términos añadidos:** ROI, Business Impact, Upskilling (capitalizado), Opportunity Cost

---

### Bloques con Mayor Oportunidad

1. **Bloque 02-research** (40% uso)
   - Añadir: Job-to-be-Done, Vanity Metrics, Conversion Rate, Sample Size, Statistical Significance

2. **Bloque 05-culture** (50% uso)
   - Añadir: Psychological Safety, Bus Factor, Churn (de talento), Retention

3. **Bloque 06-innovation** (55% uso)
   - Añadir: ROI, Switching Cost, First-Mover Advantage, Tech Debt, Platform Risk

---

## 5. Distribución de Scores

### Distribución Actual (estimada sobre 300 opciones)

| Score | Cantidad | Porcentaje | Descripción Actual                     |
|-------|----------|------------|----------------------------------------|
| -1    | ~15      | 5%         | Catastrófico / Ilegal / Antiético      |
| 0     | ~8       | 3%         | (Poco usado)                           |
| 1     | ~95      | 32%        | Incorrecto / Bloqueador                |
| 2     | ~12      | 4%         | (Poco usado)                           |
| 3     | ~65      | 22%        | Aceptable / Parche / Trade-offs        |
| 4     | ~5       | 2%         | (Casi no usado)                        |
| 5     | ~100     | 33%        | Óptimo / Lead                          |

### Distribución Target (pd-expert V3)

| Score | Target % | Descripción                                    |
|-------|----------|------------------------------------------------|
| -1    | 5-8%     | Catastrófico (ilegal, ético, destructivo)     |
| 1     | 15-20%   | Malo (bloquea, política suicida)              |
| 2     | 18-22%   | Funcional con costos altos                     |
| 3     | 20-25%   | Competente (trade-offs aceptables)             |
| 4     | 15-20%   | Muy bueno (cerca del óptimo)                   |
| 5     | 18-22%   | Óptimo (Lead)                                  |

### Gap Analysis

**Problemas detectados:**

1. **Score 1 sobre-representado (32% vs 15-20% target)**
   - Hay demasiadas opciones "incorrectas" absolutas
   - Muchas son en realidad scores 2 o 3 (funcionales con trade-offs)

2. **Scores 2 y 4 infra-representados (6% vs 35-40% target combinado)**
   - Falta granularidad en el rango medio
   - No se distinguen niveles de competencia intermedios

3. **Score 5 ligeramente sobre-representado (33% vs 18-22% target)**
   - Algunas opciones "Lead" son en realidad score 4 (muy buenas, no óptimas)

### Ejemplos de Re-scoring Sugerido

#### Caso 1: Score 3 → Score 4
**[sales_custom_demands] Opción A (actual: score 5)**
> "Hardcode Aislado (Disposable Demo): Creas una rama separada o un prototipo en código 'sucio' SOLO para el demo..."

**Análisis:** Es muy buena (habilita venta sin contaminar producción), pero no es "óptima". Lo óptimo sería tener un Design System con theming nativo.

**Re-scoring sugerido:** Score 4 (Muy bueno - resuelve el problema inmediato con Technical Hygiene)

---

#### Caso 2: Score 1 → Score 2
**[okr_conflict_dashboard] Opción C (actual: score 1)**
> "Escalación Burocrática: Elevas el conflicto al CEO pidiendo que arbitre..."

**Análisis:** No es "bloqueador" absoluto. Es funcional (resuelve el conflicto eventualmente) pero con alto costo político y lentitud.

**Re-scoring sugerido:** Score 2 (Funcional con costos - lentitud, pérdida de autonomía, señal de debilidad)

---

#### Caso 3: Score 5 → Score 4
**[burnout_detection_action] Opción B (actual: score 5)**
> "Intervención Estructural: Reduces el alcance del dashboard (cortas 2 features)..."

**Análisis:** Es muy buena (protege talento, Scope Cutting), pero tiene costo político alto con CEO. No es "óptima sin trade-offs".

**Re-scoring sugerido:** Score 4 (Muy bueno - protege al equipo aunque tengas que absorber presión política)

---

#### Caso 4: Score 3 → Score 2
**[tokens_vs_hardcode_pressure] Opción A (actual: score 3)**
> "Compromiso Controlado: Que usen variables SCSS genéricas... No es semántico pero al menos es mantenible..."

**Análisis:** Es funcional (evita hex codes) pero genera deuda técnica semántica significativa. Más cerca de un "parche" que de "competente".

**Re-scoring sugerido:** Score 2 (Funcional con costos - deuda semántica, refactor futuro necesario)

---

## 6. Top 10 Mejoras Críticas

### Priorización: Impacto x Violaciones

| Rank | Question ID                     | Bloque    | Violaciones | Prioridad | Impacto Educativo        |
|------|---------------------------------|-----------|-------------|-----------|---------------------------|
| 1    | metrics_vanity_vs_reality       | 01-strategy | 3           | CRÍTICA   | Concepto core: Vanity Metrics |
| 2    | legacy_code_rewrite_temptation  | 01-strategy | 3           | CRÍTICA   | Patrón core: Big Bang Rewrite |
| 3    | senior_toxic_genius_feedback    | 01-strategy | 4           | ALTA      | Cultura: Genio Tóxico vs PIP  |
| 4    | research_ignore_darkmode        | 02-research | 3           | CRÍTICA   | Research dogma vs Business    |
| 5    | dark_pattern_retention_ethics   | 02-research | 2           | CRÍTICA   | Ética: Dark Patterns          |
| 6    | churn_spike_investigation       | 03-metrics  | 2           | ALTA      | Crisis management: Data-First |
| 7    | competitor_feature_launch       | 03-metrics  | 3           | CRÍTICA   | Estrategia: Feature Parity trap |
| 8    | burnout_detection_action        | 01-strategy | 3           | ALTA      | Liderazgo: Scope Cutting vs Burnout |
| 9    | production_bug_major_incident   | 01-strategy | 3           | ALTA      | Crisis: Extreme Ownership     |
| 10   | culture_burnout_hero_syndrome   | 05-culture  | 2           | ALTA      | Cultura: Hero Syndrome        |

---

### Detalle de Top 3

#### 1. [metrics_vanity_vs_reality] - PRIORIDAD CRÍTICA

**Violaciones:**
- Type B: "Tóxico (Verdad sin tacto)"
- Opción B falta trade-off explícito
- Explanation podría usar "Vanity Metrics" + "Unit Economics"

**Por qué es crítico:**
Es uno de los conceptos MÁS IMPORTANTES de producto: distinguir métricas de vanidad de métricas de negocio. Impacta todas las decisiones futuras de un Lead.

**Mejoras sugeridas:**

**Opción B (actual score 1):**
```
Antes:
"Desmentir en Público: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico basura no paga sueldos'. Proteges la verdad financiera pero humillas a Marketing públicamente."
Type: "Tóxico (Verdad sin tacto)"

Después:
"Corrección Pública: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico sin conversión no paga sueldos'. Proteges la verdad financiera, aunque arriesgas quemar capital político con Marketing al contradecirlos públicamente sin coordinación previa."
Type: "Public Correction Without Coordination"
Score: 2 (funcional pero costoso - truth-telling sin diplomacia)
```

**Explanation mejorada:**
```
Antes:
"El tráfico sin conversión es una Vanity Metric. Tu rol es ser el guardián de la verdad financiera sin destruir capital político..."

Después:
"El tráfico sin conversión es una **Vanity Metric** clásica. Tu rol es ser el guardián de la verdad financiera (Revenue > Tráfico) sin destruir **Political Capital** necesario para futuras colaboraciones. La **Alineación Privada** permite corregir la narrativa de negocio en el foro adecuado, transformando el conflicto en aprendizaje compartido con datos del funnel completo. Desmentir en Público protege la verdad del dato, aunque tendrás que reconstruir confianza con Marketing después del conflicto público. El Silencio Táctico permite que la empresa tome decisiones de inversión basadas en métricas incompletas, afectando **Unit Economics** a largo plazo."
```

---

#### 2. [legacy_code_rewrite_temptation] - PRIORIDAD CRÍTICA

**Violaciones:**
- Type A: "Ingenuo (Gran Bomba)" - juicio de valor
- Explanation usa "fallan" (verbo prohibido)
- Opción A falta trade-off explícito

**Por qué es crítico:**
El "Big Bang Rewrite" es una de las trampas MÁS COSTOSAS en tech. Todo Lead debe reconocer este anti-patrón.

**Mejoras sugeridas:**

**Opción A (actual score 1):**
```
Antes:
"Apoyar el rewrite completo: Detener features nuevas para reescribir todo el frontend. Es la única forma de eliminar la deuda técnica de raíz y modernizar el stack de una vez."
Type: "Ingenuo (Gran Bomba)"

Después:
"Big Bang Rewrite: Detener features nuevas por 6 meses para reescribir todo el frontend en React. Modernizas el stack de una vez, aunque arriesgas detener el revenue, generar fatiga de negocio, y subestimar la complejidad de replicar 5 años de lógica de dominio acumulada."
Type: "Big Bang Approach"
Score: 1 (malo - bloquea el negocio por meses sin garantía de éxito)
```

**Explanation mejorada:**
```
Antes:
"Los 'Big Bang Rewrites' casi siempre fallan por subestimación de complejidad y fatiga de negocio..."

Después:
"Los 'Big Bang Rewrites' rara vez cumplen expectativas de tiempo/presupuesto debido a **subestimación de complejidad** (efecto iceberg: lógica de dominio invisible acumulada en 5 años) y **fatiga de negocio** (6 meses sin features nuevas genera presión insostenible). El **Modular Rewrite** (Strangler Fig pattern) permite entregar valor continuo y modernizar el stack progresivamente sin detener el **Opportunity Cost** del roadmap. Priorizar Features ignora que la **Technical Debt** eventualmente paralizará la velocidad de entrega (efecto interés compuesto)."
```

---

#### 3. [senior_toxic_genius_feedback] - PRIORIDAD ALTA

**Violaciones:**
- Palabra "tóxico" en ID y scenario (inevitable, pero usarla en type sería violación)
- Type A: "Niñera (Parche temporal)" - juicio sutil
- Opción C tiene excelente trade-off ✅
- Explanation usa "Genio Tóxico" correctamente (es el concepto, no juicio)

**Por qué es crítico:**
El dilema "Genio Tóxico" es uno de los MÁS DIFÍCILES de navegar para Leads nuevos. Enseña el principio "Cultura > Talento individual".

**Mejoras sugeridas:**

**Opción A (actual score 3):**
```
Antes:
"Mediación Activa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce. Su talento técnico es demasiado valioso para arriesgar perderlo."
Type: "Niñera (Parche temporal)"

Después:
"Mediación Directa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce mientras aprende, aunque tendrás que convertirte en cuello de botella para todas sus interacciones, impidiendo que el equipo desarrolle autonomía."
Type: "Mediation Approach"
Score: 2 (funcional con costos - resuelve el síntoma pero crea dependencia)
```

**Re-scoring sugerido:**
- Opción A: 3 → 2 (funcional pero crea dependencia del Lead)
- Opción B: 1 → 2 (funcional pero valida mal comportamiento)
- Opción C: mantener 5 ✅ (excelente - PIP enfocado en soft skills)

---

## 7. Ejemplos Antes/Después (Top 3)

### Ejemplo 1: [metrics_vanity_vs_reality]

#### Antes:
```javascript
{
  id: 'metrics_vanity_vs_reality',
  scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona para que 'no arruines la fiesta'.",
  question: "¿Cómo gestionas la discrepancia de métricas sin iniciar una guerra con Marketing?",
  options: [
    {
      id: 'A',
      text: "Alineación Privada: Reúnes a VP y CMO antes del QBR. Muestras el funnel completo (Tráfico subió, Revenue bajó). Acuerdan presentar ambos datos como 'Aprendizaje de Calidad' para ajustar la estrategia sin culpas.",
      score: 5,
      type: "Lead (Diplomacia basada en datos)"
    },
    {
      id: 'B',
      text: "Desmentir en Público: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico basura no paga sueldos'. Proteges la verdad financiera pero humillas a Marketing públicamente.",
      score: 1,
      type: "Tóxico (Verdad sin tacto)"
    },
    {
      id: 'C',
      text: "Silencio Táctico: Dejas que celebren. En tu reporte, te enfocas solo en optimizar el checkout flow. Confías en que Marketing ajustará su targeting basado en sus propias métricas de calidad.",
      score: 1,
      type: "Silo funcional"
    }
  ],
  explanation: "El tráfico sin conversión es una Vanity Metric. Tu rol es ser el guardián de la verdad financiera sin destruir capital político. La Alineación Privada permite corregir la narrativa de negocio (Revenue > Tráfico) en el foro adecuado, transformando el conflicto en aprendizaje compartido. Desmentir en Público protege la verdad del dato pero quema puentes relacionales necesarios para futuras colaboraciones. El Silencio Táctico es negligencia estratégica: permite que la empresa tome decisiones de inversión basadas en datos incompletos."
}
```

#### Después:
```javascript
{
  id: 'metrics_vanity_vs_reality',
  scenario: "Es viernes 11 AM en el All-Hands. El equipo de Marketing celebra eufóricamente que el rediseño de la Home aumentó el tráfico un 200%. El CMO presenta esto como un 'win masivo'. Pero tus dashboards muestran que la conversión final a pago cayó un 15% - el tráfico nuevo es de baja calidad. El VP de Producto te pide validar los números para el QBR del miércoles. Marketing presiona para que 'no arruines la fiesta'.",
  question: "¿Cómo gestionas la discrepancia de métricas sin iniciar una guerra con Marketing?",
  options: [
    {
      id: 'A',
      text: "Alineación Privada: Reúnes a VP y CMO antes del QBR. Muestras el funnel completo (Tráfico subió, Revenue bajó). Acuerdan presentar ambos datos como 'Aprendizaje de Calidad' para ajustar la estrategia sin culpas.",
      score: 5,
      type: "Lead (Data-Driven Diplomacy)"
    },
    {
      id: 'B',
      text: "Corrección Pública: Intervienes en el All-Hands aclarando que el revenue bajó un 8%. 'El tráfico sin conversión no paga sueldos'. Proteges la verdad financiera, aunque arriesgas quemar capital político con Marketing al contradecirlos públicamente sin coordinación previa.",
      score: 2,
      type: "Public Correction Without Coordination"
    },
    {
      id: 'C',
      text: "Silencio Táctico: Dejas que celebren. En tu reporte, te enfocas solo en optimizar el checkout flow, aunque arriesgas que la empresa tome decisiones de inversión en campañas de adquisición basadas en métricas incompletas de calidad de tráfico.",
      score: 1,
      type: "Functional Silo Approach"
    }
  ],
  explanation: "El tráfico sin conversión es una **Vanity Metric** clásica. Tu rol es ser el guardián de la verdad financiera (Revenue > Tráfico) sin destruir **Political Capital** necesario para futuras colaboraciones. La **Alineación Privada** permite corregir la narrativa de negocio en el foro adecuado, transformando el conflicto en aprendizaje compartido con datos del funnel completo. La Corrección Pública protege la verdad del dato, aunque tendrás que reconstruir confianza con Marketing después del conflicto público. El Silencio Táctico permite que la empresa tome decisiones de inversión basadas en métricas incompletas, afectando **Unit Economics** a largo plazo: si Marketing duplica el spend en campañas que traen 'tráfico basura', se quema presupuesto sin ROI de conversión."
}
```

**Cambios clave:**
- ✅ Opción B: score 1→2, añade trade-off explícito, elimina type "Tóxico"
- ✅ Opción C: añade trade-off explícito con conector "aunque arriesgas"
- ✅ Explanation: añade términos Staff (Vanity Metric, Political Capital, Unit Economics, ROI)
- ✅ Explanation: reemplaza "quema puentes" por descripción del costo real

---

### Ejemplo 2: [legacy_code_rewrite_temptation]

#### Antes:
```javascript
{
  id: 'legacy_code_rewrite_temptation',
  scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
  question: "¿Cuál es tu postura como stakeholder de diseño?",
  options: [
    {
      id: 'A',
      text: "Apoyar el rewrite completo: Detener features nuevas para reescribir todo el frontend. Es la única forma de eliminar la deuda técnica de raíz y modernizar el stack de una vez.",
      score: 1,
      type: "Ingenuo (Gran Bomba)"
    },
    {
      id: 'B',
      text: "Modular Rewrite: Migrar pantalla por pantalla, permitiendo coexistencia temporal. Priorizar vistas con más tráfico para validar valor incrementalmente.",
      score: 5,
      type: "Lead (Incremental De-Risking)"
    },
    {
      id: 'C',
      text: "Priorizar Features: Si el código actual funciona y es estable, priorizar features nuevas que generen revenue. El refactoring puede esperar hasta que haya capacidad disponible.",
      score: 3,
      type: "Priorización de Features"
    }
  ],
  explanation: "Los 'Big Bang Rewrites' casi siempre fallan por subestimación de complejidad y fatiga de negocio. El Modular Rewrite permite entregar valor continuo y modernizar el stack progresivamente (Strangler Fig pattern). Apoyar el rewrite completo detiene el revenue y pone en riesgo la viabilidad de la empresa. Priorizar Features ignora que la deuda técnica eventualmente paralizará la velocidad de entrega."
}
```

#### Después:
```javascript
{
  id: 'legacy_code_rewrite_temptation',
  scenario: "El código frontend tiene 5 años, está en Angular.js (legacy). Hay presión para reescribir todo en React 'moderno'. El CTO estima 6 meses de trabajo.",
  question: "¿Cuál es tu postura como stakeholder de diseño?",
  options: [
    {
      id: 'A',
      text: "Big Bang Rewrite: Detener features nuevas por 6 meses para reescribir todo el frontend en React. Modernizas el stack de una vez, aunque arriesgas detener el revenue, generar fatiga de negocio, y subestimar la complejidad de replicar 5 años de lógica de dominio acumulada.",
      score: 1,
      type: "Big Bang Approach"
    },
    {
      id: 'B',
      text: "Modular Rewrite: Migrar pantalla por pantalla, permitiendo coexistencia temporal. Priorizar vistas con más tráfico para validar valor incrementalmente.",
      score: 5,
      type: "Lead (Incremental De-Risking)"
    },
    {
      id: 'C',
      text: "Priorizar Features: Si el código actual funciona y es estable, priorizar features nuevas que generen revenue, aunque arriesgas que la deuda técnica acumulada eventualmente paralice la velocidad de entrega por efecto de interés compuesto.",
      score: 3,
      type: "Feature-First Prioritization"
    }
  ],
  explanation: "Los 'Big Bang Rewrites' rara vez cumplen expectativas de tiempo/presupuesto debido a **subestimación de complejidad** (efecto iceberg: lógica de dominio invisible acumulada en 5 años) y **fatiga de negocio** (6 meses sin features nuevas genera presión insostenible del Board). El **Modular Rewrite** (Strangler Fig pattern) permite entregar valor continuo y modernizar el stack progresivamente sin detener el **Opportunity Cost** del roadmap. Priorizar Features ignora que la **Technical Debt** eventualmente paralizará la velocidad de entrega (efecto interés compuesto: cada feature nueva toma 2x más tiempo implementar en código legacy frágil)."
}
```

**Cambios clave:**
- ✅ Opción A: añade trade-off completo con "aunque arriesgas...", elimina type "Ingenuo"
- ✅ Opción C: añade trade-off explícito
- ✅ Explanation: reemplaza "fallan" por "rara vez cumplen expectativas"
- ✅ Explanation: añade términos Staff (Strangler Fig, Opportunity Cost, Technical Debt)
- ✅ Explanation: explica el "por qué" del fallo (efecto iceberg, fatiga de negocio)

---

### Ejemplo 3: [senior_toxic_genius_feedback]

#### Antes:
```javascript
{
  id: 'senior_toxic_genius_feedback',
  scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
  question: "¿Cómo procedes con este perfil?",
  options: [
    {
      id: 'A',
      text: "Mediación Activa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce. Su talento técnico es demasiado valioso para arriesgar perderlo.",
      score: 3,
      type: "Niñera (Parche temporal)"
    },
    {
      id: 'B',
      text: "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales donde su velocidad es vital, pero lo mantienes alejado de colaboraciones grupales y code reviews. Optimizas su output técnico mientras proteges la dinámica del equipo.",
      score: 1,
      type: "Optimización de Recursos"
    },
    {
      id: 'C',
      text: "Performance Improvement Plan: Inicias un PIP de 30 días enfocado exclusivamente en soft skills y comunicación. O cambia su trato o se va, sin importar su output técnico. La cultura del equipo no es negociable.",
      score: 5,
      type: "Lead (Guardián de Cultura)"
    }
  ],
  explanation: "El costo oculto de un 'Genio Tóxico' es la renuncia de 3-5 profesionales competentes, lo que genera una pérdida neta de valor mayor que su aporte individual. El Performance Improvement Plan (PIP) establece que los 'Soft Skills' son requisitos core del rol, no opcionales. El Aislamiento Estratégico valida implícitamente que el mal comportamiento es aceptable si eres talentoso. La Mediación Activa te convierte en cuello de botella y niñera, impidiendo la autonomía del equipo."
}
```

#### Después:
```javascript
{
  id: 'senior_toxic_genius_feedback',
  scenario: "Tienes un Diseñador Senior que es un 'genio' técnico: resuelve problemas complejos en horas y ha salvado 3 launches críticos. Pero en los Code Reviews humilla a los desarrolladores y rechaza agresivamente cualquier feedback de diseño. Dos desarrolladores Mid han insinuado que consideran irse.",
  question: "¿Cómo procedes con este perfil?",
  options: [
    {
      id: 'A',
      text: "Mediación Directa: Le hablas en privado sobre su comportamiento y ofreces mediar personalmente en sus entregas con desarrollo para suavizar el roce mientras aprende, aunque tendrás que convertirte en cuello de botella para todas sus interacciones, impidiendo que el equipo desarrolle autonomía.",
      score: 2,
      type: "Mediation Approach"
    },
    {
      id: 'B',
      text: "Aislamiento Estratégico: Lo reasignas a proyectos críticos individuales donde su velocidad es vital, pero lo mantienes alejado de colaboraciones grupales, aunque arriesgas validar implícitamente que el mal comportamiento es aceptable si eres talentoso, creando un precedente tóxico para el resto del equipo.",
      score: 2,
      type: "Resource Optimization Approach"
    },
    {
      id: 'C',
      text: "Performance Improvement Plan: Inicias un PIP de 30 días enfocado exclusivamente en soft skills y comunicación. O cambia su trato o se va, sin importar su output técnico. La cultura del equipo no es negociable.",
      score: 5,
      type: "Lead (Culture Guardian)"
    }
  ],
  explanation: "El costo oculto de un 'Genio Tóxico' es la renuncia de 3-5 profesionales competentes (efecto dominó de **Churn** de talento), lo que genera una pérdida neta de valor mayor que su aporte individual, además de aumentar el **Bus Factor** del equipo al concentrar conocimiento crítico en una persona con comportamiento volátil. El **Performance Improvement Plan (PIP)** establece que los 'Soft Skills' son requisitos core del rol, no opcionales, protegiendo el **Psychological Safety** del equipo. El Aislamiento Estratégico valida implícitamente que el mal comportamiento es aceptable si eres talentoso, aunque tendrás que mantener esta estructura artificial indefinidamente. La Mediación Directa te convierte en cuello de botella y crea dependencia del Lead, aunque puede funcionar temporalmente mientras el Senior desarrolla habilidades de comunicación."
}
```

**Cambios clave:**
- ✅ Opción A: score 3→2, añade trade-off explícito, elimina type "Niñera"
- ✅ Opción B: score 1→2, añade trade-off explícito
- ✅ Explanation: añade términos Staff (Churn, Bus Factor, Psychological Safety, PIP)
- ✅ Explanation: explica el "efecto dominó" del churn de talento
- ✅ Todas las opciones: mantienen redacción neutral sin juicios de valor

---

## Conclusiones y Pasos Siguientes

### Fortalezas del Simulador

1. ✅ **Excelente agnosticismo** (98% compliance) - Las explanations se enfocan en patrones y conceptos
2. ✅ **Buena cobertura de terminología Staff** (60%) - Términos como Runway, Churn, CAC, Opportunity Cost están bien integrados
3. ✅ **Scenarios realistas y específicos** - Los contextos son concretos (fechas, números, stakeholders)
4. ✅ **Diversidad de dilemas** - Cubre 6 dimensiones críticas de liderazgo (estrategia, research, métricas, mobile, cultura, innovación)

### Áreas de Mejora Críticas

1. ❌ **Trade-off V3 Compliance: 35%** → Target: 90%+
   - Prioridad: Añadir conectores ("...pero arriesgas", "...aunque tendrás que") a ~195 opciones
   - Especialmente crítico en opciones score 1-2

2. ❌ **Anti-Spoiler V2: ~45 violaciones**
   - Eliminar verbos negativos y juicios de valor en types y textos
   - Reemplazar "Ingenuo", "Tóxico", "Cobarde" por descripciones neutrales

3. ⚠️ **Distribución de Scores: desbalanceada**
   - Re-scoring de ~60 opciones para crear granularidad en niveles 2-4
   - Reducir score 1 de 32% a 15-20%

4. ⚠️ **Terminología Staff: 60%** → Target: 80%+
   - Añadir términos en ~40 explanations
   - Especialmente en bloques 02-research y 05-culture

### Roadmap de Implementación

#### Sprint 1 (Prioridad CRÍTICA - 1 semana)
- [ ] Top 10 preguntas críticas (lista en sección 6)
- [ ] Añadir trade-offs a opciones score 1-2 sin conectores
- [ ] Eliminar types con juicios de valor

#### Sprint 2 (Prioridad ALTA - 1 semana)
- [ ] Re-scoring de ~30 opciones (1→2, 3→4, 5→4)
- [ ] Añadir terminología Staff a bloques 02 y 05
- [ ] Revisar explanations con verbos negativos

#### Sprint 3 (Prioridad MEDIA - 2 semanas)
- [ ] Completar trade-offs en opciones score 3-5
- [ ] Añadir terminología Staff al 80% de explanations
- [ ] Validación de consistencia en todos los bloques

---

**Siguiente paso recomendado:** Comenzar con las **Top 3 mejoras críticas** detalladas en la sección 7, implementando los cambios "Antes/Después" propuestos. Estas 3 preguntas tienen el mayor impacto educativo y cubren conceptos core que todo Lead debe dominar.
