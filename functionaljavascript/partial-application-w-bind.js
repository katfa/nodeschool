function logger(namespace) {
	return console.log.bind(null, namespace);
}

module.exports = logger;

/* OFFICIAL SOLUTION
	module.exports = function (namespace) {
		return console.log.bind(console, namespace);
	}
*/

