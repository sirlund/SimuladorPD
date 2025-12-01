# 🎯 Product Lead Sim - Assessment de Liderazgo

Simulador interactivo de evaluación para Product Leads. Una aplicación de assessment con 96 escenarios realistas de liderazgo, gestión de equipos, estrategia de producto y toma de decisiones difíciles bajo presión.

## 🚀 Características

- ✅ **96 Escenarios Complejos**: Preguntas basadas en situaciones reales de liderazgo (startup y enterprise)
- ⏱️ **Brutal Mode**: 7 minutos para responder tantas preguntas como puedas
- 🏆 **Sistema de Niveles**: 5 niveles de seniority basados en puntos y precisión
- 💾 **Persistencia de Campaña**: Progreso guardado en localStorage
- 🎨 **UI/UX Profesional**: Diseñado con Tailwind CSS
- 📊 **Scoring Numérico**: Puntos totales, precisión y feedback detallado
- 🏗️ **Arquitectura Modular**: Hooks personalizados y componentes reutilizables

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
│   ├── TokuAssessment.jsx          # Componente principal
│   ├── screens/                     # Pantallas del juego
│   │   ├── IntroScreen.jsx
│   │   ├── QuestionScreen.jsx
│   │   ├── ReviewScreen.jsx
│   │   └── CampaignCompleteScreen.jsx
│   └── ui/                          # Componentes reutilizables
│       ├── ProgressBar.jsx
│       └── Timer.jsx
├── hooks/                           # Custom hooks
│   ├── useGameState.js             # Lógica del juego
│   ├── useTimer.js                 # Lógica del timer
│   └── useLocalStorage.js          # Persistencia
├── data/
│   └── questionPool.js             # Banco de preguntas
├── utils/                           # Utilidades
├── App.jsx
├── main.jsx
└── index.css
```

## 🎮 Cómo Funciona

1. **Intro**: Pantalla de bienvenida con progreso de campaña
2. **Test**: Responde tantas preguntas como puedas en 7 minutos - BRUTAL MODE 🔥
3. **Review**: Análisis detallado con puntuación numérica, precisión y nivel alcanzado
4. **Campaña**: Las preguntas usadas se "queman" y no se repiten

## 🏅 Sistema de Niveles

Tu nivel se determina por **precisión + cantidad de preguntas respondidas**:

- **Head of Design**: 90%+ precisión, 15+ preguntas
- **Lead Designer**: 80%+ precisión, 12+ preguntas
- **Senior Designer**: 65%+ precisión, 10+ preguntas
- **Mid-Level Designer**: 50%+ precisión, 8+ preguntas
- **Diseñador en Crecimiento**: < 50% precisión

## 🧪 Características Técnicas

- **Custom Hooks**: Separación de lógica de presentación
- **localStorage**: Persistencia de progreso entre sesiones
- **Randomización**: Preguntas y opciones mezcladas aleatoriamente
- **Responsive**: Diseño adaptable a móvil, tablet y desktop
- **Accesibilidad**: Contrastes y estructura semántica

## 📝 Configuración

Puedes modificar la configuración en `src/hooks/useGameState.js`:

```javascript
const TOTAL_TIME_SECONDS = 7 * 60; // 7 minutos BRUTAL MODE 🔥
const URGENT_THRESHOLD = 150; // 2.5 minutos finales - PRESIÓN EXTREMA
```

**Nota**: Ya no hay límite de preguntas por sesión. El juego termina cuando se acaba el tiempo.

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
