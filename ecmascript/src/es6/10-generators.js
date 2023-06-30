/**
 * Los for - of son para arreglos
 * Los for - in son para los objetos
 */

function* iterate(array) { //El asterisco indica que es una función iterativa
    for (let value of array) {
        yield value //itera después del valor obtenido anteriormente
    }
}

const it = iterate(['Yoda', 'Docku', 'Anakin', 'Padme', 'Grivous']) 
console.log(it.next().value); //Luego del método next, se le indica la variable del ciclo
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);