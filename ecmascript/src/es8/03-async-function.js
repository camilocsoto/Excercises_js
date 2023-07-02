const promisefn = () => {
    return new Promise((resolve, reject) =>{
        (true) //if {}
        ? setTimeout(()=>resolve('operador ternario ?: Funcionó!'), 2000) //en dos segundos determina si funcionó
        : reject(new Error('operador ternario else (:) error'));// else{}, manejo de errores con new Error
    })
}

const asyncAwait = async () => {
    const awaitConcept = await promisefn(); //espera para EJECUTAR la función promesa
    console.log(awaitConcept); 
    console.log('parece que ya...'); 
}
// ver flujo completo
console.log('espera...');
asyncAwait()
console.log('esperaaa...'); //no va a bloquear y el programa continúa 
/**
 * bloques de código consecuntes y que no sean bloqueantes
 * debe ponder ejecutar estas lineas independientemente de lo que pase en la promesa
 */