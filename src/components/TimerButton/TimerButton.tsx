import socket from "../socket";

const TimerButton = (props: {
	roomName: string;
	value: number;
}): JSX.Element => {
	const { roomName, value } = props;

	const clickHandler = (seconds: number): void => {
		const minutes = seconds * 60;
		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: minutes,
		});
	};

	return (
		<button type="button" onClick={(): void => clickHandler(value)}>
			{value} min
		</button>
	);
};
export default TimerButton;
