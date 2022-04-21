//import {messaggio, piGreco, mioOggetto, cubo} from './libreria.js';
import * as MioModulo from './libreria.js';
const h3 = document.getElementById("titolo");
h3.innerText = MioModulo.messaggio + " " + MioModulo.piGreco;
console.log(MioModulo.mioOggetto);
MioModulo.mioOggetto.disegna();
console.log(MioModulo.cubo(3));