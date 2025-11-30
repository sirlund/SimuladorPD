
import { allQuestions } from './src/data/questions/index.js';

const metQuestions = allQuestions.filter(q => q.displayId.startsWith('MET'));
console.log('Total MET questions:', metQuestions.length);
console.log('MET IDs:', metQuestions.map(q => q.displayId).join(', '));

const met01 = allQuestions.find(q => q.displayId === 'MET-01');
if (met01) {
    console.log('✅ MET-01 found:', met01.id);
} else {
    console.log('❌ MET-01 NOT found');
}
