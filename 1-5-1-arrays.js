// COMPLETE

// [ 1, 3, 4, 7, 9]

// ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the lazy', 'dog']

// [true, false, true]

var array1 = ["The walking dead", "Vampire Diaries", "Hitman", "Grownups 2"]
var array2 = ["Meher", "Noura", "Iheb", "Malek"]
var array3 = ["Basketball", "Card games", "Chess"]

console.log(array1[0])
console.log(array2[array2.length-1])
console.log(array3[1])

function first(array){
	return array[0];
}

function last(array){
	return array[array.length-1] ;
}

var arr = [2, 3, 4];
arr.unshift(1);
arr.unshift(0);
arr.push(5);
arr.push(6);
arr.push(7);

var numbers = [4, 9, 7, 2, 1, 8];

for (i=0;i<numbers.length;i++){
	numbers[i] = numbers[i]*2
}

// MORE PRACTICE

function nth(array, i){
	return array[i]
}

function rest(array){
	return array.slice(1)
}

function butlast(array){
	return array.slice(0, array.length-1)
}

function cons(array,x){
	array.unshift(x);
	return array
}

function conj(array,x){
	array.push(x);
	return array
}

// when used on variables, unshift and push return the length and not the array while cons and conj returns the array itself after modification


// It returns an array with 7 empty blocks and the string of "Hello" in the 7th index

// ADVANCED

// flips the array elements


function mystery(array) { 
    if (array.length === 0) { 
	    return []; 
	} 
	return conj(mystery(rest(array)),first(array)); 
}

function add(array) { 
    if (array.length === 0) { 
	    if (typeof ==="number" ){
	    	return 0 
	    }else {
	    	return "";
	    }
	     
	} 
	return mystery(rest(array)) + first(array) ;
}

function square(array) { 
    if (array.length === 0) { 
	    return []; 
	} 
	return cons(    mystery(rest(array))    ,  first(array)*first(array)    ); 
}

function even(array) { 
    if (array.length === 0) { 
	    return []; 
	}
	if (array[0] % 2 === 0) {
		return cons(even(rest(array)),first(array));
	}else{
		return even(rest(array));
	}
}
