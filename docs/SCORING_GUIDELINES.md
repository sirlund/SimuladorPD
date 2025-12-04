# Scoring Guidelines - Sistema de 4 Niveles

## Filosofía General

El scoring debe reflejar la **calidad de la decisión** considerando:
1. Impacto en el negocio
2. Impacto en el equipo/cultura
3. Sostenibilidad a largo plazo
4. Trade-offs y consecuencias

---

## Sistema Actual

El simulador utiliza un sistema de **4 niveles** con los siguientes scores:

```
-1 → Tóxico (Anti-pattern peligroso)
 1 → Junior (Decisión subóptima)
 3 → Mid (Decisión competente)
 5 → Lead (Decisión excelente)
```

---

## Escala Detallada

### Score 5: Lead/Excelente ⭐⭐⭐⭐⭐

**Criterios**:
- ✅ Decisión estratégica óptima
- ✅ Balancea negocio, equipo y calidad
- ✅ Visión a largo plazo
- ✅ Minimiza trade-offs negativos
- ✅ Construye capacidad organizacional

**Ejemplos**:
- Gestionar cambio radical con transparencia y empatía
- Estrategia de Boy Scout para deuda técnica
- Migration Concierge en sunset de producto
- Alineación privada pre-QBR para evitar guerra política

**Características**:
- Anticipa consecuencias de segundo orden
- Protege al equipo sin ignorar la realidad del negocio
- Genera alineamiento entre stakeholders
- Es sostenible y escalable

---

### Score 3: Mid/Competente ⭐⭐⭐

**Criterios**:
- ✅ Resuelve el problema correctamente
- ⚠️ Trade-offs evidentes pero aceptables
- ⚠️ Podría generar trabajo adicional futuro
- ⚠️ No es la decisión óptima pero funciona

**Ejemplos**:
- Negociar cooldown de una semana tras pivote urgente
- Presentar métricas de conversión sin contexto político
- Soluciones diplomáticas que retrasan decisiones
- Proteger al equipo sin considerar el runway crítico

**Características**:
- Funciona pero tiene costos de oportunidad
- Puede generar problemas predecibles a futuro
- Es reactiva en lugar de estratégica
- Trade-off entre velocidad y perfección

**¿Cuándo usar?**:
- La respuesta "sirve" pero no es la mejor
- Hay consecuencias manejables
- Prioriza una dimensión sobre las demás (ej: moral vs urgencia)

---

### Score 1: Junior/Subóptimo ⭐

**Criterios**:
- ⚠️ Resuelve el problema inmediato superficialmente
- ❌ Costos o consecuencias negativas importantes
- ❌ Genera deuda técnica o cultural significativa
- ❌ Visión de corto plazo sin estrategia

**Ejemplos**:
- Permitir hardcode con "ticket de refactor"
- Soluciones superficiales (pizzas para burnout)
- Silencio táctico que permite quemar caja en canales ineficientes
- Buscar "unicornio" perfecto en lugar de balancear equipo

**Características**:
- Parches que no resuelven la raíz del problema
- Genera más trabajo futuro
- Daña credibilidad o relaciones
- Ignora impacto sistémico

**¿Cuándo usar?**:
- La decisión funciona en superficie pero falla estratégicamente
- Crea deuda técnica, cultural o política
- Es ingenua sobre las dinámicas organizacionales

---

### Score -1: Tóxico/Anti-pattern 💀

**Criterios**:
- ❌❌ Refleja filosofía startup popular pero destructiva
- ❌❌ Suena razonable pero genera consecuencias graves
- ❌❌ Puede llevar a fracaso de producto, renuncias o despidos
- ⚠️ Debe ser **sutilmente incorrecto** (Anti-Spoiler V3)

**Ejemplos**:
- "El usuario siempre tiene la razón" → Ignora conocimiento experto de diseño
- "Fail fast, iterate faster" → Justifica lanzar cualquier cosa sin rigor
- "Move fast and break things" → Ignora deuda técnica hasta colapso
- "No es nuestro usuario ideal" → Bias de confirmación que ignora feedback valioso

**Características de Anti-Spoiler V3**:
- Suena como filosofía legítima de startup
- Es defendible en LinkedIn/Twitter
- Tiene un kernel de verdad distorsionado
- NO es obviamente malo como "despedir a todos"

**¿Cuándo usar?**:
- La opción refleja un anti-pattern común en la industria
- Suena bien pero tiene consecuencias destructivas
- Es una trampa para quien no tiene experiencia
- Máximo **1 opción score -1 por pregunta**

**Regla Anti-Spoiler V3**:
> Si un PM Junior podría defender la opción en una reunión, es buen score -1.
> Si nadie la defendería ("despedir al equipo"), es demasiado obvio.

---

## Distribución por Pregunta

### Estructura típica (3-4 opciones por pregunta):

**Opción A** (Score variable):
- Puede ser 5, 3, 1 o -1 según la pregunta
- Lo importante es que haya variedad

**Opción B** (Score variable):
- Complementa a las otras opciones
- Crea dilemas realistas

