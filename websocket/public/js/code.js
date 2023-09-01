let socket = io() //variable del server.js - conexión directa entre el servidor y la api del socket- Back
let statusServer
let respServer
let serverMessage = document.getElementById('serverMessage');
let p_status = document.getElementById('status_server')
// métodos: on -> escuchar. emit ->envíar
socket.on('connect', () => { //metodo para validar que la conexión sea correcta
    statusServer = null || 'Enable conection. 🟢';
})
socket.on('disconnect', () => { //metodo para validar que la conexión sea correcta
    statusServer = 'Lost conection. 🟠';
})
socket.emit('enviarMensaje', { //nombre de la variable y el json para enviar info al server
    usuario: '<Front>',
    mensaje: `todo listo para empezar.`
});
socket.on('enviarMensaje', (mensaje) => { //nombre de la variable y el json para escuchar info del server
        serverMessage.innerHTML = `servidor: ${ JSON.stringify(mensaje)}`; //mandar info al front
})
setInterval(() => {
p_status.innerHTML = statusServer;
},2000)
