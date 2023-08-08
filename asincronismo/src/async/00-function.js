const deathStarStatus = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('The death star has been finished!'),2000)
        : reject(new Error('The death star has been destroyed'))
    })
}
const times = async () => {
    console.log('The Andor battle is strating');
    const resistance = await deathStarStatus()
    console.log(resistance);
}
times()
console.log('---------');
// console.log(times()); Promise { <pending> }

//playground: dependiendo de si una url está bien o mal: generar una función que la valide.
const API = 'https://api.escuelajs.co/api/v1/products'
async function runCode(url) {
    try {
      new URL(url);
      const response = await fetch(url);
      return response.json();
     } catch(error) {
       if (error.message === "Failed to construct 'URL': Invalid URL"){
         throw new Error('Invalid URL');
       } else {
         throw new Error('Something was wrong');
       }
     }
  }
  runCode(API)