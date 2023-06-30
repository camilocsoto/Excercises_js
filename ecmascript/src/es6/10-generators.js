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



//reto playground = una tienda de gatos necesita identificar con un código distinto a cada michi sin que se repita todo el tiempo el proceso
export function* getId() {
    for (let id = 1; true; id++) { //para que se repita infinitamente
      yield id 
    }
  }
  const serial = getId()
  console.log(serial.next().value)
  

  //forma corta y sencilla
  export function* getId() {
    let lastId=1;
    while (true) {
      yield lastId++;
    }
  }
  const serial2 = getId()
  console.log(serial2.next().value)
  