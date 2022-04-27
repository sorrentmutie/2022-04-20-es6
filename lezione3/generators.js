function* helloWorldGenerator(){
    const mioOggetto = {
        nome: "Salvatore",
        cognome: "Sorrentino",
        eta: "troppi"
    };
    console.log("Sono nella mia funzione generatrice");
    yield mioOggetto.nome;
    console.log('Sono di nuovo qui');
    yield mioOggetto.cognome;
    console.log('Ho davvero finito');
    yield mioOggetto.eta;
}

const iteratore = helloWorldGenerator();
let x = iteratore.next();
console.log(x);
x = iteratore.next();
console.log(x);
x = iteratore.next();
console.log(x);
