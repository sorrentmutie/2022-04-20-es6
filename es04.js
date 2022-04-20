const somma = function(a,b) {
    return a+ b;
};

const sommaArrow = (a,b) => a + b;
const esempio = x => x * x;
const random = () => Math.random();

console.log(sommaArrow(1,2));


// function Persona(){
//     this.age = 0;
//     const that = this;
//     setInterval( function(){
//         console.log(that.age);
//         that.age++;
//     } , 1000);
// }

function Persona(){
    this.age = 0;
    setInterval( () => {
        console.log(this.age);
        this.age++;
    } , 1000);
}

var x = new Persona();


const simple = a => a > 10 ? 10 : a;
const max = (a,b) => a > b ? a : b;