import { Observable, Observer, Subject } from "rxjs"

const observer: Observer<any> = {
    next: (value: number) => {
        console.log('next: ', value);
    },
    error: (error: Error) =>  {
        console.warn('error:', error)
    },
    complete: () => {
        console.info("completed");
    }
}

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

// multi casting
// observer
// transforma un cold observable en un hot observable
const subject$ = new Subject<number>()

const subscription = intervalo$.subscribe( subject$ );

// const subs1 = intervalo$.subscribe( random => console.log('sub1', random) );
// const subs2 = intervalo$.subscribe( random => console.log('sub2', random) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    subject$.next(10)

    subject$.complete();

    subscription.unsubscribe();
}, 3500)

