# Workflow: Agregar o Actualizar Preguntas

Este documento describe el proceso recomendado para agregar nuevas preguntas o actualizar explicaciones en el simulador Product Lead.

---

## 📋 Tabla de Contenidos

1. [Scripts Disponibles](#scripts-disponibles)
2. [Workflow: Agregar Nueva Pregunta](#workflow-agregar-nueva-pregunta)
3. [Workflow: Actualizar Explicaciones](#workflow-actualizar-explicaciones)
4. [Reglas de Formato](#reglas-de-formato)
5. [Troubleshooting](#troubleshooting)

---

## Scripts Disponibles

### 1. `validate-explanations.py`
Valida archivos de preguntas buscando problemas de sintaxis.

```bash
# Validar todos los archivos
python3 scripts/validate-explanations.py

# Validar un archivo específico
python3 scripts/validate-explanations.py src/data/questions/blocks/01-strategy.jsx
```

### 2. `sanitize-explanations.py`
Corrige automáticamente problemas comunes de comillas en explanations.

```bash
# Ver qué cambios se harían (dry-run)
python3 scripts/sanitize-explanations.py --dry-run --all

# Aplicar cambios a todos los archivos
python3 scripts/sanitize-explanations.py --all

# Sanitizar archivo específico
python3 scripts/sanitize-explanations.py src/data/questions/blocks/01-strategy.jsx
```

---

## Workflow: Agregar Nueva Pregunta

### Paso 1: Elegir el Archivo Correcto

Ubica el bloque temático adecuado:

- `01-strategy.jsx` - Estrategia, gestión, liderazgo
- `02-research.jsx` - Research, ética, legal, procesos
- `03-metrics.jsx` - Métricas, growth, data-driven
- `04-mobile.jsx` - Mobile, performance, i18n
- `05-culture.jsx` - Cultura, hiring, freelance
- `06-innovation.jsx` - AI, emerging tech, trends

### Paso 2: Usar el Template

Copia este template y rellénalo:

```javascript
{
  id: 'unique_question_id',
  category: "Categoría Descriptiva",
  icon: <IconName className="w-6 h-6 text-color-600" />,
  scenario: "Descripción del contexto y situación. Incluye datos concretos (runway, ARR%, timelines, etc.) para dar realismo.",
  question: "¿Pregunta específica sobre qué hacer?",
  options: [
    { 
      id: 'A', 
      text: "Nombre de Enfoque: Descripción de la acción sin revelar consecuencias. Suena defendible y profesional.", 
      score: 5, 
      type: "Lead (Estrategia)" 
    },
    { 
      id: 'B', 
      text: "Enfoque Alternativo: Otra acción que suena razonable pero tiene trade-offs menos óptimos.", 
      score: 3, 
      type: "Tipo descriptivo" 
    },
    { 
      id: 'C', 
      text: "Enfoque Problemático: Acción que describe el approach, no las consecuencias negativas.", 
      score: 1, 
      type: "Anti-pattern" 
    }
  ],
  explanation: "Explica por qué la opción correcta es superior en este contexto específico. Nombra frameworks (Wartime Leadership, Strangler Fig). Usa vocabulario técnico (CAC, ARR, Technical Debt). Explica por qué cada alternativa falla. Usa SOLO comillas simples (') para cualquier texto citado dentro de la explicación."
},
```

### Paso 3: Validar Formato

**IMPORTANTE:** Antes de agregar la pregunta:

```bash
# 1. Validar sintaxis
python3 scripts/validate-explanations.py src/data/questions/blocks/XX-block.jsx

# 2. Si hay errores, sanitizar
python3 scripts/sanitize-explanations.py src/data/questions/blocks/XX-block.jsx

# 3. Verificar en el navegador
# Abrir http://localhost:5175/debug y verificar que la pregunta se muestra correctamente
```

### Paso 4: Verificar en Debug Mode

1. Abrir `http://localhost:5175/debug`
2. Buscar tu nueva pregunta
3. Verificar que:
   - El escenario se lee bien
   - Las opciones no revelan la respuesta
   - La explicación es clara y educativa
   - No hay errores de renderizado

---

## Workflow: Actualizar Explicaciones

### Formato de Input

Crea un archivo `.txt` con este formato:

```
ID: question_id_1
Explicación:
Texto de la nueva explicación para la pregunta 1. Usa comillas simples para citas.

ID: question_id_2
Explicación:
Texto de la nueva explicación para la pregunta 2.
```

### Proceso Recomendado

1. **Preparar el archivo de input:**
   ```bash
   # Crear archivo con nuevas explicaciones
   nano scripts/new-explanations.txt
   ```

2. **Validar formato antes de aplicar:**
   ```bash
   # Verificar que el input está bien formado
   python3 << 'PY'
   import re
   from pathlib import Path
   
   file = Path("scripts/new-explanations.txt")
   text = file.read_text()
   
   pattern = r'ID:\s*(\S+)\s*\nExplicación:\s*\n(.*?)(?=\n\nID:|$)'
   matches = re.findall(pattern, text, re.DOTALL)
   
   print(f"✅ Parsed {len(matches)} explanations")
   for qid, exp in matches[:3]:
       print(f"  - {qid}: {len(exp)} chars")
   PY
   ```

3. **Aplicar actualizaciones:**
   Usa el script `update-v4-parser.py` como base, modificando la ruta del input file.

4. **Sanitizar y validar:**
   ```bash
   # Sanitizar automáticamente
   python3 scripts/sanitize-explanations.py --all
   
   # Validar resultado
   python3 scripts/validate-explanations.py
   ```

5. **Verificar en browser:**
   - Abrir `/debug`
   - Revisar algunas explicaciones actualizadas
   - Exportar a Markdown para revisión offline (opcional)

---

## Reglas de Formato

### ✅ DO: Cosas que DEBES hacer

1. **Comillas Simples en Explanations:**
   ```javascript
   explanation: "Framework 'Wartime Leadership' establece que..."
   ```

2. **IDs Descriptivos:**
   ```javascript
   id: 'strategy_pivot_burnout'  // ✅ Bueno
   id: 'q1'                       // ❌ Malo
   ```

3. **Opciones sin Auto-Spoilers:**
   ```javascript
   text: "Sprint de Choque: Aceptar el deadline..."  // ✅ Describe la acción
   text: "Sprint suicida que quemará al equipo..."   // ❌ Revela consecuencia
   ```

4. **Explicaciones con Contexto:**
   ```javascript
   explanation: "Con un Runway crítico de 4 meses, la velocidad es supervivencia..."  // ✅
   explanation: "Esta opción es mejor porque es más estratégica."  // ❌
   ```

### ❌ DON'T: Cosas que DEBES evitar

1. **Comillas Dobles Anidadas:**
   ```javascript
   explanation: "El \"Genio Tóxico\" genera..."  // ❌ Causa error de sintaxis
   explanation: "El 'Genio Tóxico' genera..."   // ✅ Correcto
   ```

2. **Referencias a IDs de Opciones:**
   ```javascript
   explanation: "La opción A es correcta porque..."  // ❌ Se rompe con shuffle
   explanation: "El primer enfoque es correcto..."   // ✅ Agnóstico de posición
   ```

3. **Options que revelan la respuesta:**
   ```javascript
   text: "Pero esto creará technical debt..."  // ❌ Telegraph
   text: "Implementación inmediata sin documentación"  // ✅ Neutral
   ```

---

## Troubleshooting

### Problema: Error de compilación con comillas

**Síntoma:**
```
Unexpected token, expected "," (line:XX:YY)
```

**Solución:**
```bash
# 1. Sanitizar automáticamente
python3 scripts/sanitize-explanations.py --all

# 2. Verificar manualmente la línea indicada
# Buscar comillas dobles dentro de strings y reemplazarlas con simples
```

### Problema: Pregunta no aparece en el simulador

**Verificar:**
1. ¿Está en el array exportado del archivo?
2. ¿El archivo está importado en `src/data/questions/index.js`?
3. ¿Hay errores de sintaxis? (ejecutar `validate-explanations.py`)

**Debug:**
```bash
# Ver en debug mode
open http://localhost:5175/debug

# Contar preguntas por archivo
grep -c "id:" src/data/questions/blocks/*.jsx
```

### Problema: Explicación no se actualiza

**Causas comunes:**
1. El ID en el input file no coincide con el ID en el JSX
2. Hay caracteres especiales que rompen el parsing
3. El formato del archivo de input está mal

**Solución:**
```bash
# Verificar IDs en el archivo
grep "id:" src/data/questions/blocks/01-strategy.jsx

# Verificar parsing del input
python3 -c "
import re
text = open('scripts/input.txt').read()
matches = re.findall(r'ID:\s*(\S+)', text)
print('IDs found:', matches)
"
```

---

## Pre-commit Checklist

Antes de hacer commit de cambios en preguntas:

- [ ] Ejecutar `python3 scripts/validate-explanations.py`
- [ ] Verificar en `/debug` que las preguntas se ven correctamente
- [ ] Confirmar que no hay errores de compilación en Vite
- [ ] Las opciones no revelan la respuesta (anti-telegraph)
- [ ] Las explicaciones usan comillas simples para texto interno
- [ ] Los IDs de pregunta son descriptivos y únicos

---

## Recursos Adicionales

- **Debug Mode:** `http://localhost:5175/debug`
- **Export Markdown:** Botón en debug mode para download offline
- **PD Expert Guidelines:** `src/data/questions/pd-expert.md`

---

## Historial de Cambios

- **2024-12-02:** Creación del workflow y scripts de validación/sanitización
- **2024-12-01:** Actualización masiva a V4 explanations (135 preguntas)
