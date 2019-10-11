function sumOfArray(array){
	var sum =0;
	for(var i = 0; i<array.length;i++)
		sum += array[i];
	return sum
}
function sumWhileArray(array){
	var sum =0;
	var i = 0;
	while(i<array.length){
		sum += array[i];
		i++;
	}
	return sum
}

function maximum(array){
	var maximum = array[0];
	for(var i = 1; i<array.length; i++){
		if(maximum<array[i])
			maximum = array[i];
	}
	return maximum
}


function maximumWhile(array){
	var maximum = array[0];
	var i = 1;
	while(i<array.length){
		if(maximum<array[i])
			maximum = array[i];
		i++;
	}
	return maximum
}

function remove(array, a){
	var newArray = [];
	var counter = 0;
	for(let i = 0; i<array.length; i++)
		((array[i]!==a)? newArray[counter++]=array[i] : false)
	return newArray;

}
function removeWhile(array, a){
	var newArray = [];
	var counter = 0;
	var i = 0;
	while(i<array.length){
		((array[i]!==a)? newArray[counter++]=array[i] : false)
		i++
	}
	return newArray;

}

// MORE PRACTICE

function average(array){
	return sumOfArray(array)/array.length
}

function minimum(array){
	var minimum = array[0];
	for(var i = 1; i<array.length; i++){
		if(minimum>array[i])
			minimum = array[i];
	}
	return minimum
}

function shortestWord(array){
	var small = array[0];
	for (var i = 1 ; array.length > i ; i++){
		if ( small.length > array[i].length  ){
			small = array[i];
		}
	}
	return small;
}

function countChar(str,char){
	var counter= 0;
	for (var i = 0; i < str.length; i++){
		if(str[i]===char)
			counter++;
	}
	return counter;
}
function evenLength(array){
	var arrayEven = [];
	for (var i = 0; i < array.length; i++){
		if(typeof array[i]!== 'string')
			return 'BAD ARRAY'
		if(array[i].length%2===0)
			arrayEven.push(array[i])
	}
	return arrayEven
}

function reverseJoin(str){
	var array = [];
	for (var i = str.length-1; i >= 0; i--){
		array.push(str[i]);
	}
	
	return array.join('');
}

function bilter(array, callback){
	var arr = [];
	for (var i in array){
		if(callback(array[i]))
			arr.push(array[i])
	}
	return arr;
}

function callback(n){
	if (n===0)
		return true;
	return !(callback(n-1))
}
//callback()=> true/false