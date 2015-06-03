var plasmid = require('./config/plasmidSequence.js')();
var enzymes = require('./config/enzymes.js')();
var recognitor = require('./modules/recognitor.js')();
var rulesChecker = require('./modules/rulesChecker.js')();
var plasmidSequence = plasmid.getSequence();
var sequence, sequenceBox;

for (var key in enzymes.config) {
    sequence = enzymes.getSequence(enzymes.config[key].sequence);
    sequenceBox = rulesChecker.prepare(sequence);

    for (var i = 0; i < sequenceBox.length; i++) {
        console.log('Number of cuts for ' + key + ' with sequence ' + sequenceBox[i] + ':', recognitor.recognizeSequence(plasmidSequence, sequenceBox[i]));
    }

}