const {io} = require('./server') //exporta el objeto
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