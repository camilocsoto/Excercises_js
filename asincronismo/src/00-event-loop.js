/**
 * es un patrón de diseño del navegador: setTimeOut(), time
 * memory heap = memoria que guarda todas las variables.
 * call stack = eventos a ejecutar en orden de llegada. Menos las promesas y tareas asincronas
 * task queue = lista de espera que pasa al stack. Por eso nunca se debe bloquear con while =true por ejemplo
 */
function war(stat) {
    console.log(`the war just ${stat}`);
}


setTimeout(function () { //cuando pasen dos segundos ejecuta todo el bloque
    console.log('2 segundos después...');
    war('becoming')
},2000)

/** other way

setTimeout(war,4000, 'ended')

*/