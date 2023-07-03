const jedi = {
    name: 'Mace',
    age: 45,
    planet: 'Dagova'
 }
 
 const {name, ...values} = jedi
 console.log(name); //Puedes omitir el objeto y solo acceder a su propiedad, si le haces un spread antes de usarle
 console.log(values); // name: 'Mace', age: 45, planet: 'Dagova'
 