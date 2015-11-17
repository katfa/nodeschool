module.exports = function arrayMap (arr, fn) {
	var results = [];
	arr.reduce(function (prev, current) {
		results.push(fn(current));
	}, null);
	return results;
}

/* OFFICIAL RESULTS

module.exports = function map(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn.call(thisArg, item, index, arr))
      return acc
    }, [])
  }

*/