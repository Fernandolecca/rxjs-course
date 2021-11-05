import { from } from "rxjs";

const observer = {
    next: val => console.log(val),
    complete: () => console.log("se completo el flujo")
}

const source$ = from("Fernando");

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const iterable = miGenerador();

from(iterable).subscribe( observer);

// source$.subscribe( observer )