# Audit V4 - Progreso de Mejoras pd-expert

**Fecha:** 2025-12-02
**Versión:** V4
**Estado:** En progreso

---

## ✅ Completado

### 1. Actualización de pd-expert.md (100%)

**Archivo:** `.claude/commands/pd-expert.md`

**Cambios aplicados:**

#### Sistema de Scoring Simplificado (Líneas 62-91)
- ✅ Sistema reducido de 6 niveles (0-5) a 4 niveles (5, 3, 1, -1)
- ✅ Score -1 introducido para "institucionalización de toxicidad"
- ✅ Tabla de criterios clara por nivel
- ✅ Distribución objetivo por pregunta documentada

#### Nueva Sección: Reglas de Formato V4 (Líneas 233-361)
- ✅ Regla 1: Negrita en nombres de estrategias (`**Nombre:**`)
- ✅ Regla 2: Type field descriptivo con anti-patrones
- ✅ Regla 3: Escenarios con formato de crisis (timestamp + quotes + métricas)
- ✅ Regla 4: Trade-offs con consecuencia en cadena (3 niveles)
- ✅ Regla 5: Explanations con 3 capas + metáforas
- ✅ Regla 6: Anti-Spoiler V2+ con test de calidad

#### Checklist Actualizado (Líneas 396-434)
- ✅ Expandido de 5 a 7 checks obligatorios
- ✅ Cada check incluye criterios específicos V4

#### Estructura de Pregunta (Líneas 451-496)
- ✅ Template actualizado con comentarios inline
- ✅ Ejemplo de score -1 incluido
- ✅ Formato de explanation con 3 capas documentado

#### Instrucciones Finales V4 (Líneas 506-525)
- ✅ Nueva filosofía: "opciones seductoras, no caricaturas"
- ✅ Nota sobre scoring simplificado

---

### 2. Mejoras Aplicadas a 01-strategy.jsx (100%)

**Archivo:** `src/data/questions/blocks/01-strategy.jsx`

**35 preguntas mejoradas** con todos los hallazgos V4:

#### Formato
- ✅ Todas las opciones usan **negrita** en nombres de estrategia
- ✅ Type field actualizado con anti-patrones específicos
  - Ejemplos: `"Lead (Optimización sistémica)"`, `"Mercenario / Incorrect"`, `"Niñera / Incorrect"`

#### Escenarios
- ✅ Todos incluyen timestamp ("viernes 4 PM", "jueves 3 PM")
- ✅ Quotes literales de stakeholders ('Si no firman, no cierro')
- ✅ Métricas cuantificables (runway, NPS, %, deadline)
- ✅ Emociones visibles ("visiblemente furioso", "presiona")

#### Opciones
- ✅ Trade-offs con consecuencia en cadena implementados
- ✅ Opciones incorrectas suenan profesionales y tentadoras
- ✅ Score -1 introducido en pregunta `burnout_detection_action`

#### Explanations
- ✅ Estructura de 3 capas implementada
- ✅ Metáforas memorables agregadas ("impuesto vs multa", "deuda = interés compuesto")
- ✅ Terminología Staff-level usada sin explicación
- ✅ Agnosticismo (no menciona "Opción A/B/C")

---

## 🔄 Pendiente

### Bloques a Actualizar (0%)

**Archivos pendientes:**
1. `src/data/questions/blocks/02-research.jsx` (~25 preguntas)
2. `src/data/questions/blocks/03-metrics.jsx` (~15 preguntas)
3. `src/data/questions/blocks/04-mobile.jsx` (~10 preguntas)
4. `src/data/questions/blocks/05-culture.jsx` (~15 preguntas)
5. `src/data/questions/blocks/06-innovation.jsx` (~6 preguntas)

**Total pendiente:** ~71 preguntas

---

## 📊 Hallazgos Clave de Strategy.jsx

### Patrones Identificados

#### 1. Score -1 (Nuevo)
**Uso:** Institucionalización de anti-patrones tóxicos

**Ejemplo encontrado:**
```javascript
{
  id: 'A',
  text: "**Bonus Heroico:** Ofreces dinero y reconocimiento...",
  score: -1,
  type: "Incentivo / Incorrect"
}
```

**Criterio:** Solo usar cuando la decisión **valida** o **incentiva** comportamiento destructivo como cultura.

---

#### 2. Estructura de Type Field

