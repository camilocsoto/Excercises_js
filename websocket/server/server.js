const express = require('express'); //importa libreria express
const path = require('path'); //importa libreria path
const socketIO = require('socket.io'); // No trabaja con node pero sí con un servidor http
const http = require('http'); //Para poder trabajar de forma local, el navegador ya lo incluye -
const { log } = require('console'); //Para debuggear
const app = express(); //inicializa express
let server = http.createServer(app) //montar servidor con todas las configuraciones de express -
const publicPath = path.resolve(__dirname, '../public'); //compartir y hacer visible la carpeta "./public"
const port = process.env.PORT || 3000; //middleware: intermediario, da control en la variable port para hostear
app.use(express.static(publicPath)); //Mostrar la carpeta public en cualquier host
//Backend con socket io
let io = socketIO(server); //input output es la conexión directa entre el servidor y la api del socket
io.on('connection', (client)=> { //evalúa la conexión del cliente.
    console.log('connected user');
        client.emit('enviarMensaje', {
            usuario: 'Admin',
            mensaje: 'Bienvenido al socket'
        })
            client.on('disconnect', () => { // atributo client es para tomar el id del cliente
                console.log('disconnected user');
            })
                client.on('enviarMensaje', (mensaje) => { //RECIBIR INFORMACION DEL CLIENTE: variable y atributo a recibir
                    console.log(mensaje);
                })
})
//Activar server
server.listen(port, (err) => { //express escucha la variable y con la arrow function evalua el estado del server 
    if (err) throw new Error(err); //si hay un error, muestralo en consola y pausa el proceso
    console.log("El servidor ya arrancó"); //muestra mensaje en la consola
});
