const moment = require('moment')

let fechaActual = moment()

let fechaNacimiento = moment("22121982", "DDMMYYYY").calendar();

let fechaValida =  moment("2011-10-10T10:20:30");
fechaValida.isValid(); // false
fechaValida.invalidAt(); // 5 for seconds

let cantidadDiasVida = fechaActual.diff(fechaNacimiento, 'days')

console.log(fechaActual);
console.log(fechaNacimiento);
console.log(fechaValida);
console.log(cantidadDiasVida);