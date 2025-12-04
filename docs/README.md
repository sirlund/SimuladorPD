# Documentación SimuladorPD

Índice de documentación del proyecto SimuladorPD - Simulador de Liderazgo en Product Design

## Estructura de Documentación

### Guías Principales

- **[SCORING_GUIDELINES.md](./SCORING_GUIDELINES.md)** - Sistema de scoring y evaluación de respuestas
- **[QUESTION_WORKFLOW.md](./QUESTION_WORKFLOW.md)** - Flujo de trabajo para crear y mantener preguntas
- **[question-template.js](./question-template.js)** - Template para crear nuevas preguntas

### Auditorías y Progreso

- **[AUDIT_PD_EXPERT_V3.md](./AUDIT_PD_EXPERT_V3.md)** - Auditoría del agente pd-expert V3
- **[AUDIT_V4_PROGRESS.md](./AUDIT_V4_PROGRESS.md)** - Progreso de actualización a V4
- **[TIER_1.3_PREGUNTAS_OBVIAS.md](./TIER_1.3_PREGUNTAS_OBVIAS.md)** - Tracking de preguntas obvias identificadas

### Planes y Extensiones

- **[PLAN_EXTENSION_POOL.md](./PLAN_EXTENSION_POOL.md)** - Plan de extensión del pool de preguntas

## Documentación en Root

### Análisis y Planes
- **[ANALISIS_QUESTION_POOL.md](../ANALISIS_QUESTION_POOL.md)** - Análisis del pool de preguntas
- **[EJEMPLOS_MEJORAS.md](../EJEMPLOS_MEJORAS.md)** - Ejemplos de mejoras aplicadas
- **[PLAN_MEJORAS_CONSOLIDADO.md](../PLAN_MEJORAS_CONSOLIDADO.md)** - Plan consolidado de mejoras

### README Principal
- **[README.md](../README.md)** - Documentación principal del proyecto

## Estructura del Proyecto

```
SimuladorPD/
├── src/
│   ├── components/
│   │   ├── screens/       # 6 pantallas del flujo
│   │   ├── game/          # Componentes de juego
│   │   └── ui/            # Componentes UI reutilizables
│   ├── data/
│   │   └── questions/
│   │       ├── blocks/    # 6 bloques de preguntas (130 total)
│   │       ├── index.js   # Agregador de bloques
│   │       └── getQuestions.js # API de acceso a preguntas
│   ├── hooks/             # Custom hooks
│   └── utils/             # Utilidades y constantes
├── docs/                  # Documentación técnica
└── .claude/commands/      # Comandos y agentes de Claude
```

## Sistema de Preguntas

### Bloques Disponibles (130 preguntas)

1. **01-strategy.jsx** - Estrategia, Sistemas & Liderazgo (36 preguntas)
2. **02-research.jsx** - Research, Ética & Colaboración (24 preguntas)
3. **03-metrics.jsx** - Crisis, Data & Experimentación (18 preguntas)
4. **04-mobile.jsx** - Mobile, Plataformas & Handoff (18 preguntas)
5. **05-culture.jsx** - Cultura, Stakeholders & Business (16 preguntas)
6. **06-innovation.jsx** - Innovación, AI & Tendencias (18 preguntas)

### Sistema de Scoring

- **5 puntos**: Lead / Decisión excelente
- **3 puntos**: Mid / Decisión competente
- **1 punto**: Junior / Decisión subóptima
- **-1 punto**: Tóxico / Anti-pattern peligroso

Ver [SCORING_GUIDELINES.md](./SCORING_GUIDELINES.md) para más detalles.

## Flujo del Juego

### Estados del Juego

1. **intro** - Pantalla inicial con estadísticas de campaña
2. **test** - Assessment activo (preguntas)
3. **round_transition** - Transición entre rondas
4. **review** - Pantalla de revisión de respuestas
5. **campaign_complete** - Todas las preguntas completadas

### Sistema de Rondas

- El assessment se divide en **3 rondas**
- Cada ronda tiene **5 minutos** de duración
- Las preguntas se distribuyen equitativamente entre las rondas
- Las preguntas contestadas se marcan como "quemadas" (localStorage)
- Cuando se completan todas las preguntas, se muestra `campaign_complete`

## Desarrollo

### Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
```

### Agentes Claude

- **pd-expert** - Agente especializado en auditoría y mejora de preguntas
  - Ubicación: `.claude/commands/pd-expert.md`
  - Versión actual: V4
  - Capacidades: Audit exhaustivo, aplicación de patrones, validación de calidad

## Mantenimiento

### Agregar Nueva Pregunta

1. Consultar [question-template.js](./question-template.js)
2. Seguir [QUESTION_WORKFLOW.md](./QUESTION_WORKFLOW.md)
3. Ejecutar `/pd-expert audit [bloque]` para validar

### Modificar Pregunta Existente

1. Editar el archivo del bloque correspondiente
2. Verificar compliance con pd-expert V4
3. Validar scoring según [SCORING_GUIDELINES.md](./SCORING_GUIDELINES.md)

## Enlaces Rápidos

- [Estructura de Proyecto](../README.md#proyecto)
- [Sistema de Scoring](./SCORING_GUIDELINES.md)
- [Workflow de Preguntas](./QUESTION_WORKFLOW.md)
- [Audit Progress](./AUDIT_V4_PROGRESS.md)
