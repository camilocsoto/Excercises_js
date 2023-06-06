let h1 = document.querySelector('h1')
let pid = document.getElementById('pid')
let pclass = document.querySelector('.pclass')
let input = document.querySelector('input')

console.log({h1, pid, pclass, input});//un "objeto"

pclass.innerText= 'ey you, <br> walking there in front'

pclass.getAttribute('pantalla');  //obtienes el atributo 
pclass.setAttribute('pantalla' , 'samsung') //cambiar atributo, valor

pid.classList.add('try')
pid.classList.remove('try')
// pid.classList.toggle('try') Dependiendo si esta creado o no, lo crea o lo elimina.
//pid.classList.contains('try') true o false 
input.value='type what do you want'

const img = document.createElement('img')
img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistagq.com%2Fnoticias%2Farticulo%2Fdarth-vader-influencias&psig=AOvVaw2RQO84BSXPXT11p6et0Qoi&ust=1682998491109000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj90YuY0_4CFQAAAAAdAAAAABAE')
pid.innerHTML=""
pid.appendChild(img)

//----------------------------------------------------------------------------------
const form = document.querySelector('#form')
let inpCalcular1 = document.querySelector('.inpCalcular1')
let inpCalcular2 = document.querySelector('.inpCalcular2')
let btnCalcular = document.getElementById('btnResultado')
let mostrarResultado = document.getElementById('results')

form.addEventListener('submit', sumar)

function sumar(event) { //Por defecto, trae un argumento con la respuesta
console.log({event});
event.preventDefault(); //No deja que ejecuten sus acciones por defecto. (recargar y envíar datos por url)
    let inp1 = parseInt(inpCalcular1.value);
    let inp2 = parseInt(inpCalcular2.value);
    mostrarResultado.innerText = 'suma es: '+ (inp1 +inp2);
} 
 

