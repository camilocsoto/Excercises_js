let socket = io() //variable del server.js - conexión directa entre el servidor y la api del socket- Back
let statusServer
let messageServer
let p_status = document.getElementById('status_server')
// métodos: on -> escuchar. emit ->envíar
socket.on('connect', () => { //metodo para validar que la conexión sea correcta
    console.log("Enable conection.");
    statusServer = null || 'Enable conection. 🟢';
})
socket.on('disconnect', () => { //metodo para validar que la conexión sea correcta
    console.log("Lost conection.");
    statusServer = null || 'Lost conection. 🟠';
})
socket.emit('enviarMensaje', { //nombre de la variable y el json para enviar info al server
    usuario: 'Admin',
    mensaje: `-------------Para comunicarte con el servidor----------------
    socket.emit('enviarMensaje', { 
        usuario: 'Admin',
        mensaje: 'hola mundo'
    }
    -------------------------------------------------------------------------`
});
messageServer = socket.on('enviarMensaje', (mensaje) => { //nombre de la variable y el json para escuchar info del server
    console.log('servidor: ',mensaje );
})
setInterval(() => {
p_status.innerHTML = statusServer;
console.log(statusServer);
},2000)