# Audit Log - Historial de Cambios

Registro cronológico de auditorías y mejoras aplicadas al proyecto SimuladorPD.

---

## 2025-12-04: Refuerzo de Agente pd-expert - Trade-off Asimétrico Inverso

### Contexto
Detección de fallo crítico en auditoría de 01-strategy.jsx: el agente aplicó **Anti-Spoiler V3** (eliminó predicciones de desastre) pero **NO aplicó Trade-off Asimétrico Inverso** (graduar intensidad del trade-off según score).

**Problema identificado:**
- Opciones score 1 quedaron con trade-offs DUROS de score 5
- Ejemplo: "aunque inviertes medio año sin entregar features" (score 1) → Este costo es demasiado FUERTE para score 1, debería ser score 5

**Regla violada:**
> **Mientras MENOR el score, MÁS SUAVIZADO el trade-off.**
> Score 1 debe sonar MÁS fácil/seguro que Score 5.

### Cambios Realizados

**Archivo modificado:** `.claude/commands/pd-expert.md`

**Sección 3.3.2 - Trade-off Asimétrico Inverso:**
- ✅ Agregada **🚨 REGLA DE ORO** destacada con ejemplos de error común
- ✅ Nueva sección **⚠️ ERROR COMÚN (PROHIBIDO)** con ejemplos ANTES/DESPUÉS
- ✅ **Tabla de Intensidad por Score** expandida con columna "Sensación del usuario"
- ✅ **Test de Calibración (OBLIGATORIO)** con preguntas específicas por score
- ✅ **Fórmula por Score** con ejemplos reales de cada nivel
- ✅ **Conectores por Intensidad** categorizados por score
- ✅ **🔴 CHECKLIST ANTI-ERROR** con verificaciones obligatorias
- ✅ **❌ Ejemplos de VIOLACIONES comunes** con casos reales

**Sección 4 - Checklist de Calidad:**
- ✅ Check #2 reforzado con **CRÍTICO - NO OMITIR**
- ✅ Agregados Tests de Calibración obligatorios
- ✅ Agregado anti-patrón: "NO aplicar solo Anti-Spoiler sin graduar intensidad"

**Nueva Sección 8 - 🚨 RED FLAGS:**
- ✅ Red Flag #1: Trade-off Invertido (score 1 más arriesgado que score 5)
- ✅ Red Flag #2: Anti-Spoiler sin Graduar (eliminar predicción sin suavizar costo)
- ✅ Red Flag #3: Score -1 con Costo Evidente
- ✅ Red Flag #4: Framing Personal en lugar de Sistémico
- ✅ Red Flag #5: Predicciones de Desastre (Anti-Spoiler)
- ✅ Red Flag #6: Explanation Genérica
- ✅ **Checklist Rápido de Audit** (30 segundos por pregunta)

**Sección Final - Tarea a Realizar:**
- ✅ Instrucciones ANTES DE EMPEZAR con test obligatorio
- ✅ Lista de errores críticos a evitar
- ✅ Verificación explícita de gradación de trade-offs

**Sección 5.3 - Protocolo de Audit:**
- ✅ **OPCIÓN A: Audit Por Pregunta (DEFAULT)** - Recomendado para coherencia interna
  - Contexto completo de cada pregunta en memoria
  - Fácil verificar Grounding y Trade-off Asimétrico Inverso
  - Proceso explícito: Escenario → Opciones → Explanation → Scoring (por pregunta)
- ✅ **OPCIÓN B: Audit Por Eje (Alternativa)** - Para enfoques sistemáticos
  - Todos los escenarios → Todas las opciones → Todas las explanations → Scoring
  - Útil para detectar patrones repetidos
- ✅ Guía de decisión clara sobre cuándo usar cada opción

### Impacto

**Prevención de errores:**
- El agente ahora tiene ejemplos explícitos de errores comunes con ANTES/DESPUÉS
- Checklist de 6 red flags para detección rápida
- Test de calibración obligatorio: "¿Score 1 suena más fácil que Score 5?"

**Mejora en calidad:**
- Las opciones score 1/-1 ahora serán **seductoras** con costos SUAVIZADOS
- Las opciones score 5 tendrán trade-offs DUROS que generen duda genuina
- Aplicación correcta de Anti-Spoiler + Gradación de intensidad

