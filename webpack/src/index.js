import  './style.css';
import somma from './prova'; 
function draw(){
    const el = document.createElement('div');
    el.innerHTML = "Ciao, WebPack";

    const button = document.createElement('button');
    button.innerHTML = "PROVA";
    button.addEventListener('click', somma);
    console.log('chao');
    el.classList.add('hello');
    el.appendChild(button);
    return el;
}

document.body.appendChild(draw());