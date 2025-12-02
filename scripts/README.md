# 🛠️ Scripts de Mantenimiento

Scripts para gestión y validación de preguntas del simulador.

> **Última limpieza:** 2024-12-02 - Eliminados 14 scripts legacy de migración V4

## Scripts Disponibles

### `validate-explanations.py`
Valida sintaxis y formato de archivos de preguntas.

```bash
# Validar todos los archivos
python3 scripts/validate-explanations.py

# Validar archivo específico
python3 scripts/validate-explanations.py src/data/questions/blocks/01-strategy.jsx
```

**Detecta:**
- ✅ Comillas dobles no escapadas en explanations
- ⚠️ Campos faltantes en objetos de pregunta (puede tener falsos positivos)

### `sanitize-explanations.py`
Corrige automáticamente problemas de comillas en explanations.

```bash
# Preview de cambios (dry-run)
python3 scripts/sanitize-explanations.py --dry-run --all

# Aplicar correcciones
python3 scripts/sanitize-explanations.py --all

# Sanitizar archivo específico
python3 scripts/sanitize-explanations.py src/data/questions/blocks/XX-block.jsx
```

**Corrige:**
- Reemplaza comillas dobles (`"`) con simples (`'`) dentro de strings de explanation
- Previene errores de compilación por comillas mal escapadas

## Workflow Completo

Ver documentación detallada en:
**[`docs/QUESTION_WORKFLOW.md`](../docs/QUESTION_WORKFLOW.md)**

### Quick Start

**Agregar nueva pregunta:**
1. Copiar template de `docs/question-template.js`
2. Rellenar campos
3. Validar: `python3 scripts/validate-explanations.py ARCHIVO.jsx`
4. Verificar en `/debug`

**Actualizar explicaciones:**
1. Crear archivo de input con formato `ID:\nExplicación:\n`
2. Ejecutar script de actualización
3. Sanitizar: `python3 scripts/sanitize-explanations.py --all`
4. Validar: `python3 scripts/validate-explanations.py`

## Pre-commit Checklist

Antes de hacer commit:

```bash
# 1. Sanitizar (auto-fix)
python3 scripts/sanitize-explanations.py --all

# 2. Validar (check)
python3 scripts/validate-explanations.py

# 3. Verificar visualmente
open http://localhost:5175/debug
```

## Archivos de Referencia

- **Workflow completo:** `docs/QUESTION_WORKFLOW.md`
- **Template de pregunta:** `docs/question-template.js`
- **Guidelines PD:** `src/data/questions/pd-expert.md`
