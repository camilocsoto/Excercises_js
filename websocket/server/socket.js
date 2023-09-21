const {io} = require('./server') //exporta el objeto del server
io.on('connection', (client)=> { //evalúa la conexión del cliente.
    console.log('connected user'); //si hay un cliente conectado, imprime en la consola del servidor connected user
        client.emit('enviarMensaje', { //envía un mensaje con el objeto enviarMensaje
            usuario: 'Admin', //dentro del objeto hay un .json que contiene los atributos del objeto.
            mensaje: 'Bienvenido al socket'
        })
            client.on('disconnect', () => { // atributo client nos lo manda el server para tomar el id del cliente
                console.log('disconnected user'); //si el cliente se ha desconectado, imprime en la consola del servidor
            })
                client.on('enviarMensaje', (mensaje) => { //RECIBIR INFORMACION DEL CLIENTE: variable y atributo a recibir
                    console.log(mensaje); //imprime en la consola el mensaje del cliente. No hay necesidad de parsearlo.
                })
})