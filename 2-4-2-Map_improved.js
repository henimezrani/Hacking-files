// Basic Requirements

// A - 0

var ex = {
	name: "Heni",
	age: 23,
	favoriteMovies: ["movie1", "movie2"]
}

var ex2 = {
	name: 2,
	age: 23,
	favoriteMovies: 6
}

var ex3 = {
	name: "Heni",
	age: '23',
	favoriteMovies: 'WhatEvEr'
}

var ex4 = {
	a: {
		b: 1, 
		c: 7
	}, 
	f: {
		h: 22, 
		g: 12, 
		i: 24
	}
}

var people = [{ 
    name: { 
        first: 'Majd', 
        middle: 'Eddin', 
    }, 
    age: 30 
    }, { 
    name: { 
        first: 'Fatima', 
        last: 'Himmamy' 
    }, 
    age: 26 
    }, { 
    name: { 
        first: 'Sahar', 
        middle: 'MHD' 
    }, 
    age: 27 
    }, { 
    name: { 
        first: 'Nour', 
        middle: 'Eddin', 
    }, 
    age: 15 
    }, { 
    name: { 
        first: 'Ahmad', 
        last: 'Awad' 
    }, 
    age: 33 
}]; 


var usersData = [ 
    { user: {email: 'majd@rbk.org', password: '_majd(2017)'}}, 
    { user: {email: 'fatema@rbk.org', password: '12345'}}, 
    { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
    { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
]; 

function each(coll, f) { 
    if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
            f(coll[i], i); 
        } 
    } else { 
        for (var key in coll) { 
            f(coll[key], key); 
            } 
    } 
} 

function map(coll, f) { 
    var acc = []; 
    if (!Array.isArray(coll)){
    	acc = {};
    }
    each(coll, function(element, key) { 
        acc[key] = f(element, key); 
    }); 
    return acc; 
}


// A - 1

function incrementValues(obj){
	return map(obj, function(elem, key){
		return obj[key] = ++obj[key];
	});
}

// A - 2

function uppercaseValues(obj){
	return map(obj, function(elem, key){
		if (typeof obj[key] !== 'string'){
			return obj[key];
		}
		return obj[key].toUpperCase();

	})
}

// A - 3

function countNestedKeys(obj){
	 
	return map(obj,function(elem, key){
		return Object.keys(elem).length;
	})
}

// A - 4

function agesToMinutes(array){
	return map(array,function(elem, key){
		elem['age'] = elem['age'] * 365 * 24 * 60;
		return elem;
		
	})
}


// More Practice 


// A - 1 


function securityCheck(array){ 
	return map(array,function (elem,key){
		if(elem['user'].password.length<8){
			elem['user'].flag = false;
		}
		else{
			elem['user'].flag = true;
		}
		if((elem['user'].password.toLowerCase() === elem['user'].password)&&(/\d/.test(elem['user'].password))){
			if (/\d/.==elem['user'].password.length){
				elem['user'].health = 'weak';
			} else {
				elem['user'].health = 'normal';
			}
		}
		else if(elem['user'].password.toLowerCase() === elem['user'].password){
			elem['user'].health = 'weak';
		}
		else {
			elem['user'].health = 'Strong';
		}
		return elem;
	})

 } 

// Method 2 

function securityCheck(array){ 
	return map(array,function (elem,key){
		if(elem['user'].password.length<8){
			elem['user'].flag = false;
		}
		else{
			elem['user'].flag = true;
		}
		if((elem['user'].password.toLowerCase() === elem['user'].password)&&(/\d/.test(elem['user'].password))){
			if (/\d+/g.exec(elem['user'].password)["0"]===elem['user'].password){
				elem['user'].health = 'weak';
			} else {
				elem['user'].health = 'normal';
			}
		}
		else if(elem['user'].password.toLowerCase() === elem['user'].password){
			elem['user'].health = 'weak';
		}
		else {
			elem['user'].health = 'Strong';
		}
		return elem;
	})

 }

