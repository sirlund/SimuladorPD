/**
 * Index de todas las preguntas del simulador
 * Importa y combina todos los bloques temáticos
 */

import { strategy_questions } from './blocks/01-strategy.jsx';
import { research_questions } from './blocks/02-research.jsx';
import { metrics_questions } from './blocks/03-metrics.jsx';
import { mobile_questions } from './blocks/04-mobile.jsx';
import { culture_questions } from './blocks/05-culture.jsx';
import { innovation_questions } from './blocks/06-innovation.jsx';

/**
 * Helper para asignar IDs lógicos basados en bloque
 */
const processBlock = (block, prefix) => {
    return block.map((q, index) => ({
        ...q,
        displayId: `${prefix}-${String(index + 1).padStart(2, '0')}`
    }));
};

/**
 * Combina todas las preguntas en un solo array con IDs procesados
 */
export const allQuestions = [
    ...processBlock(strategy_questions, 'STR'),
    ...processBlock(research_questions, 'RES'),
    ...processBlock(metrics_questions, 'MET'),
    ...processBlock(mobile_questions, 'MOB'),
    ...processBlock(culture_questions, 'CUL'),
    ...processBlock(innovation_questions, 'INN')
];

/**
 * Función helper para obtener preguntas con opciones de filtrado
 */
export const getQuestionPool = (options = {}) => {
    const {
        shuffle = false,
        difficulty = 'all',
        category = 'all',
        limit = null,
        excludeIds = []
    } = options;

    let pool = [...allQuestions];

    // Filtrar por categoría
    if (category !== 'all') {
        pool = pool.filter(q => q.category === category);
    }

    // Excluir IDs
    if (excludeIds.length > 0) {
        pool = pool.filter(q => !excludeIds.includes(q.id));
    }

    // Shuffle si se solicita
    if (shuffle) {
        pool = pool.sort(() => Math.random() - 0.5);
    }

    // Limitar cantidad
    if (limit) {
        pool = pool.slice(0, limit);
    }

    return pool;
};
