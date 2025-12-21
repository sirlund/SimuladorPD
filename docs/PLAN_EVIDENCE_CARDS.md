# Plan de Mejora: Evidence Cards

> **Decisión:** Agregar campo `decisionSummary` a cada opción de pregunta.

## Problema Actual

Los cards de evidencia (costo/valor de liderazgo) tienen problemas de estructura y lógica que causan que la información mostrada sea confusa o incorrecta.

---

## Estructura de Datos Actual

### Fuente 1: `dynamicEvidence` (por arquetipo)

```javascript
// Ubicación: DebugIndexScreen.jsx > mockDynamicEvidence
{
  questionId: 'MOB-06',
  scenario: 'Aceptaste scope creep sin negociar impacto en fechas de entrega.',
  selectedOptionId: 'C',
  impact: {
    emoji: '📉',
    cost: '$100K',
    consequence: 'de roadmap destruido'
  }
}
```

### Fuente 2: `worstDecisions` (fallback genérico)

```javascript
// Ubicación: DebugIndexScreen.jsx > createMockAnalysis
{
  id: 'STR-04',
  scenario: 'Pipeline cayó 23% y el cierre promedio pasó de 18 a 32 días...',
  consequence: '💸 **Revenue:** Error en Gestión de OKRs',
  score: 1
  // ⚠️ NO tiene selectedOptionId
}
```

### Fuente 3: `originalQuestion` (de allQuestions)

```javascript
// Ubicación: src/data/questions/blocks/*.jsx
{
  displayId: 'MOB-06',
  category: 'Gestión de Roadmap',
  scenario: 'Es miércoles, día 4 de un sprint de 10 días. El PM te escribe por Slack: "Cambio pequeño: ¿podemos agregar un filtro por fecha en la lista de transacciones? Es solo un dropdown". Cuando haces el breakdown real, la cuenta es diferente: diseñar 4 estados (vacío, cargando, con data, error), responsive en 3 breakpoints, documentar para handoff, y coordinar QA. Total: 2 días de trabajo. El PM responde incrédulo: "¿2 días para un dropdown? Ventas lo necesita para el demo del viernes".',
  question: '¿Cómo educas sobre el costo real?',
  options: [
    { id: 'A', text: '**Service Mindset:** Aceptas el cambio...', score: 1 },
    { id: 'B', text: '**Iceberg Visualization:** Muestras el breakdown...', score: 5 },
    { id: 'C', text: '**Scrum Defense:** Te niegas citando la metodología...', score: 3 }
  ]
}
```

---

## UI Deseada

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Gestión de Roadmap                              MOB-06     │
│  ───────────────────                             -$100K     │
│  Aceptaste scope creep sin negociar impacto                 │
│  en fechas de entrega.                                      │
│                                                             │
│  ▼ Ver contexto                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ CONTEXTO                                            │    │
│  │                                                     │    │
│  │ Es miércoles, día 4 de un sprint de 10 días...     │    │
│  │ [escenario completo de la pregunta original]       │    │
│  │                                                     │    │
│  │ ¿Cómo educas sobre el costo real?                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mapeo de Campos

| UI Element | Valor | Fuente |
|------------|-------|--------|
| **Título** | "Gestión de Roadmap" | `originalQuestion.category` |
| **ID Tag** | "MOB-06" | `item.questionId` o `item.id` |
| **Costo** | "-$100K" | `item.impact.cost` |
| **Descripción** | "Aceptaste scope creep..." | `item.scenario` (del mock) |
| **Contexto (expandido)** | Escenario largo | `originalQuestion.scenario` |
| **Pregunta (expandido)** | "¿Cómo educas...?" | `originalQuestion.question` |

---

## Problemas Identificados

### 1. Descripción muestra contenido incorrecto
- **Esperado:** `item.scenario` (resumen corto del mock)
- **Actual:** A veces muestra `originalQuestion.scenario` (escenario largo truncado)
- **Causa:** Lógica compleja con múltiples fallbacks que se confunden

