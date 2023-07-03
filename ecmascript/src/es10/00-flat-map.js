/** 
 * flat map devuelve una matriz de cualquier submatriz
 * matriz = arreglo..
 * y con ello vamos a tener arreglos anidados dentro de arreglos y con esto tenemos una matriz.
 * ¿Cómo podemos aplanarla?
*/
const warriors = [
['yedi master', 'jedi knight','jedi padawan', 
['jango fett clones', 'troopers', 'senator protector', 
['Wookies', 'mon-kalamari']]]]

//Flat aplanarla y mostrarla por capas de profundidad, en este caso son 3. Pero también puedes pasarle infinity

console.log(warriors.flat(Infinity)); 


//flatmap pide una función para realizar una transformación, aquí el valor v (v)
const numbers = [5,10,15,20, [2]]
console.log(numbers.flatMap(v => [v, v * 2])); 