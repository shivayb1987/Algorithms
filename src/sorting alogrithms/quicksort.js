export default function quicksort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];

	let left = arr.slice(1).filter(value => value <= pivot);
	let right = arr.slice(1).filter(value => value > pivot);

	return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log("quicksort1 of [3,2,9,1,8]", quicksort([3,2,9,1,8]));