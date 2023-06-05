import socket from "./socket";

const TimerButton = (props): JSX.Element => {
const {roomName}=props
	const clickHandler = (value) => {
		console.log("value", value);
		socket.timeout(1000).emit(
			"startCountdown",
			{
				roomName,
				durationInSeconds: parseInt(value),
			},
			() => {
				// setIsLoading(false);
			}
		);
		socket.emit("timerRequest", { roomName });
	};
	return (
		<button type="button" onClick={() => clickHandler(props.value)}>
			{props.value}
		</button>
	);
};
export default TimerButton;
