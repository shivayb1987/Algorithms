/*
suppose you want your knapsack to weigh exactly 20 pounds, 
and you have five items, with weights of 11, 8, 7, 6, and 5 pounds.
*/

function knapsack (items, target) {
	if (items.length <= 1) {
		return 0;
	}

	// if (items[0] < target) {
	// 	return;
	// }
	// let sum = items.reduce((total, item) => total + item, 0)
	for (let i=0; i<items.length; i++) {
		// console.log(target);
		if (items[i] === target) {
			console.log(`${items[i]} make up the ${target}`);
		}
	}

	// console.log(items, target);
	console.log(items[0]);
	console.log("=======");
	knapsack(items.slice(1), target-items[0]);
}

function run(items, target) {
	for (let i=0; i<items.length; i++) {
		knapsack(items.slice(i), target);
	}
}

run ([11, 8, 7, 6, 5], 13);