function getSchema(uri) {
	return uri.replace(/:.*/g, '').toLowerCase();

}

function getHostName(uri) {
	let domain = uri.split(/\//)[2];
	if (!domain.match(/:\d+/)) {
		domain += ":80"
	}
	return domain.toLowerCase();
}

function getHash(uri) {
	let [a, b, c, ...paths] = uri.split(/\//);
	return paths.join(" ");
}

function resolvePath(uri) {
	uri = uri.replace(/\/.\//, '/');
	if (!uri.match(/\.\./)) {
		return uri;
	}
	let left = uri.replace(/(.*)\/(.*\.\.)\/(.*)/, '$1');
	let right = uri.replace(/(.*)\/(.*\.\.)\/(.*)/, '$3');

	let resolved = left.replace(/(.*\/).*/, '$1');

	return resolved + right;
}

function requestParameters(uri) {
	return uri.split('?');

}

function sameQueryArgCount(params) {
	return params.split('&').reduce((count, param) => {
		let regExp = new RegExp(param.replace(/=.*/, ''), "g");
		if (params.match(regExp).length > 1) count++;
			return count;
	}, 0);
}

function checkHash (uri1, uri2) {
	if (getHash(uri1) === getHash(uri2)) {
		return true;
	}
	let [hash1, params1] = requestParameters(uri1);
	let [hash2, params2] = requestParameters(uri2);
	// console.log("hashes", hash1, hash2, params1, params2);

	if (!params1 || !params2) {
		return false;
	}
	if (getHash(hash1) === getHash(hash2)) {
		if (params1 === params2) {
			return true;
		} else {
			let sameQueryArgCount1 = sameQueryArgCount(params1);
			let sameQueryArgCount2 = sameQueryArgCount(params2);
			if (!!sameQueryArgCount1 || !!sameQueryArgCount2) {
				return false;
			}
			let params1Str = params1.split('&').sort().join(' ');
			let params2Str = params2.split('&').sort().join(' ');
			if (params1Str === params2Str) {
				return true;
			}
		}
	}
	return false;
}

function checkURIs(uri1, uri2) {
	uri1 = decodeURI(uri1);
	uri2 = decodeURI(uri2);

	uri1 = resolvePath(uri1);
	uri2 = resolvePath(uri2);

	if (uri1 === uri2) {
		return true;
	}
	if (getSchema(uri1) !== getSchema(uri2)) {
		return false;
	}
	if (getHostName(uri1) !== getHostName(uri2)) {
		return false;
	}
	if (!checkHash(uri1, uri2)) {
		return false;
	}
	//To-do In-URI basic auth
	return true;
}

console.log(checkURIs('http://abc.com:80/~smith/home.html', 'http://ABC.com/%7Esmith/home.html')) // result: true
console.log(checkURIs('http://abc.com/drill/down/foo.html', 'http://abc.com/drill/further/../down/./foo.html')) // result: true
console.log(checkURIs('http://abc.com/foo.html?a=1&b=2', 'http://abc.com/foo.html?b=2&a=1')) // result: true
console.log(checkURIs('http://abc.com/foo.html?a=1&b=2&a=3', 'http://abc.com/foo.html?a=3&a=1&b=2')) // result: false







