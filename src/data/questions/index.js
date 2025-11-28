/**
 * Index de todas las preguntas del simulador
 * NOTA: Este es un trabajo en progreso. 
 * Actualmente solo block-01 está separado, el resto viene del archivo original.
 */

import { block01Questions } from './blocks/block-01-strategy-systems-leadership';
import { getQuestionPool as getOriginalQuestions } from '../questionPool';

// Por ahora, combina el block-01 separado con el resto del archivo original
const originalQuestions = getOriginalQuestions();

// Filtrar las preguntas que ya están en block-01 para evitar duplicados
const block01Ids = new Set(block01Questions.map(q => q.id));
const remainingQuestions = originalQuestions.filter(q => !block01Ids.has(q.id));

/**
 * Todas las preguntas combinadas
 * TODO: Completar el split de todos los bloques
 */
export const allQuestions = [
    ...block01Questions,      // 12 preguntas ya separadas
    ...remainingQuestions     // ~84 preguntas restantes del archivo original
];

/**
 * Función helper para obtener preguntas con opciones de filtrado
 * @param {Object} options - Opciones de filtrado
 * @param {boolean} options.shuffle - Mezclar preguntas aleatoriamente
 * @param {string} options.difficulty - Filtrar por dificultad (cuando se agregue metadata)
 * @param {string} options.category - Filtrar por categoría
 * @param {number} options.limit - Limitar cantidad de preguntas
 * @param {string[]} options.excludeIds - IDs de preguntas a excluir
 * @returns {Array} Array de preguntas filtradas
 */
export { getQuestionPool } from '../questionPool';

// Re-exportar para compatibilidad
export default allQuestions;
