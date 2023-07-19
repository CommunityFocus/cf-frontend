import TimerButton from "./TimerButton";
import { ButtonContainer } from "./TimerButtons.styled";

interface TimerButtonsProps {
	roomName: string;
	timerMinuteButtons: number[];
}

const TimerButtons = (props: TimerButtonsProps): JSX.Element => {
	const { roomName, timerMinuteButtons } = props;
	return (
		<ButtonContainer>
			{timerMinuteButtons.map((value) => (
				<TimerButton roomName={roomName} value={value} />
			))}
		</ButtonContainer>
	);
};

export default TimerButtons;
