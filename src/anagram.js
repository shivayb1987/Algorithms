let str = "cats";
const size = str.length;

function anagram (newSize) {
	if (newSize === 1) {
		return;
	}
	for (let i=0; i<newSize; i++) {
		anagram(newSize - 1);
		if (newSize === 2) {
			displayWord();
		}
		rotate(newSize);
	}
}

function rotate (newSize) {
	let position = size - newSize;
	let sub = str.substring(position);
	sub = sub.substring(1) + sub.substring(0, 1);
	str = str.substring(0, position) + sub;
}

function displayWord () {
	console.log(str);
}

anagram(size);