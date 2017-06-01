export default function insertionsort(arr) {
	for (let i=1; i<arr.length; i++) {
		let j = i;
		while (arr[j] < arr[j-1]) {
			[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
			j--;
		}
	}
	return arr;
}

console.log("insertionsort of [3,2,9,1,8]", insertionsort([3,2,9,1,8]));

// 2, 3, 9, 1, 8

// 2, 3, 1, 9, 8

// 2, 3, 1, 8, 9