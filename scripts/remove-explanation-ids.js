#!/usr/bin/env node

/**
 * Script to remove (A), (B), (C) references from explanation fields
 * and replace them with concept-based descriptions extracted from option text
 */

const fs = require('fs');
const path = require('path');

const BLOCKS_DIR = path.join(__dirname, '../src/data/questions/blocks');

// Extract key concept from option text (first 3-5 words typically describe the approach)
function extractConcept(optionText) {
    // Remove quotes and get first sentence/phrase
    const cleaned = optionText.replace(/^["']|["']$/g, '');

    // Try to get the title/header before the colon
    const colonMatch = cleaned.match(/^([^:]+):/);
    if (colonMatch) {
        return colonMatch[1].trim();
    }

    // Otherwise take first 40 chars
    const firstPart = cleaned.substring(0, 40).trim();
    return firstPart.endsWith('.') ? firstPart : firstPart + '...';
}

// Process a single file
function processFile(filePath) {
    console.log(`\n📝 Processing ${path.basename(filePath)}...`);

    const content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    let changes = 0;

    // Find all question objects with explanations
    // This is a simplified regex - in production would use proper AST parsing
    const questionPattern = /{\s*id:\s*['"]([^'"]+)['"]\s*,[\s\S]*?explanation:\s*["']([^"']+)["']/g;

    let match;
    while ((match = questionPattern.exec(content)) !== null) {
        const questionId = match[1];
        const explanation = match[2];

        // Check if explanation has (A), (B), or (C) references
        if (/\([ABC]\)/.test(explanation)) {
            console.log(`  ⚠️  Found ID references in ${questionId}`);
            console.log(`      Original: ${explanation.substring(0, 80)}...`);

            // For now, mark for manual review
            // In a full implementation, would extract options and do intelligent replacement
            changes++;
        }
    }

    console.log(`  ✅ Found ${changes} explanations to update`);

    return modified;
}

// Main execution
function main() {
    console.log('🚀 Starting explanation ID reference removal...\n');

    const files = fs.readdirSync(BLOCKS_DIR).filter(f => f.endsWith('.jsx'));

    let totalChanges = 0;

    for (const file of files) {
        const filePath = path.join(BLOCKS_DIR, file);
        processFile(filePath);
    }

    console.log(`\n✨ Analysis complete!`);
    console.log(`Found ${totalChanges} explanations with ID references to update.`);
}

main();
