import {
  Map,
  Zap,
  GitMerge,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export const thaloz_expansion_pack = [
  // --- BLOQUE EXTRA (TLZ-021 a TLZ-025) ---
  {
    id: 'thaloz_geo_map_clutter',
    displayId: 'TLZ-021',
    category: "Map Interface UX",
    icon: <Map className="w-6 h-6 text-emerald-600" />,
    scenario: "Diseñas la vista móvil para conductores logísticos. El mapa debe mostrar la ruta, 50 paradas, tráfico y estado de entrega. Al mostrar todo, el mapa es ilegible ('Pin Clutter'). El PM insiste: 'Necesitan ver todo el contexto'.",
    question: "¿Cómo resuelves la densidad de información geoespacial?",
    options: [
      { id: 'A', text: "**Clustering Dinámico:** Agrupas los pines por zona/barrio con un contador. Al hacer zoom, se revelan los detalles. Priorizas la legibilidad macro sobre el detalle micro inmediato.", score: 5, type: "Lead (Progressive Disclosure)", decisionSummary: "Implementaste patrones de agrupamiento (Clustering) para gestionar la carga cognitiva visual." },
      { id: 'B', text: "**Lista sobre Mapa:** Reduces el mapa a una miniatura superior y priorizas una 'Lista de Tareas' ordenada cronológicamente. Asumes que el conductor necesita saber 'cuál es el siguiente', no ver el mapa completo.", score: 3, type: "Alternativo (Cambio de Modelo)", decisionSummary: "Cambiaste el modelo mental a lista, lo cual es útil pero ignora el requisito de contexto espacial." },
      { id: 'C', text: "**Toggle Hell:** Agregas 5 filtros (Tráfico, Paradas, Estado) para que el usuario prenda y apague capas. Transfieres la complejidad de la limpieza visual al usuario.", score: 1, type: "Perezoso (Fricción)", decisionSummary: "Sobrecargaste al usuario con la responsabilidad de limpiar la interfaz mediante filtros manuales." }
    ],
    explanation: "En interfaces de mapas densas, mostrar todo es no mostrar nada. El **Clustering** y el **Zoom-dependent content** son patrones estándar para manejar densidad sin perder contexto."
  },
  {
    id: 'thaloz_lightweight_research_speed',
    displayId: 'TLZ-022',
    category: "Lightweight Research",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    scenario: "Tienes 48 horas para validar un flujo de 'Cancelación de Pedido'. No hay tiempo para reclutar usuarios externos ni presupuesto para herramientas. El equipo quiere lanzar 'a ciegas' para cumplir el sprint.",
    question: "¿Cómo aplicas 'Lightweight Research'?",
    options: [
      { id: 'A', text: "**Pasillo (Hallway) Testing:** Agarras a 5 personas de Ventas o Customer Success (que no conocen el proyecto) y les pides que completen la tarea en 5 minutos. No son el usuario final, pero detectan fricciones obvias de usabilidad.", score: 5, type: "Lead (Guerrilla)", decisionSummary: "Ejecutaste pruebas de guerrilla internas para mitigar riesgos mayores con costo cero." },
      { id: 'B', text: "**Experto Heurístico:** Haces una revisión tú mismo basada en las 10 Heurísticas de Nielsen. Confías en tu criterio senior para aprobar el flujo.", score: 3, type: "Riesgoso (Sesgo Propio)", decisionSummary: "Confiaste únicamente en tu propio juicio experto, ignorando la ceguera del creador." },
      { id: 'C', text: "**Skip Research:** Aceptas lanzar sin testear. En un entorno ágil, 'Lanzar es el Test'. Monitoreas tickets de soporte post-lanzamiento.", score: 1, type: "Reactivo (Deuda de UX)", decisionSummary: "Lanzaste sin red de seguridad, aceptando que los usuarios reales encuentren los errores." }
    ],
    explanation: "Cuando no hay tiempo, **algo de research > cero research**. El testing interno con personas ajenas al proyecto (Hallway Testing) es la técnica 'lightweight' por excelencia para atrapar errores graves de lógica."
  },
  {
    id: 'thaloz_system_contribution_model',
    displayId: 'TLZ-023',
    category: "System Governance",
    icon: <GitMerge className="w-6 h-6 text-purple-500" />,
    scenario: "Un diseñador de otro squad creó un 'Date Picker' nuevo porque el del Sistema de Diseño 'no cubría rangos de fechas complejos'. Lo usó en su proyecto y ahora quiere meterlo a la librería oficial.",
    question: "¿Cómo gestionas esta contribución?",
    options: [
      { id: 'A', text: "**Rechazo Inmediato:** El sistema es sagrado. Si no usó el componente oficial, debe refactorizar su diseño. No permites componentes 'rogue'.", score: 1, type: "Gatekeeper (Desalienta)", decisionSummary: "Actuaste como policía del sistema, desalentando la innovación y colaboración." },
      { id: 'B', text: "**Adopción Beta:** Lo revisas, limpias sus tokens y lo añades como 'Experimental/Beta' al sistema. Validas si otros equipos lo necesitan. Fomentas la evolución orgánica del sistema.", score: 5, type: "Lead (Federated Model)", decisionSummary: "Facilitaste la evolución del sistema integrando la contribución de manera controlada." },
      { id: 'C', text: "**Permiso Local:** Le dices que puede usarlo en su archivo, pero no lo metes al sistema. Creas una excepción que fragmenta la experiencia a largo plazo.", score: 3, type: "Silo (Inconsistencia)", decisionSummary: "Permitiste una inconsistencia local ('Snowflake') para evitar el trabajo de gobernanza." }
    ],
    explanation: "Un sistema de diseño vivo debe permitir contribuciones. El modelo **Federado** (aceptar, curar y distribuir innovaciones de los equipos) es superior al modelo Centralizado rígido."
  },
  {
    id: 'thaloz_low_adoption_iteration',
    displayId: 'TLZ-024',
    category: "Data-Driven Iteration",
    icon: <TrendingUp className="w-6 h-6 text-red-600" />,
    scenario: "Lanzaron el nuevo 'Admin Panel' hace un mes. Analytics muestra que solo el 15% de los usuarios lo usa; el resto sigue volviendo a la versión 'Classic' (Legacy). El VP quiere apagar la versión Classic a la fuerza para obligar la migración.",
    question: "¿Qué acción recomiendas?",
    options: [
      { id: 'A', text: "**Forzar Migración:** Apoyas el apagado. La gente odia el cambio y nunca migrará por voluntad propia. Es un dolor necesario para modernizar.", score: 1, type: "Autoritario (Churn Risk)", decisionSummary: "Forzaste el cambio sin entender la causa raíz, arriesgando la productividad del cliente." },
      { id: 'B', text: "**Gap Analysis Survey:** Inyectas una micro-encuesta al momento que el usuario hace click en 'Volver a Classic': '¿Qué no pudiste hacer en la nueva versión?'. Descubres el 'Feature Gap' crítico antes de apagar nada.", score: 5, type: "Lead (Root Cause)", decisionSummary: "Investigaste la causa del rechazo (Missing Features) antes de tomar medidas drásticas." },
      { id: 'C', text: "**Marketing Push:** Crees que es un problema de comunicación. Lanzas tooltips y tours guiados explicando las bondades del nuevo panel.", score: 3, type: "Superficial", decisionSummary: "Trataste un problema de utilidad como si fuera un problema de comunicación." }
    ],
    explanation: "Si los usuarios vuelven al Legacy, suele ser porque falta una funcionalidad crítica (**Feature Gap**), no por capricho. Apagar el Legacy sin entender esto detiene la operación del cliente."
  },
  {
    id: 'thaloz_critique_defense',
    displayId: 'TLZ-025',
    category: "Design Critique",
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
    scenario: "En un Design Critique, un desarrollador Senior dice frente a todos: 'Este diseño es ineficiente de programar y el usuario no va a entender nada'. El ambiente se pone tenso y tu diseñador junior se queda callado.",
    question: "¿Cómo moderas la sesión?",
    options: [
      { id: 'A', text: "**Defensa de Autoridad:** Interrumpes: 'Nosotros somos los expertos en UX, tú enfócate en el código'. Proteges al junior pero creas un muro entre diseño e ingeniería.", score: 1, type: "Tribal (Daña cultura)", decisionSummary: "Defendiste el territorio con autoridad, dañando la relación con ingeniería." },
      { id: 'B', text: "**Facilitación Socrática:** Dices: 'Punto válido sobre la complejidad técnica. ¿Por qué crees que el usuario no entenderá?'. Separas la opinión subjetiva del hecho técnico y re-enfocas la discusión en el problema.", score: 5, type: "Lead (Facilitador)", decisionSummary: "Desarmaste el conflicto validando el punto técnico y pidiendo evidencia sobre el UX." },
      { id: 'C', text: "**Parking Lot:** Dices: 'Lo hablamos offline'. Cortas la discusión para evitar el conflicto público, pero pierdes la oportunidad de educar al equipo sobre cómo dar/recibir feedback.", score: 3, type: "Evasivo", decisionSummary: "Evitaste el conflicto público, perdiendo una oportunidad de alineación de equipo." }
    ],
    explanation: "El rol del Lead en un critique es **elevar el nivel de la discusión**. Convertir un ataque ('no van a entender') en una hipótesis a validar ('¿por qué?') transforma el conflicto en colaboración."
  }
];
