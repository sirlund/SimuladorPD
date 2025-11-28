#!/usr/bin/env node

/**
 * Script para dividir questionPool.jsx en 6 bloques temáticos
 * Uso: node scripts/split-question-pool.js
 */

const fs = require('fs');
const path = require('path');

// Configuración
const SOURCE_FILE = path.join(__dirname, '../src/data/questionPool.jsx');
const OUTPUT_DIR = path.join(__dirname, '../src/data/questions/blocks');
const INDEX_FILE = path.join(__dirname, '../src/data/questions/index.js');

// Mapeo de bloques originales a archivos de salida
const BLOCK_MAPPING = {
    // Bloques 1-5 van a block-01
    1: 'block-01-strategy-systems-leadership.js',
    2: 'block-01-strategy-systems-leadership.js',
    3: 'block-01-strategy-systems-leadership.js',
    4: 'block-02-research-ethics-collaboration.js',
    5: 'block-02-research-ethics-collaboration.js',
    6: 'block-02-research-ethics-collaboration.js',
    7: 'block-03-crisis-data-experimentation.js',
    8: 'block-03-crisis-data-experimentation.js',
    9: 'block-03-crisis-data-experimentation.js',
    10: 'block-04-mobile-platforms-handoff.js',
    11: 'block-04-mobile-platforms-handoff.js',
    12: 'block-05-culture-stakeholders-business.js',
    13: 'block-05-culture-stakeholders-business.js',
    14: 'block-06-innovation-ethics-crisis.js',
    15: 'block-06-innovation-ethics-crisis.js',
    16: 'block-06-innovation-ethics-crisis.js'
};

const BLOCK_TITLES = {
    'block-01-strategy-systems-leadership.js': 'Estrategia, Sistemas & Liderazgo',
    'block-02-research-ethics-collaboration.js': 'Research, Ética & Colaboración',
    'block-03-crisis-data-experimentation.js': 'Crisis, Data & Experimentación',
    'block-04-mobile-platforms-handoff.js': 'Mobile, Plataformas & Handoff',
    'block-05-culture-stakeholders-business.js': 'Cultura, Stakeholders & Business',
    'block-06-innovation-ethics-crisis.js': 'Innovación, Ética Avanzada & Crisis'
};

async function main() {
    console.log('🚀 Iniciando split de questionPool.jsx...\n');

    // Leer archivo fuente
    const content = fs.readFileSync(SOURCE_FILE, 'utf-8');

    // Extraer imports
    const importsMatch = content.match(/import.*?from 'lucide-react';/s);
    const imports = importsMatch ? importsMatch[0] : '';

    // Extraer todo el contenido del array
    const arrayMatch = content.match(/return \[([\s\S]*?)\n  \];/);
    if (!arrayMatch) {
        throw new Error('No se pudo encontrar el array de preguntas');
    }

    const questionsContent = arrayMatch[1];

    // Dividir por bloques usando regex
    const blocks = {};
    let currentBlock = 1;
    let currentContent = [];

    const lines = questionsContent.split('\n');

    for (const line of lines) {
        // Detectar inicio de nuevo bloque
        const blockMatch = line.match(/\/\/ --- BLOQUE (\d+):/);
        if (blockMatch) {
            // Guardar contenido del bloque anterior
            if (currentContent.length > 0) {
                const targetFile = BLOCK_MAPPING[currentBlock];
                if (!blocks[targetFile]) {
                    blocks[targetFile] = [];
                }
                blocks[targetFile].push(...currentContent);
            }

            // Empezar nuevo bloque
            currentBlock = parseInt(blockMatch[1]);
            currentContent = [line];
        } else {
            currentContent.push(line);
        }
    }

    // Guardar último bloque
    if (currentContent.length > 0) {
        const targetFile = BLOCK_MAPPING[currentBlock];
        if (!blocks[targetFile]) {
            blocks[targetFile] = [];
        }
        blocks[targetFile].push(...currentContent);
    }

    // Crear directorio de salida
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generar archivos
    console.log('📝 Generando archivos de bloques...\n');

    for (const [filename, content] of Object.entries(blocks)) {
        const exportName = filename.replace('.js', '').replace(/-/g, '_') + '_questions';
        const title = BLOCK_TITLES[filename];

        const fileContent = `import React from 'react';
${imports}

/**
 * ${title}
 */
export const ${exportName} = [
${content.join('\n')}
];
`;

        const outputPath = path.join(OUTPUT_DIR, filename);
        fs.writeFileSync(outputPath, fileContent);
        console.log(`✅ Creado: ${filename}`);
    }

    // Generar index.js
    console.log('\n📦 Generando index.js...\n');

    const indexContent = `/**
 * Index de todas las preguntas del simulador
 * Importa y combina todos los bloques temáticos
 */

${Object.keys(blocks).map((filename, i) => {
        const exportName = filename.replace('.js', '').replace(/-/g, '_') + '_questions';
        return `import { ${exportName} } from './blocks/${filename}';`;
    }).join('\n')}

/**
 * Combina todas las preguntas en un solo array
 */
export const allQuestions = [
  ${Object.keys(blocks).map(filename => {
        const exportName = filename.replace('.js', '').replace(/-/g, '_') + '_questions';
        return `...${exportName}`;
    }).join(',\n  ')}
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
`;

    fs.writeFileSync(INDEX_FILE, indexContent);
    console.log('✅ Creado: index.js');

    console.log('\n🎉 Split completado exitosamente!');
    console.log('\n📊 Resumen:');
    console.log(`   - ${Object.keys(blocks).length} archivos creados`);
    console.log(`   - ${allQuestions.length} preguntas distribuidas`);
    console.log(`   - index.js con getQuestionPool() generado`);
    console.log('\n💡 Próximo paso: Actualizar src/data/questionPool.jsx para importar desde ./questions/index.js');
}

main().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
});
