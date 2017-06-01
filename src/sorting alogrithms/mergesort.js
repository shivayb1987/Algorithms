export function merge (arr, low, middle, high) {
	let queue1 = arr.slice(low, middle + 1);
	let queue2 = arr.slice(middle + 1);

	let i = low;
	if (!!queue1.length && !!queue2.length) {
		if (queue1[0] <= queue2[0]) {
			arr[i] = queue1.shift();
		} else {
			arr[i] = queue2.shift();
		}
		i++;
	}
	arr.splice(i, queue1.length, ...queue1); 
	arr.splice(i + queue1.length, queue2.length, ...queue2); 
}

export default mergesort(arr, low, high) {
	if (low < high) {
		let middle = Math.floor((low + high) / 2);
		mergesort(arr, low, middle)
		mergesort(arr, middle + 1, high)
		merge(arr, low, middle, high)
	}

}

let arr1 = [3,2,9,1,8,5,6,7];
console.log(`before sort ${arr1}`)
console.log("merge sorting...")
mergesort(arr1, 0, arr1.length);
console.log(`after sort ${arr1}`);