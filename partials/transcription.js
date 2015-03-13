var config = require('../config/config.js')();
var transcription = function (DNA) {
    var DNA = DNA;
    var createRNA = function () {
        var i = 0,
            ln,
            rna = [];

        if (DNA[35]) {
            ln = DNA[35].length;
            for (i; i < ln; i++) {
                var nucleobase = config.nucleobase[DNA[35][i]];
                var complementary = nucleobase.complementaryAlt || nucleobase.complementary;

                rna[i] = complementary;
            }
        }
        return rna;
    };

    return createRNA();
};


module.exports = transcription;