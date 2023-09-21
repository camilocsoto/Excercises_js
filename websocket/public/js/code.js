const socket = io() //objeto del server.js - conexión directa entre el servidor y la api del socket- Back
let statusServer //mensaje que indica la conexión del servidor para luego ser impresa en el HTML
const serverMessage = document.getElementById('serverMessage'); //imprime en el html los mensajes del servidor.
const p_status = document.getElementById('status_server') //párrafo del html para imprimir serverMessage.
const button = document.getElementById('boton')//trae el botón del html
button.addEventListener('click', enviarForm) //cada vez que se haga click en el botón, ejecute la función enviarForm
// métodos: on -> escuchar. emit ->envíar
socket.on('connect', () => { //metodo para validar que la conexión sea correcta
    statusServer = null || 'Enable conection. 🟢';
})
socket.on('disconnect', () => { //metodo para validar que la conexión sea correcta
    statusServer = 'Lost conection. 🟠';
})
socket.emit('enviarMensaje', { //nombre de la variable y el json para enviar info al server
    usuario: '<Front>', //atributos del objeto envíar mensaje
    mensaje: `todo listo para empezar.`
});
function enviarForm(event) {
    const username =document.getElementById('user') //declarar variables
    const textMessage =document.getElementById('message') //scope local, más seguridad.
    socket.emit('enviarMensaje', { //nombre de la variable y el json para enviar info al server
        usuario: username.value, //asignar a los atributos del objeto, los valores que están en el input del formulario
        mensaje: textMessage.value
    });
    event.preventDefault(); //evitar que se actualice la página cada vez que se envíe un mensaje.
}
socket.on('enviarMensaje', (mensaje) => { //nombre de la variable y el json para escuchar info del server
        serverMessage.innerHTML = `servidor: ${ JSON.stringify(mensaje)}`; //recibir información del servidor e imprimirlo en el html
})
setInterval(() => { //insertar un intervalo de tiemppo
p_status.innerHTML = statusServer; //se actualiza cada 2 segundos la variable statusServer y por consiguiente el HTML
},2000)
