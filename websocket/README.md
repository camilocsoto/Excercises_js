# Socket - middleware
- Capaz de establecer una conversación entre dos o más usuarios, y actualizarse cada vez que haya un cambio, sin la necesidad de hacer un http.get cada n milisegundos.
- Corre por defecto en el puerto 3000.
- Envía archivos de tipo Json.
- Topología:
![]( https://socket.io/images/bidirectional-communication.png)
### Recomendaciones previas a la instalación
+ Es recomendable instanciar el proyecto en alguna distribución de **Linux**.
+ Abrir el proyecto en Visual Studio Code.
+ Seguir las posteriores instrucciones.
### Instalación
+ Asegúrate de tener instalado de forma global nodemon

`$ npm install -g nodemon`
* Esto te permitirá inicializar el servidor cada vez que haya un cambio
* Para validar que quedó bien instalado, usa el comando

` $ nodemon -v`
* Te arrojará mas o menos **3.0.1** o la versión que aloje tu dispositivo.
+ Instalar los módulos de Node

`$ npm install -y`
* Esto te instalara la carpeta node con sus respectivas dependencias. Así mismo, la -y omitirá todas las preguntas que te hace al instalar node.
+ Instalar de forma local socket.io

 ` $ npm i socket.io –save`
* este commando agrega la API a package.json
### Ejecución
+ En la terminal de su preferencia, ubíquese en la raíz del proyecto

`…/websocket$ `
+ Ejecute el comando nodemon server/server.js
* Esto le indica a la librería de nodemon, la ruta que debe actualizar cada vez que haya un cambio
![](https://tinypic.host/images/2023/08/29/status.png)
* Para cerrar el servidor solo presiona las teclas **ctrl** + **C**
### Interacción
*Puedes comunicarte con el servidor ejecutando el siguiente código en la consola del navegador
```javascript
socket.emit('enviarMensaje', { //nombre de la variable y el json
    usuario: '',
    mensaje: 'hola mundo'
})

```
### Diagrama de secuencia
![]( https://socket.io/assets/images/polling-transport-3982c72f867034afb95afd7091297cc1.png)

