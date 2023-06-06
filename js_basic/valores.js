/** ¡¡SCOPE!! = Alcance que tienen las variables
 * Scope global = Se puede acceder globalmente
 * Scope local  ? Solo se pudede acceder si entra al lugar donde está
*/

/**
 * Las funciones por su parte podemos verlas como sui fueran un chef a la cual nosotros les damos ingredientes ¡y el chef mágicamente nos devuelve una tarta ya hecha!
 */

var name = "nodens"; // global

function names () {
    var lastnames = "Slee"; //local
    console.log(name +" " + lastnames);
}

//No se puede entrar a la variable lastname, solo se puede entrar por el método. En java se parece al encapsulamiento


    /** ¡¡Hoisting!! = Declarar variables y funciones en un orden  que puede o no ser leído
     * Se llama una variable o función antes de ser definida o inicializada
     * Al no estar en un orden jerarquico, la variable o función adquiere el valor"undefined""
     */

    console.log(namefield);
    var namefield = "False";

    //Por eso siempre se deben declarar funciones y variables al comienzo del archivo, como un glosario


    /** coerción = Obligar directa o indirectamente un tipo de variable
     * Recuerda ver los cambios con "typeof"
     */
    //son implicitas
    var a = 4+"7";
    typeof a; // string

    var b = 4*"7";
    typeof b; // num

    //son explicitas

    var ab = 20;
    typeof ab; //num

    var c =String(ab);
    typeof c; //string gracias al método :o

    var d = Number(c);
    typeof d; //ya no es string, es num
    
/** Operadores
 * Operaciones básicas
 */
//Binarios
3+2-1/1*3

13=="13"; // true
13==="13" //false

a && b; //si ambas son correctas, es true
a || b; // si alguna de las dos es correcta, true

//Unitarios

!true; //false

var num = 32
num++; // 33
num+=2 //34

   /** Truthy or Falsy
    * Bajo qué circunstancias se obtiene false o true: este no es un primitivo
    */ 
   //false
boolean(0); //false
boolean(null); //false
boolean(NaN); //false
boolean(undefined); //false
boolean(false); //false
boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
boolean(1); //true par cualquier número diferente de cero (0)
boolean("a"); //true para cualquier caracter o espacio en blanco en el string
boolean([]); //true aunque el array esté vacío
boolean({}); //true aunque el objeto esté vacío
boolean(function(){}); //Cualquier función es verdadera también


let articles = [
    { nombre : "bici", costo : 3000 },
    { nombre : "TV", costo : 1000 },
    { nombre : "Libro", costo : 100 }, 
    { nombre : "Smartphone", costo : 3200 },
    { nombre : "Laptop", costo : 20000 },
    { nombre : "Teclado", costo : 100 }    
];

function print() {
    articles.forEach(function(article){
        console.log(article.nombre, article.costo)  
       });
}