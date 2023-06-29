// declaración
class User {
}

/* Instanciar un objeto a partir de una clase
*  const newUser = new User()  
*/

// métodos
class user {
    color() {
        return console.log('yellow');
    }
}

const u2 = new user
u2.color()


//constructor: demostración de inicialización
class user {
    constructor() {
        console.log('hello there!');
    }

    name() {
        return console.log('Obi-Wan Kenobi');
    }
}
const u3 = new user()
u3.name()

// this -> elemento padre que lo contiene

class user {
    constructor(caracter) {
        this.caracter = caracter
    }

    balance() {
        return 'light'
    }

    ability() {
        return console.log(this.caracter,'force', this.balance());
    }
}
const u4 = new user('anakin')
u4.ability()

//gettes y setters
class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    speak() {
        return 'the sith are more powerful'
    }

    get uAge() {
        return this.age
    }

    set uAge(n) {
        return this.age = n
    }
}
const highRepublic = new user('sidius', 100)
console.log(highRepublic.uAge); 
console.log(highRepublic.uAge = 120); 
