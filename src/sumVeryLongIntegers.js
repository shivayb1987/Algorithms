var assert = require('assert');

//returns two strings
function sum2Strings(a, b) {
  	return parseInt(a) + parseInt(b);
}


function sumStrings (a, b) {
	let carryOver = 0;
	if (a.length < 16 && b.length < 16) {
		//less than 16 digits, directly return sum;
		let sum = parseInt(carryOver) +  sum2Strings(a, b);
		return sum;
	}
	let str1 = a;
	if (a.length >= 16) {
		str1 = a.substring(a.length - 15);
	}

	let str2 = b;
	if (b.length >= 16) {
		str2 = b.substring(b.length - 15);
	}

	let sum1 = "" + sum2Strings(str1, str2);
	// taking into acccount the carryover.
	if (sum1.length > 15) {
		carryOver = 1;
		sum1 = sum1.substring(1);
	} else {
		carryOver = 0;
	}
	str1 = "" + sum2Strings(carryOver, a.substring(a.length - 30, a.length - 15));
	str2 = "" + b.substring(a.length - 30, a.length - 15);
	//one of the operands is empty
	if (!str1.length || !str2.length) {
		return str1 + str2 + "" + sum1;
	}
	return  sumStrings(str1, str2) + "" + sum1;
}


assert.equal(sumStrings('00103', '08567'), '8670');
assert.equal(sumStrings('999999999999999', '999999999999999'), "1999999999999998");
assert.equal(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'), "131151201344081895336534324866");