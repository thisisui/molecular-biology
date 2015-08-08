import {Ferrodoxine} from './config/ferredoxin.js';

var ferrodoxine = new Ferrodoxine();
var ferrodoxine2 = new Ferrodoxine();

console.log(ferrodoxine.prototype === ferrodoxine2.prototype)
console.log(ferrodoxine.constructor === ferrodoxine2.constructor)
console.log(ferrodoxine.getStructure === ferrodoxine2.getStructure)