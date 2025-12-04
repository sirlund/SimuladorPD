# 🎯 SimuladorPD - Assessment de Liderazgo en Product Design

Simulador interactivo de evaluación para Product Design Leaders. Una aplicación de assessment con 130 escenarios realistas de liderazgo, gestión de equipos, estrategia de producto y toma de decisiones difíciles bajo presión.

## 🚀 Características

- ✅ **130 Escenarios Complejos**: Preguntas basadas en situaciones reales de liderazgo (startup y enterprise)
- 🔄 **Sistema de Rondas**: 3 rondas de 5 minutos cada una
- 🏆 **Scoring de 4 Niveles**: Lead (5), Mid (3), Junior (1), Tóxico (-1)
- 💾 **Persistencia de Campaña**: Progreso guardado en localStorage - las preguntas no se repiten
- 🎨 **UI/UX Profesional**: Diseñado con Tailwind CSS
- 📊 **Análisis Detallado**: Puntos totales, precisión y feedback por pregunta
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
│   ├── screens/                     # Pantallas del juego (6)
│   │   ├── IntroScreen.jsx
│   │   ├── QuestionScreen.jsx
│   │   ├── RoundTransitionScreen.jsx
│   │   ├── ReviewScreen.jsx
│   │   └── CampaignCompleteScreen.jsx
│   ├── game/                        # Componentes de juego
│   │   ├── OptionButton.jsx
│   │   ├── QuestionCard.jsx
│   │   └── ScoreBreakdown.jsx
│   └── ui/                          # Componentes reutilizables
│       ├── ProgressBar.jsx
│       ├── Timer.jsx
│       └── MarkdownText.jsx
├── hooks/                           # Custom hooks
│   ├── useGameState.js             # Lógica del juego
│   ├── useTimer.js                 # Lógica del timer
│   └── useLocalStorage.js          # Persistencia
├── data/
│   └── questions/                   # Sistema de preguntas
│       ├── blocks/                  # 6 bloques temáticos (130 preguntas)
│       │   ├── 01-strategy.jsx     # 36 preguntas
│       │   ├── 02-research.jsx     # 24 preguntas
│       │   ├── 03-metrics.jsx      # 18 preguntas
│       │   ├── 04-mobile.jsx       # 18 preguntas
│       │   ├── 05-culture.jsx      # 16 preguntas
│       │   └── 06-innovation.jsx   # 18 preguntas
│       ├── index.js                 # Agregador de bloques
│       └── getQuestions.js          # API de acceso
├── utils/
│   └── constants.js                 # Constantes globales
├── App.jsx
├── main.jsx
└── index.css
```

## 🎮 Cómo Funciona

### Flujo del Assessment

1. **Intro**: Pantalla de bienvenida con progreso de campaña (preguntas restantes)
2. **Ronda 1**: 5 minutos para responder el primer batch de preguntas
3. **Transición**: Pantalla de transición entre rondas
4. **Ronda 2-3**: Continúan con nuevos batches de preguntas
5. **Review**: Análisis detallado con puntuación, precisión y feedback por pregunta
6. **Campaña**: Las preguntas usadas se "queman" y no se repiten hasta completar las 130

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
- `src/hooks/useGameState.js` - `ROUND_TIME_SECONDS = 5 * 60` (5 minutos por ronda)
- `src/utils/constants.js` - `URGENT_THRESHOLD = 150` (alerta visual a 2.5 minutos)

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

Edita `src/data/questionPool.js` y añade nuevos objetos al array:

```javascript
{
  id: 'unique_id',
  category: "Categoría",
  icon: <IconComponent />,
  scenario: "Descripción del escenario...",
  question: "¿Qué harías?",
  options: [
    { id: 'A', text: "Opción A", score: 5, type: "Perfecto" },
    { id: 'B', text: "Opción B", score: 2, type: "Bueno" },
    { id: 'C', text: "Opción C", score: 0, type: "Malo" }
  ],
  explanation: "Explicación de la mejor opción..."
}
```

## 📄 Licencia

MIT

## 👨‍💻 Autor

Desarrollado para evaluar habilidades de liderazgo en Product Design.

---

## 📋 CHANGELOG

### [v7.0] - 2025-11-27

#### 🎯 Cambios Mayores
- **Pool de preguntas expandido**: De 64 a **96 preguntas** totales (+32 nuevas)
- **Modo Brutal activado**: Eliminado límite de 24 preguntas por sesión
- **Sistema de puntuación rediseñado**: De porcentaje a **puntuación numérica con niveles**
- **Tiempo ajustado**: De 5 a **7 minutos** por sesión

#### ✨ Nuevas Características
- **Sistema de niveles de seniority**: 5 niveles basados en precisión y cantidad respondida
  - Head of Design (90%+, 15+ preguntas)
  - Lead Designer (80%+, 12+ preguntas)
  - Senior Designer (65%+, 10+ preguntas)
  - Mid-Level Designer (50%+, 8+ preguntas)
  - Diseñador en Crecimiento (<50%)

- **Métricas mejoradas en pantalla de resultados**:
  - Puntos totales (ej: 45/65 puntos)
  - Cantidad de preguntas respondidas
  - Respuestas perfectas (score = 5)
  - Barra de precisión con porcentaje
  - Badge de nivel con icono

- **32 preguntas nuevas distribuidas en 16 categorías core** (2 por categoría):
  - Gestión de Crisis & Liderazgo
  - Data-Driven Design
  - Producto vs Ventas
  - Gestión de Talento
  - Gestión de Stakeholders
  - Estrategia de Producto
  - Design Ops
  - Cultura de Diseño
  - Colaboración con Ingeniería
  - Bienestar del Equipo
  - Arquitectura de Sistemas
  - Ética de Diseño
  - Validación Ágil
  - Mentoría & Crecimiento
  - Innovación & AI
  - Estrategia de Migración

#### 🔧 Mejoras Técnicas
- Score y maxPossibleScore se calculan dinámicamente durante el juego
- El juego termina cuando el timer llega a 0 (sin importar cuántas preguntas respondiste)
- Todas las preguntas disponibles se cargan al inicio de la sesión
- Instrucciones actualizadas: "7 minutos para responder tantas preguntas como puedas"

#### 🎨 Mejoras de UI/UX
- Badge de nivel con color e icono distintivo
- Grid de 3 estadísticas principales
- Barra de precisión animada
- Mejor jerarquía visual en pantalla de resultados
- Iconos específicos por nivel (Trophy, Target, Zap, Flame, Brain)

### [v6.0] - 2025-11-26
- Pool inicial de 72 preguntas (3x el tamaño original)
- Casos tanto de startup como enterprise
- Timer de 5 minutos, 24 preguntas por sesión

### [v5.0] - 2025-11-25
- Lanzamiento inicial del simulador
- 24 preguntas base
- Sistema de porcentaje