**Siguiente paso:**
- Re-auditar 01-strategy.jsx aplicando AMBAS reglas correctamente
- Corregir opciones con trade-offs invertidos

---

## 2025-12-04: Rename TokuAssessment → PDAssessment

### Contexto
Eliminación del nombre heredado "Toku" (de la idea inicial) y reemplazo por "PD" (Product Design) más apropiado para el simulador.

### Cambios Realizados

**Archivos Renombrados**:
- `src/components/TokuAssessment.jsx` → `src/components/PDAssessment.jsx`

**Componente Renombrado**:
- `const TokuAssessment` → `const PDAssessment`
- `export default TokuAssessment` → `export default PDAssessment`

**Imports Actualizados**:
- `src/App.jsx` - Import de `PDAssessment` en lugar de `TokuAssessment`

**localStorage Key Cambiada**:
- `toku_burned_questions` → `pd_burned_questions`
- **Nota**: Esto resetea el progreso de la campaña para usuarios existentes

**Documentación Actualizada**:
- `README.md` - Arquitectura del proyecto
- `docs/AUDIT_LOG.md` - Referencias previas

### Impacto
- Nombre más coherente con el propósito del simulador (Product Design)
- Eliminación de branding heredado de idea inicial
- **Breaking Change**: Usuarios perderán su progreso guardado (localStorage key cambió)

---

## 2025-12-04: Audit Exhaustivo del Proyecto

### Contexto
Auditoría completa del proyecto para eliminar código obsoleto, consolidar documentación fragmentada y optimizar estructura.

### Cambios Realizados

#### Fase 1: Limpieza de Archivos Obsoletos ✅

**Archivos Eliminados**:
- `verify-ids.js` - Script de verificación one-time
- `repro-bug.js` - Script de reproducción de bug
- `src/utils/questionUtils.js` - Utilidad no utilizada (0 imports)

**Código Muerto Eliminado**:
- `TOTAL_TIME_SECONDS` en `src/hooks/useGameState.js:5` - Variable nunca usada

**Impacto**: -3 archivos, ~150 líneas de código eliminadas

---

#### Fase 2: Creación de Archivo de Constantes ✅

**Archivo Creado**:
- `src/utils/constants.js` - Constantes globales del simulador

**Constantes Centralizadas**:
```javascript
export const URGENT_THRESHOLD = 150; // 2.5 minutos finales
```

**Archivos Actualizados**:
- `src/components/ui/Timer.jsx` - Import de `URGENT_THRESHOLD` desde constants.js
- `src/components/screens/QuestionScreen.jsx` - Import de `URGENT_THRESHOLD` desde constants.js

**Impacto**: +1 archivo, eliminación de 2 duplicados

---

#### Fase 3: Limpieza de Imports No Utilizados ✅

**Bloques de Preguntas Limpiados**:

| Bloque | Imports Antes | Imports Después | Reducción |
|--------|---------------|-----------------|-----------|
| `01-strategy.jsx` | 35 icons | 18 icons | -17 |
| `02-research.jsx` | 35 icons | 15 icons | -20 |
| `03-metrics.jsx` | 35 icons | 16 icons | -19 |
| `04-mobile.jsx` | 35 icons | 11 icons | -24 |
| `05-culture.jsx` | 35 icons | 9 icons | -26 |
| `06-innovation.jsx` | 5 icons | 5 icons | 0 (ya limpio) |

**Impacto Total**: -106 imports no utilizados

**Beneficios**:
- Reducción del bundle size
- Mejora en claridad del código
- Faster builds

---

#### Fase 4: Fixes de Código ✅

**CampaignCompleteScreen.jsx** - Parametrización de valor hardcodeado:
- **Antes**: `"96 preguntas"` (hardcoded)
- **Después**: `{stats.totalQuestions} preguntas` (dinámico)

**Archivos Modificados**:
- `src/components/screens/CampaignCompleteScreen.jsx` - Acepta prop `stats`
- `src/components/PDAssessment.jsx` - Pasa `stats` a CampaignCompleteScreen

**Impacto**: Valor dinámico que refleja el pool real de preguntas

---

#### Fase 5: Consolidación de Documentación ✅

**Archivos de Documentación Creados**:

