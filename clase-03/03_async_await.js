//Promesas
// const dividirConPromesa = (dividendo, divisor) => {

//   return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
//     console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

//     if (divisor === 0) {
//       reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
//     } else {
//       resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
//       //Tambien podria definir otra funcion y devolver un resultado unico. 
//     }
//   });
// };


// // Usamos el Async y Await
// const funcionAsincronica = async (a, b) => {
//   console.log('Ejecutando div por func Async()');
//   try {
//     let resultado = await dividirConPromesa(a, b)
//     console.log(resultado);
//   } catch (error) {
//     console.log('No se pudo cumplir la promesa, Error: ' + error);
//   }
// }


// // funcionAsincronica(9, 3)
// funcionAsincronica(9, 0)
const multiplicar = (a, b) => {
  return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('No se puede multiplicar por cero')
      } else {
        resolve(a * b)
      }
    })
  }



const multiplicarAsinc = async (a, b) => {
  try {
    let resultado = await multiplicar (a, b)
    console.log(resultado)
  } catch (error) {
    console.log('no se puede multiplicar')
  }
}

multiplicarAsinc(10, 5)