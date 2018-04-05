function calculateGrossPay(form){

	let hoursWorked = Number(form.hoursWorked.value);
	let payRate = Number(form.payRate.value);
	let grossPay;
	
	//if(hoursWorked !== NaN && payRate !== NaN){
	if(isNumber(hoursWorked) && isNumber(payRate)){
		grossPay = hoursWorked * payRate;
		if(hoursWorked > 40){
			grossPay = grossPay + ((hoursWorked - 40) * (1.5* payRate))
		}
		alert("Total Gross Pay $" + grossPay.toFixed(2));
		form.reset();
	} else {
		grossPay = NaN;
		alert("Invalid input provided, check the inputs are both numbers and try again.")
	}
	return grossPay;

}

function isNumber(num){
	debugger
	if(typeof num === 'number' && num === num){
	//NaN is the only js value that is not equal to itself
	//http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html
		return true;
	} else {		
		return false;
	}
}