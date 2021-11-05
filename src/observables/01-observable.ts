import { Observable, Observer } from "rxjs"

const observer: Observer<any> = {
    next: (value: string) => {
        console.log('next: ', value);
    },
    error: (error: Error) =>  {
        console.warn('error', error)
    },
    complete: () => {
        console.info("completed");
    }
}

// const obs$: Observable.create()

const obs$ = new Observable<string>( subs => {

    subs.next("Hola");
    subs.next("Mundo");
    subs.next("Hola");
    subs.next("Mundo");
    

    let a = undefined;
    console.log(a.length);

    subs.complete();

    subs.next("Hola");
    subs.next("Mundo");

});

obs$.subscribe(observer);
// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('Error', error),
//     () => console.info('completado')
// );


// const semaforo: Observable<string> =  new Observable( subs => {
    
//     subs.next("Amarillo");
//     subs.next("Rojo");
//     subs.next("Verde");

//     subs.complete();


// });


// semaforo.subscribe( resp => {
//     switch(resp) {
//         case "Rojo":
//             console.log("parar auto");
//             break;
//         case "Amarillo":
//             console.log("Prepararse para parar");
//             break;
//         case "Verde":
//             console.log("Avanzar")
//             break;

//     }
// });

    