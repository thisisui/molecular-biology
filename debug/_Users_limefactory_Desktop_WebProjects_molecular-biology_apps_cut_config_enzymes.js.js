
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_eOsFVc, __expression_AeExlR, __block_vqn_nG;
    var store = require('/Users/limefactory/Desktop/WebProjects/molecular-biology/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_eOsFVc = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/enzymes.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_AeExlR = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/enzymes.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_vqn_nG = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/enzymes.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_uDN0TD = function(id, obj) {
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
    __extro_GDshSI = function(id, obj) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/config/enzymes.js');
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
    __statement_eOsFVc(0);
    module.exports = function () {
        __block_vqn_nG(0);
        return __expression_AeExlR(1), {
            config: {
                'AclI': {
                    sequence: 'AA/CGTT'
                },
                'HindIII HindIII-HF\u00ae': {
                    sequence: 'A/AGCTT'
                },
                'SspI SspI-HF\u00ae': {
                    sequence: 'AAT/ATT'
                },
                'MluCI Tsp509I': {
                    sequence: '/AATT'
                },
                'PciI': {
                    sequence: 'A/CATGT'
                },
                'AgeI AgeI-HF\u00ae AgeI-HF\u00ae RE-Mix\u00ae': {
                    sequence: 'A/CCGGT'
                },
                'SexAI': {
                    sequence: 'A/CCWGGT'
                },
                'MluI': {
                    sequence: 'A/CGCGT'
                },
                'HpyCH4IV': {
                    sequence: 'A/CGT'
                },
                'HpyCH4III': {
                    sequence: 'ACN/GT'
                }
            },
            rules: {
                'B': [
                    'C',
                    'G',
                    'T'
                ],
                'D': [
                    'A',
                    'G',
                    'T'
                ],
                'H': [
                    'A',
                    'C',
                    'T'
                ],
                'K': [
                    'G',
                    'T'
                ],
                'M': [
                    'A',
                    'C'
                ],
                'N': [
                    'A',
                    'C',
                    'G',
                    'T'
                ],
                'R': [
                    'A',
                    'G'
                ],
                'S': [
                    'C',
                    'G'
                ],
                'V': [
                    'A',
                    'C',
                    'G'
                ],
                'W': [
                    'A',
                    'T'
                ],
                'Y': [
                    'C',
                    'T'
                ]
            },
            rulesShort: 'BDHKMNRSVWY',
            getSequence: function (sequence) {
                __block_vqn_nG(1);
                return __expression_AeExlR(2), __extro_GDshSI(3, __intro_uDN0TD(3, sequence).replace('/', ''));
            }
        };
    };
}