export const messaggio = "Buongiorno da un modulo";

function cubo(x) {
    return x * x * x;
}

const piGreco = Math.PI;
const mioOggetto = {
    opzioni: {
        colore: "rosso",
        spessore: '2px'
    },
    disegna: () => console.log('Ho invocato disegna')
};
export {cubo, mioOggetto, piGreco };