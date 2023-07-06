/**
 * 1. estas operando valores númericos
 * 2. hay un error o no se puede ver
 * nulish: pasar un valor por defecto
 */
const num1 = null || undefined
const validate = num1 ?? 5; //pregunta si num1 es nulo, si es así asigna el valor 5
console.log(validate);


// || genera errores con 0, "" ó NaN

const id = 0

const falsey = id || "Sin id"

console.log(falsey) //  'Sin id'

//DEBERÍA ARROJAR 0