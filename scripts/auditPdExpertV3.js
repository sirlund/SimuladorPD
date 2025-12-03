/**
 * Script de auditoría pd-expert V3
 * Analiza todas las preguntas según los nuevos estándares
 */

import { allQuestions } from '../src/data/questions/index.js';

// Verbos prohibidos según Anti-Spoiler V2
const FORBIDDEN_VERBS = [
  'falla', 'destruye', 'pierde', 'ignora', 'maquillas', 'rompe',
  'explota', 'colapsa', 'mata', 'arruina'
];

// Juicios prohibidos
const FORBIDDEN_JUDGMENTS = [
  'innecesario', 'tóxico', 'parche', 'ingenuo', 'estúpido', 'malo',
  'pobre', 'débil', 'pésimo', 'terrible'
];

// Términos Staff recomendados
const STAFF_TERMS = [
  'Technical Hygiene', 'Strangler Fig', 'Bus Factor', 'Opportunity Cost',
  'Unit Economics', 'Scope Cutting', 'Political Capital', 'Sunk Cost Fallacy',
  'CAC', 'LTV', 'Churn', 'Runway', 'Burn Rate', 'PMF'
];

const results = {
  totalQuestions: allQuestions.length,
  totalOptions: allQuestions.length * 3,
  tradeoffAnalysis: {
    complete: 0,
    incomplete: [],
    missingInLowScores: []
  },
  antiSpoilerViolations: {
    total: 0,
    byBlock: {},
    examples: []
  },
  agnosticismViolations: {
    total: 0,
    byBlock: {},
    examples: []
  },
  staffTerminology: {
    withTerms: 0,
    withoutTerms: [],
    percentage: 0
  },
  scoreDistribution: {}
};

// Analizar cada pregunta
allQuestions.forEach((q, qIndex) => {
  const blockName = q.id.split('_')[0];

  // Inicializar contadores por bloque si no existen
  if (!results.antiSpoilerViolations.byBlock[blockName]) {
    results.antiSpoilerViolations.byBlock[blockName] = 0;
  }
  if (!results.agnosticismViolations.byBlock[blockName]) {
    results.agnosticismViolations.byBlock[blockName] = 0;
  }

  // === A. TRADE-OFF V3 ANALYSIS ===
  q.options.forEach((opt, optIndex) => {
    const optionLetter = String.fromCharCode(65 + optIndex);
    const hasAction = /^[A-Z]/.test(opt.text);
    const hasBenefit = opt.text.length > 50; // simplificado
    const hasConnector = /\.\.\.pero|\.\.\.aunque|\.\.\.a costa de/i.test(opt.text);
    const hasCostRisk = opt.text.length > 80; // simplificado

    if (hasAction && hasBenefit && hasConnector && hasCostRisk) {
      results.tradeoffAnalysis.complete++;
    } else {
      results.tradeoffAnalysis.incomplete.push({
        id: q.id,
        option: optionLetter,
        text: opt.text.substring(0, 100) + '...',
        score: opt.score
      });

      // Especialmente crítico en opciones incorrectas (score 1-2)
      if (opt.score <= 2 && !hasConnector) {
        results.tradeoffAnalysis.missingInLowScores.push({
          id: q.id,
          option: optionLetter,
          text: opt.text.substring(0, 80) + '...',
          score: opt.score
        });
      }
    }

    // Contar distribución de scores
    results.scoreDistribution[opt.score] = (results.scoreDistribution[opt.score] || 0) + 1;

    // === B. ANTI-SPOILER V2 ANALYSIS ===
    const textLower = opt.text.toLowerCase();
    const violations = [];

    FORBIDDEN_VERBS.forEach(verb => {
      if (textLower.includes(verb)) {
        violations.push(`verbo prohibido: "${verb}"`);
      }
    });

    FORBIDDEN_JUDGMENTS.forEach(judgment => {
      if (textLower.includes(judgment)) {
        violations.push(`juicio: "${judgment}"`);
      }
    });

    // Detectar consecuencias auto-delatoras
    if (/\.\.\.y (luego|entonces) (falla|explota|colapsa)/i.test(opt.text)) {
      violations.push('consecuencia auto-delatora');
    }

    if (violations.length > 0) {
      results.antiSpoilerViolations.total++;
      results.antiSpoilerViolations.byBlock[blockName]++;

      if (results.antiSpoilerViolations.examples.length < 15) {
        results.antiSpoilerViolations.examples.push({
          id: q.id,
          option: optionLetter,
          violations: violations.join(', '),
          text: opt.text.substring(0, 100) + '...'
        });
      }
    }
  });

  // === C. AGNOSTICISMO ANALYSIS ===
  if (/opci[oó]n [ABC]/i.test(q.explanation)) {
    results.agnosticismViolations.total++;
    results.agnosticismViolations.byBlock[blockName]++;

    if (results.agnosticismViolations.examples.length < 5) {
      results.agnosticismViolations.examples.push({
        id: q.id,
        text: q.explanation.substring(0, 200) + '...'
      });
    }
  }

  // === D. TERMINOLOGÍA STAFF ===
  const hasStaffTerm = STAFF_TERMS.some(term =>
    q.explanation.includes(term)
  );

  if (hasStaffTerm) {
    results.staffTerminology.withTerms++;
  } else {
    // Solo reportar primeros 10
    if (results.staffTerminology.withoutTerms.length < 10) {
      results.staffTerminology.withoutTerms.push({
        id: q.id,
        category: q.category,
        explanation: q.explanation.substring(0, 150) + '...'
      });
    }
  }
});

