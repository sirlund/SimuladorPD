
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOCKS_DIR = path.join(__dirname, '../src/data/questions/blocks');

// Simple Levenshtein distance for similarity
function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

async function main() {
    console.log('🔍 Starting Duplicate Audit...\n');

    const files = fs.readdirSync(BLOCKS_DIR).filter(f => f.endsWith('.jsx'));
    let allQuestions = [];

    for (const file of files) {
        const content = fs.readFileSync(path.join(BLOCKS_DIR, file), 'utf-8');
        const lines = content.split('\n');

        let currentId = null;
        let currentScenario = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            // Capture Question ID (ignore option IDs like { id: 'A', ... })
            // Question IDs usually appear as id: 'string', while options are inside options: [ ... ]
            // A simple heuristic: Question ID lines don't start with {
            const idMatch = line.match(/^id:\s*['"]([^'"]+)['"]/);
            if (idMatch) {
                // If we have a previous question pending, save it
                if (currentId) {
                    allQuestions.push({
                        file: file,
                        id: currentId,
                        scenario: currentScenario || 'NO_SCENARIO_FOUND'
                    });
                }
                currentId = idMatch[1];
                currentScenario = null; // Reset for new question
            }

            // Capture Scenario
            // Handles: scenario: "Text...",
            const scenarioMatch = line.match(/scenario:\s*(["'])(.*)/);
            if (scenarioMatch) {
                let text = scenarioMatch[2];
                // If it ends with quote+comma or quote, strip it
                // This is a simple heuristic, might not cover multi-line scenarios perfectly
                // but good enough for duplicate detection
                if (text.endsWith(`",`) || text.endsWith(`',`)) {
                    text = text.slice(0, -2);
                } else if (text.endsWith(`"`) || text.endsWith(`'`)) {
                    text = text.slice(0, -1);
                }
                currentScenario = text;
            }
        }

        // Push last question
        if (currentId) {
            allQuestions.push({
                file: file,
                id: currentId,
                scenario: currentScenario || 'NO_SCENARIO_FOUND'
            });
        }
    }

    console.log(`Total questions found: ${allQuestions.length}\n`);

    // 1. Check for Duplicate IDs
    const idMap = {};
    const duplicateIds = [];
    allQuestions.forEach(q => {
        if (idMap[q.id]) {
            duplicateIds.push({ original: idMap[q.id], duplicate: q });
        } else {
            idMap[q.id] = q;
        }
    });

    if (duplicateIds.length > 0) {
        console.log('❌ DUPLICATE IDs FOUND:');
        duplicateIds.forEach(d => {
            console.log(`   - ID: ${d.duplicate.id}`);
            console.log(`     File 1: ${d.original.file}`);
            console.log(`     File 2: ${d.duplicate.file}`);
        });
    } else {
        console.log('✅ No duplicate IDs found.');
    }

    console.log('\n-----------------------------------\n');

    // 2. Check for Similar Scenarios
    console.log('🧠 Checking for Semantic Duplicates (Similarity > 85%)...\n');

    const potentialDuplicates = [];

    for (let i = 0; i < allQuestions.length; i++) {
        for (let j = i + 1; j < allQuestions.length; j++) {
            const q1 = allQuestions[i];
            const q2 = allQuestions[j];

            // Skip if same ID (already caught)
            if (q1.id === q2.id) continue;

            // Check similarity
            const sim = similarity(q1.scenario, q2.scenario);
            if (sim > 0.85) {
                potentialDuplicates.push({ q1, q2, similarity: sim });
            }
        }
    }

    if (potentialDuplicates.length > 0) {
        console.log(`⚠️  Found ${potentialDuplicates.length} potential duplicate scenarios:\n`);
        potentialDuplicates.forEach(d => {
            console.log(`   MATCH (${(d.similarity * 100).toFixed(1)}%):`);
            console.log(`     1. [${d.q1.file}] ${d.q1.id}`);
            console.log(`     2. [${d.q2.file}] ${d.q2.id}`);
            console.log(`     Scenario: "${d.q1.scenario.substring(0, 100)}..."`);
            console.log('');
        });
    } else {
        console.log('✅ No similar scenarios found.');
    }
}

main().catch(console.error);
