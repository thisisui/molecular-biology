module.exports = function () {

    /**
     * @param sequence
     * @param recognitionSequence
     * @returns {Array}
     */
    this.recognizeSequence = function (sequence, recognitionSequence) {
        var sequenceToCheck = sequence + sequence.slice(0, recognitionSequence.length - 1),
            reg = new RegExp(recognitionSequence, 'ig'),
            response = [],
            match;

        while ((match = reg.exec(sequenceToCheck)) !== null) {
            response.push(match);
        }

        return response;
    };

    return this;
};