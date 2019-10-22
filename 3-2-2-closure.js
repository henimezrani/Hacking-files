// Basic Requirements

// A - 0 

function makeAccount(initial) {
    var balance = initial;
    return function(amount) {
		if (balance - amount >= 0) {
        	balance = balance - amount;
          	return 'Here is your money: $' + amount;
          	}
     	return 'Insufficient funds.';
    };
}

function makeCounter(initial){
	var count = initial;
	return function(){
		count++ ;
		return count;
	} 
}

 var counter1 = makeCounter();
 var counter2 = makeCounter();

 // A - 3 
function pow(exponent) {
    return function(number) {
        return Math.pow(number, exponent)
        }
    } 

var square = pow(2);

// MORE PRACTICE 

// A - 1

function zipWith(f, arr1, arr2){
	var min = 0;
	var result = [];
    arr2.length >= arr1.length ? min = arr1.length : min = arr2.length;
    for( let i =0 ; i < min ; i++){
    	result.push(f(arr1[i], arr2[i])); 
    } 
    return result;
}

// A - 2



function add(number){
	var count = number;
	function make(number) {
		if (number === undefined){
			return count;
		} else {
			count +=number;
			return make;
		}
	}
	return make;
}


var addTwo = add(2);



