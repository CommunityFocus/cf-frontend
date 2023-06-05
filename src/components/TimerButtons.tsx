import TimerButton from "./TimerButton";
const TimerButtons = (props) => {
	const { roomName } = props;
	return (
		<>
			<TimerButton roomName={roomName} value={5} />
			<TimerButton roomName={roomName} value={10} />
			<TimerButton roomName={roomName} value={15} />
			<TimerButton roomName={roomName} value={20} />
			<TimerButton roomName={roomName} value={25} />
			<TimerButton roomName={roomName} value={30} />
			<TimerButton roomName={roomName} value={35} />
			<TimerButton roomName={roomName} value={40} />
			<TimerButton roomName={roomName} value={45} />
			<TimerButton roomName={roomName} value={50} />
			<TimerButton roomName={roomName} value={55} />
		</>
	);
};

export default TimerButtons;
