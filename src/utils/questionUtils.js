/**
 * Utilities para manipulación de preguntas del simulador
 */

/**
 * Mezcla aleatoriamente las opciones de una pregunta
 * Mantiene la integridad de datos pero cambia el orden visual (A, B, C)
 * 
 * @param {Object} question - Pregunta con array de opciones
 * @returns {Object} - Pregunta con opciones mezcladas y IDs visuales actualizados
 */
export const shuffleQuestionOptions = (question) => {
    // Clonar para no mutar el original
    const shuffled = [...question.options].sort(() => Math.random() - 0.5);

    return {
        ...question,
        options: shuffled.map((option, index) => ({
            ...option,
            // Mantener el ID original interno para tracking
            originalId: option.id,
            // Asignar nuevo ID visual (A, B, C)
            id: String.fromCharCode(65 + index) // 65 = 'A'
        }))
    };
};

/**
 * Mezcla un array de preguntas aleatoriamente
 * 
 * @param {Array} questions - Array de preguntas
 * @returns {Array} - Preguntas mezcladas
 */
export const shuffleQuestions = (questions) => {
    return [...questions].sort(() => Math.random() - 0.5);
};

/**
 * Aplica shuffle a las opciones de todas las preguntas
 * CRÍTICO: Esto rompe el patrón de "la opción B siempre es correcta"
 * 
 * @param {Array} questions - Array de preguntas
 * @returns {Array} - Preguntas con opciones mezcladas
 */
export const shuffleAllOptions = (questions) => {
    return questions.map(shuffleQuestionOptions);
};
