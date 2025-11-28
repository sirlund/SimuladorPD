/**
 * Script para analizar la distribución actual de scores en questionPool
 * TIER 1.2: Preparación para expansión a 6 niveles
 */

const fs = require('fs');
const path = require('path');

// Leer el archivo directamente
const filePath = path.join(__dirname, '../src/data/questionPool.jsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Extraer scores usando regex
const scoreMatches = content.matchAll(/score:\s*(\d+)/g);
const scores = Array.from(scoreMatches).map(m => parseInt(m[1]));

// Calcular distribución
const distribution = {};
scores.forEach(score => {
    distribution[score] = (distribution[score] || 0) + 1;
});

// Extraer número de preguntas
const questionMatches = content.match(/\{\s*id:/g);
const totalQuestions = questionMatches ? questionMatches.length : 0;

console.log('📊 ANÁLISIS DE SCORING ACTUAL\n');
console.log('════════════════════════════════════════\n');
console.log(`Total de preguntas: ${totalQuestions}`);
console.log(`Total de opciones: ${scores.length} (${totalQuestions} * 3 opciones)\n`);

console.log('📈 Distribución de scores:\n');
Object.keys(distribution).sort().forEach(score => {
    const count = distribution[score];
    const percentage = ((count / scores.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(percentage / 2));
    console.log(`  Score ${score}: ${count.toString().padStart(3)} (${percentage}%) ${bar}`);
});

console.log('\n🎯 Análisis por nivel:\n');

// Analizar opciones con score 2 (candidatas a dividirse en 2,3,4)
const typeMatches = content.matchAll(/score:\s*2,\s*type:\s*"([^"]+)"/g);
const type2s = Array.from(typeMatches).map(m => m[1]);
console.log(`Opciones con score 2: ${distribution[2] || 0}`);
console.log(`  → Estas se dividirán en niveles 2, 3 y 4\n`);

// Analizar opciones con score 0 (candidatas a dividirse en 0,1)
const type0Matches = content.matchAll(/score:\s*0,\s*type:\s*"([^"]+)"/g);
const type0s = Array.from(type0Matches).map(m => m[1]);
console.log(`Opciones con score 0: ${distribution[0] || 0}`);
console.log(`  → Algunas podrían ser score 1 (malas pero no catastróficas)\n`);

console.log(`Opciones con score 5: ${distribution[5] || 0}`);
console.log(`  → Estas se mantienen como respuesta óptima\n`);

console.log('════════════════════════════════════════\n');
console.log('💡 RECOMENDACIONES:\n');
console.log('1. Revisar ~' + (distribution[2] || 0) + ' opciones con score 2');
console.log('2. Clasificarlas en:');
console.log('   - Score 4: Muy buenas, cerca de óptimo');
console.log('   - Score 3: Competentes, trade-offs aceptables');
console.log('   - Score 2: Funcionales pero con costos');
console.log('\n3. Revisar ~' + (distribution[0] || 0) + ' opciones con score 0');
console.log('4. Algunas podrían ser score 1 (malas pero no desastrosas)\n');
