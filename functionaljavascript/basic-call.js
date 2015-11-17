function duckCount () {
	/* with loop
	var count = 0;
	if (arguments.length > 0) {
		for(o in arguments) {
			if (Object.prototype.hasOwnProperty.call(arguments[o],'quack')) {
				++count;
			}
		}
	}
	return count;
	*/

	// without loop

	return Array.prototype.slice.call(arguments)
							.filter(function (obj) {
								return Object.prototype.hasOwnProperty.call(obj, 'quack')
							}).length;

}

module.exports = duckCount;