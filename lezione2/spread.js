const array = [1,2,3,4];
const array2 = [5,6,7,8];

//const copy = [array];
//console.log(copy);
const copySpread = [...array, ...array2];
console.log(copySpread);


function dev(x,y,z) {
    console.log(x);
}
const args = [0,1,2];
dev(...args);

const obj = {a: 1, b: 2, c: 3};
const copyObject = {...obj};
console.log(copyObject);

const obj1 = { a: 1, b: 2, c: 3};
const obj2 = { a: 2, e: 2, f: 3};
const merge = {...obj1, ...obj2};
console.log(merge);