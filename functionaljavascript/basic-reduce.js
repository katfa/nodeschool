function countWords(inputWords) {
	var count = {};
	return inputWords.reduce(function (map, word) {
		map[word] = map[word] + 1 || 1;
		return map;
	}, count);

}

module.exports = countWords;