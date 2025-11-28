/**
 * Script de análisis del Question Pool
 * Genera estadísticas y detecta patrones en las preguntas
 */

import { getQuestionPool } from '../src/data/questionPool.jsx';

const analyzeQuestionPool = () => {
  const questions = getQuestionPool();
  
  console.log('📊 ANÁLISIS DEL QUESTION POOL\n');
  console.log('='.repeat(60));
  
  // Estadísticas básicas
  console.log('\n📈 ESTADÍSTICAS BÁSICAS');
  console.log('-'.repeat(60));
  console.log(`Total de preguntas: ${questions.length}`);
  
  // Análisis de scores
  const scoreDistribution = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  
  const scorePatterns = {
    '0-2-5': 0,
    '2-2-5': 0,
    '0-2-2': 0,
    'otro': 0
  };
  
  questions.forEach(q => {
    const scores = q.options.map(o => o.score).sort((a, b) => a - b);
    scores.forEach(s => scoreDistribution[s] = (scoreDistribution[s] || 0) + 1);
    
    // Detectar patrón
    const pattern = scores.join('-');
    if (pattern === '0-2-5') scorePatterns['0-2-5']++;
    else if (pattern === '2-2-5') scorePatterns['2-2-5']++;
    else if (pattern === '0-2-2') scorePatterns['0-2-2']++;
    else scorePatterns['otro']++;
  });
  
  console.log('\n📊 DISTRIBUCIÓN DE SCORES');
  console.log('-'.repeat(60));
  Object.entries(scoreDistribution).forEach(([score, count]) => {
    const percentage = ((count / (questions.length * 3)) * 100).toFixed(1);
    console.log(`Score ${score}: ${count} veces (${percentage}%)`);
  });
  
  console.log('\n🔍 PATRONES DE SCORING POR PREGUNTA');
  console.log('-'.repeat(60));
  Object.entries(scorePatterns).forEach(([pattern, count]) => {
    const percentage = ((count / questions.length) * 100).toFixed(1);
    console.log(`${pattern}: ${count} preguntas (${percentage}%)`);
  });
  
  // Análisis de categorías
  const categories = {};
  questions.forEach(q => {
    categories[q.category] = (categories[q.category] || 0) + 1;
  });
  
  console.log('\n📚 DISTRIBUCIÓN POR CATEGORÍAS');
  console.log('-'.repeat(60));
  const sortedCategories = Object.entries(categories)
    .sort((a, b) => b[1] - a[1]);
  
  sortedCategories.forEach(([category, count]) => {
    const percentage = ((count / questions.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.round(count / 2));
    console.log(`${category.padEnd(40)} ${count.toString().padStart(3)} (${percentage}%) ${bar}`);
  });
  
  // Análisis de tipos de respuesta
  const types = {};
  questions.forEach(q => {
    q.options.forEach(opt => {
      const type = opt.type || 'Sin tipo';
      types[type] = (types[type] || 0) + 1;
    });
  });
  
  console.log('\n🏷️  TIPOS DE RESPUESTA MÁS COMUNES');
  console.log('-'.repeat(60));
  const sortedTypes = Object.entries(types)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  sortedTypes.forEach(([type, count]) => {
    console.log(`${type.padEnd(50)} ${count}`);
  });
  
  // Detectar lenguaje peyorativo
  const pejorativeTerms = [
    'Culpa', 'Bloquea', 'Mata', 'Suicida', 'Iluso', 
    'Fomenta', 'Parche', 'Evasivo', 'Arrogante', 'Cómplice'
  ];
  
  const pejorativeQuestions = [];
  questions.forEach(q => {
    q.options.forEach(opt => {
      if (pejorativeTerms.some(term => opt.type?.includes(term))) {
        pejorativeQuestions.push({
          questionId: q.id,
          option: opt.id,
          type: opt.type
        });
      }
    });
  });
  
  console.log('\n⚠️  LENGUAJE POTENCIALMENTE PEYORATIVO');
  console.log('-'.repeat(60));
  if (pejorativeQuestions.length === 0) {
    console.log('✅ No se detectaron términos peyorativos');
  } else {
    console.log(`Se encontraron ${pejorativeQuestions.length} opciones con lenguaje potencialmente peyorativo:`);
    pejorativeQuestions.slice(0, 10).forEach(item => {
      console.log(`  - ${item.questionId} [${item.option}]: "${item.type}"`);
    });
  }
  
  // Preguntas con solo una opción de score 5
  const singleBestAnswer = questions.filter(q => {
    const scores5 = q.options.filter(o => o.score === 5).length;
    return scores5 === 1;
  });
  
  console.log('\n🎯 BALANCE DE RESPUESTAS');
  console.log('-'.repeat(60));
  const multipleBestAnswers = questions.length - singleBestAnswer.length;
  console.log(`Preguntas con 1 respuesta "perfecta" (score 5): ${singleBestAnswer.length} (${((singleBestAnswer.length / questions.length) * 100).toFixed(1)}%)`);
  console.log(`Preguntas con múltiples respuestas válidas: ${multipleBestAnswers} (${((multipleBestAnswers / questions.length) * 100).toFixed(1)}%)`);
  
  // Longitud de escenarios
  const scenarioLengths = questions.map(q => q.scenario?.length || 0);
  const avgScenarioLength = scenarioLengths.reduce((a, b) => a + b, 0) / scenarioLengths.length;
  const maxScenarioLength = Math.max(...scenarioLengths);
  const minScenarioLength = Math.min(...scenarioLengths);
  
  console.log('\n📝 LONGITUD DE ESCENARIOS');
  console.log('-'.repeat(60));
  console.log(`Promedio: ${avgScenarioLength.toFixed(0)} caracteres`);
  console.log(`Mínimo: ${minScenarioLength} caracteres`);
  console.log(`Máximo: ${maxScenarioLength} caracteres`);
  
  // Preguntas problemáticas (muy largas, muy cortas, sin balance)
  console.log('\n🔴 PREGUNTAS A REVISAR');
  console.log('-'.repeat(60));
  
  // Escenarios muy largos (>500 chars)
  const longScenarios = questions.filter(q => (q.scenario?.length || 0) > 500);
  if (longScenarios.length > 0) {
    console.log(`\nEscenarios muy largos (>500 chars): ${longScenarios.length}`);
    longScenarios.slice(0, 5).forEach(q => {
      console.log(`  - ${q.id}: ${q.scenario.length} caracteres`);
    });
  }
  
  // Escenarios muy cortos (<100 chars)
  const shortScenarios = questions.filter(q => (q.scenario?.length || 0) < 100);
  if (shortScenarios.length > 0) {
    console.log(`\nEscenarios muy cortos (<100 chars): ${shortScenarios.length}`);
    shortScenarios.slice(0, 5).forEach(q => {
      console.log(`  - ${q.id}: ${q.scenario.length} caracteres`);
    });
  }
  
  // Preguntas con patrón 0-2-5 (más predecibles)
  const predictableQuestions = questions.filter(q => {
    const scores = q.options.map(o => o.score).sort((a, b) => a - b);
    return scores.join('-') === '0-2-5';
  });
  
  console.log(`\nPreguntas con patrón predecible (0-2-5): ${predictableQuestions.length} (${((predictableQuestions.length / questions.length) * 100).toFixed(1)}%)`);
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ Análisis completado\n');
  
  return {
    totalQuestions: questions.length,
    scoreDistribution,
    scorePatterns,
    categories,
    pejorativeCount: pejorativeQuestions.length,
    singleBestAnswerCount: singleBestAnswer.length,
    predictableCount: predictableQuestions.length
  };
};

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeQuestionPool();
}

export default analyzeQuestionPool;

