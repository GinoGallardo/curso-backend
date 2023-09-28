//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];
// console.log("Valores Originales:");
// console.log(valoresOriginales);


let nuevosValores = valoresOriginales.map(x => x + 1);
// console.log(nuevosValores);

//Otras operaciones
let otrosValores = valoresOriginales.map(x => x * 2); //[2, 4, 6, 8, 10]
let masValores = valoresOriginales.map(x => x + "a");
// console.log(masValores);

//Que pasa si declaramos el callback fuera?
const mapCallBack = (valor) => {
  if (valor % 2 === 0) {
      return valor;
  } else {
      return "No es par!"
  }
};

const suma = (a, b) => a + b;

const evaluarParesMap = valoresOriginales.map(mapCallBack);
// console.log(evaluarParesMap);

