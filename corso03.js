function init(){
    var name = "Salvatore";
    function displayName(){
        console.log(name);
    }

    displayName();
}

// init();

function init2() {
    var name = "Salvatore";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

//var myFunc = init2();
//myFunc();

function creaSommatore(x) {
    return function(y) {
        return x + y;
    };
}

var sommatore5 = creaSommatore(5);
var sommatore10 = creaSommatore(10);

console.log(sommatore5(2));
console.log(sommatore10(2));