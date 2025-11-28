# 🎯 Plan de Mejoras Consolidado - SimuladorPD

> **Síntesis de 3 análisis** Antigravity + Gemini + Cursor  
> **Fecha**: 2025-11-28  
> **Objetivo**: Transformar el simulador de "contenido excelente + mecánicas rotas" a producto de clase mundial

---

## 📊 Resumen Ejecutivo

### Puntuación Actual
- **Contenido**: 9/10 ⭐⭐⭐⭐⭐
- **Mecánica de Juego**: 4/10 ⚠️
- **Experiencia de Usuario**: 6/10
- **Global**: 6.5/10

### Objetivo Post-Mejoras
- **Contenido**: 9.5/10
- **Mecánica de Juego**: 9/10
- **Experiencia de Usuario**: 9/10
- **Global**: 9/10+

---

## 🔴 TIER 1: GAME-BREAKING ISSUES (CRÍTICO)

> ⚠️ **Estos problemas rompen el simulador si no se arreglan ANTES del lanzamiento**

### 1.1. Síndrome de la Opción B 🚨

**Problema detectado por**: Gemini  
**Severidad**: CRÍTICA

**Descripción**: La respuesta correcta (score 5) es **SIEMPRE la opción B** en las 96 preguntas.

```javascript
// Patrón repetido en TODAS:
options: [
  { id: 'A', score: 0 o 2 },  // ❌ Nunca correcta
  { id: 'B', score: 5 },      // ✅ SIEMPRE correcta
  { id: 'C', score: 0 o 2 }   // ❌ Nunca correcta
]
```

**Impacto**: Usuario descubre el patrón en 30 segundos → hackea el sistema eligiendo B sin leer.

**Solución Recomendada**: Shuffle en Runtime

```javascript
// utils/shuffleOptions.js
export const shuffleOptions = (question) => {
  const shuffled = [...question.options].sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffled.map((opt, index) => ({
      ...opt,
      displayId: String.fromCharCode(65 + index) // A, B, C dinámico
    }))
  };
};
```

**Tiempo estimado**: 2-4 horas  
**Prioridad**: P0

---

### 1.2. Sistema de Scoring Binario 🚨

**Problema detectado por**: Gemini + Cursor  
**Severidad**: CRÍTICA

**Descripción**: Solo hay 3 valores (0, 2, 5). No captura la realidad de niveles de seniority.

**Solución**: Sistema de 6 niveles (0-5)

```javascript
{
  score: 0,  // Tóxico (daña equipo o negocio)
  score: 1,  // Junior (no entiende impacto)
  score: 2,  // Mid (resuelve síntoma, ignora raíz)
  score: 3,  // Senior (resuelve bien, no escala)
  score: 4,  // Staff (escalable, falta visión negocio)
  score: 5   // Lead (raíz + escala + equipo + negocio)
}
```

**Tiempo estimado**: 10-15 horas  
**Prioridad**: P0

---

### 1.3. Maniqueísmo 🚨

**Problema**: Opciones demasiado obvias (Cielo vs Infierno)

**Acción**:
- Identificar ~25-30 preguntas obvias
- Reescribir para crear área gris

**Tiempo estimado**: 8-12 horas  
**Prioridad**: P0

---

### 1.4. Lenguaje Peyorativo 🟡

**Ejemplos a corregir**:
- "Purista (Bloquea $1M)" → "Principios sobre Pragmatismo"
- "Feature Factory" → "Enfoque Reactivo"

**Tiempo estimado**: 4-6 horas  
**Prioridad**: P1

---

## 🟠 TIER 2: CONTENIDO (ALTA)

### 2.1. Aleatoriedad

Implementar `getQuestionPool()` con shuffle y filtros

**Tiempo**: 2-3 horas | **Prioridad**: P1

---

### 2.2. Metadata

```javascript
metadata: {
  difficulty: 'advanced',
  companyStage: 'growth',
  teamSize: '5-10',
  tags: ['burnout']
}
```

**Tiempo**: 6-8 horas | **Prioridad**: P1

---

### 2.3. Nuevas Preguntas

**Gaps**: 35-40 preguntas nuevas
- Presupuesto & Hiring: +5
- Service Design: +4
- Manage Up: +3
- Escenarios Positivos: +10

**Tiempo**: 25-30 horas | **Prioridad**: P1

---

### 2.4. Explicaciones Matizadas

Refactorizar 20-25 explicaciones dogmáticas

**Tiempo**: 5-7 horas | **Prioridad**: P2

---

## 🟢 TIER 3: UX (MEDIA)

### 3.1. Timer (45s)

**Tiempo**: 3-4 horas | **Prioridad**: P2

### 3.2. Confidence Slider

**Tiempo**: 4-5 horas | **Prioridad**: P2

### 3.3. Archetypal Feedback

**Tiempo**: 3-4 horas | **Prioridad**: P2

### 3.4. Radar Chart

**Tiempo**: 6-8 horas | **Prioridad**: P3

---

## 🔵 TIER 4: INNOVACIÓN (BAJA)

### 4.1. Nuevos Tipos

Drag & drop, cascada

**Tiempo**: 15-20 horas | **Prioridad**: P4

### 4.2. Casos Reales

**Tiempo**: 12-15 horas | **Prioridad**: P4

---

## ⏱️ ESTIMACIÓN

| Tier | Horas |
|------|-------|
| TIER 1 | 30h |
| TIER 2 | 45h |
| TIER 3 | 32h |
| TIER 4 | 31h |
| **TOTAL** | **~138h** |

---

## 🚀 PRÓXIMOS PASOS

### Semana 1 (TIER 1)
1. Shuffle de opciones
2. Scoring 0-5
3. Identificar preguntas obvias

### Semana 2-3
4. Reescribir obvias
5. Refactor lenguaje
6. Metadata

### Semana 4-6 (TIER 2)
7. Nuevas preguntas
8. Explicaciones
9. Filtros

---

**¿Por cuál tier empezamos?** 🎯
