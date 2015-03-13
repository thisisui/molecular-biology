var helper = {
    isArray: function (value) {
        return !(value.constructor.toString().indexOf("Array") === -1);
    }
};

module.exports = helper;