### 2. Lógica de `getDecisionSummary()` es confusa
```javascript
// Lógica actual (problemática)
const getDecisionSummary = () => {
  if (item.selectedOptionId && originalQuestion?.options) {
    // Busca opción seleccionada y extrae primera oración
    return firstSentence;
  }
  if (item.impact?.consequence) {
    return item.impact.consequence; // "de roadmap destruido" - no es útil
  }
  return `Decisión subóptima en ${title}.`;
};
```

### 3. `worstDecisions` tiene estructura diferente
- Usa `id` en vez de `questionId`
- Usa `consequence` en vez de `impact.consequence`
- No tiene `selectedOptionId`

### 4. El `item.scenario` del mock NO se usa
- Los mocks tienen buenos resúmenes: "Aceptaste scope creep sin negociar..."
- Pero la función no los utiliza

---

## Solución: Campo `decisionSummary` por Opción

Cada opción tendrá un campo `decisionSummary` con un resumen corto de "qué hiciste" si la elegiste:

```javascript
// Ejemplo: MOB-06
{
  displayId: 'MOB-06',
  category: 'Gestión de Roadmap',
  scenario: 'Es miércoles, día 4 de un sprint de 10 días...',
  question: '¿Cómo educas sobre el costo real?',
  options: [
    {
      id: 'A',
      text: '**Service Mindset:** Aceptas el cambio...',
      score: 1,
      type: 'Complaciente',
      decisionSummary: 'Aceptaste el scope creep para "demostrar agilidad".'
    },
    {
      id: 'B',
      text: '**Iceberg Visualization:** Muestras el breakdown...',
      score: 5,
      type: 'Lead',
      decisionSummary: 'Mostraste el costo real y negociaste un trade-off.'
    },
    {
      id: 'C',
      text: '**Scrum Defense:** Te niegas citando la metodología...',
      score: 3,
      type: 'Dogmático',
      decisionSummary: 'Rechazaste el cambio citando reglas del proceso.'
    }
  ]
}
```

### Ventajas

1. **Cohesión** - Todo lo relacionado a una opción está junto
2. **Menos errores** - No hay riesgo de keys que no matcheen
3. **Fácil de editar** - El resumen está junto a la opción
4. **Escalable** - Permite agregar más campos por opción en el futuro

---

## Plan de Implementación por Fases

### Fase 1: Agregar `decisionSummary` a las preguntas

**Archivos a modificar:**
- `src/data/questions/blocks/01-strategy.jsx`
- `src/data/questions/blocks/02-research.jsx`
- `src/data/questions/blocks/03-metrics.jsx`
- `src/data/questions/blocks/04-mobile.jsx`
- `src/data/questions/blocks/05-culture.jsx`
- `src/data/questions/blocks/06-innovation.jsx`

**Formato del `decisionSummary`:**
- Máximo 80-100 caracteres
- En segunda persona pasado: "Priorizaste...", "Rechazaste...", "Aceptaste..."
- Describe la ACCIÓN tomada, no el resultado

**Ejemplo de transformación:**
```javascript
// ANTES
{ id: 'A', text: '**Service Mindset:** Aceptas el cambio...', score: 1, type: 'Complaciente' }

// DESPUÉS
{ id: 'A', text: '**Service Mindset:** Aceptas el cambio...', score: 1, type: 'Complaciente', decisionSummary: 'Aceptaste el scope creep para demostrar agilidad.' }
```

### Fase 2: Actualizar `EvidenceItem` en LearningScreen

**Lógica simplificada:**
```javascript
const EvidenceItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  // 1. Encontrar pregunta original
  const questionId = item.questionId || item.id;
  const originalQuestion = allQuestions.find(q => q.displayId === questionId);

  // 2. Encontrar opción seleccionada
  const selectedOption = originalQuestion?.options?.find(o => o.id === item.selectedOptionId);

  // 3. Campos para UI
  const title = originalQuestion?.category || 'Decisión';
  const description = selectedOption?.decisionSummary || item.scenario || 'Decisión subóptima.';

  return (
    // ... render con title, description, expanded context
  );
};
```

