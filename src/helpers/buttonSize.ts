interface ButtonSizeProps {
	currentButton: number;
	buttonList: number[];
}
export default ({ currentButton, buttonList }: ButtonSizeProps): number => {
	const sortedButtonList = buttonList.sort((a: number, b: number) => a - b);

	const max = 60;
	const min = 30;

	if (currentButton === 0 || currentButton === sortedButtonList[0]) {
		return min;
	}

	if (currentButton >= sortedButtonList[sortedButtonList.length - 1]) {
		return max;
	}

	const currentButtonIndex = sortedButtonList.indexOf(currentButton);

	return (
		min +
		Math.floor(
			((currentButtonIndex + 1) * (max - min)) /
				(sortedButtonList.length + 1)
		)
	);
};
