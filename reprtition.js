function sum(n){
	if (n===0){
		return 0;
	}
	return n + sum(n-1);
}

function factorial(n){
	if (n===1){
		return 1;
	}
	return n * factorial(n-1);
}

function repeatString(str, count){
	if (count===0){
		return "";
	}
	return str + repeatString(str, count-1);

}

function fib(n){
	if (n===1){
		return 1;
	}
	if (n===0){
		return 1;
	}
	return fib(n-1)+fib(n-2);
}


function multiplyBy10(number, n){
	if( n === 0){
		return number
	}
	return 10 * multiplyBy10(number, n -1) 
}

// more practice

function sum(s , e){
	if (s === e){
		return s;
	}
	return e + sum(s , e-1);
}

function product(s , e){
	if (s === e){
		return s;
	}
	return e * product(s , e-1);
}

function inc(x) { 
	return x + 1; 
} 

function dec(x) { 
	return x - 1; 
}

function add(x,y){
	if (y === 0){
		return x
	}
	return add(inc(x),dec(y))
}

function isEven(n){
	if(n === 1){
		return false;	
	}
	return !isEven((n-1));
}

function multiply(x,y){
	if (y===0){
		return 0;
	}
	
	return add(x , multiply(x,dec(y)));
}

function range(min,max){
	if(min === max-1){
		return max-1
	}
	return min + ", " + range(min+1, max)
}

function stringLength(str){
	if(str === ""){
		return 0 
	}
	return 1 + stringLength(str.slice(1))
}

function modulo(n, mod){
	if((n / mod) === (parseInt(n / mod))){
		return 0 
	}
	return 1 + modulo(n-1,mod)
}

function countChars(str, char){
	if (str === ""){
		return 0;
	}
	if (str[0]===char){
		return 1 + countChars(str.slice(1),char)
	}else{
		return 0 + countChars(str.slice(1),char)
	}
	
}

function indexOf(str,char){
	if (str[0]===char){
		return 0;
	}
	return 1 + indexOf(str.slice(1),char)
}


function pow(b, exp){
	if (exp === 0){
		return 1;
	}
	return b * pow(b, exp-1);
}

function succPow(b,exp){
	if (exp === 0){
		return 1;
	}
	if (exp === 1){
		return b;
	}
	if (exp === 2){
		return b * succPow(b, exp-1);
	}
	if (exp%2 === 0){
		return succPow( succPow(b, exp/2) , 2)
	}else{
		return b * succPow( succPow(b, (exp-1)/2) , 2)
	}
}

function reverse(str){
	if (str === ""){
		return "";
	}
	return str[stringLength(str)-1] + reverse(str.slice(0, stringLength(str)-1));
}

function greatestDiv(a,b,div){
	if (div === undefined){
		div =a;
	}
	if (a%div === 0 && b%div === 0){
		return div;
	}
	return greatestDiv(a,b,div-1);
}
