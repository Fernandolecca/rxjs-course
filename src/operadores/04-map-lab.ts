import { fromEvent } from "rxjs";
import { pluck, tap, map } from "rxjs/operators"

const texto = document.createElement("div");
texto.innerHTML = `

    

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ante eros. In a metus condimentum, vulputate dui non, congue mauris. Pellentesque a placerat urna. Duis vel augue mattis, consectetur dui et, consectetur turpis. Pellentesque laoreet sollicitudin augue sit amet mollis. Ut ut laoreet orci. Nulla tristique sollicitudin elit, ut viverra metus pulvinar sit amet. Sed imperdiet lectus nibh, non cursus felis lacinia vel. Morbi eget massa pulvinar, elementum erat et, eleifend augue. Nam efficitur mi at velit dignissim elementum. Mauris condimentum ut mi posuere laoreet. Sed ac pretium felis. Pellentesque eu nulla at magna ultricies faucibus. Duis finibus ipsum ex, sed tincidunt tellus mattis eu. In viverra ex sit amet fermentum convallis.
<br/><br/>
Maecenas hendrerit pharetra felis eget hendrerit. Sed ultrices ac enim eget imperdiet. Maecenas aliquam ligula quis neque fringilla, vitae euismod mi vehicula. Praesent lacinia venenatis tristique. Nam at sapien eros. Nullam rhoncus, lorem nec tempus pellentesque, magna diam bibendum eros, vitae maximus nisl metus sit amet nulla. Nulla id blandit purus. Curabitur at purus nec leo auctor vestibulum. Phasellus auctor, est non iaculis pretium, sapien magna commodo erat, vitae egestas enim sem ut purus. Mauris commodo nisl a commodo vulputate.
<br/><br/>
Nulla nec dapibus sapien. Aliquam at pretium ipsum, sit amet aliquet metus. Nam quis facilisis lacus, id bibendum augue. Duis vulputate nunc hendrerit ultricies bibendum. Aenean vulputate arcu non congue mattis. Proin molestie tellus vel porta finibus. Vestibulum id dui volutpat, hendrerit neque laoreet, aliquam risus. Curabitur molestie justo eget odio dictum consequat. Etiam mattis mattis ante, non hendrerit dolor. Maecenas non mauris orci. Proin non lectus in libero tempus sagittis sit amet vel nisl. Sed interdum rutrum eros at commodo. Aenean non lacus sem.
<br/><br/>
Aliquam at rhoncus nibh. In hac habitasse platea dictumst. Curabitur sodales mauris et nulla feugiat vehicula. Maecenas vestibulum, dolor ut hendrerit cursus, velit nunc faucibus felis, vitae sagittis lectus nisi in velit. Curabitur sed lorem elementum, rhoncus enim a, ornare orci. Sed ligula dolor, ultricies iaculis posuere nec, condimentum sit amet nisl. Praesent lectus risus, venenatis at pulvinar fringilla, tincidunt et neque. Mauris scelerisque sem eget accumsan tristique. Nullam tempus volutpat dolor, aliquet cursus erat cursus nec.
<br/><br/>
Praesent pellentesque dui mollis, blandit odio vitae, malesuada ipsum. Vestibulum sit amet eleifend ante. Vivamus ullamcorper finibus enim vel ultrices. Aliquam consequat, orci ac ultrices pharetra, lectus metus egestas enim, congue consequat enim justo ac eros. Aenean a dignissim massa. Duis venenatis nisl vitae orci porttitor efficitur. Sed vitae purus ac nunc lobortis commodo.

`
const calcularPorcentajeScroll = (event) => {

    const {  
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const body = document.querySelector("body");
body.appendChild(texto);

const progressBar = document.createElement("div");
progressBar.className = "progress-bar";

body.appendChild(progressBar);


const scroll$ = fromEvent(document, "scroll")
    .pipe(
        map( event => calcularPorcentajeScroll(event) ),
        tap( console.log )
    )

scroll$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
} );
