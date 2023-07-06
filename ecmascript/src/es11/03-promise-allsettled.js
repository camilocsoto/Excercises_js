/**mejora de promesas, ejecutar cada una promesa
 * El problema es que Promise.all() se resolverá, si y solo si 
 * todas las promesas fueron resueltas. Si al menos una promesa 
 * es rechazada, Promise.all será rechazada.
 * 
 * Promise.allSettled() permite manejar varias promesas, que 
 * devolverá un array de objetos con el estado y el valor de 
 * cada promesa, haya sido resuelta o rechazada.
*/

const promise1 = new Promise((resolve, reject)=> reject('nel pastel'))
const promise2 = new Promise((resolve, reject)=> resolve('simón we '))
const promise3 = new Promise((resolve, reject)=> resolve('esto es confuso krnal'))

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.table(response))

/**
┌─────────┬─────────────┬──────────────┬─────────────────────────┐
│ (index) │   status    │    reason    │          value          │
├─────────┼─────────────┼──────────────┼─────────────────────────┤
│    0    │ 'rejected'  │ 'nel pastel' │                         │
│    1    │ 'fulfilled' │              │       'simón we '       │
│    2    │ 'fulfilled' │              │ 'esto es confuso krnal' │
└─────────┴─────────────┴──────────────┴─────────────────────────┘
 */