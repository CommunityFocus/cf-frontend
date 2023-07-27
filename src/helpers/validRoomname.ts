const validRoomname = (input: string): string | false => {
	if (input.length < 1) {
		return "Room name must be at least 1 character long";
	}
	if (input.length > 100) {
		return "Room name must be less than 100 characters long";
	}

	// make sure there are no spaces at the beginning or end
	if (input.trim().length !== input.length) {
		return "Room name cannot start or end with a space";
	}

	// make sure there are no special characters but make sure some are allowed  - , _ , ( , )
	// allow - , _ , ( , )
	if (
		/[^a-zA-Z0-9-_()]/.test(input) ||
		/[\s]{2,}/.test(input) ||
		/[-_()]{2,}/.test(input)
	) {
		return "Room name cannot contain special characters";
	}

	return false;
};

export default validRoomname;