// Calcular porcentajes
results.tradeoffAnalysis.percentComplete =
  ((results.tradeoffAnalysis.complete / results.totalOptions) * 100).toFixed(1);

results.staffTerminology.percentage =
  ((results.staffTerminology.withTerms / results.totalQuestions) * 100).toFixed(1);

// Output del reporte
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 AUDITORÍA PD-EXPERT V3 - SimuladorPD');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log(`Total de preguntas: ${results.totalQuestions}`);
console.log(`Total de opciones: ${results.totalOptions}\n`);

console.log('━━━ 1. TRADE-OFF V3 ━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`✓ Opciones con estructura completa: ${results.tradeoffAnalysis.complete}/${results.totalOptions} (${results.tradeoffAnalysis.percentComplete}%)`);
console.log(`✗ Opciones sin trade-offs: ${results.tradeoffAnalysis.incomplete.length}`);
console.log(`⚠️  Opciones incorrectas sin trade-off (crítico): ${results.tradeoffAnalysis.missingInLowScores.length}\n`);

if (results.tradeoffAnalysis.missingInLowScores.length > 0) {
  console.log('📌 Top 10 opciones SIN trade-offs (scores 1-2):\n');
  results.tradeoffAnalysis.missingInLowScores.slice(0, 10).forEach((item, i) => {
    console.log(`${i + 1}. [${item.id}] Opción ${item.option} (score: ${item.score})`);
    console.log(`   "${item.text}"\n`);
  });
}

console.log('\n━━━ 2. ANTI-SPOILER V2 ━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`Total de violaciones: ${results.antiSpoilerViolations.total}\n`);
console.log('Por bloque:');
Object.entries(results.antiSpoilerViolations.byBlock).forEach(([block, count]) => {
  console.log(`  ${block}: ${count}`);
});

console.log('\n📌 Ejemplos de violaciones:\n');
results.antiSpoilerViolations.examples.slice(0, 10).forEach((item, i) => {
  console.log(`${i + 1}. [${item.id}] Opción ${item.option}`);
  console.log(`   Violaciones: ${item.violations}`);
  console.log(`   "${item.text}"\n`);
});

console.log('\n━━━ 3. AGNOSTICISMO ━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`Explanations con "Opción A/B/C": ${results.agnosticismViolations.total}\n`);
console.log('Por bloque:');
Object.entries(results.agnosticismViolations.byBlock).forEach(([block, count]) => {
  if (count > 0) {
    console.log(`  ${block}: ${count}`);
  }
});

if (results.agnosticismViolations.examples.length > 0) {
  console.log('\n📌 Ejemplos:\n');
  results.agnosticismViolations.examples.forEach((item, i) => {
    console.log(`${i + 1}. [${item.id}]`);
    console.log(`   "${item.text}"\n`);
  });
}

console.log('\n━━━ 4. TERMINOLOGÍA STAFF ━━━━━━━━━━━━━━━━━━━\n');
console.log(`Explanations con terminología: ${results.staffTerminology.withTerms}/${results.totalQuestions} (${results.staffTerminology.percentage}%)\n`);

if (results.staffTerminology.withoutTerms.length > 0) {
  console.log('📌 Oportunidades perdidas (primeras 5):\n');
  results.staffTerminology.withoutTerms.slice(0, 5).forEach((item, i) => {
    console.log(`${i + 1}. [${item.id}] - ${item.category}`);
    console.log(`   "${item.explanation}"\n`);
  });
}

console.log('\n━━━ 5. DISTRIBUCIÓN DE SCORES ━━━━━━━━━━━━━━━\n');
Object.keys(results.scoreDistribution).sort((a, b) => a - b).forEach(score => {
  const count = results.scoreDistribution[score];
  const percentage = ((count / results.totalOptions) * 100).toFixed(1);
  const bar = '█'.repeat(Math.floor(percentage / 2));
  console.log(`  Score ${score}: ${String(count).padStart(3)} (${String(percentage).padStart(5)}%) ${bar}`);
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Exportar resultados para el markdown
export { results };
