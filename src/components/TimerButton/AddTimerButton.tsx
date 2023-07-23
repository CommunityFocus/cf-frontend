interface AddTimerButtonProps {
	timerMinuteButtons: number[];
	setTimerMinuteButtons: React.Dispatch<React.SetStateAction<number[]>>;
}
const AddTimerButton = (props: AddTimerButtonProps): JSX.Element => {
	const { setTimerMinuteButtons, timerMinuteButtons } = props;

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const input = document.getElementById(
			"AddTimerInput"
		) as HTMLInputElement;

		const newTimer = parseInt(input.value);
		// remove duplicates
		const ascendingTimers = [...timerMinuteButtons, newTimer]
			.sort((a, b) => a - b)
			.filter((value, index, array) => array.indexOf(value) === index);
		// add timer to list of timers
		setTimerMinuteButtons(ascendingTimers);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="number"
					id="AddTimerInput"
					min="1"
					max="1000"
					step="1"
					required
					placeholder="Enter number of minutes"
				/>
				<button type="submit">Add Timer</button>
			</form>
		</div>
	);
};

export default AddTimerButton;
