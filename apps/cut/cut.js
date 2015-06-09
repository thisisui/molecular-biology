var plasmid = require('./config/plasmidSequence.js')();
var enzymes = require('./config/enzymes.js')();
var recognitor = require('./modules/recognitor.js')();
var rulesChecker = require('./modules/rulesChecker.js')();
var plasmidSequence = plasmid.getSequence();
var sequence, sequenceBox, matches;

for (var key in enzymes.config) {
    sequence = enzymes.getSequence(enzymes.config[key].sequence);
    sequenceBox = rulesChecker.prepare(sequence);

    for (var i = 0; i < sequenceBox.length; i++) {
        matches = recognitor.recognizeSequence(plasmidSequence, sequenceBox[i]);

        console.log('Number of cuts for ' + key + ' with sequence ' + sequenceBox[i] + ':', matches.length);

        for (var j = 0; j < matches.length; j++) {
            console.log('Position of match: ', matches[j].index);
        }
    }
}