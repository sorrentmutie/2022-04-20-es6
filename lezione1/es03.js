function deco(persona) {
    const {a, b, c } = persona;
    // console.log(b);
    const {e, indirizzo} = b;
    console.log(indirizzo);
}


deco({ 
  a: 1,
  b: { e: { name: 'mario', cognome: 'rossi' }, indirizzo: {
      via: "bla bla", numerocivico: 1, citta: "Napoli", nazione: 'Italia'
  } },
  c: 2
});