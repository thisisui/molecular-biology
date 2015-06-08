var enzymes = require('./../config/enzymes.js')();

module.exports = function () {

    this.replaceAt = function (source, index, character) {
        return source.substr(0, index) + character + source.substr(index + character.length);
    };

    this.hasMultipleSequences = function (recognitionSequence) {
        var value = recognitionSequence.match(new RegExp('[' + enzymes.rulesShort + ']', 'gi')) || 0;

        return value.length > 1;
    };

    this.simpleProcessSequence = function (recognitionSequence) {
        var sequences = [],
            isValid = true;

        for (var key in enzymes.rules) {
            if (enzymes.rules.hasOwnProperty(key)) {
                if (recognitionSequence.indexOf(key) !== -1) {
                    isValid = false;
                    for (var i = 0; i < enzymes.rules[key].length; i++) {
                        sequences.push(this.replaceAt(recognitionSequence, recognitionSequence.indexOf(key), enzymes.rules[key][i]));
                    }
                }
            }
        }

        if (isValid) {
            sequences.push(recognitionSequence);
        }

        return sequences;
    };

    this.advancedProcessSequence = function (recognitionSequence, sequences) {
        var sequencesTemp = [],
            value = recognitionSequence.match(new RegExp('[' + enzymes.rulesShort + ']', 'gi')) || 0;

        if (value) {
            sequencesTemp = this.simpleProcessSequence(recognitionSequence);
            for (var i = 0; i < sequencesTemp.length; i++) {
                this.advancedProcessSequence(sequencesTemp[i], sequences);
            }
        } else {
            sequences.push(recognitionSequence);
        }

        return sequences;
    };

    this.prepare = function (recognitionSequence) {
        var sequences = [];

        if (this.hasMultipleSequences(recognitionSequence)) {
            sequences = this.advancedProcessSequence(recognitionSequence, sequences);
        } else {
            sequences = this.simpleProcessSequence(recognitionSequence);
        }

        return sequences;
    };

    return this;
};