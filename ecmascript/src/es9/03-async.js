async function* CloneWars() {
    yield await Promise.resolve('Separatists')
    yield await Promise.resolve('Republic')
    yield await Promise.resolve('Pacific')
}
const status = CloneWars() //status es una palabra reservada
status.next().then(response => console.log(response.value)) 
status.next().then(response => console.log(response.value))
status.next().then(response => console.log(response.value)) //sucede después
console.log('espera...'); //sucede primero


//for await

async function arrayOfWars(wars) {
    for await(let value of wars) {
        console.log(value);
    }
}

const war = arrayOfWars(['Yavin battle', 'Corusant battle', 'Endor battle']) //no impide que el programa explote
console.log('espera....');

//reto

function* CloneWars() {
    yield Promise.resolve('Separatists')
    yield Promise.resolve('Republic')
    yield Promise.resolve('Pacific')
}
const format = CloneWars()
format.next().value.then(response => console.log(response))
format.next().value.then(response => console.log(response))
format.next().value.then(response => console.log(response)) //sucede después
console.log('espera...'); //sucede primero