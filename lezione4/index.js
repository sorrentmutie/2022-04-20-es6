function* sequenza(start,end) {
    for(let i = start; i< end; i++){
        yield i;
    }
}

async function* sequenzaAsincrona(start, end) {
    for(let i = start; i< end; i++){
        yield new Promise( (resolve, reject) => {
        // operazione asincrona
            setTimeout( () => resolve(i) , 1000);
        });
    }
}

async function* sequenzaAsincronaChiamateAPI(start, end) {
    for(let i = start; i< end; i++){
        let url = "https://reqres.in/api/users?page=" + i;
        const response = await fetch(url);
        const body = await response.json();
        yield body;
    }
}




// let seq = sequenza(1,5);
// const x = seq.next();
// console.log(x);
// for(const num of seq) {
//     console.log(num);
// }

// (async () => {
//     let seq = sequenzaAsincrona(1,5);
//     for await (let num of seq) {
//         console.log(num);
//     }
// })();


async function estraiTutteUrl(urls) {
    try {
        var data = await Promise.all(
            urls.map( url => fetch(url).then( (response) => response.json()))
        );
        return data;
    }
    catch(error) {
        console.log(error);
    }
}


// const data = [];
// (async () => {
//     let seq = sequenzaAsincronaChiamateAPI(1,5);
//     for await (let num of seq) {
//         data.push(...num.data);
//     }
// })();
// console.log(data);
const urls = ["https://reqres.in/api/users?page=1", "https://randomuser.me/api"];
//const result = 
estraiTutteUrl(urls).then(p => console.log(p));
//console.log(result);