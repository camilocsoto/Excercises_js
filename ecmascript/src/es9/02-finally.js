const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        if (true) { //dependiendo de este valor, la promesa cambia y por ende el mensaje también
            resolve('It workd dude')
        } else {
            reject('F, it didnt works')
        }

    })
}
anotherFunction()
    .then(response => console.log(response))
    //pueden ir más
    .catch(error => console.log(error))
    .finally(() => console.log('Finally')) //<-- Es este el nuevo concepto, es recomendable usar como un alert diciendo que ya acabó el proceso
    