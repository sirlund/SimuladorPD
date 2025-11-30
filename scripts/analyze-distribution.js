#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const blocksDir = path.join(__dirname, '../src/data/questions/blocks');
const files = fs.readdirSync(blocksDir).filter(f => f.endsWith('.jsx')).sort();

console.log('\n📊 DISTRIBUCIÓN DE PREGUNTAS POR CATEGORÍA\n');
console.log('='.repeat(80));

let totalQuestions = 0;
const allCategories = {};

files.forEach(file => {
    const filePath = path.join(blocksDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Extraer nombre del bloque
    const blockName = file.replace('.jsx', '').toUpperCase();

    // Contar preguntas (buscar { id: pattern)
    const questionMatches = content.match(/{\s*id:\s*['"`]/g) || [];
    const questionCount = questionMatches.length;

    // Extraer categorías
    const categoryMatches = content.matchAll(/category:\s*["']([^"']+)["']/g);
    const categories = {};

    for (const match of categoryMatches) {
        const cat = match[1];
        categories[cat] = (categories[cat] || 0) + 1;
        allCategories[cat] = (allCategories[cat] || 0) + 1;
    }

    console.log(`\n${blockName} (${questionCount} preguntas):`);
    console.log('-'.repeat(80));

    // Ordenar categorías por cantidad
    const sortedCats = Object.entries(categories).sort((a, b) => b[1] - a[1]);
    sortedCats.forEach(([cat, count]) => {
        console.log(`  ${count.toString().padStart(2)} │ ${cat}`);
    });

    totalQuestions += questionCount;
});

console.log('\n' + '='.repeat(80));
console.log(`\n📈 RESUMEN GLOBAL (${totalQuestions} preguntas totales):\n`);

const sortedGlobalCats = Object.entries(allCategories).sort((a, b) => b[1] - a[1]);
sortedGlobalCats.forEach(([cat, count]) => {
    const percentage = ((count / totalQuestions) * 100).toFixed(1);
    console.log(`  ${count.toString().padStart(2)} (${percentage.padStart(5)}%) │ ${cat}`);
});

console.log('\n' + '='.repeat(80) + '\n');
