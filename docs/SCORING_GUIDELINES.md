# Scoring Guidelines - Sistema de 6 Niveles

## Filosofía General

El scoring debe reflejar la **calidad de la decisión** considerando:
1. Impacto en el negocio
2. Impacto en el equipo/cultura
3. Sostenibilidad a largo plazo
4. Trade-offs y consecuencias

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

---

### Score 4: Senior/Muy Bueno ⭐⭐⭐⭐

**Criterios**:
- ✅ Decisión sólida y profesional
- ✅ Trade-offs menores y predecibles
- ⚠️ Podría ser ligeramente mejor pero es muy buena
- ✅ No genera problemas futuros significativos

**Ejemplos**:
- Hacer hardcode aislado para deal de $1M
- Aplicar Boy Scout rule incrementalmente
- Proteger al equipo con negociación de cooldown

**¿Cuándo usar?**:
- La respuesta es correcta pero hay una ligeramente mejor (score 5)
- Solución pragmática sin costos ocultos importantes

---

### Score 3: Mid/Competente ⭐⭐⭐

**Criterios**:
- ✅ Resuelve el problema correctamente
- ⚠️ Trade-offs evidentes pero aceptables
- ⚠️ Podría generar trabajo adicional futuro
- ⚠️ No es la decisión óptima pero funciona

**Ejemplos**:
- Dar 20% del tiempo para proyectos secundarios
- Soluciones diplomáticas que retrasan decisiones
- Parches que funcionan pero no son escalables

**¿Cuándo usar?**:
- La respuesta "sirve" pero no es la mejor
- Hay consecuencias manejables
- Trade-off entre velocidad y perfección

---

### Score 2: Junior/Funcional ⭐⭐

**Criterios**:
- ⚠️ Resuelve el problema inmediato
- ❌ Costos o consecuencias negativas importantes
- ❌ Genera deuda técnica o cultural significativa
- ❌ Visión de corto plazo sin estrategia

**Ejemplos**:
- Permitir hardcode con "ticket de refactor"
- Soluciones superficiales (pizzas para burnout)
- Contratar freelance en lugar de resolver el gap real

**¿Cuándo usar?**:
- La respuesta "funciona" pero tiene costos altos
- Genera problemas predecibles a futuro
- Es reactiva en lugar de estratégica

---

### Score 1: Pobre ⭐

**Criterios**:
- ❌ Decisión claramente mala
- ❌ Genera más problemas de los que resuelve
- ❌ Impacto negativo en equipo o negocio
- ⚠️ Recuperable pero costoso

**Ejemplos**:
- Bloquear deal de $1M por purismo
- Ignorar burnout del equipo
- Buscar "unicornio" perfecto en lugar de balancear equipo

**¿Cuándo usar?**:
- La decisión es claramente incorrecta
- Daña relaciones o cultura
- Pero NO es catastrófica (eso es score 0)

---

### Score 0: Catastrófico 💀

**Criterios**:
- ❌❌ Destruye valor, relaciones o cultura
- ❌❌ Consecuencias severas e irreversibles
- ❌❌ Muestra ignorancia o arrogancia extrema
- ❌❌ Puede llevar a despidos, renuncias masivas o fracaso del producto

**Ejemplos**:
- "Los usuarios se acostumbrarán" ignorando feedback
- Agradecer públicamente el sobretrabajo (valida toxicidad)
- Culpar al usuario por mal diseño del sistema

**¿Cuándo usar?**:
- La decisión es destructiva
- Consecuencias irreversibles o muy graves
- Refleja anti-patterns fundamentales de liderazgo

---

## Proceso de Reasignación

### Para opciones con score 2 actual:

1. **Pregunta**: ¿Cuán cerca está de la solución óptima?
   - Muy cerca → Score 4
   - Moderadamente lejos → Score 3
   - Lejos, con costos altos → Score 2

2. **Pregunta**: ¿Genera deuda técnica/cultural significativa?
   - No → Score 4
   - Algo, pero manejable → Score 3
   - Sí, importante → Score 2

3. **Pregunta**: ¿Es estratégica o táctica?
   - Estratégica (largo plazo) → Score 4
   - Táctica sólida → Score 3
   - Puramente reactiva → Score 2

### Para opciones con score 0 actual:

1. **Pregunta**: ¿Es recuperable el error?
   - Difícil pero posible → Score 1
   - Casi imposible, destructivo → Score 0

2. **Pregunta**: ¿Qué tan graves son las consecuencias?
   - Malas pero no catastróficas → Score 1
   - Catastróficas (despidos, renuncias, fracaso) → Score 0

3. **Pregunta**: ¿Refleja ignorancia o mala ejecución?
   - Mala ejecución → Score 1
   - Ignorancia/arrogancia fundamental → Score 0

---

## Distribución Objetivo

Después de reasignar, la distribución debería verse aproximadamente así:

```
Score 5: ~33% (96 opciones) - 1 por pregunta
Score 4: ~15% (40-50 opciones)
Score 3: ~15% (40-50 opciones)
Score 2: ~10% (25-30 opciones)
Score 1: ~15% (40-50 opciones)
Score 0: ~12% (30-40 opciones)
```

> No es necesario que sea exacto, pero evita concentrar todo en un solo nivel.

---

## Checklist de Validación

Antes de finalizar la reasignación, verifica:

- [ ] Cada pregunta tiene exactamente 1 opción con score 5
- [ ] No hay scores fuera del rango 0-5
- [ ] La distribución es razonable (no todo en 2-3 niveles)
- [ ] Los scores hacen sentido en contexto del escenario
- [ ] Las opciones score 4 son claramente mejores que las score 3
- [ ] Las opciones score 0 son realmente catastróficas
