var config = require('../config/config.js')();

var translation = function (rna) {

    function shouldTranslationEnd(triplet) {
        return config.triplets[triplet] && config.triplets[triplet] === 'STOP';
    }

    function matchTriplet(proteinCode) {
        var i = 0; //will jump
        var j = 0;
        var ln = proteinCode.length;
        var output = [];

        for (i; i < ln; i += 3) {
            var triplet = proteinCode[i] + proteinCode[i + 1] + proteinCode[i + 2];

            if (shouldTranslationEnd(triplet)) break;

            output[j] = config.triplets[triplet] + ' - ' + config.aminoacid[config.triplets[triplet]].name;
            j++;
        }

        return output;
    }

    function createProtein(rna) {
        var i = 0,
            ln = rna.length,
            proteinCode,
            protein = 'No protein';

        for (i; i < ln - 2; i++) {
            var triplet = rna[i] + rna[i + 1] + rna[i + 2];
            if (triplet === 'AUG') {
                proteinCode = rna.splice(i);
                protein = matchTriplet(proteinCode);
            }
        }

        return protein;
    }

    return createProtein(rna);

};

module.exports = translation;