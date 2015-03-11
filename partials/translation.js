var config = require('../config/config.js')();

module.exports = function () {

    var translation = {

        matchTriplet: function (triplet) {

        },

        prepareData: function (dna) {

        },

        translate: function (dna) {
            var dataProcessed = this.prepareData(dna);

            dataProcessed.forEach(function (item) {
                this.matchTriplet(item);
            });

        },

        init: function (dna) {
            this.translate(dna);
        }
    };

    translation.init();
};
