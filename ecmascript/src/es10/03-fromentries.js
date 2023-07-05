//Object.entries() convierte un objeto a un array. Ahora se podrá convertir un array de arrays a un objeto

const entries = new Map([['war', 'Yavin'], ['year', '2000']])

console.log(entries);

console.log(Object.fromEntries(entries));