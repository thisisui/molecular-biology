module.exports = function() {

    /**
     * @param sequence
     * @param recognitionSequence
     * @returns {Array}
     */
    this.recognizeSequence = function(sequence, recognitionSequence) {
        var sequenceToCheck = sequence,
            reg = new RegExp(recognitionSequence, 'ig'),
            sequenceJoint = this.joinSequenceEndsCheck(sequence, recognitionSequence.length),
            response = [],
            matchOnJoint,
            match;

        while ((match = reg.exec(sequenceToCheck)) !== null) {
            response.push(match);
        }

        while ((matchOnJont = reg.exec(sequenceJoint)) !== null) {
            response.push(matchOnJont);
        }

        return response;
    };

    this.joinSequenceEndsCheck = function(sequence, length) {
        var sequenceToCheckSuffix = sequence.slice(0, length - 1),
            sequenceToCheckPrefix = sequence.slice(sequence.length - length + 1, sequence.length),
            sequenceToCheck = sequenceToCheckPrefix + sequenceToCheckSuffix;

            return sequenceToCheck;
    };

    return this;
};
