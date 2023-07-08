//Habia un problema de incompatibilidad, y globalThis arregla esto: es un objeto compatible para cualquier plataforma 

console.log(window) //Accede solo mediante el navegador
console.log(global); // Accede solo mediante node
console.log(self); //Accede solo mediante web maker
console.log(globalThis); //Accede de todos lados


/**
El motor de JavaScript, aquel que compila tu archivo y lo 
convierte en código que entiende el computador, al iniciar 
la compilación crea un objeto global.

El objeto global proporciona funciones y variables propias e 
integradas en el lenguaje o el entorno. Dependiendo la plataforma, 
este objeto global tendrá un nombre diferente.
 */