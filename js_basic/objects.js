
// Constructor para hacer un template del objeto
function auto (marca, model, agno) {
    this.marca = marca, //Recuerda que el this es una variable que se referencia del objeto
    this.model = model,
    this.agno = agno
}
 /**
     * variable = atributo que se menciona en la funcion
     * crear una función apartir del template:
     */
var newCar1 = new auto("Tesla", "Model 3", 2023);//new sirve para crear una instancia de la función constructora
var newCar2 = new auto("Tesla", "Model X", 2018);
var newCar3 = new auto("Tesla", "Model Y", 2021)



/**
 * FORMA MANUAL
 */

var car = {
    marca : "Audi",
    model : "coupe 3",
    agno : 2020,
    detailCar: function() {
        console.log(`It's an ${this.marca} its model ${this.model} from the year ${this.agno}`) //El this es una variable que se referencia del objeto
    }
};

//Para acceder a un atributo/ propiedad:
car.agno;

// Para acceder a una funcion del objeto
car.detailCar()

//Ejercicio = con arrays llenar un objeto

var brand = ["bmw","KIA","Mazda","Tesla","Mercedez","Ford","Toyota","Renault"]
var model = ["A600","sportage","cx30","Model X","A350","Focus","Xtrail","Sandero GT"]
var year = ["2017","2022","2020","2017","2021","2019","2013","2015"]

function autos(brand, model, year) {
    this.brand = brand,
    this.model = model,
    this.year = year
}
 function detailAuto() {
    for(i=0;brand.length > i && model.length > i && year.length > i;i++) {
        var newCar4 = new autos(brand[i], model[i],year[i])
        console.log(newCar4) //.brand +", " + newCar4.model + ", " + newCar4.year
    }
}

