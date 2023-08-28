let socket = io() //variable del server.js - conexión directa entre el servidor y la api del socket- Back
// métodos: on -> escuchar. emit ->envíar
socket.on('connect', () => { //metodo para validar que la conexión sea correcta
    console.log("Enable conection.");
})
socket.on('disconnect', () => { //metodo para validar que la conexión sea correcta
    console.log("Lost conection.");
})
socket.emit('enviarMensaje', { //nombre de la variable y el json para enviar info al server
    usuario: '',
    mensaje: 'hola mundo'
})
socket.on('enviarMensaje', (mensaje) => { //nombre de la variable y el json para escuchar info del server
    console.log('servidor: ',mensaje );
})