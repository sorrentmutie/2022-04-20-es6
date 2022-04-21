const libreria = require('./moduleNode');
const libreriaDate = require("./libreriaDate");
const area = libreria.area(5);
console.log(area);
console.log(libreria.circonferenza(6));
const d = libreriaDate.getDay(0);
console.log(d);
console.log(libreriaDate.getMonths());