const mammaContenta = true;

const laMammaCompreraUnTelefono = new Promise(
    (resolve,reject) => {
        if(mammaContenta) {
            const telefono = {
                marchio: 'iPhone',
                modello: '13',
                colore: 'nero'
            };
            resolve(telefono);
        } else {
            const motivo = new Error('Sei stato cattivo');
            reject(motivo);
        }
    }
);

const mostraTelefonoAgliAmici = telefono => {
    return new Promise( (resolve,reject) => {
        if(telefono) {
            const messaggio = "Ciao, ragazzi! ecco il mio telefono " + telefono.marchio;
            resolve(messaggio);
        } else {
            const messaggio = "Ciao ragazzi, niente telefono :( !";
            reject(messaggio);
        }
    });
};


// const chiediAMamma = () => {
//     laMammaCompreraUnTelefono
//        .then( telefono => {
//             console.log(telefono);
//        })
//        .catch( error => console.log(error));
// };

const chiediAMamma = () => {
    laMammaCompreraUnTelefono
        .then(mostraTelefonoAgliAmici)
        .then( (messaggio) => console.log(messaggio))
        .catch( errore => console.log(errore));
};



chiediAMamma();