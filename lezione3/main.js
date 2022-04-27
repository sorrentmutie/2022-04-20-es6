// (function () {

// })();

// var MyApp = {};
// MyApp.MyModule = (function(){
//     var variabilePrivata = 1;
//     var variabilePubblica = 2;
//     var funzionePubblica = function() { return 3;};
//     return {
//         variabilePubblica: variabilePubblica,
//         funzionePubblica: funzionePubblica
//     };
// })();


// console.log(MyApp.MyModule.variabilePrivata);

// console.log(MyApp.MyModule.variabilePubblica);
// console.log(MyApp.MyModule.funzionePubblica());


// Utilizzo di un object


// })();

var MyApp = {};
var config = {a: 1};

MyApp.MyModule = (function(config){
    return {
        myVariable: config.a || 2 
    };
})(config);


console.log(MyApp.MyModule.myVariable);
