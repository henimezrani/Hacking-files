/*
{
	firstName: 'Yan', 
	lastname: 'Fan' 
} 

{
	a: 1, 
	b: 2, 
	c: 3, 
	d: 4
} 

{ 
    animal: 'dog',
    noise: 'bark', 
    age: 3, 
    type: 'Golden Retriever', 
    color: 'Yellow' 
}
*/
var person = {
	name: {
		first: 'Heni',
		middle: 'Abdelaziz',
		last: 'Mezrani'
	},
	age: 23,
	hometown: 'Marsa',
	sportsTeam: 'EST',
	favMovie: 'Inception'
}


function formatName(obj) {
	return obj.name.first + ' ' + obj.name.last;
}

var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 		
 ];
people.push(person);

function returnName(array){
	var arr= [];
	for (var i = 0 ; i < array.length ; i++){
		 arr.push(formatName(array[i]))
	}
	return arr;
}

function average(array){
	count= 0;
	for(var i = 0 ; i < array.length ; i++){
		count = count + array[i].age;
	}
	return count/array.length ;
}

function older(array, minAge){
	var arr = [];
	for (var i = 0 ; i < array.length ; i++){
		if ( array[i].age > minAge ){
			arr.push(array[i]);
		}
	}
	return arr;
}

var dirtyObject = { 
    _fht: 192492, 
    name: 'Yan Fan', 
    age: 27, 
    _byz: 939205, 
    _ttrs: 510852 
}

function clean(obj){
	var newObj = {};
	for (var key in obj){
		if ( key[0] !== "_"){
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function removeOddValues(obj){
	var newObj = {};
	for (var key in obj){
		if (obj[key] % 2 === 0){
			newObj[key] = obj[key];
		} 
	}
	return newObj
}
