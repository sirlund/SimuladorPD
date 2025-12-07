# Plan: Generación de Artículos de Aprendizaje Personalizados

## Objetivo
Al finalizar cada sesión, generar un artículo educativo personalizado que:
1. Cubra los gaps de conocimiento detectados
2. Enseñe los conceptos detrás de las respuestas correctas
3. Incluya links a recursos externos relevantes

---

## Fase 1: Taxonomía de Conocimiento

### 1.1 Mapeo de Preguntas a Temas
Cada pregunta debe tener metadata adicional:

```javascript
{
  id: 'enterprise_client_custom_request',
  displayId: 'STR-26',
  // ... existing fields ...

  // NEW: Learning metadata
  learningTopic: 'product-strategy',
  concepts: ['professional-services', 'saas-purity', 'revenue-concentration'],
  resources: [
    {
      type: 'article',
      title: 'When to Say No to Enterprise Customers',
      url: 'https://www.svpg.com/...',
      author: 'Marty Cagan'
    },
    {
      type: 'book',
      title: 'Inspired',
      chapter: 'Chapter 12: Enterprise Customers'
    }
  ]
}
```

### 1.2 Catálogo de Temas (Learning Topics)

| Topic ID | Nombre | Descripción |
|----------|--------|-------------|
| `product-strategy` | Estrategia de Producto | Decisiones de roadmap, priorización, trade-offs |
| `stakeholder-management` | Gestión de Stakeholders | Manage up, conflictos políticos, alineación |
| `team-leadership` | Liderazgo de Equipos | Cultura, hiring, feedback, burnout |
| `design-systems` | Sistemas de Diseño | Arquitectura, tokens, gobernanza |
| `research-methods` | Métodos de Research | Cuali vs cuanti, validación, bias |
| `metrics-analytics` | Métricas y Analytics | KPIs, atribución, experimentos |
| `mobile-platform` | Plataformas Mobile | iOS/Android, PWA, performance |
| `innovation-tech` | Innovación y Tecnología | AI, nuevas tecnologías, adopción |
| `ethics-compliance` | Ética y Compliance | Dark patterns, GDPR, accesibilidad |
| `crisis-management` | Gestión de Crisis | Deadlines, bugs, escalaciones |

### 1.3 Patrones de Error (Error Archetypes)

Basado en el `type` de las opciones elegidas:

| Archetype | Patrón | Qué enseñar |
|-----------|--------|-------------|
| `Mercenario` | Prioriza revenue sobre todo | Balance negocio/usuario |
| `Idealista` | Prioriza pureza sobre pragmatismo | Trade-offs reales |
| `Obediente` | Evita conflicto con superiores | Manage up efectivo |
| `Técnico` | Over-engineering | Soluciones simples |
| `Protector` | Protege equipo sobre negocio | Cuándo decir que no |
| `FOMO` | Adopta tendencias sin validar | Evaluación de tecnología |

---

## Fase 2: Motor de Análisis de Gaps

### 2.1 Inputs del Análisis

```javascript
// Después de ReviewScreen
const sessionAnalysis = {
  // Performance general
  accuracy: 65,
  questionsAnswered: 15,

  // Distribución de errores
  errorsByTopic: {
    'stakeholder-management': { wrong: 3, total: 4 },
    'crisis-management': { wrong: 2, total: 3 },
    'design-systems': { wrong: 0, total: 2 }
  },

  // Patrones de error
  errorArchetypes: {
    'Obediente': 4,      // Eligió opciones "Obediente" 4 veces
    'Técnico': 2,
    'Idealista': 1
  },

  // Preguntas específicas falladas
  failedQuestions: [
    { id: 'str-26', score: 1, concepts: ['professional-services'] },
    { id: 'cul-25', score: 3, concepts: ['shadow-designer'] }
  ],

  // Conceptos no dominados
  missedConcepts: ['professional-services', 'manage-up', 'data-shield']
};
```

### 2.2 Algoritmo de Priorización

```javascript
function prioritizeGaps(analysis) {
  // 1. Temas con >50% de error → Críticos
  // 2. Arquetipos con >2 ocurrencias → Patrón sistémico
  // 3. Conceptos repetidos en múltiples errores → Fundamentales

  return {
    criticalTopics: [...],      // Max 3
    systemicPatterns: [...],    // Max 2
    fundamentalConcepts: [...]  // Max 5
  };
}
```

