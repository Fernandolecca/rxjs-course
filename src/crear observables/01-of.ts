import { of } from "rxjs"

const numbers = [1, 2, 3, 4, 5, 6];

const obs$ = of<number[]>(...numbers);

console.log("Inicio");
obs$.subscribe( 
    next => console.log("Next:", next),
    null,
    () => console.log("Terminamos la secuencia")
);
console.log("Fin");


