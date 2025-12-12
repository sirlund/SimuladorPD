# Plan: Learning Report v2 - "Diagnóstico de Liderazgo"

## Objetivo
Transformar el reporte genérico actual en un **diagnóstico personalizado de coaching** que:
1. Identifique el "archetype dominante" (no solo listarlos)
2. Muestre consecuencias específicas de las decisiones
3. Proponga 3 recursos máximo (francotiradores, no biblioteca)
4. Dé una misión concreta y accionable

---

## Fase 1: Algoritmo de Diagnóstico Principal

### 1.1 Detectar el Sesgo Dominante (no lista de arquetipos)

```javascript
// Nuevo: Analizar cuál es el PATRÓN de error, no solo contar tipos
function detectDominantBias(failedQuestions, answers) {
  // 1. Agrupar errores por "tipo" de la opción elegida
  const biasPatterns = {
    'conflict-avoidant': 0,  // Evita conflicto con stakeholders
    'perfectionist': 0,      // Prioriza calidad sobre velocidad
    'people-pleaser': 0,     // Complace a todos, no decide
    'over-engineer': 0,      // Soluciones complejas
    'risk-averse': 0,        // Evita decisiones bold
  };

  // 2. Mapear tipos de opciones a biases
  const typeToPattern = {
    'Obediente': 'conflict-avoidant',
    'Complaciente': 'people-pleaser',
    'Sándwich': 'conflict-avoidant',
    'Compliance': 'conflict-avoidant',
    'Idealista': 'perfectionist',
    'Técnico': 'over-engineer',
    'Protector': 'risk-averse',
    // ... mapear todos
  };

  // 3. Calcular % de errores por patrón
  // 4. Retornar el dominante con su %
  return {
    id: 'conflict-avoidant',
    name: 'The Order Taker',
    percentage: 65,
    description: 'Evitas conflicto con stakeholders a costa del producto'
  };
}
```

### 1.2 Títulos de Diagnóstico por Bias

| Bias ID | Título Diagnóstico | Subtítulo |
|---------|-------------------|-----------|
| `conflict-avoidant` | "The Order Taker" | Paz a cualquier precio |
| `perfectionist` | "The Craftsman Trap" | La perfección como excusa |
| `people-pleaser` | "The Diplomat" | Todos felices, nada decidido |
| `over-engineer` | "The Architect" | Complejidad como comfort zone |
| `risk-averse` | "The Guardian" | Protección sobre progreso |
| `short-term` | "The Firefighter" | Apagando incendios eternamente |

---

## Fase 2: Consecuencias Específicas

### 2.1 Extraer las 3 peores decisiones

```javascript
function getWorstDecisions(failedQuestions, answers) {
  // Ordenar por score (peor primero) y luego por impacto
  return failedQuestions
    .filter(q => q.score <= 1) // Solo errores graves
    .slice(0, 3)
    .map(q => ({
      id: q.displayId,
      scenario: q.scenario.substring(0, 50) + '...',
      consequence: generateConsequence(q, answers[q.id]),
      icon: getConsequenceIcon(q.category)
    }));
}

function generateConsequence(question, answer) {
  // Mapear categorías a tipos de consecuencia
  const consequenceTemplates = {
    'Gestión de Crisis': '💀 Crisis mal manejada',
    'Producto vs Ventas': '💸 Revenue perdido',
    'Arquitectura de Sistemas': '📉 Deuda técnica acumulada',
    'Manage Up': '🔥 Credibilidad erosionada',
    'Estrategia de Producto': '🎯 Roadmap comprometido'
  };
  return consequenceTemplates[question.category] || 'Impacto negativo';
}
```

---

## Fase 3: Mapa de Calor de Competencias

### 3.1 Dimensiones a evaluar

