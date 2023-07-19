export default (timeValue: number): number => {
	// Based on timeValue, return the appropriate button size
	// return should be between 30 to 70 and should be a whole number
	// return 25;
	const max = 60;
	const min = 30;

	// take timeValue and calculate the button size between 30 and 70
	// if timeValue is 0, return 30
	// if timeValue is 60 and above, return 70

	if (timeValue === 0) {
		return min;
	}
	if (timeValue >= 60) {
		return max;
	}

	return min + Math.floor((timeValue * 2) / 3);
};
