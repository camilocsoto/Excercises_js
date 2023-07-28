// instalar fetch node: npm i node-fetch. Fetch es un tipo de promesa
//añadir a package.json type: module. Esto para poder ejecutarlo de forma local. El navegador ya lo trae por defecto
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

// función que llamará asincronicamente la url de api con fetch.

function fetchData(urlAPI) {
    return fetch(urlAPI)
}


//Ejemplo simple: 

fetchData(`${API}/products`) //no es necesario anidar otra función
//sincrónico: se ejecuta en orden.    
.then(response => response.json()) // se convierte a un json para poder leerla tanto el navegador como nosotros
    .then(products => { // palabra reservada que viene en fetch, trae una respuesta por defecto
        console.log('espera');
        console.log(products);
    })
    .then(response => response.json())
    .catch(error => { console.log(error);})
    .finally(() => console.log('done'))


//callback hell con fetch

fetchData(`${API}/products`) //trae todos los productos
.then(response => response.json()) //como viene en array hay que convertirlo a json


.then(products => {
    return fetchData(`${API}/products/${products[0].id}`) //selecciona el primero que se agregue al array
})
.then(response => response.json()) //como viene en array hay que convertirlo a json


.then(product => { 
    console.log(product.title); 
    return fetchData(`${API}/categories/${product.category.id}`) //trae la categoria del producto
})
.then(response => response.json()) //como viene en array se debe convertir a json


.then(category => {
    console.log(category.name); //imprime la categoria
})
.catch(error => console.log(error))
.finally( () => console.log('done'))