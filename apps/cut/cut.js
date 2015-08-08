var es6shim = require('es6-shim');
var plasmid = require('./config/plasmidSequence.js')();
var enzymes = require('./config/enzymes.js')();
var recognitor = require('./modules/recognitor.js')();
var rulesChecker = require('./modules/rulesChecker.js')();
var plasmidSequence = plasmid.getSequence();
var sequence, sequenceBox, matches;

var decorators = '******************';
var decoratorsShort = '*******';

for (var key in enzymes.config) {
	sequence = enzymes.getSequence(enzymes.config[key].sequence);
	sequenceBox = rulesChecker.prepare(sequence);

	for (var i = 0; i < sequenceBox.length; i++) {
		matches = recognitor.recognizeSequence(plasmidSequence, sequenceBox[i]);
		console.log(decorators);
		console.log(decoratorsShort + ' ' + key + ' => Number of cuts with sequence ' + sequenceBox[i] + ':', matches.length);
		console.log(decorators + '\n');
		for (var j = 0; j < matches.length; j++) {
			console.log('Position of match: ', matches[j].index);
		}
		matches.length === 0 && console.log(' No luck here, try different ensyme.');
		console.log('\n');
	}
}