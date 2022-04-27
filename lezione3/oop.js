class Persona {
    constructor(nome, email, eta) {
        this._nome = nome;
        this.email = email;
        this.eta = eta;
    }
    aumentaEta() {
        this.eta += 1;
    }

    get nome(){
        return this._nome;
    }

    set nome(nuovoValore) {
        this._nome = nuovoValore;
    }

    static metodoStatico() {
        console.log('Sono in un metodo statico');
    }
}


class Studente extends Persona {
    constructor(nome, email, eta, matricola) {
        super(nome, email, eta);
        this._matricola = matricola;
    }
    get matricola(){
        return this._matricola;
    }
}


const mario = new Persona('Mario','mario@gmail.com', 51);
console.log(mario.email);
mario.aumentaEta();
console.log(mario.eta);

Persona.metodoStatico();

mario.nome = "Luigi Bianchi";
console.log(mario.nome);

const studente = new Studente('Mario','mario@gmail.com', 51, 'A001');
console.log(studente.matricola);
console.log(studente.nome);