**Opciones correctas (score 5):**
- `"Lead (Optimización sistémica)"`
- `"Lead (Incremental De-Risking)"`
- `"Lead (Behavioral design del sistema)"`
- `"Lead (Team building estratégico)"`
- `"Lead (Maestro)"` (para mentoría)

**Opciones intermedias (score 3):**
- `"Pragmático (Descripción específica)"`
- `"Protector / Incorrect"`
- `"Coach Pasivo"`
- `"Fragmentación controlada"`
- `"Bold con riesgo político (Promesa difícil de cumplir)"`

**Opciones incorrectas (score 1):**
- `"Niñera / Incorrect"` (mediación constante)
- `"Mercenario / Incorrect"` (obediencia sin criterio)
- `"Utilitario / Incorrect"` (aislar problemas)
- `"Bloqueador / Incorrect"` (purismo técnico)
- `"Indeciso (No resuelve gap estructural)"`
- `"Micro-manager (Crea dependencia)"`

**Opciones tóxicas (score -1):**
- `"Incentivo / Incorrect"` (institucionaliza toxicidad)

---

#### 3. Consecuencia en Cadena (3 Niveles)

**Fórmula:**
```
[Beneficio táctico] → [Costo operativo] → [Consecuencia estratégica]
```

**Ejemplo real:**
> "Proteges tu relación con ellos hoy, pero permites que la empresa siga quemando caja en canales ineficientes, lo que eventualmente afectará tu runway."

1. Beneficio: "Proteges relación"
2. Costo: "empresa quema caja"
3. Consecuencia: "afecta runway"

---

#### 4. Metáforas en Explanations

**Metáforas financieras:**
- Deuda técnica = Interés compuesto
- Impuesto vs Multa
- Costo de oportunidad
- Capital político como moneda
- Runway como recurso escaso

**Metáforas técnicas:**
- Boy Scout Rule
- Strangler Fig Pattern
- Ley de Brooks
- Technical Hygiene
- Behavioral Design

**Patrón de uso:**
> "Es pagar el **impuesto** ahora para evitar la **multa** después."

---

#### 5. Escenarios con Formato de Crisis

**Elementos críticos:**
1. **Timestamp:** "viernes 4 PM", "jueves 3 PM", "11 AM All-Hands"
2. **Quote literal:** 'Si no ven su logo, no firman', 'Esto apesta'
3. **Métrica urgencia:** runway 4 meses, NPS cayó 6 puntos, 72% del tráfico
4. **Emoción visible:** "visiblemente furioso", "presiona para que no arruines la fiesta"

**Ejemplo completo:**
> "Es viernes a las 4 PM. Tras 3 semanas de trabajo intenso en 'Cobranza Automática', el CEO anuncia un pivote estratégico urgente: el feature se cancela inmediatamente para priorizar 'Pagos Manuales'. El equipo está visiblemente furioso. Tu runway es de solo 4 meses."

---

#### 6. Estructura de Explanation (3 Capas)

**Fórmula:**
```
[Verdad universal] + [Validación patrón común] + [Metáfora memorable]
```

**Ejemplo real:**
> "La deuda de diseño tiene interés compuesto agresivo. Un ticket de 'Refactor para después' es casi siempre una mentira piadosa en startups. **Negarse y Colaborar** (invertir horas extra hoy) es doloroso, pero evita semanas de refactorización cuando llegue el Dark Mode. Es pagar el impuesto ahora para evitar la multa después."

**Capas:**
1. **Universal:** "deuda = interés compuesto"
2. **Validación:** "ticket = mentira piadosa"
3. **Metáfora:** "impuesto vs multa"

---

## 🎯 Checklist de Aplicación V4

Para cada pregunta en bloques 02-06, verificar:

### 1. ✅ Formato de Opciones
- [ ] Cada opción usa `**Nombre Estrategia:** [resto]`
- [ ] Field `type` incluye anti-patrón o patrón específico
- [ ] Opciones tienen longitud visual similar (±20%)

### 2. ✅ Trade-off con Consecuencia en Cadena
- [ ] Formato: `[Acción] [Beneficio], pero [Costo], lo que [Consecuencia]`
- [ ] Trade-offs son relativos, no catastróficos
- [ ] Opciones incorrectas tienen beneficios tentadores

### 3. ✅ Escenario con Formato de Crisis
- [ ] Timestamp específico ("viernes 4 PM")
- [ ] Quote literal de stakeholder
- [ ] Métrica cuantificable (runway, %, NPS)
- [ ] Emoción/urgencia visible

