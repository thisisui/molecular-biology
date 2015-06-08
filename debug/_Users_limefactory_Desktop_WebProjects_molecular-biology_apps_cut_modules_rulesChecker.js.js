
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_LNsw2r, __expression_DZA56A, __block_qkbJtS;
    var store = require('/Users/limefactory/Desktop/WebProjects/molecular-biology/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_LNsw2r = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/rulesChecker.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_DZA56A = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/rulesChecker.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_qkbJtS = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/rulesChecker.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_oKm6RZ = function(id, obj) {
        // console.log('__intro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        (typeof obj === 'object' || typeof obj === 'function') &&
            Object.defineProperty && Object.defineProperty(obj, '__instrumented_miss', {enumerable: false, writable: true});
        obj.__instrumented_miss = obj.__instrumented_miss || [];
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (obj.length === 0) {
                // console.log('interim miss: ', id);
                obj.__instrumented_miss[id] = true;
            } else {
                obj.__instrumented_miss[id] = false;
            }
        }
        return obj;
    };
    function isProbablyChainable(obj, id) {
        return obj &&
            obj.__instrumented_miss[id] !== undefined &&
            'number' === typeof obj.length;
    }
    __extro_htwz6K = function(id, obj) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/rulesChecker.js');
        // console.log('__extro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (isProbablyChainable(obj, id) && obj.length === 0 && obj.__instrumented_miss[id]) {
                // if the call was not a "constructor" - i.e. it did not add things to the chainable
                // and it did not return anything from the chainable, it is a miss
                // console.log('miss: ', id);
            } else {
                fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
            }
            obj.__instrumented_miss[id] = undefined;
        } else {
            fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
        }
        return obj;
    };
};
////////////////////////

// Instrumented Code
{
    __statement_LNsw2r(0);
    var enzymes = (__expression_DZA56A(1), (__expression_DZA56A(2), require('./../config/enzymes.js'))());
}
{
    __statement_LNsw2r(3);
    module.exports = function () {
        __block_qkbJtS(0);
        {
            __statement_LNsw2r(4);
            this.replaceAt = function (source, index, character) {
                __block_qkbJtS(1);
                return __expression_DZA56A(5), (__expression_DZA56A(6), (__expression_DZA56A(7), __extro_htwz6K(8, __intro_oKm6RZ(8, source).substr(0, index)) + (__expression_DZA56A(9), character)) + __extro_htwz6K(10, __intro_oKm6RZ(10, source).substr((__expression_DZA56A(11), (__expression_DZA56A(12), index) + character.length))));
            };
        }
        {
            __statement_LNsw2r(13);
            this.hasMultipleSequences = function (recognitionSequence) {
                __block_qkbJtS(2);
                {
                    __statement_LNsw2r(14);
                    var value = (__expression_DZA56A(15), __extro_htwz6K(16, __intro_oKm6RZ(16, recognitionSequence).match(new RegExp((__expression_DZA56A(17), (__expression_DZA56A(18), '[' + enzymes.rulesShort) + ']'), 'gi'))) || 0);
                }
                return __expression_DZA56A(19), (__expression_DZA56A(20), value.length > 1);
            };
        }
        {
            __statement_LNsw2r(21);
            this.simpleProcessSequence = function (recognitionSequence) {
                __block_qkbJtS(3);
                {
                    __statement_LNsw2r(22);
                    var sequences = [], isValid = true;
                }
                for (var key in enzymes.rules) {
                    __block_qkbJtS(4);
                    if (__extro_htwz6K(23, __intro_oKm6RZ(23, enzymes.rules).hasOwnProperty(key))) {
                        __block_qkbJtS(5);
                        if (__expression_DZA56A(24), __extro_htwz6K(25, __intro_oKm6RZ(25, recognitionSequence).indexOf(key)) !== (__expression_DZA56A(26), -1)) {
                            __block_qkbJtS(6);
                            {
                                __statement_LNsw2r(27);
                                isValid = false;
                            }
                            for (var i = 0; __expression_DZA56A(28), (__expression_DZA56A(29), i) < enzymes.rules[key].length; __expression_DZA56A(30), i++) {
                                __block_qkbJtS(7);
                                {
                                    __statement_LNsw2r(31);
                                    __extro_htwz6K(32, __intro_oKm6RZ(32, sequences).push(__extro_htwz6K(33, __intro_oKm6RZ(33, this).replaceAt(recognitionSequence, __extro_htwz6K(34, __intro_oKm6RZ(34, recognitionSequence).indexOf(key)), enzymes.rules[key][i]))));
                                }
                            }
                        }
                    }
                }
                if (__expression_DZA56A(35), isValid) {
                    __block_qkbJtS(8);
                    {
                        __statement_LNsw2r(36);
                        __extro_htwz6K(37, __intro_oKm6RZ(37, sequences).push(recognitionSequence));
                    }
                }
                return __expression_DZA56A(38), sequences;
            };
        }
        {
            __statement_LNsw2r(39);
            this.advancedProcessSequence = function (recognitionSequence, sequences) {
                __block_qkbJtS(9);
                {
                    __statement_LNsw2r(40);
                    var sequencesTemp = [], value = (__expression_DZA56A(41), __extro_htwz6K(42, __intro_oKm6RZ(42, recognitionSequence).match(new RegExp((__expression_DZA56A(43), (__expression_DZA56A(44), '[' + enzymes.rulesShort) + ']'), 'gi'))) || 0);
                }
                if (__expression_DZA56A(45), value) {
                    __block_qkbJtS(10);
                    {
                        __statement_LNsw2r(46);
                        sequencesTemp = __extro_htwz6K(47, __intro_oKm6RZ(47, this).simpleProcessSequence(recognitionSequence));
                    }
                    for (var i = 0; __expression_DZA56A(48), (__expression_DZA56A(49), i) < sequencesTemp.length; __expression_DZA56A(50), i++) {
                        __block_qkbJtS(11);
                        {
                            __statement_LNsw2r(51);
                            __extro_htwz6K(52, __intro_oKm6RZ(52, this).advancedProcessSequence(sequencesTemp[i], sequences));
                        }
                    }
                } else {
                    __block_qkbJtS(12);
                    {
                        __statement_LNsw2r(53);
                        __extro_htwz6K(54, __intro_oKm6RZ(54, sequences).push(recognitionSequence));
                    }
                }
                return __expression_DZA56A(55), sequences;
            };
        }
        {
            __statement_LNsw2r(56);
            this.prepare = function (recognitionSequence) {
                __block_qkbJtS(13);
                {
                    __statement_LNsw2r(57);
                    var sequences = [];
                }
                if (__extro_htwz6K(58, __intro_oKm6RZ(58, this).hasMultipleSequences(recognitionSequence))) {
                    __block_qkbJtS(14);
                    {
                        __statement_LNsw2r(59);
                        sequences = __extro_htwz6K(60, __intro_oKm6RZ(60, this).advancedProcessSequence(recognitionSequence, sequences));
                    }
                } else {
                    __block_qkbJtS(15);
                    {
                        __statement_LNsw2r(61);
                        sequences = __extro_htwz6K(62, __intro_oKm6RZ(62, this).simpleProcessSequence(recognitionSequence));
                    }
                }
                return __expression_DZA56A(63), sequences;
            };
        }
        return __expression_DZA56A(64), this;
    };
}