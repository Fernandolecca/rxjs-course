import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('Next:', val),
    complete: () => console.log("completado")
}

const todayPlusFive = new Date();
todayPlusFive.setSeconds( todayPlusFive.getSeconds() + 5);

const intervalo$ = interval(1000);
const timer$ = timer(todayPlusFive);

console.log("Inicio");
// intervalo$.subscribe( observer );
timer$.subscribe( observer );
console.log("Fin");