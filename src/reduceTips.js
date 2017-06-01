export const reduceTips =  (x, y, total, predicate) => {
	let less = x < y ? x : y;
	let more = x > y ? x : y;
	if (total < less) {
		return less - total;
	}
	if (total < more) {
		return more - total
	}

	let balance = total - x;
	let output = Infinity;
	for (let i=2; balance > 0; i++) {
		if (balance < y) {
			let tempOut = y - (balance);
			tempOut < output && (output = tempOut);
		} else {
			let noOfYs = Math.floor(balance / y);
			let tempOut = balance - (noOfYs * y);
			tempOut < output && (output = tempOut);
		}
		balance = total - (x * i)
	}
	if (balance == 0) {
		return 0;
	}
	return output;
}

const getOutput = (x, y, total) => {
	let output1 = reduceTips(x, y, total);
	let output2 = reduceTips(y, x, total);
	if (output1 < output2) {
		return output1;
	}
	return output2;
}

console.log('(2, 5, 109) => ', getOutput(2, 5, 109));
console.log('(5, 7, 43) => ', getOutput(5, 7, 43));
console.log('(15, 19, 33) => ', getOutput(15, 19, 33));
console.log('(5, 6, 10) => ', getOutput(5, 6, 10));

export default getOutput;