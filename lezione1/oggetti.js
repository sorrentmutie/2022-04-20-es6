var oggettoDaNulla = Object.create(null);
// Object.setPrototypeOf(oggetto,prototipo)

var persona = {
    nome: "Salvatore",
    cognome: "Sorrentino",
    indiceJavascript: 10
};
for(var property in persona) {
    var value = persona[property];
    console.log(property, value);
}

var studente = {
    matricola: 'A001'
};

Object.setPrototypeOf(studente, persona);

console.log(Object.keys(studente));

for(var property in studente) {
    var value = studente[property];
    console.log(property, value);
}

console.log(studente.nome);

// new Object()

//var human = new Object();
// var human = {}

function Persona (nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.nomeCompleto = function() {
        return this.nome + " " + this.cognome;
    };
}

var p1 = new Persona('Mario', 'Rossi');
console.log(p1.nomeCompleto());


var prototipo = {
    nome: "Mario",
    cognome: "Rossi"
};

var prototipo2 = {
    nome: "Luigi",
    eta: 30
};

var studente1 = Object.create(prototipo);

studente1.nomeCompleto = function(){
    return this.nome + " " + this.cognome;
};
console.log(studente1.nomeCompleto());

Object.setPrototypeOf(studente1, prototipo2);
console.log(studente1.nome);
console.log(studente1.cognome);


// var errore = Persona('mario', 'rossi');
//console.log(errore);