const message = 'Star Trek es la mejor serie de ciencia ficción que existe en toodo el mundo'

const replaceMesagge = message.replace('Star Trek', 'Star wars')

const replaceAllMessage = replaceMesagge.replaceAll(' ', '-')

console.log(replaceMesagge); // Star wars es...

console.log(replaceAllMessage); // Star-wars-es...