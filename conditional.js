// Unary

// cold || warm
// french bulldog || boston terrier

// cold && raining
// hissing && growling


function rentalCar(name, age){
	if ((age>21)&&(name !== "Joe")){
		return "Have fun driving, " + name + "!";
	}
	return "You cannot have the keys, " + name + ".";

}

function scoreToGrade(score) { 
	if ((score <= 100) && (score >= 90)){
		return "A";
	}else if ((score < 90)&&(score >= 80)){
		return "B";
	}else if ((score < 80)&&(score >= 70)){
		return "C";
	}else if ((score < 70)&&(score >= 60)){
		return "D";
	}else if ((score < 60)&&(score >= 0)){
		return "F";
	} else {
		return "Invalid Grade";
	}

}

// MORE PRACTICE 

function whatToDoOutside(temp, cond){
	if ((temp<0) && (cond==="snowy")){
		return "The weather is ideal for: Snowboarding."
	}else if ((temp < 25) && (cond === "sunny")){
		return "The weather is ideal for: Baseball.";
	}else if ((temp < 40) && (cond === "sunny")){
		return "The weather is ideal for: Swimming.";
	}else if (temp > 40){
		return "Just stay home";
	}else{
		return "Figure Something Else";
	}

}


function randInt(n){
	return Math.floor((n-1)*Math.random());
}

function guessMyNumber(num){
	if(num>=0 && num <=5){
		if (num===randInt(6)){
		return 'You guessed my number!';
	}
	return  "Nope! That wasn't it!"
	}else {
		return "Out of bounds"
	}
}


function scoreToGrade(score) { 
	if ((score <= 100) && (score >= 90)){
		if(score> 95){
			return "A+";
		}else{	
			return "A-";
		}
	}else if ((score < 90)&&(score >= 80)){
		if(score> 85){
			return "B+";
		}else{	
			return "B-";
		}
	}else if ((score < 80)&&(score >= 70)){
		if(score> 75){
			return "C+";
		}else{	
			return "C-";
		}
	}else if ((score < 70)&&(score >= 60)){
		if(score> 65){
			return "D+";
		}else{	
			return "D-";
		}
	}else if ((score < 60)&&(score >= 0)){
		return "F";
	} else {
		return "Invalid Grade";
	}
}

// ADVANCED

function rentalCar(name, age, day){
	if ((age>=18)&&(name !== "Joe")){
		if(age>=21 || (age>=18 && (day==="Monday" || day ==="Tuesday" ))){
			return "Have fun driving, " + name + "!";
		}else{
			return "You cannot have the keys, " + name + ".";
		}
	}
	return "You cannot have the keys, " + name + ".";
}

function letterGrade(letter, score){
	if (score!==100){
		if (score%10>=5){
			letter+="+";
			return letter
		}
		else{
			letter+="-";
			return letter;
		}
	}
	letter+="+";
	return letter;
}

function scoreToGrade(score) { 
	if ((score <= 100) && (score >= 90)){
		var letter = "A"
		return letterGrade(letter, score);
	}else if ((score < 90)&&(score >= 80)){
		var letter = "B"
		return letterGrade(letter, score);
	}else if ((score < 80)&&(score >= 70)){
		var letter = "C"
		return letterGrade(letter, score);
	}else if ((score < 70)&&(score >= 60)){
		var letter = "D"
		return letterGrade(letter, score);
	}else if ((score < 60)&&(score >= 0)){
		return "F";
	} else {
		return "Invalid Grade";
	}
}


//	(a&&b) === !( !a || !b)
//	(a||b) === !( !a && !b)

//	90

//	36

//	10

//	15 
