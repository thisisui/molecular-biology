
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_hGg3xX, __expression_vjWncW, __block_p4XNr8;
    var store = require('/Users/limefactory/Desktop/WebProjects/molecular-biology/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_hGg3xX = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/recognitor.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_vjWncW = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/recognitor.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_p4XNr8 = function(i) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/recognitor.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_SmNFGS = function(id, obj) {
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
    __extro_MSC$ge = function(id, obj) {
        var fd = store.register('/Users/limefactory/Desktop/WebProjects/molecular-biology/apps/cut/modules/recognitor.js');
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
    __statement_hGg3xX(0);
    module.exports = function () {
        __block_p4XNr8(0);
        {
            __statement_hGg3xX(1);
            this.recognizeSequence = function (sequence, recognitionSequence) {
                __block_p4XNr8(1);
                {
                    __statement_hGg3xX(2);
                    var matched = __extro_MSC$ge(3, __intro_SmNFGS(3, sequence).match(new RegExp(recognitionSequence, 'gi')));
                }
                return __expression_vjWncW(4), (__expression_vjWncW(7), matched) ? (__expression_vjWncW(5), matched.length) : (__expression_vjWncW(6), 0);
            };
        }
        return __expression_vjWncW(8), this;
    };
}