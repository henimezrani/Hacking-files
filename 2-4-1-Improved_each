// Basic Requirement

// A - 0

var numbers = [1, 2, 3, 4, 5]

function each(array, func){
    for (var i = 0 ; i < array.length ; i++){
        func(array[i], i);
    }
}


// A - 1

// Method 1 ===> BEST SOLUTION

function indexedExponentials(array){
    var result = [];
    each(array, function(n,i){
        result.push(Math.pow(n,i));
    })
    return result;
}

// Method 2 // ===> NEEDS TO INVOKE 3 FUNCTIONS BUT NO GLOBAL VAR

var powe = function(number, i){
    return Math.pow(number,i);
}


function indexedExponentials2(array){
    var result = [];
    each(array, function(n,i){
        result.push(powe(n,i))
    })
    return result;
}

// Method 3 // ===> REQUIRES GLOBAL VARIABLE BUT EASIER THAN 2

var result3 = [];

var powe2 = function(number, i){
    result3.push(Math.pow(number,i));
}

function indexedExponentials3(array){

    each(array, powe2)
    return result3;
}


// A - 2

function evenIndexedOddNumbers(array){
    var result = []
    each(array, function(number,i){
        if ((number % 2 === 1) && (i % 2 === 0)){
            result.push(number)
        }
    })
    return result;
}


// A - 3 

function evenIndexedEvenLengths(array){
    var result = []
    each(array, function(str,i){
        if ((str.length % 2 === 0) && (i % 2 === 0)){
            result.push(str)
        }
    })
    return result;
}
