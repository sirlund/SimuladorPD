#!/usr/bin/env node

/**
 * Script para dividir questionPool.jsx en 6 bloques temáticos
 * Uso: node scripts/split-question-pool.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const SOURCE_FILE = path.join(__dirname, '../src/data/questionPool.jsx');
const OUTPUT_DIR = path.join(__dirname, '../src/data/questions/blocks');
const INDEX_FILE = path.join(__dirname, '../src/data/questions/index.js');

// Mapeo de bloques originales a archivos de salida
const BLOCK_MAPPING = {
    // Bloques 1-5 van a block-01
    1: '01-strategy.js',
    2: '01-strategy.js',
    3: '01-strategy.js',
    4: '02-research.js',
    5: '02-research.js',
    6: '02-research.js',
    7: '03-metrics.js',
    8: '03-metrics.js',
    9: '03-metrics.js',
    10: '04-mobile.js',
    11: '04-mobile.js',
    12: '05-culture.js',
    13: '05-culture.js',
    14: '06-innovation.js',
    15: '06-innovation.js',
    16: '06-innovation.js'
};

const BLOCK_TITLES = {
    '01-strategy.js': 'Estrategia, Sistemas & Liderazgo',
    '02-research.js': 'Research, Ética & Colaboración',
    '03-metrics.js': 'Crisis, Data & Experimentación',
    '04-mobile.js': 'Mobile, Plataformas & Handoff',
    '05-culture.js': 'Cultura, Stakeholders & Business',
    '06-innovation.js': 'Innovación, Ética Avanzada & Crisis'
};

const BLOCK_PREFIXES = {
    '01-strategy.js': 'STR',
    '02-research.js': 'RES',
    '03-metrics.js': 'MET',
    '04-mobile.js': 'MOB',
    '05-culture.js': 'CUL',
    '06-innovation.js': 'INN'
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
        // Asegurar extensión .jsx
        const outputFilename = filename.replace('.js', '.jsx');
        // Generar nombre de exportación minimalista (ej: strategy_questions)
        const exportName = filename.replace(/^\d+-/, '').replace('.js', '') + '_questions';
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

        const outputPath = path.join(OUTPUT_DIR, outputFilename);
        fs.writeFileSync(outputPath, fileContent);
        console.log(`✅ Creado: ${outputFilename}`);
    }

    // Generar index.js
    console.log('\n📦 Generando index.js...\n');

    const indexContent = `/**
 * Index de todas las preguntas del simulador
 * Importa y combina todos los bloques temáticos
 */

${Object.keys(blocks).map((filename, i) => {
        const exportName = filename.replace('.js', '').replace(/-/g, '_') + '_questions';
        const importFilename = filename.replace('.js', '.jsx');
        return `import { ${exportName} } from './blocks/${importFilename}';`;
    }).join('\n')}

/**
 * Helper para asignar IDs lógicos basados en bloque
 */
const processBlock = (block, prefix) => {
    return block.map((q, index) => ({
        ...q,
        displayId: \`\${prefix}-\${String(index + 1).padStart(2, '0')}\`
    }));
};

/**
 * Combina todas las preguntas en un solo array con IDs procesados
 */
export const allQuestions = [
${Object.keys(blocks).map(filename => {
        const exportName = filename.replace(/^\d+-/, '').replace('.js', '') + '_questions';
        const prefix = BLOCK_PREFIXES[filename];
        return `    ...processBlock(${exportName}, '${prefix}')`;
    }).join(',\n')}
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
    console.log(`   - ${Object.keys(blocks).length} archivos creados`);
    // console.log(`   - ${allQuestions.length} preguntas distribuidas`); // Variable no disponible aquí
    console.log(`   - index.js con getQuestionPool() generado`);
    console.log(`   - index.js con getQuestionPool() generado`);
    console.log('\n💡 Próximo paso: Actualizar src/data/questionPool.jsx para importar desde ./questions/index.js');
}

main().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
});
