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