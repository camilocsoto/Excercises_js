/** Promesas son objetos para trabajar asincronismo
 * regresa una función con 2 funciones dentro: resolve, reject
 */

const promise = new Promise((resolve, reject) => {
    resolve('it works dude')
})
console.log(promise); //Promise {'it works dude}

// then y catch

const venators = 18;

// saber cuántos venators y sí puede cumplir con la promesa de troopers 
const tripulacion = new Promise((resolve, reject) => {
    if(venators>15) {
        resolve(`Hay ${venators} venators. Suficientes para la batalla`);
    } else {
        reject("No hay suficientes venators para una batalla de Yavin");
    }
})

tripulacion.then((result) => {
    console.log(result);
}).catch((error) => {(
    console.log(error));
}).finally(() => {
    console.log('proceso terminado.');
})

/** Reto: función para mostrar un mensaje 2 segundos después. 
 * way 1: promesa - setTimeout - resolve reject
 * way 2: setTimeout - promesa - resolve reject
 * Es recomendable el way 1
 * ambas funcionan, pero en way 2 se debe repetir n cantidad de veces la promesa.
 * 
 */    

function delay(time, message) { //way 1
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve(message);
      }, time)
    })
  }
  function delay(time, message) { //way 2
    return globalThis.setTimeout(() => {
        new Promise ((resolve, reject) => {
            resolve(console.log(message))
        })
    }, time)
  }


delay(4000, 'Hello after 2s')