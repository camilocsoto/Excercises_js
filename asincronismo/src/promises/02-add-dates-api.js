import fetch  from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) { // enviar datos a la api de platzi
    const response = fetch(urlApi, {
        //json que indica las credenciales para poder envíar la información
        method: 'POST',
        mode: 'cors', //autorizado o no.
        credentials: 'same-origin', //default, estandard cuando no hay ninguna autencticación
        headers: {
            'Content-Type': 'application/json' //si enviamos archivos, este cambia
        },
        body: JSON.stringify(data) //mandar la data como text
    })
    return response
}

const article = { //viene por defecto en la api
    "title": "light-saber",
    "price": 500,
    "description": "The green light saber color is perfect to start training you as a Padawan",
    "categoryId": 2,
    "images": ["https://pm1.aminoapps.com/6281/90bba52e78af88e01ccbc1f1c833019f4e413863_hq.jpg"]
  }

postData(`${API}/products`, article)
.then(response => response.json()) //no le pongas console.log! genera un error
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log('done'))

//Comentar: https://api.escuelajs.co/api/v1/products/275,
