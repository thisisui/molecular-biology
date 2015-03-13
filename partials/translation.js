var config = require('../config/config.js')();

module.exports = function (rna) {

    var translation = {

        matchTriplet: function (proteinCode) {
            var i = 0;
            var j = 0;
            var ln = proteinCode.length;
            var output = [];

            for (i; i < ln; i += 3) {
                var triplet = proteinCode[i] + proteinCode[i + 1] + proteinCode[i + 2];

                if (config.triplets[triplet] && config.triplets[triplet] === 'STOP') {
                    //end of translation
                    break;
                }
                output[j] = config.triplets[triplet];
                j++;

            }
            return output;
        },

        createProtein: function (rna) {
            var i = 0,
                ln = rna.length,
                proteinCode,
                protein = 'No protein';

            for (i; i < ln - 2; i++) {
                var triplet = rna[i] + rna[i + 1] + rna[i + 2];
                if (triplet === 'AUG') {
                    proteinCode = rna.splice(i);
                    protein = this.matchTriplet(proteinCode);
                }
            }

            return protein;

        },

        translate: function (rna) {
            return this.createProtein(rna);
        }

    };

    return translation.translate(rna);
};