---

## Fase 3: Generación de Contenido

### 3.1 Opción A: Contenido Pre-escrito (MVP)

Crear módulos de contenido estático para cada:
- Topic (10 módulos)
- Archetype (6 módulos)
- Concepto (30+ módulos)

**Pros:** Rápido, sin costo de API, control total
**Cons:** Menos personalizado, más mantenimiento

### 3.2 Opción B: Generación con AI (v2)

Usar Claude/GPT para generar artículos personalizados:

```javascript
const prompt = `
Genera un artículo educativo para un Product Designer que:
- Falló en: ${criticalTopics.join(', ')}
- Muestra patrón de: ${systemicPatterns.join(', ')}
- Necesita entender: ${fundamentalConcepts.join(', ')}

El artículo debe:
1. Explicar por qué estas decisiones fueron subóptimas
2. Enseñar el framework correcto
3. Dar ejemplos prácticos
4. Sugerir recursos de lectura

Preguntas específicas falladas:
${failedQuestions.map(q => `- ${q.scenario}: eligió "${q.selectedOption}" en vez de "${q.bestOption}"`).join('\n')}
`;
```

**Pros:** Altamente personalizado, menos contenido que mantener
**Cons:** Costo de API, latencia, posibles alucinaciones

### 3.3 Opción C: Híbrido (Recomendado)

- **Estructura y recursos:** Pre-escritos (control)
- **Conexiones y ejemplos:** Generados por AI (personalización)
- **Fallback:** Si AI falla, mostrar módulos estáticos

---

## Fase 4: Estructura del Artículo

### 4.1 Template

```markdown
# Tu Plan de Desarrollo: [Fecha]

## Resumen de Sesión
- **Score:** 65% (32/50 pts)
- **Nivel:** Senior Designer
- **Preguntas:** 10 respondidas

---

## 🎯 Áreas de Mejora Prioritarias

### 1. Gestión de Stakeholders
**Tu patrón:** Tendencia a evitar conflicto con superiores (4 de 5 casos)

**El problema:** Cuando priorizas la armonía sobre el impacto...

**Framework recomendado:**
- Data Shield: Usar datos como escudo objetivo
- Disagree and Commit: Expresar desacuerdo, luego ejecutar

**Recursos:**
- 📖 [Radical Candor - Kim Scott](https://www.radicalcandor.com/)
- 🎥 [How to Manage Up - Harvard Business Review](https://hbr.org/...)
- 📝 [The Art of the Strategic No](https://svpg.com/...)

---

### 2. Decisiones bajo Presión
**Tu patrón:** Sobre-indexar en calidad técnica cuando hay deadline

**Caso específico:** En STR-15 (Legacy Migration), elegiste "Big Bang Rewrite"...

**Recursos:**
- 📖 [Refactoring - Martin Fowler](https://refactoring.com/)
- 🎥 [Strangler Fig Pattern](https://martinfowler.com/...)

---

## 📚 Tu Reading List Personalizada

### Esta semana (Quick wins)
1. [Artículo 1] - 10 min read
2. [Artículo 2] - 15 min read

### Este mes (Deep dives)
1. [Libro 1] - Capítulos 3, 7, 12
2. [Libro 2] - Parte II

---

## 🔄 Próximos Pasos
1. Intenta el simulador de nuevo enfocándote en [Topic]
2. Antes de tu próxima decisión real de [Topic], revisa el framework de [X]

---

*Generado el [Fecha] basado en tu sesión de SimuladorPD*
*¿Feedback? [Link]*
```

---

## Fase 5: Implementación Técnica

### 5.1 Nuevos Archivos

```
src/
├── data/
│   └── learning/
│       ├── topics.js           # Definición de topics
│       ├── archetypes.js       # Patrones de error
│       ├── resources.js        # Base de datos de recursos
│       └── modules/            # Contenido pre-escrito
│           ├── stakeholder-management.md
│           ├── product-strategy.md
│           └── ...
├── services/
│   └── articleGenerator.js     # Motor de generación
├── components/
│   └── screens/
│       └── LearningArticleScreen.jsx
└── hooks/
    └── useSessionAnalysis.js   # Hook para analizar resultados
```