1. **docs/README.md** (NUEVO)
   - Índice completo de documentación
   - Estructura del proyecto
   - Sistema de preguntas y bloques
   - Flujo del juego y estados
   - Comandos y agentes disponibles

2. **docs/SCORING_GUIDELINES.md** (ACTUALIZADO)
   - Sistema corregido de 4 niveles (-1, 1, 3, 5)
   - Eliminación del sistema obsoleto de 6 niveles (0-5)
   - Ejemplos completos por cada nivel
   - Reglas de distribución por pregunta
   - Checklist de validación
   - Proceso de scoring para nuevas preguntas

**Conflicto Resuelto**:
- SCORING_GUIDELINES.md documentaba sistema 0-5
- Código implementa sistema -1, 1, 3, 5
- ✅ Documentación ahora refleja implementación real

---

### Métricas de Impacto

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Archivos obsoletos | 3 | 0 | -3 |
| Código muerto | ~150 líneas | 0 | -150 |
| Imports no usados | ~106 | 0 | -106 |
| Constantes duplicadas | 2 | 0 | -2 |
| Valores hardcodeados | 1 | 0 | -1 |
| Docs con conflictos | 1 | 0 | -1 |
| Índice de docs | 0 | 1 | +1 |

---

### Estado de Documentación

#### Documentación Consolidada:
- ✅ `docs/README.md` - Índice principal
- ✅ `docs/SCORING_GUIDELINES.md` - Sistema de scoring actualizado
- ✅ `docs/AUDIT_LOG.md` - Este archivo
- ✅ `docs/QUESTION_WORKFLOW.md` - Flujo de trabajo de preguntas
- ✅ `docs/question-template.js` - Template de preguntas

#### Documentación en Root (Pendiente consolidación):
- `ANALISIS_QUESTION_POOL.md`
- `EJEMPLOS_MEJORAS.md`
- `PLAN_MEJORAS_CONSOLIDADO.md`

---

### Próximos Pasos Recomendados

1. **Opcional**: Consolidar archivos de análisis y planes del root en docs/
2. **Opcional**: Crear `docs/ARCHITECTURE.md` con diagrama de flujo completo
3. **Opcional**: Extraer lógica de colores de scoring a `src/utils/scoreUtils.js`
4. **Opcional**: Optimizar `getStats()` para cachear count de preguntas

---

## 2024 (Anterior): Auditorías V3 y V4

### AUDIT_V4_PROGRESS.md
- Progreso de actualización a V4 de pd-expert
- Aplicación de reglas Goldilocks, Trade-off Integrado V3, Anti-Spoiler V3
- Estandarización de negritas en opciones y explicaciones

### AUDIT_PD_EXPERT_V3.md
- Auditoría inicial del agente pd-expert V3
- Identificación de patrones y mejoras necesarias

---

## Notas de Mantenimiento

### Agregar nueva pregunta
1. Consultar `docs/question-template.js`
2. Seguir `docs/QUESTION_WORKFLOW.md`
3. Validar con `/pd-expert audit [bloque]`
4. Verificar compliance con `docs/SCORING_GUIDELINES.md`

### Modificar pregunta existente
1. Editar bloque correspondiente en `src/data/questions/blocks/`
2. Asegurar compliance con pd-expert V4
3. Ejecutar `/pd-expert audit [bloque]` para validar
4. Actualizar este log si el cambio es significativo

---

## Convenciones de Commits

Para mantener historial claro:

```
feat: Descripción breve del feature
fix: Descripción del bug corregido
refactor: Descripción de la refactorización
docs: Actualización de documentación
chore: Limpieza de código, eliminación de obsoletos
audit: Cambios derivados de auditoría
```

**Ejemplo**:
```
chore: Eliminate obsolete scripts and unused imports

- Remove verify-ids.js, repro-bug.js, questionUtils.js
- Clean up 106 unused lucide-react imports across 6 blocks
- Remove TOTAL_TIME_SECONDS dead variable
```

---

## Enlaces Relacionados

- [Índice de Documentación](./README.md)
- [Sistema de Scoring](./SCORING_GUIDELINES.md)
- [Workflow de Preguntas](./QUESTION_WORKFLOW.md)
- [README Principal](../README.md)
