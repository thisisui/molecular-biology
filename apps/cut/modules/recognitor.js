module.exports = function () {

    this.recognizeSequence = function (sequence, recognitionSequence) {
        var matched = sequence.match(new RegExp(recognitionSequence, 'gi'));
        return matched ? matched.length : 0;
    };

    return this;
};