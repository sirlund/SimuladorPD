# Plan de Mejoras: LearningScreenV2

## Problemas Actuales

### 1. Sección "El Costo Real"
- **Costos genéricos**: $100K, $80K se repiten sin relación a la pregunta
- **Labels internos visibles**: "Perfeccionista (Mal ROI)" no es user-friendly
- **Sin explicación**: El usuario no sabe POR QUÉ su elección fue incorrecta
- **Sin respuesta correcta**: No muestra qué debió elegir
- **Escenario truncado**: Pierde contexto importante

### 2. Stats Row
- Sin color coding para el porcentaje (rojo/amarillo/verde)
- "Mid-Level Designer" sin badge visual

### 3. Evidencia Dinámica
- Usa `categoryBusinessImpact` genérico en vez de datos específicos de la pregunta
- No extrae `explanation` de la pregunta original

---

## Mejoras Propuestas

### FASE 1: Mejorar Evidencia Dinámica (Prioridad Alta)

#### 1.1 Nueva estructura de item de error:
```
┌─────────────────────────────────────────────────────┐
│ 💸 $150K en Revenue Perdido                         │
│                                                     │
│ MOB-02: Bug visual rompe layout en tablets          │
│                                                     │
│ ❌ Tu elección: "Bloquear lanzamiento"              │
│    → Priorizaste perfección visual sobre negocio    │
│                                                     │
│ ✅ Mejor opción: "Hotfix post-lanzamiento"          │
│    → El release de $180K no puede esperar por 3%    │
│      de usuarios en tablets                         │
│                                                     │
│ 💡 Lección: El 80% shipped hoy > 100% shipped nunca │
└─────────────────────────────────────────────────────┘
```

#### 1.2 Datos a extraer de cada pregunta:
- `question.scenario` (completo, no truncado)
- `question.explanation` (el WHY)
- `selectedOption.text` (lo que eligió - limpiar markdown)
- `correctOption.text` (lo que debió elegir)
- `selectedOption.type` → Limpiar para UI ("Perfeccionista" no "Perfeccionista (Mal ROI)")

#### 1.3 Actualizar `generateFailureEvidence()`:
```js
return {
  questionId: q.displayId,
  category: q.category,
  scenario: q.scenario, // COMPLETO
  explanation: q.explanation, // NUEVO
  userChoice: {
    text: cleanOptionText(selectedOption.text),
    type: cleanType(selectedOption.type)
  },
  correctChoice: {
    text: cleanOptionText(correctOption.text),
    type: cleanType(correctOption.type)
  },
  impact: generateSpecificImpact(q, selectedOption)
}
```

### FASE 2: Mejorar UI de Evidence Cards

#### 2.1 Componente `EvidenceCard`:
- Header con costo + emoji
- Escenario expandible (click para ver completo)
- Tu elección vs Mejor opción (lado a lado o stacked)
- Lección/Takeaway al final
- Color coding: borde rojo para error, indicador visual claro

#### 2.2 Diseño propuesto:
```
┌────────────────────────────────────────────────────────┐
│ 💸 MOB-02                                    $150K ⬇️  │
├────────────────────────────────────────────────────────┤
│ Un bug visual rompe el layout en tablets (3% del      │
│ tráfico). El release de $180K está programado...      │
│                                              [Ver más] │
├────────────────────────────────────────────────────────┤
│ ❌ Elegiste: Bloquear lanzamiento                      │
│    "Priorizaste la perfección visual..."              │
├────────────────────────────────────────────────────────┤
│ ✅ Debiste: Hotfix post-lanzamiento                    │
│    "Ship it, arregla después con data real"           │
├────────────────────────────────────────────────────────┤
│ 💡 El 80% shipped hoy vale más que el 100% nunca      │
└────────────────────────────────────────────────────────┘
```

### FASE 3: Stats Row Mejorado

#### 3.1 Color coding:
- >= 80%: Verde (Éxito)
- 60-79%: Amarillo (En progreso)
- < 60%: Rojo (Necesita trabajo)

#### 3.2 Badge visual para nivel:
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 🎖️ Mid-Level │ │    53%       │ │  425/805     │
│   Designer   │ │  Precisión   │ │   Puntos     │
│              │ │   🔴         │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

### FASE 4: Helpers de Limpieza

#### 4.1 `cleanOptionText()`:
```js
// De: "**Bloquear Lanzamiento:** Detienes el release porque..."
// A: "Bloquear Lanzamiento"
const cleanOptionText = (text) => {
  const match = text.match(/\*\*(.+?)\*\*/);
  return match ? match[1] : text.substring(0, 50);
}
```

#### 4.2 `cleanType()`:
```js
// De: "Perfeccionista (Mal ROI)"
// A: "Perfeccionista"
const cleanType = (type) => {
  return type.split('(')[0].split('/')[0].trim();
}
```

#### 4.3 `extractLesson()`:
```js
// Del explanation, extraer la lección clave
// Buscar patrones como "La única...", "El único...", "Solo..."
```

---

## Archivos a Modificar

1. `src/data/learning/questionArchetypeMapping.js`
   - Mejorar `generateFailureEvidence()`
   - Agregar helpers de limpieza
   - Extraer más datos de las preguntas

2. `src/components/screens/LearningScreenV2.jsx`
   - Nuevo componente `EvidenceCard`
   - Mejorar `StatsRow` con color coding
   - Agregar estado expandible para escenarios largos

3. `src/hooks/useSessionAnalysis.js`
   - Pasar las preguntas originales completas (no solo IDs)
   - Incluir `explanation` en los datos

---

## Prioridad de Implementación

1. **AHORA**: Mejorar `generateFailureEvidence()` para incluir explanation y opciones
2. **AHORA**: Crear helpers de limpieza de texto
3. **AHORA**: Rediseñar `EvidenceCard` con la nueva estructura
4. **DESPUÉS**: Stats Row con colores
5. **DESPUÉS**: Escenarios expandibles
