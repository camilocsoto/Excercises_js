function venators(troopers, walkings) {
    return troopers + walkings; // función normal
}
function totalUnits(troopers, walkings, functionVenators) { // callback
    return functionVenators(troopers, walkings) //recibe como argumento a una función
}
/** para invocar el callback:
 * la función que va hacer callback, debe tener un argumento para la otra función
 * no se le ponen los parentesis a la función a invocar para no ejecutarla de inmediato
 * no es necesario pasarle los argumentos a venators, para eso es el callback
 */
console.log(totalUnits(501, 200, venators)); 

//playground

function callback() { //default
    return 'Excecute log after 2s'
}
function execCallback(call) { //crear
    globalThis.setTimeout(()=>{
        console.log(callback())
    }, 2000)
}
execCallback(callback)