console.time('DNA-creation');

var dnaCreator = require('./partials/dna.js');
var translation = require('./partials/translation.js');
var transcription = require('./partials/transcription.js');

var DNA = dnaCreator();
var mRNA = transcription(DNA);
var protein = translation(mRNA);

//console.log(DNA);
//console.log(mRNA);
console.log(protein);
console.log('Aminoacids: ', protein.length);

console.timeEnd('DNA-creation');