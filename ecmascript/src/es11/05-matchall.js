/**Regex: validar que una contraseña cumpla con ciertos requisitos, o un correo valido */

const regex = /\b(Satin)+\b/g; //filtrar la palabra Satin en un string

const character = 'Windu, Yoda, Anakin, Satin, Padme, Bo-Katan'

for (const match of character.matchAll(regex)) {
    console.log(match);
}

// devuelve un iterable con todas las coincidencias del string específico a partir de una 
// expresión regular, colocada como argumento.