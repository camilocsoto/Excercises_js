/**mejora de promesas, ejecutar cada una promesa
 * El problema es que es opuesto al  Promise.all() se resolverá, 
 * si alguna promesa fue resuelta
 * 
 * Promise.any() permite manejar varias promesas, que 
 * devolverá un array de objetos con el estado y el valor de 
 * cada promesa
*/

const promise1 = new Promise((resolve, reject)=> reject('nel pastel'))
const promise2 = new Promise((resolve, reject)=> resolve('simón we '))
const promise3 = new Promise((resolve, reject)=> resolve('esto es confuso krnal'))

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response)) //la primera que se ejecute
