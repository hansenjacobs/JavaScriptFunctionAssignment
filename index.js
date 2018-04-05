"use strict";


function calculateGrossPay(form){

	let hoursWorked = Number(form.hoursWorked.value);
	let payRate = Number(form.payRate.value);
	let totalRegularPay;
	let totalOvertimePay;
	let standardWeeklyHours = 40;
	let outputHtml;
	let outputHtmlElementId = 'pay-details';

	console.log(totalRegularPay);

	//validate input
	if(validNumber(hoursWorked) && validNumber(payRate)){

		//calculate regular pay
		totalRegularPay = calculateRegularPay(hoursWorked, payRate, standardWeeklyHours);

		//calulate overtime pay
		if(hoursWorked > standardWeeklyHours){
			totalOvertimePay = calculateOvertimePay(hoursWorked, payRate, standardWeeklyHours);
		} else {
			totalOvertimePay = 0.00;
		}
	}

	//output pay details to HTML
	if(totalRegularPay !== undefined){
		outputHtml = 'Regular Pay $' + totalRegularPay.toFixed(2) + '<br>';
		outputHtml += 'Overtime Pay $' + totalOvertimePay.toFixed(2) + '<br>';
		outputHtml += '= = = = = = = = = = = =<br>';
		outputHtml += 'Total Gross Pay $' + (totalRegularPay + totalOvertimePay).toFixed(2);
	} else {
		outputHtml = 'Invalid Input Values: Check the pay details are all numbers and try again.'
	}

	updateHtmlElementTextById(outputHtmlElementId, outputHtml);
}

function updateHtmlElementTextById(elementId, text){
	document.getElementById(elementId).innerHTML = text;
}

function calculateRegularPay(hoursWorked, payRate, standardWeeklyHours){
	if(hoursWorked < standardWeeklyHours){
		return hoursWorked * payRate;
	} else {
		return (hoursWorked - standardWeeklyHours) * payRate;
	}
}

function calculateOvertimePay(hoursWorked, payRate, standardWeeklyHours){
	let overtimePayRate = payRate * 1.5;
	return (hoursWorked - standardWeeklyHours) * overtimePayRate;
}

function validNumber(num){

	if(typeof num === 'number' && num === num){
	//NaN is the only js value that is not equal to itself
	//http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html
		return true;
	} else {		
		return false;
	}
}