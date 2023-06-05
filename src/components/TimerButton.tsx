const TimerButton = (props): JSX.Element => {
	const clickHandler = (value) => {
		console.log("value", value);
	};
	return (
		<button type="button" onClick={() => clickHandler(props.value)}>
			{props.value}
		</button>
	);
};
export default TimerButton;
