const list = new Set() //instanciar estructura que tiene elementos únicos: como usuarios y demás

list.add('corusant');
list.add('Yavin').add('Andor');
console.log(list);

list.add('Trantor')
list.delete('Trantor')
list.has('Trantor') //busca y devuleve un true o un false
list.clear() //borra toda la lista
list.size() //dice la cantidad de valores que tiene el set
console.log(list);
