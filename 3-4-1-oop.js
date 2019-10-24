// Stopped at extended stopwatch

// Basic Requirements

// A - 1 

function BankAccount(intial) {
	var bankAccount = {}

	bankAccount.balance = initial;

	bankAccount.withdraw = withdraw;
	bankAccount.deposit = deposit;

	return bankAccount
}

var withdraw = function(amount) {
	if (this.balance - amount >= 0) {
		this.balance = this.balance - amount;
		return "Here is your money: $" + amount ;
	}
	return "Insufficient fund";
}

var deposit = function(amount) {
	this.balance = this.balance + amount;
	return 'Your balance is: $' + this.balance;
}

// A - 2


function StopWatch() {

	var stopWatch = {}

	stopWatch.time = 0;
	stopWatch.varStop;

	stopWatch.stop = stop;
	stopWatch.start = start;
	stopWatch.reset = reset;


	return stopWatch


}

console.log(this.time)

/* var start = function(){
	this.varStop = setInterval(() => console.log('Elapsed time: ' + ++this.time + 's.'), 1000);
}*/

var tmpfun= function(time) {
    time = time + 1;
    console.log('Elapsed time: ' + time + 's.');
}

var start = function(){
	this.varStop = setInterval(tempfun, 1000, this.time);
}

var stop = function(){
	clearInterval(this.varStop);
}

var reset = function() {
	clearInterval(this.stop);
    this.time = 0;
}

var myStopWatch = StopWatch()


// MORE PRACTICE

// A - 0

function Toaster(){
	var toaster = {}

	toaster.toast = undefined;
	toaster.tmp = undefined;
	
	toaster.addToast = addToast
	toaster.eject = eject
	toaster.start = start
	toaster.stop = stop

	return toaster
}


var addToast = function(str){
	this.toast = str;
}

var eject = function(){
	if (this.toast !== undefined) {
		var tmp = this.toast
		this.toast = undefined;
		return tmp;
	} else {
		return "no toast in this toaster"
	}
}

var start = function() {

	if (this.toast !== undefined){
		this.toast = this.toast + ' (toasted)'
		this.tmp = setTimeout(function(){
		console.log('ding');
	},10000)
	} else {
		return "Toaster is empty, you need to fill it first"
	}
}

var stop = function(){
	clearTimeout(this.tmp)
}


// EXTENDED



