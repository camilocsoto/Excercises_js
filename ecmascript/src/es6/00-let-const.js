//declarar y asignar
var lastName = 'Downt'
lastName = 'Age' // reasignación
console.log(lastName); //reasigna valor

//declarar y asignar
let fruit = 'apple'
fruit = 'kiwi' // reasignación
console.log(fruit); //reasigna valor

/**
 * const animal = 'cat'
 * animal = 'dog'
 * console.log(animal); //no reasigna valor
 */


const fruits = () => {
if (true) {
        var fruit1 = 'apple' //scope global - function scope
        let fruit2 = 'kiwi' //scope local - block scope
        const fruit3 = 'banana' //scope local - block scope
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}

fruits();
    
