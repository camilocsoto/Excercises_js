const countries = {
    mx: 'México',
    co: 'Colombia',
    cl: 'Chile',
    pe: 'Perú'
}

console.log(Object.entries(countries));
/*devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.*/

console.log(Object.keys(countries)); // extrae en un array la propiedad: mx, co, pe

console.log(Object.values(countries)); //extrae en un array el valor: méxico..,