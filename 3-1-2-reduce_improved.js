// Basic requirements 

// A - 0 
var arr = [1,2,3,4,5,6]

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

function reduce(coll, f , acc) {
	if(acc === undefined ){
		acc =  coll[0];
		coll = coll.slice(1); 
	}
	each(coll, function(element, i) { 
        acc = f(acc, element, i); 
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



function factorial(n){
	return reduce(range(1, n + 1), function(acc, number){
		return  acc * number
	} )
}


function max(coll){
	return reduceAll(coll, function(max, number){
		if(number > max ){
			return number;
		} 
		return max;
	})
}

 function range(start, end) { 
       var acc = []; 
       if( end === undefined){
       	end = start;
       	start = 0;
       }
       for (var i = start; i < end; i++) { 
             acc.push(i); 
       } 
       return acc; 
 }

 // More Practice 

 function reduceAll(coll, f , acc) {
	if(!Array.isArray(coll)){
		coll = Object.values(coll);
	}
	if(acc === undefined ){
		acc =  coll[0];
		coll = coll.slice(1); 
	}
	each(coll, function(element, i) { 
        acc = f(acc, element, i); 
    }); 
    return acc; 
}
