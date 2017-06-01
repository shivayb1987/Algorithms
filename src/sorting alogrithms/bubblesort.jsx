export default function bubblesort(arr) {
	for (let i=0; i<arr.length; i++) {
		for (let j=i+1; j<arr.length; j++) {
			if (arr[j] < arr[i]) {
				[arr[j], arr[i]] = [arr[i], arr[j]];
			}
		}
	}
	return arr;
}

console.log("bubblesort of [3,2,9,1,8]", bubblesort([3,2,9,1,8]));