/**
 * al tener un objeto con un subobjeto, para acceder al subobjeto puede generar errores
 * útil al importar librerias, ya que puede validar que la inf este presente y no rompa el proyecto
 * se usa: object(?), ejemplo, venator?.general.age
 * retorna un undefined, y no un error que impide que el proyecto continúe.
 */
const venator = {
    capacity: {
        troopers: 500,
        xWings: 50,
        caminantes: 100
    },
    general: {
        name: 'Mof-Darkin',
        origin: 'Eriadu'
    }
}
//imagina que un dato que posiblemente existe, fue eliminado antes de realizar la consulta
//console.log(venator.type.guns); //error

console.log(venator.type?.guns); //undefined
/**validar datos que no controlamos de una API. Y por más que se utilicen métodos async y await, aún así el render causaba estos conflictos */