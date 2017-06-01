/*
	[{}()}]
*/
var assert = require('assert');
function Stack() {
	this.list = [];
	this.length = 0;
}

Stack.prototype = {
	push: function (value) {
		this.list.push(value);
		this.length++;
	},

	pop: function () {
		let value = this.list.pop();
		this.length--;
		return value;
	},

	peek: function () {
		return this.list[this.length -1];
	}
}

function isBalanced(str) {
	let stack = new Stack();
	let tempStack = new Stack();

	// Populate the stack
	let arr = str.split("").reverse();
	for (let i=0; i<arr.length; i++) {
		stack.push(arr[i]);
	}

	//save the first bracket
	tempStack.push(stack.pop())
	
	while (!!stack.peek()) {
		let value = stack.pop();
		if (tempStack.peek() === "(" && ")" === value 
			|| tempStack.peek() === "[" && "]" === value 
			|| tempStack.peek() === "{" && "}" === value) {
			//bracket is balanced so clear the tempStack
			tempStack.pop();
		} else {
			//save next bracket as well
			tempStack.push(value);
		}
	}

	if (!!tempStack.peek()) {
		// items are still there so unbalanced.
		return false;
	}

	//all brackets are balanced
	return true;
}

assert.ok(isBalanced("[]{}()"));
assert.ok(isBalanced("[{()}]"));
assert.ok(isBalanced("[]{()}"));
assert.ok(isBalanced("[{}()]"));
assert.ok(!isBalanced("["));
assert.ok(!isBalanced("[{}()"));
assert.ok(isBalanced("[()]"));
assert.ok(!isBalanced("[{}(]"));
assert.ok(isBalanced(""));
