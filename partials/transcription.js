var config = require('../config/config.js')();
var tRNA = require('../modules/tRNA.js');

var transcription = function (DNA) {

    function createRNA(DNA) {
        var rna = [];

        DNA[35].forEach(function (item, i) {
            rna[i] = tRNA().grabNucleobase(item);
        });

        return rna;
    }

    return createRNA(DNA);
};

module.exports = transcription;