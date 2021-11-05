import { Observable, Observer } from "rxjs"

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;

    const intervalo = setInterval(() => {
        count += 1;
        subscriber.next(count);
    }, 2500);

    return () => {
        clearInterval(intervalo);
        console.log("Intervalo Destruido");
    }
});


const subscriber = intervalo$.subscribe( num => console.log('Num:', num))


setTimeout( () => {
    subscriber.unsubscribe();
    
},2500)


