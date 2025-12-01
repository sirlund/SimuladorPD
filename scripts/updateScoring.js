#!/usr/bin/env node

/**
 * Script para actualizar el sistema de scoring según el nuevo esquema:
 * - 5pts: respuesta perfecta (se mantiene)
 * - 3pts: respuestas intermedias (4 y 3 → 3)
 * - 1pt: respuestas malas pero que cumplen o parchan (2 y 1 → 1)
 * - -1pts: respuestas derechamente negativas (0 → -1)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo de scores antiguos a nuevos
const scoreMapping = {
  5: 5,  // Perfecto se mantiene
  4: 3,  // Intermedio
  3: 3,  // Intermedio
  2: 1,  // Malo pero cumple/parcha
  1: 1,  // Malo pero cumple/parcha
  0: -1  // Negativo
};

const blocksDir = path.join(__dirname, '../src/data/questions/blocks');
const blockFiles = [
  '01-strategy.jsx',
  '02-research.jsx',
  '03-metrics.jsx',
  '04-mobile.jsx',
  '05-culture.jsx',
  '06-innovation.jsx'
];

let totalUpdated = 0;

blockFiles.forEach(filename => {
  const filePath = path.join(blocksDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileUpdated = 0;

  // Buscar y reemplazar todos los scores
  // Patrón: score: X donde X es un número
  content = content.replace(/score:\s*([0-5])/g, (match, score) => {
    const oldScore = parseInt(score);
    const newScore = scoreMapping[oldScore];
    if (newScore !== undefined && newScore !== oldScore) {
      fileUpdated++;
      return `score: ${newScore}`;
    }
    return match;
  });

  if (fileUpdated > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename}: ${fileUpdated} scores actualizados`);
    totalUpdated += fileUpdated;
  } else {
    console.log(`⏭️  ${filename}: sin cambios necesarios`);
  }
});

console.log(`\n🎉 Total: ${totalUpdated} scores actualizados`);

