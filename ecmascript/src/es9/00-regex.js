const regex = /(\d{4})-(\d{2})-(\d{2})/; //4 caracteres - 2 caracteres - 2 caracteres
const matchers = regex.exec('2023-07-02')
console.table(matchers)
/**
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2023-07-02' │
│    1    │    '2023'    │
│    2    │     '07'     │
│    3    │     '02'     │
│  index  │      0       │
│  input  │ '2023-07-02' │
│ groups  │  undefined   │
└─────────┴──────────────┘
Los RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres 
En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda. 
*/