### 4. ✅ Anti-Spoiler V2+
- [ ] Opciones incorrectas usan verbos neutrales/positivos
- [ ] No hay juicios de valor en el texto
- [ ] No hay consecuencias auto-delatoras
- [ ] Test: ¿VP novato dudaría 3-5 segundos?

### 5. ✅ Explanation con 3 Capas + Metáforas
- [ ] No menciona "Opción A/B/C"
- [ ] Usa nombres de estrategias
- [ ] Incluye: Verdad universal + Validación + Metáfora
- [ ] Usa terminología Staff-level

### 6. ✅ Scoring Correcto
- [ ] Exactamente 1 opción con score 5
- [ ] Score -1 solo para institucionalizar toxicidad
- [ ] Distribución: un 5, uno-dos 3, uno-dos 1, máximo un -1

### 7. ✅ Grounding (Nivel Lead)
- [ ] Stakeholders: VP/PM/Head/CTO (CEO solo en crisis)
- [ ] Lead tiene influencia, no autoridad absoluta
- [ ] Consecuencias a nivel proyecto/equipo

---

## 🛠️ Próximos Pasos

### Orden de ejecución recomendado:

1. **02-research.jsx** (~25 preguntas)
   - Aplicar checklist V4 completo
   - Validar con `npm run dev`

2. **03-metrics.jsx** (~15 preguntas)
   - Aplicar checklist V4 completo
   - Validar con `npm run dev`

3. **04-mobile.jsx** (~10 preguntas)
   - Aplicar checklist V4 completo
   - Validar con `npm run dev`

4. **05-culture.jsx** (~15 preguntas)
   - Aplicar checklist V4 completo
   - Validar con `npm run dev`

5. **06-innovation.jsx** (~6 preguntas)
   - Aplicar checklist V4 completo
   - Validar con `npm run dev`

6. **Commit final**
   - Mensaje: "feat: Apply pd-expert V4 to all question blocks"
   - Body: Detallar mejoras (scoring, formato, trade-offs, etc.)

---

## 📝 Notas Técnicas

### Archivos modificados hasta ahora:
- ✅ `.claude/commands/pd-expert.md` (actualizado V4)
- ✅ `src/data/questions/blocks/01-strategy.jsx` (35 preguntas mejoradas)

### Archivos sin modificar:
- ⏳ `src/data/questions/blocks/02-research.jsx`
- ⏳ `src/data/questions/blocks/03-metrics.jsx`
- ⏳ `src/data/questions/blocks/04-mobile.jsx`
- ⏳ `src/data/questions/blocks/05-culture.jsx`
- ⏳ `src/data/questions/blocks/06-innovation.jsx`
- ⏳ `src/data/questions/index.js` (sin cambios necesarios)

### Dev servers corriendo:
- Background Bash 550419 (npm run dev)
- Background Bash 588c51 (npm run dev)
- Background Bash c2bc7c (npm run dev)

**Nota:** Validar que solo uno esté activo antes de continuar.

---

## 🔑 Comandos Útiles

```bash
# Validar sintaxis
npm run dev

# Analizar distribución de scores (legacy, usar con precaución)
node scripts/analyzeScoring.cjs

# Buscar duplicados
node scripts/audit-duplicates.js

# Buscar preguntas sin formato V4
grep -r "text: \"[^*]" src/data/questions/blocks/

# Buscar preguntas sin quotes en escenarios
grep -r "scenario:" src/data/questions/blocks/ | grep -v "'"
```

---

## 📌 Recordatorios Importantes

1. **No usar SCORING_GUIDELINES.md** (es legacy, sistema de 6 niveles)
2. **Scoring actual:** Solo 5, 3, 1, -1
3. **Score -1:** Muy restrictivo, solo toxicidad institucionalizada
4. **Todas las opciones** deben tener **negritas** en nombres
5. **Todas las explanations** deben evitar "Opción A/B/C"
6. **Todos los escenarios** deben tener timestamp + quote + métrica

---

**Estado de todo list actual:**
1. [✅] Aplicar pd-expert V3 a 01-strategy.jsx
2. [✅] Analizar hallazgos de strategy.jsx
3. [✅] Actualizar pd-expert.md con scoring correcto y hallazgos
4. [⏳] Aplicar pd-expert V4 a bloques restantes (02-06)
5. [⏳] Commit mejoras pd-expert V4 completas

**Próxima acción:** Comenzar con 02-research.jsx aplicando checklist V4.
