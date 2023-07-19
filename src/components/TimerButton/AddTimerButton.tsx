interface AddTimerButtonProps {
	setTimerMinuteButtons: React.Dispatch<React.SetStateAction<number[]>>;
}
const AddTimerButton = (props: AddTimerButtonProps): JSX.Element => {
	const { setTimerMinuteButtons } = props;

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const input = document.getElementById(
			"AddTimerInput"
		) as HTMLInputElement;
		// add timer to list of timers
		setTimerMinuteButtons((prev) => [...prev, parseInt(input.value)]);
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
