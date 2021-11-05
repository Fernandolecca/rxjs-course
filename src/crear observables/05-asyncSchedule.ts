import { asyncScheduler } from "rxjs";

const greeting = () => console.log("Hola Mundo");

const greeting2 = name => console.log(`Hola ${ name }`);

// asyncScheduler.schedule(greeting2, 2000, 'Fernando');

const subs = asyncScheduler.schedule(function(numero) {

    console.log('state', numero);
    this.schedule( numero + 1, 1000);

}, 3000, 0)


setTimeout(() => {
    subs.unsubscribe();
}, 6000)