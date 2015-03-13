var config = require('../config/config.js')();

module.exports = function () {

    var dna = {
        _firstStrand: null,

        createStrand: function (strand, isSecond) {
            var i;
            for (i = 0; i < config.DNA.stringLength; i++) {
                if (isSecond) {
                    strand[i] = config.nucleobase[this._firstStrand[i]].complementary;
                } else {
                    strand[i] = config.nucleobase.cache[Math.floor(Math.random() * 4)];
                }
            }

            //cache update
            this._firstStrand = strand;

            return strand;
        },

        createDNA: function () {
            var firstStrand = this.createStrand(new Array(config.DNA.stringLength));
            var secondStrand = this.createStrand(new Array(config.DNA.stringLength), true);

            return {
                53: firstStrand,
                35: secondStrand
            }
        }
    };

    return dna.createDNA();
};
