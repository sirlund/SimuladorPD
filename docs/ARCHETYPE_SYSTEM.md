# Product Design Leadership RPG - Archetype System

Este documento define la lógica de diagnóstico para el "Product Lead Sim". El sistema evalúa al usuario no solo por su puntaje, sino por el *patrón* de sus decisiones.

---

## 1. Tabla Maestra de Arquetipos

| Arquetipo | Tipo de Perfil | Condición de Activación (Trigger) | Descripción Corta |
| :--- | :--- | :--- | :--- |
| **📉 The Order Taker** | Fallo / Low Score | Mayoría de errores tipo: `Complaciente`, `Obediente`, `Mercenario`. | Evita conflicto, prioriza paz política sobre salud del producto. Dice "sí" a todo. |
| **📉 The Craft Obsessive** | Fallo / Low Score | Mayoría de errores tipo: `Purista`, `Perfeccionista`, `Idealista`. | Prioriza la calidad visual/técnica sobre el negocio o el tiempo. |
| **📉 The Process Bureaucrat** | Fallo / Low Score | Mayoría de errores tipo: `Dogmático`, `Burocrático`, `Risk Averse`. | Se esconde detrás de reglas, metodologías rígidas o Legal. |
| **📉 The Lone Wolf** | Fallo / Low Score | Mayoría de errores tipo: `Heroico`, `Silo`, `Centralizado`. | Intenta resolverlo solo, no delega, crea cuellos de botella personales. |
| **🏆 The Venture Architect** | Éxito / High Score (>80%) | Aciertos dominantes en: `Strategy`, `Metrics`, `Innovation`. | Piensa como un inversor/CPO. Maximiza valor de negocio. |
| **🏆 The Culture Builder** | Éxito / High Score (>80%) | Aciertos dominantes en: `Culture`, `Hiring`, `Crisis`. | Líder humano excepcional. Construye equipos resilientes y seguros. |
| **🏆 The Force Multiplier** | Éxito / High Score (>80%) | Aciertos dominantes en: `Systems`, `Ops`, `Mobile`. | Maestro de la eficiencia operativa y escalabilidad técnica. |

---

## 2. Templates de Diagnóstico (Nivel Fallo / Mid-Level)

Usa estos templates cuando el score sea **menor al 80%**. El tono debe ser **"Tough Love"**: directo, duro con el problema, orientado a la acción.

### 📉 Arquetipo 1: The Order Taker (El Toma-Pedidos)

**Headline:** Diagnóstico: Estás operando como un "Order Taker"
**Subtítulo:** Tienes el craft, pero te falta la columna vertebral política.

**💸 El Costo de tus Decisiones (Ejemplos Dinámicos):**
* **Deuda Técnica:** Aceptaste features sin research en `STR-05`, desperdiciando $80K en desarrollo de vaporware.
* **Daño Cultural:** Permitiste toxicidad en `CUL-01` por no confrontar al Senior, costando 2 renuncias.
* **Pérdida de Foco:** Dijiste "sí" a todos los stakeholders, diluyendo el roadmap y retrasando el lanzamiento crítico.

**👁️ Tu Punto Ciego: "La Falacia del Buen Soldado"**
Crees que ser un buen líder significa desbloquear el camino y hacer felices a los stakeholders. **Falso.** Un Product Lead es un **Gatekeeper de Valor**. Tu miedo al conflicto está permitiendo que la organización se dañe a sí misma. Estás protegiendo tu comodidad inmediata a costa del producto.

**💊 The Pivot (Plan de Acción):**
1.  **La Regla del "No":** Tu misión para el lunes es rechazar un requerimiento o negociar un plazo. No digas "sí" inmediatamente a nada.
2.  **Recurso Clave:** Lee *The Art of Saying No* de Marty Cagan.
3.  **Mentalidad:** Tu trabajo no es hacer amigos, es hacer que la empresa gane.

---

### 📉 Arquetipo 2: The Craft Obsessive (El Artesano Obsesivo)

**Headline:** Diagnóstico: Estás atrapado siendo "The Craft Obsessive"
**Subtítulo:** Excelente diseñador, pero un cuello de botella para el negocio.

**💸 El Costo de tus Decisiones (Ejemplos Dinámicos):**
* **Oportunidad Perdida:** Bloqueaste el lanzamiento en `MOB-12` por un detalle menor de UI, perdiendo la ventana de la campaña de marketing ($150K).
* **Parálisis:** Rechazaste usar librerías estándar en `INN-06`, condenando al equipo a mantener código propietario inútil ($400K/año).
* **Fricción:** Tu equipo siente que "lo perfecto es enemigo de lo bueno".

**👁️ Tu Punto Ciego: "La Torre de Marfil"**
Mides el éxito por la pureza del sistema, la elegancia del código o la estética visual. El mercado mide el éxito por **resolución de problemas y revenue**. En un rol de liderazgo, la "calidad" incluye la velocidad de entrega y la viabilidad económica.

