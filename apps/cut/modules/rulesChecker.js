var enzymes = require('./../config/enzymes.js')();

module.exports = function () {

    this.replaceAt = function (source, index, character) {
        return source.substr(0, index) + character + source.substr(index + character.length);
    };

    this.prepare = function (recognitionSequence) {
        var temp = [],
            tempSequence,
            isValid = true;

        for (var key in enzymes.rules) {
            if (recognitionSequence.indexOf(key) !== -1) {
                isValid = false;
                for (var i = 0; i < enzymes.rules[key].length; i++) {
                    tempSequence = this.replaceAt(recognitionSequence, recognitionSequence.indexOf(key), enzymes.rules[key][i]);
                    temp.push(tempSequence);
                }
            }
        }

        if (isValid) {
            temp = [recognitionSequence];
        }

        return temp;
    };

    return this;
};