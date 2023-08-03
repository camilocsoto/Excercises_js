import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'; //RUT de la API, mayusc significa inmutable

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function* productsApi (urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`)
        for (let i = 0; i < products.length; i++) {
            const product = await fetchData(`${urlApi}/products/${products[i].id}`)
            const category = await fetchData(`${urlApi}/categories/${product.category.id}`)    
            yield console.log(product.title);
            yield console.log(product.description);
            yield console.log(category.name);
    
        }
    } catch (error) {
        console.error('error '+error);
    }   
}
const generators = productsApi(API)
generators.next().value;