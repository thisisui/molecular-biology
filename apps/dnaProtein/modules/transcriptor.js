var config = require('../config/config.js')();

var transcriptor = function () {
    return {
        grabNucleobase: function (item) {
            var nucleobase = config.nucleobase[item];

            return nucleobase.complementaryAlt || nucleobase.complementary;
        }
    };
};

module.exports = transcriptor;