// Come back to MP 5

//Basic Requirments

// A -0

// Its good !

// A - 1

// 1. 
function cube(x) { 
    return x * x * x; 
} 

var cube = function(x){
 	return x * x * x;
}

 // 2. 
function fullname(first, last) { 
    return first + ' ' + last; 
} 
 
var fullname = function(first, last) {
 	return first + ' ' + last;
 }

 // 3. 
function power(base, exp) { 
     if (exp === 0) { 
       	return 1; 
     } 
     return base * power(base, exp - 1); 
}

var power = function(base, exp) {
 	 if (exp === 0) { 
       return 1; 
     } 
     return base * power(base, exp - 1); 
} 

 // 4. 
function sumCubes(numbers) { 
    var total = 0; 
    for (var i = 0; i < numbers.length; i++) { 
        total = total + cube(numbers[i]); 
    } 
    return total; 
}

var sumCubes = function(numbers) {
 	var total = 0; 
 	for (var i = 0; i < numbers.length; i++) { 
 	        total = total + cube(numbers[i]); 
 	} 
 	return total; 
}

// A - 2

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
        func(array[i]); 
    } 
}


// A - 3

var numbers = [1, 2, 3, 4]

// Method 1

function sumSquares(numbers) { 
    var total = 0; 
    // debugger;
 	each(numbers, function(number){
    	total += number * number
    });
    return total; 
}

// Method 2 


var sq2 = function(number){
    return number * number
}

function sumSquares2(numbers) { 
	var total2 = 0;
    each(numbers, function(n) {
    	total2 += sq2(n)
    });
    return total2; 
}

// Method 3

var total3 = 0;

var sq3 = function(number){
    total3 += number * number
}

function sumSquares3(numbers) { 
    each(numbers, sq3);
    return total3; 
}


// A - 4 

function sumCubes(numbers){
    var total = 0;
    each(numbers, function(n){
        total += n * n * n; 
    })
    return total;
}


// A - 5

function product(numbers) {
    var total = 1;
    each(numbers, function(n) {
        total *= n;
    })
    return total;
}

// A - 6

function cubeAll(numbers) {
    var result = [];
    each(numbers,function(n) {
        result.push(Math.pow(n,3));
    })
    return result;
}

// A - 7

function odds(numbers) {
    var result = [];
    each(numbers,function(n) {
        if(n % 2 === 1){
            result.push(n);
        }
    })
    return result;
}

// More Practice

// A - 1
function sum(numbers) {
    var total = 0;
    each(numbers,function(n) {
        total += n;
    });
    return total;
}

function sumByAllElementsMultipliedByFour(numbers) {
    return sum(numbers) * 4;
}


// A - 2

function sumBy(numbers, func) {
    var total = 0;
    each(numbers,function(n) {
        total += func(n);
    })
    return total ;
}


 // A - 3

 //Create a total var and use the each method to iterate over the array
 // and add the values to total

 // A - 4 

function productBy(numbers,func){
    var total = 1;
    each(numbers,function(n) {
        total *= func(n);
    })
    return total ;
}

// A - 5


// ADVANCED

// A - 1

function doubleAll(numbers) { 
    var result = [];
    each(numbers,function(n){
        result.push(n * 2);
    });
    return result;
}
