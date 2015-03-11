var config = require('../config/config.js')();

module.exports = function () {

    var dna = {
        firstStrand: null,

        stringLength: 10,

        isArray: function (value) {
            return !(value.constructor.toString().indexOf("Array") === -1);
        },

        createStrand: function (strand, isSecond) {
            var i;
            for (i = 0; i < this.stringLength; i++) {
                if (isSecond) {
                    strand[i] = config.nucleobase[this.firstStrand[i]].complementary;
                } else {
                    strand[i] = config.nucleobase.cache[Math.floor(Math.random() * 4)];
                }
            }

            //cache update
            this.firstStrand = strand;

            return strand;
        },

        createDNA: function () {
            var firstStrand = this.createStrand(new Array(this.stringLength));
            var secondStrand = this.createStrand(new Array(this.stringLength), true);

            console.log(firstStrand);
            console.log(secondStrand);
        },

        init: function () {
            this.createDNA();
        }
    };

    dna.init();
};
