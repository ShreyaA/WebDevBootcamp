// var generateName = require("sillyname");

import generateName from "sillyname";
var sn = generateName();
console.log(`My name is ${sn}`);

import superheroes from "superheroes";
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
console.log(`I am ${superheroes.random()}`);