### 5.2 Flujo de Usuario

```
ReviewScreen
    ↓
[Botón "Ver Plan de Aprendizaje"]
    ↓
LearningArticleScreen
    ↓
[Botones: "Descargar PDF" | "Enviar por Email" | "Compartir"]
```

### 5.3 Integración con Preguntas Existentes

Añadir a cada pregunta en los bloques:

```javascript
// En 01-strategy.jsx, etc.
{
  id: 'enterprise_client_custom_request',
  // ... existing ...
  learning: {
    topic: 'product-strategy',
    concepts: ['professional-services', 'saas-vs-consulting', 'revenue-concentration'],
    resources: ['cagan-enterprise', 'svpg-saying-no']
  }
}
```

---

## Fase 6: Base de Datos de Recursos

### 6.1 Estructura

```javascript
// src/data/learning/resources.js
export const resources = {
  'cagan-enterprise': {
    type: 'book',
    title: 'Inspired',
    author: 'Marty Cagan',
    chapter: 'Working with Enterprise Customers',
    url: 'https://www.svpg.com/inspired/',
    readTime: '30 min'
  },
  'hbr-manage-up': {
    type: 'article',
    title: 'Managing Your Boss',
    source: 'Harvard Business Review',
    url: 'https://hbr.org/2005/01/managing-your-boss',
    readTime: '15 min',
    free: true
  },
  // ... 50+ recursos curados
};
```

### 6.2 Categorías de Recursos

| Tipo | Ejemplos |
|------|----------|
| `book` | Inspired, Continuous Discovery, Sprint |
| `article` | HBR, SVPG, Nielsen Norman |
| `video` | YouTube, Coursera clips |
| `tool` | Templates, frameworks, checklists |
| `course` | Reforge, Maven, específicos |

---

## Fase 7: Cronograma de Implementación

### Sprint 1: Fundamentos (1-2 días)
- [ ] Crear estructura de archivos `src/data/learning/`
- [ ] Definir schema de `learning` metadata para preguntas
- [ ] Añadir metadata a 10 preguntas piloto (2 por bloque)

### Sprint 2: Motor de Análisis (1 día)
- [ ] Implementar `useSessionAnalysis.js`
- [ ] Algoritmo de priorización de gaps
- [ ] Tests unitarios

### Sprint 3: Contenido Base (2-3 días)
- [ ] Escribir módulos para 10 topics
- [ ] Escribir módulos para 6 archetypes
- [ ] Curar 50 recursos externos con URLs válidas

### Sprint 4: UI (1 día)
- [ ] `LearningArticleScreen.jsx`
- [ ] Integración con ReviewScreen
- [ ] Estilos dark/light mode

### Sprint 5: Export (1 día)
- [ ] Generación de Markdown
- [ ] Exportar como PDF (html2pdf o similar)
- [ ] Copiar al clipboard

### Sprint 6: Metadata Completa (2-3 días)
- [ ] Añadir `learning` metadata a las 164 preguntas restantes
- [ ] Validar todos los recursos (URLs activas)
- [ ] QA completo

---

## Decisiones Pendientes

1. **¿AI o contenido estático para MVP?**
   - Recomendación: Estático para MVP, AI para v2

2. **¿Dónde hostear recursos propios?**
   - Opción A: Links externos únicamente
   - Opción B: Blog propio con contenido original
   - Opción C: Notion/Gitbook público

3. **¿Tracking de progreso entre sesiones?**
   - Guardar historial de gaps en localStorage
   - Mostrar evolución: "En tu última sesión fallaste X, hoy mejoraste"

4. **¿Gamificación del aprendizaje?**
   - Badges por completar lecturas
   - "Desafío de la semana" basado en gaps

---

## Métricas de Éxito

| Métrica | Target |
|---------|--------|
| % usuarios que ven el artículo | >60% |
| % usuarios que hacen click en recursos | >30% |
| Mejora en score en siguiente sesión | +15% |
| NPS de la feature | >40 |

---

## Anexo: Ejemplo de Output

Ver archivo separado: `EXAMPLE_LEARNING_ARTICLE.md`
