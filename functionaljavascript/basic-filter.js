function getShortMessages(messages) {
	return messages.filter(function (m) {
		return m.message.length < 50;
	}).map(function (n) {
		return n.message;
	});
}

module.exports = getShortMessages;