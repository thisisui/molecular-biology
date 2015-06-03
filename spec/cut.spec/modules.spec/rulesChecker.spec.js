var rulesChecker = require('../../../apps/cut/modules/rulesChecker.js')();

exports.prepareSimple = function (test) {
    test.expect(1);
    test.deepEqual(rulesChecker.prepare('AGCCGA'), ['AGCCGA']);
    test.done();
};

exports.prepareWithOneSpecific = function (test) {
    test.expect(1);
    test.deepEqual(rulesChecker.prepare('AGCCGB'), ['AGCCGC', 'AGCCGG', 'AGCCGT']);
    test.done();
};

//exports.prepareWithManySpecific = function (test) {
//    test.expect(1);
//    test.deepEqual(rulesChecker.prepare('AGCCBB'), ['AGCCGC', 'AGCCGG', 'AGCCGT']);
//    test.done();
//};