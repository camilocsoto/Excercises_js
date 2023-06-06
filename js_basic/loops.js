var stu = [
    "jonas",
    "dave",
    "mcGregor",
    "christensen",
]
function salu2 (students) {
    console.log(`hi dear ${stu}`)
}

for(var i=0;i < stu.length;i++) {
    salu2(stu[i]);
}
// --------------------------------
for (var students of stu) { //La primer variable va en singular, la segunda es un grupo por tanto es plural
    salu2(`hola, ${stu}`)
}

/**
 * Ambos ciclos se ocupan el for y el while. Con for podemos definir un 
 * fin de intentos y con el while mientras se cumpla que lo siga haciendo. 
 * Es como decir en while sería, seguir cocinando el pollo mientras siga crudo, 
 * realmente no sabemos cuando estará cocinado. Si usáramos for podría quedarnos 
 * crudo o muy quemado, a menos que fueras un super experto.
 */

 var stu = [
    "jonas",
    "dave",
    "mcGregor",
    "christensen",
]
function salu2 (students) {
    console.log(`hi dear ${stu}`) //interpolar variables
}

while (stu.length > 0) {
    console.log(stu);
    var estudiante = stu.shift();
    salu2(estudiante)
}
