var persona = {
    nome: "Salvatore",
    cognome: "Sorrentino",
    indiceJavascript: 10
};

console.log(persona.nome);
// console.log(persona["nome"]);

delete persona.indiceJavascript;
persona.indiceVisualBasic = -1;
//console.log(persona);

// console.log(Object.keys(persona));

// Object.defineProperty(oggetto, chiave, descrittore)

var valoreIniziale = 42;
Object.defineProperty(persona, "indiceNET", {
 //   value: 100,
 //   writable: true,
    enumerable: true,
    configurable: true,
    get: function() {
        console.log('Sono in get');
        return valoreIniziale;
    },
    set: function(value) {
        console.log('Sono in set');
        valoreIniziale = value;
    }
});

// var descrittoreNome = Object.getOwnPropertyDescriptor(persona, "nome");
// console.log(descrittoreNome);

// // Object.defineProperty(persona, "nome", {
// //     writable: false,
// //     enumerable: false
// // });

// var descrittoreNome = Object.getOwnPropertyDescriptor(persona, "nome");
// console.log(descrittoreNome);

// persona.nome = "Luigi Bianchi";
// console.log(persona);

//console.log(Object.keys(persona));

console.log(persona.indiceNET);
persona.indiceNET = 43;
console.log(persona.indiceNET);
