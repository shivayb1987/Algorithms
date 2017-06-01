function overloadMethod (obj, name, func) {
	if (!obj._overloaded) {
		obj._overloaded = {};
	}
	if (!obj._overloaded[name]) {
		obj._overloaded[name] = {};
	}
	if (!obj._overloaded[name][func.length]) {
		obj._overloaded[name][func.length] = func;
	}

	
	obj[name] = (...args) => obj._overloaded[name][args.length].apply(this, args)
}

function Students () {
	overloadMethod(this, "find", function (name) {
		return name;
	});
	overloadMethod(this, "find", function (firstName, lastName) {
		return `${firstName} ${lastName}`;
	});
}

var students = new Students();

console.log(students.find("shiva"));
console.log(students.find("shiva", "kumar"));