**💊 The Pivot (Plan de Acción):**
1.  **Adopta el "Good Enough":** Lanza algo que te de vergüenza (versión beta) para aprender rápido.
2.  **Recurso Clave:** Lee sobre *Pareto Principle (80/20)* aplicado a producto.
3.  **Mentalidad:** El diseño que no está en producción tiene valor cero.

---

### 📉 Arquetipo 3: The Process Bureaucrat (El Burócrata)

**Headline:** Diagnóstico: Te escondes como un "Process Bureaucrat"
**Subtítulo:** Usas las reglas como escudo para no tomar decisiones difíciles.

**💸 El Costo de tus Decisiones (Ejemplos Dinámicos):**
* **Lentitud:** Exigiste "investigación completa" en `RES-24` cuando el CEO necesitaba velocidad, volviéndote irrelevante.
* **Rigidez:** Te negaste a adaptar el sprint en `MOB-06`, dañando la relación con Ventas por un tecnicismo de Scrum.
* **Ceguera:** Priorizaste cumplir el proceso sobre salvar al cliente en `MET-13`.

**👁️ Tu Punto Ciego: "Compliance sobre Outcome"**
Crees que si sigues el manual (Scrum, Design Thinking, Legal), no te pueden culpar si algo falla. El liderazgo requiere **navegar la ambigüedad**, no eliminarla con reglas. A veces, romper el proceso es la única forma de salvar el negocio.

**💊 The Pivot (Plan de Acción):**
1.  **Flexibilidad Táctica:** Identifica una regla que esté frenando al equipo y elimínala hoy.
2.  **Recurso Clave:** *Shape Up* (Basecamp) - para desaprender la rigidez de Agile.
3.  **Mentalidad:** Los procesos sirven a las personas, no al revés.

---

### 📉 Arquetipo 4: The Lone Wolf (El Lobo Solitario)

**Headline:** Diagnóstico: Operas como "The Lone Wolf"
**Subtítulo:** Intentas cargar el mundo sobre tus hombros, y eso no escala.

**💸 El Costo de tus Decisiones (Ejemplos Dinámicos):**
* **Bus Factor:** En `RES-09`, decidiste revisar personalmente cada archivo, convirtiéndote en el cuello de botella de Europa.
* **Burnout:** Asumiste la carga técnica en `STR-05` ("Stop the line" mal entendido) en lugar de delegar o negociar.
* **Falta de Crecimiento:** Al no delegar, tus juniors no aprenden y tú te quemas.

**👁️ Tu Punto Ciego: "Si quieres algo bien hecho, hazlo tú"**
Confundes liderazgo con heroísmo. Tu capacidad individual es finita. Tu trabajo como Lead no es ser el mejor diseñador en la sala, es **construir la máquina** que diseña bien sin ti. Eres un Single Point of Failure.

**💊 The Pivot (Plan de Acción):**
1.  **Delegación Radical:** Entrega tu tarea más importante de la semana a un Senior y dale solo feedback, no ejecución.
2.  **Recurso Clave:** *Multipliers* de Liz Wiseman.
3.  **Mentalidad:** Tu output es el output de tu equipo.

---

## 3. Templates de Diagnóstico (Nivel Éxito / High Score)

Usa estos templates cuando el score sea **mayor al 80%**. El tono debe ser **"Peer-to-Peer"**: validación ejecutiva, visión de futuro, preparación para C-Level.

### 🏆 Arquetipo 5: The Venture Architect (Perfil CPO)

**Headline:** 🚀 Diagnóstico: Eres un "Venture Architect"
**Subtítulo:** Visión de negocio impecable. Listo para fundar o ser CPO.

**💰 Valor Generado (Wins):**
* **Capital Efficiency:** Priorizaste la rentabilidad sobre la vanidad en `MET-06` y `STR-11`.
* **Strategic Defense:** Protegiste el mercado contra el competidor en `STR-42` usando *Loss Leaders*.
* **M&A Mastery:** Gestionaste la fusión de sistemas en `STR-40` minimizando deuda técnica y política.

**🏔️ The Next Ceiling (Tu próximo desafío):**
Tu instinto financiero y estratégico es afilado. Tu riesgo ahora es perder el "alma" del producto. No te conviertas en un financiero puro que olvida por qué los usuarios aman el producto.
* **Reto:** ¿Puedes mantener esta frialdad estratégica sin alienar a los equipos creativos que se mueven por pasión?

**📚 Executive Reading:** *7 Powers* (Hamilton Helmer).

---

### 🏆 Arquetipo 6: The Culture Builder (Perfil VP Design)

**Headline:** ❤️ Diagnóstico: Eres un "Culture Builder"
**Subtítulo:** Liderazgo humano de clase mundial. Tus equipos te seguirían al infierno.

**💰 Valor Generado (Wins):**
* **Retention:** Salvaste talento clave en `CUL-04` y `CUL-28` navegando políticas difíciles.
* **Resilience:** Gestionaste el trauma de los layoffs en `CUL-17` con empatía y realismo.
* **Ethics:** Protegiste la marca de riesgos legales y éticos en `INN-27` (AI Act) y `RES-22`.

