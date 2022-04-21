import {getPosts, getPhotos, getAll, creaPost} from './fetch01.js';
getPosts().then(dati => console.log(dati));
getPhotos().then(dati => console.log(dati));
getAll().then(dati => console.log(dati));
creaPost().then(response => console.log(response));