//enhace object literals

function newUser(user, age, country, uId) {
    return {
        user, //forma directa
        age,
        country,
        id:uId
        /*
        user:user,
        age:age,
        country:country
        */ 
    }
}
console.log(newUser('Cami', 20, 'CO', 1));