**🏔️ The Next Ceiling (Tu próximo desafío):**
Eres el líder que todos quieren tener. Tu riesgo es volverte demasiado protector ("Mamá Gallina") y lento ante cambios agresivos del mercado.
* **Reto:** A veces hay que sacrificar la armonía cultural para sobrevivir a un competidor agresivo. ¿Podrás tomar la decisión impopular cuando sea necesaria?

**📚 Executive Reading:** *The Hard Thing About Hard Things* (Ben Horowitz).

---

### 🏆 Arquetipo 7: The Force Multiplier (Perfil Staff/Principal)

**Headline:** ⚡ Diagnóstico: Eres un "Force Multiplier"
**Subtítulo:** Maestro de sistemas y escala. Haces que 10 personas rindan como 100.

**💰 Valor Generado (Wins):**
* **Operational Scale:** Resolviste el caos de archivos en `STR-29` con sistemas, no con horas hombre.
* **Technical Leverage:** Elegiste la arquitectura correcta en `INN-24` y `MOB-01`, evitando deuda masiva.
* **Global Efficiency:** Habilitaste el trabajo asíncrono real en `CUL-06`.

**🏔️ The Next Ceiling (Tu próximo desafío):**
Optimizas la máquina a la perfección. Tu reto ahora es salir de la operación y aprender a manejar la **política de Boardroom**.
* **Reto:** Tus soluciones son lógicamente perfectas, pero a veces la política corporativa no es lógica. Necesitas aprender a vender tus sistemas a personas que no entienden cómo funcionan.

**📚 Executive Reading:** *High Output Management* (Andrew Grove).

---

## 4. Implementación Técnica

### 4.1 Mapeo de Tipos de Opción → Arquetipos de Fallo

```javascript
const failureArchetypeMap = {
  // The Order Taker
  'Complaciente': 'order-taker',
  'Obediente': 'order-taker',
  'Mercenario': 'order-taker',
  'Sándwich': 'order-taker',
  'Compliance': 'order-taker',

  // The Craft Obsessive
  'Purista': 'craft-obsessive',
  'Perfeccionista': 'craft-obsessive',
  'Idealista': 'craft-obsessive',
  'Over-engineer': 'craft-obsessive',
  'Quality-first': 'craft-obsessive',

  // The Process Bureaucrat
  'Dogmático': 'process-bureaucrat',
  'Burocrático': 'process-bureaucrat',
  'Risk Averse': 'process-bureaucrat',
  'Escalación': 'process-bureaucrat',

  // The Lone Wolf
  'Heroico': 'lone-wolf',
  'Silo': 'lone-wolf',
  'Centralizado': 'lone-wolf',
  'Micromanager': 'lone-wolf'
};
```

### 4.2 Mapeo de Categorías → Arquetipos de Éxito

```javascript
const successArchetypeMap = {
  // The Venture Architect
  'Estrategia de Producto': 'venture-architect',
  'Data-Driven Design': 'venture-architect',
  'Gestión de OKRs': 'venture-architect',
  'Producto vs Ventas': 'venture-architect',

  // The Culture Builder
  'Gestión de Crisis & Liderazgo': 'culture-builder',
  'Community Management': 'culture-builder',
  'Contratación Estratégica': 'culture-builder',
  'Crisis Política Organizacional': 'culture-builder',

  // The Force Multiplier
  'Arquitectura de Sistemas': 'force-multiplier',
  'Ingeniería de Diseño': 'force-multiplier',
  'Estrategia de Migración': 'force-multiplier',
  'Deuda Técnica': 'force-multiplier'
};
```

### 4.3 Lógica de Selección de Arquetipo

```javascript
function selectArchetype(accuracy, failedQuestions, succeededQuestions, answers) {
  // Si score >= 80%, buscar arquetipo de ÉXITO basado en categorías dominantes
  if (accuracy >= 80) {
    const categoryWins = countCategoryWins(succeededQuestions);
    return selectSuccessArchetype(categoryWins);
  }

  // Si score < 80%, buscar arquetipo de FALLO basado en tipos de error
  const errorTypes = failedQuestions.map(q => answers[q.id].selectedType);
  return selectFailureArchetype(errorTypes);
}
```

---

## 5. Diferencias entre Templates A y B

| Aspecto | Template A | Template B |
|---------|------------|------------|
| **Costos** | Categoría + ID pregunta | **Monto en $$$** específico |
| **Punto Ciego** | Concepto vs Concepto | **Narrativa psicológica** |
| **Acciones** | 1 misión con script | **3 acciones numeradas** |
| **Recursos** | 3 links externos | Inline en el texto |
| **Tono** | Estructurado, tablas | **Coach directo** |

---

## 6. Notas de Copywriting

- **Tono Fallo (<80%):** "Tough Love" - Directo, duro, sin eufemismos. El usuario debe sentir el peso de sus decisiones.
- **Tono Éxito (>80%):** "Peer-to-Peer" - Validación ejecutiva, visión de futuro, preparación para el siguiente nivel.
- **Siempre incluir:** ID de pregunta específica para credibilidad.
- **Evitar:** Feedback genérico que aplique a cualquiera.