**Opción C** (Score variable):
- No siempre es la peor
- A veces es score 3 o 1

**Opción D** (Opcional):
- Algunas preguntas tienen 4 opciones
- Aumenta la dificultad

### Reglas de distribución:

1. **Exactamente 1 opción con score 5 por pregunta** (la mejor decisión)
2. **Máximo 1 opción con score -1 por pregunta** (el anti-pattern)
3. **El resto distribuido en scores 1 y 3** (decisiones subóptimas o competentes)

### Ejemplos de distribuciones válidas:

```
Pregunta 1: [5, 3, 3]       → Una excelente, dos competentes
Pregunta 2: [5, 3, 1, -1]   → Excelente, competente, junior, tóxico
Pregunta 3: [5, 1, 1]       → Una excelente, dos juniors
Pregunta 4: [5, 3, 1]       → Excelente, competente, junior
```

---

## Distribución Global del Pool

### Objetivo aproximado para las 130 preguntas:

```
Score  5: ~130 opciones  (1 por pregunta - obligatorio)
Score  3: ~ 80 opciones  (~0-2 por pregunta)
Score  1: ~ 60 opciones  (~0-2 por pregunta)
Score -1: ~ 40 opciones  (~0-1 por pregunta - máximo 1)
```

**Total**: ~310-350 opciones totales para 130 preguntas (promedio 2.5-3 opciones/pregunta)

---

## Checklist de Validación

Antes de finalizar una pregunta, verifica:

- [ ] Cada pregunta tiene exactamente 1 opción con score 5
- [ ] Máximo 1 opción con score -1 por pregunta
- [ ] No hay scores fuera del sistema (-1, 1, 3, 5)
- [ ] Los scores hacen sentido en contexto del escenario
- [ ] Las opciones score -1 cumplen Anti-Spoiler V3 (sutilmente incorrectas)
- [ ] La distribución de la pregunta crea un dilema real (no es obvia la respuesta)

---

## Proceso de Scoring para Nueva Pregunta

### Paso 1: Identificar la mejor decisión
- Esta será score 5
- Debe balancear negocio, equipo y calidad

### Paso 2: Crear alternativas competentes
- Scores 3: Decisiones que funcionan pero tienen trade-offs
- Deben ser defendibles pero subóptimas

### Paso 3: Crear alternativas juniors
- Scores 1: Decisiones superficiales o ingenuas
- Resuelven el problema inmediato pero crean deuda

### Paso 4: (Opcional) Crear anti-pattern
- Score -1: Filosofía startup popular pero destructiva
- Debe sonar razonable (Anti-Spoiler V3)
- Solo si hay un anti-pattern claro en el escenario

### Paso 5: Validar balance
- ¿La mejor opción (5) es claramente superior?
- ¿Las opciones intermedias (3) son defendibles?
- ¿Las opciones junior (1) son obviamente peores?
- ¿El anti-pattern (-1) suena legítimo pero es destructivo?

---

## Ejemplos Completos

### Ejemplo 1: Pivote Estratégico Urgente

**Escenario**: CEO cancela feature tras 3 semanas de trabajo. Runway de 4 meses.

**Opciones**:
- **Score 5**: Gestión de Cambio Radical - Valida frustración pero actúa inmediato
- **Score 3**: Cooldown Negociado - Protege moral pero consume runway valioso
- **Score 3**: Retrospectiva de Aprendizaje - Da cierre pero diluye urgencia
- **Score -1**: (No incluida en este ejemplo)

### Ejemplo 2: Métricas Vanity vs Reality

**Escenario**: Marketing celebra +200% tráfico pero conversión cayó -15%.

**Opciones**:
- **Score 5**: Alineación Privada - Controla narrativa pre-QBR
- **Score 3**: Reporte Crudo - Integridad técnica pero sin contexto
- **Score 1**: Silencio Táctico - Protege relación pero permite quemar caja
- **Score -1**: (No incluida en este ejemplo)

### Ejemplo 3: Con Anti-Pattern

**Escenario**: Usuario experto critica nueva UI con argumentos técnicos sólidos.

**Opciones**:
- **Score 5**: Research Empático - Valida expertise, hace discovery profundo
- **Score 3**: User Testing - Prueba con más usuarios antes de decidir
- **Score 1**: Buscar Confirmación - Solo testea con usuarios que validen hipótesis
- **Score -1**: "El Usuario Siempre Tiene Razón" - Ignora contexto de edge case power user

---

## Notas de Migración

Este documento reemplaza el sistema anterior de 6 niveles (0-5) con el sistema actual de 4 niveles (-1, 1, 3, 5) que está implementado en el código.

**Cambios principales**:
- Eliminados scores 0, 2, 4 (no se usan en el código)
- Score -1 introducido para anti-patterns con regla Anti-Spoiler V3
- Énfasis en distribución: 1 score 5 obligatorio, máximo 1 score -1 opcional
- Clarificación de que score -1 debe ser sutilmente incorrecto, no obviamente malo
