/** pasos
 * instalar xml http request: npm i xmlhttprequest
 * forma larga y vieja de hacer una petición 
 * es preferible usar fetch
 */

const ajax = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //RUT de la API, mayusc significa inmutable

//Func principal para recibir info del producto como un objeto de la api

function fetchData(urlApi, callback) { //el primer parametro no puede ser API, puede dar error.
    let xhttp = new  ajax()
    xhttp.open('GET', urlApi, true) //abre una conexión a la api(tipo de petición, url a utilizar, función asincronica o sincrónica )
    xhttp.onreadystatechange = function (event) {
        /** estados de un xml http request
         * 0 -> se ha inicializado
         * 1 -> cargando send()
         * 2 -> send () cargado
         * 3 -> valida si existe alguna descarga
         * 4 -> completado
         ** solicitudes en un servidor
         * 1xx -> petición recibida y procesando
         * 2xx -> petición procesada
         * 3xx -> hacen falta unos pasos adicionales
         * 4xx -> cliente hizo algo mal
         * 5xx -> servidor hizo algo mal
         */
        if(xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                callback(null, JSON.parse(xhttp.responseText)) //transormar la info recibida de un text a un json    
            } else {
                const error = new Error('error:' + urlApi) 
                // error es un objeto para consultar las excepciones del cliente. Y, la api es quien debe responder, en la función es urlApi
                return callback(error, null) 
            } 
        } 
    }
xhttp.send() //IMPORTANTE QUE SE EJECUTE EL AJAX
}

// Sobreingenieria: hacer 3 peticiones para obtenerlas desde la primera petición
fetchData(`${API}/products`, (error1, data1) => { 
    if (error1) return console.log(error1); //detener el proceso si hay un error

    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if (error2) return console.log(error2) //detener el proceso si hay un error

        fetchData(`${API}/categories/${data2?.category?.id}/`, (error3, data3) => {
            if (error3) return console.log(error3); //detener el proceso si hay un error
            console.log(data1[0]); 
            console.log(data2?.title);
            console.log(data3.name);//callback hell
        })
    }) 

}) //acceder a variable products, función anónima 

/** Ejecutar desde la terminal: node src/callback/02-challenge.js
 * --------------------------------------------------------------
 * Pasos para ejecutarlo de forma nativa con node
 * abre el package.json
 * en el json scripts, escribe:
 * "callback": "node src/callback/02-challenge.js" 
 * en terminal escribe: npm run callback
 * warning: si no guardan los cambios en package.json, es porque algo salió mal
 */