// Object.assign

const target = {a: 1, b: 2};
const source = {b: 3, c: 4};

//const nuovoOggetto = Object.assign(target, source);
// console.log(nuovoOggetto);

function creaMappa(options) {
    const opzioniDefault = {
        width: 900,
        height: 500,
        coordinates: [45.1, 12.3]
    };

    Object.keys(opzioniDefault).forEach(
        function(key) {
            if (!(key in options)){
                options[key] = opzioniDefault[key];
            }
        }
    );
    console.log(options);

    //... implementazione mappa
}

function creaMappaNuova(options) {
    const opzioniDefault = {
        width: 900,
        height: 500,
        coordinates: [45.1, 12.3]
    };

    var opt = Object.assign(opzioniDefault, options);
    console.log(opt);

    //... implementazione mappa
}

// creaMappaNuova( {width: 2000});

function creaAstronaveBase(){
    return {
        fly: function() {
            // implementazione fly
        },
        shoot: function() {

        },
        destroy: function(){

        }
    };
}

function creaAstronaveComplessa(){
    let astronave = creaAstronaveBase();
    Object.assign(astronave, {
        bomb: function(){

        }
    });
    return astronave;
}

const a1 = creaAstronaveComplessa();
console.log(a1); 