function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function (submittedUser) {
			return goodUsers.some(function (user) {
				return user.id === submittedUser.id;
			});
		});
	};
}

module.exports = checkUsersValid;