### Fase 3: Actualizar `SuccessEvidenceItem`

Aplicar la misma lógica simplificada para los casos de éxito.

### Fase 4: Limpiar mocks en DebugIndexScreen

**Simplificar `mockDynamicEvidence`:**
```javascript
// ANTES
{
  questionId: 'MOB-06',
  scenario: 'Aceptaste scope creep sin negociar...', // Ya no necesario
  selectedOptionId: 'C',
  impact: { cost: '$100K', consequence: '...' }
}

// DESPUÉS
{
  questionId: 'MOB-06',
  selectedOptionId: 'C',
  impact: { cost: '$100K' }
}
```

El `scenario` ya no es necesario porque viene de `decisionSummary` en la pregunta.

---

## Resumen de Archivos a Modificar

| Fase | Archivo | Cambio |
|------|---------|--------|
| 1 | `src/data/questions/blocks/01-strategy.jsx` | Agregar `decisionSummary` a opciones |
| 1 | `src/data/questions/blocks/02-research.jsx` | Agregar `decisionSummary` a opciones |
| 1 | `src/data/questions/blocks/03-metrics.jsx` | Agregar `decisionSummary` a opciones |
| 1 | `src/data/questions/blocks/04-mobile.jsx` | Agregar `decisionSummary` a opciones |
| 1 | `src/data/questions/blocks/05-culture.jsx` | Agregar `decisionSummary` a opciones |
| 1 | `src/data/questions/blocks/06-innovation.jsx` | Agregar `decisionSummary` a opciones |
| 2 | `src/components/screens/LearningScreen.jsx` | Simplificar `EvidenceItem` |
| 3 | `src/components/screens/LearningScreen.jsx` | Simplificar `SuccessEvidenceItem` |
| 4 | `src/components/screens/DebugIndexScreen.jsx` | Limpiar mocks |

---

## Validación

### Checklist de QA
- [ ] Título muestra categoría de la pregunta
- [ ] Descripción muestra `decisionSummary` (resumen corto, sin truncar)
- [ ] Descripción NO repite el escenario del expandido
- [ ] Expandido muestra escenario completo + pregunta
- [ ] ID tag linkea correctamente a `/debug/screens?q=XXX`
- [ ] Costo se muestra correctamente
- [ ] Funciona para `dynamicEvidence` Y `worstDecisions`

### Casos de Prueba
1. Arquetipo con `dynamicEvidence` (ej: order-taker con MOB-06)
2. Arquetipo que usa `worstDecisions` como fallback
3. Success archetype (venture-architect con MET-06)

---

## Progreso

- [x] **Fase 1:** Agregar `decisionSummary` a preguntas prioritarias (MVP)
  - [x] 01-strategy.jsx (STR-01 a STR-08, STR-26, STR-30)
  - [x] 02-research.jsx (RES-09, RES-24)
  - [x] 03-metrics.jsx (MET-06, MET-16)
  - [x] 04-mobile.jsx (MOB-01, MOB-06, MOB-07)
  - [x] 05-culture.jsx (CUL-01, CUL-06, CUL-19, CUL-20, CUL-21)
  - [x] 06-innovation.jsx (INN-06, INN-15, INN-24, INN-26)
- [x] **Fase 2:** Actualizar `EvidenceItem` - prioriza `selectedOption.decisionSummary`
- [x] **Fase 3:** Actualizar `SuccessEvidenceItem` - misma lógica
- [x] **Fase 4:** Limpiar mocks - removido `scenario`, fijado IDs inválidos (STR-41/42 → STR-05/26)
- [ ] **Fase 5:** Completar `decisionSummary` en resto de preguntas (opcional, bajo demanda)
