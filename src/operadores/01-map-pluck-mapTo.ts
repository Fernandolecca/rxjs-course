import { range, fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//     .pipe( map<number, string>( val => (val * 10).toString()))
//     .subscribe( console.log );

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpMap$ = keyUp$.pipe(
    map<KeyboardEvent, string>( ({ code }) => code )
)

const keyUpPluck$ = keyUp$.pipe(
    pluck( "target", "baseURI" )
)

const keyUpMapTo$ = keyUp$.pipe(
    mapTo("Tecla presionada")
)

keyUpMap$.subscribe( console.log )
keyUpPluck$.subscribe(console.log)
keyUpMapTo$.subscribe( console.log )