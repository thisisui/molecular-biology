(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.time('DNA-creation');

var dna = require('./partials/dna.js')();

console.timeEnd('DNA-creation');
},{"./partials/dna.js":3}],2:[function(require,module,exports){
module.exports = function () {

    return {
        nucleobase: {
            cache: ['A', 'G', 'T', 'C', 'U'],
            A: {
                name: 'adenine',
                complementary: 'T'
            },
            G: {
                name: 'guanine',
                complementary: 'C'
            },
            T: {
                name: 'thymine',
                complementary: 'A',
                complementaryAlt: 'U'
            },
            C: {
                name: 'cytosine',
                complementary: 'G'
            },
            U: {
                name: 'uracil',
                complementary: 'G'
            }
        },
        aminoacid: {
            cache: [],
            I: {
                name: 'isoleucine',
                codons: ['ATT', 'ATC', 'ATA']
            },
            L: {
                name: 'leucine',
                codons: ['CTT', 'CTC', 'CTA', 'CTG', 'TTA', 'TTG']
            },
            V: {
                name: 'valine',
                codons: ['GTT', 'GTC', 'GTA', 'GTG']
            },
            F: {
                name: 'phenylalanine',
                codons: ['TTT', 'TTC']
            },
            M: {
                name: 'methionine',
                codons: ['ATG']
            }
        },
        DNA: {
            // 1000000 - 436ms-503ms / 99ms-129ms // after removing function for creating init from range - 77ms-108ms//moving length from config 55-65//moved length into object 28ms-41ms
            // 10000000 - 4259ms-4557ms / 1094ms-1185ms
            // 20000000 - 8154ms-8664ms / 2143ms-2290ms
            // 50000000 - 26911ms-27397ms / after update - no array in complementary checking 10602ms-11162ms (17684ms)
            stringLength: 1000000
        }
    }
};
},{}],3:[function(require,module,exports){
var config = require('../config/config.js')();

module.exports = function () {

    var dna = {
        firstStrand: null,

        stringLength: 10,

        isArray: function (value) {
            return !(value.constructor.toString().indexOf("Array") === -1);
        },

        createStrand: function (strand, isSecond) {
            var i;
            for (i = 0; i < this.stringLength; i++) {
                if (isSecond) {
                    strand[i] = config.nucleobase[this.firstStrand[i]].complementary;
                } else {
                    strand[i] = config.nucleobase.cache[Math.floor(Math.random() * 4)];
                }
            }

            //cache update
            this.firstStrand = strand;

            return strand;
        },

        createDNA: function () {
            var firstStrand = this.createStrand(new Array(this.stringLength));
            var secondStrand = this.createStrand(new Array(this.stringLength), true);

            console.log(firstStrand);
            console.log(secondStrand);
        },

        init: function () {
            this.createDNA();
        }
    };

    dna.init();
};

},{"../config/config.js":2}]},{},[1]);
