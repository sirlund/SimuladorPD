const fs = require('fs');

const blocks = [
    { file: 'src/data/questions/blocks/01-strategy.jsx', name: 'Strategy' },
    { file: 'src/data/questions/blocks/02-research.jsx', name: 'Research' },
    { file: 'src/data/questions/blocks/03-metrics.jsx', name: 'Metrics' },
    { file: 'src/data/questions/blocks/04-mobile.jsx', name: 'Mobile' },
    { file: 'src/data/questions/blocks/05-culture.jsx', name: 'Culture' },
    { file: 'src/data/questions/blocks/06-innovation.jsx', name: 'Innovation' }
];

console.log('\n📊 CONTEO REAL DE PREGUNTAS POR BLOQUE\n');
console.log('='.repeat(60));

let total = 0;
const categoryCounts = {};

blocks.forEach(({ file, name }) => {
    const content = fs.readFileSync(file, 'utf8');

    // Contar preguntas (líneas con id: ')
    const questionMatches = content.match(/^\s*id:\s*'/gm) || [];
    const count = questionMatches.length;

    console.log(`\n${name.padEnd(15)} ${count} preguntas`);

    // Extraer categorías
    const catMatches = content.matchAll(/category:\s*"([^"]+)"/g);
    for (const match of catMatches) {
        const cat = match[1];
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    }

    total += count;
});

console.log('\n' + '='.repeat(60));
console.log(`TOTAL:          ${total} preguntas`);
console.log('='.repeat(60));

console.log('\n📋 TOP 15 CATEGORÍAS:\n');
const sorted = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

sorted.forEach(([cat, count], i) => {
    console.log(`${(i + 1).toString().padStart(2)}. ${count.toString().padStart(2)} │ ${cat}`);
});

console.log('\n');
