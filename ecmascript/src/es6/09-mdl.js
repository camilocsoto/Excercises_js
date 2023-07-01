//determinar si es un sith o un jedi
const typeOfPort =() => {
    console.log('It is a jedi');
}
export default typeOfPort

//Playground project = llamar esta función asincronica al otro módulo
export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}