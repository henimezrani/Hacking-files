// Basic Requirements

// A - 0

var people = [ 
    {name: {first: 'Alyssa', middle: 'P.', last: 'Hacker'}, age: 26}, 
    {name: {first: 'Louis', last: 'Reasoner'}, age: 21}, 
    {name: {first: 'Ben', last: 'Bitdiddle'}, age: 34}, 
    {name: {first: 'Eva', middle: 'Lu', last: 'Ator'}, age: 40}, 
    {name: {first: 'Lem', middle: 'E.', last: 'Tweakit'}, age: 45} 
    ];

function each(coll, f) {
	if (!Array.isArray(coll)){
		for (var key in coll){
			f(coll[key], key);
		}
	} else {
		for (var i = 0 ; i < coll.length ; i++){
			f(coll[i], i);
		}
	}
}

// A - 1

function select(object, keys) {
	var obj = {};
	for (var i = 0 ; i < keys.length ; i++) {
		if (object.hasOwnProperty([keys[i]])){
			obj[keys[i]] = object[keys[i]]
		}
	}
	return obj;
}

function pluck(array, key) {
	var result = [];
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i].hasOwnProperty(key)){
			result.push(array[i][key]);
		}
	}
	return result;
}

function extend(destination, source) {
	each(source, function(elem, key){
		destination[key] = elem;
	})
	return destination;
}

function zip(keys, values) {
	var obj = {}; 
	for(let i =0; i < keys.length; i++) {
		obj[keys[i]] = values[i];
	}
	return obj; 
}

function sortAscending(obj){
	var result  = [];
	var vals = Object.values(obj) ;
	var keys = Object.keys(obj);
	console.log(vals)
	console.log(keys)
	for(let i = 0; i < vals.length; i++){
		var min = vals[i];
		var minInd = i;
		for(let j =i + 1; j < vals.length; j++) {
			if(vals[j] < min){
				min = vals[j];
				minInd = j;
			}
		}
		var tmpVal = vals[minInd]; 
		vals[minInd] = vals[i]; 
		vals[i] = tmpVal
		var tmpkey = keys[minInd]; 
		keys[minInd] = keys[i]; 
		keys[i] = tmpkey;
	}
	for(let i = 0; i < vals.length; i++){
		var tmpObj = {};
		tmpObj[keys[i]] = vals[i]
		result.push(tmpObj) 
	}
	return result;
}

function checkType(value) {
	console.log(Number(value))
	return (Number(value).toString() === value)

}

function numbersOnly(objects) {
	for (var i = 0 ; i < objects.length ; i++) {
		for (var key in objects[i]){		
			if (!checkType(key)){
				delete objects[i][key]
			}
		}
	}
	return objects;
}
