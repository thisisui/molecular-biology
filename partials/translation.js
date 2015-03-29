var config = require('../config/config.js')();

var translation = function (rna) {
    var startTriplet = 'AUG';
    var noProtein = 'No protein';

    /**
     * Checks does triplet match STOP triplet pattern
     *
     * @param triplet {string} three aminoacids names
     * @returns {boolean} should translation end
     */
    function shouldTranslationEnd(triplet) {
        return config.triplets[triplet] && config.triplets[triplet] === 'STOP';
    }

    /**
     * Checks does triplet match START triplet pattern
     *
     * @param i {Number} index on rna array
     * @param rna {Array} strand of mRNA
     * @returns {boolean} should translation start
     */
    function shouldTranslationStart(i, rna) {
        return (rna[i] + rna[i + 1] + rna[i + 2]) === startTriplet;
    }

    /**
     * Match triplet of nucleobases with proper aminoacid
     *
     * @param proteinCode {Array} line of mRNA coding protein
     * @returns output {Array} aminoacids creating protein
     */
    function matchTriplets(proteinCode) {
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

    /**
     * Creates protein from mRNA
     *
     * @param rna {Array} strand of mRNA
     * @returns protein {Array} aminoadics creating protein
     */
    function createProtein(rna) {
        var protein = noProtein,
            proteinCode = null,
            ln = rna.length,
            i = 0;

        for (i; i < ln - 2; i++) {
            if (shouldTranslationStart(i, rna)) {
                proteinCode = rna.splice(i);
                protein = matchTriplets(proteinCode);
            }
        }

        return protein;
    }

    return createProtein(rna);
};

module.exports = translation;