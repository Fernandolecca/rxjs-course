import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators"

const  numeros = [1, 2, 3, 4, 5];

const  totalAcumulador = (acc, cur) => acc + cur;

from(numeros)
    .pipe(
        reduce(totalAcumulador)
    )
    .subscribe( console.log)

from(numeros)
    .pipe(
        scan(totalAcumulador)
    )
    .subscribe( console.log)

// redux

interface User {
    id?: string;
    authentification?: boolean;
    token?: string;
    age?: number;
}

const user: Array<User> = [
    { id: "flecca", authentification: false, token: null},
    { id: "flecca", authentification: true, token: 'ABC'},
    { id: "flecca", authentification: true, token: 'ABCDE'},
    
];


const state$ = from( user ).pipe(
    scan<User, User>( (acc, cur) => {
        return { ...acc, ...cur}
    }, { age: 33 })
)

const id$ = state$.pipe(
    map( state => state.id)
)

id$.subscribe( console.log )