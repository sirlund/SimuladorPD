# 🎯 Simulador PD - Lead Product Designer Assessment

Simulador interactivo de evaluación para Product Design Leads. Una aplicación de assessment con 24 escenarios realistas de liderazgo, gestión de equipos, estrategia de producto y toma de decisiones difíciles.

## 🚀 Características

- ✅ **24 Escenarios Complejos**: Preguntas basadas en situaciones reales de liderazgo
- ⏱️ **Timer Global**: 6 minutos para completar 12 preguntas por sesión
- 💾 **Persistencia de Campaña**: Progreso guardado en localStorage
- 🎨 **UI/UX Profesional**: Diseñado con Tailwind CSS
- 📊 **Sistema de Scoring**: Feedback detallado por cada decisión
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
2. **Test**: 12 preguntas aleatorias con timer de 6 minutos
3. **Review**: Análisis detallado de cada decisión con feedback
4. **Campaña**: Las preguntas usadas se "queman" y no se repiten

## 🧪 Características Técnicas

- **Custom Hooks**: Separación de lógica de presentación
- **localStorage**: Persistencia de progreso entre sesiones
- **Randomización**: Preguntas y opciones mezcladas aleatoriamente
- **Responsive**: Diseño adaptable a móvil, tablet y desktop
- **Accesibilidad**: Contrastes y estructura semántica

## 📝 Configuración

Puedes modificar la configuración en `src/hooks/useGameState.js`:

```javascript
const QUESTIONS_PER_SESSION = 12; // Preguntas por ronda
const TOTAL_TIME_SECONDS = 12 * 30; // Tiempo total (6 minutos)
```

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
