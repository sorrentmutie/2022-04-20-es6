console.log('Hello World');
//console.log(this);

function miaFunzione(){
    console.log(this);
}

var miaFunzione2 = function(){
    console.log(this);
};

// miaFunzione2();



function Persona (nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.nomeCompleto = function() {
        console.log(this);
        return this.nome + " " + this.cognome;
    };
}

var mario = new Persona('mario', 'rossi');
mario.nomeCompleto();