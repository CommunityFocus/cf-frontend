import TimerButton from "./TimerButton";
import { ButtonContainer } from "./TimerButtons.styled";

const TimerButtons = (props: { roomName: string }): JSX.Element => {
	const { roomName } = props;
	return (
		<ButtonContainer>
			<TimerButton roomName={roomName} value={1} />
			<TimerButton roomName={roomName} value={2} />
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
			<TimerButton roomName={roomName} value={60} />
		</ButtonContainer>
	);
};

export default TimerButtons;
