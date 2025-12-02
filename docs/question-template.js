// ========================================
// TEMPLATE DE PREGUNTA - SIMULADOR PD
// ========================================
// Copia este template y rellena cada sección
// IMPORTANTE: Usa comillas simples (') para cualquier texto citado en la explanation

{
    // ID único descriptivo (usa snake_case y prefijo del bloque temático)
    id: 'strategy_example_question',

        // Categoría que agrupa la pregunta temáticamente
        category: "Leadership & Strategy",

            // Icon debe venir de lucide-react, elige el más relevante
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,

                // Escenario: 2-4 oraciones que establecen contexto concreto
                // Incluye: situación, stakeholders, datos específicos (runway, ARR%, timelines)
                scenario: "Es lunes 9 AM. El Head of Sales te informa que un cliente Enterprise key (15% ARR) amenaza con cancelar si no implementan su feature custom en 2 semanas. El equipo de Ingeniería dice que necesitan mínimo 6 semanas. El CEO pregunta 'cómo lo resolvemos'.",

                    // Pregunta específica y directa
                    question: "¿Cuál es tu estrategia como Lead para gestionar esta crisis?",

                        // Opciones: 3 opciones balanceadas
                        // Score: 5 (Lead/Correcto), 3 (Parcial/Trade-off), 1 (Problemático), -1 (Tóxico)
                        options: [
                            {
                                id: 'A',
                                text: "Nombre del Enfoque Lead: Describe la acción concreta sin revelar consecuencias. Debe sonar defendible y profesional, no obviamente mala. Incluye el 'qué' harías específicamente.",
                                score: 5,
                                type: "Lead (Strategic)"
                            },
                            {
                                id: 'B',
                                text: "Enfoque Alternativo: Otra acción razonable con trade-offs. Puede ser correcta en otros contextos pero subóptima aquí. No uses lenguaje negativo.",
                                score: 3,
                                type: "Partial (Context-dependent)"
                            },
                            {
                                id: 'C',
                                text: "Enfoque Problemático: Describe la acción (no las consecuencias). Suena como algo que un manager estresado podría hacer. Evita auto-spoilers tipo 'pero generará crisis'.",
                                score: 1,
                                type: "Anti-pattern (Reactive)"
                            }
                        ],

                            // Explicación: 3-5 oraciones que educan sobre el trade-off
                            // - Empieza con contexto (por qué importa el problema)
                            // - Explica por qué la opción correcta funciona (nombra frameworks si aplica)
                            // - Explica brevemente por qué cada alternativa falla en ESTE contexto
                            // - Usa vocabulario técnico preciso (CAC, ARR, Technical Debt, etc.)
                            // - USA SOLO COMILLAS SIMPLES (') para citas internas
                            explanation: "Con un cliente que representa 15% ARR, el riesgo de churn es existencial (Unit Economics). La Negociación de Scope (opción correcta) balancea la urgencia comercial con la viabilidad técnica mediante un MVP controlado. Prometer el timeline imposible (Sprint Heroico) genera 'Deuda de Confianza' externa y burnout interno. Rechazar por principio ignora que en B2B Enterprise, la personalización limitada es a veces estratégica (Professional Services model). Un Lead transforma crisis en oportunidad negociada."
},

// ========================================
// CHECKLIST ANTES DE AGREGAR
// ========================================
// [ ] ID es único y descriptivo
// [ ] Scenario tiene datos concretos (números, timelines)
// [ ] Opciones NO revelan la respuesta (anti-telegraph rule)
// [ ] Explanation usa comillas simples (') para citas internas
// [ ] Score refleja correctamente: 5=Lead, 3=Parcial, 1=Malo, -1=Tóxico
// [ ] Type es descriptivo del anti-pattern o estrategia
// [ ] Ejecuté: python3 scripts/validate-explanations.py ARCHIVO.jsx
// [ ] Verifiqué en /debug que se renderiza correctamente
