// Basic Requirements

// A - 0

var people = [ 
    {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
    {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
    {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
    {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
    {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
];

function each(coll, f) {
	if (!Array.isArray(coll)) {
		for (var key in coll) {
			f(coll[key], key);
		}
	} else {
		for (var i = 0 ; i < coll.length ; i++) {
			f(coll[i], i);
		}
	}
}

function map(coll, f) {
	var acc = [];
	if (!Array.isArray(coll)) {
		acc = {};
	}
	each(coll, function(elem, key) {
		acc[key] = f(elem, key);
	});
	return acc;
}

function filter(coll, predicate) {
	var acc = [];
	if (!Array.isArray(coll)){
		acc = {};
		each(coll, function(elem, key) {
			if (predicate(elem, key)){
				acc[key] = elem;
			}
		});
	} else {
		each(coll, function(elem, key) {
			if (predicate(elem, key)){
				acc.push(elem);
			}
		});
	}
	return acc;
}

function reduce(coll, f , start) {
	var acc = start;
	each (coll, function(element) {
		acc = f(acc, element);
	});
	return acc;
}

function range(start, end) { 
    var acc = []; 
    for (var i = start; i < end; i++) { 
        acc.push(i); 
    } 
    return acc; 
}

// A - 1

function product(numbers) {
	return reduce(numbers, function(total, number) {
		return total * number;
	}, 1);
}

// A - 2

function averageAge(people) {
	return reduce(people, function(total, element) {
		return (total + element.age);
	}, 0)/people.length;
}

// A - 3

function factorial(n) {
	return reduce(range(1,n+1), function(total, number) {
		return total * number;
	}, 1);
}

// MORE PRACTICE

// A - 1

function max(numbers){
	return reduce(numbers, function(max, number){
		if(max < number){
			max = number;
		}
		return max;
	}, numbers[0])
}

function countOccurrences(str, char){
	var arr = str.split('');
	return reduce(arr, function(acc, element){
		if(element === char){
			acc++;
		}
		return acc;
	},0)
}

function allOdd(array){
	return reduce(array, function(acc, element){
		return acc && element % 2 === 1;
	},true); 
}

function allPositive(array) {
	return reduce(array, function(acc, element){
		return acc && element > 0;
	},true); 
}

function allPositive(array) {
	return reduce(array, function(acc, element){
		return acc && element.length > 3;
	},true); 
}

function allPositive(array) {
	return reduce(array, function(acc, element){
		return acc && element.includes('e');
	},true); 
}

//function every(array){ 
	//return reduce(array, function(acc, element){
		//return acc && function(acc, element)
	//,true); 
//
 function everyNumberEven(numbers) { 
       return every(numbers, function(number) { 
             return number % 2 === 0; 
       }); 
 }



