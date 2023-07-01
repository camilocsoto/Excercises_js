/*
* Spread syntax: desestructura -> deconstruye
* Rest syntax: empaqueta -> construye
*/

//arrays destructuring

let cars = ['byd', 'Mazda']
let [a,b] = cars //declaración de desestructurar.
console.log(a,b);
//console.log(cars[0],cars[1]);


//object destructuring
let user = {
    username: 'crydant1',
    pass: '3L_camino'
}
let {username, pass} = user; //declaración de desestructurar.
console.log(username, pass);
//regresa crydant1, 3l_camino, sin traer todo el objeto o el array

// spread opearator

let person = {name: 'Juan', age: 20}
let country = 'CO'
let data = {id:1, ...person, country} //spread ...var
console.log(data);

// rest params

function sum(num, ...values) {
    console.log(values);
    console.log(num+values[0]);
    return num + values[0]
}

sum(1,1,2,3)

// playground = imprimir dos json con el spread

export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado"
    },
    json2 = {
      age: 12,
      color: "Blanco"
    }) {
    return { ...json1, ...json2 }  
  }
  solution()