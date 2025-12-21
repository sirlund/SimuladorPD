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
import { thaloz_expansion_pack } from './blocks/07-thaloz.jsx';

/**
 * Helper para asignar IDs lógicos basados en bloque
 */
const processBlock = (block, prefix, pack = 'base') => {
    return block.map((q, index) => ({
        ...q,
        displayId: q.displayId || `${prefix}-${String(index + 1).padStart(2, '0')}`,
        pack
    }));
};

/**
 * Preguntas base (164 preguntas)
 */
export const baseQuestions = [
    ...processBlock(strategy_questions, 'STR', 'base'),
    ...processBlock(research_questions, 'RES', 'base'),
    ...processBlock(metrics_questions, 'MET', 'base'),
    ...processBlock(mobile_questions, 'MOB', 'base'),
    ...processBlock(culture_questions, 'CUL', 'base'),
    ...processBlock(innovation_questions, 'INN', 'base')
];

/**
 * Preguntas Thaloz Expansion (5 preguntas)
 */
export const thalozQuestions = processBlock(thaloz_expansion_pack, 'TLZ', 'thaloz');

/**
 * Combina todas las preguntas en un solo array con IDs procesados
 */
export const allQuestions = [
    ...baseQuestions,
    ...thalozQuestions
];

/**
 * Función helper para obtener preguntas con opciones de filtrado
 */
export const getQuestionPool = (options = {}) => {
    const {
        shuffle = false,
        difficulty = 'all',
        category = 'all',
        pack = 'base',  // 'base', 'thaloz', or 'all'
        limit = null,
        excludeIds = []
    } = options;

    // Seleccionar pool según pack
    let pool;
    if (pack === 'thaloz') {
        pool = [...thalozQuestions];
    } else if (pack === 'all') {
        pool = [...allQuestions];
    } else {
        pool = [...baseQuestions];
    }

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
