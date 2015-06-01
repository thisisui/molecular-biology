var plasmid = require('./config/plasmidSequence.js')();
var enzymes = require('./config/enzymes.js')();
var recognitor = require('./modules/recognitor.js')();

var plasmidSequence = plasmid.getSequence();
var enzymesRecognitionSequence;

for (var key in enzymes.config) {
    enzymesRecognitionSequence = enzymes.getSequence(enzymes.config[key].sequence);
    console.log('Number of cuts for ' + key + ':', recognitor.recognizeSequence(plasmidSequence, enzymesRecognitionSequence));
}