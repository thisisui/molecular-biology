import {loadXMLDoc} from './../utils/xml.loader.js';
import {ProteinParser} from './modules/proteinParser.js';

let fileHelper = new loadXMLDoc(); //Ferrodoxin
let ferredoxin = new ProteinParser(JSON.parse(fileHelper.loadXMLDoc('./config/P00221.xml')));
let cytochrome = new ProteinParser(JSON.parse(fileHelper.loadXMLDoc('./config/P00051.xml')));

console.log('The sequence of protein '+  ferredoxin.name+': ' + ferredoxin.sequence);
console.log('The sequence of protein '+  cytochrome.name+': ' + cytochrome.sequence);