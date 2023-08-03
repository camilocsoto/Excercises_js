function* gen() { //los generators permiten pasusar o reanudar un proceso
    yield 1; //steps.
    yield 2;
    yield 3;
    yield 4;
}
//acceder a cada step
const g = gen()
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


// otro
function* iterable (array) {
    for (let value of array) {
        yield value
    }
}
const it = iterable(['imperial ship','venator', 'x-wings', 'tie fighters'])

console.log(it.next().value);
console.log(it.next().value); 
console.log(it.next().value);
console.log(it.next().value);

