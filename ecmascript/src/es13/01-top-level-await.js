/**
 * 1. Instalar en el proyecto node-fetch: libreria para incorporar fetch de forma nativa
 * 
 */
import fetch from "node-fetch"

const response = await fetch('https://api.escuelajs.co/api/v1/products') //get: espera lo que recibimos para ejecutar la siguiente linea

const products = await response.json(); //transofrmar la respuesta en un json y esperar

export {products} //no hubo que usar una función asincrona