| Dimensión | Cómo se calcula | Nivel |
|-----------|-----------------|-------|
| **Craft & Calidad** | Score en Design Systems + Research | Staff/Senior/Mid/Junior |
| **Visión de Negocio** | Score en Strategy + Metrics | Staff/Senior/Mid/Junior |
| **Política & Poder** | Score en Stakeholder + Manage Up | Staff/Senior/Mid/Junior |
| **Ejecución en Crisis** | Score en Crisis Management | Staff/Senior/Mid/Junior |

### 3.2 Feedback estilo VP

```javascript
const vpFeedback = {
  'Craft & Calidad': {
    staff: 'Tu instinto visual y de sistemas es impecable.',
    senior: 'Sólido en craft, pero a veces over-engineer.',
    mid: 'Buenos fundamentos, necesitas más exposición.',
    junior: 'Enfócate en los basics antes de escalar.'
  },
  'Política & Poder': {
    staff: 'Sabes navegar la organización sin quemarte.',
    senior: 'Bien posicionado, pero evitas conflictos clave.',
    mid: 'Te pliegas ante la autoridad. Usa datos como escudo.',
    junior: 'Necesitas entender cómo funciona el poder.'
  }
  // ...
};
```

---

## Fase 4: Recursos Francotirador

### 4.1 Lógica de selección (máximo 3)

```javascript
function getSniperResources(dominantBias, worstCompetency) {
  // 1. Un recurso para el BIAS dominante
  const biasResource = biasResources[dominantBias.id];

  // 2. Un recurso para la COMPETENCIA más débil
  const competencyResource = competencyResources[worstCompetency.id];

  // 3. Un video/artículo corto como quick win
  const quickWin = getQuickWin(dominantBias.id);

  return [biasResource, competencyResource, quickWin];
}
```

### 4.2 Recursos pre-curados por Bias

```javascript
const biasResources = {
  'conflict-avoidant': {
    type: 'article',
    title: 'The Art of Saying No',
    author: 'Marty Cagan',
    section: 'Product Strategy vs Sales Demands',
    url: 'https://www.svpg.com/the-art-of-saying-no/',
    why: 'Aprenderás a rechazar sin destruir relaciones'
  },
  'perfectionist': {
    type: 'book',
    title: 'Shape Up',
    author: 'Basecamp',
    section: 'Fixed Time, Variable Scope',
    url: 'https://basecamp.com/shapeup',
    why: 'La perfección es el enemigo de shipped'
  }
  // ...
};
```

---

## Fase 5: Misión del Lunes

### 5.1 Misiones por Bias

```javascript
const mondayMissions = {
  'conflict-avoidant': {
    trigger: 'solicitud que sabes que está mal',
    dont: ['Decir "Sí"', 'Decir "No"'],
    do: 'Di: "Podemos hacerlo, pero el costo es retrasar [X]. ¿Qué prefieres?"',
    principle: 'Pon el trade-off sobre la mesa'
  },
  'perfectionist': {
    trigger: 'feature que estás puliendo más de lo necesario',
    dont: ['Agregar un detalle más', 'Pedir otra ronda de feedback'],
    do: 'Pregunta: "¿Esto cambia la decisión del usuario?" Si no, ship it.',
    principle: 'Perfecto es lo que está en producción'
  }
  // ...
};
```

---

## Fase 6: Estructura del Nuevo Componente

### 6.1 Archivos a crear/modificar

```
src/
├── hooks/
│   └── useSessionAnalysis.js     # MODIFICAR: agregar diagnóstico v2
├── data/
│   └── learning/
│       ├── diagnoses.js          # NUEVO: títulos, descripciones de bias
│       ├── vpFeedback.js         # NUEVO: feedback por competencia
│       ├── mondayMissions.js     # NUEVO: misiones por bias
│       └── sniperResources.js    # NUEVO: recursos curados por bias
├── components/
│   └── screens/
│       └── LearningArticleScreen.jsx  # REHACER: nuevo diseño
```

### 6.2 Nuevo output de useSessionAnalysis

