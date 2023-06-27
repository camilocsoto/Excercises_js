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

