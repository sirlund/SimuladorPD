import { getQuestionPool as getOriginalPool } from './questions/index.js';

/**
 * TIER 1.1 FIX: Shuffle de opciones para romper el "Síndrome de la Opción B"
 * 
 * Función auxiliar para mezclar opciones de una pregunta
 * CRÍTICO: Esto rompe el patrón de "la opción B siempre es correcta"
 */
const shuffleQuestionOptions = (question) => {
    const shuffled = [...question.options].sort(() => Math.random() - 0.5);
    return {
        ...question,
        options: shuffled.map((option, index) => ({
            ...option,
            originalId: option.id, // Guardar ID original para tracking
            id: String.fromCharCode(65 + index) // Asignar nuevo ID visual (A, B, C)
        }))
    };
};

/**
 * Función pública mejorada con opciones de configuración
 * Por defecto mezcla las opciones para romper el patrón detectado
 * 
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.shuffleOptions - Mezclar opciones A/B/C (default: true) 
 * @param {boolean} options.shuffleQuestions - Mezclar orden de preguntas (default: false)
 * @param {string} options.category - Filtrar por categoría
 * @param {number} options.limit - Limitar número de preguntas
 * @returns {Array} Array de preguntas procesadas
 */
export const getQuestions = (options = {}) => {
    const {
        shuffleOptions = true,  // ← Por defecto TRUE para romper patrón
        shuffleQuestions = false,
        category = 'all',
        limit = null
    } = options;

    let pool = getOriginalPool().map((q, index) => ({
        ...q,
        displayId: `${q.category.charAt(0).toUpperCase()}-${index + 1}`
    }));

    // Filtrar por categoría
    if (category !== 'all') {
        pool = pool.filter(q => q.category === category);
    }

    // Shuffle de opciones (CRÍTICO para TIER 1.1)
    if (shuffleOptions) {
        pool = pool.map(shuffleQuestionOptions);
    }

    // Shuffle de preguntas
    if (shuffleQuestions) {
        pool = [...pool].sort(() => Math.random() - 0.5);
    }

    // Limitar
    if (limit) {
        pool = pool.slice(0, limit);
    }

    return pool;
};

// Export por defecto
export default getQuestions;
