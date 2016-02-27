var config = require('../config/config.js')();

var dna = function () {
    var _firstStrand = null;

    function createStrand(strand, isSecond) {
        var i;
        for (i = 0; i < config.DNA.stringLength; i++) {
            if (isSecond) {
                strand[i] = config.nucleobase[_firstStrand[i]].complementary;
            } else {
                strand[i] = config.nucleobase.cache[Math.floor(Math.random() * 4)];
            }
        }

        //cache update
        _firstStrand = strand;

        return strand;
    }

    function createDNA() {
        var firstStrand = createStrand(new Array(config.DNA.stringLength));
        var secondStrand = createStrand(new Array(config.DNA.stringLength), true);

        return {
            53: firstStrand,
            35: secondStrand
        }
    }

    return createDNA();
};

module.exports = dna;