```javascript
return {
  // ... métricas existentes ...

  // NUEVO: Diagnóstico v2
  diagnosis: {
    title: 'The Order Taker',
    subtitle: 'La paz a cualquier precio',
    dominantBias: {
      id: 'conflict-avoidant',
      percentage: 65,
      description: '...'
    },
    hardTruth: 'Eres excelente ejecutor, pero...',
    worstDecisions: [
      { id: 'CUL-01', consequence: '💀 Cultura: Permitiste toxicidad' },
      { id: 'MOB-01', consequence: '💸 Negocio: Perdiste $200K' },
      { id: 'STR-19', consequence: '📉 Deuda: +2 sprints de retraso' }
    ],
    competencyMap: [
      { name: 'Craft & Calidad', level: 'staff', feedback: '...' },
      { name: 'Política & Poder', level: 'junior', feedback: '...' }
    ],
    sniperResources: [/* máximo 3 */],
    mondayMission: {
      trigger: '...',
      action: '...',
      principle: '...'
    }
  }
};
```

---

## Fase 7: Cronograma

### Sprint 1: Data Layer (1 día)
- [ ] Crear `diagnoses.js` con títulos y descripciones
- [ ] Crear `vpFeedback.js` con feedback por nivel
- [ ] Crear `mondayMissions.js` con misiones por bias
- [ ] Crear `sniperResources.js` con recursos curados

### Sprint 2: Algoritmo (1 día)
- [ ] Implementar `detectDominantBias()` en useSessionAnalysis
- [ ] Implementar `getWorstDecisions()` con consecuencias
- [ ] Implementar `calculateCompetencyMap()` con niveles
- [ ] Implementar `getSniperResources()` limitado a 3

### Sprint 3: UI Redesign (1-2 días)
- [ ] Rediseñar LearningArticleScreen con nuevo layout
- [ ] Sección hero con diagnóstico y %
- [ ] Mapa de calor visual de competencias
- [ ] Sección "Receta" con 3 recursos
- [ ] Misión del lunes destacada

### Sprint 4: Contenido (2 días)
- [ ] Escribir "hard truths" para cada bias
- [ ] Escribir VP feedback para cada competencia x nivel
- [ ] Curar 3 recursos por cada bias (no genéricos)
- [ ] Escribir misiones del lunes específicas

---

## Decisiones de Diseño

1. **¿Generar hard truths con AI?**
   - Recomendación: NO para MVP. Pre-escribir 6-8 variantes por bias.
   - V2: Usar AI para personalizar basado en preguntas específicas falladas.

2. **¿Cómo calcular competencias?**
   - Mapear categories existentes a las 4 dimensiones
   - Usar thresholds: <50% Junior, 50-70% Mid, 70-85% Senior, >85% Staff

3. **¿Tono del feedback?**
   - Directo, sin eufemismos ("Te pliegas ante la autoridad")
   - Pero constructivo ("Usa datos como escudo")

---

## Ejemplo de Output Final

```markdown
# 📉 Diagnóstico: The Order Taker

**Tu sesgo:** En el 65% de tus errores, elegiste evitar el conflicto.

## 🚨 La Verdad Dura
Eres un excelente colaborador, pero como líder estás fallando en
proteger la estrategia. Al complacer a todos, diluyes el producto.

## 🗺️ Mapa de Competencias
| Área | Nivel | Feedback |
|------|-------|----------|
| Craft | 🟢 Staff | Impecable |
| Negocio | 🟡 Mid | Te cuesta sacrificar calidad |
| Política | 🔴 Junior | Te pliegas ante la autoridad |

## 💊 Tu Receta (3 recursos, no 30)
1. **The Art of Saying No** - Marty Cagan
2. **Radical Candor** - Cap. sobre Ruinous Empathy
3. **Video:** Stakeholder Management ≠ Making People Happy

## 🎯 Tu Misión del Lunes
Próxima solicitud que sepas que está mal:
> "Podemos hacerlo, pero el costo es retrasar [X]. ¿Qué prefieres?"
```
