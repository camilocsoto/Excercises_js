//antes 
function newUser(name, age, country) {
    var name = name || 'Oscar'
    var age = age || 34
    var country = country || 'Mexico'
    //console.log(name, age, country)
}
newUser();

//ahora 
function newAdmin(name = 'Camilo', age = 20, country = 'CO') {
    console.log(name, age, country);
}

newAdmin()
newAdmin('Freddy',37, 'CO')

//ambas funcionan igual, pero es más práctico ahora.