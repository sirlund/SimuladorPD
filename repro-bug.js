
const questions = [
    { displayId: 'MET-01' },
    { displayId: 'MET-02' }
];

const searchId = 'met-01';
const index = questions.findIndex(q => q.displayId === searchId);

console.log(`Searching for '${searchId}' in`, questions);
console.log('Index found:', index);

const caseInsensitiveIndex = questions.findIndex(q => q.displayId.toLowerCase() === searchId.toLowerCase());
console.log('Case insensitive index:', caseInsensitiveIndex);
