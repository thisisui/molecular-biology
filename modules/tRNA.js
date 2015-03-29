var config = require('../config/config.js')();

var tRNA = function () {
    return {
        grabNucleobase: function (item) {
            var nucleobase = config.nucleobase[item];
            ;
            return nucleobase.complementaryAlt || nucleobase.complementary;
        }
    };
};

module.exports = tRNA;