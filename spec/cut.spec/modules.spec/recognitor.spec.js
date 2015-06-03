var recognitor = require('../../../apps/cut/modules/recognitor.js')();

exports.shouldRecognizeSequence = function(test){
    test.expect(1);
    test.equal(recognitor.recognizeSequence('ABC', 'BC'), 1);
    test.done();
};

exports.shouldReturnZero = function(test){
    test.expect(1);
    test.equal(recognitor.recognizeSequence('AAA', 'B'), 0);
    test.done();
};