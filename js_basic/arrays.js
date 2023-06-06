var frutas = ["Manzana","naranja","cerezas","Bananos"];

console.log(frutas) //mostrar el contenido del array

console.log(frutas.length); //Muestra la cantidad de posiciones en el array

console.log(frutas[2]) //Acceder a las posiciones del array 

/** Métodos súper importantes
 * push 
 * pop
 * unshift
 * shift
 * indexOf
 * ......
 * filter
 * map
 * find
 * forEach
 * some
*/

var addFruits = frutas.push("Uvas") //Añadir un elemento al final del array

var deleteFruits = frutas.pop("cerezas") //Quitar el ultimo index

var changeFruits =frutas.unshift("Uvas") //Agregar un elemento al comienzo del array

var deleteIni = frutas.shift("durazno") //Elimina el primer index del array

var position = frutas.indexOf("Bananos"); //Conocer el index de un elemento en específico

/**
 * Métodos de recorridos de Arrays.
 *- Instansiar objetos en arrays 
 */
 var articles = [
     { nombre : "bici", costo : 3000 },
     { nombre : "TV", costo : 1000 },
     { nombre : "Libro", costo : 100 }, 
     { nombre : "Smartphone", costo : 3200 },
     { nombre : "Laptop", costo : 20000 },
     { nombre : "Teclado", costo : 100 }    
 ];


 /**Función  filter
  *Crear una variable que guarde un array, con el filtro definido en la función
  No modifica el array original, solo lo copia
  trae varias posiciones del array como resultado
*/
 var filtrarVariable = articles.filter(function (article) {
    return article.costo <=500
 });

 /** Función Map
  * Puede transoformar ese array de objetos, a un array de strings
  */

 var mapearVariable = articles.map(function(article2) {
    return article2.nombre
 });

/** Función find
 * Trae un solo resultado del array
 */
 var encontrarVariable = articles.find(function(article) {
   return article.nombre === "TV"
 });

/** función forEach
 * devuelve una lista con el atributo que le pasemos
 * útil para los buscadores
 * NO NECESITA DECLARARSE CON UNA VARIABLE
 */

 articles.forEach(function(article){
  console.log(article.nombre)  
 });

 /** Función some
  * Nos devuelve true o false
  * útil para iniciar algun ciclo sin gastar memoria
  */

 var algunaVariable = articles.some(function(article) {
   return article.costo <=40
 });

