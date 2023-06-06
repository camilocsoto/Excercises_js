
var rock = 0
var papper = 1
var sissors = 2
var answer;

function play (choise) {
    var min = 0
    var max = 3
    var alet = Math.floor(Math.random() * (max - min) + min); //Generar un número aletorio entre 0 y 2
    //decir la variable

    switch (choise==alet) {
        case rock == choise:
            console.log("rock") //decir la variable
            switch (choise==alet) {
                case alet == 0:
                    console.log("CPU: rock");
                    console.log("tie");
                break;
                case alet == 1:
                    console.log("CPU: papper");
                    console.log("lose");
                break;
                case alet == 2:
                    console.log("CPU: sissors");
                    console.log("win");
                break;
            }
        break;
            
        case papper == choise:
            console.log("papper") //decir la variable
            switch (choise==alet) {
                case alet == 0:
                    console.log("CPU: rock");
                    console.log("win");
                break;
                case alet == 1:
                    console.log("CPU: papper");
                    console.log("lose");
                break;
                case alet == 2:
                    console.log("CPU: sissors");
                    console.log("win");
                break;
            }
        break;
            
        case sissors == choise:
            console.log("sissors") //decir la variable
            switch (choise==alet) {
                case alet == 0:
                    console.log("CPU: rock");
                    console.log("lose");
                break;
                case alet == 1:
                    console.log("CPU: papper");
                    console.log("win");
                break;
                case alet == 2:
                    console.log("CPU: sissors");
                    console.log("tie");
                break;
            }
            break;
            default:
                console.log("Not valid option");
            break;
        }
    }