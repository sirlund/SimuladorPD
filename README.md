# 🎯 SimuladorPD - Assessment de Liderazgo en Product Design

Simulador interactivo de evaluación para Product Design Leaders. Una aplicación de assessment con 164 escenarios realistas de liderazgo, gestión de equipos, estrategia de producto y toma de decisiones difíciles bajo presión.

## 🚀 Características

- ✅ **164 Escenarios Complejos**: Preguntas basadas en situaciones reales de liderazgo (startup y enterprise)
- 🔄 **Sistema de Rondas**: 3 rondas de 3 minutos cada una
- 🏆 **Scoring de 4 Niveles**: Lead (5), Mid (3), Junior (1), Tóxico (-1)
- 💾 **Persistencia de Campaña**: Progreso guardado en localStorage - las preguntas no se repiten
- 🎨 **UI/UX Profesional**: Diseñado con Tailwind CSS y dark mode
- 📊 **Leadership Maturity Index**: Análisis de arquetipos con evidencia de decisiones
- 🏗️ **Arquitectura Modular**: Hooks personalizados y componentes reutilizables
- 📚 **6 Bloques Temáticos**: Strategy, Research, Metrics, Mobile, Culture, Innovation

## 🛠️ Stack Tecnológico

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos modernos
- **localStorage** - Persistencia de datos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/
│   ├── PDAssessment.jsx            # Componente principal
│   ├── screens/                     # Pantallas del flujo
│   │   ├── IntroScreen.jsx
│   │   ├── QuestionScreen.jsx
│   │   ├── RoundTransitionScreen.jsx
│   │   ├── ReviewScreen.jsx
│   │   ├── CampaignCompleteScreen.jsx
│   │   ├── LearningScreen.jsx      # Análisis con Evidence Cards
│   │   ├── DebugScreen.jsx         # Debug de preguntas
│   │   └── DebugIndexScreen.jsx    # Índice de debug por arquetipo
│   └── ui/                          # Componentes reutilizables
│       ├── ProgressBar.jsx
│       ├── Timer.jsx
│       ├── MarkdownText.jsx
│       └── ThemeToggle.jsx
├── hooks/                           # Custom hooks
│   ├── useGameState.js             # Lógica del juego
│   ├── useTimer.js                 # Lógica del timer
│   ├── useLocalStorage.js          # Persistencia
│   └── useSessionAnalysis.js       # Análisis de sesión y arquetipos
├── context/
│   └── ThemeContext.jsx            # Dark/Light mode
├── data/
│   ├── questions/                   # Sistema de preguntas
│   │   ├── blocks/                  # 6 bloques temáticos (164 preguntas)
│   │   │   ├── 01-strategy.jsx     # 31 preguntas
│   │   │   ├── 02-research.jsx     # 26 preguntas
│   │   │   ├── 03-metrics.jsx      # 26 preguntas
│   │   │   ├── 04-mobile.jsx       # 26 preguntas
│   │   │   ├── 05-culture.jsx      # 28 preguntas
│   │   │   └── 06-innovation.jsx   # 27 preguntas
│   │   └── index.js                 # Agregador de bloques
│   ├── learning/                    # Sistema de arquetipos y diagnóstico
│   │   ├── archetypes.js           # Definición de arquetipos (éxito/fallo)
│   │   ├── diagnoses.js            # Lógica de diagnóstico
│   │   ├── questionArchetypeMapping.js  # Generadores de evidencia
│   │   ├── sniperResources.js      # Recursos por arquetipo
│   │   ├── mondayMissions.js       # Misiones semanales
│   │   └── index.js
│   └── getQuestions.js              # API de acceso
├── utils/
│   └── constants.js                 # Constantes globales
├── App.jsx
├── main.jsx
└── index.css
```

## 🎮 Cómo Funciona

### Flujo del Assessment

1. **Intro**: Pantalla de bienvenida con progreso de campaña (preguntas restantes)
2. **Ronda 1**: 3 minutos para responder el primer batch de preguntas
3. **Transición**: Pantalla de transición entre rondas
4. **Ronda 2-3**: Continúan con nuevos batches de preguntas
5. **Review**: Análisis detallado con puntuación, precisión y feedback por pregunta
6. **Campaña**: Las preguntas usadas se "queman" y no se repiten hasta completar las 164

### Estados del Juego

- `intro` - Pantalla inicial
- `test` - Assessment activo
- `round_transition` - Transición entre rondas
- `review` - Revisión de respuestas
- `campaign_complete` - Todas las preguntas completadas

## 🏅 Sistema de Scoring

Cada opción tiene un score que refleja la calidad de la decisión:

- **Score 5 (Lead)**: Decisión estratégica óptima, balancea negocio, equipo y calidad
- **Score 3 (Mid)**: Decisión competente, trade-offs aceptables pero subóptima
- **Score 1 (Junior)**: Decisión subóptima, genera deuda técnica o cultural
- **Score -1 (Tóxico)**: Anti-pattern peligroso, filosofía destructiva

**Evaluación**: Tu score final se calcula como `(totalScore / maxPossibleScore) * 100`

Ver [docs/SCORING_GUIDELINES.md](docs/SCORING_GUIDELINES.md) para más detalles.

## 🧪 Características Técnicas

- **Custom Hooks**: Separación de lógica de presentación
- **localStorage**: Persistencia de progreso entre sesiones
- **Randomización**: Preguntas y opciones mezcladas aleatoriamente
- **Responsive**: Diseño adaptable a móvil, tablet y desktop
- **Accesibilidad**: Contrastes y estructura semántica

## 📝 Configuración

### Constantes del Timer

Puedes modificar las constantes en:
- `src/hooks/useGameState.js` - `ROUND_TIME_SECONDS = 3 * 60` (3 minutos por ronda)
- `src/utils/constants.js` - `URGENT_THRESHOLD = 60` (alerta visual en último minuto)

### Sistema de Rondas

El assessment se divide automáticamente en **3 rondas** con las preguntas disponibles distribuidas equitativamente. Si quedan menos preguntas que rondas, el sistema se ajusta automáticamente.

## 📚 Documentación

Para documentación completa del proyecto, consulta:

- **[docs/README.md](docs/README.md)** - Índice de documentación
- **[docs/SCORING_GUIDELINES.md](docs/SCORING_GUIDELINES.md)** - Sistema de scoring detallado
- **[docs/QUESTION_WORKFLOW.md](docs/QUESTION_WORKFLOW.md)** - Cómo crear/modificar preguntas
- **[docs/AUDIT_LOG.md](docs/AUDIT_LOG.md)** - Historial de cambios y auditorías

## 🎨 Personalización

### Agregar nuevas preguntas

Edita los archivos en `src/data/questions/blocks/` y añade nuevos objetos al array:

```javascript
{
  id: 'unique_id',
  displayId: 'STR-99',
  category: "Categoría",
  icon: <IconComponent />,
  scenario: "Descripción del escenario...",
  question: "¿Qué harías?",
  options: [
    { id: 'A', text: "Opción A", score: 5, type: "Lead", decisionSummary: "Tomaste la decisión óptima." },
    { id: 'B', text: "Opción B", score: 3, type: "Mid", decisionSummary: "Decisión aceptable con trade-offs." },
    { id: 'C', text: "Opción C", score: 1, type: "Junior", decisionSummary: "Decisión subóptima." }
  ],
  explanation: "Explicación de la mejor opción..."
}
```

> **Nota**: El campo `decisionSummary` en cada opción se usa en LearningScreen para mostrar qué decidió el usuario.

## 📄 Licencia

MIT

## 👨‍💻 Autor

Desarrollado para evaluar habilidades de liderazgo en Product Design.

---

## 📋 CHANGELOG

### [v7.1] - 2025-12-21

#### 🎯 Evidence Cards Mejorados
- **Nuevo campo `decisionSummary`**: Cada opción ahora incluye un resumen corto de la decisión tomada
- **LearningScreen mejorado**: Evidence Cards muestran título (categoría) + descripción (decisionSummary) + contexto expandible
- **Limpieza de mocks**: Removidos campos redundantes y corregidos IDs inválidos en DebugIndexScreen

#### 🧹 Limpieza de Código
- Eliminada función `truncateText()` obsoleta de questionArchetypeMapping.js
- Eliminados scripts obsoletos: `analyzeScoring.cjs`, `updateScoring.js`
- Actualizado inventario de scripts

#### 📝 Preguntas con decisionSummary (MVP)
- 01-strategy.jsx: STR-01 a STR-08, STR-26, STR-30
- 02-research.jsx: RES-09, RES-24
- 03-metrics.jsx: MET-06, MET-16
- 04-mobile.jsx: MOB-01, MOB-06, MOB-07
- 05-culture.jsx: CUL-01, CUL-06, CUL-19, CUL-20, CUL-21
- 06-innovation.jsx: INN-06, INN-15, INN-24, INN-26

### [v7.0] - 2025-11-27

#### 🎯 Cambios Mayores
- **Pool de preguntas expandido**: 164 preguntas totales en 6 bloques temáticos
- **Sistema de puntuación rediseñado**: Scoring numérico con 4 niveles (5, 3, 1, -1)
- **Sistema de rondas**: 3 rondas de 3 minutos cada una

#### ✨ Nuevas Características
- **Leadership Maturity Index**: Sistema de arquetipos (éxito/fallo)
- **Evidence Cards**: Visualización de impacto de decisiones
- **Dark Mode**: Soporte completo para tema oscuro

#### 🎨 Mejoras de UI/UX
- Badge de nivel con color e icono distintivo
- Barra de precisión animada
- Mejor jerarquía visual en pantalla de resultados
