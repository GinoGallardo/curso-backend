const SingletonClass = require('./singleton.js')

let clase1 = SingletonClass.getInstance();
let clase2 = SingletonClass.getInstance();

console.log(clase1);
console.log(clase2);