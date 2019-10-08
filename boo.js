function oldEnoughToDrive(age){
	if (age>=16){
		return true;
	}
	return false;
}

function sameLength(str1, str2){
	if (str1.length === str2.length){
		return true;
	}
	return false;
}

function passwordLongEnough(psw){
	if (psw.length>8){
		return true;
	}
	return false;
}

function rentalCar(name, age){
	if (age>21){
		return "Have fun driving, " + name + "!";
	}
	return "You cannot have the keys, " + name + ".";

}

function max(a, b){
	if (a>b){
		return a;
	}
	return b;
}

function min(a, b){
	if (a<b){
		return a;
	}
	return b;
}

function larger(str1, str2){
	if (str1.length>str2.length){
		return str1;
	}
	return str2;
}

function smaller(str1, str2){
	if (str1.length<str2.length){
		return str1;
	}
	return str2;
}


// MORE PRACTICE


function even(num){
	if (num%2 === 0){
		return true;
	}
	return false;
}

function odd(num){
	if (num%2 !== 0){
		return true;
	}
	return false;
}

function positive(num){
	if (num>0){
		return true;
	}else if {
		return "Not sure what the output should be";
	}
	return false;
}

function negative(num){
	if (num<0){
		return true;
	}else if {
		return "Not sure what the output should be";
	}
	return false;
}

function randInt(n){
	return Math.floor((n-1)*Math.random());
}

function guessMyNumber(num){
	if (num===randInt(6)){
		return 'You guessed my number!';
	}
	return  "Nope! That wasn't it!"
}

// ADVANCED


//	I’m tall when I’m young and I’m short when I’m old. What am I? 
//	Flower

//	In a one-story pink house, there was a pink person, a pink cat, a pink fish, a pink computer, a pink chair, a pink table, a pink telephone, a pink shower– everything was pink!What color were the stairs? 
//	one-story so no stairs

//	What is at the end of a rainbow 
//	w

//	You draw a line. Without touching it, how do you make the line longer? 
//	Shade

//	You walk across a bridge and you see a boat full of people yet there isn’t a single person on board. How is that possible? 
//	Photoshoped picture

//	If there are 3 apples and you take away 2, how many do you have? 
//	3

//	What do the numbers 11, 69, and 88 all have in common? 
//	two-digit numbers

//	I am an odd number. Take away one letter and I become even. What number am I? 
//	Seven

//	Using only addition, how do you add eight 8’s and get the number 1000? 
//	888 + 88 + 8 + 8 + 8

//	What never asks questions but is often answered?
//	The phone
