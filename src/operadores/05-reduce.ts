import { interval } from "rxjs";
import { take, reduce , tap} from "rxjs/operators"

const observer = {
    next: value => console.log("next:", value),
    complete: () => console.log("complete")
}

const totalReducer = (acc: number, currentValue: number) => {
    return acc + currentValue;
}

interval(1000)
    .pipe(
        take(3),
        tap( console.log),
        reduce(totalReducer, 5)
    )
    .subscribe(observer);
