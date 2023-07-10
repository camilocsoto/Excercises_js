class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    #speak() { //privar esta función para que solo pueda ejecutarse dentro de la clase
        return 'the sith are more powerful'
    }

    get #uName() { //privar
        return this.name
    }

    set #uName(n) { //privar
        return this.name = n
    }

    get #uAge() { //privar
        return this.age
    }

    set #uAge(n) { //privar
        return this.age = n
    }
}
const highRepublic = new user('sidius', 100)
console.log(highRepublic.uAge); //es 100. Pero no 
console.log(highRepublic.uAge = 120); 
/**
 * casos de uso:
 * es común dejar de usar clases y usar arrow functions
 * pero pueden servir para problemas particulares
 */