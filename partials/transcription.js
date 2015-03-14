var config = require('../config/config.js')();

var transcription = function (DNA) {

    function createRNA(DNA) {
        var rna = [];

        DNA[35].forEach(function (item, i) {
            var nucleobase = config.nucleobase[item];

            rna[i] = nucleobase.complementaryAlt || nucleobase.complementary;
        });

        return rna;
    }

    return createRNA(DNA);
};


module.exports = transcription;