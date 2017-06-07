/*


The bomber algorithm doesn't like 3 or more consecutive characters in a given string to be same.


For Example: If the given string is "adbcccbbd" the bomber algo will first bomb "ccc" and then "bbb", 

so the final output string will become "add". 
The bomber algo will destroy the characters only if there are 3 
or more continuous occurrence of same characters in the string.

*/



var assert = require('assert');

function bomber(str) {
	if (str.length < 3) {
		return str;
	}
	let char = str.charAt(0);
	let count = 1;
	let prevCount = 0;
	let bombed = str;
	
	for (let i=1; i<str.length; i++) {
		if (char === str.charAt(i)) {
			count++;
		} else {
			char = str.charAt(i);
			if (count >= 3) {
				bombed = str.substring(prevCount, i-count) + str.substring(i);
				prevCount = count;
				bombed = bomber(bombed, recursive);
			}
			if (i === str.length - 1) {
				return bombed;
			}
			count = 1;
		}

		if (count >= 3) {
			bombed = bombed.substring(0, str.length-count);
		}
	}
	return bombed;
}

assert.equal(bomber("aaabcccdee"), "bdee");
assert.equal(bomber("abcdeeeeddcbfgfaaaa"), "abccbfgf");