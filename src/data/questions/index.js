/**
 * Index de todas las preguntas del simulador
 * Importa y combina todos los bloques temáticos
 */

import { block_01_strategy_systems_leadership_questions } from './blocks/block-01-strategy-systems-leadership.jsx';
import { block_02_research_ethics_collaboration_questions } from './blocks/block-02-research-ethics-collaboration.jsx';
import { block_03_crisis_data_experimentation_questions } from './blocks/block-03-crisis-data-experimentation.jsx';
import { block_04_mobile_platforms_handoff_questions } from './blocks/block-04-mobile-platforms-handoff.jsx';
import { block_05_culture_stakeholders_business_questions } from './blocks/block-05-culture-stakeholders-business.jsx';
import { block_06_innovation_ethics_crisis_questions } from './blocks/block-06-innovation-ethics-crisis.jsx';

/**
 * Combina todas las preguntas en un solo array
 */
export const allQuestions = [
    ...block_01_strategy_systems_leadership_questions,
    ...block_02_research_ethics_collaboration_questions,
    ...block_03_crisis_data_experimentation_questions,
    ...block_04_mobile_platforms_handoff_questions,
    ...block_05_culture_stakeholders_business_questions,
    ...block_06_innovation_ethics_crisis_questions
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
