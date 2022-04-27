function* faiQualcosa(){
    const x = 1 + (yield);
    const y = 2 + (yield);
    yield x + y;
}

const iteratore = faiQualcosa();
let x = iteratore.next();
x= iteratore.next(5);
x = iteratore.next(6);
x = iteratore.next();
console.log(x);