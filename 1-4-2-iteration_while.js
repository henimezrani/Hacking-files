function sum(n){
	var count = 0 ;
	while ( n > 0 ){
		count = n + count;
		n--;
	}
	return count;
}

function factorial(n) { 
	var count = 1;
	while ( n > 0 ){
		count = n * count;
		n--;
	}
	return count;
} 

function repeatString(str, count){
	var str2 = "";
	while (count>0){
		str2+=str;
		count--
	}
	return str2
}

function fib(n){
	var var1 =1;
	var var2 =1;
	while (n>1){
		var tmp = var1;
		var1 = var2;
		var2 = tmp + var2;
		n--;
	} 
	return var2
}

function counting(n){
	var str="";
	var count = 0;
	while (n>1){
		count++
		str+=count + ', ';
		n--;
	}
	count++;
	str+=count;
	return str;
}

function meetNgreet(n){
	var count1 =1
	var str = ""
	while (count1 <= n){
		str="Welcome "+count1
		if (count1 !== 1){
			str+=", meet "
		}
		var count2 = 1;
		while(count2<count1){
			if (count2 === (count1 - 1) && count2 !==1){
				str+="and " + count2
			}else{
				str+= count2 + ", "
			}
			
			count2++;
		}
		console.log(str)
		count1++;
	}	
}

function reverseStr(str){
	var result = "";
	var count = str.length-1;
	while (count>=0){
		result+=str.slice(count, count+1)
		count--
	}
	return result;
}

function generatePrime(n){
	
}

