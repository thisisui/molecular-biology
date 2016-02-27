var config = require('../config/config.js')();
var transriptor = require('../modules/transcriptor.js');

var transcription = function (DNA) {

    function createRNA(DNA) {
        var rna = [];

        DNA[35].forEach(function (item, i) {
            rna[i] = transriptor().grabNucleobase(item);
        });

        return rna;
    }

    return createRNA(DNA);
};

module.exports = transcription;