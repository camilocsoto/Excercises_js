import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'; //RUT de la API, mayusc significa inmutable

async function fetchData(urlApi) {
    const response = await fetch(urlApi) 
    const data = await response.json()
    return data //fetch utiliza el concepto de las promesas: resolve reject
}

const articles = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`) //accede al id de la categoria que tiene el art

        console.log(product.title);
        console.log(product.description);
        console.log(category.name);
    } catch(error) {
        console.error(error)
    }
}
articles(API)