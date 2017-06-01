export default function selectionsort(arr) {
	let min;
	for (let out=0; out<arr.lenght; out++) {
		min = out;
		for (let in=out+1; in<arr.length; in++) {
			if (arr[in] < arr[min]) {
				min = in;
			}
		}
		[arr[min], arr[out]] = [arr[out], arr[min]];
	}

	return arr;
}