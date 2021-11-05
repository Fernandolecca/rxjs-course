import { fromEvent } from "rxjs";


const obs1$ = fromEvent<PointerEvent>(document, "click");
const obs2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: (val: PointerEvent) => console.log("Next", val),
}

obs1$.subscribe( ({ x, y}) => {
    console.log(x, y);
});

obs2$.subscribe( event => {
    console.log(event.key);
    }
);