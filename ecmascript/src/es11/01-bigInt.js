//usar depués de 16 cifras, ya que después de estas cifras, hay errores
const max = Number.MAX_SAFE_INTEGER // 9007199254740991
const min = Number.MIN_SAFE_INTEGER // -9007199254740991


const galaxyPlanet = 10392184932854809n; //way 1
const peopleTatooine = BigInt(2213455) //way 2: constructor bigInt
console.log(galaxyPlanet);
console.log(peopleTatooine);
