'use string';
var assert = require ('assert');
function compressString (str) {
	// let charCountObj = {};
	// let arr = [];
	// str.split("").forEach((char, i) => {
	// 	if (!!charCountObj[char]) {
	// 		charCountObj[char] = ++charCountObj[char];
	// 	} else {
	// 		!!i && arr.push(Object.assign({}, charCountObj));
	// 		charCountObj = {};
	// 		charCountObj[char] = 1;
	// 	}
	// });
	// arr.push(charCountObj)
	// return arr.reduce((compressed, obj) => {
	// 	let key = Object.keys(obj)[0];
	// 	compressed += key + obj[key];
	// 	return compressed;
	// }, "");
	return recursive(str);
}

function compress2 (str) {
	let count = 1;
	let testChar = str[0];
	let compressed = "";
	str.split("").slice(1).forEach(char => {
		//repeating character ? increase count
		if (char === testChar) {
			count++;
		//time to append the interim output and reset the count
		} else {
			compressed += testChar + count;
			testChar = char;
			count = 1;
		}
	});

	//for the last character
	compressed += testChar + count;

	return compressed;
}

function compress3 (str) {
    let ptr = 0;
	let outputStr = '';

	for (let  i = 0; i < str.length; i++) {
		if (str[i] != str[i+1]) {
			outputStr += str[i]+str.substring(ptr,i+1).length;
			ptr = i+1;
		}
	}
	return outputStr;
}

function recursive (str, count = 1, compressed = "") {
	//terminal condition
	if (str.length < 2) {
		return compressed + str[0] + count;
	}
	if (str[0] !== str[1]) {
		compressed += str[0] + count;
		count = 0;
	}
	return recursive(str.substring(1), count + 1, compressed);
}

assert.equal(compressString("aaaabbaaaababbbcccccccccccc"), "a4b2a4b1a1b3c12");
// console.log(compressString("aaaabbaaaababbbcccccccccccc"), "a4b2a4b1a1b3c12");